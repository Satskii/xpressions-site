import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, Radio } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, availableThemes, ambientFx, toggleAmbientFx } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Color Theme & Atmosphere"
        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-plum-900/90 hover:bg-plum-800 border border-plum-700/80 hover:border-orange-accent text-white text-xs font-poppins font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm shrink-0"
        aria-label="Change color theme"
      >
        <Palette className="w-3.5 h-3.5 text-orange-accent" />
        <span className="hidden xl:inline">Theme</span>
        {/* Active Theme Color Dot */}
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-white/20 animate-pulse shrink-0"
          style={{ backgroundColor: 'rgb(var(--accent-primary))' }}
        />
      </button>

      {/* Floating Theme Selection Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-plum-900/95 border border-plum-750 backdrop-blur-2xl p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-plum-800 px-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-orange-accent" />
              <span className="font-poppins font-bold text-xs uppercase tracking-wider text-white">
                Festival Visual Character
              </span>
            </div>
            <span className="text-[10px] text-lilac/70 font-mono">{availableThemes.length} Styles</span>
          </div>

          <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-0.5">
            {availableThemes.map((theme) => {
              const isSelected = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group border ${isSelected
                      ? 'bg-plum-800 border-orange-accent/60 shadow-md'
                      : 'hover:bg-plum-850/80 border-transparent hover:border-plum-700'
                    }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Swatch Previews */}
                    <div className="flex items-center -space-x-1 shrink-0">
                      <div
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                      <div
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: theme.canvasColor }}
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-poppins font-bold text-xs text-white truncate">
                          {theme.name}
                        </span>
                        {theme.isSignature && (
                          <span className="text-[8px] px-1.5 py-0.2 rounded-full font-bold bg-orange-accent/20 text-orange-accent border border-orange-accent/40 shrink-0 uppercase">
                            Signature
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-lilac/70 truncate mt-0.5">
                        {theme.tagline}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-orange-accent text-plum-950 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Crash-free Stage Atmosphere FX Toggle */}
          <div className="mt-2.5 pt-2.5 border-t border-plum-800 px-1">
            <button
              type="button"
              onClick={toggleAmbientFx}
              className="w-full flex items-center justify-between p-2 rounded-xl bg-plum-950/70 hover:bg-plum-850 border border-plum-800 text-xs transition-colors"
            >
              <span className="flex items-center gap-2 text-lilac font-medium">
                <Radio className="w-3.5 h-3.5 text-orange-accent" />
                <span>Stage Atmosphere &amp; Crest FX</span>
              </span>
              <span
                className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold ${ambientFx
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-plum-800 text-lilac/60'
                  }`}
              >
                {ambientFx ? 'ON' : 'MINIMAL'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
