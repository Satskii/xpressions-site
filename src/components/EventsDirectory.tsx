import React, { useState, useMemo } from 'react';
import { Search, Filter, Trophy, Users, AlertCircle, Eye, ArrowRight, Sparkles, X } from 'lucide-react';
import { FESTIVAL_EVENTS } from '../data/festivalData';
import { EventItem, EventCategory } from '../types/festival';

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
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;

      // Participation format filter
      const matchesFormat =
        selectedFormat === 'All' || event.participationType === selectedFormat;

      // Text search in title, subtitle, description, and tags
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
    <section id="events" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-800 text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5 text-orange-accent" />
            <span>Complete Programme Guide</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
            Events Directory
          </h2>
          <p className="mt-3 font-inter text-base sm:text-lg text-plum-900/70">
            Search and filter through all flagship business case cups, cultural battles, and campus initiatives.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-plum-50/80 border border-plum-200/80 rounded-3xl p-5 sm:p-6 mb-10 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-plum-600 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events by title, keyword, or tag (e.g. Maven, Band, Finance)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-plum-200 text-plum-950 placeholder-plum-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-plum-800 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-plum-400 hover:text-plum-800 p-1"
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
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-plum-800 text-white shadow-md scale-105'
                      : 'bg-white text-plum-800 border border-plum-200 hover:bg-plum-100'
                  }`}
                >
                  {cat === 'All' ? 'All Categories' : cat}
                </button>
              ))}
            </div>

          </div>

          {/* Secondary Filter: Participation Format */}
          <div className="mt-4 pt-4 border-t border-plum-200/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-plum-900 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-orange-accent" /> Format:
            </span>
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedFormat === fmt
                    ? 'bg-orange-accent text-plum-950 font-bold shadow-sm'
                    : 'bg-white text-plum-700 hover:bg-plum-100 border border-plum-200'
                }`}
              >
                {fmt === 'All' ? 'All Formats' : fmt}
              </button>
            ))}
            <span className="ml-auto text-xs text-plum-600 font-medium">
              Showing <strong>{filteredEvents.length}</strong> {filteredEvents.length === 1 ? 'event' : 'events'}
            </span>
          </div>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="p-12 text-center bg-plum-50 rounded-3xl border border-plum-200 max-w-xl mx-auto my-8">
            <Trophy className="w-12 h-12 text-plum-400 mx-auto mb-3" />
            <h3 className="font-poppins font-bold text-lg text-plum-900">
              No matching events found
            </h3>
            <p className="mt-1 text-xs text-plum-700">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
                setSelectedFormat('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-plum-800 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            return (
              <div
                key={event.id}
                className="group rounded-3xl bg-white border border-plum-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Image Cover */}
                <div className="relative h-48 w-full overflow-hidden bg-plum-900">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-plum-950/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-0.5 rounded-full bg-plum-900/90 text-white font-poppins font-semibold text-xs border border-plum-700/60 shadow-sm backdrop-blur-md">
                      {event.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-accent/90 text-plum-950 font-poppins font-bold text-[10px] uppercase tracking-wider shadow-sm">
                      <AlertCircle className="w-2.5 h-2.5" />
                      <span>{event.registrationStatus}</span>
                    </span>
                  </div>

                  {/* Team Size */}
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-xs text-white/90 font-medium bg-plum-950/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    <Users className="w-3.5 h-3.5 text-orange-accent" />
                    <span>{event.teamSize}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-poppins font-black text-2xl text-plum-950 group-hover:text-plum-800 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-accent mt-0.5 line-clamp-1">
                      {event.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-plum-900/70 line-clamp-3 leading-relaxed">
                      {event.shortDescription}
                    </p>

                    {/* Eligibility Snippet */}
                    <div className="mt-4 p-2.5 rounded-xl bg-plum-50 border border-plum-100 text-xs text-plum-800">
                      <strong>Eligibility:</strong> {event.eligibility}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-plum-100 space-y-2">
                    <button
                      onClick={() => onOpenEventModal(event)}
                      className="w-full py-2.5 px-4 rounded-xl bg-plum-800 hover:bg-plum-900 text-white font-poppins font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Eye className="w-4 h-4 text-orange-accent" />
                      <span>View Full Rules & Details</span>
                    </button>

                    <button
                      onClick={() => onRegisterInterestForEvent(event.title)}
                      className="w-full py-2 px-4 rounded-xl bg-orange-accent/15 hover:bg-orange-accent/30 text-plum-950 font-poppins font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Register Interest for {event.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
