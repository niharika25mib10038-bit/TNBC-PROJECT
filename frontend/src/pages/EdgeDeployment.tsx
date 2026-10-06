import React from 'react';

export default function EdgeDeployment() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold dark:text-white">Edge Deployment Architecture</h1>
      <div className="glass-panel p-8">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Jetson Orin Nano Pipeline</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <div className="glass-card p-4 text-center w-full">Glass Slide</div>
          <div className="text-slate-400">→</div>
          <div className="glass-card p-4 text-center w-full">USB Microscope</div>
          <div className="text-slate-400">→</div>
          <div className="glass-card p-4 text-center w-full bg-primary-50 dark:bg-primary-900/20 border-primary-200">Jetson Orin Nano</div>
          <div className="text-slate-400">→</div>
          <div className="glass-card p-4 text-center w-full">TensorRT Model</div>
        </div>
      </div>
    </div>
  );
}
