import React from 'react';
import { PastEditionsTimeline } from '../components/PastEditionsTimeline';
import { Layers } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface PastEditionsPageProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const PastEditionsPage: React.FC<PastEditionsPageProps> = ({ onOpenLightbox }) => {
  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-plum-50/40 dark:bg-plum-950 text-plum-950 dark:text-white w-full max-w-full overflow-hidden transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-plum-950 text-white py-12 sm:py-16 border-b border-plum-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="blur-up" duration={700}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/60">
              <Layers className="w-3.5 h-3.5" />
              <span>Documented Retrospective</span>
            </div>
            <h1 className="font-poppins font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Past Editions Archive (2016–2025)
            </h1>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-lilac/90 max-w-xl mx-auto leading-relaxed">
              A documented chronicle of India’s most iconic musical headliners, comedians, and national management champions who have defined Xpressions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Timeline Component */}
      <PastEditionsTimeline onOpenLightbox={onOpenLightbox} />
    </div>
  );
};
