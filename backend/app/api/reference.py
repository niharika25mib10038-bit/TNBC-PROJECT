from fastapi import APIRouter
from typing import List
from app.schemas.analysis import SubtypeInfo, TrialInfo

router = APIRouter()

@router.get("/subtypes", response_model=List[SubtypeInfo])
def get_subtypes():
    return [
        SubtypeInfo(
            name="Basal-like 1", code="BL1",
            description="High proliferation, DNA damage response genes, cell cycle/mitotic pathways.",
            characteristics=["High proliferation", "DNA damage response"],
            pathways=["Cell cycle", "Mitotic pathways"],
            treatment_associations=["Platinum-based chemotherapy", "PARP inhibitors"],
            color="#3b82f6"
        ),
        SubtypeInfo(
            name="Basal-like 2", code="BL2",
            description="Growth factor signaling, myoepithelial markers.",
            characteristics=["Myoepithelial markers", "Growth factor signaling"],
            pathways=["EGF", "MET", "Wnt"],
            treatment_associations=["More heterogeneous response patterns"],
            color="#8b5cf6"
        ),
        SubtypeInfo(
            name="Mesenchymal", code="M",
            description="EMT markers, cell motility.",
            characteristics=["EMT markers", "Cell motility"],
            pathways=["TGF-β", "PI3K", "mTOR"],
            treatment_associations=["Potential sensitivity to mTOR/PI3K inhibitors"],
            color="#10b981"
        ),
        SubtypeInfo(
            name="Luminal Androgen Receptor", code="LAR",
            description="Androgen receptor signaling, luminal gene expression.",
            characteristics=["Androgen receptor signaling", "Luminal gene expression", "PI3K mutations"],
            pathways=["AR signaling", "PI3K"],
            treatment_associations=["Potential sensitivity to anti-androgen therapy"],
            color="#f59e0b"
        )
    ]

@router.get("/trials", response_model=List[TrialInfo])
def get_trials():
    return [
        TrialInfo(
            trial_name="KEYNOTE-522", clinical_setting="Neoadjuvant", treatment="Pembrolizumab + chemo",
            population="Early TNBC", key_outcome="pCR 64.8% vs 51.2%", safety_signals=["Immune-related AEs"],
            significance="Standard of care for early high-risk TNBC"
        ),
        TrialInfo(
            trial_name="KEYNOTE-355", clinical_setting="Metastatic", treatment="Pembrolizumab + chemo",
            population="Metastatic TNBC (CPS≥10)", key_outcome="PFS benefit", safety_signals=["Immune-related AEs"],
            significance="Standard of care for PD-L1+ metastatic TNBC"
        ),
        TrialInfo(
            trial_name="IMpassion130", clinical_setting="Metastatic", treatment="Atezolizumab + nab-paclitaxel",
            population="Metastatic TNBC (PD-L1+)", key_outcome="PFS benefit", safety_signals=["Immune-related AEs", "Neuropathy"],
            significance="Alternative for PD-L1+ metastatic TNBC"
        ),
        TrialInfo(
            trial_name="ASCENT", clinical_setting="Metastatic", treatment="Sacituzumab govitecan",
            population="Metastatic TNBC (2+ prior lines)", key_outcome="Median OS 12.1 vs 6.7 months", safety_signals=["Neutropenia", "Diarrhea"],
            significance="Key option for later-line metastatic TNBC"
        ),
        TrialInfo(
            trial_name="DESTINY-Breast04", clinical_setting="Metastatic", treatment="T-DXd",
            population="HER2-low metastatic breast cancer", key_outcome="PFS and OS benefit", safety_signals=["ILD/Pneumonitis"],
            significance="Paradigm shift for HER2-low"
        ),
        TrialInfo(
            trial_name="OlympiA", clinical_setting="Adjuvant", treatment="Olaparib",
            population="gBRCA-mutated HER2- early BC", key_outcome="iDFS benefit", safety_signals=["Anemia", "Fatigue"],
            significance="Standard for BRCA-mutated early BC"
        ),
        TrialInfo(
            trial_name="EMBRACA", clinical_setting="Metastatic", treatment="Talazoparib",
            population="gBRCA-mutated advanced BC", key_outcome="PFS benefit", safety_signals=["Anemia", "Fatigue"],
            significance="Option for BRCA-mutated advanced BC"
        )
    ]
