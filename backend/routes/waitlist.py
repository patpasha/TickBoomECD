from fastapi import APIRouter, HTTPException, status, Request
from motor.motor_asyncio import AsyncIOMotorClient
from models.waitlist import WaitlistEntry, WaitlistCreate
import os
import logging
from security import limiter, validate_email_strict, sanitize_input

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/waitlist", tags=["waitlist"])

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
if not mongo_url:
    raise ValueError("MONGO_URL environment variable is not set")

client = AsyncIOMotorClient(mongo_url)

# Get database name from environment, no fallback
db_name = os.environ.get('DB_NAME')
if not db_name:
    raise ValueError("DB_NAME environment variable is not set")

db = client[db_name]


@router.post("/subscribe", response_model=WaitlistEntry, status_code=status.HTTP_201_CREATED)
@limiter.limit("3/minute")  # Max 3 subscriptions per minute per IP
async def subscribe_to_waitlist(request: Request, data: WaitlistCreate):
    """
    Subscribe an email to the waitlist
    Rate limited to prevent spam: 3 requests per minute per IP
    """
    try:
        # Strict email validation
        if not validate_email_strict(data.email):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid email address format"
            )
        
        # Normalize email (lowercase)
        email = data.email.lower().strip()
        
        # Check if email already exists
        existing_entry = await db.waitlist.find_one({"email": email})
        
        if existing_entry:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="This email is already on the waitlist"
            )
        
        # Create new entry
        waitlist_entry = WaitlistEntry(email=email)
        
        # Save to database
        await db.waitlist.insert_one(waitlist_entry.dict())
        
        logger.info(f"New waitlist subscription: {email}")
        
        return waitlist_entry
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error subscribing to waitlist: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to subscribe to waitlist"
        )


@router.get("/count")
@limiter.limit("10/minute")  # Max 10 requests per minute per IP
async def get_waitlist_count(request: Request):
    """
    Get the total number of waitlist subscribers
    Rate limited: 10 requests per minute per IP
    """
    try:
        count = await db.waitlist.count_documents({})
        return {"count": count}
    except Exception as e:
        logger.error(f"Error getting waitlist count: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to get waitlist count"
        )


@router.get("/all")
@limiter.limit("5/minute")
async def get_all_subscribers(request: Request, limit: int = 100, skip: int = 0):
    """
    Get all waitlist subscribers with pagination
    
    Args:
        limit: Maximum number of subscribers to return (default: 100, max: 500)
        skip: Number of subscribers to skip (default: 0)
    """
    # Enforce maximum limit
    limit = min(limit, 500)
    
    try:
        # Get total count
        total = await db.waitlist.count_documents({})
        
        # Get paginated subscribers
        subscribers = await db.waitlist.find().sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        
        return {
            "total": total,
            "limit": limit,
            "skip": skip,
            "count": len(subscribers),
            "subscribers": subscribers
        }
    except Exception as e:
        logger.error(f"Error fetching subscribers: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch subscribers"
        )


@router.get("/export-csv")
@limiter.limit("2/minute")  # Max 2 exports per minute per IP
async def export_subscribers_csv(request: Request, limit: int = 1000):
    """
    Export subscribers as CSV with streaming to prevent memory issues
    Rate limited: 2 requests per minute per IP (admin endpoint)
    
    Args:
        limit: Maximum number of subscribers to export (default: 1000, max: 5000)
    """
    try:
        from fastapi.responses import StreamingResponse
        import io
        import csv
        
        # Enforce maximum limit
        limit = min(limit, 5000)
        
        async def generate_csv():
            # Create CSV header
            output = io.StringIO()
            writer = csv.writer(output)
            writer.writerow(['Email', 'Date', 'Source'])
            yield output.getvalue()
            output.truncate(0)
            output.seek(0)
            
            # Stream data row by row using cursor
            cursor = db.waitlist.find().sort("created_at", -1).limit(limit)
            async for sub in cursor:
                writer.writerow([
                    sub.get("email"),
                    sub.get("created_at").strftime("%Y-%m-%d %H:%M:%S") if sub.get("created_at") else "",
                    sub.get("source", "landing_page")
                ])
                yield output.getvalue()
                output.truncate(0)
                output.seek(0)
        
        return StreamingResponse(
            generate_csv(),
            media_type="text/csv",
            headers={"Content-Disposition": "attachment; filename=waitlist_subscribers.csv"}
        )
    except Exception as e:
        logger.error(f"Error exporting CSV: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to export CSV"
        )
