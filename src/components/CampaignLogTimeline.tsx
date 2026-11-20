import React, { useState } from 'react';
import { CAMPAIGN_ACTION_LOG, CAMPAIGN_INFO, CampaignLogEntry } from '../data/campaignData';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  Download,
  FileSpreadsheet,
  FileText,
  Printer,
  Table as TableIcon,
  GitBranch,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';
import {
  downloadCampaignLogCsv,
  downloadCampaignLogWordDoc,
  printCampaignLog,
} from '../utils/exportReport';

export const CampaignLogTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'timeline' | 'table'>('timeline');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const phases = ['All', 'Phase 1: Setup & Launch', 'Phase 2: Scale & Diversify', 'Phase 3: Conversion & Synthesis'];

  const filteredLog = selectedPhase === 'All'
    ? CAMPAIGN_ACTION_LOG
    : CAMPAIGN_ACTION_LOG.filter((entry) => entry.phase === selectedPhase);

  const handleCopyRow = (entry: CampaignLogEntry, idx: number) => {
    const text = `[${entry.displayDate}] (${entry.phase}) ${entry.action} | Channel: ${entry.channel} | Owner: ${entry.owner} | Details: ${entry.details} | Impact: ${entry.metricImpact}`;
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="campaign-log" className="py-12 sm:py-18 bg-plum-50/50 dark:bg-plum-900/40 text-plum-950 dark:text-white border-t border-plum-200/80 dark:border-plum-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100 dark:bg-plum-800 text-plum-900 dark:text-lilac border border-plum-200 dark:border-plum-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-orange-accent" />
              <span>Step 4 Requirement · Dated Campaign Action Log</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
              Dated Log of Campaign Actions (08 Nov – 20 Nov 2026)
            </h2>
            <p className="mt-2 text-xs sm:text-base text-plum-800/80 dark:text-lilac/80 max-w-2xl mx-auto leading-relaxed">
              Chronological log tracking execution milestones, channel rollouts, on-ground campus activations, and quantitative traffic outcomes to fulfill Step 4 evaluation requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* ===================================================================== */}
        {/* DEDICATED STEP 4 LOG DOWNLOAD & EXPORT CENTER */}
        {/* ===================================================================== */}
        <ScrollReveal direction="blur-up" duration={600} delay={100}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-plum-950 border-2 border-orange-accent/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-orange-accent/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-accent/20 text-orange-accent border border-orange-accent/30 text-[11px] font-bold uppercase tracking-wider">
                    Official Step 4 Submission Section
                  </span>
                  <span className="text-xs font-mono text-plum-600 dark:text-plum-400">
                    Deadline: <strong className="text-plum-950 dark:text-white">{CAMPAIGN_INFO.deadlines.step4}</strong>
                  </span>
                </div>
                <h3 className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white">
                  Download Detailed Campaign Action Log
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                  Export the complete 8-entry dated action log with channel attribution, operational ownership, implementation notes, and metric impacts. Formatted directly for faculty evaluation in Word, CSV/Excel, and PDF.
                </p>
              </div>

              {/* 3 Prominent 1-Click Download Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                
                {/* 1. CSV / Excel */}
                <button
                  onClick={() => downloadCampaignLogCsv(filteredLog)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all group"
                  title="Download complete log as CSV spreadsheet (compatible with Microsoft Excel & Google Sheets)"
                >
                  <FileSpreadsheet className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Download CSV (Excel)</span>
                </button>

                {/* 2. Microsoft Word (.doc) */}
                <button
                  onClick={() => downloadCampaignLogWordDoc(filteredLog)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-poppins font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all group"
                  title="Download formatted submission report for Microsoft Word"
                >
                  <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Download Word (.doc)</span>
                </button>

                {/* 3. Clean PDF / Print */}
                <button
                  onClick={() => printCampaignLog(filteredLog)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all group"
                  title="Generate clean, beautiful A4 PDF log document"
                >
                  <Printer className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Print / Save PDF</span>
                </button>

              </div>
            </div>

            {/* Sub-bar: Instructions & Compliance */}
            <div className="mt-5 pt-4 border-t border-plum-100 dark:border-plum-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-plum-600 dark:text-plum-400">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Includes all 8 chronological implementation dates from Nov 08 to Nov 20, 2026.</span>
              </span>
              <span className="font-mono text-[11px] text-plum-500 dark:text-lilac/70">
                Ready for direct mail submission (Word / PPT / PDF)
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* View Mode & Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          
          {/* Phase Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-plum-600 dark:text-plum-400 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Phase Filter:
            </span>
            {phases.map((phase) => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedPhase === phase
                    ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md scale-102'
                    : 'bg-white dark:bg-plum-850 text-plum-800 dark:text-lilac border border-plum-200 dark:border-plum-750 hover:bg-plum-100 dark:hover:bg-plum-800'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* View Mode Toggle (Timeline vs Tabular View) */}
          <div className="inline-flex items-center bg-plum-100 dark:bg-plum-850 p-1 rounded-xl border border-plum-200 dark:border-plum-750 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'timeline'
                  ? 'bg-white dark:bg-plum-700 text-plum-950 dark:text-white shadow-sm'
                  : 'text-plum-600 dark:text-lilac/70 hover:text-plum-950 dark:hover:text-white'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Timeline View</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'table'
                  ? 'bg-white dark:bg-plum-700 text-plum-950 dark:text-white shadow-sm'
                  : 'text-plum-600 dark:text-lilac/70 hover:text-plum-950 dark:hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Structured Table</span>
            </button>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* VIEW 1: STRUCTURED DATA TABLE */}
        {/* ===================================================================== */}
        {viewMode === 'table' && (
          <ScrollReveal direction="blur-up" duration={600}>
            <div className="overflow-x-auto rounded-2xl border border-plum-200/80 dark:border-plum-800 bg-white dark:bg-plum-950 shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-plum-100 dark:bg-plum-900 border-b border-plum-200 dark:border-plum-800 text-plum-950 dark:text-lilac">
                    <th className="py-3.5 px-4 font-bold font-poppins">Date</th>
                    <th className="py-3.5 px-4 font-bold font-poppins">Phase &amp; Action Milestone</th>
                    <th className="py-3.5 px-4 font-bold font-poppins">Channel</th>
                    <th className="py-3.5 px-4 font-bold font-poppins">Owner</th>
                    <th className="py-3.5 px-4 font-bold font-poppins">Execution Summary</th>
                    <th className="py-3.5 px-4 font-bold font-poppins">Metric Impact</th>
                    <th className="py-3.5 px-4 font-bold font-poppins text-center">Status</th>
                    <th className="py-3.5 px-4 font-bold font-poppins text-center">Copy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-plum-100 dark:divide-plum-850">
                  {filteredLog.map((entry, idx) => (
                    <tr key={entry.id} className="hover:bg-plum-50/50 dark:hover:bg-plum-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-orange-accent whitespace-nowrap align-top">
                        {entry.displayDate}
                      </td>
                      <td className="py-3.5 px-4 align-top max-w-xs">
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-plum-500 dark:text-plum-400 mb-0.5">
                          {entry.phase}
                        </span>
                        <div className="font-bold text-plum-950 dark:text-white text-xs">
                          {entry.action}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top whitespace-nowrap text-plum-700 dark:text-lilac">
                        {entry.channel}
                      </td>
                      <td className="py-3.5 px-4 align-top whitespace-nowrap text-plum-600 dark:text-plum-400">
                        {entry.owner}
                      </td>
                      <td className="py-3.5 px-4 align-top text-plum-800/90 dark:text-lilac/80 leading-relaxed min-w-[280px]">
                        {entry.details}
                      </td>
                      <td className="py-3.5 px-4 align-top whitespace-nowrap font-bold text-orange-accent">
                        {entry.metricImpact}
                      </td>
                      <td className="py-3.5 px-4 align-top text-center whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                          {entry.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 align-top text-center whitespace-nowrap">
                        <button
                          onClick={() => handleCopyRow(entry, idx)}
                          className="p-1.5 rounded-lg bg-plum-100 dark:bg-plum-800 hover:bg-orange-accent hover:text-plum-950 text-plum-700 dark:text-lilac transition-colors"
                          title="Copy entry text"
                        >
                          {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        )}

        {/* ===================================================================== */}
        {/* VIEW 2: VERTICAL TIMELINE TREE */}
        {/* ===================================================================== */}
        {viewMode === 'timeline' && (
          <div className="relative border-l-2 border-plum-200 dark:border-plum-800 ml-4 sm:ml-8 md:ml-32 space-y-8">
            {filteredLog.map((entry, idx) => (
              <ScrollReveal key={entry.id} direction="blur-up" delay={idx * 50} duration={600}>
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
        )}

      </div>
    </section>
  );
};
