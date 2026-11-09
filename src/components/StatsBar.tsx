import React from 'react';
import { Award, Users, Mic2, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: "2005 – 2026",
      label: "Documented Legacy",
      detail: "20+ years of festival heritage"
    },
    {
      icon: Users,
      value: "4 Pillars",
      label: "Experience Dimensions",
      detail: "Compete · Perform · Connect · Celebrate"
    },
    {
      icon: Mic2,
      value: "20+ Arenas",
      label: "Cases & Stages",
      detail: "National B-school & cultural events"
    },
    {
      icon: ShieldCheck,
      value: "Student-Led",
      label: "XIM University Council",
      detail: "Organised by X-Stec & SEC"
    }
  ];

  return (
    <section className="bg-plum-900 border-y border-plum-800/80 relative z-20 py-8 px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <ScrollReveal direction="up" duration={600}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-plum-850/60 border border-plum-700/40 hover:border-orange-accent/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-plum-800 text-orange-accent border border-plum-600/40 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-poppins font-black text-lg sm:text-2xl text-white tracking-tight truncate">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-lilac truncate">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-lilac-muted mt-0.5 hidden sm:block truncate">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
};
