import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, AlertCircle, Compass, Calendar, MapPin } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface HeroProps {
  onExploreEvents: () => void;
  onRegisterInterest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEvents, onRegisterInterest }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-plum-950 text-white pt-20 pb-16">
      {/* Immersive Festival Photography Background with Artful Plum/Orange Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85"
          alt="Xpressions Festival Crowd and Concert Stage Lighting"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-35"
        />
        {/* Deep Plum & Warm Orange Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/80 to-plum-900/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-plum-950/50 to-plum-950" />
        
        {/* Geometric Stage Lighting & Sound Wave Accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-plum-700/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-orange-accent/15 blur-3xl" />
      </div>

      {/* Decorative Stage Lines */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Institutional Affiliation & Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum-800/80 border border-lilac/20 text-lilac backdrop-blur-md mb-6 animate-in fade-in duration-700">
          <Sparkles className="w-3.5 h-3.5 text-orange-accent" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            XIM University, Bhubaneswar · Flagship Management-Cultural Fest
          </span>
        </div>

        {/* Brand Tagline */}
        <div className="text-orange-accent font-poppins font-bold uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base mb-3">
          {FESTIVAL_INFO.tagline}
        </div>

        {/* Main Campaign Headline */}
        <h1 className="font-poppins font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.08] max-w-4xl mb-6">
          One festival.{' '}
          <span className="bg-gradient-to-r from-orange-accent via-lilac to-white bg-clip-text text-transparent">
            Many ways to stand out.
          </span>
        </h1>

        {/* Supporting Message & Core Proposition */}
        <p className="font-inter text-base sm:text-lg md:text-xl text-lilac-muted max-w-2xl leading-relaxed mb-6 font-normal">
          Where business challenges meet cultural expression. Compete on the case floor, showcase your talent, connect with nationwide peers, and celebrate on the grand stage.
        </p>

        {/* Four Pillars Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-lilac mb-8">
          <span className="px-3 py-1 rounded-full bg-plum-800/60 border border-plum-700">COMPETE</span>
          <span className="text-orange-accent">•</span>
          <span className="px-3 py-1 rounded-full bg-plum-800/60 border border-plum-700">PERFORM</span>
          <span className="text-orange-accent">•</span>
          <span className="px-3 py-1 rounded-full bg-plum-800/60 border border-plum-700">CONNECT</span>
          <span className="text-orange-accent">•</span>
          <span className="px-3 py-1 rounded-full bg-plum-800/60 border border-plum-700">CELEBRATE</span>
        </div>

        {/* Editorial Date & Venue Tentative Notice */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-lilac/80 bg-plum-900/60 border border-plum-700/60 px-4 py-2 rounded-xl mb-9 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-orange-accent" />
            <span>Dates: <strong className="text-white font-medium">To be announced officially</strong></span>
          </div>
          <span className="hidden sm:inline text-plum-600">|</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-accent" />
            <span>Venue: <strong className="text-white font-medium">XIM University, Bhubaneswar</strong></span>
          </div>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-orange-accent/20 text-orange-accent border border-orange-accent/30">
            Tentative
          </span>
        </div>

        {/* Primary and Secondary Calls to Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onRegisterInterest}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-sm sm:text-base shadow-glow-orange hover:shadow-festival-hover hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Register Interest</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-plum-800/80 hover:bg-plum-700 text-white font-poppins font-semibold text-sm sm:text-base border border-plum-600/60 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-orange-accent" />
            <span>Explore Events</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onExploreEvents}
          className="mt-14 sm:mt-16 flex flex-col items-center gap-1.5 text-xs text-lilac/60 hover:text-orange-accent transition-colors focus:outline-none"
          aria-label="Scroll down to festival highlights"
        >
          <span className="font-medium tracking-wider uppercase text-[10px]">Discover More</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>

      </div>
    </section>
  );
};
