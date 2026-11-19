import React, { useState } from 'react';
import { CAMPAIGN_ACTION_LOG, CampaignLogEntry } from '../data/campaignData';
import { Calendar, CheckCircle2, Clock, Filter, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

export const CampaignLogTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('All');

  const phases = ['All', 'Phase 1: Setup & Launch', 'Phase 2: Scale & Diversify', 'Phase 3: Conversion & Synthesis'];

  const filteredLog = selectedPhase === 'All'
    ? CAMPAIGN_ACTION_LOG
    : CAMPAIGN_ACTION_LOG.filter((entry) => entry.phase === selectedPhase);

  return (
    <section className="py-12 sm:py-18 bg-plum-50/50 dark:bg-plum-900/40 text-plum-950 dark:text-white border-t border-plum-200/80 dark:border-plum-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100 dark:bg-plum-800 text-plum-900 dark:text-lilac border border-plum-200 dark:border-plum-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-orange-accent" />
              <span>Step 4 Requirement · Dated Campaign Log</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
              Dated Log of Campaign Actions (08 Nov – 20 Nov 2026)
            </h2>
            <p className="mt-2 text-xs sm:text-base text-plum-800/80 dark:text-lilac/80 max-w-xl mx-auto leading-relaxed">
              Chronological log tracking execution milestones, channel rollouts, on-ground campus activations, and quantitative traffic outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-semibold text-plum-600 dark:text-plum-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Phase Filter:
          </span>
          {phases.map((phase) => (
            <button
              key={phase}
              onClick={() => setSelectedPhase(phase)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedPhase === phase
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md scale-102'
                  : 'bg-white dark:bg-plum-850 text-plum-800 dark:text-lilac border border-plum-200 dark:border-plum-750 hover:bg-plum-100 dark:hover:bg-plum-800'
              }`}
            >
              {phase}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l-2 border-plum-200 dark:border-plum-800 ml-4 sm:ml-8 md:ml-32 space-y-8">
          {filteredLog.map((entry, idx) => (
            <ScrollReveal key={entry.id} direction="blur-up" delay={idx * 60} duration={600}>
              <div className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Node Icon */}
                <div className={`absolute -left-3.5 top-1.5 w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110 ${
                  entry.status === 'Completed'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-orange-accent text-plum-950 animate-pulse'
                }`}>
                  {entry.status === 'Completed' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                </div>

                {/* Left Date Label for Desktop */}
                <div className="md:absolute md:-left-36 md:top-2 text-xs font-mono font-bold text-orange-accent md:text-right md:w-28 mb-1 md:mb-0">
                  {entry.displayDate}
                </div>

                {/* Event Card */}
                <SpotlightCard className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-plum-900/90 border border-plum-200/80 dark:border-plum-800 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-plum-100 dark:border-plum-800 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-plum-100 dark:bg-plum-800 text-plum-800 dark:text-lilac text-[11px] font-semibold">
                          {entry.phase}
                        </span>
                        <span className="text-xs text-plum-500 dark:text-plum-400 font-mono">
                          Channel: <strong className="text-plum-900 dark:text-white">{entry.channel}</strong>
                        </span>
                      </div>
                      <h3 className="font-poppins font-bold text-base sm:text-lg text-plum-950 dark:text-white leading-snug">
                        {entry.action}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        entry.status === 'Completed'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-orange-accent/20 text-orange-accent border border-orange-accent/40'
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                    {entry.details}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-plum-100 dark:border-plum-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="text-plum-600 dark:text-plum-400">
                      Owner: <span className="font-semibold text-plum-950 dark:text-white">{entry.owner}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 font-bold text-orange-accent bg-orange-accent/10 px-2.5 py-1 rounded-lg border border-orange-accent/20 text-[11px]">
                      <span>Impact:</span>
                      <span>{entry.metricImpact}</span>
                    </div>
                  </div>
                </SpotlightCard>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
