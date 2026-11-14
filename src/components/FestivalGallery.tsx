import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Concert' | 'Vogue' | 'Crowd';
  edition: string;
  src: string;
  caption: string;
}

export const REAL_FESTIVAL_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Amaal Mallik Live Spectacle',
    category: 'Concert',
    edition: "Xpressions '25",
    src: '/images/real_fest/amaal_mallik_pyro.jpg',
    caption: 'Bollywood composer Amaal Mallik igniting the stadium stage amidst smoke flares and purple laser beams.'
  },
  {
    id: 'photo-2',
    title: 'Carnival De Vogue Grand Finale',
    category: 'Vogue',
    edition: "Xpressions '24",
    src: '/images/real_fest/carnival_de_vogue_stage.jpg',
    caption: 'Winning teams, models, and fashion designers on the main Xpressions stage holding trophies.'
  },
  {
    id: 'photo-3',
    title: 'Vishal-Shekhar Live In Concert',
    category: 'Concert',
    edition: '25th Silver Jubilee',
    src: '/images/real_fest/vishal_shekhar_concert.jpg',
    caption: 'The legendary duo Vishal & Shekhar performing under high-powered blue laser rigs at XIMB.'
  },
  {
    id: 'photo-4',
    title: 'The 30,000+ Festival Crowd',
    category: 'Crowd',
    edition: 'Main Arena',
    src: '/images/real_fest/festival_crowd_arena.jpg',
    caption: 'Thousands of student delegates and music fans raising their hands in unison during the pro night finale.'
  },
  {
    id: 'photo-5',
    title: 'Mika Singh Live On Stage',
    category: 'Concert',
    edition: "Xpressions '19",
    src: '/images/real_fest/mika_singh_live.jpg',
    caption: 'Powerhouse vocalist Mika Singh in his iconic glitter blazer commanding the pro night crowd.'
  },
  {
    id: 'photo-6',
    title: 'Acoustic Spotlight: Amaal Mallik',
    category: 'Concert',
    edition: "Xpressions '25",
    src: '/images/real_fest/amaal_mallik_stage.jpg',
    caption: 'Soulful acoustic vocals and candid stage moments under floodlights.'
  },
  {
    id: 'photo-7',
    title: 'Haute Couture Runway Stride',
    category: 'Vogue',
    edition: 'Fashion Stage',
    src: '/images/real_fest/carnival_de_vogue_ramp.jpg',
    caption: 'Collegiate designers and runway models showcasing formal haute couture looks.'
  },
  {
    id: 'photo-8',
    title: 'Vishal-Shekhar Electrifying The Night',
    category: 'Concert',
    edition: 'Celeblitz Stage',
    src: '/images/real_fest/vishal_shekhar_live.jpg',
    caption: 'High-octane stadium energy and classic college anthems live at XIMB.'
  },
  {
    id: 'photo-9',
    title: 'Carnival De Vogue Thematic Walk',
    category: 'Vogue',
    edition: 'Vogue Stage',
    src: '/images/real_fest/carnival_de_vogue_models.jpg',
    caption: 'Thematic fashion walk contestants posing in front of the official Carnival De Vogue backdrop.'
  }
];

interface FestivalGalleryProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const FestivalGallery: React.FC<FestivalGalleryProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<'All' | 'Concert' | 'Vogue' | 'Crowd'>('All');

  const filteredPhotos = filter === 'All'
    ? REAL_FESTIVAL_PHOTOS
    : REAL_FESTIVAL_PHOTOS.filter((p) => p.category === filter);

  return (
    <section className="py-16 sm:py-24 bg-plum-950 text-white relative w-full overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="blur-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-accent/15 text-orange-accent border border-orange-accent/25 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Festival Archive</span>
            </div>
            <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
              Real Moments. Pure Euphoria.
            </h2>
            <p className="mt-2.5 font-inter text-xs sm:text-base text-lilac/80 max-w-xl mx-auto leading-relaxed">
              Explore authentic high-resolution moments captured live on the XIMB festival grounds — from celebrity pro nights to runway spotlights.
            </p>

            {/* Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {(['All', 'Concert', 'Vogue', 'Crowd'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-poppins font-semibold transition-all ${
                    filter === cat
                      ? 'bg-orange-accent text-plum-950 shadow-glow-orange scale-105'
                      : 'bg-plum-900/90 text-lilac hover:text-white hover:bg-plum-850 border border-plum-750'
                  }`}
                >
                  {cat === 'All' ? 'All Live Moments' : cat === 'Concert' ? '🎤 Celebrity Pro Nights' : cat === 'Vogue' ? '👠 Carnival De Vogue' : '🙌 Festival Arena Crowd'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPhotos.map((photo, idx) => (
            <ScrollReveal key={photo.id} direction="blur-up" delay={(idx % 6) * 80} duration={650}>
              <div
                onClick={() => onOpenLightbox(photo.src, `${photo.title} (${photo.edition}) — ${photo.caption}`)}
                className="group relative rounded-3xl overflow-hidden bg-plum-900/80 border border-plum-750/70 hover:border-orange-accent/60 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3] flex flex-col justify-end"
              >
                {/* Photo */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-spring"
                  loading="lazy"
                />

                {/* Ambient Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Edition Pill & Lightbox Action */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-plum-950/80 backdrop-blur-md text-orange-accent border border-orange-accent/30 font-poppins font-black text-[10px] tracking-wider uppercase shadow-sm">
                    {photo.edition}
                  </span>
                  <div className="p-2 rounded-full bg-plum-950/80 text-white group-hover:bg-orange-accent group-hover:text-plum-950 transition-colors backdrop-blur-md shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Title & Caption Bar */}
                <div className="relative p-5 sm:p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-orange-accent font-bold mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{photo.category} Spotlight</span>
                  </div>
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-white group-hover:text-orange-accent transition-colors leading-snug drop-shadow-md">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-lilac/80 mt-1 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

