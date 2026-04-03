import { motion } from "motion/react";
import { User, FileText, PlayCircle, Code, Table, Languages, Image as ImageIcon, Layers, MousePointer2, ChevronRight } from "lucide-react";
import aviation from '../assets/images/aviation/aviation.png';
import textPreview from '../assets/images/image/text_preview.jpg';
import imagePreview from '../assets/images/image/image_preview.jpg';
import multimodalPreview from '../assets/images/image/multimodal_preview.webp';

interface LandingPageProps {
  onNavigate: (page: 'overview' | 'assignments' | 'datasets' | 'art-analysis' | 'tabular-eda' | 'text-eda' | 'image-eda' | 'multimodal-eda', dataset?: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-mesh selection:bg-primary/20">
      <div className="max-w-[1200px] mx-auto px-8 py-16 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* ... (rest of the component) ... */}
      <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-3/5"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 px-4 py-1.5 bg-primary/5 rounded-full w-fit border border-primary/10"
          >
            Programming for AI & Data Science (CO3135)
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-black text-on-surface tracking-tighter mb-8 leading-[1.1] text-gradient"
          >
            The Academic <br/>Curator
          </motion.h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Assignment portfolio for Exploratory Data Analysis project. A systematic investigation into data patterns and insights.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/5 aspect-square relative"
        >
          {/* Picture frame effect */}
          <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 scale-95 blur-sm -z-10"></div>
          <div className="absolute inset-0 bg-tertiary/10 rounded-[3rem] -rotate-3 scale-95 blur-sm -z-10"></div>
          
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white paper-shadow floating relative">
            <img
              alt="Aviation image"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-110"
              src={aviation}
              referrerPolicy="no-referrer"
            />
            {/* Glass overlay hint */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] font-black uppercase text-primary text-center tracking-widest">Aviation Analysis Preview</p>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-3 mb-24 opacity-60"
      >
        <div className="flex items-center gap-3 px-6 py-2.5 bg-surface-container-low border border-on-surface-variant/5 rounded-full shadow-sm">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MousePointer2 size={16} className="text-primary rotate-12" />
          </motion.div>
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-on-surface-variant">
            Explore dataset distributions below
          </span>
        </div>
        <div className="h-12 w-px bg-linear-to-b from-primary/30 to-transparent"></div>
      </motion.div>

      {/* Group Info Section */}
      <section className="mb-24">
        <div className="flex flex-col items-center mb-12">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-primary mb-6"
          ></motion.div>
          <h2 className="text-4xl font-headline font-black text-on-surface tracking-tight">Our Research Team</h2>
          <p className="text-on-surface-variant mt-2 font-medium opacity-60">P4AI Group - Academic Year 2026</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "ĐẶNG DUY NGUYÊN", id: "2352821", role: "Team Lead" },
            { name: "NGUYỄN ĐẶNG MINH TRƯỜNG", id: "2353262", role: "Researcher" },
            { name: "TRẦN QUỐC THẮNG", id: "2353125", role: "Researcher" },
            { name: "LÊ MINH HÀO", id: "2310846", role: "Researcher" }
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white paper-shadow hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <User className="w-8 h-8" />
              </div>
              <h3 className="font-headline font-black text-xl mb-1 tracking-tight">{member.name}</h3>
              <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{member.role}</p>
              <div className="pt-4 border-t border-on-surface-variant/5">
                <p className="text-on-surface-variant text-xs font-medium">Student ID: <span className="text-on-surface font-bold">{member.id}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Assignment Focus Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-24 bg-on-surface text-surface rounded-[3rem] p-16 overflow-hidden relative shadow-2xl shadow-primary/20"
      >
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary/50"></div>
            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Core Assignment</span>
          </div>
          <h2 className="text-5xl font-headline font-black mb-8 tracking-tighter leading-tight italic">Exploratory Data Analysis</h2>
          <p className="text-xl text-surface/70 mb-12 leading-relaxed font-light">
            A comprehensive study focusing on tabular, text, and image data analysis. Our project explores the underlying distributions, patterns, and anomalies across diverse data formats to build a robust foundation for future modeling.
          </p>
          <div className="flex flex-wrap gap-6 text-on-surface">
            <a 
              href="/assignment-P4AI/Assignment_report_EDA.pdf" 
              download="Assignment report EDA.pdf" 
              className="flex items-center gap-3 academic-gradient text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all cursor-pointer no-underline"
            >
              <FileText size={18} />
              Read Report
            </a>
            <a 
              href="https://youtu.be/XjtqkoDtTiw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/90 active:scale-95 transition-all cursor-pointer no-underline"
            >
              <PlayCircle size={18} />
              Watch Video
            </a>
            <a 
              href="https://github.com/nguyendangcole/assignment-P4AI?tab=readme-ov-file" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:border-white/50 transition-all cursor-pointer no-underline"
            >
              <Code size={18} />
              Source Code
            </a>
          </div>
        </div>
        <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[120%] opacity-20 pointer-events-none rotate-6">
          <img
            alt="Abstract data waves"
            className="w-full h-full object-cover mix-blend-overlay"
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      </motion.section>

      <section className="mb-24 px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase text-[10px] tracking-[0.5em] block mb-4">Exploration Paths</span>
          <h2 className="text-5xl font-headline font-black text-on-surface tracking-tight">Interactive Dashboards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Tabular Data",
              icon: <Table size={28} />,
              desc: "Deep dive into structured data distributions, feature correlations, and statistical summaries of numerical features.",
              img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
              color: "bg-blue-50/50"
            },
            {
              title: "Text Data",
              icon: <Languages size={28} />,
              desc: "Natural Language Processing analysis covering tokenization, word frequencies, and semantic pattern discovery.",
              img: textPreview,
              color: "bg-amber-50/50"
            },
            {
              title: "Image Data",
              icon: <ImageIcon size={28} />,
              desc: "Vision-based analysis focusing on pixel distributions, color histograms, and structural dataset properties.",
              img: imagePreview,
              color: "bg-teal-50/50"
            },
            {
              title: "Multimodal Data",
              icon: <Layers size={28} />,
              desc: "Advanced cross-modal mapping investigating the relationship between descriptive text and visual aesthetics.",
              img: multimodalPreview,
              color: "bg-purple-50/50"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => {
                const map: Record<string, string> = {
                  "Tabular Data": "tabular-eda",
                  "Text Data": "text-eda",
                  "Image Data": "image-eda",
                  "Multimodal Data": "multimodal-eda"
                };
                onNavigate(map[item.title] as any);
              }}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 bg-white/40 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white paper-shadow hover:border-primary/20 transition-all"
            >
              <div className="h-72 lg:h-full overflow-hidden relative">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  src={item.img}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-headline font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium mb-8 opacity-70">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                  Launch View <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
