import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Sun, 
  Moon, 
  Clock, 
  MapPin, 
  Calendar as CalendarIcon, 
  Sparkles, 
  AlertTriangle, 
  ChevronRight, 
  Compass, 
  Share2, 
  Printer, 
  CheckCircle,
  Bell,
  ArrowRight,
  ShieldAlert,
  Flame,
  Globe,
  Layers,
  ChevronLeft,
  Info,
  Check,
  Search,
  X,
  Crosshair,
  SlidersHorizontal,
  Navigation,
  CalendarDays,
  Zap,
  Star,
  Bookmark,
  Heart,
  Home,
  Car,
  Briefcase,
  FileText,
  HelpCircle,
  Download,
  BookOpen,
  Copy
} from 'lucide-react';
import { Language, CityData, ChoghadiyaItem } from '../types';
import { calculateDailyPanchang } from '../data/panchangEngine';
import { allIndianCities, allIndianStates, searchCities, findClosestCity, calculateSolarOffsetMin } from '../data/indianCities';
import { panchangI18n, PanchangTermLocalization } from '../data/panchangTranslations';
import { allMuhuratGuides, MuhuratDetails } from '../data/muhuratData';

interface PanchangSectionProps {
  currentLang: Language;
  onChangeLang?: (lang: Language) => void;
  selectedCityId: string;
  onSelectCity: (cityId: string) => void;
  onSubscribePanchangAlerts: () => void;
  onNavigateToCalendar?: () => void;
  initialDate?: Date;
}

const religiousLanguages: { code: Language; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English (Default)', flag: '🌐' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🕉️' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🪔' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🚩' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🌺' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🛕' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🪷' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🌿' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🥥' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: 'ੴ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🐚' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्', flag: '🔱' }
];

// Helper to convert "06:29 AM" into minutes from midnight
function parseTimeStringToMinutes(timeStr: string): number {
  if (!timeStr) return 0;
  const clean = timeStr.trim();
  const match = clean.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === 'PM' && hours < 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

export const PanchangSection: React.FC<PanchangSectionProps> = ({
  currentLang = 'en',
  onChangeLang,
  selectedCityId,
  onSelectCity,
  onSubscribePanchangAlerts,
  onNavigateToCalendar,
  initialDate
}) => {
  // Local language state (defaults to English 'en' or currentLang if provided)
  const [activeLang, setActiveLang] = useState<Language>(() => {
    return currentLang || 'en';
  });

  // Date state: DEFAULTS TO TODAY's ACTUAL DATE as requested (or initialDate if navigated from calendar)
  const [selectedDate, setSelectedDate] = useState<Date>(() => initialDate || new Date());
  
  useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate);
    }
  }, [initialDate]);
  
  const [activeChoghadiyaTab, setActiveChoghadiyaTab] = useState<'day' | 'night'>('day');
  const [activeDetailSection, setActiveDetailSection] = useState<'all' | 'limbs' | 'choghadiya' | 'muhurat' | 'drik' | 'festival' | 'hora' | 'samvat' | 'summary'>('all');
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Selected Muhurat Guide Modal state (from Image 2 cards)
  const [activeMuhuratModal, setActiveMuhuratModal] = useState<MuhuratDetails | null>(null);

  // Reference for scrolling to choghadiya
  const choghadiyaRef = useRef<HTMLDivElement>(null);

  // Live ticking clock state
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // City Selector Modal States
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState('All States / UTs');
  const [isLocatingUser, setIsLocatingUser] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Custom city support (if user enters a custom place)
  const [customCityData, setCustomCityData] = useState<CityData | null>(null);

  // Dictionary for active language
  const loc: PanchangTermLocalization = panchangI18n[activeLang] || panchangI18n.en;

  // Active city object
  const currentCityObj: CityData = useMemo(() => {
    if (customCityData && customCityData.id === selectedCityId) {
      return customCityData;
    }
    const found = allIndianCities.find(c => c.id === selectedCityId);
    if (found) return found;
    return allIndianCities[0];
  }, [selectedCityId, customCityData]);

  // Compute live panchang dynamically based on chosen date and city
  const panchang = useMemo(() => {
    return calculateDailyPanchang(selectedDate, currentCityObj);
  }, [selectedDate, currentCityObj]);

  // Dynamic SEO Page Title & Meta description for Google Search Optimization
  useEffect(() => {
    const formatted = panchang.formattedDate || new Date().toDateString();
    const city = currentCityObj.name || 'India';
    document.title = `${city} Panchang (${formatted}) - Aaj Ka Shubh Muhurat & Choghadiya | MahaDarshan`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `Aaj Ka Panchang for ${city} (${formatted}): Tithi ${panchang.tithi}, Nakshatra ${panchang.nakshatra}, Abhijit ${panchang.abhijitMuhurat}, Rahu Kaal ${panchang.rahuKaal}. Check Shubh Choghadiya & Vivah Muhurat.`
      );
    }
  }, [panchang, currentCityObj]);

  // Active Choghadiya detection based on real time
  const activeChoghadiyaSlot = useMemo(() => {
    const nowMins = currentTime.getHours() * 60 + currentTime.getMinutes();
    const sunriseMins = parseTimeStringToMinutes(panchang.sunrise);
    const sunsetMins = parseTimeStringToMinutes(panchang.sunset);

    const isDayTime = nowMins >= sunriseMins && nowMins < sunsetMins;
    const targetSlots = isDayTime ? panchang.dayChoghadiya : panchang.nightChoghadiya;

    if (!targetSlots || targetSlots.length === 0) return null;

    for (const slot of targetSlots) {
      const sMin = parseTimeStringToMinutes(slot.startTime);
      const eMin = parseTimeStringToMinutes(slot.endTime);
      if (eMin > sMin) {
        if (nowMins >= sMin && nowMins < eMin) {
          return { slot, isDayTime };
        }
      } else {
        if (nowMins >= sMin || nowMins < eMin) {
          return { slot, isDayTime };
        }
      }
    }

    return { slot: targetSlots[0], isDayTime: true };
  }, [currentTime, panchang]);

  // Filtered cities list for city selector dialog
  const filteredCities = useMemo(() => {
    return searchCities(citySearchQuery, selectedStateFilter);
  }, [citySearchQuery, selectedStateFilter]);

  // Popular cities
  const popularCities = useMemo(() => {
    return allIndianCities.filter(c => c.isPopular);
  }, []);

  const handleLanguageSwitch = (lang: Language) => {
    setActiveLang(lang);
    if (onChangeLang) {
      onChangeLang(lang);
    }
  };

  const handleDateChange = (offsetDays: number) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + offsetDays);
    setSelectedDate(d);
  };

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const [y, m, d] = e.target.value.split('-').map(Number);
      setSelectedDate(new Date(y, m - 1, d));
    }
  };

  // Jump to today
  const handleJumpToToday = () => {
    setSelectedDate(new Date());
  };

  // GPS auto-locate
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocatingUser(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocatingUser(false);
        const { latitude, longitude } = pos.coords;
        const closest = findClosestCity(latitude, longitude);

        const dLat = Math.abs(closest.lat - latitude);
        const dLng = Math.abs(closest.lng - longitude);

        if (dLat < 0.3 && dLng < 0.3) {
          onSelectCity(closest.id);
        } else {
          const customId = `gps-${latitude.toFixed(2)}-${longitude.toFixed(2)}`;
          const userCity: CityData = {
            id: customId,
            name: `My GPS Location (${closest.state})`,
            hindiName: `वर्तमान स्थान (${closest.hindiName.split(' ')[0]})`,
            state: closest.state || 'Local Region',
            lat: parseFloat(latitude.toFixed(4)),
            lng: parseFloat(longitude.toFixed(4)),
            sunriseDeltaMin: calculateSolarOffsetMin(longitude)
          };
          setCustomCityData(userCity);
          onSelectCity(customId);
        }
        setIsCityModalOpen(false);
      },
      (err) => {
        setIsLocatingUser(false);
        setLocationError(`Location detection failed: ${err.message}. Please select your city manually.`);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleSharePanchang = () => {
    const text = `🔱 ${loc.panchangTitle}\n📍 ${currentCityObj.name} (${currentCityObj.hindiName}), ${currentCityObj.state}\n📅 ${panchang.formattedDate}\n• ${loc.tithi}: ${panchang.tithi} (${panchang.tithiHindi})\n• Festival: ${panchang.primaryFestival?.title || panchang.festivalsToday[0]?.name}\n• ${loc.nakshatra}: ${panchang.nakshatra} (${panchang.nakshatraHindi})\n• ${loc.sunrise}: ${panchang.sunrise} | ${loc.sunset}: ${panchang.sunset}\n• ${loc.abhijitMuhurat}: ${panchang.abhijitMuhurat}\n• ${loc.rahuKaal}: ${panchang.rahuKaal}\n\nhttps://culroot.in/panchang`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    }
  };

  const handleCopyTodaySummary = () => {
    const text = `🕉️ ${currentCityObj.name} Panchang Summary (${panchang.formattedDate})
📅 Tithi: ${panchang.tithi} (${panchang.tithiHindi}) - Ends at ${panchang.tithiEndsAt}
✨ Nakshatra: ${panchang.nakshatra} (${panchang.nakshatraHindi}) - Ends at ${panchang.nakshatraEndsAt}
🧘 Yoga: ${panchang.yoga} | Karana: ${panchang.karana}
🌅 Sunrise: ${panchang.sunrise} | Sunset: ${panchang.sunset}
⭐ Abhijit Muhurat: ${panchang.abhijitMuhurat}
⚠️ Rahu Kaal: ${panchang.rahuKaal}
🌞 Sun: ${panchang.suryaRashi} | 🌙 Moon: ${panchang.chandraRashi}
🚩 Special: ${panchang.festivalDeepDive?.title || panchang.primaryFestival?.title || 'Daily Nitya Upasana'}
📍 Location: ${currentCityObj.name} (${currentCityObj.lat.toFixed(2)}°N, ${currentCityObj.lng.toFixed(2)}°E)
* Calculated via authentic Surya Siddhanta & Drik Ganita algorithms.
Shared via MahaDarshan Vedic Panchang`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToChoghadiya = () => {
    setActiveDetailSection('choghadiya');
    if (choghadiyaRef.current) {
      choghadiyaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dateInputValue = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

  const isToday = useMemo(() => {
    const today = new Date();
    return selectedDate.getDate() === today.getDate() &&
           selectedDate.getMonth() === today.getMonth() &&
           selectedDate.getFullYear() === today.getFullYear();
  }, [selectedDate]);

  return (
    <div className="space-y-6">
      
      {/* ========================================================= */}
      {/* 1. TOP HEADER & STREAMLINED DATE CONTROLS BAR             */}
      {/* ========================================================= */}
      <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-5">
        
        {/* Top Header Row with Location & Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-100 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{loc.panchangSubtitle}</span>
              <span className="text-amber-400">•</span>
              <span className="text-stone-700 font-semibold">{currentCityObj.name}, {currentCityObj.state}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-950 flex flex-wrap items-center gap-2">
              <span>{loc.panchangTitle}</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              Vedic Panchang, Choghadiya & Festivals auto-calculated for <strong className="text-stone-900">{currentCityObj.name}</strong>. Timings update dynamically day-by-day.
            </p>
          </div>

          {/* Action buttons & City Modal Button */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* City Selector Button (culroot style) */}
            <button
              onClick={() => setIsCityModalOpen(true)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border border-amber-300 rounded-2xl transition-all cursor-pointer shadow-xs group"
              title="Click to search any Indian city or district"
            >
              <div className="w-7 h-7 rounded-xl bg-amber-700 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-amber-900/70 tracking-wider">
                  {loc.selectCity}
                </div>
                <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1">
                  <span>{currentCityObj.name}</span>
                  <span className="text-[11px] font-normal text-stone-500">({currentCityObj.state})</span>
                </div>
              </div>
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-800 ml-1" />
            </button>

            {/* Share Button */}
            <button
              onClick={handleSharePanchang}
              className="p-2.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title="Share Panchang"
            >
              <Share2 className="w-4 h-4 text-amber-800" />
              <span className="hidden sm:inline">{copiedNotification ? loc.copied : loc.sharePanchang}</span>
            </button>

            {/* Print / PDF Button */}
            <button
              onClick={handlePrint}
              className="p-2.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 rounded-xl transition-colors cursor-pointer text-xs font-bold hidden md:flex items-center gap-1.5"
              title="Print Panchang / PDF"
            >
              <Printer className="w-4 h-4" />
              <span>{loc.print}</span>
            </button>

            {/* Monthly Calendar Navigation */}
            {onNavigateToCalendar && (
              <button
                onClick={onNavigateToCalendar}
                className="flex items-center gap-1.5 px-3.5 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-200 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                <CalendarIcon className="w-4 h-4 text-amber-300" />
                <span>{loc.monthlyCalendar}</span>
              </button>
            )}
          </div>
        </div>

        {/* 2. Religious & Regional Language Filter Strip */}
        <div className="bg-stone-50/90 border border-stone-200/90 rounded-2xl p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-800" />
              <span className="text-xs font-bold text-stone-800">
                Language / भाषा फ़िल्टर:
              </span>
              <span className="text-[11px] text-stone-500 hidden md:inline">
                (Switch scripture and labels instantly)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto py-0.5">
              {religiousLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSwitch(lang.code)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap ${
                    activeLang === lang.code
                      ? 'bg-amber-900 text-white shadow-xs font-bold ring-2 ring-amber-700/30'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-amber-50/70 hover:border-amber-300'
                  }`}
                >
                  <span className="text-xs">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Streamlined Day Navigation Controls (No confusing extra middle buttons!) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
          
          {/* Simple, Non-Confusing Navigation: Previous Day, Today, Next Day */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleDateChange(-1)}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-2xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Go to Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{loc.prevDay}</span>
            </button>

            {/* Main Today Button: Highlights if on today, or jumps directly to today if on another day */}
            <button
              onClick={handleJumpToToday}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shadow-sm ${
                isToday
                  ? 'bg-emerald-800 text-white ring-2 ring-emerald-600/30 font-extrabold'
                  : 'bg-amber-100/80 hover:bg-amber-200 text-amber-950 border border-amber-300'
              }`}
              title={isToday ? "Viewing Today's Panchang" : "Click to Jump Back to Today"}
            >
              <span className={`w-2 h-2 rounded-full ${isToday ? 'bg-emerald-300 animate-pulse' : 'bg-amber-600'}`}></span>
              <span>{isToday ? `Today (${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })})` : 'Jump to Today'}</span>
            </button>

            <button
              onClick={() => handleDateChange(1)}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-2xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Go to Next Day"
            >
              <span>{loc.nextDay}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Date Picker Input & Real-Time IST Clock */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-stone-500">{loc.chooseDate}</span>
              <input
                type="date"
                value={dateInputValue}
                onChange={handleDateInput}
                className="px-3.5 py-2 bg-stone-50 hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-bold text-stone-900 focus:outline-none focus:border-amber-600 cursor-pointer shadow-2xs"
              />
            </div>

            {/* Live Ticking Clock (IST) */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-mono font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
              <span>IST: {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</span>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. "AAJ KYA HAI" - TODAY AT A GLANCE (HERO DASHBOARD)      */}
      {/* ========================================================= */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-[#782410] to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-800/40 space-y-6">
        
        {/* Background glowing sacred ornaments */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        {/* Top Header inside Hero: Big Date, Day of Week & Samvat */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-700/40 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 text-[11px] font-bold tracking-wider uppercase">
                {currentCityObj.name} Daily Almanac
              </span>
              <span className="text-amber-300 text-xs">
                {panchang.vaarHindi} ({panchang.vaar})
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-amber-50 tracking-tight">
              {panchang.formattedDate}
            </h2>

            <p className="text-xs sm:text-sm text-amber-200/90 font-medium">
              {panchang.amantaMasa} • {panchang.pakshaHindi} • {panchang.tithiHindi} • {panchang.vikramSamvatName} (संवत {panchang.vikramSamvat})
            </p>
          </div>

          {/* Quick Sunrise / Sunset Badges inside Hero */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-black/30 border border-amber-600/30 backdrop-blur-xs text-center min-w-[95px]">
              <div className="text-[10px] uppercase font-bold text-amber-300 flex items-center justify-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>{loc.sunrise}</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                {panchang.sunrise}
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-black/30 border border-amber-600/30 backdrop-blur-xs text-center min-w-[95px]">
              <div className="text-[10px] uppercase font-bold text-orange-300 flex items-center justify-center gap-1">
                <Sun className="w-3.5 h-3.5 text-orange-400" />
                <span>{loc.sunset}</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                {panchang.sunset}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Festival / Vrat Card (TODAY'S SPECIAL HIGHLIGHT) */}
        {panchang.primaryFestival && (
          <div className="relative z-10 bg-gradient-to-r from-amber-900/60 via-orange-950/60 to-black/50 border border-amber-500/40 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{panchang.primaryFestival.icon || '🪔'}</span>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950 text-[10px] font-extrabold uppercase tracking-wider">
                    {panchang.primaryFestival.badge || 'TODAY FESTIVAL / VRAT'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-100 mt-1">
                    {activeLang === 'en' ? panchang.primaryFestival.title : panchang.primaryFestival.hindiTitle}
                  </h3>
                </div>
              </div>

              {/* Puja Muhurat Chip */}
              {panchang.primaryFestival.pujaMuhurat && (
                <div className="px-3.5 py-2 rounded-xl bg-amber-400/20 border border-amber-400/40 text-left sm:text-right shrink-0">
                  <div className="text-[10px] uppercase font-bold text-amber-200">Puja / Shubh Muhurat:</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-100 font-mono">
                    {panchang.primaryFestival.pujaMuhurat}
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              {activeLang === 'en' ? panchang.primaryFestival.description : panchang.primaryFestival.hindiDescription}
            </p>

            {/* Fasting Rules & Additional Observances */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-amber-700/30 text-xs">
              {panchang.primaryFestival.fastRules && (
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span><strong>Vrat Niyam:</strong> {panchang.primaryFestival.fastRules}</span>
                </div>
              )}
              {panchang.festivalsToday && panchang.festivalsToday.length > 1 && (
                <div className="flex flex-wrap items-center gap-1.5 ml-auto">
                  <span className="text-[11px] text-amber-300/80 font-bold">Also today:</span>
                  {panchang.festivalsToday.slice(1, 4).map((f, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-lg bg-black/40 border border-amber-600/30 text-[10px] text-amber-200 font-medium">
                      {f.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4 Big Insight Metric Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          {/* 1. Tithi Metric */}
          <div className="bg-black/35 border border-amber-600/30 rounded-2xl p-4 space-y-1.5 backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase font-bold text-amber-300 tracking-wider">
                {loc.tithi}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-400/20 text-amber-200">
                {panchang.paksha}
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white">
              {activeLang === 'en' ? panchang.tithi : panchang.tithiHindi}
            </div>
            <div className="text-[11px] text-amber-200/80">
              Ends at: <strong className="text-white font-mono">{panchang.tithiEndsAt}</strong>
            </div>
            <div className="text-[10px] text-stone-300 pt-1 border-t border-amber-700/20">
              Next: {activeLang === 'en' ? (panchang.nextTithi || 'Purnima') : (panchang.nextTithiHindi || 'पूर्णिमा')}
            </div>
          </div>

          {/* 2. Currently Active Choghadiya Right Now */}
          <div className="bg-black/35 border border-amber-600/30 rounded-2xl p-4 space-y-1.5 backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Choghadiya</span>
              </span>
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                activeChoghadiyaSlot?.slot?.isAuspicious ? 'bg-emerald-400 text-stone-950' : 'bg-rose-400 text-stone-950'
              }`}>
                {activeChoghadiyaSlot?.slot?.isAuspicious ? 'SHUBH' : 'AVOID'}
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white">
              {activeChoghadiyaSlot?.slot?.hindiName || 'अमृत (Amrit)'}
            </div>
            <div className="text-[11px] text-amber-200/80 font-mono">
              {activeChoghadiyaSlot?.slot?.startTime} - {activeChoghadiyaSlot?.slot?.endTime}
            </div>
            <div className="text-[10px] text-stone-300 pt-1 border-t border-amber-700/20">
              Ruler: {activeChoghadiyaSlot?.slot?.ruler} • {activeChoghadiyaSlot?.isDayTime ? 'Day Slot' : 'Night Slot'}
            </div>
          </div>

          {/* 3. Abhijit Muhurat (Best Window) */}
          <div className="bg-black/35 border border-emerald-500/40 rounded-2xl p-4 space-y-1.5 backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase font-bold text-emerald-300 tracking-wider">
                {loc.abhijitMuhurat.split('(')[0]}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-200">
                Golden Time
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-emerald-100 font-mono">
              {panchang.abhijitMuhurat}
            </div>
            <div className="text-[11px] text-emerald-200/80">
              Most auspicious 8th Muhurat of the day
            </div>
            <div className="text-[10px] text-emerald-300/70 pt-1 border-t border-emerald-500/20">
              Good for starting new ventures & investments
            </div>
          </div>

          {/* 4. Rahu Kaal (Inauspicious Window) */}
          <div className="bg-black/35 border border-rose-500/40 rounded-2xl p-4 space-y-1.5 backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase font-bold text-rose-300 tracking-wider">
                {loc.rahuKaal.split('(')[0]}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-rose-500/20 text-rose-200">
                Inauspicious
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-rose-100 font-mono">
              {panchang.rahuKaal}
            </div>
            <div className="text-[11px] text-rose-200/80">
              Yamaganda: <span className="font-mono">{panchang.yamaganda}</span>
            </div>
            <div className="text-[10px] text-rose-300/70 pt-1 border-t border-rose-500/20">
              Avoid buying property, gold or new agreements
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 3. CULROOT-STYLE 8-CARD MUHURAT & UTILITIES GRID (IMAGE 2) */}
      {/* ========================================================= */}
      <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
        
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span>Auspicious Muhurats & Vedic Utilities</span>
            </h3>
            <p className="text-xs text-stone-500">
              Instant access to authentic Shubh Vivah, Griha Pravesh, Vehicle, Business dates & download tools
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Card Grid exactly matching user's Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          
          {/* Card 1: Vivah Muhurat */}
          <button
            onClick={() => setActiveMuhuratModal(allMuhuratGuides.vivah)}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50/70 to-white hover:from-emerald-100/70 hover:to-emerald-50/30 border border-emerald-200/80 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Heart className="w-5 h-5 text-emerald-100 fill-emerald-100/30" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-emerald-950 group-hover:text-emerald-900">
                  Vivah Muhurat
                </div>
                <div className="text-[11px] text-emerald-800/80">
                  शुभ विवाह लग्न एवं पाणिग्रहण तिथियां
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 2: Griha Pravesh */}
          <button
            onClick={() => setActiveMuhuratModal(allMuhuratGuides.grihapravesh)}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50/70 to-white hover:from-amber-100/70 hover:to-amber-50/30 border border-amber-200/80 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-amber-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Home className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-amber-950 group-hover:text-amber-900">
                  Griha Pravesh
                </div>
                <div className="text-[11px] text-amber-800/80">
                  नवीन गृह प्रवेश एवं वास्तु शांति मुहूर्त
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 3: Vehicle Muhurat */}
          <button
            onClick={() => setActiveMuhuratModal(allMuhuratGuides.vehicle)}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/70 to-white hover:from-blue-100/70 hover:to-blue-50/30 border border-blue-200/80 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-blue-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Car className="w-5 h-5 text-blue-100" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-blue-950 group-hover:text-blue-900">
                  Vehicle Muhurat
                </div>
                <div className="text-[11px] text-blue-800/80">
                  कार व दोपहिया वाहन खरीद शुभ समय
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 4: Business Muhurat */}
          <button
            onClick={() => setActiveMuhuratModal(allMuhuratGuides.business)}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50/70 to-white hover:from-indigo-100/70 hover:to-indigo-50/30 border border-indigo-200/80 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-indigo-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Briefcase className="w-5 h-5 text-indigo-100" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-indigo-950 group-hover:text-indigo-900">
                  Business Muhurat
                </div>
                <div className="text-[11px] text-indigo-800/80">
                  दुकान, फैक्ट्री व नए व्यापार उद्घाटन
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-indigo-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 5: Choghadiya */}
          <button
            onClick={scrollToChoghadiya}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50/70 to-white hover:from-amber-100/70 hover:to-amber-50/30 border border-amber-200/80 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-amber-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Clock className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-amber-950">
                  Choghadiya
                </div>
                <div className="text-[11px] text-stone-500">
                  दिन व रात का 24 घंटे का चौघड़िया चक्र
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-800 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 6: Monthly Calendar */}
          <button
            onClick={() => onNavigateToCalendar ? onNavigateToCalendar() : setActiveDetailSection('samvat')}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50/70 to-white hover:from-orange-100/70 hover:to-orange-50/30 border border-orange-200/80 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-orange-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <CalendarDays className="w-5 h-5 text-orange-200" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-orange-950">
                  Monthly Calendar
                </div>
                <div className="text-[11px] text-stone-500">
                  मासिक हिन्दू पंचांग एवं व्रत दिनदर्शिका
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-orange-800 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 7: Festivals */}
          <button
            onClick={() => setActiveMuhuratModal(allMuhuratGuides.festivals)}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50/70 to-white hover:from-rose-100/70 hover:to-rose-50/30 border border-rose-200/80 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-rose-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Flame className="w-5 h-5 text-rose-200" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-rose-950 group-hover:text-rose-900">
                  Festivals
                </div>
                <div className="text-[11px] text-rose-800/80">
                  प्रमुख हिन्दू त्योहार, जयंती व व्रत सूची
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-rose-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 8: PDF Download */}
          <button
            onClick={handlePrint}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50/80 to-white hover:from-slate-100/80 hover:to-slate-50/40 border border-slate-300 rounded-2xl transition-all cursor-pointer group shadow-2xs text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <FileText className="w-5 h-5 text-slate-200" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-slate-900">
                  PDF Download
                </div>
                <div className="text-[11px] text-slate-600">
                  दैनिक पंचांग व चौघड़िया प्रिंट / सेव करें
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-800 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. SECTION TABS FOR DEEP EXPLORATION                      */}
      {/* ========================================================= */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-2">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <button
            onClick={() => setActiveDetailSection('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'all'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            All Sections (सम्पूर्ण विवरण)
          </button>
          <button
            onClick={() => setActiveDetailSection('limbs')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'limbs'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            5 Limbs (पंचांग)
          </button>
          <button
            onClick={() => setActiveDetailSection('choghadiya')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'choghadiya'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Choghadiya (चौघड़िया)
          </button>
          <button
            onClick={() => setActiveDetailSection('muhurat')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'muhurat'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Muhurats (मुहूर्त)
          </button>
          <button
            onClick={() => setActiveDetailSection('drik')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'drik'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Drik Astro (दृक गणना)
          </button>
          <button
            onClick={() => setActiveDetailSection('festival')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'festival'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Festival Special (पर्व व व्रत)
          </button>
          <button
            onClick={() => setActiveDetailSection('hora')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'hora'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Planetary Horas (ग्रह होरा)
          </button>
          <button
            onClick={() => setActiveDetailSection('samvat')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'samvat'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Samvat (संवत)
          </button>
          <button
            onClick={() => setActiveDetailSection('summary')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDetailSection === 'summary'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            Today's Summary (सारांश)
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. THE FIVE SACRED LIMBS OF PANCHANG (PANCH-ANGA)          */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'limbs') && (
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="space-y-0.5">
              <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-700" />
                <span>{loc.fiveLimbs}</span>
              </h3>
              <p className="text-xs text-stone-500">
                Core Vedic elements for Muhurat selection, rituals and daily undertakings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* 1. Tithi Card */}
            <div className="bg-gradient-to-br from-amber-50/70 to-orange-50/40 border border-amber-200/80 rounded-2xl p-4 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">{loc.tithi}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-200 text-amber-950">
                  {panchang.paksha}
                </span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-950">
                  {activeLang === 'en' ? panchang.tithi : panchang.tithiHindi}
                </div>
                <div className="text-xs font-medium text-stone-600 mt-1">
                  Ends at: <span className="font-bold text-amber-950">{panchang.tithiEndsAt}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-amber-200/60 text-[11px] text-stone-600 flex flex-col gap-0.5">
                <span>Next: <strong>{activeLang === 'en' ? (panchang.nextTithi || 'Purnima') : (panchang.nextTithiHindi || 'पूर्णिमा')}</strong></span>
                {panchang.tithiDeity && <span>Presiding Deity: <strong>{panchang.tithiDeity}</strong></span>}
              </div>
            </div>

            {/* 2. Nakshatra Card */}
            <div className="bg-gradient-to-br from-indigo-50/60 to-purple-50/30 border border-indigo-200/70 rounded-2xl p-4 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-indigo-900 uppercase tracking-wider">{loc.nakshatra}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-indigo-200 text-indigo-950">
                  Pada: {panchang.nakshatraPada?.split(' ')[1] || '1, 2, 3'}
                </span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-950">
                  {activeLang === 'en' ? panchang.nakshatra : panchang.nakshatraHindi}
                </div>
                <div className="text-xs font-medium text-stone-600 mt-1">
                  Ends at: <span className="font-bold text-indigo-950">{panchang.nakshatraEndsAt}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-indigo-200/60 text-[11px] text-stone-600 flex flex-col gap-0.5">
                <span>Ruling Lord: <strong>{panchang.nakshatraLord}</strong></span>
                {panchang.nextNakshatra && <span>Next: <strong>{panchang.nextNakshatra}</strong></span>}
              </div>
            </div>

            {/* 3. Yoga Card */}
            <div className="bg-gradient-to-br from-emerald-50/60 to-teal-50/30 border border-emerald-200/70 rounded-2xl p-4 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider">{loc.yoga}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-200 text-emerald-950">
                  Luni-Solar
                </span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-950">
                  {panchang.yoga}
                </div>
                <div className="text-xs font-medium text-stone-600 mt-1">
                  Ends at: <span className="font-bold text-emerald-950">{panchang.yogaEndsAt}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-200/60 text-[11px] text-stone-600 flex flex-col gap-0.5">
                {panchang.nextYoga && <span>Next Yoga: <strong>{panchang.nextYoga}</strong></span>}
                <span>Yoga Nature: <strong>Beneficial for spiritual practices</strong></span>
              </div>
            </div>

            {/* 4. Karana Card */}
            <div className="bg-gradient-to-br from-stone-50 to-stone-100/60 border border-stone-200 rounded-2xl p-4 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wider">{loc.karana}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-stone-200 text-stone-900">
                  1st Half
                </span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-950">
                  {panchang.karana}
                </div>
                <div className="text-xs font-medium text-stone-600 mt-1">
                  Ends at: <span className="font-bold text-stone-900">{panchang.karanaEndsAt}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-600 flex flex-col gap-0.5">
                <span>2nd Karana: <strong>{panchang.secondKarana}</strong> ({panchang.secondKaranaEndsAt})</span>
              </div>
            </div>

            {/* 5. Vaar (Day) Card */}
            <div className="bg-gradient-to-br from-amber-50/50 to-yellow-50/40 border border-amber-200 rounded-2xl p-4 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">{loc.vaar}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-100 text-amber-900">
                  Day Ruler
                </span>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-950">
                  {panchang.vaar} ({panchang.vaarHindi})
                </div>
                <div className="text-xs font-medium text-stone-600 mt-1">
                  Ruling Planet: <span className="font-bold text-amber-950">{panchang.vaarLord}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-amber-200/60 text-[11px] text-stone-600 flex flex-col gap-0.5">
                <span>Auspicious for: <strong>Venus/Devotional prayers & Goddess worship</strong></span>
              </div>
            </div>

            {/* 6. Travel & Disha Shool Card */}
            <div className="bg-gradient-to-br from-rose-50/40 to-stone-50 border border-rose-200/70 rounded-2xl p-4 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-rose-900 uppercase tracking-wider">{loc.dishaShoolTitle}</span>
                <Compass className="w-4 h-4 text-rose-700" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-950">
                  {panchang.dishaShool}
                </div>
                <div className="text-xs font-medium text-stone-600 mt-1">
                  Remedy: <span className="font-semibold text-rose-950">{panchang.dishaShoolRemedy}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-rose-200/60 text-[11px] text-stone-600">
                Avoid travelling in this direction unless urgent. Take prescribed remedy before departure.
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. AUSPICIOUS & INAUSPICIOUS MUHURATS                       */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'muhurat') && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Auspicious Muhurats */}
          <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-cinzel font-bold text-stone-950">
                    {loc.auspiciousTimings}
                  </h4>
                  <p className="text-[11px] text-stone-500">Beneficial windows for business, puja & travel</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-stone-100 space-y-1">
              
              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">{loc.abhijitMuhurat}</span>
                  <span className="text-[11px] text-stone-500">Most auspicious 8th Muhurat of the day</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {panchang.abhijitMuhurat}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">{loc.brahmaMuhurat}</span>
                  <span className="text-[11px] text-stone-500">Ideal for meditation, prayers & spiritual awakening</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {panchang.brahmaMuhurat}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">{loc.amritKaal}</span>
                  <span className="text-[11px] text-stone-500">Auspicious lunar period conferring success</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {panchang.amritKaal}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">{loc.vijayaMuhurat}</span>
                  <span className="text-[11px] text-stone-500">For victory in debates, negotiations & undertakings</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {panchang.vijayaMuhurat}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">{loc.godhuliMuhurat}</span>
                  <span className="text-[11px] text-stone-500">Evening twilight for home entry & Aarti</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {panchang.godhuliMuhurat}
                </span>
              </div>

              {panchang.specialYogas && panchang.specialYogas.length > 0 && (
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block mb-1.5">
                    Special Auspicious Yogas Today:
                  </span>
                  <div className="space-y-1.5">
                    {panchang.specialYogas.map((sy, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs">
                        <div className="font-bold text-amber-950">{sy.name} ({sy.hindiName})</div>
                        <div className="text-[11px] text-amber-900/80 mt-0.5">{sy.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Inauspicious Periods (Rahu Kaal, Yamaganda, Gulika) */}
          <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center text-rose-800">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-cinzel font-bold text-stone-950">
                    {loc.inauspiciousTimings}
                  </h4>
                  <p className="text-[11px] text-stone-500">Periods to avoid for starting new ventures or travel</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-stone-100 space-y-1">
              
              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-rose-950 block">{loc.rahuKaal}</span>
                  <span className="text-[11px] text-stone-500">Highly inauspicious. Avoid buying property or major deals</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                  {panchang.rahuKaal}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-rose-950 block">{loc.yamaganda}</span>
                  <span className="text-[11px] text-stone-500">Period of Yama. Strictly avoid beginning travel</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                  {panchang.yamaganda}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">{loc.gulikaKaal}</span>
                  <span className="text-[11px] text-stone-500">Son of Saturn period. Moderate inauspicious</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-stone-800 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
                  {panchang.gulikaKaal}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-rose-950 block">{loc.durmuhurtam}</span>
                  <span className="text-[11px] text-stone-500">Inauspicious dual muhurat window</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                  {panchang.durmuhurtam}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block">{loc.varjyam}</span>
                  <span className="text-[11px] text-stone-500">Prohibited duration of the constellation</span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold text-stone-800 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
                  {panchang.varjyam}
                </span>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 7. CHOGHADIYA TIMINGS (DAY & NIGHT) WITH LIVE HIGHLIGHT   */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'choghadiya') && (
        <div ref={choghadiyaRef} className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-700" />
                <span>{loc.choghadiyaTitle}</span>
              </h3>
              <p className="text-xs text-stone-500">
                Calculated precisely for sunrise {panchang.sunrise} to sunset {panchang.sunset} in {currentCityObj.name}
              </p>
            </div>

            {/* Day / Night Toggle */}
            <div className="flex items-center bg-stone-100 p-1 rounded-2xl border border-stone-200">
              <button
                onClick={() => setActiveChoghadiyaTab('day')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeChoghadiyaTab === 'day'
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{loc.choghadiyaDay.split('(')[0].trim()}</span>
              </button>
              <button
                onClick={() => setActiveChoghadiyaTab('night')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeChoghadiyaTab === 'night'
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>{loc.choghadiyaNight.split('(')[0].trim()}</span>
              </button>
            </div>
          </div>

          {/* Choghadiya Table Grid with Live Pulse */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {(activeChoghadiyaTab === 'day' ? panchang.dayChoghadiya : panchang.nightChoghadiya)?.map((item: ChoghadiyaItem, index: number) => {
              const isGood = item.isAuspicious;
              const isSlotActive = isToday && (
                activeChoghadiyaTab === (activeChoghadiyaSlot?.isDayTime ? 'day' : 'night') &&
                activeChoghadiyaSlot?.slot?.name === item.name &&
                activeChoghadiyaSlot?.slot?.startTime === item.startTime
              );

              return (
                <div 
                  key={index}
                  className={`p-3.5 rounded-2xl border transition-all relative ${
                    isSlotActive 
                      ? 'ring-2 ring-amber-600 shadow-md bg-amber-50/90 border-amber-400' 
                      : isGood 
                        ? 'bg-emerald-50/60 border-emerald-200/80 hover:bg-emerald-50' 
                        : 'bg-rose-50/50 border-rose-200/70 hover:bg-rose-50'
                  }`}
                >
                  {isSlotActive && (
                    <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      <span>ACTIVE NOW</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isGood ? 'bg-emerald-200 text-emerald-950' : 'bg-rose-200 text-rose-950'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-[11px] font-mono text-stone-500">
                      Slot {index + 1}
                    </span>
                  </div>

                  <div className="mt-2">
                    <div className="text-base font-bold text-stone-900">
                      {item.hindiName}
                    </div>
                    <div className="text-xs font-mono font-semibold text-stone-700 mt-1">
                      {item.startTime} - {item.endTime}
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-stone-200/50 text-[11px] text-stone-500">
                    Ruler: <strong className="text-stone-700">{item.ruler}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 8. PLANETARY HORAS (24-HOUR CYCLICAL INFLUENCE)           */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'hora') && (
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-700" />
                <span>{loc.planetaryHora}</span>
              </h3>
              <p className="text-xs text-stone-500">
                Each planetary hour carries cosmic energetic resonance for specific actions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[460px] overflow-y-auto pr-1">
            {panchang.horaTimings?.map((h, i) => {
              const isGood = h.nature === 'beneficial';
              const isNeutral = h.nature === 'neutral';
              return (
                <div 
                  key={i} 
                  className={`p-3 rounded-2xl border text-xs flex flex-col justify-between ${
                    isGood 
                      ? 'bg-emerald-50/50 border-emerald-200' 
                      : isNeutral 
                        ? 'bg-amber-50/50 border-amber-200' 
                        : 'bg-rose-50/40 border-rose-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[11px] text-stone-700">{h.timeSpan}</span>
                      <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                        isGood ? 'bg-emerald-100 text-emerald-900' : isNeutral ? 'bg-amber-100 text-amber-900' : 'bg-rose-100 text-rose-900'
                      }`}>
                        {h.nature}
                      </span>
                    </div>
                    <div className="font-bold text-stone-900 mt-1">
                      {h.planetHindi}
                    </div>
                  </div>
                  <div className="text-[10px] text-stone-600 mt-2 pt-1.5 border-t border-stone-200/60">
                    {h.recommendedAction}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 9. SAMVATSARA & ASTROLOGICAL DETAILS                      */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'samvat') && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Samvat & Calendars Card */}
          <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <Globe className="w-5 h-5 text-amber-800" />
              <h4 className="text-base sm:text-lg font-cinzel font-bold text-stone-950">
                {loc.samvatTitle}
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block text-[10px] uppercase">Vikram Samvat</span>
                <span className="font-bold text-stone-900 text-sm">{panchang.vikramSamvat}</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">{panchang.vikramSamvatName}</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block text-[10px] uppercase">Shaka Samvat</span>
                <span className="font-bold text-stone-900 text-sm">{panchang.sakaSamvat}</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">{panchang.sakaSamvatName}</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block text-[10px] uppercase">Gujarati Samvat</span>
                <span className="font-bold text-stone-900 text-sm">{panchang.gujaratiSamvat}</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">{panchang.gujaratiMasa}</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block text-[10px] uppercase">Kali Yuga Year</span>
                <span className="font-bold text-stone-900 text-sm">{panchang.kaliYugaYear}</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">{panchang.aayana}</span>
              </div>
            </div>
          </div>

          {/* All Festivals & Observances Today */}
          <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <Flame className="w-5 h-5 text-amber-700" />
              <h4 className="text-base sm:text-lg font-cinzel font-bold text-stone-950">
                {loc.festivalsAndVrats}
              </h4>
            </div>

            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              {panchang.festivalsToday?.map((fest, idx) => (
                <div key={idx} className="p-3.5 bg-amber-50/60 border border-amber-200/80 rounded-2xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-stone-950 flex items-center gap-2">
                      <span>{fest.name}</span>
                      {fest.isVrat && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-950 text-[10px] font-bold">
                          Vrat / Upavas
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                      {fest.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 9B. DRIK PANCHANG COMPREHENSIVE ASTROLOGICAL DETAILS      */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'drik') && (
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-700" />
                <span>Drik Siddhanta & Parashari Ganita</span>
              </div>
              <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-950 flex items-center gap-2">
                <span>Drik Panchang Ephemeris & Astrological Clearances (दृक पंचांग सूक्ष्म गणना)</span>
              </h3>
              <p className="text-xs text-stone-500">
                Precision solar/lunar metrics, Agnivasa for Yajna, Shivavasa for Rudrabhishek & Chandrabalam
              </p>
            </div>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              Lat: {currentCityObj.lat.toFixed(2)}°N | Lng: {currentCityObj.lng.toFixed(2)}°E
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Card 1: Surya & Chandra Ephemeris */}
            <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/30 border border-amber-200/80 rounded-2xl p-5 space-y-3.5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-2.5">
                <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-600" />
                  <span>Solar & Lunar Ephemeris (सूर्य-चन्द्र स्थिति)</span>
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-950">
                  {panchang.aayana}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-white/90 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] text-stone-400 font-semibold block uppercase">Sunrise & Sunset</span>
                  <span className="font-bold text-stone-900 font-mono text-xs">{panchang.sunrise} — {panchang.sunset}</span>
                  <span className="text-[10px] text-amber-900/80 block mt-0.5">{panchang.dayDuration}</span>
                </div>

                <div className="p-3 bg-white/90 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] text-stone-400 font-semibold block uppercase">Moonrise & Moonset</span>
                  <span className="font-bold text-stone-900 font-mono text-xs">{panchang.moonrise} — {panchang.moonset}</span>
                  <span className="text-[10px] text-stone-500 block mt-0.5">{panchang.nightDuration}</span>
                </div>

                <div className="p-3 bg-white/90 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] text-stone-400 font-semibold block uppercase">Surya Rashi & Nakshatra</span>
                  <span className="font-bold text-stone-900">{panchang.suryaRashi}</span>
                  <span className="text-[10px] text-amber-800 block mt-0.5">{panchang.suryaNakshatraHindi}</span>
                </div>

                <div className="p-3 bg-white/90 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] text-stone-400 font-semibold block uppercase">Chandra Rashi & Phase</span>
                  <span className="font-bold text-stone-900">{panchang.chandraRashi}</span>
                  <span className="text-[10px] text-indigo-700 font-semibold block mt-0.5">{panchang.moonIllumination}</span>
                </div>
              </div>

              <div className="p-3 bg-amber-100/60 rounded-xl border border-amber-200 text-[11px] text-amber-950 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-800 shrink-0" />
                <span><strong>Disha Shool:</strong> Prohibited direction {panchang.dishaShool}. Remedial intake: <em>{panchang.dishaShoolRemedy}</em></span>
              </div>
            </div>

            {/* Card 2: Shastric Ritual Clearances */}
            <div className="bg-gradient-to-br from-indigo-50/40 to-stone-50 border border-indigo-200/70 rounded-2xl p-5 space-y-3.5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-indigo-200/60 pb-2.5">
                <h4 className="text-sm font-bold text-indigo-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Vedic Ritual Clearances (धार्मिक अनुष्ठान शुद्धि)</span>
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-950">
                  Surya Siddhanta
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {/* Agnivasa */}
                <div className="p-3 bg-white/90 rounded-xl border border-stone-200 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-bold text-stone-900 flex items-center gap-2">
                      <span>अग्निवास (Agnivasa for Havan / Yajna):</span>
                      <span className={`px-2 py-0.2 rounded-md text-[10px] font-bold ${
                        panchang.agnivasa?.isAuspicious ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {panchang.agnivasa?.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{panchang.agnivasa?.description}</div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    panchang.agnivasa?.isAuspicious ? 'text-emerald-700 bg-emerald-50' : 'text-amber-800 bg-amber-50'
                  }`}>
                    {panchang.agnivasa?.isAuspicious ? 'SHUBH' : 'MADHYAM'}
                  </span>
                </div>

                {/* Shivavasa */}
                <div className="p-3 bg-white/90 rounded-xl border border-stone-200 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-bold text-stone-900 flex items-center gap-2">
                      <span>शिववास (Shivavasa for Rudrabhishek):</span>
                      <span className={`px-2 py-0.2 rounded-md text-[10px] font-bold ${
                        panchang.shivavasa?.isAuspicious ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                      }`}>
                        {panchang.shivavasa?.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{panchang.shivavasa?.description}</div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    panchang.shivavasa?.isAuspicious ? 'text-emerald-700 bg-emerald-50' : 'text-stone-600 bg-stone-100'
                  }`}>
                    {panchang.shivavasa?.isAuspicious ? 'UTTAM' : 'AVOID'}
                  </span>
                </div>

                {/* Chandrabalam */}
                <div className="p-3 bg-white/90 rounded-xl border border-stone-200 space-y-1.5">
                  <div className="font-bold text-stone-900 text-xs flex items-center justify-between">
                    <span>चन्द्रबलम (Auspicious Moon Rashis Today):</span>
                    <span className="text-[10px] text-indigo-700 font-semibold">6 Blessed Signs</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {panchang.chandraBalamHindi?.map((rashi, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-lg bg-indigo-50 border border-indigo-200/80 text-[10px] font-bold text-indigo-900">
                        {rashi}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bhadra / Vishti */}
                <div className="p-3 bg-white/90 rounded-xl border border-stone-200 flex items-start gap-2.5">
                  <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${panchang.bhadra?.isActive ? 'text-amber-600' : 'text-emerald-600'}`} />
                  <div className="text-[11px]">
                    <span className="font-bold text-stone-900">भद्रा स्थिति: </span>
                    <span className="text-stone-700">{panchang.bhadra?.vasa} ({panchang.bhadra?.startTime} - {panchang.bhadra?.endTime}). </span>
                    <span className="text-stone-500">{panchang.bhadra?.warning}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 9C. TODAY'S FESTIVAL / SPECIAL DAY IN-DEPTH SECTION       */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'festival') && panchang.festivalDeepDive && (
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-1">
                <span>{panchang.festivalDeepDive.icon || '🪔'}</span>
                <span>{panchang.festivalDeepDive.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950">
                {activeLang === 'en' ? panchang.festivalDeepDive.title : panchang.festivalDeepDive.hindiTitle}
              </h3>
              <p className="text-xs text-stone-500">
                शास्त्रोक्त व्रत कथा, पूजा विधि, शुभ मुहूर्त, मंत्र एवं पारण नियम
              </p>
            </div>

            {/* Puja Muhurat Badge */}
            {panchang.festivalDeepDive.pujaMuhurat && (
              <div className="px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-300 text-left sm:text-right shrink-0">
                <span className="text-[10px] uppercase font-bold text-amber-800 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-700" />
                  <span>शुभ पूजा मुहूर्त (Shubh Muhurat)</span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-950 font-mono">
                  {panchang.festivalDeepDive.pujaMuhurat}
                </span>
              </div>
            )}
          </div>

          {/* Significance */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/80 via-orange-50/50 to-white border border-amber-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>धार्मिक एवं आध्यात्मिक महत्व (Significance & Katha)</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {panchang.festivalDeepDive.significance}
            </p>
          </div>

          {/* 2-Column: Puja Vidhi & Mantras / Vrat Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Step-by-Step Puja Vidhi */}
            <div className="space-y-3 bg-stone-50/70 p-4 sm:p-5 rounded-2xl border border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>शास्त्रोक्त पूजा विधि (Step-by-Step Puja Vidhi)</span>
              </h4>
              <ul className="space-y-2 text-xs">
                {panchang.festivalDeepDive.pujaVidhi.map((step, idx) => (
                  <li key={idx} className="p-2.5 bg-white rounded-xl border border-stone-200/80 flex items-start gap-2.5 text-stone-700 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              {panchang.festivalDeepDive.vratRules && (
                <div className="p-3 rounded-xl bg-amber-100/70 text-amber-950 text-xs border border-amber-200 font-medium">
                  <strong>व्रत व पारण नियम:</strong> {panchang.festivalDeepDive.vratRules}
                </div>
              )}
            </div>

            {/* Mantras & Do's/Don'ts */}
            <div className="space-y-4">
              {/* Mantras */}
              <div className="space-y-2.5 bg-amber-50/40 p-4 sm:p-5 rounded-2xl border border-amber-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-700" />
                  <span>विशेष पावन मंत्र (Sacred Chants & Meaning)</span>
                </h4>
                <div className="space-y-2">
                  {panchang.festivalDeepDive.mantras.map((m, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-amber-200/60 text-xs space-y-1">
                      <div className="font-bold text-amber-950 font-serif text-sm">{m.mantra}</div>
                      <div className="text-[11px] text-stone-600 leading-relaxed">अर्थ: {m.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Do's & Don'ts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 text-xs flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>क्या करें (Auspicious Actions)</span>
                  </span>
                  <ul className="space-y-1 text-[11px] text-stone-700">
                    {panchang.festivalDeepDive.dosAndDonts.dos.map((item, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 text-xs flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-600" />
                    <span>क्या न करें (What to Avoid)</span>
                  </span>
                  <ul className="space-y-1 text-[11px] text-stone-700">
                    {panchang.festivalDeepDive.dosAndDonts.donts.map((item, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 9D. TODAY'S PANCHANG SUMMARY (SEO FRIENDLY SEARCH SNIPPET) */}
      {/* ========================================================= */}
      {(activeDetailSection === 'all' || activeDetailSection === 'summary') && (
        <article 
          id="today-panchang-summary"
          className="bg-white border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Google Search Ready / SEO Digest</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950">
                Today's Panchang Summary ({currentCityObj.name} - {panchang.formattedDate})
              </h3>
              <p className="text-xs text-stone-500">
                आज का पंचांग सारांश • Instant textual synopsis optimized for fast reading and search snippets
              </p>
            </div>

            {/* Quick Actions inside Summary */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyTodaySummary}
                className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Summary (WhatsApp)</span>
              </button>
              <button
                onClick={handlePrint}
                className="px-3 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Formatted Text Narrative (Featured Snippet Format) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 leading-relaxed text-xs sm:text-sm text-stone-800 space-y-2.5">
            <p>
              According to the authentic Vedic Drik Panchang, today is <strong>{panchang.formattedDate}</strong>, <strong>{panchang.vaar}</strong> ({panchang.vaarHindi}). For <strong>{currentCityObj.name}</strong>, today's Tithi is <strong>{panchang.tithi}</strong> ({panchang.tithiHindi}) which remains active until <strong>{panchang.tithiEndsAt}</strong>, after which <strong>{panchang.nextTithi || 'Next Tithi'}</strong> commences.
            </p>
            <p>
              The Moon currently transits through <strong>{panchang.nakshatra}</strong> ({panchang.nakshatraHindi}) Nakshatra until <strong>{panchang.nakshatraEndsAt}</strong>, under the planetary rulership of <strong>{panchang.nakshatraLord}</strong>. The prevailing Yoga is <strong>{panchang.yoga}</strong> (up to {panchang.yogaEndsAt}) and Karana is <strong>{panchang.karana}</strong> (up to {panchang.karanaEndsAt}).
            </p>
            <p>
              Today's most auspicious golden window <strong>Abhijit Muhurat</strong> falls between <strong className="text-emerald-800 font-mono">{panchang.abhijitMuhurat}</strong>, and sacred <strong>Brahma Muhurat</strong> between <strong className="text-emerald-800 font-mono">{panchang.brahmaMuhurat}</strong>. For initiating new contracts, financial agreements or buying property, the inauspicious <strong>Rahu Kaal</strong> from <strong className="text-rose-800 font-mono">{panchang.rahuKaal}</strong> and Durmuhurtam ({panchang.durmuhurtam}) should be strictly avoided. The Sun is placed in <strong>{panchang.suryaRashi}</strong> and the Moon resides in <strong>{panchang.chandraRashi}</strong>.
            </p>
            {panchang.primaryFestival && (
              <p className="pt-1 font-medium text-amber-950">
                🚩 <strong>Special Observance Today:</strong> {panchang.primaryFestival.title} ({panchang.primaryFestival.hindiTitle}) — {panchang.primaryFestival.hindiDescription || panchang.primaryFestival.description}
              </p>
            )}
          </div>

          {/* Quick 8-Item Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] text-stone-400 font-semibold uppercase block">Date & Vaar</span>
              <span className="font-bold text-stone-900">{panchang.vaar}</span>
              <span className="text-[11px] text-stone-500 block mt-0.5">{panchang.formattedDate.split(',')[1] || panchang.date}</span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] text-stone-400 font-semibold uppercase block">Tithi (तिथि)</span>
              <span className="font-bold text-stone-900">{panchang.tithi.split('(')[0]}</span>
              <span className="text-[11px] text-amber-900 font-semibold block mt-0.5">Ends: {panchang.tithiEndsAt}</span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] text-stone-400 font-semibold uppercase block">Nakshatra (नक्षत्र)</span>
              <span className="font-bold text-stone-900">{panchang.nakshatra.split('(')[0]}</span>
              <span className="text-[11px] text-indigo-900 font-semibold block mt-0.5">Till: {panchang.nakshatraEndsAt}</span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] text-stone-400 font-semibold uppercase block">Yoga & Karana</span>
              <span className="font-bold text-stone-900">{panchang.yoga.split('(')[0]}</span>
              <span className="text-[11px] text-stone-500 block mt-0.5">{panchang.karana.split('(')[0]}</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-[10px] text-emerald-800 font-bold uppercase block">Abhijit Muhurat</span>
              <span className="font-bold text-emerald-950 font-mono text-xs">{panchang.abhijitMuhurat}</span>
              <span className="text-[10px] text-emerald-700 block mt-0.5">Auspicious Golden Slot</span>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
              <span className="text-[10px] text-rose-800 font-bold uppercase block">Rahu Kaal</span>
              <span className="font-bold text-rose-950 font-mono text-xs">{panchang.rahuKaal}</span>
              <span className="text-[10px] text-rose-700 block mt-0.5">Avoid auspicious starts</span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] text-stone-400 font-semibold uppercase block">Sun & Moon Rashi</span>
              <span className="font-bold text-stone-900 text-[11px]">Sun: {panchang.suryaRashi.split(' ')[0]}</span>
              <span className="text-[11px] text-indigo-700 font-semibold block mt-0.5">Moon: {panchang.chandraRashi.split(' ')[0]}</span>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
              <span className="text-[10px] text-amber-800 font-bold uppercase block">Festival / Day</span>
              <span className="font-bold text-amber-950 truncate block">{panchang.primaryFestival?.title || 'Nitya Upasana'}</span>
              <span className="text-[10px] text-amber-800/80 block mt-0.5 truncate">{panchang.primaryFestival?.hindiTitle || panchang.vaarHindi}</span>
            </div>
          </div>

          {/* Authentic Disclaimer Matching User Screenshot */}
          <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-stone-500">
            <div className="leading-relaxed">
              * <strong>Disclaimer:</strong> All astrological calculations and muhurat timings are computed based on authentic Surya Siddhanta and Drik Ganita algorithms for <strong>{currentCityObj.name}</strong> ({currentCityObj.lat.toFixed(2)}°N, {currentCityObj.lng.toFixed(2)}°E). Slight horizon differences of ±1-2 minutes may occur based on local elevation and atmospheric refraction.
            </div>
            <div className="shrink-0 font-medium text-stone-400">
              MahaDarshan Vedic Siddhanta
            </div>
          </div>
        </article>
      )}

      {/* ========================================================= */}
      {/* 10. SEO KNOWLEDGE BASE & FAQS ACCORDION (RANKING BOOSTER) */}
      {/* ========================================================= */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
          <BookOpen className="w-5 h-5 text-amber-700" />
          <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-950">
            About Vedic Panchang & Auspicious Muhurats (सनातन पंचांग मार्गदर्शिका)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-stone-600">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-600" />
              What is Panchang and why is it calculated per city?
            </h4>
            <p>
              Panchang literally translates to the "Five Limbs" of time: Tithi (lunar day), Vaar (solar day), Nakshatra (lunar mansion), Yoga (luni-solar angular distance), and Karana (half tithi). Because the Sun rises at different times across longitudes, Sunrise, Sunset, Choghadiya, and Rahu Kaal differ for every city across India. Our algorithm computes exact solar horizons tailored to your selected city.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              How to use Abhijit Muhurat and avoid Rahu Kaal?
            </h4>
            <p>
              Abhijit Muhurat is the 8th auspicious muhurat of the day (approx. 24 minutes before to 24 minutes after solar midday). It is revered as a golden window blessed by Lord Vishnu to neutralize doshas. Conversely, Rahu Kaal is a 90-minute daily period ruled by Rahu where commencing new contracts, financial agreements or buying property is strictly advised against.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              What are the 7 Choghadiya types?
            </h4>
            <p>
              Day and night are divided into 8 equal periods each. The auspicious slots are <strong>Amrit</strong> (supreme blessing), <strong>Shubh</strong> (beneficial for religious/social ceremonies), and <strong>Labh</strong> (business growth and education). <strong>Char</strong> is neutral for travel. <strong>Rog, Kaal</strong>, and <strong>Udveg</strong> are inauspicious and should be avoided for new undertakings.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-600" />
              How are Vivah and Griha Pravesh dates determined?
            </h4>
            <p>
              Shubh Vivah requires Tribala Shuddhi (strength of Sun, Jupiter, and Moon) along with favorable Lagnas, while avoiding Chaturmas and Guru-Shukra Tara Asta. For Griha Pravesh, Shukla Paksha and fixed signs (Vrishabha, Simha, Vrishchika, Kumbha) are chosen to ensure lasting stability and peace in the household.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 11. DETAILED MUHURAT GUIDE MODAL (IMAGE 2 DETAIL VIEW)     */}
      {/* ========================================================= */}
      {activeMuhuratModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col border border-stone-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${activeMuhuratModal.colorScheme.iconBg}`}>
                  {activeMuhuratModal.id === 'vivah' && <Heart className="w-5 h-5" />}
                  {activeMuhuratModal.id === 'grihapravesh' && <Home className="w-5 h-5" />}
                  {activeMuhuratModal.id === 'vehicle' && <Car className="w-5 h-5" />}
                  {activeMuhuratModal.id === 'business' && <Briefcase className="w-5 h-5" />}
                  {activeMuhuratModal.id === 'festivals' && <Flame className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-900">
                    {activeMuhuratModal.title}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {activeMuhuratModal.hindiTitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveMuhuratModal(null)}
                className="w-9 h-9 rounded-xl bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
              
              {/* Significance Box */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>वैदिक महत्व एवं शास्त्रोक्त विधि (Significance)</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeMuhuratModal.significance}
                </p>
              </div>

              {/* Shastric Rules & Guidelines */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Key Astrological Rules & Precautions
                </h4>
                <ul className="space-y-1.5">
                  {activeMuhuratModal.rules.map((rule, i) => (
                    <li key={i} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Nakshatras & Lagnas Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] block">
                    Best Nakshatras (शुभ नक्षत्र)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeMuhuratModal.bestNakshatras.map((n, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 text-[10px] font-semibold">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] block">
                    Best Lagnas (शुभ लग्न)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeMuhuratModal.bestLagnas.map((lagna, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-lg bg-indigo-100 text-indigo-900 text-[10px] font-semibold">
                        {lagna}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Auspicious Dates Table */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 text-amber-700" />
                    <span>Upcoming Auspicious Dates (शुभ तिथियां व मुहूर्त)</span>
                  </h4>
                  <span className="text-[10px] text-stone-500 font-medium">Auto-verified for {currentCityObj.name}</span>
                </div>

                <div className="divide-y divide-stone-200 border border-stone-200 rounded-2xl overflow-hidden shadow-2xs">
                  {activeMuhuratModal.upcomingDates.map((item, i) => (
                    <div key={i} className="p-3.5 bg-white hover:bg-stone-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-stone-950 flex items-center gap-2">
                          <span className="text-sm font-mono text-amber-900 font-bold">{item.date}</span>
                          <span className="text-stone-400 font-normal">({item.day})</span>
                          {item.specialNote && (
                            <span className="px-2 py-0.2 rounded-full bg-amber-100 text-amber-950 text-[10px] font-semibold">
                              {item.specialNote}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          Tithi: <strong>{item.tithi}</strong> • Nakshatra: <strong>{item.nakshatra}</strong>
                        </div>
                      </div>

                      <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-mono font-bold text-xs shrink-0 self-start sm:self-auto">
                        {item.shubhTime}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <div className="text-xs text-stone-500">
                Grounded in authentic Parashari & Surya Siddhanta traditions.
              </div>
              <button
                onClick={() => setActiveMuhuratModal(null)}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close Guide
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 12. ALL-INDIA CITY SELECTION MODAL (CULROOT STYLE)         */}
      {/* ========================================================= */}
      {isCityModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col border border-stone-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-900">
                    {loc.selectCity}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Search 100+ cities & pilgrimage sites across all Indian states
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="w-9 h-9 rounded-xl bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Controls: Search Bar & GPS Auto-Locate */}
            <div className="p-5 sm:p-6 border-b border-stone-200 space-y-4">
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={citySearchQuery}
                    onChange={(e) => setCitySearchQuery(e.target.value)}
                    placeholder={loc.searchCityPlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-2xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-all"
                    autoFocus
                  />
                  {citySearchQuery && (
                    <button
                      onClick={() => setCitySearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* GPS Location Button */}
                <button
                  onClick={handleDetectLocation}
                  disabled={isLocatingUser}
                  className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-2xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                >
                  <Crosshair className={`w-4 h-4 ${isLocatingUser ? 'animate-spin' : ''}`} />
                  <span>{isLocatingUser ? 'Detecting GPS...' : loc.useGpsLocation}</span>
                </button>
              </div>

              {locationError && (
                <div className="p-3 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs">
                  {locationError}
                </div>
              )}

              {/* State Filter Pills */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  {loc.allStates}
                </span>
                <div className="flex flex-wrap items-center gap-1.5 max-h-24 overflow-y-auto py-1">
                  {allIndianStates.map((state) => (
                    <button
                      key={state}
                      onClick={() => setSelectedStateFilter(state)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        selectedStateFilter === state
                          ? 'bg-amber-900 text-white font-bold'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                      }`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Cities Quick Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  {loc.popularCities}
                </span>
                <div className="flex flex-wrap items-center gap-1.5 max-h-20 overflow-y-auto">
                  {popularCities.map((c) => {
                    const isSelected = selectedCityId === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCity(c.id);
                          setIsCityModalOpen(false);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                          isSelected
                            ? 'bg-amber-900 text-white font-bold'
                            : 'bg-amber-50/80 hover:bg-amber-100 text-amber-950 border border-amber-200/80'
                        }`}
                      >
                        <span>{c.name}</span>
                        {isSelected && <Check className="w-3 h-3 text-white ml-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Modal Body: Scrollable Cities Grid */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              <div className="text-xs text-stone-500 mb-3 flex items-center justify-between">
                <span>Found <strong>{filteredCities.length}</strong> cities across India</span>
                <span className="text-[11px]">Click any city to load exact coordinates</span>
              </div>

              {filteredCities.length === 0 ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-stone-800">No matching city found for "{citySearchQuery}"</p>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto">
                    Try searching for your state capital, nearby major pilgrimage center, or clear search filters.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {filteredCities.map((c) => {
                    const isSelected = selectedCityId === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCity(c.id);
                          setIsCityModalOpen(false);
                        }}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected 
                            ? 'bg-amber-100/70 border-amber-500 ring-2 ring-amber-500/20 shadow-xs' 
                            : 'bg-white hover:bg-stone-50 border-stone-200'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1.5">
                            <span>{c.name}</span>
                            {c.isPopular && (
                              <span className="text-[9px] bg-amber-200/80 text-amber-950 px-1.5 py-0.2 rounded font-semibold">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-stone-500">
                            {c.hindiName}
                          </div>
                          <div className="text-[10px] font-semibold text-stone-400">
                            {c.state} • {c.lat.toFixed(1)}°N, {c.lng.toFixed(1)}°E
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <div className="text-xs text-stone-600">
                Selected: <strong className="text-stone-900">{currentCityObj.name}</strong> ({currentCityObj.state})
              </div>
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Apply & View Panchang
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Copied Toast Notification */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-amber-500/40 flex items-center gap-3 animate-fade-in">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-amber-200">Copied to Clipboard!</div>
            <div className="text-[11px] text-stone-300">Panchang summary is ready to share on WhatsApp or Social Media.</div>
          </div>
        </div>
      )}

    </div>
  );
};
