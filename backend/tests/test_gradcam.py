from ml.gradcam import generate_demo_gradcam, apply_heatmap_overlay, heatmap_to_base64
from ml.preprocessing import load_image
import numpy as np
import pytest

def test_generate_demo_gradcam(sample_image_bytes: bytes):
    img = load_image(sample_image_bytes)
    heatmap = generate_demo_gradcam(img)
    assert heatmap.shape == img.shape

def test_apply_heatmap_overlay(sample_image_bytes: bytes):
    img = load_image(sample_image_bytes)
    heatmap = generate_demo_gradcam(img)
    overlay = apply_heatmap_overlay(img, heatmap)
    assert overlay.shape == img.shape

def test_heatmap_to_base64(sample_image_bytes: bytes):
    img = load_image(sample_image_bytes)
    heatmap = generate_demo_gradcam(img)
    base64_str = heatmap_to_base64(heatmap)
    assert base64_str.startswith("data:image/jpeg;base64,")
