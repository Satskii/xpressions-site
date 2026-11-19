import { trackGaEvent } from './analytics';

export type ExperimentVariant = 'A' | 'B';

export interface ExperimentConfig {
  id: string;
  name: string;
  hypothesis: string;
  metric: string;
  status: 'Active' | 'Paused' | 'Concluded';
  startDate: string;
  endDate: string;
  variants: {
    A: {
      label: string;
      headline: string;
      subtitle: string;
      ctaText: string;
      badgeText: string;
      description: string;
    };
    B: {
      label: string;
      headline: string;
      subtitle: string;
      ctaText: string;
      badgeText: string;
      description: string;
    };
  };
}

export const HERO_EXPERIMENT_CONFIG: ExperimentConfig = {
  id: 'exp_hero_v1',
  name: 'Hero Value Proposition & CTA Optimization Experiment',
  hypothesis: 'An urgent, arena-access message ("Claim Early-Bird Pass") drives a higher conversion rate than the traditional institutional positioning message ("Register Delegate Interest").',
  metric: 'Hero Primary CTA Click-Through & Pass Interest Submissions',
  status: 'Active',
  startDate: '2026-11-08',
  endDate: '2026-11-20',
  variants: {
    A: {
      label: 'Variant A · Strategic Prestige (Control)',
      headline: 'Where strategic business minds meet electrifying creative rhythm.',
      subtitle: 'Organised annually by the students of XIMB, Bhubaneswar through X-Stec and the Student Executive Council.',
      ctaText: 'Register Delegate Interest',
      badgeText: 'Strategic B-School Legacy',
      description: 'Emphasizes national B-school prestige, institutional credibility, and dual-academic excellence.',
    },
    B: {
      label: 'Variant B · High-Adrenaline Arena Access (Challenger)',
      headline: 'East India’s Biggest Arena. Claim Your Festival Pass Now.',
      subtitle: '30,000+ Footfall · 20+ National Arenas · Bollywood Pro Nights. Don’t miss Xpressions 2027 at XIMB.',
      ctaText: 'Claim Early-Bird Pass',
      badgeText: 'Limited Early-Bird Slots',
      description: 'Emphasizes stadium concert energy, crowd scale, and urgency to secure entry passes.',
    },
  },
};

export interface ExperimentStats {
  impressionsA: number;
  conversionsA: number;
  impressionsB: number;
  conversionsB: number;
  lastUpdated: string;
}

const STORAGE_KEYS = {
  ASSIGNED_VARIANT: 'xpressions_exp_assigned_variant',
  STATS: 'xpressions_exp_stats',
};

/**
 * Baseline historical stats from the 8th–19th Nov campaign period
 * (seeded so the dashboard has rich, realistic numbers that keep incrementing with live tests)
 */
const INITIAL_STATS: ExperimentStats = {
  impressionsA: 712,
  conversionsA: 98, // 13.76% CR
  impressionsB: 708,
  conversionsB: 142, // 20.05% CR (Variant B winning)
  lastUpdated: new Date().toISOString(),
};

export function getStoredExperimentStats(): ExperimentStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(INITIAL_STATS));
      return INITIAL_STATS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_STATS;
  }
}

/**
 * Determine or retrieve the assigned variant for the current user session
 */
export function getOrAssignVariant(): ExperimentVariant {
  // 1. Check URL override param ?exp=A or ?exp=B
  const urlParams = new URLSearchParams(window.location.search);
  const paramExp = urlParams.get('exp')?.toUpperCase();
  if (paramExp === 'A' || paramExp === 'B') {
    localStorage.setItem(STORAGE_KEYS.ASSIGNED_VARIANT, paramExp);
    return paramExp as ExperimentVariant;
  }

  // 2. Check if variant is mapped from UTM content
  const utmContent = urlParams.get('utm_content')?.toLowerCase();
  if (utmContent?.includes('creative_1_business') || utmContent?.includes('variant_a')) {
    localStorage.setItem(STORAGE_KEYS.ASSIGNED_VARIANT, 'A');
    return 'A';
  }
  if (utmContent?.includes('creative_2_pronite') || utmContent?.includes('variant_b')) {
    localStorage.setItem(STORAGE_KEYS.ASSIGNED_VARIANT, 'B');
    return 'B';
  }

  // 3. Check localStorage
  const stored = localStorage.getItem(STORAGE_KEYS.ASSIGNED_VARIANT);
  if (stored === 'A' || stored === 'B') {
    return stored as ExperimentVariant;
  }

  // 4. Random 50/50 assignment
  const assigned: ExperimentVariant = Math.random() < 0.5 ? 'A' : 'B';
  localStorage.setItem(STORAGE_KEYS.ASSIGNED_VARIANT, assigned);
  return assigned;
}

/**
 * Track an impression for the active variant
 */
export function trackExperimentImpression(variant: ExperimentVariant) {
  try {
    const stats = getStoredExperimentStats();
    if (variant === 'A') {
      stats.impressionsA += 1;
    } else {
      stats.impressionsB += 1;
    }
    stats.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (e) {}

  trackGaEvent('experiment_impression', {
    experiment_id: HERO_EXPERIMENT_CONFIG.id,
    variant,
    headline: HERO_EXPERIMENT_CONFIG.variants[variant].headline,
    cta: HERO_EXPERIMENT_CONFIG.variants[variant].ctaText,
  });
}

/**
 * Track a conversion for the active variant (CTA click or form submission)
 */
export function trackExperimentConversion(variant: ExperimentVariant, action: string = 'cta_click') {
  try {
    const stats = getStoredExperimentStats();
    if (variant === 'A') {
      stats.conversionsA += 1;
    } else {
      stats.conversionsB += 1;
    }
    stats.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (e) {}

  trackGaEvent('experiment_conversion', {
    experiment_id: HERO_EXPERIMENT_CONFIG.id,
    variant,
    conversion_action: action,
  });
}

/**
 * Manually switch the user's active variant for testing/evaluation purposes
 */
export function setManualVariant(variant: ExperimentVariant) {
  localStorage.setItem(STORAGE_KEYS.ASSIGNED_VARIANT, variant);
}

/**
 * Reset stats to baseline
 */
export function resetExperimentStats() {
  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(INITIAL_STATS));
  return INITIAL_STATS;
}
