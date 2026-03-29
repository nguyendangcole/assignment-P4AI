import { motion } from "motion/react";
import { Table, FileText, ImageIcon, Download, CloudDownload, Eraser, Share2, ShieldCheck, ArrowRight, Info, History, Layers } from "lucide-react";

export default function DatasetsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-12">
      {/* ... (Hero Editorial Section) ... */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">Archive 02 // Research Data</span>
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
              Curated <span className="text-primary-container">Datasets</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-lg text-on-surface-variant leading-relaxed opacity-80 border-l-2 border-on-surface-variant/30 pl-6">
              A rigorous collection of standardized datasets for academic benchmarking, ranging from longitudinal tabular records to high-dimensional visual corpora.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Datasets */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tabular Dataset Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm flex flex-col h-full group transition-all duration-300 border border-on-surface-variant/5"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Table className="text-primary w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Type: Tabular</span>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=400"
                alt="Tabular data"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Sociodemographic Longitudinal</h3>
            <p className="text-xs text-on-surface-variant mb-6">Cleaned census-derived metrics for urban development modeling.</p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Source</span>
                <span className="text-on-surface font-medium">Urban Studies Dept.</span>
              </div>
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Size</span>
                <span className="text-on-surface font-medium">10k rows / 4.2MB</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-lg p-4 mb-8 overflow-hidden">
              <span className="text-[9px] uppercase font-bold text-primary mb-2 block">Structure Preview</span>
              <code className="text-[10px] font-mono text-on-surface-variant leading-tight block">
                {`{ id: int, age: int, income: float, zip: str, educ_level: enum }`}
              </code>
            </div>
            <button className="mt-auto w-full py-2.5 academic-gradient text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 group-hover:shadow-lg transition-all cursor-pointer">
              <Download size={14} />
              Download CSV
            </button>
          </motion.div>

          {/* Text Dataset Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm flex flex-col h-full group transition-all duration-300 border border-on-surface-variant/5"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <FileText className="text-secondary w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Type: Textual</span>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400"
                alt="Textual data"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Academic Abstracts Corpus</h3>
            <p className="text-xs text-on-surface-variant mb-6">Cross-discipline research summaries for NLP and topic modeling.</p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Source</span>
                <span className="text-on-surface font-medium">OpenScience API</span>
              </div>
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Size</span>
                <span className="text-on-surface font-medium">25k docs / 185MB</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-lg p-4 mb-8 overflow-hidden">
              <span className="text-[9px] uppercase font-bold text-secondary mb-2 block">Structure Preview</span>
              <code className="text-[10px] font-mono text-on-surface-variant leading-tight block">
                {`{ doc_id: str, text: longtext, tags: list, date: datetime }`}
              </code>
            </div>
            <button className="mt-auto w-full py-2.5 bg-surface-container-high text-on-surface text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all cursor-pointer">
              <Download size={14} />
              Download JSONL
            </button>
          </motion.div>

          {/* Image Dataset Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm flex flex-col h-full group transition-all duration-300 border border-on-surface-variant/5"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-tertiary/10 p-3 rounded-lg">
                <ImageIcon className="text-tertiary w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Type: Visual</span>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400"
                alt="Visual data"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Microscopic Pathogens</h3>
            <p className="text-xs text-on-surface-variant mb-6">High-resolution labeled imagery for classification algorithms.</p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Source</span>
                <span className="text-on-surface font-medium">Bio-Tech Lab S3</span>
              </div>
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Size</span>
                <span className="text-on-surface font-medium">5k imgs / 2.1GB</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-lg p-4 mb-8 overflow-hidden">
              <span className="text-[9px] uppercase font-bold text-tertiary mb-2 block">Structure Preview</span>
              <code className="text-[10px] font-mono text-on-surface-variant leading-tight block">
                /train/ {`{ class_a: *.jpg, class_b: *.jpg }`} /metadata.csv
              </code>
            </div>
            <button className="mt-auto w-full py-2.5 bg-surface-container-high text-on-surface text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all cursor-pointer">
              <Download size={14} />
              Download TAR.GZ
            </button>
          </motion.div>

          {/* Multimodal Dataset Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm flex flex-col h-full group transition-all duration-300 border border-on-surface-variant/5"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Layers className="text-primary w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Type: Multimodal</span>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=400"
                alt="Multimodal data"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Cognitive Text-Image Pairs</h3>
            <p className="text-xs text-on-surface-variant mb-6">Complex scene descriptions mapped to high-fidelity imagery for multimodal grounding.</p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Source</span>
                <span className="text-on-surface font-medium">Vision-Language Lab</span>
              </div>
              <div className="flex justify-between text-[10px] py-1 border-b border-on-surface-variant/10">
                <span className="text-on-surface-variant/60">Size</span>
                <span className="text-on-surface font-medium">100k pairs / 12.4GB</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-lg p-4 mb-8 overflow-hidden">
              <span className="text-[9px] uppercase font-bold text-primary mb-2 block">Structure Preview</span>
              <code className="text-[10px] font-mono text-on-surface-variant leading-tight block">
                /images/ *.jpg {`{ doc_id: str, prompt: text, clip_score: float }`} /metadata.parquet
              </code>
            </div>
            <button className="mt-auto w-full py-2.5 bg-surface-container-high text-on-surface text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all cursor-pointer">
              <Download size={14} />
              Download PARQUET
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Diagram Section */}
      <section className="bg-surface-container-low rounded-3xl p-12 mb-24 relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Data Processing Pipeline</h2>
            <p className="text-on-surface-variant opacity-80">Our rigorous multi-stage pipeline ensures the integrity and reproducibility of every dataset provided in the curator.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {[
              { title: "Raw Acquisition", icon: <CloudDownload />, desc: "Unfiltered extraction from source APIs" },
              { title: "Cleansing", icon: <Eraser />, desc: "Outlier removal & value normalization", active: true },
              { title: "Structuring", icon: <Share2 />, desc: "Format conversion (JSON, CSV, H5)" },
              { title: "Verification", icon: <ShieldCheck />, desc: "Statistical integrity & hash validation" }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 flex-1">
                <div className="flex flex-col items-center text-center max-w-[180px]">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4 border border-on-surface-variant/10 ${step.active ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-[11px] text-on-surface-variant">{step.desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-primary/20 to-primary/40 relative min-w-[40px]">
                    <div className="absolute -right-1 -top-[9px] text-primary/40">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* Informational Footer Callout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-on-surface-variant/10 pt-20">
        <div>
          <h2 className="text-2xl font-headline font-bold mb-4">Request a Dataset</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">Missing a specific study or niche repository? Our team can facilitate acquisition and preprocessing for verified university faculty and researchers.</p>
          <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all cursor-pointer" href="#">
            Inquire about custom curation
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="bg-surface-container rounded-2xl p-8 border border-on-surface-variant/10">
          <div className="flex gap-4 items-start mb-6">
            <Info className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-bold mb-1">Fair Use Policy</h4>
              <p className="text-sm text-on-surface-variant">All datasets are provided under the Academic Open License. Commercial redistribution is strictly prohibited without explicit written consent from the source institution.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <History className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-bold mb-1">Citation Mandate</h4>
              <p className="text-sm text-on-surface-variant">Researchers must cite both the original source and the Academic Curator in all resulting publications or whitepapers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
