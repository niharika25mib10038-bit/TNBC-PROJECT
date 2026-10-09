export default function About() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-200 px-6 py-12 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <section>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            PROJECT & ACADEMIC PROFILE
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About TNBC-Insight AI
          </h1>

          <p className="text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed mt-4">
            An explainable computational pathology platform bridging routine
            Hematoxylin and Eosin (H&E) tissue morphology with mRNA-defined
            Lehmann molecular subtypes in Triple-Negative Breast Cancer.
          </p>
        </section>

        {/* Vision */}
        <section className="p-6 md:p-8 rounded-2xl bg-[#0F172A] border border-slate-800">
          <h2 className="text-xl font-bold text-white mb-4">
            Vision & Research Rationale
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <p>
              Triple-Negative Breast Cancer accounts for 15–20% of invasive
              carcinomas and is traditionally managed as a monolithic disease.
              While molecular profiling of BL1, BL2, M, and LAR subtypes can
              provide biological insights, sequencing costs and infrastructure
              requirements can limit routine adoption.
            </p>

            <p>
              Standard H&E histopathology is fast, widely available, and
              cost-effective. TNBC-Insight AI investigates whether subtle
              phenotypic signatures in tissue can be explored using deep
              learning while providing visual explanations through Grad-CAM.
            </p>
          </div>
        </section>

        {/* Academic Information */}
        <section>
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
            Academic Supervision & Institution
          </h2>

          <p className="text-sm text-slate-400 mt-2 mb-6">
            Developed as part of the Integrated Master of Technology program
            in Artificial Intelligence and Bioinformatics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                Department & University
              </p>

              <h3 className="text-lg font-bold text-white mt-3">
                VIT Bhopal University
              </h3>

              <p className="text-sm text-slate-300 mt-2">
                School of Biosciences, Engineering & Technology
                <br />
                Madhya Pradesh, India
              </p>

              <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800">
                Integrated M.Tech in Artificial Intelligence and Bioinformatics
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Project Supervision
              </p>

              <h3 className="text-lg font-bold text-white mt-3">
                Dr. Biswajit Saha
              </h3>

              <p className="text-sm text-slate-300 mt-2">
                Project Supervisor & Faculty Guide
                <br />
                School of Biosciences, Engineering & Technology
              </p>

              <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800 italic">
                Guided workflow architecture, biological grounding, and
                research methodology.
              </p>
            </div>

          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
            Project Research Team
          </h2>

          <p className="text-sm text-slate-400 mt-2 mb-6">
            Multidisciplinary collaboration across AI engineering,
            bioinformatics, and computational pathology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-sm font-bold text-white">
                Bharvi Thakuriya
              </h3>
              <p className="text-xs text-slate-400 mt-1">25MIB10014</p>
              <p className="text-xs text-indigo-400 mt-3">
                AI & Pipeline Engineering
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-sm font-bold text-white">
                Niharika Kochhar
              </h3>
              <p className="text-xs text-slate-400 mt-1">25MIB10038</p>
              <p className="text-xs text-indigo-400 mt-3">
                Frontend & Web Architecture
               
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-sm font-bold text-white">
                Harshita Pal
              </h3>
              <p className="text-xs text-slate-400 mt-1">25MIB10032</p>
              <p className="text-xs text-indigo-400 mt-3">
                Histopathology Data & Preprocessing
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-sm font-bold text-white">
                Anandi Sharma
              </h3>
              <p className="text-xs text-slate-400 mt-1">25MIB10036</p>
              <p className="text-xs text-indigo-400 mt-3">
                Clinical Trials & Biological Taxonomy
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-sm font-bold text-white">
                Shaharsh Srivastava
              </h3>
              <p className="text-xs text-slate-400 mt-1">25MIB10041</p>
              <p className="text-xs text-indigo-400 mt-3">
                Deep Learning & Model Training Plan
                Backend Backbone
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-sm font-bold text-white">
                Siddhika Namdeo
              </h3>
              <p className="text-xs text-slate-400 mt-1">25MIB10055</p>
              <p className="text-xs text-indigo-400 mt-3">
                Explainable AI (Grad-CAM) & Evaluation
              </p>
            </div>

          </div>
        </section>

        {/* Technology */}
        <section>
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
            System Architecture & Tech Stack
          </h2>

          <p className="text-sm text-slate-400 mt-2 mb-6">
            End-to-end technologies powering data normalization, inference,
            and visualization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-indigo-400 uppercase">
                Frontend Interface
              </p>
              <h3 className="text-sm font-bold text-white mt-2">
                React 18 • TypeScript • Vite
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Responsive single-page application with modular state-driven
                views.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-indigo-400 uppercase">
                Styling & UI
              </p>
              <h3 className="text-sm font-bold text-white mt-2">
                Tailwind CSS
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Custom medical dark-slate theme with high-contrast accessibility.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-indigo-400 uppercase">
                Backend Services
              </p>
              <h3 className="text-sm font-bold text-white mt-2">
                FastAPI • Python 3.12
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                REST endpoints for inference and pipeline routing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-indigo-400 uppercase">
                Deep Learning
              </p>
              <h3 className="text-sm font-bold text-white mt-2">
                PyTorch • ResNet-50
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Pre-trained feature extraction backbone with four subtype
                outputs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-indigo-400 uppercase">
                Digital Pathology
              </p>
              <h3 className="text-sm font-bold text-white mt-2">
                OpenCV • NumPy • Pillow
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Otsu thresholding and Macenko stain normalization.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs font-bold text-indigo-400 uppercase">
                Cloud & Persistence
              </p>
              <h3 className="text-sm font-bold text-white mt-2">
                Vercel • Render • SQLite
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Decoupled cloud infrastructure and persistence layer.
              </p>
            </div>

          </div>
        </section>

        {/* GitHub */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          <div>
            <h3 className="text-base font-bold text-white">
              Open Source & Academic Reproducibility
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              Explore the frontend client, FastAPI backend endpoints, and
              preprocessing scripts.
            </p>
          </div>

          <a
            href="https://github.com/niharika25mib10038-bit/TNBC-PROJECT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition whitespace-nowrap"
          >
            View GitHub Repository
          </a>

        </section>

      </div>
    </div>
  );
}