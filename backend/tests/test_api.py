from fastapi.testclient import TestClient

def test_health_check(test_client: TestClient):
    response = test_client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_system_status(test_client: TestClient):
    response = test_client.get("/api/system/status")
    assert response.status_code == 200
    assert "components" in response.json()

def test_model_status(test_client: TestClient):
    response = test_client.get("/api/model/status")
    assert response.status_code == 200
    assert "status" in response.json()

def test_reference_subtypes(test_client: TestClient):
    response = test_client.get("/api/subtypes")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert len(response.json()) == 4

def test_reference_trials(test_client: TestClient):
    response = test_client.get("/api/trials")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_analyze_image(test_client: TestClient, sample_image_bytes: bytes):
    files = {"file": ("test.jpg", sample_image_bytes, "image/jpeg")}
    response = test_client.post("/api/analyze", files=files)
    assert response.status_code == 200
    data = response.json()
    assert "analysis_id" in data
    assert "result" in data
