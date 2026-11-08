import React from 'react';
import { Target, Mic2, Ticket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EventCategory } from '../types/festival';

interface HowToParticipateProps {
  onSelectPathway: (category: EventCategory | 'All' | 'schedule' | 'interest') => void;
  onOpenInterestModal: (role?: string) => void;
}

export const HowToParticipate: React.FC<HowToParticipateProps> = ({
  onSelectPathway,
  onOpenInterestModal,
}) => {
  const pathways = [
    {
      title: "Compete",
      audience: "For B-School & Collegiate Competitors",
      subtitle: "Test skills on real business problems & earn a CV-defining credential",
      icon: Target,
      tag: "Business Challenges",
      accent: "from-plum-900 to-plum-800",
      buttonColor: "bg-orange-accent text-plum-950 hover:bg-orange-hover",
      checklist: [
        "Review eligibility & team requirements (2-3 members)",
        "Explore flagship cases: Maven, Trade Wars & Jack of All Trades",
        "Form your squad & prepare for preliminary online rounds",
        "Prizes remain tentative until officially announced"
      ],
      actionText: "Explore Business Competitions",
      categoryTarget: "Business" as EventCategory,
    },
    {
      title: "Perform",
      audience: "For Cultural Performers & Creative Talents",
      subtitle: "Command Eastern India's largest collegiate stage under stadium sound",
      icon: Mic2,
      tag: "Cultural Showcases",
      accent: "from-plum-850 to-plum-700",
      buttonColor: "bg-white text-plum-950 hover:bg-lilac",
      checklist: [
        "Band battle (Decibelz), dance crews (Thirkan) & runway (Vogue)",
        "Prepare audio/video demo links for preliminary screening",
        "Adhere to stage timing, acoustic specs & original compositions",
        "Audition deadlines & rulebooks to be announced soon"
      ],
      actionText: "Explore Cultural Stages",
      categoryTarget: "Culture" as EventCategory,
    },
    {
      title: "Attend",
      audience: "For General Festival Visitors & Campus Community",
      subtitle: "Experience pro nights, campus food street & unforgettable festival energy",
      icon: Ticket,
      tag: "Festival Experience",
      accent: "from-plum-800 to-plum-600",
      buttonColor: "bg-orange-accent text-plum-950 hover:bg-orange-hover",
      checklist: [
        "Star celebrity pro night concerts & comedy showcases",
        "Campus carnival, food stalls, networking & games arena",
        "X-Enable inclusive sports carnival & community initiatives",
        "Official passes, visitor gates & guidelines to be announced"
      ],
      actionText: "View Visitor & Pass Guide",
      categoryTarget: "schedule",
    },
  ];

  return (
    <section id="participate" className="py-20 bg-plum-950 text-white relative overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-plum-800/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <span>Decision Pathways</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            How to Participate
          </h2>
          <p className="mt-3 font-inter text-base sm:text-lg text-lilac">
            Every audience has distinct questions and needs. Choose your pathway to discover the right requirements, timeline, and actions.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pathways.map((pathway, idx) => {
            const Icon = pathway.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-gradient-to-b from-plum-900/90 to-plum-900/60 border border-plum-700/80 p-8 flex flex-col justify-between shadow-xl hover:border-orange-accent/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-plum-800 text-orange-accent border border-plum-600/60 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-plum-800/70 text-lilac text-xs font-semibold border border-plum-700">
                      {pathway.tag}
                    </span>
                  </div>

                  <h3 className="font-poppins font-black text-2xl text-white">
                    {pathway.title}
                  </h3>
                  <div className="text-xs font-semibold text-orange-accent mt-0.5">
                    {pathway.audience}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-lilac leading-relaxed">
                    {pathway.subtitle}
                  </p>

                  {/* Checklist */}
                  <div className="mt-6 pt-6 border-t border-plum-800/80 space-y-3">
                    <div className="text-xs font-bold text-white tracking-wide uppercase">
                      What you need to know:
                    </div>
                    {pathway.checklist.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-lilac/90">
                        <CheckCircle2 className="w-4 h-4 text-orange-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-plum-800 space-y-3">
                  <button
                    onClick={() => {
                      if (typeof pathway.categoryTarget === 'string' && pathway.categoryTarget === 'schedule') {
                        onSelectPathway('schedule');
                      } else {
                        onSelectPathway(pathway.categoryTarget as EventCategory);
                      }
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-poppins font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md ${pathway.buttonColor}`}
                  >
                    <span>{pathway.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenInterestModal(pathway.title)}
                    className="w-full text-center text-xs text-lilac/70 hover:text-orange-accent py-1 font-medium transition-colors"
                  >
                    Register interest for {pathway.title.toLowerCase()} updates →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
