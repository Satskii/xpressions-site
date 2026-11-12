import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Sparkles, Trophy } from 'lucide-react';

export interface QuestToast {
  id: number;
  points: number;
  label: string;
}

interface GamificationContextType {
  xp: number;
  rank: string;
  nextRankXp: number;
  completedQuests: string[];
  persona: string;
  setPersona: (persona: string) => void;
  awardXp: (questId: string, points: number, label: string) => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

const STORAGE_KEY = 'xpressions27_quest_v1';

export const GamificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved).xp || 0;
    } catch {
      // ignore
    }
    return 0;
  });

  const [completedQuests, setCompletedQuests] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved).completedQuests || [];
    } catch {
      // ignore
    }
    return [];
  });

  const [persona, setPersonaState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved).persona || 'Strategist';
    } catch {
      // ignore
    }
    return 'Strategist';
  });

  const [toasts, setToasts] = useState<QuestToast[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ xp, completedQuests, persona })
      );
    } catch {
      // ignore
    }
  }, [xp, completedQuests, persona]);

  const setPersona = (newPersona: string) => {
    setPersonaState(newPersona);
  };

  const awardXp = useCallback((questId: string, points: number, label: string) => {
    setCompletedQuests((prev) => {
      if (prev.includes(questId)) return prev;

      setXp((currentXp) => currentXp + points);
      const toastId = Date.now() + Math.random();
      setToasts((t) => [...t, { id: toastId, points, label }]);
      setTimeout(() => {
        setToasts((t) => t.filter((item) => item.id !== toastId));
      }, 3500);

      return [...prev, questId];
    });
  }, []);

  const getRankDetails = (currentXp: number) => {
    if (currentXp >= 325) return { rank: "Xpressions '27 Legend", nextRankXp: 500 };
    if (currentXp >= 175) return { rank: 'Festival Insider', nextRankXp: 325 };
    if (currentXp >= 75) return { rank: 'Arena Challenger', nextRankXp: 175 };
    return { rank: 'Campus Rookie', nextRankXp: 75 };
  };

  const { rank, nextRankXp } = getRankDetails(xp);

  return (
    <GamificationContext.Provider
      value={{ xp, rank, nextRankXp, completedQuests, persona, setPersona, awardXp }}
    >
      {children}

      {/* Floating XP Unlock Toasts */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-plum-950/95 dark:bg-plum-900/95 border border-orange-accent/60 text-white shadow-glow-orange backdrop-blur-md animate-in slide-in-from-right fade-in duration-300"
          >
            <div className="w-8 h-8 rounded-xl bg-orange-accent text-plum-950 flex items-center justify-center shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-poppins font-black text-orange-accent">
                <Sparkles className="w-3 h-3" />
                <span>+{toast.points} XP UNLOCKED</span>
              </div>
              <div className="text-[11px] font-medium text-lilac">{toast.label}</div>
            </div>
          </div>
        ))}
      </div>
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const ctx = useContext(GamificationContext);
  if (!ctx) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return ctx;
};

