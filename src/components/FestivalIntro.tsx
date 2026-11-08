import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface FestivalIntroProps {
  onLearnMore: () => void;
  onExplorePillars: () => void;
}

export const FestivalIntro: React.FC<FestivalIntroProps> = ({ onLearnMore, onExplorePillars }) => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-festival-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-800 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-orange-accent" />
              <span>About the Festival</span>
            </div>

            <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-plum-950 tracking-tight leading-tight mb-6">
              Where strategic business minds meet{' '}
              <span className="text-orange-accent underline decoration-plum-300 decoration-wavy decoration-2 underline-offset-4">
                electrifying creative rhythm.
              </span>
            </h2>

            <div className="space-y-4 text-plum-900/80 font-inter text-base sm:text-lg leading-relaxed">
              <p>
                Organised annually by the students of <strong>XIM University, Bhubaneswar</strong> through <strong>X-Stec</strong> and the <strong>Student Executive Council</strong>, Xpressions is the premier management-cultural confluence of Eastern India.
              </p>
              <p>
                Unlike generic festivals that compartmentalize academics and celebration, Xpressions thrives on their synergy. In the morning, teams debate multi-crore turnaround cases and trade equities in simulated real-time markets. By sunset, the campus transforms into a vibrant carnival of acoustic chords, street theatre, runway lights, and stadium pro nights.
              </p>
            </div>

            {/* Strategic Principle Box */}
            <div className="mt-8 p-6 rounded-2xl bg-lilac-light border-l-4 border-plum-800 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-plum-800 mb-1">
                The Xpressions Ethos
              </div>
              <blockquote className="font-poppins font-bold text-lg sm:text-xl text-plum-950 italic">
                “Scale is reported. Clarity is experienced.”
              </blockquote>
              <p className="text-xs sm:text-sm text-plum-900/70 mt-2">
                Every event provides clear rules, transparent criteria, and an effortless path for students nationwide to challenge themselves and shine.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePillars}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-plum-800 hover:bg-plum-900 text-white font-poppins font-semibold text-sm shadow-md transition-all hover:scale-105"
              >
                <span>Discover the Four Pillars</span>
                <ArrowRight className="w-4 h-4 text-orange-accent" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Editorial Collage */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Backing decorative colored card */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-plum-800 to-orange-accent opacity-15 transform rotate-2 blur-sm" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-plum-100 bg-plum-900">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                  alt="Student delegates collaborating in case competition"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                
                {/* Floating highlight badge */}
                <div className="p-6 bg-gradient-to-t from-plum-950 via-plum-900 to-transparent text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-accent mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>One Festival · Two Stages</span>
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-white">
                    The Case Floor & The Concert Stage
                  </h3>
                  <p className="text-xs text-lilac mt-1">
                    Prove your business acumen by day; celebrate high-octane campus spirit by night.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-plum-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-accent/20 flex items-center justify-center font-poppins font-black text-plum-900 text-xl">
                  X
                </div>
                <div>
                  <div className="font-poppins font-bold text-sm text-plum-950">
                    Student-Run Legacy
                  </div>
                  <div className="text-xs text-plum-700/80">
                    By Students, For Students
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
