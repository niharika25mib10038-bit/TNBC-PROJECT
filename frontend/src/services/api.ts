const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export async function checkHealth() {
  const res = await fetch(`${API_BASE_URL}/api/health`);

  if (!res.ok) {
    throw new Error('Backend health check failed');
  }

  return res.json();
}

export async function analyzeImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE_URL}/api/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Analysis could not be completed');
  }

  return res.json();
}

export async function preprocessImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE_URL}/api/preprocess`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Image preprocessing failed');
  }

  return res.json();
}

export async function getModelStatus() {
  const res = await fetch(`${API_BASE_URL}/api/model/status`);

  if (!res.ok) {
    throw new Error('Could not fetch model status');
  }

  return res.json();
}

export async function getModelMetrics() {
  const res = await fetch(`${API_BASE_URL}/api/model/metrics`);

  if (!res.ok) {
    throw new Error('Could not fetch model metrics');
  }

  return res.json();
}

export async function getSubtypes() {
  const res = await fetch(`${API_BASE_URL}/api/subtypes`);

  if (!res.ok) {
    throw new Error('Could not fetch subtypes');
  }

  return res.json();
}

export async function getTrials() {
  const res = await fetch(`${API_BASE_URL}/api/trials`);

  if (!res.ok) {
    throw new Error('Could not fetch trials');
  }

  return res.json();
}

export async function getSystemStatus() {
  const res = await fetch(`${API_BASE_URL}/api/system/status`);

  if (!res.ok) {
    throw new Error('Could not fetch system status');
  }

  return res.json();
}

export async function resetDemo() {
  const res = await fetch(`${API_BASE_URL}/api/demo/reset`, {
    method: 'POST',
  });

  if (!res.ok) {
    throw new Error('Could not reset demo');
  }

  return res.json();
}