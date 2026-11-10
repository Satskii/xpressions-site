import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Music } from 'lucide-react';
import { Hero } from '../components/Hero';
import { KineticTicker } from '../components/KineticTicker';
import { StatsBar } from '../components/StatsBar';
import { DualNarrativeSection } from '../components/DualNarrativeSection';
import { FestivalIntro } from '../components/FestivalIntro';
import { VibeSelector } from '../components/VibeSelector';
import { FinalCta } from '../components/FinalCta';
import { ScrollReveal } from '../components/ScrollReveal';
import { EventItem } from '../types/festival';

interface HomePageProps {
  onOpenInterestModal: (eventTitle?: string) => void;
  onOpenEventModal: (event: EventItem) => void;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenInterestModal,
  onOpenEventModal,
}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0 w-full max-w-full overflow-hidden bg-white dark:bg-plum-950 text-plum-950 dark:text-white transition-colors duration-300">
      {/* 1. Hero Section (F1 Telemetry Coordinates & Brand Headline) */}
      <Hero
        onExploreEvents={() => navigate('/events')}
        onRegisterInterest={() => onOpenInterestModal()}
      />

      {/* 2. Kinetic Telemetry Ticker */}
      <KineticTicker />

      {/* 3. High-Octane Telemetry HUD (Precision Stats Inspired by F1 Telemetry) */}
      <StatsBar />

      {/* 4. Dual-Narrative Engine (Lando Norris Inspired: [ 01 // THE ARENA ] vs [ 02 // THE STAGE ]) */}
      <DualNarrativeSection
        onOpenEventModal={onOpenEventModal}
        onOpenInterestModal={onOpenInterestModal}
      />

      {/* 5. Editorial Introduction */}
      <FestivalIntro
        onLearnMore={() => navigate('/events')}
        onExplorePillars={() => {
          const el = document.getElementById('vibe-navigator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6. Interactive Experience Navigator Widget */}
      <section id="vibe-navigator" className="py-16 sm:py-24 bg-plum-950 text-white relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VibeSelector />
        </div>
      </section>

      {/* 7. Pro Nights Banner Teaser */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 text-white relative overflow-hidden border-y border-plum-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="blur-up" duration={700}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-mono font-bold uppercase tracking-wider">
                  <Music className="w-3.5 h-3.5" />
                  <span>[ CONCERT TELEMETRY // STADIUM AMPHITHEATRE ]</span>
                </div>
                <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  Star Celebrity Pro Nights
                </h2>
                <p className="text-xs sm:text-base text-lilac/90 max-w-2xl leading-relaxed">
                  From Shankar-Ehsaan-Loy and Sunidhi Chauhan to Darshan Raval and Amaal Mallik, discover the high-voltage arena that brings 30,000+ festival goers together.
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
