import React from 'react';
import { Music, Sparkles, AlertCircle, ShieldCheck, Ticket, ArrowRight, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CELEBLITZ_HALL_OF_FAME } from '../data/festivalData';

interface ProNightsSectionProps {
  onRegisterInterest: () => void;
  onExplorePastLineup: () => void;
}

export const ProNightsSection: React.FC<ProNightsSectionProps> = ({
  onRegisterInterest,
  onExplorePastLineup,
}) => {
  return (
    <section id="pro-nights" className="py-16 sm:py-24 bg-plum-950 text-white relative overflow-hidden w-full max-w-full">
      {/* Background Concert Lighting & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/real_fest/amaal_mallik_pyro.jpg"
          alt="Xpressions Celebrity Pro Night concert stage and laser lighting"
          className="w-full h-full object-cover opacity-20 filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-950 via-plum-950/90 to-plum-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/70">
              <Music className="w-3.5 h-3.5" />
              <span>The Grand Stage</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Celebrity Pro Nights
            </h2>
            <p className="mt-3 font-inter text-xs sm:text-base text-lilac/90 max-w-xl mx-auto leading-relaxed">
              When the case competitions conclude and the sun sets over Bhubaneswar, Xpressions transforms into an electrifying stadium amphitheatre.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Teaser Card */}
        <ScrollReveal direction="zoom" delay={100} duration={650}>
          <div className="relative rounded-3xl bg-gradient-to-r from-plum-900/90 via-plum-850/90 to-plum-900/90 border border-plum-750/70 p-6 sm:p-10 lg:p-12 mb-12 sm:mb-16 shadow-2xl backdrop-blur-md overflow-hidden">
            {/* Subtle Glow Circle */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange-accent/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Upcoming 2027 Edition Lineup</span>
                </div>
                <h3 className="font-poppins font-black text-xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  The Stage Awaits: Artist Reveal Dropping Soon
                </h3>
                <p className="mt-3 text-xs sm:text-base text-lilac/90 leading-relaxed max-w-2xl">
                  The Student Executive Council and Cultural Committee are in final negotiations with premier musical performers and stand-up comics for Xpressions 2027. Official reveals will be broadcasted across our social media platforms.
                </p>

                {/* Status Note */}
                <div className="mt-5 flex items-center gap-2 text-[11px] sm:text-xs text-lilac/80 bg-plum-950/60 p-3 rounded-xl border border-plum-800/80 w-fit">
                  <AlertCircle className="w-4 h-4 text-orange-accent shrink-0" />
                  <span>Lineup details remain strictly tentative until signed contract confirmation.</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={onRegisterInterest}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-glow-orange hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Register for Lineup Alerts</span>
                </button>

                <button
                  onClick={onExplorePastLineup}
                  className="w-full py-3 px-6 rounded-2xl bg-plum-800/80 hover:bg-plum-750 text-white font-poppins font-semibold text-xs sm:text-sm border border-plum-700/60 transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Past Artists (2016–2025)</span>
                  <ArrowRight className="w-4 h-4 text-orange-accent" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Celeblitz Headliners Hall of Fame */}
        <ScrollReveal direction="blur-up" delay={120} duration={700}>
          <div className="mb-14 sm:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-accent mb-1.5">
                  <Award className="w-4 h-4" />
                  <span>The Celeblitz Legacy · Two Decades of Superstars</span>
                </div>
                <h3 className="font-poppins font-black text-xl sm:text-3xl text-white tracking-tight">
                  Star Headliners Hall of Fame
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-lilac/80 max-w-md">
                Eastern India&apos;s grandest collegiate stage has hosted the nation&apos;s foremost vocalists and composers.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {CELEBLITZ_HALL_OF_FAME.slice(0, 6).map((star, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-plum-900/70 border border-plum-800/80 hover:border-orange-accent/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/30">
                      {star.year}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-orange-accent/80 group-hover:scale-125 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm sm:text-base text-white group-hover:text-orange-accent transition-colors leading-tight mb-1">
                      {star.name}
                    </h4>
                    <p className="text-[11px] text-lilac/70 line-clamp-2 leading-relaxed">
                      {star.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hall of Fame Honorary Row */}
            <div className="mt-4 p-4 rounded-2xl bg-plum-950/80 border border-plum-850 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-lilac/70 font-medium">
                Honorary Headline Legends:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {CELEBLITZ_HALL_OF_FAME.slice(6).map((legend, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-plum-900 border border-plum-800 text-white font-semibold text-[11px] hover:border-orange-accent/50 transition-colors"
                  >
                    {legend.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Pro Night Protocol & Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <ScrollReveal direction="up" delay={150} duration={600}>
            <div className="p-5 sm:p-6 rounded-2xl bg-plum-900/50 border border-plum-800/70 backdrop-blur-sm h-full">
              <div className="p-2.5 rounded-xl bg-plum-800 text-orange-accent w-fit mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-bold text-base sm:text-lg text-white">Entry & Security</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-lilac/80 leading-relaxed">
                Valid Government Photo ID and College ID are strictly mandatory for all external attendees and registered competitors.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250} duration={600}>
            <div className="p-5 sm:p-6 rounded-2xl bg-plum-900/50 border border-plum-800/70 backdrop-blur-sm h-full">
              <div className="p-2.5 rounded-xl bg-plum-800 text-orange-accent w-fit mb-3">
                <Ticket className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-bold text-base sm:text-lg text-white">Passes & QR Access</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-lilac/80 leading-relaxed">
                Digital entry passes with unique encrypted QR codes will be issued to registered delegates prior to festival gates opening.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350} duration={600}>
            <div className="p-5 sm:p-6 rounded-2xl bg-plum-900/50 border border-plum-800/70 backdrop-blur-sm h-full">
              <div className="p-2.5 rounded-xl bg-plum-800 text-orange-accent w-fit mb-3">
                <Music className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-bold text-base sm:text-lg text-white">Stage Sound & Acoustics</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-lilac/80 leading-relaxed">
                Concerts are hosted in the open-air university grounds equipped with line-array concert rigs and moving beam lighting.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
