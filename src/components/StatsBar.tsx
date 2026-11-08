import React from 'react';
import { Award, Users, Mic2, ShieldCheck } from 'lucide-react';

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
    <section className="bg-plum-900 border-y border-plum-800 relative z-20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx}
              className="flex items-start gap-4 p-4 rounded-2xl bg-plum-850/60 border border-plum-700/50 hover:border-orange-accent/40 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-plum-800 text-orange-accent border border-plum-600/40 shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-poppins font-black text-xl sm:text-2xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-lilac">
                  {stat.label}
                </div>
                <div className="text-[11px] text-lilac-muted mt-0.5 hidden sm:block">
                  {stat.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
