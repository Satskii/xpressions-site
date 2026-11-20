import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  Trophy,
  ChevronDown,
  Sparkles,
  Layers,
  Award,
  UserCheck,
  HelpCircle,
  Activity,
} from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { useGamification } from '../context/GamificationContext';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarProps {
  onOpenInterestModal: (preselectedEvent?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  
  const moreDropdownRef = useRef<HTMLDivElement>(null);
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

  // Close mobile drawer and dropdown whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close "More" dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary top-level links for clean desktop navbar
  const primaryNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/schedule', label: 'Schedule' },
    { to: '/pro-nights', label: 'Pro Nights' },
    { to: '/campaign', label: 'Campaign' },
  ];

  // Secondary links cleanly grouped into "More ▾" dropdown
  const moreNavLinks = [
    {
      to: '/participate',
      label: 'How to Participate',
      desc: 'Delegate pathways & passes',
      icon: UserCheck,
    },
    {
      to: '/past-editions',
      label: 'Past Editions Archive',
      desc: '2016–2025 Headliners & Aftermovies',
      icon: Layers,
    },
    {
      to: '/sponsors',
      label: 'Sponsors & Alliances',
      desc: 'Corporate partners & tiers',
      icon: Award,
    },
    {
      to: '/faqs',
      label: 'FAQs & Support',
      desc: 'Helpdesk, rules & contact',
      icon: HelpCircle,
    },
  ];

  // Full list of all links for mobile drawer
  const allMobileLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events Directory' },
    { to: '/schedule', label: 'Schedule & Logistics' },
    { to: '/pro-nights', label: 'Celebrity Pro Nights' },
    { to: '/campaign', label: 'Campaign & Analytics' },
    { to: '/participate', label: 'How to Participate' },
    { to: '/past-editions', label: 'Past Editions (2016–2025)' },
    { to: '/sponsors', label: 'Sponsors & Alliances' },
    { to: '/faqs', label: 'FAQs & Contact' },
  ];

  const isMoreActive = moreNavLinks.some((link) => location.pathname === link.to);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-plum-950/92 backdrop-blur-xl shadow-lg shadow-plum-950/25 py-2.5 border-b border-plum-800/60'
            : 'bg-gradient-to-b from-plum-950/95 via-plum-900/60 to-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Wordmark (Never Shrinks) */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-accent rounded-lg p-0.5 shrink-0"
              aria-label="Xpressions Festival Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-orange-accent to-plum-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
                <span className="font-poppins font-black text-lg sm:text-xl text-white tracking-tighter">
                  X
                </span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-poppins font-extrabold text-sm sm:text-lg text-white tracking-wide truncate">
                    XPRESSIONS
                  </span>
                  <span className="text-[9px] font-bold bg-plum-800/90 text-orange-accent px-1.5 py-0.2 rounded border border-plum-700/80 shrink-0">
                    2027
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] text-lilac/80 font-medium tracking-wide truncate">
                  XIMB · Bhubaneswar
                </p>
              </div>
            </Link>

            {/* Streamlined Desktop Navigation Links (De-cluttered & Compact) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {primaryNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-accent whitespace-nowrap ${
                      isActive
                        ? 'bg-plum-800 text-orange-accent shadow-inner border border-plum-700/80 font-semibold'
                        : 'text-lilac hover:text-white hover:bg-plum-850/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Sleek "More ▾" Dropdown for Secondary Links */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 focus:outline-none ${
                    isMoreActive
                      ? 'bg-plum-800 text-orange-accent shadow-inner border border-plum-700/80 font-semibold'
                      : 'text-lilac hover:text-white hover:bg-plum-850/60'
                  }`}
                  aria-expanded={moreDropdownOpen}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Floating "More" Popup Menu */}
                {moreDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 sm:w-72 rounded-2xl bg-plum-900/95 border border-plum-750 backdrop-blur-2xl p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-lilac/70 uppercase tracking-wider border-b border-plum-800 mb-1">
                      Festival Navigation
                    </div>

                    <div className="space-y-1">
                      {moreNavLinks.map((item) => {
                        const Icon = item.icon;
                        const isCurrent = location.pathname === item.to;
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setMoreDropdownOpen(false)}
                            className={`flex items-start gap-2.5 p-2 rounded-xl transition-colors ${
                              isCurrent
                                ? 'bg-plum-800 text-orange-accent'
                                : 'text-lilac hover:text-white hover:bg-plum-850/80'
                            }`}
                          >
                            <div className="p-1.5 rounded-lg bg-plum-800/80 text-orange-accent shrink-0 mt-0.5">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="font-poppins font-bold text-xs text-white">
                                {item.label}
                              </div>
                              <div className="text-[10px] text-lilac/70">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Primary Action Button Cluster (Right Side, Guaranteed No Overflow) */}
            <div className="hidden sm:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
              {/* Compact Theme Switcher */}
              <ThemeSwitcher />

              {/* Compact Gamified XP Badge */}
              <button
                onClick={handleXpClick}
                title={`Rank: ${rank} — Click to inspect Festival Quest Pass`}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-plum-900/90 hover:bg-plum-800 border border-orange-accent/40 text-orange-accent font-poppins font-bold text-xs transition-all hover:scale-105 shrink-0"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span className="font-mono">{xp} XP</span>
              </button>

              {/* High-Impact Punchy CTA */}
              <button
                onClick={() => onOpenInterestModal()}
                className="relative inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-glow-orange hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Register</span>
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
                className="p-1.5 rounded-xl text-lilac hover:text-white hover:bg-plum-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-accent transition-colors"
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
              <nav className="mt-6 space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
                {allMobileLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
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
