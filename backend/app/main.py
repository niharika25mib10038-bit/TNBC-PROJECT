from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from contextlib import asynccontextmanager
from app.config import settings
from app.database.base import init_db
import os

from app.api.health import router as health_router
from app.api.analysis import router as analysis_router
from app.api.model import router as model_router
from app.api.reference import router as reference_router
from app.api.system import router as system_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    init_db()
    yield

    # Shutdown
    pass


app = FastAPI(
    title="TNBC-Insight AI",
    description="AI-based histopathology analysis of Triple-Negative Breast Cancer",
    version=settings.APP_VERSION,
    lifespan=lifespan
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

app.mount(
    "/uploads",
    StaticFiles(directory=settings.UPLOAD_DIR),
    name="uploads"
)


app.include_router(health_router, prefix="/api")
app.include_router(analysis_router, prefix="/api")
app.include_router(model_router, prefix="/api/model")
app.include_router(reference_router, prefix="/api")
app.include_router(system_router, prefix="/api/system")


@app.get("/")
def read_root():
    return RedirectResponse(url="/docs")
