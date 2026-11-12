import React from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from './ScrollReveal';

export const ThemePlayground: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <section className="py-14 sm:py-20 bg-plum-900/50 border-y border-plum-800 text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>Interactive Theme Engine</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white tracking-tight">
              Play With The Visual Dimension
            </h2>
            <p className="mt-2 font-inter text-xs sm:text-base text-lilac/80 leading-relaxed">
              Customize the vibe of Xpressions across the entire platform. Switch between 5 hand-crafted palettes inspired by high-speed racing, midnight concerts, and collegiate prestige.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {availableThemes.map((theme, idx) => {
            const isSelected = currentTheme === theme.id;
            return (
              <ScrollReveal key={theme.id} direction="blur-up" delay={idx * 60} duration={600}>
                <button
                  type="button"
                  onClick={() => setTheme(theme.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between h-full border group relative overflow-hidden ${
                    isSelected
                      ? 'bg-plum-800/90 border-orange-accent shadow-glow-orange scale-[1.03] ring-2 ring-orange-accent/50'
                      : 'bg-plum-950/70 hover:bg-plum-850/80 border-plum-750/80 hover:border-plum-600 hover:-translate-y-1'
                  }`}
                >
                  {/* Subtle Accent Glow In Corner */}
                  <div
                    className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none"
                    style={{ backgroundColor: theme.primaryColor }}
                  />

                  {/* Top Swatch Pill & Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center -space-x-1.5">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white/20 shadow-md transform group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: theme.primaryColor }}
                        />
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white/20 shadow-md"
                          style={{ backgroundColor: theme.canvasColor }}
                        />
                      </div>

                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-accent text-plum-950 font-poppins font-bold text-[10px]">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                          <span>Active</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-lilac/60 group-hover:text-white transition-colors">
                          Preview
                        </span>
                      )}
                    </div>

                    <h3 className="font-poppins font-bold text-sm sm:text-base text-white group-hover:text-orange-accent transition-colors leading-tight">
                      {theme.name}
                    </h3>
                    <div className="text-[10px] font-mono font-semibold text-orange-accent mt-0.5">
                      {theme.badge}
                    </div>
                    <p className="text-[11px] text-lilac/75 mt-2 line-clamp-2 leading-relaxed">
                      {theme.tagline}
                    </p>
                  </div>

                  {/* Action Pill */}
                  <div className="mt-4 pt-3 border-t border-plum-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-lilac/60 font-mono text-[10px]">Apply Palette</span>
                    <Sparkles
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSelected ? 'text-orange-accent' : 'text-lilac/40 group-hover:text-orange-accent'
                      }`}
                    />
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

