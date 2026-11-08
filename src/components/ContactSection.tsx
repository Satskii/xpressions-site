import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Youtube, ExternalLink, ShieldCheck } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-800 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-orange-accent" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
            Official Contact Directory
          </h2>
          <p className="mt-3 font-inter text-base sm:text-lg text-plum-900/70">
            Reach out to the Student Executive Council (SEC) and X-Stec for partnerships, corporate sponsorships, and event-specific queries.
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* General Inquiries */}
          <div className="p-8 rounded-3xl bg-plum-50/70 border border-plum-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-plum-800 text-orange-accent flex items-center justify-center mb-6 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-plum-950 mb-2">
                Festival Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-plum-800/80 mb-6 leading-relaxed">
                General queries regarding registration, participation certificates, event formats, and campus access.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-plum-200 text-xs">
              <div>
                <span className="text-plum-600 font-semibold block">Email Desk:</span>
                <a href={`mailto:${FESTIVAL_INFO.contactEmail}`} className="font-bold text-plum-950 hover:text-orange-accent transition-colors">
                  {FESTIVAL_INFO.contactEmail}
                </a>
              </div>
              <div>
                <span className="text-plum-600 font-semibold block">Council Desk:</span>
                <a href={`mailto:${FESTIVAL_INFO.secEmail}`} className="font-bold text-plum-950 hover:text-orange-accent transition-colors">
                  {FESTIVAL_INFO.secEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Institutional Location */}
          <div className="p-8 rounded-3xl bg-plum-50/70 border border-plum-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-plum-800 text-orange-accent flex items-center justify-center mb-6 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-plum-950 mb-2">
                Campus Location
              </h3>
              <p className="text-xs sm:text-sm text-plum-800/80 mb-6 leading-relaxed">
                Hosted at XIM University's state-of-the-art academic and cultural hub in Bhubaneswar, Odisha.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-plum-200 text-xs">
              <div>
                <span className="text-plum-600 font-semibold block">Postal Address:</span>
                <p className="font-medium text-plum-950 leading-snug">
                  {FESTIVAL_INFO.address}
                </p>
              </div>
              <div className="pt-1">
                <a 
                  href="https://maps.google.com/?q=XIM+University+New+Campus+Kurki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-orange-accent hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Verified Social Media Channels */}
          <div className="p-8 rounded-3xl bg-plum-50/70 border border-plum-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-plum-800 text-orange-accent flex items-center justify-center mb-6 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-plum-950 mb-2">
                Official Channels
              </h3>
              <p className="text-xs sm:text-sm text-plum-800/80 mb-6 leading-relaxed">
                Follow our official verified social feeds for lineup drops, rulebook releases, and behind-the-scenes content.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-plum-200">
              <a
                href={FESTIVAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-plum-200 hover:border-orange-accent text-plum-950 text-xs font-semibold transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-orange-accent" />
                  <span>Instagram @ximxpressions</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-plum-400" />
              </a>

              <a
                href={FESTIVAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-plum-200 hover:border-orange-accent text-plum-950 text-xs font-semibold transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-orange-accent" />
                  <span>LinkedIn · XIM University</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-plum-400" />
              </a>

              <a
                href={FESTIVAL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-plum-200 hover:border-orange-accent text-plum-950 text-xs font-semibold transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-orange-accent" />
                  <span>YouTube Official</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-plum-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
