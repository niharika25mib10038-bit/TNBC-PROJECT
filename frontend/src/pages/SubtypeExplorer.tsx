import React from 'react';

const SUBTYPES = [
  { name: 'Basal-Like 1', code: 'BL1', color: 'bg-blue-500', desc: 'Cell cycle and DNA damage response pathways highly activated. Higher proliferation rates.' },
  { name: 'Basal-Like 2', code: 'BL2', color: 'bg-purple-500', desc: 'Growth factor signaling, glycolysis, and gluconeogenesis pathways enriched.' },
  { name: 'Mesenchymal', code: 'M', color: 'bg-emerald-500', desc: 'Epithelial-mesenchymal transition (EMT), cell motility pathways activated.' },
  { name: 'Luminal Androgen Receptor', code: 'LAR', color: 'bg-amber-500', desc: 'Androgen receptor signaling, hormonally regulated pathways enriched.' },
];

export default function SubtypeExplorer() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">TNBC Molecular Subtypes</h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
        Triple-Negative Breast Cancer is a highly heterogeneous disease. Lehmann et al. initially classified TNBC into six, and later refined into four distinct molecular subtypes, each with unique biological characteristics and potential therapeutic vulnerabilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {SUBTYPES.map(s => (
          <div key={s.code} className="glass-card overflow-hidden">
            <div className={`${s.color} h-2 w-full`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold dark:text-white">{s.name}</h3>
                <span className={`px-3 py-1 rounded font-bold text-white text-sm ${s.color}`}>{s.code}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{s.desc}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Key Pathways</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-700 dark:text-slate-300">Placeholder Pathway</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
