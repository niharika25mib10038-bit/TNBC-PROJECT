from ml.preprocessing import load_image, full_preprocess
import numpy as np

def test_load_image(sample_image_bytes: bytes):
    img = load_image(sample_image_bytes)
    assert isinstance(img, np.ndarray)
    assert len(img.shape) == 3

def test_full_preprocess(sample_image_bytes: bytes):
    result = full_preprocess(sample_image_bytes)
    assert "original" in result
    assert "gray" in result
    assert "tensor" in result
    assert "preprocessing_steps" in result
