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
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'tickboom')]


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
async def get_waitlist_count():
    """
    Get the total number of waitlist subscribers
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
async def get_all_subscribers():
    """
    Get all waitlist subscribers (for admin use)
    Returns list of all emails with timestamps
    """
    try:
        subscribers = await db.waitlist.find().sort("created_at", -1).to_list(10000)
        
        # Format response
        result = []
        for sub in subscribers:
            result.append({
                "email": sub.get("email"),
                "created_at": sub.get("created_at"),
                "source": sub.get("source", "landing_page")
            })
        
        return {
            "total": len(result),
            "subscribers": result
        }
    except Exception as e:
        logger.error(f"Error getting subscribers: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to get subscribers"
        )


@router.get("/export-csv")
async def export_subscribers_csv():
    """
    Export all subscribers as CSV
    """
    try:
        from fastapi.responses import StreamingResponse
        import io
        import csv
        
        subscribers = await db.waitlist.find().sort("created_at", -1).to_list(10000)
        
        # Create CSV in memory
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Header
        writer.writerow(['Email', 'Date', 'Source'])
        
        # Data
        for sub in subscribers:
            writer.writerow([
                sub.get("email"),
                sub.get("created_at").strftime("%Y-%m-%d %H:%M:%S") if sub.get("created_at") else "",
                sub.get("source", "landing_page")
            ])
        
        output.seek(0)
        
        return StreamingResponse(
            iter([output.getvalue()]),
            media_type="text/csv",
            headers={"Content-Disposition": "attachment; filename=waitlist_subscribers.csv"}
        )
    except Exception as e:
        logger.error(f"Error exporting CSV: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to export CSV"
        )
