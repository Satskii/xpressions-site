import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Trophy } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { useGamification } from '../context/GamificationContext';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarProps {
  onOpenInterestModal: (preselectedEvent?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { xp, rank } = useGamification();

  const handleXpClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('festival-quest');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('festival-quest');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/schedule', label: 'Schedule' },
    { to: '/pro-nights', label: 'Pro Nights' },
    { to: '/past-editions', label: 'Past Editions' },
    { to: '/sponsors', label: 'Sponsors' },
    { to: '/participate', label: 'Participate' },
    { to: '/faqs', label: 'FAQs & Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-plum-950/90 backdrop-blur-xl shadow-lg shadow-plum-950/25 py-2.5 border-b border-plum-800/50'
            : 'bg-gradient-to-b from-plum-950/90 via-plum-900/60 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo & Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-accent rounded-lg p-0.5"
              aria-label="Xpressions Festival Home"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-accent to-plum-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
                <span className="font-poppins font-black text-xl sm:text-2xl text-white tracking-tighter">
                  X
                </span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-poppins font-extrabold text-base sm:text-xl text-white tracking-wide truncate">
                    XPRESSIONS
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold bg-plum-800/90 text-orange-accent px-1.5 py-0.5 rounded border border-plum-700/80 shrink-0">
                    2027
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-lilac/80 font-medium tracking-wide truncate">
                  XIMB · Bhubaneswar
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-accent ${
                      isActive
                        ? 'bg-plum-800 text-orange-accent shadow-inner border border-plum-700/80 font-semibold'
                        : 'text-lilac hover:text-white hover:bg-plum-850/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Primary Action Button (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <ThemeSwitcher />

              <button
                onClick={handleXpClick}
                title={`Rank: ${rank} — Click to view Festival Quest Pass`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-plum-900/90 hover:bg-plum-800 border border-orange-accent/40 text-orange-accent font-poppins font-bold text-xs transition-all hover:scale-105"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>{xp} XP</span>
              </button>
              <button
                onClick={() => onOpenInterestModal()}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs xl:text-sm shadow-glow-orange hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Controls (Theme Switcher + XP Badge + Hamburger) */}
            <div className="flex items-center gap-1.5 lg:hidden shrink-0">
              <ThemeSwitcher />

              <button
                onClick={handleXpClick}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-plum-900/90 border border-orange-accent/40 text-orange-accent font-poppins font-bold text-[11px]"
                aria-label="Open Challenger Pass"
              >
                <Trophy className="w-3 h-3" />
                <span>{xp}</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-lilac hover:text-white hover:bg-plum-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-accent transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-plum-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-plum-900 border-l border-plum-700 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-plum-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-accent flex items-center justify-center font-poppins font-black text-plum-950 text-lg">
                    X
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-white text-base">XPRESSIONS &apos;27</h2>
                    <p className="text-[10px] text-lilac">XIMB · Bhubaneswar</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-lilac hover:text-white hover:bg-plum-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-6 space-y-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-plum-800 text-orange-accent font-bold border border-plum-700'
                          : 'text-lilac hover:text-white hover:bg-plum-850/50'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom drawer CTA */}
            <div className="pt-6 border-t border-plum-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInterestModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-accent text-plum-950 font-poppins font-bold text-sm shadow-glow-orange hover:bg-orange-hover"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-lilac/70">
                {FESTIVAL_INFO.tagline}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
