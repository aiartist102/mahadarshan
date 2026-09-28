import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Printer, 
  Download, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  Flame, 
  Compass, 
  Calendar, 
  Clock, 
  MapPin, 
  Info, 
  HelpCircle,
  Share2
} from 'lucide-react';
import { 
  BirthProfile, 
  calculateAshtaKuta, 
  calculatePlanetaryPositions, 
  calculateJulianDay, 
  calculateAyanamsha, 
  calculateAscendant,
  analyzeMangalDosha,
  AshtaKutaResult,
  globalCitiesDirectory 
} from '../../data/vedicJyotishEngine';
import { JyotishViewId } from './JyotishTypes';
import { Language } from '../../types';

interface KundaliMatchingViewProps {
  currentLang?: Language;
  onNavigateToTool?: (toolId: JyotishViewId) => void;
}

export const KundaliMatchingView: React.FC<KundaliMatchingViewProps> = ({
  currentLang = 'en',
  onNavigateToTool
}) => {
  // Boy Profile
  const [boyName, setBoyName] = useState('Rohan Verma');
  const [boyDob, setBoyDob] = useState('1996-08-22');
  const [boyTob, setBoyTob] = useState('10:15');
  const [boyCity, setBoyCity] = useState('Delhi');
  const [boyLat, setBoyLat] = useState(28.6139);
  const [boyLng, setBoyLng] = useState(77.2090);
  const [boyTz, setBoyTz] = useState(5.5);

  // Girl Profile
  const [girlName, setGirlName] = useState('Ananya Sharma');
  const [girlDob, setGirlDob] = useState('1998-05-14');
  const [girlTob, setGirlTob] = useState('06:45');
  const [girlCity, setGirlCity] = useState('Varanasi');
  const [girlLat, setGirlLat] = useState(25.3176);
  const [girlLng, setGirlLng] = useState(82.9739);
  const [girlTz, setGirlTz] = useState(5.5);

  // Result state
  const [matchResult, setMatchResult] = useState<AshtaKutaResult | null>(() => {
    return computeMatch();
  });

  function computeMatch(): AshtaKutaResult {
    // 1. Boy calculations
    const [bY, bM, bD] = boyDob.split('-').map(Number);
    const [bH, bMin] = boyTob.split(':').map(Number);
    const bUtcHour = (bH || 12) + (bMin || 0) / 60 - boyTz;
    const bJd = calculateJulianDay(bY, bM, bD, bUtcHour);
    const bAyanamsha = calculateAyanamsha(bJd, 'lahiri');
    const bAsc = calculateAscendant(bJd, boyLat, boyLng, bAyanamsha);
    const bPlanets = calculatePlanetaryPositions(bJd, bAyanamsha, bAsc, 'true');
    const bMoon = bPlanets.find(p => p.id === 'moon') || bPlanets[1];
    const bMars = bPlanets.find(p => p.id === 'mars') || bPlanets[2];
    const bMangal = analyzeMangalDosha(bPlanets);

    // 2. Girl calculations
    const [gY, gM, gD] = girlDob.split('-').map(Number);
    const [gH, gMin] = girlTob.split(':').map(Number);
    const gUtcHour = (gH || 12) + (gMin || 0) / 60 - girlTz;
    const gJd = calculateJulianDay(gY, gM, gD, gUtcHour);
    const gAyanamsha = calculateAyanamsha(gJd, 'lahiri');
    const gAsc = calculateAscendant(gJd, girlLat, girlLng, gAyanamsha);
    const gPlanets = calculatePlanetaryPositions(gJd, gAyanamsha, gAsc, 'true');
    const gMoon = gPlanets.find(p => p.id === 'moon') || gPlanets[1];
    const gMars = gPlanets.find(p => p.id === 'mars') || gPlanets[2];
    const gMangal = analyzeMangalDosha(gPlanets);

    return calculateAshtaKuta(
      bMoon.longitude,
      gMoon.longitude,
      bMars.house,
      gMars.house
    );
  }

  const handleMatch = (e: React.FormEvent) => {
    e.preventDefault();
    setMatchResult(computeMatch());
  };

  const kutas = matchResult ? [
    { name: 'Varna (वर्ण)', max: 1, score: matchResult.varna.score, desc: matchResult.varna.description, details: `Boy: ${matchResult.varna.boyVarna} · Girl: ${matchResult.varna.girlVarna}` },
    { name: 'Vashya (वश्य)', max: 2, score: matchResult.vashya.score, desc: matchResult.vashya.description, details: `Boy: ${matchResult.vashya.boyVashya} · Girl: ${matchResult.vashya.girlVashya}` },
    { name: 'Tara (तारा)', max: 3, score: matchResult.tara.score, desc: matchResult.tara.description, details: `Boy: ${matchResult.tara.boyTara} · Girl: ${matchResult.tara.girlTara}` },
    { name: 'Yoni (योनि)', max: 4, score: matchResult.yoni.score, desc: matchResult.yoni.description, details: `Boy: ${matchResult.yoni.boyYoni} · Girl: ${matchResult.yoni.girlYoni}` },
    { name: 'Graha Maitri (ग्रहमैत्री)', max: 5, score: matchResult.grahaMaitri.score, desc: matchResult.grahaMaitri.description, details: `Boy Lord: ${matchResult.grahaMaitri.boyLord} · Girl Lord: ${matchResult.grahaMaitri.girlLord}` },
    { name: 'Gana (गण)', max: 6, score: matchResult.gana.score, desc: matchResult.gana.description, details: `Boy: ${matchResult.gana.boyGana} · Girl: ${matchResult.gana.girlGana}` },
    { name: 'Bhakoot (भकूट)', max: 7, score: matchResult.bhakoot.score, desc: matchResult.bhakoot.description, details: `Boy: ${matchResult.bhakoot.boyRashi} · Girl: ${matchResult.bhakoot.girlRashi}` },
    { name: 'Nadi (नाड़ी)', max: 8, score: matchResult.nadi.score, desc: matchResult.nadi.description, details: `Boy: ${matchResult.nadi.boyNadi} · Girl: ${matchResult.nadi.girlNadi}` }
  ] : [];

  return (
    <div className="space-y-6">
      {/* Title & Introduction */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <Heart className="w-4 h-4 text-rose-700" />
          <span>Vedic Horary Matchmaking · Ashta Kuta Guna Milan (36 Points)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
          Kundali Matching & Horoscope Compatibility (कुंडली मिलान)
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
          According to classical Jyotish Shastra, marital compatibility is assessed through the 36 Gunas of Ashta Kuta Milan, evaluating psychological, physical, emotional, genetic, and spiritual alignment. Mangal Dosha (Kuja Dosha) is evaluated separately to ensure complete transparency.
        </p>

        {/* Dual Input Form: Boy & Girl */}
        <form onSubmit={handleMatch} className="mt-6 pt-5 border-t border-stone-100 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Boy's Details */}
            <div className="p-4 bg-sky-50/50 border border-sky-200/80 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-950 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🤵 Groom Details (वर विवरण)</span>
                </span>
                <span className="text-[10px] text-sky-700 font-medium">Profile A</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div>
                  <label className="block text-stone-600 mb-1">Boy's Full Name</label>
                  <input
                    type="text"
                    value={boyName}
                    onChange={(e) => setBoyName(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1">Birth Date</label>
                  <input
                    type="date"
                    value={boyDob}
                    onChange={(e) => setBoyDob(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1">Birth Time (24h)</label>
                  <input
                    type="time"
                    value={boyTob}
                    onChange={(e) => setBoyTob(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1">Birth City</label>
                  <input
                    type="text"
                    value={boyCity}
                    onChange={(e) => setBoyCity(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Girl's Details */}
            <div className="p-4 bg-rose-50/50 border border-rose-200/80 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-950 uppercase tracking-wider flex items-center gap-1.5">
                  <span>👰 Bride Details (कन्या विवरण)</span>
                </span>
                <span className="text-[10px] text-rose-700 font-medium">Profile B</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div>
                  <label className="block text-stone-600 mb-1">Girl's Full Name</label>
                  <input
                    type="text"
                    value={girlName}
                    onChange={(e) => setGirlName(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1">Birth Date</label>
                  <input
                    type="date"
                    value={girlDob}
                    onChange={(e) => setGirlDob(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1">Birth Time (24h)</label>
                  <input
                    type="time"
                    value={girlTob}
                    onChange={(e) => setGirlTob(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1">Birth City</label>
                  <input
                    type="text"
                    value={girlCity}
                    onChange={(e) => setGirlCity(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                    required
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-rose-900 hover:bg-rose-950 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Calculate Ashta Kuta Guna Milan (गुण मिलान करें)</span>
            </button>
          </div>
        </form>
      </div>

      {/* Match Result Display */}
      {matchResult && (
        <div className="space-y-6">
          
          {/* Main Score & Verdict Banner */}
          <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50 border border-rose-200/90 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  Total Ashta Kuta Milan Score
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-cinzel font-bold text-stone-900">
                    {matchResult.totalScore}
                  </span>
                  <span className="text-xl sm:text-2xl font-cinzel text-stone-500">
                    / 36 Gunas
                  </span>
                  <span className="text-sm font-semibold text-rose-700 ml-2">
                    ({matchResult.percentage}%)
                  </span>
                </div>
                <div className="text-base font-bold text-rose-950 mt-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verdict: {matchResult.verdict}</span>
                </div>
              </div>

              {/* Score Range Guide */}
              <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-rose-200/60 text-xs space-y-1.5 max-w-sm">
                <span className="font-bold text-stone-800 block">Shastric Guna Thresholds:</span>
                <div className="flex justify-between text-[11px] text-stone-600">
                  <span>Below 18 Gunas:</span>
                  <span className="text-rose-700 font-semibold">Inauspicious (Not Advised)</span>
                </div>
                <div className="flex justify-between text-[11px] text-stone-600">
                  <span>18 – 24 Gunas:</span>
                  <span className="text-amber-800 font-semibold">Average / Acceptable</span>
                </div>
                <div className="flex justify-between text-[11px] text-stone-600">
                  <span>25 – 32 Gunas:</span>
                  <span className="text-emerald-700 font-semibold">Very Good Compatibility</span>
                </div>
                <div className="flex justify-between text-[11px] text-stone-600">
                  <span>33 – 36 Gunas:</span>
                  <span className="text-indigo-700 font-semibold">Uttam / Excellent Match</span>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Kutas Detailed Breakdown Table */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-base font-bold font-cinzel text-stone-900">
              Detailed Ashta Kuta Guna Breakdown (अष्टकूट गुण तालिका)
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5 px-3">Kuta (गुण नाम)</th>
                    <th className="py-2.5 px-3">Max Points</th>
                    <th className="py-2.5 px-3">Obtained</th>
                    <th className="py-2.5 px-3">Attributes Checked</th>
                    <th className="py-2.5 px-3">Astrological Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {kutas.map((k, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-2.5 px-3 font-bold text-stone-900 whitespace-nowrap">{k.name}</td>
                      <td className="py-2.5 px-3 font-mono font-semibold text-stone-500">{k.max}</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-amber-950">
                        <span className={`px-2 py-0.5 rounded ${k.score === k.max ? 'bg-emerald-100 text-emerald-800' : k.score === 0 ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'}`}>
                          {k.score}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-stone-600 text-[11px]">{k.details}</td>
                      <td className="py-2.5 px-3 text-stone-700 text-[11px]">{k.desc}</td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50/60 font-bold text-stone-900">
                    <td className="py-3 px-3">Total Guna Score</td>
                    <td className="py-3 px-3 font-mono">36</td>
                    <td className="py-3 px-3 font-mono text-base text-rose-900">{matchResult.totalScore}</td>
                    <td colSpan={2} className="py-3 px-3 text-[11px] text-stone-600 font-normal">
                      Score reflects lunar nakshatra and rashi compatibility of bride and groom.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mangal Dosha Comparison (Calculated Separately, Never Blended) */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-600" />
              <h3 className="text-base font-bold font-cinzel text-stone-900">
                Mangal Dosha (Kuja Dosha) Independent Evaluation
              </h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Classical Shastras strictly warn against blending Mangal Dosha into the 36 Guna Milan points. Both horoscopes must be evaluated independently:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                <span className="text-xs font-bold text-stone-700 block">Groom (वर) Manglik Status:</span>
                <span className={`text-sm font-bold block ${matchResult.mangalDoshaComparison.boyMangal.includes('Non') ? 'text-emerald-700' : 'text-orange-700'}`}>
                  {matchResult.mangalDoshaComparison.boyMangal}
                </span>
                <span className="text-[11px] text-stone-500">Evaluated from Lagna, Moon and Venus</span>
              </div>

              <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                <span className="text-xs font-bold text-stone-700 block">Bride (कन्या) Manglik Status:</span>
                <span className={`text-sm font-bold block ${matchResult.mangalDoshaComparison.girlMangal.includes('Non') ? 'text-emerald-700' : 'text-orange-700'}`}>
                  {matchResult.mangalDoshaComparison.girlMangal}
                </span>
                <span className="text-[11px] text-stone-500">Evaluated from Lagna, Moon and Venus</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950">
              <span className="font-bold">Compatibility Note:</span> {matchResult.mangalDoshaComparison.note}
            </div>
          </div>

          {/* Recommendations & Shastric Guidance */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-base font-bold font-cinzel text-stone-900">
              Astrological Recommendations & Shanti Vidhi
            </h3>
            <ul className="space-y-2 text-xs text-stone-700">
              {matchResult.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>* Kundali matching is an advisory tool rooted in traditional Vedic philosophy. Mutual respect, understanding, and shared life values form the true bedrock of marital longevity.</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
