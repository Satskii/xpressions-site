import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { PROMOTIONAL_CREATIVES, PromotionalCreative } from '../data/campaignData';
import { Copy, Check, QrCode, Download, ExternalLink, Share2, Sparkles, MessageSquare, Instagram, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

export const CampaignCreatives: React.FC = () => {
  const [activeCreativeId, setActiveCreativeId] = useState<string>(PROMOTIONAL_CREATIVES[0].id);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [copiedCopy, setCopiedCopy] = useState<string | null>(null);
  const [qrCodeDataUrls, setQrCodeDataUrls] = useState<Record<string, string>>({});

  // Generate QR codes for all 3 creatives on mount
  useEffect(() => {
    PROMOTIONAL_CREATIVES.forEach(async (creative) => {
      try {
        const dataUrl = await QRCode.toDataURL(creative.trackableUrl, {
          width: 320,
          margin: 2,
          color: {
            dark: '#140A17',
            light: '#FFFFFF',
          },
        });
        setQrCodeDataUrls((prev) => ({ ...prev, [creative.id]: dataUrl }));
      } catch (err) {
        console.error('Failed to generate QR code for', creative.id, err);
      }
    });
  }, []);

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handleCopyCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCopy(id);
    setTimeout(() => setCopiedCopy(null), 2500);
  };

  const handleDownloadQr = (dataUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `${filename}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeCreative = PROMOTIONAL_CREATIVES.find((c) => c.id === activeCreativeId) || PROMOTIONAL_CREATIVES[0];

  return (
    <section className="py-12 sm:py-18 bg-white dark:bg-plum-950 text-plum-950 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 4 Deliverable · 3 Unique Formats</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
              Promotional Campaign Creatives
            </h2>
            <p className="mt-2 text-xs sm:text-base text-plum-800/80 dark:text-lilac/80 max-w-xl mx-auto leading-relaxed">
              Three tailored campaign formats engineered with distinct angles, targeted audiences, trackable UTM links, and dynamic QR codes for 8th–20th Nov.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {PROMOTIONAL_CREATIVES.map((creative) => (
            <button
              key={creative.id}
              onClick={() => setActiveCreativeId(creative.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-poppins font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 shadow-sm ${
                activeCreativeId === creative.id
                  ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 shadow-md scale-102 ring-2 ring-orange-accent/40'
                  : 'bg-plum-50 dark:bg-plum-900/70 text-plum-800 dark:text-lilac hover:bg-plum-100 dark:hover:bg-plum-850 border border-plum-200 dark:border-plum-800'
              }`}
            >
              {creative.creativeNumber === 1 && <MessageSquare className="w-4 h-4" />}
              {creative.creativeNumber === 2 && <Instagram className="w-4 h-4" />}
              {creative.creativeNumber === 3 && <MapPin className="w-4 h-4" />}
              <span>
                Creative #{creative.creativeNumber}: {creative.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Creative Showcase Card */}
        <ScrollReveal direction="blur-up" key={activeCreative.id} duration={600}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-plum-50/50 dark:bg-plum-900/50 rounded-3xl border border-plum-200/80 dark:border-plum-800 p-6 sm:p-10 shadow-xl backdrop-blur-sm">
            
            {/* Visual Poster Mockup (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-plum-250 dark:border-plum-750 bg-plum-950 text-white flex flex-col justify-between aspect-[4/5] sm:aspect-[9/14] p-6 sm:p-8">
                {/* Background Image with Controlled Dark Overlay */}
                <img
                  src={activeCreative.imageUrl}
                  alt={activeCreative.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/60 to-plum-950/40" />

                {/* Top Badge & Logo */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-orange-accent text-plum-950 font-poppins font-bold text-[11px] shadow-md uppercase tracking-wider">
                    {activeCreative.badgeText}
                  </span>
                  <span className="text-[11px] font-mono text-lilac/80 tracking-wider">
                    XPRESSIONS &apos;27
                  </span>
                </div>

                {/* Center Content Mockup */}
                <div className="relative z-10 my-auto text-center py-6">
                  <div className="text-[11px] font-bold text-orange-accent uppercase tracking-widest mb-1.5">
                    {activeCreative.format}
                  </div>
                  <h3 className="font-poppins font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight drop-shadow-md">
                    {activeCreative.headline}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-lilac font-medium max-w-xs mx-auto drop-shadow-sm">
                    {activeCreative.subheadline}
                  </p>
                </div>

                {/* Bottom CTA & QR Code Preview */}
                <div className="relative z-10 pt-4 border-t border-plum-700/60 flex items-center justify-between gap-3 bg-plum-900/80 backdrop-blur-md p-3 rounded-2xl border">
                  {qrCodeDataUrls[activeCreative.id] && (
                    <img
                      src={qrCodeDataUrls[activeCreative.id]}
                      alt="Scannable UTM QR Code"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-white p-1 shrink-0 shadow-md"
                    />
                  )}
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] text-orange-accent font-bold uppercase tracking-wider">
                      Scan To Enter
                    </div>
                    <div className="text-xs font-poppins font-bold text-white truncate">
                      {activeCreative.callToAction}
                    </div>
                    <div className="text-[10px] text-lilac/70 truncate">
                      29–31 Jan 2027 · XIMB
                    </div>
                  </div>
                </div>
              </div>

              {/* Download / Test Actions for Creative */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {qrCodeDataUrls[activeCreative.id] && (
                  <button
                    onClick={() => handleDownloadQr(qrCodeDataUrls[activeCreative.id], activeCreative.id)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 font-poppins font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-90 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download QR Code</span>
                  </button>
                )}
                <a
                  href={activeCreative.trackableUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl border border-plum-300 dark:border-plum-700 hover:border-orange-accent text-plum-900 dark:text-lilac font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Test Link</span>
                </a>
              </div>
            </div>

            {/* Strategic Details & Broadcast Copy (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Meta Specs */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-plum-200 dark:bg-plum-800 text-plum-900 dark:text-lilac text-xs font-bold">
                    Format: {activeCreative.format}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/30 text-xs font-bold">
                    Primary: {activeCreative.primaryChannel}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-plum-950 dark:text-white">
                  {activeCreative.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-plum-800/80 dark:text-lilac/80 leading-relaxed">
                  <strong>Core Thesis:</strong> {activeCreative.coreMessage}
                </p>

                <div className="mt-4 p-3.5 rounded-2xl bg-white dark:bg-plum-950/60 border border-plum-200 dark:border-plum-800 text-xs space-y-1.5">
                  <div>
                    <span className="font-semibold text-plum-600 dark:text-plum-400">Target Cohort:</span>{' '}
                    <span className="text-plum-950 dark:text-white">{activeCreative.targetAudience}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-plum-600 dark:text-plum-400">Secondary Channels:</span>{' '}
                    <span className="text-plum-950 dark:text-white">{activeCreative.secondaryChannels.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Trackable Link Box */}
              <div>
                <label className="block text-xs font-bold text-plum-700 dark:text-lilac uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Trackable Campaign URL (With Pre-Set UTM Tags)</span>
                  <span className="text-[10px] text-emerald-500 font-semibold font-mono">GA4 Ready</span>
                </label>
                <div className="p-3 rounded-xl bg-white dark:bg-plum-950 border border-plum-300 dark:border-plum-800 flex items-center justify-between gap-2 shadow-inner">
                  <span className="font-mono text-xs text-orange-accent dark:text-orange-accent break-all select-all">
                    {activeCreative.trackableUrl}
                  </span>
                  <button
                    onClick={() => handleCopyLink(activeCreative.trackableUrl, activeCreative.id)}
                    className="p-2 rounded-lg bg-plum-100 dark:bg-plum-800 text-plum-900 dark:text-white hover:bg-orange-accent hover:text-plum-950 transition-colors shrink-0"
                    title="Copy trackable link"
                  >
                    {copiedLink === activeCreative.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {/* UTM Breakdown Chips */}
                <div className="flex flex-wrap gap-1.5 mt-2 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-plum-200/70 dark:bg-plum-800 text-plum-800 dark:text-lilac">
                    source={activeCreative.utmParams.source}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-plum-200/70 dark:bg-plum-800 text-plum-800 dark:text-lilac">
                    medium={activeCreative.utmParams.medium}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-plum-200/70 dark:bg-plum-800 text-plum-800 dark:text-lilac">
                    content={activeCreative.utmParams.content}
                  </span>
                </div>
              </div>

              {/* Ready-to-Send Broadcast Copy */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-plum-700 dark:text-lilac uppercase tracking-wider">
                    Channel Broadcast Copy &amp; Caption
                  </label>
                  <button
                    onClick={() => handleCopyCopy(activeCreative.broadcastCopy, activeCreative.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-accent hover:underline"
                  >
                    {copiedCopy === activeCreative.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Broadcast Message</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-plum-950 border border-plum-200 dark:border-plum-800 font-mono text-xs text-plum-900 dark:text-lilac whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto shadow-inner">
                  {activeCreative.broadcastCopy}
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
