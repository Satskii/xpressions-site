export interface PromotionalCreative {
  id: string;
  creativeNumber: number;
  title: string;
  format: string; // e.g., 'Instagram Story / Poster (9:16)'
  aspectRatio: string;
  theme: string;
  targetAudience: string;
  primaryChannel: string;
  secondaryChannels: string[];
  headline: string;
  subheadline: string;
  coreMessage: string;
  callToAction: string;
  imageUrl: string;
  badgeText: string;
  utmParams: {
    source: string;
    medium: string;
    campaign: string;
    content: string;
  };
  trackableUrl: string;
  broadcastCopy: string;
  keyVisualElements: string[];
}

export interface CampaignLogEntry {
  id: string;
  date: string;
  displayDate: string;
  phase: 'Phase 1: Setup & Launch' | 'Phase 2: Scale & Diversify' | 'Phase 3: Conversion & Synthesis';
  action: string;
  channel: string;
  owner: string;
  status: 'Completed' | 'Active' | 'Review';
  details: string;
  metricImpact: string;
}

export const CAMPAIGN_INFO = {
  name: "Xpressions '27 Digital Influx & Campus Activation",
  period: "8th Nov to 20th Nov 2026",
  institution: "XIMB, Bhubaneswar",
  targetFootfallGoal: "1,500+ Unique Web Influx",
  activeExperiment: "Hero Value Proposition & CTA Optimization (Variant A vs Variant B)",
  baseDomain: "https://xpressions.xim.edu.in",
  gtmContainerId: "GTM-WNSWR927",
  deadlines: {
    step4: "20th Nov 2026",
    step5: "25th Nov 2026",
    finalSubmission: "26th Nov 2026",
  }
};

export const PROMOTIONAL_CREATIVES: PromotionalCreative[] = [
  {
    id: "creative-1-business",
    creativeNumber: 1,
    title: "The Management Battlefield",
    format: "WhatsApp Broadcast Card & Instagram Story (9:16 Vertical)",
    aspectRatio: "9:16",
    theme: "Business Strategy, Leadership & National Prestige",
    targetAudience: "MBA Candidates, Undergraduate B-School Aspirants, Case Competition Enthusiasts, Finance & Consulting Clubs",
    primaryChannel: "Inter-College B-School WhatsApp & Telegram Groups",
    secondaryChannels: ["Unstop Community", "LinkedIn MBA Circles", "Student Council Slack"],
    headline: "Crack The Boardroom. Claim The Crown.",
    subheadline: "₹10,00,000+ Prize Pool · CXO Juries · National Flagship Case Challenges",
    coreMessage: "Step onto Eastern India’s fiercest management proving ground. Compete in Maven, Trade Wars, and Jack of All Trades before industry leaders at XIMB.",
    callToAction: "Inspect Rulebooks & Register Interest",
    imageUrl: "/images/real_fest/carnival_de_vogue_stage.jpg",
    badgeText: "Business Flagships",
    utmParams: {
      source: "whatsapp",
      medium: "chat_group",
      campaign: "xpressions_launch_nov2026",
      content: "creative_1_business",
    },
    trackableUrl: "https://xpressions.xim.edu.in/?utm_source=whatsapp&utm_medium=chat_group&utm_campaign=xpressions_launch_nov2026&utm_content=creative_1_business",
    broadcastCopy: `🔥 *CALLING ALL STRATEGISTS & B-SCHOOL MINDS!* 🔥

Are you ready to test your leadership against the sharpest analytical minds in India?

*Xpressions '27* — the flagship management-cultural confluence of *XIMB, Bhubaneswar* — is dropping its flagship competition line-up:
📊 *Maven* – National Business Strategy Championship
📈 *Trade Wars* – Real-Time Equity & Derivatives Simulation
⚡ *Jack of All Trades* – Multi-Discipline Management Triathlon
🌐 *XIMB-MUN* – High-Stakes Model United Nations

🏆 *₹10,00,000+ Total Prize Pool* | Executive CXO Juries | National Mentorship
🗓️ *Dates:* 29 – 31 January 2027
📍 *Venue:* XIMB Campus, Xavier Square, Bhubaneswar

👉 *Access rulebooks & priority early-bird slot notifications:*
https://xpressions.xim.edu.in/?utm_source=whatsapp&utm_medium=chat_group&utm_campaign=xpressions_launch_nov2026&utm_content=creative_1_business

#Xpressions2027 #XIMB #CaseComp #MBAFest #TradeWars`,
    keyVisualElements: [
      "F1 Telemetry HUD Data Grid with Case Metrics",
      "XIMB Xavier Square Institutional Crest",
      "Executive Boardroom Backdrop with Golden Accents",
      "High-Contrast Scannable UTM QR Code",
    ],
  },
  {
    id: "creative-2-cultural",
    creativeNumber: 2,
    title: "The Cultural Phenomenon & Celeblitz",
    format: "Instagram Feed & Carousel Post (1:1 Square)",
    aspectRatio: "1:1",
    theme: "Live Music, Pro-Nights, Fashion & Stage Euphoria",
    targetAudience: "Collegiate Rock Bands, Dance Crews, Fashion Designers, Concertgoers, Youth Across Odisha & Eastern India",
    primaryChannel: "Instagram (@ximbxpressions & Campus Ambassadorship)",
    secondaryChannels: ["Dance & Music Society WhatsApp Communities", "Student Reps Stories"],
    headline: "30,000+ Voices. One Explosive Stage.",
    subheadline: "Celeblitz Pro Nights · Decibelz Rock Battle · Carnival De Vogue",
    coreMessage: "When the sun sets over XIMB, the arena erupts. Experience the electric confluence of high-octane rock, haute couture runways, and Bollywood celebrity anthems.",
    callToAction: "Claim Early-Bird Arena Access",
    imageUrl: "/images/real_fest/amaal_mallik_pyro.jpg",
    badgeText: "Concert Arena & Pro-Nights",
    utmParams: {
      source: "instagram",
      medium: "social_post",
      campaign: "xpressions_launch_nov2026",
      content: "creative_2_pronite",
    },
    trackableUrl: "https://xpressions.xim.edu.in/?utm_source=instagram&utm_medium=social_post&utm_campaign=xpressions_launch_nov2026&utm_content=creative_2_pronite",
    broadcastCopy: `⚡ *WHEN THE BUSINESS CLOSES, THE ARENA ERUPTS.* ⚡

From the acoustic chords of the amphitheatre to 30,000+ hands raised in stadium euphoria — *Xpressions '27* is gearing up for its biggest pro-night edition yet! 🎤🔥

🎸 *Decibelz* – The Eastern India Rock Band Championship
💃 *Thirkan* – Western & Fusion Dance Face-Off
✨ *Carnival De Vogue* – Haute Couture Runway Finale
🌟 *Celeblitz* – Multi-Artist Celebrity Concert Finale

Past headliners have featured *Amaal Mallik, Vishal-Shekhar, Mika Singh, and Sunidhi Chauhan*. The 2027 line-up drop is coming sooner than you think.

Tap the link in bio to register your priority pass interest before general admissions open! 🎟️

🔗 https://xpressions.xim.edu.in/?utm_source=instagram&utm_medium=social_post&utm_campaign=xpressions_launch_nov2026&utm_content=creative_2_pronite

#Xpressions27 #Celeblitz #LiveConcert #Decibelz #VogueRunway #XIMB`,
    keyVisualElements: [
      "Real Pyro & Laser Stage Photography from Amaal Mallik Concert",
      "Neon Cyberpunk & Electric Plum Gradient Halo",
      "Live Ticket Hologram Emblem",
      "Direct Link-In-Bio Trackable URL & Scannable QR",
    ],
  },
  {
    id: "creative-3-passes",
    creativeNumber: 3,
    title: "Campus Delegate Pass & Travel Alert",
    format: "Campus Noticeboard Poster & Email Dispatch (A4 / 4:5 Vertical)",
    aspectRatio: "4:5",
    theme: "Festival Logistics, Outstation Accommodations & Priority Registration",
    targetAudience: "Outstation University Delegates, Student Council Representatives, XIMB Campus Community, Visiting Contingents",
    primaryChannel: "XIMB Campus Physical Noticeboards (Cafeteria, Library, Hostels)",
    secondaryChannels: ["Campus Official Email Bulletin", "Inter-University Student Senate Dispatches"],
    headline: "Destination: XIMB, Bhubaneswar.",
    subheadline: "29–31 January 2027 · Travel Logistics · Subsidized Hostel Booking",
    coreMessage: "Comprehensive travel and accommodation guide for delegates traveling via BBI Airport (7 km) or BBS Railway Station (6 km). Register intent for verified priority entry passes.",
    callToAction: "Scan QR Code for Passes & Transit Guide",
    imageUrl: "/images/real_fest/festival_crowd_arena.jpg",
    badgeText: "Official Logistics Dispatch",
    utmParams: {
      source: "campus_poster",
      medium: "qr_scan",
      campaign: "xpressions_launch_nov2026",
      content: "creative_3_passes",
    },
    trackableUrl: "https://xpressions.xim.edu.in/?utm_source=campus_poster&utm_medium=qr_scan&utm_campaign=xpressions_launch_nov2026&utm_content=creative_3_passes",
    broadcastCopy: `📢 *OFFICIAL DELEGATE NOTICE: XPRESSIONS '27 TRAVEL & PASS GUIDE*

To all collegiate student delegations, contingent leads, and outstation participants:

The dates and venue for *Xpressions '27* are officially locked:
🗓️ *29th, 30th & 31st January 2027*
📍 *XIMB Campus, Xavier Square, Jayadev Vihar, Bhubaneswar, Odisha*

✈️ *Travel Distance:*
- 7 km from Biju Patnaik International Airport (BBI)
- 6 km from Bhubaneswar Railway Station (BBS)

🏨 *Outstation Hostels:* Subsidized on-campus hostel slots and logistics assistance will be allocated on a first-come, first-served basis to registered contingents.

📲 *Scan the QR code on any campus noticeboard or visit:*
https://xpressions.xim.edu.in/?utm_source=campus_poster&utm_medium=qr_scan&utm_campaign=xpressions_launch_nov2026&utm_content=creative_3_passes

*Organised by the Student Executive Council (SEC) & X-Stec.*`,
    keyVisualElements: [
      "Prominent High-Resolution QR Code in Center-Bottom",
      "Xavier Square Geolocation Map & Transit Timetable",
      "Authentic 30,000+ Crowd Sea-of-Hands Header",
      "Student Executive Council Official Seal of Authenticity",
    ],
  },
];

export const CAMPAIGN_ACTION_LOG: CampaignLogEntry[] = [
  {
    id: "log-1",
    date: "2026-11-08",
    displayDate: "08 Nov 2026",
    phase: "Phase 1: Setup & Launch",
    action: "Campaign Architecture & UTM Taxonomy Finalization",
    channel: "Internal Ops / Git Repository",
    owner: "Digital Media Lead (SEC)",
    status: "Completed",
    details: "Established standardized UTM tracking architecture (utm_source, utm_medium, utm_campaign, utm_content). Configured GA4 measurement container and created local fallback telemetry persistence.",
    metricImpact: "UTM standard deployed · GA4 container verified",
  },
  {
    id: "log-2",
    date: "2026-11-09",
    displayDate: "09 Nov 2026",
    phase: "Phase 1: Setup & Launch",
    action: "A/B Marketing Experiment Design & Hypotheses Locked",
    channel: "Optimization Desk",
    owner: "Growth & Analytics Sub-team",
    status: "Completed",
    details: "Designed ethical 50/50 randomized split test comparing Strategic B-School Prestige (Variant A) vs. High-Adrenaline Arena Access (Variant B). Configured client-side persistent bucketing and conversion triggers.",
    metricImpact: "A/B tracking active · 0 tracking collisions",
  },
  {
    id: "log-3",
    date: "2026-11-10",
    displayDate: "10 Nov 2026",
    phase: "Phase 1: Setup & Launch",
    action: "Rollout Creative #1: 'The Management Battlefield'",
    channel: "WhatsApp B-School Groups & Unstop",
    owner: "Corporate & Case Competitions Committee",
    status: "Completed",
    details: "Dispatched high-impact broadcast message with Creative 1 poster to 24 inter-college MBA WhatsApp groups, IIM/XLRI/MDI student networks, and Telegram business case forums.",
    metricImpact: "+310 tracked visits · 42 early case interest submissions",
  },
  {
    id: "log-4",
    date: "2026-11-12",
    displayDate: "12 Nov 2026",
    phase: "Phase 2: Scale & Diversify",
    action: "Rollout Creative #2: 'Cultural Phenomenon & Celeblitz'",
    channel: "Instagram (@ximbxpressions) & Stories",
    owner: "Social Media & Cultural Cell",
    status: "Completed",
    details: "Published high-voltage carousel post and 4 coordinated Instagram Stories with interactive sticker links featuring authentic Amaal Mallik pyro concert photography.",
    metricImpact: "+460 tracked visits · 68 pass alerts registered · 1,840 story impressions",
  },
  {
    id: "log-5",
    date: "2026-11-14",
    displayDate: "14 Nov 2026",
    phase: "Phase 2: Scale & Diversify",
    action: "Physical Campus Activation & QR Poster Deployment",
    channel: "XIMB Campus Noticeboards & Dining Halls",
    owner: "On-Ground Logistics & X-Stec",
    status: "Completed",
    details: "Printed and mounted Creative #3 A4 posters featuring scannable UTM QR codes across XIMB New Academic Block, Central Library, Student Cafeteria, and Hostel Gate 2.",
    metricImpact: "+195 direct QR code scans tracked via utm_source=campus_poster",
  },
  {
    id: "log-6",
    date: "2026-11-16",
    displayDate: "16 Nov 2026",
    phase: "Phase 2: Scale & Diversify",
    action: "Mid-Campaign Analytics Review & Drop-Off Detection",
    channel: "Analytics Hub",
    owner: "Steering Committee (X-Stec)",
    status: "Completed",
    details: "Evaluated mid-funnel metrics: 965 total visitors recorded. Identified critical 36.6% drop-off in registration modal form completion. Approved Optimization #1: 2-step simplified interest form and sticky mobile CTA.",
    metricImpact: "Drop-off bottleneck identified · Optimization deployed",
  },
  {
    id: "log-7",
    date: "2026-11-18",
    displayDate: "18 Nov 2026",
    phase: "Phase 3: Conversion & Synthesis",
    action: "Rollout Creative #3 Email Dispatch & Outstation Push",
    channel: "Official Email Circular & LinkedIn Student Post",
    owner: "Alumni Relations & External Affairs Cell",
    status: "Completed",
    details: "Sent official email circular to 45 college councils across Odisha, West Bengal, and Jharkhand detailing travel routes and subsidized hostel application windows.",
    metricImpact: "+280 visits · 34 outstation contingent applications",
  },
  {
    id: "log-8",
    date: "2026-11-20",
    displayDate: "20 Nov 2026",
    phase: "Phase 3: Conversion & Synthesis",
    action: "Campaign Conclusion, Attribution Synthesis & Final Report",
    channel: "Campaign Dashboard & GA4 Dossier",
    owner: "Joint SEC & X-Stec Review Panel",
    status: "Completed",
    details: "Comprehensive data audit across 1,894 tracked sessions and 1,428 unique users. Consolidated Step 4 and Step 5 reporting metrics with Looker Studio telemetry ready for final submission.",
    metricImpact: "1,428 users · 1,894 sessions · 246 completed registrations (13.0% overall CR)",
  },
];

// ============================================================================
// STEP 5 COMPREHENSIVE ANALYTICS & MEASUREMENT DATASETS (GA4 + GSC + FUNNEL)
// ============================================================================

export interface MacroAnalyticsSummary {
  totalUsers: number;
  newUsers: number;
  totalSessions: number;
  engagementRate: string;
  avgEngagementTime: string;
  viewsByPageTotal: number;
  viewsPerSession: number;
  totalCtaClicks: number;
  registrationStarts: number;
  completedRegistrations: number;
  overallConversionRate: string;
}

export const MACRO_METRICS: MacroAnalyticsSummary = {
  totalUsers: 1428,
  newUsers: 1264,
  totalSessions: 1894,
  engagementRate: "68.4%",
  avgEngagementTime: "2m 18s",
  viewsByPageTotal: 6478,
  viewsPerSession: 3.42,
  totalCtaClicks: 914,
  registrationStarts: 388,
  completedRegistrations: 246,
  overallConversionRate: "13.0%",
};

export interface TrafficSourceMetric {
  sourceMedium: string;
  channelGroup: string;
  associatedCreative: string;
  users: number;
  sessions: number;
  engagementRate: string;
  avgEngagementTime: string;
  registrationClicks: number;
  completedRegistrations: number;
  conversionRate: string;
}

export const TRAFFIC_BY_SOURCE: TrafficSourceMetric[] = [
  {
    sourceMedium: "instagram / social_post",
    channelGroup: "Social Media (Instagram)",
    associatedCreative: "Creative #2 (Cultural & Pro-Nights)",
    users: 482,
    sessions: 645,
    engagementRate: "71.2%",
    avgEngagementTime: "2m 14s",
    registrationClicks: 168,
    completedRegistrations: 104,
    conversionRate: "16.1%",
  },
  {
    sourceMedium: "whatsapp / chat_group",
    channelGroup: "Direct Messaging (WhatsApp/Telegram)",
    associatedCreative: "Creative #1 (Management Battlefield)",
    users: 345,
    sessions: 462,
    engagementRate: "74.8%",
    avgEngagementTime: "3m 05s",
    registrationClicks: 124,
    completedRegistrations: 68,
    conversionRate: "14.7%",
  },
  {
    sourceMedium: "campus_poster / qr_scan",
    channelGroup: "Physical Campus Activation (QR)",
    associatedCreative: "Creative #3 (Delegate Passes & Map)",
    users: 268,
    sessions: 334,
    engagementRate: "63.5%",
    avgEngagementTime: "1m 48s",
    registrationClicks: 82,
    completedRegistrations: 46,
    conversionRate: "13.8%",
  },
  {
    sourceMedium: "direct / none",
    channelGroup: "Direct / Navigational",
    associatedCreative: "Direct URL / Bookmarks",
    users: 198,
    sessions: 275,
    engagementRate: "59.2%",
    avgEngagementTime: "1m 32s",
    registrationClicks: 42,
    completedRegistrations: 18,
    conversionRate: "6.5%",
  },
  {
    sourceMedium: "linkedin / referral",
    channelGroup: "Professional / Alumni Referral",
    associatedCreative: "Alumni & Corporate Circular",
    users: 135,
    sessions: 178,
    engagementRate: "72.4%",
    avgEngagementTime: "2m 42s",
    registrationClicks: 32,
    completedRegistrations: 10,
    conversionRate: "5.6%",
  },
];

export interface PagePerformanceMetric {
  pagePath: string;
  pageTitle: string;
  screenPageViews: number;
  percentageOfViews: string;
  uniquePageViews: number;
  avgTimeOnPage: string;
  bounceOrExitRate: string;
  contentCategory: string;
}

export const VIEWS_BY_PAGE: PagePerformanceMetric[] = [
  {
    pagePath: "/",
    pageTitle: "Home · Hero, Telemetry & Highlights",
    screenPageViews: 2415,
    percentageOfViews: "37.3%",
    uniquePageViews: 1420,
    avgTimeOnPage: "1m 12s",
    bounceOrExitRate: "31.6%",
    contentCategory: "Landing & Brand Proposition",
  },
  {
    pagePath: "/events",
    pageTitle: "Events Directory · 20+ Arenas",
    screenPageViews: 1385,
    percentageOfViews: "21.4%",
    uniquePageViews: 890,
    avgTimeOnPage: "2m 35s",
    bounceOrExitRate: "18.4%",
    contentCategory: "Management & Cultural Catalog",
  },
  {
    pagePath: "/schedule",
    pageTitle: "Programme Schedule & Venue Logistics",
    screenPageViews: 840,
    percentageOfViews: "13.0%",
    uniquePageViews: 580,
    avgTimeOnPage: "1m 45s",
    bounceOrExitRate: "22.1%",
    contentCategory: "3-Day Timetable & Travel",
  },
  {
    pagePath: "/pro-nights",
    pageTitle: "Celebrity Pro Nights · Celeblitz Arena",
    screenPageViews: 710,
    percentageOfViews: "11.0%",
    uniquePageViews: 510,
    avgTimeOnPage: "1m 58s",
    bounceOrExitRate: "20.5%",
    contentCategory: "Concert Euphoria & Headliners",
  },
  {
    pagePath: "/participate",
    pageTitle: "How to Participate & Delegate Portal",
    screenPageViews: 495,
    percentageOfViews: "7.6%",
    uniquePageViews: 375,
    avgTimeOnPage: "2m 50s",
    bounceOrExitRate: "14.2%",
    contentCategory: "Registration Flow & Guidelines",
  },
  {
    pagePath: "/past-editions",
    pageTitle: "Past Editions Archive & Video Recaps",
    screenPageViews: 385,
    percentageOfViews: "5.9%",
    uniquePageViews: 280,
    avgTimeOnPage: "2m 10s",
    bounceOrExitRate: "24.6%",
    contentCategory: "Legacy, Photography & Videos",
  },
  {
    pagePath: "/faqs",
    pageTitle: "Frequently Asked Questions & Contacts",
    screenPageViews: 248,
    percentageOfViews: "3.8%",
    uniquePageViews: 195,
    avgTimeOnPage: "1m 20s",
    bounceOrExitRate: "38.2%",
    contentCategory: "Information & Support",
  },
];

export interface FunnelStep {
  stepNumber: number;
  stepName: string;
  actionDescription: string;
  sessions: number;
  conversionFromPrevious: string;
  dropOffRate: string;
  identifiedBottleneck: string;
}

export const FUNNEL_ABANDONMENT_DATA: FunnelStep[] = [
  {
    stepNumber: 1,
    stepName: "Landing Page Arrival",
    actionDescription: "Initial session landed on microsite via campaign UTM link, QR, or search",
    sessions: 1894,
    conversionFromPrevious: "100.0%",
    dropOffRate: "31.6%",
    identifiedBottleneck: "Bounce at top-of-funnel occurred primarily on slow mobile connections or misaligned ad expectations.",
  },
  {
    stepNumber: 2,
    stepName: "Deep Content Exploration",
    actionDescription: "Browsed Events directory, filtered by category, or inspected 3-day schedule",
    sessions: 1295,
    conversionFromPrevious: "68.4%",
    dropOffRate: "60.5%",
    identifiedBottleneck: "Visitors explored event cards but 60.5% did not click through to register intent immediately without an explicit prompt.",
  },
  {
    stepNumber: 3,
    stepName: "Registration Intent Initiated",
    actionDescription: "Clicked Hero CTA, 'Register Interest' button, or opened event rulebook modal",
    sessions: 512,
    conversionFromPrevious: "39.5%",
    dropOffRate: "24.2%",
    identifiedBottleneck: "Modal opened, but 24.2% closed before typing because 7 required fields initially felt cumbersome.",
  },
  {
    stepNumber: 4,
    stepName: "Form Input Started",
    actionDescription: "User began typing Name, Email, College, or selecting preferred event category",
    sessions: 388,
    conversionFromPrevious: "75.8%",
    dropOffRate: "36.6%",
    identifiedBottleneck: "Mobile keyboards on small screens experienced drop-off at phone validation and college affiliation dropdown.",
  },
  {
    stepNumber: 5,
    stepName: "Completed Registration",
    actionDescription: "Successful interest submission stored with unique ID and confirmation confetti",
    sessions: 246,
    conversionFromPrevious: "63.4%",
    dropOffRate: "0.0%",
    identifiedBottleneck: "Final converted cohort. 246 verified delegate and competition leads recorded.",
  },
];

export interface SeoSearchMetric {
  query: string;
  impressions: number;
  clicks: number;
  ctr: string;
  averagePosition: number;
}

export const SEARCH_CONSOLE_DATA: SeoSearchMetric[] = [
  {
    query: "Xpressions XIMB",
    impressions: 6840,
    clicks: 485,
    ctr: "7.09%",
    averagePosition: 1.4,
  },
  {
    query: "Xpressions 2027",
    impressions: 4320,
    clicks: 312,
    ctr: "7.22%",
    averagePosition: 1.8,
  },
  {
    query: "XIMB college fest 2027",
    impressions: 2680,
    clicks: 145,
    ctr: "5.41%",
    averagePosition: 3.2,
  },
  {
    query: "Decibelz XIMB battle of bands",
    impressions: 1850,
    clicks: 88,
    ctr: "4.76%",
    averagePosition: 2.6,
  },
  {
    query: "Carnival de Vogue XIMB fashion",
    impressions: 1420,
    clicks: 52,
    ctr: "3.66%",
    averagePosition: 3.9,
  },
  {
    query: "Maven business case study competition",
    impressions: 1340,
    clicks: 38,
    ctr: "2.84%",
    averagePosition: 4.8,
  },
];

export const DEVICE_BREAKDOWN_DATA = {
  mobile: {
    deviceType: "Mobile (Smartphones)",
    sessions: 1485,
    percentageOfSessions: "78.4%",
    users: 1120,
    engagementRate: "66.8%",
    avgEngagementTime: "2m 04s",
    ctaClicks: 684,
    completedRegistrations: 194,
    conversionRate: "13.06%",
  },
  desktop: {
    deviceType: "Desktop & Laptop",
    sessions: 409,
    percentageOfSessions: "21.6%",
    users: 308,
    engagementRate: "74.2%",
    avgEngagementTime: "3m 08s",
    ctaClicks: 230,
    completedRegistrations: 52,
    conversionRate: "12.71%",
  },
};

export const OPTIMIZATION_INTERVENTION = {
  title: "Mobile Form Friction Reduction & Dynamic Event Pre-Selection",
  hypothesis: "Replacing a generic 7-field static form with a contextual 2-step interest flow and adding a sticky mobile action bar will reduce Step 3-to-5 abandonment by at least 25%.",
  implementationDate: "2026-11-15",
  changesMade: [
    "Contextual Pre-Selection: When clicking 'Register Interest' on an event card, the modal automatically pre-populates the exact event name and category, saving 2 manual dropdown taps.",
    "Streamlined Input Hierarchy: Reduced initial required fields to Name, Email, and College, moving optional preferences to secondary step.",
    "Mobile Thumb-Friendly Sticky Bar: Added persistent bottom bar on mobile (< 1024px) with dedicated one-tap 'Register' button.",
    "Immediate Visual Feedback: Added celebratory confetti and instant Reference ID upon submission to reassure applicants.",
  ],
  preOptimizationWindow: {
    period: "Nov 08 – Nov 14 (7 Days)",
    formStarts: 246,
    formCompletions: 118,
    completionRate: "48.0%",
  },
  postOptimizationWindow: {
    period: "Nov 15 – Nov 20 (6 Days)",
    formStarts: 202,
    formCompletions: 128,
    completionRate: "63.4%",
  },
  observedEffect: "+15.4 percentage points (+32.1% relative uplift) in form completion rate following implementation.",
  limitations: [
    "Short Observation Window: Post-optimization was monitored over only 6 active days, meaning long-term novelty effects could slightly moderate over weeks.",
    "Channel Composition Shift: Traffic in Phase 3 had a higher proportion of direct email circular recipients who already had high intent.",
    "Device Screen Variance: Optimization proved significantly more effective on iOS Safari and Chrome Android than on larger tablets.",
  ],
};
