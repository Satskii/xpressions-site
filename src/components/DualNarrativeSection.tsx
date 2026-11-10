import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trophy, Music, Eye, ChevronRight, Activity, Sparkles, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ScrollReveal } from './ScrollReveal';
import { EventItem } from '../types/festival';
import { FESTIVAL_EVENTS } from '../data/festivalData';

interface DualNarrativeSectionProps {
  onOpenEventModal: (event: EventItem) => void;
  onOpenInterestModal: (eventTitle?: string) => void;
}

export const DualNarrativeSection: React.FC<DualNarrativeSectionProps> = ({
  onOpenEventModal,
  onOpenInterestModal,
}) => {
  const navigate = useNavigate();
  const [activeTrack, setActiveTrack] = useState<'arena' | 'stage'>('arena');

  // Business Arena Curated Flagships
  const arenaEvents = FESTIVAL_EVENTS.filter((e) =>
    ['maven', 'trade-wars', 'gladiator', 'mpower'].includes(e.id)
  );

  // Cultural Stage Curated Flagships
  const stageEvents = FESTIVAL_EVENTS.filter((e) =>
    ['decibelz', 'thirkan', 'carnival-de-vogue', 'aaghaz'].includes(e.id)
  );

  const isArena = activeTrack === 'arena';
  const displayedEvents = isArena ? arenaEvents : stageEvents;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-plum-950 text-plum-950 dark:text-white relative w-full overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Lando Norris Inspired Track Selector (ON TRACK vs OFF TRACK -> THE ARENA vs THE STAGE) */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100/80 dark:bg-plum-900 border border-plum-200 dark:border-plum-800 text-plum-900 dark:text-lilac text-xs font-semibold mb-4">
              <Activity className="w-3.5 h-3.5 text-orange-accent animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px] sm:text-xs">
                Dual-Narrative Engine // Select Dimension
              </span>
            </div>

            <h2 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-plum-950 dark:text-white tracking-tight leading-tight">
              Where Business Meets the Beat.
            </h2>
            <p className="mt-3 text-xs sm:text-base text-plum-800/80 dark:text-lilac/80 max-w-xl leading-relaxed">
              Two distinct universes. One synchronized festival. Toggle between the high-stakes boardroom simulations and the stadium-scale cultural amphitheatre.
            </p>

            {/* High-Octane Switcher Controls */}
            <div className="mt-8 p-1.5 rounded-full bg-plum-100 dark:bg-plum-900/90 border border-plum-200 dark:border-plum-800 flex items-center gap-1.5 shadow-lg w-full max-w-md sm:w-auto">
              <button
                onClick={() => setActiveTrack('arena')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-poppins font-black tracking-wide transition-all duration-300 ${
                  isArena
                    ? 'bg-plum-900 text-white dark:bg-orange-accent dark:text-plum-950 shadow-md scale-102'
                    : 'text-plum-700 dark:text-lilac hover:text-plum-950 dark:hover:text-white'
                }`}
              >
                <Trophy className="w-4 h-4 text-orange-accent dark:text-plum-950" />
                <span>[ 01 // THE ARENA ]</span>
              </button>

              <button
                onClick={() => setActiveTrack('stage')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-poppins font-black tracking-wide transition-all duration-300 ${
                  !isArena
                    ? 'bg-plum-900 text-white dark:bg-orange-accent dark:text-plum-950 shadow-md scale-102'
                    : 'text-plum-700 dark:text-lilac hover:text-plum-950 dark:hover:text-white'
                }`}
              >
                <Music className="w-4 h-4 text-orange-accent dark:text-plum-950" />
                <span>[ 02 // THE STAGE ]</span>
              </button>
            </div>

          </div>
        </ScrollReveal>

        {/* Telemetry Header Banner */}
        <ScrollReveal direction="blur-up" delay={100} duration={700}>
          <div className="p-6 sm:p-8 rounded-3xl bg-plum-50 dark:bg-plum-900/40 border border-plum-200/80 dark:border-plum-800/80 mb-10 sm:mb-12 transition-all duration-500">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-orange-accent">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-accent/15 border border-orange-accent/30 font-bold">
                    {isArena ? 'SECTOR // 01 · CASE ARENAS' : 'SECTOR // 02 · CONCERT AMPHITHEATRE'}
                  </span>
                  <span>//</span>
                  <span className="text-plum-600 dark:text-lilac/70">
                    {isArena ? 'CHAUDHURY AUDITORIUM & LABS' : 'MAIN CONCERT ARENA & OPEN GROUNDS'}
                  </span>
                </div>

                <h3 className="font-poppins font-black text-xl sm:text-3xl text-plum-950 dark:text-white tracking-tight">
                  {isArena
                    ? 'B-School Acumen & High-Stakes Strategy'
                    : 'Rock Band Championships & Star Pro Nights'}
                </h3>

                <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                  {isArena
                    ? 'Go head-to-head against delegations from IIMs, XLRI, IITs, and top national institutes across algorithmic trading, turnaround strategies, and unscripted management simulations.'
                    : 'Command Eastern India’s premier collegiate audio rigs, witness the fiercest rock band battles, and experience legendary celebrity pro night spectacles under stadium lights.'}
                </p>
              </div>

              {/* F1 Telemetry Inspired Stats Pill Box */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-plum-200 dark:border-plum-800 pt-4 lg:pt-0 lg:pl-8">
                <div>
                  <div className="text-[10px] font-mono text-plum-500 dark:text-lilac/60 uppercase">
                    {isArena ? 'PRIZE PURSE' : 'CROWD'}
                  </div>
                  <div className="font-poppins font-black text-lg sm:text-2xl text-plum-950 dark:text-white">
                    {isArena ? '₹15L+' : '30,000+'}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-plum-500 dark:text-lilac/60 uppercase">
                    {isArena ? 'DELEGATIONS' : 'STAGE RIG'}
                  </div>
                  <div className="font-poppins font-black text-lg sm:text-2xl text-plum-950 dark:text-white">
                    {isArena ? '150+' : '100KW'}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-plum-500 dark:text-lilac/60 uppercase">
                    {isArena ? 'MARATHON' : 'NIGHTS'}
                  </div>
                  <div className="font-poppins font-black text-lg sm:text-2xl text-orange-accent">
                    {isArena ? '72 HRS' : '3 NIGHTS'}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 4 Editorial Flagship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedEvents.map((event, idx) => (
            <ScrollReveal key={`${activeTrack}-${event.id}`} direction="blur-up" delay={idx * 80} duration={650}>
              <SpotlightCard className="group rounded-3xl bg-white dark:bg-plum-900/70 border border-plum-200/80 dark:border-plum-800/80 shadow-sm hover:shadow-2xl hover:border-orange-accent/50 dark:hover:border-orange-accent/50 transition-all duration-400 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 h-full">
                
                {/* Media & Overlay Header */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-plum-950">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-spring"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent" />
                  
                  {/* Technical Index Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-plum-950/85 text-orange-accent font-mono font-bold text-[10px] border border-plum-800 shadow-sm backdrop-blur-md">
                    SPEC // 0{idx + 1}
                  </span>

                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-orange-accent text-plum-950 font-poppins font-bold text-[9px] sm:text-[10px] uppercase shadow-sm">
                    {event.registrationStatus}
                  </span>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-lilac font-medium">
                    <span>{event.teamSize}</span>
                    <span className="text-orange-accent">{event.category}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-poppins font-black text-lg sm:text-xl text-plum-950 dark:text-white group-hover:text-orange-accent transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs font-semibold text-orange-accent mt-0.5 line-clamp-1">
                      {event.subtitle}
                    </p>
                    <p className="mt-2 text-xs text-plum-800/75 dark:text-lilac/75 line-clamp-2 leading-relaxed">
                      {event.shortDescription}
                    </p>
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-5 pt-3 border-t border-plum-100 dark:border-plum-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenEventModal(event)}
                      className="text-xs font-bold text-plum-800 dark:text-lilac hover:text-orange-accent dark:hover:text-orange-accent transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-orange-accent" />
                      <span>Rulebook</span>
                    </button>

                    <button
                      onClick={() => onOpenInterestModal(event.title)}
                      className="px-3 py-1.5 rounded-xl bg-plum-100 dark:bg-plum-800 hover:bg-orange-accent hover:text-plum-950 dark:hover:bg-orange-accent dark:hover:text-plum-950 text-plum-900 dark:text-white font-poppins font-semibold text-[11px] transition-all flex items-center gap-1"
                    >
                      <span>Join</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Route Link */}
        <ScrollReveal direction="blur-up" delay={200} duration={600}>
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => navigate(isArena ? '/events?cat=Business' : '/events?cat=Culture')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-plum-850 hover:bg-plum-900 dark:bg-plum-800 dark:hover:bg-plum-750 text-white font-poppins font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>{isArena ? 'Explore All 10+ Business Competitions' : 'Explore All Cultural Stages & Pro Nights'}</span>
              <ArrowRight className="w-4 h-4 text-orange-accent" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

