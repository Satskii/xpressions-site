import React, { useState, useEffect } from 'react';
import { CampaignCreatives } from '../components/CampaignCreatives';
import { CampaignExperimentCard } from '../components/CampaignExperimentCard';
import { CampaignLinkGenerator } from '../components/CampaignLinkGenerator';
import { CampaignLogTimeline } from '../components/CampaignLogTimeline';
import { Step5AnalyticsDashboard } from '../components/Step5AnalyticsDashboard';
import { SubmissionDossierView } from '../components/SubmissionDossierView';
import { CAMPAIGN_INFO, MACRO_METRICS, GA4_EVENT_SPECIFICATION } from '../data/campaignData';
import { getStoredVisits, getStoredEvents, CampaignVisit, AnalyticsEvent } from '../utils/analytics';
import {
  BarChart3,
  Users,
  Target,
  Activity,
  Share2,
  FileText,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Layers,
  Calendar,
  Zap,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SpotlightCard } from '../components/SpotlightCard';

export const CampaignPage: React.FC = () => {
  const [activeStepTab, setActiveStepTab] = useState<'step4' | 'step5' | 'dossier'>('step4');
  const [recentEvents, setRecentEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    setRecentEvents(getStoredEvents().slice(0, 8));

    const handleNewEvent = (e: any) => {
      if (e.detail) {
        setRecentEvents((prev) => [e.detail, ...prev.slice(0, 7)]);
      }
    };

    window.addEventListener('xpressions_ga_event', handleNewEvent);
    return () => {
      window.removeEventListener('xpressions_ga_event', handleNewEvent);
    };
  }, []);

  return (
    <div className="pt-20 sm:pt-24 pb-20 min-h-screen bg-white dark:bg-plum-950 text-plum-950 dark:text-white transition-colors duration-300 w-full max-w-full overflow-hidden">
      
      {/* Page Header */}
      <div className="bg-plum-950 text-white py-14 sm:py-20 border-b border-plum-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="blur-up" duration={700}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-850/80 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/60 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-orange-accent" />
              <span>Step 4 &amp; Step 5: Campaign &amp; Analytics Operations</span>
            </div>
            <h1 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Campaign Execution &amp; Analytics Hub
            </h1>
            <p className="mt-3 font-inter text-xs sm:text-base text-lilac/90 max-w-2xl mx-auto leading-relaxed">
              Complete implementation for <strong>Step 4 (Traffic Generation Campaign)</strong> and <strong>Step 5 (Measure, Interpret &amp; Optimise)</strong> with GA4 telemetry, funnel analysis, and final submission compilation.
            </p>

            {/* Campaign Meta Badge Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-plum-900 border border-plum-750 text-lilac">
                Campaign: <strong className="text-white">{CAMPAIGN_INFO.period}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-plum-900 border border-plum-750 text-lilac">
                Step 4 Due: <strong className="text-white">{CAMPAIGN_INFO.deadlines.step4}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-plum-900 border border-plum-750 text-lilac">
                Step 5 Due: <strong className="text-white">{CAMPAIGN_INFO.deadlines.step5}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-accent/15 border border-orange-accent/30 text-orange-accent font-semibold">
                GA4 / GTM: <strong>GTM-WNSWR927</strong>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Macro Scorecard Summary Strip */}
      <section className="py-8 bg-plum-50/50 dark:bg-plum-900/30 border-b border-plum-200/80 dark:border-plum-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-plum-900/80 border border-plum-200/80 dark:border-plum-800 shadow-sm">
              <div className="flex items-center justify-between text-xs text-plum-600 dark:text-plum-400 mb-1">
                <span>Unique Users</span>
                <Users className="w-4 h-4 text-orange-accent" />
              </div>
              <div className="font-poppins font-black text-2xl text-plum-950 dark:text-white">
                {MACRO_METRICS.totalUsers.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                {MACRO_METRICS.totalSessions.toLocaleString()} Total Sessions
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-plum-900/80 border border-plum-200/80 dark:border-plum-800 shadow-sm">
              <div className="flex items-center justify-between text-xs text-plum-600 dark:text-plum-400 mb-1">
                <span>Engagement Rate</span>
                <TrendingUp className="w-4 h-4 text-orange-accent" />
              </div>
              <div className="font-poppins font-black text-2xl text-plum-950 dark:text-white">
                {MACRO_METRICS.engagementRate}
              </div>
              <div className="text-[11px] text-plum-600 dark:text-lilac/70 mt-0.5">
                {MACRO_METRICS.avgEngagementTime} Avg Duration
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-plum-900/80 border border-plum-200/80 dark:border-plum-800 shadow-sm">
              <div className="flex items-center justify-between text-xs text-plum-600 dark:text-plum-400 mb-1">
                <span>Completed Registrations</span>
                <Target className="w-4 h-4 text-orange-accent" />
              </div>
              <div className="font-poppins font-black text-2xl text-emerald-600 dark:text-emerald-400">
                {MACRO_METRICS.completedRegistrations}
              </div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                {MACRO_METRICS.overallConversionRate} Overall CR
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-plum-900/80 border border-plum-200/80 dark:border-plum-800 shadow-sm">
              <div className="flex items-center justify-between text-xs text-plum-600 dark:text-plum-400 mb-1">
                <span>A/B Lift (Variant B)</span>
                <Sparkles className="w-4 h-4 text-orange-accent" />
              </div>
              <div className="font-poppins font-black text-2xl text-orange-accent">
                +45.7%
              </div>
              <div className="text-[11px] text-plum-600 dark:text-lilac/70 mt-0.5">
                Statistically Significant Win
              </div>
            </SpotlightCard>

          </div>
        </div>
      </section>

      {/* Main Operational Step Navigator */}
      <section className="pt-8 pb-4 bg-white dark:bg-plum-950 border-b border-plum-200/80 dark:border-plum-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            
            <button
              onClick={() => setActiveStepTab('step4')}
              className={`py-3 px-5 sm:px-8 rounded-2xl font-poppins font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 ${
                activeStepTab === 'step4'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-lg scale-102 ring-2 ring-orange-accent/40'
                  : 'bg-plum-100 dark:bg-plum-900 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Step 4: Campaign Execution (Creatives, Links &amp; A/B Test)</span>
            </button>

            <button
              onClick={() => setActiveStepTab('step5')}
              className={`py-3 px-5 sm:px-8 rounded-2xl font-poppins font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 ${
                activeStepTab === 'step5'
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-lg scale-102 ring-2 ring-orange-accent/40'
                  : 'bg-plum-100 dark:bg-plum-900 text-plum-800 dark:text-lilac hover:bg-plum-200'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Step 5: Measure, Interpret &amp; Optimise (GA4 &amp; Funnel)</span>
            </button>

            <button
              onClick={() => setActiveStepTab('dossier')}
              className={`py-3 px-5 sm:px-8 rounded-2xl font-poppins font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 ${
                activeStepTab === 'dossier'
                  ? 'bg-emerald-600 text-white shadow-lg scale-102 ring-2 ring-emerald-400/40'
                  : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Final Submission Dossier (Word/PPT)</span>
            </button>

          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* TAB 1: STEP 4 EXECUTION */}
      {/* ===================================================================== */}
      {activeStepTab === 'step4' && (
        <>
          {/* The 3 Promotional Creatives */}
          <CampaignCreatives />

          {/* Marketing Experiment (A/B Test Card) */}
          <CampaignExperimentCard />

          {/* Interactive UTM & Dynamic QR Code Builder */}
          <CampaignLinkGenerator />

          {/* Dated Campaign Log */}
          <CampaignLogTimeline />
        </>
      )}

      {/* ===================================================================== */}
      {/* TAB 2: STEP 5 MEASURE, INTERPRET & OPTIMISE */}
      {/* ===================================================================== */}
      {activeStepTab === 'step5' && (
        <Step5AnalyticsDashboard />
      )}

      {/* ===================================================================== */}
      {/* TAB 3: FINAL SUBMISSION DOSSIER */}
      {/* ===================================================================== */}
      {activeStepTab === 'dossier' && (
        <section className="py-12 bg-white dark:bg-plum-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SubmissionDossierView />
          </div>
        </section>
      )}

      {/* Real-time Session Event Stream & GA4 Event Specification */}
      <section className="py-12 bg-plum-50/40 dark:bg-plum-900/30 border-t border-plum-200/80 dark:border-plum-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Bar */}
          <div className="bg-white dark:bg-plum-950 p-5 sm:p-6 rounded-3xl border border-plum-200 dark:border-plum-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="font-bold text-sm text-plum-950 dark:text-white">Active GA4 &amp; GTM Telemetry Listener</span>
                <p className="text-xs text-plum-600 dark:text-lilac/70 mt-0.5">
                  Standardized 8-event taxonomy listening in real-time on container <strong className="text-orange-accent">GTM-WNSWR927</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-plum-500 shrink-0">
              <span className="px-2.5 py-1 rounded-md bg-plum-100 dark:bg-plum-850 text-plum-800 dark:text-lilac font-bold">GTM-WNSWR927</span>
              <span>·</span>
              <span className="text-emerald-500 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Live Telemetry
              </span>
            </div>
          </div>

          {/* GA4 Event Taxonomy Mapping Grid */}
          <div className="bg-white dark:bg-plum-950 p-6 sm:p-8 rounded-3xl border border-plum-200 dark:border-plum-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-plum-100 dark:border-plum-850 pb-4">
              <div>
                <h3 className="font-poppins font-bold text-lg text-plum-950 dark:text-white">
                  GA4 Event Measurement Specification
                </h3>
                <p className="text-xs text-plum-600 dark:text-lilac/70 mt-0.5">
                  Fulfilling Step 5 evaluation rubrics for custom interaction &amp; conversion measurement.
                </p>
              </div>
              <span className="text-xs font-mono text-plum-500 bg-plum-100 dark:bg-plum-850 px-3 py-1 rounded-full self-start sm:self-auto">
                8 Standardized Events
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-plum-100 dark:bg-plum-900 border-b border-plum-200 dark:border-plum-800 text-plum-950 dark:text-lilac">
                    <th className="py-2.5 px-3 font-bold">User Action</th>
                    <th className="py-2.5 px-3 font-bold">GA4 Event Name</th>
                    <th className="py-2.5 px-3 font-bold">Purpose</th>
                    <th className="py-2.5 px-3 font-bold">Telemetry Parameters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-plum-100 dark:divide-plum-850">
                  {GA4_EVENT_SPECIFICATION.map((spec) => (
                    <tr key={spec.eventName} className="hover:bg-plum-50/50 dark:hover:bg-plum-900/40">
                      <td className="py-2.5 px-3 font-semibold text-plum-950 dark:text-white">
                        {spec.userAction}
                      </td>
                      <td className="py-2.5 px-3 font-mono font-bold text-orange-accent">
                        {spec.eventName}
                      </td>
                      <td className="py-2.5 px-3 text-plum-700 dark:text-lilac">
                        {spec.purpose}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-[11px] text-plum-500 dark:text-lilac/70">
                        {spec.parameters}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Live In-Browser Telemetry Stream */}
          {recentEvents.length > 0 && (
            <div className="bg-white dark:bg-plum-950 p-6 rounded-3xl border border-plum-200 dark:border-plum-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-plum-100 dark:border-plum-850 pb-2">
                <span className="font-bold text-plum-950 dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-accent animate-ping" />
                  Live In-Browser Event Stream (Current Session)
                </span>
                <span className="font-mono text-[11px] text-plum-500">
                  Showing last {recentEvents.length} events
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                {recentEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-2.5 rounded-xl bg-plum-50 dark:bg-plum-900/60 border border-plum-200 dark:border-plum-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-orange-accent/15 text-orange-accent font-bold text-[11px]">
                        {evt.name}
                      </span>
                      <span className="text-[11px] text-plum-700 dark:text-lilac/80 truncate max-w-md">
                        {JSON.stringify(evt.params)}
                      </span>
                    </div>
                    <span className="text-[10px] text-plum-400 shrink-0">
                      {new Date(evt.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
