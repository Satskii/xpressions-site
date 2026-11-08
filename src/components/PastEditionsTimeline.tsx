import React, { useState } from 'react';
import { Layers, Calendar, Star, AlertTriangle, Eye, CheckCircle, Sparkles } from 'lucide-react';
import { PAST_EDITIONS } from '../data/festivalData';
import { EditionHighlight } from '../types/festival';

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
    <section id="past-editions" className="py-20 bg-plum-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100 text-plum-800 text-xs font-semibold mb-3 border border-plum-200">
            <Layers className="w-3.5 h-3.5 text-orange-accent" />
            <span>Documented Festival Legacy</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight">
            Past Editions & Star Highlights
          </h2>
          <p className="mt-3 font-inter text-base sm:text-lg text-plum-900/70">
            A documented chronicle of India's most celebrated musical headliners, comedy icons, and management titans who have taken the Xpressions stage.
          </p>
        </div>

        {/* CRITICAL EDITORIAL DISCLAIMER BANNER */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-start sm:items-center gap-3 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-orange-accent shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold text-amber-900">Historical Archive Notice:</strong>{' '}
            All artists, performers, and events listed in this section are documented historical highlights from previous editions (2016 – 2025).{' '}
            <span className="underline font-semibold">They do not represent or imply the confirmed lineup for the upcoming edition.</span> The upcoming artist roster will be officially announced by the Student Executive Council.
          </div>
        </div>

        {/* Year Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedYear === year
                  ? 'bg-plum-800 text-white shadow-md scale-105'
                  : 'bg-white text-plum-800 border border-plum-200 hover:bg-plum-100'
              }`}
            >
              {year === 'All' ? 'All Editions' : year}
            </button>
          ))}
        </div>

        {/* Timeline Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEditions.map((edition) => (
            <div
              key={edition.year}
              className="group rounded-3xl bg-white border border-plum-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              {/* Media Card with Click to Lightbox */}
              <div 
                className="relative h-60 w-full overflow-hidden bg-plum-950 cursor-pointer"
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
                  <span className="px-2.5 py-1 rounded-full bg-plum-900/80 backdrop-blur-md text-lilac text-[10px] font-semibold border border-plum-700">
                    Past Edition
                  </span>
                </div>

                {/* Lightbox Eye Button */}
                <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-plum-900/80 text-white hover:bg-orange-accent hover:text-plum-950 transition-colors backdrop-blur-md">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Headline Artist Banner */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[11px] font-bold text-orange-accent uppercase tracking-wider">
                    Star Attraction
                  </div>
                  <h3 className="font-poppins font-black text-2xl text-white leading-tight">
                    {edition.headlineArtist}
                  </h3>
                  {edition.coHeadliner && (
                    <div className="text-xs text-lilac font-medium">
                      + {edition.coHeadliner}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-plum-600 mb-1">
                    {edition.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-plum-900/75 leading-relaxed">
                    {edition.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-4 border-t border-plum-100/80 space-y-2">
                    <div className="text-[11px] font-bold text-plum-900 uppercase tracking-wider">
                      Documented Moments:
                    </div>
                    {edition.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-plum-800/90">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-accent shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-plum-100 flex items-center justify-between text-xs text-plum-600">
                  <span className="font-medium">{edition.editionName}</span>
                  <button
                    onClick={() => onOpenLightbox(edition.mediaUrl, `${edition.editionName} · ${edition.headlineArtist}`)}
                    className="font-semibold text-plum-800 hover:text-orange-accent transition-colors flex items-center gap-1"
                  >
                    <span>View Photo</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
