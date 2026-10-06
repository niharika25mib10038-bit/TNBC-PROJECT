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
