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
