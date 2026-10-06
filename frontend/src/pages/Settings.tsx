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
