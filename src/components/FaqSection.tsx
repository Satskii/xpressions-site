import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/festivalData';

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
    <section id="faqs" className="py-20 bg-plum-50/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100 text-plum-800 text-xs font-semibold mb-3 border border-plum-200">
            <HelpCircle className="w-3.5 h-3.5 text-orange-accent" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 font-inter text-base sm:text-lg text-plum-900/70">
            Everything prospective competitors, performers, and visitors need to know about participating in Xpressions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-plum-800 text-white shadow-sm'
                  : 'bg-white text-plum-800 border border-plum-200 hover:bg-plum-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-plum-400 shadow-md ring-1 ring-plum-200'
                    : 'bg-white/80 border-plum-200/80 hover:border-plum-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-800"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-accent shrink-0" />
                    <span className="font-poppins font-bold text-sm sm:text-base text-plum-950">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-plum-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-accent' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-plum-900/80 leading-relaxed border-t border-plum-50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-plum-200 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-plum-100 text-plum-900 shrink-0">
              <MessageCircle className="w-5 h-5 text-orange-accent" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm text-plum-950">
                Still have an unresolved question?
              </h4>
              <p className="text-xs text-plum-700">
                The student steering committee is available to address queries regarding rules and accommodations.
              </p>
            </div>
          </div>

          <button
            onClick={onContactClick}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white font-poppins font-semibold text-xs transition-colors"
          >
            Contact Organisers
          </button>
        </div>

      </div>
    </section>
  );
};
