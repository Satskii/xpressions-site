import { EventItem, EditionHighlight, ScheduleItem, FaqItem } from '../types/festival';

export const FESTIVAL_INFO = {
  name: "Xpressions",
  tagline: "Not Just A Fest. It's A Whole X-Perience.",
  campaignHeadline: "Where Strategic Minds Meet Electrifying Creative Rhythm.",
  supportingMessage: "Compete. Perform. Connect. Celebrate.",
  institution: "XIMB, Bhubaneswar",
  organizedBy: "Student Executive Council & X-Stec",
  upcomingEdition: "Xpressions 2027",
  datesNotice: "29 – 31 January 2027",
  venueNotice: "XIMB Campus, Xavier Square, Jayadev Vihar, Bhubaneswar, Odisha",
  contactEmail: "xpressions@xim.edu.in",
  secEmail: "sec@xim.edu.in",
  phone: "+91 97570 85785",
  formattedPhone: "+91 97570 85785",
  address: "Xavier Institute of Management (XIMB), Xavier Square, Jayadev Vihar, Bhubaneswar, Odisha 751013",
  socials: {
    instagram: "https://www.instagram.com/ximbxpressions/",
    youtube: "https://www.youtube.com/@XpressionsXIMB",
    linkedin: "https://www.linkedin.com/school/xavier-institute-of-management-ximb/",
    facebook: "https://www.facebook.com/ximbxpressions/",
  }
};

export const CELEBLITZ_HALL_OF_FAME = [
  { name: "Darshan Raval", year: "2024", note: "Bollywood & Pop sensation", highlight: true },
  { name: "Vishal-Shekhar", year: "2023", note: "With DJs Olly Esse & Zephyrtone (25th Edition)", highlight: true },
  { name: "Mika Singh", year: "2019", note: "Bollywood powerhouse & pop pioneer", highlight: true },
  { name: "Sunidhi Chauhan", year: "2018", note: "India's undisputed playback queen", highlight: true },
  { name: "Farhan Akhtar", year: "2017", note: "Rock on with Farhan Live", highlight: true },
  { name: "Shankar-Ehsaan-Loy", year: "2016", note: "Musical maestros with 20,000+ crowd", highlight: true },
  { name: "Arijit Singh", year: "Legend", note: "The voice of a generation", highlight: false },
  { name: "Amit Trivedi", year: "Legend", note: "Indie-folk & Bollywood composer extraordinaire", highlight: false },
  { name: "Mohit Chauhan", year: "Legend", note: "Soulful acoustic anthems", highlight: false },
  { name: "Salim-Sulaiman", year: "Legend", note: "Dynamic Sufi & electronic fusion", highlight: false },
  { name: "Lucky Ali", year: "Legend", note: "Timeless indie pop icon", highlight: false },
  { name: "KK", year: "Legend", note: "Unforgettable collegiate anthems", highlight: false },
];

export const SPONSOR_TIERS = [
  {
    tierName: "Title & Presenting Partner",
    badgeColor: "#F0A05A",
    description: "Headline institutional and corporate festival presenting partner.",
    sponsors: [
      { name: "Hero Motocorp / Tata Motors", category: "Automotive & Mobility Partner", description: "Official Title & Mobility Collaborator" },
      { name: "State Bank of India", category: "Banking & Financial Services", description: "Official Financial Services Partner" }
    ]
  },
  {
    tierName: "Powered By & Associate Partners",
    badgeColor: "#C084FC",
    description: "Key category and enterprise technology accelerators.",
    sponsors: [
      { name: "Red Bull", category: "Energy Drink & Action Sports Partner", description: "Energizing campus battles" },
      { name: "Fastrack", category: "Youth Lifestyle & Accessories", description: "Fashion runway & style partner" },
      { name: "Nestlé", category: "Food & Beverage Partner", description: "Campus cafe & sampling zone" },
      { name: "Bhubaneswar Smart City", category: "City & Government Partner", description: "Promoting youth innovation in Odisha" }
    ]
  },
  {
    tierName: "Media, Radio & Platform Partners",
    badgeColor: "#38BDF8",
    description: "National broadcasting, streaming and media ecosystem.",
    sponsors: [
      { name: "Red FM 93.5", category: "Official Radio Partner", description: "Bajaate Raho on-air promotions" },
      { name: "The Telegraph / Sambad", category: "Print Media Partner", description: "Eastern India press coverage" },
      { name: "Unstop", category: "Official Case & Challenge Partner", description: "National competition hosting" }
    ]
  }
];

export const PAST_EDITIONS: EditionHighlight[] = [
  {
    year: "2025",
    editionName: "Xpressions '25",
    headlineArtist: "Amaal Mallik",
    coHeadliner: "Ashish Solanki (Comedy Night)",
    dates: "Documented Past Edition (2025)",
    tagline: "Symphony of Business & High-Octane Grooves",
    description: "The 2025 edition witnessed electrifying performances by Bollywood music composer Amaal Mallik alongside a rib-tickling stand-up set by comic Ashish Solanki, pairing national-tier B-school case finals with stadium-scale entertainment.",
    mediaUrl: "/images/real_fest/amaal_mallik_stage.jpg",
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
    mediaUrl: "/images/real_fest/vishal_shekhar_concert.jpg",
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
    mediaUrl: "/images/real_fest/mika_singh_live.jpg",
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
    description: "The musical triumvirate Shankar-Ehsaan-Loy delivered an extraordinary three-hour musical journey that remains one of the most storied nights in XIMB history.",
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
      finalRound: "During Xpressions 2027",
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
    imageUrl: "/images/real_fest/vishal_shekhar_live.jpg",
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
      "Round 2: Live stage finals during the festival.",
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
    imageUrl: "/images/real_fest/carnival_de_vogue_ramp.jpg",
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
    imageUrl: "/images/real_fest/carnival_de_vogue_stage.jpg",
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
    fullAbout: "X-Enable reflects XIMB's deep commitment to Jesuit ethos and social responsibility. Hosted right in the center of the festival, the event welcomes children from specialized schools across Odisha for games, artistic expression, cultural showcases, and campus mentorship.",
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
    shortDescription: "A scenic morning run connecting XIMB students, faculty, and Bhubaneswar citizens for health, camaraderie, and social causes.",
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
  },
  {
    id: "celeblitz",
    title: "Celeblitz",
    category: "Culture",
    subtitle: "The Grand Finale Celebrity Night · Pro Night",
    shortDescription: "The monumental closing pro night concert of Xpressions. 30,000+ festival goers singing as one. Superstar artist reveal dropping soon.",
    fullAbout: "Celeblitz is Eastern India's most celebrated collegiate stadium concert, marking the thunderous finale of Xpressions. Over past editions, the Celeblitz stage has been ignited by iconic legends including Darshan Raval, Vishal-Shekhar, Sunidhi Chauhan, Mika Singh, Farhan Akhtar, and Shankar-Ehsaan-Loy. Prepare for high-voltage stadium sound, laser choreography, and campus euphoria.",
    eligibility: "Open to registered college delegates, university students, and valid festival pass holders with official ID.",
    participationType: "Both",
    teamSize: "General Admission & Passholders",
    formatAndRules: [
      "Gates open at 6:00 PM; entry is strictly by digital pass and verified student/photo ID.",
      "Security checkpoints enforce campus safety regulations at main festival arena gates.",
      "Pass allocation brackets and online booking tiers will be announced alongside the artist reveal.",
      "Re-entry guidelines and wristband checks strictly enforced throughout the evening."
    ],
    judgingCriteria: [
      "Pure festival euphoria, live sound mastery, and unforgettable crowd connection."
    ],
    prizes: {
      status: "Confirmed",
      amountOrDescription: "Unmatched stadium musical experience & lifetime collegiate memories."
    },
    importantDates: {
      finalRound: "31 January 2027",
      status: "Confirmed Date: 31 Jan 2027"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Celebrity headliner announcement dropping soon on @ximbxpressions. Register your interest for priority pass alerts.",
    coordinators: [
      { name: "Celeblitz Pro Nights Cell", role: "Student Executive Council & X-Stec", email: "xpressions@xim.edu.in", phone: "+91 97570 85785" }
    ],
    imageUrl: "/images/real_fest/amaal_mallik_pyro.jpg",
    tags: ["Concert", "Celeblitz", "Pro Night", "Celebrity", "Finale", "Music"],
    featured: true
  },
  {
    id: "pitch-it-abroad",
    title: "Pitch It Abroad",
    category: "Business",
    subtitle: "Global Business Pitch & Cross-Border Strategy Challenge",
    shortDescription: "Teams pitch innovative business concepts designed for international expansion before an elite jury of global business heads and venture alumni.",
    fullAbout: "Pitch It Abroad challenges ambitious entrepreneurs and strategists to think beyond domestic borders. Teams formulate cross-border venture strategies, evaluating market entry mode, global regulatory dynamics, foreign exchange hedging, and cultural adaptation before pitching live to international corporate leaders.",
    eligibility: "Open to undergraduate and postgraduate students from recognized management and academic institutions.",
    participationType: "Team",
    teamSize: "2 – 4 members per team",
    formatAndRules: [
      "Round 1: Global Market Opportunity Deck and executive brief submission.",
      "Round 2: Virtual case defense and preliminary pitch.",
      "Round 3: Grand on-campus keynote pitch and cross-examination at the XIMB Seminar Hall."
    ],
    judgingCriteria: [
      "Global scalability and market expansion logic",
      "Financial feasibility, unit economics and capital structure",
      "Defensibility and innovation in go-to-market strategy"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "National trophy, cash awards, investor mentorship, and executive citations."
    },
    importantDates: {
      finalRound: "29–31 January 2027",
      status: "Confirmed (29–31 Jan 2027)"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Rulebooks dropping soon. Submit your interest to receive case briefs directly.",
    coordinators: [
      { name: "Global Strategy Lead", role: "Management Events Committee", email: "xpressions@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    tags: ["Pitch", "International", "Strategy", "Venture", "MBA"],
    featured: true
  },
  {
    id: "ximb-mun",
    title: "XIMB-MUN",
    category: "Business",
    subtitle: "The Flagship Model United Nations Conference",
    shortDescription: "Multilateral diplomacy, high-stakes geopolitical crises, and resolution drafting across prestigious simulated international committees.",
    fullAbout: "XIMB Model United Nations convenes the most articulate student diplomats from across the country. Over three intense committee days, delegates navigate contentious geopolitical stalemates, unmoderated caucuses, and international crises under strict parliamentary procedure.",
    eligibility: "Open to school, college, and university students across India.",
    participationType: "Individual",
    teamSize: "Individual Delegate (Double delegations in select committees)",
    formatAndRules: [
      "Simulated committees adhere to UNA-USA and HMUN parliamentary rules of procedure.",
      "Comprehensive study guides and crisis matrices released prior to conference.",
      "Position papers mandatory for award consideration."
    ],
    judgingCriteria: [
      "Diplomatic mastery and substantive policy argumentation",
      "Consensus-building, lobbying skills, and resolution authoring",
      "Crisp, authoritative crisis responsiveness"
    ],
    prizes: {
      status: "Tentative",
      amountOrDescription: "Best Delegate, High Commendation, Special Mention, and Best Delegation trophies."
    },
    importantDates: {
      finalRound: "29–31 January 2027",
      status: "Confirmed (29–31 Jan 2027)"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Matrix allocation and delegate applications opening shortly.",
    coordinators: [
      { name: "Secretary-General XIMB-MUN", role: "Diplomacy Secretariat", email: "xpressions@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    tags: ["MUN", "Diplomacy", "Debate", "Geopolitics", "Policy"],
    featured: true
  },
  {
    id: "workshops",
    title: "Masterclasses & Workshops",
    category: "Campus",
    subtitle: "Hands-On Industry & Creative Masterclasses",
    shortDescription: "Immersive 3-hour learning tracks in Music Production, Generative AI in Marketing, Creative Direction, and Quantitative Trading.",
    fullAbout: "Curated workshops led by industry specialists and creative practitioners. Gain practical skills in digital audio workstations, next-gen AI prompt engineering, venture valuation, or stage performance in intensive masterclass sessions held during festival days.",
    eligibility: "Open to all registered festival delegates.",
    participationType: "Individual",
    teamSize: "Individual",
    formatAndRules: [
      "Pre-registration required; limited seats per specialized track to ensure hands-on mentorship.",
      "Bring personal laptops where required for coding/production modules.",
      "Verified digital certificates of completion awarded by XIMB."
    ],
    judgingCriteria: [
      "Interactive engagement, prompt submission, and module project completion."
    ],
    prizes: {
      status: "Confirmed",
      amountOrDescription: "Official XIMB masterclass certification and industry partner software credits."
    },
    importantDates: {
      finalRound: "29–31 January 2027",
      status: "Confirmed (29–31 Jan 2027)"
    },
    registrationStatus: "Details to be announced",
    registrationInstructions: "Session roster and facilitator details releasing on our official channels.",
    coordinators: [
      { name: "Workshops Lead", role: "Learning & Industry Initiatives", email: "xpressions@xim.edu.in" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    tags: ["Workshops", "AI", "Audio Production", "Masterclass", "Skills"],
    featured: true
  }
];

export const SCHEDULE_PREVIEW: ScheduleItem[] = [
  // DAY 1 · 29 JAN 2027
  {
    id: "d1-inaug",
    day: "Day 1",
    timeSlot: "Morning (29 Jan 2027)",
    title: "Grand Inauguration Ceremony & XAthon Flag-Off",
    category: "Campus",
    venue: "Main Auditorium & University Grounds, XIMB",
    status: "Confirmed",
    description: "Traditional lamp-lighting, keynote address by university leadership, release of the Xpressions 2027 souvenir, and community marathon flag-off.",
    highlight: false
  },
  {
    id: "d1-mgmt",
    day: "Day 1",
    timeSlot: "Afternoon (29 Jan 2027)",
    title: "Management Competitions — Day 1 Prelims",
    category: "Business",
    venue: "Academic Block & Seminar Halls, XIMB",
    status: "Confirmed",
    description: "Preliminary and qualifier rounds for flagship management battles including J.O.A.T (Jack of All Trades), Pitch It Abroad, Trade Wars, and XIMB-MUN.",
    highlight: false
  },
  {
    id: "d1-cultural",
    day: "Day 1",
    timeSlot: "Evening (29 Jan 2027)",
    title: "Aaghaz — National Nukkad Natak (Street Play)",
    category: "Culture",
    venue: "Fountain Square & Central Lawns, XIMB",
    status: "Confirmed",
    description: "High-voltage street theatre competitions addressing critical social issues through powerful voices, synchronized percussion, and theatrical storytelling.",
    highlight: false
  },
  {
    id: "d1-pronite",
    day: "Day 1",
    timeSlot: "Night (29 Jan 2027)",
    title: "Opening Pro Night — Artist Reveal Coming Soon",
    category: "Pro Night",
    venue: "Main Arena Ground, XIMB",
    status: "Details to be announced",
    description: "The opening musical and comedy spectacle kicking off three days of campus euphoria. Lineup announcement dropping on official channels.",
    highlight: true
  },

  // DAY 2 · 30 JAN 2027
  {
    id: "d2-mgmt",
    day: "Day 2",
    timeSlot: "All Day (30 Jan 2027)",
    title: "Management Events — Semi-Finals & Case Defenses",
    category: "Business",
    venue: "Academic Block & Executive Classrooms, XIMB",
    status: "Confirmed",
    description: "High-stakes boardroom simulations, Trade Wars floor trading, Maven case jury presentations, and XIMB-MUN multilateral debate sessions.",
    highlight: false
  },
  {
    id: "d2-decibelz",
    day: "Day 2",
    timeSlot: "Afternoon / Evening (30 Jan 2027)",
    title: "Decibelz — National Battle of the Bands",
    category: "Culture",
    venue: "Open Air Amphitheatre, XIMB",
    status: "Confirmed",
    description: "The legendary rock and metal collegiate band showdown. Heavy riffs, soaring solos, and raw sonic energy competing for Eastern India's top music prize.",
    highlight: true
  },
  {
    id: "d2-cultural",
    day: "Day 2",
    timeSlot: "Evening (30 Jan 2027)",
    title: "Thirkan — Western & Fusion Group Dance Face-Off",
    category: "Culture",
    venue: "Main Stage, XIMB",
    status: "Confirmed",
    description: "Premier collegiate western and fusion dance crews battle under synchronized stage lighting with high-octane choreography and stunts.",
    highlight: false
  },
  {
    id: "d2-pronite",
    day: "Day 2",
    timeSlot: "Night (30 Jan 2027)",
    title: "Pro Night 2 — EDM & Campus Concert Spectacle",
    category: "Pro Night",
    venue: "Main Arena Ground, XIMB",
    status: "Details to be announced",
    description: "Electrifying live DJ set and pro-night concert under stadium lighting. Artist announcement dropping on official channels.",
    highlight: true
  },

  // DAY 3 · 31 JAN 2027
  {
    id: "d3-cultural",
    day: "Day 3",
    timeSlot: "Afternoon (31 Jan 2027)",
    title: "Carnival de Vogue — Runway Grand Finale",
    category: "Culture",
    venue: "Main Stage, XIMB",
    status: "Confirmed",
    description: "The pinnacle collegiate fashion runway show blending haute couture, avant-garde design themes, and theatrical elegance before celebrity judges.",
    highlight: true
  },
  {
    id: "d3-awards",
    day: "Day 3",
    timeSlot: "Evening (31 Jan 2027)",
    title: "Prize Distribution & Closing Valedictory Ceremony",
    category: "Campus",
    venue: "Main Auditorium, XIMB",
    status: "Confirmed",
    description: "Felicitation of national champions across all 20+ management and cultural competitions followed by the official festival valedictory address.",
    highlight: false
  },
  {
    id: "d3-celeblitz",
    day: "Day 3",
    timeSlot: "Night (31 Jan 2027)",
    title: "Celeblitz — Grand Finale Celebrity Night Concert",
    category: "Pro Night",
    venue: "Main Arena Ground, XIMB",
    status: "Details to be announced",
    description: "The monumental closing celebrity performance of Xpressions 2027. Past headliners include Darshan Raval, Vishal-Shekhar, and Sunidhi Chauhan. Artist reveal dropping soon!",
    highlight: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Schedule & Venue",
    question: "When and where is Xpressions 2027 taking place?",
    answer: "Xpressions 2027 will take place from 29 to 31 January 2027 at the Xavier Institute of Management (XIMB) campus, Xavier Square, Jayadev Vihar, Bhubaneswar, Odisha."
  },
  {
    id: "faq-2",
    category: "Competitions",
    question: "Who can participate in Xpressions competitions?",
    answer: "Undergraduate and postgraduate students from recognized colleges and universities across India can register for all management and cultural competitions. Each event has its own specific team size and eligibility rules listed on the Events page."
  },
  {
    id: "faq-3",
    category: "Registration",
    question: "Is there a registration fee to participate?",
    answer: "Fee structures vary by event and are published alongside the official rulebooks. Several flagship events offer free participation for enrolled students. You can register your intent on this site for free to get instant priority alerts."
  },
  {
    id: "faq-4",
    category: "Performances",
    question: "Who is performing at Celeblitz and the Pro Nights?",
    answer: "The celebrity headliners for Xpressions 2027 are being finalized and will be unveiled closer to the festival. Past editions have featured Darshan Raval, Vishal-Shekhar, Sunidhi Chauhan, Mika Singh, Farhan Akhtar, and Shankar-Ehsaan-Loy. Tap 'Register Interest' or follow @ximbxpressions to be the first to know."
  },
  {
    id: "faq-5",
    category: "Performances",
    question: "How do I get passes for Celeblitz / Celebrity Night?",
    answer: "Pass tiers, early-bird slots, and ticketing portal links will be shared simultaneously with the official artist reveal on our website and Instagram."
  },
  {
    id: "faq-6",
    category: "Schedule & Venue",
    question: "Is accommodation available for outstation participants?",
    answer: "Yes, subsidized on-campus and partnered hostel accommodation details will be shared directly with shortlisted outstation teams and delegates upon qualification."
  },
  {
    id: "faq-7",
    category: "Competitions",
    question: "When will the event rulebooks and case briefs be released?",
    answer: "The Student Executive Council (SEC) and X-Stec are releasing official rulebooks and problem statements in phases. Register your intent to receive case briefs directly via email."
  },
  {
    id: "faq-8",
    category: "General",
    question: "My organization wants to sponsor or partner. Whom do we contact?",
    answer: "Corporate partners and brands can write directly to xpressions@xim.edu.in or call our sponsorship desk at +91 97570 85785 to receive our official Sponsorship Deck & Deliverables dossier."
  },
  {
    id: "faq-9",
    category: "General",
    question: "Who organises Xpressions?",
    answer: "Xpressions is entirely student-run by the Xavier Institute of Management, Bhubaneswar through the Student Executive Council (SEC) and the Steering Committee (X-Stec)."
  }
];
