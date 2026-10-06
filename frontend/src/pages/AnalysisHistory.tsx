import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function AnalysisHistory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Analysis History</h1>
      </div>
      
      <div className="glass-panel p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input type="text" placeholder="Search by ID or filename..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <Filter className="w-5 h-5" /> Filter
          </button>
        </div>

        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          <p>No analyses found. Run a new analysis to see history.</p>
        </div>
      </div>
    </div>
  );
}
