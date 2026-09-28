import React from 'react';
import { Sparkles, Video, Calendar, Compass, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { Language, Temple } from '../types';
import { translations } from '../i18n/translations';

interface HeroDarshanBannerProps {
  currentLang: Language;
  onSelectTab: (tab: string) => void;
  activeTemple: Temple;
  onOpenBookPuja?: () => void;
  onOpenDonate?: () => void;
  todaysTithiString: string;
  cityName: string;
}

export const HeroDarshanBanner: React.FC<HeroDarshanBannerProps> = ({
  currentLang,
  onSelectTab,
  activeTemple,
  onOpenBookPuja,
  onOpenDonate,
  todaysTithiString,
  cityName
}) => {
  const t = translations[currentLang] || translations.en;

  return (
    <section className="relative bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-amber-900/30 p-6 sm:p-10 lg:p-12">
      
      {/* Background Mandala & Sacred Light Aura */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl space-y-6">
        
        {/* Top Ticker: Live Stream Alert & Today's Tithi */}
        <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-amber-900/40 border border-amber-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md text-xs">
          <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            LIVE BROADCAST
          </span>
          <span className="text-stone-500">·</span>
          <span className="text-stone-200 truncate">{activeTemple.name}</span>
          <span className="text-stone-500 hidden sm:inline">·</span>
          <span className="text-amber-200/90 hidden sm:inline">{todaysTithiString} ({cityName})</span>
        </div>

        {/* Hero Display Headings (Cinzel & Rozha One) */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-white tracking-tight leading-[1.1]">
            {t.portalTitle}
          </h1>
          <p className="text-base sm:text-xl font-rozha text-amber-200/90 tracking-wide">
            {t.portalSubtitle}
          </p>
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed pt-1">
            Experience 24/7 Sanctum Garbhagriha Live Darshan, real-time Vedic Shubh Panchang, automated city-wise Choghadiya, sacred diamond Kundali predictions, and authentic temple heritage across Bharat.
          </p>
        </div>

        {/* Core Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onSelectTab('live-darshan')}
            className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <Video className="w-4 h-4 text-stone-950" />
            <span>{t.navLiveDarshan} (24/7 Live)</span>
          </button>

          <button
            onClick={() => onSelectTab('panchang')}
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Check Today's Panchang</span>
          </button>

          <button
            onClick={() => onSelectTab('festivals')}
            className="px-5 py-3 bg-stone-900/80 hover:bg-stone-800 text-amber-200 font-semibold rounded-xl text-xs sm:text-sm border border-amber-800/50 backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Sacred Calendar & Holidays</span>
          </button>

          <button
            onClick={() => onSelectTab('kundali')}
            className="px-5 py-3 bg-stone-900/80 hover:bg-stone-800 text-stone-300 font-semibold rounded-xl text-xs sm:text-sm border border-stone-700/50 backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-stone-400" />
            <span>Vedic Kundali</span>
          </button>
        </div>

        {/* Secondary Quick Trust Badges */}
        <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Direct Sanctum Video Feeds
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Exact City-wise Muhurat Engine
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            All 12 Jyotirlingas & Char Dham
          </span>
        </div>
      </div>
    </section>
  );
};
