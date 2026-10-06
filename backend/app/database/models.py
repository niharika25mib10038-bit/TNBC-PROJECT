import uuid
from datetime import datetime
from sqlalchemy import Column, String, Float, DateTime, Integer, Text
from app.database.base import Base

class Analysis(Base):
    __tablename__ = "analyses"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    created_at = Column(DateTime, default=datetime.utcnow)
    filename = Column(String, index=True)
    original_filename = Column(String)
    file_size = Column(Integer)
    image_width = Column(Integer)
    image_height = Column(Integer)
    predicted_subtype = Column(String)
    confidence = Column(Float)
    probabilities = Column(Text) # JSON string
    model_name = Column(String)
    mode = Column(String) # 'demo' or 'research'
    inference_time_ms = Column(Float)
    preprocessing_status = Column(Text) # JSON string
    gradcam_path = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
