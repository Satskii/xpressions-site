import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FestivalIntroProps {
  onLearnMore: () => void;
  onExplorePillars: () => void;
}

export const FestivalIntro: React.FC<FestivalIntroProps> = ({ onExplorePillars }) => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white dark:bg-plum-950 text-plum-950 dark:text-white relative overflow-hidden w-full max-w-full transition-colors duration-300">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-festival-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="blur-up" duration={700}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 dark:bg-plum-900/80 border border-plum-200/80 dark:border-plum-800 text-plum-800 dark:text-lilac text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-orange-accent" />
                <span>About the Festival</span>
              </div>

              <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-plum-950 dark:text-white tracking-tight leading-tight mb-5 sm:mb-6">
                Where strategic business minds meet{' '}
                <span className="text-orange-accent underline decoration-plum-300 dark:decoration-plum-700 decoration-wavy decoration-2 underline-offset-4">
                  electrifying creative rhythm.
                </span>
              </h2>

              <div className="space-y-4 text-plum-900/80 dark:text-lilac/80 font-inter text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Organised annually by the students of <strong>XIMB, Bhubaneswar</strong> through <strong>X-Stec</strong> and the <strong>Student Executive Council</strong>, Xpressions is the premier management-cultural confluence of Eastern India.
                </p>
                <p>
                  Unlike generic festivals that compartmentalize academics and celebration, Xpressions thrives on their synergy. In the morning, teams debate multi-crore turnaround cases and trade equities in simulated real-time markets. By sunset, the campus transforms into a vibrant carnival of acoustic chords, street theatre, runway lights, and stadium pro nights.
                </p>
              </div>

              {/* Strategic Principle Box */}
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-lilac-light/70 dark:bg-plum-900/60 border-l-4 border-plum-800 dark:border-orange-accent shadow-sm">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-plum-800 dark:text-orange-accent mb-1">
                  The Xpressions Ethos
                </div>
                <blockquote className="font-poppins font-bold text-base sm:text-xl text-plum-950 dark:text-white italic">
                  “Scale is reported. Clarity is experienced.”
                </blockquote>
                <p className="text-xs sm:text-sm text-plum-900/70 dark:text-lilac/70 mt-1.5 leading-relaxed">
                  Every event provides clear rules, transparent criteria, and an effortless path for students nationwide to challenge themselves and shine.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onExplorePillars}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-plum-800 dark:bg-orange-accent hover:bg-plum-900 dark:hover:bg-orange-hover text-white dark:text-plum-950 font-poppins font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Discover the Four Pillars</span>
                  <ArrowRight className="w-4 h-4 text-orange-accent dark:text-plum-950" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Editorial Collage */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="zoom" delay={150} duration={750}>
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Backing decorative colored card */}
                <div className="hidden sm:block absolute -inset-3 rounded-3xl bg-gradient-to-tr from-plum-800 to-orange-accent opacity-20 transform rotate-1 blur-sm pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-plum-200/80 dark:border-plum-800/80 bg-plum-900">
                  <img
                    src="/images/real_fest/carnival_de_vogue_stage.jpg"
                    alt="Xpressions Carnival De Vogue live stage presentation at XIMB"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Floating highlight badge inside image */}
                  <div className="p-5 sm:p-6 bg-gradient-to-t from-plum-950 via-plum-900/90 to-transparent text-white">
                    <div className="flex items-center gap-2 text-xs font-semibold text-orange-accent mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>One Festival · Two Stages</span>
                    </div>
                    <h3 className="font-poppins font-bold text-base sm:text-lg text-white">
                      The Case Floor & The Concert Stage
                    </h3>
                    <p className="text-xs text-lilac/90 mt-1 leading-relaxed">
                      Prove your business acumen by day; celebrate high-octane campus spirit by night.
                    </p>
                  </div>
                </div>

                {/* Clean Non-Overlapping Stat Card below Visual */}
                <div className="mt-4 bg-white dark:bg-plum-900/90 p-3.5 sm:p-4 rounded-2xl shadow-lg border border-plum-200/80 dark:border-plum-800/80 flex items-center justify-between gap-3 w-full transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-accent/20 dark:bg-orange-accent/25 flex items-center justify-center font-poppins font-black text-plum-900 dark:text-orange-accent text-lg shrink-0">
                      X
                    </div>
                    <div>
                      <div className="font-poppins font-bold text-xs sm:text-sm text-plum-950 dark:text-white">
                        Student-Run Legacy
                      </div>
                      <div className="text-[11px] text-plum-700/80 dark:text-lilac/70">
                        By Students, For Students
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-plum-800/80 text-orange-accent font-poppins font-bold text-[10px] border border-plum-700 shrink-0">
                    X-Stec &amp; SEC
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
