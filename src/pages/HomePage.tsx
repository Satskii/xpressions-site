import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Trophy, Music } from 'lucide-react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { FestivalIntro } from '../components/FestivalIntro';
import { SoundWaveBar } from '../components/SoundWaveBar';
import { VibeSelector } from '../components/VibeSelector';
import { FinalCta } from '../components/FinalCta';
import { ScrollReveal } from '../components/ScrollReveal';
import { FESTIVAL_EVENTS, PAST_EDITIONS } from '../data/festivalData';
import { EventItem } from '../types/festival';

interface HomePageProps {
  onOpenInterestModal: (eventTitle?: string) => void;
  onOpenEventModal: (event: EventItem) => void;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenInterestModal,
  onOpenEventModal,
  onOpenLightbox,
}) => {
  const navigate = useNavigate();

  // Pick top 3 marquee flagships for homepage preview to avoid information density
  const marqueeEvents = FESTIVAL_EVENTS.filter((e) => ['maven', 'decibelz', 'trade-wars'].includes(e.id));

  return (
    <div className="space-y-0 w-full max-w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero
        onExploreEvents={() => navigate('/events')}
        onRegisterInterest={() => onOpenInterestModal()}
      />

      {/* 2. Interactive Sound Wave Visualizer */}
      <SoundWaveBar />

      {/* 3. Proof & Legacy Stats Bar */}
      <StatsBar />

      {/* 4. Editorial Introduction */}
      <FestivalIntro
        onLearnMore={() => navigate('/events')}
        onExplorePillars={() => {
          const el = document.getElementById('vibe-navigator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5. Interactive Vibe Selector Widget */}
      <section id="vibe-navigator" className="py-16 sm:py-24 bg-plum-950 text-white relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VibeSelector />
        </div>
      </section>

      {/* 6. Curated Marquee Preview (Strictly 3 Cards to keep layout breathable) */}
      <section className="py-16 sm:py-24 bg-white relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal direction="up" duration={600}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200/80 text-plum-800 text-xs font-semibold mb-3">
                  <Trophy className="w-3.5 h-3.5 text-orange-accent" />
                  <span>Curated Highlights</span>
                </div>
                <h2 className="font-poppins font-black text-2xl sm:text-4xl text-plum-950 tracking-tight">
                  Featured Marquee Arenas
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-plum-900/70 max-w-xl leading-relaxed">
                  A preview of Eastern India’s most fiercely contested business simulations and band championships.
                </p>
              </div>

              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-plum-850 hover:bg-plum-900 text-white font-poppins font-bold text-xs sm:text-sm shadow-md transition-all self-start md:self-auto hover:scale-105 active:scale-95"
              >
                <span>Explore All 15+ Events</span>
                <ArrowRight className="w-4 h-4 text-orange-accent" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {marqueeEvents.map((event, idx) => (
              <ScrollReveal key={event.id} direction="up" delay={idx * 120} duration={650}>
                <div
                  className="group rounded-3xl bg-white border border-plum-200/60 shadow-sm hover:shadow-xl hover:border-plum-300 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 h-full"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-plum-900">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-plum-900/90 text-white font-poppins font-semibold text-xs border border-plum-700/60 shadow-sm backdrop-blur-md">
                      {event.category}
                    </span>

                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-orange-accent text-plum-950 font-poppins font-bold text-[10px] uppercase shadow-sm">
                      {event.registrationStatus}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-poppins font-black text-xl sm:text-2xl text-plum-950 group-hover:text-plum-800 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs font-semibold text-orange-accent mt-0.5 line-clamp-1">
                        {event.subtitle}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-plum-900/70 line-clamp-2 leading-relaxed">
                        {event.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-plum-100 flex items-center justify-between">
                      <button
                        onClick={() => onOpenEventModal(event)}
                        className="text-xs font-bold text-plum-800 hover:text-orange-accent transition-colors flex items-center gap-1"
                      >
                        <span>Quick View Rules</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] text-plum-600 font-medium">
                        {event.teamSize}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Pro Nights Banner Teaser */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 text-white relative overflow-hidden border-y border-plum-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" duration={650}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider">
                  <Music className="w-3.5 h-3.5" />
                  <span>The Grand Concert Stage</span>
                </div>
                <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  Star Celebrity Pro Nights
                </h2>
                <p className="text-xs sm:text-base text-lilac/90 max-w-2xl leading-relaxed">
                  From Shankar-Ehsaan-Loy and Sunidhi Chauhan to Darshan Raval and Amaal Mallik, discover the high-voltage arena that brings the entire university together.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/pro-nights"
                  className="w-full py-3.5 px-6 rounded-2xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2 text-center transition-all hover:scale-105 active:scale-95"
                >
                  <span>View Pro Nights & Guidelines</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/past-editions"
                  className="w-full py-3 px-6 rounded-2xl bg-plum-850 hover:bg-plum-800 text-lilac hover:text-white font-poppins font-semibold text-xs sm:text-sm border border-plum-700/70 flex items-center justify-center gap-2 text-center transition-colors"
                >
                  <span>See Past Artists Archive (2016–2025)</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <FinalCta
        onRegisterInterest={() => onOpenInterestModal()}
        onExploreFestival={() => navigate('/events')}
      />
    </div>
  );
};
