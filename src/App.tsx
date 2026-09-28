import React, { useState, useEffect } from 'react';
import { initialTemples } from './data/temples';
import { initialArticles } from './data/articles';
import { calculateDailyPanchang } from './data/panchangEngine';
import { Temple, ArticleItem, PujaBooking, DonationRecord, Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroDarshanBanner } from './components/HeroDarshanBanner';
import { LiveDarshanPlayer } from './components/LiveDarshanPlayer';
import { PanchangSection } from './components/PanchangSection';
import { KundaliSection } from './components/KundaliSection';
import { InteractiveMap } from './components/InteractiveMap';
import { ArticlesSection } from './components/ArticlesSection';
import { FestivalsSection } from './components/FestivalsSection';
import { FestivalPlatform } from './components/FestivalPlatform';
import { CommunityForum } from './components/CommunityForum';
import { PujaBookingModal } from './components/PujaBookingModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { UserProfileModal } from './components/UserProfileModal';
import { Footer } from './components/Footer';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function App() {
  // Localization State - default to English as requested
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    return (localStorage.getItem('mahadarshan_lang') as Language) || 'en';
  });

  // Navigation Tab State
  const [activeTab, setActiveTab] = useState<string>('live-darshan');

  // Temple & City Selection
  const [temples, setTemples] = useState<Temple[]>(initialTemples);
  const [selectedTemple, setSelectedTemple] = useState<Temple>(initialTemples[0]);
  const [selectedCityId, setSelectedCityId] = useState<string>('varanasi');

  // Favorites state (persisted)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mahadarshan_favs');
      return saved ? JSON.parse(saved) : ['kashi-vishwanath', 'mahakaleshwar-ujjain'];
    } catch {
      return ['kashi-vishwanath'];
    }
  });

  // Low bandwidth rural mode
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  // Dynamic articles state (admin can publish new articles)
  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    try {
      const saved = localStorage.getItem('mahadarshan_articles');
      return saved ? JSON.parse(saved) : initialArticles;
    } catch {
      return initialArticles;
    }
  });

  // Booked pujas state
  const [pujaBookings, setPujaBookings] = useState<PujaBooking[]>(() => {
    try {
      const saved = localStorage.getItem('mahadarshan_pujas');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Donations state
  const [donations, setDonations] = useState<DonationRecord[]>(() => {
    try {
      const saved = localStorage.getItem('mahadarshan_donations');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals state
  const [isPujaModalOpen, setIsPujaModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('mahadarshan_favs', JSON.stringify(favorites));
  }, [favorites]);

  // Save articles to localStorage
  useEffect(() => {
    localStorage.setItem('mahadarshan_articles', JSON.stringify(articles));
  }, [articles]);

  // Save pujas
  useEffect(() => {
    localStorage.setItem('mahadarshan_pujas', JSON.stringify(pujaBookings));
  }, [pujaBookings]);

  // Save donations
  useEffect(() => {
    localStorage.setItem('mahadarshan_donations', JSON.stringify(donations));
  }, [donations]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('mahadarshan_lang', lang);
    showToast(`Language changed to ${lang.toUpperCase()}`);
  };

  const handleToggleFavorite = (templeId: string) => {
    if (favorites.includes(templeId)) {
      setFavorites(favorites.filter(id => id !== templeId));
      showToast('Removed from Saved Shrines');
    } else {
      setFavorites([...favorites, templeId]);
      showToast('Added to Saved Shrines (मेरी साधना)');
    }
  };

  const handleAddArticle = (newArticle: ArticleItem) => {
    setArticles([newArticle, ...articles]);
    showToast('Article successfully published and live on portal!');
  };

  const handleDeleteArticle = (id: string) => {
    setArticles(articles.filter(a => a.id !== id));
    showToast('Article deleted');
  };

  const handleUpdateTempleStream = (templeId: string, streamUrl: string) => {
    setTemples(temples.map(t => t.id === templeId ? { ...t, streamUrl } : t));
    if (selectedTemple.id === templeId) {
      setSelectedTemple({ ...selectedTemple, streamUrl });
    }
    showToast('Temple broadcast stream updated successfully!');
  };

  const handleRecordDonation = (record: DonationRecord) => {
    setDonations([record, ...donations]);
  };

  const handleConfirmPujaBooking = (booking: PujaBooking) => {
    setPujaBookings([booking, ...pujaBookings]);
  };

  // Compute today's tithi string for hero banner
  const todayPanchang = calculateDailyPanchang(new Date(), selectedCityId);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-900 selection:bg-amber-200 selection:text-amber-950 font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 border border-amber-500/30 text-xs font-semibold animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        favoritesCount={favorites.length}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenBookPuja={() => setIsPujaModalOpen(true)}
        isOfflineMode={isOfflineMode}
        onToggleOfflineMode={() => {
          setIsOfflineMode(!isOfflineMode);
          showToast(!isOfflineMode ? 'Low-Bandwidth Mode Enabled (Data Saver)' : 'Full Video Mode Enabled');
        }}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-10 w-full">
        
        {/* Sacred Hero Banner */}
        <HeroDarshanBanner
          currentLang={currentLang}
          onSelectTab={setActiveTab}
          activeTemple={selectedTemple}
          onOpenBookPuja={() => setIsPujaModalOpen(true)}
          todaysTithiString={todayPanchang.tithi}
          cityName={todayPanchang.cityName}
        />

        {/* Tab 1: Live Darshan & Temple Streaming Deck */}
        {activeTab === 'live-darshan' && (
          <LiveDarshanPlayer
            currentLang={currentLang}
            temples={temples}
            selectedTemple={selectedTemple}
            onSelectTemple={(t: Temple) => setSelectedTemple(t)}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onBookPujaForTemple={(t: Temple) => {
              setSelectedTemple(t);
              setIsPujaModalOpen(true);
            }}
            isOfflineMode={isOfflineMode}
          />
        )}

        {/* Tab 2: Dynamic City-wise Vedic Panchang & Choghadiya */}
        {activeTab === 'panchang' && (
          <PanchangSection
            currentLang={currentLang}
            onChangeLang={handleLanguageChange}
            selectedCityId={selectedCityId}
            onSelectCity={(cityId) => setSelectedCityId(cityId)}
            onSubscribePanchangAlerts={() => {
              setIsProfileModalOpen(true);
              showToast('Configure daily Tithi & Muhurat notifications in your profile settings.');
            }}
            onNavigateToCalendar={() => setActiveTab('festivals')}
          />
        )}

        {/* Tab 3: Vedic Kundali & Horoscope Generation */}
        {activeTab === 'kundali' && (
          <KundaliSection 
            currentLang={currentLang} 
            onNavigateToPanchang={() => setActiveTab('panchang')}
            onNavigateToFestivals={() => setActiveTab('festivals')}
          />
        )}

        {/* Tab 4: Interactive Pilgrimage Map */}
        {activeTab === 'temple-map' && (
          <InteractiveMap
            currentLang={currentLang}
            temples={temples}
            onSelectTempleForDarshan={(t) => {
              setSelectedTemple(t);
              setActiveTab('live-darshan');
            }}
            onBookPuja={(t) => {
              setSelectedTemple(t);
              setIsPujaModalOpen(true);
            }}
          />
        )}

        {/* Tab 5: Culture & Wisdom Articles (culroot inspired) */}
        {activeTab === 'articles' && (
          <ArticlesSection
            currentLang={currentLang}
            articles={articles}
            onOpenAdmin={() => setIsAdminModalOpen(true)}
          />
        )}

        {/* Tab 6: Complete Hindu & Indian Festival Information Platform */}
        {activeTab === 'festivals' && (
          <FestivalPlatform 
            currentLang={currentLang} 
            onNavigateToPanchang={() => setActiveTab('panchang')}
            onNavigateToCalendar={() => setActiveTab('calendar')}
          />
        )}

        {/* Tab 7: Multi-faith Universal Panchang & Calendar Engine */}
        {activeTab === 'calendar' && (
          <FestivalsSection 
            currentLang={currentLang} 
            onNavigateToPanchang={() => setActiveTab('panchang')}
            onNavigateToFestivals={() => setActiveTab('festivals')}
          />
        )}

        {/* Tab 8: Devotee Community Forum */}
        {activeTab === 'forum' && (
          <CommunityForum currentLang={currentLang} />
        )}
      </main>

      {/* Modals */}
      <PujaBookingModal
        isOpen={isPujaModalOpen}
        onClose={() => setIsPujaModalOpen(false)}
        temples={temples}
        selectedTemple={selectedTemple}
        onConfirmBooking={handleConfirmPujaBooking}
        currentLang={currentLang}
      />

      <AdminPanelModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        articles={articles}
        onAddArticle={handleAddArticle}
        onDeleteArticle={handleDeleteArticle}
        temples={temples}
        onUpdateTempleStream={handleUpdateTempleStream}
        pujaBookings={pujaBookings}
        donations={donations}
      />

      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        favorites={favorites}
        temples={temples}
        onSelectTempleForDarshan={(t) => {
          setSelectedTemple(t);
          setActiveTab('live-darshan');
        }}
        onRemoveFavorite={handleToggleFavorite}
        pujaBookings={pujaBookings}
        donations={donations}
        isOfflineMode={isOfflineMode}
        onToggleOfflineMode={() => setIsOfflineMode(!isOfflineMode)}
        currentLang={currentLang}
      />

      {/* Institutional Museum Footer */}
      <Footer
        currentLang={currentLang}
        onSelectTab={setActiveTab}
      />
    </div>
  );
}
export default App;
