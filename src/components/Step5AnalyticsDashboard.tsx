import React, { useState } from 'react';
import {
  MACRO_METRICS,
  TRAFFIC_BY_SOURCE,
  VIEWS_BY_PAGE,
  FUNNEL_ABANDONMENT_DATA,
  SEARCH_CONSOLE_DATA,
  DEVICE_BREAKDOWN_DATA,
  OPTIMIZATION_INTERVENTION,
  MEANINGFUL_ACTIONS_DATA,
} from '../data/campaignData';
import {
  BarChart3,
  TrendingUp,
  Clock,
  Eye,
  MousePointerClick,
  Smartphone,
  Monitor,
  Search,
  Filter,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Download,
  Share2,
  FileSpreadsheet,
  FileText,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';
import { LimitationsAndImprovements } from './LimitationsAndImprovements';
import { printStep5Report, downloadStep5WordDoc } from '../utils/exportReport';

export const Step5AnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'funnel' | 'channels' | 'pages' | 'actions' | 'seo' | 'devices' | 'optimization'>('funnel');

  const totalSearchImpressions = SEARCH_CONSOLE_DATA.reduce((acc, q) => acc + q.impressions, 0);
  const totalSearchClicks = SEARCH_CONSOLE_DATA.reduce((acc, q) => acc + q.clicks, 0);
  const overallSearchCtr = ((totalSearchClicks / totalSearchImpressions) * 100).toFixed(1) + '%';

  const handleExportCsv = () => {
    const csvContent = [
      ['Metric', 'Value'],
      ['Total Users', MACRO_METRICS.totalUsers],
      ['Total Sessions', MACRO_METRICS.totalSessions],
      ['Engagement Rate', MACRO_METRICS.engagementRate],
      ['Avg Engagement Time', MACRO_METRICS.avgEngagementTime],
      ['Views per Session', MACRO_METRICS.viewsPerSession],
      ['Total Pageviews', MACRO_METRICS.viewsByPageTotal],
      ['Total CTA Clicks', MACRO_METRICS.totalCtaClicks],
      ['Registration Starts', MACRO_METRICS.registrationStarts],
      ['Completed Registrations', MACRO_METRICS.completedRegistrations],
      ['Overall Conversion Rate', MACRO_METRICS.overallConversionRate],
      [],
      ['Channel Source/Medium', 'Users', 'Sessions', 'Engagement Rate', 'Registrations', 'Conv Rate'],
      ...TRAFFIC_BY_SOURCE.map((r) => [
        r.sourceMedium,
        r.users,
        r.sessions,
        r.engagementRate,
        r.completedRegistrations,
        r.conversionRate,
      ]),
      [],
      ['Funnel Step', 'Sessions', 'Conversion from Prev', 'Drop-off Rate'],
      ...FUNNEL_ABANDONMENT_DATA.map((f) => [f.stepName, f.sessions, f.conversionFromPrevious, f.dropOffRate]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `xpressions_step5_analytics_report_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-14 sm:py-20 bg-white dark:bg-plum-950 text-plum-950 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Step 5: Measure, Interpret &amp; Optimise</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-plum-950 dark:text-white tracking-tight">
              Comprehensive Analytics &amp; Optimization Dossier
            </h2>
            <p className="mt-3 text-xs sm:text-base text-plum-800/80 dark:text-lilac/80 max-w-2xl mx-auto leading-relaxed">
              In-depth interpretation of festival visitor behavior, funnel drop-off analysis, channel attribution, SEO telemetry, and the measured effect of our UX improvements.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Macro KPIs Telemetry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          
          <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-plum-50/70 dark:bg-plum-900/60 border border-plum-200/80 dark:border-plum-800 text-center">
            <div className="text-[11px] font-semibold text-plum-600 dark:text-plum-400 uppercase tracking-wider mb-1">
              Users / Sessions
            </div>
            <div className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white">
              {MACRO_METRICS.totalUsers.toLocaleString()}
            </div>
            <div className="text-[10px] text-plum-500 dark:text-lilac/70 mt-0.5">
              {MACRO_METRICS.totalSessions.toLocaleString()} Total Sessions
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-plum-50/70 dark:bg-plum-900/60 border border-plum-200/80 dark:border-plum-800 text-center">
            <div className="text-[11px] font-semibold text-plum-600 dark:text-plum-400 uppercase tracking-wider mb-1">
              Engagement Rate
            </div>
            <div className="font-poppins font-black text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400">
              {MACRO_METRICS.engagementRate}
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
              Above 55% Benchmark
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-plum-50/70 dark:bg-plum-900/60 border border-plum-200/80 dark:border-plum-800 text-center">
            <div className="text-[11px] font-semibold text-plum-600 dark:text-plum-400 uppercase tracking-wider mb-1">
              Avg. Time On Site
            </div>
            <div className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white">
              {MACRO_METRICS.avgEngagementTime}
            </div>
            <div className="text-[10px] text-plum-500 dark:text-lilac/70 mt-0.5">
              Deep Content Read
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-plum-50/70 dark:bg-plum-900/60 border border-plum-200/80 dark:border-plum-800 text-center">
            <div className="text-[11px] font-semibold text-plum-600 dark:text-plum-400 uppercase tracking-wider mb-1">
              Views / Session
            </div>
            <div className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white">
              {MACRO_METRICS.viewsPerSession}
            </div>
            <div className="text-[10px] text-plum-500 dark:text-lilac/70 mt-0.5">
              {MACRO_METRICS.viewsByPageTotal.toLocaleString()} Total Pageviews
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-plum-50/70 dark:bg-plum-900/60 border border-plum-200/80 dark:border-plum-800 text-center">
            <div className="text-[11px] font-semibold text-plum-600 dark:text-plum-400 uppercase tracking-wider mb-1">
              Meaningful Actions
            </div>
            <div className="font-poppins font-black text-xl sm:text-2xl text-orange-accent">
              {MACRO_METRICS.totalCtaClicks}
            </div>
            <div className="text-[10px] text-orange-accent mt-0.5">
              CTA &amp; Modal Clicks
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-plum-50/70 dark:bg-plum-900/60 border border-plum-200/80 dark:border-plum-800 text-center">
            <div className="text-[11px] font-semibold text-plum-600 dark:text-plum-400 uppercase tracking-wider mb-1">
              Completed Leads
            </div>
            <div className="font-poppins font-black text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400">
              {MACRO_METRICS.completedRegistrations}
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
              {MACRO_METRICS.overallConversionRate} Overall CR
            </div>
          </SpotlightCard>

        </div>

        {/* Tab Navigation for Step 5 Analytical Angles */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-plum-200 dark:border-plum-800 pb-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('funnel')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                activeTab === 'funnel'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md'
                  : 'bg-plum-100 dark:bg-plum-900/80 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              1. Funnel &amp; Abandonment Analysis
            </button>
            <button
              onClick={() => setActiveTab('channels')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                activeTab === 'channels'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md'
                  : 'bg-plum-100 dark:bg-plum-900/80 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              2. Traffic Sources &amp; Mediums
            </button>
            <button
              onClick={() => setActiveTab('pages')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                activeTab === 'pages'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md'
                  : 'bg-plum-100 dark:bg-plum-900/80 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              3. Page Views &amp; Content Attention
            </button>
            <button
              onClick={() => setActiveTab('actions')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                activeTab === 'actions'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md'
                  : 'bg-plum-100 dark:bg-plum-900/80 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              4. Meaningful Actions
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                activeTab === 'seo'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md'
                  : 'bg-plum-100 dark:bg-plum-900/80 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              5. Search Console (SEO)
            </button>
            <button
              onClick={() => setActiveTab('devices')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                activeTab === 'devices'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md'
                  : 'bg-plum-100 dark:bg-plum-900/80 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              6. Mobile vs. Desktop
            </button>
            <button
              onClick={() => setActiveTab('optimization')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all ${
                activeTab === 'optimization'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300'
              }`}
            >
              7. Improvement &amp; Observed Effect
            </button>
          </div>

          {/* Dedicated Step 5 Report Export Actions */}
          <div className="flex items-center gap-2 ml-auto flex-wrap">
            <button
              onClick={printStep5Report}
              className="px-3.5 py-2 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
              title="Print or export Step 5 evaluation report as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Step 5 PDF</span>
            </button>

            <button
              onClick={downloadStep5WordDoc}
              className="px-3.5 py-2 rounded-xl bg-plum-800 hover:bg-plum-700 text-white font-poppins font-semibold text-xs flex items-center gap-1.5 transition-colors border border-plum-700 shadow-sm"
              title="Download formatted submission dossier for Microsoft Word"
            >
              <FileText className="w-3.5 h-3.5 text-orange-accent" />
              <span>Download Word (.doc)</span>
            </button>

            <button
              onClick={handleExportCsv}
              className="px-3.5 py-2 rounded-xl bg-plum-850 hover:bg-plum-900 text-white font-poppins font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download full analytics dataset for Looker Studio or Google Sheets"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-orange-accent" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: FUNNEL & JOURNEY ABANDONMENT ANALYSIS */}
        {/* ========================================================================= */}
        {activeTab === 'funnel' && (
          <ScrollReveal direction="blur-up" duration={500}>
            <div className="bg-plum-50/50 dark:bg-plum-900/50 p-6 sm:p-10 rounded-3xl border border-plum-200/80 dark:border-plum-800 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                    Registration Journey &amp; Drop-Off Bottleneck Identification
                  </h3>
                  <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
                    Visualizing where users drop off from initial landing session down to confirmed registration.
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-orange-accent/15 text-orange-accent border border-orange-accent/30 text-xs font-semibold shrink-0">
                  Total Funnel Conversion: <strong>{MACRO_METRICS.overallConversionRate}</strong>
                </div>
              </div>

              {/* Step-by-Step Funnel Bars */}
              <div className="space-y-6 mb-10">
                {FUNNEL_ABANDONMENT_DATA.map((step) => {
                  const widthPercent = ((step.sessions / MACRO_METRICS.totalSessions) * 100).toFixed(1);
                  return (
                    <div key={step.stepNumber} className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <div className="font-poppins font-bold text-plum-950 dark:text-white flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 text-[11px] flex items-center justify-center font-bold">
                            {step.stepNumber}
                          </span>
                          <span>{step.stepName}</span>
                          <span className="text-plum-500 dark:text-plum-400 font-normal hidden md:inline">
                            · {step.actionDescription}
                          </span>
                        </div>
                        <div className="font-mono text-xs text-right">
                          <strong className="text-plum-950 dark:text-white">{step.sessions} sessions</strong>{' '}
                          <span className="text-plum-500">({widthPercent}% of total)</span>
                        </div>
                      </div>

                      {/* Bar Visualizer */}
                      <div className="w-full h-8 bg-plum-100 dark:bg-plum-950 rounded-xl overflow-hidden p-1 flex items-center border border-plum-200 dark:border-plum-800">
                        <div
                          className="h-full rounded-lg bg-gradient-to-r from-plum-700 via-plum-600 to-orange-accent transition-all duration-1000 flex items-center justify-end px-3"
                          style={{ width: `${Math.max(Number(widthPercent), 5)}%` }}
                        >
                          <span className="text-[10px] font-bold text-white drop-shadow">
                            {step.conversionFromPrevious}
                          </span>
                        </div>
                      </div>

                      {/* Drop-off Diagnostic Callout */}
                      {step.stepNumber < 5 && (
                        <div className="text-[11px] text-rose-600 dark:text-rose-400 pl-7 flex items-center gap-1.5 font-medium">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>
                            <strong>{step.dropOffRate} Abandonment:</strong> {step.identifiedBottleneck}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Data-Driven Interpretations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-plum-200 dark:border-plum-800 text-xs">
                <div className="p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800">
                  <h4 className="font-bold text-plum-950 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-500" />
                    <span>Primary Drop-Off Point (Step 3 → Step 4: 36.6% Drop)</span>
                  </h4>
                  <p className="text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                    While 512 visitors opened the interest modal, 124 closed it immediately upon seeing multiple input fields on mobile screens. This identified an in-form cognitive barrier, prompting our Step 5 optimization.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800">
                  <h4 className="font-bold text-plum-950 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>High-Intent Completion Rate (Step 4 → Step 5: 63.6%)</span>
                  </h4>
                  <p className="text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                    Once visitors started filling out the form, 63.6% saw it through to completion, demonstrating strong underlying demand for verified Xpressions 2027 delegate passes.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: TRAFFIC SOURCES & CHANNELS */}
        {/* ========================================================================= */}
        {activeTab === 'channels' && (
          <ScrollReveal direction="blur-up" duration={500}>
            <div className="bg-plum-50/50 dark:bg-plum-900/50 p-6 sm:p-10 rounded-3xl border border-plum-200/80 dark:border-plum-800 mb-8">
              <div className="mb-6">
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                  Channel Generation &amp; Conversion Breakdown
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
                  Which channels generated the highest volume of visitors and the best registration conversion rates.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-950">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-plum-100/70 dark:bg-plum-850 text-plum-900 dark:text-white uppercase font-poppins text-xs tracking-wider border-b border-plum-200 dark:border-plum-800">
                      <th className="py-3.5 px-4 sm:px-6">Channel / Medium</th>
                      <th className="py-3.5 px-4 text-center">Users</th>
                      <th className="py-3.5 px-4 text-center">Sessions</th>
                      <th className="py-3.5 px-4 text-center">Engagement %</th>
                      <th className="py-3.5 px-4 text-center">Avg. Time</th>
                      <th className="py-3.5 px-4 text-center">Completed Leads</th>
                      <th className="py-3.5 px-4 sm:px-6 text-right">Conv. Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-plum-100 dark:divide-plum-800/70">
                    {TRAFFIC_BY_SOURCE.map((row, i) => (
                      <tr key={i} className="hover:bg-plum-50/60 dark:hover:bg-plum-850/50 transition-colors">
                        <td className="py-4 px-4 sm:px-6">
                          <div className="font-bold text-plum-950 dark:text-white">{row.channelGroup}</div>
                          <div className="font-mono text-[11px] text-plum-500 dark:text-plum-400">{row.sourceMedium}</div>
                        </td>
                        <td className="py-4 px-4 text-center font-mono">{row.users}</td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-plum-950 dark:text-white">{row.sessions}</td>
                        <td className="py-4 px-4 text-center font-mono">{row.engagementRate}</td>
                        <td className="py-4 px-4 text-center font-mono">{row.avgEngagementTime}</td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-orange-accent">{row.completedRegistrations}</td>
                        <td className="py-4 px-4 sm:px-6 text-right font-mono font-black text-emerald-600 dark:text-emerald-400">
                          {row.conversionRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Interpretation Findings */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 text-xs leading-relaxed space-y-2">
                <div className="font-bold text-plum-950 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-accent" />
                  <span>Channel Insights &amp; Findings:</span>
                </div>
                <p className="text-plum-800/80 dark:text-lilac/80">
                  • <strong>Instagram (Creative #2)</strong> generated the single highest volume of sessions (18 sessions, 40.9% of total) and strong lead volume (3 completed registrations).
                </p>
                <p className="text-plum-800/80 dark:text-lilac/80">
                  • <strong>WhatsApp B-School Groups (Creative #1)</strong> delivered the highest average engagement time (2m 45s), highest engagement rate (73.3%), and highest session conversion rate (20.0%), proving MBA candidates read case study parameters thoroughly.
                </p>
                <p className="text-plum-800/80 dark:text-lilac/80">
                  • <strong>Physical Campus QR Posters (Creative #3)</strong> demonstrated reliable on-ground conversion (12.5%), validating physical touchpoints across XIMB cafeterias and student hostels.
                </p>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PAGE VIEWS & CONTENT ATTENTION */}
        {/* ========================================================================= */}
        {activeTab === 'pages' && (
          <ScrollReveal direction="blur-up" duration={500}>
            <div className="bg-plum-50/50 dark:bg-plum-900/50 p-6 sm:p-10 rounded-3xl border border-plum-200/80 dark:border-plum-800 mb-8">
              <div className="mb-6">
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                  Page Views &amp; Content Attention Distribution
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
                  Examination of which pages and content hubs attract the longest duration and repeat engagement.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-950">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-plum-100/70 dark:bg-plum-850 text-plum-900 dark:text-white uppercase font-poppins text-xs tracking-wider border-b border-plum-200 dark:border-plum-800">
                      <th className="py-3.5 px-4 sm:px-6">Page Path &amp; Title</th>
                      <th className="py-3.5 px-4 text-center">Category Focus</th>
                      <th className="py-3.5 px-4 text-center">Total Views</th>
                      <th className="py-3.5 px-4 text-center">% of Views</th>
                      <th className="py-3.5 px-4 text-center">Avg. Time</th>
                      <th className="py-3.5 px-4 sm:px-6 text-right">Exit Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-plum-100 dark:divide-plum-800/70">
                    {VIEWS_BY_PAGE.map((p, i) => (
                      <tr key={i} className="hover:bg-plum-50/60 dark:hover:bg-plum-850/50 transition-colors">
                        <td className="py-4 px-4 sm:px-6">
                          <div className="font-bold text-plum-950 dark:text-white">{p.pageTitle}</div>
                          <div className="font-mono text-[11px] text-plum-500 dark:text-plum-400">{p.pagePath}</div>
                        </td>
                        <td className="py-4 px-4 text-center text-xs text-plum-700 dark:text-lilac">
                          {p.contentCategory}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-plum-950 dark:text-white">
                          {p.screenPageViews.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-orange-accent">
                          {p.percentageOfViews}
                        </td>
                        <td className="py-4 px-4 text-center font-mono">{p.avgTimeOnPage}</td>
                        <td className="py-4 px-4 sm:px-6 text-right font-mono text-plum-600 dark:text-lilac/70">
                          {p.bounceOrExitRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 text-xs">
                <strong>Key Insight:</strong> The <strong>Events Directory (`/events`)</strong> garnered the highest engagement depth (2m 35s average time) after the Home Page, with visitors actively filtering between <em>Business</em> and <em>Culture</em> categories.
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: MEANINGFUL ACTIONS TELEMETRY */}
        {/* ========================================================================= */}
        {activeTab === 'actions' && (
          <ScrollReveal direction="blur-up" duration={500}>
            <div className="bg-plum-50/50 dark:bg-plum-900/50 p-6 sm:p-10 rounded-3xl border border-plum-200/80 dark:border-plum-800 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                    Meaningful Actions &amp; High-Intent Interactions
                  </h3>
                  <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
                    Telemetry beyond passive pageviews — measuring CTA button clicks, schedule overview downloads, modal opens, and verified registrations.
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-orange-accent/15 text-orange-accent border border-orange-accent/30 text-xs font-mono font-bold shrink-0">
                  Total Meaningful Actions: {MACRO_METRICS.totalCtaClicks}
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-950">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-plum-100/70 dark:bg-plum-850 text-plum-900 dark:text-white uppercase font-poppins text-xs tracking-wider border-b border-plum-200 dark:border-plum-800">
                      <th className="py-3.5 px-4 sm:px-6">Tracked Action</th>
                      <th className="py-3.5 px-4">GA4 Event Key</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4 text-center">Event Count</th>
                      <th className="py-3.5 px-4 sm:px-6 text-right">Measurement Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-plum-100 dark:divide-plum-800/70">
                    {MEANINGFUL_ACTIONS_DATA.map((act, i) => (
                      <tr key={i} className="hover:bg-plum-50/60 dark:hover:bg-plum-850/50 transition-colors">
                        <td className="py-4 px-4 sm:px-6 font-bold text-plum-950 dark:text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{act.actionName}</span>
                        </td>
                        <td className="py-4 px-4 font-mono text-xs text-sky-600 dark:text-sky-400">
                          {act.ga4EventName}
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-plum-100 dark:bg-plum-800 text-plum-800 dark:text-lilac border border-plum-300 dark:border-plum-700">
                            {act.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-orange-accent text-base">
                          {act.count}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-right text-xs text-plum-700 dark:text-lilac/70">
                          {act.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 text-xs text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                <strong>Measurement Standard:</strong> Custom event listeners fire non-intrusively into Google Analytics 4 (`dataLayer.push`) on each user action, recording attribution parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) alongside event payloads.
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: GOOGLE SEARCH CONSOLE (SEO TELEMETRY) */}
        {/* ========================================================================= */}
        {activeTab === 'seo' && (
          <ScrollReveal direction="blur-up" duration={500}>
            <div className="bg-plum-50/50 dark:bg-plum-900/50 p-6 sm:p-10 rounded-3xl border border-plum-200/80 dark:border-plum-800 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                    Google Search Console (GSC) Organic Telemetry
                  </h3>
                  <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
                    Organic search impressions, clicks, click-through rate (CTR), and average keyword rankings.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-xl bg-plum-200 dark:bg-plum-800 font-bold">{totalSearchImpressions} Impressions</span>
                  <span className="px-3 py-1 rounded-xl bg-orange-accent text-plum-950 font-bold">{totalSearchClicks} Clicks ({overallSearchCtr} CTR)</span>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-950">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-plum-100/70 dark:bg-plum-850 text-plum-900 dark:text-white uppercase font-poppins text-xs tracking-wider border-b border-plum-200 dark:border-plum-800">
                      <th className="py-3.5 px-4 sm:px-6">Top Search Query</th>
                      <th className="py-3.5 px-4 text-center">Search Impressions</th>
                      <th className="py-3.5 px-4 text-center">Organic Clicks</th>
                      <th className="py-3.5 px-4 text-center">Search CTR</th>
                      <th className="py-3.5 px-4 sm:px-6 text-right">Avg. SERP Rank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-plum-100 dark:divide-plum-800/70">
                    {SEARCH_CONSOLE_DATA.map((s, i) => (
                      <tr key={i} className="hover:bg-plum-50/60 dark:hover:bg-plum-850/50 transition-colors">
                        <td className="py-4 px-4 sm:px-6 font-bold text-plum-950 dark:text-white">
                          <span className="text-orange-accent mr-1.5 font-mono">#{i + 1}</span>
                          {s.query}
                        </td>
                        <td className="py-4 px-4 text-center font-mono">{s.impressions.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-plum-950 dark:text-white">{s.clicks}</td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">{s.ctr}</td>
                        <td className="py-4 px-4 sm:px-6 text-right font-mono font-bold text-orange-accent">
                          Position {s.averagePosition}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 text-xs text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                <strong>SEO Analysis:</strong> Branded search queries such as <em>&quot;Xpressions XIMB&quot;</em> and <em>&quot;Xpressions 2027&quot;</em> maintain dominant SERP rankings (Positions 1.4 – 1.8) with click-through rates exceeding 20%, while competition keywords (<em>Maven</em>, <em>Decibelz</em>) contribute qualified organic discovery.
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: MOBILE VS. DESKTOP ENGAGEMENT & CONVERSION */}
        {/* ========================================================================= */}
        {activeTab === 'devices' && (
          <ScrollReveal direction="blur-up" duration={500}>
            <div className="bg-plum-50/50 dark:bg-plum-900/50 p-6 sm:p-10 rounded-3xl border border-plum-200/80 dark:border-plum-800 mb-8">
              <div className="mb-6">
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                  Device Cohort Breakdown: Mobile vs. Desktop
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
                  Understanding screen-size dynamics, session duration differences, and device-specific conversion behavior.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Mobile Card */}
                <SpotlightCard className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2.5 rounded-xl bg-orange-accent text-plum-950">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <h4 className="font-poppins font-bold text-lg text-plum-950 dark:text-white">
                          Mobile Devices (Smartphones)
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-orange-accent/15 text-orange-accent text-xs font-bold font-mono">
                        {DEVICE_BREAKDOWN_DATA.mobile.percentageOfSessions} of Traffic
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 my-4 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">Sessions</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.mobile.sessions}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">Engagement %</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.mobile.engagementRate}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">Avg. Duration</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.mobile.avgEngagementTime}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">CTA Clicks</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.mobile.ctaClicks}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-plum-100 dark:border-plum-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-plum-800 dark:text-lilac">Mobile Conv. Rate:</span>
                    <span className="font-poppins font-black text-xl text-emerald-600 dark:text-emerald-400">
                      {DEVICE_BREAKDOWN_DATA.mobile.conversionRate} ({DEVICE_BREAKDOWN_DATA.mobile.completedRegistrations} leads)
                    </span>
                  </div>
                </SpotlightCard>

                {/* Desktop Card */}
                <SpotlightCard className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2.5 rounded-xl bg-plum-800 text-white">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <h4 className="font-poppins font-bold text-lg text-plum-950 dark:text-white">
                          Desktop &amp; Laptop
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-plum-200 dark:bg-plum-800 text-plum-900 dark:text-lilac text-xs font-bold font-mono">
                        {DEVICE_BREAKDOWN_DATA.desktop.percentageOfSessions} of Traffic
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 my-4 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">Sessions</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.desktop.sessions}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">Engagement %</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.desktop.engagementRate}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">Avg. Duration</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.desktop.avgEngagementTime}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-plum-50 dark:bg-plum-900/60">
                        <div className="text-plum-500">CTA Clicks</div>
                        <div className="text-lg font-bold text-plum-950 dark:text-white">{DEVICE_BREAKDOWN_DATA.desktop.ctaClicks}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-plum-100 dark:border-plum-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-plum-800 dark:text-lilac">Desktop Conv. Rate:</span>
                    <span className="font-poppins font-black text-xl text-emerald-600 dark:text-emerald-400">
                      {DEVICE_BREAKDOWN_DATA.desktop.conversionRate} ({DEVICE_BREAKDOWN_DATA.desktop.completedRegistrations} leads)
                    </span>
                  </div>
                </SpotlightCard>

              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 text-xs leading-relaxed text-plum-800/80 dark:text-lilac/80">
                <strong>Device Takeaway:</strong> Mobile traffic is overwhelmingly the primary driver ({DEVICE_BREAKDOWN_DATA.mobile.percentageOfSessions} share), driven by Instagram stories and WhatsApp forwards. Desktop visitors stay noticeably longer ({DEVICE_BREAKDOWN_DATA.desktop.avgEngagementTime} vs {DEVICE_BREAKDOWN_DATA.mobile.avgEngagementTime}) and convert at a higher rate ({DEVICE_BREAKDOWN_DATA.desktop.conversionRate}), indicating they use desktops for deep case competition analysis.
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: IMPLEMENTED IMPROVEMENT & OBSERVED EFFECT */}
        {/* ========================================================================= */}
        {activeTab === 'optimization' && (
          <ScrollReveal direction="blur-up" duration={500}>
            <div className="bg-plum-50/50 dark:bg-plum-900/50 p-6 sm:p-10 rounded-3xl border border-plum-200/80 dark:border-plum-800 mb-8 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Implemented Step 5 Improvement</span>
                </div>
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                  {OPTIMIZATION_INTERVENTION.title}
                </h3>
                <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
                  <strong>Hypothesis:</strong> {OPTIMIZATION_INTERVENTION.hypothesis}
                </p>
              </div>

              {/* Before vs After Measured Comparison Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800">
                  <div className="text-xs font-bold text-plum-500 uppercase tracking-wider mb-1">
                    Pre-Optimization Baseline
                  </div>
                  <div className="font-poppins font-bold text-sm text-plum-950 dark:text-white mb-4">
                    {OPTIMIZATION_INTERVENTION.preOptimizationWindow.period}
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-plum-500">Form Starts:</span>
                      <span className="font-bold">{OPTIMIZATION_INTERVENTION.preOptimizationWindow.formStarts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-plum-500">Form Completions:</span>
                      <span className="font-bold">{OPTIMIZATION_INTERVENTION.preOptimizationWindow.formCompletions}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-plum-100 dark:border-plum-800">
                      <span className="font-bold text-plum-950 dark:text-white">Completion Rate:</span>
                      <span className="font-bold text-base text-rose-500">{OPTIMIZATION_INTERVENTION.preOptimizationWindow.completionRate}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-plum-950 border-2 border-emerald-500/60 shadow-md">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Post-Optimization Result</span>
                  </div>
                  <div className="font-poppins font-bold text-sm text-plum-950 dark:text-white mb-4">
                    {OPTIMIZATION_INTERVENTION.postOptimizationWindow.period}
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-plum-500">Form Starts:</span>
                      <span className="font-bold">{OPTIMIZATION_INTERVENTION.postOptimizationWindow.formStarts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-plum-500">Form Completions:</span>
                      <span className="font-bold">{OPTIMIZATION_INTERVENTION.postOptimizationWindow.formCompletions}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-plum-100 dark:border-plum-800">
                      <span className="font-bold text-plum-950 dark:text-white">Completion Rate:</span>
                      <span className="font-bold text-base text-emerald-600 dark:text-emerald-400">
                        {OPTIMIZATION_INTERVENTION.postOptimizationWindow.completionRate}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Observed Effect Headline */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-950 dark:text-emerald-200">
                <strong>Observed Quantitative Effect:</strong> {OPTIMIZATION_INTERVENTION.observedEffect}
              </div>

              {/* Implementation Details */}
              <div className="p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 text-xs space-y-2">
                <h4 className="font-bold text-plum-950 dark:text-white">Technical Changes Implemented:</h4>
                <ul className="list-disc pl-5 space-y-1 text-plum-800/80 dark:text-lilac/80">
                  {OPTIMIZATION_INTERVENTION.changesMade.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Acknowledged Limitations */}
              <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 text-xs space-y-2">
                <h4 className="font-bold text-amber-950 dark:text-amber-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-orange-accent" />
                  <span>Acknowledged Analytical Limitations:</span>
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-amber-900/90 dark:text-amber-200/90">
                  {OPTIMIZATION_INTERVENTION.limitations.map((lim, idx) => (
                    <li key={idx}>{lim}</li>
                  ))}
                </ul>
              </div>

              {/* Unified Dedicated Section inside Tab 7 */}
              <LimitationsAndImprovements compact />

            </div>
          </ScrollReveal>
        )}

        {/* Always-Visible Dedicated Section for Improvements & Acknowledged Limitations */}
        {activeTab !== 'optimization' && (
          <div className="mt-10 pt-8 border-t border-plum-200 dark:border-plum-800">
            <LimitationsAndImprovements compact />
          </div>
        )}

      </div>
    </section>
  );
};
