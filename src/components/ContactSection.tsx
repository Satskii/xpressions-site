import React from 'react';
import { Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200/80 text-plum-800 text-xs font-semibold mb-3">
              <Mail className="w-3.5 h-3.5 text-orange-accent" />
              <span>Connect & Inquire</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
              Official Contact Directory
            </h2>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-plum-900/70 max-w-xl mx-auto leading-relaxed">
              Reach out to the Student Executive Council (SEC) and X-Stec for partnerships, corporate sponsorships, and event-specific queries.
            </p>
          </div>
        </ScrollReveal>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          
          {/* General Inquiries */}
          <ScrollReveal direction="up" delay={100} duration={600}>
            <div className="p-6 sm:p-8 rounded-3xl bg-plum-50/60 border border-plum-200/80 shadow-sm flex flex-col justify-between h-full hover:border-plum-300 transition-colors">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-plum-800 text-orange-accent flex items-center justify-center mb-5 sm:mb-6 shadow-md">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-plum-950 mb-2">
                  Festival Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 mb-5 leading-relaxed">
                  General queries regarding registration, participation certificates, event formats, and campus access.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-plum-200/80 text-xs">
                <div>
                  <span className="text-plum-600 font-semibold block text-[11px]">Email Desk:</span>
                  <a href={`mailto:${FESTIVAL_INFO.contactEmail}`} className="font-bold text-plum-950 hover:text-orange-accent transition-colors break-all">
                    {FESTIVAL_INFO.contactEmail}
                  </a>
                </div>
                <div>
                  <span className="text-plum-600 font-semibold block text-[11px]">Council Desk:</span>
                  <a href={`mailto:${FESTIVAL_INFO.secEmail}`} className="font-bold text-plum-950 hover:text-orange-accent transition-colors break-all">
                    {FESTIVAL_INFO.secEmail}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Institutional Location */}
          <ScrollReveal direction="up" delay={200} duration={600}>
            <div className="p-6 sm:p-8 rounded-3xl bg-plum-50/60 border border-plum-200/80 shadow-sm flex flex-col justify-between h-full hover:border-plum-300 transition-colors">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-plum-800 text-orange-accent flex items-center justify-center mb-5 sm:mb-6 shadow-md">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-plum-950 mb-2">
                  Campus Location
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 mb-5 leading-relaxed">
                  Hosted at XIM University's state-of-the-art academic and cultural campus in Bhubaneswar, Odisha.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-plum-200/80 text-xs">
                <div>
                  <span className="text-plum-600 font-semibold block text-[11px]">Postal Address:</span>
                  <p className="font-medium text-plum-950 leading-snug">
                    {FESTIVAL_INFO.address}
                  </p>
                </div>
                <div className="pt-1">
                  <a 
                    href="https://maps.google.com/?q=XIM+University+New+Campus+Kurki" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-orange-accent hover:underline text-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Verified Social Media Channels */}
          <ScrollReveal direction="up" delay={300} duration={600}>
            <div className="p-6 sm:p-8 rounded-3xl bg-plum-50/60 border border-plum-200/80 shadow-sm flex flex-col justify-between h-full hover:border-plum-300 transition-colors">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-plum-800 text-orange-accent flex items-center justify-center mb-5 sm:mb-6 shadow-md">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-plum-950 mb-2">
                  Official Channels
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 mb-5 leading-relaxed">
                  Follow official festival updates, backstage teasers, and announcements on social channels.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-plum-200/80 text-xs">
                <a
                  href="https://instagram.com/xpressions_xim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-white border border-plum-150 hover:border-plum-300 font-medium text-plum-900 transition-colors"
                >
                  <span>Instagram @xpressions_xim</span>
                  <ExternalLink className="w-3.5 h-3.5 text-orange-accent" />
                </a>
                <a
                  href="https://linkedin.com/school/ximuniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-white border border-plum-150 hover:border-plum-300 font-medium text-plum-900 transition-colors"
                >
                  <span>LinkedIn /ximuniversity</span>
                  <ExternalLink className="w-3.5 h-3.5 text-orange-accent" />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
