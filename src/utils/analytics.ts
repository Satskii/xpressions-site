/**
 * Xpressions '27 Multi-Campaign Analytics & GA4 Attribution Engine
 * Supports standard Google Analytics 4 (gtag.js / dataLayer) and persistent in-browser attribution telemetry.
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

export interface ActiveCampaignInfo {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term?: string;
  isAttributed: boolean;
  firstTouchTimestamp?: string;
}

const STORAGE_KEYS = {
  SESSION_CAMPAIGN: 'xpressions_session_campaign',
  FIRST_TOUCH: 'xpressions_first_touch_utm',
  LAST_TOUCH: 'xpressions_last_touch_utm',
  VISIT_LOG: 'xpressions_campaign_visits',
  EVENT_LOG: 'xpressions_analytics_events',
  EXPERIMENT: 'xpressions_ab_experiment',
  LIVE_CLICKS: 'xpressions_live_campaign_clicks',
};

export interface LiveCampaignData {
  clicks: number;
  sessions: number;
  lastClickAt: string;
}

export type LiveCampaignMap = Record<string, LiveCampaignData>;

/**
 * Determine campaign canonical ID from UTM parameters
 */
export function getCampaignIdFromUtm(source?: string, content?: string, medium?: string): string {
  const s = (source || '').toLowerCase().trim();
  const c = (content || '').toLowerCase().trim();
  const m = (medium || '').toLowerCase().trim();

  if (s === 'whatsapp' || c.includes('creative_1') || c.includes('business')) {
    return 'campaign-a';
  }
  if (s === 'instagram' || c.includes('creative_2') || c.includes('pronite')) {
    return 'campaign-b';
  }
  if (s === 'campus_poster' || m === 'qr_scan' || c.includes('creative_3') || c.includes('passes')) {
    return 'campaign-c';
  }
  return s || 'custom-campaign';
}

/**
 * Retrieve all live campaign click and session counts from local persistence
 */
export function getLiveCampaignClicks(): LiveCampaignMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LIVE_CLICKS);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

/**
 * Increment and record a live campaign link click.
 * Dispatches to GA4 (gtag + dataLayer) and notifies all live UI components.
 */
export function recordLiveCampaignClick(
  source: string,
  medium: string = 'referral',
  campaign: string = 'xpressions_2027',
  content: string = 'none'
): { campaignId: string; clicks: number } {
  const campaignId = getCampaignIdFromUtm(source, content, medium);
  let liveMap: LiveCampaignMap = {};

  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.LIVE_CLICKS);
      if (raw) liveMap = JSON.parse(raw);
    } catch (e) {
      // ignore
    }

    const current: LiveCampaignData = liveMap[campaignId] || { clicks: 0, sessions: 0, lastClickAt: '' };
    current.clicks += 1;
    current.lastClickAt = new Date().toISOString();
    liveMap[campaignId] = current;

    try {
      localStorage.setItem(STORAGE_KEYS.LIVE_CLICKS, JSON.stringify(liveMap));
    } catch (e) {
      // ignore
    }

    // Broadcast update event so React components instantly reflect the incremented click
    window.dispatchEvent(
      new CustomEvent('xpressions_campaign_click_updated', {
        detail: {
          campaignId,
          clicks: current.clicks,
          sessions: current.sessions,
          source,
          medium,
          campaign,
          content,
          timestamp: current.lastClickAt,
        },
      })
    );
  }

  // Dispatch live click telemetry to Google Analytics 4 & Tag Manager
  trackGaEvent('campaign_link_click', {
    campaign_id: campaignId,
    campaign_source: source,
    campaign_medium: medium,
    campaign_name: campaign,
    campaign_content: content,
    live_click_number: liveMap[campaignId]?.clicks || 1,
    click_timestamp: new Date().toISOString(),
  });

  return { campaignId, clicks: liveMap[campaignId]?.clicks || 1 };
}

/**
 * Increment and record a live incoming campaign session
 */
export function recordLiveCampaignSession(
  source: string,
  medium: string = 'referral',
  campaign: string = 'xpressions_2027',
  content: string = 'none'
): number {
  const campaignId = getCampaignIdFromUtm(source, content, medium);
  let liveMap: LiveCampaignMap = {};

  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.LIVE_CLICKS);
      if (raw) liveMap = JSON.parse(raw);
    } catch (e) {
      // ignore
    }

    const current: LiveCampaignData = liveMap[campaignId] || { clicks: 0, sessions: 0, lastClickAt: '' };
    current.sessions += 1;
    liveMap[campaignId] = current;

    try {
      localStorage.setItem(STORAGE_KEYS.LIVE_CLICKS, JSON.stringify(liveMap));
    } catch (e) {
      // ignore
    }

    window.dispatchEvent(
      new CustomEvent('xpressions_campaign_click_updated', {
        detail: {
          campaignId,
          clicks: current.clicks,
          sessions: current.sessions,
          source,
          medium,
          campaign,
          content,
        },
      })
    );
  }

  return liveMap[campaignId]?.sessions || 1;
}

/**
 * Reset live click telemetry counters (useful for testing or clearing staging data)
 */
export function resetLiveCampaignMetrics(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.LIVE_CLICKS);
    window.dispatchEvent(new CustomEvent('xpressions_campaign_click_updated', { detail: { reset: true } }));
  } catch (e) {
    // ignore
  }
}

/**
 * Extract UTM query parameters from a URL or query string
 */
export function extractUtmParams(search: string = typeof window !== 'undefined' ? window.location.search : ''): UtmParams {
  if (!search) return {};
  const params = new URLSearchParams(search);
  const utm: UtmParams = {};

  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const term = params.get('utm_term');
  const content = params.get('utm_content');

  if (source) utm.source = source.toLowerCase().trim();
  if (medium) utm.medium = medium.toLowerCase().trim();
  if (campaign) utm.campaign = campaign.toLowerCase().trim();
  if (term) utm.term = term.toLowerCase().trim();
  if (content) utm.content = content.toLowerCase().trim();

  return utm;
}

/**
 * Retrieve the active session campaign attribution.
 * Prioritizes sessionStorage to guarantee that attribution survives internal React Router navigation.
 */
export function getActiveCampaign(): ActiveCampaignInfo {
  if (typeof window === 'undefined') {
    return { source: 'direct', medium: 'none', campaign: 'none', content: 'none', isAttributed: false };
  }

  // 1. Primary: Session storage (preserved across React Router transitions and page refreshes)
  try {
    const rawSession = sessionStorage.getItem(STORAGE_KEYS.SESSION_CAMPAIGN);
    if (rawSession) {
      const parsed = JSON.parse(rawSession);
      if (parsed && parsed.source && parsed.source !== 'direct') {
        return {
          source: parsed.source,
          medium: parsed.medium || 'referral',
          campaign: parsed.campaign || 'xpressions_2027',
          content: parsed.content || 'none',
          term: parsed.term,
          isAttributed: true,
          firstTouchTimestamp: parsed.timestamp,
        };
      }
    }
  } catch (e) {
    // ignore
  }

  // 2. Secondary fallback: Local storage last touch for returning visitors
  try {
    const rawLocal = localStorage.getItem(STORAGE_KEYS.LAST_TOUCH);
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      if (parsed && parsed.utmSource && parsed.utmSource !== 'direct') {
        return {
          source: parsed.utmSource,
          medium: parsed.utmMedium || 'referral',
          campaign: parsed.utmCampaign || 'xpressions_2027',
          content: parsed.utmContent || 'none',
          isAttributed: true,
          firstTouchTimestamp: parsed.timestamp,
        };
      }
    }
  } catch (e) {
    // ignore
  }

  // 3. Fallback: Direct visit
  return {
    source: 'direct',
    medium: 'none',
    campaign: 'none',
    content: 'none',
    isAttributed: false,
  };
}

/**
 * Record a visit with UTM tracking without wiping active campaign during internal SPA navigation.
 * Every time an incoming campaign link is clicked/visited, adds to analytics & GA4 telemetry.
 */
export function recordCampaignVisit(
  path: string = typeof window !== 'undefined' ? window.location.pathname : '/',
  search?: string
): CampaignVisit | null {
  if (typeof window === 'undefined') return null;

  const searchQuery = search !== undefined ? search : (typeof window !== 'undefined' ? window.location.search : '');
  const utm = extractUtmParams(searchQuery);
  const hasIncomingUtm = Boolean(utm.source || utm.medium || utm.campaign || utm.content);

  let activeSource = utm.source;
  let activeMedium = utm.medium;
  let activeCampaign = utm.campaign;
  let activeContent = utm.content;

  if (hasIncomingUtm) {
    // New incoming campaign touchpoint: persist to sessionStorage
    const sessionPayload = {
      source: activeSource || 'direct',
      medium: activeMedium || 'referral',
      campaign: activeCampaign || 'xpressions_2027',
      content: activeContent || 'none',
      term: utm.term || '',
      timestamp: new Date().toISOString(),
    };
    try {
      sessionStorage.setItem(STORAGE_KEYS.SESSION_CAMPAIGN, JSON.stringify(sessionPayload));
    } catch (e) {
      // ignore
    }

    // Every single click/visit on the campaign link increments live analytics and dispatches to GA4!
    const liveClickResult = recordLiveCampaignClick(
      activeSource || 'direct',
      activeMedium || 'referral',
      activeCampaign || 'xpressions_2027',
      activeContent || 'none'
    );
    recordLiveCampaignSession(
      activeSource || 'direct',
      activeMedium || 'referral',
      activeCampaign || 'xpressions_2027',
      activeContent || 'none'
    );

    console.log(`[Analytics] +1 Campaign Click & Visit registered for ${liveClickResult.campaignId} (Total: ${liveClickResult.clicks})`);
  } else {
    // Internal navigation or direct entry: check if session already has attribution
    const existing = getActiveCampaign();
    if (existing.isAttributed) {
      // Retain active campaign throughout internal SPA browsing!
      activeSource = existing.source;
      activeMedium = existing.medium;
      activeCampaign = existing.campaign;
      activeContent = existing.content;
    } else {
      // Truly direct or referrer visit
      activeSource = document.referrer ? new URL(document.referrer, window.location.origin).hostname : 'direct';
      activeMedium = document.referrer ? 'referral' : 'none';
      activeCampaign = 'none';
      activeContent = 'none';
    }
  }

  const visit: CampaignVisit = {
    id: `visit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
    utmSource: activeSource || 'direct',
    utmMedium: activeMedium || 'none',
    utmCampaign: activeCampaign || 'none',
    utmContent: activeContent || 'none',
    referrer: document.referrer || 'direct',
    path,
  };

  try {
    // Record first touch if not already set
    if (!localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH)) {
      localStorage.setItem(STORAGE_KEYS.FIRST_TOUCH, JSON.stringify(visit));
    }
    // Update last touch only if this was an attributed touchpoint or first touch
    if (hasIncomingUtm || !localStorage.getItem(STORAGE_KEYS.LAST_TOUCH)) {
      localStorage.setItem(STORAGE_KEYS.LAST_TOUCH, JSON.stringify(visit));
    }

    // Append to visits log (keep last 200 visits)
    const existingVisits = getStoredVisits();
    existingVisits.unshift(visit);
    localStorage.setItem(STORAGE_KEYS.VISIT_LOG, JSON.stringify(existingVisits.slice(0, 200)));
  } catch (err) {
    console.warn('[Analytics] Failed to save visit to storage', err);
  }

  // Only dispatch campaign_visit event on initial incoming campaign entry
  if (hasIncomingUtm) {
    trackGaEvent('campaign_visit', {
      source: visit.utmSource,
      medium: visit.utmMedium,
      campaign: visit.utmCampaign,
      content: visit.utmContent,
      page_path: path,
    });
  }

  return visit;
}

/**
 * Sanitize parameters to ensure NO personally identifiable information (PII) is sent to GA4
 */
function sanitizeGaParams(params: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  const PII_KEYS = ['name', 'fullname', 'full_name', 'email', 'phone', 'mobile', 'phonenumber', 'password'];

  for (const [key, value] of Object.entries(params)) {
    if (PII_KEYS.includes(key.toLowerCase())) {
      continue; // Strip PII
    }
    sanitized[key] = value;
  }
  return sanitized;
}

/**
 * Dispatch an event to Google Analytics (GA4) & GTM dataLayer with auto-enriched campaign attribution
 */
export function trackGaEvent(eventName: string, params: Record<string, any> = {}) {
  const activeCampaign = getActiveCampaign();
  const sanitizedParams = sanitizeGaParams(params);

  // Auto-enrich with active campaign attribution & page path
  const enrichedParams: Record<string, any> = {
    campaign_source: activeCampaign.source,
    campaign_medium: activeCampaign.medium,
    campaign_name: activeCampaign.campaign,
    campaign_content: activeCampaign.content,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    ...sanitizedParams,
  };

  // 1. Dispatch to window.gtag
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, enrichedParams);
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
        ...enrichedParams,
      });
    } catch (e) {
      // ignore
    }
  }

  // 3. Save locally for client-side audit telemetry & live dashboard
  try {
    const eventRecord: AnalyticsEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: eventName,
      params: enrichedParams,
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
 * Dispatch pageview to GA4 and internal log (guaranteed once per route change)
 */
export function trackPageView(pagePath: string, pageTitle: string = typeof document !== 'undefined' ? document.title : '') {
  const activeCampaign = getActiveCampaign();

  const payload = {
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_path: pagePath,
    campaign_source: activeCampaign.source,
    campaign_medium: activeCampaign.medium,
    campaign_name: activeCampaign.campaign,
    campaign_content: activeCampaign.content,
  };

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', payload);
  }

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      ...payload,
    });
  }

  trackGaEvent('virtual_page_view', { path: pagePath, title: pageTitle });
}

export function getStoredVisits(): CampaignVisit[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.VISIT_LOG);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function getStoredEvents(): AnalyticsEvent[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EVENT_LOG);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function getFirstTouch(): CampaignVisit | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function getLastTouch(): CampaignVisit | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LAST_TOUCH);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
