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
