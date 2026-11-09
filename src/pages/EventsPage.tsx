import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EventsDirectory } from '../components/EventsDirectory';
import { EventItem, EventCategory } from '../types/festival';
import { Trophy, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface EventsPageProps {
  onOpenEventModal: (event: EventItem) => void;
  onRegisterInterestForEvent: (eventTitle: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onOpenEventModal,
  onRegisterInterestForEvent,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') as EventCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'All'>(
    catParam && ['Business', 'Culture', 'Campus', 'Social Impact'].includes(catParam)
      ? catParam
      : 'All'
  );

  useEffect(() => {
    if (catParam && ['Business', 'Culture', 'Campus', 'Social Impact'].includes(catParam)) {
      setSelectedCategory(catParam);
    }
  }, [catParam]);

  const handleCategoryChange = (category: EventCategory | 'All') => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: category });
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-white dark:bg-plum-950 text-plum-950 dark:text-white transition-colors duration-300 w-full max-w-full overflow-hidden">
      {/* Editorial Page Header */}
      <div className="bg-plum-950 text-white py-12 sm:py-16 border-b border-plum-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/60">
              <Trophy className="w-3.5 h-3.5" />
              <span>Complete Programme Guide</span>
            </div>
            <h1 className="font-poppins font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Events & Competitions Directory
            </h1>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-lilac/90 max-w-xl mx-auto leading-relaxed">
              Discover national B-school case challenges, real-time trading floors, battle of the bands, fashion runways, and social impact initiatives.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-plum-900/80 text-[11px] sm:text-xs text-lilac border border-plum-750">
              <ShieldAlert className="w-4 h-4 text-orange-accent shrink-0" />
              <span>Upcoming deadlines and prize pools are labelled <strong>Tentative</strong> pending committee release.</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Complete Directory Explorer Component */}
      <EventsDirectory
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onOpenEventModal={onOpenEventModal}
        onRegisterInterestForEvent={onRegisterInterestForEvent}
      />
    </div>
  );
};
