from fastapi import APIRouter
from app.schemas.analysis import SystemStatus
from ml.model import get_model
import torch

router = APIRouter()

@router.get("/status", response_model=SystemStatus)
def get_system_status():
    _, loaded, _ = get_model()
    
    gpu_status = "Available (CUDA)" if torch.cuda.is_available() else "Not Available"
    
    return SystemStatus(
        backend="online",
        model="loaded" if loaded else "demo",
        gpu=gpu_status,
        gradcam="available",
        openslide="not_installed", # Placeholder for demonstration
        database="connected"
    )

@router.post("/demo/reset")
def reset_demo():
    # In a real app we might clean up temp files here
    return {"status": "Demo state reset"}
