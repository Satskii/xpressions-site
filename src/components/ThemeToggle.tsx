import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useGamification } from '../context/GamificationContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();
  const { awardXp } = useGamification();

  const handleToggle = () => {
    toggleTheme();
    awardXp('theme_switcher', 25, 'Theme Mode Explorer!');
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-accent group ${
        isDark
          ? 'bg-plum-850 text-orange-accent hover:bg-plum-800 border border-plum-700/80 shadow-[0_0_15px_rgba(240,160,90,0.25)]'
          : 'bg-plum-100/80 text-plum-900 hover:bg-plum-200/80 border border-plum-200/90 shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5">
        <Sun
          className={`w-full h-full transform transition-all duration-500 absolute inset-0 ${
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-orange-accent'
              : '-rotate-90 scale-0 opacity-0 text-plum-800'
          }`}
        />
        <Moon
          className={`w-full h-full transform transition-all duration-500 absolute inset-0 ${
            isDark
              ? 'rotate-90 scale-0 opacity-0 text-orange-accent'
              : 'rotate-0 scale-100 opacity-100 text-plum-800'
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

