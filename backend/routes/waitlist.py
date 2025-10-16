from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from models.waitlist import WaitlistEntry, WaitlistCreate
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/waitlist", tags=["waitlist"])

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'tickboom')]


@router.post("/subscribe", response_model=WaitlistEntry, status_code=status.HTTP_201_CREATED)
async def subscribe_to_waitlist(data: WaitlistCreate):
    """
    Subscribe an email to the waitlist
    """
    try:
        # Check if email already exists
        existing_entry = await db.waitlist.find_one({"email": data.email})
        
        if existing_entry:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="This email is already on the waitlist"
            )
        
        # Create new entry
        waitlist_entry = WaitlistEntry(email=data.email)
        
        # Save to database
        await db.waitlist.insert_one(waitlist_entry.dict())
        
        logger.info(f"New waitlist subscription: {data.email}")
        
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
