import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ExperimentVariant,
  HERO_EXPERIMENT_CONFIG,
  getOrAssignVariant,
  setManualVariant as saveManualVariant,
  trackExperimentImpression,
  trackExperimentConversion,
  getStoredExperimentStats,
  ExperimentStats,
} from '../utils/experiment';

interface ExperimentContextType {
  variant: ExperimentVariant;
  config: typeof HERO_EXPERIMENT_CONFIG;
  stats: ExperimentStats;
  switchVariant: (newVariant: ExperimentVariant) => void;
  triggerConversion: (action?: string) => void;
  refreshStats: () => void;
}

const ExperimentContext = createContext<ExperimentContextType | undefined>(undefined);

export const ExperimentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [variant, setVariant] = useState<ExperimentVariant>('A');
  const [stats, setStats] = useState<ExperimentStats>(getStoredExperimentStats());

  useEffect(() => {
    const assigned = getOrAssignVariant();
    setVariant(assigned);
    trackExperimentImpression(assigned);
    setStats(getStoredExperimentStats());
  }, []);

  const switchVariant = (newVariant: ExperimentVariant) => {
    saveManualVariant(newVariant);
    setVariant(newVariant);
    trackExperimentImpression(newVariant);
    setStats(getStoredExperimentStats());
  };

  const triggerConversion = (action: string = 'cta_click') => {
    trackExperimentConversion(variant, action);
    setStats(getStoredExperimentStats());
  };

  const refreshStats = () => {
    setStats(getStoredExperimentStats());
  };

  return (
    <ExperimentContext.Provider
      value={{
        variant,
        config: HERO_EXPERIMENT_CONFIG,
        stats,
        switchVariant,
        triggerConversion,
        refreshStats,
      }}
    >
      {children}
    </ExperimentContext.Provider>
  );
};

export const useExperiment = (): ExperimentContextType => {
  const context = useContext(ExperimentContext);
  if (!context) {
    throw new Error('useExperiment must be used within an ExperimentProvider');
  }
  return context;
};
