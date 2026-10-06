import os
from pathlib import Path

BASE_DIR = Path(r"C:\Users\Shaharsh\.gemini\antigravity\scratch\tnbc-insight-ai\frontend\src\pages")

def write_file(name, content):
    with open(BASE_DIR / name, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

# 6. Model Performance
perf_code = """
import React from 'react';

export default function ModelPerformance() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">Model Performance</h1>
      <div className="glass-panel p-6">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Model Architecture</th>
              <th className="px-4 py-3">Accuracy</th>
              <th className="px-4 py-3">Precision</th>
              <th className="px-4 py-3">Recall</th>
              <th className="px-4 py-3">F1-Score</th>
              <th className="px-4 py-3 rounded-tr-lg">Avg Inference Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-slate-700 bg-primary-50 dark:bg-primary-900/10">
              <td className="px-4 py-3 font-bold dark:text-white flex items-center gap-2">ResNet-50 <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full">ACTIVE</span></td>
              <td className="px-4 py-3 dark:text-slate-300">89.4%</td>
              <td className="px-4 py-3 dark:text-slate-300">0.88</td>
              <td className="px-4 py-3 dark:text-slate-300">0.90</td>
              <td className="px-4 py-3 dark:text-slate-300">0.89</td>
              <td className="px-4 py-3 dark:text-slate-300">1.2s</td>
            </tr>
            <tr className="border-b dark:border-slate-700">
              <td className="px-4 py-3 font-medium dark:text-white">ResNet-18</td>
              <td className="px-4 py-3 text-slate-400 italic">Not Evaluated</td>
              <td className="px-4 py-3 text-slate-400 italic">-</td>
              <td className="px-4 py-3 text-slate-400 italic">-</td>
              <td className="px-4 py-3 text-slate-400 italic">-</td>
              <td className="px-4 py-3 text-slate-400 italic">0.6s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
"""
write_file("ModelPerformance.tsx", perf_code)

# 7. Explainable AI
explain_code = """
import React from 'react';

export default function ExplainableAI() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold dark:text-white">Explainable AI (Grad-CAM)</h1>
      <div className="glass-panel p-8">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Gradient-weighted Class Activation Mapping</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Grad-CAM uses the gradients of any target concept (like the predicted TNBC subtype) flowing into the final convolutional layer to produce a coarse localization map highlighting the important regions in the image for predicting the concept.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">⚠️ Correlation vs. Causation</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Grad-CAM highlights regions the model mathematically correlated with a specific subtype during training. It does NOT prove these features biologically cause the subtype. Pathological review is required to interpret these visual patterns.
          </p>
        </div>
      </div>
    </div>
  );
}
"""
write_file("ExplainableAI.tsx", explain_code)

# 8. Research
research_code = """
import React from 'react';

export default function Research() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">Research & Evidence</h1>
      <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-3 text-sm rounded-lg">
        The clinical trial information provided below is for educational purposes only and does not constitute medical advice or treatment recommendations.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="glass-card p-6">
          <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">KEYNOTE-522</h3>
          <p className="text-sm text-slate-500 mb-4">Neoadjuvant setting</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm">Pembrolizumab + Chemotherapy followed by adjuvant Pembrolizumab significantly improved event-free survival in early-stage TNBC compared to chemotherapy alone.</p>
        </div>
        <div className="glass-card p-6">
          <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">ASCENT</h3>
          <p className="text-sm text-slate-500 mb-4">Metastatic setting</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm">Sacituzumab govitecan showed significant improvement in PFS and OS compared to single-agent chemotherapy in refractory mTNBC.</p>
        </div>
      </div>
    </div>
  );
}
"""
write_file("Research.tsx", research_code)

# 9. Dataset
dataset_code = """
import React from 'react';

export default function Dataset() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold dark:text-white">Dataset Configuration</h1>
      <div className="glass-panel p-8">
        <h2 className="text-xl font-bold mb-4 dark:text-white">TCGA-BRCA Cohort</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          The models are designed to be trained on the TCGA-BRCA dataset, specifically the Triple-Negative Breast Cancer subset consisting of roughly 388 Whole Slide Images (WSIs).
        </p>
        <div className="bg-slate-900 rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
          <pre>{`dataset/
├── train/
│   ├── BL1/ (patch_xxx.png)
│   ├── BL2/
│   ├── M/
│   └── LAR/
├── val/
└── test/`}</pre>
        </div>
      </div>
    </div>
  );
}
"""
write_file("Dataset.tsx", dataset_code)

# 10. Training Lab
training_code = """
import React from 'react';
import { Cpu } from 'lucide-react';

export default function TrainingLab() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold dark:text-white">Model Training Lab</h1>
      <div className="glass-panel p-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-4">
          <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-blue-900 dark:text-blue-300">Requires Preprocessed Dataset</h3>
            <p className="text-sm text-blue-800 dark:text-blue-400 mt-1">Model training requires the TCGA dataset to be downloaded and preprocessed into patches. A CUDA-capable GPU is highly recommended.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
"""
write_file("TrainingLab.tsx", training_code)

