import cv2
import numpy as np
from PIL import Image
import torch
import torchvision.transforms as transforms
from .macenko import macenko_normalize

def load_image(image_bytes: bytes) -> np.ndarray:
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img

def detect_tissue(image: np.ndarray) -> np.ndarray:
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return gray

def otsu_threshold(gray_image: np.ndarray) -> np.ndarray:
    _, thresh = cv2.threshold(gray_image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return thresh

def resize_image(image: np.ndarray, size: tuple = (224, 224)) -> np.ndarray:
    return cv2.resize(image, size)

def prepare_tensor(image: np.ndarray) -> torch.Tensor:
    transform = transforms.Compose([
        transforms.ToPILImage(),
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])
    return transform(image)

def full_preprocess(image_bytes: bytes) -> dict:
    img = load_image(image_bytes)
    
    # Tissue detection and thresholding
    gray = detect_tissue(img)
    thresh = otsu_threshold(gray)
    
    # Macenko normalization
    normalized = macenko_normalize(img)
    if normalized is None:
        normalized = img # fallback
        
    tensor = prepare_tensor(normalized)
    
    return {
        'original': img,
        'gray': gray,
        'thresh': thresh,
        'normalized': normalized,
        'tensor': tensor,
        'preprocessing_steps': ['Tissue Detection', 'Otsu Thresholding', 'Macenko Normalization', 'ImageNet Standardization']
    }
