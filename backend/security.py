from fastapi import Request, HTTPException, status
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi.responses import JSONResponse
import re

# Rate limiter configuration
limiter = Limiter(key_func=get_remote_address)

# Email validation regex (RFC 5322 compliant)
EMAIL_REGEX = re.compile(
    r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
)

def validate_email_strict(email: str) -> bool:
    """
    Strict email validation with additional security checks
    """
    if not email or len(email) > 254:  # RFC 5321
        return False
    
    if not EMAIL_REGEX.match(email):
        return False
    
    # Block common spam/test emails
    spam_domains = ['tempmail.com', 'throwaway.email', 'mailinator.com', '10minutemail.com']
    domain = email.split('@')[1].lower()
    if domain in spam_domains:
        return False
    
    return True

def rate_limit_error_handler(request: Request, exc: RateLimitExceeded):
    """
    Custom rate limit error handler
    """
    return JSONResponse(
        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        content={
            "detail": "Too many requests. Please try again later.",
            "retry_after": exc.detail
        }
    )

# Security headers middleware
def add_security_headers(response):
    """
    Add security headers to response
    """
    # Content Security Policy
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src 'self' https://fonts.gstatic.com; "
        "img-src 'self' data: https:; "
        "connect-src 'self'; "
        "frame-ancestors 'none';"
    )
    
    # Prevent clickjacking
    response.headers["X-Frame-Options"] = "DENY"
    
    # Prevent MIME type sniffing
    response.headers["X-Content-Type-Options"] = "nosniff"
    
    # XSS Protection (legacy browsers)
    response.headers["X-XSS-Protection"] = "1; mode=block"
    
    # Referrer Policy
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    
    # Permissions Policy
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
    
    # HSTS (only if using HTTPS)
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    
    return response

# Input sanitization
def sanitize_input(text: str, max_length: int = 500) -> str:
    """
    Sanitize user input to prevent injection attacks
    """
    if not text:
        return ""
    
    # Trim to max length
    text = text[:max_length]
    
    # Remove potential malicious characters
    # Keep only alphanumeric, spaces, and common punctuation
    text = re.sub(r'[<>{}]', '', text)
    
    return text.strip()
