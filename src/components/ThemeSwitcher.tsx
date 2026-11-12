import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
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
        title="Customize Color Theme"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-plum-900/90 hover:bg-plum-800 border border-plum-700/80 hover:border-orange-accent text-white text-xs font-poppins font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
        aria-label="Change color theme"
      >
        <Palette className="w-3.5 h-3.5 text-orange-accent" />
        <span className="hidden md:inline">Theme</span>
        {/* Active Theme Color Dot */}
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-white/20 animate-pulse"
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
                Choose Color Palette
              </span>
            </div>
            <span className="text-[10px] text-lilac/70 font-mono">5 Styles</span>
          </div>

          <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-0.5">
            {availableThemes.map((theme) => {
              const isSelected = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group border ${
                    isSelected
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
                        <span className="text-[9px] px-1.5 py-0.2 rounded-full font-mono bg-plum-950/60 text-lilac/90 border border-plum-800 shrink-0">
                          {theme.badge.split(' ')[0]}
                        </span>
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
        </div>
      )}
    </div>
  );
};
