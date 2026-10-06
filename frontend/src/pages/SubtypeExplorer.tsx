import React from 'react';

const SUBTYPES = [
  {
    code: 'BL1',
    name: 'Basal-Like 1',
    tagline: 'Think: Fast-growing cells',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-950/30',
    borderColor: 'border-blue-900/50',
    description:
      'BL1 is mainly associated with strong cell division and DNA-related activity. In simple terms, the cancer cells show biological signals linked to rapid growth.',
    points: [
      'Cells show strong signs of rapid division',
      'DNA damage and repair systems are highly active',
      'Strong proliferation-related biological signals',
    ],
    pathways: [
      'Cell cycle',
      'DNA damage response',
      'DNA repair',
      'Proliferation',
    ],
    visual: (
      <div className="relative h-56 overflow-hidden rounded-2xl bg-[#020617] border border-blue-900/40">
        <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full">

          {/* Subtle DNA */}
          <path
            d="M470 20 C520 50 520 80 470 110 C420 140 420 170 470 200"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            opacity="0.2"
          />
          <path
            d="M530 20 C480 50 480 80 530 110 C580 140 580 170 530 200"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            opacity="0.2"
          />

          {/* Parent cell */}
          <circle
            cx="140"
            cy="110"
            r="52"
            fill="#0f172a"
            stroke="#3b82f6"
            strokeWidth="4"
          />

          <circle
            cx="140"
            cy="110"
            r="18"
            fill="#2563eb"
          />

          {/* Division arrow */}
          <path
            d="M205 110 H285"
            stroke="#60a5fa"
            strokeWidth="4"
          />

          <path
            d="M275 100 L290 110 L275 120"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="4"
          />

          {/* Daughter cells */}
          <circle
            cx="350"
            cy="75"
            r="35"
            fill="#0f172a"
            stroke="#3b82f6"
            strokeWidth="4"
          />

          <circle
            cx="350"
            cy="145"
            r="35"
            fill="#0f172a"
            stroke="#3b82f6"
            strokeWidth="4"
          />

          <circle cx="350" cy="75" r="12" fill="#2563eb" />
          <circle cx="350" cy="145" r="12" fill="#2563eb" />

          <text
            x="465"
            y="118"
            fill="#60a5fa"
            fontSize="27"
            fontWeight="bold"
          >
            DNA
          </text>
        </svg>

        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="text-sm font-medium text-blue-300">
            Rapid proliferation + DNA activity
          </span>
        </div>
      </div>
    ),
  },

  {
    code: 'BL2',
    name: 'Basal-Like 2',
    tagline: 'Think: Growth signals + metabolism',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-950/30',
    borderColor: 'border-purple-900/50',
    description:
      'BL2 is associated with strong growth-factor signalling and changes in how cells use energy. In simple terms, the cells show active growth and metabolic programs.',
    points: [
      'Growth-factor signals are strongly activated',
      'Cells show changes in energy use',
      'Metabolic pathways are particularly active',
    ],
    pathways: [
      'Growth-factor signalling',
      'Glycolysis',
      'Gluconeogenesis',
      'Metabolism',
    ],
    visual: (
      <div className="relative h-56 overflow-hidden rounded-2xl bg-[#020617] border border-purple-900/40">
        <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full">

          {/* Main cell */}
          <circle
            cx="300"
            cy="110"
            r="60"
            fill="#1e1038"
            stroke="#9333ea"
            strokeWidth="4"
          />

          {/* Nucleus */}
          <circle
            cx="300"
            cy="110"
            r="23"
            fill="#7e22ce"
          />

          {/* Growth signals */}
          <circle cx="215" cy="60" r="9" fill="#a855f7" />
          <circle cx="385" cy="60" r="9" fill="#a855f7" />
          <circle cx="215" cy="160" r="9" fill="#a855f7" />
          <circle cx="385" cy="160" r="9" fill="#a855f7" />

          <path d="M225 65 L265 90" stroke="#a855f7" strokeWidth="3" />
          <path d="M375 65 L335 90" stroke="#a855f7" strokeWidth="3" />
          <path d="M225 155 L265 130" stroke="#a855f7" strokeWidth="3" />
          <path d="M375 155 L335 130" stroke="#a855f7" strokeWidth="3" />

          {/* Energy symbols */}
          <text
            x="85"
            y="85"
            fill="#c084fc"
            fontSize="32"
          >
            ⚡
          </text>

          <text
            x="485"
            y="155"
            fill="#c084fc"
            fontSize="32"
          >
            ⚡
          </text>

          {/* Metabolic pathway */}
          <path
            d="M65 175 H155"
            stroke="#a855f7"
            strokeWidth="4"
          />

          <path
            d="M145 165 L160 175 L145 185"
            fill="none"
            stroke="#a855f7"
            strokeWidth="4"
          />

          <text
            x="65"
            y="202"
            fill="#a78bfa"
            fontSize="14"
          >
            Energy / metabolism
          </text>
        </svg>

        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="text-sm font-medium text-purple-300">
            Growth signals + active metabolism
          </span>
        </div>
      </div>
    ),
  },

  {
    code: 'M',
    name: 'Mesenchymal',
    tagline: 'Think: Movement + tissue interaction',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-950/30',
    borderColor: 'border-emerald-900/50',
    description:
      'The Mesenchymal subtype is associated with epithelial-mesenchymal transition (EMT) and processes involved in cell movement and interaction with surrounding tissue.',
    points: [
      'Cells show programs linked to movement',
      'EMT-related biological processes are active',
      'Cells interact strongly with their surrounding environment',
    ],
    pathways: [
      'Epithelial-mesenchymal transition',
      'Cell motility',
      'Extracellular matrix',
      'Tissue interaction',
    ],
    visual: (
      <div className="relative h-56 overflow-hidden rounded-2xl bg-[#020617] border border-emerald-900/40">
        <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full">

          {/* Tissue network */}
          <g opacity="0.18">
            <path
              d="M20 50 C100 20 150 80 220 45 S350 20 420 60 S520 90 580 40"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
            />

            <path
              d="M20 170 C100 140 160 190 230 155 S350 140 430 175 S520 190 580 150"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
            />

            <path
              d="M80 20 L120 200"
              stroke="#10b981"
              strokeWidth="2"
            />

            <path
              d="M480 20 L440 200"
              stroke="#10b981"
              strokeWidth="2"
            />
          </g>

          {/* Elongated cells */}
          <ellipse
            cx="145"
            cy="110"
            rx="62"
            ry="28"
            fill="#052e24"
            stroke="#10b981"
            strokeWidth="4"
            transform="rotate(-10 145 110)"
          />

          <ellipse
            cx="305"
            cy="105"
            rx="62"
            ry="27"
            fill="#052e24"
            stroke="#10b981"
            strokeWidth="4"
            transform="rotate(10 305 105)"
          />

          <ellipse
            cx="465"
            cy="110"
            rx="62"
            ry="28"
            fill="#052e24"
            stroke="#10b981"
            strokeWidth="4"
            transform="rotate(-8 465 110)"
          />

          {/* Nuclei */}
          <ellipse cx="145" cy="110" rx="18" ry="11" fill="#10b981" />
          <ellipse cx="305" cy="105" rx="18" ry="11" fill="#10b981" />
          <ellipse cx="465" cy="110" rx="18" ry="11" fill="#10b981" />

          {/* Movement arrows */}
          <path
            d="M210 70 H265"
            stroke="#34d399"
            strokeWidth="4"
          />

          <path
            d="M255 60 L270 70 L255 80"
            fill="none"
            stroke="#34d399"
            strokeWidth="4"
          />

          <path
            d="M370 145 H425"
            stroke="#34d399"
            strokeWidth="4"
          />

          <path
            d="M415 135 L430 145 L415 155"
            fill="none"
            stroke="#34d399"
            strokeWidth="4"
          />
        </svg>

        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="text-sm font-medium text-emerald-300">
            Cell movement + tissue interaction
          </span>
        </div>
      </div>
    ),
  },

  {
    code: 'LAR',
    name: 'Luminal Androgen Receptor',
    tagline: 'Think: Hormone-driven signalling',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-950/30',
    borderColor: 'border-amber-900/50',
    description:
      'LAR is characterized by strong androgen receptor (AR) signalling and luminal-like molecular characteristics. In simple terms, hormone-related signalling plays an important role.',
    points: [
      'Androgen receptor signalling is prominent',
      'Hormone-related pathways are enriched',
      'The subtype has luminal-like molecular characteristics',
    ],
    pathways: [
      'Androgen receptor signalling',
      'Hormone regulation',
      'Luminal programmes',
      'Gene regulation',
    ],
    visual: (
      <div className="relative h-56 overflow-hidden rounded-2xl bg-[#020617] border border-amber-900/40">
        <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full">

          {/* Hormone molecule */}
          <circle cx="90" cy="110" r="22" fill="#d97706" />
          <circle cx="65" cy="82" r="10" fill="#f59e0b" />
          <circle cx="115" cy="82" r="10" fill="#f59e0b" />
          <circle cx="65" cy="138" r="10" fill="#f59e0b" />
          <circle cx="115" cy="138" r="10" fill="#f59e0b" />

          {/* Signal */}
          <path
            d="M130 110 H225"
            stroke="#fbbf24"
            strokeWidth="4"
          />

          <path
            d="M215 100 L230 110 L215 120"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="4"
          />

          {/* Cell */}
          <circle
            cx="345"
            cy="110"
            r="62"
            fill="#451a03"
            stroke="#f59e0b"
            strokeWidth="4"
          />

          {/* Nucleus */}
          <circle
            cx="345"
            cy="110"
            r="31"
            fill="#92400e"
            stroke="#fbbf24"
            strokeWidth="3"
          />

          {/* AR */}
          <rect
            x="330"
            y="92"
            width="30"
            height="36"
            rx="7"
            fill="#fbbf24"
          />

          <text
            x="327"
            y="158"
            fill="#fde68a"
            fontSize="15"
            fontWeight="bold"
          >
            AR
          </text>

          {/* Gene signalling */}
          <path
            d="M410 110 H500"
            stroke="#fbbf24"
            strokeWidth="4"
          />

          <path
            d="M490 100 L505 110 L490 120"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="4"
          />

          <text
            x="460"
            y="145"
            fill="#fde68a"
            fontSize="14"
          >
            Gene
          </text>

          <text
            x="450"
            y="164"
            fill="#fde68a"
            fontSize="14"
          >
            signalling
          </text>
        </svg>

        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="text-sm font-medium text-amber-300">
            Androgen receptor signalling
          </span>
        </div>
      </div>
    ),
  },
];

export default function SubtypeExplorer() {
  return (
    <div className="min-h-screen -m-6 p-6 bg-[#020617] text-slate-100">

      {/* Header */}
      <div className="max-w-4xl mb-10">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium mb-4">
          🧬 Molecular Landscape
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Understanding TNBC Subtypes
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          Triple-Negative Breast Cancer (TNBC) is not one single biological
          disease. Researchers have identified different molecular patterns
          that help explain how tumour cells grow, behave, and interact with
          their surroundings.
        </p>

        <div className="mt-6 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <p className="text-slate-400 leading-relaxed">
            <strong className="text-white">
              New to biology?
            </strong>{' '}
            Think of these subtypes as four different biological{' '}
            <span className="text-blue-400 font-semibold">
              profiles
            </span>{' '}
            that describe what is happening inside tumour cells.
          </p>
        </div>

      </div>

      {/* Subtype Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {SUBTYPES.map((s) => (

          <div
            key={s.code}
            className="rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700"
          >

            {/* Accent */}
            <div className={`${s.color} h-1.5 w-full`} />

            <div className="p-6">

              {/* Illustration */}
              {s.visual}

              {/* Title */}
              <div className="flex justify-between items-start gap-4 mt-6 mb-4">

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                    {s.code}
                  </p>

                  <h2 className="text-2xl font-bold text-white">
                    {s.name}
                  </h2>
                </div>

                <div
                  className={`w-10 h-10 rounded-xl ${s.lightColor} border ${s.borderColor} flex items-center justify-center`}
                >
                  <span className="text-lg">
                    {s.code === 'BL1' && '🧬'}
                    {s.code === 'BL2' && '⚡'}
                    {s.code === 'M' && '↗'}
                    {s.code === 'LAR' && '◉'}
                  </span>
                </div>

              </div>

              {/* Simple idea */}
              <div
                className={`rounded-xl p-4 mb-5 ${s.lightColor} border ${s.borderColor}`}
              >
                <p className="text-[11px] text-slate-500 mb-1 font-semibold tracking-widest">
                  SIMPLE IDEA
                </p>

                <p className="font-bold text-lg text-white">
                  {s.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                {s.description}
              </p>

              {/* What's happening */}
              <div className="mb-6">

                <h3 className="font-bold text-lg text-white mb-3">
                  🔬 What's happening?
                </h3>

                <div className="space-y-3">

                  {s.points.map((point, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full ${s.color} flex-shrink-0`}
                      />

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* Science */}
              <div>

                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                  🧬 Science behind it
                </h3>

                <div className="flex flex-wrap gap-2">

                  {s.pathways.map((pathway) => (

                    <span
                      key={pathway}
                      className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-400"
                    >
                      {pathway}
                    </span>

                  ))}

                </div>

              </div>

              {/* AI connection */}
              <div className="mt-6 pt-5 border-t border-slate-800">

                <h3 className="font-bold text-white mb-2">
                  🤖 Why does this matter for our AI?
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Our system analyses H&E tissue images and demonstrates how
                  an AI workflow can classify samples according to these
                  molecular subtype categories and provide visual
                  explainability.
                </p>

              </div>

            </div>
          </div>

        ))}

      </div>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto text-center pt-8">

        <p className="text-sm text-slate-600 leading-relaxed">
          These subtype descriptions represent biological patterns used in
          research. They should not be interpreted as an individual patient's
          clinical diagnosis.
        </p>

      </div>

    </div>
  );
}