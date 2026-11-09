import React, { useState, useMemo } from 'react';
import { Search, Filter, Trophy, ArrowRight, X } from 'lucide-react';
import { FESTIVAL_EVENTS } from '../data/festivalData';
import { EventItem, EventCategory } from '../types/festival';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

interface EventsDirectoryProps {
  selectedCategory: EventCategory | 'All';
  onCategoryChange: (category: EventCategory | 'All') => void;
  onOpenEventModal: (event: EventItem) => void;
  onRegisterInterestForEvent: (eventTitle: string) => void;
}

export const EventsDirectory: React.FC<EventsDirectoryProps> = ({
  selectedCategory,
  onCategoryChange,
  onOpenEventModal,
  onRegisterInterestForEvent,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');

  const categories: Array<EventCategory | 'All'> = [
    'All',
    'Business',
    'Culture',
    'Campus',
    'Social Impact',
  ];

  const formats = ['All', 'Team', 'Individual', 'Both', 'Open to All'];

  // Filter events by category, search query, and participation type
  const filteredEvents = useMemo(() => {
    return FESTIVAL_EVENTS.filter((event) => {
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;

      const matchesFormat =
        selectedFormat === 'All' || event.participationType === selectedFormat;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.subtitle.toLowerCase().includes(query) ||
        event.shortDescription.toLowerCase().includes(query) ||
        event.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesFormat && matchesSearch;
    });
  }, [selectedCategory, selectedFormat, searchQuery]);

  return (
    <section id="events" className="py-12 sm:py-20 bg-white dark:bg-plum-950 relative w-full overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 dark:bg-plum-900 border border-plum-200/80 dark:border-plum-800 text-plum-800 dark:text-lilac text-xs font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5 text-orange-accent" />
              <span>Complete Programme Guide</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-plum-950 dark:text-white tracking-tight">
              Events Directory
            </h2>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-plum-900/70 dark:text-lilac/70 max-w-xl mx-auto leading-relaxed">
              Search and filter through all flagship business case cups, cultural battles, and campus initiatives.
            </p>
          </div>
        </ScrollReveal>

        {/* Search & Filter Toolbar */}
        <ScrollReveal direction="blur-up" delay={100} duration={700}>
          <div className="bg-plum-50/70 dark:bg-plum-900/60 border border-plum-200/80 dark:border-plum-800/80 rounded-3xl p-4 sm:p-6 mb-10 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-center">
              
              {/* Search Input */}
              <div className="md:col-span-5 relative">
                <Search className="w-4 h-4 text-plum-500 dark:text-plum-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events by name, keyword, or tag..."
                  className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-2xl bg-white dark:bg-plum-850 border border-plum-200 dark:border-plum-700 text-plum-950 dark:text-white placeholder-plum-400 dark:placeholder-plum-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-plum-800 dark:focus:ring-orange-accent transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-plum-400 hover:text-plum-800 dark:hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="md:col-span-7 flex flex-wrap items-center gap-1.5 sm:gap-2 justify-start md:justify-end">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md scale-105'
                        : 'bg-white dark:bg-plum-850 text-plum-800 dark:text-lilac border border-plum-200 dark:border-plum-700/80 hover:bg-plum-100 dark:hover:bg-plum-800'
                    }`}
                  >
                    {cat === 'All' ? 'All' : cat}
                  </button>
                ))}
              </div>

            </div>

            {/* Secondary Filter: Participation Format */}
            <div className="mt-3.5 pt-3.5 border-t border-plum-200/60 dark:border-plum-800 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
              <span className="font-bold text-plum-900 dark:text-lilac flex items-center gap-1 mr-1 text-[11px] sm:text-xs">
                <Filter className="w-3.5 h-3.5 text-orange-accent" /> Format:
              </span>
              {formats.map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium transition-colors ${
                    selectedFormat === fmt
                      ? 'bg-orange-accent text-plum-950 font-bold shadow-sm'
                      : 'bg-white dark:bg-plum-850 text-plum-700 dark:text-lilac/80 hover:bg-plum-100 dark:hover:bg-plum-800 border border-plum-200 dark:border-plum-750'
                  }`}
                >
                  {fmt}
                </button>
              ))}
              <span className="ml-auto text-[11px] sm:text-xs text-plum-600 dark:text-plum-400 font-medium">
                Showing <strong>{filteredEvents.length}</strong> {filteredEvents.length === 1 ? 'event' : 'events'}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="p-10 text-center bg-plum-50/70 dark:bg-plum-900/60 rounded-3xl border border-plum-200 dark:border-plum-800 max-w-xl mx-auto my-8">
            <Trophy className="w-12 h-12 text-plum-400 mx-auto mb-3" />
            <h3 className="font-poppins font-bold text-base sm:text-lg text-plum-900 dark:text-white">
              No matching events found
            </h3>
            <p className="mt-1 text-xs text-plum-700 dark:text-lilac/70">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
                setSelectedFormat('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 text-xs font-semibold hover:bg-plum-900 dark:hover:bg-orange-hover"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((event, idx) => {
            return (
              <ScrollReveal key={event.id} direction="blur-up" delay={(idx % 6) * 100} duration={700}>
                <SpotlightCard
                  className="group rounded-3xl bg-white dark:bg-plum-900/80 border border-plum-200/70 dark:border-plum-800/80 shadow-sm hover:shadow-2xl hover:border-orange-accent/40 dark:hover:border-orange-accent/50 transition-all duration-400 flex flex-col justify-between overflow-hidden hover:-translate-y-2 h-full"
                >
                  {/* Image Cover */}
                  <div className="relative h-48 w-full overflow-hidden bg-plum-900">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-spring"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-plum-950/20 to-transparent" />

                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-plum-900/90 text-white font-poppins font-semibold text-xs border border-plum-700/60 shadow-sm backdrop-blur-md">
                      {event.category}
                    </span>

                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-orange-accent text-plum-950 font-poppins font-bold text-[10px] uppercase shadow-sm">
                      {event.registrationStatus}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-poppins font-black text-xl text-plum-950 dark:text-white group-hover:text-orange-accent transition-colors">
                          {event.title}
                        </h3>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-plum-100 dark:bg-plum-800 text-plum-800 dark:text-lilac shrink-0">
                          {event.participationType}
                        </span>
                      </div>
                      
                      <p className="text-xs font-semibold text-orange-accent line-clamp-1">
                        {event.subtitle}
                      </p>

                      <p className="mt-2.5 text-xs sm:text-sm text-plum-900/70 dark:text-lilac/75 line-clamp-2 leading-relaxed">
                        {event.shortDescription}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-plum-100 dark:border-plum-800 flex items-center justify-between">
                      <button
                        onClick={() => onOpenEventModal(event)}
                        className="text-xs font-bold text-plum-800 dark:text-lilac hover:text-orange-accent dark:hover:text-orange-accent transition-colors flex items-center gap-1.5"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onRegisterInterestForEvent(event.title)}
                        className="px-3 py-1 rounded-full bg-plum-50 dark:bg-plum-800/80 hover:bg-orange-accent dark:hover:bg-orange-accent hover:text-plum-950 dark:hover:text-plum-950 text-plum-800 dark:text-lilac text-[11px] font-bold border border-plum-200 dark:border-plum-700 transition-colors"
                      >
                        Express Interest
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
