import React from 'react';
import { Play, Youtube, Film, Sparkles, ExternalLink } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

export const PAST_AFTERMOVIES = [
  {
    id: 'aftermovie-silver-jubilee',
    title: 'Xpressions Silver Jubilee Official Aftermovie',
    edition: "25th Edition Milestone",
    duration: '4:35',
    thumbnail: '/images/real_fest/vishal_shekhar_concert.jpg',
    description: 'Relive the 30,000+ festival arena, high-stakes case competitions, and the explosive Vishal & Shekhar pro-night concert.',
    youtubeUrl: `${FESTIVAL_INFO.socials.youtube}`,
    tags: ['Aftermovie', 'Pro Night', 'Arena'],
  },
  {
    id: 'aftermovie-celeblitz-live',
    title: 'Celeblitz Star Night Highlights',
    edition: 'Concert Series',
    duration: '3:50',
    thumbnail: '/images/real_fest/amaal_mallik_pyro.jpg',
    description: 'Amaal Mallik and Mika Singh bringing the campus alive with pyro jets, purple lasers, and unforgettable collegiate singalongs.',
    youtubeUrl: `${FESTIVAL_INFO.socials.youtube}`,
    tags: ['Celeblitz', 'Live Concert', 'Pyro'],
  },
  {
    id: 'aftermovie-vogue-runway',
    title: 'Carnival De Vogue — Runway Grand Finale',
    edition: 'Fashion Championship',
    duration: '3:15',
    thumbnail: '/images/real_fest/carnival_de_vogue_stage.jpg',
    description: 'The elegance, haute couture, and stage choreography that define Eastern India’s grandest collegiate fashion runway.',
    youtubeUrl: `${FESTIVAL_INFO.socials.youtube}`,
    tags: ['Vogue', 'Fashion', 'Runway'],
  },
  {
    id: 'aftermovie-decibelz-rock',
    title: 'Decibelz Battle of the Bands — Stage Riffs',
    edition: 'Rock Championship',
    duration: '4:10',
    thumbnail: '/images/real_fest/vishal_shekhar_live.jpg',
    description: 'Headbanging guitar solos, soaring vocals, and raw rock energy from the country’s finest collegiate bands.',
    youtubeUrl: `${FESTIVAL_INFO.socials.youtube}`,
    tags: ['Decibelz', 'Rock', 'Battle of Bands'],
  },
];

export const PastAftermovies: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-plum-900/50 dark:bg-plum-950 border-t border-plum-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider mb-2">
                <Film className="w-3.5 h-3.5" />
                <span>Video Chronicles &amp; Aftermovies</span>
              </div>
              <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
                Official Festival Aftermovies &amp; Video Recaps
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-lilac/80 max-w-xl">
                Experience the raw adrenaline of past pro-nights, runway battles, and case championships captured in high-definition video recaps.
              </p>
            </div>

            <a
              href={FESTIVAL_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-poppins font-bold transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
            >
              <Youtube className="w-4 h-4" />
              <span>Watch on Official YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </ScrollReveal>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAST_AFTERMOVIES.map((video, idx) => (
            <ScrollReveal key={video.id} direction="blur-up" delay={idx * 100} duration={700}>
              <SpotlightCard className="group rounded-3xl bg-plum-900/80 border border-plum-800 hover:border-orange-accent/50 shadow-md overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5">
                {/* Thumbnail with Play Button */}
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video w-full overflow-hidden bg-plum-950 block"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-orange-accent/90 group-hover:bg-orange-accent text-plum-950 flex items-center justify-center shadow-lg transition-transform group-hover:scale-115">
                      <Play className="w-5 h-5 ml-0.5 fill-plum-950" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-plum-950/80 text-[10px] font-bold text-white tracking-wide border border-plum-800">
                    {video.duration}
                  </div>

                  {/* Edition Pill */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-plum-950/80 backdrop-blur-md text-[10px] font-semibold text-orange-accent border border-plum-700">
                    {video.edition}
                  </div>
                </a>

                {/* Card Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-poppins font-bold text-sm sm:text-base text-white group-hover:text-orange-accent transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-xs text-lilac/75 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-plum-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {video.tags.map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-plum-800/70 text-lilac">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-orange-accent hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Play</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
