import React from 'react';

export default function About() {
  return (
    <div className="space-y-6 max-w-4xl animate-fade-in">
      <h1 className="text-3xl font-bold dark:text-white">About TNBC-Insight AI</h1>
      <div className="glass-panel p-8">
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          An open-source research prototype designed to explore the intersection of explainable AI and precision oncology for Triple-Negative Breast Cancer.
        </p>
      </div>
    </div>
  );
}
