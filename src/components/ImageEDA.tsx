import React, { useState, useEffect } from "react";
import padangHero from "../assets/images/image/padang_food.png";
import { motion, AnimatePresence } from "motion/react";
import Plot from "react-plotly.js";
import {
    ArrowRight,
    ArrowLeft,
    BookOpen,
    HelpCircle,
    BarChart3,
    Search,
    Brain,
    Rocket,
    Terminal,
    Code2,
    CheckCircle2,
    Columns,
    Database,
    FileText,
    AlertTriangle,
    Users,
    Layout,
    Layers,
    Table,
    ChevronDown,
    ChevronRight,
    Copy,
    Dices,
    BarChart,
    Activity,
    Zap,
    Info,
    GitMerge,
    PieChart,
    Filter,
    Target,
    Link,
    BoxSelect,
    Image as ImageIcon,
    Maximize,
    Palette,
    Sun,
    Focus,
    Box, 
    HardDrive, 
} from "lucide-react";

import _data from "../assets/data/dataset_padang_food/data.json";

const data = _data as any;

// --- Modern Academic UI Components (Mirroring TabularEDA) ---

const NavItem = ({ href, children, active = false }: { href: string, children: React.ReactNode, active?: boolean }) => (
    <a
        href={href}
        className={`text-sm font-semibold tracking-tight transition-all flex items-center h-full px-4 border-b-2 ${active
            ? "text-primary border-primary"
            : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/20"
            }`}
    >
        {children}
    </a>
);

const StatCard = ({ label, value, icon: Icon, variant = "ghost" }: { label: string, value: string | number, icon?: any, variant?: "ghost" | "primary" }) => (
    <div className={`${variant === "primary" ? "bg-primary text-on-primary shadow-2xl shadow-primary/20 scale-105" : "bg-white border border-outline-variant/10 shadow-sm hover:shadow-md transition-all"} p-8 md:p-10 rounded-3xl relative overflow-hidden group`}>
        {Icon && <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity ${variant === "primary" ? "text-white" : "text-primary"}`}><Icon size={120} /></div>}
        <div className={`${variant === "primary" ? "text-primary-container" : "text-on-surface-variant"} text-[10px] font-black uppercase tracking-[0.2em] mb-4`}>{label}</div>
        <div className="text-4xl font-sans font-bold tracking-tight">{value}</div>
    </div>
);

const ImagePlaceholder = ({ className = "", label = "Dataset Image", src }: { className?: string, label?: string, src?: string, key?: React.Key }) => (
    <div className={`relative overflow-hidden group/img ${className}`}>
        {src ? (
            <img 
                src={src} 
                alt={label}
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover/img:scale-110" 
            />
        ) : (
            <div className={`bg-white/5 border-2 border-dashed border-outline-variant/10 rounded-[2.5rem] flex items-center justify-center p-8 transition-all hover:bg-primary/5 hover:border-primary/20 min-h-[200px]`}>
                <div className="flex flex-col items-center gap-4 opacity-10 group-hover/img:opacity-30 transition-opacity">
                    <ImageIcon size={40} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-center leading-relaxed">{label}</span>
                </div>
            </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-on-surface/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
    </div>
);

// Scientific Image Sampler Logic
const cuisineImages = import.meta.glob("../assets/data/dataset_padang_food/**/*.{jpg,JPG,png,PNG}", {
    eager: true,
    query: '?url',
    import: 'default'
});

const SampleGalleryContent = () => {
    const classes = [
        "ayam_goreng", "ayam_pop", "daging_rendang", "dendeng_batokok", 
        "gulai_ikan", "gulai_tambusu", "gulai_tunjang", "telur_balado", "telur_dadar"
    ];
    const [selectedClass, setSelectedClass] = useState(classes[0]);

    // Filter images for the selected class
    const getSamples = (className: string) => {
        return Object.entries(cuisineImages)
            .filter(([path]) => path.includes(`/${className}/`))
            .slice(0, 4)
            .map(([path, url]) => ({
                url: url as string,
                name: path.split('/').pop()?.split('.')[0] || "Sample"
            }));
    };

    const samples = getSamples(selectedClass);

    return (
        <div className="space-y-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Dices size={20} />
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-on-surface">Scientific Sampler</h4>
                        <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Class-based stochastic review</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-surface-container-low rounded-2xl p-2 border border-outline-variant/10 min-w-[280px]">
                    <span className="pl-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 whitespace-nowrap">Choose Class:</span>
                    <select 
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="flex-1 bg-white border border-outline-variant/10 rounded-xl px-4 py-2 text-xs font-bold text-primary focus:outline-none appearance-none cursor-pointer hover:bg-primary/5 transition-colors"
                    >
                        {classes.map(c => (
                            <option key={c} value={c}>{c.replace('_', ' ').toUpperCase()}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {samples.length > 0 ? samples.map((sample, i) => (
                    <motion.div
                        key={`${selectedClass}-${i}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="space-y-4"
                    >
                        <ImagePlaceholder src={sample.url} label={sample.name} className="aspect-square shadow-2xl" />
                        <div className="flex items-center justify-between px-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-40">{sample.name}</span>
                            <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-2 py-1 rounded-lg">
                                <Maximize size={12} />
                                Verified
                            </div>
                        </div>
                    </motion.div>
                )) : (
                   Array.from({ length: 4 }).map((_, i) => (
                        <ImagePlaceholder key={i} label="Awaiting Local Dataset" className="aspect-square opacity-20" />
                   ))
                )}
            </div>
        </div>
    );
};

const InteractiveAnalysis = ({ id, title, subtitle, icon: Icon, pythonCode, plots = [], children, defaultOpen = false }: any) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [showCode, setShowCode] = useState(false);
    const [selectedPlot, setSelectedPlot] = useState(plots && plots.length > 0 ? plots[0].label : "All");

    const handleCopy = () => {
        if (pythonCode) navigator.clipboard.writeText(pythonCode);
    };

    const plotsToRender = selectedPlot === "All" ? plots : plots.filter((p: any) => p.label === selectedPlot);

    return (
        <section className="py-2 mb-8 scroll-mt-24" id={id}>
            <div className="bg-white rounded-[2rem] border border-outline-variant/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all hover:shadow-[0_15px_60px_rgb(0,0,0,0.08)]">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-8 hover:bg-surface-container-low transition-colors group cursor-pointer text-left focus:outline-none"
                >
                    <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isOpen ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-surface-container-high text-primary group-hover:bg-primary/5 shadow-sm"}`}>
                            <Icon size={22} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-on-surface">{title}</h2>
                            <p className="text-on-surface-variant text-[11px] font-medium opacity-60 italic">{subtitle}</p>
                        </div>
                    </div>
                    <div className={`flex items-center text-on-surface-variant/40 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
                        <ChevronDown size={28} />
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="pt-2 pb-16 px-10 border-t border-outline-variant/5">
                                <div className="flex justify-end mb-10">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setShowCode(!showCode); }}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs tracking-tight transition-all cursor-pointer border ${showCode ? "bg-on-surface text-white border-on-surface" : "bg-white text-on-surface-variant border-outline-variant/20 hover:bg-surface-container"}`}
                                    >
                                        <BookOpen size={16} />
                                        {showCode ? "Hide Tutorial" : "View Tutorial"}
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {showCode && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden mb-12"
                                        >
                                            <div className="bg-slate-900 rounded-3xl p-8 font-mono text-[13px] relative border border-outline-variant/10 shadow-inner">
                                                <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] ml-2">Python Analysis Script</span>
                                                </div>
                                                <code className="text-slate-300 block leading-relaxed overflow-x-auto whitespace-pre custom-scrollbar select-all">
                                                    {pythonCode || "# Analysis implementation pending user definition"}
                                                </code>
                                                <button
                                                    onClick={handleCopy}
                                                    className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors cursor-pointer bg-white/5 p-2 rounded-lg"
                                                    title="Copy Code"
                                                >
                                                    <Copy size={16} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="flex flex-col gap-10">
                                    {children && <div className="w-full">{children}</div>}

                                    {plots && plots.length > 1 && (
                                        <div className="flex flex-col sm:flex-row items-baseline sm:items-center gap-6 bg-surface-container-low/50 p-4 rounded-2xl border border-outline-variant/10 w-fit">
                                            <div className="flex items-center gap-2 border-r border-outline-variant/10 pr-6">
                                                <Filter size={16} className="text-primary" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Views</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {plots.map((plot: any) => (
                                                    <button
                                                        key={plot.label}
                                                        onClick={() => setSelectedPlot(plot.label)}
                                                        className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer border ${selectedPlot === plot.label ? "bg-primary text-on-primary border-primary shadow-md" : "bg-white text-on-surface-variant border-outline-variant/10 hover:border-primary/50"}`}
                                                    >
                                                        {plot.label}
                                                    </button>
                                                ))}
                                                <button
                                                    onClick={() => setSelectedPlot("All")}
                                                    className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer border ${selectedPlot === "All" ? "bg-on-surface text-white border-on-surface shadow-md" : "bg-white text-on-surface border-outline-variant/10 hover:border-on-surface/50"}`}
                                                >
                                                    Full Archive
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 gap-12">
                                        {plotsToRender && plotsToRender.map((plot: any, idx: number) => (
                                            <motion.div
                                                key={plot.label || idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm relative group overflow-hidden"
                                            >
                                                <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/5">
                                                    <div className="flex items-center gap-3">
                                                        <BarChart size={18} className="text-primary" />
                                                        <h4 className="text-sm font-bold text-on-surface uppercase tracking-tight">{plot.label} Profile</h4>
                                                    </div>
                                                    {plot.badge && <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/10">{plot.badge}</span>}
                                                </div>
                                                <div className="w-full flex items-center justify-center min-h-[500px]">
                                                    {plot.data ? (
                                                        <Plot
                                                            data={plot.data}
                                                            layout={{
                                                                ...plot.layout,
                                                                paper_bgcolor: "rgba(0,0,0,0)",
                                                                plot_bgcolor: "rgba(0,0,0,0)",
                                                                font: { family: "Inter, sans-serif", size: 12 },
                                                                margin: { t: 40, r: 40, b: 80, l: 60 },
                                                                width: undefined,
                                                                autosize: true,
                                                                responsive: true,
                                                                showlegend: true,
                                                                legend: { orientation: "h", y: -0.2 }
                                                            }}
                                                            useResizeHandler={true}
                                                            style={{ width: "100%", height: "500px" }}
                                                            config={{ responsive: true, displayModeBar: false }}
                                                        />
                                                    ) : (
                                                        <div className="text-outline-variant/40 italic text-sm">Visual analysis placeholder - Data to be defined</div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default function ImageEDA({ onBack }: { onBack: () => void }) {
    const [activeNav, setActiveNav] = useState("overview");

    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveNav(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section[id], div[id]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const tocItems = [
        { id: "overview", label: "Overview" },
        { id: "loading", label: "Data Loading" },
        { id: "inventory", label: "Classes Inventory" },
        { id: "extraction", label: "Feature Extraction" },
        { id: "distribution", label: "Class Distribution" },
        { id: "sampling", label: "Sample Gallery" },
        { id: "profiling", label: "Feature Profiling" },
        { id: "image-quality-metrics", label: "Quality Analysis" },
        { id: "rgb-color-distribution", label: "Color Space" },
        { id: "size-marginal-distribution", label: "Dimension Analysis" },
        { id: "file-size-distribution", label: "Storage Metrics" },
        { id: "aspect-ratio-distribution", label: "Aspect Ratios" },
        { id: "findings", label: "Study Summary" },
    ];

    return (
        <div className="min-h-screen relative bg-[#f8fafb] selection:bg-primary/20 text-on-surface font-sans antialiased">
            <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f3f5; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #00685f; border-radius: 10px; border: 2.5px solid #f1f3f5; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #004d46; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

            {/* Back Button */}
            <div className="fixed top-24 left-8 z-50">
                <button
                    onClick={onBack}
                    className="bg-white p-4 rounded-2xl border border-outline-variant/10 shadow-2xl hover:bg-primary hover:text-white transition-all group cursor-pointer active:scale-90"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>

            <main className="pt-8 flex max-w-[1440px] mx-auto px-4 lg:px-8">
                {/* Sticky Table of Contents Sidebar */}
                <aside className="hidden xl:block w-72 sticky top-32 self-start pr-12 h-[calc(100vh-160px)] overflow-y-auto no-scrollbar">
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40 mb-10 pl-6">Analysis Index</h3>
                            <div className="relative border-l-2 border-outline-variant/10 ml-6 space-y-1">
                                {tocItems.map((item) => {
                                    const isActive = activeNav === item.id;
                                    return (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block py-2.5 px-6 -ml-[2px] border-l-2 text-[11px] font-bold tracking-tight transition-all duration-300 ${isActive
                                                ? "text-primary border-primary bg-primary/5"
                                                : "text-on-surface-variant/40 border-transparent hover:text-on-surface-variant/70 hover:border-outline-variant/30"
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="flex-1 min-w-0">
                    {/* Academic Hero Section */}
                    <section className="relative py-28 overflow-hidden bg-white border border-outline-variant/5 rounded-[3rem] shadow-sm mb-12" id="overview">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary/[0.03] to-transparent -z-10" />
                        <div className="max-w-[1240px] mx-auto px-10">
                            <div className="flex flex-col lg:flex-row items-center gap-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex-1 text-center lg:text-left"
                                >
                                    <div className="flex items-center justify-center lg:justify-start gap-3 text-primary font-bold tracking-widest text-[10px] uppercase mb-8">
                                        <span className="w-8 h-px bg-primary/40"></span>
                                        Image Modality Analysis
                                    </div>
                                    <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1] text-on-surface">
                                        Padang Cuisine <br />
                                        <span className="text-primary italic font-serif opacity-90">Image Dataset Report.</span>
                                    </h1>
                                    <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl font-medium mb-12 opacity-80">
                                        Exploratory analysis of 9 traditional Indonesian food classes from West Sumatra, curated for training high-fidelity classification models.
                                    </p>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                        <div className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/10 text-[10px] font-black uppercase tracking-widest">
                                            <Database size={14} className="text-primary" />
                                            993 Images
                                        </div>
                                        <div className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/10 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                                            <CheckCircle2 size={14} />
                                            9 Classes
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="w-full lg:w-[420px] space-y-8"
                                >
                                    <div className="bg-white rounded-[2.5rem] p-10 border border-outline-variant/10 shadow-2xl shadow-on-surface/5 relative">
                                        <div className="space-y-8">
                                            <div className="flex justify-between items-center pb-6 border-b border-outline-variant/10">
                                                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Study Metadata</span>
                                                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[9px] font-bold uppercase tracking-tight">V1.0.0</span>
                                            </div>
                                            <div className="space-y-5">
                                                {[
                                                    { label: "Collection Method", val: "Bing Scraper" },
                                                    { label: "Image Format", val: "JPG / PNG" },
                                                    { label: "Avg Per Class", val: "~110 images" },
                                                ].map((item, i) => (
                                                    <div key={i} className="flex justify-between items-center">
                                                        <span className="text-xs font-semibold text-on-surface-variant opacity-60 uppercase tracking-tight font-headline">{item.label}</span>
                                                        <span className="text-on-surface font-black text-sm">{item.val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <a
                                                href="https://www.kaggle.com/datasets/faldoae/padangfood"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full mt-10 py-5 bg-on-surface text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-xl shadow-on-surface/10 flex items-center justify-center gap-3 cursor-pointer no-underline mb-10"
                                            >
                                                <BookOpen size={18} />
                                                View on Kaggle
                                            </a>

                                            <div className="pt-8 border-t border-outline-variant/10">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <Users size={16} className="text-primary" />
                                                    <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Project Contributors</span>
                                                </div>
                                                <div className="flex flex-wrap gap-3">
                                                    {[
                                                        "Trần Quốc Thắng"
                                                        
                                                    ].map((member, i) => (
                                                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl border border-outline-variant/10 w-fit">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                                            <span className="text-[10px] font-bold text-on-surface whitespace-nowrap">{member}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ImagePlaceholder label="Padang Cuisine Hero" src={padangHero} className="min-h-[280px]" />
                                </motion.div>
                            </div>

                            {/* Core KPIs */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24">
                                <StatCard label="Total Samples" value="993" icon={Database} />
                                <StatCard label="Classes" value="9" icon={Layout} />
                                <StatCard label="Avg Resolution" value="~720px" icon={Maximize} />
                                <StatCard label="Format" value="Mixed" variant="primary" icon={ImageIcon} />
                            </div>
                        </div>
                    </section>

                    <div className="max-w-[1240px] mx-auto pb-40">

                        {/* Dataset Profile & Ethics */}
                        <section className="py-20 mb-8" id="profile">
                            <div className="flex flex-col md:flex-row gap-16">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center"><Info size={20} /></div>
                                        <h2 className="text-2xl font-bold tracking-tight">Dataset Profile</h2>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-on-surface-variant leading-relaxed">
                                        <div>
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Study Context</h3>
                                            <p className="text-sm font-medium">
                                                Created to support deep learning models in recognizing traditional Indonesian cuisine, focusing on the rich culinary heritage of Padang.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Objective</h3>
                                            <p className="text-sm font-medium">
                                                To develop a high-quality food image dataset for training CNN-based classifiers and promoting Indonesian cultural heritage through AI.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[380px] bg-surface-container-low/50 rounded-3xl p-8 border border-outline-variant/10">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-6">Source & Attribution</h3>
                                    <div className="space-y-6">
                                        <p className="text-[12px] leading-relaxed text-on-surface-variant font-medium italic opacity-70">
                                            Dataset curated by Faldo Fajri Afrinanto via Bing Image Search scraping and manual review.
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <a href="https://www.youtube.com/watch?v=eMdW4pI7gnk&t=6s" target="_blank" className="flex items-center gap-2 text-[11px] font-bold text-primary hover:underline transition-colors"><Link size={14} /> Method Reference</a>
                                            <a href="https://www.kaggle.com/datasets/faldoae/padangfood" target="_blank" className="flex items-center gap-2 text-[11px] font-bold text-primary hover:underline transition-colors"><Database size={14} /> Kaggle Archive</a>
                                        </div>
                                        <div className="pt-4 border-t border-outline-variant/10 text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-widest leading-loose">
                                            Citation: Afrinanto, F. F. (2022). Padang Cuisine Image Dataset. Kaggle.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <InteractiveAnalysis
                            id="loading"
                            title="Load & Inspect Data"
                            subtitle="Directory scanning and preliminary dataset structuring with Pandas."
                            icon={Database}
                            defaultOpen={true}
                            pythonCode={`import pandas as pd
from pathlib import Path

# declare data path
data_dir = 'padang_dataset/dataset_padang_food'

# initialize list
paths = []
labels = []

print("scanning folder...")
for path in Path(data_dir).rglob('*.*'):
    if path.is_file():
        paths.append(str(path))         # save img path
        labels.append(path.parent.name)

# Create dataframe
df = pd.DataFrame({'path': paths, 'species': labels})

# sort table
df = df.sort_values('species').reset_index(drop=True)

# check
print("=========================================")
print(f"succesfull")
print(f"total img: {len(df)}")
print(f"Classes: {df['species'].nunique()}")
print("=========================================")`}
                        >
                            <div className="flex flex-col gap-10">
                                {/* Console Output Mockup */}
                                <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs text-emerald-400 border border-emerald-500/10 shadow-lg">
                                    <div className="flex items-center gap-2 mb-4 opacity-40">
                                        <Terminal size={14} />
                                        <span className="uppercase tracking-widest text-[9px]">Standard Output</span>
                                    </div>
                                    <p className="leading-relaxed">
                                        scanning folder...<br />
                                        =========================================<br />
                                        succesfull<br />
                                        total img: 993<br />
                                        Classes: 9<br />
                                        =========================================
                                    </p>
                                </div>

                                {/* DataFrame Preview */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Table size={16} className="text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">DataFrame Head (df.head()) Preview</span>
                                    </div>
                                    <div className="bg-white rounded-[1.5rem] border border-outline-variant/10 shadow-sm overflow-hidden overflow-x-auto custom-scrollbar">
                                        <table className="w-full text-left border-collapse min-w-[800px]">
                                            <thead className="bg-[#f8fafc] text-on-surface-variant">
                                                <tr>
                                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest border-b border-outline-variant/10">Index</th>
                                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest border-b border-outline-variant/10">Path</th>
                                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest border-b border-outline-variant/10">Species</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-outline-variant/5">
                                                {[0, 1, 2, 3, 4].map((i) => (
                                                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                                                        <td className="px-8 py-4 font-mono text-[10px] opacity-40 italic">{i}</td>
                                                        <td className="px-8 py-4 text-[11px] text-on-surface-variant font-medium">padang_dataset/dataset_padang_food/ayam_goreng/...img_{i}.jpg</td>
                                                        <td className="px-8 py-4 font-bold text-[11px] text-primary uppercase tracking-tighter">ayam_goreng</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* User Strategy Tip */}
                                <div className="flex items-start gap-5 bg-primary/5 p-8 rounded-[2rem] border border-primary/10">
                                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0"><ImageIcon size={20} /></div>
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-bold text-on-surface">Recommendation: Sample Visual Illustrations</h4>
                                        <p className="text-xs text-on-surface-variant leading-relaxed opacity-70">
                                            Yes, I highly recommend including a <b>"Dataset Sample Preview"</b> here. Visualizing a small batch of images alongside the path logs provides critical context for validating your path logic and initial label assignments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </InteractiveAnalysis>

                        <InteractiveAnalysis
                            id="inventory"
                            title="Classes Inventory"
                            subtitle="Full enumeration of food categories and sample weights."
                            icon={Columns}
                            defaultOpen={false}
                        >
                            <div className="bg-white rounded-[1.5rem] border border-outline-variant/10 shadow-sm overflow-hidden overflow-x-auto overflow-y-auto max-h-[500px] custom-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[1000px]">
                                    <thead className="sticky top-0 z-20 bg-on-surface text-white">
                                        <tr>
                                            <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-widest">Class Label</th>
                                            <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-widest">Dish Name</th>
                                            <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-widest">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-outline-variant/5">
                                        {[
                                            { name: "ayam_goreng", type: "Fried Chicken", desc: "Traditional Indonesian spiced fried chicken." },
                                            { name: "ayam_pop", type: "Ayam Pop", desc: "Skinless fried chicken cooked in coconut water and spices." },
                                            { name: "daging_rendang", type: "Beef Rendang", desc: "Slow-cooked beef in coconut milk and rich spice paste." },
                                            { name: "dendeng_batokok", type: "Dendeng Batokok", desc: "Crushed beef jerky with green or red chili sauce." },
                                            { name: "gulai_ikan", type: "Fish Curry", desc: "Rich and spiced coconut fish curry." },
                                            { name: "gulai_tambusu", type: "Gulai Tambusu", desc: "Cow intestine stuffed with spiced egg mix." },
                                            { name: "gulai_tunjang", type: "Cow Foot Curry", desc: "Beef tendon/cow foot in thick coconut curry." },
                                            { name: "telur_balado", type: "Egg Balado", desc: "Hard-boiled eggs cooked in spicy red chili sauce." },
                                            { name: "telur_dadar", type: "Omelette", desc: "Thick Padang-style vegetable and herb omelette." }
                                        ].map((f) => (
                                            <tr key={f.name} className="hover:bg-primary/5 transition-colors even:bg-surface-container-low/20">
                                                <td className="px-8 py-4 font-bold text-sm text-primary">{f.name}</td>
                                                <td className="px-8 py-4">
                                                    <span className="px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest border bg-on-surface text-white border-on-surface shadow-sm">
                                                        {f.type}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-4 text-on-surface-variant text-sm font-normal opacity-70 leading-relaxed">{f.desc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </InteractiveAnalysis>

                        <InteractiveAnalysis
                            id="extraction"
                            title="Feature Extraction"
                            subtitle="Automated parameter derivation for scientific image profiling."
                            icon={Database}
                            pythonCode={`import cv2
import numpy as np
import os
from tqdm.notebook import tqdm

# Initialize storage for extracted features
widths, heights, aspect_ratios, file_sizes = [], [], [], []
mean_r, mean_g, mean_b = [], [], []
brightness, contrast, sharpness = [], [], []

print("Starting automated image scanning...")

for index, row in tqdm(df.iterrows(), total=df.shape[0]):
    img_path = row['path']
    file_sizes.append(os.path.getsize(img_path) / 1024.0)
    
    img = cv2.imread(img_path)
    if img is not None:
        h, w, _ = img.shape
        widths.append(w)
        heights.append(h)
        aspect_ratios.append(w / h if h != 0 else 0)
        
        # Spectral Color Analysis
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        mean_r.append(img_rgb[:, :, 0].mean())
        mean_g.append(img_rgb[:, :, 1].mean())
        mean_b.append(img_rgb[:, :, 2].mean())
        
        # Structural Quality Metrics
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        brightness.append(gray.mean())
        contrast.append(gray.std())
        sharpness.append(cv2.Laplacian(gray, cv2.CV_64F).var())
    else:
        # Error handling for corrupted samples
        [l.append(None) for l in [widths, heights, aspect_ratios, mean_r, mean_g, mean_b, brightness, contrast, sharpness]]

# Compile features into master dataset
df['width'], df['height'] = widths, heights
df['aspect_ratio'], df['file_size_kb'] = aspect_ratios, file_sizes
df['mean_r'], df['mean_g'], df['mean_b'] = mean_r, mean_g, mean_b
df['brightness'], df['contrast'], df['sharpness'] = brightness, contrast, sharpness

# Pruning invalid entries
df = df.dropna().reset_index(drop=True)
print("\\nProcessing complete.")
display(df.head())`}
                        >
                            <div className="space-y-10">
                                {/* Execution Terminal */}
                                <div className="bg-[#1e1e1e] rounded-3xl p-8 font-mono text-sm leading-relaxed shadow-2xl relative group overflow-hidden border border-white/5">
                                    <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                                        <span className="ml-4 text-white/40 text-[10px] font-black uppercase tracking-widest">Image Scanner V1.0</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-white/40 mb-1">$ python extract_features.py</div>
                                        <div className="text-[#4ade80] flex items-center gap-3">
                                            <span className="opacity-50">#</span> starting scan img...
                                        </div>
                                        <div className="flex items-center gap-4 py-2">
                                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 2, ease: "easeInOut" }}
                                                    className="bg-[#4ade80] h-full shadow-[0_0_10px_#4ade80]" 
                                                />
                                            </div>
                                            <span className="text-[#4ade80] font-black italic min-w-[3rem]">100%</span>
                                        </div>
                                        <div className="text-white/60 mb-2">993/993 [00:42&lt;00:00, 23.64it/s]</div>
                                        <div className="text-[#4ade80] border-t border-white/5 pt-4 mt-4 flex items-center gap-2 font-bold uppercase tracking-tighter">
                                            <CheckCircle2 size={16} /> extraction successful
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Results */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between px-2">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <Table size={16} />
                                            </div>
                                            <h4 className="text-sm font-black uppercase tracking-widest text-on-surface">Dataframe Update (df.head)</h4>
                                        </div>
                                        <div className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
                                            Showing 12 Feature Columns
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-3xl border border-outline-variant/10 shadow-sm overflow-hidden overflow-x-auto custom-scrollbar">
                                        <table className="w-full text-left border-collapse min-w-[1200px]">
                                            <thead className="bg-surface-container-low border-b border-outline-variant/5">
                                                <tr>
                                                    {["path", "species", "width", "height", "aspect_ratio", "file_size_kb", "mean_r", "mean_g", "mean_b", "br_ness", "contrast", "sharp"].map((h) => (
                                                        <th key={h} className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-outline-variant/5 font-sans">
                                                {[
                                                    { path: "dataset/ayam_goreng (10).jpg", species: "ayam_goreng", w: 445, h: 474, ar: 0.94, size: 130.03, r: 141.8, g: 92.3, b: 77.9, br: 105.5, co: 65.0, sh: 564.9 },
                                                    { path: "dataset/ayam_pop (95).jpg", species: "ayam_pop", w: 505, h: 404, ar: 1.25, size: 75.64, r: 160.8, g: 102.2, b: 81.1, br: 117.3, co: 70.1, sh: 1085.1 },
                                                    { path: "dataset/rendang (14).JPG", species: "daging_rendang", w: 640, h: 480, ar: 1.33, size: 191.60, r: 136.2, g: 101.1, b: 82.2, br: 109.4, co: 59.8, sh: 2995.6 },
                                                    { path: "dataset/dendeng (2).jpg", species: "dendeng_batokok", w: 293, h: 221, ar: 1.33, size: 42.09, r: 133.5, g: 103.2, b: 88.5, br: 110.6, co: 60.0, sh: 4311.0 }
                                                ].map((row, i) => (
                                                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                                                        <td className="px-6 py-4 text-[10px] font-bold text-primary truncate max-w-[150px]">{row.path}</td>
                                                        <td className="px-6 py-4">
                                                            <span className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border bg-on-surface text-white border-on-surface">
                                                                {row.species}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-on-surface/60">{row.w}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-on-surface/60">{row.h}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-primary">{row.ar}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-on-surface/40 italic">{row.size}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-[#ef4444]">{row.r}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-[#22c55e]">{row.g}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-[#3b82f6]">{row.b}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-on-surface-variant font-serif italic">{row.br}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-on-surface-variant font-serif italic">{row.co}</td>
                                                        <td className="px-6 py-4 text-[11px] font-black text-on-surface-variant font-serif italic">{row.sh}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex flex-col gap-4 text-on-surface-variant text-[11px] font-bold px-4 pt-4 border-l-4 border-primary bg-primary/5 py-4 rounded-r-3xl">
                                        <div className="flex items-center gap-2">
                                            <Zap size={14} className="text-primary" />
                                            Computational Insight:
                                        </div>
                                        <p className="opacity-70 leading-relaxed max-w-3xl">
                                            The extraction phase reduces high-dimensional unstructured pixel data into 10 structured numeric features, enabling statistical profiling of the web-based Padang repository.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </InteractiveAnalysis>

                        <InteractiveAnalysis
                            id="distribution"
                            title="Class Distribution"
                            subtitle="Balancing analysis across the 9 culinary categories."
                            icon={BarChart3}
                            pythonCode={`import seaborn as sns
import matplotlib.pyplot as plt

plt.figure(figsize=(12, 6))
sns.countplot(data=df, y='species', order=df['species'].value_counts().index, color='dimgray')

plt.title('Distribute the number of photos each Padang dish', fontsize=16, fontweight='bold')
plt.xlabel('Numbers', fontsize=12)
plt.ylabel('Class', fontsize=12)
plt.grid(axis='x', linestyle='--', alpha=0.7)
plt.tight_layout()
plt.show()`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div className="bg-surface-container-low/30 rounded-[2.5rem] p-10 border border-outline-variant/10 shadow-sm overflow-hidden group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 bg-on-surface rounded-xl flex items-center justify-center text-white shadow-lg">
                                            <BarChart size={20} />
                                        </div>
                                        <h3 className="text-sm font-black uppercase tracking-widest text-on-surface">Distribute the number of photos each Padang dish</h3>
                                    </div>
                                    <Plot
                                        data={[
                                            {
                                                type: "bar",
                                                orientation: "h",
                                                y: ["Ayam Pop", "Dendeng Batokok", "Ayam Goreng", "Gulai Ikan", "Telur Balado", "Daging Rendang", "Telur Dadar", "Gulai Tunjang", "Gulai Tambusu"],
                                                x: [115, 114, 112, 111, 110, 110, 109, 107, 105],
                                                marker: {
                                                    color: "#334155",
                                                    line: { width: 0 }
                                                },
                                                hoverinfo: "x+y",
                                                width: 0.6
                                            }
                                        ]}
                                        layout={{
                                            autosize: true,
                                            height: 480,
                                            margin: { l: 140, r: 20, t: 30, b: 50 },
                                            font: { family: "Inter, sans-serif", size: 10, color: "#64748b" },
                                            paper_bgcolor: "rgba(0,0,0,0)",
                                            plot_bgcolor: "rgba(0,0,0,0)",
                                            xaxis: {
                                                gridcolor: "rgba(100, 116, 139, 0.1)",
                                                zeroline: false,
                                                title: { text: "Image Count", font: { size: 9, weight: 800 } }
                                            },
                                            yaxis: { 
                                                categoryorder: "total ascending",
                                                gridcolor: "transparent",
                                                tickfont: { size: 10, weight: 600, color: "#1e293b" }
                                            }
                                        }}
                                        config={{ displayModeBar: false, responsive: true }}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 bg-white/50 rounded-3xl border border-outline-variant/10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Search size={18} className="text-primary" />
                                            <h4 className="text-xs font-black uppercase tracking-widest text-on-surface">Distribution Insights</h4>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 font-black text-xs shrink-0">01</div>
                                                <p className="text-[13px] font-medium leading-relaxed opacity-70">
                                                    The dataset exhibits a remarkably high level of balance, with each category containing approximately <span className="text-on-surface font-bold">100-115 samples</span>.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 font-black text-xs shrink-0">02</div>
                                                <p className="text-[13px] font-medium leading-relaxed opacity-70">
                                                    <span className="text-on-surface font-bold text-primary italic">Ayam Pop</span> currently holds the highest representation, while <span className="text-on-surface font-bold underline decoration-primary/20 decoration-2 underline-offset-2">Gulai Tambusu</span> is slightly less sampled.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-black text-xs shrink-0">03</div>
                                                <p className="text-[13px] font-medium leading-relaxed opacity-70">
                                                    Uniform distribution across the target space ensures that CNN training will proceed with minimal <span className="text-on-surface font-bold italic">class imbalance bias</span>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-on-surface text-white rounded-3xl shadow-xl shadow-on-surface/10">
                                            <div className="text-[9px] font-bold uppercase tracking-widest opacity-50 mb-2">Dominant Class</div>
                                            <div className="text-xl font-black">Ayam Pop</div>
                                        </div>
                                        <div className="p-6 bg-white border border-outline-variant/10 rounded-3xl">
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-2">Average Frequency</div>
                                            <div className="text-xl font-black text-on-surface">110.33</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </InteractiveAnalysis>

                        <InteractiveAnalysis
                            id="sampling"
                            title="Sample Gallery"
                            subtitle="Visual inspection of representative images from the 9 classes."
                            icon={ImageIcon}
                            pythonCode={`# list class
classes = sorted(df['species'].unique().tolist())

# scrool menu
dropdown = widgets.Dropdown(
    options=classes,
    value=classes[0],
    description='choose:',
    style={'description_width': 'initial'}
)
output = widgets.Output()

# change img when choose another class
def update_gallery(change):
    with output:
        clear_output(wait=True)
        selected_class = change.new
        class_df = df[df['species'] == selected_class]
        sample_imgs = class_df.sample(min(4, len(class_df))).reset_index(drop=True)

        fig, axes = plt.subplots(1, 4, figsize=(16, 4))
        for i in range(4):
            if i < len(sample_imgs):
                img = cv2.imread(sample_imgs.loc[i, 'path'])
                img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                axes[i].imshow(img)
                axes[i].axis('off')
                axes[i].set_title(f"Size: {img.shape[1]}x{img.shape[0]}")
            else:
                axes[i].axis('off')
        plt.show()`}
                        >
                            <SampleGalleryContent />
                        </InteractiveAnalysis>

                        <InteractiveAnalysis
                            id="profiling"
                            title="Feature Profiling Dashboard"
                            subtitle="Unified 2x2 visual analysis of spatial, spectral, and quality distributions."
                            icon={Layout}
                            pythonCode={`import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# create color fo 9 classes
sns.set_style("whitegrid")
species_list = df['species'].unique()
palette = sns.color_palette("husl", len(species_list))
colors_dict = dict(zip(species_list, palette))

fig, axes = plt.subplots(2, 2, figsize=(18, 14))

# Chart 1: Size distribution (WxH)
sns.scatterplot(data=df, x='width', y='height', hue='species', palette=colors_dict,
                s=60, alpha=0.7, ax=axes[0, 0])
axes[0, 0].set_title('1. Size distribution (WxH)', fontsize=14, fontweight='bold')
axes[0, 0].set_xlabel('Width (pixels)'); axes[0, 0].set_ylabel('Height (pixels)')

# Chart 2: Aspect ratio distribution
sns.histplot(data=df, x='aspect_ratio', hue='species', palette=colors_dict,
             bins=30, alpha=0.6, ax=axes[0, 1])
axes[0, 1].axvline(x=1.0, color='red', linestyle='--', linewidth=1.5, label='1:1')
axes[0, 1].set_title('2. Aspect ratio distribution', fontsize=14, fontweight='bold')
axes[0, 1].set_xlabel('Ratio (W/H)'); axes[0, 1].legend()

# Chart 3: Color channel distribution (RGB)
rgb_data = pd.DataFrame({
    'Pixel value': pd.concat([df['mean_r'], df['mean_g'], df['mean_b']]),
    'Color channel': ['Red']*len(df) + ['Green']*len(df) + ['Blue']*len(df)
})
sns.violinplot(data=rgb_data, x='Color channel', y='Pixel value', palette=['#ef4444', '#22c55e', '#3b82f6'], ax=axes[1, 0])
axes[1, 0].set_title('3. Color channel distributio', fontsize=14, fontweight='bold')

# Chart 4: Brightness distribution
sns.histplot(data=df, x='brightness', hue='species', palette=colors_dict,
             bins=30, alpha=0.6, kde=True, ax=axes[1, 1])
axes[1, 1].set_title('4. Brightness distribution', fontsize=14, fontweight='bold')
axes[1, 1].set_xlabel('Brightness level (0 = Black, 255 = White)')

plt.tight_layout()
plt.show()

# In thống kê chung
print("STATISTICS:")
print(f"- Avg width: {df['width'].mean():.0f} px (Min: {df['width'].min()}, Max: {df['width'].max()})")
print(f"- Avg height: {df['height'].mean():.0f} px (Min: {df['height'].min()}, Max: {df['height'].max()})")
print(f"- Avg size: {df['file_size_kb'].mean():.1f} KB")`}
                            defaultOpen={true}
                        >
                            <div className="space-y-12">
                                <div className="bg-white rounded-[2.5rem] border border-outline-variant/10 shadow-2xl overflow-hidden group">
                                    <img 
                                        src={new URL('../assets/images/image/animal_eda_dashboard.png', import.meta.url).href} 
                                        alt="Multimodal Analysis Dashboard" 
                                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                    />
                                    <div className="p-8 bg-surface-container-low/50 border-t border-outline-variant/5">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Activity size={18} className="text-primary" />
                                            <h4 className="text-xs font-black uppercase tracking-widest text-on-surface">Dataset Statistics Summary</h4>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                            <div className="p-4 bg-white rounded-2xl border border-outline-variant/10">
                                                <div className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Avg Resolution</div>
                                                <div className="text-lg font-black text-on-surface">720 x 600 px</div>
                                            </div>
                                            <div className="p-4 bg-white rounded-2xl border border-outline-variant/10">
                                                <div className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Scale Metrics</div>
                                                <div className="text-lg font-black text-on-surface">Min: 293 / Max: 1500</div>
                                            </div>
                                            <div className="p-4 bg-white rounded-2xl border border-outline-variant/10">
                                                <div className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Avg Data Weight</div>
                                                <div className="text-lg font-black text-on-surface">124.5 KB</div>
                                            </div>
                                            <div className="p-4 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20">
                                                <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1">Total Capacity</div>
                                                <div className="text-lg font-black italic">993 Samples</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-3xl">
                                    <p className="text-[13px] font-medium text-on-surface-variant leading-relaxed italic opacity-80">
                                        Note: The unified dashboard provides a holistic view of the Padang image dataset, illustrating normal distributions across color channels and consistent resolution metrics suitable for deep learning pipelines.
                                    </p>
                                </div>
                            </div>
                        </InteractiveAnalysis>

                        <InteractiveAnalysis
                            id="image-quality-metrics"
                            title="Quanlity Analysis"
                            icon={Zap}
                            pythonCode={data.img_qualCode}
                            plots={[
                                { label: "Image Quality Metrics (Sharpness vs Contrast)", data: data.img_qualChart?.data, layout: data.img_qualChart?.layout },
                            ]}
                        />

                        <InteractiveAnalysis
                            id="rgb-color-distribution"
                            title="Color Space"
                            icon={Box}
                            pythonCode={data.rgb_spaceCode}
                            plots={[
                                { label: "RGB Color Space Distribution (3D Cube)", data: data.rgb_spaceChart?.data, layout: data.rgb_spaceChart?.layout },
                            ]}
                        />

                        <InteractiveAnalysis
                            id="size-marginal-distribution"
                            title="Dimesion Analysis"
                            icon={Maximize}
                            pythonCode={data.size_distCode}
                            plots={[
                                { label: "Size Marginal Distribution (Width x Height)", data: data.size_distChart?.data, layout: data.size_distChart?.layout },
                            ]}
                        />

                        <InteractiveAnalysis
                            id="file-size-distribution"
                            title="Storage Metrics"
                            icon={HardDrive}
                            pythonCode={data.file_sizeCode}
                            plots={[
                                { label: "File Size Distribution", data: data.file_sizeChart?.data, layout: data.file_sizeChart?.layout },
                            ]}
                        />

                        <InteractiveAnalysis
                            id="aspect-ratio-distribution"
                            title="Aspect Ratios"
                            icon={Focus}
                            pythonCode={data.asp_ratiolCode}
                            plots={[
                                { label: "Aspect Ratio Distribution", data: data.asp_ratioChart?.data, layout: data.asp_ratioChart?.layout },
                            ]}
                        />

                        {/* Study Summary Section */}



                        {/* Study Summary Section */}
                        <section className="py-20 scroll-mt-24" id="findings">
                            <div className="bg-on-surface rounded-[3rem] p-12 text-white relative overflow-hidden group">
                                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-700" />
                                <div className="flex flex-col md:flex-row gap-16 items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-serif italic text-2xl">Q</div>
                                            <h2 className="text-3xl font-extrabold tracking-tighter">Study Summary</h2>
                                        </div>
                                        <div className="space-y-8 text-on-surface-variant font-medium text-lg leading-relaxed text-white/70">
                                            <p>
                                                The <span className="text-white font-bold underline decoration-primary decoration-4 underline-offset-4">Masakan Padang Dataset</span> provides a robust foundation for regional food classification. Preliminary EDA suggests consistent lighting but varying resolutions typical of web-based collection.
                                            </p>
                                            <p>
                                                Class balance is approximately mirrored at ~110 images per class, reducing bias in minority classes common in organic datasets.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-[320px] bg-white/5 rounded-[2rem] p-8 border border-white/10 backdrop-blur-sm">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-8 px-2">Key Findings</h3>
                                        <div className="space-y-6">
                                            {[
                                                { label: "Data Health", val: "High Integrity" },
                                                { label: "Augmentation", val: "Recommended" },
                                                { label: "Complexity", val: "Moderate" },
                                                { label: "CV Readiness", val: "Certified" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex justify-between items-center group/item p-2 hover:bg-white/5 rounded-xl transition-colors">
                                                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                                                    <span className="text-sm font-black text-primary">{item.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer Navigation */}
            <footer className="border-t border-outline-variant/10 bg-white py-12">
                <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40">
                        group - AI / Image EDA / Masakan Padang
                    </div>
                    <div className="flex gap-8">
                        <button className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors cursor-pointer">Documentation</button>
                        <button className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors cursor-pointer">Support</button>
                        <button className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors cursor-pointer">Privacy</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
