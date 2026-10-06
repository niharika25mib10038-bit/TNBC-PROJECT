import React from 'react';

export default function ExplainableAI() {
  return (
    <div className="min-h-screen -m-6 p-6 bg-[#020617] text-slate-100">

      {/* Header */}
      <div className="max-w-4xl mb-10">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium mb-4">
          🔍 Explainable AI
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Understanding AI Decisions
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          Explainable AI helps us understand which parts of an image
          contributed to an AI model's prediction.
        </p>

      </div>

      {/* Explainable AI - Grad-CAM */}
      <div className="mt-8 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-slate-800">

          <div className="flex items-center gap-3 mb-2">

            <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-900/50 flex items-center justify-center">
              <span className="text-xl">🔍</span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Explainable AI (Grad-CAM)
              </h2>

              <p className="text-sm text-slate-500">
                Understanding why the AI focuses on certain regions
              </p>
            </div>

          </div>
        </div>

        <div className="p-6">

          {/* What is Grad-CAM? */}
          <div className="mb-7">

            <h3 className="text-lg font-bold text-white mb-3">
              Gradient-weighted Class Activation Mapping
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Grad-CAM is an explainable AI technique that helps visualize
              which regions of an H&amp;E tissue image contributed most to
              the model's prediction.
            </p>

          </div>

          {/* Heatmap explanation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">

            <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/40">

              <div className="text-2xl mb-2">🔴</div>

              <h4 className="font-semibold text-red-300 mb-1">
                High importance
              </h4>

              <p className="text-xs text-slate-400">
                Regions contributing more strongly to the prediction.
              </p>

            </div>

            <div className="p-4 rounded-xl bg-yellow-950/30 border border-yellow-900/40">

              <div className="text-2xl mb-2">🟡</div>

              <h4 className="font-semibold text-yellow-300 mb-1">
                Moderate importance
              </h4>

              <p className="text-xs text-slate-400">
                Regions with an intermediate contribution.
              </p>

            </div>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40">

              <div className="text-2xl mb-2">🔵</div>

              <h4 className="font-semibold text-blue-300 mb-1">
                Lower importance
              </h4>

              <p className="text-xs text-slate-400">
                Regions contributing less to the prediction.
              </p>

            </div>

          </div>

          {/* How it works */}
          <div className="mb-7">

            <h3 className="text-lg font-bold text-white mb-3">
              🧠 How does it work?
            </h3>

            <p className="text-slate-400 leading-relaxed mb-4">
              In a typical TNBC AI workflow, the model predicts a subtype
              such as BL1, BL2, M, or LAR. Grad-CAM then uses gradients
              from the final convolutional layer to identify image regions
              that contributed most to that prediction.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 p-5 rounded-xl bg-slate-950 border border-slate-800">

              {[
                'H&E Image',
                'CNN',
                'Prediction',
                'Gradients',
                'Importance Map',
                'Heatmap',
              ].map((step, index) => (

                <React.Fragment key={step}>

                  <span className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-medium text-slate-300">
                    {step}
                  </span>

                  {index < 5 && (
                    <span className="text-blue-400 font-bold">
                      →
                    </span>
                  )}

                </React.Fragment>

              ))}

            </div>

          </div>

          {/* Correlation vs causation */}
          <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-900/50 mb-7">

            <div className="flex items-start gap-3">

              <div className="text-xl">
                ⚠️
              </div>

              <div>

                <h3 className="font-bold text-amber-300 mb-2">
                  Correlation ≠ Causation
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  A Grad-CAM heatmap shows regions that are mathematically
                  associated with the model's prediction. It does not prove
                  that these regions biologically cause a particular TNBC
                  subtype.
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  It also does not identify a specific molecular marker or
                  replace clinical or pathological interpretation.
                </p>

              </div>

            </div>

          </div>

          {/* Why useful */}
          <div>

            <h3 className="text-lg font-bold text-white mb-3">
              🧬 Why is this useful?
            </h3>

            <p className="text-slate-400 leading-relaxed mb-4">
              Grad-CAM can help researchers investigate whether the AI is
              focusing on meaningful tissue regions and identify cases where
              the model may be relying on unexpected visual patterns.
            </p>

            <div className="flex flex-wrap items-center gap-2">

              {[
                'Visualize',
                'Interpret',
                'Question',
                'Validate',
              ].map((item, index) => (

                <React.Fragment key={item}>

                  <span className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium text-slate-300">
                    {item}
                  </span>

                  {index < 3 && (
                    <span className="text-slate-600">
                      →
                    </span>
                  )}

                </React.Fragment>

              ))}

            </div>

          </div>

          {/* Note */}
          <div className="mt-7 pt-5 border-t border-slate-800">

            <p className="text-xs text-slate-500 leading-relaxed">

              <strong className="text-slate-400">
                Research note:
              </strong>{' '}

              The current demonstration uses Grad-CAM-style visual
              explainability to illustrate the AI workflow. It should not
              be interpreted as a clinically validated diagnostic explanation.

            </p>

          </div>

        </div>

      </div>

      {/* Scientific disclaimer */}
      <div className="max-w-4xl mx-auto text-center pt-8">

        <p className="text-sm text-slate-600 leading-relaxed">
          Grad-CAM provides visual insight into model behaviour but does not
          establish biological causation or replace expert pathological review.
        </p>

      </div>

    </div>
  );
}