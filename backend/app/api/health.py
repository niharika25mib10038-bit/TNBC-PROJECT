from fastapi import APIRouter
from app.config import settings

router = APIRouter()

@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "version": settings.APP_VERSION,
        "mode": "demo" if settings.DEMO_MODE else "research",
        "uptime": "OK"
    }
