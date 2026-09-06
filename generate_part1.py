import os
from pathlib import Path

BASE_DIR = Path(r"C:\Users\Shaharsh\.gemini\antigravity\scratch\tnbc-insight-ai\frontend\src\pages")
BASE_DIR.mkdir(parents=True, exist_ok=True)

def write_file(name, content):
    with open(BASE_DIR / name, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

# 1. Landing
landing_code = """
import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, BookOpen, Brain, Activity, Shield, Cpu } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Disclaimer */}
      <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 text-sm text-center font-medium shadow-sm">
        ⚠️ Research Prototype Only. Not for clinical or diagnostic use.
      </div>
      
      {/* Hero */}
      <div className="relative overflow-hidden animated-bg py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="glass-panel p-12 max-w-4xl animate-slide-up">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
            <span className="block">AI-Powered Histopathology</span>
            <span className="block gradient-text">Analysis for TNBC Research</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Advanced explainable deep learning pipeline for Triple-Negative Breast Cancer molecular subtype classification from H&E stained Whole Slide Images.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/analysis/new" className="px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
              Start Analysis
            </Link>
            <Link to="/research" className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-lg font-medium rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1">
              Explore Research
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 transition-transform hover:scale-105">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Explainable AI</h3>
              <p className="text-slate-600 dark:text-slate-400">Grad-CAM visualization providing visual interpretability of model predictions, highlighting morphological features driving classification.</p>
            </div>
            <div className="glass-card p-8 transition-transform hover:scale-105">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Microscope className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">4 Molecular Subtypes</h3>
              <p className="text-slate-600 dark:text-slate-400">Classifying TNBC into BL1, BL2, M, and LAR subtypes, reflecting the underlying biological heterogeneity of the disease.</p>
            </div>
            <div className="glass-card p-8 transition-transform hover:scale-105">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Edge Deployment</h3>
              <p className="text-slate-600 dark:text-slate-400">Optimized via TensorRT for local inference on resource-constrained devices like Jetson Orin Nano, enabling point-of-care research.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"""
write_file("Landing.tsx", landing_code)

# 2. Dashboard
dashboard_code = """
import React, { useEffect, useState } from 'react';
import { fetchSystemStatus, fetchAnalyses } from '../services/api';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Database, Clock, ShieldCheck } from 'lucide-react';

const COLORS = { BL1: '#3b82f6', BL2: '#8b5cf6', M: '#10b981', LAR: '#f59e0b' };

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [analyses, setAnalyses] = useState<any[]>([]);

  useEffect(() => {
    // Mock fetch for dashboard to show UI
    setTimeout(() => {
      setAnalyses([
        { id: '1', predicted_subtype: 'BL1', confidence: 0.92, created_at: new Date().toISOString() },
        { id: '2', predicted_subtype: 'M', confidence: 0.85, created_at: new Date().toISOString() },
        { id: '3', predicted_subtype: 'LAR', confidence: 0.78, created_at: new Date().toISOString() },
        { id: '4', predicted_subtype: 'BL2', confidence: 0.95, created_at: new Date().toISOString() },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const data = [
    { name: 'BL1', value: 40 },
    { name: 'BL2', value: 20 },
    { name: 'M', value: 25 },
    { name: 'LAR', value: 15 },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold dark:text-white">System Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1,2,3,4].map(i => <div key={i} className="glass-card h-32 skeleton" />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card h-96 skeleton" />
          <div className="glass-card h-96 skeleton" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold dark:text-white">System Dashboard</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Analyses</p>
              <h3 className="text-3xl font-bold dark:text-white mt-1">1,248</h3>
            </div>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 font-medium">+12%</span>
            <span className="text-slate-500 ml-2">from last month</span>
          </div>
        </div>
        
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg Confidence</p>
              <h3 className="text-3xl font-bold dark:text-white mt-1">87.4%</h3>
            </div>
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg Inference Time</p>
              <h3 className="text-3xl font-bold dark:text-white mt-1">1.2s</h3>
            </div>
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Model Status</p>
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center">
                <span className="status-dot online"></span> ResNet-50 Active
              </h3>
            </div>
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-4 dark:text-white">Subtype Distribution</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-4 dark:text-white">Recent Analyses</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">ID</th>
                  <th className="px-4 py-3">Subtype</th>
                  <th className="px-4 py-3">Confidence</th>
                  <th className="px-4 py-3 rounded-tr-lg">Date</th>
                </tr>
              </thead>
              <tbody>
                {analyses.map((a, i) => (
                  <tr key={i} className="border-b dark:border-slate-700 last:border-0">
                    <td className="px-4 py-3 font-medium dark:text-white">{a.id.substring(0,8)}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold text-white bg-[${COLORS[a.predicted_subtype as keyof typeof COLORS]}]`}>
                        {a.predicted_subtype}
                      </span>
                    </td>
                    <td className="px-4 py-3 dark:text-slate-300">{(a.confidence * 100).toFixed(1)}%</td>
                    <td className="px-4 py-3 dark:text-slate-300">{new Date(a.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
"""
write_file("Dashboard.tsx", dashboard_code)

# 3. New Analysis
new_analysis_code = """
import React, { useState, useCallback } from 'react';
import { UploadCloud, CheckCircle, Activity, Image as ImageIcon, Loader2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function NewAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const f = e.dataTransfer.files[0];
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  }, []);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Mock analysis pipeline
    setTimeout(() => {
      setResult({
        predicted_subtype: 'BL1',
        confidence: 0.94,
        probabilities: { BL1: 0.94, BL2: 0.03, M: 0.02, LAR: 0.01 },
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const probData = result ? [
    { name: 'BL1', value: result.probabilities.BL1 * 100 },
    { name: 'BL2', value: result.probabilities.BL2 * 100 },
    { name: 'M', value: result.probabilities.M * 100 },
    { name: 'LAR', value: result.probabilities.LAR * 100 },
  ] : [];

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold dark:text-white">New Analysis</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Upload an H&E WSI patch for TNBC subtype classification.</p>
        </div>
      </div>

      {!result && !isAnalyzing && (
        <div 
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-12 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/20 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
        >
          {preview ? (
            <div className="flex flex-col items-center">
              <img src={preview} alt="Preview" className="max-h-64 rounded-lg shadow-md mb-6" />
              <div className="flex gap-4">
                <button onClick={() => {setFile(null); setPreview(null);}} className="px-4 py-2 rounded-lg text-slate-700 bg-slate-200 hover:bg-slate-300 dark:text-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors">
                  Clear
                </button>
                <button onClick={handleAnalyze} className="px-6 py-2 rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg transition-colors flex items-center gap-2">
                  <Activity className="w-5 h-5" /> Start Analysis
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
                <UploadCloud className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <p className="text-lg font-medium dark:text-white">Drag & drop your image here</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 mb-6">Supports PNG, JPG, JPEG, TIFF (512x512 recommended)</p>
              <label className="px-6 py-3 rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg cursor-pointer transition-colors">
                Browse Files
                <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                  if (e.target.files?.length) {
                    setFile(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }
                }}/>
              </label>
            </div>
          )}
        </div>
      )}

      {isAnalyzing && (
        <div className="glass-panel p-12 flex flex-col items-center justify-center text-center animate-pulse">
          <Loader2 className="w-16 h-16 text-primary-500 animate-spin mb-6" />
          <h3 className="text-2xl font-bold dark:text-white mb-2">Analyzing Sample...</h3>
          <p className="text-slate-500 dark:text-slate-400">Running Macenko normalization and ResNet-50 inference</p>
        </div>
      )}

      {result && (
        <div className="space-y-6 animate-slide-up">
          <div className="glass-panel p-8">
            <div className="flex justify-between items-center mb-8 border-b border-slate-200 dark:border-slate-700 pb-6">
              <div>
                <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 w-6 h-6" /> Analysis Complete
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">ResNet-50 • Demo Mode • 1.2s</p>
              </div>
              <button onClick={() => {setResult(null); setFile(null); setPreview(null);}} className="px-4 py-2 rounded-lg text-primary-600 bg-primary-50 hover:bg-primary-100 dark:text-primary-400 dark:bg-primary-900/30 transition-colors">
                New Analysis
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">Predicted Subtype</h3>
                <div className="flex items-end gap-4 mb-8">
                  <span className="text-6xl font-extrabold text-blue-600 dark:text-blue-400">{result.predicted_subtype}</span>
                  <span className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-1">{(result.confidence * 100).toFixed(1)}% Confidence</span>
                </div>

                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-4">Probability Distribution</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={probData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                      <Tooltip formatter={(val: number) => val.toFixed(1) + '%'} />
                      <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-4 w-full">Grad-CAM Visualization</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 w-full aspect-square bg-slate-900 flex items-center justify-center">
                   {preview && <img src={preview} className="w-full h-full object-cover" alt="Original" />}
                   <div className="absolute inset-0 bg-gradient-to-tr from-red-500/40 via-yellow-500/40 to-transparent mix-blend-overlay"></div>
                   <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Heatmap Overlay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
"""
write_file("NewAnalysis.tsx", new_analysis_code)

# 4. Analysis History
history_code = """
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
"""
write_file("AnalysisHistory.tsx", history_code)

# 5. Subtype Explorer
explorer_code = """
import React from 'react';

const SUBTYPES = [
  { name: 'Basal-Like 1', code: 'BL1', color: 'bg-blue-500', desc: 'Cell cycle and DNA damage response pathways highly activated. Higher proliferation rates.' },
  { name: 'Basal-Like 2', code: 'BL2', color: 'bg-purple-500', desc: 'Growth factor signaling, glycolysis, and gluconeogenesis pathways enriched.' },
  { name: 'Mesenchymal', code: 'M', color: 'bg-emerald-500', desc: 'Epithelial-mesenchymal transition (EMT), cell motility pathways activated.' },
  { name: 'Luminal Androgen Receptor', code: 'LAR', color: 'bg-amber-500', desc: 'Androgen receptor signaling, hormonally regulated pathways enriched.' },
];

export default function SubtypeExplorer() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">TNBC Molecular Subtypes</h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
        Triple-Negative Breast Cancer is a highly heterogeneous disease. Lehmann et al. initially classified TNBC into six, and later refined into four distinct molecular subtypes, each with unique biological characteristics and potential therapeutic vulnerabilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {SUBTYPES.map(s => (
          <div key={s.code} className="glass-card overflow-hidden">
            <div className={`${s.color} h-2 w-full`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold dark:text-white">{s.name}</h3>
                <span className={`px-3 py-1 rounded font-bold text-white text-sm ${s.color}`}>{s.code}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{s.desc}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Key Pathways</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-700 dark:text-slate-300">Placeholder Pathway</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"""
write_file("SubtypeExplorer.tsx", explorer_code)
