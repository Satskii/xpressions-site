import React from 'react';
import { ArrowRight, Trophy, Users, AlertCircle, Eye, Sparkles } from 'lucide-react';
import { EventItem } from '../types/festival';

interface FeaturedEventsProps {
  events: EventItem[];
  onOpenEventModal: (event: EventItem) => void;
  onViewAllEvents: () => void;
}

export const FeaturedEvents: React.FC<FeaturedEventsProps> = ({
  events,
  onOpenEventModal,
  onViewAllEvents,
}) => {
  const featured = events.filter((e) => e.featured).slice(0, 6);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-800 text-xs font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5 text-orange-accent" />
              <span>Flagship Competitions & Stages</span>
            </div>
            <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
              Featured Experiences
            </h2>
            <p className="mt-2 text-sm sm:text-base text-plum-900/70 max-w-xl">
              From Eastern India's largest rock band championship to national case challenge cups, explore marquee events.
            </p>
          </div>

          <button
            onClick={onViewAllEvents}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-plum-300 text-plum-900 hover:bg-plum-800 hover:text-white hover:border-plum-800 font-poppins font-semibold text-xs sm:text-sm transition-all duration-200 self-start md:self-auto"
          >
            <span>View Full Directory</span>
            <ArrowRight className="w-4 h-4 text-orange-accent" />
          </button>
        </div>

        {/* Featured Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((event) => {
            return (
              <div
                key={event.id}
                className="group rounded-3xl bg-white border border-plum-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Image Cover */}
                <div className="relative h-52 w-full overflow-hidden bg-plum-900">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-plum-900/90 backdrop-blur-md text-white font-poppins font-semibold text-xs border border-plum-700/60 shadow-sm">
                      {event.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-accent/90 text-plum-950 font-poppins font-bold text-[10px] uppercase tracking-wider shadow-sm">
                      <AlertCircle className="w-2.5 h-2.5" />
                      <span>{event.registrationStatus}</span>
                    </span>
                  </div>

                  {/* Team Size Tag */}
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs text-white/90 font-medium bg-plum-950/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    <Users className="w-3.5 h-3.5 text-orange-accent" />
                    <span>{event.teamSize}</span>
                  </div>
                </div>

                {/* Content */}
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
                  </div>

                  {/* Tags */}
                  <div className="mt-4 pt-4 border-t border-plum-100/80">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {event.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-lilac/30 text-plum-800 text-[11px] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenEventModal(event)}
                      className="w-full py-2.5 px-4 rounded-xl bg-plum-800 hover:bg-plum-900 text-white font-poppins font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                    >
                      <Eye className="w-4 h-4 text-orange-accent" />
                      <span>View Full Details & Rules</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote about status */}
        <div className="mt-10 p-4 rounded-2xl bg-plum-50 border border-plum-200/80 text-center text-xs text-plum-800/80 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-orange-accent shrink-0" />
          <span>
            <strong>Editorial Standard:</strong> Event rules, deadlines, prizes and registration links above reflect historical flagship formats and are labelled <em>"Details to be announced"</em> until confirmed by the respective student societies for the 2027 edition.
          </span>
        </div>

      </div>
    </section>
  );
};
