import os
from pathlib import Path

BASE_DIR = Path(r"C:\Users\Shaharsh\.gemini\antigravity\scratch\tnbc-insight-ai\frontend\src\pages")

def write_file(name, content):
    with open(BASE_DIR / name, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

# 11. Edge Deployment
edge_code = """
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
"""
write_file("EdgeDeployment.tsx", edge_code)

# 12. Ethics
ethics_code = """
import React from 'react';
import { Shield } from 'lucide-react';

export default function Ethics() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold dark:text-white">Ethics & Safety</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 border-l-4 border-l-red-500">
          <h3 className="font-bold text-lg mb-2 dark:text-white">Not a Diagnostic Device</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">This system is a research prototype. It has not been approved by the FDA or any regulatory body. It cannot be used to diagnose patients.</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-amber-500">
          <h3 className="font-bold text-lg mb-2 dark:text-white">Human Oversight Mandatory</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">AI should augment, not replace, trained pathologists. Final determinations must always rely on expert human judgment.</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-blue-500">
          <h3 className="font-bold text-lg mb-2 dark:text-white">Domain Shift Risks</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Models trained on TCGA may perform poorly on images from different scanners or staining protocols (domain shift).</p>
        </div>
      </div>
    </div>
  );
}
"""
write_file("Ethics.tsx", ethics_code)

# 13. System Status
status_code = """
import React from 'react';
import { Activity } from 'lucide-react';

export default function SystemStatus() {
  const components = [
    { name: 'Frontend', status: 'online' },
    { name: 'Backend API', status: 'online' },
    { name: 'AI Model', status: 'demo' },
    { name: 'GPU Acceleration', status: 'offline' },
    { name: 'Database', status: 'online' },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-3xl font-bold dark:text-white">System Status</h1>
      <div className="glass-panel p-6">
        <div className="space-y-4">
          {components.map(c => (
            <div key={c.name} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
              <span className="font-medium dark:text-white">{c.name}</span>
              <div className="flex items-center gap-2">
                <span className={`status-dot ${c.status}`}></span>
                <span className="text-sm text-slate-500 dark:text-slate-400 capitalize">{c.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
"""
write_file("SystemStatus.tsx", status_code)

# 14. About
about_code = """
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
"""
write_file("About.tsx", about_code)

# 15. Settings
settings_code = """
import React from 'react';

export default function Settings() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold dark:text-white">Settings</h1>
      <div className="glass-panel p-6 space-y-6">
        <div>
          <h3 className="font-bold dark:text-white mb-2">API Configuration</h3>
          <input type="text" disabled value="http://localhost:8000" className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500" />
        </div>
        <div>
          <h3 className="font-bold dark:text-white mb-2">Demo Mode</h3>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked readOnly />
              <div className="block bg-primary-500 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform translate-x-6"></div>
            </div>
            <div className="ml-3 text-slate-700 dark:text-slate-300 font-medium">
              Enabled (No Backend Required)
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
"""
write_file("Settings.tsx", settings_code)

