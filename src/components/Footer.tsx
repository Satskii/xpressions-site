import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Youtube, Mail, MapPin, Shield } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface FooterProps {
  onOpenInterestModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInterestModal }) => {
  return (
    <footer className="bg-plum-950 text-white border-t border-plum-800/80 pt-16 pb-24 lg:pb-12 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-plum-850">
          
          {/* Brand & Attribution (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-xl bg-orange-accent flex items-center justify-center font-poppins font-black text-2xl text-plum-950 shadow-md">
                X
              </div>
              <div>
                <span className="font-poppins font-black text-2xl text-white tracking-wide block">
                  XPRESSIONS
                </span>
                <span className="text-xs text-orange-accent font-semibold tracking-wider uppercase">
                  {FESTIVAL_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-lilac-muted max-w-sm leading-relaxed">
              The flagship annual management-cultural festival of <strong>XIM University, Bhubaneswar</strong>. Organised by students through <strong>X-Stec</strong> and the <strong>Student Executive Council (SEC)</strong>.
            </p>

            <div className="pt-2 text-xs text-lilac/70 space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-accent shrink-0 mt-0.5" />
                <span>Harirajpur, Jatni, Bhubaneswar, Odisha 752050</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-accent shrink-0" />
                <a href={`mailto:${FESTIVAL_INFO.contactEmail}`} className="hover:text-orange-accent">
                  {FESTIVAL_INFO.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-poppins font-bold text-sm text-white tracking-wider uppercase">
              Festival Pages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-lilac">
              <li>
                <Link to="/" className="hover:text-orange-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-orange-accent transition-colors">
                  Events Directory
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-orange-accent transition-colors">
                  Schedule & Venue
                </Link>
              </li>
              <li>
                <Link to="/pro-nights" className="hover:text-orange-accent transition-colors">
                  Celebrity Pro Nights
                </Link>
              </li>
              <li>
                <Link to="/past-editions" className="hover:text-orange-accent transition-colors">
                  Past Editions (2016–2025)
                </Link>
              </li>
            </ul>
          </div>

          {/* Participation Pathways (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-poppins font-bold text-sm text-white tracking-wider uppercase">
              Audience Routes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-lilac">
              <li>
                <Link to="/events?cat=Business" className="hover:text-orange-accent transition-colors">
                  Business Competitions
                </Link>
              </li>
              <li>
                <Link to="/events?cat=Culture" className="hover:text-orange-accent transition-colors">
                  Cultural Contests
                </Link>
              </li>
              <li>
                <Link to="/events?cat=Social%20Impact" className="hover:text-orange-accent transition-colors">
                  Social Impact (X-Enable)
                </Link>
              </li>
              <li>
                <Link to="/participate" className="hover:text-orange-accent transition-colors">
                  How to Participate
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-orange-accent transition-colors">
                  FAQs & Support
                </Link>
              </li>
              <li>
                <button onClick={onOpenInterestModal} className="text-orange-accent font-semibold hover:underline">
                  Register Interest Form →
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Institutional Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-poppins font-bold text-sm text-white tracking-wider uppercase">
              Follow Xpressions
            </h4>
            <p className="text-xs text-lilac-muted leading-relaxed">
              Follow our official verified social channels for immediate artist drops, schedule publishing, and live festival updates.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={FESTIVAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-plum-850 hover:bg-orange-accent hover:text-plum-950 text-lilac flex items-center justify-center transition-colors border border-plum-700"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={FESTIVAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-plum-850 hover:bg-orange-accent hover:text-plum-950 text-lilac flex items-center justify-center transition-colors border border-plum-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={FESTIVAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-plum-850 hover:bg-orange-accent hover:text-plum-950 text-lilac flex items-center justify-center transition-colors border border-plum-700"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={FESTIVAL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-plum-850 hover:bg-orange-accent hover:text-plum-950 text-lilac flex items-center justify-center transition-colors border border-plum-700"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-lilac/80 bg-plum-900 px-3 py-1.5 rounded-lg border border-plum-700">
                <Shield className="w-3.5 h-3.5 text-orange-accent" />
                <span>Verified Official Festival Portal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Editorial Standards & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-lilac/70">
          <div className="text-center md:text-left leading-relaxed">
            <p>© {new Date().getFullYear()} Xpressions · XIM University, Bhubaneswar. All rights reserved.</p>
            <p className="text-[11px] text-lilac/50 mt-0.5">
              Strict Editorial Standard: Historical editions are clearly labelled by year (2016–2025). Upcoming dates, schedule and lineup remain tentative until released by X-Stec.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link to="/faqs" className="hover:text-white">
              Rules & Guidelines
            </Link>
            <span>·</span>
            <Link to="/faqs#contact" className="hover:text-white">
              Student Council
            </Link>
            <span>·</span>
            <button onClick={onOpenInterestModal} className="text-orange-accent hover:underline">
              Interest Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
