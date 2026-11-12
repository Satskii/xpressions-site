import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProNightsSection } from '../components/ProNightsSection';
import { Music, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface ProNightsPageProps {
  onRegisterInterest: () => void;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const ProNightsPage: React.FC<ProNightsPageProps> = ({
  onRegisterInterest,
}) => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-plum-950 text-white w-full max-w-full overflow-hidden">
      {/* Page Header */}
      <div className="py-12 sm:py-16 border-b border-plum-800/80 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/60">
              <Music className="w-3.5 h-3.5" />
              <span>The Grand Concert Stage</span>
            </div>
            <h1 className="font-poppins font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Celebrity Pro Nights
            </h1>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-lilac/90 max-w-xl mx-auto leading-relaxed">
              When business challenges conclude, XIMB transforms into Eastern India&apos;s most electrifying musical amphitheatre.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Pro Nights Showcase */}
      <ProNightsSection
        onRegisterInterest={onRegisterInterest}
        onExplorePastLineup={() => navigate('/past-editions')}
      />

      {/* Hall of Fame Teaser */}
      <section className="py-14 sm:py-16 bg-plum-900/40 border-t border-plum-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" duration={600}>
            <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-3">
              Want to see who took the stage before?
            </h3>
            <p className="text-xs sm:text-sm text-lilac/80 max-w-xl mx-auto mb-6 leading-relaxed">
              Explore our documented archive of 2016–2025 past editions featuring Shankar-Ehsaan-Loy, Farhan Akhtar, Sunidhi Chauhan, Mika Singh, Vishal-Shekhar, Darshan Raval & Sachin-Jigar, and Amaal Mallik.
            </p>
            <button
              onClick={() => navigate('/past-editions')}
              className="px-6 py-3 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-glow-orange inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              <span>Explore Historical Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
