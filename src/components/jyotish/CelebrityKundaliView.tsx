import React from 'react';
import { Award, User, Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { BirthProfile } from '../../data/vedicJyotishEngine';

interface CelebrityKundaliViewProps {
  onLoadProfile: (profile: BirthProfile) => void;
  onNavigateToKundali: () => void;
}

export interface CelebrityEntry {
  id: string;
  name: string;
  title: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  lat: number;
  lng: number;
  lagnaSign: string;
  moonSign: string;
  description: string;
  keyYogas: string[];
}

export const celebrityList: CelebrityEntry[] = [
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    title: 'Father of the Nation & Apostle of Non-Violence',
    birthDate: '1869-10-02',
    birthTime: '07:11',
    birthCity: 'Porbandar',
    birthCountry: 'India',
    lat: 21.6417,
    lng: 69.6293,
    lagnaSign: 'Libra (Tula)',
    moonSign: 'Leo (Simha)',
    description: 'Libra Ascendant with powerful Venus and Mars in the 1st house, Jupiter in the 7th forming Hamsa-like auspicious aspects, and exalted Saturn in the 1st house giving profound moral endurance.',
    keyYogas: ['Malavya Yoga', 'Ruchaka Yoga', 'Sasa Yoga (Exalted Saturn in 1st)']
  },
  {
    id: 'vivekananda',
    name: 'Swami Vivekananda',
    title: 'Spiritual Visionary & Vedantic Master',
    birthDate: '1863-01-12',
    birthTime: '06:33',
    birthCity: 'Kolkata',
    birthCountry: 'India',
    lat: 22.5726,
    lng: 88.3639,
    lagnaSign: 'Sagittarius (Dhanu)',
    moonSign: 'Virgo (Kanya)',
    description: 'Sagittarius Lagna with lord Jupiter in the 11th house aspecting Sun and Moon. Mars in the 5th house in Aries and Ketu in the 12th house yielded unparalleled spiritual eloquence and renunciation.',
    keyYogas: ['Sun-Mercury Budhaditya Yoga', 'Pravrajya Sanyasa Yoga', 'Dharma-Karmadhipati Yoga']
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    title: 'Theoretical Physicist & Nobel Laureate',
    birthDate: '1879-03-14',
    birthTime: '11:30',
    birthCity: 'Ulm',
    birthCountry: 'Germany',
    lat: 48.4011,
    lng: 9.9876,
    lagnaSign: 'Gemini (Mithuna)',
    moonSign: 'Scorpio (Vrishchika)',
    description: 'Gemini Lagna with a powerful conjunction of Sun, Mercury, Saturn, and Venus in the 10th house (Pisces), generating extraordinary scientific intuition and revolutionary conceptual physics.',
    keyYogas: ['Neechabhanga Raja Yoga', 'Budhaditya Yoga', 'Amala Yoga']
  },
  {
    id: 'tagore',
    name: 'Rabindranath Tagore',
    title: 'Poet, Philosopher & Nobel Laureate',
    birthDate: '1861-05-07',
    birthTime: '04:02',
    birthCity: 'Kolkata',
    birthCountry: 'India',
    lat: 22.5726,
    lng: 88.3639,
    lagnaSign: 'Pisces (Meena)',
    moonSign: 'Pisces (Meena)',
    description: 'Pisces Ascendant with Moon in the 1st house aspected by benefic Venus. Exalted Sun in the 2nd house gave immortal poetic voice and universal humanitarian reverence.',
    keyYogas: ['Gajakesari Yoga', 'Saraswati Yoga', 'Chamara Yoga']
  },
  {
    id: 'kalam',
    name: 'Dr. A.P.J. Abdul Kalam',
    title: 'Missile Pioneer & 11th President of India',
    birthDate: '1931-10-15',
    birthTime: '01:15',
    birthCity: 'Rameswaram',
    birthCountry: 'India',
    lat: 9.2876,
    lng: 79.3129,
    lagnaSign: 'Cancer (Karka)',
    moonSign: 'Scorpio (Vrishchika)',
    description: 'Cancer Lagna with exalted Jupiter in the 1st house (Hamsa Yoga) giving legendary humility, scientific devotion, and universal love across millions of citizens.',
    keyYogas: ['Hamsa Mahapurusha Yoga', 'Gajakesari Yoga', 'Amala Yoga']
  },
  {
    id: 'lata',
    name: 'Lata Mangeshkar',
    title: 'Nightingale of India & Bharat Ratna',
    birthDate: '1929-09-28',
    birthTime: '23:55',
    birthCity: 'Indore',
    birthCountry: 'India',
    lat: 22.7196,
    lng: 75.8577,
    lagnaSign: 'Gemini (Mithuna)',
    moonSign: 'Cancer (Karka)',
    description: 'Gemini Lagna with own-sign Moon in the 2nd house (speech and singing vocal cords), joined by exalted Jupiter aspects, bestowing a voice celebrated across seven decades.',
    keyYogas: ['Saraswati Yoga', 'Dhana Yoga (Own Moon in 2nd)', 'Bhadra Yoga']
  }
];

export const CelebrityKundaliView: React.FC<CelebrityKundaliViewProps> = ({
  onLoadProfile,
  onNavigateToKundali
}) => {
  const handleSelect = (celeb: CelebrityEntry) => {
    const profile: BirthProfile = {
      id: `celeb-${celeb.id}`,
      name: celeb.name,
      gender: 'other',
      birthDate: celeb.birthDate,
      birthTime: celeb.birthTime,
      birthCity: celeb.birthCity,
      birthState: '',
      birthCountry: celeb.birthCountry,
      latitude: celeb.lat,
      longitude: celeb.lng,
      elevation: 50,
      timezoneOffset: celeb.birthCountry === 'Germany' ? 1.0 : 5.5,
      timezoneName: celeb.birthCountry === 'Germany' ? 'Europe/Berlin' : 'Asia/Kolkata',
      ayanamsha: 'lahiri',
      houseSystem: 'equal',
      rahuKetuMode: 'true'
    };
    onLoadProfile(profile);
    onNavigateToKundali();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
          <Award className="w-4 h-4 text-amber-700" />
          <span>Historical Astrological Archive · Verified Birth Data</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
          Iconic Celebrity & Historical Kundalis (प्रसिद्ध हस्तियों की कुंडलियां)
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
          Study classical Vedic planetary configurations, Mahapurusha yogas, and planetary dignities of world-renowned spiritual masters, scientists, and statesmen. Click "Load Chart" to analyze their complete Janma Patrika in the interactive engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {celebrityList.map((celeb) => (
          <div key={celeb.id} className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-700 transition-colors">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold font-cinzel text-stone-900">{celeb.name}</h3>
                  <span className="text-xs text-amber-800 font-medium block">{celeb.title}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-900 font-bold text-xs">
                  {celeb.name[0]}
                </div>
              </div>

              <div className="mt-3 space-y-1.5 text-xs text-stone-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{celeb.birthDate} at {celeb.birthTime} (Exact)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>{celeb.birthCity}, {celeb.birthCountry}</span>
                </div>
                <div className="pt-1 flex items-center gap-3 text-[11px] font-semibold text-stone-800">
                  <span>Lagna: {celeb.lagnaSign.split(' ')[0]}</span>
                  <span>·</span>
                  <span>Moon: {celeb.moonSign.split(' ')[0]}</span>
                </div>
              </div>

              <p className="mt-3 text-xs text-stone-600 leading-relaxed line-clamp-3">
                {celeb.description}
              </p>

              <div className="mt-3 flex items-center flex-wrap gap-1">
                {celeb.keyYogas.map((y, idx) => (
                  <span key={idx} className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">
                    {y}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(celeb)}
              className="w-full py-2 px-3 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Load Into Interactive Kundali Platform</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
