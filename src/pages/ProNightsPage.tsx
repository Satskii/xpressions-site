import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProNightsSection } from '../components/ProNightsSection';
import { Music, Sparkles, Shield, Ticket, ArrowRight, Eye } from 'lucide-react';
import { PAST_EDITIONS } from '../data/festivalData';

interface ProNightsPageProps {
  onRegisterInterest: () => void;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const ProNightsPage: React.FC<ProNightsPageProps> = ({
  onRegisterInterest,
  onOpenLightbox,
}) => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-plum-950 text-white">
      {/* Page Header */}
      <div className="py-14 border-b border-plum-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <Music className="w-3.5 h-3.5" />
            <span>The Grand Concert Stage</span>
          </div>
          <h1 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Celebrity Pro Nights
          </h1>
          <p className="mt-3 font-inter text-base sm:text-lg text-lilac max-w-2xl mx-auto leading-relaxed">
            When business challenges conclude, XIM University transforms into Eastern India's most electrifying musical amphitheatre.
          </p>
        </div>
      </div>

      {/* Main Pro Nights Showcase */}
      <ProNightsSection
        onRegisterInterest={onRegisterInterest}
        onExplorePastLineup={() => navigate('/past-editions')}
      />

      {/* Hall of Fame Teaser */}
      <section className="py-16 bg-plum-900/60 border-t border-plum-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-poppins font-bold text-2xl text-white mb-3">
            Want to see who took the stage before?
          </h3>
          <p className="text-sm text-lilac max-w-xl mx-auto mb-6">
            Explore our documented archive of 2016–2025 past editions featuring Shankar-Ehsaan-Loy, Farhan Akhtar, Sunidhi Chauhan, Mika Singh, Vishal-Shekhar, Darshan Raval & Sachin-Jigar, and Amaal Mallik.
          </p>
          <button
            onClick={() => navigate('/past-editions')}
            className="px-6 py-3 rounded-full bg-plum-800 hover:bg-plum-700 text-white font-poppins font-semibold text-xs sm:text-sm border border-plum-600 transition-all inline-flex items-center gap-2"
          >
            <span>Explore Full Past Editions Archive</span>
            <ArrowRight className="w-4 h-4 text-orange-accent" />
          </button>
        </div>
      </section>
    </div>
  );
};
