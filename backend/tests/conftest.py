import pytest
from fastapi.testclient import TestClient
from app.main import app
import cv2
import numpy as np

@pytest.fixture
def test_client():
    return TestClient(app)

@pytest.fixture
def sample_image_bytes():
    # Create a small dummy image for testing
    img = np.zeros((100, 100, 3), dtype=np.uint8)
    cv2.rectangle(img, (20, 20), (80, 80), (255, 0, 0), -1)
    _, buffer = cv2.imencode('.jpg', img)
    return buffer.tobytes()
