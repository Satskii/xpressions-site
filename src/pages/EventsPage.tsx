import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EventsDirectory } from '../components/EventsDirectory';
import { EventItem, EventCategory } from '../types/festival';
import { Sparkles, Trophy, ShieldAlert } from 'lucide-react';

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
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Editorial Page Header */}
      <div className="bg-plum-950 text-white py-14 border-b border-plum-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <Trophy className="w-3.5 h-3.5" />
            <span>Complete Programme Guide</span>
          </div>
          <h1 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Events & Competitions Directory
          </h1>
          <p className="mt-3 font-inter text-base sm:text-lg text-lilac max-w-2xl mx-auto leading-relaxed">
            Discover national B-school case challenges, real-time trading floors, battle of the bands, fashion runways, and social impact initiatives.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-plum-900/80 text-xs text-lilac border border-plum-700">
            <ShieldAlert className="w-4 h-4 text-orange-accent" />
            <span>All upcoming deadlines and prize amounts are labelled <strong>Tentative</strong> pending committee release.</span>
          </div>
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
