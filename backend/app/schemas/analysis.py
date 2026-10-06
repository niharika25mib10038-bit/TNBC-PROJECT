from pydantic import BaseModel
from typing import Dict, Optional, List, Any
from datetime import datetime

class AnalysisCreate(BaseModel):
    filename: str
    original_filename: str
    file_size: int
    image_width: int
    image_height: int
    predicted_subtype: str
    confidence: float
    probabilities: str
    model_name: str
    mode: str
    inference_time_ms: float
    preprocessing_status: str
    gradcam_path: Optional[str] = None
    notes: Optional[str] = None

class AnalysisResponse(AnalysisCreate):
    id: str
    created_at: datetime
    
    class Config:
        from_attributes = True

class AnalysisListResponse(BaseModel):
    items: List[AnalysisResponse]
    total: int

class PredictionResult(BaseModel):
    predicted_subtype: str
    confidence: float
    probabilities: Dict[str, float]
    model: str
    mode: str
    gradcam_available: bool
    gradcam_url: Optional[str] = None

class PreprocessingResult(BaseModel):
    steps: Dict[str, Any]
    status: str

class AnalysisFullResponse(BaseModel):
    id: str
    prediction: PredictionResult
    preprocessing: PreprocessingResult
    original_image_url: str
    preprocessed_image_url: Optional[str] = None
    gradcam_url: Optional[str] = None
    notes: Optional[str] = None

class SubtypeInfo(BaseModel):
    name: str
    code: str
    description: str
    characteristics: List[str]
    pathways: List[str]
    treatment_associations: List[str]
    color: str

class TrialInfo(BaseModel):
    trial_name: str
    clinical_setting: str
    treatment: str
    population: str
    key_outcome: str
    safety_signals: List[str]
    significance: str

class ModelStatus(BaseModel):
    model_loaded: bool
    model_name: str
    mode: str
    device: str
    num_parameters: Optional[int] = None

class SystemStatus(BaseModel):
    backend: str
    model: str
    gpu: str
    gradcam: str
    openslide: str
    database: str

class ModelMetrics(BaseModel):
    accuracy: float
    precision: float
    recall: float
    f1: float
    confusion_matrix: List[List[int]]

class TrainingConfig(BaseModel):
    model_name: str
    epochs: int
    batch_size: int
    lr: float
    train_split: float
    val_split: float
    test_split: float
    data_dir: str
    output_dir: str

class TrainingStatus(BaseModel):
    status: str
    progress: float
    current_epoch: int
    total_epochs: int
    loss: Optional[float] = None
