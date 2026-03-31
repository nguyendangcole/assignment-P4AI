import { motion } from "motion/react";
import { ChevronRight, CheckCircle, Clock, Hourglass, BookOpen, Database, FileText, Code, Video, Info, Layers, Sparkles, Layout } from "lucide-react";

export default function AssignmentDetails() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-12">
      {/* Breadcrumb & Hero */}
      <div className="mb-12">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-6 uppercase tracking-widest font-medium">
          <span>Assignments</span>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Assignment 1</span>
        </nav>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight"
            >
              Exploratory Data <br/>Analysis (Assignment 1)
            </motion.h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="px-4 py-1 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full">CO3135</div>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-tight opacity-60">Programming for AI & Data Science</div>
            </div>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Systematic exploration of multi-modal datasets at HCMUT, focusing on data inspection, visual synthesis, and interpretation for downstream machine learning tasks.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 bg-surface-container-low rounded-xl p-8 border border-on-surface-variant/10"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Status</span>
                <span className="px-3 py-1 bg-secondary-container text-secondary text-xs font-bold rounded-full">Active Mission</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Lead Instructor</span>
                <span className="text-on-surface font-black text-xs uppercase tracking-tighter">Dr. Thanh-Sach LE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Due Date</span>
                <span className="text-on-surface font-bold text-xs uppercase tracking-tight">03 APR 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Institution</span>
                <span className="text-on-surface font-bold text-xs uppercase tracking-tight">HCMUT - VNU-HCM</span>
              </div>
            </div>
            <button className="w-full mt-8 py-4 academic-gradient text-white rounded-lg font-bold shadow-lg shadow-primary/10 hover:scale-[0.98] transition-transform cursor-pointer">
              Submit Deliverables
            </button>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-16">
          {/* Goals Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-primary"></span>
              <h2 className="font-headline text-2xl font-bold tracking-tight">Assignment Objectives</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-on-surface-variant/5 group hover:border-primary/20 transition-all">
                <div className="text-primary mb-6 transition-transform group-hover:scale-110">
                  <Layers size={40} />
                </div>
                <h3 className="font-sans font-black uppercase tracking-widest text-[10px] text-primary mb-2">Requirement 01</h3>
                <h3 className="font-headline font-extrabold text-xl mb-3">Tri-Modal EDA</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">Mandatory analysis of **Tabular**, **Text**, and **Image** data. Students must load, inspect, and summarize distributions for each modality.</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-on-surface-variant/5 group hover:border-[#00685f]/20 transition-all">
                <div className="text-[#00685f] mb-6 transition-transform group-hover:scale-110">
                  <Sparkles size={40} />
                </div>
                <h3 className="font-sans font-black uppercase tracking-widest text-[10px] text-[#00685f] mb-2">Requirement 02</h3>
                <h3 className="font-headline font-extrabold text-xl mb-3">Advanced Synthesis</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">Optional integration of **Multimodal** (Text + Image) pairs to capture visual semantics and complex cross-modal relationships.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-12">
          {/* Deliverables */}
          <section>
            <h3 className="font-headline text-xl font-bold mb-6">Execution Deliverables</h3>
            <div className="space-y-4">
              {[
                { title: "GitHub Landing Page", icon: <Layout size={18}/>, status: "READY", statusIcon: <CheckCircle size={14} />, color: "text-emerald-600" },
                { title: "Video Presentation (10-15m)", icon: <Video size={18}/>, status: "IN PROGRESS", statusIcon: <Clock size={14} />, color: "text-amber-600" },
                { title: "Slide-style PDF Report", icon: <FileText size={18}/>, status: "EDITING", statusIcon: <Info size={14} />, color: "text-primary" }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-on-surface-variant/10 hover:bg-surface-container-low transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="font-bold text-sm tracking-tight">{item.title}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full bg-surface-container flex items-center gap-1.5 text-[9px] font-black tracking-widest ${item.color}`}>
                    {item.statusIcon}
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="bg-primary/5 rounded-2xl p-8">
            <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-primary" size={20} />
              Resources
            </h3>
            <ul className="space-y-6">
              {[
                { type: "Documentation", title: "Pandas Profiling API", desc: "Automated exploratory data analysis reports generator." },
                { type: "Library", title: "Seaborn Statistical Plots", desc: "Python data visualization library based on matplotlib." },
                { type: "Reference", title: "Statistical Foundations", desc: "University Lab guidelines for EDA best practices." }
              ].map((res, idx) => (
                <li key={idx}>
                  <a className="block group cursor-pointer" href="#">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">{res.type}</span>
                    <p className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{res.title}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{res.desc}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
