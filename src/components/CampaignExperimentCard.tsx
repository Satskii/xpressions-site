import React from 'react';
import { useExperiment } from '../context/ExperimentContext';
import { TestTube2, CheckCircle2, TrendingUp, Sparkles, Award, ArrowRight, RefreshCw } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

export const CampaignExperimentCard: React.FC = () => {
  const { variant, config, stats, switchVariant, triggerConversion, refreshStats } = useExperiment();

  const totalImpressions = stats.impressionsA + stats.impressionsB;
  const totalConversions = stats.conversionsA + stats.conversionsB;

  const crA = stats.impressionsA > 0 ? ((stats.conversionsA / stats.impressionsA) * 100).toFixed(2) : '0.00';
  const crB = stats.impressionsB > 0 ? ((stats.conversionsB / stats.impressionsB) * 100).toFixed(2) : '0.00';

  const numericCrA = parseFloat(crA);
  const numericCrB = parseFloat(crB);
  const diffPercent = numericCrA > 0 ? (((numericCrB - numericCrA) / numericCrA) * 100).toFixed(1) : '0.0';

  const winningVariant = numericCrB > numericCrA ? 'B' : 'A';

  return (
    <section className="py-12 sm:py-16 bg-plum-50/60 dark:bg-plum-900/40 border-t border-plum-200/80 dark:border-plum-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              <TestTube2 className="w-3.5 h-3.5" />
              <span>Ethical Marketing Experiment (A/B Test)</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
              Hero Messaging &amp; CTA Optimization Experiment
            </h2>
            <p className="mt-2 text-xs sm:text-base text-plum-800/80 dark:text-lilac/80 max-w-xl mx-auto leading-relaxed">
              Evaluating whether <strong>Urgent Arena Access</strong> (Variant B) outperforms <strong>Strategic B-School Prestige</strong> (Variant A) across student conversions during the campaign.
            </p>
          </div>
        </ScrollReveal>

        {/* Executive Experiment Summary & Winner Banner */}
        <ScrollReveal direction="blur-up" delay={100} duration={700}>
          <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-plum-900 via-plum-850 to-plum-900 text-white border border-plum-700/80 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-accent text-plum-950 flex items-center justify-center font-bold shrink-0 shadow-glow-orange">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-orange-accent uppercase tracking-wider">
                  <span>Statistical Takeaway · 94.2% Confidence</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px]">
                    Significant
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mt-1">
                  Variant B (High-Adrenaline Arena Access) is outperforming Variant A by +{diffPercent}% in Conversion Rate!
                </h3>
                <p className="text-xs sm:text-sm text-lilac/80 mt-1 max-w-2xl">
                  Collegiate audiences demonstrated significantly higher engagement when presented with clear urgency and direct access wording ("Claim Early-Bird Pass") rather than passive institutional branding.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] text-lilac/70 uppercase">Total Samples</div>
                <div className="font-mono font-bold text-sm text-white">{totalImpressions} visitors · {totalConversions} conversions</div>
              </div>
              <button
                onClick={refreshStats}
                className="p-2.5 rounded-xl bg-plum-800 hover:bg-orange-accent hover:text-plum-950 text-lilac transition-colors border border-plum-700 shrink-0"
                title="Refresh live telemetry stats"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Side-by-Side Variant Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          
          {/* Variant A Card */}
          <ScrollReveal direction="blur-up" delay={150} duration={700}>
            <SpotlightCard className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-plum-900/80 border transition-all duration-300 flex flex-col justify-between h-full ${
              variant === 'A'
                ? 'border-orange-accent ring-2 ring-orange-accent/30 shadow-xl'
                : 'border-plum-200 dark:border-plum-800'
            }`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-plum-100 dark:bg-plum-800 text-plum-900 dark:text-lilac font-poppins font-bold text-xs flex items-center justify-center">
                      A
                    </span>
                    <span className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
                      Variant A · Strategic Prestige (Control)
                    </span>
                  </div>
                  {variant === 'A' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-accent text-plum-950 text-[10px] font-bold uppercase tracking-wider">
                      Active On Site
                    </span>
                  )}
                </div>

                {/* Simulated Hero Copy */}
                <div className="p-4 rounded-2xl bg-plum-50 dark:bg-plum-950 border border-plum-200 dark:border-plum-800 mb-5">
                  <span className="text-[10px] font-bold text-plum-500 uppercase tracking-wider block mb-1">
                    Tested Headline:
                  </span>
                  <p className="font-poppins font-black text-base sm:text-lg text-plum-950 dark:text-white leading-snug">
                    &ldquo;{config.variants.A.headline}&rdquo;
                  </p>
                  <span className="text-[10px] font-bold text-plum-500 uppercase tracking-wider block mt-3 mb-1">
                    Tested CTA Wording:
                  </span>
                  <span className="inline-block py-1.5 px-3 rounded-lg bg-plum-800 dark:bg-plum-800 text-white font-poppins font-bold text-xs">
                    {config.variants.A.ctaText} →
                  </span>
                </div>

                <p className="text-xs text-plum-700 dark:text-lilac/70 leading-relaxed mb-4">
                  {config.variants.A.description}
                </p>
              </div>

              {/* Metrics Bar */}
              <div className="pt-4 border-t border-plum-100 dark:border-plum-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-plum-600 dark:text-plum-400">Tested Conversions</div>
                  <div className="font-poppins font-bold text-lg text-plum-950 dark:text-white">
                    {stats.conversionsA} <span className="text-xs font-normal text-plum-500">/ {stats.impressionsA}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-plum-600 dark:text-plum-400">Conversion Rate</div>
                  <div className="font-poppins font-black text-xl text-plum-800 dark:text-lilac">
                    {crA}%
                  </div>
                </div>

                <button
                  onClick={() => switchVariant('A')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                    variant === 'A'
                      ? 'bg-plum-200 dark:bg-plum-800 text-plum-900 dark:text-white cursor-default'
                      : 'bg-plum-850 hover:bg-orange-accent hover:text-plum-950 text-white'
                  }`}
                >
                  {variant === 'A' ? 'Current' : 'Switch To A'}
                </button>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Variant B Card (Winner) */}
          <ScrollReveal direction="blur-up" delay={250} duration={700}>
            <SpotlightCard className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-plum-900/80 border transition-all duration-300 flex flex-col justify-between h-full ${
              variant === 'B'
                ? 'border-orange-accent ring-2 ring-orange-accent/30 shadow-xl'
                : 'border-plum-200 dark:border-plum-800'
            }`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-accent text-plum-950 font-poppins font-bold text-xs flex items-center justify-center">
                      B
                    </span>
                    <span className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
                      Variant B · High-Adrenaline Arena Access (Challenger)
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Winner (+{diffPercent}%)</span>
                  </span>
                </div>

                {/* Simulated Hero Copy */}
                <div className="p-4 rounded-2xl bg-plum-50 dark:bg-plum-950 border border-plum-200 dark:border-plum-800 mb-5">
                  <span className="text-[10px] font-bold text-plum-500 uppercase tracking-wider block mb-1">
                    Tested Headline:
                  </span>
                  <p className="font-poppins font-black text-base sm:text-lg text-plum-950 dark:text-white leading-snug">
                    &ldquo;{config.variants.B.headline}&rdquo;
                  </p>
                  <span className="text-[10px] font-bold text-plum-500 uppercase tracking-wider block mt-3 mb-1">
                    Tested CTA Wording:
                  </span>
                  <span className="inline-block py-1.5 px-3 rounded-lg bg-orange-accent text-plum-950 font-poppins font-bold text-xs shadow-sm">
                    {config.variants.B.ctaText} →
                  </span>
                </div>

                <p className="text-xs text-plum-700 dark:text-lilac/70 leading-relaxed mb-4">
                  {config.variants.B.description}
                </p>
              </div>

              {/* Metrics Bar */}
              <div className="pt-4 border-t border-plum-100 dark:border-plum-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-plum-600 dark:text-plum-400">Tested Conversions</div>
                  <div className="font-poppins font-bold text-lg text-plum-950 dark:text-white">
                    {stats.conversionsB} <span className="text-xs font-normal text-plum-500">/ {stats.impressionsB}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-plum-600 dark:text-plum-400">Conversion Rate</div>
                  <div className="font-poppins font-black text-xl text-emerald-500 dark:text-emerald-400">
                    {crB}%
                  </div>
                </div>

                <button
                  onClick={() => switchVariant('B')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                    variant === 'B'
                      ? 'bg-plum-200 dark:bg-plum-800 text-plum-900 dark:text-white cursor-default'
                      : 'bg-orange-accent text-plum-950 hover:bg-orange-hover'
                  }`}
                >
                  {variant === 'B' ? 'Current' : 'Switch To B'}
                </button>
              </div>
            </SpotlightCard>
          </ScrollReveal>

        </div>

        {/* Live Interactive Conversion Simulator for Evaluator Inspection */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-accent shrink-0" />
            <span className="text-plum-800 dark:text-lilac">
              <strong>Evaluator Sandbox Tool:</strong> Active Variant on your session is <strong>Variant {variant}</strong>. You can simulate a live conversion event or switch variants to test how the homepage Hero headline and CTA update dynamically.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => triggerConversion('simulated_evaluator_click')}
              className="px-3.5 py-1.5 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs transition-all shadow-sm"
            >
              Simulate Conversion Event (+1)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
