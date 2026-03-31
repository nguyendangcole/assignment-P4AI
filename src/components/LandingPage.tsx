import { motion } from "motion/react";
import { User, FileText, PlayCircle, Code, Table, Languages, Image as ImageIcon, Layers, MousePointer2 } from "lucide-react";
import aviation from '../assets/images/aviation/aviation.png';
import textPreview from '../assets/images/image/text_preview.jpg';
import imagePreview from '../assets/images/image/image_preview.jpg';
import multimodalPreview from '../assets/images/image/multimodal_preview.webp';

interface LandingPageProps {
  onNavigate: (page: 'overview' | 'assignments' | 'datasets' | 'art-analysis' | 'tabular-eda' | 'text-eda' | 'image-eda' | 'multimodal-eda', dataset?: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      {/* ... (rest of the component) ... */}
      <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-3/5"
        >
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Programming for AI & Data Science (CO3135)</p>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface tracking-tight mb-6 leading-tight">
            Group Project Overview
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Assignment portfolio for Exploratory Data Analysis project. A systematic investigation into data patterns and insights.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:w-2/5 aspect-square bg-surface-container-low rounded-xl overflow-hidden relative"
        >
          {/* 👇 HƯỚNG DẪN THÊM ẢNH AVIATION 👇 */}
          <img
            alt="Aviation image"
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
            src={aviation}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 academic-gradient opacity-10"></div>
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
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-grow bg-on-surface-variant opacity-20"></div>
          <h2 className="text-3xl font-headline font-bold text-on-surface px-4">Group Information</h2>
          <div className="h-px flex-grow bg-on-surface-variant opacity-20"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "ĐẶNG DUY NGUYÊN", id: "2352821" },
            { name: "NGUYỄN ĐẶNG MINH	TRƯỜNG", id: "2353262" },
            { name: "TRẦN QUỐC	THẮNG", id: "2353125" },
            { name: "LÊ MINH	HÀO", id: "2310846" }
          ].map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white paper-shadow p-6 rounded-xl border border-transparent hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-4">
                <User className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-on-surface-variant text-sm">Student ID: {member.id}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Assignment Focus Section */}
      <section className="mb-24 bg-surface-container-low rounded-xl p-12 overflow-hidden relative">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">Assignment 1 – Exploratory Data Analysis (EDA)</h2>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
            A comprehensive study focusing on tabular, text, and image data analysis. Our project explores the underlying distributions, patterns, and anomalies across diverse data formats to build a robust foundation for future modeling.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 academic-gradient text-white px-8 py-3 rounded font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all cursor-pointer">
              <FileText size={20} />
              Report (PDF)
            </button>
            <button className="flex items-center gap-2 bg-white text-on-surface px-8 py-3 rounded font-bold hover:bg-surface-container-high transition-all cursor-pointer">
              <PlayCircle size={20} />
              Video Presentation
            </button>
            <button className="flex items-center gap-2 bg-white text-on-surface px-8 py-3 rounded font-bold hover:bg-surface-container-high transition-all cursor-pointer">
              <Code size={20} />
              GitHub Repository
            </button>
          </div>
        </div>
        <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] opacity-10 pointer-events-none rotate-12">
          <img
            alt="Abstract data waves"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Datasets Overview */}
      <section className="mb-24">
        <h2 className="text-3xl font-headline font-bold text-on-surface mb-10 text-center">Datasets Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Tabular Data",
              icon: <Table className="text-primary" />,
              desc: "Exploration of structured datasets focusing on feature engineering, correlation matrices, and statistical distributions of numerical and categorical variables.",
              img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Text Data",
              icon: <Languages className="text-primary" />,
              desc: "NLP preprocessing including tokenization, stop-word removal, and TF-IDF analysis to uncover semantic patterns and sentiment trends within textual corpora.",
              img: textPreview
            },
            {
              title: "Image Data",
              icon: <ImageIcon className="text-primary" />,
              desc: "Initial computer vision analysis involving pixel intensity distributions, RGB channel histograms, and basic shape/edge detection techniques.",
              img: imagePreview
            },
            {
              title: "Multimodal Data",
              icon: <Layers className="text-primary" />,
              desc: "Integrative analysis of text-image pairs, investigating cross-modal semantic mapping and combined feature space distributions for complex data understanding.",
              img: multimodalPreview
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => {
                if (item.title === "Tabular Data") {
                  onNavigate('tabular-eda');
                } else if (item.title === "Text Data") {
                  onNavigate('text-eda');
                } else if (item.title === "Image Data") {
                  onNavigate('image-eda');
                } else {
                  onNavigate('multimodal-eda');
                }
              }}
            >
              <div className="h-64 mb-6 rounded-xl overflow-hidden bg-surface-container-highest">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-xl font-headline font-bold">{item.title}</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
