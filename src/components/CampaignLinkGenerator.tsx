import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { recordLiveCampaignClick } from '../utils/analytics';
import { QrCode, Copy, Check, Download, ExternalLink, Link2, Sparkles, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

export const CampaignLinkGenerator: React.FC = () => {
  const [destinationPath, setDestinationPath] = useState('/');
  const [source, setSource] = useState('instagram');
  const [medium, setMedium] = useState('story');
  const [campaign, setCampaign] = useState('xpressions_launch_nov2026');
  const [content, setContent] = useState('creative_2_pronite');
  const [customSource, setCustomSource] = useState('');
  
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const activeSource = source === 'custom' ? (customSource.trim().toLowerCase() || 'custom') : source;

  useEffect(() => {
    const origin = window.location.origin;
    const path = destinationPath.startsWith('/') ? destinationPath : `/${destinationPath}`;
    const url = new URL(path, origin);
    
    if (activeSource) url.searchParams.set('utm_source', activeSource);
    if (medium) url.searchParams.set('utm_medium', medium);
    if (campaign) url.searchParams.set('utm_campaign', campaign);
    if (content) url.searchParams.set('utm_content', content);

    const fullUrl = url.toString();
    setGeneratedUrl(fullUrl);

    // Generate dynamic QR code
    QRCode.toDataURL(fullUrl, {
      width: 320,
      margin: 2,
      color: {
        dark: '#140A17',
        light: '#FFFFFF',
      },
    })
      .then((dataUrl) => setQrDataUrl(dataUrl))
      .catch((err) => console.error('Failed to create QR code', err));
  }, [destinationPath, source, medium, campaign, content, customSource, activeSource]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `xpressions-${activeSource}-${content}-qr.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-plum-950 text-plum-950 dark:text-white border-t border-plum-200/80 dark:border-plum-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-100 dark:bg-plum-900 border border-plum-200 dark:border-plum-800 text-plum-900 dark:text-lilac text-xs font-bold uppercase tracking-wider mb-2">
              <Link2 className="w-3.5 h-3.5 text-orange-accent" />
              <span>Attribution Tool</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
              Interactive UTM Link &amp; Dynamic QR Code Builder
            </h2>
            <p className="mt-2 text-xs sm:text-base text-plum-800/80 dark:text-lilac/80 max-w-xl mx-auto leading-relaxed">
              Generate trackable links and high-res vector QR codes for any promotional channel to segment and attribute incoming festival traffic in GA4.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Builder Form (7 cols) */}
          <div className="lg:col-span-7 bg-plum-50/60 dark:bg-plum-900/50 p-6 sm:p-8 rounded-3xl border border-plum-200/80 dark:border-plum-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Destination Page */}
              <div>
                <label className="block text-xs font-bold text-plum-800 dark:text-lilac uppercase tracking-wider mb-1.5">
                  Target Landing Page
                </label>
                <select
                  value={destinationPath}
                  onChange={(e) => setDestinationPath(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-850 text-plum-950 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-accent"
                >
                  <option value="/">Home Page (/) — Primary Landing &amp; A/B Hero</option>
                  <option value="/events">Events Directory (/events) — Competitions &amp; Case Challenges</option>
                  <option value="/schedule">Programme &amp; Venue (/schedule) — 3-Day Schedule &amp; Transit</option>
                  <option value="/pro-nights">Pro Nights (/pro-nights) — Celebrity Concerts &amp; Celeblitz</option>
                  <option value="/participate">Participate (/participate) — Early-Bird Passes &amp; Accommodation</option>
                </select>
              </div>

              {/* Source & Medium Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-plum-800 dark:text-lilac uppercase tracking-wider mb-1.5">
                    Traffic Source (utm_source)
                  </label>
                  <select
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-850 text-plum-950 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-accent"
                  >
                    <option value="instagram">instagram (Stories, Bio, Reels)</option>
                    <option value="whatsapp">whatsapp (Student Groups, Broadcasts)</option>
                    <option value="campus_poster">campus_poster (Physical Posters &amp; Noticeboards)</option>
                    <option value="linkedin">linkedin (Alumni &amp; Corporate Networks)</option>
                    <option value="unstop">unstop (Case Competition Portal)</option>
                    <option value="custom">custom (Type below)</option>
                  </select>
                  {source === 'custom' && (
                    <input
                      type="text"
                      placeholder="e.g. telegram_channel"
                      value={customSource}
                      onChange={(e) => setCustomSource(e.target.value)}
                      className="mt-2 w-full px-3 py-1.5 rounded-lg border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-850 text-xs text-plum-950 dark:text-white"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-plum-800 dark:text-lilac uppercase tracking-wider mb-1.5">
                    Marketing Medium (utm_medium)
                  </label>
                  <select
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-850 text-plum-950 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-accent"
                  >
                    <option value="story">story (Instagram / WhatsApp Story)</option>
                    <option value="chat_group">chat_group (WhatsApp / Telegram Group)</option>
                    <option value="qr_scan">qr_scan (Physical Printed Poster Scan)</option>
                    <option value="social_post">social_post (Feed / Carousel Post)</option>
                    <option value="email_dispatch">email_dispatch (Campus Newsletter)</option>
                  </select>
                </div>
              </div>

              {/* Campaign & Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-plum-800 dark:text-lilac uppercase tracking-wider mb-1.5">
                    Campaign Name (utm_campaign)
                  </label>
                  <input
                    type="text"
                    value={campaign}
                    onChange={(e) => setCampaign(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-850 text-plum-950 dark:text-white text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-orange-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-plum-800 dark:text-lilac uppercase tracking-wider mb-1.5">
                    Creative / Content Tag (utm_content)
                  </label>
                  <select
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-plum-300 dark:border-plum-700 bg-white dark:bg-plum-850 text-plum-950 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-accent"
                  >
                    <option value="creative_1_business">creative_1_business (Management Battlefield)</option>
                    <option value="creative_2_pronite">creative_2_pronite (Cultural &amp; Celeblitz)</option>
                    <option value="creative_3_passes">creative_3_passes (Delegate Passes &amp; Map)</option>
                    <option value="variant_a_test">variant_a_test (Forces Variant A)</option>
                    <option value="variant_b_test">variant_b_test (Forces Variant B)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Generated Output */}
            <div className="mt-6 pt-4 border-t border-plum-200 dark:border-plum-800">
              <label className="block text-xs font-bold text-orange-accent uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Resulting Trackable URL</span>
                <span className="text-[10px] text-plum-500 font-normal">Auto-encoded with parameters</span>
              </label>
              <div className="p-3 rounded-2xl bg-white dark:bg-plum-950 border border-plum-300 dark:border-plum-800 flex items-center justify-between gap-2 shadow-inner">
                <span className="font-mono text-xs text-plum-950 dark:text-lilac break-all select-all">
                  {generatedUrl}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 transition-colors shrink-0 font-bold"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-plum-950" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic QR Code Card (5 cols) */}
          <div className="lg:col-span-5 bg-plum-50/60 dark:bg-plum-900/50 p-6 sm:p-8 rounded-3xl border border-plum-200/80 dark:border-plum-800 shadow-sm flex flex-col items-center justify-between text-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-plum-800 dark:text-lilac mb-2">
                <QrCode className="w-4 h-4 text-orange-accent" />
                <span>Generated Dynamic QR Code</span>
              </div>
              <p className="text-xs text-plum-700 dark:text-lilac/70 max-w-xs mx-auto">
                Encodes the live URL with full UTM attribution. Suitable for printed campus flyers or digital displays.
              </p>
            </div>

            {/* QR Image Box */}
            <div className="my-6 p-4 rounded-2xl bg-white shadow-xl border border-plum-250 inline-block">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="Dynamically Generated UTM QR Code"
                  className="w-48 h-48 sm:w-56 sm:h-56 mx-auto object-contain"
                />
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center text-xs text-plum-400">
                  Generating QR...
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={handleDownloadQr}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 font-poppins font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download QR Image</span>
              </button>

              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => recordLiveCampaignClick(activeSource, medium, campaign, content)}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-plum-300 dark:border-plum-700 text-plum-900 dark:text-lilac font-bold text-xs hover:border-orange-accent flex items-center justify-center gap-1.5 transition-colors"
                title="Test attribution by opening this link in a new tab and logging a click"
              >
                <Zap className="w-3.5 h-3.5 text-orange-accent" />
                <span>Test &amp; Track</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
