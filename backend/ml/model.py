import torch
import torch.nn as nn
import torchvision.models as models

CLASSES = ['BL1', 'BL2', 'M', 'LAR']

class ResNet50TNBC(nn.Module):
    def __init__(self, num_classes=4):
        super(ResNet50TNBC, self).__init__()
        self.model = models.resnet50(pretrained=True)
        num_ftrs = self.model.fc.in_features
        self.model.fc = nn.Sequential(
            nn.Dropout(0.5),
            nn.Linear(num_ftrs, num_classes)
        )

    def forward(self, x):
        return self.model(x)

def load_model(path: str) -> nn.Module:
    model = ResNet50TNBC()
    model.load_state_dict(torch.load(path, map_location=torch.device('cpu')))
    model.eval()
    return model

def initialize_model() -> nn.Module:
    model = ResNet50TNBC()
    model.eval()
    return model

_model_instance = None

def get_model(path: str = None) -> nn.Module:
    global _model_instance
    if _model_instance is None:
        if path:
            try:
                _model_instance = load_model(path)
            except Exception:
                _model_instance = initialize_model()
        else:
            _model_instance = initialize_model()
    return _model_instance
