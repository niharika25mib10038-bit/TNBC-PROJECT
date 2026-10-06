import React from 'react';
import { Shield } from 'lucide-react';

export default function Ethics() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold dark:text-white">Ethics & Safety</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 border-l-4 border-l-red-500">
          <h3 className="font-bold text-lg mb-2 dark:text-white">Not a Diagnostic Device</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">This system is a research prototype. It has not been approved by the FDA or any regulatory body. It cannot be used to diagnose patients.</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-amber-500">
          <h3 className="font-bold text-lg mb-2 dark:text-white">Human Oversight Mandatory</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">AI should augment, not replace, trained pathologists. Final determinations must always rely on expert human judgment.</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-blue-500">
          <h3 className="font-bold text-lg mb-2 dark:text-white">Domain Shift Risks</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Models trained on TCGA may perform poorly on images from different scanners or staining protocols (domain shift).</p>
        </div>
      </div>
    </div>
  );
}
