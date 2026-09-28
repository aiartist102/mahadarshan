import React, { useState } from 'react';
import { 
  Sparkles, 
  Info, 
  Maximize2, 
  RefreshCw, 
  ChevronRight, 
  X, 
  Flame, 
  ArrowUp, 
  ArrowDown, 
  Star,
  Eye
} from 'lucide-react';
import { 
  CompleteKundaliData, 
  ChartStyle, 
  PlanetaryPosition, 
  HouseDetail,
  RASHIS 
} from '../../data/vedicJyotishEngine';

interface VedicChartRendererProps {
  kundali: CompleteKundaliData;
  activeVarga?: string; // 'D1' | 'D9' | 'D10', etc.
  onSelectVarga?: (varga: string) => void;
  title?: string;
  allowStyleSwitch?: boolean;
}

export const VedicChartRenderer: React.FC<VedicChartRendererProps> = ({
  kundali,
  activeVarga = 'D1',
  onSelectVarga,
  title,
  allowStyleSwitch = true
}) => {
  const [chartStyle, setChartStyle] = useState<ChartStyle>('north');
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetaryPosition | null>(null);
  const [selectedHouse, setSelectedHouse] = useState<HouseDetail | null>(null);
  const [useSanskritNames, setUseSanskritNames] = useState(false);

  // Current varga positions with robust fallback
  const currentVargaData = 
    kundali?.vargas?.[activeVarga] || 
    kundali?.vargas?.[activeVarga.split(' ')[0]] || 
    kundali?.vargas?.['D1'] || 
    kundali?.vargas?.['D1 (Rashi)'] || 
    (kundali?.vargas ? Object.values(kundali.vargas)[0] : null) || {
      vargaName: 'D1 Rashi',
      divisionNumber: 1,
      planetPositions: {},
      lagnaSignIndex: kundali?.lagnaSignIndex ?? 0,
      lagnaHouse: 1
    };
  const lagnaHouseSign = currentVargaData?.lagnaSignIndex ?? kundali?.lagnaSignIndex ?? 0;

  // Compute planets inside each house (1 to 12) for active varga
  const housePlanetsMap: Record<number, PlanetaryPosition[]> = {};
  for (let h = 1; h <= 12; h++) {
    housePlanetsMap[h] = [];
  }

  (kundali?.planets || []).forEach(p => {
    const vargaPos = currentVargaData?.planetPositions?.[p.id];
    const targetHouse = vargaPos ? vargaPos.house : p.house;
    if (housePlanetsMap[targetHouse]) {
      housePlanetsMap[targetHouse].push(p);
    }
  });

  // Helper to format planet label
  const getPlanetLabel = (p: PlanetaryPosition) => {
    const name = useSanskritNames ? p.sanskritName.split(' ')[0] : p.name.split(' ')[0];
    const flags: string[] = [];
    if (p.isRetrograde) flags.push('R');
    if (p.isCombust) flags.push('C');
    if (p.dignity === 'Exalted') flags.push('↑');
    if (p.dignity === 'Debilitated') flags.push('↓');
    if (p.dignity === 'Own Sign') flags.push('★');
    return `${name}${flags.length > 0 ? ` (${flags.join('')})` : ''}`;
  };

  // House signs in North Indian style: House 1 = Lagna sign + 1, House 2 = (Lagna + 1) % 12 + 1, etc.
  const getHouseSignNumber = (houseNum: number) => {
    return ((lagnaHouseSign + (houseNum - 1)) % 12) + 1;
  };

  const vargaList = [
    { id: 'D1', name: 'D1 Rashi', desc: 'Natal Physical Chart' },
    { id: 'D9', name: 'D9 Navamsha', desc: 'Dharma, Soul & Marriage' },
    { id: 'D2', name: 'D2 Hora', desc: 'Wealth & Prosperity' },
    { id: 'D3', name: 'D3 Drekkana', desc: 'Siblings & Courage' },
    { id: 'D4', name: 'D4 Chaturthamsha', desc: 'Assets & Real Estate' },
    { id: 'D7', name: 'D7 Saptamsha', desc: 'Children & Progeny' },
    { id: 'D10', name: 'D10 Dashamsha', desc: 'Career, Status & Fame' },
    { id: 'D12', name: 'D12 Dwadashamsha', desc: 'Parents & Lineage' },
    { id: 'D16', name: 'D16 Shodashamsha', desc: 'Vehicles & Happiness' },
    { id: 'D20', name: 'D20 Vimshamsha', desc: 'Spiritual Pursuits' },
    { id: 'D24', name: 'D24 Chaturvimshamsha', desc: 'Knowledge & Intellect' },
    { id: 'D27', name: 'D27 Bhamsa', desc: 'Strengths & Weaknesses' },
    { id: 'D30', name: 'D30 Trimshamsha', desc: 'Arishta & Misfortunes' },
    { id: 'D60', name: 'D60 Shashtiamsha', desc: 'Past Karma & Destiny' }
  ];

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
      {/* Chart Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              {activeVarga} Kundali Chart · {currentVargaData.vargaName}
            </span>
            <span className="text-[11px] text-stone-500 font-mono">
              ({chartStyle.toUpperCase()} INDIAN STYLE)
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-cinzel font-bold text-stone-900 mt-0.5">
            {title || `${kundali.profile.name}'s ${currentVargaData.vargaName}`}
          </h3>
        </div>

        {/* Controls: Chart Style + Sanskrit Toggle */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          {allowStyleSwitch && (
            <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-medium">
              <button
                type="button"
                onClick={() => setChartStyle('north')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  chartStyle === 'north' ? 'bg-amber-900 text-white shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                North Indian
              </button>
              <button
                type="button"
                onClick={() => setChartStyle('south')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  chartStyle === 'south' ? 'bg-amber-900 text-white shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                South Indian
              </button>
              <button
                type="button"
                onClick={() => setChartStyle('east')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  chartStyle === 'east' ? 'bg-amber-900 text-white shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                East Indian
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setUseSanskritNames(!useSanskritNames)}
            className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl text-stone-700 font-medium transition-colors cursor-pointer"
          >
            {useSanskritNames ? 'Names: Sanskrit' : 'Names: English'}
          </button>
        </div>
      </div>

      {/* Varga Quick Tabs: D1, D9, D10 etc. */}
      {onSelectVarga && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {vargaList.map((v) => {
            const isActive = activeVarga === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => onSelectVarga(v.id)}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                  isActive
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
                title={v.desc}
              >
                <span>{v.id}</span>
                <span className="text-[10px] font-normal opacity-90 hidden sm:inline">({v.name.split(' ')[1]})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Chart Graphic Canvas & Legend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* SVG Chart Renderer */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-[440px] aspect-square relative bg-[#fcf9f2] rounded-2xl border-2 border-amber-900/40 p-2 shadow-inner select-none">
            
            {/* North Indian Traditional Diamond Kendra Chart */}
            {chartStyle === 'north' && (
              <div className="w-full h-full relative">
                <svg viewBox="0 0 400 400" className="w-full h-full stroke-amber-900 fill-none stroke-[1.6]">
                  {/* Outer Square */}
                  <rect x="8" y="8" width="384" height="384" className="stroke-amber-950 stroke-[2.2]" />
                  {/* Diagonals */}
                  <line x1="8" y1="8" x2="392" y2="392" />
                  <line x1="392" y1="8" x2="8" y2="392" />
                  {/* Inner Rhombus / Kendra Diamond */}
                  <polygon points="200,8 392,200 200,392 8,200" className="stroke-amber-950 stroke-[2]" />
                </svg>

                {/* 12 Houses Positions in North Indian Style */}
                {/* House 1: Top Center Diamond */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[0])}
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-28 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[11px] font-bold text-amber-900 block">
                    {getHouseSignNumber(1)}
                  </span>
                  <div className="text-[11px] font-semibold text-stone-900 flex flex-wrap justify-center gap-1">
                    {housePlanetsMap[1]?.map(p => (
                      <button 
                        key={p.id}
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }}
                        className="hover:underline font-bold text-amber-950 cursor-pointer"
                      >
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                    {(!housePlanetsMap[1] || housePlanetsMap[1].length === 0) && (
                      <span className="text-[10px] text-stone-400 font-normal">Lagna</span>
                    )}
                  </div>
                </div>

                {/* House 2: Top Left Triangle */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[1])}
                  className="absolute top-12 left-10 w-20 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(2)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[2]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 3: Upper Left Edge */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[2])}
                  className="absolute top-28 left-4 w-18 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(3)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[3]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 4: Left Center Diamond */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[3])}
                  className="absolute top-1/2 left-10 -translate-y-1/2 w-28 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[11px] font-bold text-amber-900 block">{getHouseSignNumber(4)}</span>
                  <div className="text-[11px] font-semibold text-stone-900 flex flex-wrap justify-center gap-1">
                    {housePlanetsMap[4]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline font-bold text-amber-950">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 5: Lower Left Edge */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[4])}
                  className="absolute bottom-28 left-4 w-18 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(5)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[5]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 6: Bottom Left Triangle */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[5])}
                  className="absolute bottom-12 left-10 w-20 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(6)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[6]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 7: Bottom Center Diamond */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[6])}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 w-28 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[11px] font-bold text-amber-900 block">{getHouseSignNumber(7)}</span>
                  <div className="text-[11px] font-semibold text-stone-900 flex flex-wrap justify-center gap-1">
                    {housePlanetsMap[7]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline font-bold text-amber-950">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 8: Bottom Right Triangle */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[7])}
                  className="absolute bottom-12 right-10 w-20 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(8)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[8]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 9: Lower Right Edge */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[8])}
                  className="absolute bottom-28 right-4 w-18 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(9)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[9]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 10: Right Center Diamond */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[9])}
                  className="absolute top-1/2 right-10 -translate-y-1/2 w-28 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[11px] font-bold text-amber-900 block">{getHouseSignNumber(10)}</span>
                  <div className="text-[11px] font-semibold text-stone-900 flex flex-wrap justify-center gap-1">
                    {housePlanetsMap[10]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline font-bold text-amber-950">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 11: Upper Right Edge */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[10])}
                  className="absolute top-28 right-4 w-18 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(11)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[11]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* House 12: Top Right Triangle */}
                <div 
                  onClick={() => setSelectedHouse(kundali.houses[11])}
                  className="absolute top-12 right-10 w-20 text-center cursor-pointer hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
                >
                  <span className="text-[10px] font-bold text-amber-900 block">{getHouseSignNumber(12)}</span>
                  <div className="text-[10px] font-semibold text-stone-800 flex flex-col items-center">
                    {housePlanetsMap[12]?.map(p => (
                      <button key={p.id} onClick={(e) => { e.stopPropagation(); setSelectedPlanet(p); }} className="hover:underline">
                        {getPlanetLabel(p)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* South Indian Fixed Signs Clockwise Chart */}
            {chartStyle === 'south' && (
              <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-0.5 border border-amber-900/60 bg-amber-900/20 p-1">
                {/* 16 cells in 4x4: 12 perimeter cells are Rashis Pisces(11) to Aquarius(10) */}
                {[
                  { rashiIdx: 11, label: 'Meena (Pisces)' }, // Row 1 Col 1
                  { rashiIdx: 0, label: 'Mesha (Aries)' },
                  { rashiIdx: 1, label: 'Vrishabha (Taurus)' },
                  { rashiIdx: 2, label: 'Mithuna (Gemini)' },
                  { rashiIdx: 10, label: 'Kumbha (Aquarius)' }, // Row 2 Col 1
                  { isCenter: true },
                  { isCenter: true },
                  { rashiIdx: 3, label: 'Karka (Cancer)' },
                  { rashiIdx: 9, label: 'Makara (Capricorn)' }, // Row 3 Col 1
                  { isCenter: true },
                  { isCenter: true },
                  { rashiIdx: 4, label: 'Simha (Leo)' },
                  { rashiIdx: 8, label: 'Dhanu (Sagittarius)' }, // Row 4 Col 1
                  { rashiIdx: 7, label: 'Vrishchika (Scorpio)' },
                  { rashiIdx: 6, label: 'Tula (Libra)' },
                  { rashiIdx: 5, label: 'Kanya (Virgo)' }
                ].map((cell, idx) => {
                  if (cell.isCenter) {
                    if (idx === 5) {
                      return (
                        <div key={idx} className="col-span-2 row-span-2 bg-[#fdfbf6] flex flex-col items-center justify-center p-2 text-center border border-amber-900/20">
                          <span className="text-xs font-cinzel font-bold text-amber-950">
                            {kundali.profile.name}
                          </span>
                          <span className="text-[10px] text-stone-500 font-mono">
                            {currentVargaData?.vargaName || 'D1 Rashi'}
                          </span>
                          <span className="text-[10px] text-amber-800 font-bold mt-1">
                            Lagna: {kundali.lagnaSignName}
                          </span>
                        </div>
                      );
                    }
                    return null;
                  }

                  const rIdx = cell.rashiIdx!;
                  const isLagna = rIdx === lagnaHouseSign;
                  const planetsInSign = kundali.planets.filter(p => {
                    const vPos = currentVargaData?.planetPositions?.[p.id];
                    return vPos ? vPos.signIndex === rIdx : p.signIndex === rIdx;
                  });

                  return (
                    <div 
                      key={idx}
                      className={`bg-white/90 p-1 flex flex-col justify-between border border-amber-900/20 relative min-h-[64px] ${
                        isLagna ? 'ring-1.5 ring-amber-700 bg-amber-50/70' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between text-[9px] font-bold text-stone-400">
                        <span>{RASHIS[rIdx].sanskrit.split(' ')[0]}</span>
                        {isLagna && (
                          <span className="text-amber-900 font-extrabold bg-amber-200/80 px-1 rounded">
                            ASC
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] font-bold text-stone-900 flex flex-wrap gap-0.5 mt-0.5">
                        {planetsInSign.map(p => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedPlanet(p)}
                            className="hover:underline text-[9px] text-amber-950 bg-stone-100 px-1 py-0.5 rounded cursor-pointer"
                          >
                            {getPlanetLabel(p)}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* East Indian Chart */}
            {chartStyle === 'east' && (
              <div className="w-full h-full relative">
                <svg viewBox="0 0 400 400" className="w-full h-full stroke-amber-900 fill-none stroke-[1.6]">
                  <rect x="8" y="8" width="384" height="384" className="stroke-amber-950 stroke-[2]" />
                  <line x1="8" y1="200" x2="392" y2="200" />
                  <line x1="200" y1="8" x2="200" y2="392" />
                  <line x1="8" y1="8" x2="392" y2="392" />
                  <line x1="392" y1="8" x2="8" y2="392" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs font-cinzel font-bold text-amber-900/60 bg-white/80 px-2 py-1 rounded">
                    East Indian {activeVarga}
                  </span>
                </div>
                {/* Simplified East placement */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-xs">
                  <span className="text-[10px] font-bold text-amber-800">Mesha (Aries)</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-2 text-[11px] text-stone-500 text-center flex items-center gap-2">
            <span>Click any planet or house number on the chart to inspect full astrological attributes.</span>
          </div>
        </div>

        {/* Chart Summary Sidebar & Selected Item Detail */}
        <div className="lg:col-span-4 space-y-3">
          {/* Quick Kundali Key Facts */}
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3.5 space-y-2 text-xs">
            <div className="font-bold text-amber-950 flex items-center justify-between">
              <span>Chart Dignities</span>
              <span className="text-[10px] font-mono text-amber-800 font-normal">Ayanamsha: {kundali.profile.ayanamsha.toUpperCase()}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-stone-500 block">Lagna (Ascendant)</span>
                <span className="font-bold text-stone-900">{kundali.lagnaSignName} ({kundali.lagnaDegree.toFixed(2)}°)</span>
              </div>
              <div>
                <span className="text-stone-500 block">Janma Rashi (Moon)</span>
                <span className="font-bold text-stone-900">{kundali.moonRashiName}</span>
              </div>
              <div>
                <span className="text-stone-500 block">Janma Nakshatra</span>
                <span className="font-bold text-indigo-900">{kundali.moonNakshatra} (Pada {kundali.moonPada})</span>
              </div>
              <div>
                <span className="text-stone-500 block">Surya (Sun Sign)</span>
                <span className="font-bold text-amber-900">{kundali.sunSignName}</span>
              </div>
            </div>

            {/* Legend */}
            <div className="pt-2 border-t border-amber-200/60 flex items-center flex-wrap gap-2 text-[10px] text-stone-600">
              <span className="font-bold text-amber-900">Legend:</span>
              <span>(R) Retrograde</span>
              <span>(C) Combust</span>
              <span>(↑) Exalted</span>
              <span>(↓) Debilitated</span>
              <span>(★) Own Sign</span>
            </div>
          </div>

          {/* Interactive Inspector Card */}
          {selectedPlanet ? (
            <div className="bg-white border-2 border-amber-800/40 rounded-xl p-4 shadow-sm text-xs space-y-2 relative">
              <button 
                onClick={() => setSelectedPlanet(null)}
                className="absolute top-2.5 right-2.5 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-amber-950 font-cinzel">
                  {selectedPlanet.name} ({selectedPlanet.sanskritName})
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  selectedPlanet.dignity === 'Exalted' ? 'bg-emerald-100 text-emerald-800' :
                  selectedPlanet.dignity === 'Debilitated' ? 'bg-rose-100 text-rose-800' :
                  selectedPlanet.dignity === 'Own Sign' ? 'bg-amber-100 text-amber-900' :
                  'bg-stone-100 text-stone-700'
                }`}>
                  {selectedPlanet.dignity}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-stone-700 pt-1">
                <div>
                  <span className="text-stone-400">Position:</span> <span className="font-mono font-bold">{selectedPlanet.formattedDegree}</span>
                </div>
                <div>
                  <span className="text-stone-400">Sign:</span> <span className="font-bold">{selectedPlanet.signName} ({selectedPlanet.signSanskrit.split(' ')[0]})</span>
                </div>
                <div>
                  <span className="text-stone-400">House:</span> <span className="font-bold">Bhava {selectedPlanet.house}</span>
                </div>
                <div>
                  <span className="text-stone-400">Nakshatra:</span> <span className="font-bold">{selectedPlanet.nakshatraName} (P{selectedPlanet.pada})</span>
                </div>
                <div>
                  <span className="text-stone-400">Lord of Star:</span> <span className="font-bold">{selectedPlanet.nakshatraLord}</span>
                </div>
                <div>
                  <span className="text-stone-400">Sign Lord:</span> <span className="font-bold">{RASHIS[selectedPlanet.signIndex].lord.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="text-stone-400">Motion:</span> <span className="font-bold">{selectedPlanet.isRetrograde ? 'Vakri (Retrograde)' : 'Marga (Direct)'}</span>
                </div>
                <div>
                  <span className="text-stone-400">Sun Distance:</span> <span className="font-bold">{selectedPlanet.sunDistance.toFixed(1)}° {selectedPlanet.isCombust ? '(Combust / अस्त)' : ''}</span>
                </div>
              </div>

              {selectedPlanet.aspects && selectedPlanet.aspects.length > 0 && (
                <div className="pt-2 border-t border-stone-100 text-[11px]">
                  <span className="text-stone-500 font-semibold">Aspects (दृष्टि):</span>
                  <div className="text-stone-700 mt-0.5">
                    {selectedPlanet.aspects.map(a => `House ${a.house} (${a.type})`).join(', ')}
                  </div>
                </div>
              )}
            </div>
          ) : selectedHouse ? (
            <div className="bg-white border-2 border-amber-800/40 rounded-xl p-4 shadow-sm text-xs space-y-2 relative">
              <button 
                onClick={() => setSelectedHouse(null)}
                className="absolute top-2.5 right-2.5 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-amber-950 font-cinzel">
                  Bhava {selectedHouse.houseNumber} ({selectedHouse.signName})
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-stone-100 rounded text-stone-700">
                  {selectedHouse.category}
                </span>
              </div>

              <div className="text-[11px] text-stone-600 space-y-1">
                <div><span className="text-stone-400">Significance:</span> {selectedHouse.significance}</div>
                <div><span className="text-stone-400">House Lord:</span> <span className="font-bold text-stone-900">{selectedHouse.lord}</span> (placed in House {selectedHouse.lordPlacementHouse})</div>
                <div><span className="text-stone-400">Natural Karaka:</span> {selectedHouse.karaka}</div>
                <div>
                  <span className="text-stone-400">Occupants:</span> {selectedHouse.occupyingPlanets.length > 0 ? selectedHouse.occupyingPlanets.join(', ') : 'None (Shunya)'}
                </div>
                <div>
                  <span className="text-stone-400">Aspecting:</span> {selectedHouse.aspectingPlanets.length > 0 ? selectedHouse.aspectingPlanets.join(', ') : 'None'}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-500 flex items-center gap-2">
              <Info className="w-4 h-4 text-stone-400 shrink-0" />
              <span>Click on any planet name or house inside the chart to view deep Vedic dignity, Nakshatra lord, combustion, and planetary aspects.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
