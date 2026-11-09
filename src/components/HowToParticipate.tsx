import React from 'react';
import { Target, Mic2, Ticket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EventCategory } from '../types/festival';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

interface HowToParticipateProps {
  onSelectPathway: (category: EventCategory | 'All' | 'schedule' | 'interest') => void;
  onOpenInterestModal: (role?: string) => void;
}

interface PathwayItem {
  title: string;
  audience: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  accent: string;
  buttonColor: string;
  checklist: string[];
  actionText: string;
  categoryTarget: EventCategory | 'All' | 'schedule' | 'interest';
}

export const HowToParticipate: React.FC<HowToParticipateProps> = ({
  onSelectPathway,
  onOpenInterestModal,
}) => {
  const pathways: PathwayItem[] = [
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
    <section id="participate" className="py-16 sm:py-24 bg-plum-950 text-white relative overflow-hidden w-full max-w-full">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-plum-800/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700/80">
              <span>Decision Pathways</span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              How to Participate
            </h2>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-lilac/90 max-w-xl mx-auto leading-relaxed">
              Every audience has distinct questions and needs. Choose your pathway to discover the right requirements, timeline, and actions.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pathway Cards with Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pathways.map((pathway, idx) => {
            const Icon = pathway.icon;
            return (
              <ScrollReveal key={idx} direction="blur-up" delay={idx * 140} duration={700}>
                <SpotlightCard
                  className="rounded-3xl bg-gradient-to-b from-plum-900/90 to-plum-900/60 border border-plum-750/70 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-orange-accent/40 transition-all duration-400 hover:-translate-y-2 backdrop-blur-sm h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-2xl bg-plum-800 text-orange-accent border border-plum-600/50 shadow-md">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-plum-800/80 text-lilac border border-plum-700">
                        {pathway.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
                      {pathway.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-accent mt-0.5">
                      {pathway.audience}
                    </p>
                    <p className="text-xs sm:text-sm text-lilac/80 mt-2.5 leading-relaxed">
                      {pathway.subtitle}
                    </p>

                    <div className="mt-6 pt-5 border-t border-plum-800/80 space-y-2.5">
                      <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                        Key Requirements & Next Steps:
                      </div>
                      {pathway.checklist.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-lilac/90 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-plum-800/60 space-y-2.5">
                    <button
                      onClick={() => onSelectPathway(pathway.categoryTarget)}
                      className={`w-full py-3 sm:py-3.5 px-4 rounded-2xl font-poppins font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${pathway.buttonColor}`}
                    >
                      <span>{pathway.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenInterestModal(pathway.title)}
                      className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-lilac/80 hover:text-white hover:bg-plum-850/60 transition-colors"
                    >
                      Record Interest for {pathway.title}
                    </button>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
