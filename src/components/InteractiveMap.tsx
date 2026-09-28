import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  Search, 
  Navigation, 
  Video, 
  Clock, 
  CheckCircle2, 
  Heart, 
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Temple, Language, DeityType } from '../types';
import { translations } from '../i18n/translations';

interface InteractiveMapProps {
  currentLang: Language;
  temples: Temple[];
  onSelectTempleForDarshan: (temple: Temple) => void;
  onBookPuja: (temple: Temple) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  currentLang,
  temples,
  onSelectTempleForDarshan,
  onBookPuja
}) => {
  const t = translations[currentLang] || translations.en;
  
  const [activeDeityFilter, setActiveDeityFilter] = useState<DeityType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMapTemple, setSelectedMapTemple] = useState<Temple>(temples[0]);
  const [userOriginCity, setUserOriginCity] = useState('New Delhi');

  // Filtered temples
  const filtered = temples.filter(temple => {
    const matchesDeity = activeDeityFilter === 'all' || temple.deityType === activeDeityFilter;
    const matchesSearch = 
      temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.hindiName.includes(searchQuery) ||
      temple.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      temple.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDeity && matchesSearch;
  });

  // Calculate approximate distance from origin city
  const getApproxDistance = (t: Temple) => {
    // Basic coordinate distance formula approximation
    const originLat = userOriginCity === 'New Delhi' ? 28.61 : userOriginCity === 'Mumbai' ? 19.07 : 12.97;
    const originLng = userOriginCity === 'New Delhi' ? 77.20 : userOriginCity === 'Mumbai' ? 72.87 : 77.59;
    
    const dLat = (t.lat - originLat) * 111;
    const dLng = (t.lng - originLng) * 105;
    const dist = Math.round(Math.sqrt(dLat * dLat + dLng * dLng));
    return `${dist} km`;
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Filter Controls */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Compass className="w-4 h-4" />
              <span>Sacred Bharat Pilgrim Map (तीर्थ मानचित्र)</span>
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-stone-900 mt-1">
              Interactive Map of Sacred Shrines & Jyotirlingas
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Explore revered temples across North, South, East, and West India with live darshan access and pilgrimage routes
            </p>
          </div>

          {/* Search Input & Origin City for Distance */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shrine, city, state..."
                className="pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 w-48"
              />
            </div>

            <div className="flex items-center gap-1 text-xs text-stone-600 bg-stone-100 px-2.5 py-1.5 rounded-lg border border-stone-200">
              <Navigation className="w-3.5 h-3.5 text-amber-800" />
              <span className="text-[11px]">From:</span>
              <select
                value={userOriginCity}
                onChange={(e) => setUserOriginCity(e.target.value)}
                className="font-semibold text-stone-800 bg-transparent focus:outline-none cursor-pointer text-xs"
              >
                <option value="New Delhi">New Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Varanasi">Varanasi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Deity Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-4 border-t border-stone-100">
          {[
            { id: 'all', label: 'All Sacred Temples' },
            { id: 'shiva', label: 'Shiva / Jyotirlingas' },
            { id: 'vishnu', label: 'Vishnu / Balaji' },
            { id: 'rama', label: 'Ayodhya Ram Mandir' },
            { id: 'krishna', label: 'Krishna / Jagannath' },
            { id: 'devi', label: 'Mata Shaktipeeth' },
            { id: 'ganesha', label: 'Siddhivinayak Ganesha' },
            { id: 'sikh', label: 'Sachkhand Gurudwara' },
            { id: 'jain', label: 'Jain Tirthankar' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveDeityFilter(item.id as DeityType)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeDeityFilter === item.id
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map + Temple Spotlight Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Interactive Stylized Sacred Map of India (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Bharatvarsha Sacred Geography (अखिल भारतीय तीर्थ)
            </span>
            <span className="text-xs text-stone-500 tabular-nums">
              {filtered.length} shrines located
            </span>
          </div>

          {/* SVG Map Canvas with Interactive Pinned Temples */}
          <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-amber-50/50 via-stone-50 to-amber-50/30 rounded-xl border border-amber-900/10 p-4 flex items-center justify-center overflow-hidden">
            
            {/* Subtle River & Geographic Outlines SVG */}
            <svg viewBox="0 0 500 600" className="w-full h-full opacity-60">
              {/* Himalaya Mountain Arc */}
              <path d="M 120 70 Q 250 40 400 90" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" />
              <text x="230" y="55" className="text-[10px] fill-stone-400 font-serif font-bold">HIMAVAN (HIMALAYAS)</text>
              
              {/* Ganga River Path */}
              <path d="M 210 110 Q 260 170 330 190 T 430 220" fill="none" stroke="#60a5fa" strokeWidth="2" />
              <text x="270" y="175" className="text-[9px] fill-blue-500 font-serif">Ganga River</text>

              {/* Narmada River Path */}
              <path d="M 260 270 Q 200 280 150 280" fill="none" stroke="#93c5fd" strokeWidth="1.5" />

              {/* Godavari & Krishna */}
              <path d="M 180 340 Q 250 360 320 370" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
              <path d="M 190 400 Q 250 420 310 430" fill="none" stroke="#93c5fd" strokeWidth="1.5" />

              {/* Indian Coastline Abstract Contours */}
              <path
                d="M 140 100 L 190 70 L 260 85 L 340 105 L 420 120 L 440 170 L 410 240 L 340 380 L 270 540 L 210 450 L 160 330 L 120 280 L 130 210 Z"
                fill="rgba(245, 158, 11, 0.04)"
                stroke="#d6d3d1"
                strokeWidth="1.5"
              />
            </svg>

            {/* Pinned Temples across Coordinates scaled to SVG */}
            {filtered.map((temple) => {
              // Convert lat/lng to normalized percentages for India coordinates
              // India bounding approx: Lat 8 to 35, Lng 68 to 96
              const topPercent = ((35 - temple.lat) / (35 - 8)) * 84 + 8;
              const leftPercent = ((temple.lng - 68) / (96 - 68)) * 82 + 9;
              const isSelected = selectedMapTemple.id === temple.id;

              return (
                <button
                  key={temple.id}
                  onClick={() => setSelectedMapTemple(temple)}
                  style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer transition-transform hover:scale-125`}
                  title={`${temple.name} - ${temple.city}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 transition-all ${
                      isSelected
                        ? 'bg-red-600 text-white border-white scale-125 ring-4 ring-red-300'
                        : 'bg-amber-800 text-amber-100 border-amber-200 hover:bg-amber-900'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>

                  {/* Shrine Tooltip on Map */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap pointer-events-none shadow-md transition-opacity ${
                      isSelected
                        ? 'bg-amber-950 text-white opacity-100'
                        : 'bg-white text-stone-800 border border-stone-200 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {temple.name.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-stone-500">
            <span>Tip: Click any pin on the map to inspect shrine history and route</span>
            <span className="text-amber-800 font-semibold">100% Authentic Coordinates</span>
          </div>
        </div>

        {/* Selected Temple Spotlight Card (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                {selectedMapTemple.deity}
              </span>
              <span className="text-xs font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                Distance: ~{getApproxDistance(selectedMapTemple)}
              </span>
            </div>

            <h3 className="text-xl font-cinzel font-bold text-stone-900 mt-1">
              {selectedMapTemple.name}
            </h3>
            <p className="text-xs font-medium text-amber-900 mt-0.5">
              {selectedMapTemple.hindiName}
            </p>
            <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>{selectedMapTemple.location}</span>
            </p>

            <div className="mt-4 pt-4 border-t border-stone-100 space-y-3">
              <div>
                <span className="text-xs font-semibold text-stone-700 block mb-1">
                  Sacred Significance:
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {selectedMapTemple.significance}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-700 block mb-1">
                  Historical Background:
                </span>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {selectedMapTemple.history}
                </p>
              </div>

              <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1.5 text-xs text-stone-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-amber-950">Darshan Timings:</span>
                  <span className="font-medium text-stone-900">{selectedMapTemple.darshanHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-amber-950">Nearest Hub:</span>
                  <span className="font-medium text-stone-900">{selectedMapTemple.city} Jn / Airport</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-stone-100 space-y-2">
            <button
              onClick={() => onSelectTempleForDarshan(selectedMapTemple)}
              className="w-full py-2.5 px-4 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <Video className="w-4 h-4" />
              <span>Watch 24/7 Live Sanctum Darshan</span>
            </button>

            <button
              onClick={() => onBookPuja(selectedMapTemple)}
              className="w-full py-2 px-4 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Special Puja & Archana</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
