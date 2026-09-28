import React, { useState, useMemo, useRef } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Share2, 
  Printer, 
  MapPin, 
  Compass, 
  Sun, 
  Moon, 
  Filter, 
  Search, 
  X, 
  Check, 
  CheckCircle2, 
  Info, 
  BookOpen, 
  Layers, 
  Grid, 
  List, 
  Flame, 
  ArrowRight, 
  Globe, 
  Building2, 
  Download, 
  ExternalLink,
  CalendarDays,
  Tag,
  Crosshair,
  Star,
  Heart,
  HelpCircle,
  Copy
} from 'lucide-react';
import { Language, CityData } from '../types';
import { allIndianCities, searchCities, findClosestCity, calculateSolarOffsetMin } from '../data/indianCities';
import { 
  yearlyCalendarsCatalog, 
  festivalCalendarsCatalog, 
  calculateYearlyCalendarDays, 
  searchCalendarsAndFestivals,
  CalendarDefinition, 
  CalendarDayInfo, 
  CalendarEventDetail,
  CalendarCategoryGroup
} from '../data/calendarEngine';
import { CalendarDetailPage } from './CalendarDetailPage';

interface FestivalsSectionProps {
  currentLang: Language;
  onNavigateToPanchang?: (targetDate?: Date) => void;
  onNavigateToFestivals?: () => void;
}

export const FestivalsSection: React.FC<FestivalsSectionProps> = ({ 
  currentLang,
  onNavigateToPanchang,
  onNavigateToFestivals
}) => {
  // Navigation & View States
  const [activeViewMode, setActiveViewMode] = useState<'grid' | 'table' | 'yearly-12' | 'hub' | 'calendar-detail'>('grid');
  const [selectedCalendarId, setSelectedCalendarId] = useState<string>('gujarati-calendar'); // Default to Gujarati (priority) or Hindu
  
  // Year & Month state (Supports 2020 through 2030+)
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [selectedMonth, setSelectedMonth] = useState<number>(0); // 0 = Jan, 8 = Sep, 10 = Nov
  
  // Location engine state
  const [selectedCityId, setSelectedCityId] = useState<string>('ahmedabad');
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [isLocatingUser, setIsLocatingUser] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [customCityData, setCustomCityData] = useState<CityData | null>(null);

  // Filter state inside calendar
  const [eventCategoryFilter, setEventCategoryFilter] = useState<'all' | 'major' | 'vrat' | 'sankranti' | 'holiday'>('all');
  
  // Search state for Calendar Hub Directory
  const [hubSearchQuery, setHubSearchQuery] = useState('');
  const [hubCategoryGroup, setHubCategoryGroup] = useState<string>('all');

  // Event Detail Modal State
  const [selectedEventModal, setSelectedEventModal] = useState<{
    event: CalendarEventDetail;
    dayInfo?: CalendarDayInfo;
  } | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const printRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Active City
  const currentCity: CityData = useMemo(() => {
    if (customCityData && customCityData.id === selectedCityId) {
      return customCityData;
    }
    const found = allIndianCities.find(c => c.id === selectedCityId);
    return found || allIndianCities[0];
  }, [selectedCityId, customCityData]);

  // Active Calendar Definition
  const currentCalendarDef: CalendarDefinition = useMemo(() => {
    const found = yearlyCalendarsCatalog.find(c => c.id === selectedCalendarId);
    return found || yearlyCalendarsCatalog[1]; // Gujarati default
  }, [selectedCalendarId]);

  // Compute full year calendar data dynamically for the chosen year, calendar system and city
  const yearlyCalendarData = useMemo(() => {
    return calculateYearlyCalendarDays(selectedYear, currentCalendarDef, currentCity);
  }, [selectedYear, currentCalendarDef, currentCity]);

  // Active month's days list
  const activeMonthDays: CalendarDayInfo[] = useMemo(() => {
    return yearlyCalendarData[selectedMonth] || [];
  }, [yearlyCalendarData, selectedMonth]);

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthNamesShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // First day of active month for grid padding (0 = Sunday, 1 = Monday)
  const firstDayOfMonthWeekday = useMemo(() => {
    return new Date(selectedYear, selectedMonth, 1).getDay();
  }, [selectedYear, selectedMonth]);

  // Filtered days/events
  const filteredMonthDays = useMemo(() => {
    if (eventCategoryFilter === 'all') return activeMonthDays;
    return activeMonthDays.filter(day => {
      if (eventCategoryFilter === 'vrat') return day.isEkadashi || day.isPurnima || day.isAmavasya || day.isPradosh || day.isChaturthi || day.events.some(e => e.category === 'vrat');
      if (eventCategoryFilter === 'major') return day.events.some(e => e.category === 'major-festival');
      if (eventCategoryFilter === 'sankranti') return day.isSankranti;
      if (eventCategoryFilter === 'holiday') return day.holidays.length > 0 || day.events.some(e => e.category === 'holiday');
      return true;
    });
  }, [activeMonthDays, eventCategoryFilter]);

  // Month navigation
  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedYear(prev => prev - 1);
      setSelectedMonth(11);
    } else {
      setSelectedMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedYear(prev => prev + 1);
      setSelectedMonth(0);
    } else {
      setSelectedMonth(prev => prev + 1);
    }
  };

  const handleJumpToToday = () => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    showToast(`Jumped to today: ${today.toLocaleDateString()}`);
  };

  // Copy Calendar Link
  const handleCopyLink = () => {
    const url = `${window.location.origin}/calendars/${currentCalendarDef.slug}/${selectedYear}/${currentCity.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      showToast('Calendar link copied to clipboard!');
    }
  };

  // Print Calendar
  const handlePrintCalendar = () => {
    window.print();
  };

  // City selection & GPS
  const filteredCities = useMemo(() => {
    return searchCities(citySearchQuery, 'All States / UTs');
  }, [citySearchQuery]);

  const handleDetectGPS = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation not supported by your browser.');
      return;
    }
    setIsLocatingUser(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocatingUser(false);
        const { latitude, longitude } = pos.coords;
        const closest = findClosestCity(latitude, longitude);
        if (Math.abs(closest.lat - latitude) < 0.3 && Math.abs(closest.lng - longitude) < 0.3) {
          setSelectedCityId(closest.id);
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
          setSelectedCityId(customId);
        }
        setIsCityModalOpen(false);
        showToast('Location updated via GPS coordinates!');
      },
      (err) => {
        setIsLocatingUser(false);
        setLocationError(`Location error: ${err.message}. Please select your city manually.`);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Search Results for Calendar Hub
  const hubSearchResults = useMemo(() => {
    return searchCalendarsAndFestivals(hubSearchQuery, hubCategoryGroup);
  }, [hubSearchQuery, hubCategoryGroup]);

  return (
    <div className="space-y-6">

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/40 flex items-center gap-3 animate-fade-in text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {activeViewMode !== 'calendar-detail' && (
        <>
          {/* ========================================================= */}
          {/* 1. TOP HEADER & SACRED HERO BANNER                        */}
          {/* ========================================================= */}
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/30">
        
        {/* Glow & Motif Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sanatana Vedic & Multi-Faith Calendar Hub (सर्वधर्म पंचांग महाकेंद्र)</span>
              <span className="text-amber-500">•</span>
              <span className="text-stone-300">{selectedYear} CE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-amber-100 tracking-wide">
              {selectedYear} {currentCalendarDef.name}
            </h1>
            
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {currentCalendarDef.description} Calculations dynamically synchronized for <strong className="text-amber-300">{currentCity.name}</strong> ({currentCity.lat.toFixed(2)}°N, {currentCity.lng.toFixed(2)}°E).
            </p>

            {/* Quick Regional Details Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-0.5 rounded-lg bg-black/40 border border-amber-500/30 text-amber-200">
                Era: <strong>{currentCalendarDef.eraName} ({currentCalendarDef.currentYear})</strong>
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-black/40 border border-amber-500/30 text-amber-200">
                Region: <strong>{currentCalendarDef.region.split('(')[0].trim()}</strong>
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-black/40 border border-amber-500/30 text-amber-200">
                System: <strong>{currentCalendarDef.calendarType.replace('-', ' ').toUpperCase()}</strong>
              </span>
            </div>
          </div>

          {/* Action Buttons in Hero */}
          <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 self-start lg:self-center">
            <button
              onClick={() => setIsCityModalOpen(true)}
              className="px-4 py-2 bg-amber-600/30 hover:bg-amber-600/50 border border-amber-400/40 text-amber-200 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Location: <strong>{currentCity.name}</strong></span>
            </button>

            <button
              onClick={() => setActiveViewMode('calendar-detail')}
              className="px-4 py-2 bg-amber-400/20 hover:bg-amber-400/35 border border-amber-400/50 text-amber-200 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Calendar Details (विस्तृत पृष्ठ)</span>
            </button>

            {onNavigateToFestivals && (
              <button
                onClick={onNavigateToFestivals}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 rounded-2xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>Festivals Hub (व्रत व त्योहार)</span>
              </button>
            )}

            <button
              onClick={() => setActiveViewMode('hub')}
              className="px-4 py-2 bg-amber-600/40 hover:bg-amber-600/60 border border-amber-400/40 text-amber-100 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <Grid className="w-4 h-4 text-amber-300" />
              <span>Calendars Directory</span>
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. UNIVERSAL CALENDAR CONTROL BAR (YEAR, CALENDAR, VIEWS) */}
      {/* ========================================================= */}
      <div className="bg-white border border-stone-200 rounded-3xl p-4 sm:p-5 shadow-sm space-y-4">
        
        {/* Top Controls: Calendar System Switcher, Year Navigator & View Mode */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          
          {/* Calendar System Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider hidden sm:inline">Calendar:</span>
            <select
              value={selectedCalendarId}
              onChange={(e) => {
                setSelectedCalendarId(e.target.value);
                showToast(`Switched to ${yearlyCalendarsCatalog.find(c => c.id === e.target.value)?.name}`);
              }}
              className="bg-stone-50 border border-stone-300 rounded-2xl px-3.5 py-2 text-xs sm:text-sm font-bold text-stone-900 focus:outline-none focus:border-amber-600 cursor-pointer max-w-[260px] sm:max-w-none"
            >
              <optgroup label="Primary Yearly Calendars">
                {yearlyCalendarsCatalog.map((cal) => (
                  <option key={cal.id} value={cal.id}>
                    {cal.name} ({cal.region.split(',')[0].split('(')[0].trim()})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Year Switcher (Supports 2020 through 2030+) */}
          <div className="flex items-center gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 self-start md:self-auto">
            <button
              onClick={() => setSelectedYear(prev => prev - 1)}
              className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
              title="Previous Year"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>{selectedYear - 1}</span>
            </button>

            {/* Quick Year Picker Dropdown */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="bg-amber-900 text-white font-mono font-bold text-xs sm:text-sm px-3 py-1.5 rounded-xl border border-amber-800 cursor-pointer focus:outline-none shadow-xs"
            >
              {[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030].map(y => (
                <option key={y} value={y} className="bg-white text-stone-900 font-sans">
                  {y} CE
                </option>
              ))}
            </select>

            <button
              onClick={() => setSelectedYear(prev => prev + 1)}
              className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
              title="Next Year"
            >
              <span>{selectedYear + 1}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleJumpToToday}
              className="px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold transition-all cursor-pointer ml-1"
            >
              Today
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setActiveViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeViewMode === 'grid'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Month Grid</span>
            </button>

            <button
              onClick={() => setActiveViewMode('table')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeViewMode === 'table'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Table View</span>
            </button>

            <button
              onClick={() => setActiveViewMode('yearly-12')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeViewMode === 'yearly-12'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>12 Months</span>
            </button>

            <button
              onClick={() => setActiveViewMode('calendar-detail')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap text-amber-900 hover:text-amber-950 font-extrabold bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/60"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>Details Page (विवरण)</span>
            </button>

            <button
              onClick={() => setActiveViewMode('hub')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeViewMode === 'hub'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All Hub (महाकेंद्र)</span>
            </button>
          </div>

        </div>

        {/* 12-Month Quick Tab Navigator (Sticky / Scrollable) */}
        {activeViewMode !== 'yearly-12' && activeViewMode !== 'hub' && (
          <div className="flex items-center justify-between gap-2 overflow-x-auto py-1">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer shrink-0"
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto flex-1 px-1">
              {monthNamesShort.map((mName, idx) => {
                const isSelected = selectedMonth === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedMonth(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-1 text-center ${
                      isSelected
                        ? 'bg-amber-900 text-white shadow-xs scale-102'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80'
                    }`}
                  >
                    <span>{mName}</span>
                    <span className="text-[10px] opacity-70 block font-normal">
                      {currentCalendarDef.months[idx]?.name || ''}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNextMonth}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer shrink-0"
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Month Header Banner with Filters */}
        {activeViewMode !== 'yearly-12' && activeViewMode !== 'hub' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-900 flex items-center gap-2">
                <span>{monthNames[selectedMonth]} {selectedYear}</span>
                <span className="text-stone-400 font-sans text-sm font-normal">•</span>
                <span className="text-amber-800 text-base font-normal">
                  {currentCalendarDef.months[selectedMonth]?.name} ({currentCalendarDef.months[selectedMonth]?.nativeName})
                </span>
              </h2>
              <p className="text-xs text-stone-500">
                {activeMonthDays.length} days • Calculated for {currentCity.name}, {currentCity.state}
              </p>
            </div>

            {/* Filter Pills & Print/Share */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl text-xs">
                <button
                  onClick={() => setEventCategoryFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                    eventCategoryFilter === 'all' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
                  }`}
                >
                  All Days
                </button>
                <button
                  onClick={() => setEventCategoryFilter('major')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                    eventCategoryFilter === 'major' ? 'bg-white text-amber-900 shadow-2xs' : 'text-stone-600'
                  }`}
                >
                  Festivals
                </button>
                <button
                  onClick={() => setEventCategoryFilter('vrat')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                    eventCategoryFilter === 'vrat' ? 'bg-white text-amber-900 shadow-2xs' : 'text-stone-600'
                  }`}
                >
                  Vrats / Fasting
                </button>
              </div>

              {/* Share & Print Buttons */}
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                title="Share Calendar Link"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handlePrintCalendar}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                title="Print Calendar"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  )}

      {/* ========================================================= */}
      {/* 3. VIEW 1: MONTHLY VISUAL CALENDAR GRID                   */}
      {/* ========================================================= */}
      {activeViewMode === 'grid' && (
        <div ref={printRef} className="bg-white border border-stone-200 rounded-3xl p-4 sm:p-6 shadow-sm space-y-4">
          
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center text-xs font-bold uppercase tracking-wider border-b border-stone-200 pb-2">
            <span className="text-rose-700">Sunday</span>
            <span className="text-stone-700">Monday</span>
            <span className="text-stone-700">Tuesday</span>
            <span className="text-stone-700">Wednesday</span>
            <span className="text-stone-700">Thursday</span>
            <span className="text-stone-700">Friday</span>
            <span className="text-amber-800">Saturday</span>
          </div>

          {/* Calendar Cells Grid */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2.5">
            {/* Empty offset padding for days before month start */}
            {Array.from({ length: firstDayOfMonthWeekday }).map((_, idx) => (
              <div key={`empty-${idx}`} className="min-h-[105px] sm:min-h-[125px] rounded-2xl bg-stone-50/40 border border-transparent opacity-30"></div>
            ))}

            {/* Days in Month */}
            {filteredMonthDays.map((day) => {
              const hasMajorFestival = day.events.some(e => e.category === 'major-festival');
              const hasVrat = day.isEkadashi || day.isPurnima || day.isAmavasya || day.isPradosh;

              return (
                <div
                  key={day.date}
                  onClick={() => {
                    const primaryEvent = day.events[0] || {
                      id: `day-${day.date}`,
                      name: `${day.regionalMonthName} ${day.tithiName}`,
                      hindiName: `${day.regionalMonthName} ${day.tithiHindi}`,
                      date: day.date,
                      category: 'vrat' as const,
                      significance: `Sacred lunar day of ${day.tithiName} during ${day.pakshaName}.`,
                      history: `Vedic lunar day calculated according to the astronomical longitude of the Sun and Moon for ${currentCity.name}.`
                    };
                    setSelectedEventModal({ event: primaryEvent, dayInfo: day });
                  }}
                  className={`min-h-[105px] sm:min-h-[125px] p-2 sm:p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group text-left ${
                    day.isToday
                      ? 'bg-amber-50/90 border-amber-500 ring-2 ring-amber-500/30 shadow-sm'
                      : hasMajorFestival
                        ? 'bg-gradient-to-br from-amber-50/60 to-orange-50/30 border-amber-300 hover:border-amber-400 hover:shadow-xs'
                        : hasVrat
                          ? 'bg-gradient-to-br from-indigo-50/50 to-stone-50 border-indigo-200 hover:border-indigo-300'
                          : 'bg-white hover:bg-stone-50/80 border-stone-200'
                  }`}
                >
                  {/* Top Row: Date Number & Astrological Badges */}
                  <div className="flex items-center justify-between">
                    <span className={`text-base sm:text-lg font-bold font-mono ${
                      day.isToday ? 'text-amber-950 font-extrabold' : day.isWeekend ? 'text-rose-700' : 'text-stone-900'
                    }`}>
                      {day.dayNumber}
                    </span>

                    {/* Astronomical badges */}
                    <div className="flex items-center gap-1">
                      {day.isEkadashi && (
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-2xs" title="Ekadashi Vrat" />
                      )}
                      {day.isPurnima && (
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-600" title="Purnima (Full Moon)" />
                      )}
                      {day.isAmavasya && (
                        <span className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-600" title="Amavasya (New Moon)" />
                      )}
                      {day.isSankranti && (
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500" title={day.sankrantiName} />
                      )}
                    </div>
                  </div>

                  {/* Middle Row: Tithi & Paksha */}
                  <div className="text-[10px] text-stone-500 space-y-0.5 my-1">
                    <div className="font-semibold text-stone-800 truncate">
                      {day.tithiHindi || day.tithiName}
                    </div>
                    <div className="text-[9px] text-stone-400 truncate">
                      {day.nakshatra}
                    </div>
                  </div>

                  {/* Bottom: Event tags */}
                  <div className="space-y-1">
                    {day.events.slice(0, 2).map((evt, idx) => (
                      <div
                        key={idx}
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded truncate ${
                          evt.category === 'major-festival'
                            ? 'bg-amber-200/80 text-amber-950'
                            : evt.category === 'vrat'
                              ? 'bg-indigo-100 text-indigo-900'
                              : 'bg-stone-100 text-stone-800'
                        }`}
                        title={evt.name}
                      >
                        {evt.name}
                      </div>
                    ))}
                    {day.events.length > 2 && (
                      <div className="text-[8px] text-amber-800 font-bold">
                        +{day.events.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Color Legend */}
          <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs text-stone-600">
            <span className="font-bold text-stone-700">Legend:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300 border border-amber-600"></span>
              <span>Major Festival (प्रमुख पर्व)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              <span>Ekadashi / Vrat (एकादशी / व्रत)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-900"></span>
              <span>Amavasya (अमावस्या)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              <span>Sankranti (संक्रांति)</span>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 4. VIEW 2: MONTHLY CHRONOLOGICAL TABLE VIEW               */}
      {/* ========================================================= */}
      {activeViewMode === 'table' && (
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <h3 className="text-lg font-cinzel font-bold text-stone-950">
                Detailed Daily Ephemeris Table • {monthNames[selectedMonth]} {selectedYear}
              </h3>
              <p className="text-xs text-stone-500">
                Every single day with exact Tithi, Nakshatra, Yoga, Karana, and religious observances
              </p>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              {currentCity.name}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-600 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Day</th>
                  <th className="p-3">Regional Date</th>
                  <th className="p-3">Tithi & Paksha</th>
                  <th className="p-3">Nakshatra</th>
                  <th className="p-3">Yoga & Karana</th>
                  <th className="p-3">Festivals & Vrats</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredMonthDays.map((day) => (
                  <tr 
                    key={day.date} 
                    className={`hover:bg-amber-50/40 transition-colors ${
                      day.isToday ? 'bg-amber-50/70 font-semibold' : ''
                    }`}
                  >
                    <td className="p-3 font-mono font-bold text-stone-900">
                      {day.date}
                    </td>
                    <td className="p-3">
                      <span className={day.isWeekend ? 'text-rose-700 font-bold' : 'text-stone-700'}>
                        {day.dayOfWeek}
                      </span>
                    </td>
                    <td className="p-3 font-medium text-stone-800">
                      {day.regionalMonthName} {day.regionalDateNumber}
                    </td>
                    <td className="p-3">
                      <span className="font-bold text-stone-950 block">{day.tithiHindi || day.tithiName}</span>
                      <span className="text-[10px] text-stone-500">{day.pakshaName}</span>
                    </td>
                    <td className="p-3 text-stone-700 font-medium">
                      {day.nakshatra}
                    </td>
                    <td className="p-3 text-stone-600">
                      <span>{day.yoga}</span> • <span>{day.karana}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {day.events.map((evt, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedEventModal({ event: evt, dayInfo: day })}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold text-left cursor-pointer ${
                              evt.category === 'major-festival'
                                ? 'bg-amber-100 text-amber-950 border border-amber-300'
                                : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                            }`}
                          >
                            {evt.name}
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => {
                          const [y, m, d] = day.date.split('-').map(Number);
                          if (onNavigateToPanchang) {
                            onNavigateToPanchang(new Date(y, m - 1, d));
                          }
                        }}
                        className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-lg text-[10px] font-bold cursor-pointer"
                      >
                        Panchang →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. VIEW 3: 12-MONTH AT-A-GLANCE YEARLY GRID               */}
      {/* ========================================================= */}
      {activeViewMode === 'yearly-12' && (
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-950">
                All 12 Months Overview • {selectedYear} {currentCalendarDef.name}
              </h3>
              <p className="text-xs text-stone-500">
                Click any month to inspect daily calendar cells and festival timings
              </p>
            </div>
            <button
              onClick={handlePrintCalendar}
              className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Annual Sheet</span>
            </button>
          </div>

          {/* 12-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {monthNames.map((mName, mIdx) => {
              const mDays = yearlyCalendarData[mIdx] || [];
              const keyEvents = mDays.flatMap(d => d.events.filter(e => e.category === 'major-festival')).slice(0, 3);
              const mPurnima = mDays.find(d => d.isPurnima);
              const mEkadashis = mDays.filter(d => d.isEkadashi);

              return (
                <div
                  key={mIdx}
                  onClick={() => {
                    setSelectedMonth(mIdx);
                    setActiveViewMode('grid');
                  }}
                  className="p-4 rounded-2xl border border-stone-200 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer bg-gradient-to-br from-white to-stone-50 flex flex-col justify-between group space-y-3"
                >
                  <div className="border-b border-stone-100 pb-2 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-stone-950 text-sm group-hover:text-amber-800 transition-colors">
                        {mName} {selectedYear}
                      </h4>
                      <span className="text-[10px] text-amber-700 font-medium">
                        {currentCalendarDef.months[mIdx]?.name} ({currentCalendarDef.months[mIdx]?.nativeName})
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                      {mDays.length} Days
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 text-xs">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Key Events:</span>
                    {keyEvents.length === 0 ? (
                      <span className="text-[11px] text-stone-400 italic">Regular observances & Vrats</span>
                    ) : (
                      keyEvents.map((evt, i) => (
                        <div key={i} className="text-[11px] font-medium text-stone-800 truncate flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span>{evt.name}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Fasting Quick Badges */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
                    <span>Ekadashi: <strong>{mEkadashis.length}</strong></span>
                    {mPurnima && <span>Purnima: <strong>{mPurnima.dayNumber}th</strong></span>}
                    <span className="text-amber-700 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                      View →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. VIEW 4: COMPLETE CALENDAR HUB DIRECTORY (ALL 8 GROUPS) */}
      {/* ========================================================= */}
      {activeViewMode === 'hub' && (
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-1">
                <Grid className="w-3.5 h-3.5 text-amber-700" />
                <span>Global Calendar Directory (सम्पूर्ण पंचांग निर्देशिका)</span>
              </div>
              <h2 className="text-2xl font-cinzel font-bold text-stone-950">
                Hindu Calendars, Indian Calendars & Festival Calendars
              </h2>
              <p className="text-xs text-stone-500">
                Explore all 14 official regional & religious calendar systems and dedicated festival calendars
              </p>
            </div>

            {/* Hub Search Box */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={hubSearchQuery}
                onChange={(e) => setHubSearchQuery(e.target.value)}
                placeholder="Search calendar, festival, region..."
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-300 rounded-2xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 text-xs">
            {[
              { id: 'all', label: 'All Calendars' },
              { id: 'yearly', label: 'Yearly Calendars (14)' },
              { id: 'festival', label: 'Festival Calendars' },
              { id: 'nepali', label: 'Nepali Calendars' },
              { id: 'religious', label: 'Religious / Sectarian' },
              { id: 'special', label: 'Special Date Calendars' },
              { id: 'vrat', label: 'Vrat & Fasting' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setHubCategoryGroup(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  hubCategoryGroup === cat.id
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hubSearchResults.map((entry, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-stone-200 hover:border-amber-500 hover:shadow-md transition-all bg-stone-50/50 hover:bg-white flex flex-col justify-between group space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                      {entry.type === 'yearly' ? 'Yearly Calendar' : 'Special Calendar'}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-500">
                      {entry.region ? entry.region.split('(')[0].trim() : 'India'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 font-cinzel mt-2 group-hover:text-amber-800 transition-colors">
                    {entry.title}
                  </h4>
                  <div className="text-xs text-amber-800 font-semibold mt-0.5">
                    {entry.subtitle}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {entry.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCalendarId(entry.id);
                      setActiveViewMode('calendar-detail');
                      showToast(`Opened ${entry.title} details page`);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-amber-900 hover:bg-amber-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Details Page</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (entry.type === 'yearly') {
                        setSelectedCalendarId(entry.id);
                        setActiveViewMode('grid');
                        showToast(`Loaded ${entry.title} in Calendar Grid`);
                      } else {
                        setSelectedCalendarId(entry.id);
                        setActiveViewMode('calendar-detail');
                        showToast(`Opened ${entry.title} guide`);
                      }
                    }}
                    className="py-2 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    title="Open Calendar Grid"
                  >
                    <Grid className="w-3.5 h-3.5" />
                    <span>{entry.type === 'yearly' ? 'Grid' : 'Guide'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. VIEW 5: DEDICATED CALENDAR DETAILS PAGE                */}
      {/* ========================================================= */}
      {activeViewMode === 'calendar-detail' && (
        <CalendarDetailPage
          calendarId={selectedCalendarId}
          selectedYear={selectedYear}
          currentCity={currentCity}
          onSelectYear={(yr) => setSelectedYear(yr)}
          onOpenCityModal={() => setIsCityModalOpen(true)}
          onNavigateToCalendarGrid={(calId, monthIdx) => {
            setSelectedCalendarId(calId);
            if (monthIdx !== undefined) setSelectedMonth(monthIdx);
            setActiveViewMode('grid');
          }}
          onNavigateToCalendarTable={(calId, monthIdx) => {
            setSelectedCalendarId(calId);
            if (monthIdx !== undefined) setSelectedMonth(monthIdx);
            setActiveViewMode('table');
          }}
          onNavigateToHub={() => setActiveViewMode('hub')}
          onSelectCalendar={(calId) => {
            setSelectedCalendarId(calId);
          }}
          onOpenEventModal={(eventName) => {
            const allDays = Object.values(yearlyCalendarData).flat();
            const foundEvent = allDays.flatMap((d: CalendarDayInfo) => d.events).find((e: CalendarEventDetail) => e.name.toLowerCase() === eventName.toLowerCase());
            if (foundEvent) {
              setSelectedEventModal({ event: foundEvent });
            }
          }}
        />
      )}

      {/* ========================================================= */}
      {/* 7. EVENT DETAIL MODAL (SACRED DEEP DIVE VIEW)             */}
      {/* ========================================================= */}
      {selectedEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl flex flex-col border border-stone-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-gradient-to-r from-amber-50 to-stone-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl shadow-xs">
                  🪔
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-950 text-[10px] font-extrabold uppercase tracking-wider">
                    {selectedEventModal.event.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-950 mt-0.5">
                    {selectedEventModal.event.name}
                  </h3>
                  <div className="text-xs text-amber-800 font-semibold">
                    {selectedEventModal.event.hindiName}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedEventModal(null)}
                className="w-9 h-9 rounded-xl bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 text-xs sm:text-sm">
              
              {/* Timing & Astronomical Strip */}
              {selectedEventModal.dayInfo && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-semibold">Date & Day</span>
                    <span className="font-bold text-stone-900">{selectedEventModal.dayInfo.date}</span>
                    <span className="text-[11px] text-stone-500 block">{selectedEventModal.dayInfo.dayOfWeek}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-semibold">Tithi & Paksha</span>
                    <span className="font-bold text-stone-900">{selectedEventModal.dayInfo.tithiHindi}</span>
                    <span className="text-[11px] text-stone-500 block">{selectedEventModal.dayInfo.pakshaName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-semibold">Nakshatra</span>
                    <span className="font-bold text-stone-900">{selectedEventModal.dayInfo.nakshatra}</span>
                    <span className="text-[11px] text-stone-500 block">{selectedEventModal.dayInfo.yoga}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-semibold">Location</span>
                    <span className="font-bold text-stone-900">{currentCity.name}</span>
                    <span className="text-[11px] text-stone-500 block">IST (UTC+5:30)</span>
                  </div>
                </div>
              )}

              {/* Shubh Muhurat Box if applicable */}
              {selectedEventModal.event.muhurat && (
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-700 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-800 block">Shubh Puja Muhurat</span>
                    <span className="text-xs sm:text-sm font-bold text-amber-950 font-mono">
                      {selectedEventModal.event.muhurat}
                    </span>
                  </div>
                </div>
              )}

              {/* Spiritual Significance */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>धार्मिक एवं आध्यात्मिक महत्व (Significance)</span>
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  {selectedEventModal.event.significance}
                </p>
              </div>

              {/* Mythological Narrative / History */}
              {selectedEventModal.event.history && (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    पौराणिक पृष्ठभूमि एवं इतिहास (Traditional Background)
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-xs">
                    {selectedEventModal.event.history}
                  </p>
                </div>
              )}

              {/* Step-by-Step Puja Vidhi */}
              {selectedEventModal.event.pujaVidhi && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>शास्त्रोक्त पूजा विधि (Step-by-Step Puja Vidhi)</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {selectedEventModal.event.pujaVidhi.map((step, i) => (
                      <li key={i} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2">
                        <span className="font-bold text-amber-800 mt-0.5">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Vrat Rules */}
              {selectedEventModal.event.fastRules && (
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950">
                  <strong>व्रत एवं पारण नियम:</strong> {selectedEventModal.event.fastRules}
                </div>
              )}

            </div>

            {/* Modal Footer with Panchang Link */}
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <div className="text-xs text-stone-500">
                Grounded in authentic Vedic tradition.
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (selectedEventModal.dayInfo && onNavigateToPanchang) {
                      const [y, m, d] = selectedEventModal.dayInfo.date.split('-').map(Number);
                      onNavigateToPanchang(new Date(y, m - 1, d));
                    }
                    setSelectedEventModal(null);
                  }}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>View Daily Panchang for this date →</span>
                </button>
                <button
                  onClick={() => setSelectedEventModal(null)}
                  className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 8. CITY SELECTOR MODAL (LOCATION ENGINE)                  */}
      {/* ========================================================= */}
      {isCityModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] shadow-2xl flex flex-col border border-stone-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-amber-700" />
                <div>
                  <h3 className="text-lg font-cinzel font-bold text-stone-900">
                    Select City for Calendar Calculations
                  </h3>
                  <p className="text-xs text-stone-500">
                    Solar horizons, tithi transitions, and festival timings update by city coordinates
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="w-8 h-8 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search & GPS */}
            <div className="p-4 border-b border-stone-200 space-y-3">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={citySearchQuery}
                    onChange={(e) => setCitySearchQuery(e.target.value)}
                    placeholder="Search Indian or global city..."
                    className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600"
                    autoFocus
                  />
                </div>
                <button
                  onClick={handleDetectGPS}
                  disabled={isLocatingUser}
                  className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Crosshair className={`w-3.5 h-3.5 ${isLocatingUser ? 'animate-spin' : ''}`} />
                  <span>{isLocatingUser ? 'Locating...' : 'Use GPS'}</span>
                </button>
              </div>

              {locationError && (
                <div className="p-2.5 rounded-xl bg-rose-50 text-rose-800 text-xs border border-rose-200">
                  {locationError}
                </div>
              )}
            </div>

            {/* Cities List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredCities.slice(0, 30).map((c) => {
                  const isSelected = selectedCityId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCityId(c.id);
                        setIsCityModalOpen(false);
                        showToast(`Calendar updated for ${c.name}, ${c.state}`);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'bg-amber-100/70 border-amber-500 ring-2 ring-amber-500/20 shadow-2xs' 
                          : 'bg-white hover:bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-stone-900">{c.name}</div>
                        <div className="text-[10px] text-stone-500">{c.hindiName} • {c.state}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-amber-800" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-600">
              <span>Active: <strong>{currentCity.name}</strong></span>
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="px-4 py-1.5 bg-stone-900 text-white rounded-xl text-xs font-bold"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 9. METHODOLOGY & EDUCATIONAL FAQ SECTION                  */}
      {/* ========================================================= */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
          <BookOpen className="w-5 h-5 text-amber-700" />
          <h3 className="text-lg sm:text-xl font-cinzel font-bold text-stone-950">
            About Hindu Calendars, Regional Traditions & Calculations (पंचांग एवं दिनदर्शिका मार्गदर्शिका)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-stone-600">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-600" />
              What is the difference between Amanta and Purnimanta calendars?
            </h4>
            <p>
              In the <strong>Purnimanta</strong> tradition (widely followed in North India), lunar months end on Purnima (Full Moon), meaning Krishna Paksha comes first. In the <strong>Amanta</strong> tradition (followed in Gujarat, Maharashtra, Karnataka, Andhra Pradesh, and Tamil Nadu), lunar months end on Amavasya (New Moon), meaning Shukla Paksha comes first. The Shukla Paksha tithis and major festivals like Diwali and Janmashtami occur on the exact same astronomical day in both systems!
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-600" />
              Why do solar calendars (Tamil, Bengali, Malayalam) differ from lunar ones?
            </h4>
            <p>
              Solar calendars (Sauramana) track the Sun's transit through the 12 constellations of the zodiac (Mesha to Meena). New months begin when the Sun crosses a Sankranti threshold. Lunar calendars track the Moon's angular separation from the Sun. South India and Bengal use solar calendars for civil and temple dates, while using lunar tithis for religious fasts.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Why can a festival date vary between cities?
            </h4>
            <p>
              In Vedic Shastra, festivals are bound to specific Muhurats (like Abhijit for Ram Navami, Nishita midnight for Janmashtami, and Pradosh for Diwali Lakshmi Puja) or governed by the <strong>Udaya Tithi</strong> (the tithi prevailing at local sunrise). Because sunrise occurs earlier in Kolkata than in Ahmedabad or Mumbai by more than an hour, a tithi may be active at sunrise in one city but may have ended before sunrise in another.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4 text-amber-600" />
              What is Adhika Masa (Purushottam Masa)?
            </h4>
            <p>
              A solar year has approx 365.25 days, while 12 lunar months have approx 354.36 days (an 11-day deficit). To prevent festivals from wandering across seasons, an extra lunar month (Adhika Masa) is inserted approximately every 32.5 months. Dedicated to Lord Vishnu as Purushottam Masa, it is celebrated with Japa, charity, and Bhagavad Gita recitation.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
