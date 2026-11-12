import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  caption,
  onClose,
}) => {
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

  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum-950/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />

      <div className="relative max-w-5xl w-full bg-plum-900 rounded-3xl overflow-hidden shadow-2xl border border-plum-700 z-10">
        {/* Top bar */}
        <div className="p-4 flex items-center justify-between border-b border-plum-800 bg-plum-950">
          <div className="text-xs sm:text-sm font-semibold text-lilac truncate pr-4">
            {caption}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-lilac hover:text-white hover:bg-plum-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl}
            alt={caption}
            className="max-h-[75vh] w-auto object-contain mx-auto"
          />
        </div>

        {/* Caption bar */}
        <div className="p-4 bg-plum-950/90 border-t border-plum-800 text-xs text-lilac/80 flex items-center justify-between">
          <span>Xpressions Documented Archive · XIMB, Bhubaneswar</span>
          <span className="text-[11px] text-orange-accent font-medium">Historical Media</span>
        </div>
      </div>
    </div>
  );
};
