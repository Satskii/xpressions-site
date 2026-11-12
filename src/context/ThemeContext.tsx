import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 
  | 'cyber-velocity' 
  | 'neon-synthwave' 
  | 'matrix-emerald' 
  | 'crimson-inferno' 
  | 'royal-amber';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  primaryColor: string;
  canvasColor: string;
  textColor: string;
  badge: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'cyber-velocity',
    name: 'Cyber Velocity',
    tagline: 'Carbon Noir & Solar Flame',
    primaryColor: '#FF6B00',
    canvasColor: '#090A0F',
    textColor: '#DDE4F0',
    badge: '⚡ Lando Velocity',
    description: 'High-octane aerodynamic telemetry aesthetic with pure carbon obsidian and high-voltage solar orange.',
  },
  {
    id: 'neon-synthwave',
    name: 'Neon Synthwave',
    tagline: 'Midnight Abyss & Electric Magenta',
    primaryColor: '#FF2A6D',
    canvasColor: '#070714',
    textColor: '#E9D5FF',
    badge: '🔮 Velvet Neon',
    description: 'Electrifying festival stadium soundstage aesthetic with deep pitch midnight and ultraviolet magenta.',
  },
  {
    id: 'matrix-emerald',
    name: 'Matrix Emerald',
    tagline: 'Stealth Gunmetal & Mint Cyan',
    primaryColor: '#00F5D4',
    canvasColor: '#050909',
    textColor: '#C6F6D5',
    badge: '💎 Digital Alpha',
    description: 'Live trading floor and tech hackathon vibe with deep stealth charcoal and bioluminescent cyan mint.',
  },
  {
    id: 'crimson-inferno',
    name: 'Crimson Ignite',
    tagline: 'Pitch Onyx & Electric Red',
    primaryColor: '#F12B25',
    canvasColor: '#08080B',
    textColor: '#F4EBDD',
    badge: '🔥 Festival Flame',
    description: 'High-energy collegiate festival aesthetic inspired by roaring concert stages and champagne highlights.',
  },
  {
    id: 'royal-amber',
    name: 'Imperial Gold',
    tagline: 'Cosmic Espresso & Radiant Amber',
    primaryColor: '#FFB800',
    canvasColor: '#0A0908',
    textColor: '#FEF9C3',
    badge: '👑 Apex Crown',
    description: 'Prestigious executive B-school championship aesthetic with cosmic noir and radiant liquid gold.',
  },
];

interface ThemeContextType {
  currentTheme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  availableThemes: ThemeOption[];
  currentThemeMeta: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('xp_color_theme') as ThemeId;
      if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return 'cyber-velocity';
  });

  const setTheme = (theme: ThemeId) => {
    setCurrentThemeState(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('xp_color_theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const currentThemeMeta = THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes: THEME_OPTIONS, currentThemeMeta }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

