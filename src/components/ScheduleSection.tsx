import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Bell, Filter, ShieldAlert } from 'lucide-react';
import { SCHEDULE_PREVIEW } from '../data/festivalData';
import { ScrollReveal } from './ScrollReveal';

interface ScheduleSectionProps {
  onRegisterInterest: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onRegisterInterest }) => {
  const [activeDay, setActiveDay] = useState<'Day 1' | 'Day 2' | 'Day 3'>('Day 1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days: Array<'Day 1' | 'Day 2' | 'Day 3'> = ['Day 1', 'Day 2', 'Day 3'];
  const categories = ['All', 'Business', 'Culture', 'Social Impact', 'Campus', 'Pro Night'];

  const filteredItems = SCHEDULE_PREVIEW.filter((item) => {
    const matchesDay = item.day === activeDay;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-white relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200/80 text-plum-800 text-xs font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5 text-orange-accent" />
              <span>Festival Programme & Venue</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
              Programme Schedule
            </h2>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-plum-900/70 leading-relaxed max-w-xl mx-auto">
              Preview the structured flow of daytime management competitions, cultural battles, and evening marquee spectacles.
            </p>
          </div>
        </ScrollReveal>

        {/* Status Notice Banner */}
        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-lilac/30 border border-plum-300/80 text-plum-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2 rounded-xl bg-plum-800 text-orange-accent shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-xs sm:text-base text-plum-950">
                  Official Timetable & Venue Details: To Be Announced
                </h4>
                <p className="text-[11px] sm:text-xs text-plum-800/80 mt-0.5 leading-relaxed">
                  Specific dates, clock timings, and classroom allocations are currently tentative and pending final approval from the XIM University administration.
                </p>
              </div>
            </div>

            <button
              onClick={onRegisterInterest}
              className="shrink-0 w-full sm:w-auto px-4 py-2.5 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Notify Me On Release</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Day Tabs - Mobile-Friendly Responsive Grid */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-md grid grid-cols-3 p-1 rounded-2xl bg-plum-100 border border-plum-200/80 gap-1">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`py-2 sm:py-2.5 px-2 rounded-xl font-poppins font-bold text-xs sm:text-sm transition-all duration-200 text-center ${
                  activeDay === day
                    ? 'bg-plum-800 text-white shadow-md'
                    : 'text-plum-800 hover:text-plum-950 hover:bg-plum-200/60'
                }`}
              >
                <span>{day}</span>
                <span className="hidden sm:block text-[10px] font-normal opacity-80 mt-0.5 truncate">
                  {day === 'Day 1' ? 'Prelims' : day === 'Day 2' ? 'Heats' : 'Finals'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          <span className="text-xs font-semibold text-plum-600 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-plum-800 text-white shadow-sm'
                  : 'bg-plum-50 text-plum-800 hover:bg-plum-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={idx * 60} duration={500}>
              <div className="p-4 sm:p-5 rounded-2xl border border-plum-200/70 hover:border-plum-300 bg-white hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-plum-50 border border-plum-200/60 flex items-center justify-center text-plum-800 shrink-0 font-poppins font-bold text-[10px] text-center leading-tight p-1">
                    {item.timeSlot.split(' ')[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-poppins font-bold text-sm sm:text-base text-plum-950">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-plum-100 text-plum-800">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 mt-1 text-xs text-plum-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-accent shrink-0" />
                        <span>{item.timeSlot}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-orange-accent shrink-0" />
                        <span>{item.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    {item.status}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
