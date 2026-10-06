import React from 'react';

export default function ExplainableAI() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold dark:text-white">Explainable AI (Grad-CAM)</h1>
      <div className="glass-panel p-8">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Gradient-weighted Class Activation Mapping</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Grad-CAM uses the gradients of any target concept (like the predicted TNBC subtype) flowing into the final convolutional layer to produce a coarse localization map highlighting the important regions in the image for predicting the concept.
        </p>
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">⚠️ Correlation vs. Causation</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Grad-CAM highlights regions the model mathematically correlated with a specific subtype during training. It does NOT prove these features biologically cause the subtype. Pathological review is required to interpret these visual patterns.
          </p>
        </div>
      </div>
    </div>
  );
}
