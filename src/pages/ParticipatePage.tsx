import React, { useState } from 'react';
import { HowToParticipate } from '../components/HowToParticipate';
import { Target, Mic2, Ticket, CheckCircle2, AlertTriangle, Send, Download, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FESTIVAL_EVENTS } from '../data/festivalData';
import { RegistrationInterestSubmission, EventCategory } from '../types/festival';

interface ParticipatePageProps {
  onOpenInterestModal: (role?: string) => void;
  onNavigateCategory: (category: EventCategory) => void;
}

export const ParticipatePage: React.FC<ParticipatePageProps> = ({
  onOpenInterestModal,
  onNavigateCategory,
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

    try {
      const existing = localStorage.getItem('xpressions_interest_submissions');
      const list = existing ? JSON.parse(existing) : [];
      list.push(submission);
      localStorage.setItem('xpressions_interest_submissions', JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setLastSubmission(submission);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F0A05A', '#E6D3E8', '#38213D'],
        });
      } catch (e) {}
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
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-plum-950 text-white py-14 border-b border-plum-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Audience Pathways</span>
          </div>
          <h1 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            How to Participate
          </h1>
          <p className="mt-3 font-inter text-base sm:text-lg text-lilac max-w-2xl mx-auto leading-relaxed">
            Choose your pathway to discover tailored requirements, eligibility rules, and record your interest for the upcoming edition.
          </p>
        </div>
      </div>

      {/* 3 Audience Pathways Component */}
      <HowToParticipate
        onSelectPathway={(target) => {
          if (target !== 'schedule' && target !== 'interest') {
            onNavigateCategory(target as EventCategory);
          }
        }}
        onOpenInterestModal={onOpenInterestModal}
      />

      {/* Embedded Working Interest Registration Form Section */}
      <section className="py-20 bg-plum-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="font-poppins font-black text-3xl sm:text-4xl text-plum-950">
              Record Your Interest
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-plum-700">
              Receive rulebooks, audition calls, and schedule releases direct to your inbox.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-plum-200 shadow-xl overflow-hidden p-6 sm:p-10">
            {isSubmitted ? (
              <div className="text-center space-y-6 py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-poppins font-black text-2xl text-plum-950">
                    Interest Successfully Recorded!
                  </h3>
                  <p className="text-xs font-semibold text-orange-accent uppercase tracking-wider mt-1">
                    Reference ID: {lastSubmission?.id}
                  </p>
                  <p className="mt-2 text-sm text-plum-900/80 max-w-md mx-auto">
                    Thank you, <strong>{lastSubmission?.fullName}</strong>! We have noted your interest in <strong>{lastSubmission?.eventOfInterest}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-plum-50 border border-plum-200 text-xs text-plum-800 text-left space-y-1">
                  <div className="font-bold text-plum-950 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-orange-accent" />
                    <span>Next Steps</span>
                  </div>
                  <p>1. Official competition handbooks and links will be emailed once approved.</p>
                  <p>2. You will receive priority notification for prelim registration slots.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-plum-100">
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-plum-300 text-plum-900 font-semibold text-xs hover:bg-plum-50"
                  >
                    Submit Another Interest
                  </button>
                  <button
                    onClick={handleDownloadCsv}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-plum-850 hover:bg-plum-900 text-white font-poppins font-semibold text-xs flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-orange-accent" />
                    <span>Export Interest List (CSV)</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* MANDATORY POLICY DISCLAIMER */}
                <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <strong className="font-bold">Important Notice:</strong>{' '}
                    Submitting this form records your interest in Xpressions. It does not constitute final event registration. The organising team will share official registration information when available.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-plum-900 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-rose-400 bg-rose-50 focus:ring-rose-400'
                          : 'border-plum-200 focus:ring-plum-800'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-plum-900 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@university.edu"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-400 bg-rose-50 focus:ring-rose-400'
                          : 'border-plum-200 focus:ring-plum-800'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-plum-900 uppercase tracking-wider mb-1.5">
                      Mobile Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-rose-400 bg-rose-50 focus:ring-rose-400'
                          : 'border-plum-200 focus:ring-plum-800'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-plum-900 uppercase tracking-wider mb-1.5">
                      College / University <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      placeholder="e.g. XIM University, IIM, IIT..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 ${
                        errors.college
                          ? 'border-rose-400 bg-rose-50 focus:ring-rose-400'
                          : 'border-plum-200 focus:ring-plum-800'
                      }`}
                    />
                    {errors.college && <p className="text-[11px] text-rose-500 mt-1">{errors.college}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-plum-900 uppercase tracking-wider mb-1.5">
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
                            ? 'bg-plum-800 text-white border-plum-800 shadow-sm'
                            : 'bg-plum-50/60 text-plum-800 border-plum-200 hover:bg-plum-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-plum-900 uppercase tracking-wider mb-1.5">
                    Specific Event of Interest (Optional)
                  </label>
                  {category === 'General Visitor' ? (
                    <input
                      type="text"
                      disabled
                      value="All Pro Nights & Campus Attractions"
                      className="w-full px-4 py-2.5 rounded-xl border border-plum-200 bg-plum-50 text-plum-700 text-xs sm:text-sm cursor-not-allowed"
                    />
                  ) : (
                    <select
                      value={eventOfInterest}
                      onChange={(e) => setEventOfInterest(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-plum-200 text-plum-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-plum-800 bg-white"
                    >
                      <option value="">-- Select Event (or leave blank for all {category} events) --</option>
                      {categoryEvents.map((e) => (
                        <option key={e.id} value={e.title}>
                          {e.title} — {e.subtitle}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentUpdates}
                      onChange={(e) => setConsentUpdates(e.target.checked)}
                      className="mt-0.5 rounded border-plum-300 text-plum-800 focus:ring-plum-800 w-4 h-4"
                    />
                    <span className="text-xs text-plum-800/90 leading-tight">
                      I consent to receive official festival updates, competition rulebooks, and schedule announcements from the Xpressions Organizing Committee via email/SMS.
                    </span>
                  </label>
                  {errors.consent && <p className="text-[11px] text-rose-500 mt-1">{errors.consent}</p>}
                </div>

                <div className="pt-4 border-t border-plum-100 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-glow-orange hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Recording Interest...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Interest to Organizing Committee</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
