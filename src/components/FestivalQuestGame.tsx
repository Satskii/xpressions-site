import React, { useState } from 'react';
import { Trophy, Sparkles, CheckCircle2, Zap, Award, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useGamification } from '../context/GamificationContext';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

interface FestivalQuestGameProps {
  onRegisterInterest: () => void;
}

const TRIVIA_QUESTIONS = [
  {
    q: "Where is Xpressions '27 proudly hosted?",
    options: ["XIMB, Xavier Square, Bhubaneswar", "IIT Kharagpur", "IIM Calcutta"],
    correct: 0,
    fact: "XIMB at Xavier Square, Jayadev Vihar, Bhubaneswar is the historic home of Xpressions!"
  },
  {
    q: "Which flagship Xpressions contest is Eastern India's premier National Battle of the Bands?",
    options: ["Trade Wars", "Decibelz", "Gladiator"],
    correct: 1,
    fact: "Decibelz brings collegiate rock & fusion bands under stadium concert audio rigs!"
  },
  {
    q: "What is the official motto capturing Xpressions' dual spirit?",
    options: ["Where Business Meets the Beat", "Work Hard Only", "Just Campus Life"],
    correct: 0,
    fact: "Where Business Meets the Beat — uniting boardroom case battles with star pro nights!"
  }
];

const PERSONAS = [
  { id: 'Strategist', label: 'Boardroom Strategist', icon: '♟️' },
  { id: 'Headliner', label: 'Stage Headliner', icon: '🎸' },
  { id: 'Trendsetter', label: 'Runway Trendsetter', icon: '✨' },
  { id: 'Explorer', label: 'Campus Trailblazer', icon: '⚡' },
];

export const FestivalQuestGame: React.FC<FestivalQuestGameProps> = ({ onRegisterInterest }) => {
  const { xp, rank, nextRankXp, completedQuests, persona, setPersona, awardXp } = useGamification();

  const [activeTab, setActiveTab] = useState<'trivia' | 'quests'>('trivia');
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const quests = [
    { id: 'arena_explorer', label: 'Switch to The Business Arena', xp: 50 },
    { id: 'stage_explorer', label: 'Switch to The Cultural Stage', xp: 50 },
    { id: 'rulebook_scout', label: 'Inspect an Event Rulebook', xp: 75 },
    { id: 'persona_picker', label: 'Customize Your Festival Persona', xp: 25 },
    { id: 'trivia_champion', label: "Clear the Xpressions '27 Challenge", xp: 100 },
    { id: 'interest_submitted', label: 'Register Your Festival Interest', xp: 200 },
  ];

  const handleSelectPersona = (personaId: string) => {
    setPersona(personaId);
    awardXp('persona_picker', 25, 'Customized Your Challenger Pass!');
  };

  const handleOptionClick = (optIdx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(optIdx);

    const isRight = optIdx === TRIVIA_QUESTIONS[questionIdx].correct;
    const newScore = isRight ? score + 1 : score;
    if (isRight) setScore(newScore);

    setTimeout(() => {
      if (questionIdx + 1 < TRIVIA_QUESTIONS.length) {
        setQuestionIdx(questionIdx + 1);
        setSelectedOpt(null);
      } else {
        setQuizFinished(true);
        if (newScore >= 2) {
          awardXp('trivia_champion', 100, "Cleared Xpressions '27 Challenge!");
          try {
            confetti({
              particleCount: 70,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#F0A05A', '#E6D3E8', '#38213D'],
            });
          } catch {
            // graceful fallback
          }
        }
      }
    }, 1100);
  };

  const resetQuiz = () => {
    setQuestionIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setQuizFinished(false);
  };

  const progressPercent = Math.min(100, Math.round((xp / 500) * 100));

  return (
    <section id="festival-quest" className="py-16 sm:py-24 bg-plum-50/60 dark:bg-plum-950 text-plum-950 dark:text-white border-t border-plum-200/80 dark:border-plum-850 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 border border-orange-accent/30 text-orange-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Interactive Challenger Arena</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-plum-950 dark:text-white">
              Unlock Your Xpressions &apos;27 Pass
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 leading-relaxed">
              Earn Festival XP as you explore arenas, answer quick trivia, and customize your digital challenger card for XIMB.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Live Digital Challenger Pass (5 cols) */}
          <ScrollReveal direction="blur-up" delay={100} duration={700} className="lg:col-span-5">
            <SpotlightCard className="h-full rounded-3xl bg-gradient-to-br from-plum-950 via-plum-900 to-plum-850 text-white border border-plum-750 p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-orange-accent/15 blur-3xl pointer-events-none" />
              
              <div>
                {/* Pass Header */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-plum-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-accent text-plum-950 font-poppins font-black text-lg flex items-center justify-center shadow-md">
                      X
                    </div>
                    <div>
                      <div className="font-poppins font-black text-sm tracking-wide text-white">
                        XPRESSIONS &apos;27 PASS
                      </div>
                      <div className="text-[10px] text-orange-accent font-semibold uppercase tracking-wider">
                        XIMB · Bhubaneswar
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-plum-800 border border-plum-700 text-xs font-poppins font-bold text-orange-accent flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{xp} XP</span>
                  </div>
                </div>

                {/* Rank & Progress Bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-lilac/70 font-medium">Current Challenger Rank</span>
                    <span className="font-poppins font-bold text-orange-accent">{rank}</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-plum-950 border border-plum-800 overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-accent via-amber-300 to-lilac transition-all duration-700"
                      style={{ width: `${Math.max(8, progressPercent)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-lilac/60 mt-1.5">
                    <span>{completedQuests.length} of {quests.length} Quests Completed</span>
                    <span>Next Tier: {nextRankXp} XP</span>
                  </div>
                </div>

                {/* Persona Selector */}
                <div className="mt-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-lilac/80 mb-2.5">
                    Select Your Festival Persona
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {PERSONAS.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelectPersona(p.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2 text-xs ${
                          persona === p.id
                            ? 'bg-orange-accent text-plum-950 border-orange-accent font-bold shadow-sm'
                            : 'bg-plum-900/70 text-lilac border-plum-800 hover:border-plum-600'
                        }`}
                      >
                        <span className="text-base">{p.icon}</span>
                        <span className="truncate">{p.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pass Footer */}
              <div className="mt-6 pt-4 border-t border-plum-800 flex items-center justify-between gap-3">
                <div className="text-[11px] text-lilac/80">
                  Identity: <strong className="text-white">{persona}</strong>
                </div>
                <button
                  onClick={onRegisterInterest}
                  className="px-4 py-2 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Claim +200 XP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Right Column: Mini-Trivia & Quest Tracker (7 cols) */}
          <ScrollReveal direction="blur-up" delay={180} duration={700} className="lg:col-span-7">
            <SpotlightCard className="h-full rounded-3xl bg-white dark:bg-plum-900/70 border border-plum-200/80 dark:border-plum-800/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              
              {/* Tabs */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-plum-100 dark:border-plum-800 mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('trivia')}
                    className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all ${
                      activeTab === 'trivia'
                        ? 'bg-plum-900 dark:bg-orange-accent text-white dark:text-plum-950 shadow-sm'
                        : 'text-plum-700 dark:text-lilac hover:bg-plum-50 dark:hover:bg-plum-800'
                    }`}
                  >
                    Quick Trivia (+100 XP)
                  </button>
                  <button
                    onClick={() => setActiveTab('quests')}
                    className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all ${
                      activeTab === 'quests'
                        ? 'bg-plum-900 dark:bg-orange-accent text-white dark:text-plum-950 shadow-sm'
                        : 'text-plum-700 dark:text-lilac hover:bg-plum-50 dark:hover:bg-plum-800'
                    }`}
                  >
                    Explorer Quests ({completedQuests.length}/{quests.length})
                  </button>
                </div>

                <Award className="w-5 h-5 text-orange-accent hidden sm:block" />
              </div>

              {activeTab === 'trivia' ? (
                <div className="flex-1 flex flex-col justify-between">
                  {quizFinished ? (
                    <div className="py-6 text-center space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-accent/20 text-orange-accent flex items-center justify-center mx-auto">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white">
                        {score >= 2 ? "Challenge Cleared! +100 XP" : `You Scored ${score}/${TRIVIA_QUESTIONS.length}`}
                      </h3>
                      <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 max-w-md mx-auto">
                        {score >= 2
                          ? "You know your XIMB Xpressions heritage! Keep exploring rulebooks and arenas to reach Xpressions '27 Legend rank."
                          : "Almost there! Answer at least 2 questions correctly to unlock the +100 XP Trivia Champion reward."}
                      </p>
                      <button
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-plum-900 dark:bg-orange-accent text-white dark:text-plum-950 font-poppins font-bold text-xs hover:scale-105 transition-transform"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Play Again</span>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-orange-accent mb-2">
                        <span>Question {questionIdx + 1} of {TRIVIA_QUESTIONS.length}</span>
                        <span>Current Score: {score}</span>
                      </div>

                      <h3 className="font-poppins font-bold text-lg sm:text-xl text-plum-950 dark:text-white mb-4">
                        {TRIVIA_QUESTIONS[questionIdx].q}
                      </h3>

                      <div className="space-y-2.5">
                        {TRIVIA_QUESTIONS[questionIdx].options.map((opt, idx) => {
                          const isSelected = selectedOpt === idx;
                          const isCorrect = idx === TRIVIA_QUESTIONS[questionIdx].correct;
                          let btnStyle =
                            'bg-plum-50/70 dark:bg-plum-950/60 border-plum-200 dark:border-plum-800 text-plum-900 dark:text-white hover:border-orange-accent';

                          if (selectedOpt !== null) {
                            if (isCorrect) {
                              btnStyle =
                                'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold';
                            } else if (isSelected) {
                              btnStyle =
                                'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-800 dark:text-rose-300';
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleOptionClick(idx)}
                              disabled={selectedOpt !== null}
                              className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {selectedOpt !== null && isCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {selectedOpt !== null && (
                        <p className="mt-3 text-xs text-plum-700 dark:text-lilac/80 bg-plum-50 dark:bg-plum-850/60 p-3 rounded-xl border border-plum-100 dark:border-plum-800">
                          💡 {TRIVIA_QUESTIONS[questionIdx].fact}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2.5">
                  {quests.map((q) => {
                    const done = completedQuests.includes(q.id);
                    return (
                      <div
                        key={q.id}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                          done
                            ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/70'
                            : 'bg-plum-50/50 dark:bg-plum-950/40 border-plum-200/70 dark:border-plum-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              done
                                ? 'bg-emerald-500 text-white'
                                : 'border-2 border-plum-300 dark:border-plum-700'
                            }`}
                          >
                            {done && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span
                            className={`text-xs sm:text-sm font-medium ${
                              done
                                ? 'text-emerald-900 dark:text-emerald-200 line-through opacity-80'
                                : 'text-plum-900 dark:text-white'
                            }`}
                          >
                            {q.label}
                          </span>
                        </div>

                        <span
                          className={`text-[11px] font-poppins font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                            done
                              ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300'
                              : 'bg-orange-accent/15 text-orange-accent'
                          }`}
                        >
                          +{q.xp} XP
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

            </SpotlightCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
