import React from 'react';
import { Briefcase, Music2, Users2, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';
import { EventCategory } from '../types/festival';

interface FourCategoriesProps {
  onSelectCategory: (category: EventCategory | 'All') => void;
}

export const FourCategories: React.FC<FourCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'Business' as EventCategory,
      pillar: 'COMPETE',
      title: 'Business & Management',
      subtitle: 'Where strategy meets execution',
      description: 'National case competitions, real-time equity trading, corporate restructuring, and venture pitching. Test your skills on real business dilemmas and build CV-defining credentials.',
      examples: 'Maven · Trade Wars · Jack of All Trades',
      icon: Briefcase,
      badgeColor: 'bg-plum-800 text-white',
      accentColor: 'text-orange-accent',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Culture' as EventCategory,
      pillar: 'PERFORM',
      title: 'Culture & Creative Arts',
      subtitle: 'Where passion takes the spotlight',
      description: 'Battle of the bands, western & classical dance showdowns, street theatre (nukkad natak), fashion runway, vocal competitions, and creative arts. A grand stage for every artistic voice.',
      examples: 'Decibelz · Thirkan · Carnival de Vogue · Goonj',
      icon: Music2,
      badgeColor: 'bg-plum-800 text-white',
      accentColor: 'text-orange-accent',
      image: '/images/real_fest/carnival_de_vogue_stage.jpg',
    },
    {
      id: 'Campus' as EventCategory,
      pillar: 'CONNECT',
      title: 'Campus Life & Sports',
      subtitle: 'Where community builds memories',
      description: 'High-energy campus community challenges, the annual XAthon marathon, interactive games, cultural exhibitions, and vibrant student-led campus festivals.',
      examples: 'XAthon · Informal Arenas · Campus Conclaves',
      icon: Users2,
      badgeColor: 'bg-plum-800 text-white',
      accentColor: 'text-orange-accent',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Social Impact' as EventCategory,
      pillar: 'CONNECT & IMPACT',
      title: 'Social Impact & Inclusion',
      subtitle: 'Where empathy inspires change',
      description: 'Flagship community initiatives including X-Enable for specially-abled children, Vriddhi rural entrepreneurship challenge, and sustainable community development programs.',
      examples: 'X-Enable · Vriddhi Rural Innovation Challenge',
      icon: HeartHandshake,
      badgeColor: 'bg-plum-800 text-white',
      accentColor: 'text-orange-accent',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="categories" className="py-20 bg-plum-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100 text-plum-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-accent" />
            <span>The Four Experiences</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
            Explore by Experience
          </h2>
          <p className="mt-3 font-inter text-base sm:text-lg text-plum-900/70">
            Whether you want to solve boardroom cases, command the concert stage, or drive community impact, Xpressions has an arena tailored for you.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative rounded-3xl bg-white border border-plum-100/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Image Cover with Gradient */}
                <div className="relative h-48 w-full overflow-hidden bg-plum-900">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/40 to-transparent" />
                  
                  {/* Pillar Pill Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-plum-900/90 backdrop-blur-md text-orange-accent font-poppins font-bold text-[11px] tracking-wider uppercase border border-plum-700/80">
                      {cat.pillar}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-orange-accent text-plum-950 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-plum-950 group-hover:text-plum-800 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-accent mt-0.5">
                      {cat.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-plum-900/70 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-plum-100 flex flex-col gap-3">
                    <div className="text-[11px] text-plum-600 font-medium">
                      <span className="font-semibold text-plum-800">Flagships:</span> {cat.examples}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-plum-800 group-hover:text-orange-accent transition-colors">
                      <span>Explore {cat.title.split(' ')[0]} Events</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
