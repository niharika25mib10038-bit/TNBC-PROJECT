from fastapi import APIRouter
from app.schemas.analysis import ModelStatus, ModelMetrics
from ml.model import get_model
from ml.evaluation import load_metrics

router = APIRouter()

@router.get("/status", response_model=ModelStatus)
def model_status():
    model, loaded, device = get_model()
    return ModelStatus(
        model_loaded=loaded,
        model_name="ResNet50TNBC" if loaded else "DemoModel",
        mode="research" if loaded else "demo",
        device=device,
        num_parameters=sum(p.numel() for p in model.parameters()) if loaded else 0
    )

@router.get("/metrics")
def get_metrics():
    metrics = load_metrics()
    if metrics is None:
        return {"status": "not_evaluated"}
    return metrics
