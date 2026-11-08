import React from 'react';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { HelpCircle, Mail, Sparkles } from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-plum-950 text-white py-14 border-b border-plum-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Assistance & Inquiries</span>
          </div>
          <h1 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Frequently Asked Questions & Contact
          </h1>
          <p className="mt-3 font-inter text-base sm:text-lg text-lilac max-w-2xl mx-auto leading-relaxed">
            Everything competitors, performers, and visitors need to know. Direct channels to the Student Executive Council.
          </p>
        </div>
      </div>

      {/* Accordion FAQ Component */}
      <FaqSection onContactClick={() => {
        const el = document.getElementById('contact-directory');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Verified Contact Directory Component */}
      <div id="contact-directory" className="border-t border-plum-200">
        <ContactSection />
      </div>
    </div>
  );
};
