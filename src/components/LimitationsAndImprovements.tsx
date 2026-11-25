import React from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  Compass,
  ShieldAlert,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { OPTIMIZATION_INTERVENTION } from '../data/campaignData';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

interface LimitationsAndImprovementsProps {
  compact?: boolean;
}

export const LimitationsAndImprovements: React.FC<LimitationsAndImprovementsProps> = ({
  compact = false,
}) => {
  const {
    preOptimizationWindow,
    postOptimizationWindow,
    improvementsDetailed,
    limitationsDetailed,
  } = OPTIMIZATION_INTERVENTION;

  return (
    <section
      id="limitations-improvements"
      className={`${compact ? 'py-6' : 'py-12 sm:py-16'} w-full`}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Title Banner */}
        <ScrollReveal direction="blur-up" duration={600}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-plum-200 dark:border-plum-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/30 text-xs font-bold uppercase tracking-wider mb-2">
                <Wrench className="w-3.5 h-3.5" />
                <span>Step 5 Core Evaluation · Improvements &amp; Limitations</span>
              </div>
              <h2 className="font-poppins font-black text-2xl sm:text-3xl lg:text-4xl text-plum-950 dark:text-white tracking-tight">
                UX Improvements Implemented &amp; Acknowledged Limitations
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 max-w-3xl leading-relaxed">
                Transparent breakdown of every engineering &amp; UX change deployed mid-campaign, its measured pre-vs-post quantitative effect, and methodological limitations acknowledged during faculty evaluation.
              </p>
            </div>

            {/* Verified Uplift Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 shrink-0">
              <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0" />
              <div className="text-left">
                <div className="text-[10px] font-mono uppercase tracking-wider opacity-80">
                  Measured Form Lift
                </div>
                <div className="font-poppins font-black text-sm sm:text-base">
                  {preOptimizationWindow.completionRate} → {postOptimizationWindow.completionRate} (+30.0 pts)
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Two-Column Architectural Comparison: Improvements vs Limitations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* LEFT COLUMN: IMPROVEMENTS IMPLEMENTED */}
          <ScrollReveal direction="blur-up" delay={50} duration={650}>
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl bg-emerald-50/40 dark:bg-plum-900/70 border border-emerald-300/70 dark:border-emerald-700/50 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                        Deployed Nov 15, 2026
                      </span>
                      <h3 className="font-poppins font-bold text-lg sm:text-xl text-plum-950 dark:text-white">
                        1. Implemented Improvements &amp; Effects
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Before / After Score Row */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white dark:bg-plum-950/90 border border-emerald-200 dark:border-emerald-800/60 font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-plum-500 dark:text-lilac/60 uppercase">
                      Before ({preOptimizationWindow.period})
                    </div>
                    <div className="text-base sm:text-lg font-black text-rose-500 mt-0.5">
                      {preOptimizationWindow.completionRate}
                    </div>
                    <div className="text-[10px] text-plum-600 dark:text-lilac/70">
                      {preOptimizationWindow.formCompletions} completes / {preOptimizationWindow.formStarts} starts
                    </div>
                  </div>
                  <div className="border-l border-plum-200 dark:border-plum-800 pl-3">
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                      After ({postOptimizationWindow.period})
                    </div>
                    <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {postOptimizationWindow.completionRate}
                    </div>
                    <div className="text-[10px] text-plum-600 dark:text-lilac/70">
                      {postOptimizationWindow.formCompletions} completes / {postOptimizationWindow.formStarts} starts
                    </div>
                  </div>
                </div>

                {/* List of Specific Technical Improvements */}
                <div className="space-y-3">
                  {improvementsDetailed.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white dark:bg-plum-950/80 border border-plum-200/80 dark:border-plum-800/80 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-poppins font-bold text-xs sm:text-sm text-plum-950 dark:text-white flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-plum-700/85 dark:text-lilac/80 leading-relaxed">
                        <strong className="text-plum-900 dark:text-white">Issue Solved:</strong> {item.targetProblem}
                      </p>
                      <p className="text-[11px] sm:text-xs text-plum-700/85 dark:text-lilac/80 leading-relaxed">
                        <strong className="text-plum-900 dark:text-white">Change:</strong> {item.changeImplemented}
                      </p>
                      <div className="pt-1 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.observedImpact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* RIGHT COLUMN: ACKNOWLEDGED LIMITATIONS */}
          <ScrollReveal direction="blur-up" delay={120} duration={650}>
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl bg-amber-50/50 dark:bg-plum-900/70 border border-amber-300/80 dark:border-amber-700/50 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                        Methodological Candor
                      </span>
                      <h3 className="font-poppins font-bold text-lg sm:text-xl text-plum-950 dark:text-white">
                        2. Acknowledged Study Limitations
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Summary Callout */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-plum-950/90 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed">
                  <strong>Academic Disclosure:</strong> While our UX optimization delivered a decisive <strong>+30.0 percentage point lift</strong> in form completion, strict data interpretation requires acknowledging four external and sample constraints below.
                </div>

                {/* List of Detailed Limitations + Mitigations */}
                <div className="space-y-3">
                  {limitationsDetailed.map((lim, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white dark:bg-plum-950/80 border border-plum-200/80 dark:border-plum-800/80 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-poppins font-bold text-xs sm:text-sm text-plum-950 dark:text-white flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-orange-accent shrink-0" />
                          {lim.title}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shrink-0">
                          {lim.category}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-plum-700/85 dark:text-lilac/80 leading-relaxed">
                        {lim.description}
                      </p>
                      <div className="pt-1 text-[11px] text-sky-700 dark:text-sky-300 font-medium flex items-start gap-1.5">
                        <Compass className="w-3.5 h-3.5 shrink-0 mt-0.5 text-orange-accent" />
                        <span>
                          <strong>Next-Wave Mitigation:</strong> {lim.mitigation}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>

        {/* Bottom Optimization Roadmap Strip */}
        <ScrollReveal direction="blur-up" delay={180} duration={650}>
          <div className="p-5 sm:p-6 rounded-2xl bg-plum-900/80 border border-plum-750 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-orange-accent/20 text-orange-accent shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-white">
                  Recommended Phase 4 Improvements (January 2027 Grand Finale Push)
                </h4>
                <p className="text-xs text-lilac/80 mt-1 leading-relaxed">
                  (1) Scale WhatsApp MBA community ambassadors (highest 20.0% CR) · (2) Enable 1-tap Google Sign-In to eliminate the remaining 20% mid-form drop · (3) Deploy modal-abandonment reminder prompts · (4) Expand competition rulebook SEO schema.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
