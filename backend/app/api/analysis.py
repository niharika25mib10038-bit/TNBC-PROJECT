from fastapi import APIRouter, UploadFile, File, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.database.base import get_db
from app.schemas.analysis import AnalysisFullResponse, PredictionResult, AnalysisResponse, AnalysisListResponse
from app.services.analysis_service import run_full_analysis, get_analyses, get_analysis, delete_analysis
import base64
from ml.preprocessing import full_preprocess
from ml.inference import run_inference
from ml.gradcam import generate_demo_gradcam, heatmap_to_base64
import numpy as np
import cv2

router = APIRouter()

@router.post("/analyze", response_model=AnalysisFullResponse)
async def analyze_image(file: UploadFile = File(...), db: Session = Depends(get_db)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    contents = await file.read()
    result = run_full_analysis(contents, file.filename, db)
    return result

@router.post("/preprocess")
async def preprocess_image(file: UploadFile = File(...)):
    contents = await file.read()
    result = full_preprocess(contents)
    
    # encode to base64
    _, buffer = cv2.imencode('.jpg', result['normalized'])
    img_base64 = base64.b64encode(buffer).decode('utf-8')
    
    return {
        "preprocessed_image": img_base64,
        "status": result['preprocessing_steps']
    }

@router.post("/predict", response_model=PredictionResult)
async def predict_image(file: UploadFile = File(...)):
    contents = await file.read()
    result = run_inference(contents, file.filename)
    
    return PredictionResult(
        predicted_subtype=result['predicted_subtype'],
        confidence=result['confidence'],
        probabilities=result['probabilities'],
        model=result['model_name'],
        mode=result['mode'],
        gradcam_available=result['gradcam_heatmap'] is not None,
        gradcam_url=result['gradcam_overlay']
    )

@router.post("/gradcam")
async def generate_gradcam(file: UploadFile = File(...)):
    contents = await file.read()
    # Decode image for demo gradcam
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    heatmap = generate_demo_gradcam(img)
    base64_heatmap = heatmap_to_base64(heatmap)
    
    return {"heatmap": base64_heatmap}

@router.get("/analyses", response_model=AnalysisListResponse)
def list_analyses(
    skip: int = 0,
    limit: int = 10,
    subtype: str = None,
    db: Session = Depends(get_db)
):
    items, total = get_analyses(db, skip, limit, subtype)
    return AnalysisListResponse(items=items, total=total)

@router.get("/analyses/{analysis_id}", response_model=AnalysisResponse)
def get_single_analysis(analysis_id: str, db: Session = Depends(get_db)):
    item = get_analysis(db, analysis_id)
    if not item:
        raise HTTPException(status_code=404, detail="Analysis not found")
    return item

@router.delete("/analyses/{analysis_id}")
def delete_single_analysis(analysis_id: str, db: Session = Depends(get_db)):
    success = delete_analysis(db, analysis_id)
    if not success:
        raise HTTPException(status_code=404, detail="Analysis not found")
    return {"status": "deleted"}
