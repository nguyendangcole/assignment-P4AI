import React from "react";
import { motion } from "motion/react";
import {
    ArrowRight,
    MenuBook,
    HelpOutline,
    Analytics,
    Search,
    Psychology,
    RocketLaunch,
    Terminal,
    Code,
    CheckCircle,
    Splitscreen,
    ArrowLeft
} from "./Icons";

const NavItem = ({ href, children, active = false }: { href: string, children: React.ReactNode, active?: boolean }) => (
    <a
        href={href}
        onClick={(e) => {
            e.preventDefault();
            const targetId = href.startsWith('#') ? href.substring(1) : '';
            if (targetId) {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        }}
        className={`text-sm font-medium uppercase tracking-widest transition-colors flex items-center h-full ${active
            ? "text-primary border-b-2 border-primary font-bold"
            : "text-on-surface-variant hover:text-primary"
            }`}
    >
        {children}
    </a>
);

const StatCard = ({ label, value }: { label: string, value: string }) => (
    <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border">
        <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">{label}</div>
        <div className="text-3xl font-headline font-extrabold text-primary">{value}</div>
    </div>
);

export default function ArtAnalysis({ onBack, title }: { onBack: () => void, title?: string }) {
    const displayTitle = title || "Analyzing Human Emotions through Abstract Art";
    return (
        <div className="min-h-screen relative">
            {/* Back Button */}
            <div className="fixed top-24 left-8 z-50">
                <button
                    onClick={onBack}
                    className="bg-white/80 backdrop-blur-md p-3 rounded-full border border-outline-variant/20 shadow-lg hover:bg-primary hover:text-white transition-all group cursor-pointer"
                    title="Go back to Home"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>

            <main>
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                    <div className="max-w-[1200px] mx-auto flex flex-col items-start gap-8 z-10 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] uppercase tracking-widest font-bold"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Research Project 2024
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface max-w-4xl"
                        >
                            {displayTitle}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed"
                        >
                            Uncovering the patterns of emotional perception in 5,000+ abstract artworks using statistical analysis and computer vision. A deep dive into how form and color evoke sentiment.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                                View Insights
                                <ArrowRight size={18} />
                            </button>
                            <button className="border border-outline-variant text-primary px-8 py-4 rounded-lg font-semibold hover:bg-surface-container-low transition-colors cursor-pointer">
                                Explore Code
                            </button>
                        </motion.div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-br from-primary to-tertiary-container blur-3xl rounded-full translate-x-1/2 -translate-y-1/4"></div>
                    </div>
                </section>

                {/* KPI Section */}
                <section className="bg-surface-container-low py-20 px-6">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                            <StatCard label="Artworks" value="5,432" />
                            <StatCard label="Unique Tags" value="42" />
                            <StatCard label="Annotations" value="24.8k" />
                            <StatCard label="Agreement" value="85%" />
                            <StatCard label="Dataset Size" value="2.1GB" />
                            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border flex items-center justify-center">
                                <Analytics className="text-4xl text-outline-variant" />
                            </div>
                        </div>
                        <div className="lg:col-span-4 bg-white p-10 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-headline text-2xl font-bold mb-6">WikiArt Emotions</h3>
                            <p className="text-on-surface-variant mb-6 leading-relaxed">
                                This project utilizes the WikiArt Emotions dataset, a large-scale collection of artworks annotated for emotional response by over 6,000 human participants.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "How do color palettes influence specific emotion triggers?",
                                    "Can machine learning predict human sentiment from pixels?",
                                    "What defines \"polarized\" art vs \"unanimous\" perception?"
                                ].map((q, i) => (
                                    <div key={i} className="flex gap-3">
                                        <HelpOutline className="text-primary shrink-0" />
                                        <span className="text-sm font-medium">{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sub Nav */}
                <div className="sticky top-16 z-40 glass-nav border-b border-outline-variant/10">
                    <div className="max-w-[1200px] mx-auto px-6 overflow-x-auto">
                        <div className="flex gap-10 h-14 items-center whitespace-nowrap">
                            <NavItem href="#overview" active>Overview</NavItem>
                            <NavItem href="#quality">Data Quality</NavItem>
                            <NavItem href="#distribution">Distribution</NavItem>
                            <NavItem href="#analysis">Image Analysis</NavItem>
                            <NavItem href="#findings">Key Findings</NavItem>
                            <NavItem href="#code">Code</NavItem>
                        </div>
                    </div>
                </div>

                {/* Emotional Landscapes */}
                <section className="py-24 px-6 max-w-[1200px] mx-auto" id="overview">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-5/12">
                            <h2 className="font-headline text-4xl font-extrabold mb-8 tracking-tight">Emotional Landscapes</h2>
                            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                                Our analysis begins by mapping the chromatic DNA of sentiment. By cross-referencing pixel density with human annotations, we can see how specific hues anchor our emotional reality.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-red-500 shrink-0 mt-1"></span>
                                    <span className="text-on-surface font-medium">Anger correlates strongly with red hues and aggressive brush strokes.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-teal-500 shrink-0 mt-1"></span>
                                    <span className="text-on-surface font-medium">Blue and green shades evoke consistent tranquility across annotators.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-orange-400 shrink-0 mt-1"></span>
                                    <span className="text-on-surface font-medium">Mixed emotions are common in complex brushwork and high saturation.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-7/12 bg-surface-container-low p-2 rounded-xl">
                            <div className="bg-white rounded-lg p-8 shadow-inner aspect-[4/3] flex flex-col justify-center items-center">
                                <div className="w-full h-full relative grid grid-cols-6 grid-rows-6 gap-2">
                                    {/* Simulated Heatmap Grid */}
                                    {Array.from({ length: 36 }).map((_, i) => {
                                        const isTeal = Math.random() > 0.3;
                                        const opacity = Math.floor(Math.random() * 9) + 1;
                                        return (
                                            <div
                                                key={i}
                                                className={`rounded-sm ${isTeal ? 'bg-primary' : 'bg-tertiary-container'}`}
                                                style={{ opacity: opacity / 10 }}
                                            ></div>
                                        );
                                    })}
                                </div>
                                <div className="mt-4 flex justify-between w-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                                    <span>Negative Correlation</span>
                                    <span>Neutral</span>
                                    <span>Positive Correlation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual Narrative */}
                <section className="py-24 bg-surface-container-low px-6" id="analysis">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="mb-16">
                            <h2 className="font-headline text-4xl font-extrabold mb-4 tracking-tight">The Visual Narrative</h2>
                            <p className="text-on-surface-variant max-w-2xl">A qualitative exploration of individual masterpieces and the consensus models behind them.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            <div className="rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://picsum.photos/seed/abstract-1/800/800"
                                    alt="Outlier #7"
                                    className="w-full aspect-square object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">Case Study: Outlier #7</div>
                                <h3 className="font-headline text-3xl font-bold mb-6">Unanimous Ambiguity</h3>
                                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                                    This piece presents a fascinating statistical paradox. While 94% of annotators agreed it evoked "Strong Emotion", the specific tags were perfectly split between "Fear" and "Excitement." This high-intensity ambiguity suggests that visual energy transcends positive/negative valance.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white rounded-lg">
                                        <div className="text-xs font-bold text-on-surface-variant uppercase mb-1">Entropy Score</div>
                                        <div className="text-2xl font-headline font-bold">0.892</div>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg">
                                        <div className="text-xs font-bold text-on-surface-variant uppercase mb-1">Saturation</div>
                                        <div className="text-2xl font-headline font-bold">92%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h4 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
                                    <CheckCircle className="text-green-600" />
                                    Most Agreed
                                </h4>
                                <div className="flex gap-6 items-center">
                                    <img
                                        src="https://picsum.photos/seed/serene/200/200"
                                        className="w-24 h-24 rounded-lg object-cover shrink-0"
                                        alt="Serene Horizon"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div>
                                        <div className="font-bold text-on-surface mb-1">Serene Horizon</div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-[10px] font-bold">CALM (98%)</span>
                                            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-[10px] font-bold">PEACE (95%)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h4 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
                                    <Splitscreen className="text-orange-600" />
                                    Most Polarized
                                </h4>
                                <div className="flex gap-6 items-center">
                                    <img
                                        src="https://picsum.photos/seed/discord/200/200"
                                        className="w-24 h-24 rounded-lg object-cover shrink-0"
                                        alt="The Discord"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div>
                                        <div className="font-bold text-on-surface mb-1">The Discord</div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-[10px] font-bold">FEAR (42%)</span>
                                            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-[10px] font-bold">JOY (38%)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                                    <img
                                        src={`https://picsum.photos/seed/art-${i}/400/400`}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        alt={`Art ${i}`}
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                                        <div className="text-[10px] font-bold uppercase tracking-widest">Tag: {["Tranquility", "Awe", "Energy", "Focus"][i - 1]}</div>
                                        <div className="text-sm font-medium">Agreement: {95 - i * 3}%</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Executive Summary */}
                <section className="py-24 px-6 max-w-[1200px] mx-auto" id="findings">
                    <h2 className="font-headline text-4xl font-extrabold mb-16 tracking-tight text-center">Executive Summary</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Search size={24} />
                            </div>
                            <h3 className="font-headline text-xl font-bold">What we found</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Color temperature is the primary predictor of emotional valence, accounting for 64% of the variance in human tagging consistency.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                                <Psychology size={24} />
                            </div>
                            <h3 className="font-headline text-xl font-bold">Why it matters</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                This validates that even in "abstract" forms, human biological responses to color frequencies remain hard-wired and predictable.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                                <RocketLaunch size={24} />
                            </div>
                            <h3 className="font-headline text-xl font-bold">Next steps</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Developing a CNN model that can automatically generate emotional metadata for uncatalogued museum digital archives.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Implementation */}
                <section className="py-24 bg-on-background text-white px-6" id="code">
                    <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
                        <Terminal className="text-5xl mb-6 text-primary" />
                        <h2 className="font-headline text-4xl font-extrabold mb-6 tracking-tight">Technical Implementation</h2>
                        <p className="text-slate-400 max-w-2xl mb-12 text-lg">
                            The entire pipeline was built using Python, leveraging OpenCV for feature extraction and Scikit-Learn for the statistical modeling. Explore the Jupyter notebooks and processing scripts.
                        </p>
                        <div className="relative w-full max-w-3xl group cursor-pointer">
                            <div className="bg-slate-900 rounded-xl p-6 text-left border border-slate-800 font-mono text-sm overflow-hidden shadow-2xl transition-all group-hover:border-primary/50">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <code className="block text-slate-300">
                                    <span className="text-primary">import</span> pandas <span className="text-primary">as</span> pd<br />
                                    <span className="text-primary">from</span> art_analysis <span className="text-primary">import</span> ColorExtractor<br /><br />
                                    # Initialize extractor with WikiArt manifest<br />
                                    extractor = ColorExtractor(dataset=<span className="text-orange-300">'wikiart_emotions'</span>)<br />
                                    results = extractor.compute_sentiment_correlations()<br /><br />
                                    <span className="text-slate-500"># Output: Heatmap visualization of R/G/B vs Human Sentiment</span>
                                </code>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-center justify-center pt-24">
                                    <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                                        <Code size={20} />
                                        View Implementation Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
