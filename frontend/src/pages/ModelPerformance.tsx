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
