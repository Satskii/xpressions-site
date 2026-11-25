import React from 'react';
import { Palette, Check, Sparkles, Radio } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from './ScrollReveal';

export const ThemePlayground: React.FC = () => {
  const { currentTheme, setTheme, availableThemes, ambientFx, toggleAmbientFx, currentThemeMeta } = useTheme();

  const signatureThemes = availableThemes.filter((t) => t.isSignature);
  const studioThemes = availableThemes.filter((t) => !t.isSignature);

  return (
    <section className="py-14 sm:py-20 bg-plum-900/50 border-y border-plum-800 text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider mb-3">
                <Palette className="w-3.5 h-3.5" />
                <span>Signature Visual Character Engine · {availableThemes.length} Palettes</span>
              </div>
              <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white tracking-tight">
                Play With The Visual Dimension
              </h2>
              <p className="mt-2 font-inter text-xs sm:text-base text-lilac/80 leading-relaxed">
                Every theme adapts the entire platform&apos;s color tokens and ambient geometric texture—from Odisha&apos;s carved <strong>Konark Electric</strong> heritage to <strong>Blueprint &amp; Beat</strong> strategy grids.
              </p>
            </div>

            {/* Atmosphere Toggle Control */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={toggleAmbientFx}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-plum-950/90 hover:bg-plum-850 border border-plum-750 hover:border-orange-accent/60 transition-all text-left shadow-sm"
              >
                <Radio className={`w-4 h-4 ${ambientFx ? 'text-orange-accent animate-pulse' : 'text-lilac/50'}`} />
                <div>
                  <div className="text-[11px] font-poppins font-bold text-white">
                    Stage Atmosphere FX: <span className="text-orange-accent">{ambientFx ? 'ACTIVE' : 'MINIMAL'}</span>
                  </div>
                  <div className="text-[10px] font-mono text-lilac/70">
                    Pattern: {currentThemeMeta.atmosphereLabel}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 1: 2 Signature XIMB / Xpressions Character Themes */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-orange-accent flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unique Signature Character Editions (XIMB Exclusive)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {signatureThemes.map((theme, idx) => {
              const isSelected = currentTheme === theme.id;
              return (
                <ScrollReveal key={theme.id} direction="blur-up" delay={idx * 70} duration={600}>
                  <button
                    type="button"
                    onClick={() => setTheme(theme.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between h-full border group relative overflow-hidden ${
                      isSelected
                        ? 'bg-plum-800/95 border-orange-accent shadow-glow-orange ring-2 ring-orange-accent/50'
                        : 'bg-plum-950/80 hover:bg-plum-850/90 border-plum-750/90 hover:border-orange-accent/50 hover:-translate-y-1'
                    }`}
                  >
                    <div
                      className="absolute -top-14 -right-14 w-36 h-36 rounded-full blur-3xl opacity-35 group-hover:opacity-65 transition-opacity pointer-events-none"
                      style={{ backgroundColor: theme.primaryColor }}
                    />

                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center -space-x-1.5">
                            <div
                              className="w-7 h-7 rounded-full border-2 border-white/25 shadow-md"
                              style={{ backgroundColor: theme.primaryColor }}
                            />
                            <div
                              className="w-6 h-6 rounded-full border-2 border-white/25 shadow-md"
                              style={{ backgroundColor: theme.canvasColor }}
                            />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/30 text-[10px] font-mono font-bold uppercase">
                            Signature Theme
                          </span>
                        </div>

                        {isSelected ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-accent text-plum-950 font-poppins font-bold text-[10px]">
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>Active</span>
                          </span>
                        ) : (
                          <span className="text-[11px] font-mono text-lilac/70 group-hover:text-white transition-colors">
                            Activate Theme →
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="font-poppins font-black text-lg sm:text-xl text-white group-hover:text-orange-accent transition-colors">
                          {theme.name} <span className="text-sm font-normal ml-1">{theme.badge}</span>
                        </h3>
                        <p className="text-xs font-semibold text-lilac mt-0.5">
                          {theme.tagline} · <span className="font-mono text-orange-accent/90">{theme.atmosphereLabel}</span>
                        </p>
                        <p className="text-xs text-lilac/75 mt-2 leading-relaxed">
                          {theme.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Row 2: 5 Classic Studio Themes Grid */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-lilac/70">
            Classic Arena Palettes
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {studioThemes.map((theme, idx) => {
              const isSelected = currentTheme === theme.id;
              return (
                <ScrollReveal key={theme.id} direction="blur-up" delay={idx * 50} duration={600}>
                  <button
                    type="button"
                    onClick={() => setTheme(theme.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between h-full border group relative overflow-hidden ${
                      isSelected
                        ? 'bg-plum-800/90 border-orange-accent shadow-glow-orange scale-[1.02] ring-2 ring-orange-accent/50'
                        : 'bg-plum-950/70 hover:bg-plum-850/80 border-plum-750/80 hover:border-plum-600 hover:-translate-y-1'
                    }`}
                  >
                    <div
                      className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none"
                      style={{ backgroundColor: theme.primaryColor }}
                    />

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

                    <div className="mt-4 pt-3 border-t border-plum-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-lilac/60 font-mono text-[10px] truncate mr-1">
                        {theme.atmosphereLabel}
                      </span>
                      <Sparkles
                        className={`w-3.5 h-3.5 shrink-0 transition-colors ${
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
      </div>
    </section>
  );
};
