import React from 'react';
import { Printer, Download, X, Compass, CheckCircle2 } from 'lucide-react';
import { CompleteKundaliData, RASHIS } from '../../data/vedicJyotishEngine';

interface PrintableJanmaPatrikaProps {
  kundali: CompleteKundaliData;
  onClose: () => void;
}

export const PrintableJanmaPatrika: React.FC<PrintableJanmaPatrikaProps> = ({
  kundali,
  onClose
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto shadow-2xl relative print:p-0 print:shadow-none print:max-w-none print:w-full">
        
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 print:hidden">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-800" />
            <span className="text-base font-cinzel font-bold text-stone-900">
              Vedic Janma Patrika Report Preview (A4 Printable)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="space-y-6 text-stone-900">
          
          {/* Header */}
          <div className="text-center space-y-1 pb-4 border-b-2 border-amber-900/30">
            <div className="text-[10px] uppercase font-bold tracking-widest text-amber-900">
              ॥ श्री गणेशाय नमः ॥ ॐ सूर्याय नमः ॥
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-950">
              संपूर्ण वैदिक जन्म पत्रिका (Vedic Janma Patrika)
            </h1>
            <p className="text-xs text-stone-600">
              Derived according to Brihat Parashara Hora Shastra & Drik Ganita Siddhanta
            </p>
          </div>

          {/* Native Particulars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs">
            <div>
              <span className="text-stone-500 block text-[10px]">Native Name</span>
              <span className="font-bold text-stone-900">{kundali.profile.name}</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[10px]">Date of Birth</span>
              <span className="font-bold text-stone-900">{kundali.profile.birthDate}</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[10px]">Time of Birth</span>
              <span className="font-bold text-stone-900">{kundali.profile.birthTime} (Local)</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[10px]">Place of Birth</span>
              <span className="font-bold text-stone-900">{kundali.profile.birthCity}, {kundali.profile.birthCountry}</span>
            </div>

            <div>
              <span className="text-stone-500 block text-[10px]">Ascendant (Lagna)</span>
              <span className="font-bold text-amber-950">{kundali.lagnaSignName} ({kundali.lagnaDegree.toFixed(2)}°)</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[10px]">Moon Sign (Rashi)</span>
              <span className="font-bold text-amber-950">{kundali.moonRashiName}</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[10px]">Birth Nakshatra</span>
              <span className="font-bold text-indigo-950">{kundali.moonNakshatra} (Pada {kundali.moonPada})</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[10px]">Ayanamsha</span>
              <span className="font-bold text-stone-900">{kundali.profile.ayanamsha.toUpperCase()} ({kundali.ayanamshaValue.toFixed(2)}°)</span>
            </div>
          </div>

          {/* Panchang at Birth */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
            <span className="font-bold text-stone-800 text-[11px] block">Birth Panchangam (जन्म कालीन पंचांग):</span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-stone-600 text-[11px]">
              <div>Tithi: <strong className="text-stone-900">{kundali.panchang.tithiName}</strong></div>
              <div>Vara: <strong className="text-stone-900">{kundali.panchang.vara}</strong></div>
              <div>Yoga: <strong className="text-stone-900">{kundali.panchang.yoga}</strong></div>
              <div>Karana: <strong className="text-stone-900">{kundali.panchang.karana}</strong></div>
              <div>Ishtakala: <strong className="text-stone-900">{kundali.vedicTime.ishtakala}</strong></div>
            </div>
          </div>

          {/* Planetary Table */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 font-cinzel">
              Planetary Longitudes & Dignity (ग्रह स्पष्ट तालिका)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-stone-200">
                <thead className="bg-stone-100 text-stone-700 uppercase text-[9px] font-bold">
                  <tr>
                    <th className="p-2">Graha</th>
                    <th className="p-2">Longitude</th>
                    <th className="p-2">Sign</th>
                    <th className="p-2">House</th>
                    <th className="p-2">Nakshatra</th>
                    <th className="p-2">Pada</th>
                    <th className="p-2">Motion</th>
                    <th className="p-2">Dignity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-[11px]">
                  {kundali.planets.map((p, i) => (
                    <tr key={i}>
                      <td className="p-1.5 font-bold">{p.name} ({p.sanskritName.split(' ')[0]})</td>
                      <td className="p-1.5 font-mono">{p.formattedDegree}</td>
                      <td className="p-1.5">{p.signName}</td>
                      <td className="p-1.5 font-bold">H{p.house}</td>
                      <td className="p-1.5">{p.nakshatraName}</td>
                      <td className="p-1.5">{p.pada}</td>
                      <td className="p-1.5">{p.isRetrograde ? 'Vakri (R)' : 'Marga'}</td>
                      <td className="p-1.5 font-semibold text-amber-900">{p.dignity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Yogas & Dosha Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
              <span className="font-bold text-stone-900 block font-cinzel">Prominent Natal Yogas:</span>
              <ul className="list-disc list-inside space-y-1 text-stone-700 text-[11px]">
                {kundali.yogas.slice(0, 4).map((y, i) => (
                  <li key={i}><strong>{y.name}:</strong> {y.effects}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
              <span className="font-bold text-stone-900 block font-cinzel">Dosha & Sade Sati Status:</span>
              <div className="text-[11px] text-stone-700 space-y-1">
                <div><strong>Mangal Dosha:</strong> {kundali.mangalDosha.hasDosha ? `Manglik (${kundali.mangalDosha.severity})` : 'Non-Manglik'}</div>
                <div><strong>Kalasarpa Yoga:</strong> {kundali.kalasarpa.hasYoga ? kundali.kalasarpa.type : 'None'}</div>
                <div><strong>Shani Sade Sati:</strong> {kundali.sadeSati.status}</div>
                <div><strong>Life Gemstone:</strong> {kundali.gemstones.lifeStone.gem} ({kundali.gemstones.lifeStone.metal})</div>
              </div>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="pt-3 border-t border-stone-200 text-center text-[10px] text-stone-500">
            Mahadarshan Vedic Jyotish Platform · Traditional Jyotish Shastra interpretations are philosophical archetypes for spiritual guidance.
          </div>

        </div>

      </div>
    </div>
  );
};
