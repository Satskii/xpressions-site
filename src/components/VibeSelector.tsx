import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Mic2, Users, Music, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const VibeSelector: React.FC = () => {
  const navigate = useNavigate();
  const [activeVibe, setActiveVibe] = useState<'compete' | 'perform' | 'connect' | 'celebrate'>('compete');

  const vibes = [
    {
      id: 'compete' as const,
      pillar: 'COMPETE',
      label: 'Strategic Competitor',
      icon: Target,
      tagline: 'Cases · Trading · Pitching',
      headline: 'Sharpen your business acumen on the national case floor.',
      description: 'Go head-to-head against premier B-school delegations from IIMs, XLRI, and top universities in unscripted corporate simulations.',
      flagships: ['Maven Case Cup', 'Trade Wars Simulation', 'Jack of All Trades'],
      targetUrl: '/events?cat=Business',
      badge: 'B-School Flagships',
      accentColor: 'border-orange-accent text-orange-accent',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'perform' as const,
      pillar: 'PERFORM',
      label: 'Stage Performer',
      icon: Mic2,
      tagline: 'Rock Bands · Dance · Runway',
      headline: 'Eastern India’s largest collegiate arena is waiting for you.',
      description: 'Command concert audio rigs, showcase choreographic synchronicity, or bring powerful social narratives to life in open-air amphitheatres.',
      flagships: ['Decibelz Rock Bands', 'Thirkan Dance', 'Carnival de Vogue', 'Aaghaz Street Play'],
      targetUrl: '/events?cat=Culture',
      badge: 'Cultural Stages',
      accentColor: 'border-purple-400 text-purple-300',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'connect' as const,
      pillar: 'CONNECT',
      label: 'Campus Community',
      icon: Users,
      tagline: 'XAthon Marathon · Conclaves',
      headline: 'Immerse yourself in student-led camaraderie and sports.',
      description: 'From the early morning campus-to-city XAthon run to interactive informal gaming hubs, connect with students across diverse disciplines.',
      flagships: ['XAthon 5K/10K Run', 'Informal Gaming Hubs', 'Campus Food Stalls'],
      targetUrl: '/events?cat=Campus',
      badge: 'Campus Vibrance',
      accentColor: 'border-emerald-400 text-emerald-300',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'celebrate' as const,
      pillar: 'CELEBRATE',
      label: 'Pro Nights & Carnival',
      icon: Music,
      tagline: 'Star Concerts · Social Impact',
      headline: 'High-octane stadium energy meets heartfelt social impact.',
      description: 'Witness India’s foremost musical headliners by night, and take part in X-Enable, our hallmark initiative for specially-abled children.',
      flagships: ['Celebrity Star Concerts', 'Comedy Pro Night', 'X-Enable Inclusive Carnival'],
      targetUrl: '/pro-nights',
      badge: 'Marquee Evenings',
      accentColor: 'border-amber-400 text-amber-300',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const current = vibes.find((v) => v.id === activeVibe) || vibes[0];

  return (
    <ScrollReveal direction="up" duration={650}>
      <div className="bg-plum-900/80 rounded-3xl border border-plum-750/70 p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-orange-accent/10 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold border border-plum-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Experience Navigator</span>
            </div>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white tracking-tight">
              Find Your Arena in One Click
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-lilac/80 max-w-sm leading-relaxed">
            Tap an experience dimension to preview flagship events, requirements, and discovery pathways.
          </p>
        </div>

        {/* 4 Interactive Vibe Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
          {vibes.map((v) => {
            const Icon = v.icon;
            const isSelected = activeVibe === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveVibe(v.id)}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-plum-800 text-white border-orange-accent shadow-lg shadow-orange-accent/15 scale-[1.02]'
                    : 'bg-plum-950/60 text-lilac/80 border-plum-800 hover:border-plum-700 hover:bg-plum-850/80'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2 sm:mb-3">
                  <div className={`p-1.5 sm:p-2 rounded-xl ${isSelected ? 'bg-orange-accent text-plum-950' : 'bg-plum-800 text-lilac'}`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase opacity-75">
                    {v.pillar}
                  </span>
                </div>
                <div>
                  <div className="font-poppins font-bold text-xs sm:text-sm text-white truncate">
                    {v.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-lilac/70 line-clamp-1 mt-0.5">
                    {v.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Vibe Expanded Showcase Card */}
        <div className="rounded-2xl bg-plum-950/70 border border-plum-800/80 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 transition-all duration-300">
          <div className="relative w-full lg:w-72 h-44 sm:h-56 rounded-2xl overflow-hidden shrink-0 border border-plum-700/60 shadow-md">
            <img
              src={current.image}
              alt={current.label}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/30 to-transparent" />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-plum-900/90 text-orange-accent font-poppins font-bold text-[10px] tracking-wider uppercase border border-plum-700/80">
              {current.badge}
            </div>
          </div>

          <div className="flex-1 space-y-3 sm:space-y-4 w-full">
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-orange-accent uppercase tracking-wider">
                {current.pillar} Dimension
              </span>
              <h4 className="font-poppins font-black text-lg sm:text-2xl text-white mt-1">
                {current.headline}
              </h4>
              <p className="text-xs sm:text-sm text-lilac/90 leading-relaxed mt-1.5">
                {current.description}
              </p>
            </div>

            <div className="pt-1">
              <div className="text-[11px] sm:text-xs font-bold text-white mb-2 uppercase tracking-wide">
                Marquee Highlights:
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {current.flagships.map((f, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-plum-850 text-lilac text-[11px] sm:text-xs font-medium border border-plum-700/60"
                  >
                    <CheckCircle2 className="w-3 h-3 text-orange-accent shrink-0" />
                    <span>{f}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 sm:pt-3 flex items-center">
              <button
                onClick={() => navigate(current.targetUrl)}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Explore {current.pillar} Arena</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </ScrollReveal>
  );
};
