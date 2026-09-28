import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Tv, 
  Heart, 
  Share2, 
  Bell, 
  Clock, 
  MapPin, 
  Calendar, 
  Compass, 
  ChevronLeft, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  BookOpen, 
  Landmark, 
  HelpCircle,
  Eye,
  Info,
  Flame,
  Music
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playTempleBellSound, playConchSound } from '../../utils/audioUtils';
import { Temple, Language } from '../../types';
import { getTempleLiveStatus, getDetailedRitualsSchedule } from '../../utils/templeRitualEngine';
import { calculateDailyPanchang } from '../../data/panchangEngine';

interface TempleDetailPageProps {
  temple: Temple;
  allTemples: Temple[];
  currentLang: Language;
  onSelectTemple: (t: Temple) => void;
  onBackToHub: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onNavigateToPanchang?: () => void;
  onNavigateToFestivals?: () => void;
}

export const TempleDetailPage: React.FC<TempleDetailPageProps> = ({
  temple,
  allTemples,
  currentLang,
  onSelectTemple,
  onBackToHub,
  favorites,
  onToggleFavorite,
  onNavigateToPanchang,
  onNavigateToFestivals
}) => {
  const [streamMode, setStreamMode] = useState<'live-stream' | 'sanctum-video' | 'photo-darshan'>('live-stream');
  const [streamKey, setStreamKey] = useState(0);
  const [isNotified, setIsNotified] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'history' | 'architecture' | 'aarti' | 'travel' | 'faqs'>('about');
  const [shareToast, setShareToast] = useState(false);
  const [flowerCount, setFlowerCount] = useState(temple.virtualOfferings?.flowers || 125000);
  const [diyaCount, setDiyaCount] = useState(temple.virtualOfferings?.diyas || 94000);
  const [bellCount, setBellCount] = useState(temple.virtualOfferings?.bells || 260000);
  const [isDiyaLit, setIsDiyaLit] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioRef] = useState<HTMLAudioElement | null>(() => {
    if (typeof Audio !== 'undefined') {
      const a = new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=om-namah-shivaya-10499.mp3');
      a.loop = true;
      return a;
    }
    return null;
  });

  const handleOfferFlowers = () => {
    setFlowerCount(c => c + 1);
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#f43f5e', '#ffffff']
    });
  };

  const handleLightDiya = () => {
    setIsDiyaLit(true);
    setDiyaCount(c => c + 1);
    setTimeout(() => setIsDiyaLit(false), 8000);
  };

  const handleRingBell = () => {
    setIsBellRinging(true);
    setBellCount(c => c + 1);
    playTempleBellSound();
    setTimeout(() => setIsBellRinging(false), 1200);
  };

  const handleBlowConch = () => {
    playConchSound();
  };

  const toggleSacredAudio = () => {
    if (!audioRef) return;
    if (isAudioPlaying) {
      audioRef.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.play().then(() => setIsAudioPlaying(true)).catch(() => {});
    }
  };

  const liveStatus = getTempleLiveStatus(temple);
  const ritualSchedule = getDetailedRitualsSchedule(temple);
  const isFav = favorites.includes(temple.id);

  // Panchang for temple city
  const todayPanchang = calculateDailyPanchang(new Date(), temple.city.toLowerCase());

  // Related temples (same deity or state)
  const relatedTemples = allTemples.filter(
    t => t.id !== temple.id && (t.deityType === temple.deityType || t.state === temple.state)
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-stone-200 text-xs">
        <div className="flex items-center gap-2 text-stone-600 flex-wrap">
          <button
            onClick={onBackToHub}
            className="flex items-center gap-1 font-bold text-amber-900 hover:text-amber-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Live Darshan Hub</span>
          </button>
          <span>/</span>
          <span>{temple.state}</span>
          <span>/</span>
          <span>{temple.city}</span>
          <span>/</span>
          <span className="font-bold text-stone-900">{temple.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleFavorite(temple.id)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              isFav ? 'bg-rose-50 text-rose-700 border-rose-200 shadow-2xs' : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-600 text-rose-600' : 'text-stone-400'}`} />
            <span>{isFav ? 'In My Shrines (मेरी साधना)' : 'Add to Favorites'}</span>
          </button>

          <button
            onClick={() => setIsNotified(!isNotified)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              isNotified ? 'bg-amber-50 text-amber-900 border-amber-300' : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
            }`}
          >
            <Bell className={`w-3.5 h-3.5 ${isNotified ? 'fill-amber-600 text-amber-600' : 'text-stone-400'}`} />
            <span>{isNotified ? 'Alerts On' : 'Notify Aarti'}</span>
          </button>

          <button
            onClick={handleShare}
            className="px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5 text-stone-500" />
            <span>{shareToast ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Hero Video Deck & Live Info Card */}
      <div className="bg-stone-950 rounded-3xl overflow-hidden shadow-xl border border-amber-900/30">
        
        {/* Video Player Container (16:9 Aspect) */}
        <div className="relative w-full aspect-video sm:max-h-[520px] bg-black flex items-center justify-center overflow-hidden">
          
          {streamMode === 'live-stream' && temple.streamUrl && (
            <iframe
              key={`stream-${temple.id}-${streamKey}`}
              src={temple.streamUrl}
              title={temple.streamTitle || temple.name}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}

          {streamMode === 'sanctum-video' && (
            <video
              key={`video-${temple.id}-${streamKey}`}
              src={temple.fallbackVideoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4'}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {streamMode === 'photo-darshan' && (
            <img
              src={temple.bannerImage || 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'}
              alt={temple.name}
              className="w-full h-full object-cover"
            />
          )}

          {/* Top Overlay Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-lg text-white font-bold text-xs uppercase tracking-wider shadow-md pointer-events-auto flex items-center gap-1.5 ${liveStatus.badgeColor}`}>
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>{liveStatus.status}</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10 hidden sm:inline-block">
                {temple.viewersCount.toLocaleString()} watching now
              </span>
            </div>

            {/* Video Feed Source Switcher */}
            <div className="flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/20 pointer-events-auto text-xs flex-wrap">
              <button
                onClick={() => setStreamMode('live-stream')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer font-medium ${
                  streamMode === 'live-stream' ? 'bg-amber-600 text-white font-bold' : 'text-stone-300 hover:text-white'
                }`}
                title="Watch Live Stream Broadcast"
              >
                🔴 Live Stream
              </button>
              <button
                onClick={() => setStreamMode('sanctum-video')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer font-medium ${
                  streamMode === 'sanctum-video' ? 'bg-amber-600 text-white font-bold' : 'text-stone-300 hover:text-white'
                }`}
                title="Watch Continuous Garbhagriha Video"
              >
                🛕 Sanctum Video
              </button>
              <button
                onClick={() => setStreamMode('photo-darshan')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer font-medium ${
                  streamMode === 'photo-darshan' ? 'bg-amber-600 text-white font-bold' : 'text-stone-300 hover:text-white'
                }`}
                title="View High-Resolution Shringar Darshan"
              >
                🖼️ Divya Darshan
              </button>
              {temple.officialStreamWebsite && (
                <a
                  href={temple.officialStreamWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs transition-colors flex items-center gap-1 shadow-sm"
                  title="Watch direct on Temple Trust Official Portal"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span className="hidden sm:inline">Trust Webcast</span>
                </a>
              )}
              <button
                onClick={() => setStreamKey(prev => prev + 1)}
                className="p-1 text-stone-300 hover:text-white rounded transition-colors cursor-pointer"
                title="Reload Stream"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Video Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 text-white z-10 pointer-events-none">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                  {temple.deity} · {temple.city}, {temple.state}
                </span>
                <h1 className="text-xl sm:text-3xl font-cinzel font-bold text-white mt-0.5">
                  {temple.name}
                </h1>
                <p className="text-stone-300 text-xs mt-0.5 font-medium">
                  {temple.hindiName}
                </p>
              </div>

              <div className="pointer-events-auto bg-stone-900/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-xs space-y-1">
                <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                  Current Ritual & Hours
                </div>
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{liveStatus.currentRitual}</span>
                </div>
                <div className="text-[11px] text-stone-300 font-mono">
                  Next: {liveStatus.nextRitual} ({liveStatus.nextRitualTime}) · in {liveStatus.countdownToNext}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Aarti & Rituals Bar */}
        <div className="bg-stone-900 border-t border-stone-800 p-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 mr-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Today's Aartis:</span>
            </span>
            {ritualSchedule.map((aarti, idx) => (
              <div
                key={idx}
                className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-2 ${
                  aarti.isCurrent
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold ring-1 ring-amber-500/50'
                    : aarti.isPast
                      ? 'bg-stone-800/60 text-stone-400 border-stone-700'
                      : 'bg-stone-800 text-stone-200 border-stone-700'
                }`}
              >
                {aarti.isCurrent && <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />}
                <span className="font-semibold">{aarti.name}</span>
                <span className="font-mono text-[11px] text-stone-400">({aarti.time})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sacred Virtual Darshan Puja Thali - 100% Free Seva */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 p-4 sm:p-5 rounded-2xl border border-amber-500/30 text-white shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>निशुल्क पावन पूजा थाली (Free Sacred Offerings)</span>
            </span>
            <h3 className="font-cinzel font-bold text-white text-base">
              Offer Devotional Prayers to {temple.name}
            </h3>
            <p className="text-xs text-stone-300">
              Perform holy Pushparpan, light a virtual diya, ring sacred bells, and blow the divine conch with pure devotion.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleOfferFlowers}
              className="px-3.5 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 rounded-xl text-xs font-bold text-amber-200 transition-all cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm"
              title="Offer Fresh Sacred Flowers"
            >
              <span>🌸</span>
              <span>पुष्पार्पण ({flowerCount.toLocaleString()})</span>
            </button>

            <button
              onClick={handleLightDiya}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm border ${
                isDiyaLit 
                  ? 'bg-amber-500 text-stone-950 border-amber-300 animate-pulse shadow-amber-500/40' 
                  : 'bg-orange-500/20 hover:bg-orange-500/30 border-orange-400/40 text-orange-200'
              }`}
              title="Light Holy Oil Lamp"
            >
              <Flame className={`w-3.5 h-3.5 ${isDiyaLit ? 'text-stone-950 fill-stone-950' : 'text-orange-400'}`} />
              <span>{isDiyaLit ? 'दीपक प्रज्ज्वलित है!' : `दीप प्रज्ज्वलन (${diyaCount.toLocaleString()})`}</span>
            </button>

            <button
              onClick={handleRingBell}
              className={`px-3.5 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/40 rounded-xl text-xs font-bold text-yellow-200 transition-all cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm ${
                isBellRinging ? 'animate-bounce' : ''
              }`}
              title="Ring Sacred Temple Bell"
            >
              <Bell className="w-3.5 h-3.5 text-yellow-400" />
              <span>घंटानाद ({bellCount.toLocaleString()})</span>
            </button>

            <button
              onClick={handleBlowConch}
              className="px-3.5 py-2 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 rounded-xl text-xs font-bold text-rose-200 transition-all cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm"
              title="Blow Divine Conch Shell"
            >
              <span>🐚</span>
              <span>शंखनाद</span>
            </button>

            <button
              onClick={toggleSacredAudio}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                isAudioPlaying
                  ? 'bg-emerald-600 text-white border-emerald-400'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'
              }`}
              title="Toggle Sacred Vedic Ambient Chanting"
            >
              {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isAudioPlaying ? 'Chanting On' : 'Sacred Audio'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Tabs Navigation */}
      <div className="flex items-center gap-1 border-b border-stone-200 overflow-x-auto text-xs font-bold">
        {[
          { id: 'about', label: 'About & Deity', icon: BookOpen },
          { id: 'history', label: 'History & Legends', icon: Landmark },
          { id: 'architecture', label: 'Architecture', icon: Landmark },
          { id: 'aarti', label: 'Aarti & Darshan Timings', icon: Clock },
          { id: 'travel', label: 'How to Reach & Dress Code', icon: Compass },
          { id: 'faqs', label: 'Temple FAQs', icon: HelpCircle }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComp = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? 'border-amber-900 text-amber-950 font-extrabold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Content Area (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* TAB 1: ABOUT & DEITY */}
          {activeTab === 'about' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-cinzel font-bold text-stone-900">
                About {temple.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {temple.history}
              </p>

              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1">
                <span className="text-xs font-bold text-amber-950 uppercase tracking-wider block">
                  Religious Significance & Darshan Phala
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {temple.significance}
                </p>
              </div>

              {temple.festivalsCelebrated && temple.festivalsCelebrated.length > 0 && (
                <div className="pt-2 space-y-2">
                  <h3 className="text-sm font-bold text-stone-900 font-cinzel">
                    Major Festivals Celebrated at {temple.city}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {temple.festivalsCelebrated.map((fest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800"
                      >
                        {fest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: HISTORY */}
          {activeTab === 'history' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-cinzel font-bold text-stone-900">
                Puranic History & Sacred Legends
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {temple.history}
              </p>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 leading-relaxed">
                The sacred sanctuary at {temple.location} stands as an immortal witness to thousands of years of continuous devotional worship, royal patronages, and saintly visits by Adi Shankaracharya, Goswami Tulsidas, and revered acharyas.
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-cinzel font-bold text-stone-900">
                Temple Architecture & Shikhara Craftsmanship
              </h2>
              {temple.architecture ? (
                <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                  <div><strong>Architectural Style:</strong> {temple.architecture.style}</div>
                  <div><strong>Built Era / Restoration:</strong> {temple.architecture.builtCentury}</div>
                  {temple.architecture.patron && <div><strong>Historic Patron:</strong> {temple.architecture.patron}</div>}
                  {temple.architecture.materials && <div><strong>Materials Used:</strong> {temple.architecture.materials}</div>}
                  
                  {temple.architecture.highlights && (
                    <div className="pt-2 space-y-1.5">
                      <strong className="block text-stone-900">Key Architectural Highlights:</strong>
                      <ul className="list-disc list-inside space-y-1 text-xs text-stone-600">
                        {temple.architecture.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-stone-600">
                  Built in traditional Indian temple architecture conforming to Vastu Shastra and Shilpa Shastra, featuring intricate stone carvings, towering gopuram/shikhara, and a divine sanctum sanctorum (Garbhagriha).
                </p>
              )}
            </div>
          )}

          {/* TAB 4: AARTI & TIMINGS */}
          {activeTab === 'aarti' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-cinzel font-bold text-stone-900">
                  Daily Aarti & Darshan Schedule
                </h2>
                <span className="text-xs text-stone-500 font-mono">
                  Temple Hours: {temple.darshanHours}
                </span>
              </div>

              <div className="divide-y divide-stone-100">
                {temple.aartiTimings.map((aarti, idx) => (
                  <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <div className="font-bold text-stone-900 text-sm">
                        {aarti.name} ({aarti.hindiName})
                      </div>
                      <div className="text-stone-500 text-[11px] mt-0.5">
                        {aarti.description}
                      </div>
                    </div>
                    <div className="font-mono font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/80 self-start sm:self-auto">
                      {aarti.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: HOW TO REACH & DRESS CODE */}
          {activeTab === 'travel' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-cinzel font-bold text-stone-900">
                Pilgrimage Guidelines & How to Reach
              </h2>
              {temple.travelInfo ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="block text-stone-900">Nearest Airport:</strong>
                    <span className="text-stone-600">{temple.travelInfo.nearestAirport}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="block text-stone-900">Nearest Railway Station:</strong>
                    <span className="text-stone-600">{temple.travelInfo.nearestRailway}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="block text-stone-900">Road Connectivity:</strong>
                    <span className="text-stone-600">{temple.travelInfo.roadConnectivity}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="block text-stone-900">Best Time to Visit:</strong>
                    <span className="text-stone-600">{temple.travelInfo.bestTimeToVisit}</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-stone-50 rounded-xl text-xs text-stone-600">
                  Well connected by air, railway, and national highway networks. Direct interstate taxis and pilgrimage buses run regularly to {temple.city}.
                </div>
              )}

              {temple.travelInfo?.dressCode && (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950">
                  <strong>Dress Code & Entry Protocols:</strong> {temple.travelInfo.dressCode}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: FAQS */}
          {activeTab === 'faqs' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-cinzel font-bold text-stone-900">
                Frequently Asked Questions for {temple.name}
              </h2>
              <div className="space-y-3">
                {(temple.faqs || [
                  { question: `What are the darshan timings of ${temple.name}?`, answer: `The temple is typically open from ${temple.darshanHours}. Special aartis are conducted during morning and evening hours.` },
                  { question: `Is live darshan available every day?`, answer: `Yes, official live broadcast feeds are telecast daily during sanctum opening hours.` },
                  { question: `What is the presiding deity of ${temple.name}?`, answer: `${temple.deity} is the supreme presiding divinity worshipped in the sanctum sanctorum.` }
                ]).map((faq, i) => (
                  <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                    <div className="font-bold text-stone-900 text-xs">{faq.question}</div>
                    <div className="text-xs text-stone-600 leading-relaxed">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar Info & Panchang Alignment (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Today's Temple Panchang Alignment */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Today's Panchang at {temple.city}</span>
              </span>
              {onNavigateToPanchang && (
                <button
                  onClick={onNavigateToPanchang}
                  className="text-[11px] font-bold text-amber-800 hover:underline cursor-pointer"
                >
                  View Details →
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-stone-50 rounded-lg">
                <span className="text-stone-400 block text-[10px]">Tithi</span>
                <span className="font-bold text-stone-900">{todayPanchang.tithi}</span>
              </div>
              <div className="p-2 bg-stone-50 rounded-lg">
                <span className="text-stone-400 block text-[10px]">Nakshatra</span>
                <span className="font-bold text-stone-900">{todayPanchang.nakshatra}</span>
              </div>
              <div className="p-2 bg-stone-50 rounded-lg">
                <span className="text-stone-400 block text-[10px]">Sunrise</span>
                <span className="font-mono font-bold text-amber-900">{todayPanchang.sunrise}</span>
              </div>
              <div className="p-2 bg-stone-50 rounded-lg">
                <span className="text-stone-400 block text-[10px]">Sunset</span>
                <span className="font-mono font-bold text-amber-900">{todayPanchang.sunset}</span>
              </div>
            </div>
          </div>

          {/* Related / Nearby Shrines */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-cinzel">
              Related Shrines in {temple.state} & Tradition
            </h3>

            <div className="space-y-2.5">
              {relatedTemples.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectTemple(rel)}
                  className="p-3 bg-stone-50 hover:bg-amber-50/60 rounded-xl border border-stone-200 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs">{rel.name}</h4>
                    <span className="text-[10px] text-stone-500">{rel.city}, {rel.state}</span>
                  </div>
                  <span className="text-xs font-bold text-amber-900">Watch →</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
