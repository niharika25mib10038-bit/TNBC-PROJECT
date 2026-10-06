import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileImage,
  FlaskConical,
  Loader2,
  Microscope,
  RotateCcw,
  ScanSearch,
  Upload,
  X,
  Zap,
} from 'lucide-react';
import { analyzeImage } from '../services/api';

type Prediction = {
  predicted_subtype?: string;
  confidence?: number;
  probabilities?: Record<string, number>;
  model?: string;
  mode?: string;
  gradcam_available?: boolean;
  gradcam_url?: string | null;
};

type Preprocessing = {
  steps?: Record<string, string>;
  status?: string;
};

type AnalysisResult = {
  id?: string;
  prediction?: Prediction;
  preprocessing?: Preprocessing;
  original_image_url?: string;
  preprocessed_image_url?: string;
  gradcam_url?: string | null;

  // Fallback fields in case backend changes later
  predicted_subtype?: string;
  confidence?: number;
  probabilities?: Record<string, number>;
  gradcam_overlay?: string;
  grad_cam?: string;
  heatmap?: string;
  visualization?: string;

  [key: string]: any;
};

const SUBTYPES = ['BL1', 'BL2', 'M', 'LAR'];

export default function NewAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const selectFile = (selectedFile: File) => {
    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }

    setError(null);
    setResult(null);
    setFile(selectedFile);

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  };

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const droppedFile = event.dataTransfer.files?.[0];

      if (droppedFile) {
        selectFile(droppedFile);
      }
    },
    []
  );

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await analyzeImage(file);

      console.log('TNBC Analysis API response:', response);

      setResult(response as AnalysisResult);
    } catch (err) {
      console.error('TNBC analysis error:', err);

      setError(
        'Analysis could not be completed. Please make sure the backend is running and try again.'
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  /*
   * ---------------------------------------------------------
   * BACKEND RESPONSE
   * ---------------------------------------------------------
   *
   * The backend returns:
   *
   * {
   *   prediction: {
   *      predicted_subtype,
   *      confidence,
   *      probabilities,
   *      model,
   *      mode,
   *      gradcam_url
   *   },
   *   preprocessing: {...},
   *   original_image_url: "...",
   *   preprocessed_image_url: "...",
   *   gradcam_url: "..."
   * }
   *
   */

  const prediction = result?.prediction;

  const probabilities =
    prediction?.probabilities ??
    result?.probabilities ??
    {};

  const probabilityData = SUBTYPES.map((subtype) => {
    const rawValue = probabilities[subtype] ?? 0;

    const value =
      rawValue <= 1
        ? rawValue * 100
        : rawValue;

    return {
      name: subtype,
      value,
    };
  });

  const predictedSubtype =
    prediction?.predicted_subtype ??
    result?.predicted_subtype ??
    '—';

  const rawConfidence =
    prediction?.confidence ??
    result?.confidence ??
    0;

  const confidence =
    rawConfidence <= 1
      ? rawConfidence * 100
      : rawConfidence;

  const modelName =
    prediction?.model ??
    'ResNet-50';

  const mode =
    prediction?.mode ??
    'DEMO';

  const gradCam =
    prediction?.gradcam_url ??
    result?.gradcam_url ??
    result?.gradcam_overlay ??
    result?.grad_cam ??
    result?.heatmap ??
    result?.visualization ??
    null;

  const originalImage =
    result?.original_image_url ??
    preview;

  const preprocessedImage =
    result?.preprocessed_image_url ??
    null;

  const preprocessingSteps =
    result?.preprocessing?.steps ??
    {};

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-3 group"
          >

            <div className="w-9 h-9 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center">

              <Microscope className="w-5 h-5 text-rose-300" />

            </div>

            <div>

              <div className="font-semibold tracking-tight">
                TNBC<span className="text-rose-300">·</span>Insight
              </div>

              <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Computational Pathology
              </div>

            </div>

          </Link>

          <Link
            to="/"
            className="text-sm text-zinc-400 hover:text-white transition flex items-center gap-2"
          >

            <ArrowLeft className="w-4 h-4" />

            Back to Home

          </Link>

        </div>

      </nav>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* HEADER */}

        <section className="mb-12">

          <div className="flex items-center gap-2 text-rose-300 text-xs uppercase tracking-[0.25em] mb-4">

            <ScanSearch className="w-4 h-4" />

            Research Analysis

          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
            Analyze a tissue sample.
          </h1>

          <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
            Upload an H&E stained histopathology image and explore
            AI-assisted TNBC subtype classification with interpretable
            model outputs.
          </p>

        </section>

        {/* =====================================================
            PIPELINE
        ===================================================== */}

        <section className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-10">

          {[
            ['01', 'Upload', 'H&E tissue image'],
            ['02', 'Preprocess', 'Stain normalization'],
            ['03', 'Infer', 'ResNet-50 classification'],
            ['04', 'Interpret', 'Probability + Grad-CAM'],
          ].map(([number, title, description]) => (

            <div
              key={number}
              className="bg-[#0d0d10] p-5"
            >

              <div className="text-xs text-rose-300 mb-3">
                {number}
              </div>

              <div className="font-medium mb-1">
                {title}
              </div>

              <div className="text-xs text-zinc-500">
                {description}
              </div>

            </div>

          ))}

        </section>

        {/* =====================================================
            ERROR
        ===================================================== */}

        {error && (

          <div className="mb-8 border border-red-400/20 bg-red-400/5 rounded-2xl p-5 text-red-300 flex items-start gap-3">

            <X className="w-5 h-5 mt-0.5 shrink-0" />

            <div>

              <div className="font-medium mb-1">
                Analysis error
              </div>

              <div className="text-sm text-red-300/70">
                {error}
              </div>

            </div>

          </div>

        )}

        {/* =====================================================
            UPLOAD
        ===================================================== */}

        {!result && !isAnalyzing && (

          <section>

            {!preview ? (

              <div
                onDrop={onDrop}
                onDragOver={(event) => event.preventDefault()}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.04] transition-all overflow-hidden"
              >

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),transparent_55%)] pointer-events-none" />

                <div className="relative min-h-[420px] flex flex-col items-center justify-center text-center px-6">

                  <div className="w-20 h-20 rounded-2xl border border-rose-300/20 bg-rose-300/[0.06] flex items-center justify-center mb-7">

                    <Upload className="w-8 h-8 text-rose-300" />

                  </div>

                  <h2 className="text-2xl font-medium mb-3">
                    Upload an H&E image
                  </h2>

                  <p className="text-zinc-500 max-w-md mb-8">
                    Drag and drop a histopathology image here,
                    or browse your computer to select a sample.
                  </p>

                  <label className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-300 text-black font-medium hover:bg-rose-200 transition">

                    <FileImage className="w-4 h-4" />

                    Select Image

                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/tiff,image/webp"
                      className="hidden"
                      onChange={(event) => {

                        const selected =
                          event.target.files?.[0];

                        if (selected) {
                          selectFile(selected);
                        }

                      }}
                    />

                  </label>

                  <div className="mt-8 text-[11px] uppercase tracking-widest text-zinc-600">
                    PNG · JPG · JPEG · TIFF · WEBP
                  </div>

                </div>

              </div>

            ) : (

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* PREVIEW */}

                <div className="rounded-3xl border border-white/10 bg-white/[0.025] overflow-hidden">

                  <div className="p-5 border-b border-white/10 flex items-center justify-between">

                    <div>

                      <div className="text-sm font-medium">
                        Input specimen
                      </div>

                      <div className="text-xs text-zinc-500 mt-1">
                        {file?.name}
                      </div>

                    </div>

                    <button
                      onClick={resetAnalysis}
                      className="p-2 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-white transition"
                    >

                      <X className="w-4 h-4" />

                    </button>

                  </div>

                  <div className="aspect-square bg-black flex items-center justify-center">

                    <img
                      src={preview}
                      alt="Uploaded H&E specimen"
                      className="w-full h-full object-contain"
                    />

                  </div>

                </div>

                {/* ANALYSIS CONTROL */}

                <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 flex flex-col justify-center">

                  <div className="w-12 h-12 rounded-xl bg-rose-300/10 border border-rose-300/20 flex items-center justify-center mb-6">

                    <FlaskConical className="w-5 h-5 text-rose-300" />

                  </div>

                  <h2 className="text-2xl font-medium mb-3">
                    Ready for analysis
                  </h2>

                  <p className="text-zinc-500 leading-relaxed mb-8">
                    The uploaded sample will be sent to the existing
                    TNBC-Insight analysis pipeline for preprocessing
                    and model inference.
                  </p>

                  <button
                    onClick={handleAnalyze}
                    className="w-full py-4 rounded-xl bg-rose-300 text-black font-semibold hover:bg-rose-200 transition flex items-center justify-center gap-2"
                  >

                    <Zap className="w-4 h-4" />

                    Run AI Analysis

                    <ArrowRight className="w-4 h-4" />

                  </button>

                  <p className="text-[11px] text-zinc-600 text-center mt-5">
                    Research prototype · Not for clinical diagnosis
                  </p>

                </div>

              </div>

            )}

          </section>

        )}

        {/* =====================================================
            LOADING
        ===================================================== */}

        {isAnalyzing && (

          <section className="rounded-3xl border border-white/10 bg-white/[0.025] min-h-[430px] flex flex-col items-center justify-center text-center">

            <div className="relative mb-8">

              <div className="w-24 h-24 rounded-full border border-rose-300/20 flex items-center justify-center">

                <Loader2 className="w-9 h-9 text-rose-300 animate-spin" />

              </div>

              <div className="absolute inset-0 rounded-full bg-rose-400/10 blur-2xl" />

            </div>

            <div className="text-2xl font-medium mb-3">
              Analyzing specimen
            </div>

            <p className="text-zinc-500 max-w-md">
              Running preprocessing, inference and
              explainability analysis.
            </p>

            <div className="flex gap-2 mt-8 text-xs text-zinc-600">

              <span>Preprocessing</span>
              <span>·</span>
              <span>Inference</span>
              <span>·</span>
              <span>Grad-CAM</span>

            </div>

          </section>

        )}

        {/* =====================================================
            RESULTS
        ===================================================== */}

        {result && !isAnalyzing && (

          <section className="space-y-8">

            {/* RESULT HEADER */}

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">

              <div>

                <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-[0.2em] mb-3">

                  <CheckCircle2 className="w-4 h-4" />

                  Analysis complete

                </div>

                <h2 className="text-3xl md:text-4xl font-semibold">
                  Model output
                </h2>

              </div>

              <button
                onClick={resetAnalysis}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition text-sm"
              >

                <RotateCcw className="w-4 h-4" />

                New analysis

              </button>

            </div>

            {/* =================================================
                DEMO MODE NOTICE
            ================================================= */}

            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.04] px-5 py-4">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <div className="text-xs uppercase tracking-[0.2em] text-amber-300 mb-1">
                    Current inference mode
                  </div>

                  <div className="text-sm text-zinc-400">
                    {mode === 'DEMO'
                      ? 'Demo inference · placeholder TNBC prediction'
                      : 'Research model inference'}
                  </div>

                </div>

                <div className="px-3 py-1.5 rounded-lg border border-amber-300/20 text-xs font-medium text-amber-200">
                  {mode}
                </div>

              </div>

            </div>

            {/* =================================================
                PREDICTION
            ================================================= */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

              <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.025] p-8">

                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
                  Predicted TNBC subtype
                </div>

                <div className="flex items-end gap-5">

                  <div className="text-7xl font-semibold tracking-tight text-rose-200">
                    {predictedSubtype}
                  </div>

                  <div className="pb-2">

                    <div className="text-3xl font-medium">
                      {confidence.toFixed(1)}%
                    </div>

                    <div className="text-xs text-zinc-500">
                      model confidence
                    </div>

                  </div>

                </div>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-6 text-sm text-zinc-500 leading-relaxed">
                  The system identifies the highest-probability
                  class within the four-subtype research classification
                  space.
                </div>

              </div>

              {/* MODEL CARD */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">

                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
                  Model
                </div>

                <div className="text-xl font-medium mb-2">
                  {modelName}
                </div>

                <div className="text-sm text-zinc-500 mb-6">
                  Deep transfer learning
                </div>

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-zinc-500">
                      Input
                    </span>

                    <span>
                      H&E
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-zinc-500">
                      Classes
                    </span>

                    <span>
                      4
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-zinc-500">
                      Explainability
                    </span>

                    <span>
                      Grad-CAM
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                PROBABILITY DISTRIBUTION
            ================================================= */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">

              <div className="mb-8">

                <div className="text-xs uppercase tracking-[0.2em] text-rose-300 mb-3">
                  Classification distribution
                </div>

                <h3 className="text-2xl font-medium">
                  Subtype probabilities
                </h3>

              </div>

              <div className="space-y-6">

                {probabilityData.map((item) => (

                  <div key={item.name}>

                    <div className="flex justify-between mb-2">

                      <span className="font-medium">
                        {item.name}
                      </span>

                      <span className="text-zinc-400">
                        {item.value.toFixed(1)}%
                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-400 transition-all duration-700"
                        style={{
                          width: `${Math.min(
                            Math.max(item.value, 0),
                            100
                          )}%`,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* =================================================
                IMAGES
            ================================================= */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* ORIGINAL */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] overflow-hidden">

                <div className="p-5 border-b border-white/10">

                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
                    Original specimen
                  </div>

                  <div className="font-medium">
                    H&E input
                  </div>

                </div>

                <div className="aspect-square bg-black">

                  {originalImage ? (

                    <img
                      src={originalImage}
                      alt="Original H&E specimen"
                      className="w-full h-full object-contain"
                    />

                  ) : (

                    <div className="h-full flex items-center justify-center text-zinc-600">
                      Image unavailable
                    </div>

                  )}

                </div>

              </div>

              {/* GRAD CAM */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] overflow-hidden">

                <div className="p-5 border-b border-white/10">

                  <div className="text-xs uppercase tracking-[0.2em] text-rose-300 mb-2">
                    Explainability
                  </div>

                  <div className="font-medium">
                    Grad-CAM activation map
                  </div>

                </div>

                <div className="aspect-square bg-black flex items-center justify-center">

                  {gradCam ? (

                    <img
                      src={gradCam}
                      alt="Grad-CAM visualization"
                      className="w-full h-full object-contain"
                    />

                  ) : (

                    <div className="text-zinc-600 text-sm">
                      No Grad-CAM visualization available
                    </div>

                  )}

                </div>

              </div>

            </div>

            {/* =================================================
                PREPROCESSED IMAGE
            ================================================= */}

            {preprocessedImage && (

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] overflow-hidden">

                <div className="p-6 border-b border-white/10">

                  <div className="text-xs uppercase tracking-[0.2em] text-rose-300 mb-2">
                    Preprocessing
                  </div>

                  <div className="font-medium">
                    Normalized tissue representation
                  </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">

                  <div className="aspect-square bg-black">

                    <img
                      src={preprocessedImage}
                      alt="Preprocessed tissue image"
                      className="w-full h-full object-contain"
                    />

                  </div>

                  <div className="p-8 flex flex-col justify-center">

                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5">
                      Processing pipeline
                    </div>

                    <div className="space-y-3">

                      {Object.entries(preprocessingSteps).map(
                        ([key, value]) => (

                          <div
                            key={key}
                            className="flex items-start gap-3"
                          >

                            <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" />

                            <span className="text-sm text-zinc-400">
                              {value}
                            </span>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>

              </div>

            )}

            {/* =================================================
                INTERPRETATION
            ================================================= */}

            <div className="rounded-3xl border border-rose-300/10 bg-rose-300/[0.03] p-8">

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-xl bg-rose-300/10 border border-rose-300/20 flex items-center justify-center shrink-0">

                  <FlaskConical className="w-5 h-5 text-rose-300" />

                </div>

                <div>

                  <div className="text-xs uppercase tracking-[0.2em] text-rose-300 mb-2">
                    Research interpretation
                  </div>

                  <h3 className="text-xl font-medium mb-3">
                    AI-assisted morphological insight
                  </h3>

                  <p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">
                    The output represents the model's predicted
                    association between the submitted histopathology
                    image and the four research subtype classes.
                    Grad-CAM provides a visual indication of regions
                    contributing to the model output.
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                DISCLAIMER
            ================================================= */}

            <div className="text-center pt-4 pb-10">

              <p className="text-[11px] uppercase tracking-widest text-zinc-600">
                Research prototype · Not a clinical diagnostic system
              </p>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}