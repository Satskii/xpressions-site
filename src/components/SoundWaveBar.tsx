import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Activity } from 'lucide-react';

export const SoundWaveBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [tempo, setTempo] = useState<'moderate' | 'high'>('high');

  const barCount = 24;
  const [heights, setHeights] = useState<number[]>(
    Array.from({ length: barCount }, () => Math.floor(Math.random() * 20) + 6)
  );

  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = tempo === 'high' ? 120 : 220;
    const interval = setInterval(() => {
      setHeights(
        Array.from({ length: barCount }, (_, i) => {
          const base = Math.sin((Date.now() / 300) + (i * 0.4)) * 10 + 12;
          const randomBump = Math.random() * 6;
          return Math.max(4, Math.min(26, Math.floor(base + randomBump)));
        })
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, tempo]);

  return (
    <div className="bg-plum-950/95 border-y border-plum-850 px-3 sm:px-4 py-2.5 backdrop-blur-md w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Beat Tagline */}
        <div className="flex items-center gap-2 text-xs font-semibold text-lilac shrink-0 min-w-0">
          <Activity className="w-3.5 h-3.5 text-orange-accent animate-pulse shrink-0" />
          <span className="hidden md:inline text-white font-poppins">The Beat:</span>
          <span className="text-orange-accent font-medium text-[11px] sm:text-xs truncate">
            <span className="sm:hidden">Acumen + Rhythm</span>
            <span className="hidden sm:inline">B-School Acumen + Stage Rhythm</span>
          </span>
        </div>

        {/* Center: Interactive Audio Waveform */}
        <div 
          onClick={() => setTempo(tempo === 'high' ? 'moderate' : 'high')}
          className="flex items-center gap-1 sm:gap-1.5 cursor-pointer group px-1 sm:px-2 py-1 rounded-lg hover:bg-plum-900/60 transition-colors shrink-0"
          title="Click to toggle rhythm tempo!"
        >
          {heights.map((h, idx) => {
            // Hide alternate bars on very small screens to fit neatly
            const isHiddenMobile = idx >= 14;
            return (
              <div
                key={idx}
                style={{ height: `${isPlaying ? h : 4}px` }}
                className={`w-1 sm:w-1.5 rounded-full transition-all duration-150 ${
                  isHiddenMobile ? 'hidden sm:block' : ''
                } ${
                  idx % 4 === 0 
                    ? 'bg-orange-accent' 
                    : idx % 2 === 0 
                      ? 'bg-lilac' 
                      : 'bg-plum-600 group-hover:bg-orange-accent/80'
                }`}
              />
            );
          })}
        </div>

        {/* Right: Controls & Tempo Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => setTempo(tempo === 'high' ? 'moderate' : 'high')}
            className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-plum-850 text-lilac hover:text-white border border-plum-750 transition-colors"
          >
            {tempo === 'high' ? '⚡ 128 BPM' : '🎵 96 BPM'}
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded text-lilac hover:text-orange-accent transition-colors"
            aria-label={isPlaying ? "Pause visualizer" : "Play visualizer"}
          >
            {isPlaying ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-accent" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-plum-500" />}
          </button>
        </div>

      </div>
    </div>
  );
};
