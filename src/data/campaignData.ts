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
    action: "Mid-Campaign Analytics Review & Experiment Checkpoint",
    channel: "Analytics Hub",
    owner: "Steering Committee (X-Stec)",
    status: "Completed",
    details: "Evaluated mid-funnel metrics: 965 total visitors recorded. Variant B (High-Adrenaline) outperforming Variant A by +6.2% conversion rate on mobile devices.",
    metricImpact: "Confidence level reaching 93% favoring Variant B",
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
    status: "Active",
    details: "Comprehensive data audit across 1,420+ tracked sessions. A/B experiment concluded with statistically significant win for Variant B. Data consolidated for Step 4 submission.",
    metricImpact: "1,420+ total visits · 240+ verified interest leads · 16.9% overall CR",
  },
];

export const CHANNEL_PERFORMANCE_SUMMARY = [
  {
    channel: "Instagram Stories & Bio",
    source: "instagram",
    medium: "social_post / story",
    creative: "Creative #2 (Cultural & Pro-Nights)",
    visitors: 520,
    conversions: 104,
    conversionRate: "20.0%",
    avgTimeOnSite: "2m 14s",
  },
  {
    channel: "WhatsApp & Telegram Groups",
    source: "whatsapp",
    medium: "chat_group",
    creative: "Creative #1 (Management Battlefield)",
    visitors: 380,
    conversions: 68,
    conversionRate: "17.9%",
    avgTimeOnSite: "3m 05s",
  },
  {
    channel: "Campus Physical Posters (QR Scan)",
    source: "campus_poster",
    medium: "qr_scan",
    creative: "Creative #3 (Delegate Passes & Map)",
    visitors: 290,
    conversions: 46,
    conversionRate: "15.9%",
    avgTimeOnSite: "1m 48s",
  },
  {
    channel: "Direct / Organic / Campus Referral",
    source: "direct / xim.edu.in",
    medium: "organic / web",
    creative: "Direct Navigation",
    visitors: 230,
    conversions: 22,
    conversionRate: "9.6%",
    avgTimeOnSite: "1m 32s",
  },
];
