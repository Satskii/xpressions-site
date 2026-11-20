/**
 * Xpressions '27 Marketing Analytics & GA4 Attribution Engine
 * Supports standard Google Analytics (gtag.js) and local in-browser attribution telemetry.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

export interface AnalyticsEvent {
  id: string;
  name: string;
  params: Record<string, any>;
  timestamp: string;
}

export interface CampaignVisit {
  id: string;
  timestamp: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  referrer: string;
  path: string;
}

const STORAGE_KEYS = {
  FIRST_TOUCH: 'xpressions_first_touch_utm',
  LAST_TOUCH: 'xpressions_last_touch_utm',
  VISIT_LOG: 'xpressions_campaign_visits',
  EVENT_LOG: 'xpressions_analytics_events',
  EXPERIMENT: 'xpressions_ab_experiment',
};

/**
 * Extract UTM query parameters from a URL or query string
 */
export function extractUtmParams(search: string = window.location.search): UtmParams {
  const params = new URLSearchParams(search);
  const utm: UtmParams = {};

  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const term = params.get('utm_term');
  const content = params.get('utm_content');

  if (source) utm.source = source.toLowerCase();
  if (medium) utm.medium = medium.toLowerCase();
  if (campaign) utm.campaign = campaign.toLowerCase();
  if (term) utm.term = term.toLowerCase();
  if (content) utm.content = content.toLowerCase();

  return utm;
}

/**
 * Record a visit with UTM tracking
 */
export function recordCampaignVisit(path: string = window.location.pathname): CampaignVisit | null {
  const utm = extractUtmParams();

  // If no UTM parameters, check if there is an experiment override or referrer
  const hasUtm = Boolean(utm.source || utm.medium || utm.campaign || utm.content);

  const visit: CampaignVisit = {
    id: `visit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
    utmSource: utm.source || (document.referrer ? new URL(document.referrer, window.location.origin).hostname : 'direct'),
    utmMedium: utm.medium || (hasUtm ? 'referral' : 'organic'),
    utmCampaign: utm.campaign || 'xpressions_launch_nov2026',
    utmContent: utm.content || 'direct_landing',
    referrer: document.referrer || 'direct',
    path,
  };

  try {
    // Record first touch if not already set
    if (!localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH)) {
      localStorage.setItem(STORAGE_KEYS.FIRST_TOUCH, JSON.stringify(visit));
    }
    // Always update last touch
    localStorage.setItem(STORAGE_KEYS.LAST_TOUCH, JSON.stringify(visit));

    // Append to visits log
    const existing = getStoredVisits();
    existing.unshift(visit);
    // Keep last 150 visits
    localStorage.setItem(STORAGE_KEYS.VISIT_LOG, JSON.stringify(existing.slice(0, 150)));
  } catch (err) {
    console.warn('[Analytics] Failed to save visit to localStorage', err);
  }

  // Dispatch to Google Analytics (gtag.js)
  trackGaEvent('campaign_visit', {
    source: visit.utmSource,
    medium: visit.utmMedium,
    campaign: visit.utmCampaign,
    content: visit.utmContent,
    page_path: path,
  });

  return visit;
}

/**
 * Dispatch an event to Google Analytics (GA4) with error shielding
 */
export function trackGaEvent(eventName: string, params: Record<string, any> = {}) {
  // 1. Send to window.gtag if available
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch (e) {
      console.warn('[GA4] Event dispatch warning:', e);
    }
  }

  // 2. Direct dataLayer push for Google Tag Manager triggers
  if (typeof window !== 'undefined') {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    } catch (e) {
      // ignore
    }
  }

  // 3. Save locally for the client-side audit telemetry dashboard
  try {
    const eventRecord: AnalyticsEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: eventName,
      params,
      timestamp: new Date().toISOString(),
    };

    const existingEvents: AnalyticsEvent[] = getStoredEvents();
    existingEvents.unshift(eventRecord);
    localStorage.setItem(STORAGE_KEYS.EVENT_LOG, JSON.stringify(existingEvents.slice(0, 200)));

    // Notify live DOM listeners for real-time telemetry display
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('xpressions_ga_event', { detail: eventRecord }));
    }
  } catch (err) {
    // ignore
  }
}

/**
 * Dispatch pageview to GA4 and internal log
 */
export function trackPageView(pagePath: string, pageTitle: string = document.title) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath,
    });
  }
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath,
    });
  }
  trackGaEvent('virtual_page_view', { path: pagePath, title: pageTitle });
}

export function getStoredVisits(): CampaignVisit[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.VISIT_LOG);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function getStoredEvents(): AnalyticsEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EVENT_LOG);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function getFirstTouch(): CampaignVisit | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function getLastTouch(): CampaignVisit | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LAST_TOUCH);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
