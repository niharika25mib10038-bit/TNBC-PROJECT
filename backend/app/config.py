import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MODEL_PATH: str = os.getenv("MODEL_PATH", "models/resnet50_tnbc.pth")
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./tnbc_insight.db")
    UPLOAD_DIR: str = os.getenv("UPLOAD_DIR", "uploads")
    MAX_FILE_SIZE: int = int(os.getenv("MAX_FILE_SIZE", 50 * 1024 * 1024)) # 50MB
    DEMO_MODE: bool = not os.path.exists(os.getenv("MODEL_PATH", "models/resnet50_tnbc.pth"))
    CORS_ORIGINS: list[str] = ["*"]
    APP_VERSION: str = "1.0.0"

    class Config:
        env_file = ".env"

settings = Settings()
