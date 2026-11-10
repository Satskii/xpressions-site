import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

export const StatsBar: React.FC = () => {
  const telemetryData = [
    {
      index: "01",
      category: "AUDIENCE REACH",
      value: "30,000+",
      label: "Footfall & Attendees",
      subtext: "Pan-India college delegations & visitors"
    },
    {
      index: "02",
      category: "COMPETITION PURSE",
      value: "₹15,00,000+",
      label: "Prizes & Rewards",
      subtext: "Cash pools across case & cultural cups"
    },
    {
      index: "03",
      category: "CHAMPIONSHIP ARENAS",
      value: "25+ Arenas",
      label: "National Events",
      subtext: "Business simulations, rock bands & runway"
    },
    {
      index: "04",
      category: "HERITAGE & LEGACY",
      value: "27+ Years",
      label: "Established 1998",
      subtext: "Student-led by X-Stec & SEC at XIM University"
    }
  ];

  return (
    <section className="bg-plum-950 text-white border-y border-plum-850/80 relative z-20 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="blur-up" duration={650}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {telemetryData.map((item, idx) => (
              <SpotlightCard
                key={idx}
                className="relative p-4 sm:p-5 rounded-2xl bg-plum-900/50 border border-plum-800/80 hover:border-orange-accent/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Metric Pillar Tag */}
                <div className="flex items-center justify-between mb-3 text-[11px] font-poppins font-semibold text-lilac/80">
                  <span className="w-5 h-5 rounded-full bg-orange-accent/15 text-orange-accent flex items-center justify-center font-bold text-[10px]">
                    {item.index}
                  </span>
                  <span className="uppercase tracking-wider truncate ml-2 text-[10px] text-lilac/70">{item.category}</span>
                </div>

                {/* Big Bold Headline Number */}
                <div>
                  <div className="font-poppins font-black text-xl min-[400px]:text-2xl sm:text-3xl text-white tracking-tight group-hover:text-orange-accent transition-colors">
                    {item.value}
                  </div>
                  <div className="font-poppins font-bold text-xs sm:text-sm text-lilac mt-0.5 truncate">
                    {item.label}
                  </div>
                </div>

                {/* Subtext */}
                <div className="mt-3 pt-2.5 border-t border-plum-800/60 text-[10px] sm:text-[11px] text-lilac/60 font-inter line-clamp-1">
                  {item.subtext}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
