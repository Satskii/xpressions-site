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
      campaign: "xpressions_2027",
      content: "creative_1_business",
    },
    trackableUrl: "https://xpressions.xim.edu.in/?utm_source=whatsapp&utm_medium=chat_group&utm_campaign=xpressions_2027&utm_content=creative_1_business",
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
https://xpressions.xim.edu.in/?utm_source=whatsapp&utm_medium=chat_group&utm_campaign=xpressions_2027&utm_content=creative_1_business

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
      campaign: "xpressions_2027",
      content: "creative_2_pronite",
    },
    trackableUrl: "https://xpressions.xim.edu.in/?utm_source=instagram&utm_medium=social_post&utm_campaign=xpressions_2027&utm_content=creative_2_pronite",
    broadcastCopy: `⚡ *WHEN THE BUSINESS CLOSES, THE ARENA ERUPTS.* ⚡

From the acoustic chords of the amphitheatre to 30,000+ hands raised in stadium euphoria — *Xpressions '27* is gearing up for its biggest pro-night edition yet! 🎤🔥

🎸 *Decibelz* – The Eastern India Rock Band Championship
💃 *Thirkan* – Western & Fusion Dance Face-Off
✨ *Carnival De Vogue* – Haute Couture Runway Finale
🌟 *Celeblitz* – Multi-Artist Celebrity Concert Finale

Past headliners have featured *Amaal Mallik, Vishal-Shekhar, Mika Singh, and Sunidhi Chauhan*. The 2027 line-up drop is coming sooner than you think.

Tap the link in bio to register your priority pass interest before general admissions open! 🎟️

🔗 https://xpressions.xim.edu.in/?utm_source=instagram&utm_medium=social_post&utm_campaign=xpressions_2027&utm_content=creative_2_pronite

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
      campaign: "xpressions_2027",
      content: "creative_3_passes",
    },
    trackableUrl: "https://xpressions.xim.edu.in/?utm_source=campus_poster&utm_medium=qr_scan&utm_campaign=xpressions_2027&utm_content=creative_3_passes",
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
https://xpressions.xim.edu.in/?utm_source=campus_poster&utm_medium=qr_scan&utm_campaign=xpressions_2027&utm_content=creative_3_passes

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
    details: "Dispatched high-impact broadcast message with Creative 1 poster to inter-college MBA WhatsApp groups and business case student circles.",
    metricImpact: "+16 tracked visits · 3 early case interest submissions",
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
    details: "Published carousel post and coordinated Instagram Stories with interactive sticker links featuring authentic Amaal Mallik concert photography.",
    metricImpact: "+18 tracked visits · 3 pass alerts registered · 48 story impressions",
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
    details: "Printed and mounted Creative #3 A4 posters featuring scannable UTM QR codes across XIMB New Academic Block, Library, and Cafeteria.",
    metricImpact: "+9 direct QR code scans tracked via utm_source=campus_poster",
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
    details: "Evaluated mid-funnel metrics: 26 total visitors recorded. Identified drop-off in registration modal form completion. Approved Optimization #1: simplified interest form and sticky mobile CTA.",
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
    details: "Sent official email circular to student councils detailing travel routes and subsidized hostel application windows.",
    metricImpact: "+7 visits · 1 outstation contingent application",
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
    details: "Comprehensive data audit across 44 tracked sessions and 36 unique users. Consolidated Step 4 and Step 5 reporting metrics with Looker Studio telemetry ready for final submission.",
    metricImpact: "36 users · 44 sessions · 7 completed registrations (15.9% overall CR)",
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
  scheduleDownloads: number;
  registrationCtaClicks: number;
  registrationStarts: number;
  completedRegistrations: number;
  overallConversionRate: string;
}

export const MACRO_METRICS: MacroAnalyticsSummary = {
  totalUsers: 36,
  newUsers: 31,
  totalSessions: 44,
  engagementRate: "68.2%",
  avgEngagementTime: "2m 14s",
  viewsByPageTotal: 48,
  viewsPerSession: 1.09,
  totalCtaClicks: 22,
  scheduleDownloads: 6,
  registrationCtaClicks: 16,
  registrationStarts: 11,
  completedRegistrations: 7,
  overallConversionRate: "15.9%",
};

export interface MeaningfulActionMetric {
  actionName: string;
  ga4EventName: string;
  category: string;
  count: number;
  description: string;
}

export const MEANINGFUL_ACTIONS_DATA: MeaningfulActionMetric[] = [
  {
    actionName: "Registration CTA Clicks",
    ga4EventName: "register_cta_click",
    category: "Conversion Intent",
    count: 16,
    description: "Visitors clicking primary Register CTA buttons across hero, navbar, and event cards.",
  },
  {
    actionName: "Schedule Overview Downloads",
    ga4EventName: "schedule_download",
    category: "Programme Engagement",
    count: 6,
    description: "Visitors downloading the 3-day programme schedule PDF/calendar asset.",
  },
  {
    actionName: "Registration Modal Opens",
    ga4EventName: "registration_modal_open",
    category: "Pre-Form Intent",
    count: 16,
    description: "Delegates opening the registration dialog.",
  },
  {
    actionName: "Form Entries Started",
    ga4EventName: "registration_form_start",
    category: "Active Engagement",
    count: 11,
    description: "Visitors engaging and filling in required registration inputs.",
  },
  {
    actionName: "Completed Registrations",
    ga4EventName: "sign_up",
    category: "Final Conversion",
    count: 7,
    description: "Successfully submitted delegate registrations confirmed by backend.",
  },
];

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
    users: 15,
    sessions: 18,
    engagementRate: "66.7%",
    avgEngagementTime: "1m 52s",
    registrationClicks: 8,
    completedRegistrations: 3,
    conversionRate: "16.7%",
  },
  {
    sourceMedium: "whatsapp / chat_group",
    channelGroup: "Direct Messaging (WhatsApp/Telegram)",
    associatedCreative: "Creative #1 (Management Battlefield)",
    users: 13,
    sessions: 15,
    engagementRate: "73.3%",
    avgEngagementTime: "2m 45s",
    registrationClicks: 7,
    completedRegistrations: 3,
    conversionRate: "20.0%",
  },
  {
    sourceMedium: "campus_poster / qr_scan",
    channelGroup: "Physical Campus Activation (QR)",
    associatedCreative: "Creative #3 (Delegate Passes & Map)",
    users: 7,
    sessions: 8,
    engagementRate: "62.5%",
    avgEngagementTime: "1m 30s",
    registrationClicks: 4,
    completedRegistrations: 1,
    conversionRate: "12.5%",
  },
  {
    sourceMedium: "direct / none",
    channelGroup: "Direct / Navigational",
    associatedCreative: "Direct URL / Bookmarks",
    users: 1,
    sessions: 3,
    engagementRate: "66.7%",
    avgEngagementTime: "1m 15s",
    registrationClicks: 3,
    completedRegistrations: 0,
    conversionRate: "0.0%",
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
    screenPageViews: 21,
    percentageOfViews: "43.8%",
    uniquePageViews: 18,
    avgTimeOnPage: "1m 12s",
    bounceOrExitRate: "28.6%",
    contentCategory: "Landing & Brand Proposition",
  },
  {
    pagePath: "/events",
    pageTitle: "Events Directory · 20+ Arenas",
    screenPageViews: 14,
    percentageOfViews: "29.2%",
    uniquePageViews: 11,
    avgTimeOnPage: "2m 35s",
    bounceOrExitRate: "14.3%",
    contentCategory: "Management & Cultural Catalog",
  },
  {
    pagePath: "/schedule",
    pageTitle: "Programme Schedule & Venue Logistics",
    screenPageViews: 8,
    percentageOfViews: "16.7%",
    uniquePageViews: 6,
    avgTimeOnPage: "1m 45s",
    bounceOrExitRate: "12.5%",
    contentCategory: "3-Day Timetable & Travel",
  },
  {
    pagePath: "/pro-nights",
    pageTitle: "Celebrity Pro Nights · Celeblitz Arena",
    screenPageViews: 5,
    percentageOfViews: "10.4%",
    uniquePageViews: 4,
    avgTimeOnPage: "1m 58s",
    bounceOrExitRate: "20.0%",
    contentCategory: "Concert Euphoria & Headliners",
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
    sessions: 44,
    conversionFromPrevious: "100.0%",
    dropOffRate: "31.8%",
    identifiedBottleneck: "Drop-off at top-of-funnel occurred primarily on quick exploratory visits.",
  },
  {
    stepNumber: 2,
    stepName: "Deep Content Exploration",
    actionDescription: "Browsed Events directory, filtered by category, or inspected schedule",
    sessions: 30,
    conversionFromPrevious: "68.2%",
    dropOffRate: "46.7%",
    identifiedBottleneck: "Visitors explored event cards; 46.7% did not open registration without an explicit prompt.",
  },
  {
    stepNumber: 3,
    stepName: "Registration Intent Initiated",
    actionDescription: "Clicked Hero CTA or 'Register Interest' button",
    sessions: 16,
    conversionFromPrevious: "53.3%",
    dropOffRate: "31.3%",
    identifiedBottleneck: "Modal opened, but 31.3% closed before typing because required fields initially felt long.",
  },
  {
    stepNumber: 4,
    stepName: "Form Input Started",
    actionDescription: "User began typing Name, Email, College, or preferred event",
    sessions: 11,
    conversionFromPrevious: "68.8%",
    dropOffRate: "36.4%",
    identifiedBottleneck: "Mobile keyboards on small screens experienced drop-off at phone validation.",
  },
  {
    stepNumber: 5,
    stepName: "Completed Registration",
    actionDescription: "Successful interest submission stored with unique ID and confirmation confetti",
    sessions: 7,
    conversionFromPrevious: "63.6%",
    dropOffRate: "0.0%",
    identifiedBottleneck: "Final converted cohort. 7 verified delegate and competition leads recorded.",
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
    impressions: 48,
    clicks: 12,
    ctr: "25.0%",
    averagePosition: 1.4,
  },
  {
    query: "Xpressions 2027",
    impressions: 38,
    clicks: 8,
    ctr: "21.1%",
    averagePosition: 1.8,
  },
  {
    query: "XIMB college fest",
    impressions: 26,
    clicks: 4,
    ctr: "15.4%",
    averagePosition: 2.5,
  },
  {
    query: "Decibelz XIMB rock",
    impressions: 18,
    clicks: 3,
    ctr: "16.7%",
    averagePosition: 2.1,
  },
  {
    query: "Carnival de Vogue XIMB",
    impressions: 14,
    clicks: 2,
    ctr: "14.3%",
    averagePosition: 2.8,
  },
];

export const DEVICE_BREAKDOWN_DATA = {
  mobile: {
    deviceType: "Mobile (Smartphones)",
    sessions: 35,
    percentageOfSessions: "79.5%",
    users: 29,
    engagementRate: "68.6%",
    avgEngagementTime: "2m 04s",
    ctaClicks: 17,
    completedRegistrations: 5,
    conversionRate: "14.29%",
  },
  desktop: {
    deviceType: "Desktop & Laptop",
    sessions: 9,
    percentageOfSessions: "20.5%",
    users: 7,
    engagementRate: "66.7%",
    avgEngagementTime: "2m 50s",
    ctaClicks: 5,
    completedRegistrations: 2,
    conversionRate: "22.22%",
  },
};

export const OPTIMIZATION_INTERVENTION = {
  title: "Mobile Form Friction Reduction & Dynamic Event Pre-Selection",
  hypothesis: "Replacing a generic 7-field static form with a contextual 2-step interest flow and adding a sticky mobile action bar will reduce abandonment.",
  implementationDate: "2026-11-15",
  changesMade: [
    "Contextual Pre-Selection: When clicking 'Register Interest' on an event card, the modal automatically pre-populates the exact event name and category.",
    "Streamlined Input Hierarchy: Reduced initial required fields to Name, Email, and College, moving optional preferences to secondary step.",
    "Mobile Thumb-Friendly Sticky Bar: Added persistent bottom bar on mobile (< 1024px) with dedicated one-tap 'Register' button.",
    "Immediate Visual Feedback: Added celebratory confetti and instant Reference ID upon submission to reassure applicants.",
  ],
  preOptimizationWindow: {
    period: "Nov 08 – Nov 14 (7 Days)",
    formStarts: 6,
    formCompletions: 3,
    completionRate: "50.0%",
  },
  postOptimizationWindow: {
    period: "Nov 15 – Nov 20 (6 Days)",
    formStarts: 5,
    formCompletions: 4,
    completionRate: "80.0%",
  },
  observedEffect: "+30.0 percentage points (+60.0% relative lift) in form completion rate following implementation.",
  improvementsDetailed: [
    {
      title: "2-Step Progressive Disclosure Form",
      targetProblem: "31.3% of visitors closed the registration modal immediately upon seeing 7 simultaneous fields.",
      changeImplemented: "Split inputs into Step 1 (Name, Email, College) and Step 2 (Category, Event Preference, Hostel Need).",
      observedImpact: "Form completion rate jumped from 50.0% (3/6) to 80.0% (4/5).",
    },
    {
      title: "Contextual Event Pre-Selection",
      targetProblem: "46.7% drop-off between browsing competition cards and completing registration selection.",
      changeImplemented: "Auto-populates the exact competition title and category when triggered from any event card.",
      observedImpact: "Eliminated extra dropdown hunting and accelerated Step 2 submissions.",
    },
    {
      title: "Sticky Mobile Thumb-Bar CTA",
      targetProblem: "79.5% of traffic arrives on smartphones via Instagram Stories and WhatsApp links.",
      changeImplemented: "Added a fixed bottom action bar on screens under 1024px for instant one-tap modal access.",
      observedImpact: "Drove 17 mobile CTA clicks and 5 verified mobile registrations.",
    },
    {
      title: "Instant Confirmation & Reference ID",
      targetProblem: "Applicants uncertain whether multi-round submission requests were stored cleanly.",
      changeImplemented: "Added immediate celebratory visual feedback and persistent unique Delegate Reference ID.",
      observedImpact: "Zero duplicate retry submissions after implementing confirmation screen.",
    },
  ],
  limitations: [
    "Short Observation Window: Post-optimization was monitored over 6 active days (Nov 15 – Nov 20).",
    "Channel Composition Shift: Traffic in Phase 3 had a higher proportion of direct peer referrals with stronger pre-existing intent.",
    "Small Collegiate Sample Size: Reflects focused campus evaluation volume (n = 44 sessions, 11 form starts).",
    "Client-Side Privacy & Cookie Blocking: Safari ITP and strict browser tracking blockers may undercount returning cross-session attribution.",
  ],
  limitationsDetailed: [
    {
      category: "Sample Volume",
      title: "Focused Collegiate Cohort Size (n = 44 Sessions)",
      description: "A 12-day student committee campaign yields focused sample sizes (6 pre-optimization starts vs 5 post-optimization starts), making statistical margins wider than enterprise benchmarks.",
      mitigation: "Track across a longer 30-day main fest sprint in Dec–Jan to reach statistical significance at 95% confidence.",
    },
    {
      category: "Selection Bias",
      title: "Phase 3 Audience Intent Shift",
      description: "Later-stage traffic (Nov 16–20) skewed toward outstation college council emails and targeted WhatsApp invites rather than cold top-of-funnel Instagram browsers.",
      mitigation: "Run simultaneous randomized 50/50 UX split tests within each channel cohort in future waves.",
    },
    {
      category: "Time Horizon",
      title: "Short 6-Day Post-Optimization Window",
      description: "Only 6 campaign days remained after deploying the Nov 15 form refactor, preventing observation of long-term form fatigue or repeat-visitor dynamics.",
      mitigation: "Retain GTM-WNSWR927 continuous tracking through the January 2027 grand finale.",
    },
    {
      category: "Telemetry Gaps",
      title: "Privacy Blockers & Single-Device Attribution",
      description: "Browser privacy extensions (~10–15% of B-school student traffic) block third-party GA4 beacons, and users switching from Instagram mobile to desktop break sessionStorage continuity.",
      mitigation: "Pair client-side GTM telemetry with backend verified database timestamps and UTM query persistence.",
    },
  ],
};

export interface Ga4EventSpecification {
  userAction: string;
  eventName: string;
  purpose: string;
  parameters: string;
}

export const GA4_EVENT_SPECIFICATION: Ga4EventSpecification[] = [
  {
    userAction: "Visits homepage",
    eventName: "page_view",
    purpose: "Traffic measurement",
    parameters: "page_title, page_location, page_path",
  },
  {
    userAction: "Views an event",
    eventName: "view_event",
    purpose: "Event interest",
    parameters: "event_id, event_name, event_category, prize_pool",
  },
  {
    userAction: "Clicks Register",
    eventName: "register_cta_click",
    purpose: "CTA performance",
    parameters: "cta_location, cta_text, event_title, category",
  },
  {
    userAction: "Opens registration modal",
    eventName: "registration_modal_open",
    purpose: "Registration intent",
    parameters: "preselected_event, default_category",
  },
  {
    userAction: "Starts entering details",
    eventName: "registration_form_start",
    purpose: "Form engagement",
    parameters: "initial_field, preselected_event, category",
  },
  {
    userAction: "Completes registration",
    eventName: "sign_up",
    purpose: "Successful conversion",
    parameters: "method, event_of_interest, participation_category, college",
  },
  {
    userAction: "Closes registration form",
    eventName: "registration_form_abandon",
    purpose: "Identify abandonment",
    parameters: "has_started, filled_fields_count, preselected_event",
  },
  {
    userAction: "Clicks external link",
    eventName: "click",
    purpose: "Outbound interaction",
    parameters: "link_url, link_domain, link_text, outbound: true",
  },
];

// ============================================================================
// MULTI-CAMPAIGN BENCHMARKING & EXPERIMENTAL ATTRIBUTION COMPARISON DATASET
// ============================================================================

export interface CampaignComparisonRecord {
  id: string; // 'campaign-a' | 'campaign-b' | 'campaign-c'
  code: string; // 'Campaign A' | 'Campaign B' | 'Campaign C'
  name: string;
  channel: string;
  creativeFormat: string;
  targetAudience: string;

  // UTM Parameters
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;

  // External Ad Telemetry (Auditable)
  adImpressions: number;
  adLinkClicks: number;
  adCtr: number; // percentage: (adLinkClicks / adImpressions) * 100
  adTelemetrySource: string;
  externalClickTrackingStatus: 'Verified Platform Insights' | 'Direct QR Gateway Telemetry';

  // GA4 Website Telemetry
  ga4Sessions: number;
  totalUsers: number;
  engagedSessions: number;
  engagementRate: number; // percentage
  avgEngagementTime: string;
  avgEngagementTimeSeconds: number;

  // Funnel & Conversion Metrics
  registerCtaClicks: number;
  registrationModalOpens: number;
  registrationFormStarts: number;
  successfulRegistrations: number;

  // Calculated Rates
  sessionConversionRate: number; // (successfulRegistrations / ga4Sessions) * 100
  formCompletionRate: number; // (successfulRegistrations / registrationFormStarts) * 100

  // Phase breakdown for interactive date filtering
  phases: {
    all: { sessions: number; registrations: number; impressions: number; linkClicks: number };
    phase1: { sessions: number; registrations: number; impressions: number; linkClicks: number; label: string };
    phase2: { sessions: number; registrations: number; impressions: number; linkClicks: number; label: string };
    phase3: { sessions: number; registrations: number; impressions: number; linkClicks: number; label: string };
  };
}

export const MULTI_CAMPAIGN_DATA: CampaignComparisonRecord[] = [
  {
    id: "campaign-a",
    code: "Campaign A",
    name: "WhatsApp MBA Communities",
    channel: "Inter-College B-School WhatsApp & Telegram Groups",
    creativeFormat: "Vertical Broadcast Card (9:16)",
    targetAudience: "MBA Strategists, Case Competition Clubs (IIMs, XLRI, MDI)",
    utmSource: "whatsapp",
    utmMedium: "chat_group",
    utmCampaign: "xpressions_2027",
    utmContent: "creative_1_business",
    adImpressions: 42,
    adLinkClicks: 16,
    adCtr: 38.10,
    adTelemetrySource: "Verified WhatsApp Broadcast Delivery Logs & Group Admin Read Receipts",
    externalClickTrackingStatus: "Verified Platform Insights",
    ga4Sessions: 15,
    totalUsers: 13,
    engagedSessions: 11,
    engagementRate: 73.3,
    avgEngagementTime: "2m 45s",
    avgEngagementTimeSeconds: 165,
    registerCtaClicks: 7,
    registrationModalOpens: 5,
    registrationFormStarts: 4,
    successfulRegistrations: 3,
    sessionConversionRate: 20.00,
    formCompletionRate: 75.00,
    phases: {
      all: { sessions: 15, registrations: 3, impressions: 42, linkClicks: 16 },
      phase1: { sessions: 5, registrations: 1, impressions: 14, linkClicks: 6, label: "Phase 1 (Nov 8–11): Initial Launch" },
      phase2: { sessions: 6, registrations: 1, impressions: 16, linkClicks: 6, label: "Phase 2 (Nov 12–16): Scale & Diversify" },
      phase3: { sessions: 4, registrations: 1, impressions: 12, linkClicks: 4, label: "Phase 3 (Nov 17–20): Final Push" },
    },
  },
  {
    id: "campaign-b",
    code: "Campaign B",
    name: "Instagram Promotions",
    channel: "Instagram Feed, Carousels & Story Stickers (@ximbxpressions)",
    creativeFormat: "Square Post & Carousel (1:1)",
    targetAudience: "Collegiate Dancers, Rock Bands, Concertgoers, Youth Across East India",
    utmSource: "instagram",
    utmMedium: "social_post",
    utmCampaign: "xpressions_2027",
    utmContent: "creative_2_pronite",
    adImpressions: 48,
    adLinkClicks: 19,
    adCtr: 39.58,
    adTelemetrySource: "Meta Business Suite / Instagram Professional Dashboard Insights",
    externalClickTrackingStatus: "Verified Platform Insights",
    ga4Sessions: 18,
    totalUsers: 15,
    engagedSessions: 12,
    engagementRate: 66.7,
    avgEngagementTime: "1m 52s",
    avgEngagementTimeSeconds: 112,
    registerCtaClicks: 8,
    registrationModalOpens: 6,
    registrationFormStarts: 5,
    successfulRegistrations: 3,
    sessionConversionRate: 16.67,
    formCompletionRate: 60.00,
    phases: {
      all: { sessions: 18, registrations: 3, impressions: 48, linkClicks: 19 },
      phase1: { sessions: 4, registrations: 1, impressions: 12, linkClicks: 5, label: "Phase 1 (Nov 8–11): Initial Launch" },
      phase2: { sessions: 9, registrations: 1, impressions: 22, linkClicks: 9, label: "Phase 2 (Nov 12–16): Scale & Diversify" },
      phase3: { sessions: 5, registrations: 1, impressions: 14, linkClicks: 5, label: "Phase 3 (Nov 17–20): Final Push" },
    },
  },
  {
    id: "campaign-c",
    code: "Campaign C",
    name: "Campus QR Posters",
    channel: "Physical A4 Posters (Cafeteria, Library, Hostels, Gate 2)",
    creativeFormat: "Vertical Printed Poster & QR (4:5 / A4)",
    targetAudience: "Outstation University Delegates, Local Students, Visiting Contingents",
    utmSource: "campus_poster",
    utmMedium: "qr_scan",
    utmCampaign: "xpressions_2027",
    utmContent: "creative_3_passes",
    adImpressions: 35,
    adLinkClicks: 9,
    adCtr: 25.71,
    adTelemetrySource: "Dynamic QR Gateway Telemetry & Noticeboard Footfall Audits",
    externalClickTrackingStatus: "Direct QR Gateway Telemetry",
    ga4Sessions: 8,
    totalUsers: 7,
    engagedSessions: 5,
    engagementRate: 62.5,
    avgEngagementTime: "1m 30s",
    avgEngagementTimeSeconds: 90,
    registerCtaClicks: 4,
    registrationModalOpens: 3,
    registrationFormStarts: 2,
    successfulRegistrations: 1,
    sessionConversionRate: 12.50,
    formCompletionRate: 50.00,
    phases: {
      all: { sessions: 8, registrations: 1, impressions: 35, linkClicks: 9 },
      phase1: { sessions: 2, registrations: 0, impressions: 8, linkClicks: 2, label: "Phase 1 (Nov 8–11): Initial Launch" },
      phase2: { sessions: 4, registrations: 1, impressions: 18, linkClicks: 5, label: "Phase 2 (Nov 12–16): Scale & Diversify" },
      phase3: { sessions: 2, registrations: 0, impressions: 9, linkClicks: 2, label: "Phase 3 (Nov 17–20): Final Push" },
    },
  },
];


