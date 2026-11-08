import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Calendar, Music, Sparkles } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenInterestModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenInterestModal }) => {
  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/events', label: 'Events', icon: Trophy },
    { to: '/schedule', label: 'Schedule', icon: Calendar },
    { to: '/pro-nights', label: 'Pro Nights', icon: Music },
  ];

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-plum-950/95 border-t border-plum-800/80 backdrop-blur-lg px-3 py-2 flex items-center justify-around lg:hidden shadow-2xl"
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
                isActive
                  ? 'text-orange-accent font-bold scale-105'
                  : 'text-lilac/70 hover:text-white'
              }`
            }
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] tracking-tight">{link.label}</span>
          </NavLink>
        );
      })}

      {/* Floating Interest Action */}
      <button
        onClick={onOpenInterestModal}
        className="flex flex-col items-center justify-center py-1 px-3 rounded-xl bg-orange-accent text-plum-950 font-poppins font-bold shadow-md shadow-orange-accent/20 active:scale-95 transition-transform"
      >
        <Sparkles className="w-4 h-4 mb-0.5" />
        <span className="text-[10px] tracking-tight font-extrabold">Register</span>
      </button>
    </nav>
  );
};
