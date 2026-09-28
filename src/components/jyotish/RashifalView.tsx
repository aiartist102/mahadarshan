import React, { useState } from 'react';
import { Sparkles, Calendar, Moon, Sun, ShieldCheck, Heart, Briefcase, Gem, Compass } from 'lucide-react';
import { RASHIS } from '../../data/vedicJyotishEngine';

export const RashifalView: React.FC = () => {
  const [selectedRashiIndex, setSelectedRashiIndex] = useState(0);
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('daily');

  const activeRashi = RASHIS[selectedRashiIndex];

  // Astrologically aligned traditional horoscope templates
  const getPredictions = () => {
    return {
      overview: `With planetary transits focusing luminous aspects on ${activeRashi.name}, this ${timeframe} invites strategic focus, calm discernment, and spiritual composure. The elemental influence of ${activeRashi.element} guides your intuition.`,
      career: `Professional horizons indicate progressive recognition for sustained efforts. Collaborative endeavors prosper when transparency is maintained. Favorable for presenting innovative ideas to seniors.`,
      wealth: `Financial inflows remain steady. Auspicious period for consolidating ancestral assets, long-term savings, or clearing overdue obligations. Avoid speculative risks during Rahu Kaal hours.`,
      relationship: `Venusian warmth softens domestic interactions. An honest, compassionate conversation with your partner clears lingering doubts. Unmarried natives may receive favorable family proposals.`,
      health: `Pranayama and mindful dietary discipline keep your Pitta and Vata energies balanced. Hydration and early morning sunlight will boost vital Ojas.`,
      luckyNumber: (selectedRashiIndex % 9) + 1,
      luckyColor: activeRashi.element === 'Fire' ? 'Crimson Red & Golden Saffron' : activeRashi.element === 'Earth' ? 'Emerald Green & Forest Olive' : activeRashi.element === 'Air' ? 'Silvery White & Sky Blue' : 'Pearl White & Sea Green',
      remedy: `Chant "${activeRashi.lord.includes('Mars') ? 'ॐ भौमाय नमः' : activeRashi.lord.includes('Venus') ? 'ॐ शुं शुक्राय नमः' : activeRashi.lord.includes('Mercury') ? 'ॐ बुं बुधाय नमः' : activeRashi.lord.includes('Moon') ? 'ॐ सोमाय नमः' : activeRashi.lord.includes('Sun') ? 'ॐ सूर्याय नमः' : activeRashi.lord.includes('Jupiter') ? 'ॐ बृं बृहस्पतये नमः' : 'ॐ शं शनैश्चराय नमः'}" 108 times.`
    };
  };

  const pred = getPredictions();

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
          <Moon className="w-4 h-4 text-amber-700" />
          <span>Vedic Gochar Horoscope · 12 Rashis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
          Vedic Rashifal & Planetary Transits (राशिफल)
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
          Traditional Jyotish predictions derived from current planetary transits (Gochar) across the 12 Sidereal signs. Select your Janma Rashi and timeframe to explore tailored insights.
        </p>

        {/* Timeframe Switcher */}
        <div className="mt-4 flex items-center gap-2">
          {(['daily', 'weekly', 'monthly', 'yearly'] as const).map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer capitalize ${
                timeframe === tf
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {tf === 'daily' ? 'Daily (दैनिक)' : tf === 'weekly' ? 'Weekly (साप्ताहिक)' : tf === 'monthly' ? 'Monthly (मासिक)' : 'Yearly 2026 (वार्षिक)'}
            </button>
          ))}
        </div>
      </div>

      {/* 12 Rashi Selection Strip */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
          {RASHIS.map((r, idx) => {
            const isSelected = selectedRashiIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedRashiIndex(idx)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-900 text-white border-amber-950 font-bold shadow-sm ring-2 ring-amber-400'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                }`}
              >
                <span className="text-[11px] block">{r.sanskrit.split(' ')[0]}</span>
                <span className="text-[10px] opacity-80 block truncate">{r.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Predictions Card */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              {timeframe.toUpperCase()} ASTROLOGICAL OUTLOOK
            </span>
            <h2 className="text-xl font-cinzel font-bold text-stone-900 mt-0.5">
              {activeRashi.name} ({activeRashi.sanskrit})
            </h2>
          </div>
          <div className="text-xs text-stone-500 font-mono">
            Ruler: <strong className="text-stone-800">{activeRashi.lord}</strong> · Element: <strong>{activeRashi.element}</strong>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic bg-amber-50/60 p-4 rounded-xl border border-amber-200/70">
          "{pred.overview}"
        </p>

        {/* Prediction Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
            <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-amber-800" />
              <span>Career & Business (कार्यक्षेत्र एवं व्यापार)</span>
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">{pred.career}</p>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
            <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
              <Gem className="w-3.5 h-3.5 text-emerald-700" />
              <span>Finances & Wealth (धन एवं समृद्धि)</span>
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">{pred.wealth}</p>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
            <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-700" />
              <span>Love & Relationships (प्रेम एवं वैवाहिक जीवन)</span>
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">{pred.relationship}</p>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
            <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-orange-700" />
              <span>Health & Vitality (स्वास्थ्य एवं ऊर्जा)</span>
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">{pred.health}</p>
          </div>
        </div>

        {/* Lucky Numbers & Spiritual Remedies */}
        <div className="p-4 bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl border border-amber-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div><span className="text-stone-500">Auspicious Number:</span> <strong>{pred.luckyNumber}</strong></div>
            <div><span className="text-stone-500">Lucky Colors:</span> <strong>{pred.luckyColor}</strong></div>
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-amber-200/70 text-amber-950 font-medium">
            Daily Sacred Mantra: <span className="font-bold font-serif">{pred.remedy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
