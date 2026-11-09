import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FinalCtaProps {
  onRegisterInterest: () => void;
  onExploreFestival: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onRegisterInterest,
  onExploreFestival,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-plum-950 text-white relative overflow-hidden w-full max-w-full">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-plum-700/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal direction="up" duration={650}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-5 sm:mb-6 border border-plum-700/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Confluence Awaits</span>
          </div>

          <h2 className="font-poppins font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Your stage. Your challenge.{' '}
            <span className="bg-gradient-to-r from-orange-accent via-lilac to-white bg-clip-text text-transparent block sm:inline">
              Your Xpressions.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 font-inter text-sm sm:text-lg text-lilac/90 max-w-2xl mx-auto leading-relaxed px-2">
            From the intense strategy boardroom to the thunderous concert arena, define your legacy at XIM University's flagship festival.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button
              onClick={onRegisterInterest}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-sm sm:text-base shadow-glow-orange hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Register Interest</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreFestival}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-plum-850/80 hover:bg-plum-800 text-white font-poppins font-semibold text-sm sm:text-base border border-plum-700/60 transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-orange-accent" />
              <span>Explore the Festival</span>
            </button>
          </div>

          <p className="mt-6 text-[11px] sm:text-xs text-lilac/60">
            Official registration and schedule release notices will be emailed to all interest registrations.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
