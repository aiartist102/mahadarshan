import React, { useState, useMemo, useEffect } from 'react';
import { 
  Compass, 
  Sparkles, 
  Heart, 
  Moon, 
  Sun, 
  Flame, 
  ShieldCheck, 
  Clock, 
  Gem, 
  Award, 
  Grid, 
  BarChart2, 
  Layers, 
  Users, 
  Printer, 
  Download, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft,
  Calendar,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Info,
  RotateCw,
  Home
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { 
  BirthProfile, 
  CompleteKundaliData, 
  generateCompleteKundali, 
  RASHIS 
} from '../data/vedicJyotishEngine';
import { JyotishViewId, defaultBirthProfile } from './jyotish/JyotishTypes';
import { BirthDataForm } from './jyotish/BirthDataForm';
import { VedicChartRenderer } from './jyotish/VedicChartRenderer';
import { KundaliMatchingView } from './jyotish/KundaliMatchingView';
import { CalculatorDetailView } from './jyotish/CalculatorDetailView';
import { DashaAndStrengthView } from './jyotish/DashaAndStrengthView';
import { RashifalView } from './jyotish/RashifalView';
import { SavedKundalisView } from './jyotish/SavedKundalisView';
import { CelebrityKundaliView } from './jyotish/CelebrityKundaliView';
import { PrintableJanmaPatrika } from './jyotish/PrintableJanmaPatrika';
import { JyotishMainHub } from './jyotish/JyotishMainHub';

interface KundaliSectionProps {
  currentLang: Language;
  initialView?: JyotishViewId;
  onNavigateToPanchang?: () => void;
  onNavigateToFestivals?: () => void;
}

export const KundaliSection: React.FC<KundaliSectionProps> = ({ 
  currentLang,
  initialView = 'janma-kundali',
  onNavigateToPanchang,
  onNavigateToFestivals
}) => {
  const t = translations[currentLang] || translations.en;

  // Active View State
  const [activeView, setActiveView] = useState<JyotishViewId>(initialView);

  // Active Birth Profile State (persisted in localStorage)
  const [birthProfile, setBirthProfile] = useState<BirthProfile>(() => {
    try {
      const saved = localStorage.getItem('mahadarshan_kundali_active_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultBirthProfile;
  });

  // Active Divisional Varga Chart ('D1', 'D9', 'D10', etc.)
  const [activeVarga, setActiveVarga] = useState<string>('D1');

  // Print Modal State
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Sync active profile to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mahadarshan_kundali_active_profile', JSON.stringify(birthProfile));
    } catch (e) {
      console.error(e);
    }
  }, [birthProfile]);

  // Central Kundali Calculation: One Single Source of Truth!
  const kundaliData: CompleteKundaliData = useMemo(() => {
    return generateCompleteKundali(birthProfile);
  }, [birthProfile]);

  // Helper to switch view and scroll to top
  const handleSelectView = (viewId: JyotishViewId) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navMenuItems: { id: JyotishViewId; label: string; icon: any }[] = [
    { id: 'hub', label: 'Jyotish Hub', icon: Home },
    { id: 'janma-kundali', label: 'Janma Kundali', icon: Compass },
    { id: 'kundali-matching', label: 'Kundali Matching', icon: Heart },
    { id: 'rashi', label: 'Rashi Calculator', icon: Moon },
    { id: 'nakshatra', label: 'Nakshatra & Pada', icon: Sparkles },
    { id: 'lagna', label: 'Lagna (Ascendant)', icon: Compass },
    { id: 'surya-rashi', label: 'Surya Rashi', icon: Sun },
    { id: 'mangal-dosha', label: 'Mangal Dosha', icon: Flame },
    { id: 'kalasarpa-yoga', label: 'Kalasarpa Yoga', icon: ShieldCheck },
    { id: 'sade-sati', label: 'Shani Sade Sati', icon: Clock },
    { id: 'dasha', label: 'Vimshottari Dasha', icon: Clock },
    { id: 'ashtakavarga', label: 'Ashtakavarga', icon: Grid },
    { id: 'shadbala', label: 'Shadbala & Bhavabala', icon: BarChart2 },
    { id: 'upagraha', label: 'Upagrahas', icon: Layers },
    { id: 'gemstone', label: 'Gemstones', icon: Gem },
    { id: 'rudraksha', label: 'Rudraksha', icon: Award },
    { id: 'baby-names', label: 'Baby Names', icon: Sparkles },
    { id: 'pancha-pakshi', label: 'Pancha Pakshi', icon: Sparkles },
    { id: 'prashna', label: 'Prashna Kundali', icon: Clock },
    { id: 'sahasra-chandra', label: 'Sahasra Chandra', icon: Moon },
    { id: 'vedic-time', label: 'Vedic Time', icon: Clock },
    { id: 'shraddha-tithi', label: 'Shraddha Tithi', icon: Calendar },
    { id: 'rashifal', label: 'Rashifal', icon: Moon },
    { id: 'saved-kundalis', label: 'Saved Profiles', icon: Users },
    { id: 'celebrities', label: 'Celebrity Charts', icon: Award }
  ];

  return (
    <div className="space-y-6">
      
      {/* Sticky Top Vedic Jyotish Sub-Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border border-amber-900/15 p-2 rounded-2xl shadow-sm text-xs">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-0.5">
          
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => handleSelectView('hub')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'hub' ? 'bg-amber-900 text-white shadow-xs' : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Jyotish Hub</span>
            </button>

            <span className="text-stone-300">|</span>
          </div>

          {/* Quick-Jump Calculators Strip */}
          <div className="flex items-center gap-1.5 shrink-0">
            {navMenuItems.slice(1).map((item) => {
              const isActive = activeView === item.id;
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectView(item.id)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-900 text-white shadow-xs'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                  }`}
                >
                  <IconComp className="w-3 h-3 opacity-80" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Print / PDF Trigger */}
          <div className="flex items-center gap-1.5 shrink-0 pl-1 border-l border-amber-900/10">
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-800" />
              <span>Print Patrika</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Content Router */}

      {/* VIEW 0: MAIN DIRECTORY HUB */}
      {activeView === 'hub' && (
        <JyotishMainHub onSelectTool={handleSelectView} currentLang={currentLang} />
      )}

      {/* VIEW 1: COMPLETE JANMA KUNDALI & BIRTH CHART */}
      {activeView === 'janma-kundali' && (
        <div className="space-y-6">
          
          {/* Universal Birth Form */}
          <BirthDataForm
            profile={birthProfile}
            onChangeProfile={setBirthProfile}
            currentLang={currentLang}
          />

          {/* Quick Astrological Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-white border border-stone-200/90 rounded-xl p-3.5 shadow-2xs">
              <span className="text-[11px] text-stone-500 block">Lagna (Ascendant)</span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block truncate">
                {kundaliData.lagnaSignName} ({kundaliData.lagnaDegree.toFixed(1)}°)
              </span>
              <span className="text-[10px] text-amber-800 mt-0.5 block">Lord: {kundaliData.lagnaLord}</span>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-xl p-3.5 shadow-2xs">
              <span className="text-[11px] text-stone-500 block">Janma Rashi (Moon)</span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block truncate">
                {kundaliData.moonRashiName}
              </span>
              <span className="text-[10px] text-indigo-800 mt-0.5 block">{kundaliData.moonNakshatra} (P{kundaliData.moonPada})</span>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-xl p-3.5 shadow-2xs">
              <span className="text-[11px] text-stone-500 block">Surya Rashi (Sun)</span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block truncate">
                {kundaliData.sunSignName}
              </span>
              <span className="text-[10px] text-amber-800 mt-0.5 block">{kundaliData.sunNakshatra}</span>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-xl p-3.5 shadow-2xs">
              <span className="text-[11px] text-stone-500 block">Mangal Dosha</span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${kundaliData.mangalDosha.hasDosha ? 'bg-orange-600' : 'bg-emerald-600'}`} />
                <span>{kundaliData.mangalDosha.hasDosha ? kundaliData.mangalDosha.severity : 'Non-Manglik'}</span>
              </span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">Parashara 1/4/7/8/12</span>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-xl p-3.5 shadow-2xs">
              <span className="text-[11px] text-stone-500 block">Shani Sade Sati</span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block truncate">
                {kundaliData.sadeSati.status.includes('No') ? 'None Active' : kundaliData.sadeSati.status.split(' ')[0]}
              </span>
              <span className="text-[10px] text-indigo-700 mt-0.5 block">Current Saturn transit</span>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-xl p-3.5 shadow-2xs">
              <span className="text-[11px] text-stone-500 block">Life Ratna</span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block truncate">
                {kundaliData.gemstones.lifeStone.gem.split(' ')[0]}
              </span>
              <span className="text-[10px] text-emerald-700 mt-0.5 block">{kundaliData.gemstones.lifeStone.planet}</span>
            </div>
          </div>

          {/* Interactive Vedic Chart Component with D1, D9, and 14 Vargas */}
          <VedicChartRenderer
            kundali={kundaliData}
            activeVarga={activeVarga}
            onSelectVarga={setActiveVarga}
          />

          {/* Complete Planetary Longitudes & Dignity Table */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
                Astronomical Planetary Longitudes & Dignity (ग्रह स्पष्ट विवरण)
              </h3>
              <span className="text-xs text-stone-500 font-mono">True Ephemeris Data</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold text-[10px] uppercase">
                    <th className="py-2.5 px-3">Planet (ग्रह)</th>
                    <th className="py-2.5 px-3">Longitude</th>
                    <th className="py-2.5 px-3">Sign (राशि)</th>
                    <th className="py-2.5 px-3">House (भाव)</th>
                    <th className="py-2.5 px-3">Nakshatra</th>
                    <th className="py-2.5 px-3">Pada</th>
                    <th className="py-2.5 px-3">Motion</th>
                    <th className="py-2.5 px-3">Dignity (अवस्था)</th>
                    <th className="py-2.5 px-3">Combustion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {kundaliData.planets.map((p, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                      <td className="py-2.5 px-3 font-bold text-stone-900 flex items-center gap-1.5 whitespace-nowrap">
                        <span>{p.name}</span>
                        <span className="text-[10px] text-stone-400 font-normal">({p.sanskritName.split(' ')[0]})</span>
                      </td>
                      <td className="py-2.5 px-3 font-mono font-semibold text-stone-700">{p.formattedDegree}</td>
                      <td className="py-2.5 px-3 text-stone-800">{p.signName} ({p.signSanskrit.split(' ')[0]})</td>
                      <td className="py-2.5 px-3 font-bold text-amber-950">H{p.house}</td>
                      <td className="py-2.5 px-3 text-stone-700">{p.nakshatraName}</td>
                      <td className="py-2.5 px-3 font-mono text-stone-600">P{p.pada}</td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${p.isRetrograde ? 'bg-rose-100 text-rose-800' : 'bg-stone-100 text-stone-700'}`}>
                          {p.isRetrograde ? 'Vakri (R)' : 'Marga'}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.dignity === 'Exalted' ? 'bg-emerald-100 text-emerald-800' :
                          p.dignity === 'Debilitated' ? 'bg-rose-100 text-rose-800' :
                          p.dignity === 'Own Sign' ? 'bg-amber-100 text-amber-900' :
                          'bg-stone-100 text-stone-700'
                        }`}>
                          {p.dignity}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-stone-600 text-[11px]">
                        {p.isCombust ? <span className="text-orange-700 font-bold">Asta (Combust)</span> : 'Not Combust'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 12 Bhavas (Houses) Details Table */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
              12 Bhavas (Houses) Configuration & Lord Placement
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold text-[10px] uppercase">
                    <th className="py-2 px-3">Bhava</th>
                    <th className="py-2 px-3">Rashi</th>
                    <th className="py-2 px-3">Lord (भावेश)</th>
                    <th className="py-2 px-3">Category</th>
                    <th className="py-2 px-3">Primary Significations</th>
                    <th className="py-2 px-3">Occupying Grahas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {kundaliData.houses.map((h, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/30">
                      <td className="py-2 px-3 font-bold text-stone-900">House {h.houseNumber}</td>
                      <td className="py-2 px-3 text-stone-700">{h.signName}</td>
                      <td className="py-2 px-3 font-semibold text-amber-950">{h.lord} (in H{h.lordPlacementHouse})</td>
                      <td className="py-2 px-3">
                        <span className="text-[10px] bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded">
                          {h.category}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-stone-600 text-[11px]">{h.significance}</td>
                      <td className="py-2 px-3 text-stone-800 font-medium">
                        {h.occupyingPlanets.length > 0 ? h.occupyingPlanets.join(', ') : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Prominent Natal Yogas */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
                Planetary Yogas Formed in Horoscope (जन्म कुण्डली योग)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {kundaliData.yogas.map((yoga, idx) => (
                <div key={idx} className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-sm font-cinzel">{yoga.name} ({yoga.sanskritName})</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      {yoga.type}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{yoga.description}</p>
                  <div className="text-[11px] text-amber-900 font-medium pt-1">
                    Effects: {yoga.effects}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* VIEW 2: KUNDALI MATCHING */}
      {activeView === 'kundali-matching' && (
        <KundaliMatchingView currentLang={currentLang} onNavigateToTool={handleSelectView} />
      )}

      {/* VIEW 3: RASHIFAL */}
      {activeView === 'rashifal' && (
        <RashifalView />
      )}

      {/* VIEW 4: CELEBRITY KUNDALIS */}
      {activeView === 'celebrities' && (
        <CelebrityKundaliView
          onLoadProfile={(p) => setBirthProfile(p)}
          onNavigateToKundali={() => handleSelectView('janma-kundali')}
        />
      )}

      {/* VIEW 5: SAVED KUNDALIS */}
      {activeView === 'saved-kundalis' && (
        <SavedKundalisView
          currentProfile={birthProfile}
          onLoadProfile={(p) => setBirthProfile(p)}
          onNavigateToKundali={() => handleSelectView('janma-kundali')}
        />
      )}

      {/* VIEW 6: DASHA, ASHTAKAVARGA, SHADBALA, BHAVABALA, UPAGRAHA */}
      {['dasha', 'ashtakavarga', 'shadbala', 'bhavabala', 'upagraha'].includes(activeView) && (
        <DashaAndStrengthView
          toolId={activeView as 'dasha' | 'ashtakavarga' | 'shadbala' | 'bhavabala' | 'upagraha'}
          kundali={kundaliData}
          onNavigateToTool={handleSelectView}
        />
      )}

      {/* VIEW 7: INDIVIDUAL CALCULATORS (Rashi, Nakshatra, Lagna, Surya Rashi, Mangal Dosha, Kalasarpa, Sade Sati, Gemstone, Rudraksha, Baby Names, Pancha Pakshi, Prashna, Sahasra Chandra, Shraddha Tithi, Vedic Time) */}
      {[
        'rashi', 
        'nakshatra', 
        'lagna', 
        'surya-rashi', 
        'mangal-dosha', 
        'kalasarpa-yoga', 
        'sade-sati', 
        'gemstone', 
        'rudraksha', 
        'baby-names', 
        'pancha-pakshi', 
        'prashna', 
        'sahasra-chandra', 
        'vedic-time', 
        'shraddha-tithi'
      ].includes(activeView) && (
        <CalculatorDetailView
          toolId={activeView}
          kundali={kundaliData}
          profile={birthProfile}
          onChangeProfile={setBirthProfile}
          onNavigateToTool={handleSelectView}
          onNavigateToPanchang={onNavigateToPanchang}
          onNavigateToFestivals={onNavigateToFestivals}
          currentLang={currentLang}
        />
      )}

      {/* Printable Report Modal */}
      {isPrintModalOpen && (
        <PrintableJanmaPatrika
          kundali={kundaliData}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}

    </div>
  );
};
