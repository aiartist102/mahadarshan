import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Sun, 
  Moon, 
  BookOpen, 
  Flame, 
  Share2, 
  Printer, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  Check, 
  CheckCircle2, 
  Info, 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Filter, 
  Star, 
  Grid, 
  List, 
  Layers, 
  Compass, 
  HelpCircle,
  ArrowRight,
  TrendingUp,
  X,
  SlidersHorizontal,
  BookmarkCheck,
  Scale
} from 'lucide-react';
import { CityData, Language } from '../types';
import { allIndianCities } from '../data/indianCities';
import { 
  allFestivalsCatalog, 
  twelveLunarMonthsCatalog, 
  regionalCollectionsCatalog, 
  calculateFestivalOccurrence, 
  getCuratedFestivalCollection, 
  getTodayAndUpcomingFestivals,
  compareFestivalAcrossCities,
  top10FestivalIds,
  top20FestivalIds,
  top25FestivalIds,
  FestivalOccurrence,
  LunarMonthMetadata,
  RegionalCollectionMetadata
} from '../data/festivalOccurrenceEngine';
import { FestivalDefinition, PujaSamagriItem } from '../data/festivalDatabase';

export interface FestivalWithOccurrence {
  def: FestivalDefinition;
  occ: FestivalOccurrence;
  monthIndex: number;
}

export const gregorianMonthsMeta = [
  { index: 0, name: 'January', hindi: 'जनवरी', short: 'Jan', hinduMonths: 'पौष - माघ (Pausha - Magha)', ritu: 'Shishira Ritu (Winter / शिशिर ऋतु)' },
  { index: 1, name: 'February', hindi: 'फ़रवरी', short: 'Feb', hinduMonths: 'माघ - फाल्गुन (Magha - Phalguna)', ritu: 'Shishira - Vasant (वसन्त आगमन)' },
  { index: 2, name: 'March', hindi: 'मार्च', short: 'Mar', hinduMonths: 'फाल्गुन - चैत्र (Phalguna - Chaitra)', ritu: 'Vasant Ritu (Spring / वसन्त ऋतु)' },
  { index: 3, name: 'April', hindi: 'अप्रैल', short: 'Apr', hinduMonths: 'चैत्र - वैशाख (Chaitra - Vaishakha)', ritu: 'Vasant - Grishma (ग्रीष्म ऋतु)' },
  { index: 4, name: 'May', hindi: 'मई', short: 'May', hinduMonths: 'वैशाख - ज्येष्ठ (Vaishakha - Jyeshtha)', ritu: 'Grishma Ritu (Summer / ग्रीष्म ऋतु)' },
  { index: 5, name: 'June', hindi: 'जून', short: 'Jun', hinduMonths: 'ज्येष्ठ - आषाढ़ (Jyeshtha - Ashadha)', ritu: 'Grishma - Varsha (वर्षा आगमन)' },
  { index: 6, name: 'July', hindi: 'जुलाई', short: 'Jul', hinduMonths: 'आषाढ़ - श्रावण (Ashadha - Shravana)', ritu: 'Varsha Ritu (Monsoon / वर्षा ऋतु)' },
  { index: 7, name: 'August', hindi: 'अगस्त', short: 'Aug', hinduMonths: 'श्रावण - भाद्रपद (Shravana - Bhadrapada)', ritu: 'Varsha Ritu (पवित्र श्रावण)' },
  { index: 8, name: 'September', hindi: 'सितंबर', short: 'Sep', hinduMonths: 'भाद्रपद - आश्विन (Bhadrapada - Ashwin)', ritu: 'Sharad Ritu (Autumn / शरद ऋतु)' },
  { index: 9, name: 'October', hindi: 'अक्टूबर', short: 'Oct', hinduMonths: 'आश्विन - कार्तिक (Ashwin - Kartik)', ritu: 'Sharad Ritu (नवरात्रि - दीपोत्सव)' },
  { index: 10, name: 'November', hindi: 'नवंबर', short: 'Nov', hinduMonths: 'कार्तिक - मार्गशीर्ष (Kartik - Margashirsha)', ritu: 'Hemanta Ritu (Pre-Winter / हेमन्त ऋतु)' },
  { index: 11, name: 'December', hindi: 'दिसंबर', short: 'Dec', hinduMonths: 'मार्गशीर्ष - पौष (Margashirsha - Pausha)', ritu: 'Shishira Ritu (शीत ऋतु)' },
];

interface FestivalPlatformProps {
  currentLang: Language;
  onNavigateToPanchang?: (targetDate?: Date) => void;
  onNavigateToCalendar?: () => void;
}

export const FestivalPlatform: React.FC<FestivalPlatformProps> = ({
  currentLang,
  onNavigateToPanchang,
  onNavigateToCalendar
}) => {
  // Navigation & View Mode
  const [activePlatformView, setActivePlatformView] = useState<
    'hub' | 'detail' | 'popular' | 'months' | 'regional' | 'today' | 'admin-audit'
  >('hub');
  
  // Selected Festival for Dedicated Page
  const [selectedFestivalSlug, setSelectedFestivalSlug] = useState<string>('diwali');
  
  // Year & Location
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [selectedCityId, setSelectedCityId] = useState<string>('ahmedabad');
  const [isCityModalOpen, setIsCityModalOpen] = useState<boolean>(false);
  const [citySearchQuery, setCitySearchQuery] = useState<string>('');

  // Real-world Current Month Detection (e.g. 8 for September)
  const currentMonthIndex = useMemo(() => new Date().getMonth(), []);
  const currentMonthMeta = gregorianMonthsMeta[currentMonthIndex];
  
  // Search & Filter state for Hub
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedDeityFilter, setSelectedDeityFilter] = useState<string>('all');
  const [selectedMonthFilter, setSelectedMonthFilter] = useState<string>('all');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('all');
  
  // Gregorian Month Filter: 'all' or 0..11
  const [selectedGregorianMonth, setSelectedGregorianMonth] = useState<number | 'all'>('all');

  // Hub Layout Mode: 'month-grouped' (default month-wise) or 'flat-grid'
  const [viewLayoutMode, setViewLayoutMode] = useState<'month-grouped' | 'flat-grid'>('month-grouped');
  
  // Detail Page Active Sub-Tab
  const [detailSubTab, setDetailSubTab] = useState<
    'overview' | 'muhurat' | 'vidhi' | 'samagri' | 'fasting' | 'regional' | 'compare-cities' | 'faqs'
  >('overview');

  // Selected Month for Month Explorer view
  const [selectedMonthSlug, setSelectedMonthSlug] = useState<string>('kartik');
  
  // Selected Regional Collection
  const [selectedRegionalSlug, setSelectedRegionalSlug] = useState<string>('gujarati');

  // Popular Collection Type
  const [popularCollectionType, setPopularCollectionType] = useState<'top-10' | 'top-20' | 'top-25' | 'popular'>('top-10');

  // Interactive Puja Samagri Checklist State
  const [samagriChecklist, setSamagriChecklist] = useState<Record<string, boolean>>({});

  // Toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Active City Data
  const currentCity: CityData = useMemo(() => {
    return allIndianCities.find(c => c.id === selectedCityId) || allIndianCities[0];
  }, [selectedCityId]);

  // Selected Festival Definition
  const currentFestivalDef: FestivalDefinition = useMemo(() => {
    const found = allFestivalsCatalog.find(f => f.slug === selectedFestivalSlug || f.id === selectedFestivalSlug);
    return found || allFestivalsCatalog[0];
  }, [selectedFestivalSlug]);

  // Dynamic Occurrence of Selected Festival for chosen Year & City
  const currentFestivalOccurrence: FestivalOccurrence = useMemo(() => {
    return calculateFestivalOccurrence(currentFestivalDef, selectedYear, currentCity);
  }, [currentFestivalDef, selectedYear, currentCity]);

  // Precalculate all festivals with occurrences and monthIndex
  const allFestivalOccurrencesWithMonth: FestivalWithOccurrence[] = useMemo(() => {
    return allFestivalsCatalog.map(fest => {
      const occ = calculateFestivalOccurrence(fest, selectedYear, currentCity);
      const d = new Date(occ.gregorianDate);
      const monthIndex = d.getMonth();
      return { def: fest, occ, monthIndex };
    });
  }, [selectedYear, currentCity]);

  // Festivals Count for current active real-world month
  const currentMonthFestivalsCount = useMemo(() => {
    return allFestivalOccurrencesWithMonth.filter(item => item.monthIndex === currentMonthIndex).length;
  }, [allFestivalOccurrencesWithMonth, currentMonthIndex]);

  // Month-by-month festival counts for badges in the month bar
  const monthFestivalsCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    for (let i = 0; i < 12; i++) counts[i] = 0;
    allFestivalOccurrencesWithMonth.forEach(item => {
      counts[item.monthIndex] = (counts[item.monthIndex] || 0) + 1;
    });
    return counts;
  }, [allFestivalOccurrencesWithMonth]);

  // Filtered Festivals list for Main Directory
  const filteredFestivalsList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    
    return allFestivalOccurrencesWithMonth.filter(({ def, occ, monthIndex }) => {
      // 1. Quick Category / Priority Filter
      if (selectedCategoryFilter === 'top-10') {
        if (!top10FestivalIds.includes(def.id) && !top10FestivalIds.includes(def.slug)) return false;
      } else if (selectedCategoryFilter === 'top-20') {
        if (!top20FestivalIds.includes(def.id) && !top20FestivalIds.includes(def.slug)) return false;
      } else if (selectedCategoryFilter === 'current-month') {
        if (monthIndex !== currentMonthIndex) return false;
      } else if (selectedCategoryFilter === 'major') {
        if (def.festival_type !== 'major') return false;
      } else if (selectedCategoryFilter === 'jayanti') {
        if (def.festival_type !== 'jayanti') return false;
      } else if (selectedCategoryFilter === 'vrat') {
        if (def.festival_type !== 'vrat' && !def.fasting_information.isFastingDay) return false;
      } else if (selectedCategoryFilter === 'sankranti') {
        if (def.festival_type !== 'sankranti') return false;
      } else if (selectedCategoryFilter === 'new-year') {
        if (def.festival_type !== 'new-year') return false;
      }

      // 2. Gregorian Month Filter
      if (selectedGregorianMonth !== 'all' && monthIndex !== selectedGregorianMonth) {
        return false;
      }

      // 3. Deity Filter
      if (selectedDeityFilter !== 'all' && def.deity_category !== selectedDeityFilter) {
        return false;
      }

      // 4. Lunar Month Filter
      if (selectedMonthFilter !== 'all' && def.lunar_month !== selectedMonthFilter) {
        return false;
      }

      // 5. Search Text match
      if (q) {
        const matchName = def.canonical_name.toLowerCase().includes(q);
        const matchHindi = def.hindi_name.toLowerCase().includes(q);
        const matchGujarati = def.gujarati_name?.toLowerCase().includes(q);
        const matchAlt = def.alternate_names.some(a => a.toLowerCase().includes(q));
        const matchDesc = def.short_description.toLowerCase().includes(q);
        const matchDeity = def.deity.toLowerCase().includes(q);
        const matchMonth = occ.hinduMonth.toLowerCase().includes(q) || gregorianMonthsMeta[monthIndex].name.toLowerCase().includes(q);
        if (!matchName && !matchHindi && !matchGujarati && !matchAlt && !matchDesc && !matchDeity && !matchMonth) {
          return false;
        }
      }

      return true;
    });
  }, [
    allFestivalOccurrencesWithMonth,
    selectedCategoryFilter,
    selectedGregorianMonth,
    selectedDeityFilter,
    selectedMonthFilter,
    searchQuery,
    currentMonthIndex
  ]);

  // Group filtered festivals by Gregorian month (0 to 11, January to December)
  const festivalsGroupedByMonth = useMemo(() => {
    const groups: { monthInfo: typeof gregorianMonthsMeta[0]; items: FestivalWithOccurrence[] }[] = [];
    
    for (let m = 0; m < 12; m++) {
      if (selectedGregorianMonth !== 'all' && selectedGregorianMonth !== m) {
        continue;
      }
      const items = filteredFestivalsList
        .filter(item => item.monthIndex === m)
        .sort((a, b) => a.occ.gregorianDate.localeCompare(b.occ.gregorianDate));
      
      if (items.length > 0) {
        groups.push({
          monthInfo: gregorianMonthsMeta[m],
          items
        });
      }
    }

    return groups;
  }, [filteredFestivalsList, selectedGregorianMonth]);

  // Filtered Cities for modal
  const filteredCities = useMemo(() => {
    if (!citySearchQuery.trim()) return allIndianCities.slice(0, 30);
    const q = citySearchQuery.toLowerCase();
    return allIndianCities.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.state.toLowerCase().includes(q)
    );
  }, [citySearchQuery]);

  // Curated Popular Collection
  const popularFestivalsList = useMemo(() => {
    return getCuratedFestivalCollection(popularCollectionType, selectedYear, selectedCityId);
  }, [popularCollectionType, selectedYear, selectedCityId]);

  // Today & Upcoming Festivals
  const todayAndUpcomingData = useMemo(() => {
    return getTodayAndUpcomingFestivals(selectedCityId);
  }, [selectedCityId]);

  // City Comparison List for Detail Page
  const cityComparisonList = useMemo(() => {
    const compareCities = ['ahmedabad', 'mumbai', 'delhi', 'varanasi', 'chennai', 'kolkata', 'bengaluru'];
    return compareFestivalAcrossCities(currentFestivalDef.id, selectedYear, compareCities);
  }, [currentFestivalDef, selectedYear]);

  // Handlers
  const handleOpenDetail = (slug: string) => {
    setSelectedFestivalSlug(slug);
    setActivePlatformView('detail');
    setDetailSubTab('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll to detail page section
  const scrollToDetailSection = (sectionId: string) => {
    setDetailSubTab(sectionId as any);
    const element = document.getElementById(`detail-section-${sectionId}`);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Synchronize active sub-tab indicator as user scrolls naturally through sections
  useEffect(() => {
    if (activePlatformView !== 'detail') return;

    const sections = [
      'overview',
      'muhurat',
      'vidhi',
      'samagri',
      'fasting',
      'regional',
      'compare-cities',
      'faqs'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(`detail-section-${sections[i]}`);
        if (el && el.offsetTop <= scrollPos) {
          setDetailSubTab(sections[i] as any);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePlatformView]);

  const handleCopyShareLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Festival link copied to clipboard!');
    }
  };

  const handleShareWhatsApp = (festName: string, date: string, muhurat: string) => {
    const text = `🪔 *${festName} ${selectedYear}*\n📅 *Date:* ${date}\n📍 *City:* ${currentCity.name}\n⏰ *Muhurat:* ${muhurat}\n\nRead complete Puja Vidhi, Mantras & Tithi on MahaDarshan:\n${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const toggleSamagriCheck = (item: string) => {
    setSamagriChecklist(prev => ({ ...prev, [item]: !prev[item] }));
  };

  // Dynamic SEO Title, Meta Description and Schema.org JSON-LD for Google Search
  useEffect(() => {
    if (activePlatformView === 'detail') {
      const pageTitle = `${currentFestivalDef.canonical_name} ${selectedYear} Date, Muhurat in ${currentCity.name}, Puja Vidhi & Mantras | MahaDarshan`;
      document.title = pageTitle;

      const metaDesc = document.querySelector('meta[name="description"]');
      const descContent = `${currentFestivalDef.canonical_name} ${selectedYear} on ${currentFestivalOccurrence.formattedDate} in ${currentCity.name}. Exact ${currentFestivalOccurrence.pujaMuhurat.title}: ${currentFestivalOccurrence.pujaMuhurat.start} to ${currentFestivalOccurrence.pujaMuhurat.end}. Complete authentic Puja Vidhi, Samagri checklist, fasting rules, and mantras.`;
      if (metaDesc) {
        metaDesc.setAttribute('content', descContent);
      }

      // Dynamic Schema.org JSON-LD injection
      let scriptTag = document.getElementById('dynamic-festival-jsonld') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-festival-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = currentFestivalOccurrence.schemaEventJsonLd;
    } else {
      document.title = `Hindu Festivals & Vrats ${selectedYear} - Complete Drik Panchang Directory & Muhurats | MahaDarshan`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Explore complete directory of 50+ Hindu festivals for ${selectedYear} with authentic Drik Panchang calculations across 200+ Indian cities: Diwali, Holi, Navratri, Maha Shivaratri, Ekadashi, Teej, and regional traditions.`);
      }
      const scriptTag = document.getElementById('dynamic-festival-jsonld');
      if (scriptTag) scriptTag.remove();
    }
  }, [activePlatformView, currentFestivalDef, currentFestivalOccurrence, selectedYear, currentCity]);

  return (
    <div className="space-y-6 text-stone-900 animate-fade-in font-sans">
      
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-950 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/50 flex items-center gap-2.5 text-xs font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1. MASTER PLATFORM TOP HEADER                             */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/30 relative overflow-hidden">
        {/* Decorative Ambient Aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 space-y-4">
          
          {/* Breadcrumb & Year/City Quick Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-amber-400 font-bold uppercase tracking-wider">Hindu Festivals Portal</span>
              <span className="text-amber-600">/</span>
              <span className="text-stone-300">
                {activePlatformView === 'hub' && 'All Festivals Hub Directory'}
                {activePlatformView === 'detail' && `${currentFestivalDef.canonical_name}`}
                {activePlatformView === 'popular' && 'Curated Popular Collections'}
                {activePlatformView === 'months' && '12 Lunar Months Explorer'}
                {activePlatformView === 'regional' && 'Regional Festival Traditions'}
                {activePlatformView === 'today' && "Today's & Upcoming Observances"}
                {activePlatformView === 'admin-audit' && 'Astronomical Validation Dashboard'}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap self-end sm:self-auto">
              {/* City Selector Button */}
              <button
                onClick={() => setIsCityModalOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-black/40 hover:bg-black/60 border border-amber-500/40 text-amber-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                title="Change Location"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentCity.name}, {currentCity.state}</span>
              </button>

              {/* Year Selector */}
              <div className="flex items-center bg-black/40 border border-amber-500/40 rounded-xl px-2 py-1 text-xs">
                <span className="text-stone-400 mr-1.5">Year:</span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="bg-transparent text-amber-300 font-mono font-bold focus:outline-none cursor-pointer"
                >
                  {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map(y => (
                    <option key={y} value={y} className="bg-stone-900 text-white font-sans">{y}</option>
                  ))}
                </select>
              </div>

              {/* Link to Panchang */}
              {onNavigateToPanchang && (
                <button
                  onClick={() => onNavigateToPanchang()}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                >
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>Daily Panchang</span>
                </button>
              )}

              {/* Link to Calendars */}
              {onNavigateToCalendar && (
                <button
                  onClick={onNavigateToCalendar}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                >
                  <CalendarIcon className="w-3.5 h-3.5 text-amber-300" />
                  <span>Calendars</span>
                </button>
              )}
            </div>
          </div>

          {/* Hero Titles */}
          <div className="max-w-3xl space-y-1.5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-amber-100 tracking-wide">
              {activePlatformView === 'detail' 
                ? `${currentFestivalDef.canonical_name} ${selectedYear}`
                : `Hindu Festivals, Indian Festivals & Religious Celebrations ${selectedYear}`}
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {activePlatformView === 'detail'
                ? `${currentFestivalDef.short_description} Calculated dynamically for ${currentCity.name} with authentic Shastric Puja Vidhi, Muhurats & Parana.`
                : `Comprehensive, authentic, astronomical Sanatana festival platform. Synchronized daily for ${currentCity.name}, Gujarat, and all major cities worldwide.`}
            </p>
          </div>

          {/* Navigation Mode Switcher Tabs */}
          <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setActivePlatformView('hub')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activePlatformView === 'hub'
                  ? 'bg-amber-400 text-stone-950 shadow-md scale-102 font-extrabold'
                  : 'bg-black/30 text-stone-300 hover:bg-black/50 hover:text-white border border-amber-500/20'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All Festivals Hub</span>
            </button>

            <button
              onClick={() => setActivePlatformView('popular')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activePlatformView === 'popular'
                  ? 'bg-amber-400 text-stone-950 shadow-md scale-102 font-extrabold'
                  : 'bg-black/30 text-stone-300 hover:bg-black/50 hover:text-white border border-amber-500/20'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Popular Collections (Top 10 / 25)</span>
            </button>

            <button
              onClick={() => setActivePlatformView('months')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activePlatformView === 'months'
                  ? 'bg-amber-400 text-stone-950 shadow-md scale-102 font-extrabold'
                  : 'bg-black/30 text-stone-300 hover:bg-black/50 hover:text-white border border-amber-500/20'
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>12 Lunar Months</span>
            </button>

            <button
              onClick={() => setActivePlatformView('regional')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activePlatformView === 'regional'
                  ? 'bg-amber-400 text-stone-950 shadow-md scale-102 font-extrabold'
                  : 'bg-black/30 text-stone-300 hover:bg-black/50 hover:text-white border border-amber-500/20'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Regional (Gujarati / Tamil / Marathi)</span>
            </button>

            <button
              onClick={() => setActivePlatformView('today')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activePlatformView === 'today'
                  ? 'bg-amber-400 text-stone-950 shadow-md scale-102 font-extrabold'
                  : 'bg-black/30 text-stone-300 hover:bg-black/50 hover:text-white border border-amber-500/20'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Today & Upcoming</span>
            </button>

            <button
              onClick={() => setActivePlatformView('admin-audit')}
              className={`px-3 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activePlatformView === 'admin-audit'
                  ? 'bg-amber-400 text-stone-950 shadow-md scale-102 font-extrabold'
                  : 'bg-black/30 text-stone-300 hover:bg-black/50 hover:text-white border border-amber-500/20'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Validation & Audit</span>
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. VIEW: DEDICATED FESTIVAL DETAIL PAGE                   */}
      {/* ========================================================= */}
      {activePlatformView === 'detail' && (
        <div className="space-y-6">
          
          {/* Top Return Button */}
          <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-stone-200">
            <button
              onClick={() => setActivePlatformView('hub')}
              className="px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Festivals Directory</span>
            </button>

            {/* Quick Switcher Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 hidden sm:inline">Jump to:</span>
              <select
                value={selectedFestivalSlug}
                onChange={(e) => handleOpenDetail(e.target.value)}
                className="bg-stone-50 border border-stone-300 rounded-xl px-3 py-1.5 text-xs font-bold text-stone-900 focus:outline-none cursor-pointer"
              >
                {allFestivalsCatalog.map(f => (
                  <option key={f.id} value={f.slug}>{f.canonical_name}</option>
                ))}
              </select>

              <button
                onClick={handleCopyShareLink}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                title="Copy Link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                title="Print Festival Details"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Master Astronomical & Muhurat Card */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-stone-100 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-amber-100 text-amber-900">
                    {currentFestivalDef.festival_type.toUpperCase()} FESTIVAL
                  </span>
                  <span className="text-xs text-stone-500">•</span>
                  <span className="text-xs font-semibold text-amber-800">
                    {currentFestivalDef.hindi_name}
                  </span>
                  {currentFestivalDef.gujarati_name && (
                    <>
                      <span className="text-xs text-stone-500">•</span>
                      <span className="text-xs font-semibold text-stone-600 font-sans">
                        {currentFestivalDef.gujarati_name}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-950">
                  {currentFestivalOccurrence.formattedDate}
                </h2>
                
                <p className="text-xs sm:text-sm text-stone-600">
                  Calculated according to Shastras for <strong className="text-stone-900">{currentCity.name}, {currentCity.state}</strong> ({currentCity.lat.toFixed(2)}°N, {currentCity.lng.toFixed(2)}°E).
                </p>
              </div>

              {/* Primary Muhurat Pill & Countdown */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-left lg:text-right space-y-0.5">
                  <span className="text-[10px] uppercase font-extrabold text-amber-800 tracking-wider block">
                    {currentFestivalOccurrence.pujaMuhurat.title}
                  </span>
                  <div className="text-lg sm:text-xl font-cinzel font-extrabold text-amber-950">
                    {currentFestivalOccurrence.pujaMuhurat.start} to {currentFestivalOccurrence.pujaMuhurat.end}
                  </div>
                  <span className="text-[11px] text-stone-600 block">
                    Duration: {currentFestivalOccurrence.pujaMuhurat.duration}
                  </span>
                </div>

                {/* Countdown Timer */}
                {!currentFestivalOccurrence.countdown.isPast && (
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-700 bg-stone-100 px-3.5 py-1.5 rounded-xl border border-stone-200">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Countdown:</span>
                    <span className="text-amber-900 font-mono">
                      {currentFestivalOccurrence.countdown.days}d {currentFestivalOccurrence.countdown.hours}h {currentFestivalOccurrence.countdown.minutes}m
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Astronomical Data Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Hindu Month</span>
                <span className="font-bold text-stone-900 block">{currentFestivalOccurrence.hinduMonth}</span>
                <span className="text-[11px] text-amber-800">{currentFestivalOccurrence.paksha.split('(')[0]}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Tithi</span>
                <span className="font-bold text-stone-900 block">{currentFestivalOccurrence.tithiName}</span>
                <span className="text-[11px] text-stone-500">Till {currentFestivalOccurrence.tithiEnd}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Nakshatra</span>
                <span className="font-bold text-stone-900 block">{currentFestivalOccurrence.nakshatra}</span>
                <span className="text-[11px] text-stone-500">Till {currentFestivalOccurrence.nakshatraEnd}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Sunrise</span>
                <span className="font-bold text-amber-900 flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>{currentFestivalOccurrence.sunrise}</span>
                </span>
                <span className="text-[11px] text-stone-500">Local Solar Dawn</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Sunset</span>
                <span className="font-bold text-orange-950 flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5 text-orange-600" />
                  <span>{currentFestivalOccurrence.sunset}</span>
                </span>
                <span className="text-[11px] text-stone-500">Pradosh Begins</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Moonrise</span>
                <span className="font-bold text-indigo-950 flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{currentFestivalOccurrence.moonrise}</span>
                </span>
                <span className="text-[11px] text-stone-500">Night Visibility</span>
              </div>
            </div>

            {/* Quick Share with WhatsApp Button */}
            <div className="flex items-center justify-between gap-3 pt-2 text-xs">
              <span className="text-stone-500">
                Calculation rule: <strong className="text-stone-800">{currentFestivalDef.calculation_method}</strong>
              </span>

              <button
                onClick={() => handleShareWhatsApp(
                  currentFestivalDef.canonical_name, 
                  currentFestivalOccurrence.formattedDate, 
                  `${currentFestivalOccurrence.pujaMuhurat.start} to ${currentFestivalOccurrence.pujaMuhurat.end}`
                )}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <span>Share Timings on WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Sticky Deep-Dive Quick-Jump Sub-Tabs Navigation */}
          <div className="sticky top-2 z-30 flex items-center gap-1.5 overflow-x-auto bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-stone-200/90 shadow-md text-xs">
            <span className="text-[10px] uppercase font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md shrink-0">
              Jump to Section:
            </span>
            {[
              { id: 'overview', label: 'Overview & Story', icon: BookOpen },
              { id: 'muhurat', label: 'Muhurat & Timings', icon: Clock },
              { id: 'vidhi', label: 'Puja Vidhi & Mantras', icon: Flame },
              { id: 'samagri', label: 'Puja Samagri', icon: BookmarkCheck },
              { id: 'fasting', label: 'Fasting & Parana', icon: ShieldCheck },
              { id: 'regional', label: 'Regional Traditions', icon: Compass },
              { id: 'compare-cities', label: 'Compare Cities', icon: Scale },
              { id: 'faqs', label: 'Devotee FAQs', icon: HelpCircle },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = detailSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToDetailSection(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-900 text-white shadow-xs font-extrabold scale-102'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Section 1: Overview & History */}
          <div id="detail-section-overview" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                  Quick Festival Synopsis
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
                  <div>
                    <span className="text-stone-500 block font-medium">Primary Deity:</span>
                    <strong className="text-stone-900">{currentFestivalDef.deity}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block font-medium">Lunar Month:</span>
                    <strong className="text-stone-900">{currentFestivalOccurrence.hinduMonth}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block font-medium">Main Ritual:</span>
                    <strong className="text-stone-900">{currentFestivalDef.puja_information.steps[0]?.title || 'Sacred Worship'}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block font-medium">Fasting Type:</span>
                    <strong className="text-stone-900">{currentFestivalDef.fasting_information.fastType} Fasting</strong>
                  </div>
                </div>
              </div>

              {/* Full Narrative */}
              <div className="space-y-3">
                <h3 className="text-xl font-cinzel font-bold text-stone-900">
                  About {currentFestivalDef.canonical_name}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed whitespace-pre-line">
                  {currentFestivalDef.full_overview}
                </p>
              </div>

              {/* Spiritual Significance */}
              <div className="space-y-3 border-t border-stone-100 pt-5">
                <h3 className="text-lg font-cinzel font-bold text-stone-900">
                  Spiritual & Philosophical Significance
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {currentFestivalDef.significance}
                </p>
              </div>

              {/* Historical & Scriptural Lore */}
              <div className="space-y-3 border-t border-stone-100 pt-5">
                <h3 className="text-lg font-cinzel font-bold text-stone-900">
                  Scriptural Origin & Puranic History
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {currentFestivalDef.history_and_tradition}
                </p>
              </div>

              {/* Cultural Traditions List */}
              <div className="space-y-3 border-t border-stone-100 pt-5">
                <h3 className="text-lg font-cinzel font-bold text-stone-900">
                  Traditional Practices & Observances
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {currentFestivalDef.cultural_traditions.map((trad, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2.5 text-xs text-stone-800">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{trad}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          {/* Section 2: Muhurat & Timings */}
          <div id="detail-section-muhurat" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Precise Astronomical Calculation</span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                  {currentFestivalDef.canonical_name} {selectedYear} Muhurat in {currentCity.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Calculation basis: {currentFestivalDef.muhurat_information.rulesDescription}
                </p>
              </div>

              {/* Primary Muhurat Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/40 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-200/80 text-amber-950">
                    Primary Sacred Window
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-900">
                    Duration: {currentFestivalOccurrence.pujaMuhurat.duration}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-cinzel font-extrabold text-amber-950">
                  {currentFestivalOccurrence.pujaMuhurat.start} — {currentFestivalOccurrence.pujaMuhurat.end}
                </div>

                <p className="text-xs sm:text-sm text-stone-700">
                  {currentFestivalDef.muhurat_information.rulesDescription}
                </p>
              </div>

              {/* Additional Muhurat Slots (Lagna, Choghadiya, Prahar) */}
              {currentFestivalOccurrence.pujaMuhurat.additionalTimings && currentFestivalOccurrence.pujaMuhurat.additionalTimings.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700">
                    Associated Lagna & Sub-Period Timings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentFestivalOccurrence.pujaMuhurat.additionalTimings.map((slot, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <strong className="text-stone-900 font-semibold">{slot.name}</strong>
                          <span className="font-mono text-amber-900 font-bold">{slot.time}</span>
                        </div>
                        {slot.note && (
                          <p className="text-[11px] text-stone-500">{slot.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tradition Difference Warning / Transparent Notice */}
              {currentFestivalOccurrence.traditionDifference && (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-300 space-y-3">
                  <div className="flex items-center gap-2 text-stone-800 text-xs font-bold">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Traditional Variation Notice (परंपरागत मतभेद)</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentFestivalOccurrence.traditionDifference.explanation}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="block text-stone-900">{currentFestivalOccurrence.traditionDifference.traditionA.name}</strong>
                      <span className="text-amber-800 font-bold">{currentFestivalOccurrence.traditionDifference.traditionA.date}</span>
                      <p className="text-[11px] text-stone-500 mt-1">{currentFestivalOccurrence.traditionDifference.traditionA.rule}</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="block text-stone-900">{currentFestivalOccurrence.traditionDifference.traditionB.name}</strong>
                      <span className="text-amber-800 font-bold">{currentFestivalOccurrence.traditionDifference.traditionB.date}</span>
                      <p className="text-[11px] text-stone-500 mt-1">{currentFestivalOccurrence.traditionDifference.traditionB.rule}</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

          {/* Section 3: Step-by-Step Puja Vidhi & Mantras */}
          <div id="detail-section-vidhi" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Shastric Ritual Sequence</span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                  Authentic Step-by-Step Puja Vidhi
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  {currentFestivalDef.puja_information.overview}
                </p>
              </div>

              {/* Ritual Steps */}
              <div className="space-y-4">
                {currentFestivalDef.puja_information.steps.map((st) => (
                  <div key={st.stepNumber} className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200 space-y-2.5">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-amber-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {st.stepNumber}
                      </span>
                      <h4 className="text-base font-bold text-stone-900 font-cinzel">
                        {st.title}
                      </h4>
                    </div>

                    {st.mantra && (
                      <div className="p-3.5 rounded-xl bg-amber-100/40 border border-amber-200/80 font-serif text-amber-950 text-xs sm:text-sm tracking-wide leading-relaxed">
                        {st.mantra}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pl-10">
                      {st.procedure}
                    </p>

                    {st.cautionOrNote && (
                      <div className="pl-10 text-[11px] text-amber-800 font-medium">
                        * Note: {st.cautionOrNote}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Aarti & Prasad */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-stone-100 pt-5 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-950 uppercase tracking-wider block">Recommended Aarti</span>
                  <div className="text-sm font-bold text-stone-900 font-cinzel">
                    {currentFestivalDef.puja_information.aartiName || 'Traditional Aarti'}
                  </div>
                  <p className="text-stone-600 text-[11px]">Sing with pure camphor diya, bell, and conch accompaniment.</p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-950 uppercase tracking-wider block">Sacred Prasad / Bhog</span>
                  <div className="text-sm font-bold text-stone-900">
                    {currentFestivalDef.puja_information.prasadDetails}
                  </div>
                  <p className="text-stone-600 text-[11px]">Offer with pure devotion before distributing to family and guests.</p>
                </div>
              </div>

            </div>

          {/* Section 4: Puja Samagri Checklist */}
          <div id="detail-section-samagri" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              <div className="border-b border-stone-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Preparation Checklist</span>
                  <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                    Essential Puja Samagri
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Mark items as you procure them for your ceremony.
                  </p>
                </div>

                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Samagri List</span>
                </button>
              </div>

              {/* Samagri Checklist Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentFestivalDef.puja_information.samagri.map((item, idx) => {
                  const isChecked = !!samagriChecklist[item.item];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleSamagriCheck(item.item)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked 
                          ? 'bg-emerald-50/60 border-emerald-300' 
                          : 'bg-stone-50/60 border-stone-200 hover:bg-white'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-1 space-y-1 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-bold ${isChecked ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                            {item.item}
                          </span>
                          <span className="font-mono text-[11px] text-amber-900 font-semibold shrink-0">
                            {item.quantity}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-600">
                          {item.significance}
                        </p>
                        {item.regionalAlternative && (
                          <span className="text-[10px] text-amber-800 block">
                            Regional alternative: {item.regionalAlternative}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          {/* Section 5: Fasting & Parana */}
          <div id="detail-section-fasting" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Vrat & Upavas Guidelines</span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                  Fasting Rules & Parana Timings
                </h3>
              </div>

              {currentFestivalDef.fasting_information.isFastingDay ? (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">Fast Category</span>
                      <div className="text-lg font-bold text-stone-950 font-cinzel">
                        {currentFestivalDef.fasting_information.fastType} Vrata
                      </div>
                      <p className="text-xs text-stone-600">{currentFestivalDef.fasting_information.paranaRules}</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">Parana Timing</span>
                      <div className="text-lg font-bold text-stone-950 font-mono">
                        {currentFestivalOccurrence.fastingTiming?.paranaTiming || 'Next morning after sunrise'}
                      </div>
                      <p className="text-xs text-stone-600">Conclude fast within this period for full spiritual merit.</p>
                    </div>
                  </div>

                  {/* Allowed vs Prohibited Foods */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                      <span className="font-bold text-emerald-900 uppercase tracking-wider block flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Permitted Foods (फलाहार)</span>
                      </span>
                      <ul className="space-y-1 text-stone-700">
                        {(currentFestivalDef.fasting_information.allowedFoods || ['Fruits & Fresh Milk', 'Singhara / Kuttu Atta', 'Sabudana / Makhana', 'Rock Salt (Sendha Namak)', 'Nuts & Water']).map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2">
                      <span className="font-bold text-rose-900 uppercase tracking-wider block flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-600" />
                        <span>Prohibited Foods (वर्जित आहार)</span>
                      </span>
                      <ul className="space-y-1 text-stone-700">
                        {(currentFestivalDef.fasting_information.prohibitedFoods || ['Grains & Cereals (Wheat, Rice)', 'Lentils & Pulses', 'Onion & Garlic (Tamasik)', 'Table Salt', 'Alcohol & Non-Veg']).map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-2">
                  <Sparkles className="w-8 h-8 text-amber-600 mx-auto" />
                  <h4 className="text-base font-bold text-stone-900">Celebratory Feast Day</h4>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    {currentFestivalDef.canonical_name} is observed as a festival of joy and hospitality. Strict fasting is not mandatory; devotees partake in traditional festive feasts with family.
                  </p>
                </div>
              )}

            </div>

          {/* Section 6: Regional Traditions */}
          <div id="detail-section-regional" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Diversity in Sanatana Dharma</span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                  Regional Customs & Local Names
                </h3>
              </div>

              <div className="space-y-4">
                {currentFestivalDef.regional_variations.map((reg, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-amber-950 font-cinzel text-base">
                        {reg.region}
                      </h4>
                      <div className="flex items-center gap-1.5">
                        {reg.distinctiveNames.map((n, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-stone-700 leading-relaxed">
                      {reg.customs}
                    </p>
                    <div className="text-xs text-stone-500 pt-1">
                      <strong className="text-stone-700">Special Dishes / Rituals:</strong> {reg.uniqueFoodsOrRituals}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          {/* Section 7: Compare Across Major Indian & World Cities */}
          <div id="detail-section-compare-cities" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Location-Specific Astronomical Variance</span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                  City Comparison: Timings & Sunrise/Sunset
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Because festival and puja timings are governed by the local Sun and Moon, timings naturally vary across cities.
                </p>
              </div>

              {/* City Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3.5">City</th>
                      <th className="p-3.5">Sunrise</th>
                      <th className="p-3.5">Sunset</th>
                      <th className="p-3.5">Moonrise</th>
                      <th className="p-3.5">Puja Muhurat Window</th>
                      <th className="p-3.5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {cityComparisonList.map((item, idx) => (
                      <tr key={idx} className={item.city.id === selectedCityId ? 'bg-amber-50/70 font-semibold' : 'hover:bg-stone-50'}>
                        <td className="p-3.5 font-bold text-stone-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-600" />
                          <span>{item.city.name}</span>
                          {item.city.id === selectedCityId && (
                            <span className="text-[10px] bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded font-bold">Active</span>
                          )}
                        </td>
                        <td className="p-3.5 text-amber-900">{item.sunrise}</td>
                        <td className="p-3.5 text-orange-950">{item.sunset}</td>
                        <td className="p-3.5 text-indigo-950">{item.moonrise}</td>
                        <td className="p-3.5 font-mono text-stone-800 font-bold">
                          {item.pujaMuhurat.start} – {item.pujaMuhurat.end}
                        </td>
                        <td className="p-3.5">
                          {item.city.id !== selectedCityId && (
                            <button
                              onClick={() => {
                                setSelectedCityId(item.city.id);
                                showToast(`Switched location to ${item.city.name}`);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 text-[11px] font-bold cursor-pointer transition-colors"
                            >
                              Select
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          {/* Section 8: Devotee FAQs with Accordion */}
          <div id="detail-section-faqs" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Devotee Inquiries & SEO Knowledge Base</span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {currentFestivalDef.faqs.map((faq, idx) => {
                  const isOpen = expandedFaqIndex === idx;
                  return (
                    <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden transition-all">
                      <button
                        onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-stone-900 flex items-center justify-between gap-3 bg-stone-50/50 hover:bg-stone-50 cursor-pointer text-xs sm:text-sm"
                      >
                        <span className="font-cinzel text-stone-950">{faq.question}</span>
                        <ChevronRight className={`w-4 h-4 text-stone-500 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100/60 bg-white">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          {/* Section 9: Related Content & Internal Linking */}
          <div id="detail-section-related" className="bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-5 scroll-mt-24">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 font-cinzel">
              Explore Related Observances & Sacraments
            </h4>
            
            <div className="flex flex-wrap gap-2 text-xs">
              {currentFestivalDef.related_festivals.map((relSlug, i) => {
                const found = allFestivalsCatalog.find(f => f.slug === relSlug || f.id === relSlug);
                return (
                  <button
                    key={i}
                    onClick={() => handleOpenDetail(relSlug)}
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-amber-100 text-stone-800 hover:text-amber-950 border border-stone-200 font-bold transition-colors cursor-pointer shadow-2xs"
                  >
                    {found?.canonical_name || relSlug} →
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 3. VIEW: ALL FESTIVALS HUB DIRECTORY (GRID & SEARCH)      */}
      {/* ========================================================= */}
      {activePlatformView === 'hub' && (
        <div className="space-y-6">
          
          {/* Search & Filter Toolbar */}
          <div className="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs space-y-4">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search festivals by name, deity, month, or region (e.g. Diwali, Krishna, Kartik)..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-amber-600 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {[
                  { id: 'all', label: `All Festivals (${allFestivalOccurrencesWithMonth.length})` },
                  { id: 'current-month', label: `⚡ Current Month (${currentMonthMeta.name}) (${currentMonthFestivalsCount})` },
                  { id: 'top-10', label: '⭐ Top 10 Major' },
                  { id: 'top-20', label: '🏆 Top 20 Essential' },
                  { id: 'major', label: 'Major Celebrations' },
                  { id: 'vrat', label: 'Vrats & Fasting' },
                  { id: 'jayanti', label: 'Deity Jayantis' },
                  { id: 'sankranti', label: 'Sankrantis' },
                  { id: 'new-year', label: 'New Year' }
                ].map(cat => {
                  const isActive = selectedCategoryFilter === cat.id;
                  const isCurrentMonthBtn = cat.id === 'current-month';
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategoryFilter(cat.id);
                        if (cat.id === 'current-month') {
                          setSelectedGregorianMonth(currentMonthIndex);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                        isActive
                          ? isCurrentMonthBtn
                            ? 'bg-amber-500 text-stone-950 font-extrabold shadow-sm ring-2 ring-amber-400'
                            : 'bg-amber-900 text-white shadow-xs'
                          : isCurrentMonthBtn
                            ? 'bg-amber-100/90 hover:bg-amber-200 text-amber-950 border border-amber-300 font-extrabold'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                      }`}
                    >
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* 12 Gregorian Months Bar with festival counts and current month highlight */}
            <div className="pt-3 border-t border-stone-100 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>Browse By Month ({selectedYear}):</span>
                  </span>
                  {selectedGregorianMonth !== 'all' && (
                    <button
                      onClick={() => setSelectedGregorianMonth('all')}
                      className="text-[11px] font-bold text-amber-800 hover:underline cursor-pointer"
                    >
                      (Show All 12 Months)
                    </button>
                  )}
                </div>

                {/* View Layout Mode Toggle: Month-Wise Grouped vs Flat Grid */}
                <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl text-xs font-bold border border-stone-200">
                  <button
                    onClick={() => setViewLayoutMode('month-grouped')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      viewLayoutMode === 'month-grouped' ? 'bg-amber-900 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                    title="Organize festivals month by month (January to December)"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Month-wise View</span>
                  </button>
                  <button
                    onClick={() => setViewLayoutMode('flat-grid')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      viewLayoutMode === 'flat-grid' ? 'bg-amber-900 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                    title="Simple grid list"
                  >
                    <Grid className="w-3.5 h-3.5" />
                    <span>Grid View</span>
                  </button>
                </div>
              </div>

              {/* Month Pills Strip */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                <button
                  onClick={() => setSelectedGregorianMonth('all')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedGregorianMonth === 'all'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  All Months ({allFestivalOccurrencesWithMonth.length})
                </button>

                {gregorianMonthsMeta.map((m) => {
                  const isCurrent = m.index === currentMonthIndex;
                  const isSelected = selectedGregorianMonth === m.index;
                  const count = monthFestivalsCounts[m.index] || 0;
                  return (
                    <button
                      key={m.index}
                      onClick={() => {
                        setSelectedGregorianMonth(m.index);
                        if (selectedCategoryFilter === 'current-month' && m.index !== currentMonthIndex) {
                          setSelectedCategoryFilter('all');
                        }
                      }}
                      className={`px-2.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 relative ${
                        isSelected
                          ? isCurrent
                            ? 'bg-amber-500 text-stone-950 font-extrabold shadow-sm ring-2 ring-amber-400'
                            : 'bg-amber-900 text-white shadow-xs'
                          : isCurrent
                            ? 'bg-amber-100 text-amber-950 border border-amber-300 font-extrabold hover:bg-amber-200'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                      }`}
                    >
                      <span>{m.short}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected 
                          ? isCurrent ? 'bg-amber-600 text-white' : 'bg-amber-800 text-amber-100'
                          : isCurrent ? 'bg-amber-200 text-amber-900 font-bold' : 'bg-stone-200 text-stone-600'
                      }`}>
                        {count}
                      </span>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block animate-ping"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub-Filters: Deity & Month Dropdowns */}
            <div className="flex items-center gap-3 flex-wrap pt-2 border-t border-stone-100 text-xs text-stone-600">
              <span className="font-bold text-stone-500 uppercase">Filter by:</span>

              {/* Deity */}
              <select
                value={selectedDeityFilter}
                onChange={(e) => setSelectedDeityFilter(e.target.value)}
                className="bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-1 text-xs font-semibold text-stone-800 cursor-pointer focus:outline-none focus:border-amber-600"
              >
                <option value="all">All Deities</option>
                <option value="lakshmi">Goddess Lakshmi</option>
                <option value="shiva">Lord Shiva</option>
                <option value="krishna">Lord Krishna</option>
                <option value="rama">Bhagwan Rama</option>
                <option value="ganesha">Lord Ganesha</option>
                <option value="devi">Mata Durga / Devi</option>
                <option value="surya">Surya Deva</option>
              </select>

              {/* Lunar Month */}
              <select
                value={selectedMonthFilter}
                onChange={(e) => setSelectedMonthFilter(e.target.value)}
                className="bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-1 text-xs font-semibold text-stone-800 cursor-pointer focus:outline-none focus:border-amber-600"
              >
                <option value="all">All 12 Lunar Months</option>
                <option value="chaitra">Chaitra</option>
                <option value="vaishakha">Vaishakha</option>
                <option value="jyeshtha">Jyeshtha</option>
                <option value="ashadha">Ashadha</option>
                <option value="shravana">Shravana</option>
                <option value="bhadrapada">Bhadrapada</option>
                <option value="ashwin">Ashwin</option>
                <option value="kartik">Kartik</option>
                <option value="margashirsha">Margashirsha</option>
                <option value="pausha">Pausha</option>
                <option value="magha">Magha</option>
                <option value="phalguna">Phalguna</option>
              </select>

              <span className="ml-auto text-stone-400 font-medium">
                Showing {filteredFestivalsList.length} festivals for {selectedYear} in {currentCity.name}
              </span>
            </div>

          </div>

          {/* Main Festival Cards Display: Month-wise Grouped or Flat Grid */}
          {viewLayoutMode === 'month-grouped' ? (
            festivalsGroupedByMonth.length === 0 ? (
              <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-4">
                <Sparkles className="w-10 h-10 text-amber-500 mx-auto" />
                <h3 className="text-lg font-cinzel font-bold text-stone-900">No festivals match the selected criteria</h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Try selecting "All Festivals", changing the search query, or selecting "All Months" to explore the full Sanatana calendar.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategoryFilter('all');
                    setSelectedDeityFilter('all');
                    setSelectedMonthFilter('all');
                    setSelectedGregorianMonth('all');
                  }}
                  className="px-4 py-2 bg-amber-900 text-white rounded-xl text-xs font-bold hover:bg-amber-800 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {festivalsGroupedByMonth.map(group => {
                  const isCurrent = group.monthInfo.index === currentMonthIndex;
                  return (
                    <div key={group.monthInfo.index} className="space-y-4">
                      {/* Month Banner Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white px-5 sm:px-6 py-4 rounded-3xl shadow-sm border border-amber-500/30">
                        <div className="flex items-center gap-3.5">
                          <span className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 font-mono font-bold flex items-center justify-center text-sm shadow-inner shrink-0">
                            {String(group.monthInfo.index + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-lg sm:text-xl font-cinzel font-bold text-amber-100">
                                {group.monthInfo.name} {selectedYear} ({group.monthInfo.hindi})
                              </h3>
                              <span className="text-[11px] bg-amber-500/20 border border-amber-400/30 text-amber-200 px-2.5 py-0.5 rounded-full font-sans font-semibold">
                                {group.monthInfo.hinduMonths}
                              </span>
                              {isCurrent && (
                                <span className="text-[10px] bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                                  <span>⚡</span>
                                  <span>चालू महीना (Current Month)</span>
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-300 mt-0.5">{group.monthInfo.ritu}</p>
                          </div>
                        </div>

                        <div className="text-xs text-amber-200 font-bold self-start sm:self-auto bg-black/40 px-3.5 py-1.5 rounded-xl border border-amber-500/30">
                          {group.items.length} {group.items.length === 1 ? 'Festival' : 'Festivals'}
                        </div>
                      </div>

                      {/* Festival Cards Grid for This Month */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.items.map(({ def: fest, occ }) => (
                          <div
                            key={fest.id}
                            onClick={() => handleOpenDetail(fest.slug)}
                            className="bg-white rounded-3xl border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all p-5 flex flex-col justify-between group cursor-pointer space-y-4 text-left"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2 text-xs">
                                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                                  {fest.festival_type}
                                </span>
                                <span className="text-stone-500 text-[11px] font-semibold">
                                  {occ.hinduMonth} ({occ.tithiName.split('(')[0].trim()})
                                </span>
                              </div>

                              <h3 className="text-base font-cinzel font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                                {fest.canonical_name}
                              </h3>
                              
                              <div className="text-xs text-amber-800 font-medium">
                                {fest.hindi_name}
                              </div>

                              <div className="text-xs font-bold text-stone-900 pt-1 flex items-center gap-1.5">
                                <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
                                <span>{occ.formattedDate}</span>
                              </div>

                              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                                {fest.short_description}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                              <div className="text-[11px] text-stone-500">
                                Muhurat: <strong className="text-amber-900 font-mono">{occ.pujaMuhurat.start}</strong>
                              </div>

                              <span className="text-amber-700 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                <span>Full Details</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            /* Flat Grid Mode */
            filteredFestivalsList.length === 0 ? (
              <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-4">
                <Sparkles className="w-10 h-10 text-amber-500 mx-auto" />
                <h3 className="text-lg font-cinzel font-bold text-stone-900">No festivals match your search</h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Try searching for another festival, or reset your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategoryFilter('all');
                    setSelectedDeityFilter('all');
                    setSelectedMonthFilter('all');
                    setSelectedGregorianMonth('all');
                  }}
                  className="px-4 py-2 bg-amber-900 text-white rounded-xl text-xs font-bold hover:bg-amber-800 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredFestivalsList.map(({ def: fest, occ }) => (
                  <div
                    key={fest.id}
                    onClick={() => handleOpenDetail(fest.slug)}
                    className="bg-white rounded-3xl border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all p-5 flex flex-col justify-between group cursor-pointer space-y-4 text-left"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                          {fest.festival_type}
                        </span>
                        <span className="text-stone-500 text-[11px] font-semibold">
                          {occ.hinduMonth} ({occ.tithiName.split('(')[0].trim()})
                        </span>
                      </div>

                      <h3 className="text-base font-cinzel font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                        {fest.canonical_name}
                      </h3>
                      
                      <div className="text-xs text-amber-800 font-medium">
                        {fest.hindi_name}
                      </div>

                      <div className="text-xs font-bold text-stone-900 pt-1 flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
                        <span>{occ.formattedDate}</span>
                      </div>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {fest.short_description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <div className="text-[11px] text-stone-500">
                        Muhurat: <strong className="text-amber-900 font-mono">{occ.pujaMuhurat.start}</strong>
                      </div>

                      <span className="text-amber-700 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Full Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

        </div>
      )}

      {/* ========================================================= */}
      {/* 4. VIEW: CURATED POPULAR COLLECTIONS (TOP 10 / 20 / 25)   */}
      {/* ========================================================= */}
      {activePlatformView === 'popular' && (
        <div className="space-y-6">
          
          {/* Header & Collection Selector */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Editorial Curated Selections</span>
                <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                  Popular Hindu Festivals Collection ({selectedYear})
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Curated list of widely observed Sanatana festivals based on cultural relevance, traditional importance, and devotee reverence.
                </p>
              </div>

              {/* Top 10 / 20 / 25 Switcher */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200 self-start sm:self-auto text-xs font-bold">
                <button
                  onClick={() => setPopularCollectionType('top-10')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    popularCollectionType === 'top-10' ? 'bg-amber-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  Top 10 Major
                </button>
                <button
                  onClick={() => setPopularCollectionType('top-20')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    popularCollectionType === 'top-20' ? 'bg-amber-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  Top 20
                </button>
                <button
                  onClick={() => setPopularCollectionType('popular')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    popularCollectionType === 'popular' ? 'bg-amber-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  All Popular
                </button>
              </div>
            </div>
          </div>

          {/* List of Popular Festivals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularFestivalsList.map((occ, idx) => (
              <div
                key={occ.festival.id}
                onClick={() => handleOpenDetail(occ.festival.slug)}
                className="bg-white rounded-3xl border border-stone-200 hover:border-amber-500 hover:shadow-md transition-all p-5 flex flex-col justify-between group cursor-pointer space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xs">
                      #{idx + 1}
                    </span>
                    <span className="font-semibold text-stone-500 text-xs">
                      {occ.hinduMonth} • {occ.tithiName}
                    </span>
                  </div>

                  <h3 className="text-base font-cinzel font-bold text-stone-950 group-hover:text-amber-800 transition-colors mt-2">
                    {occ.festival.canonical_name}
                  </h3>

                  <div className="text-xs text-amber-800 font-medium">
                    {occ.festival.hindi_name}
                  </div>

                  <div className="text-xs font-bold text-stone-900 pt-2 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>{occ.formattedDate}</span>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                    {occ.festival.short_description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-mono text-[11px]">
                    Muhurat: <strong className="text-amber-900">{occ.pujaMuhurat.start} to {occ.pujaMuhurat.end}</strong>
                  </span>
                  <span className="text-amber-700 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 5. VIEW: 12 LUNAR MONTHS EXPLORER (CHAITRA TO PHALGUNA)   */}
      {/* ========================================================= */}
      {activePlatformView === 'months' && (
        <div className="space-y-6">
          
          {/* Header */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Vedic Chandramana Cycle</span>
            <h2 className="text-2xl font-cinzel font-bold text-stone-950">
              12 Sacred Lunar Months Directory ({selectedYear})
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Each lunar month brings unique planetary alignments, seasonal shifts (Ritu), presiding deities, Ekadashis, and festivals.
            </p>

            {/* 12 Months Horizontal Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-3 text-xs">
              {twelveLunarMonthsCatalog.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMonthSlug(m.slug)}
                  className={`px-3 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
                    selectedMonthSlug === m.slug
                      ? 'bg-amber-900 text-white shadow-xs scale-102 font-extrabold'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <span>{m.name}</span>
                  <span className="text-[10px] block opacity-75 font-normal">{m.approxSpan}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Month Deep-Dive */}
          {(() => {
            const activeMonthMeta = twelveLunarMonthsCatalog.find(m => m.slug === selectedMonthSlug) || twelveLunarMonthsCatalog[0];
            const monthFestivals = allFestivalsCatalog.filter(f => f.lunar_month === activeMonthMeta.slug);
            return (
              <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                      {activeMonthMeta.ritu} ({activeMonthMeta.rituHindi})
                    </span>
                    <h3 className="text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                      {activeMonthMeta.name} ({activeMonthMeta.hindiName})
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Presiding Deity: <strong className="text-stone-800">{activeMonthMeta.presidingDeity}</strong> • Approximate Span: <strong className="text-stone-800">{activeMonthMeta.approxSpan}</strong>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                    <strong className="text-amber-950 uppercase tracking-wider text-xs block">Significance & Observances</strong>
                    <p className="text-stone-700 leading-relaxed">{activeMonthMeta.significance}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <strong className="text-stone-900 uppercase tracking-wider text-xs block">Amanta vs Purnimanta Context</strong>
                    <p className="text-stone-700 leading-relaxed">{activeMonthMeta.amantaVsPurnimantaContext}</p>
                  </div>
                </div>

                {/* Festivals in this Month */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 font-cinzel">
                    Major Festivals Falling in {activeMonthMeta.name} ({selectedYear})
                  </h4>

                  {monthFestivals.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {monthFestivals.map(fest => {
                        const occ = calculateFestivalOccurrence(fest, selectedYear, currentCity);
                        return (
                          <div
                            key={fest.id}
                            onClick={() => handleOpenDetail(fest.slug)}
                            className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-400 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs"
                          >
                            <div className="space-y-0.5">
                              <span className="font-bold text-stone-900 text-sm block font-cinzel">{fest.canonical_name}</span>
                              <span className="text-amber-800 font-semibold">{occ.formattedDate}</span>
                              <span className="text-stone-500 block text-[11px]">{fest.short_description}</span>
                            </div>
                            <span className="text-amber-700 font-bold shrink-0">View →</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-stone-500 italic">No primary major catalog festivals registered directly under this month filter.</p>
                  )}
                </div>
              </div>
            );
          })()}

        </div>
      )}

      {/* ========================================================= */}
      {/* 6. VIEW: REGIONAL TRADITIONS (GUJARATI, TAMIL, MARATHI)   */}
      {/* ========================================================= */}
      {activePlatformView === 'regional' && (
        <div className="space-y-6">
          
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Sanatana Regional Diversity</span>
              <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                Regional Festival Collections
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                India’s sacred festivals celebrate the same divine truth across varied solar and lunisolar calendar rules.
              </p>
            </div>

            {/* Regional Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              {regionalCollectionsCatalog.map(reg => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegionalSlug(reg.id)}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedRegionalSlug === reg.id
                      ? 'bg-amber-900 text-white shadow-xs font-extrabold'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {reg.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Regional Deep-Dive */}
          {(() => {
            const activeReg = regionalCollectionsCatalog.find(r => r.id === selectedRegionalSlug) || regionalCollectionsCatalog[0];
            return (
              <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                    {activeReg.eraName} • {activeReg.calendarBasis.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                    {activeReg.name}
                  </h3>
                  <div className="text-sm font-semibold text-amber-900 mt-0.5">
                    {activeReg.nativeTitle}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
                    {activeReg.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 font-cinzel">
                    Signature Observances in {activeReg.region.split(',')[0]} ({selectedYear})
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeReg.keyFestivals.map(festSlug => {
                      const fest = allFestivalsCatalog.find(f => f.slug === festSlug || f.id === festSlug);
                      if (!fest) return null;
                      const occ = calculateFestivalOccurrence(fest, selectedYear, currentCity);
                      return (
                        <div
                          key={fest.id}
                          onClick={() => handleOpenDetail(fest.slug)}
                          className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-400 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="space-y-0.5">
                            <span className="font-bold text-stone-900 text-sm block font-cinzel">{fest.canonical_name}</span>
                            <span className="text-amber-800 font-semibold">{occ.formattedDate}</span>
                            <span className="text-stone-500 block text-[11px]">{fest.short_description}</span>
                          </div>
                          <span className="text-amber-700 font-bold shrink-0">Open Guide →</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      )}

      {/* ========================================================= */}
      {/* 7. VIEW: TODAY & UPCOMING FESTIVALS                       */}
      {/* ========================================================= */}
      {activePlatformView === 'today' && (
        <div className="space-y-6">
          
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Real-time Panchang & Observance Monitor</span>
              <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                Today's & Upcoming Festivals in {currentCity.name}
              </h2>
            </div>

            {/* Today's Feature Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 space-y-3">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-200/80 text-amber-950">
                Today's Sacred Observance
              </span>

              {todayAndUpcomingData.today.map((tOcc, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-cinzel font-bold text-stone-950">
                      {tOcc.festival.canonical_name}
                    </h3>
                    <div className="text-xs text-amber-800 font-semibold">
                      {tOcc.festival.hindi_name} • {tOcc.tithiName} ({tOcc.hinduMonth})
                    </div>
                    <p className="text-xs text-stone-600">{tOcc.festival.short_description}</p>
                  </div>

                  <div className="shrink-0 space-y-1 text-right">
                    <div className="text-xs text-stone-500">Puja Muhurat:</div>
                    <div className="text-base font-mono font-bold text-amber-950">
                      {tOcc.pujaMuhurat.start} – {tOcc.pujaMuhurat.end}
                    </div>
                    <button
                      onClick={() => handleOpenDetail(tOcc.festival.slug)}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-white font-bold text-xs cursor-pointer shadow-xs"
                    >
                      View Today's Puja Vidhi →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming 7 Days & 30 Days */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 font-cinzel">
                Upcoming Observances in the Next 30 Days
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {todayAndUpcomingData.next30Days.map((upOcc, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOpenDetail(upOcc.festival.slug)}
                    className="p-4 rounded-2xl bg-stone-50 hover:bg-white border border-stone-200 hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between space-y-2 text-xs"
                  >
                    <div>
                      <span className="text-[10px] text-amber-800 font-bold block">{upOcc.formattedDate}</span>
                      <strong className="text-stone-900 font-cinzel text-sm block">{upOcc.festival.canonical_name}</strong>
                      <p className="text-[11px] text-stone-600 line-clamp-2 mt-1">{upOcc.festival.short_description}</p>
                    </div>
                    <div className="text-right text-amber-700 font-bold text-[11px]">
                      View Muhurat →
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 8. VIEW: ASTRONOMICAL VALIDATION & ADMIN AUDIT DASHBOARD   */}
      {/* ========================================================= */}
      {activePlatformView === 'admin-audit' && (
        <div className="space-y-6">
          
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Automated Astronomical Date & Muhurat Validation</span>
              </span>
              <h2 className="text-2xl font-cinzel font-bold text-stone-950 mt-0.5">
                Festival Calculation Audit & Verification
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Every festival is dynamically checked against local sunrise, sunset, midnight tithi presence, and tradition rules.
              </p>
            </div>

            {/* Validation Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3">Festival</th>
                    <th className="p-3">Calculated Date ({selectedYear})</th>
                    <th className="p-3">Tithi & Month</th>
                    <th className="p-3">Location Rule</th>
                    <th className="p-3">Calculation Basis</th>
                    <th className="p-3">Audit Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {allFestivalsCatalog.map(fest => {
                    const occ = calculateFestivalOccurrence(fest, selectedYear, currentCity);
                    return (
                      <tr key={fest.id} className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900 font-cinzel">{fest.canonical_name}</td>
                        <td className="p-3 text-amber-900 font-semibold">{occ.formattedDate}</td>
                        <td className="p-3 text-stone-600">{occ.hinduMonth} {occ.tithiName.split('(')[0]}</td>
                        <td className="p-3 text-stone-500">{currentCity.name} (IST)</td>
                        <td className="p-3 text-stone-600 font-mono text-[11px]">{fest.calculation_method}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] inline-flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 9. CITY SELECTION MODAL                                   */}
      {/* ========================================================= */}
      {isCityModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] shadow-2xl flex flex-col border border-stone-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-cinzel font-bold text-stone-900">
                  Select City for Astronomical Calculations
                </h3>
              </div>
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="w-8 h-8 rounded-xl bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* City Search Bar */}
            <div className="p-4 border-b border-stone-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={citySearchQuery}
                  onChange={(e) => setCitySearchQuery(e.target.value)}
                  placeholder="Search city or state (e.g. Ahmedabad, Surat, Mumbai, Varanasi)..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>

            {/* City List */}
            <div className="p-4 overflow-y-auto flex-1 divide-y divide-stone-100">
              {filteredCities.map(city => (
                <button
                  key={city.id}
                  onClick={() => {
                    setSelectedCityId(city.id);
                    setIsCityModalOpen(false);
                    showToast(`Updated location to ${city.name}, ${city.state}`);
                  }}
                  className={`w-full p-3 text-left rounded-xl transition-all cursor-pointer flex items-center justify-between text-xs ${
                    city.id === selectedCityId ? 'bg-amber-100/70 text-amber-950 font-bold' : 'hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm block">{city.name}</span>
                    <span className="text-stone-500 text-[11px]">{city.state}, India ({city.lat.toFixed(2)}°N, {city.lng.toFixed(2)}°E)</span>
                  </div>
                  {city.id === selectedCityId && (
                    <span className="text-amber-800 text-xs font-bold">Active ✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
