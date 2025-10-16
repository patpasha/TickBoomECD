from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional
import uuid


class WaitlistEntry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    created_at: datetime = Field(default_factory=datetime.utcnow)
    source: str = "landing_page"
    
    class Config:
        json_schema_extra = {
            "example": {
                "email": "user@example.com",
                "source": "landing_page"
            }
        }


class WaitlistCreate(BaseModel):
    email: EmailStr
    
    class Config:
        json_schema_extra = {
            "example": {
                "email": "user@example.com"
            }
        }
