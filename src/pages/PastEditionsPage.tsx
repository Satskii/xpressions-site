import React from 'react';
import { PastEditionsTimeline } from '../components/PastEditionsTimeline';
import { Layers, ShieldAlert, Sparkles } from 'lucide-react';

interface PastEditionsPageProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const PastEditionsPage: React.FC<PastEditionsPageProps> = ({ onOpenLightbox }) => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-plum-50/50">
      {/* Page Header */}
      <div className="bg-plum-950 text-white py-14 border-b border-plum-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <Layers className="w-3.5 h-3.5" />
            <span>Documented Retrospective</span>
          </div>
          <h1 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Past Editions Archive (2016–2025)
          </h1>
          <p className="mt-3 font-inter text-base sm:text-lg text-lilac max-w-2xl mx-auto leading-relaxed">
            A documented chronicle of India’s most iconic musical headliners, comedians, and national management champions who have defined Xpressions.
          </p>
        </div>
      </div>

      {/* Main Timeline Component */}
      <PastEditionsTimeline onOpenLightbox={onOpenLightbox} />
    </div>
  );
};
