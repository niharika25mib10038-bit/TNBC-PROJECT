import hashlib
import time
from typing import Dict, Any

import numpy as np
import cv2

from .model import CLASSES, get_model
from .preprocessing import load_image, full_preprocess
from .gradcam import (
    generate_demo_gradcam,
    apply_heatmap_overlay,
    heatmap_to_base64
)


def demo_inference(image_bytes: bytes, filename: str) -> Dict[str, Any]:
    start_time = time.perf_counter()

    hash_obj = hashlib.md5(image_bytes)
    hash_int = int.from_bytes(
        hash_obj.digest()[:4],
        byteorder='little'
    )

    np.random.seed(hash_int)

    class_idx = hash_int % 4
    predicted_subtype = CLASSES[class_idx]

    top_prob = np.random.uniform(0.65, 0.92)
    remaining_prob = 1.0 - top_prob

    probs = [0.0] * 4
    probs[class_idx] = top_prob

    other_indices = [i for i in range(4) if i != class_idx]

    rand_weights = np.random.uniform(0, 1, 3)
    rand_weights /= rand_weights.sum()

    for i, idx in enumerate(other_indices):
        probs[idx] = remaining_prob * rand_weights[i]

    probs_dict = {
        CLASSES[i]: float(probs[i])
        for i in range(4)
    }

    # Generate demo Grad-CAM visualization
    img = load_image(image_bytes)

    heatmap = generate_demo_gradcam(img)

    overlay = apply_heatmap_overlay(
        img,
        heatmap
    )

    gradcam_url = heatmap_to_base64(overlay)

    # Calculate inference time
    inference_time_ms = round(
        (time.perf_counter() - start_time) * 1000,
        2
    )

    return {
        "predicted_subtype": predicted_subtype,
        "confidence": float(top_prob),
        "probabilities": probs_dict,
        "model_name": "ResNet50-TNBC-Demo",
        "mode": "DEMO",
        "gradcam_heatmap": True,
        "gradcam_overlay": gradcam_url,
        "inference_time_ms": inference_time_ms
    }


def real_inference(
    image_bytes: bytes,
    filename: str
) -> Dict[str, Any]:
    """
    Placeholder for real trained TNBC model inference.

    Currently falls back to demo inference because
    a trained TNBC-specific model is not available.
    """
    return demo_inference(
        image_bytes,
        filename
    )


def run_inference(
    image_bytes: bytes,
    filename: str,
    mode: str = 'demo'
) -> Dict[str, Any]:

    if mode.lower() == 'demo':
        return demo_inference(
            image_bytes,
            filename
        )
    else:
        return real_inference(
            image_bytes,
            filename
        )