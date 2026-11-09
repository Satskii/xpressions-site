import React, { useState } from 'react';
import { Layers, AlertTriangle, Eye, Star } from 'lucide-react';
import { PAST_EDITIONS } from '../data/festivalData';
import { ScrollReveal } from './ScrollReveal';

interface PastEditionsTimelineProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const PastEditionsTimeline: React.FC<PastEditionsTimelineProps> = ({ onOpenLightbox }) => {
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const filteredEditions = selectedYear === 'All'
    ? PAST_EDITIONS
    : PAST_EDITIONS.filter((ed) => ed.year === selectedYear);

  const years = ['All', ...PAST_EDITIONS.map((ed) => ed.year)];

  return (
    <section id="past-editions" className="py-12 sm:py-20 bg-plum-50/40 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100/80 text-plum-800 text-xs font-semibold mb-3 border border-plum-200/80">
              <Layers className="w-3.5 h-3.5 text-orange-accent" />
              <span>Documented Festival Legacy</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
              Past Editions & Star Highlights
            </h2>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-plum-900/70 max-w-xl mx-auto leading-relaxed">
              A documented chronicle of India's most celebrated musical headliners, comedy icons, and management titans who have taken the Xpressions stage.
            </p>
          </div>
        </ScrollReveal>

        {/* Historical Disclaimer Banner */}
        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start sm:items-center gap-3 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-orange-accent shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="font-bold text-amber-900">Historical Archive Notice:</strong>{' '}
              All artists and performers listed in this section are documented historical highlights from previous editions (2016 – 2025).{' '}
              <span className="font-semibold text-amber-950">They do not represent the confirmed lineup for the upcoming edition.</span> The upcoming roster will be officially announced by the Student Executive Council.
            </div>
          </div>
        </ScrollReveal>

        {/* Year Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${selectedYear === year
                  ? 'bg-plum-800 text-white shadow-md scale-105'
                  : 'bg-white text-plum-800 border border-plum-200/80 hover:bg-plum-100'
                }`}
            >
              {year === 'All' ? 'All Editions' : year}
            </button>
          ))}
        </div>

        {/* Timeline Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEditions.map((edition, idx) => (
            <ScrollReveal key={edition.year} direction="up" delay={(idx % 6) * 100} duration={600}>
              <div
                className="group rounded-3xl bg-white border border-plum-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 h-full"
              >
                {/* Media Card with Click to Lightbox */}
                <div
                  className="relative h-56 sm:h-60 w-full overflow-hidden bg-plum-950 cursor-pointer"
                  onClick={() => onOpenLightbox(edition.mediaUrl, `${edition.editionName} · ${edition.headlineArtist} (${edition.dates})`)}
                >
                  <img
                    src={edition.mediaUrl}
                    alt={`${edition.editionName} featuring ${edition.headlineArtist}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/40 to-transparent" />

                  {/* Year Pill */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-orange-accent text-plum-950 font-poppins font-black text-xs shadow-md">
                      {edition.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-plum-900/80 backdrop-blur-md text-lilac text-[10px] font-semibold border border-plum-700/60">
                      Past Edition
                    </span>
                  </div>

                  {/* Lightbox Eye Button */}
                  <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-plum-900/80 text-white hover:bg-orange-accent hover:text-plum-950 transition-colors backdrop-blur-md shadow-sm">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Headline Artist Banner */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[10px] font-bold text-orange-accent uppercase tracking-wider">
                      Celebrity Headliner
                    </div>
                    <div className="font-poppins font-black text-lg sm:text-xl text-white drop-shadow-md truncate">
                      {edition.headlineArtist}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-plum-600 mb-1.5">
                      <span className="font-semibold text-plum-900">{edition.editionName}</span>
                      <span>{edition.dates}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-plum-900/75 leading-relaxed line-clamp-2">
                      {edition.description}
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-plum-100 flex flex-wrap gap-1.5">
                      {edition.keyHighlights.map((h: string, i: number) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-plum-50 text-[11px] font-medium text-plum-800"
                        >
                          <Star className="w-3 h-3 text-orange-accent" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-plum-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenLightbox(edition.mediaUrl, `${edition.editionName} · ${edition.headlineArtist} (${edition.dates})`)}
                      className="text-xs font-bold text-plum-800 hover:text-orange-accent transition-colors flex items-center gap-1"
                    >
                      <span>View Full Image</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-plum-500 font-medium">
                      Archive Verified
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
