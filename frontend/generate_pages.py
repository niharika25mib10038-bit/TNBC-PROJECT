import os
from pathlib import Path

BASE_DIR = Path(r"C:\Users\Shaharsh\.gemini\antigravity\scratch\tnbc-insight-ai\frontend\src")

def write_file(rel_path, content):
    p = BASE_DIR / rel_path
    p.parent.mkdir(parents=True, exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

# Layout
layout_code = """
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { 
  LayoutDashboard, Microscope, History, Dna, BarChart3, 
  Brain, BookOpen, Database, Cpu, Smartphone, Shield, 
  Activity, Info, Settings, Menu, X, Moon, Sun, Beaker 
} from 'lucide-react';

const LINKS = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'New Analysis', path: '/analysis/new', icon: Microscope },
  { name: 'Analysis History', path: '/analysis/history', icon: History },
  { name: 'Subtype Explorer', path: '/explorer', icon: Dna },
  { name: 'Model Performance', path: '/performance', icon: BarChart3 },
  { name: 'Explainable AI', path: '/explainable', icon: Brain },
  { name: 'Research & Evidence', path: '/research', icon: BookOpen },
  { name: 'Dataset', path: '/dataset', icon: Database },
  { name: 'Training Lab', path: '/training', icon: Cpu },
  { name: 'Edge Deployment', path: '/edge', icon: Smartphone },
  { name: 'Ethics & Safety', path: '/ethics', icon: Shield },
  { name: 'System Status', path: '/status', icon: Activity },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function DashboardLayout() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-2">
          <Beaker className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          <span className="font-bold text-lg dark:text-white">TNBC-Insight AI</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-500 dark:text-slate-400">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 glass-panel border-r border-slate-200 dark:border-slate-700/50 
        transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        flex flex-col h-screen overflow-y-auto
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center space-x-3 border-b border-slate-200 dark:border-slate-700/50">
          <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-lg">
            <Beaker className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <span className="font-bold text-xl gradient-text">TNBC-Insight</span>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700/50">
          <button 
            onClick={toggleTheme}
            className="flex items-center w-full space-x-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Disclaimer Banner */}
        <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 text-sm text-center font-medium shadow-sm border-b border-amber-200 dark:border-amber-800/50 flex-shrink-0 z-10">
          <span className="mr-2">⚠️</span>
          Research Prototype Only. Not for clinical or diagnostic use.
        </div>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
"""
write_file("layouts/DashboardLayout.tsx", layout_code)

# Main App
app_code = """
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import NewAnalysis from './pages/NewAnalysis';
import AnalysisHistory from './pages/AnalysisHistory';
import SubtypeExplorer from './pages/SubtypeExplorer';
import ModelPerformance from './pages/ModelPerformance';
import ExplainableAI from './pages/ExplainableAI';
import Research from './pages/Research';
import Dataset from './pages/Dataset';
import TrainingLab from './pages/TrainingLab';
import EdgeDeployment from './pages/EdgeDeployment';
import Ethics from './pages/Ethics';
import SystemStatus from './pages/SystemStatus';
import About from './pages/About';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis/new" element={<NewAnalysis />} />
          <Route path="/analysis/history" element={<AnalysisHistory />} />
          <Route path="/explorer" element={<SubtypeExplorer />} />
          <Route path="/performance" element={<ModelPerformance />} />
          <Route path="/explainable" element={<ExplainableAI />} />
          <Route path="/research" element={<Research />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/training" element={<TrainingLab />} />
          <Route path="/edge" element={<EdgeDeployment />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/status" element={<SystemStatus />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
"""
write_file("App.tsx", app_code)

# Main entry
main_code = """
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
"""
write_file("main.tsx", main_code)

# Create placeholder pages for everything
pages = [
    "Landing", "Dashboard", "NewAnalysis", "AnalysisHistory", 
    "SubtypeExplorer", "ModelPerformance", "ExplainableAI", "Research", 
    "Dataset", "TrainingLab", "EdgeDeployment", "Ethics", 
    "SystemStatus", "About", "Settings"
]

for page in pages:
    page_content = f"""
import React from 'react';

export default function {page}() {{
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">{page}</h1>
      <div className="glass-card p-6">
        <p className="text-slate-600 dark:text-slate-300">
          This is the {page} page. Implementation coming soon.
        </p>
      </div>
    </div>
  );
}}
"""
    write_file(f"pages/{page}.tsx", page_content)

print("Scaffolded all files!")
