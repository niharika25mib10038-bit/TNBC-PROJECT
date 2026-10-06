import cv2
import numpy as np
import base64
import torch

class GradCAM:
    def __init__(self, model, target_layer):
        self.model = model
        self.target_layer = target_layer
        self.gradients = None
        self.activations = None
        
        target_layer.register_forward_hook(self.save_activation)
        target_layer.register_full_backward_hook(self.save_gradient)
        
    def save_activation(self, module, input, output):
        self.activations = output
        
    def save_gradient(self, module, grad_input, grad_output):
        self.gradients = grad_output[0]

def generate_demo_gradcam(image: np.ndarray) -> np.ndarray:
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (15, 15), 0)
    
    # Find high-intensity tissue regions
    _, thresh = cv2.threshold(blurred, 100, 255, cv2.THRESH_BINARY)
    
    smooth = cv2.GaussianBlur(thresh, (51, 51), 0); heatmap = cv2.applyColorMap(smooth, cv2.COLORMAP_JET)
    return heatmap

def apply_heatmap_overlay(image: np.ndarray, heatmap: np.ndarray, alpha=0.5) -> np.ndarray:
    if heatmap.shape[:2] != image.shape[:2]:
        heatmap = cv2.resize(heatmap, (image.shape[1], image.shape[0]))
    
    overlay = cv2.addWeighted(image, 1 - alpha, heatmap, alpha, 0)
    return overlay

def heatmap_to_base64(heatmap: np.ndarray) -> str:
    _, buffer = cv2.imencode('.jpg', heatmap)
    img_base64 = base64.b64encode(buffer).decode('utf-8')
    return f"data:image/jpeg;base64,{img_base64}"
