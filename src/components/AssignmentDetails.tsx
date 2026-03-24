import { motion } from "motion/react";
import { ChevronRight, CheckCircle, Clock, Hourglass, BookOpen, Database, FileText, Code, Video, Info } from "lucide-react";

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
              Exploratory Data <br/>Analysis (EDA)
            </motion.h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Uncovering patterns, spotting anomalies, and checking assumptions through summary statistics and graphical representations of complex datasets.
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
                <span className="px-3 py-1 bg-secondary-container text-secondary text-xs font-bold rounded-full">In Progress</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Due Date</span>
                <span className="text-on-surface font-medium">Oct 24, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Weight</span>
                <span className="text-on-surface font-medium">15% of Grade</span>
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
              <div className="bg-white p-6 rounded-xl shadow-sm border border-on-surface-variant/5">
                <div className="text-primary mb-4">
                  <Database size={32} />
                </div>
                <h3 className="font-headline font-bold mb-2">Pattern Discovery</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Identify underlying structures and distributions within raw academic datasets to form viable research hypotheses.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-on-surface-variant/5">
                <div className="text-primary mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-headline font-bold mb-2">Assumption Validation</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Systematically verify that the data meets the necessary requirements for advanced statistical modeling.</p>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="bg-surface-container-low rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-[2px] bg-primary"></span>
              <h2 className="font-headline text-2xl font-bold tracking-tight">Technical Methodology</h2>
            </div>
            <div className="space-y-10">
              {[
                { step: "01", title: "Data Cleaning & Preprocessing", desc: "Handling missing values through imputation, outlier detection using Z-score analysis, and normalization of diverse feature scales." },
                { step: "02", title: "Univariate & Bivariate Analysis", desc: "Generating histograms and boxplots for individual features, followed by scatter plots and correlation matrices to understand feature interactions." },
                { step: "03", title: "Statistical Synthesis", desc: "Calculating skewness, kurtosis, and central tendency measures to characterize the dataset's global properties." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-none w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-headline font-extrabold text-primary">{item.step}</div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-12">
          {/* Deliverables */}
          <section>
            <h3 className="font-headline text-xl font-bold mb-6">Deliverables</h3>
            <div className="space-y-4">
              {[
                { title: "Final Report", icon: <FileText />, status: "COMPLETED", statusIcon: <CheckCircle size={14} />, color: "text-primary" },
                { title: "Video Presentation", icon: <Video />, status: "PENDING", statusIcon: <Clock size={14} />, color: "text-tertiary" },
                { title: "Notebook Artifacts", icon: <Code />, status: "NOT STARTED", statusIcon: <Hourglass size={14} />, color: "text-on-surface-variant/50" }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center justify-between p-4 bg-white rounded-xl border border-on-surface-variant/10 hover:bg-surface-container-low transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className={`flex items-center gap-1 text-[10px] font-bold ${item.color}`}>
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

          {/* Decorative Image */}
          <div className="rounded-2xl overflow-hidden aspect-square shadow-xl relative group cursor-pointer">
            <img 
              alt="Data visualization" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <p className="text-white font-headline font-bold text-lg">Curating Data Clarity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
