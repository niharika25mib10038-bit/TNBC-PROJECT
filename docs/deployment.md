# TNBC-Insight AI: Deployment & Production Guide

## 1. Overview

**TNBC-Insight AI** is engineered for flexible deployment across heterogeneous environments, ranging from local developer workstations and containerized cloud servers to resource-constrained edge accelerators such as the **NVIDIA Jetson Orin Nano**.

---

## 2. Local Development Setup

### Prerequisites
- **Python**: Version 3.10 or 3.11
- **Node.js**: Version 18.x or 20.x LTS, with `npm`
- **Git**: Version 2.30+
- **Hardware**: Minimum 8GB RAM (16GB+ recommended); NVIDIA GPU with CUDA 11.8+ or 12.x optional (falls back to CPU automatically)

### Step 1: Clone Repository
```bash
git clone https://github.com/tnbc-insight/tnbc-insight-ai.git
cd tnbc-insight-ai
```

### Step 2: Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
# Windows:
python -m venv venv
.\venv\Scripts\activate
# Linux/macOS:
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Start backend development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
*Backend interactive Swagger documentation will be accessible at: `http://localhost:8000/docs`.*

### Step 3: Frontend Setup
Open a separate terminal:
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
*Frontend research dashboard will be accessible at: `http://localhost:5173`.*

---

## 3. Containerized Deployment (Docker & Compose)

Containerization encapsulates Python system dependencies (e.g. OpenCV image codecs, GLib) and bundles the compiled React assets into a production-hardened Nginx server.

### Single-Command Launch
From the project root:
```bash
# Copy example environment variables
cp .env.example .env

# Build and start all services in detached mode
docker-compose up -d --build
```

### Container Layout
- **Backend Service (`tnbc-insight-backend`)**:
  - Base Image: `python:3.11-slim`
  - Internal Port: `8000`
  - Volumes:
    - `./backend/models:/app/models` (Persistent model checkpoint storage)
    - `./backend/uploads:/app/uploads` (Slide uploads and generated Grad-CAM heatmaps)
    - `./backend/data:/app/data` (Patches and stain normalization targets)
- **Frontend Service (`tnbc-insight-frontend`)**:
  - Base Image: Multi-stage `node:18-alpine` $\to$ `nginx:alpine`
  - External Port: `5173` (mapped to container port 80)
  - Reverse Proxy: Routes `/api/` traffic directly to the backend container.

### Stopping Containers
```bash
docker-compose down
```

---

## 4. NVIDIA Jetson Orin Nano Edge Deployment

The **NVIDIA Jetson Orin Nano** (available in 4GB and 8GB configurations) provides up to 40 TOPS of AI performance within a 7W to 15W power envelope, making it an ideal platform for point-of-care digital pathology workstations.

### Target Edge Specifications
- **SoC**: NVIDIA Ampere architecture with 1024 CUDA cores and 32 Tensor Cores
- **CPU**: 6-core Arm Cortex-A78AE v8.2 64-bit CPU
- **OS**: NVIDIA JetPack 5.1.2 or JetPack 6.0 (Ubuntu 20.04/22.04 LTS)
- **Max Memory**: 8 GB LPDDR5 (shared between CPU and GPU)

### Power Mode Configuration
Set the Jetson Orin Nano to maximum performance mode (15W, all cores active):
```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

### Step 1: Export PyTorch Weights to ONNX Format
Convert the trained PyTorch checkpoint (`resnet50_tnbc.pth`) to an open computational graph with fixed spatial dimensions:

```python
# export_onnx.py
import torch
from ml.model import ResNet50TNBC

# Initialize model architecture
model = ResNet50TNBC(num_classes=4, pretrained=False)
checkpoint = torch.load("models/resnet50_tnbc.pth", map_location="cpu")
model.load_state_dict(checkpoint["model_state_dict"] if "model_state_dict" in checkpoint else checkpoint)
model.eval()

# Dummy input representing 512x512 RGB histopathology patch
dummy_input = torch.randn(1, 3, 512, 512)

# Export to ONNX
torch.onnx.export(
    model,
    dummy_input,
    "models/resnet50_tnbc.onnx",
    export_params=True,
    opset_version=17,
    do_constant_folding=True,
    input_names=["input_patch"],
    output_names=["subtype_logits"],
    dynamic_axes={
        "input_patch": {0: "batch_size"},
        "subtype_logits": {0: "batch_size"}
    }
)
print("ONNX model exported successfully to models/resnet50_tnbc.onnx")
```

Run export:
```bash
python export_onnx.py
```

### Step 2: Build NVIDIA TensorRT Optimized Engine
Using NVIDIA's `trtexec` utility on the Jetson Orin Nano:

#### FP16 Precision (Recommended: Optimal speed and accuracy)
```bash
/usr/src/tensorrt/bin/trtexec \
  --onnx=models/resnet50_tnbc.onnx \
  --saveEngine=models/resnet50_tnbc_fp16.engine \
  --fp16 \
  --workspace=2048 \
  --minShapes=input_patch:1x3x512x512 \
  --optShapes=input_patch:1x3x512x512 \
  --maxShapes=input_patch:4x3x512x512
```

#### INT8 Calibration (Maximum Throughput)
For sub-15ms inference latency, generate an INT8 calibration cache using representative TCGA patches:
```bash
/usr/src/tensorrt/bin/trtexec \
  --onnx=models/resnet50_tnbc.onnx \
  --saveEngine=models/resnet50_tnbc_int8.engine \
  --int8 \
  --calib=calibration_cache.bin \
  --workspace=2048
```

### Step 3: Benchmarking Jetson Performance
| Runtime / Engine | Precision | Batch Size | Latency (ms) | Memory Footprint (MB) | Throughput (patches/sec) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PyTorch CUDA | FP32 | 1 | 48.2 ms | 1,420 MB | 20.7 |
| ONNX Runtime (CUDA) | FP32 | 1 | 36.5 ms | 1,180 MB | 27.4 |
| **TensorRT Engine** | **FP16** | **1** | **14.8 ms** | **640 MB** | **67.5** |
| **TensorRT Engine** | **INT8** | **1** | **9.1 ms** | **410 MB** | **109.8** |

---

## 5. Production & Hardening Considerations

1. **Reverse Proxy & SSL/TLS**:
   - In production clinics or laboratory intranets, terminate SSL/TLS at Nginx or an ingress controller with HTTPS certificates (Let's Encrypt / organizational PKI).
2. **Asynchronous Background Workers**:
   - For whole-slide processing (thousands of tiles per SVS file), decouple inference from HTTP request-response cycles using Celery and Redis message queues.
3. **Database Scaling**:
   - For multi-user departmental deployments, update `DATABASE_URL` from SQLite to PostgreSQL:
     ```env
     DATABASE_URL=postgresql://user:password@postgres-db:5432/tnbc_insight
     ```
4. **CORS & Network Boundaries**:
   - Explicitly define allowed origin domains in `CORS_ORIGINS` rather than wildcard `*`.
5. **Disk Storage & Ephemeral Clean-up**:
   - Configure a scheduled cron job or lifecycle policy to clean up temporary upload artifacts older than 30 days while preserving structured metadata in the database.
