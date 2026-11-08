import React, { useEffect } from 'react';
import { 
  X, Users, Trophy, Calendar, CheckCircle2, AlertCircle, 
  Mail, Share2, ArrowRight, ShieldCheck, HelpCircle 
} from 'lucide-react';
import { EventItem } from '../types/festival';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
  onRegisterInterest: (eventTitle: string) => void;
  onShare: (event: EventItem) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onRegisterInterest,
  onShare,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-plum-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        {/* Modal Window */}
        <div 
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-plum-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
        >
          {/* Header Image Cover */}
          <div className="relative h-64 sm:h-72 w-full bg-plum-950 overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/60 to-transparent" />

            {/* Top Close & Share Actions */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => onShare(event)}
                className="p-2.5 rounded-full bg-plum-900/80 text-white hover:bg-orange-accent hover:text-plum-950 transition-colors backdrop-blur-md"
                aria-label="Share this event"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-plum-900/80 text-white hover:bg-white hover:text-plum-950 transition-colors backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Event Header Information */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-orange-accent text-plum-950 font-poppins font-black text-xs uppercase tracking-wider">
                  {event.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-plum-900/90 text-lilac font-medium text-xs border border-plum-700/80">
                  {event.participationType} ({event.teamSize})
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium text-xs border border-amber-500/40">
                  Status: {event.registrationStatus}
                </span>
              </div>
              <h2 id="modal-event-title" className="font-poppins font-black text-3xl sm:text-4xl text-white">
                {event.title}
              </h2>
              <p className="text-xs sm:text-sm text-lilac font-medium mt-1">
                {event.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body: 10 Standard Sections */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
            
            {/* 1. Event Introduction */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-plum-600 mb-1">
                1. Executive Summary
              </h3>
              <p className="text-sm sm:text-base text-plum-950 leading-relaxed font-normal">
                {event.shortDescription}
              </p>
            </div>

            {/* 2. About the Competition / Activity */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-plum-600 mb-2">
                2. About the Challenge & Scope
              </h3>
              <p className="text-sm text-plum-900/80 leading-relaxed bg-plum-50 p-4 rounded-2xl border border-plum-100">
                {event.fullAbout}
              </p>
            </div>

            {/* 3. Who Can Participate & 5. Team Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-plum-200">
                <div className="flex items-center gap-2 text-xs font-bold text-plum-900 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-orange-accent" />
                  <span>3. Eligibility Requirements</span>
                </div>
                <p className="text-xs sm:text-sm text-plum-800">
                  {event.eligibility}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-plum-200">
                <div className="flex items-center gap-2 text-xs font-bold text-plum-900 uppercase tracking-wider mb-2">
                  <Users className="w-4 h-4 text-orange-accent" />
                  <span>5. Team Composition</span>
                </div>
                <p className="text-xs sm:text-sm text-plum-800">
                  {event.teamSize}
                </p>
              </div>
            </div>

            {/* 4. Format and Rules */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-plum-600 mb-3">
                4. Competition Format & Guidelines
              </h3>
              <div className="space-y-2">
                {event.formatAndRules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-plum-900">
                    <span className="w-5 h-5 rounded-full bg-plum-100 text-plum-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Judging Criteria */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-plum-600 mb-3">
                6. Evaluation & Judging Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {event.judgingCriteria.map((crit, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-plum-50/60 border border-plum-100 text-xs text-plum-900">
                    <div className="font-bold text-orange-accent mb-1">Criterion {idx + 1}</div>
                    <div>{crit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Prizes & 8. Important Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                  <Trophy className="w-4 h-4 text-orange-accent" />
                  <span>7. Prizes & Recognition ({event.prizes.status})</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950">
                  {event.prizes.amountOrDescription}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-plum-50 border border-plum-200">
                <div className="flex items-center gap-2 text-xs font-bold text-plum-900 uppercase tracking-wider mb-2">
                  <Calendar className="w-4 h-4 text-orange-accent" />
                  <span>8. Key Milestones ({event.importantDates.status})</span>
                </div>
                <p className="text-xs sm:text-sm text-plum-800">
                  Registration & prelim rounds to be scheduled upon official portal opening.
                </p>
              </div>
            </div>

            {/* 9. Registration / Submission Instructions */}
            <div className="p-4 rounded-2xl bg-lilac/30 border border-plum-200">
              <div className="flex items-center gap-2 text-xs font-bold text-plum-900 uppercase tracking-wider mb-1">
                <AlertCircle className="w-4 h-4 text-orange-accent" />
                <span>9. Registration Protocol & Disclaimer</span>
              </div>
              <p className="text-xs text-plum-800 leading-relaxed">
                {event.registrationInstructions}
              </p>
            </div>

            {/* 10. Student Coordinator Contacts */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-plum-600 mb-3">
                10. Student Coordinator Contacts
              </h3>
              <div className="flex flex-wrap gap-4">
                {event.coordinators.map((coord, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-plum-50 border border-plum-100 text-xs">
                    <div className="p-2 rounded-lg bg-plum-800 text-white font-bold">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-plum-950">{coord.name}</div>
                      <div className="text-plum-600 text-[11px]">{coord.role}</div>
                      {coord.email && (
                        <a href={`mailto:${coord.email}`} className="text-orange-accent font-medium hover:underline text-[11px]">
                          {coord.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Modal Action Footer */}
          <div className="p-4 sm:p-6 bg-plum-50 border-t border-plum-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-plum-700 text-center sm:text-left">
              Questions regarding rules? Reach out to the event lead or submit an interest form.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onShare(event)}
                className="px-4 py-2.5 rounded-xl border border-plum-300 text-plum-900 font-semibold text-xs hover:bg-plum-100 transition-colors flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onRegisterInterest(event.title);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Register Interest for {event.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
