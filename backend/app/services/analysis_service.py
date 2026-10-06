from sqlalchemy.orm import Session
from app.database.models import Analysis
from ml.inference import run_inference
from ml.preprocessing import full_preprocess
from app.schemas.analysis import (
    AnalysisFullResponse,
    PredictionResult,
    PreprocessingResult
)
import json
import uuid
import base64
import cv2


def run_full_analysis(
    image_bytes: bytes,
    filename: str,
    db: Session
) -> AnalysisFullResponse:

    # ---------------------------------------------------------
    # 1. PREPROCESS IMAGE
    # ---------------------------------------------------------
    pre_result = full_preprocess(image_bytes)

    # ---------------------------------------------------------
    # 2. RUN PREDICTION
    # ---------------------------------------------------------
    inf_result = run_inference(
        image_bytes,
        filename
    )

    # ---------------------------------------------------------
    # 3. SAVE ANALYSIS TO DATABASE
    # ---------------------------------------------------------
    analysis = Analysis(
        id=str(uuid.uuid4()),
        filename=filename,
        original_filename=filename,
        file_size=len(image_bytes),

        image_width=pre_result['original'].shape[1],
        image_height=pre_result['original'].shape[0],

        predicted_subtype=inf_result['predicted_subtype'],
        confidence=inf_result['confidence'],

        probabilities=json.dumps(
            inf_result['probabilities']
        ),

        model_name=inf_result['model_name'],
        mode=inf_result['mode'],

        inference_time_ms=inf_result['inference_time_ms'],

        preprocessing_status=json.dumps(
            pre_result['preprocessing_steps']
        ),

        # Grad-CAM is returned directly to the frontend,
        # so we don't need to save a file here.
        gradcam_path=None
    )

    db.add(analysis)
    db.commit()
    db.refresh(analysis)

    # ---------------------------------------------------------
    # 4. ENCODE ORIGINAL IMAGE
    # ---------------------------------------------------------
    _, buffer_orig = cv2.imencode(
        '.jpg',
        pre_result['original']
    )

    orig_b64 = base64.b64encode(
        buffer_orig
    ).decode('utf-8')

    # ---------------------------------------------------------
    # 5. ENCODE PREPROCESSED IMAGE
    # ---------------------------------------------------------
    _, buffer_pre = cv2.imencode(
        '.jpg',
        pre_result['normalized']
    )

    pre_b64 = base64.b64encode(
        buffer_pre
    ).decode('utf-8')

    # ---------------------------------------------------------
    # 6. FORMAT PREPROCESSING STEPS
    # ---------------------------------------------------------
    preprocessing_steps = pre_result['preprocessing_steps']

    # The preprocessing function currently returns a list.
    # The API schema expects a dictionary.
    if isinstance(preprocessing_steps, list):
        preprocessing_steps = {
            str(index + 1): step
            for index, step in enumerate(preprocessing_steps)
        }

    # ---------------------------------------------------------
    # 7. RETURN COMPLETE RESPONSE
    # ---------------------------------------------------------
    return AnalysisFullResponse(
        id=analysis.id,

        prediction=PredictionResult(
            predicted_subtype=inf_result['predicted_subtype'],

            confidence=inf_result['confidence'],

            probabilities=inf_result['probabilities'],

            model=inf_result['model_name'],

            mode=inf_result['mode'],

            gradcam_available=(
                inf_result['gradcam_heatmap'] is not None
            ),

            gradcam_url=inf_result['gradcam_overlay']
        ),

        preprocessing=PreprocessingResult(
            steps=preprocessing_steps,
            status="completed"
        ),

        original_image_url=(
            f"data:image/jpeg;base64,{orig_b64}"
        ),

        preprocessed_image_url=(
            f"data:image/jpeg;base64,{pre_b64}"
        ),

        gradcam_url=(
            f"data:image/jpeg;base64,"
            f"{inf_result['gradcam_overlay']}"
            if inf_result['gradcam_overlay']
            else None
        )
    )


def save_analysis(
    db: Session,
    result: dict
) -> Analysis:
    # Integrated into run_full_analysis for simplicity
    pass


def get_analyses(
    db: Session,
    skip: int = 0,
    limit: int = 10,
    subtype: str = None
):
    query = db.query(Analysis)

    if subtype:
        query = query.filter(
            Analysis.predicted_subtype == subtype
        )

    total = query.count()

    items = (
        query
        .order_by(Analysis.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )

    return items, total


def get_analysis(
    db: Session,
    analysis_id: str
):
    return (
        db.query(Analysis)
        .filter(Analysis.id == analysis_id)
        .first()
    )


def delete_analysis(
    db: Session,
    analysis_id: str
) -> bool:

    analysis = get_analysis(
        db,
        analysis_id
    )

    if analysis:
        db.delete(analysis)
        db.commit()
        return True

    return False