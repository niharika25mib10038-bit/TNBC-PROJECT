import numpy as np
from sklearn.metrics import confusion_matrix, classification_report
from typing import List, Dict, Any

def evaluate_model(y_true: List[int], y_pred: List[int]) -> Dict[str, Any]:
    report = classification_report(y_true, y_pred, output_dict=True, zero_division=0)
    conf_matrix = compute_confusion_matrix(y_true, y_pred)
    
    return {
        "metrics": report,
        "confusion_matrix": conf_matrix
    }

def compute_confusion_matrix(y_true: List[int], y_pred: List[int]) -> List[List[int]]:
    matrix = confusion_matrix(y_true, y_pred)
    return matrix.tolist()

def load_metrics() -> Dict[str, Any]:
    # Demo metrics
    return {
        "accuracy": 0.89,
        "precision": 0.88,
        "recall": 0.89,
        "f1_score": 0.88,
        "auc_roc": 0.94
    }
