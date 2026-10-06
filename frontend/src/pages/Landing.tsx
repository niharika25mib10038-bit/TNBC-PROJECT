import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  Dna,
  Microscope,
  Sparkles,
  Activity,
  Layers3,
  Eye,
  FlaskConical,
} from 'lucide-react';

import heroImage from '../assets/tnbc-hero.png';

const subtypes = [
  {
    code: 'BL1',
    name: 'Basal-like 1',
    description:
      'Highly proliferative biology with strong cell-cycle and DNA-damage signatures.',
  },
  {
    code: 'BL2',
    name: 'Basal-like 2',
    description:
      'Growth-factor signalling and metabolic pathway enrichment.',
  },
  {
    code: 'M',
    name: 'Mesenchymal',
    description:
      'Mesenchymal and extracellular-matrix associated biological programs.',
  },
  {
    code: 'LAR',
    name: 'Luminal Androgen Receptor',
    description:
      'Androgen-receptor signalling with luminal molecular characteristics.',
  },
];

const pipeline = [
  {
    number: '01',
    title: 'H&E Image',
    text: 'Upload a histopathology image for computational analysis.',
    icon: Microscope,
  },
  {
    number: '02',
    title: 'Preprocessing',
    text: 'Tissue detection, tiling and stain normalization prepare the image.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Deep Learning',
    text: 'A ResNet-50 architecture extracts visual representations.',
    icon: Brain,
  },
  {
    number: '04',
    title: 'Interpretation',
    text: 'Subtype probabilities and explainability visualizations are generated.',
    icon: Eye,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#080708] text-white">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080708]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/10">
              <Dna className="h-5 w-5 text-fuchsia-300" />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">
                TNBC-INSIGHT
              </p>

              <p className="text-[10px] tracking-[0.25em] text-white/40">
                COMPUTATIONAL PATHOLOGY
              </p>
            </div>

          </Link>

          <div className="hidden items-center gap-7 text-sm text-white/60 md:flex">

            <Link className="transition hover:text-white" to="/">
              Home
            </Link>

            <Link className="transition hover:text-white" to="/analysis">
              Analysis
            </Link>

            <Link className="transition hover:text-white" to="/research">
              Research
            </Link>

            <Link className="transition hover:text-white" to="/subtypes">
              Subtypes
            </Link>

            <Link className="transition hover:text-white" to="/model">
              Model
            </Link>

            <Link className="transition hover:text-white" to="/trials">
              Trials
            </Link>

            <Link className="transition hover:text-white" to="/about">
              About
            </Link>

          </div>

          <Link
            to="/analysis"
            className="hidden rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-5 py-2.5 text-sm font-medium text-fuchsia-100 transition hover:bg-fuchsia-400/20 sm:block"
          >
            Start Analysis
          </Link>

        </div>
      </nav>


      {/* =========================================================
          DISCLAIMER
      ========================================================= */}

      <div className="border-b border-white/5 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-[11px] tracking-wide text-white/40">

          Research prototype • Not a medical diagnostic device • For research use only

        </div>

      </div>


      {/* =========================================================
          HERO — LARGE FULL IMAGE
      ========================================================= */}

      <section className="relative min-h-[780px] overflow-hidden">

        {/* Main hero image */}

        <img
          src={heroImage}
          alt="H&E histopathology tissue visualization"
          className="absolute inset-0 h-full w-full object-cover"
        />


        {/* Overall darkening */}

        <div className="absolute inset-0 bg-black/35" />


        {/* Strong left gradient for text */}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />


        {/* Bottom fade */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#080708] via-transparent to-black/20" />


        {/* Subtle scientific glow */}

        <div className="pointer-events-none absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[150px]" />


        {/* Hero content */}

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <div className="max-w-3xl">


            {/* Label */}

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-black/40 px-5 py-2.5 text-xs tracking-[0.2em] text-fuchsia-200 backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.8)]" />

              AI × HISTOPATHOLOGY

            </div>


            {/* Main title */}

            <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[100px]">

              Decoding

              <br />

              <span className="bg-gradient-to-r from-fuchsia-200 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                TNBC
              </span>

              <br />

              <span className="text-white">
                through AI.
              </span>

            </h1>


            {/* Description */}

            <p className="mt-9 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">

              Exploring triple-negative breast cancer through
              computational pathology, deep learning and
              explainable artificial intelligence.

            </p>


            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/analysis"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black shadow-2xl transition hover:bg-fuchsia-100"
              >

                Explore Analysis

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

              </Link>


              <Link
                to="/research"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
              >

                Explore Research

              </Link>

            </div>


            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-7">

              <div>

                <p className="text-2xl font-semibold">
                  4
                </p>

                <p className="mt-1 text-xs tracking-wide text-white/40">
                  TNBC SUBTYPES
                </p>

              </div>


              <div className="border-l border-white/15 pl-10">

                <p className="text-2xl font-semibold">
                  ResNet-50
                </p>

                <p className="mt-1 text-xs tracking-wide text-white/40">
                  DEEP LEARNING
                </p>

              </div>


              <div className="border-l border-white/15 pl-10">

                <p className="text-2xl font-semibold">
                  Grad-CAM
                </p>

                <p className="mt-1 text-xs tracking-wide text-white/40">
                  EXPLAINABLE AI
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom-right image label */}

        <div className="absolute bottom-8 right-8 z-10 hidden rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-xs tracking-[0.15em] text-white/50 backdrop-blur-md lg:block">

          H&E COMPUTATIONAL PATHOLOGY

        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-xs font-medium tracking-[0.25em] text-fuchsia-300">
                WHY TNBC?
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">

                Turning tissue morphology into computational insight.

              </h2>

            </div>


            <div className="space-y-5 text-base leading-8 text-white/50">

              <p>
                Triple-negative breast cancer lacks expression of estrogen
                receptor, progesterone receptor and HER2, making biological
                heterogeneity particularly important to understand.
              </p>

              <p>
                Computational pathology provides a way to investigate
                morphological patterns at scale, combining digital pathology
                with machine learning and explainable AI.
              </p>

            </div>

          </div>


          {/* Science cards */}

          <div className="mt-16 grid gap-4 md:grid-cols-3">

            <ScienceCard
              icon={Microscope}
              title="Histopathology"
              text="Explore visual tissue morphology from H&E stained images."
            />

            <ScienceCard
              icon={Brain}
              title="Deep Learning"
              text="Use convolutional representations to analyse complex image patterns."
            />

            <ScienceCard
              icon={Eye}
              title="Explainability"
              text="Visualize regions contributing to model predictions using Grad-CAM."
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          SUBTYPES
      ========================================================= */}

      <section className="bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-xs tracking-[0.25em] text-fuchsia-300">
                MOLECULAR LANDSCAPE
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Four biological perspectives.
              </h2>

            </div>


            <Link
              to="/subtypes"
              className="group inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >

              Explore all subtypes

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

            </Link>

          </div>


          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {subtypes.map((subtype) => (

              <Link
                key={subtype.code}
                to="/subtypes"
                className="group rounded-2xl border border-white/10 bg-[#0d0c0d] p-6 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/30 hover:bg-white/[0.04]"
              >

                <div className="flex items-start justify-between">

                  <span className="text-3xl font-semibold text-white/90">
                    {subtype.code}
                  </span>

                  <ArrowRight className="h-5 w-5 text-white/20 transition group-hover:translate-x-1 group-hover:text-fuchsia-300" />

                </div>


                <h3 className="mt-8 text-lg font-medium">
                  {subtype.name}
                </h3>


                <p className="mt-3 text-sm leading-6 text-white/40">
                  {subtype.description}
                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          PIPELINE
      ========================================================= */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs tracking-[0.25em] text-fuchsia-300">
              THE PIPELINE
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From tissue to insight.
            </h2>

            <p className="mt-6 leading-7 text-white/45">
              A research workflow connecting digital pathology,
              preprocessing, deep learning and interpretable outputs.
            </p>

          </div>


          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {pipeline.map((step) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs tracking-[0.2em] text-fuchsia-300">
                      {step.number}
                    </span>

                    <Icon className="h-5 w-5 text-white/30" />

                  </div>


                  <h3 className="mt-12 text-xl font-medium">
                    {step.title}
                  </h3>


                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {step.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          EXPLAINABLE AI
      ========================================================= */}

      <section className="bg-gradient-to-b from-transparent to-fuchsia-950/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/5">

                <Eye className="h-6 w-6 text-fuchsia-300" />

              </div>


              <p className="text-xs tracking-[0.25em] text-fuchsia-300">
                EXPLAINABLE AI
              </p>


              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">

                Don't just predict.

                <br />

                <span className="text-white/45">
                  Show where the model looked.
                </span>

              </h2>


              <p className="mt-7 max-w-xl leading-8 text-white/50">

                Grad-CAM based visualization can highlight image regions
                associated with a model's prediction, making the computational
                process easier to inspect and interpret.

              </p>


              <Link
                to="/model/explainability"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-200 transition hover:text-white"
              >

                Explore explainability

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>


            {/* Visualization mockup */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">

              <div className="grid grid-cols-2 gap-3">

                <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-5">

                  <Microscope className="h-6 w-6 text-white/40" />

                  <p className="mt-20 text-sm text-white/50">
                    Original H&E
                  </p>

                </div>


                <div className="aspect-square rounded-2xl border border-fuchsia-300/20 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-transparent p-5">

                  <Sparkles className="h-6 w-6 text-fuchsia-300" />

                  <p className="mt-20 text-sm text-fuchsia-100/70">
                    Grad-CAM
                  </p>

                </div>

              </div>


              <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">

                <div className="flex items-center justify-between">

                  <span className="text-xs text-white/40">
                    MODEL ATTENTION
                  </span>

                  <span className="text-xs text-fuchsia-300">
                    VISUALIZATION
                  </span>

                </div>


                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-400" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-950/30 via-[#111011] to-purple-950/20 px-8 py-16 text-center sm:px-16">

            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />


            <FlaskConical className="relative mx-auto h-8 w-8 text-fuchsia-300" />


            <h2 className="relative mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">

              Explore the research workflow.

            </h2>


            <p className="relative mx-auto mt-5 max-w-xl leading-7 text-white/45">

              Upload an H&E image and explore preprocessing,
              model predictions and explainability outputs.

            </p>


            <Link
              to="/analysis"
              className="relative mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-fuchsia-100"
            >

              Begin Analysis

              <ArrowRight className="h-4 w-4" />

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div>

            <p className="font-medium tracking-[0.15em] text-white/60">
              TNBC-INSIGHT AI
            </p>

            <p className="mt-2">
              AI-assisted computational pathology research platform.
            </p>

          </div>


          <p className="max-w-md leading-5 sm:text-right">

            This platform is a research prototype and is not intended for
            diagnosis, treatment decisions or clinical use.

          </p>

        </div>

      </footer>

    </div>
  );
}


/* =========================================================
   SCIENCE CARD COMPONENT
========================================================= */

function ScienceCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (

    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-fuchsia-300/20">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">

        <Icon className="h-5 w-5 text-fuchsia-300" />

      </div>


      <h3 className="mt-7 text-lg font-medium">
        {title}
      </h3>


      <p className="mt-3 text-sm leading-6 text-white/40">
        {text}
      </p>

    </div>

  );
}