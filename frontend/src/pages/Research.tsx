import React, { useState } from 'react';
import {
  BookOpen,
  FlaskConical,
  AlertTriangle,
  ExternalLink,
  Layers,
  Cpu,
  HelpCircle,
  Award,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LITERATURE = [
  {
    title: 'Predicting Breast Cancer Gene Expression from Unannotated H&E',
    authors: 'Phan et al. (2021)',
    journal: 'Frontiers in Oncology',
    category: 'Histo-Genomics',
    summary:
      'Demonstrated transfer learning using ResNet backbones to infer molecular profiles from H&E patches, achieving a 0.913 slide-level accuracy on PAM50 classifications.',
    relevance:
      'Direct architectural baseline for predicting molecular signatures from routine morphological slides.',
    doi: 'https://doi.org/10.3389/fonc.2021.769447',
  },
  {
    title: 'Refinement of TNBC Molecular Subtypes & Neoadjuvant Response',
    authors: 'Lehman et al. (2016)',
    journal: 'PLoS ONE',
    category: 'Molecular Taxonomy',
    summary:
      'Refined the original 6 Lehman clusters into 4 tumor-intrinsic subtypes (BL1, BL2, M, LAR) by identifying that IM and MSL signatures derive from lymphocytes and stroma.',
    relevance:
      'Forms the 4-class classification space and biological programme taxonomy used in TNBC-Insight AI.',
    doi: 'https://doi.org/10.1371/journal.pone.0157368',
  },
  {
    title: 'Deep Learning in Histopathology: The Path to the Clinic',
    authors: 'van der Laak et al. (2021)',
    journal: 'Nature Medicine',
    category: 'Translational AI',
    summary:
      'Identified core translational hurdles in computational pathology: multi-site stain variation, scanner domain shift, model opacity, and lack of external validation.',
    relevance:
      'Motivated our Macenko stain normalization and Grad-CAM visual interpretability modules.',
    doi: 'https://doi.org/10.1038/s41591-021-01343-4',
  },
];

const BENCHMARKS = [
  {
    challenge: 'BACH Grand Challenge',
    study: 'Aresta et al. (2019)',
    focus: 'Breast Histology Classification',
    metric: '87.0% Accuracy',
    description:
      'Standardized benchmark proving CNN backbones can reliably classify breast tissue types, demonstrating the critical need for stain deconvolution across clinical centers.',
  },
  {
    challenge: 'CAMELYON16',
    study: 'Bejnordi et al. (2017)',
    focus: 'WSI Metastasis Detection',
    metric: '0.994 AUC-ROC',
    description:
      'Demonstrated that deep learning models can perform comparably to expert pathologists under time constraints, establishing the viability of automated H&E analysis.',
  },
];

export default function Research() {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-200 px-6 py-12 md:px-16 selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="space-y-4">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>SCIENTIFIC FOUNDATION & EVIDENCE</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Research & Computational Evidence
          </h1>

          <p className="text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed">
            Investigating the computational interface between routine H&E
            morphology and mRNA-defined TNBC molecular subtypes through deep
            feature representations and explainable AI.
          </p>

          {/* Research Notice */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs md:text-sm flex items-start gap-3 mt-4">

            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-400 mt-0.5" />

            <div>
              <span className="font-semibold text-amber-300">
                Academic Research Scope:
              </span>{' '}
              This platform serves as an algorithmic demonstration and
              computational benchmarking framework. It does not provide
              medical diagnosis or therapeutic treatment directives.
            </div>

          </div>

          {/* =====================================================
              ABSTRACT
          ===================================================== */}
          <div className="pt-2">

            <button
              onClick={() => setIsAbstractOpen(!isAbstractOpen)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700 text-left transition"
            >

              <span className="text-xs md:text-sm font-semibold text-indigo-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Read Thesis Abstract & Executive Summary
              </span>

              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  isAbstractOpen ? 'rotate-180' : ''
                }`}
              />

            </button>

            {isAbstractOpen && (
              <div className="p-5 rounded-b-xl bg-[#0F172A]/60 border-x border-b border-slate-800 text-xs md:text-sm text-slate-300 leading-relaxed space-y-3">

                <p>
                  Triple-Negative Breast Cancer (TNBC) accounts for 15–20% of
                  all invasive breast carcinomas and exhibits substantial
                  biological heterogeneity despite being historically managed
                  as a uniform disease due to the lack of ER, PR, and HER2
                  expression. While standard hematoxylin and eosin (H&E)
                  histopathology slides harbour rich phenotypic patterns,
                  correlating these features with genomic classifications
                  remains an open challenge in computational pathology.
                </p>

                <p>
                  This project introduces{' '}
                  <strong className="text-white">
                    TNBC-Insight AI
                  </strong>
                  , an interactive and explainable deep learning prototype
                  designed to bridge morphological image features with the
                  four Lehman molecular subtypes: Basal-like 1 (BL1),
                  Basal-like 2 (BL2), Mesenchymal (M), and Luminal Androgen
                  Receptor (LAR).
                </p>

                <p>
                  The platform incorporates grayscale conversion and Otsu
                  thresholding for image processing, Macenko stain
                  normalization, a ResNet-50 model architecture, and Grad-CAM
                  based visual explainability. It establishes a transparent
                  prototype framework for computational biomarker research.
                </p>

              </div>
            )}

          </div>

        </header>

        {/* =====================================================
            KEY SCIENTIFIC LITERATURE
        ===================================================== */}
        <section className="space-y-6">

          <div className="border-b border-slate-800 pb-4">

            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              Key Scientific Literature
            </h2>

            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Peer-reviewed foundational studies shaping the methodology of
              TNBC-Insight AI.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {LITERATURE.map((item, idx) => (

              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition"
              >

                <div className="space-y-3">

                  <div className="flex items-center justify-between">

                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {item.category}
                    </span>

                    <a
                      href={item.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-indigo-400 transition"
                      title="Open Paper"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-300">
                      {item.authors}
                    </strong>{' '}
                    • {item.journal}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                    {item.summary}
                  </p>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60">

                  <p className="text-[11px] text-slate-400 italic">

                    <strong className="text-indigo-300 font-medium not-italic">
                      Project Context:{' '}
                    </strong>

                    {item.relevance}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================================
            VALIDATION BENCHMARKS
        ===================================================== */}
        <section className="space-y-6">

          <div className="border-b border-slate-800 pb-4">

            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-indigo-400" />
              Validation Benchmarks & Precedents
            </h2>

            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Standardized historical challenge datasets validating CNN
              utility on breast histopathology.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {BENCHMARKS.map((b, idx) => (

              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-3"
              >

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <h3 className="text-lg font-bold text-white">
                      {b.challenge}
                    </h3>

                    <p className="text-xs text-slate-400">
                      {b.study} • {b.focus}
                    </p>

                  </div>

                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 whitespace-nowrap">
                    {b.metric}
                  </span>

                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {b.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================================
            COMPUTATIONAL METHODOLOGY
        ===================================================== */}
        <section className="space-y-6">

          <div className="border-b border-slate-800 pb-4">

            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-indigo-400" />
              Computational Methodology & Limitations
            </h2>

            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Transparent parameters governing current inference mode and
              clinical translation.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Stain Normalization */}
            <div className="p-5 rounded-2xl bg-[#0F172A]/70 border border-slate-800 space-y-2">

              <div className="text-indigo-400 font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Stain Normalization
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Applies grayscale conversion and Otsu thresholding to generate
                a binary threshold representation, followed by Macenko stain
                normalization to reduce H&E staining variation before
                downstream image processing.
              </p>

            </div>

            {/* Grad-CAM */}
            <div className="p-5 rounded-2xl bg-[#0F172A]/70 border border-slate-800 space-y-2">

              <div className="text-indigo-400 font-semibold text-sm flex items-center gap-2">
                <FlaskConical className="w-4 h-4" />
                Explainable AI (Grad-CAM)
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Visual saliency heatmaps indicate spatial activation patterns
                in image regions. They serve as an interpretability aid and
                should not be interpreted as evidence of biological causality.
              </p>

            </div>

            {/* Demo Mode */}
            <div className="p-5 rounded-2xl bg-[#0F172A]/70 border border-slate-800 space-y-2">

              <div className="text-amber-400 font-semibold text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                DEMO Inference Mode
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                The public deployment operates in DEMO mode due to cloud
                hosting constraints. Current displayed subtype predictions are
                demonstration outputs and are not clinically validated
                predictions.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            CLINICAL TRIALS CONNECTION
        ===================================================== */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          <div>

            <h3 className="text-base font-bold text-white">
              Looking for Clinical Trials & Regimens?
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              Explore our dedicated database covering KEYNOTE-522, ASCENT,
              OlympiA, and targeted therapies.
            </p>

          </div>

          <Link
            to="/trials"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition whitespace-nowrap self-start sm:self-auto shadow-lg shadow-indigo-950/30"
          >
            Open Clinical Trials
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </div>
  );
}