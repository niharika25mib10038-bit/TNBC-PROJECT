import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import NewAnalysis from './pages/NewAnalysis';
import SubtypeExplorer from './pages/SubtypeExplorer';
import Research from './pages/Research';
import Trials from './pages/Trials';
import ModelPerformance from './pages/ModelPerformance';
import ExplainableAI from './pages/ExplainableAI';
import AnalysisHistory from './pages/AnalysisHistory';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/analysis" element={<NewAnalysis />} />
        <Route path="/analysis/history" element={<AnalysisHistory />} />

        <Route path="/subtypes" element={<SubtypeExplorer />} />

        <Route path="/research" element={<Research />} />

        <Route path="/model" element={<ModelPerformance />} />
        <Route
          path="/model/explainability"
          element={<ExplainableAI />}
        />

        {/* Clinical Trials */}
        <Route path="/trials" element={<Trials />} />

        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}