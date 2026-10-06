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
