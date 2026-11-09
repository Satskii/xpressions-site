import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle, AlertTriangle, Send, Download, 
  ArrowRight, Sparkles, Shield, Share2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FESTIVAL_EVENTS } from '../data/festivalData';
import { RegistrationInterestSubmission, EventCategory } from '../types/festival';

interface InterestFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEvent?: string;
  defaultCategory?: string;
}

export const InterestForm: React.FC<InterestFormProps> = ({
  isOpen,
  onClose,
  preselectedEvent = '',
  defaultCategory = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [category, setCategory] = useState<string>('Business');
  const [eventOfInterest, setEventOfInterest] = useState<string>('');
  const [consentUpdates, setConsentUpdates] = useState(true);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<RegistrationInterestSubmission | null>(null);

  useEffect(() => {
    if (preselectedEvent) {
      setEventOfInterest(preselectedEvent);
      // match event to category
      const found = FESTIVAL_EVENTS.find((e) => e.title.toLowerCase() === preselectedEvent.toLowerCase());
      if (found) {
        setCategory(found.category);
      }
    } else if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }, [preselectedEvent, defaultCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter events by selected category for the dropdown
  const categoryEvents = FESTIVAL_EVENTS.filter((e) => {
    if (category === 'General Visitor') return false;
    return e.category === category;
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^\+?[0-9]{10,14}$/.test(phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!college.trim()) errs.college = 'College or University name is required';
    if (!consentUpdates) errs.consent = 'You must consent to receive festival updates';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const submission: RegistrationInterestSubmission = {
      id: `interest-${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      college: college.trim(),
      participationCategory: category as any,
      eventOfInterest: eventOfInterest || (category === 'General Visitor' ? 'All Pro Nights & Attractions' : 'General Category Interest'),
      consentUpdates,
      submittedAt: new Date().toISOString(),
    };

    // Store in localStorage for real persistence and committee export
    try {
      const existing = localStorage.getItem('xpressions_interest_submissions');
      const list = existing ? JSON.parse(existing) : [];
      list.push(submission);
      localStorage.setItem('xpressions_interest_submissions', JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setLastSubmission(submission);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F0A05A', '#E6D3E8', '#38213D'],
        });
      } catch (e) {
        // graceful fallback
      }
    }, 600);
  };

  const handleDownloadCsv = () => {
    try {
      const existing = localStorage.getItem('xpressions_interest_submissions');
      const list: RegistrationInterestSubmission[] = existing ? JSON.parse(existing) : [];
      if (list.length === 0) {
        alert('No saved interest submissions found yet.');
        return;
      }
      const headers = ['ID', 'Full Name', 'Email', 'Phone', 'College', 'Category', 'Event of Interest', 'Consent', 'Submitted At'];
      const rows = list.map((item) => [
        item.id,
        `"${item.fullName.replace(/"/g, '""')}"`,
        `"${item.email.replace(/"/g, '""')}"`,
        `"${item.phone.replace(/"/g, '""')}"`,
        `"${item.college.replace(/"/g, '""')}"`,
        `"${item.participationCategory}"`,
        `"${item.eventOfInterest.replace(/"/g, '""')}"`,
        item.consentUpdates ? 'Yes' : 'No',
        item.submittedAt,
      ]);

      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `xpressions_interest_list_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCollege('');
    setEventOfInterest('');
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-plum-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-3 sm:px-4 py-4 sm:py-8 flex items-center justify-center">
        {/* Form Container */}
        <div 
          className="relative w-full max-w-2xl bg-white dark:bg-plum-950 rounded-3xl shadow-2xl border border-plum-200 dark:border-plum-800 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-plum-900 via-plum-850 to-plum-900 px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b border-plum-700">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-accent flex items-center justify-center text-plum-950 font-poppins font-black text-base">
                X
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-white">
                  Record Your Interest in Xpressions
                </h3>
                <p className="text-[11px] text-lilac">
                  Student Executive Council · XIM University, Bhubaneswar
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-lilac hover:text-white hover:bg-plum-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Submission Success Screen */}
          {isSubmitted ? (
            <div className="p-8 sm:p-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-poppins font-black text-2xl sm:text-3xl text-plum-950 dark:text-white">
                  Interest Successfully Recorded!
                </h3>
                <p className="text-xs font-semibold text-orange-accent uppercase tracking-wider mt-1">
                  Reference ID: {lastSubmission?.id}
                </p>
                <p className="mt-3 text-sm text-plum-900/80 dark:text-plum-200 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{lastSubmission?.fullName}</strong>! We have recorded your interest in <strong>{lastSubmission?.eventOfInterest}</strong> ({lastSubmission?.participationCategory}).
                </p>
              </div>

              {/* Crucial confirmation notice */}
              <div className="p-4 rounded-2xl bg-plum-50 dark:bg-plum-900/40 border border-plum-200 dark:border-plum-800 text-xs text-plum-800 dark:text-plum-200 text-left space-y-1.5">
                <div className="font-bold text-plum-950 dark:text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-orange-accent" />
                  <span>What happens next?</span>
                </div>
                <p>
                  1. The organizing committee will email you official rulebooks and confirmed dates as soon as approved.
                </p>
                <p>
                  2. You will receive priority access when the official team registration portal goes live.
                </p>
                <p className="text-[11px] text-plum-600 dark:text-plum-400 italic">
                  Note: Submitting this form records your interest; final participation requires completing the official university entry form upon release.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-plum-100 dark:border-plum-800">
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-plum-300 dark:border-plum-700 text-plum-900 dark:text-lilac font-semibold text-xs hover:bg-plum-50 dark:hover:bg-plum-900 transition-colors"
                >
                  Submit Another Interest
                </button>

                <button
                  onClick={handleDownloadCsv}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-plum-850 hover:bg-plum-900 text-white font-poppins font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  title="Download all stored interest entries as CSV (Admin/Organising Committee helper)"
                >
                  <Download className="w-4 h-4 text-orange-accent" />
                  <span>Export Interest List (CSV)</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs shadow-glow-orange transition-all"
                >
                  Close & Explore
                </button>
              </div>
            </div>
          ) : (
            /* The Active Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* MANDATORY EXPLICIT POLICY DISCLAIMER */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="font-bold">Important Notice:</strong>{' '}
                  Submitting this form records your interest in Xpressions. It does not constitute final event registration. The organising team will share official registration information when available.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-plum-900 dark:text-lilac uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.fullName
                        ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 focus:ring-rose-400'
                        : 'border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-900/60 text-plum-950 dark:text-white placeholder:text-plum-400 dark:placeholder:text-plum-500 focus:ring-plum-800 dark:focus:ring-orange-accent'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-plum-900 dark:text-lilac uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@university.edu"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 focus:ring-rose-400'
                        : 'border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-900/60 text-plum-950 dark:text-white placeholder:text-plum-400 dark:placeholder:text-plum-500 focus:ring-plum-800 dark:focus:ring-orange-accent'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-bold text-plum-900 dark:text-lilac uppercase tracking-wider mb-1.5">
                    Mobile Phone <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.phone
                        ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 focus:ring-rose-400'
                        : 'border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-900/60 text-plum-950 dark:text-white placeholder:text-plum-400 dark:placeholder:text-plum-500 focus:ring-plum-800 dark:focus:ring-orange-accent'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* College / University */}
                <div>
                  <label className="block text-xs font-bold text-plum-900 dark:text-lilac uppercase tracking-wider mb-1.5">
                    College / University <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. XIM University, IIM, IIT..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.college
                        ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 focus:ring-rose-400'
                        : 'border-plum-200 dark:border-plum-800 bg-white dark:bg-plum-900/60 text-plum-950 dark:text-white placeholder:text-plum-400 dark:placeholder:text-plum-500 focus:ring-plum-800 dark:focus:ring-orange-accent'
                    }`}
                  />
                  {errors.college && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.college}</p>
                  )}
                </div>
              </div>

              {/* Participation Category */}
              <div>
                <label className="block text-xs font-bold text-plum-900 dark:text-lilac uppercase tracking-wider mb-1.5">
                  Participation Pathway <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Business', 'Culture', 'Campus', 'Social Impact', 'General Visitor'].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setEventOfInterest('');
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        category === cat
                          ? 'bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 border-plum-800 dark:border-orange-accent shadow-sm'
                          : 'bg-plum-50/60 dark:bg-plum-900/40 text-plum-800 dark:text-lilac border-plum-200 dark:border-plum-800 hover:bg-plum-100 dark:hover:bg-plum-800/60'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event of Interest */}
              <div>
                <label className="block text-xs font-bold text-plum-900 dark:text-lilac uppercase tracking-wider mb-1.5">
                  Specific Event of Interest (Optional)
                </label>
                {category === 'General Visitor' ? (
                  <input
                    type="text"
                    disabled
                    value="All Pro Nights & Campus Attractions"
                    className="w-full px-4 py-2.5 rounded-xl border border-plum-200 dark:border-plum-800 bg-plum-50 dark:bg-plum-900/30 text-plum-700 dark:text-plum-400 text-xs sm:text-sm cursor-not-allowed"
                  />
                ) : (
                  <select
                    value={eventOfInterest}
                    onChange={(e) => setEventOfInterest(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-plum-200 dark:border-plum-800 text-plum-950 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-plum-800 dark:focus:ring-orange-accent bg-white dark:bg-plum-900/60"
                  >
                    <option value="" className="dark:bg-plum-900 dark:text-white">-- Select Event (or leave blank for all {category} events) --</option>
                    {categoryEvents.map((e) => (
                      <option key={e.id} value={e.title} className="dark:bg-plum-900 dark:text-white">
                        {e.title} — {e.subtitle}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentUpdates}
                    onChange={(e) => setConsentUpdates(e.target.checked)}
                    className="mt-0.5 rounded border-plum-300 dark:border-plum-700 text-plum-800 dark:text-orange-accent focus:ring-plum-800 dark:focus:ring-orange-accent w-4 h-4 bg-white dark:bg-plum-900"
                  />
                  <span className="text-xs text-plum-800/90 dark:text-lilac/90 leading-tight">
                    I consent to receive official festival updates, competition rulebooks, and schedule announcements from the Xpressions Organizing Committee via email/SMS.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.consent}</p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-plum-100 dark:border-plum-800 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-plum-300 dark:border-plum-700 text-plum-700 dark:text-lilac hover:bg-plum-50 dark:hover:bg-plum-900 text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-glow-orange hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-plum-950 border-t-transparent rounded-full animate-spin" />
                      <span>Recording Interest...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Interest</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
