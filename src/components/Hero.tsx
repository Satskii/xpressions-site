import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Compass, Calendar, MapPin } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onExploreEvents: () => void;
  onRegisterInterest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEvents, onRegisterInterest }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-plum-950 text-white pt-24 pb-16 sm:py-28">
      {/* Immersive Festival Photography Background with Artful Plum/Orange Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85"
          alt="Xpressions Festival Crowd and Concert Stage Lighting"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-25"
        />
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/85 to-plum-900/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-plum-950/50 to-plum-950" />

        {/* Subtle Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-plum-700/20 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-orange-accent/15 blur-3xl animate-float-slow" />
      </div>

      {/* Decorative Stage Lines */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-25" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Institutional Affiliation & Status Badge */}
        <ScrollReveal direction="blur-up" delay={50} duration={700}>
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-plum-850/90 border border-plum-700/80 text-lilac backdrop-blur-md mb-5 sm:mb-6 shadow-sm max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-orange-accent shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide truncate">
              XIMB, Bhubaneswar · Flagship Management-Cultural Fest
            </span>
          </div>
        </ScrollReveal>

        {/* Hero Centerpiece Logo: XPRESSIONS '27 */}
        <ScrollReveal direction="blur-up" delay={120} duration={750}>
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-5">
            {/* Custom Stylized Emblem Crest */}
            <div className="mb-3 sm:mb-4 relative group">
              <div className="absolute -inset-2 rounded-3xl bg-orange-accent/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-accent via-amber-400 to-plum-600 p-0.5 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-plum-950 flex items-center justify-center">
                  <span className="font-poppins font-black text-4xl sm:text-5xl bg-gradient-to-br from-orange-accent via-amber-200 to-white bg-clip-text text-transparent tracking-tighter">
                    X
                  </span>
                </div>
              </div>
            </div>

            {/* Monumental Hero Logo Wordmark */}
            <h1 className="relative inline-flex items-start justify-center font-poppins font-black text-4xl min-[380px]:text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tighter leading-none select-none">
              <span className="bg-gradient-to-b from-white via-white to-lilac/80 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(240,160,90,0.2)]">
                XPRESSIONS
              </span>
              <span className="ml-1.5 sm:ml-2.5 mt-1 sm:mt-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-orange-accent text-plum-950 font-poppins font-black text-sm sm:text-xl md:text-2xl shadow-glow-orange tracking-tight">
                &apos;27
              </span>
            </h1>
          </div>

          <div className="text-orange-accent font-poppins font-bold uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base mb-4">
            {FESTIVAL_INFO.tagline}
          </div>

          <p className="font-poppins font-bold text-lg sm:text-2xl md:text-3xl text-white/95 max-w-2xl mx-auto mb-3 tracking-tight">
            One festival. Two universes.
          </p>
        </ScrollReveal>

        {/* Supporting Message & Core Proposition */}
        <ScrollReveal direction="blur-up" delay={220} duration={750}>
          <p className="font-inter text-xs sm:text-base md:text-lg text-lilac-muted max-w-2xl leading-relaxed mb-6 font-normal px-2">
            Where premier B-school boardroom strategies collide with stadium-scale cultural euphoria at XIMB, Bhubaneswar. Compete on the case floor, command the stage, and celebrate with 30,000+ peers.
          </p>
        </ScrollReveal>

        {/* Four Pillars Pills */}
        <ScrollReveal direction="blur-up" delay={300} duration={750}>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-lilac mb-6 sm:mb-7">
            <span className="px-4 py-1.5 rounded-full bg-plum-850/80 border border-plum-750 transition-colors hover:border-orange-accent/60">COMPETE</span>
            <span className="text-orange-accent">•</span>
            <span className="px-4 py-1.5 rounded-full bg-plum-850/80 border border-plum-750 transition-colors hover:border-orange-accent/60">PERFORM</span>
            <span className="text-orange-accent">•</span>
            <span className="px-4 py-1.5 rounded-full bg-plum-850/80 border border-plum-750 transition-colors hover:border-orange-accent/60">CONNECT</span>
            <span className="text-orange-accent">•</span>
            <span className="px-4 py-1.5 rounded-full bg-plum-850/80 border border-plum-750 transition-colors hover:border-orange-accent/60">CELEBRATE</span>
          </div>
        </ScrollReveal>

        {/* Editorial Date & Venue Notice */}
        <ScrollReveal direction="blur-up" delay={380} duration={750}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-lilac/85 bg-plum-900/60 border border-plum-800/80 px-4 sm:px-5 py-2.5 rounded-2xl mb-8 backdrop-blur-md max-w-full sm:max-w-2xl">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-orange-accent shrink-0" />
              <span>Edition: <strong className="text-white font-medium">Xpressions 2027 (Dates TBA)</strong></span>
            </div>
            <span className="hidden sm:inline text-plum-600">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-accent shrink-0" />
              <span>Venue: <strong className="text-white font-medium">XIMB, Xavier Square, Bhubaneswar</strong></span>
            </div>
          </div>
        </ScrollReveal>

        {/* Primary and Secondary Calls to Action */}
        <ScrollReveal direction="blur-up" delay={450} duration={800}>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button
              onClick={onRegisterInterest}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-sm sm:text-base shadow-glow-orange hover:shadow-festival-hover hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Register Interest</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreEvents}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-plum-850/80 hover:bg-plum-800 text-white font-poppins font-semibold text-sm sm:text-base border border-plum-700/60 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-orange-accent" />
              <span>Explore Events</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <button
          onClick={onExploreEvents}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-1 text-xs text-lilac/60 hover:text-orange-accent transition-colors focus:outline-none"
          aria-label="Scroll down to festival highlights"
        >
          <span className="font-medium tracking-wider uppercase text-[10px]">Discover More</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>

      </div>
    </section>
  );
};
