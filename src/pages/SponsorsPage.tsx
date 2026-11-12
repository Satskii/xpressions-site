import React from 'react';
import { SponsorsSection } from '../components/SponsorsSection';
import { Award, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface SponsorsPageProps {
  onOpenInterestModal: (category?: string, role?: string) => void;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const SponsorsPage: React.FC<SponsorsPageProps> = ({
  onOpenInterestModal,
  onOpenLightbox,
}) => {
  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-plum-950 text-white w-full max-w-full overflow-hidden">
      {/* Header Banner */}
      <div className="py-12 sm:py-16 border-b border-plum-800/80 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="blur-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/60">
              <Award className="w-3.5 h-3.5" />
              <span>Corporate &amp; Media Ecosystem</span>
            </div>
            <h1 className="font-poppins font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Sponsors &amp; Partners
            </h1>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-lilac/90 max-w-xl mx-auto leading-relaxed">
              Empowering Eastern India&apos;s most influential student minds and stage performers at XIMB.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Sponsors Component */}
      <SponsorsSection
        onOpenInterestModal={onOpenInterestModal}
        onOpenLightbox={onOpenLightbox}
      />
    </div>
  );
};
