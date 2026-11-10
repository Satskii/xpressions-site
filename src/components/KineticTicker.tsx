import React from 'react';

export const KineticTicker: React.FC = () => {
  const tickerItems = [
    { text: "XPRESSIONS 2026", highlight: true },
    { text: "WHERE BUSINESS MEETS THE BEAT", highlight: false },
    { text: "BHUBANESWAR, ODISHA", highlight: false },
    { text: "₹15,00,000+ PRIZE POOL", highlight: true },
    { text: "30,000+ FOOTFALL", highlight: false },
    { text: "XIM UNIVERSITY", highlight: false },
    { text: "25+ NATIONAL ARENAS", highlight: true },
    { text: "STAR CELEBRITY PRO NIGHTS", highlight: false },
    { text: "EST. 1998 · 27+ YEARS OF HERITAGE", highlight: false },
    { text: "COMPETE · PERFORM · CONNECT · CELEBRATE", highlight: true },
    { text: "PRE-REGISTRATION NOW LIVE", highlight: true },
  ];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-plum-200/80 dark:border-plum-800/80 bg-plum-50/70 dark:bg-plum-950/95 py-2.5 backdrop-blur-md transition-colors duration-300 select-none group"
      aria-hidden="true"
    >
      {/* Subtle edge fade overlays for infinite horizon look */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white dark:from-plum-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white dark:from-plum-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee Strip (duplicated for seamless 100% loop) */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-8 shrink-0">
                <span
                  className={`text-[11px] sm:text-xs tracking-wider transition-colors uppercase font-poppins font-bold ${item.highlight
                      ? 'text-orange-accent dark:text-orange-accent'
                      : 'text-plum-900/80 dark:text-lilac/80'
                    }`}
                >
                  {item.text}
                </span>
                <span className="text-orange-accent/70 text-xs select-none">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

