import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/festivalData';
import { ScrollReveal } from './ScrollReveal';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Competitions', 'Performances', 'Schedule & Venue', 'Registration'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-12 sm:py-20 bg-plum-50/40 dark:bg-plum-950 relative w-full overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100/80 dark:bg-plum-900 border border-plum-200/80 dark:border-plum-800 text-plum-800 dark:text-lilac text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-orange-accent" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-plum-950 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-plum-900/70 dark:text-lilac/70 max-w-xl mx-auto leading-relaxed">
              Everything prospective competitors, performers, and visitors need to know about participating in Xpressions.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-sm scale-105'
                  : 'bg-white dark:bg-plum-900 text-plum-800 dark:text-lilac border border-plum-200/80 dark:border-plum-800 hover:bg-plum-100 dark:hover:bg-plum-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} direction="blur-up" delay={(idx % 6) * 60} duration={550}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white dark:bg-plum-900 border-plum-400/80 dark:border-orange-accent/50 shadow-md ring-1 ring-plum-200/60 dark:ring-plum-800'
                      : 'bg-white/90 dark:bg-plum-900/60 border-plum-200/70 dark:border-plum-800/70 hover:border-plum-300 dark:hover:border-plum-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-6 text-left flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-800 dark:focus-visible:ring-orange-accent"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-orange-accent shrink-0" />
                      <span className="font-poppins font-bold text-xs sm:text-base text-plum-950 dark:text-white truncate sm:whitespace-normal">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-plum-600 dark:text-plum-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-orange-accent' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-plum-900/80 dark:text-lilac/80 leading-relaxed border-t border-plum-50 dark:border-plum-800 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions card */}
        <ScrollReveal direction="blur-up" delay={200} duration={700}>
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-plum-900/80 border border-plum-200/80 dark:border-plum-800 shadow-md text-center max-w-xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-plum-50 dark:bg-plum-800 text-orange-accent flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-lg sm:text-xl text-plum-950 dark:text-white">
              Still have questions?
            </h3>
            <p className="text-xs sm:text-sm text-plum-700 dark:text-lilac/80 mt-1.5 max-w-md leading-relaxed">
              Our Student Executive Council desks are ready to assist you regarding registrations, campus stay, and corporate partnerships.
            </p>
            <button
              onClick={onContactClick}
              className="mt-5 px-6 py-2.5 rounded-full bg-plum-800 dark:bg-orange-accent hover:bg-plum-900 dark:hover:bg-orange-hover text-white dark:text-plum-950 font-poppins font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              Contact the Council
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
