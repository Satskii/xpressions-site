import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-plum-950/20 dark:bg-black/40 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-orange-accent via-lilac to-orange-accent transition-all duration-150 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glow head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-accent rounded-full blur-sm opacity-90 -mr-1 shadow-[0_0_12px_#F0A05A]" />
      </div>
    </div>
  );
};
