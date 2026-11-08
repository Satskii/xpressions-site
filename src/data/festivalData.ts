import { EventItem, EditionHighlight, ScheduleItem, FaqItem } from '../types/festival';

export const FESTIVAL_INFO = {
  name: "Xpressions",
  tagline: "Where Business Meets the Beat",
  campaignHeadline: "One festival. Many ways to stand out.",
  supportingMessage: "Compete. Perform. Connect. Celebrate.",
  institution: "XIM University, Bhubaneswar",
  organizedBy: "Student Executive Council & X-Stec",
  upcomingEdition: "Xpressions 2026",
  datesNotice: "Dates to be announced officially by the Organizing Committee",
  venueNotice: "XIM University Campus, Bhubaneswar (Details to be announced)",
  contactEmail: "xpressions@xim.edu.in",
  secEmail: "sec@xim.edu.in",
  phone: "+91 674 237 7700",
  address: "XIM University, Plot No. 12(A), Nijigada, Kurki, Harirajpur, Bhubaneswar, Odisha 752050",
  socials: {
    instagram: "https://www.instagram.com/ximxpressions/",
    linkedin: "https://www.linkedin.com/school/xim-university/",
    facebook: "https://www.facebook.com/ximxpressions/",
    youtube: "https://www.youtube.com/@XIMUniversityOfficial",
  }
};

export const PAST_EDITIONS: EditionHighlight[] = [
  {
    year: "2025",
    editionName: "Xpressions '25",
    headlineArtist: "Amaal Mallik",
    coHeadliner: "Ashish Solanki (Comedy Night)",
    dates: "Documented Past Edition (2025)",
    tagline: "Symphony of Business & High-Octane Grooves",
    description: "The 2025 edition witnessed electrifying performances by Bollywood music composer Amaal Mallik alongside a rib-tickling stand-up set by comic Ashish Solanki, pairing national-tier B-school case finals with stadium-scale entertainment.",
    mediaUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    keyHighlights: [
      "Headliner concert by Amaal Mallik drawing students from 50+ institutes",
      "Celebrity comedy night featuring Ashish Solanki",
      "Over 15 flagship business case rounds and nationwide qualifiers",
      "Decibelz National Battle of the Bands finals"
    ],
    reportedScale: "3 Days · 40+ Universities · 20+ Contests"
  },
  {
    year: "Jan 2024",
    editionName: "Xpressions Jan '24",
    headlineArtist: "Darshan Raval",
    coHeadliner: "Sachin-Jigar",
    dates: "19 – 21 January 2024 (Past Edition)",
    tagline: "Double Headliner Star Spectacle",
    description: "In an unprecedented double-headliner showcase, Bollywood's romantic sensation Darshan Raval and the acclaimed duo Sachin-Jigar brought the main festival arena to a roaring crescendo following intense 72-hour management simulations.",
    mediaUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    keyHighlights: [
      "Stunning dual-headliner concerts: Darshan Raval & Sachin-Jigar",
      "National participants from premier IIMs, XLRI, FMS and IITs",
      "Carnival de Vogue grand fashion runway with celebrity jury",
      "X-Enable community initiative for 120+ specially-abled young talents"
    ],
    reportedScale: "Record campus footfall & 25+ corporate partners"
  },
  {
    year: "2022",
    editionName: "Xpressions '22",
    headlineArtist: "Vishal-Shekhar",
    dates: "Documented Hybrid Past Edition (2022)",
    tagline: "Resilience, Rhythm & Return to Stage",
    description: "Returning with a hybrid model combining high-stakes digital business hackathons with high-energy on-campus spectacles, the legendary duo Vishal & Shekhar delivered an unforgettable pro night anthem.",
    mediaUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    keyHighlights: [
      "Powerhouse pro-night anthems by Vishal & Shekhar",
      "Innovative hybrid structure: virtual case heats & in-person stage rounds",
      "Trade Wars live equity market simulation",
      "Thirkan Eastern & Western solo/duet dance face-offs"
    ]
  },
  {
    year: "2019",
    editionName: "Xpressions '19",
    headlineArtist: "Mika Singh",
    dates: "November 2019 (Past Edition)",
    tagline: "The King of Bhangra & Campus Euphoria",
    description: "Mika Singh took over the Xpressions festival stage with high-tempo Bollywood and Punjabi hits, crowning three days of intense debate, case competitions and street plays.",
    mediaUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    keyHighlights: [
      "Blockbuster live concert by Mika Singh",
      "Aaghaz Nukkad Natak (street play) with teams from 10 states",
      "Maven national business strategy cup",
      "Campus food street and cultural exhibitions"
    ]
  },
  {
    year: "2018",
    editionName: "Xpressions '18",
    headlineArtist: "Sunidhi Chauhan",
    dates: "November 2018 (Past Edition)",
    tagline: "Vocal Mastery & Electrifying Soundscapes",
    description: "The versatile Sunidhi Chauhan captivated the audience with unmatched vocal power, capping off a weekend of intense corporate simulations and creative expressions.",
    mediaUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    keyHighlights: [
      "Legendary performance by Sunidhi Chauhan",
      "Decibelz rock and fusion band championship",
      "Jack of All Trades multidisciplinary leadership triathlon",
      "Vriddhi rural innovation and case presentation"
    ]
  },
  {
    year: "2017",
    editionName: "Xpressions '17",
    headlineArtist: "Farhan Akhtar",
    dates: "November 2017 (Past Edition)",
    tagline: "Farhan Live & Youth Anthems",
    description: "Farhan Akhtar with his band Farhan Live shook the festival grounds with rock ballads, celebrating the spirit of youth leadership and student entrepreneurship.",
    mediaUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    keyHighlights: [
      "Farhan Live rock pro night",
      "Pitches to VC and angel investor juries",
      "Goonj acoustic & vocal solo/duet competition",
      "Campus flashmobs and youth leadership talks"
    ]
  },
  {
    year: "2016",
    editionName: "Xpressions '16",
    headlineArtist: "Shankar-Ehsaan-Loy",
    dates: "November 2016 (Past Edition)",
    tagline: "Timeless Musical Brilliance",
    description: "The musical triumvirate Shankar-Ehsaan-Loy delivered an extraordinary three-hour musical journey that remains one of the most storied nights in XIM University history.",
    mediaUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    keyHighlights: [
      "Soul-stirring concert by Shankar-Ehsaan-Loy",
      "National case challenges sponsored by leading conglomerates",
      "Carnival de Vogue premier edition",
      "Inter-collegiate social outreach and charity runs"
    ]
  }
];

export const FESTIVAL_EVENTS: EventItem[] = [
  // BUSINESS CATEGORY
  {
    id: "maven",
    title: "Maven",
    category: "Business",
    subtitle: "The Flagship National Business Strategy & Case Challenge",
    shortDescription: "Xpressions' cornerstone national business competition testing strategic thinking, operational restructuring, and market disruption under intense pressure.",
    fullAbout: "Maven is the premier management competition of Xpressions, designed to test the sharpest business minds across the country. Teams tackle complex, unscripted business dilemmas crafted by industry veterans, navigating strategic dilemmas, resource constraints, and dynamic competitive responses before an executive jury.",
    eligibility: "Open to full-time undergraduate and postgraduate students from recognized management and higher education institutions.",
    participationType: "Team",
    teamSize: "2 – 3 members from the same institution",
    formatAndRules: [
      "Round 1: Online national business aptitude and rapid case analysis quiz.",
      "Round 2: Detailed executive case submission based on real-world industry problem.",
      "Round 3: Grand campus presentation to a distinguished jury of CXOs and management professors.",
      "Inter-specialization teams are allowed; cross-college teams are not permitted.",
      "All submissions must be original; plagiarism will lead to immediate disqualification."
    ],
    judgingCriteria: [
      "Strategic clarity, logical rigor, and depth of business acumen",
      "Financial viability, operational feasibility, and market viability",
      "Innovative problem-solving and presentation delivery under Q&A"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Prizes & citations to be announced by the Organising Committee upon final corporate sponsorship confirmation."
    },
    importantDates: {
      registrationDeadline: "Dates to be announced",
      preliminaryRound: "Schedule to be announced",
      finalRound: "During Xpressions 2026",
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Official registration links will be published once the event handbook is released by X-Stec. Express your interest now to receive direct updates.",
    coordinators: [
      { name: "Student Case Lead", role: "Business Events Committee", email: "maven@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tags: ["Strategy", "Case Study", "Flagship", "MBA", "Leadership"],
    featured: true
  },
  {
    id: "trade-wars",
    title: "Trade Wars",
    category: "Business",
    subtitle: "Real-Time Equity Trading & Portfolio Simulation",
    shortDescription: "A high-adrenaline virtual trading simulation testing real-time market instinct, quantitative risk management, and macroeconomic forecasting.",
    fullAbout: "Trade Wars drops participants straight onto the trading floor. Simulating live stock exchanges, volatile corporate earnings, and unexpected geopolitical shocks, contestants manage multi-asset portfolios to deliver alpha while strictly managing Sharpe ratios and drawdown risk.",
    eligibility: "Open to all enrolled college students with a passion for capital markets and finance.",
    participationType: "Both",
    teamSize: "1 – 2 members",
    formatAndRules: [
      "Round 1: 5-day virtual trading simulation on simulated live stock market feeds.",
      "Round 2: Portfolio defense and investment thesis presentation for shortlisted finalists.",
      "Participants are bound by strict position limits and sector exposure constraints."
    ],
    judgingCriteria: [
      "Net portfolio return and risk-adjusted Sharpe ratio",
      "Fundamental and technical backing for equity selections",
      "Risk mitigation strategy during simulated volatility"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Cash prizes, certificates and trading credits to be confirmed."
    },
    importantDates: {
      registrationDeadline: "Tentative",
      preliminaryRound: "Virtual Trading Week (TBA)",
      finalRound: "Campus Grand Finale (TBA)",
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Trading portal login credentials and detailed simulation rules will be distributed following official registration approval.",
    coordinators: [
      { name: "FinTech Coordinator", role: "Finance Association", email: "tradewars@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tags: ["Finance", "Trading", "Simulation", "Analytics"],
    featured: true
  },
  {
    id: "jack-of-all-trades",
    title: "Jack of All Trades",
    category: "Business",
    subtitle: "The Ultimate Multidisciplinary General Management Triathlon",
    shortDescription: "A grueling multi-stage test of leadership, crisis communication, negotiation, and cross-functional business instincts.",
    fullAbout: "Can you navigate a supply chain collapse in the morning, negotiate a hostile takeover at noon, and manage a high-stakes media crisis by evening? Jack of All Trades tests the complete business generalist through round-the-clock stress challenges.",
    eligibility: "Enrolled undergraduate and postgraduate students from all streams.",
    participationType: "Team",
    teamSize: "3 – 4 members",
    formatAndRules: [
      "Stage 1: Cross-functional business sprint covering Marketing, Ops, HR & Finance.",
      "Stage 2: Live crisis simulation and board room negotiation showdown.",
      "Stage 3: Elevator pitch to an unannounced panel of angel investors."
    ],
    judgingCriteria: [
      "Agility in switching between management domains",
      "Crisis response composure and negotiation finesse",
      "Cohesion and strategic leadership under sleep deprivation"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Trophies, certificates of excellence and cash rewards to be announced."
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Express interest via the portal to receive notifications when event slots open.",
    coordinators: [
      { name: "General Management Lead", role: "Academic Committee", email: "jackofalltrades@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    tags: ["Leadership", "Crisis Mgmt", "Negotiation", "Cross-Functional"],
    featured: false
  },

  // CULTURE CATEGORY
  {
    id: "decibelz",
    title: "Decibelz",
    category: "Culture",
    subtitle: "The National Semi-Pro & Collegiate Battle of the Bands",
    shortDescription: "Xpressions' legendary rock and fusion band championship where raw amplified energy, original compositions, and technical precision collide.",
    fullAbout: "Decibelz has echoed across Bhubaneswar for over a decade as one of Eastern India's most fiercely contested band face-offs. From progressive rock to fusion, metal, and blues, student and semi-professional bands take the main concert stage under professional lighting and acoustic rigs.",
    eligibility: "Open to college bands and independent semi-pro musical acts.",
    participationType: "Team",
    teamSize: "3 – 8 band members",
    formatAndRules: [
      "Prelims: Digital audio/video demo submission of 2 tracks (minimum 1 original composition).",
      "Finals: Live on-stage performance (20 minutes total including line check).",
      "Standard 5-piece drum kit and standard bass/guitar amplifiers provided on stage.",
      "Bands must bring their own instruments, pedals, and custom hardware."
    ],
    judgingCriteria: [
      "Tightness, groove, and instrumental proficiency",
      "Originality of arrangement and songwriting",
      "Stage presence, dynamic crowd engagement, and vocal performance"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Trophy, studio recording credits, and cash awards (Details to be announced)."
    },
    importantDates: {
      registrationDeadline: "To be announced",
      finalRound: "Xpressions Main Arena (TBA)",
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Keep your demo track links (YouTube/Drive/SoundCloud) ready for the upcoming submission form.",
    coordinators: [
      { name: "Cultural Committee Lead", role: "Music Society", email: "decibelz@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    tags: ["Music", "Rock", "Band", "Flagship", "Live Stage"],
    featured: true
  },
  {
    id: "thirkan",
    title: "Thirkan",
    category: "Culture",
    subtitle: "Eastern & Western Dance Extravaganza (Solo, Duet & Group)",
    shortDescription: "A celebration of choreography, rhythm, and storytelling encompassing classical Bharatanatyam to hip-hop street battles.",
    fullAbout: "Thirkan is the signature dance showcase of Xpressions. Welcoming solo artists, duets, and high-energy synchronized crews, this event transforms the auditorium stage into a vibrant canvas of movement, emotive expression, and contemporary choreography.",
    eligibility: "Enrolled college students from any stream.",
    participationType: "Both",
    teamSize: "Solo (1), Duet (2), or Group Crew (6 – 20 members)",
    formatAndRules: [
      "Round 1: Video screening round of 2-3 minutes routine.",
      "Round 2: Stage finals at XIM University Auditorium.",
      "Time limit: Solo (4 mins), Duet (5 mins), Group (8 mins).",
      "Music tracks must be submitted in 320kbps MP3 format prior to technical rehearsals."
    ],
    judgingCriteria: [
      "Choreographic innovation and thematic coherence",
      "Synchronization, musicality, and technical execution",
      "Costumes, stage utilization, and audience impact"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Prizes and rolling trophies across Eastern, Western, and Crew categories to be announced."
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Registration criteria and submission dates will be published with the cultural rulebook.",
    coordinators: [
      { name: "Dance Society Lead", role: "X-Choreo", email: "thirkan@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    tags: ["Dance", "Hip-hop", "Classical", "Choreography"],
    featured: true
  },
  {
    id: "carnival-de-vogue",
    title: "Carnival de Vogue",
    category: "Culture",
    subtitle: "The Runway Fashion & Thematic Design Showcase",
    shortDescription: "High-couture fashion meets thematic drama as collegiate teams bring visionary costume design, walk choreography, and styling to the ramp.",
    fullAbout: "Carnival de Vogue blends high-fashion aesthetics with compelling social themes. College teams act as complete fashion houses—designing wardrobe, curating soundtracks, perfecting walks, and articulating powerful messages under runway spotlights.",
    eligibility: "Open to college teams and design institutes.",
    participationType: "Team",
    teamSize: "10 – 18 participants including models, designers, and backstage crew",
    formatAndRules: [
      "Theme-based presentation (Time limit: 12 minutes on ramp).",
      "Original concepts and sustainable fashion elements receive bonus appraisal.",
      "Vulgarity or offensive themes lead to immediate disqualification."
    ],
    judgingCriteria: [
      "Thematic continuity and design craftsmanship",
      "Poise, ramp walk coordination, and confidence",
      "Originality of hair, makeup, and musical synchronization"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Best Team, Best Male Model, Best Female Model, and Best Designer awards to be announced."
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Theme declaration and lookbook submissions open with official portal launch.",
    coordinators: [
      { name: "Fashion Society Lead", role: "Vogue Council", email: "vogue@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    tags: ["Fashion", "Runway", "Design", "Glamour"],
    featured: true
  },
  {
    id: "goonj",
    title: "Goonj",
    category: "Culture",
    subtitle: "Acoustic, Semi-Classical & Bollywood Vocal Competition",
    shortDescription: "A pure test of vocal nuance, pitch precision, and emotive expression across solo and duet musical performances.",
    fullAbout: "Goonj celebrates the human voice. From unplugged acoustic melodies to intricate semi-classical ragas and soulful indie pop ballads, vocalists perform with live accompaniment before an attentive audience and renowned vocal adjudicators.",
    eligibility: "College students across India.",
    participationType: "Both",
    teamSize: "Solo or Duet (with up to 2 instrumental accompanists)",
    formatAndRules: [
      "Prelims: Unedited vocal clip submission.",
      "Finals: Live acoustic performance on stage (4-6 minutes)."
    ],
    judgingCriteria: [
      "Sur, Taal, vocal range, and pitch accuracy",
      "Song choice, emotional connect, and acoustic balance"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Details to be announced"
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Submit your interest to get early notification for audio demo auditions.",
    coordinators: [
      { name: "Vocal Arts Lead", role: "Music Society", email: "goonj@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    tags: ["Vocals", "Acoustic", "Singing", "Music"],
    featured: false
  },
  {
    id: "aaghaz",
    title: "Aaghaz",
    category: "Culture",
    subtitle: "The National Street Theatre (Nukkad Natak) Championship",
    shortDescription: "Rousing dhol beats, bold voices, and fearless social commentary in open-air street theatre circles across the campus grounds.",
    fullAbout: "Aaghaz breathes life into the age-old tradition of Nukkad Natak. Teams gather around circular street arenas using voice modulation, percussive beats, and evocative choreography to ignite conversations on pressing societal challenges.",
    eligibility: "College dramatics societies.",
    participationType: "Team",
    teamSize: "12 – 25 participants",
    formatAndRules: [
      "Open-air performance with acoustic instruments only (no microphones).",
      "Time limit: 15 minutes performance + 2 minutes setup.",
      "Clear social or cultural message without partisan or defamatory content."
    ],
    judgingCriteria: [
      "Script clarity, message relevance, and dialogue projection",
      "Team coordination, vocal harmony, and crowd immersion"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Best Script, Best Actor, Best Production prizes to be announced."
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Dramatics societies may register interest for audition slots.",
    coordinators: [
      { name: "Dramatics Lead", role: "Theatre Society", email: "aaghaz@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    tags: ["Theatre", "Street Play", "Dramatics", "Social Message"],
    featured: false
  },

  // CAMPUS & SOCIAL IMPACT CATEGORY
  {
    id: "x-enable",
    title: "X-Enable",
    category: "Social Impact",
    subtitle: "Flagship Inclusive Sports & Arts Carnival for Specially-Abled Children",
    shortDescription: "Xpressions' heart and social commitment: an unforgettable day of sports, painting, music, and joy organized in partnership with local community schools.",
    fullAbout: "X-Enable reflects XIM University's deep commitment to Jesuit ethos and social responsibility. Hosted right in the center of the festival, the event welcomes children from specialized schools across Odisha for games, artistic expression, cultural showcases, and campus mentorship.",
    eligibility: "Open to partner institutions, NGO schools, and university student volunteers.",
    participationType: "Open to All",
    teamSize: "Volunteer squads / institutional delegations",
    formatAndRules: [
      "Interactive sports challenges tailored for accessibility.",
      "Inclusive art canvas, storytelling workshops, and music circles.",
      "Every child participant receives a certificate, medal, and celebration kit."
    ],
    judgingCriteria: [
      "Purely celebratory and inclusive; not a commercial competition."
    ],
    prizes: {
      status: "Confirmed",
      amountOrDescription: "Mementoes, medals, gift hampers, and institutional commendations."
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Volunteers and partner NGOs can sign up for participation through the dedicated social impact pathway.",
    coordinators: [
      { name: "Social Wing Convener", role: "Social Responsibility Cell", email: "xenable@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    tags: ["Inclusion", "Social Impact", "Community", "Empathy"],
    featured: true
  },
  {
    id: "vriddhi",
    title: "Vriddhi",
    category: "Social Impact",
    subtitle: "Rural Development & Social Entrepreneurship Innovation Challenge",
    shortDescription: "Developing scalable, financially sustainable business models for grassroots community development, rural supply chains, and environmental resilience.",
    fullAbout: "Vriddhi invites student thinkers to design actionable solutions for grassroots challenges in Eastern India. Working with actual village case studies and self-help group scenarios, participants present impact models evaluated for financial viability and measurable social return on investment.",
    eligibility: "College and university students nationwide.",
    participationType: "Team",
    teamSize: "2 – 4 members",
    formatAndRules: [
      "Round 1: Concept note and social problem identification.",
      "Round 2: Prototype model, stakeholder map, and sustainability presentation."
    ],
    judgingCriteria: [
      "Practical feasibility, community impact metrics, and sustainability"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Grants, mentorship access, and citations to be announced."
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Problem briefs will be released with official portal launch.",
    coordinators: [
      { name: "Rural Innovation Lead", role: "Social Impact Committee", email: "vriddhi@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    tags: ["Social Enterprise", "Rural Development", "Sustainability"],
    featured: false
  },
  {
    id: "xathon",
    title: "XAthon",
    category: "Campus",
    subtitle: "The Annual Campus Marathon for Community Awareness",
    shortDescription: "A scenic morning run connecting XIM University students, faculty, and Bhubaneswar citizens for health, camaraderie, and social causes.",
    fullAbout: "XAthon kicks off the early festival hours as hundreds of runners lace up their shoes for a timed campus-to-city circuit. The run champions a vital social cause each edition, from green environment drives to digital literacy.",
    eligibility: "Open to university students, faculty, alumni, and registered external marathoners.",
    participationType: "Individual",
    teamSize: "Individual runner",
    formatAndRules: [
      "Categories: 5K Fun Run and 10K Timed Challenge.",
      "Bib collection and medical clearance required prior to flag-off.",
      "Hydration stations and medical response teams positioned along the route."
    ],
    judgingCriteria: [
      "Official chip timing for podium finishes."
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Medals for all finishers, podium trophies and sports vouchers to be announced."
    },
    importantDates: {
      status: "Tentative"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Runner bib slots will open closer to the festival dates.",
    coordinators: [
      { name: "Sports Secretary", role: "Sports Committee", email: "xathon@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80",
    tags: ["Marathon", "Fitness", "Campus Life", "Run"],
    featured: false
  }
];

export const SCHEDULE_PREVIEW: ScheduleItem[] = [
  {
    id: "s1",
    day: "Day 1",
    timeSlot: "Morning (Tentative)",
    title: "Inaugural Ceremony & XAthon Flag-Off",
    category: "Campus",
    venue: "Main University Grounds",
    status: "Tentative",
    description: "Welcome address by university leadership, lighting of the ceremonial lamp, and flag-off for the community marathon.",
    highlight: false
  },
  {
    id: "s2",
    day: "Day 1",
    timeSlot: "Mid-Day (Tentative)",
    title: "Maven & Business Case Prelims",
    category: "Business",
    venue: "Academic Block Audi",
    status: "Tentative",
    description: "Opening presentations and business simulations across marketing, finance, and operations tracks.",
    highlight: false
  },
  {
    id: "s3",
    day: "Day 1",
    timeSlot: "Evening (Tentative)",
    title: "Acoustic Evening & Stand-Up Comedy Night",
    category: "Pro Night",
    venue: "Open Air Amphitheatre",
    status: "Tentative",
    description: "Unplugged vocal showcases followed by national comedy talent to open festival festivities.",
    highlight: true
  },
  {
    id: "s4",
    day: "Day 2",
    timeSlot: "Morning (Tentative)",
    title: "X-Enable Community Carnival",
    category: "Social Impact",
    venue: "Central Lawns",
    status: "Tentative",
    description: "Inclusive sporting events, arts, and games with children from special schools across the state.",
    highlight: false
  },
  {
    id: "s5",
    day: "Day 2",
    timeSlot: "Afternoon (Tentative)",
    title: "Trade Wars Live Floor & Thirkan Dance Heats",
    category: "Culture",
    venue: "Finance Lab & Auditorium",
    status: "Tentative",
    description: "Simultaneous high-stakes equity trading and electrifying solo/crew dance qualifiers.",
    highlight: false
  },
  {
    id: "s6",
    day: "Day 2",
    timeSlot: "Night (Tentative)",
    title: "Decibelz: National Battle of the Bands",
    category: "Culture",
    venue: "Main Festival Arena",
    status: "Tentative",
    description: "The premier rock and fusion collegiate band championship under stadium sound.",
    highlight: true
  },
  {
    id: "s7",
    day: "Day 3",
    timeSlot: "Morning (Tentative)",
    title: "Grand Business Finals & Vriddhi Presentations",
    category: "Business",
    venue: "Executive Council Hall",
    status: "Tentative",
    description: "Finalists pitch to CXO and venture investor juries for national championship crowns.",
    highlight: false
  },
  {
    id: "s8",
    day: "Day 3",
    timeSlot: "Afternoon (Tentative)",
    title: "Carnival de Vogue Runway Grand Finale",
    category: "Culture",
    venue: "Main Auditorium Stage",
    status: "Tentative",
    description: "Glamour, thematic design, and couture runway walks before fashion industry adjudicators.",
    highlight: false
  },
  {
    id: "s9",
    day: "Day 3",
    timeSlot: "Night (Tentative)",
    title: "Celebrity Pro Night (Grand Star Concert)",
    category: "Pro Night",
    venue: "Festival Grand Grounds",
    status: "Tentative",
    description: "The definitive musical spectacle closing Xpressions. Lineup awaiting official announcement.",
    highlight: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Xpressions?",
    answer: "Xpressions is the flagship annual management-cultural festival of XIM University, Bhubaneswar. Bringing together business competitions, artistic expression, campus life, and celebrity pro nights, it stands as one of Eastern India's largest and most storied student-led university festivals."
  },
  {
    id: "faq-2",
    category: "General",
    question: "Who organises Xpressions?",
    answer: "Xpressions is entirely conceptualised and executed by the students of XIM University through the Student Executive Council (SEC) and X-Stec (Steering Committee), supported by dedicated academic societies and faculty advisory boards."
  },
  {
    id: "faq-3",
    category: "Competitions",
    question: "Who can participate in Xpressions events?",
    answer: "Most business competitions and cultural contests are open to enrolled undergraduate and postgraduate students from recognized colleges and universities across India. Specific eligibility guidelines (team size, year of study, cross-college allowances) vary by event and are outlined on each event detail page."
  },
  {
    id: "faq-4",
    category: "Competitions",
    question: "How can I participate in business competitions?",
    answer: "Explore the Business category on our Events page to review events like Maven, Trade Wars, and Jack of All Trades. Once official registration opens, links will be provided on each event card. You can also submit an Interest Registration on this microsite to be notified the moment slots open."
  },
  {
    id: "faq-5",
    category: "Performances",
    question: "How can I register for cultural events?",
    answer: "Cultural competitions—including Decibelz (Battle of the Bands), Thirkan (Dance), Goonj (Vocals), and Carnival de Vogue (Fashion)—require pre-screening rounds or video/audio demo submissions. Full audition guidelines and submission portals will be published in the official Cultural Rulebook."
  },
  {
    id: "faq-6",
    category: "Schedule & Venue",
    question: "Where will the festival take place?",
    answer: "The festival takes place at XIM University, Bhubaneswar, Odisha. Main stage events, business case rounds, and pro nights are held on campus grounds with cutting-edge academic and performance facilities. Specific venue allocations and transport shuttles will be announced with the final schedule."
  },
  {
    id: "faq-7",
    category: "Schedule & Venue",
    question: "When will the festival happen?",
    answer: "Dates for the upcoming edition are currently tentative and will be formally announced by the Student Executive Council following university academic calendar approval. Keep an eye on our social handles and register your interest to receive date alerts."
  },
  {
    id: "faq-8",
    category: "Performances",
    question: "Will there be celebrity performances?",
    answer: "Yes! Xpressions has an illustrious legacy of hosting India's foremost artists, with past editions featuring Shankar-Ehsaan-Loy, Farhan Akhtar, Sunidhi Chauhan, Mika Singh, Vishal-Shekhar, Darshan Raval, Sachin-Jigar, and Amaal Mallik. The upcoming celebrity lineup is currently under finalization and will be unveiled closer to the festival."
  },
  {
    id: "faq-9",
    category: "Schedule & Venue",
    question: "How can I find the schedule?",
    answer: "A comprehensive day-wise timetable will be made available on the Schedule page as soon as event milestones and stage logistics are locked. Until then, our preview shows the planned phases of the festival."
  },
  {
    id: "faq-10",
    category: "Registration",
    question: "Are there participation fees?",
    answer: "Participation fee structures vary by competition and will be clearly published alongside event rules. Several events offer free registration for university students. No fees are required to record your interest on this microsite."
  },
  {
    id: "faq-11",
    category: "General",
    question: "How can I contact the organising team?",
    answer: "You can write to us directly at xpressions@xim.edu.in or sec@xim.edu.in. Specific event student coordinators are also listed on individual event pages for tailored queries regarding rules and team submissions."
  }
];
