import React from 'react';
import { Music, Sparkles, AlertCircle, ShieldCheck, Ticket, Users, ArrowRight } from 'lucide-react';
import { PAST_EDITIONS } from '../data/festivalData';

interface ProNightsSectionProps {
  onRegisterInterest: () => void;
  onExplorePastLineup: () => void;
}

export const ProNightsSection: React.FC<ProNightsSectionProps> = ({
  onRegisterInterest,
  onExplorePastLineup,
}) => {
  return (
    <section id="pro-nights" className="py-24 bg-plum-950 text-white relative overflow-hidden">
      {/* Background Concert Lighting & Atmosphere */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=80"
          alt="Concert stage crowd lights"
          className="w-full h-full object-cover opacity-20 filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-950 via-plum-950/85 to-plum-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <Music className="w-3.5 h-3.5" />
            <span>The Grand Stage</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Celebrity Pro Nights
          </h2>
          <p className="mt-4 font-inter text-base sm:text-lg text-lilac">
            When the case competitions conclude and the sun sets over Bhubaneswar, Xpressions transforms into an electrifying stadium amphitheatre.
          </p>
        </div>

        {/* Feature Teaser Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-plum-900/90 via-plum-850/90 to-plum-900/90 border border-plum-700/80 p-8 sm:p-12 mb-16 shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Subtle Glow Circle */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-orange-accent/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/20 text-orange-accent border border-orange-accent/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Upcoming 2026 Edition Lineup</span>
              </div>
              <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                The Stage Awaits: Artist Reveal Dropping Soon
              </h3>
              <p className="mt-4 text-sm sm:text-base text-lilac leading-relaxed max-w-2xl">
                The Student Executive Council and Cultural Committee are in final negotiations with premier musical performers and stand-up comics for Xpressions 2026. Official reveals will be broadcasted across our social media platforms.
              </p>

              {/* Status Note */}
              <div className="mt-6 flex items-center gap-2 text-xs text-lilac/80 bg-plum-950/60 p-3 rounded-xl border border-plum-800 w-fit">
                <AlertCircle className="w-4 h-4 text-orange-accent shrink-0" />
                <span>Lineup details remain strictly tentative until signed contract confirmation.</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onRegisterInterest}
                className="w-full py-4 px-6 rounded-2xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-sm shadow-glow-orange hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Ticket className="w-4 h-4" />
                <span>Register for Lineup Alerts</span>
              </button>

              <button
                onClick={onExplorePastLineup}
                className="w-full py-3.5 px-6 rounded-2xl bg-plum-800 hover:bg-plum-750 text-white font-poppins font-semibold text-xs sm:text-sm border border-plum-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>View Historical Artists (2016–2025)</span>
                <ArrowRight className="w-4 h-4 text-orange-accent" />
              </button>
            </div>
          </div>
        </div>

        {/* Pro Night Protocol & Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-plum-900/60 border border-plum-800 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-plum-800 text-orange-accent w-fit mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-poppins font-bold text-lg text-white">Entry & Security</h4>
            <p className="mt-2 text-xs sm:text-sm text-lilac/80 leading-relaxed">
              Valid Government Photo ID and College ID are strictly mandatory for all external attendees and registered competitors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-plum-900/60 border border-plum-800 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-plum-800 text-orange-accent w-fit mb-4">
              <Ticket className="w-5 h-5" />
            </div>
            <h4 className="font-poppins font-bold text-lg text-white">Passes & Access</h4>
            <p className="mt-2 text-xs sm:text-sm text-lilac/80 leading-relaxed">
              Pass categories, non-transferable wristbands, and faculty/student access gates will be announced prior to opening nights.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-plum-900/60 border border-plum-800 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-plum-800 text-orange-accent w-fit mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-poppins font-bold text-lg text-white">Campus Discipline</h4>
            <p className="mt-2 text-xs sm:text-sm text-lilac/80 leading-relaxed">
              XIM University maintains a strict zero-tolerance code of conduct. Professional security and medical response teams are stationed 24/7.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
