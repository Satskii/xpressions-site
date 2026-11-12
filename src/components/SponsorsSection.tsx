import React, { useState } from 'react';
import { Award, Briefcase, Mail, Phone, ExternalLink, Sparkles, CheckCircle2, Maximize2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';
import { SPONSOR_TIERS, FESTIVAL_INFO } from '../data/festivalData';

interface SponsorsSectionProps {
  onOpenInterestModal?: (category?: string, role?: string) => void;
  onOpenLightbox?: (url: string, caption: string) => void;
}

export const SponsorsSection: React.FC<SponsorsSectionProps> = ({
  onOpenInterestModal,
  onOpenLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<'tiers' | 'wall'>('tiers');

  const sponsorWallUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80";

  return (
    <section id="sponsors" className="py-16 sm:py-24 bg-plum-950 text-white relative w-full overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-orange-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 rounded-full bg-plum-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/90 text-orange-accent text-xs font-semibold mb-3 border border-plum-750">
              <Award className="w-3.5 h-3.5" />
              <span>Partnerships & Alliances</span>
            </div>
            <h2 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              Sponsors &amp; Partners
            </h2>
            <p className="mt-3 font-inter text-xs sm:text-base text-lilac/80 max-w-xl mx-auto leading-relaxed">
              We are proud to collaborate with industry giants, innovative startups, and media powerhouses who empower student leadership and celebrate cultural dynamism.
            </p>

            {/* Toggle Switch */}
            <div className="mt-6 inline-flex p-1 rounded-2xl bg-plum-900 border border-plum-800">
              <button
                onClick={() => setActiveTab('tiers')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                  activeTab === 'tiers'
                    ? 'bg-orange-accent text-plum-950 shadow-md'
                    : 'text-lilac/70 hover:text-white'
                }`}
              >
                Partner Categories &amp; Tiers
              </button>
              <button
                onClick={() => setActiveTab('wall')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                  activeTab === 'wall'
                    ? 'bg-orange-accent text-plum-950 shadow-md'
                    : 'text-lilac/70 hover:text-white'
                }`}
              >
                Official Sponsor Wall
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Content based on Active Tab */}
        {activeTab === 'wall' ? (
          <ScrollReveal direction="blur-up" duration={700}>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative rounded-3xl overflow-hidden border-2 border-plum-700 bg-plum-900 shadow-2xl group">
                <div className="bg-plum-900/90 px-6 py-3 border-b border-plum-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-accent animate-ping" />
                    <span className="font-bold uppercase tracking-wider text-white">
                      Official Partner Wall · Xpressions 2027
                    </span>
                  </div>
                  {onOpenLightbox && (
                    <button
                      onClick={() => onOpenLightbox(sponsorWallUrl, 'Xpressions Official Sponsors & Partners Wall')}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-plum-800 hover:bg-orange-accent hover:text-plum-950 text-white text-xs font-poppins font-semibold transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand Wall</span>
                    </button>
                  )}
                </div>

                <div className="relative cursor-pointer" onClick={() => onOpenLightbox?.(sponsorWallUrl, 'Xpressions Official Sponsors & Partners Wall')}>
                  <img
                    src={sponsorWallUrl}
                    alt="Xpressions Official Partners Wall"
                    className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-transparent to-transparent flex items-end p-6 sm:p-8">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-orange-accent/90 text-plum-950 font-poppins font-black text-xs uppercase tracking-wider">
                        Documented Partner Legacy
                      </span>
                      <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white mt-2">
                        Trusted by 100+ Leading Brands Across Two Decades
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="space-y-10 sm:space-y-12 mb-16">
            {SPONSOR_TIERS.map((tier, idx) => (
              <ScrollReveal key={idx} direction="blur-up" delay={idx * 100} duration={700}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: tier.badgeColor }}
                    />
                    <h3 className="font-poppins font-black text-lg sm:text-2xl text-white tracking-wide uppercase">
                      {tier.tierName}
                    </h3>
                    <span className="text-xs text-lilac/70 font-mono hidden sm:inline">
                      — {tier.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {tier.sponsors.map((sponsor, sIdx) => (
                      <SpotlightCard
                        key={sIdx}
                        className="p-5 sm:p-6 rounded-2xl bg-plum-900/60 border border-plum-800 hover:border-plum-700 hover:bg-plum-900/90 transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-accent font-semibold">
                              {sponsor.category}
                            </span>
                            <Sparkles className="w-3.5 h-3.5 text-lilac/50 group-hover:text-orange-accent transition-colors" />
                          </div>
                          <h4 className="font-poppins font-bold text-lg sm:text-xl text-white group-hover:text-orange-accent transition-colors">
                            {sponsor.name}
                          </h4>
                          {sponsor.description && (
                            <p className="text-xs text-lilac/80 mt-1.5 leading-relaxed">
                              {sponsor.description}
                            </p>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-plum-800/60 flex items-center justify-between text-[11px] text-lilac/60">
                          <span>Official Partner</span>
                          <span className="font-mono text-orange-accent/80 font-semibold">Xpressions &apos;27</span>
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Corporate Sponsorship Call-to-Action Card */}
        <ScrollReveal direction="blur-up" delay={200} duration={700}>
          <div className="rounded-3xl bg-gradient-to-r from-plum-900 via-plum-850 to-plum-900 border-2 border-plum-700 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Corporate Alliances Desk · 2027 Edition</span>
                </div>
                <h3 className="font-poppins font-black text-2xl sm:text-4xl text-white tracking-tight">
                  Partner with Eastern India&apos;s Grandest Stage
                </h3>
                <p className="text-xs sm:text-base text-lilac/90 leading-relaxed max-w-2xl">
                  Connect your brand directly with 40,000+ top-tier B-school delegates, undergraduate leaders, and high-energy youth demographics. Tailored deliverables include naming rights, stage branding, experiential sampling booths, and digital engagement.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-orange-accent shrink-0" />
                    <span>40,000+ Footfall Reach</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-orange-accent shrink-0" />
                    <span>50+ Top Tier Colleges</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-orange-accent shrink-0" />
                    <span>Multi-Platform Visibility</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={() => onOpenInterestModal?.('Corporate Sponsorship & Partnerships', 'Corporate Partner')}
                  className="w-full py-4 px-6 rounded-2xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-black text-xs sm:text-sm uppercase tracking-wider shadow-glow-orange flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Request Sponsorship Deck</span>
                </button>

                <a
                  href={`mailto:${FESTIVAL_INFO.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Xpressions%202027`}
                  className="w-full py-3 px-6 rounded-2xl bg-plum-800 hover:bg-plum-750 text-white font-poppins font-semibold text-xs sm:text-sm border border-plum-700/80 flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-accent" />
                  <span>{FESTIVAL_INFO.contactEmail}</span>
                </a>

                <a
                  href={`tel:${FESTIVAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-6 rounded-2xl bg-plum-950/80 hover:bg-plum-900 text-lilac font-mono text-xs border border-plum-800/80 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-accent" />
                  <span>{FESTIVAL_INFO.formattedPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
