export interface Analysis {
  id: string;
  created_at: string;
  filename: string;
  original_filename: string;
  predicted_subtype: string;
  confidence: number;
  probabilities: Record<string, number>;
  model_name: string;
  mode: 'demo' | 'research';
  inference_time_ms: number;
  preprocessing_status: Record<string, any>;
  gradcam_path: string | null;
  image_width: number;
  image_height: number;
}

export interface PredictionResult {
  analysis_id: string;
  mode: 'demo' | 'research';
  predicted_subtype: string;
  confidence: number;
  probabilities: Record<string, number>;
  model_name: string;
  gradcam_available: boolean;
  gradcam_url: string | null;
  original_image_url: string | null;
  normalized_image_url: string | null;
  overlay_image_url: string | null;
  inference_time_ms: number;
  preprocessing_steps: Record<string, StepStatus>;
}

export interface StepStatus { status: 'success' | 'fallback' | 'error'; message: string; }
export interface SubtypeInfo { name: string; code: string; description: string; characteristics: string[]; pathways: string[]; treatment_associations: string[]; color: string; icon: string; }
export interface TrialInfo { trial_name: string; clinical_setting: string; treatment: string; population: string; key_outcome: string; safety_signals: string; significance: string; }
export interface ModelStatus { model_loaded: boolean; model_name: string; mode: string; device: string; num_parameters: number | null; }
export interface SystemComponentStatus { name: string; status: 'online' | 'offline' | 'warning' | 'demo'; message: string; }
export interface SystemStatus { components: SystemComponentStatus[]; }
export interface ModelMetrics { evaluated: boolean; accuracy?: number; precision?: Record<string, number>; recall?: Record<string, number>; f1?: Record<string, number>; confusion_matrix?: number[][]; }
export type Theme = 'light' | 'dark';
