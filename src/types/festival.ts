export type EventCategory = 'Business' | 'Culture' | 'Campus' | 'Social Impact';

export type EventStatus = 
  | 'Confirmed' 
  | 'Tentative' 
  | 'Details to be announced' 
  | 'Historical Flagship';

export interface CoordinatorContact {
  name: string;
  role: string;
  phone?: string;
  email?: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  subtitle: string;
  shortDescription: string;
  fullAbout: string;
  eligibility: string;
  participationType: 'Individual' | 'Team' | 'Both' | 'Open to All';
  teamSize: string;
  formatAndRules: string[];
  judgingCriteria: string[];
  prizes: {
    status: 'Tentative' | 'Confirmed' | 'Details to be announced';
    amountOrDescription: string;
  };
  importantDates: {
    registrationDeadline?: string;
    preliminaryRound?: string;
    finalRound?: string;
    status: string;
  };
  registrationStatus: EventStatus;
  registrationInstructions: string;
  coordinators: CoordinatorContact[];
  imageUrl: string;
  tags: string[];
  featured?: boolean;
}

export interface EditionHighlight {
  year: string;
  editionName: string;
  headlineArtist: string;
  coHeadliner?: string;
  dates: string;
  tagline: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  keyHighlights: string[];
  reportedScale?: string;
}

export interface ScheduleItem {
  id: string;
  day: 'Day 1' | 'Day 2' | 'Day 3';
  timeSlot: string;
  title: string;
  category: EventCategory | 'Pro Night' | 'General';
  venue: string;
  status: 'Tentative' | 'Confirmed' | 'Details to be announced';
  description: string;
  highlight?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Competitions' | 'Performances' | 'Schedule & Venue' | 'Registration';
}

export interface RegistrationInterestSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  participationCategory: EventCategory | 'General Visitor';
  eventOfInterest: string;
  consentUpdates: boolean;
  submittedAt: string;
}
