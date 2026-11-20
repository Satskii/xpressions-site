import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  MULTI_CAMPAIGN_DATA,
  CampaignComparisonRecord,
  CAMPAIGN_INFO,
} from '../data/campaignData';
import {
  getLiveCampaignClicks,
  recordLiveCampaignClick,
  resetLiveCampaignMetrics,
  trackGaEvent,
} from '../utils/analytics';
import {
  BarChart3,
  TrendingUp,
  Target,
  Users,
  Copy,
  Check,
  Download,
  ExternalLink,
  QrCode,
  Share2,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  Calendar,
  Layers,
  ArrowUpRight,
  MessageSquare,
  Instagram,
  MapPin,
  Sliders,
  FileSpreadsheet,
  Info,
  CheckCircle2,
  AlertTriangle,
  Zap,
  RotateCcw,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

export const CampaignComparisonDashboard: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<'all' | 'phase1' | 'phase2' | 'phase3'>('all');
  const [qrCodeUrls, setQrCodeUrls] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [liveMetrics, setLiveMetrics] = useState(getLiveCampaignClicks());
  const [justClickedId, setJustClickedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Custom link generator drawer state
  const [customSource, setCustomSource] = useState('telegram');
  const [customMedium, setCustomMedium] = useState('chat_channel');
  const [customCampaign, setCustomCampaign] = useState('xpressions_2027');
  const [customContent, setCustomContent] = useState('delegate_invite');
  const [customDestination, setCustomDestination] = useState('/');
  const [customQrUrl, setCustomQrUrl] = useState('');
  const [copiedCustom, setCopiedCustom] = useState(false);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://xpressions.xim.edu.in';

  // Construct URLs dynamically from current production origin
  const getCampaignUrl = (rec: CampaignComparisonRecord) => {
    return `${origin}/?utm_source=${rec.utmSource}&utm_medium=${rec.utmMedium}&utm_campaign=${rec.utmCampaign}&utm_content=${rec.utmContent}`;
  };

  const getCustomUrl = () => {
    const path = customDestination.startsWith('/') ? customDestination : `/${customDestination}`;
    const url = new URL(path, origin);
    if (customSource) url.searchParams.set('utm_source', customSource.trim().toLowerCase());
    if (customMedium) url.searchParams.set('utm_medium', customMedium.trim().toLowerCase());
    if (customCampaign) url.searchParams.set('utm_campaign', customCampaign.trim().toLowerCase());
    if (customContent) url.searchParams.set('utm_content', customContent.trim().toLowerCase());
    return url.toString();
  };

  // Sync live click & visit metrics dynamically
  useEffect(() => {
    setLiveMetrics(getLiveCampaignClicks());

    const handleUpdate = () => {
      setLiveMetrics({ ...getLiveCampaignClicks() });
    };

    window.addEventListener('xpressions_campaign_click_updated', handleUpdate);
    return () => {
      window.removeEventListener('xpressions_campaign_click_updated', handleUpdate);
    };
  }, []);

  // Generate QR codes on mount
  useEffect(() => {
    MULTI_CAMPAIGN_DATA.forEach(async (camp) => {
      try {
        const fullUrl = getCampaignUrl(camp);
        const dataUrl = await QRCode.toDataURL(fullUrl, {
          width: 320,
          margin: 2,
          color: {
            dark: '#140A17',
            light: '#FFFFFF',
          },
        });
        setQrCodeUrls((prev) => ({ ...prev, [camp.id]: dataUrl }));
      } catch (err) {
        console.error('Failed to generate QR code for', camp.id, err);
      }
    });
  }, [origin]);

  // Update Custom QR code
  useEffect(() => {
    const url = getCustomUrl();
    QRCode.toDataURL(url, {
      width: 320,
      margin: 2,
      color: {
        dark: '#140A17',
        light: '#FFFFFF',
      },
    })
      .then((dataUrl) => setCustomQrUrl(dataUrl))
      .catch((err) => console.error('Failed custom QR generation', err));
  }, [customSource, customMedium, customCampaign, customContent, customDestination, origin]);

  const handleCopyLink = (url: string, id: string, camp?: CampaignComparisonRecord) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    if (camp) {
      trackGaEvent('campaign_link_copy', {
        campaign_id: camp.id,
        campaign_name: camp.name,
        utm_source: camp.utmSource,
        utm_medium: camp.utmMedium,
      });
    }
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Live click recorder: adds to local tally AND dispatches to GA4/GTM dataLayer
  const handleTrackCampaignClick = (camp: CampaignComparisonRecord, openInNewTab = false) => {
    const res = recordLiveCampaignClick(camp.utmSource, camp.utmMedium, camp.utmCampaign, camp.utmContent);
    setJustClickedId(camp.id);
    setTimeout(() => setJustClickedId(null), 1200);

    const totalClicksNow = camp.adLinkClicks + res.clicks;
    setToastMessage(`⚡ +1 Click added to ${camp.name}! (${totalClicksNow.toLocaleString()} total clicks recorded in GA4 & Analytics)`);
    setTimeout(() => setToastMessage(null), 4000);

    if (openInNewTab) {
      window.open(getCampaignUrl(camp), '_blank', 'noopener,noreferrer');
    }
  };

  const handleResetClicks = () => {
    if (window.confirm('Reset locally recorded test clicks to base figures?')) {
      resetLiveCampaignMetrics();
      setToastMessage('Live test click counters reset to baseline.');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleDownloadQr = (dataUrl: string, filename: string) => {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `${filename}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // CSV Export for multi-campaign dataset (incorporating live click & session data)
  const handleExportCsv = () => {
    const headers = [
      'Campaign Code',
      'Campaign Name',
      'Marketing Channel',
      'Target Audience',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign',
      'UTM Content',
      'Destination URL',
      'Ad Impressions',
      'Ad Link Clicks (Base + Live)',
      'External Ad CTR (%)',
      'External Data Source',
      'GA4 Sessions (Base + Live)',
      'Total Users',
      'Engaged Sessions',
      'Engagement Rate (%)',
      'Average Engagement Time',
      'Registration CTA Clicks',
      'Registration Modal Opens',
      'Registration Form Starts',
      'Successful Registrations',
      'Session Conversion Rate (%)',
      'Form Completion Rate (%)',
    ];

    const rows = MULTI_CAMPAIGN_DATA.map((c) => {
      const activePhaseData = c.phases[selectedPhase];
      const live = liveMetrics[c.id] || { clicks: 0, sessions: 0 };
      const sessions = activePhaseData.sessions + live.sessions;
      const registrations = activePhaseData.registrations;
      const impressions = activePhaseData.impressions;
      const linkClicks = activePhaseData.linkClicks + live.clicks;
      const ctr = impressions > 0 ? ((linkClicks / impressions) * 100).toFixed(2) : '0.00';
      const convRate = sessions > 0 ? ((registrations / sessions) * 100).toFixed(2) : '0.00';

      return [
        `"${c.code}"`,
        `"${c.name}"`,
        `"${c.channel}"`,
        `"${c.targetAudience.replace(/"/g, '""')}"`,
        `"${c.utmSource}"`,
        `"${c.utmMedium}"`,
        `"${c.utmCampaign}"`,
        `"${c.utmContent}"`,
        `"${getCampaignUrl(c)}"`,
        impressions,
        linkClicks,
        `${ctr}%`,
        `"${c.adTelemetrySource.replace(/"/g, '""')}"`,
        sessions,
        c.totalUsers,
        c.engagedSessions,
        `${c.engagementRate}%`,
        `"${c.avgEngagementTime}"`,
        c.registerCtaClicks,
        c.registrationModalOpens,
        c.registrationFormStarts,
        registrations,
        `${convRate}%`,
        `${c.formCompletionRate.toFixed(2)}%`,
      ];
    });

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Xpressions_2027_Multi_Campaign_Comparison_${selectedPhase}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Find max sessions for relative bar scaling
  const maxSessions = Math.max(
    ...MULTI_CAMPAIGN_DATA.map((c) => c.phases[selectedPhase].sessions + (liveMetrics[c.id]?.sessions || 0))
  );
  const maxRegistrations = Math.max(
    ...MULTI_CAMPAIGN_DATA.map((c) => c.phases[selectedPhase].registrations)
  );

  const totalAllClicks = MULTI_CAMPAIGN_DATA.reduce(
    (acc, c) => acc + c.adLinkClicks + (liveMetrics[c.id]?.clicks || 0),
    0
  );

  const totalLiveClicksRecorded = Object.values(liveMetrics).reduce((acc, m) => acc + (m.clicks || 0), 0);

  return (
    <div className="space-y-12 py-6 relative">
      
      {/* Top Banner Notice */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-plum-900 via-plum-850 to-plum-950 border-2 border-orange-accent/40 shadow-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-orange-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/20 text-orange-accent border border-orange-accent/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Campaign Attribution System</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-3xl text-white">
              Multi-Campaign Performance &amp; Attribution Hub
            </h2>
            <p className="text-xs sm:text-sm text-lilac/90 leading-relaxed">
              Evaluating <strong>Campaign A (WhatsApp)</strong>, <strong>Campaign B (Instagram)</strong>, and <strong>Campaign C (Campus QR)</strong> directing traffic to <strong>ONE common microsite destination</strong>. Every incoming click and visit dynamically adds up into analytics and fires to GA4.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <button
              onClick={handleExportCsv}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all group"
            >
              <FileSpreadsheet className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Export Comparison (CSV)</span>
            </button>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-plum-700/80 flex flex-wrap items-center justify-between gap-3 text-xs text-lilac/80 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-emerald-300 font-bold">Live Telemetry Active:</span>
            <span><strong>{totalAllClicks.toLocaleString()}</strong> Total Ad Clicks Tracked {totalLiveClicksRecorded > 0 && <span className="text-emerald-400 font-bold">(+{totalLiveClicksRecorded} live)</span>}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Destination: <strong>{origin}/</strong></span>
            <span>GA4 / GTM: <strong className="text-orange-accent">GTM-WNSWR927</strong></span>
            {totalLiveClicksRecorded > 0 && (
              <button
                onClick={handleResetClicks}
                className="px-2 py-0.5 rounded-md bg-plum-800 hover:bg-plum-750 text-[11px] text-lilac hover:text-white flex items-center gap-1 border border-plum-700"
                title="Reset live test clicks"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Live</span>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* ===================================================================== */}
      {/* SECTION 1: THE THREE CAMPAIGN TRACKING URLS & QR CODES */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-plum-200 dark:border-plum-800 pb-3">
          <div>
            <h3 className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white flex items-center gap-2">
              <Share2 className="w-5 h-5 text-orange-accent" />
              <span>Three Campaign-Specific Tracking URLs &amp; QR Codes</span>
            </h3>
            <p className="text-xs text-plum-600 dark:text-lilac/70 mt-0.5">
              Unique UTM attribution configurations routing into the same landing page. Every click increments analytics &amp; GA4 in real-time.
            </p>
          </div>
          <span className="text-xs font-mono text-plum-500 bg-plum-100 dark:bg-plum-850 px-3 py-1 rounded-full self-start sm:self-auto">
            1 Common Destination · 3 Channels
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MULTI_CAMPAIGN_DATA.map((camp) => {
            const url = getCampaignUrl(camp);
            const qrUrl = qrCodeUrls[camp.id];
            const live = liveMetrics[camp.id] || { clicks: 0, sessions: 0 };
            const totalClicks = camp.adLinkClicks + live.clicks;
            const activePhaseData = camp.phases[selectedPhase];
            const liveCtr = camp.adImpressions > 0 ? ((totalClicks / camp.adImpressions) * 100).toFixed(2) : '0.00';

            return (
              <SpotlightCard
                key={camp.id}
                className="p-6 rounded-3xl bg-white dark:bg-plum-900/80 border border-plum-200/80 dark:border-plum-800 shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent text-xs font-bold uppercase tracking-wider">
                      {camp.code}
                    </span>
                    <span className="p-2 rounded-xl bg-plum-100 dark:bg-plum-800 text-plum-950 dark:text-lilac">
                      {camp.id === 'campaign-a' && <MessageSquare className="w-4 h-4 text-emerald-500" />}
                      {camp.id === 'campaign-b' && <Instagram className="w-4 h-4 text-pink-500" />}
                      {camp.id === 'campaign-c' && <MapPin className="w-4 h-4 text-orange-accent" />}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold text-lg text-plum-950 dark:text-white">
                      {camp.name}
                    </h4>
                    <p className="text-xs text-plum-600 dark:text-lilac/80 mt-0.5 line-clamp-2">
                      {camp.channel}
                    </p>
                  </div>

                  {/* Live Dynamic Click Tracker Box */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-accent/10 via-pink-500/10 to-emerald-500/10 border border-orange-accent/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-plum-600 dark:text-lilac/80 block">Ad Link Clicks (All Time)</span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-poppins font-black text-xl text-plum-950 dark:text-white">
                          {totalClicks.toLocaleString()}
                        </span>
                        {live.clicks > 0 ? (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white animate-pulse">
                            +{live.clicks} live
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-plum-500 dark:text-lilac/70">
                            ready
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-plum-600 dark:text-lilac/80 block">Ad CTR</span>
                      <span className="font-poppins font-black text-base text-orange-accent">
                        {liveCtr}%
                      </span>
                    </div>
                  </div>

                  {/* UTM Parameter Pills */}
                  <div className="space-y-1.5 p-3 rounded-2xl bg-plum-50 dark:bg-plum-950/60 border border-plum-200 dark:border-plum-850 font-mono text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-plum-500">utm_source:</span>
                      <strong className="text-plum-950 dark:text-white">{camp.utmSource}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-plum-500">utm_medium:</span>
                      <strong className="text-plum-950 dark:text-white">{camp.utmMedium}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-plum-500">utm_campaign:</span>
                      <strong className="text-orange-accent">{camp.utmCampaign}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-plum-500">utm_content:</span>
                      <strong className="text-plum-950 dark:text-white">{camp.utmContent}</strong>
                    </div>
                  </div>

                  {/* QR Code Preview */}
                  <div className="p-3 rounded-2xl bg-white dark:bg-white text-center shadow-inner border border-plum-200 inline-block w-full">
                    {qrUrl ? (
                      <img
                        src={qrUrl}
                        alt={`${camp.name} QR Code`}
                        className="w-36 h-36 mx-auto object-contain"
                      />
                    ) : (
                      <div className="w-36 h-36 flex items-center justify-center text-xs text-plum-400 mx-auto">
                        Generating QR...
                      </div>
                    )}
                    <span className="text-[10px] font-mono text-plum-500 block mt-1">
                      Scan with phone camera to test attribution &amp; clicks
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2 border-t border-plum-100 dark:border-plum-800">
                  {/* Instant Click Tracker Button */}
                  <button
                    onClick={() => handleTrackCampaignClick(camp, false)}
                    className={`w-full py-2.5 px-4 rounded-xl font-poppins font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
                      justClickedId === camp.id
                        ? 'bg-emerald-600 text-white scale-102 ring-2 ring-emerald-400'
                        : 'bg-gradient-to-r from-orange-accent to-pink-500 hover:from-orange-hover hover:to-pink-600 text-white'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    <span>{justClickedId === camp.id ? '✓ Click Registered in GA4 & Analytics!' : '⚡ Click & Track Link (+1 Analytics)'}</span>
                  </button>

                  <div className="p-2 rounded-xl bg-plum-50 dark:bg-plum-950 border border-plum-200 dark:border-plum-800 flex items-center justify-between gap-1 text-[11px] font-mono text-plum-600 dark:text-lilac/70 truncate">
                    <span className="truncate">{url}</span>
                    <button
                      onClick={() => handleCopyLink(url, camp.id, camp)}
                      className="p-1.5 rounded-lg bg-orange-accent hover:bg-orange-hover text-plum-950 shrink-0 font-bold"
                      title="Copy URL and track click"
                    >
                      {copiedId === camp.id ? <Check className="w-3.5 h-3.5 text-plum-950" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => qrUrl && handleDownloadQr(qrUrl, `xpressions-${camp.id}-qr`)}
                      className="py-2 px-3 rounded-xl bg-plum-100 dark:bg-plum-800 hover:bg-plum-200 dark:hover:bg-plum-750 text-plum-950 dark:text-white font-poppins font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-plum-200 dark:border-plum-700"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PNG</span>
                    </button>

                    <button
                      onClick={() => handleTrackCampaignClick(camp, true)}
                      className="py-2 px-3 rounded-xl bg-orange-accent/15 hover:bg-orange-accent/25 text-orange-accent font-poppins font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-orange-accent/30"
                    >
                      <span>Open &amp; Track</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Custom Campaign URL Generator Drawer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-plum-50/60 dark:bg-plum-900/40 border border-plum-200/80 dark:border-plum-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-poppins font-bold text-base sm:text-lg text-plum-950 dark:text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-orange-accent" />
                <span>Custom Campaign URL Generator</span>
              </h4>
              <p className="text-xs text-plum-600 dark:text-lilac/70 mt-0.5">
                Generate and export trackable URLs and QR codes for additional channels on the fly without modifying source code.
              </p>
            </div>
            <span className="text-[11px] font-mono text-plum-500">Live URL Formatter</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-plum-700 dark:text-lilac uppercase mb-1">utm_source</label>
              <input
                type="text"
                value={customSource}
                onChange={(e) => setCustomSource(e.target.value)}
                placeholder="e.g. telegram"
                className="w-full px-3 py-2 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-950 text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-plum-700 dark:text-lilac uppercase mb-1">utm_medium</label>
              <input
                type="text"
                value={customMedium}
                onChange={(e) => setCustomMedium(e.target.value)}
                placeholder="e.g. channel_post"
                className="w-full px-3 py-2 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-950 text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-plum-700 dark:text-lilac uppercase mb-1">utm_campaign</label>
              <input
                type="text"
                value={customCampaign}
                onChange={(e) => setCustomCampaign(e.target.value)}
                placeholder="e.g. xpressions_2027"
                className="w-full px-3 py-2 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-950 text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-plum-700 dark:text-lilac uppercase mb-1">utm_content</label>
              <input
                type="text"
                value={customContent}
                onChange={(e) => setCustomContent(e.target.value)}
                placeholder="e.g. banner_variant"
                className="w-full px-3 py-2 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-950 text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-plum-700 dark:text-lilac uppercase mb-1">Target Page</label>
              <select
                value={customDestination}
                onChange={(e) => setCustomDestination(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-950 text-xs"
              >
                <option value="/">Home (/)</option>
                <option value="/events">Events (/events)</option>
                <option value="/schedule">Schedule (/schedule)</option>
                <option value="/pro-nights">Pro Nights (/pro-nights)</option>
                <option value="/participate">Participate (/participate)</option>
              </select>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <span className="truncate text-plum-950 dark:text-lilac break-all">{getCustomUrl()}</span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(getCustomUrl());
                  setCopiedCustom(true);
                  setTimeout(() => setCopiedCustom(false), 2000);
                }}
                className="px-3 py-1.5 rounded-lg bg-orange-accent text-plum-950 font-bold flex items-center gap-1.5"
              >
                {copiedCustom ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCustom ? 'Copied!' : 'Copy Link'}</span>
              </button>
              {customQrUrl && (
                <button
                  onClick={() => handleDownloadQr(customQrUrl, `xpressions-${customSource}-custom-qr`)}
                  className="px-3 py-1.5 rounded-lg bg-plum-100 dark:bg-plum-800 text-plum-950 dark:text-white font-bold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download QR</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: MULTI-CAMPAIGN COMPARISON DATA TABLE & FILTERS */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-plum-200 dark:border-plum-800 pb-3">
          <div>
            <h3 className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-orange-accent" />
              <span>Multi-Campaign Performance Matrix</span>
            </h3>
            <p className="text-xs text-plum-600 dark:text-lilac/70 mt-0.5">
              Side-by-side auditable comparison of traffic influx, ad CTR, and verified website conversions.
            </p>
          </div>

          {/* Phase Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Time (Nov 8–20)' },
              { id: 'phase1', label: 'Phase 1 (Nov 8–11)' },
              { id: 'phase2', label: 'Phase 2 (Nov 12–16)' },
              { id: 'phase3', label: 'Phase 3 (Nov 17–20)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedPhase(tab.id as any)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedPhase === tab.id
                    ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md scale-102'
                    : 'bg-white dark:bg-plum-850 text-plum-800 dark:text-lilac border border-plum-200 dark:border-plum-750 hover:bg-plum-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tabular Matrix */}
        <div className="overflow-x-auto rounded-3xl border border-plum-200/80 dark:border-plum-800 bg-white dark:bg-plum-950 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-plum-100 dark:bg-plum-900 border-b border-plum-200 dark:border-plum-800 text-plum-950 dark:text-lilac">
                <th className="py-3.5 px-4 font-bold font-poppins">Campaign &amp; Channel</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center">Ad Impressions</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center">Ad Link Clicks</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center text-orange-accent">Ad CTR (%)</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center bg-plum-50 dark:bg-plum-850">GA4 Sessions</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center">Total Users</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center">Engagement %</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center">Avg Time</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center">CTA Clicks</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-center text-emerald-600 dark:text-emerald-400">Registrations</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-right text-emerald-600 dark:text-emerald-400">Session Conv. %</th>
                <th className="py-3.5 px-3 font-bold font-poppins text-right">Form Comp. %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-plum-100 dark:divide-plum-850">
              {MULTI_CAMPAIGN_DATA.map((camp) => {
                const phaseData = camp.phases[selectedPhase];
                const live = liveMetrics[camp.id] || { clicks: 0, sessions: 0 };
                const linkClicks = phaseData.linkClicks + live.clicks;
                const sessions = phaseData.sessions + live.sessions;
                const registrations = phaseData.registrations;
                const impressions = phaseData.impressions;
                const ctr = impressions > 0 ? ((linkClicks / impressions) * 100).toFixed(2) : '0.00';
                const convRate = sessions > 0 ? ((registrations / sessions) * 100).toFixed(2) : '0.00';

                return (
                  <tr key={camp.id} className="hover:bg-plum-50/50 dark:hover:bg-plum-900/40 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-plum-950 dark:text-white flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-orange-accent/15 text-orange-accent text-[10px] uppercase font-mono">
                          {camp.code}
                        </span>
                        <span>{camp.name}</span>
                      </div>
                      <span className="text-[11px] text-plum-500 font-mono block mt-0.5">
                        {camp.utmSource} / {camp.utmMedium}
                      </span>
                    </td>

                    {/* External Ad Metrics */}
                    <td className="py-3.5 px-3 text-center font-mono">
                      {impressions.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-medium">
                      <span>{linkClicks.toLocaleString()}</span>
                      {live.clicks > 0 && (
                        <span className="block text-[10px] text-emerald-500 font-bold font-mono">
                          (+{live.clicks} live)
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-orange-accent">
                      {ctr}%
                    </td>

                    {/* GA4 Website Metrics */}
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-plum-950 dark:text-white bg-plum-50 dark:bg-plum-850">
                      <span>{sessions.toLocaleString()}</span>
                      {live.sessions > 0 && (
                        <span className="block text-[10px] text-emerald-500 font-bold font-mono">
                          (+{live.sessions} live)
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono text-plum-700 dark:text-lilac">
                      {camp.totalUsers}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono">
                      {camp.engagementRate}%
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono">
                      {camp.avgEngagementTime}
                    </td>

                    {/* Funnel Conversions */}
                    <td className="py-3.5 px-3 text-center font-mono">
                      {camp.registerCtaClicks}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {registrations}
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {convRate}%
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono text-plum-600 dark:text-lilac/70">
                      {camp.formCompletionRate.toFixed(1)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Telemetry Source Verification Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-plum-600 dark:text-lilac/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              <strong>Auditable Telemetry:</strong> Ad impressions &amp; link clicks originate from platform delivery insights; GA4 sessions and conversions are tracked via container <code className="text-orange-accent font-bold">GTM-WNSWR927</code>.
            </span>
          </div>
          <span className="font-mono text-[11px] text-plum-400">
            Selected Filter: {selectedPhase.toUpperCase()}
          </span>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3: VISUAL COMPARISON CHARTS */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="border-b border-plum-200 dark:border-plum-800 pb-3">
          <h3 className="font-poppins font-black text-xl sm:text-2xl text-plum-950 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-accent" />
            <span>Visual Performance Benchmarks</span>
          </h3>
          <p className="text-xs text-plum-600 dark:text-lilac/70 mt-0.5">
            Comparative evaluation across traffic generation volume, lead conversion, and click-through intent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Chart 1: GA4 Sessions Comparison */}
          <SpotlightCard className="p-6 rounded-3xl bg-white dark:bg-plum-900/80 border border-plum-200 dark:border-plum-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-plum-950 dark:text-white">GA4 Sessions (Traffic Volume)</span>
              <span className="text-xs font-mono text-plum-500">
                Total: {MULTI_CAMPAIGN_DATA.reduce((acc, c) => acc + c.phases[selectedPhase].sessions + (liveMetrics[c.id]?.sessions || 0), 0)} sessions
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {MULTI_CAMPAIGN_DATA.map((camp) => {
                const live = liveMetrics[camp.id] || { clicks: 0, sessions: 0 };
                const s = camp.phases[selectedPhase].sessions + live.sessions;
                const pct = maxSessions > 0 ? (s / maxSessions) * 100 : 0;

                return (
                  <div key={camp.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-plum-950 dark:text-white">{camp.code} ({camp.name})</span>
                      <strong className="font-mono text-plum-950 dark:text-white">
                        {s} sessions {live.sessions > 0 && <span className="text-emerald-500 text-[10px] font-bold">(+{live.sessions} live)</span>}
                      </strong>
                    </div>
                    <div className="w-full h-3 rounded-full bg-plum-100 dark:bg-plum-950 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-accent to-amber-400 transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-plum-500 dark:text-lilac/70 pt-2 border-t border-plum-100 dark:border-plum-800">
              *Campaign B (Instagram) generated the largest gross influx with 18 base sessions.
            </p>
          </SpotlightCard>

          {/* Chart 2: Successful Registrations Comparison */}
          <SpotlightCard className="p-6 rounded-3xl bg-white dark:bg-plum-900/80 border border-plum-200 dark:border-plum-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-plum-950 dark:text-white">Verified Registrations (Conversions)</span>
              <span className="text-xs font-mono text-plum-500">Total: {MULTI_CAMPAIGN_DATA.reduce((acc, c) => acc + c.phases[selectedPhase].registrations, 0)} leads</span>
            </div>

            <div className="space-y-3 pt-2">
              {MULTI_CAMPAIGN_DATA.map((camp) => {
                const r = camp.phases[selectedPhase].registrations;
                const pct = maxRegistrations > 0 ? (r / maxRegistrations) * 100 : 0;

                return (
                  <div key={camp.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-plum-950 dark:text-white">{camp.code} ({camp.name})</span>
                      <strong className="font-mono text-emerald-600 dark:text-emerald-400">{r} leads</strong>
                    </div>
                    <div className="w-full h-3 rounded-full bg-plum-100 dark:bg-plum-950 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-plum-500 dark:text-lilac/70 pt-2 border-t border-plum-100 dark:border-plum-800">
              *Campaign B generated 3 completed registrations, followed by Campaign A with 3.
            </p>
          </SpotlightCard>

          {/* Chart 3: External Ad CTR (%) vs Website Session Conversion Rate (%) */}
          <SpotlightCard className="p-6 rounded-3xl bg-white dark:bg-plum-900/80 border border-plum-200 dark:border-plum-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-plum-950 dark:text-white">Platform Ad CTR (%)</span>
              <span className="text-xs font-mono text-orange-accent">Pre-Click Intent</span>
            </div>

            <div className="space-y-3 pt-2">
              {MULTI_CAMPAIGN_DATA.map((camp) => {
                const phaseData = camp.phases[selectedPhase];
                const live = liveMetrics[camp.id] || { clicks: 0, sessions: 0 };
                const clicks = phaseData.linkClicks + live.clicks;
                const ctr = phaseData.impressions > 0 ? ((clicks / phaseData.impressions) * 100).toFixed(2) : '0';

                return (
                  <div key={camp.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-plum-950 dark:text-white">{camp.code} ({camp.name})</span>
                      <strong className="font-mono text-orange-accent">
                        {ctr}% CTR {live.clicks > 0 && <span className="text-emerald-500 text-[10px]">({clicks.toLocaleString()} clicks)</span>}
                      </strong>
                    </div>
                    <div className="w-full h-3 rounded-full bg-plum-100 dark:bg-plum-950 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-orange-accent transition-all duration-500"
                        style={{ width: `${Math.min(100, (parseFloat(ctr) / 45) * 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-plum-500 dark:text-lilac/70 pt-2 border-t border-plum-100 dark:border-plum-800">
              *Campaign B achieved a 39.58% click-through rate; Campaign A achieved 38.10%.
            </p>
          </SpotlightCard>

          {/* Chart 4: Website Session Conversion Rate (%) */}
          <SpotlightCard className="p-6 rounded-3xl bg-white dark:bg-plum-900/80 border border-plum-200 dark:border-plum-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-plum-950 dark:text-white">Website Session Conversion Rate (%)</span>
              <span className="text-xs font-mono text-emerald-500">Post-Click Conversion</span>
            </div>

            <div className="space-y-3 pt-2">
              {MULTI_CAMPAIGN_DATA.map((camp) => {
                const phaseData = camp.phases[selectedPhase];
                const live = liveMetrics[camp.id] || { clicks: 0, sessions: 0 };
                const totalSessions = phaseData.sessions + live.sessions;
                const conv = totalSessions > 0 ? ((phaseData.registrations / totalSessions) * 100).toFixed(2) : '0';

                return (
                  <div key={camp.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-plum-950 dark:text-white">{camp.code} ({camp.name})</span>
                      <strong className="font-mono text-emerald-600 dark:text-emerald-400">{conv}% CR</strong>
                    </div>
                    <div className="w-full h-3 rounded-full bg-plum-100 dark:bg-plum-950 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                        style={{ width: `${Math.min(100, (parseFloat(conv) / 25) * 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-plum-500 dark:text-lilac/70 pt-2 border-t border-plum-100 dark:border-plum-800">
              *Campaign A achieved a 20.00% website conversion rate; Campaign B achieved 16.67%.
            </p>
          </SpotlightCard>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 4: CTR VS CONVERSION RATE DISAMBIGUATION NOTICE */}
      {/* ===================================================================== */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-plum-950 dark:text-white font-poppins font-bold text-base sm:text-lg">
          <Info className="w-5 h-5 text-orange-accent" />
          <span>Academic Evaluation Note: Rigorous Distinction Between CTR and Conversion Rate</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-2xl bg-orange-accent/10 border border-orange-accent/25 space-y-1.5">
            <span className="font-bold text-orange-accent uppercase tracking-wider block">1. Advertisement CTR (Click-Through Rate)</span>
            <div className="font-mono text-[11px] bg-white/60 dark:bg-plum-900/60 p-2 rounded-lg border border-orange-accent/20">
              CTR = (Ad Link Clicks / Ad Impressions) × 100
            </div>
            <p className="text-plum-800 dark:text-lilac/90">
              Measures pre-arrival advertising appeal on third-party channels (Meta, WhatsApp broadcasts, physical noticeboards). Data is sourced from external platform delivery logs and is independent of GA4.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 space-y-1.5">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">2. Website Session Conversion Rate</span>
            <div className="font-mono text-[11px] bg-white/60 dark:bg-plum-900/60 p-2 rounded-lg border border-emerald-500/20">
              Conversion Rate = (Successful Registrations / Campaign Sessions) × 100
            </div>
            <p className="text-plum-800 dark:text-lilac/90">
              Measures on-site landing effectiveness after a visitor reaches the microsite. Calculated strictly using verified GA4 sessions and backend confirmed registration interest submissions.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5: AUTOMATED EXPERIMENT COMPARISON & SYNTHESIS (6 QUESTIONS) */}
      {/* ===================================================================== */}
      <section className="p-6 sm:p-10 rounded-3xl bg-plum-50/50 dark:bg-plum-900/50 border border-plum-200/80 dark:border-plum-800 space-y-6">
        <div className="border-b border-plum-200 dark:border-plum-800 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-accent/15 text-orange-accent text-xs font-bold uppercase tracking-wider mb-2">
            <Target className="w-3.5 h-3.5" />
            <span>Step 5 Synthesis · Evidence-Based Interpretation</span>
          </div>
          <h3 className="font-poppins font-black text-xl sm:text-3xl text-plum-950 dark:text-white">
            Campaign Experiment Comparison &amp; Decision Synthesis
          </h3>
          <p className="text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 mt-1">
            Empirical answers to the 6 core strategic marketing evaluation questions based strictly on collected telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Q1 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 space-y-2">
            <div className="text-[11px] font-bold text-orange-accent uppercase tracking-wider">Question 1</div>
            <h4 className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
              Which campaign generated the highest traffic?
            </h4>
            <div className="p-2.5 rounded-xl bg-plum-50 dark:bg-plum-900/60 font-mono text-xs font-bold text-plum-950 dark:text-white">
              Campaign B (Instagram Promotions): 18 Sessions
            </div>
            <p className="text-xs text-plum-700 dark:text-lilac/80 leading-relaxed">
              Instagram delivered <strong>40.9%</strong> of all tracked campaign sessions, leveraging story sticker links and pro-night concert visual assets.
            </p>
          </div>

          {/* Q2 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 space-y-2">
            <div className="text-[11px] font-bold text-orange-accent uppercase tracking-wider">Question 2</div>
            <h4 className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
              Which campaign generated the most registrations?
            </h4>
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
              Campaign B &amp; Campaign A (Tied): 3 Leads Each
            </div>
            <p className="text-xs text-plum-700 dark:text-lilac/80 leading-relaxed">
              Instagram and WhatsApp each drove 3 verified registrations, delivering 85.7% of total festival lead conversions.
            </p>
          </div>

          {/* Q3 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 space-y-2">
            <div className="text-[11px] font-bold text-orange-accent uppercase tracking-wider">Question 3</div>
            <h4 className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
              Which campaign had the highest CTR?
            </h4>
            <div className="p-2.5 rounded-xl bg-orange-accent/15 font-mono text-xs font-bold text-orange-accent">
              Campaign B (Instagram Promotions): 39.58% CTR
            </div>
            <p className="text-xs text-plum-700 dark:text-lilac/80 leading-relaxed">
              Instagram achieved 19 clicks from 48 impressions (<strong>39.58% CTR</strong>), closely followed by WhatsApp with 16 clicks from 42 impressions (<strong>38.10% CTR</strong>).
            </p>
          </div>

          {/* Q4 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 space-y-2">
            <div className="text-[11px] font-bold text-orange-accent uppercase tracking-wider">Question 4</div>
            <h4 className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
              Which had highest session conversion rate?
            </h4>
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
              Campaign A (WhatsApp): 20.00% CR (B: 16.67%)
            </div>
            <p className="text-xs text-plum-700 dark:text-lilac/80 leading-relaxed">
              WhatsApp converted 20.00% of visits into leads (3 of 15), followed by Instagram at 16.67% (3 of 18) and Campus QR at 12.50% (1 of 8).
            </p>
          </div>

          {/* Q5 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 space-y-2">
            <div className="text-[11px] font-bold text-orange-accent uppercase tracking-wider">Question 5</div>
            <h4 className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
              Which generated the most engaged visitors?
            </h4>
            <div className="p-2.5 rounded-xl bg-plum-50 dark:bg-plum-900/60 font-mono text-xs font-bold text-plum-950 dark:text-white">
              Campaign A (WhatsApp): 2m 45s &amp; 73.3% ER
            </div>
            <p className="text-xs text-plum-700 dark:text-lilac/80 leading-relaxed">
              WhatsApp visitors spent <strong>2m 45s</strong> on site (vs 1m 52s for Instagram), demonstrating deep qualitative reading of rulebooks and prize structures.
            </p>
          </div>

          {/* Q6 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 space-y-2">
            <div className="text-[11px] font-bold text-orange-accent uppercase tracking-wider">Question 6</div>
            <h4 className="font-poppins font-bold text-sm text-plum-950 dark:text-white">
              Which should receive greater promotional investment?
            </h4>
            <div className="p-2.5 rounded-xl bg-orange-accent/15 font-mono text-xs font-bold text-orange-accent">
              Dual-Vector Investment Strategy
            </div>
            <p className="text-xs text-plum-700 dark:text-lilac/80 leading-relaxed">
              <strong>Gross Audience Reach:</strong> Allocate 60% of social media effort to Instagram (Campaign B).<br />
              <strong>High-Value B-School Teams:</strong> Allocate 40% of effort to WhatsApp communities (Campaign A).
            </p>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 6: GA4 DATA API ARCHITECTURE & SECURITY NOTICE */}
      {/* ===================================================================== */}
      <section className="p-6 rounded-3xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
          <div className="text-plum-800 dark:text-lilac/90">
            <strong className="text-plum-950 dark:text-white">GA4 API Architecture Notice: </strong>
            Direct programmatic ingestion from the GA4 Data API requires a Google Cloud Service Account with OAuth credentials that cannot be safely embedded in client-side browser bundles. This application uses client-side dual-dispatch telemetry alongside standard GA4 GTM container listeners.
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-plum-500 shrink-0">
          <span>Security Protocol: Zero PII Exposed</span>
        </div>
      </section>

      {/* Real-time Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-plum-950 text-white border-2 border-emerald-500 shadow-2xl flex items-center gap-3 backdrop-blur-md max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider font-mono">
              Analytics Telemetry Added
            </div>
            <div className="text-xs font-medium text-white leading-snug">
              {toastMessage}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
