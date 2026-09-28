import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  Sparkles, 
  Clock, 
  Share2, 
  Printer, 
  MapPin, 
  Sun, 
  Moon, 
  BookOpen, 
  Layers, 
  Grid, 
  List, 
  Flame, 
  ArrowRight, 
  Globe, 
  Check, 
  CheckCircle2, 
  Info, 
  Star, 
  Copy,
  ExternalLink,
  HelpCircle,
  ShieldCheck,
  CalendarDays,
  Compass
} from 'lucide-react';
import { CityData } from '../types';
import { 
  CalendarDefinition, 
  yearlyCalendarsCatalog, 
  festivalCalendarsCatalog 
} from '../data/calendarEngine';
import { 
  yearlyCalendarDeepDives, 
  festivalSpecialDeepDives,
  CalendarDeepDiveData,
  FestivalSpecialCalendarData
} from '../data/calendarDetailData';

interface CalendarDetailPageProps {
  calendarId: string;
  selectedYear: number;
  currentCity: CityData;
  onSelectYear: (year: number) => void;
  onOpenCityModal: () => void;
  onNavigateToCalendarGrid: (calendarId: string, monthIdx?: number) => void;
  onNavigateToCalendarTable: (calendarId: string, monthIdx?: number) => void;
  onNavigateToHub: () => void;
  onSelectCalendar: (calendarId: string) => void;
  onOpenEventModal?: (eventName: string) => void;
}

export const CalendarDetailPage: React.FC<CalendarDetailPageProps> = ({
  calendarId,
  selectedYear,
  currentCity,
  onSelectYear,
  onOpenCityModal,
  onNavigateToCalendarGrid,
  onNavigateToCalendarTable,
  onNavigateToHub,
  onSelectCalendar
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'astronomy' | 'months' | 'festivals' | 'rules' | 'faqs'>('overview');
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // Check if calendar is a yearly calendar or a festival special calendar
  const yearlyDef = useMemo(() => {
    return yearlyCalendarsCatalog.find(c => c.id === calendarId);
  }, [calendarId]);

  const festivalDef = useMemo(() => {
    return festivalCalendarsCatalog.find(f => f.id === calendarId);
  }, [calendarId]);

  const yearlyDeepDive: CalendarDeepDiveData | undefined = useMemo(() => {
    if (yearlyCalendarDeepDives[calendarId]) return yearlyCalendarDeepDives[calendarId];
    if (yearlyDef) {
      // Fallback synthesizer using yearlyDef
      return {
        id: yearlyDef.id,
        slug: yearlyDef.slug,
        name: yearlyDef.name,
        nativeName: yearlyDef.nativeName,
        title: yearlyDef.title,
        tagline: yearlyDef.description,
        heroBadge: `${yearlyDef.eraName} (${yearlyDef.currentYear}) • ${yearlyDef.calendarType.toUpperCase()}`,
        region: yearlyDef.region,
        language: yearlyDef.language,
        eraName: yearlyDef.eraName,
        currentYear: yearlyDef.currentYear,
        calculationType: yearlyDef.calendarType.replace('-', ' ').toUpperCase(),
        epochStart: 'Ancient Vedic Era',
        rulingDeities: ['Surya Narayana', 'Lord Ganesha', 'Bhagwan Vishnu', 'Lord Shiva'],
        bannerImageTheme: 'amber',
        historyAndOrigin: {
          founderOrKing: yearlyDef.eraName,
          historicalEra: 'Rooted in ancient Sanskrit astronomy and regional temple traditions',
          narrative: yearlyDef.explanation.overview,
          puranicReferences: ['Surya Siddhanta', 'Vedanga Jyotisha', 'Brihat Samhita']
        },
        astronomicalCalculation: {
          systemName: 'Siddhantic Astronomical Canon',
          solarOrLunar: yearlyDef.calendarType.includes('solar') ? 'Sidereal Solar' : 'Lunisolar',
          monthStartRule: yearlyDef.explanation.monthSystem,
          dayStartRule: 'Sunrise to Sunrise (Udaya Tithi)',
          intercalaryRule: 'Adhika Masa intercalation every 32.5 months to preserve seasonal harmony.',
          equinoxRule: 'Harmonized with sidereal zodiac (Nirayana Rasis).',
          corePrinciples: yearlyDef.explanation.specialRules
        },
        monthsBreakdown: yearlyDef.months.map((m, idx) => ({
          monthNumber: idx + 1,
          name: m.name,
          nativeName: m.nativeName,
          gregorianSpan: m.approxSpan,
          seasonRitu: 'Vedic Ritu',
          seasonRituHindi: 'वैदिक ऋतु',
          presidingDeity: 'Presiding Deity of Masa',
          significance: `Sacred month of ${m.name} marking regional festivities and vrats.`,
          keyFestivals: yearlyDef.keyFestivals.slice(0, 2)
        })),
        specialRules: yearlyDef.explanation.specialRules.map((rule, idx) => ({
          title: `Shastric Rule ${idx + 1}`,
          rule: rule,
          shastraBasis: 'Regional Siddhantic Tradition'
        })),
        culturalSignificance: {
          dailyLifeRole: `Dictates daily tithis, fasts, marriage muhurats, and agricultural seasons in ${yearlyDef.region}.`,
          templesGoverned: ['Principal regional temples & shrines'],
          culinaryAndAgrarianTraditions: ['Traditional fasting delicacies and harvest preparations.']
        },
        faqs: [
          {
            question: `How is the ${yearlyDef.name} calculated?`,
            answer: yearlyDef.explanation.calculationBasis
          },
          {
            question: `What makes this calendar unique compared to the Gregorian calendar?`,
            answer: yearlyDef.explanation.differencesFromGregorian
          },
          {
            question: `Which regions and communities observe this calendar?`,
            answer: yearlyDef.explanation.regionalContext
          }
        ]
      };
    }
    return undefined;
  }, [calendarId, yearlyDef]);

  const festivalDeepDive: FestivalSpecialCalendarData | undefined = useMemo(() => {
    if (festivalSpecialDeepDives[calendarId]) return festivalSpecialDeepDives[calendarId];
    if (festivalDef) {
      return {
        id: festivalDef.id,
        slug: festivalDef.slug,
        name: festivalDef.name,
        nativeName: festivalDef.nativeName,
        title: `${festivalDef.name} - Complete Calendar & Puja Vidhi`,
        subtitle: festivalDef.description,
        category: (festivalDef.category as 'festival' | 'vrat' | 'special') || 'festival',
        duration: festivalDef.eventsCount,
        presidingDeity: 'Sanatana Devata',
        themeColor: 'amber',
        overview: festivalDef.description,
        scripturalOrigin: 'Ancient Puranas and Vedic texts prescribe these observances for spiritual upliftment and family prosperity.',
        itinerary: festivalDef.keyDates.map((kd, idx) => ({
          dayNumber: idx + 1,
          dayTitle: kd,
          nativeDayTitle: `${kd} (पवित्र अनुष्ठान)`,
          tithiAndTiming: `Sacred Tithi (Day ${idx + 1})`,
          approx2026Date: `Festival Season ${selectedYear}`,
          rituals: ['Take holy bath, clean puja altar, light pure ghee diya, chant sacred stotras, offer bhog.'],
          offeringsAndPrasad: 'Panchamrit, seasonal fruits, sweets, kheer',
          significance: `Significance and spiritual merit of observing ${kd}.`
        })),
        pujaVidhi: [
          { stepNumber: 1, title: 'Altar Preparation & Cleansing', description: 'Clean the sacred space, apply Ganga jal, spread clean cloth, and place idols facing East.' },
          { stepNumber: 2, title: 'Deep Prajvalan & Sankalpa', description: 'Light earthen lamps with cow ghee, take holy water in palm and make sacred resolve (Sankalpa).' },
          { stepNumber: 3, title: 'Panchopachara Worship', description: 'Offer Gandha (sandalwood), Pushpa (flowers), Dhoopa (incense), Deepa (lamp), and Naivedya (prasad).' },
          { stepNumber: 4, title: 'Aarti & Kshamapana', description: 'Perform Aarti, sing devotional hymns, distribute prasad, and seek forgiveness for inadvertent errors.' }
        ],
        sacredMantras: [
          {
            mantraName: 'Universal Mangala Mantra',
            sanskritText: 'ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥',
            englishTransliteration: 'Om Sarve Bhavantu Sukhinah, Sarve Santu Niramayah, Sarve Bhadrani Pashyantu, Ma Kashchid-Dukha-Bhag-Bhavet.',
            meaning: 'May all beings be joyful and happy. May all be free from illness. May all behold auspiciousness. May none suffer.'
          }
        ],
        fastingRules: {
          rules: ['Maintain celibacy and truthfulness.', 'Avoid salt or consume rock salt (Sendha Namak) only.', 'Perform Parana at prescribed time.'],
          allowedFoods: ['Fruits, milk, nuts, Farali items.'],
          prohibitedFoods: ['Grains, lentils, non-veg, onion, garlic.'],
          paranaTimingRule: 'Break fast after morning puja on the concluding tithi.'
        },
        dosAndDonts: {
          dos: ['Wake up in Brahma Muhurat.', 'Offer charity to the needy.', 'Keep lamps burning continuously.'],
          donts: ['Do not speak ill of anyone.', 'Do not sleep during daytime.', 'Avoid anger and disputes.']
        },
        regionalTraditions: [
          { region: 'Pan-India', customs: 'Celebrated across all states with regional variations in prasad, folk songs, and community gatherings.' }
        ],
        faqs: [
          {
            question: `What is the spiritual significance of ${festivalDef.name}?`,
            answer: festivalDef.description
          },
          {
            question: `How should devotees prepare for this observance?`,
            answer: 'Clean the home, maintain sattvic diet for days preceding the observance, procure pure puja ingredients, and follow scriptural injunctions.'
          }
        ]
      };
    }
    return undefined;
  }, [calendarId, festivalDef, selectedYear]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // If this is a Yearly Calendar Deep Dive
  if (yearlyDeepDive) {
    return (
      <div className="space-y-6 animate-fade-in text-stone-900">
        
        {/* Toast */}
        {copiedNotification && (
          <div className="fixed bottom-6 right-6 z-50 bg-stone-950 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/50 flex items-center gap-2.5 text-xs font-bold animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Link copied to clipboard!</span>
          </div>
        )}

        {/* ========================================================= */}
        {/* 1. TOP BREADCRUMB & CONTROLS STRIP                         */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-stone-200 shadow-xs">
          
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <button
              onClick={onNavigateToHub}
              className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Grid className="w-3.5 h-3.5 text-amber-700" />
              <span>All Calendars Directory</span>
            </button>
            <span className="text-stone-300">/</span>
            <span className="font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
              {yearlyDeepDive.name}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap self-end sm:self-auto">
            {/* Quick Calendar Switcher */}
            <select
              value={calendarId}
              onChange={(e) => onSelectCalendar(e.target.value)}
              className="bg-stone-50 border border-stone-300 rounded-xl px-3 py-1.5 text-xs font-bold text-stone-800 cursor-pointer focus:outline-none focus:border-amber-600 max-w-[200px]"
            >
              <optgroup label="Yearly Calendars">
                {yearlyCalendarsCatalog.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </optgroup>
              <optgroup label="Dedicated Festival Calendars">
                {festivalCalendarsCatalog.map(f => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </optgroup>
            </select>

            {/* City Selector */}
            <button
              onClick={onOpenCityModal}
              className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              title="Change City"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{currentCity.name}</span>
            </button>

            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => onSelectYear(Number(e.target.value))}
              className="bg-amber-900 text-white font-mono font-bold text-xs px-2.5 py-1.5 rounded-xl border border-amber-800 cursor-pointer"
            >
              {[2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030].map(y => (
                <option key={y} value={y} className="bg-white text-stone-900 font-sans">{y} CE</option>
              ))}
            </select>

            {/* Share & Print */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
              title="Share Page"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
              title="Print Page"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 2. MAJESTIC SACRED HERO BANNER                            */}
        {/* ========================================================= */}
        <div className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-500/30">
          
          {/* Subtle sacred ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{yearlyDeepDive.heroBadge}</span>
              </div>

              {/* Native Name Headline */}
              <div className="text-amber-300 text-xl sm:text-2xl font-bold font-serif tracking-wide">
                {yearlyDeepDive.nativeName}
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-amber-100 tracking-wide leading-tight">
                {selectedYear} {yearlyDeepDive.name}
              </h1>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                {yearlyDeepDive.tagline} Dynamically calculated according to Vedic astronomy & local solar coordinates for <strong className="text-amber-300">{currentCity.name}, {currentCity.state}</strong>.
              </p>

              {/* Key Attributes Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-black/40 border border-amber-500/30 text-amber-200">
                  Era: <strong>{yearlyDeepDive.eraName} ({yearlyDeepDive.currentYear})</strong>
                </span>
                <span className="px-3 py-1 rounded-xl bg-black/40 border border-amber-500/30 text-amber-200">
                  Region: <strong>{yearlyDeepDive.region}</strong>
                </span>
                <span className="px-3 py-1 rounded-xl bg-black/40 border border-amber-500/30 text-amber-200">
                  Type: <strong>{yearlyDeepDive.calculationType}</strong>
                </span>
                <span className="px-3 py-1 rounded-xl bg-black/40 border border-amber-500/30 text-amber-200">
                  Language: <strong>{yearlyDeepDive.language}</strong>
                </span>
              </div>

            </div>

            {/* Direct Launch Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigateToCalendarGrid(calendarId)}
                className="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold rounded-2xl text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-102"
              >
                <Grid className="w-4 h-4" />
                <span>Open Month Grid (मासिक ग्रिड)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToCalendarTable(calendarId)}
                className="px-5 py-3 bg-stone-900/80 hover:bg-stone-800 text-amber-200 border border-amber-400/40 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <List className="w-4 h-4 text-amber-400" />
                <span>Daily Ephemeris Table (सारणी)</span>
              </button>

              <button
                onClick={onNavigateToHub}
                className="px-5 py-2.5 bg-black/40 hover:bg-black/60 text-stone-300 rounded-2xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-stone-400" />
                <span>Browse All 14 Calendars</span>
              </button>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. MULTI-TAB DETAILED NAVIGATION BAR                      */}
        {/* ========================================================= */}
        <div className="bg-white p-2 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-1.5 overflow-x-auto text-xs font-bold">
          {[
            { id: 'overview', label: '1. Overview & Genesis (परिचय एवं इतिहास)', icon: BookOpen },
            { id: 'astronomy', label: '2. Astronomical Basis (खगोलीय गणना)', icon: Moon },
            { id: 'months', label: '3. 12-Month Ephemeris Guide (१२ मास)', icon: CalendarDays },
            { id: 'festivals', label: '4. Festivals & Vrats (प्रमुख पर्व)', icon: Sparkles },
            { id: 'rules', label: '5. Shastric Rules (शास्त्रोक्त नियम)', icon: ShieldCheck },
            { id: 'faqs', label: '6. FAQs & Guidance (प्रश्नोत्तरी)', icon: HelpCircle }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 4. TAB CONTENT 1: OVERVIEW & HISTORICAL GENESIS          */}
        {/* ========================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Scriptural & Historical Genesis</span>
                <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
                  Historical Roots & Cultural Foundation
                </h2>
              </div>

              {/* Founder / Era Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Founder / Patron</span>
                  <div className="text-sm font-bold text-stone-900 mt-1">{yearlyDeepDive.historyAndOrigin.founderOrKing}</div>
                  <div className="text-xs text-stone-500 mt-0.5">Epoch: {yearlyDeepDive.epochStart}</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Historical Era</span>
                  <div className="text-sm font-bold text-stone-900 mt-1">{yearlyDeepDive.eraName}</div>
                  <div className="text-xs text-stone-500 mt-0.5">Current Cycle: {yearlyDeepDive.currentYear}</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Presiding Deities</span>
                  <div className="text-sm font-bold text-stone-900 mt-1">
                    {yearlyDeepDive.rulingDeities?.slice(0, 2).join(', ') || 'Surya Narayana'}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">Sanatan Tradition</div>
                </div>
              </div>

              {/* Detailed Narrative */}
              <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
                <p>{yearlyDeepDive.historyAndOrigin.narrative}</p>
              </div>

              {/* Puranic Treatises */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <span>Scriptural & Puranic Treatises (शास्त्रोक्त प्रमाण)</span>
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {yearlyDeepDive.historyAndOrigin.puranicReferences.map((ref, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-800 shadow-2xs">
                      📜 {ref}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cultural Role & Temples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-950 font-cinzel flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Role in Daily Devotional Life</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {yearlyDeepDive.culturalSignificance.dailyLifeRole}
                  </p>
                  
                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-stone-700 block">Key Pilgrimage Temples Governed:</span>
                    <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
                      {yearlyDeepDive.culturalSignificance.templesGoverned.map((temple, idx) => (
                        <li key={idx} className="font-medium text-amber-950">
                          {temple}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-950 font-cinzel flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-600" />
                    <span>Culinary & Agrarian Traditions</span>
                  </h3>
                  <div className="space-y-2">
                    {yearlyDeepDive.culturalSignificance.culinaryAndAgrarianTraditions.map((trad, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs text-stone-800">
                        {trad}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. TAB CONTENT 2: ASTRONOMICAL CALCULATIONS               */}
        {/* ========================================================= */}
        {activeTab === 'astronomy' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Vedic Astronomical Mathematics</span>
                <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
                  How This Calendar is Astronomically Calculated
                </h2>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <Moon className="w-4 h-4" />
                    <span>Month Inception Rule</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {yearlyDeepDive.astronomicalCalculation.monthStartRule}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <Sun className="w-4 h-4" />
                    <span>Daily Tithi & Day Start</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {yearlyDeepDive.astronomicalCalculation.dayStartRule}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <Layers className="w-4 h-4" />
                    <span>Adhika Masa (Intercalary Month)</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {yearlyDeepDive.astronomicalCalculation.intercalaryRule}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <Compass className="w-4 h-4" />
                    <span>Equinox & Solstice Alignment</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {yearlyDeepDive.astronomicalCalculation.equinoxRule}
                  </p>
                </div>

              </div>

              {/* Core Principles Cards */}
              <div className="space-y-3 pt-3">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  Core Astronomical Principles of this Calendar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {yearlyDeepDive.astronomicalCalculation.corePrinciples.map((cp, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-stone-800 leading-relaxed font-medium">
                        {cp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. TAB CONTENT 3: 12-MONTH EPHEMERIS GUIDE                */}
        {/* ========================================================= */}
        {activeTab === 'months' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Complete 12 Months Guide</span>
                  <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
                    All 12 Months in {yearlyDeepDive.name}
                  </h2>
                </div>
                <span className="text-xs text-stone-500">
                  Click any month to view its complete calendar grid
                </span>
              </div>

              {/* 12 Months Interactive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {yearlyDeepDive.monthsBreakdown.map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => onNavigateToCalendarGrid(calendarId, idx)}
                    className="p-5 rounded-2xl border border-stone-200 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer bg-gradient-to-br from-white to-stone-50 group flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 text-xs font-extrabold flex items-center justify-center">
                          {m.monthNumber}
                        </span>
                        <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                          {m.gregorianSpan}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-stone-950 font-cinzel mt-2 group-hover:text-amber-800 transition-colors">
                        {m.name}
                      </h3>
                      <div className="text-xs text-amber-700 font-semibold mt-0.5">
                        {m.nativeName}
                      </div>

                      <div className="text-[11px] text-stone-500 mt-2">
                        <span>Ritu: <strong>{m.seasonRitu}</strong></span>
                      </div>

                      <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                        {m.significance}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-amber-800 font-bold group-hover:text-amber-900">
                      <span>Open Month Calendar</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 7. TAB CONTENT 4: KEY FESTIVALS & VRATS TABLE             */}
        {/* ========================================================= */}
        {activeTab === 'festivals' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">{selectedYear} Observances</span>
                  <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
                    Major Festivals & Vrats in {selectedYear}
                  </h2>
                </div>
                <button
                  onClick={() => onNavigateToCalendarTable(calendarId)}
                  className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <List className="w-3.5 h-3.5" />
                  <span>View 365-Day Complete Ephemeris Table →</span>
                </button>
              </div>

              {/* Festivals Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {yearlyDef?.keyFestivals.map((fest, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                        Sacred Observance #{idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-stone-900 font-cinzel">
                        {fest}
                      </h3>
                      <p className="text-xs text-stone-600">
                        Celebrated according to traditional tithi and solar transitions for {currentCity.name}.
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigateToCalendarGrid(calendarId)}
                      className="px-3 py-1.5 bg-white hover:bg-amber-50 border border-stone-300 hover:border-amber-400 text-stone-800 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-2xs"
                    >
                      View Date →
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 8. TAB CONTENT 5: SHASTRIC RULES & INJUNCTIONS            */}
        {/* ========================================================= */}
        {activeTab === 'rules' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Vedic Shastra Injunctions</span>
                <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
                  Specific Observances & Sacred Rules
                </h2>
              </div>

              <div className="space-y-4">
                {yearlyDeepDive.specialRules.map((sr, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-amber-950 font-cinzel flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-700" />
                        <span>{sr.title}</span>
                      </h3>
                      <span className="text-[10px] font-mono text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full font-bold">
                        {sr.shastraBasis}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {sr.rule}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 9. TAB CONTENT 6: FAQS & SEO KNOWLEDGE BASE               */}
        {/* ========================================================= */}
        {activeTab === 'faqs' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Devotee Inquiries & SEO Knowledge Base</span>
                <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
                  Frequently Asked Questions about {yearlyDeepDive.name}
                </h2>
              </div>

              <div className="space-y-3">
                {yearlyDeepDive.faqs.map((faq, idx) => {
                  const isOpen = expandedFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-stone-200 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left font-bold text-xs sm:text-sm text-stone-900 bg-stone-50 hover:bg-stone-100 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                        <span className="text-stone-400 font-mono text-base">{isOpen ? '−' : '+'}</span>
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 10. RELATED CALENDARS CAROUSEL                            */}
        {/* ========================================================= */}
        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-cinzel font-bold text-stone-900">
                Explore Other Regional & Sectarian Calendars
              </h3>
              <p className="text-xs text-stone-500">
                Seamlessly toggle between traditions across Bharat
              </p>
            </div>
            <button
              onClick={onNavigateToHub}
              className="text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors cursor-pointer"
            >
              View All 14 →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {yearlyCalendarsCatalog
              .filter(c => c.id !== calendarId)
              .slice(0, 4)
              .map(rc => (
                <div
                  key={rc.id}
                  onClick={() => onSelectCalendar(rc.id)}
                  className="p-3.5 rounded-2xl bg-white border border-stone-200 hover:border-amber-500 hover:shadow-xs transition-all cursor-pointer group"
                >
                  <span className="text-[10px] font-bold text-amber-700 block uppercase">
                    {rc.eraName}
                  </span>
                  <h4 className="text-xs font-bold text-stone-900 font-cinzel mt-1 group-hover:text-amber-800 transition-colors truncate">
                    {rc.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                    {rc.region}
                  </p>
                </div>
              ))}
          </div>
        </div>

      </div>
    );
  }

  // If this is a Dedicated Festival / Special Calendar Deep Dive
  if (festivalDeepDive) {
    return (
      <div className="space-y-6 animate-fade-in text-stone-900">
        
        {/* Toast */}
        {copiedNotification && (
          <div className="fixed bottom-6 right-6 z-50 bg-stone-950 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/50 flex items-center gap-2.5 text-xs font-bold animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Link copied to clipboard!</span>
          </div>
        )}

        {/* Top Breadcrumb & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <button
              onClick={onNavigateToHub}
              className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Grid className="w-3.5 h-3.5 text-amber-700" />
              <span>All Calendars Directory</span>
            </button>
            <span className="text-stone-300">/</span>
            <span className="font-bold text-rose-900 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200/60">
              {festivalDeepDive.name}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap self-end sm:self-auto">
            <button
              onClick={onOpenCityModal}
              className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{currentCity.name}</span>
            </button>

            <select
              value={selectedYear}
              onChange={(e) => onSelectYear(Number(e.target.value))}
              className="bg-stone-900 text-white font-mono font-bold text-xs px-2.5 py-1.5 rounded-xl border border-stone-800 cursor-pointer"
            >
              {[2024, 2025, 2026, 2027, 2028].map(y => (
                <option key={y} value={y} className="bg-white text-stone-900 font-sans">{y} Edition</option>
              ))}
            </select>

            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Festival Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-red-950 via-stone-950 to-amber-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-rose-500/30">
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-400/30">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>Dedicated Festival Calendar • {festivalDeepDive.duration}</span>
              </div>

              <div className="text-amber-300 text-xl sm:text-2xl font-bold font-serif">
                {festivalDeepDive.nativeName}
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-amber-100 tracking-wide">
                {selectedYear} {festivalDeepDive.name}
              </h1>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                {festivalDeepDive.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-black/40 border border-amber-500/30 text-amber-200">
                  Deity: <strong>{festivalDeepDive.presidingDeity}</strong>
                </span>
                <span className="px-3 py-1 rounded-xl bg-black/40 border border-amber-500/30 text-amber-200">
                  Span: <strong>{festivalDeepDive.duration}</strong>
                </span>
                <span className="px-3 py-1 rounded-xl bg-black/40 border border-amber-500/30 text-amber-200">
                  City Coordinates: <strong>{currentCity.name}</strong>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigateToCalendarGrid('gujarati-calendar')}
                className="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold rounded-2xl text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <Grid className="w-4 h-4" />
                <span>Open in Monthly Calendar Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Day-by-Day Sacred Schedule */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">Sacred Day-by-Day Itinerary</span>
            <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
              Detailed Daily Ritual Sequence & Prasad
            </h2>
          </div>

          <div className="space-y-4">
            {festivalDeepDive.itinerary.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/60 pb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-rose-900 text-white font-bold flex items-center justify-center text-xs shrink-0">
                      Day {item.dayNumber}
                    </span>
                    <div>
                      <h3 className="font-bold text-base text-stone-900 font-cinzel">{item.dayTitle}</h3>
                      <span className="text-xs text-amber-800 font-semibold">{item.nativeDayTitle}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-600 bg-white px-3 py-1 rounded-xl border border-stone-200 self-start sm:self-auto">
                    {item.tithiAndTiming}
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider">Prescribed Rituals:</span>
                  <ul className="space-y-1.5 pl-1">
                    {item.rituals.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-700 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/70 text-xs text-rose-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                  <span><strong>Sacred Prasad:</strong> {item.offeringsAndPrasad}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Authentic Puja Vidhi */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Scriptural Procedure</span>
            <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
              Step-by-Step Puja Vidhi (शास्त्रोक्त विधि)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {festivalDeepDive.pujaVidhi.map((pv, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {pv.stepNumber}
                  </span>
                  <h3 className="text-sm font-bold text-stone-950 font-cinzel">{pv.title}</h3>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed pl-8">
                  {pv.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Mantras */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Sacred Invocations</span>
            <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-1">
              Sacred Vedic Mantras & Meanings
            </h2>
          </div>

          <div className="space-y-4">
            {festivalDeepDive.sacredMantras.map((sm, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-900 text-white space-y-2.5 border border-amber-500/30">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {sm.mantraName}
                </span>
                <div className="text-base sm:text-lg font-serif text-amber-200 leading-relaxed font-bold">
                  {sm.sanskritText}
                </div>
                <div className="text-xs text-stone-300 italic font-mono">
                  {sm.englishTransliteration}
                </div>
                <p className="text-xs text-stone-400 pt-1 border-t border-stone-800">
                  <strong>Meaning:</strong> {sm.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fasting Rules & Dos and Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-bold font-cinzel text-base text-stone-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Recommended Practices (Do’s)</span>
            </h3>
            <ul className="space-y-2 text-xs text-stone-700">
              {festivalDeepDive.dosAndDonts.dos.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-bold font-cinzel text-base text-stone-950 flex items-center gap-2">
              <Info className="w-4 h-4 text-rose-600" />
              <span>Prohibitions (Don’ts)</span>
            </h3>
            <ul className="space-y-2 text-xs text-stone-700">
              {festivalDeepDive.dosAndDonts.donts.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✗</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    );
  }

  // Fallback if not found
  return (
    <div className="p-8 text-center bg-white rounded-3xl border border-stone-200 space-y-4">
      <h3 className="text-xl font-bold font-cinzel text-stone-900">Calendar Not Found</h3>
      <p className="text-xs text-stone-500">The requested calendar could not be loaded.</p>
      <button
        onClick={onNavigateToHub}
        className="px-4 py-2 bg-amber-900 text-white rounded-xl text-xs font-bold"
      >
        Return to Calendar Directory
      </button>
    </div>
  );
};
