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
   BL1 VISUAL
========================================================= */

function BL1Visual() {
  return (
    <div className="relative h-[430px] overflow-hidden rounded-3xl border border-blue-500/40 bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.22),transparent_45%)]" />

      <svg
        viewBox="0 0 700 430"
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
            d="M80 55 C170 105 170 145 80 195 C-10 245 -10 290 80 345"
            fill="none"
            stroke="#2563eb"
            strokeWidth="6"
          />

          <path
            d="M155 55 C65 105 65 145 155 195 C245 245 245 290 155 345"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="6"
          />

          {[85, 125, 165, 205, 245, 285, 325].map((y) => (
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

        <circle
          cx="405"
          cy="205"
          r="95"
          fill="#0f172a"
          stroke="#3b82f6"
          strokeWidth="5"
        />

        <circle
          cx="405"
          cy="205"
          r="35"
          fill="#2563eb"
          opacity="0.9"
        />

        <circle
          cx="405"
          cy="205"
          r="115"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.25"
        />

        <path
          d="M510 205 H560"
          stroke="#60a5fa"
          strokeWidth="5"
        />

        <path
          d="M545 193 L562 205 L545 217"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="5"
        />

        <circle
          cx="615"
          cy="165"
          r="43"
          fill="#0f172a"
          stroke="#3b82f6"
          strokeWidth="4"
        />

        <circle
          cx="615"
          cy="245"
          r="43"
          fill="#0f172a"
          stroke="#3b82f6"
          strokeWidth="4"
        />

        <circle cx="615" cy="165" r="17" fill="#2563eb" />
        <circle cx="615" cy="245" r="17" fill="#2563eb" />

        <text
          x="250"
          y="395"
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
   BL2 VISUAL
========================================================= */

function BL2Visual() {
  return (
    <div className="relative h-[430px] overflow-hidden rounded-3xl border border-amber-500/40 bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(245,158,11,0.22),transparent_48%)]" />

      <svg
        viewBox="0 0 700 430"
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

        {[100, 185, 270].map((y) => (
          <g key={y}>
            <circle
              cx="65"
              cy={y}
              r="18"
              fill="#f59e0b"
              filter="url(#orangeGlow)"
            />

            <path
              d={`M90 ${y} H220`}
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

        <circle
          cx="330"
          cy="215"
          r="105"
          fill="#451a03"
          stroke="#f59e0b"
          strokeWidth="5"
        />

        <path
          d="M300 105 V140 M360 105 V140"
          stroke="#fbbf24"
          strokeWidth="8"
        />

        <circle
          cx="330"
          cy="215"
          r="40"
          fill="#d97706"
          filter="url(#orangeGlow)"
        />

        <circle
          cx="500"
          cy="125"
          r="30"
          fill="#78350f"
          stroke="#fbbf24"
          strokeWidth="3"
        />

        <circle
          cx="565"
          cy="215"
          r="30"
          fill="#78350f"
          stroke="#fbbf24"
          strokeWidth="3"
        />

        <circle
          cx="500"
          cy="305"
          r="30"
          fill="#78350f"
          stroke="#fbbf24"
          strokeWidth="3"
        />

        <path
          d="M370 180 L475 130"
          stroke="#fbbf24"
          strokeWidth="4"
        />

        <path
          d="M370 215 H535"
          stroke="#fbbf24"
          strokeWidth="4"
        />

        <path
          d="M370 250 L475 300"
          stroke="#fbbf24"
          strokeWidth="4"
        />

        <text
          x="420"
          y="390"
          fill="#fbbf24"
          fontSize="18"
          fontWeight="bold"
        >
          GROWTH • SIGNALS • METABOLISM
        </text>
      </svg>

      <div className="absolute left-5 top-5 rounded-full border border-amber-500/40 bg-amber-950/70 px-4 py-2 text-xs font-bold tracking-wider text-amber-300">
        BL2 • GROWTH + METABOLISM
      </div>

      <div className="absolute right-5 top-20 rounded-xl border border-amber-500/30 bg-slate-950/80 p-3 text-xs text-amber-300">
        ⚡ Growth-factor signalling
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-amber-500/30 bg-slate-950/80 p-3 text-xs text-amber-300">
        ATP ↑ • Energy use
      </div>
    </div>
  );
}

/* =========================================================
   M VISUAL
========================================================= */

function MVisual() {
  return (
    <div className="relative h-[430px] overflow-hidden rounded-3xl border border-emerald-500/40 bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_50%,rgba(16,185,129,0.20),transparent_50%)]" />

      <svg
        viewBox="0 0 700 430"
        className="absolute inset-0 h-full w-full"
      >
        <g opacity="0.35">
          <path
            d="M0 100 C100 30 170 150 270 80 S460 30 700 110"
            fill="none"
            stroke="#10b981"
            strokeWidth="5"
          />

          <path
            d="M0 310 C100 240 170 360 270 290 S460 240 700 320"
            fill="none"
            stroke="#10b981"
            strokeWidth="5"
          />

          <path
            d="M100 0 L160 430"
            stroke="#34d399"
            strokeWidth="3"
          />

          <path
            d="M500 0 L430 430"
            stroke="#34d399"
            strokeWidth="3"
          />
        </g>

        <ellipse
          cx="130"
          cy="235"
          rx="75"
          ry="34"
          fill="#052e24"
          stroke="#10b981"
          strokeWidth="5"
          transform="rotate(-12 130 235)"
        />

        <ellipse
          cx="340"
          cy="160"
          rx="78"
          ry="33"
          fill="#052e24"
          stroke="#10b981"
          strokeWidth="5"
          transform="rotate(8 340 160)"
        />

        <ellipse
          cx="540"
          cy="260"
          rx="78"
          ry="34"
          fill="#052e24"
          stroke="#10b981"
          strokeWidth="5"
          transform="rotate(-8 540 260)"
        />

        <path
          d="M205 220 H270"
          stroke="#34d399"
          strokeWidth="5"
        />

        <path
          d="M255 208 L272 220 L255 232"
          fill="none"
          stroke="#34d399"
          strokeWidth="5"
        />

        <path
          d="M420 185 H485"
          stroke="#34d399"
          strokeWidth="5"
        />

        <path
          d="M470 173 L487 185 L470 197"
          fill="none"
          stroke="#34d399"
          strokeWidth="5"
        />

        <text
          x="225"
          y="395"
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

      <div className="absolute right-5 top-20 rounded-xl border border-emerald-500/30 bg-slate-950/80 p-3 text-xs text-emerald-300">
        ↗ EMT transition
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-emerald-500/30 bg-slate-950/80 p-3 text-xs text-emerald-300">
        Cell migration + ECM
      </div>
    </div>
  );
}

/* =========================================================
   LAR VISUAL
========================================================= */

function LARVisual() {
  return (
    <div className="relative h-[430px] overflow-hidden rounded-3xl border border-purple-500/40 bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(192,132,252,0.22),transparent_48%)]" />

      <svg
        viewBox="0 0 700 430"
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

        <circle
          cx="70"
          cy="215"
          r="24"
          fill="#c084fc"
          filter="url(#purpleGlow)"
        />

        <circle
          cx="70"
          cy="215"
          r="42"
          fill="none"
          stroke="#c084fc"
          strokeWidth="2"
          opacity="0.4"
        />

        <path
          d="M115 215 H225"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        <path
          d="M210 203 L228 215 L210 227"
          fill="none"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        <circle
          cx="345"
          cy="215"
          r="105"
          fill="#2e1065"
          stroke="#c084fc"
          strokeWidth="5"
        />

        <circle
          cx="345"
          cy="215"
          r="52"
          fill="#581c87"
          stroke="#e9d5ff"
          strokeWidth="3"
        />

        <rect
          x="322"
          y="192"
          width="46"
          height="46"
          rx="10"
          fill="#c084fc"
          filter="url(#purpleGlow)"
        />

        <text
          x="332"
          y="222"
          fill="#2e1065"
          fontSize="19"
          fontWeight="bold"
        >
          AR
        </text>

        <path
          d="M400 215 H520"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        <path
          d="M505 203 L523 215 L505 227"
          fill="none"
          stroke="#d8b4fe"
          strokeWidth="5"
        />

        <path
          d="M555 155 C610 180 610 210 555 235 C500 260 500 290 555 315"
          fill="none"
          stroke="#c084fc"
          strokeWidth="4"
        />

        <path
          d="M610 155 C555 180 555 210 610 235 C665 260 665 290 610 315"
          fill="none"
          stroke="#e9d5ff"
          strokeWidth="4"
        />

        <text
          x="410"
          y="395"
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

      <div className="absolute right-5 top-20 rounded-xl border border-purple-500/30 bg-slate-950/80 p-3 text-xs text-purple-300">
        ◉ Androgen receptor activation
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-purple-500/30 bg-slate-950/80 p-3 text-xs text-purple-300">
        Gene regulation
      </div>
    </div>
  );
}

/* =========================================================
   VISUAL SELECTOR
========================================================= */

function Visual({ subtype }: { subtype: Subtype }) {
  switch (subtype) {
    case 'BL1':
      return <BL1Visual />;

    case 'BL2':
      return <BL2Visual />;

    case 'M':
      return <MVisual />;

    case 'LAR':
      return <LARVisual />;

    default:
      return null;
  }
}

/* =========================================================
   SUBTYPE CARD
========================================================= */

function SubtypeCard({
  subtype,
  onClick,
}: {
  subtype: Subtype;
  onClick: () => void;
}) {
  const item = DATA[subtype];

  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: '#1e293b',
        background: 'rgba(15,23,42,0.7)',
      }}
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl"
        style={{
          background: `${item.color}18`,
          border: `1px solid ${item.color}50`,
        }}
      >
        {subtype === 'BL1' && '🧬'}
        {subtype === 'BL2' && '⚡'}
        {subtype === 'M' && '↗'}
        {subtype === 'LAR' && '◉'}
      </div>

      <div
        className="text-xl font-bold"
        style={{ color: item.color }}
      >
        {subtype}
      </div>

      <div className="mt-1 font-semibold text-white">
        {item.name}
      </div>

      <div className="mt-2 text-xs leading-relaxed text-slate-500">
        {item.short}
      </div>

      <div
        className="mt-5 text-sm"
        style={{ color: item.color }}
      >
        Explore →
      </div>
    </button>
  );
}

/* =========================================================
   SELECTED SUBTYPE PAGE
========================================================= */

function SelectedSubtype({
  subtype,
  onBack,
}: {
  subtype: Subtype;
  onBack: () => void;
}) {
  const active = DATA[subtype];

  return (
    <div
      key={subtype}
      className="overflow-hidden rounded-3xl border bg-slate-900/60"
      style={{
        borderColor: `${active.color}55`,
        boxShadow: `0 0 70px ${active.color}12`,
      }}
    >
      {/* TOP BAR */}
      <div className="border-b border-slate-800 p-6 md:p-8">

        <button
          type="button"
          onClick={onBack}
          className="mb-8 text-sm text-slate-400 transition hover:text-white"
        >
          ← Explore all subtypes
        </button>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>

            <div
              className="text-sm font-bold tracking-[0.25em]"
              style={{ color: active.color }}
            >
              {subtype}
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

      {/* CONTENT */}
      <div className="p-6 md:p-8">

        {/* ONLY SELECTED VISUAL */}
        <Visual subtype={subtype} />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* WHAT'S HAPPENING */}
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

          {/* SCIENCE */}
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
                how an AI workflow can classify samples according to these
                molecular subtype categories and provide visual explainability.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function SubtypeExplorer() {

  /*
    null = show all four subtype cards
    BL1/BL2/M/LAR = show only that subtype
  */
  const [selected, setSelected] = useState<Subtype | null>(null);

  return (
    <div className="min-h-screen -m-6 bg-[#020617] px-6 py-8 text-slate-100">

      <div className="mx-auto max-w-6xl">

        {/* =================================================
            ALL SUBTYPES VIEW
        ================================================= */}

        {selected === null && (

          <>
            <div className="mb-10">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
                🧬 Molecular Landscape
              </div>

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                <div>

                  <h1 className="text-5xl font-bold leading-tight text-white">
                    Four biological perspectives.
                  </h1>

                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-400">
                    Explore the biological programmes associated with
                    different TNBC molecular subtype profiles.
                  </p>

                </div>

                <div className="text-sm text-slate-500">
                  Select a subtype →
                </div>

              </div>

            </div>

            {/* FOUR CARDS */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {(Object.keys(DATA) as Subtype[]).map((subtype) => (

                <SubtypeCard
                  key={subtype}
                  subtype={subtype}
                  onClick={() => setSelected(subtype)}
                />

              ))}

            </div>

            {/* INFO */}
            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

              <h2 className="text-xl font-bold text-white">
                From Tissue to Insight
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Explore each subtype individually to understand its
                biological programmes and how they connect to AI-based
                tissue analysis.
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

            <div className="mx-auto max-w-4xl py-8 text-center">

              <p className="text-sm leading-relaxed text-slate-600">
                These subtype descriptions represent biological patterns
                used in research. They should not be interpreted as an
                individual patient's clinical diagnosis.
              </p>

            </div>
          </>

        )}

        {/* =================================================
            SELECTED SUBTYPE VIEW
        ================================================= */}

        {selected !== null && (

          <SelectedSubtype
            subtype={selected}
            onBack={() => setSelected(null)}
          />

        )}

      </div>

    </div>
  );
}