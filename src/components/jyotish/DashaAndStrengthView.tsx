import React, { useState } from 'react';
import { 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Grid, 
  BarChart2, 
  Layers, 
  ShieldCheck, 
  Info, 
  BookOpen, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { 
  CompleteKundaliData, 
  RASHIS, 
  DashaPeriod 
} from '../../data/vedicJyotishEngine';
import { JyotishViewId } from './JyotishTypes';

interface DashaAndStrengthViewProps {
  toolId: 'dasha' | 'ashtakavarga' | 'shadbala' | 'bhavabala' | 'upagraha';
  kundali: CompleteKundaliData;
  onNavigateToTool?: (id: JyotishViewId) => void;
}

export const DashaAndStrengthView: React.FC<DashaAndStrengthViewProps> = ({
  toolId,
  kundali,
  onNavigateToTool
}) => {
  const [selectedMahadashaIndex, setSelectedMahadashaIndex] = useState(0);

  return (
    <div className="space-y-6">
      
      {/* 1. VIMSHOTTARI DASHA VIEW */}
      {toolId === 'dasha' && (
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>120-Year Vimshottari Planetary Period Timeline</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
              Vimshottari Mahadasha & Antardasha (विंशोत्तरी महादशा चक्र)
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
              Vimshottari Dasha is the premier planetary progression system of Parashara Jyotish. Governed by your birth Nakshatra ({kundali.moonNakshatra}), the 120-year cycle unfolds through 9 planetary rulers, illuminating key chapters of spiritual learning, material growth, and karmic timing.
            </p>
          </div>

          {/* Mahadashas Horizontal Selector */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
              Select Mahadasha Cycle (Click to expand Antardashas)
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
              {kundali.dashaTree.map((dasha, idx) => {
                const isSelected = selectedMahadashaIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedMahadashaIndex(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-900 text-white border-amber-950 shadow-sm ring-2 ring-amber-400'
                        : dasha.isCurrent
                          ? 'bg-amber-50 text-amber-950 border-amber-300 font-bold'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs">{dasha.planet}</span>
                        {dasha.isCurrent && (
                          <span className={`text-[9px] px-1 py-0.5 rounded ${isSelected ? 'bg-amber-700 text-amber-100' : 'bg-amber-200 text-amber-900'}`}>
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] opacity-80 block">{dasha.planetSanskrit}</span>
                    </div>

                    <div className="mt-2 text-[10px] font-mono">
                      <span>{dasha.startDate.slice(0, 4)} – {dasha.endDate.slice(0, 4)}</span>
                      <span className="block opacity-75">({dasha.durationYears} Years)</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Antardasha Expansion Table */}
            {kundali.dashaTree[selectedMahadashaIndex] && (
              <div className="pt-4 border-t border-stone-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-stone-900 font-cinzel">
                    {kundali.dashaTree[selectedMahadashaIndex].planet} Mahadasha · Sub-Periods (अंतर्दशा)
                  </h4>
                  <span className="text-xs text-stone-500 font-mono">
                    Total Duration: {kundali.dashaTree[selectedMahadashaIndex].durationYears} Years
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold text-[10px] uppercase">
                        <th className="py-2.5 px-3">Antardasha Ruler</th>
                        <th className="py-2.5 px-3">Start Date</th>
                        <th className="py-2.5 px-3">End Date</th>
                        <th className="py-2.5 px-3">Duration (Months)</th>
                        <th className="py-2.5 px-3">Classical Tendencies & Karmic Focus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {kundali.dashaTree[selectedMahadashaIndex].subPeriods?.map((sub, sIdx) => {
                        const isSubActive = sub.isCurrent;
                        return (
                          <tr key={sIdx} className={`hover:bg-amber-50/40 transition-colors ${isSubActive ? 'bg-amber-50/70 font-semibold' : ''}`}>
                            <td className="py-2.5 px-3 font-bold text-stone-900 flex items-center gap-1.5">
                              {isSubActive && <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />}
                              <span>{kundali.dashaTree[selectedMahadashaIndex].planet} - {sub.planet}</span>
                            </td>
                            <td className="py-2.5 px-3 font-mono text-stone-600">{sub.startDate}</td>
                            <td className="py-2.5 px-3 font-mono text-stone-600">{sub.endDate}</td>
                            <td className="py-2.5 px-3 font-mono text-stone-600">{(sub.durationYears * 12).toFixed(1)} mo</td>
                            <td className="py-2.5 px-3 text-stone-700 text-[11px]">
                              {sub.planet === 'Jupiter' ? 'Spiritual clarity, higher learning, advisory roles and blessings.' :
                               sub.planet === 'Saturn' ? 'Steady perseverance, discipline, restructuring, and karmic patience.' :
                               sub.planet === 'Mercury' ? 'Intellectual acuity, commercial ventures, writing and communications.' :
                               sub.planet === 'Venus' ? 'Aesthetic refinement, relationship harmony, artistic and domestic comforts.' :
                               sub.planet === 'Sun' ? 'Heightened vitality, leadership opportunities and institutional recognition.' :
                               sub.planet === 'Moon' ? 'Emotional depth, intuitive awareness, public goodwill and domestic peace.' :
                               sub.planet === 'Mars' ? 'Courage, decisive initiatives, mechanical aptitude and physical stamina.' :
                               sub.planet === 'Rahu' ? 'Sudden expansion, foreign connections, technological pursuits and ambition.' :
                               'Introspection, spiritual detachment, research acumen and inner liberation.'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. ASHTAKAVARGA VIEW */}
      {toolId === 'ashtakavarga' && (
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Grid className="w-4 h-4 text-amber-700" />
              <span>337 Benefic Bindu System of Parashara</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
              Sarvashtakavarga & Bhinnashtakavarga (अष्टकवर्ग चक्र)
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
              Ashtakavarga quantifies the supportive strength of all 12 signs by aggregating benefic dots (Bindus) contributed by the seven classical planets and the Lagna. Total bindus across the 12 signs equal exactly 337.
            </p>
          </div>

          {/* Sarvashtakavarga 12-Sign Summary Strip */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
                Sarvashtakavarga (SAV) Sign Totals (Total: 337 Bindus)
              </h3>
              <span className="text-xs text-stone-500 font-mono">Benchmark: 28 Bindus = Average</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
              {RASHIS.map((r, idx) => {
                const count = kundali.ashtakavarga.sarvashtakavarga[idx];
                const isStrong = count >= 30;
                const isChallenging = count < 25;
                return (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-xl border text-center ${
                      isStrong ? 'bg-emerald-50 border-emerald-200' :
                      isChallenging ? 'bg-rose-50 border-rose-200' :
                      'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <span className="text-[10px] text-stone-500 block truncate">{r.sanskrit.split(' ')[0]}</span>
                    <span className={`text-xl font-bold font-mono block mt-0.5 ${
                      isStrong ? 'text-emerald-800' :
                      isChallenging ? 'text-rose-800' :
                      'text-stone-800'
                    }`}>
                      {count}
                    </span>
                    <span className="text-[9px] text-stone-400 block">{r.name.slice(0, 3)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Complete 7-Planet Bhinnashtakavarga (BAV) Matrix Table */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
              Bhinnashtakavarga (BAV) Planetary Contribution Matrix
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold text-[10px] uppercase">
                    <th className="py-2.5 px-3 text-left">Graha (Planet)</th>
                    {RASHIS.map((r, idx) => (
                      <th key={idx} className="py-2.5 px-2">{r.name.slice(0, 3)}</th>
                    ))}
                    <th className="py-2.5 px-3 font-bold bg-amber-50 text-amber-900">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {kundali.ashtakavarga.planets.map((planetName, pIdx) => {
                    const row = kundali.ashtakavarga.binduMatrix[pIdx];
                    const rowSum = row.reduce((a, b) => a + b, 0);
                    return (
                      <tr key={pIdx} className="hover:bg-amber-50/30">
                        <td className="py-2.5 px-3 text-left font-bold text-stone-900 whitespace-nowrap">{planetName}</td>
                        {row.map((val, rIdx) => (
                          <td key={rIdx} className="py-2.5 px-2 font-mono font-medium text-stone-700">
                            {val}
                          </td>
                        ))}
                        <td className="py-2.5 px-3 font-mono font-bold bg-amber-50 text-amber-950">{rowSum}</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-stone-100 font-bold text-stone-900">
                    <td className="py-2.5 px-3 text-left">SAV Total</td>
                    {kundali.ashtakavarga.sarvashtakavarga.map((tot, idx) => (
                      <td key={idx} className="py-2.5 px-2 font-mono">{tot}</td>
                    ))}
                    <td className="py-2.5 px-3 font-mono text-amber-950 font-extrabold bg-amber-100">337</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. SHADBALA & BHAVABALA VIEW */}
      {(toolId === 'shadbala' || toolId === 'bhavabala') && (
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <BarChart2 className="w-4 h-4 text-amber-700" />
              <span>Six-Fold Planetary Potency & House Strength</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
              Shadbala & Bhavabala Strength Evaluation (षडबल एवं भावबल)
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
              Shadbala calculates six dimensions of planetary strength: Sthana (Positional), Dig (Directional), Kaala (Temporal), Cheshta (Motional), Naisargika (Natural), and Drik (Aspectual). Bhavabala evaluates the potency of all 12 astrological houses.
            </p>
          </div>

          {/* Shadbala 7-Planet Strength Cards */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
              Seven Grahas Shadbala Scores & Ranking
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kundali.shadbala.map((sb, idx) => (
                <div key={idx} className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-sm font-cinzel">{sb.planet}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      Rank #{sb.relativeRank}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between text-xs pt-1">
                    <span className="text-stone-500">Total Rupas:</span>
                    <span className="font-mono font-bold text-stone-900">{sb.totalRupas.toFixed(2)} / req {sb.requiredRupas}</span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${sb.percentageStrength >= 100 ? 'bg-emerald-600' : 'bg-amber-600'}`}
                      style={{ width: `${Math.min(sb.percentageStrength, 100)}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-1 pt-1 text-[10px] text-stone-600 font-mono">
                    <div>Sthana: {sb.sthanaBala}</div>
                    <div>Dig: {sb.digBala}</div>
                    <div>Kaala: {sb.kaalaBala}</div>
                    <div>Cheshta: {sb.cheshtaBala}</div>
                    <div>Naisargika: {sb.naisargikaBala}</div>
                    <div>Drik: {sb.drikBala}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bhavabala 12 Houses Strength Table */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
              Bhavabala 12 Houses Potency Matrix
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold text-[10px] uppercase">
                    <th className="py-2.5 px-3">Bhava (House)</th>
                    <th className="py-2.5 px-3">Sign</th>
                    <th className="py-2.5 px-3">House Lord</th>
                    <th className="py-2.5 px-3">Lord Strength</th>
                    <th className="py-2.5 px-3">Occupant Factor</th>
                    <th className="py-2.5 px-3">Aspect Factor</th>
                    <th className="py-2.5 px-3">Total Score</th>
                    <th className="py-2.5 px-3">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {kundali.bhavabala.map((b, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/30">
                      <td className="py-2.5 px-3 font-bold text-stone-900">House {b.house}</td>
                      <td className="py-2.5 px-3 text-stone-600">{b.sign}</td>
                      <td className="py-2.5 px-3 text-stone-800 font-medium">{b.lord}</td>
                      <td className="py-2.5 px-3 font-mono text-stone-600">{b.lordStrength.toFixed(1)}</td>
                      <td className="py-2.5 px-3 font-mono text-stone-600">{b.occupantStrength}</td>
                      <td className="py-2.5 px-3 font-mono text-stone-600">{b.aspectStrength}</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-stone-900">{b.totalScore.toFixed(1)}</td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          b.grade === 'Excellent' ? 'bg-emerald-100 text-emerald-800' :
                          b.grade === 'Good' ? 'bg-sky-100 text-sky-800' :
                          b.grade === 'Moderate' ? 'bg-amber-100 text-amber-800' :
                          'bg-stone-100 text-stone-700'
                        }`}>
                          {b.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 4. UPAGRAHA VIEW */}
      {toolId === 'upagraha' && (
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>11 Subtle Shadow Asterisms of Parashara</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
              Upagraha Calculations (उपग्रह विचार)
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
              Upagrahas are mathematically derived subtle non-luminous points (Chhaya Grahas) of immense diagnostic power in classical Jyotish, including Gulika, Mandi, Kaala, Mrityu, Ardha Prahara, Yama Ghantaka, Dhuma, Vyatipata, Parivesha, Indra Chapa, and Upaketu.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
              Astronomical Positions of 11 Upagrahas
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold text-[10px] uppercase">
                    <th className="py-2.5 px-3">Upagraha</th>
                    <th className="py-2.5 px-3">Sanskrit Name</th>
                    <th className="py-2.5 px-3">Sign</th>
                    <th className="py-2.5 px-3">Degree in Sign</th>
                    <th className="py-2.5 px-3">House Placement</th>
                    <th className="py-2.5 px-3">Nakshatra (Pada)</th>
                    <th className="py-2.5 px-3">Astrological Nature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {kundali.upagrahas.map((u, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/30">
                      <td className="py-2.5 px-3 font-bold text-stone-900">{u.name}</td>
                      <td className="py-2.5 px-3 text-amber-900 font-medium">{u.sanskritName}</td>
                      <td className="py-2.5 px-3 text-stone-700">{u.signName}</td>
                      <td className="py-2.5 px-3 font-mono text-stone-800">{u.degreeInSign.toFixed(2)}°</td>
                      <td className="py-2.5 px-3 font-bold text-stone-900">House {u.house}</td>
                      <td className="py-2.5 px-3 text-stone-600">{u.nakshatra} (P{u.pada})</td>
                      <td className="py-2.5 px-3 text-[11px] text-stone-700">{u.nature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
