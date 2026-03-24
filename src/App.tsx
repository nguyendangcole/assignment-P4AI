import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Menu } from 'lucide-react';
import LandingPage from './components/LandingPage';
import DatasetsPage from './components/DatasetsPage';
import AssignmentDetails from './components/AssignmentDetails';

type Page = 'overview' | 'assignments' | 'datasets';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('overview');

  const renderPage = () => {
    switch (currentPage) {
      case 'overview': return <LandingPage />;
      case 'datasets': return <DatasetsPage />;
      case 'assignments': return <AssignmentDetails />;
      default: return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-surface sticky top-0 z-50 border-b border-on-surface-variant/5">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-[1200px] mx-auto">
          <div 
            className="text-2xl font-bold tracking-tighter text-primary font-headline cursor-pointer"
            onClick={() => setCurrentPage('overview')}
          >
            Academic Curator
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
            <button 
              onClick={() => setCurrentPage('overview')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'overview' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setCurrentPage('assignments')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'assignments' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Assignments
            </button>
            <button 
              onClick={() => setCurrentPage('datasets')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${currentPage === 'datasets' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Datasets
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-primary/5 transition-all duration-200 cursor-pointer">
              <BookOpen className="text-primary w-6 h-6" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-primary/5 transition-all duration-200 cursor-pointer">
              <Menu className="text-primary w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-on-surface-variant/10 py-12 mt-20">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-primary font-headline mb-2">Programming for AI & Data Science (CO3135)</div>
            <div className="text-sm text-on-surface-variant">HCMUT – VNU-HCM | 2026</div>
            <div className="text-xs text-on-surface-variant/60 mt-4">© 2026 The Academic Curator. All rights reserved.</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Ethics Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Data Privacy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Faculty</a>
          </div>
          
          <div className="text-sm text-on-surface-variant/60">
            © 2026 HCMUT - VNU-HCM.
          </div>
        </div>
      </footer>
    </div>
  );
}
