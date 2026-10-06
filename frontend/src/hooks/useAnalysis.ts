import { useState, useCallback } from 'react';
import type { PredictionResult } from '../types';
import { analyzeImage } from '../services/api';

export function useAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyze = useCallback(async (file: File) => {
    setIsAnalyzing(true);
    setError(null);
    setResult(null);
    
    try {
      const data = await analyzeImage(file);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
    setIsAnalyzing(false);
  }, []);

  return { isAnalyzing, result, error, analyze, reset };
}
