import React, { useState } from 'react';
import {
  ExternalLink,
  Filter,
  Dna,
  Target,
  AlertTriangle,
} from 'lucide-react';

interface ClinicalTrial {
  id: string;
  name: string;
  phase: string;
  stage: 'Neoadjuvant / Early' | 'Metastatic' | 'Targeted';
  population: string;
  drugClass: string;
  regimen: string;
  endpoints: string;
  subtypeRelevance: string;
  matchedSubtypes: ('BL1' | 'BL2' | 'M' | 'LAR')[];
  pubmedUrl: string;
}

// 7 Landmark Clinical Trials
const TRIALS_DATA: ClinicalTrial[] = [
  {
    id: 'trial-1',
    name: 'KEYNOTE-522',
    phase: 'Phase III',
    stage: 'Neoadjuvant / Early',
    population: 'Early-stage, high-risk TNBC',
    drugClass: 'Immune Checkpoint Inhibitor (PD-1)',
    regimen:
      'Pembrolizumab + Platinum-containing Chemotherapy -> Adjuvant Pembrolizumab',
    endpoints:
      'Significantly improved event-free survival (EFS) and pathological complete response (pCR: 64.8% vs 51.2%).',
    subtypeRelevance:
      'Highest clinical activity observed in tumors with intense immune infiltration and high proliferation rates (BL1 / Immunomodulatory features).',
    matchedSubtypes: ['BL1'],
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/32101663/',
  },

  {
    id: 'trial-2',
    name: 'KEYNOTE-355',
    phase: 'Phase III',
    stage: 'Metastatic',
    population: 'Locally recurrent inoperable or metastatic TNBC',
    drugClass: 'Anti-PD-1 Monoclonal Antibody',
    regimen:
      'Pembrolizumab + Chemotherapy (Paclitaxel / Nab-paclitaxel / Gemcitabine-Carboplatin)',
    endpoints:
      'Statistically significant prolongation of progression-free survival (PFS) and overall survival (OS) in patients with CPS >= 10.',
    subtypeRelevance:
      'Confirms that tumor microenvironment immune-cell density directly dictates immunotherapy efficacy.',
    matchedSubtypes: ['BL1', 'M'],
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/33278333/',
  },

  {
    id: 'trial-3',
    name: 'IMpassion130',
    phase: 'Phase III',
    stage: 'Metastatic',
    population: 'Untreated locally advanced or metastatic TNBC',
    drugClass: 'Immune Checkpoint Inhibitor (PD-L1)',
    regimen: 'Atezolizumab + Nab-paclitaxel',
    endpoints:
      'Clinically meaningful overall survival benefit in PD-L1 immune-cell-positive (IC >= 1%) subpopulation.',
    subtypeRelevance:
      'Emphasizes the role of stromal-infiltrating immune architecture and immune-evasive microenvironments.',
    matchedSubtypes: ['BL1', 'M'],
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/30345906/',
  },

  {
    id: 'trial-4',
    name: 'ASCENT',
    phase: 'Phase III',
    stage: 'Metastatic',
    population:
      'Relapsed/refractory metastatic TNBC (>= 2 prior chemotherapies)',
    drugClass: 'Antibody-Drug Conjugate (Trop-2 ADC)',
    regimen: 'Sacituzumab Govitecan vs. Single-agent Chemotherapy',
    endpoints:
      'Significant improvement in PFS (5.6 vs 1.7 mo) and OS (12.1 vs 6.7 mo); reduced risk of disease progression by 59%.',
    subtypeRelevance:
      'Demonstrates effectiveness across heterogeneous TNBC subsets irrespective of basal lineage through targeted surface-antigen delivery.',
    matchedSubtypes: ['BL1', 'BL2', 'M', 'LAR'],
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/33882206/',
  },

  {
    id: 'trial-5',
    name: 'DESTINY-Breast04',
    phase: 'Phase III',
    stage: 'Targeted',
    population:
      'HER2-Low metastatic breast cancer (including hormone receptor-negative / TNBC cohort)',
    drugClass: 'HER2-Targeting Antibody-Drug Conjugate',
    regimen:
      "Trastuzumab Deruxtecan (T-DXd) vs. Physician's Choice Chemotherapy",
    endpoints:
      'Significantly longer progression-free and overall survival in patients with IHC 1+ or IHC 2+/ISH- tumors.',
    subtypeRelevance:
      'Challenges conventional binary HER2 classification; links low-level expression morphology with topoisomerase-I inhibitor responsiveness.',
    matchedSubtypes: ['LAR', 'BL2'],
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/35665782/',
  },

  {
    id: 'trial-6',
    name: 'OlympiA',
    phase: 'Phase III',
    stage: 'Targeted',
    population:
      'High-risk, HER2-negative early breast cancer with germline BRCA1/2 mutations',
    drugClass: 'PARP Inhibitor (DNA Damage Response)',
    regimen: 'Adjuvant Olaparib for 1 year vs. Placebo',
    endpoints:
      'Significantly longer survival free of invasive or distant disease; 3-year invasive disease-free survival 85.9% vs 77.1%.',
    subtypeRelevance:
      'Directly matches Basal-Like 1 (BL1) phenotypes driven by homologous recombination deficiency and DNA repair pathway mutations.',
    matchedSubtypes: ['BL1'],
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/34081308/',
  },

  {
    id: 'trial-7',
    name: 'EMBRACA',
    phase: 'Phase III',
    stage: 'Targeted',
    population:
      'Locally advanced or metastatic HER2-negative breast cancer with germline BRCA mutation',
    drugClass: 'Potent PARP Inhibitor',
    regimen: 'Talazoparib monotherapy vs. Standard Chemotherapy',
    endpoints:
      'Significantly prolonged PFS (8.6 vs 5.6 months) and objective response rate of 62.6% vs 27.2%.',
    subtypeRelevance:
      'Validates synthetic lethality targeting in tumors exhibiting chromosomal instability, prominent in BL1 and genomic repair failure.',
    matchedSubtypes: ['BL1'],
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/30110579/',
  },
];

export default function Trials() {
  const [stageFilter, setStageFilter] = useState<string>('All');
  const [subtypeFilter, setSubtypeFilter] = useState<string>('All');

  const filteredTrials = TRIALS_DATA.filter((trial) => {
    const matchesStage =
      stageFilter === 'All' || trial.stage.includes(stageFilter);

    const matchesSubtype =
      subtypeFilter === 'All' ||
      trial.matchedSubtypes.includes(
        subtypeFilter as 'BL1' | 'BL2' | 'M' | 'LAR'
      );

    return matchesStage && matchesSubtype;
  });

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-200 px-6 py-12 md:px-16 selection:bg-indigo-500/30">

      <div className="max-w-6xl mx-auto space-y-12">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="space-y-4">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">

            <Target className="w-3.5 h-3.5" />

            <span>CLINICAL REFERENCE DATABASE</span>

          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Landmark Clinical Trials in TNBC
          </h1>

          <p className="text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed">
            Curated Phase III landmark studies mapping precision
            therapeutics—checkpoint inhibitors, antibody-drug conjugates,
            and PARP inhibitors—to molecular subtype biology.
          </p>

          {/* Research Notice */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs md:text-sm flex items-start gap-3 mt-4">

            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-400 mt-0.5" />

            <div>

              <span className="font-semibold text-amber-300">
                Reference Database Only:
              </span>{' '}

              This database provides clinical context for research and
              trial-matching architectures. It does not provide medical
              advice or individual patient therapy stratification.

            </div>

          </div>

        </header>

        {/* =====================================================
            FILTER CONTROLS
        ===================================================== */}
        <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

            {/* Clinical Setting */}
            <div className="space-y-2">

              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">

                <Filter className="w-3.5 h-3.5 text-indigo-400" />

                Clinical Setting

              </span>

              <div className="flex flex-wrap gap-2">

                {['All', 'Early', 'Metastatic', 'Targeted'].map((filter) => (

                  <button
                    key={filter}
                    onClick={() => setStageFilter(filter)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                      stageFilter === filter
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {filter === 'Early'
                      ? 'Neoadjuvant / Early'
                      : filter}
                  </button>

                ))}

              </div>

            </div>

            {/* Subtype Filter */}
            <div className="space-y-2">

              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">

                <Dna className="w-3.5 h-3.5 text-teal-400" />

                Correlated Subtype

              </span>

              <div className="flex flex-wrap gap-2">

                {['All', 'BL1', 'BL2', 'M', 'LAR'].map((st) => (

                  <button
                    key={st}
                    onClick={() => setSubtypeFilter(st)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                      subtypeFilter === st
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {st === 'All' ? 'All Subtypes' : st}
                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            TRIAL CARDS
        ===================================================== */}
        <section className="space-y-4">

          <div className="flex items-center justify-between text-xs text-slate-400 px-1">

            <span>
              Showing {filteredTrials.length} of {TRIALS_DATA.length}
              {' '}Landmark Trials
            </span>

          </div>

          <div className="grid grid-cols-1 gap-5">

            {filteredTrials.map((trial) => (

              <div
                key={trial.id}
                className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-indigo-500/40 transition space-y-4"
              >

                {/* Trial Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="text-xl font-bold text-white tracking-tight">
                      {trial.name}
                    </span>

                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                      {trial.phase}
                    </span>

                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                      {trial.stage}
                    </span>

                  </div>

                  <a
                    href={trial.pubmedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition"
                  >
                    View Paper
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                </div>

                {/* Population + Regimen */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">

                  <div>

                    <span className="text-slate-400 block font-medium mb-1">
                      Target Patient Population
                    </span>

                    <p className="text-slate-200">
                      {trial.population}
                    </p>

                  </div>

                  <div>

                    <span className="text-slate-400 block font-medium mb-1">
                      Investigational Regimen
                    </span>

                    <p className="text-slate-200 font-mono text-[11px]">
                      {trial.regimen}
                    </p>

                  </div>

                </div>

                {/* Endpoint */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-xs">

                  <span className="text-slate-400 font-semibold block mb-1">
                    Primary Endpoint & Clinical Finding
                  </span>

                  <p className="text-slate-300 leading-relaxed">
                    {trial.endpoints}
                  </p>

                </div>

                {/* Subtype Biology */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">

                  <div className="flex items-center gap-2 flex-wrap">

                    <span className="text-slate-400 font-medium">
                      Matched Subtype Biology:
                    </span>

                    <div className="flex gap-1.5">

                      {trial.matchedSubtypes.map((st) => (

                        <span
                          key={st}
                          className="px-2 py-0.5 rounded text-[11px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20"
                        >
                          {st}
                        </span>

                      ))}

                    </div>

                  </div>

                  <p className="text-slate-400 italic text-[11px] sm:text-right max-w-md">
                    {trial.subtypeRelevance}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}