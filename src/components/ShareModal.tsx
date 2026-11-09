import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, Twitter, Linkedin, Share2 } from 'lucide-react';
import { EventItem } from '../types/festival';

interface ShareModalProps {
  isOpen: boolean;
  event: EventItem | null;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, event, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const title = event ? `${event.title} at Xpressions` : 'Xpressions | XIM University Bhubaneswar';
  const text = event
    ? `Check out ${event.title} (${event.subtitle}) at Xpressions, the flagship festival of XIM University Bhubaneswar! Where Business Meets the Beat.`
    : 'Discover Xpressions: Where Business Meets the Beat at XIM University, Bhubaneswar. Compete, perform, connect, and celebrate!';
  const url = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${text}\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text}\n${url}`)}`;
    window.open(waUrl, '_blank');
  };

  const shareTwitter = () => {
    const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twUrl, '_blank');
  };

  const shareLinkedIn = () => {
    const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(liUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white dark:bg-plum-950 rounded-3xl shadow-2xl border border-plum-200 dark:border-plum-800 p-6 z-10 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-plum-100 dark:border-plum-800">
          <div className="flex items-center gap-2 text-plum-900 dark:text-white font-poppins font-bold text-base">
            <Share2 className="w-4 h-4 text-orange-accent" />
            <span>Share {event ? event.title : 'Xpressions'}</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-plum-500 hover:text-plum-900 dark:text-lilac dark:hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-plum-700 dark:text-lilac/80 leading-relaxed">
          Spread the word with your batchmates, team members, or dramatics and band crew!
        </p>

        {/* Share Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={shareWhatsApp}
            className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
              WA
            </div>
            <span className="text-xs font-semibold">WhatsApp</span>
          </button>

          <button
            onClick={shareTwitter}
            className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">
              <Twitter className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold">Twitter / X</span>
          </button>

          <button
            onClick={shareLinkedIn}
            className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold">LinkedIn</span>
          </button>
        </div>

        {/* Copy Link Input */}
        <div className="pt-2">
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-plum-50 dark:bg-plum-900/50 border border-plum-200 dark:border-plum-800">
            <input
              type="text"
              readOnly
              value={url}
              className="bg-transparent text-xs text-plum-800 dark:text-white w-full px-2 outline-none"
            />
            <button
              onClick={handleCopy}
              className="shrink-0 px-3.5 py-1.5 rounded-xl bg-plum-800 dark:bg-orange-accent text-white dark:text-plum-950 hover:bg-plum-900 dark:hover:bg-orange-hover font-semibold text-xs flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-700" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
