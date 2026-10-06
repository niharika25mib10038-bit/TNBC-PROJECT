import type {
  Analysis,
  PredictionResult,
  ModelStatus,
  ModelMetrics,
  SubtypeInfo,
  TrialInfo,
  SystemStatus
} from '../types';
export const fetchHealth = async () => {
  const res = await fetch('/api/health');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export const analyzeImage = async (file: File): Promise<PredictionResult> => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch('/api/analyze', {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Analysis failed');
  return res.json();
};

export const preprocessImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch('/api/preprocess', {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Preprocessing failed');
  return res.json();
};

export const fetchAnalyses = async (filters?: Record<string, string>): Promise<Analysis[]> => {
  const query = filters ? new URLSearchParams(filters).toString() : '';
  const url = query ? `/api/analyses?${query}` : '/api/analyses';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch analyses');
  return res.json();
};

export const fetchAnalysis = async (id: string): Promise<Analysis> => {
  const res = await fetch(`/api/analyses/${id}`);
  if (!res.ok) throw new Error('Failed to fetch analysis');
  return res.json();
};

export const deleteAnalysis = async (id: string) => {
  const res = await fetch(`/api/analyses/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete analysis');
  return res.json();
};

export const fetchModelStatus = async (): Promise<ModelStatus> => {
  const res = await fetch('/api/model/status');
  if (!res.ok) throw new Error('Failed to fetch model status');
  return res.json();
};

export const fetchModelMetrics = async (): Promise<ModelMetrics> => {
  const res = await fetch('/api/model/metrics');
  if (!res.ok) throw new Error('Failed to fetch model metrics');
  return res.json();
};

export const fetchSubtypes = async (): Promise<SubtypeInfo[]> => {
  const res = await fetch('/api/subtypes');
  if (!res.ok) throw new Error('Failed to fetch subtypes');
  return res.json();
};

export const fetchTrials = async (): Promise<TrialInfo[]> => {
  const res = await fetch('/api/trials');
  if (!res.ok) throw new Error('Failed to fetch trials');
  return res.json();
};

export const fetchSystemStatus = async (): Promise<SystemStatus> => {
  const res = await fetch('/api/system/status');
  if (!res.ok) throw new Error('Failed to fetch system status');
  return res.json();
};

export const resetDemo = async () => {
  const res = await fetch('/api/demo/reset', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to reset demo');
  return res.json();
};
