import React, { useState } from 'react';
import { Globe, Heart, ShieldCheck, Menu, X, Bell, Moon, Sun, WifiOff, Wifi } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  favoritesCount: number;
  onOpenProfile: () => void;
  onOpenAdmin: () => void;
  onOpenDonate?: () => void;
  onOpenBookPuja?: () => void;
  isOfflineMode: boolean;
  onToggleOfflineMode: () => void;
}

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'mr', label: 'मराठी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ' },
  { code: 'or', label: 'ଓଡ଼ିଆ' },
  { code: 'sa', label: 'संस्कृतम्' }
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onSelectTab,
  favoritesCount,
  onOpenProfile,
  onOpenAdmin,
  onOpenDonate,
  onOpenBookPuja,
  isOfflineMode,
  onToggleOfflineMode
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[currentLang] || translations.en;

  const navLinks = [
    { id: 'live-darshan', label: t.navLiveDarshan },
    { id: 'panchang', label: t.navPanchang },
    { id: 'festivals', label: 'व्रत व त्योहार (Festivals)' },
    { id: 'calendar', label: 'पंचांग कैलेंडर (Calendars)' },
    { id: 'kundali', label: t.navKundali },
    { id: 'temple-map', label: t.navPilgrimageMap },
    { id: 'articles', label: t.navArticles },
    { id: 'forum', label: t.navForum }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-amber-900/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('live-darshan')}
          className="text-xl sm:text-2xl font-cinzel font-bold tracking-wider text-amber-950 hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer text-left"
        >
          {t.portalTitle}
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSelectTab(link.id)}
              className={`transition-colors relative py-1 cursor-pointer whitespace-nowrap hover:text-amber-800 ${
                activeTab === link.id
                  ? 'text-amber-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-700'
                  : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Language & Profile controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-stone-800 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200/60 transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-800" />
              <span className="hidden sm:inline">
                {languages.find((l) => l.code === currentLang)?.label || 'Language'}
              </span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-stone-200 rounded-lg shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                      currentLang === lang.code ? 'bg-amber-100 font-semibold text-amber-900' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Low net data saver toggle */}
          <button
            onClick={onToggleOfflineMode}
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors border ${
              isOfflineMode
                ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
            }`}
            title="Toggle Rural Low-Bandwidth Data Saver"
          >
            {isOfflineMode ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            <span>{isOfflineMode ? 'Data Saver' : 'Standard'}</span>
          </button>

          {/* Saved Shrines & Profile Button */}
          <button
            onClick={onOpenProfile}
            className="p-1.5 text-stone-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors relative cursor-pointer"
            title="Saved Temples & Profile"
          >
            <Heart className="w-4 h-4" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Admin Editorial Access */}
          <button
            onClick={onOpenAdmin}
            className="p-1.5 text-stone-600 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
            title="Admin & Article Hub"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-stone-700 hover:text-stone-900 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 bg-[#FAF7F2] border-t border-amber-900/10 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onSelectTab(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer ${
                activeTab === link.id ? 'bg-amber-100 text-amber-900 font-semibold' : 'text-stone-800 hover:bg-amber-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={() => {
                onToggleOfflineMode();
                setIsMobileMenuOpen(false);
              }}
              className="py-2 px-3 text-xs font-medium text-stone-700 bg-stone-100 rounded-lg cursor-pointer flex items-center gap-1.5"
            >
              {isOfflineMode ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
              <span>{isOfflineMode ? 'Data Saver Active' : 'Enable Data Saver'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
