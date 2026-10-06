import torch
from ml.model import ResNet50TNBC, initialize_model, get_model
from ml.inference import demo_inference
import pytest

def test_model_initialization():
    model = initialize_model()
    assert isinstance(model, ResNet50TNBC)
    assert not model.training

def test_get_model_singleton():
    model1 = get_model()
    model2 = get_model()
    assert model1 is model2

def test_model_forward():
    model = get_model()
    dummy_input = torch.randn(1, 3, 224, 224)
    with torch.no_grad():
        output = model(dummy_input)
    assert output.shape == (1, 4)

def test_demo_inference(sample_image_bytes: bytes):
    result = demo_inference(sample_image_bytes, "test.jpg")
    assert "predicted_subtype" in result
    assert "confidence" in result
    assert "probabilities" in result
    probs = result["probabilities"]
    assert sum(probs.values()) == pytest.approx(1.0)
    assert result["mode"] == "DEMO"
