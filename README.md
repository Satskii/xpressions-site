# Xpressions – Official Festival Microsite
### Where Business Meets the Beat · XIM University, Bhubaneswar

> **Live Public URL (Cloudflare Global Edge):** [https://businesses-cute-precisely-steven.trycloudflare.com](https://businesses-cute-precisely-steven.trycloudflare.com)  
> **Campaign Headline:** *One festival. Many ways to stand out.*  
> **Supporting Message:** *Compete. Perform. Connect. Celebrate.*  
> **Organised by:** Student Executive Council (SEC) & X-Stec, XIM University

---

## 1. Executive Summary & Brand Positioning

**Xpressions** is the flagship annual management-cultural festival of XIM University, Bhubaneswar. This microsite bridges the analytical rigor of India's premier B-school competitions with the explosive energy of a stadium-scale cultural carnival.

### The Four Core Experiences
1. **COMPETE (Business):** Case championships, live equity trading simulations, leadership triathlons (*Maven*, *Trade Wars*, *Jack of All Trades*).
2. **PERFORM (Culture):** Eastern India's premier battle of the bands, western & classical dance, street theatre, fashion runway, vocal showcases (*Decibelz*, *Thirkan*, *Carnival de Vogue*, *Goonj*, *Aaghaz*).
3. **CONNECT (Campus):** Community athletics, campus marathons, cultural exhibitions (*XAthon*, informal campus arenas).
4. **CELEBRATE (Pro Nights & Impact):** Star celebrity pro nights and flagship social inclusion initiatives (*X-Enable*, *Vriddhi*).

---

## 2. Visual Design System

The site adopts an editorial festival aesthetic inspired by premier international festival design, while asserting a distinct identity for XIM University:

- **Primary Deep Plum (`#38213D`):** Institutional credibility, executive B-school gravitas, and nighttime stage contrast.
- **Light Lilac (`#E6D3E8`):** Editorial softness, typography highlights, card backgrounds, and category badges.
- **Warm Orange (`#F0A05A`):** High-energy cultural accent, call-to-action glow, and stage lighting highlights.
- **Pure White (`#FFFFFF`):** High-contrast editorial readability and modern layout balance.
- **Typography:**
  - **Headings & Display:** `Poppins` (Bold / SemiBold / Black)
  - **Body, Nav & Forms:** `Inter` (Regular / Medium / SemiBold)

---

## 3. Implemented Architecture & Sections

The application is built with **React 18 + TypeScript + Vite + Tailwind CSS** and organized cleanly into modular, decoupled components:

1. **Sticky Global Navigation (`Navbar.tsx`):**
   - Translucent glassmorphism navbar with blur backdrop.
   - Smooth deep-linking across sections: Home, Events, Schedule, Pro Nights, Participate, Past Editions, FAQs, Contact.
   - Distinctive primary CTA: **"Register Interest"** with warm orange glow.
   - Fully responsive mobile drawer with accessible touch targets.

2. **Immersive Hero Section (`Hero.tsx`):**
   - Full-bleed photographic stage crowd backdrop with controlled plum-to-orange gradient overlays.
   - Confident headline typography: *"One festival. Many ways to stand out."*
   - Clear tentative date & venue badge ensuring strict adherence to truth-in-advertising.
   - Dual action pathways: **"Register Interest"** and **"Explore Events"**.

3. **Stats & Legacy Strip (`StatsBar.tsx`):**
   - Proof points: 2005–2026 legacy, 4 experience pillars, 20+ flagship arenas, 100% student-led.

4. **Festival Introduction (`FestivalIntro.tsx`):**
   - Concise editorial storytelling: *"Where strategic business minds meet electrifying creative rhythm."*
   - Highlights the core ethos: *"Scale is reported. Clarity is experienced."*

5. **Four Experience Categories (`FourCategories.tsx`):**
   - 4 rounded photographic cards with hover elevations, pillar badges, and direct filter triggers into the Events Directory.

6. **Featured Experiences (`FeaturedEvents.tsx`):**
   - Curated cards for *Maven*, *Decibelz*, *Trade Wars*, *Carnival de Vogue*, *Thirkan*, and *X-Enable*.
   - Status badges clearly distinguishing historical flagship formats awaiting current-year confirmation.

7. **Dedicated Events Directory (`EventsDirectory.tsx`):**
   - Real-time text search (searches title, subtitle, description, and hashtags).
   - Category filtering (All, Business, Culture, Campus, Social Impact).
   - Format filtering (All, Team, Individual, Both, Open to All).
   - Responsive cards with team sizes, eligibility snippets, and view triggers.

8. **10-Section Reusable Event Detail Modal (`EventDetailModal.tsx`):**
   - Complete 10-point briefing:
     1. Executive Summary
     2. About the Challenge & Scope
     3. Eligibility Requirements
     4. Format & Competition Guidelines
     5. Team Composition
     6. Evaluation & Judging Parameters
     7. Prizes & Recognition (Tentative status)
     8. Key Milestones
     9. Registration Protocol & Disclaimer
     10. Student Coordinator Contacts
   - Integrated **"Register Interest for this Event"** and **"Share Event"** actions.

9. **Audience Pathways (`HowToParticipate.tsx`):**
   - Actionable guides tailored specifically for **Competitors**, **Performers**, and **Visitors**.

10. **Celebrity Pro Nights (`ProNightsSection.tsx`):**
    - Showcases festival atmosphere, stage engineering, and pro-night security protocols.
    - Teaser for upcoming 2026 artist announcements with interest alert signup.

11. **Documented Past Editions Archive (`PastEditionsTimeline.tsx`):**
    - Documented timeline from 2016 to 2025:
      - **2025:** Amaal Mallik & Ashish Solanki
      - **Jan 2024:** Darshan Raval with Sachin-Jigar
      - **2022:** Vishal-Shekhar
      - **2019:** Mika Singh
      - **2018:** Sunidhi Chauhan
      - **2017:** Farhan Akhtar
      - **2016:** Shankar-Ehsaan-Loy
    - **Strict Editorial Notice:** Clearly states that historical artists are past edition highlights and do not imply upcoming performers.
    - Interactive **Lightbox Modal** for full-screen photo viewing.

12. **Programme Schedule Preview (`ScheduleSection.tsx`):**
    - Day 1, Day 2, Day 3 tabs with category filters.
    - **Prominent Tentative Notice:** *"Schedule and venue details to be announced officially by the Organizing Committee."* No fictional clock timings are invented.

13. **Frequently Asked Questions (`FaqSection.tsx`):**
    - Expandable accordion resolving all 11 required questions regarding eligibility, registration, accommodation, and contacts.

14. **Functional Interest Registration Form (`InterestForm.tsx`):**
    - Mandatory policy disclaimer:
      > *"Submitting this form records your interest in Xpressions. It does not constitute final event registration. The organising team will share official registration information when available."*
    - Real-time client-side validation for Name, Email, Phone, College, Category, and Consent.
    - Local persistence in `localStorage` so data survives page refreshes.
    - Confetti celebration animation upon submission.
    - **Admin/Organiser Helper:** Includes an **"Export Interest List (CSV)"** button so committee members can immediately download all submissions!

15. **Verified Contact Directory (`ContactSection.tsx`):**
    - Official university campus location (Harirajpur, Jatni, Bhubaneswar).
    - Verified emails (`xpressions@xim.edu.in`, `sec@xim.edu.in`).
    - Verified social media channels (Instagram `@ximxpressions`, LinkedIn, Facebook, YouTube).

16. **Social Sharing Modal (`ShareModal.tsx`):**
    - One-click sharing to WhatsApp, Twitter/X, LinkedIn, or clipboard.

---

## 4. Instructions for Updating Event Information

All festival content is completely decoupled from UI components and stored in a single centralized configuration file:

📁 **`src/data/festivalData.ts`**

### To add a new event:
Open `src/data/festivalData.ts` and add an object to the `FESTIVAL_EVENTS` array:

```typescript
{
  id: "case-in-point",
  title: "Case in Point",
  category: "Business", // 'Business' | 'Culture' | 'Campus' | 'Social Impact'
  subtitle: "Consulting Case Simulation",
  shortDescription: "Solve operational bottlenecks for Fortune 500 firms.",
  fullAbout: "Comprehensive case problem designed by consulting leaders...",
  eligibility: "Open to full-time MBA students",
  participationType: "Team",
  teamSize: "3 members",
  formatAndRules: [
    "Round 1: Preliminary executive deck submission",
    "Round 2: Live campus jury defense"
  ],
  judgingCriteria: ["Analytical rigor", "Feasibility", "Q&A performance"],
  prizes: {
    status: "Tentative",
    amountOrDescription: "Prizes to be announced"
  },
  importantDates: { status: "Tentative" },
  registrationStatus: "Details to be announced",
  registrationInstructions: "Registration opens with official portal launch.",
  coordinators: [
    { name: "Consulting Lead", role: "Case Committee", email: "case@xim.edu.in" }
  ],
  imageUrl: "https://images.unsplash.com/...",
  tags: ["Consulting", "Strategy", "MBA"],
  featured: false
}
```

### To update festival dates or venue:
Modify `FESTIVAL_INFO` in `src/data/festivalData.ts`:
```typescript
export const FESTIVAL_INFO = {
  datesNotice: "November 20 – 22, 2026", // update once officially announced
  venueNotice: "Main Amphitheatre, XIM University",
  // ...
};
```

---

## 5. Instructions for Connecting Approved Registration Forms

Currently, the primary CTA triggers the interest registration form, which saves leads to `localStorage` and provides an exportable CSV.

When the organising committee supplies an approved registration platform (e.g. Unstop, Google Form, Townscript, or internal university API), update `src/components/InterestForm.tsx` or switch the CTA directly:

### Option A: Direct External Link (e.g. Unstop / Google Forms)
In `src/components/Navbar.tsx` and `src/components/Hero.tsx`:
```tsx
// Replace:
onOpenInterestModal()
// With:
window.open('https://unstop.com/college-fests/xpressions-2026', '_blank')
```

### Option B: REST API Endpoint (e.g. Supabase, Firebase, or Node Backend)
In `src/components/InterestForm.tsx`, replace the `localStorage` block in `handleSubmit` with a standard `fetch` call:
```typescript
await fetch('https://api.xpressions.xim.edu.in/v1/interest', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(submission)
});
```

---

## 6. Local Development & Deployment Guide

### Running Locally
```bash
# 1. Navigate to directory
cd xpressions-site

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser at http://localhost:3000
```

### Building for Production
```bash
npm run build
# Compiles optimized production bundle into the /dist directory
```

### Deploying to Netlify / Vercel
1. Push this folder to a GitHub/GitLab repository.
2. In Netlify or Vercel:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. Hit Deploy. The site will go live with automatic SSL in under 60 seconds.

---

## 7. Verified Public Live URL & Multipage Structure
- **Verified Cloudflare Edge Live URL:** [https://businesses-cute-precisely-steven.trycloudflare.com](https://businesses-cute-precisely-steven.trycloudflare.com)
- **7 Dedicated Pages:**
  1. `/` — Home (Hero, Sound Wave, Stats, Vibe Selector, Marquee Preview)
  2. `/events` — Full Events Directory (Live search, filters, 10-section modal)
  3. `/schedule` — Schedule & Venue (Day 1/2/3 tabs & transit guide)
  4. `/pro-nights` — Celebrity Pro Nights (Atmosphere, teaser, security rules)
  5. `/past-editions` — Past Editions Archive (2016–2025 timeline & lightbox)
  6. `/participate` — How to Participate (3 pathways & interest form)
  7. `/faqs` — FAQs & Contact Directory (All 11 questions & student council desk)
- **Local Development Server:** `npm run dev` (http://localhost:3000)
