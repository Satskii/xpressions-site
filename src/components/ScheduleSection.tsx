import React, { useState } from 'react';
import { Calendar, Clock, MapPin, AlertCircle, Bell, Filter, Sparkles, ShieldAlert } from 'lucide-react';
import { SCHEDULE_PREVIEW, FESTIVAL_INFO } from '../data/festivalData';
import { EventCategory } from '../types/festival';

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
    <section id="schedule" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-800 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-orange-accent" />
            <span>Festival Programme & Venue</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
            Programme Schedule
          </h2>
          <p className="mt-3 font-inter text-base sm:text-lg text-plum-900/70">
            Preview the structured flow of daytime management competitions, cultural battles, and evening marquee spectacles.
          </p>
        </div>

        {/* MANDATORY EDITORIAL STATUS NOTICE BANNER */}
        <div className="max-w-4xl mx-auto mb-12 p-5 rounded-2xl bg-lilac/30 border-2 border-plum-300 text-plum-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-xl bg-plum-800 text-orange-accent shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm sm:text-base text-plum-950">
                Official Timetable & Venue Details: To Be Announced
              </h4>
              <p className="text-xs text-plum-800/80 mt-0.5 leading-relaxed">
                Specific dates, clock timings, and classroom allocations are currently tentative and pending final approval from the XIM University administration.
              </p>
            </div>
          </div>

          <button
            onClick={onRegisterInterest}
            className="shrink-0 px-4 py-2 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Notify Me On Release</span>
          </button>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-plum-100 border border-plum-200/80">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2.5 rounded-xl font-poppins font-bold text-xs sm:text-sm transition-all duration-200 ${
                  activeDay === day
                    ? 'bg-plum-800 text-white shadow-md'
                    : 'text-plum-800 hover:text-plum-950 hover:bg-plum-200/60'
                }`}
              >
                <span>{day}</span>
                <span className="block text-[10px] font-normal opacity-80">
                  {day === 'Day 1' ? 'Inauguration & Prelims' : day === 'Day 2' ? 'Heats & Band Battles' : 'Grand Finals & Pro Night'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-semibold text-plum-600 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-plum-800 text-white shadow-sm'
                  : 'bg-plum-50 text-plum-800 hover:bg-plum-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Events List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center bg-plum-50 rounded-2xl text-plum-800 text-sm">
              No schedule items found for this category on {activeDay}. Try selecting another filter.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-plum-900 to-plum-850 text-white border-plum-700 shadow-lg'
                    : 'bg-white text-plum-950 border-plum-100 hover:border-plum-300 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${
                        item.highlight
                          ? 'bg-orange-accent text-plum-950'
                          : 'bg-plum-100 text-plum-800'
                      }`}
                    >
                      {item.category}
                    </span>
                    <span
                      className={`text-xs flex items-center gap-1 ${
                        item.highlight ? 'text-lilac' : 'text-plum-600'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-orange-accent" />
                      <span>{item.timeSlot}</span>
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.highlight
                        ? 'bg-plum-800 text-lilac border border-plum-600'
                        : 'bg-amber-100 text-amber-900 border border-amber-200'
                    }`}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <h3
                  className={`font-poppins font-bold text-lg sm:text-xl ${
                    item.highlight ? 'text-white' : 'text-plum-950'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${
                    item.highlight ? 'text-lilac/90' : 'text-plum-900/75'
                  }`}
                >
                  {item.description}
                </p>

                <div
                  className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                    item.highlight
                      ? 'border-plum-700 text-lilac'
                      : 'border-plum-100 text-plum-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-accent" />
                    <span>Venue: <strong>{item.venue}</strong> (To be confirmed)</span>
                  </div>
                  <span className="text-[11px] font-medium text-orange-accent">
                    {activeDay} Phase
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Venue Information Preview */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-plum-50 border border-plum-200/80 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-accent uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Host Institution & Location</span>
              </div>
              <h3 className="font-poppins font-black text-2xl text-plum-950">
                XIM University Campus
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-plum-800/80 max-w-xl">
                Plot No. 12(A), Nijigada, Kurki, Harirajpur, Bhubaneswar, Odisha 752050. Featuring state-of-the-art air-conditioned auditoriums, high-tech computer labs, expansive open-air amphitheatres, and parking grounds.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-plum-200 shadow-sm shrink-0 text-center">
              <div className="text-xs font-semibold text-plum-600">Visitor Passes & Logistics</div>
              <div className="font-poppins font-bold text-sm text-plum-900 mt-1">To Be Announced</div>
              <p className="text-[10px] text-plum-500 mt-0.5">Guidelines for external delegates</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
