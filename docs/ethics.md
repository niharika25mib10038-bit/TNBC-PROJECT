# Ethical Framework, Clinical Safety & Regulatory Guidelines

## 1. Intended Purpose & Research Prototype Status

> [!CAUTION]
> **RESEARCH PROTOTYPE ONLY**  
> **TNBC-Insight AI** is an exploratory academic and algorithmic research prototype. It is **NOT** a certified medical diagnostic device, in vitro diagnostic (IVD) software, or Clinical Decision Support (CDS) system cleared for autonomous patient management.
>
> This system has **not** been approved, cleared, or evaluated by the United States Food and Drug Administration (FDA), European Medicines Agency (EMA), or any other national health authority. It must **never** be used for primary diagnosis, patient triage, tumor staging, or alteration of systemic oncological therapies.

The objective of this software is to benchmark machine learning representations on public histopathological datasets, explore the utility of explainability algorithms (Grad-CAM), and facilitate research into visual morphological correlates of Triple-Negative Breast Cancer molecular subtypes.

---

## 2. Core Ethical Tenets for AI in Digital Pathology

```
          ┌──────────────────────────────────────────────┐
          │         Mandatory Human Pathologist          │
          │         Final Diagnostic Authority           │
          └──────────────────────┬───────────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│ Algorithmic      │   │ Automation Bias  │   │ Domain Shift     │
│ Transparency     │   │ Mitigation       │   │ Awareness        │
│ (Grad-CAM)       │   │ (Human-in-Loop)  │   │ (Scanner/Stain)  │
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

### 2.1 Primacy of Human Oversight
Machine learning systems in pathology operate as assistive second-readers or feature visualization tools. Diagnostic accountability rests entirely with board-certified pathologists who review slides within the broader context of immunohistochemistry (IHC), fluorescence in situ hybridization (FISH), clinical presentation, and patient history.

### 2.2 Mitigation of Automation Bias
**Automation bias** is the psychological propensity for human decision-makers to uncritically trust automated or algorithmic recommendations, particularly when presented with polished graphical user interfaces and high nominal confidence scores (e.g. "97.4% BL1").
- **Design Countermeasure**: TNBC-Insight AI displays class probabilities across all four subtypes simultaneously, presents clear visual labels designating Demo or Research mode, and includes explicit reminders prompting the user to scrutinize histological features independently.

### 2.3 Domain Shift & Generalization Limits
Pathology machine learning models are notorious for performance degradation when tested on slides originating outside their training distribution:
- **Inter-Laboratory Variability**: Variations in formalin fixation duration, paraffin embedding temperatures, tissue section thickness ($3\,\mu\text{m}$ vs $5\,\mu\text{m}$), and reagent lot numbers.
- **Scanner Characteristics**: Spectral characteristics of digital slide scanners (e.g., Aperio Scanscope vs Hamamatsu NanoZoomer vs Philips Ultra Fast Scanner) introduce optical domain shifts.
- **Demographic & Histological Bias**: TCGA-BRCA data predominantly reflects specific patient demographics and institutional protocols. Models trained exclusively on this cohort must not be assumed to generalize across diverse global populations without prospective local validation.

---

## 3. Explainability & Grad-CAM Limitations

While Gradient-weighted Class Activation Mapping (Grad-CAM) offers valuable visual insight into network attention, users must understand its fundamental algorithmic limitations:

1. **Coarse Spatial Resolution**: Grad-CAM heatmaps are derived from the activations of `layer4` of ResNet-50, which has an internal spatial resolution of $16 \times 16$ for a $512 \times 512$ input. Upsampling this $16 \times 16$ grid to $512 \times 512$ relies on smooth bilinear interpolation. Consequently, heatmaps highlight **tissue neighborhoods**, not individual sub-cellular organelles or single nuclei.
2. **False Attribution to Artifacts**: Convolutional networks may exploit spurious correlations (e.g. red blood cell extravasation, cautery artifacts, or specific stromal patterns) that coincide statistically with a subtype in the training set but possess no biological causality.
3. **No Direct Genomic Equivalence**: Grad-CAM highlights image regions whose features correlate with subtype labels; it does not perform molecular sequencing or measure gene expression directly.

---

## 4. Patient Data Privacy & Confidentiality (HIPAA / GDPR)

Digital whole-slide images contain protected health information (PHI) both in their pixel data and metadata headers:
- **Slide Label Barcodes**: Glass slide labels frequently contain handwritten or barcode identifiers including patient hospital numbers, surgical accession codes, and dates. Whole-slide ingestion must crop or redact label areas prior to digital ingestion.
- **DICOM / TIFF EXIF Metadata**: Unprocessed slide files often encode scanner serial numbers, institutional identifiers, and operator timestamps. A strict de-identification pipeline must scrub all EXIF tags to ensure compliance with HIPAA Safe Harbor and GDPR Article 9 (processing of special categories of health data).
- **On-Premise Processing**: TNBC-Insight AI is structured to run entirely locally or on an isolated institutional intranet without transmitting diagnostic slides to external commercial cloud APIs.

---

## 5. Regulatory Framework Overview

For researchers considering advancing academic prototypes toward prospective translational research or clinical trials, the following regulatory standards must guide future development:

| Regulatory Body / Framework | Standard | Relevance to Computational Pathology |
| :--- | :--- | :--- |
| **US FDA** | 21 CFR Part 820 / SaMD | Quality Management System (QMS), software verification & validation (V&V), design controls for Software as a Medical Device. |
| **EU MDR / IVDR** | Regulation (EU) 2017/746 | Classifies automated cancer diagnostic and subtyping software under high-risk in vitro diagnostic categories (Class C), requiring notified body certification and clinical performance studies. |
| **ISO** | ISO 13485 / ISO 14971 | Medical device manufacturing quality management and comprehensive risk management throughout the product lifecycle. |
| **CLIA / CAP** | Laboratory Developed Tests (LDT) | Requirements for analytical validation (accuracy, precision, analytical sensitivity, specificity) within accredited clinical laboratories. |

---

## 6. Summary Code of Ethics for Users

1. **Do not fabricate results**: Never publish or present model outputs as validated diagnostic markers without independent multi-center clinical validation.
2. **Respect patient privacy**: Ensure all slide data ingested into the system is rigorously de-identified and obtained under appropriate Institutional Review Board (IRB) protocols and patient consent.
3. **Acknowledge uncertainty**: Always communicate model uncertainty, calibration metrics, and known failure modes alongside point predictions.
