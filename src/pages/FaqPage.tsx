import React from 'react';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { HelpCircle } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const FaqPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-white w-full max-w-full overflow-hidden">
      {/* Page Header */}
      <div className="bg-plum-950 text-white py-12 sm:py-16 border-b border-plum-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/60">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Assistance & Inquiries</span>
            </div>
            <h1 className="font-poppins font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Frequently Asked Questions & Contact
            </h1>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-lilac/90 max-w-xl mx-auto leading-relaxed">
              Everything competitors, performers, and visitors need to know. Direct channels to the Student Executive Council.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Accordion FAQ Component */}
      <FaqSection onContactClick={() => {
        const el = document.getElementById('contact-directory');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Verified Contact Directory Component */}
      <div id="contact-directory" className="border-t border-plum-200/80">
        <ContactSection />
      </div>
    </div>
  );
};
