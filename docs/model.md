# TNBC-Insight AI: Neural Network Architecture & Explainability

## 1. Model Overview

The predictive backbone of **TNBC-Insight AI** is an adapted **ResNet-50** deep convolutional neural network, fine-tuned to classify Hematoxylin and Eosin (H&E) stained histopathology image patches into one of the four molecular subtypes of Triple-Negative Breast Cancer (TNBC) established by Lehmann et al.:

1. **Basal-like 1 (BL1)**
2. **Basal-like 2 (BL2)**
3. **Mesenchymal (M)**
4. **Luminal Androgen Receptor (LAR)**

In addition to categorical prediction, the model integrates **Gradient-weighted Class Activation Mapping (Grad-CAM)** to generate pixel-level attribution heatmaps directly from the final convolutional stage (`layer4`), highlighting cellular morphology and tissue microenvironment regions that guided the classification decision.

---

## 2. ResNet-50 Architecture

ResNet-50 is a 50-layer deep residual network utilizing bottleneck building blocks to mitigate the vanishing gradient problem in deep neural networks via identity shortcut connections:

$$\mathbf{y} = \mathcal{F}(\mathbf{x}, \{W_i\}) + \mathbf{x}$$

### Network Layer Breakdown

```
Input: [Batch, 3, 512, 512]
  │
  ▼
Conv1: 7x7 conv, 64 filters, stride 2  ──► [Batch, 64, 256, 256]
  │
  ▼
MaxPool: 3x3 max pool, stride 2         ──► [Batch, 64, 128, 128]
  │
  ▼
Layer 1: 3 Residual Bottleneck Blocks    ──► [Batch, 256, 128, 128]
  │
  ▼
Layer 2: 4 Residual Bottleneck Blocks    ──► [Batch, 512, 64, 64]
  │
  ▼
Layer 3: 6 Residual Bottleneck Blocks    ──► [Batch, 1024, 32, 32]
  │
  ▼
Layer 4: 3 Residual Bottleneck Blocks    ──► [Batch, 2048, 16, 16]   ◄── Grad-CAM Target Layer
  │
  ▼
Global Average Pooling (GAP)            ──► [Batch, 2048]
  │
  ▼
Dropout (p = 0.4)                       ──► [Batch, 2048]
  │
  ▼
Linear Classifier (2048 ──► 4)          ──► [Batch, 4] (Logits)
  │
  ▼
Softmax Activation                      ──► [Batch, 4] (Probabilities)
```

### Classification Head Modification
The standard ImageNet 1000-class fully connected layer is replaced by a custom classification head designed to prevent overfitting on histopathology representations:
- **Global Average Pooling (GAP)**: Collapses each $16 \times 16$ spatial activation map of the 2048 channels into a single spatial scalar, ensuring spatial invariance and reducing parameter count.
- **Dropout ($p = 0.4$)**: Regularizes deep feature representations, preventing co-adaptation during transfer learning.
- **Linear Layer ($2048 \to 4$)**: Projects 2048 latent morphological features to 4 unnormalized class logits.

---

## 3. Input & Output Specifications

### Input Tensor
- **Shape**: `[Batch, 3, 512, 512]` (Channels $\times$ Height $\times$ Width)
- **Color Space**: RGB, stain-normalized via Macenko deconvolution
- **Normalization**: Standardized using ImageNet channel statistics:
  - Mean ($\mu$): `[0.485, 0.456, 0.406]`
  - Standard Deviation ($\sigma$): `[0.229, 0.224, 0.225]`
- **Pixel Resolution**: 20x optical magnification ($\approx 0.50\,\mu\text{m}/\text{pixel}$)

### Output Specifications
The model outputs a 4-dimensional probability vector computed via Softmax:

$$P(y = c \mid \mathbf{x}) = \frac{\exp(z_c)}{\sum_{j=1}^4 \exp(z_j)}, \quad c \in \{\text{BL1}, \text{BL2}, \text{M}, \text{LAR}\}$$

| Subtype Class | Clinical Characteristics | Key Molecular Markers | Potential Therapeutic Targets |
| :--- | :--- | :--- | :--- |
| **BL1** (Basal-like 1) | High proliferation, elevated mitotic count, marked DNA damage response pathways | BRCA1/2 mutations, Ki-67 high, elevated MYC, CCNE1 | Platinum-based chemotherapy (Cisplatin/Carboplatin), PARP inhibitors |
| **BL2** (Basal-like 2) | Growth factor signaling activation, glycolysis, myoepithelial differentiation | EGFR, MET, E-cadherin loss, TP63, nerve growth factor | Growth factor receptor inhibitors (EGFR/MET), mTOR inhibitors |
| **M** (Mesenchymal) | High cellular motility, epithelial-to-mesenchymal transition (EMT), extracellular matrix remodeling | Vimentin high, CDH2 (N-cadherin), Wnt/$\beta$-catenin, TGF-$\beta$ | EMT inhibitors, TGF-$\beta$ receptor antagonists, Angiogenesis inhibitors |
| **LAR** (Luminal Androgen Receptor) | Luminal gene expression, hormonal signaling, frequent apocrine features | Androgen Receptor ($AR^+$), FOXA1, SPDEF, GATA3, CDH1 | AR antagonists (Enzalutamide, Bicalutamide), CDK4/6 inhibitors |

---

## 4. Transfer Learning & Training Strategy

Training a deep network de novo on whole-slide histopathology tiles is prone to severe overfitting due to high tile variance and limited patient cohorts. We implement a phased transfer learning strategy starting from weights pretrained on ImageNet:

### Phase 1: Feature Extractor Freezing (Warm-up)
- **Frozen Layers**: `conv1`, `bn1`, `layer1`, `layer2`, `layer3`, and `layer4`.
- **Trainable Layers**: Custom classification head (`linear`).
- **Optimizer**: AdamW with learning rate $\eta = 1 \times 10^{-3}$, weight decay $\lambda = 1 \times 10^{-2}$.
- **Duration**: 5 epochs. Allows the randomly initialized classification head to stabilize without disrupting pretrained convolutional filters.

### Phase 2: End-to-End Fine-Tuning
- **Unfrozen Layers**: `layer3`, `layer4`, and classification head.
- **Learning Rate Schedule**: Cosine Annealing learning rate schedule:
  $$\eta_t = \eta_{\min} + \frac{1}{2}(\eta_{\max} - \eta_{\min})\left(1 + \cos\left(\frac{T_{\text{cur}}}{T_{\max}}\pi\right)\right)$$
  Where $\eta_{\max} = 1 \times 10^{-4}$, $\eta_{\min} = 1 \times 10^{-6}$, and $T_{\max} = 50$ epochs.
- **Batch Size**: 32 patches (or 16 on memory-constrained GPUs).

### Loss Function
To address class imbalance across the four TNBC subtypes in the TCGA cohort, we employ Weighted Cross-Entropy Loss:

$$\mathcal{L}_{\text{CE}} = - \sum_{c=1}^4 w_c \cdot y_c \log(\hat{y}_c)$$

Where class weights are calculated inversely proportional to class frequencies:

$$w_c = \frac{N}{4 \cdot N_c}$$

### Data Augmentation Strategy
Histopathological tissue slices exhibit arbitrary rotational orientation. The training pipeline applies robust stochastic transformations:
- **Random Horizontal & Vertical Flips** ($p = 0.5$)
- **Random Orthogonal Rotations** ($90^\circ, 180^\circ, 270^\circ$)
- **Color Jittering**: Brightness ($\pm 0.1$), Contrast ($\pm 0.1$), Saturation ($\pm 0.1$), Hue ($\pm 0.05$) to simulate inter-laboratory staining variations
- **Affine Transformations**: Scaling ($0.95 - 1.05$) and translation ($\pm 5\%$)

---

## 5. Explainable AI: Grad-CAM Formulation

To provide pathologists with visual interpretability into why the model predicted a particular TNBC subtype, the system computes **Gradient-weighted Class Activation Mapping (Grad-CAM)** over the final convolutional layer (`layer4`).

### Mathematical Formulation

1. **Gradient Computation**: Compute the gradient of the unnormalized class score $y^c$ (logit for class $c$) with respect to the feature map activations $A^k$ of `layer4`:
   $$\frac{\partial y^c}{\partial A^k_{i,j}}$$
   where $A^k_{i,j}$ represents the activation at spatial position $(i, j)$ in channel $k \in \{1, \dots, 2048\}$.

2. **Neuron Importance Weights ($\alpha_k^c$)**: Perform global average pooling over the spatial gradients:
   $$\alpha_k^c = \frac{1}{Z} \sum_{i=1}^u \sum_{j=1}^v \frac{\partial y^c}{\partial A^k_{i,j}}$$
   where $Z = u \times v$ is the spatial dimensions of the feature map ($16 \times 16 = 256$).

3. **Weighted Linear Combination & Rectification**: Compute the class activation map by weighting the activation maps with $\alpha_k^c$ and applying a Rectified Linear Unit (ReLU) to isolate features that positively contribute to class $c$:
   $$L_{\text{Grad-CAM}}^c = \text{ReLU}\left(\sum_{k=1}^{2048} \alpha_k^c A^k\right)$$

4. **Bilinear Upsampling & Normalization**: The resulting $16 \times 16$ map is bilinearly interpolated back to $512 \times 512$, normalized to $[0, 1]$, color-mapped using the OpenCV `COLORMAP_JET` or `COLORMAP_TURBO` palette, and alpha-blended over the original histopathology patch:
   $$I_{\text{overlay}} = \alpha \cdot I_{\text{heatmap}} + (1 - \alpha) \cdot I_{\text{original}}$$

---

## 6. PyTorch Implementation Reference

```python
import torch
import torch.nn as nn
from torchvision.models import resnet50, ResNet50_Weights

class ResNet50TNBC(nn.Module):
    """
    ResNet-50 tailored for 4-class TNBC molecular subtype classification
    with registered hooks for Grad-CAM extraction.
    """
    def __init__(self, num_classes: int = 4, dropout_p: float = 0.4, pretrained: bool = True):
        super(ResNet50TNBC, self).__init__()
        weights = ResNet50_Weights.IMAGENET1K_V2 if pretrained else None
        self.backbone = resnet50(weights=weights)
        
        # Extract features up to layer4
        in_features = self.backbone.fc.in_features  # 2048
        
        # Replace fully connected classification head
        self.backbone.fc = nn.Sequential(
            nn.Dropout(p=dropout_p),
            nn.Linear(in_features, num_classes)
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.backbone(x)
```
