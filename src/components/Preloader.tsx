import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { preloaderConfig } from '../config';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  // Null check: if config is empty, complete immediately
  if (!preloaderConfig.brandName) {
    useEffect(() => { onComplete(); }, [onComplete]);
    return null;
  }

  const [phase, setPhase] = useState<'loading' | 'fading'>('loading');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-600 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo Icon */}
      <div className="preloader-text mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-teal-400 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Brand Name */}
      <div className="preloader-text text-center" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-800 tracking-wide mb-2">
          {preloaderConfig.brandName}
        </h1>
        <p className="font-script text-2xl text-sky-500">{preloaderConfig.brandSubname}</p>
      </div>

      {/* Loading Line */}
      <div className="mt-8 w-48 h-px bg-slate-200 overflow-hidden">
        <div className="preloader-line h-full bg-gradient-to-r from-sky-500/50 via-sky-500 to-sky-500/50" />
      </div>

      {/* Year */}
      {preloaderConfig.yearText && (
        <p
          className="preloader-text mt-4 text-xs text-slate-400 uppercase tracking-[0.3em]"
          style={{ animationDelay: '0.4s' }}
        >
          {preloaderConfig.yearText}
        </p>
      )}
    </div>
  );
}
