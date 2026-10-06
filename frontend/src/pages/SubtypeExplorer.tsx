import React, { useState } from 'react';

type Subtype = 'BL1' | 'BL2' | 'M' | 'LAR';

const DATA: Record<
  Subtype,
  {
    name: string;
    short: string;
    color: string;
    description: string;
    points: string[];
    pathways: string[];
  }
> = {
  BL1: {
    name: 'Basal-Like 1',
    short: 'DNA + rapid proliferation',
    color: '#3b82f6',
    description:
      'BL1 is mainly associated with strong cell division and DNA-related activity. In simple terms, the cells show biological signals linked to rapid growth.',
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
  },

  BL2: {
    name: 'Basal-Like 2',
    short: 'Growth signals + metabolism',
    color: '#f59e0b',
    description:
      'BL2 is associated with strong growth-factor signalling and changes in how cells use energy. The cells show active growth and metabolic programmes.',
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
  },

  M: {
    name: 'Mesenchymal',
    short: 'EMT + movement + tissue interaction',
    color: '#10b981',
    description:
      'The Mesenchymal subtype is associated with epithelial-mesenchymal transition (EMT) and processes involved in cell movement and interaction with surrounding tissue.',
    points: [
      'Cells show programmes linked to movement',
      'EMT-related biological processes are active',
      'Cells interact strongly with their surrounding environment',
    ],
    pathways: [
      'Epithelial-mesenchymal transition',
      'Cell motility',
      'Extracellular matrix',
      'Tissue interaction',
    ],
  },

  LAR: {
    name: 'Luminal Androgen Receptor',
    short: 'Hormone-driven signalling',
    color: '#c084fc',
    description:
      'LAR is characterized by strong androgen receptor (AR) signalling and luminal-like molecular characteristics. Hormone-related signalling plays an important role.',
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
  },
};

/* =========================================================
   BL1 — DNA + CELL DIVISION
========================================================= */

function BL1Visual() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-3xl border border-blue-500/40 bg-[#020617]">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.22),transparent_45%)]" />

      {/* DNA helix */}
      <svg
        viewBox="0 0 700 380"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="blueGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#blueGlow)">
          <path
            d="M80 35 C170 85 170 125 80 175 C-10 225 -10 270 80 330"
            fill="none"
            stroke="#2563eb"
            strokeWidth="6"
          />

          <path
            d="M155 35 C65 85 65 125 155 175 C245 225 245 270 155 330"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="6"
          />

          {[65, 105, 145, 185, 225, 265, 305].map((y) => (
            <line
              key={y}
              x1="68"
              y1={y}
              x2="167"
              y2={y}
              stroke="#93c5fd"
              strokeWidth="3"
              opacity="0.8"
            />
          ))}
        </g>

        {/* Main dividing cell */}
        <circle
          cx="405"
          cy="190"
          r="92"
          fill="#0f172a"
          stroke="#3b82f6"
          strokeWidth="5"
        />

        <circle
          cx="405"
          cy="190"
          r="34"
          fill="#2563eb"
          opacity="0.9"
        />

        <circle
          cx="405"
          cy="190"
          r="110"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.25"
          className="animate-ping"
        />

        {/* division */}
        <path
          d="M505 190 H555"
          stroke="#60a5fa"
          strokeWidth="5"
        />

        <path
          d="M540 178 L557 190 L540 202"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="5"
        />

        <circle
          cx="610"
          cy="150"
          r="43"
          fill="#0f172a"
          stroke="#3b82f6"
          strokeWidth="4"
        />

        <circle
          cx="610"
          cy="230"
          r="43"
          fill="#0f172a"
          stroke="#3b82f6"
          strokeWidth="4"
        />

        <circle cx="610" cy="150" r="17" fill="#2563eb" />
        <circle cx="610" cy="230" r="17" fill="#2563eb" />

        <text
          x="280"
          y="350"
          fill="#60a5fa"
          fontSize="18"
          fontWeight="bold"
        >
          DNA DAMAGE • REPAIR • CELL CYCLE
        </text>
      </svg>

      <div className="absolute left-5 top-5 rounded-full border border-blue-500/40 bg-blue-950/70 px-4 py-2 text-xs font-bold tracking-wider text-blue-300">
        BL1 • RAPID PROLIFERATION
      </div>

      <div className="absolute right-5 top-20 rounded-xl border border-blue-500/30 bg-slate-950/80 p-3 text-xs text-blue-300">
        🧬 DNA damage &amp; repair
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-blue-500/30 bg-slate-950/80 p-3 text-xs text-blue-300">
        ⚡ Active cell cycle
      </div>
    </div>
  );
}

/* =========================================================
   BL2 — GROWTH SIGNALS + METABOLISM
========================================================= */

function BL2Visual() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-3xl border border-amber-500/40 bg-[#020617]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(245,158,11,0.22),transparent_48%)]" />

      <svg
        viewBox="0 0 700 380"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="orangeGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* signalling molecules */}
        {[80, 155, 230].map((y, i) => (
          <g key={y}>
            <circle
              cx="65"
              cy={y}
              r="17"
              fill="#f59e0b"
              filter="url(#orangeGlow)"
              className={i === 1 ? 'animate-pulse' : ''}
            />

            <path
              d={`M88 ${y} H220`}
              stroke="#fbbf24"
              strokeWidth="4"
              strokeDasharray="12 8"
            />

            <path
              d={`M205 ${y - 11} L222 ${y} L205 ${y + 11}`}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="4"
            />
          </g>
        ))}

        {/* cell */}
        <circle
          cx="330"
          cy="190"
          r="100"
          fill="#451a03"
          stroke="#f59e0b"
          strokeWidth="5"
        />

        {/* receptor */}
        <path
          d="M300 92 V125 M360 92 V125"
          stroke="#fbbf24"
          strokeWidth="8"
        />

        {/* nucleus */}
        <circle
          cx="330"
          cy="190"
          r="38"
          fill="#d97706"
          filter="url(#orangeGlow)"
        />

        {/* metabolic network */}
        <circle cx="500" cy="110" r="29" fill="#78350f" stroke="#fbbf24" strokeWidth="3" />
        <circle cx="565" cy="190" r="29" fill="#78350f" stroke="#fbbf24" strokeWidth="3" />
        <circle cx="500" cy="270" r="29" fill="#78350f" stroke="#fbbf24" strokeWidth="3" />

        <path d="M370 160 L475 115" stroke="#fbbf24" strokeWidth="4" />
        <path d="M370 190 H535" stroke="#fbbf24" strokeWidth="4" />
        <path d="M370 220 L475 265" stroke="#fbbf24" strokeWidth="4" />

        <text
          x="430"
          y="330"
          fill="#fbbf24"
          fontSize="18"
          fontWeight="bold"
        >
          METABOLIC PROGRAMMES
        </text>
      </svg>

      <div className="absolute left-5 top-5 rounded-full border border-amber-500/40 bg-amber-950/70 px-4 py-2 text-xs font-bold tracking-wider text-amber-300">
        BL2 • GROWTH + METABOLISM
      </div>

      <div className="absolute right-5 top-16 rounded-xl border border-amber-500/30 bg-slate-950/80 p-3 text-xs text-amber-300">
        ⚡ Growth-factor signalling
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-amber-500/30 bg-slate-950/80 p-3 text-xs text-amber-300">
        ATP ↑ • Energy use
      </div>
    </div>
  );
}

/* =========================================================
   M — EMT + CELL MOVEMENT
========================================================= */

function MVisual() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-3xl border border-emerald-500/40 bg-[#020617]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_50%,rgba(16,185,129,0.20),transparent_50%)]" />

      <svg
        viewBox="0 0 700 380"
        className="absolute inset-0 h-full w-full"
      >
        {/* ECM network */}
        <g opacity="0.35">
          <path
            d="M0 90 C100 20 170 140 270 70 S460 20 700 100"
            fill="none"
            stroke="#10b981"
            strokeWidth="5"
          />

          <path
            d="M0 280 C100 210 170 330 270 260 S460 210 700 290"
            fill="none"
            stroke="#10b981"
            strokeWidth="5"
          />

          <path
            d="M100 0 L160 380"
            stroke="#34d399"
            strokeWidth="3"
          />

          <path
            d="M500 0 L430 380"
            stroke="#34d399"
            strokeWidth="3"
          />
        </g>

        {/* migrating cells */}
        <g className="animate-pulse">

          <ellipse
            cx="130"
            cy="210"
            rx="75"
            ry="34"
            fill="#052e24"
            stroke="#10b981"
            strokeWidth="5"
            transform="rotate(-12 130 210)"
          />

          <ellipse
            cx="340"
            cy="145"
            rx="78"
            ry="33"
            fill="#052e24"
            stroke="#10b981"
            strokeWidth="5"
            transform="rotate(8 340 145)"
          />

          <ellipse
            cx="540"
            cy="235"
            rx="78"
            ry="34"
            fill="#052e24"
            stroke="#10b981"
            strokeWidth="5"
            transform="rotate(-8 540 235)"
          />
        </g>

        {/* migration arrows */}
        <path d="M205 195 H270" stroke="#34d399" strokeWidth="5" />
        <path d="M255 183 L272 195 L255 207" fill="none" stroke="#34d399" strokeWidth="5" />

        <path d="M420 170 H485" stroke="#34d399" strokeWidth="5" />
        <path d="M470 158 L487 170 L470 182" fill="none" stroke="#34d399" strokeWidth="5" />

        <text
          x="225"
          y="335"
          fill="#34d399"
          fontSize="18"
          fontWeight="bold"
        >
          EMT • CELL MOTILITY • ECM
        </text>
      </svg>

      <div className="absolute left-5 top-5 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-4 py-2 text-xs font-bold tracking-wider text-emerald-300">
        M • MESENCHYMAL
      </div>

      <div className="absolute right-5 top-16 rounded-xl border border-emerald-500/30 bg-slate-950/80 p-3 text-xs text-emerald-300">
        ↗ EMT transition
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-emerald-500/30 bg-slate-950/80 p-3 text-xs text-emerald-300">
        Cell migration + ECM
      </div>
    </div>
  );
}

/* =========================================================
   LAR — ANDROGEN RECEPTOR
========================================================= */

function LARVisual() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-3xl border border-purple-500/40 bg-[#020617]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(192,132,252,0.22),transparent_48%)]" />

      <svg
        viewBox="0 0 700 380"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="purpleGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* androgen hormone */}
        <circle
          cx="70"
          cy="190"
          r="24"
          fill="#c084fc"
          filter="url(#purpleGlow)"
          className="animate-pulse"
        />

        <circle
          cx="70"
          cy="190"
          r="42"
          fill="none"
          stroke="#c084fc"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* signal */}
        <path
          d="M115 190 H225"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        <path
          d="M210 178 L228 190 L210 202"
          fill="none"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        {/* cell */}
        <circle
          cx="345"
          cy="190"
          r="105"
          fill="#2e1065"
          stroke="#c084fc"
          strokeWidth="5"
        />

        {/* nucleus */}
        <circle
          cx="345"
          cy="190"
          r="52"
          fill="#581c87"
          stroke="#e9d5ff"
          strokeWidth="3"
        />

        {/* AR */}
        <rect
          x="322"
          y="167"
          width="46"
          height="46"
          rx="10"
          fill="#c084fc"
          filter="url(#purpleGlow)"
        />

        <text
          x="332"
          y="197"
          fill="#2e1065"
          fontSize="19"
          fontWeight="bold"
        >
          AR
        </text>

        {/* gene regulation */}
        <path
          d="M400 190 H520"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        <path
          d="M505 178 L523 190 L505 202"
          fill="none"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        {/* DNA */}
        <path
          d="M555 130 C610 155 610 185 555 210 C500 235 500 265 555 290"
          fill="none"
          stroke="#c084fc"
          strokeWidth="4"
        />

        <path
          d="M610 130 C555 155 555 185 610 210 C665 235 665 265 610 290"
          fill="none"
          stroke="#e9d5ff"
          strokeWidth="4"
        />

        <text
          x="440"
          y="335"
          fill="#d8b4fe"
          fontSize="18"
          fontWeight="bold"
        >
          AR → NUCLEUS → GENE REGULATION
        </text>
      </svg>

      <div className="absolute left-5 top-5 rounded-full border border-purple-500/40 bg-purple-950/70 px-4 py-2 text-xs font-bold tracking-wider text-purple-300">
        LAR • HORMONE SIGNALLING
      </div>

      <div className="absolute right-5 top-16 rounded-xl border border-purple-500/30 bg-slate-950/80 p-3 text-xs text-purple-300">
        ◉ Androgen receptor activation
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-purple-500/30 bg-slate-950/80 p-3 text-xs text-purple-300">
        Gene regulation
      </div>
    </div>
  );
}

function Visual({ subtype }: { subtype: Subtype }) {
  if (subtype === 'BL1') return <BL1Visual />;
  if (subtype === 'BL2') return <BL2Visual />;
  if (subtype === 'M') return <MVisual />;
  return <LARVisual />;
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function SubtypeExplorer() {
  const [selected, setSelected] = useState<Subtype>('BL1');

  const active = DATA[selected];

  return (
    <div className="min-h-screen -m-6 bg-[#020617] px-6 py-8 text-slate-100">

      {/* HEADER */}
      <div className="mx-auto max-w-6xl">

        <div className="mb-10">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
            🧬 Molecular Landscape
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white">
            Understanding{' '}
            <span className="text-blue-400">
              TNBC Subtypes
            </span>
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-400">
            Triple-Negative Breast Cancer (TNBC) is not one single
            biological disease. Researchers have identified different
            molecular patterns that help explain how tumour cells grow,
            behave, and interact with their surroundings.
          </p>

          <div className="mt-6 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <p className="font-semibold text-white">
              💡 New to biology?
            </p>

            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              Think of these subtypes as four different biological
              profiles that describe what is happening inside tumour cells.
            </p>

          </div>

        </div>

        {/* SELECTOR */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {(Object.keys(DATA) as Subtype[]).map((code) => {

            const item = DATA[code];
            const isActive = selected === code;

            return (
              <button
                key={code}
                onClick={() => setSelected(code)}
                className="group rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: isActive
                    ? `${item.color}90`
                    : '#1e293b',
                  background: isActive
                    ? `${item.color}12`
                    : 'rgba(15,23,42,0.7)',
                  boxShadow: isActive
                    ? `0 0 35px ${item.color}25`
                    : 'none',
                }}
              >

                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}50`,
                  }}
                >
                  {code === 'BL1' && '🧬'}
                  {code === 'BL2' && '⚡'}
                  {code === 'M' && '↗'}
                  {code === 'LAR' && '◉'}
                </div>

                <div
                  className="text-xl font-bold"
                  style={{ color: item.color }}
                >
                  {code}
                </div>

                <div className="mt-1 font-semibold text-white">
                  {item.name}
                </div>

                <div className="mt-2 text-xs text-slate-500">
                  {item.short}
                </div>

              </button>
            );
          })}

        </div>

        {/* ACTIVE SUBTYPE */}
        <div
          className="overflow-hidden rounded-3xl border bg-slate-900/60"
          style={{
            borderColor: `${active.color}55`,
            boxShadow: `0 0 70px ${active.color}12`,
          }}
        >

          {/* title */}
          <div className="border-b border-slate-800 p-6 md:p-8">

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

              <div>

                <div
                  className="text-sm font-bold tracking-[0.25em]"
                  style={{ color: active.color }}
                >
                  {selected}
                </div>

                <h2 className="mt-1 text-4xl font-bold text-white">
                  {active.name}
                </h2>

              </div>

              <div
                className="w-fit rounded-full border px-4 py-2 text-sm font-semibold"
                style={{
                  color: active.color,
                  borderColor: `${active.color}55`,
                  background: `${active.color}10`,
                }}
              >
                {active.short}
              </div>

            </div>

          </div>

          <div className="p-6 md:p-8">

            {/* VISUAL */}
            <Visual subtype={selected} />

            {/* INFO */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">

              <div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  🔬 What's happening?
                </h3>

                <p className="mb-6 leading-relaxed text-slate-400">
                  {active.description}
                </p>

                <div className="space-y-4">

                  {active.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >

                      <span
                        className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                        style={{
                          background: active.color,
                          boxShadow: `0 0 12px ${active.color}`,
                        }}
                      />

                      <p className="text-sm leading-relaxed text-slate-400">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              <div>

                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  🧬 Science behind it
                </h3>

                <div className="flex flex-wrap gap-2">

                  {active.pathways.map((pathway) => (

                    <span
                      key={pathway}
                      className="rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs text-slate-300"
                    >
                      {pathway}
                    </span>

                  ))}

                </div>

                {/* AI CONNECTION */}
                <div
                  className="mt-8 rounded-2xl border p-5"
                  style={{
                    borderColor: `${active.color}30`,
                    background: `${active.color}08`,
                  }}
                >

                  <h3 className="mb-2 font-bold text-white">
                    🤖 Why does this matter for our AI?
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    Our system analyses H&amp;E tissue images and demonstrates
                    how an AI workflow can classify samples according to
                    these molecular subtype categories and provide visual
                    explainability.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* AI FLOW */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

          <h2 className="text-xl font-bold text-white">
            From Tissue to Insight
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            How image analysis connects with molecular subtype interpretation.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

            {[
              'H&E Image',
              'CNN / ResNet50',
              'AI Prediction',
              'BL1 • BL2 • M • LAR',
              'Grad-CAM',
              'Visual Explainability',
            ].map((step, index) => (

              <React.Fragment key={step}>

                <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-center text-sm text-slate-300">
                  {step}
                </div>

                {index < 5 && (
                  <span className="font-bold text-blue-400">
                    →
                  </span>
                )}

              </React.Fragment>

            ))}

          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="mx-auto max-w-4xl py-8 text-center">

          <p className="text-sm leading-relaxed text-slate-600">
            These subtype descriptions represent biological patterns used
            in research. They should not be interpreted as an individual
            patient's clinical diagnosis.
          </p>

        </div>

      </div>

    </div>
  );
}