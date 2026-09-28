import React, { useState } from 'react';
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
  Search, 
  ArrowRight,
  BookOpen,
  Calendar,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { JyotishViewId, JyotishToolMeta } from './JyotishTypes';
import { Language } from '../../types';

interface JyotishMainHubProps {
  onSelectTool: (id: JyotishViewId) => void;
  currentLang?: Language;
}

export const jyotishDirectoryTools: JyotishToolMeta[] = [
  {
    id: 'janma-kundali',
    title: 'Janma Kundali (Birth Chart)',
    hindiTitle: 'जन्म कुंडली एवं पत्रिका',
    gujaratiTitle: 'જન્મ કુંડળી',
    category: 'kundali',
    description: 'Complete natal horoscope with D1 Rashi, D9 Navamsha, 16 Divisional Vargas, planetary longitudes, 12 Bhavas, and life predictions.',
    iconName: 'Compass',
    badge: 'Popular'
  },
  {
    id: 'kundali-matching',
    title: 'Kundali Matching (Guna Milan)',
    hindiTitle: 'कुंडली मिलान (36 गुण)',
    gujaratiTitle: 'ગુણ મિલાન',
    category: 'kundali',
    description: 'Vedic Ashta Kuta compatibility analysis (36 points) for bride and groom with independent Mangal Dosha evaluation.',
    iconName: 'Heart',
    badge: 'Essential'
  },
  {
    id: 'rashi',
    title: 'Rashi Calculator (Moon Sign)',
    hindiTitle: 'जन्म राशि गणना',
    gujaratiTitle: 'જન્મ રાશિ',
    category: 'calculators',
    description: 'Calculate your true Sidereal Janma Rashi, Moon degree, governing elemental qualities, and lunar emotional temperament.',
    iconName: 'Moon'
  },
  {
    id: 'nakshatra',
    title: 'Nakshatra & Pada Calculator',
    hindiTitle: 'जन्म नक्षत्र एवं पद',
    gujaratiTitle: 'નક્ષત્ર',
    category: 'calculators',
    description: 'Determine your birth star from 27 Nakshatras and 108 Padas with sacred deity, symbol, and Namakarana naming syllables.',
    iconName: 'Sparkles'
  },
  {
    id: 'lagna',
    title: 'Lagna (Ascendant) Calculator',
    hindiTitle: 'लग्न चक्र गणना',
    gujaratiTitle: 'લગ્ન',
    category: 'calculators',
    description: 'Identify your rising eastern horizon sign, exact degree, and Local Sidereal Time governing physical constitution.',
    iconName: 'Compass'
  },
  {
    id: 'surya-rashi',
    title: 'Surya Rashi (Vedic Sun Sign)',
    hindiTitle: 'सूर्य राशि गणना',
    gujaratiTitle: 'સૂર્ય રાશિ',
    category: 'calculators',
    description: 'Calculate your Sidereal Vedic Sun Sign and solar vitality without Western tropical distortion.',
    iconName: 'Sun'
  },
  {
    id: 'mangal-dosha',
    title: 'Mangal Dosha / Kuja Dosha',
    hindiTitle: 'मंगल दोष विचार',
    gujaratiTitle: 'મંગળ દોષ',
    category: 'dosha',
    description: 'Comprehensive Mars placement check from Lagna, Moon, and Venus with Parashara cancellation rules and remedies.',
    iconName: 'Flame'
  },
  {
    id: 'kalasarpa-yoga',
    title: 'Kalasarpa Yoga Calculator',
    hindiTitle: 'कालसर्प योग विश्लेषण',
    gujaratiTitle: 'કાલસર્પ યોગ',
    category: 'dosha',
    description: 'Check 12 classical serpent types formed across the Rahu-Ketu axis (Ananta to Sheshanaga) with complete vs anshik analysis.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'sade-sati',
    title: 'Shani Sade Sati & Dhaiya',
    hindiTitle: 'शनि साढ़े साती एवं ढैय्या',
    gujaratiTitle: 'શનિ સાડેસાતી',
    category: 'dosha',
    description: 'Chronological timeline of Saturn\'s 7.5-year transit through Rising, Peak, and Setting phases relative to your natal Moon.',
    iconName: 'Clock'
  },
  {
    id: 'dasha',
    title: 'Vimshottari Dasha Timeline',
    hindiTitle: 'विंशोत्तरी महादशा एवं अंतर्दशा',
    gujaratiTitle: 'દશા',
    category: 'astronomy',
    description: '120-year planetary cycle timeline showing active Mahadasha, Antardashas, dates, durations, and karmic tendencies.',
    iconName: 'Clock'
  },
  {
    id: 'ashtakavarga',
    title: 'Ashtakavarga (SAV & BAV)',
    hindiTitle: 'अष्टकवर्ग (337 बिंदु)',
    gujaratiTitle: 'અષ્ટકવર્ગ',
    category: 'astronomy',
    description: '337 benefic bindu matrix across 12 signs, planetary contributions for all 7 classical planets, and house strength totals.',
    iconName: 'Grid'
  },
  {
    id: 'shadbala',
    title: 'Shadbala & Bhavabala',
    hindiTitle: 'षडबल एवं भावबल',
    gujaratiTitle: 'ષડબળ',
    category: 'astronomy',
    description: 'Six-fold planetary potency (Sthana, Dig, Kaala, Cheshta, Naisargika, Drik) and 12-house strength scores.',
    iconName: 'BarChart2'
  },
  {
    id: 'upagraha',
    title: 'Upagrahas (11 Shadow Planets)',
    hindiTitle: 'उपग्रह गणना (गुलिक, मांदि)',
    gujaratiTitle: 'ઉપગ્રહ',
    category: 'astronomy',
    description: 'Mathematical positions of traditional subtle non-luminous asterisms including Gulika, Mandi, Kaala, and Mrityu.',
    iconName: 'Layers'
  },
  {
    id: 'gemstone',
    title: 'Gemstone (Ratna) Calculator',
    hindiTitle: 'वैदिक रत्न परामर्श',
    gujaratiTitle: 'રત્ન પરામર્શ',
    category: 'remedies',
    description: 'Personalized recommendations for Life Stone, Lucky Stone, and Bhagya Stone with metals, fingers, and testing cautions.',
    iconName: 'Gem'
  },
  {
    id: 'rudraksha',
    title: 'Rudraksha Recommendation',
    hindiTitle: 'रुद्राक्ष परामर्श',
    gujaratiTitle: 'રુદ્રાક્ષ પરામર્શ',
    category: 'remedies',
    description: 'Identify auspicious 1 to 14 Mukhi sacred beads attuned to your birth chart and planetary ruling deities.',
    iconName: 'Award'
  },
  {
    id: 'baby-names',
    title: 'Baby Names by Nakshatra',
    hindiTitle: 'नक्षत्र अनुसार नामकरण',
    gujaratiTitle: 'બાળકના નામ',
    category: 'calculators',
    description: 'Sacred Sanskrit, Hindi, and Indian baby names derived strictly from birth Moon Nakshatra and Pada Swar syllables.',
    iconName: 'Sparkles'
  },
  {
    id: 'pancha-pakshi',
    title: 'Pancha Pakshi Shastra',
    hindiTitle: 'पंच पक्षी शास्त्र',
    gujaratiTitle: 'પંચ પક્ષી',
    category: 'calculators',
    description: 'Tamil Siddha tradition calculating your cosmic birth bird and daily biorhythms: Ruling, Eating, Walking, Sleeping, Dying.',
    iconName: 'Sparkles'
  },
  {
    id: 'prashna',
    title: 'Prashna Kundali (Horary Chart)',
    hindiTitle: 'प्रश्न कुंडली',
    gujaratiTitle: 'પ્રશ્ન કુંડળી',
    category: 'calculators',
    description: 'Cast a real-time astrological chart for the exact moment a question is contemplated to divine immediate guidance.',
    iconName: 'Clock'
  },
  {
    id: 'sahasra-chandra',
    title: 'Sahasra Chandra Darshan',
    hindiTitle: 'सहस्र चंद्र दर्शन',
    gujaratiTitle: 'સહસ્ર ચંદ્ર દર્શન',
    category: 'calculators',
    description: 'Calculate the sacred milestone of witnessing 1,000 full moons in earthly life (approx. 80.8 years) with Shanti vidhi.',
    iconName: 'Moon'
  },
  {
    id: 'vedic-time',
    title: 'Vedic Time & Ishtakala',
    hindiTitle: 'वैदिक समय एवं इष्टकाल',
    gujaratiTitle: 'વૈદિક સમય',
    category: 'astronomy',
    description: 'Convert modern time into traditional Ghati, Vighati, Pal, Vela, and sunrise offsets.',
    iconName: 'Clock'
  },
  {
    id: 'shraddha-tithi',
    title: 'Shraddha Tithi Calculator',
    hindiTitle: 'श्राद्ध तिथि गणना',
    gujaratiTitle: 'શ્રાદ્ધ તિથિ',
    category: 'calculators',
    description: 'Calculate accurate lunar Tithi for annual ancestral remembrance (Varshik Shraddha) and Pitru Paksha.',
    iconName: 'Calendar'
  },
  {
    id: 'rashifal',
    title: 'Rashifal (Horoscope)',
    hindiTitle: 'दैनिक एवं मासिक राशिफल',
    gujaratiTitle: 'રાશિફળ',
    category: 'calculators',
    description: 'Daily, Weekly, Monthly, and Yearly predictions for all 12 Rashis rooted in planetary transits (Gochar).',
    iconName: 'Moon'
  },
  {
    id: 'saved-kundalis',
    title: 'Saved Profiles Vault',
    hindiTitle: 'सहेजी गई कुंडलियां',
    gujaratiTitle: 'સેવ કરેલી કુંડળી',
    category: 'kundali',
    description: 'Manage family horoscopes with local browser storage, rename, duplicate, and export capabilities.',
    iconName: 'Users'
  },
  {
    id: 'celebrities',
    title: 'Iconic Celebrity Charts',
    hindiTitle: 'प्रसिद्ध हस्तियों की कुंडलियां',
    gujaratiTitle: 'સેલિબ્રિટી કુંડળી',
    category: 'kundali',
    description: 'Explore verified birth charts of historical giants like Mahatma Gandhi, Swami Vivekananda, and Albert Einstein.',
    iconName: 'Award'
  }
];

export const JyotishMainHub: React.FC<JyotishMainHubProps> = ({
  onSelectTool,
  currentLang = 'en'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTools = jyotishDirectoryTools.filter(t => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch = !searchQuery.trim() || 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-r from-amber-50 via-[#fcf9f2] to-orange-50 border border-amber-900/15 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Mahadarshan Vedic Jyotish & Kundali Platform</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-950 mt-1.5 leading-tight">
            Vedic Astrology & Kundali (वैदिक ज्योतिष एवं कुंडली महापीठ)
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
            A comprehensive, astronomically precise Vedic Jyotish repository. Calculate Janma Patrika, 16 Divisional Vargas, Ashta Kuta Guna Milan, Vimshottari Dasha, Ashtakavarga, Shadbala, and 20+ specialized Vedic astrology utilities governed by classical Parashara principles.
          </p>

          {/* Quick Search & Category Filters */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search calculators (e.g. Kundali, Mangal Dosha, Dasha, Gemstone, Nakshatra)..."
                className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 shadow-2xs font-medium text-stone-900"
              />
            </div>

            <button
              onClick={() => onSelectTool('janma-kundali')}
              className="px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Open My Birth Chart (कुंडली खोलें)</span>
            </button>
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="mt-5 pt-4 border-t border-amber-900/10 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'all', label: `All Tools (${jyotishDirectoryTools.length})` },
            { id: 'kundali', label: 'Janma Kundali & Matching' },
            { id: 'calculators', label: 'Core Calculators' },
            { id: 'dosha', label: 'Doshas & Yogas' },
            { id: 'astronomy', label: 'Dasha & Planetary Strengths' },
            { id: 'remedies', label: 'Vedic Remedies' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-stone-700 border border-stone-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tools & Calculators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className="bg-white border border-stone-200/90 hover:border-amber-700/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 group relative"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 font-cinzel text-base group-hover:text-amber-900 transition-colors">
                    {tool.title}
                  </h3>
                  <span className="text-xs text-amber-800 font-medium block mt-0.5">
                    {tool.hindiTitle}
                  </span>
                </div>

                {tool.badge && (
                  <span className="text-[10px] uppercase font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md">
                    {tool.badge}
                  </span>
                )}
              </div>

              <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-3">
                {tool.description}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-900 group-hover:translate-x-0.5 transition-transform">
              <span>Open Calculator & Detail Page</span>
              <ArrowRight className="w-4 h-4 text-amber-700" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
