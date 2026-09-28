import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Flame, 
  Bell as BellIcon, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Clock, 
  Info, 
  Send, 
  Heart, 
  Share2, 
  Eye, 
  Compass, 
  CheckCircle2,
  Tv,
  Play,
  RotateCcw,
  ExternalLink,
  BookOpen,
  Landmark,
  Maximize2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Temple, Language, DevotionalComment, DeityType } from '../types';
import { translations } from '../i18n/translations';
import { playTempleBellSound, playConchSound } from '../utils/audioUtils';
import { getTempleLiveStatus, getDetailedRitualsSchedule } from '../utils/templeRitualEngine';
import { LiveDarshanHub } from './live-darshan/LiveDarshanHub';
import { TempleDetailPage } from './live-darshan/TempleDetailPage';

interface LiveDarshanPlayerProps {
  currentLang: Language;
  temples: Temple[];
  selectedTemple: Temple;
  onSelectTemple: (temple: Temple) => void;
  favorites: string[];
  onToggleFavorite: (templeId: string) => void;
  onBookPujaForTemple?: (temple: Temple) => void;
  isOfflineMode: boolean;
  onNavigateToPanchang?: () => void;
  onNavigateToFestivals?: () => void;
}

const initialComments: DevotionalComment[] = [
  { id: '1', templeId: 'kashi-vishwanath', author: 'Rameshwar Sharma', city: 'Varanasi', mantra: 'हर हर महादेव!', text: 'Darshan of Mahadev brings absolute peace. Praying for family well-being.', timestamp: 'Just now', likes: 14 },
  { id: '2', templeId: 'mahakaleshwar-ujjain', author: 'Dr. Meenakshi Rao', city: 'Indore', mantra: 'ॐ नमः शिवाय', text: 'Bhasma Aarti darshan is magnificent today! May Lord Mahakal protect all.', timestamp: '2 min ago', likes: 29 },
  { id: '3', templeId: 'tirupati-balaji', author: 'Srinivasan Raman', city: 'Chennai', mantra: 'गोविंदा गोविंदा', text: 'Srivari golden crown is resplendent. Seeking Venkateswara Swamy blessings.', timestamp: '5 min ago', likes: 45 },
  { id: '4', templeId: 'ram-mandir-ayodhya', author: 'Ankit Prajapati', city: 'Ayodhya', mantra: 'जय श्री राम!', text: 'Divine darshan of Ram Lalla! Truly auspicious morning.', timestamp: '7 min ago', likes: 62 },
  { id: '5', templeId: 'golden-temple-amritsar', author: 'Harpreet Singh', city: 'Amritsar', mantra: 'ਵਾਹਿਗੁਰੂ ਜੀ ਕા ਖ਼ਾਲਸਾ', text: 'Peaceful Gurbani kirtan in the nectar tank. Sarbat da Bhala.', timestamp: '10 min ago', likes: 38 }
];

export const LiveDarshanPlayer: React.FC<LiveDarshanPlayerProps> = ({
  currentLang,
  temples,
  selectedTemple,
  onSelectTemple,
  favorites,
  onToggleFavorite,
  onBookPujaForTemple,
  isOfflineMode,
  onNavigateToPanchang,
  onNavigateToFestivals
}) => {
  const t = translations[currentLang] || translations.en;
  
  // Platform View State: 'player' | 'hub' | 'detail'
  const [platformView, setPlatformView] = useState<'player' | 'hub' | 'detail'>('player');

  // Video Stream Mode: 'live-stream' | 'sanctum-video' | 'photo-darshan'
  const [streamMode, setStreamMode] = useState<'live-stream' | 'sanctum-video' | 'photo-darshan'>('live-stream');
  const [streamKey, setStreamKey] = useState(0); // for reload

  // Interactive offerings state
  const [offerings, setOfferings] = useState({
    flowers: selectedTemple.virtualOfferings.flowers,
    diyas: selectedTemple.virtualOfferings.diyas,
    bells: selectedTemple.virtualOfferings.bells,
    prasad: selectedTemple.virtualOfferings.prasad
  });
  
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

  // Devotional comments
  const [comments, setComments] = useState<DevotionalComment[]>(initialComments);
  const [commentText, setCommentText] = useState('');
  const [devoteeName, setDevoteeName] = useState('');
  const [devoteeCity, setDevoteeCity] = useState('');
  const [activeDeityFilter, setActiveDeityFilter] = useState<DeityType>('all');

  const isFav = favorites.includes(selectedTemple.id);
  const liveStatus = getTempleLiveStatus(selectedTemple);
  const ritualSchedule = getDetailedRitualsSchedule(selectedTemple);

  // Trigger flower pushpanjali celebration
  const handleOfferFlowers = () => {
    setOfferings(prev => ({ ...prev, flowers: prev.flowers + 1 }));
    playConchSound();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#dc2626', '#fbbf24', '#ffffff']
    });
  };

  const handleLightDiya = () => {
    setIsDiyaLit(true);
    setOfferings(prev => ({ ...prev, diyas: prev.diyas + 1 }));
    setTimeout(() => setIsDiyaLit(false), 4000);
  };

  const handleRingBell = () => {
    setIsBellRinging(true);
    setOfferings(prev => ({ ...prev, bells: prev.bells + 1 }));
    playTempleBellSound();
    setTimeout(() => setIsBellRinging(false), 1200);
  };

  const handleOfferPrasad = () => {
    setOfferings(prev => ({ ...prev, prasad: prev.prasad + 1 }));
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#fcd34d', '#f97316', '#fbbf24']
    });
  };

  const toggleAudio = () => {
    if (!audioRef) return;
    if (isAudioPlaying) {
      audioRef.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.play().catch(() => {});
      setIsAudioPlaying(true);
    }
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment: DevotionalComment = {
      id: Date.now().toString(),
      templeId: selectedTemple.id,
      author: devoteeName.trim() || 'Shraddhalu Devotee',
      city: devoteeCity.trim() || selectedTemple.city,
      mantra: selectedTemple.deityType === 'shiva' ? 'हर हर महादेव' : selectedTemple.deityType === 'krishna' ? 'जय श्री कृष्ण' : 'जय श्री राम',
      text: commentText.trim(),
      timestamp: 'Just now',
      likes: 1
    };
    setComments([newComment, ...comments]);
    setCommentText('');
  };

  const filteredTemples = temples.filter(t => {
    if (activeDeityFilter === 'all') return true;
    return t.deityType === activeDeityFilter;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Navigation & View Switcher Bar */}
      <div className="bg-white border border-stone-200 p-2 rounded-2xl shadow-sm text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setPlatformView('player')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              platformView === 'player' ? 'bg-amber-900 text-white shadow-xs' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Live Broadcast Player</span>
          </button>

          <button
            onClick={() => setPlatformView('hub')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              platformView === 'hub' ? 'bg-amber-900 text-white shadow-xs' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>All Temples Discovery Hub ({temples.length})</span>
          </button>

          <button
            onClick={() => setPlatformView('detail')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              platformView === 'detail' ? 'bg-amber-900 text-white shadow-xs' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{selectedTemple.name.split(' ')[0]} Details Page</span>
          </button>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto text-stone-500 font-medium">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>{temples.filter(t => t.isLive).length} Temples Live Right Now</span>
        </div>
      </div>

      {/* VIEW 1: DEDICATED TEMPLE DETAIL PAGE */}
      {platformView === 'detail' && (
        <TempleDetailPage
          temple={selectedTemple}
          allTemples={temples}
          currentLang={currentLang}
          onSelectTemple={(t) => {
            onSelectTemple(t);
            setPlatformView('player');
          }}
          onBackToHub={() => setPlatformView('hub')}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onNavigateToPanchang={onNavigateToPanchang}
          onNavigateToFestivals={onNavigateToFestivals}
        />
      )}

      {/* VIEW 2: ALL TEMPLES DISCOVERY HUB */}
      {platformView === 'hub' && (
        <LiveDarshanHub
          temples={temples}
          currentLang={currentLang}
          onSelectTemple={(t) => {
            onSelectTemple(t);
            setPlatformView('player');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenTempleDetail={(t) => {
            onSelectTemple(t);
            setPlatformView('detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onNavigateToPanchang={onNavigateToPanchang}
          onNavigateToFestivals={onNavigateToFestivals}
        />
      )}

      {/* VIEW 3: LIVE BROADCAST DECK WITH SACRED OFFERINGS & PRAYER WALL */}
      {platformView === 'player' && (
        <div className="space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Player & Offerings (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-stone-900 text-white p-3 rounded-xl border border-stone-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-stone-800 p-1 rounded-lg border border-stone-700">
                    <button
                      onClick={() => setStreamMode('live-stream')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        streamMode === 'live-stream' ? 'bg-amber-600 text-white font-bold' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      🔴 Official Live Stream
                    </button>
                    <button
                      onClick={() => setStreamMode('sanctum-video')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        streamMode === 'sanctum-video' ? 'bg-amber-600 text-white font-bold' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      🛕 Continuous Sanctum Feed
                    </button>
                    <button
                      onClick={() => setStreamMode('photo-darshan')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        streamMode === 'photo-darshan' ? 'bg-amber-600 text-white font-bold' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      🖼️ Sacred Darshan
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedTemple.officialStreamWebsite && (
                    <a
                      href={selectedTemple.officialStreamWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded font-bold transition-colors cursor-pointer flex items-center gap-1 text-xs shadow-xs"
                      title="Watch direct on Temple Trust Official Portal"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span className="hidden sm:inline">Trust Portal</span>
                    </a>
                  )}

                  <button
                    onClick={() => setStreamKey(k => k + 1)}
                    className="p-1.5 hover:bg-stone-800 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
                    title="Reload Stream"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setPlatformView('detail')}
                    className="px-2.5 py-1 bg-amber-800 hover:bg-amber-900 text-white rounded font-bold transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Full Temple Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Video Player Display Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-stone-950 shadow-xl border border-amber-900/20">
                {!isOfflineMode ? (
                  streamMode === 'live-stream' && selectedTemple.streamUrl ? (
                    <div className="relative w-full h-full">
                      <iframe
                        key={`stream-${selectedTemple.id}-${streamKey}`}
                        src={selectedTemple.streamUrl}
                        title={selectedTemple.streamTitle}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute bottom-3 left-3 right-3 z-10 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white text-xs flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          <span className="font-semibold text-white/90">Live Broadcast Active</span>
                          <span className="text-stone-400 hidden sm:inline">· Stream buffering?</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setStreamMode('sanctum-video')}
                            className="px-2 py-0.5 bg-amber-700 hover:bg-amber-600 text-white text-[11px] font-bold rounded-lg cursor-pointer"
                          >
                            🛕 Switch to Sanctum Video
                          </button>
                          {selectedTemple.officialStreamWebsite && (
                            <a
                              href={selectedTemple.officialStreamWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-0.5 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold rounded-lg cursor-pointer flex items-center gap-1"
                            >
                              <ExternalLink className="w-2.5 h-2.5" />
                              <span>Trust Webcast ↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : streamMode === 'sanctum-video' ? (
                    <div className="relative w-full h-full bg-stone-950 flex items-center justify-center">
                      <video
                        key={`video-${selectedTemple.id}-${streamKey}`}
                        src={selectedTemple.fallbackVideoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4'}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onError={() => setStreamMode('photo-darshan')}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                      <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/40 text-left text-white">
                        <span className="text-[10px] text-amber-300 uppercase tracking-widest block font-bold">
                          अखंड गर्भगृह दर्शन (Continuous Sanctum Feed)
                        </span>
                        <h4 className="text-sm font-serif font-bold text-amber-100">
                          {selectedTemple.name}
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-stone-950 overflow-hidden flex items-center justify-center">
                      <img
                        src={selectedTemple.bannerImage || 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80'}
                        alt={selectedTemple.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-black/40 pointer-events-none" />
                      <div className="absolute bottom-6 left-6 text-white text-left z-10">
                        <span className="px-2.5 py-1 bg-amber-600/80 rounded text-[11px] font-bold uppercase tracking-wider text-amber-100">
                          पवित्र दर्शन छवि
                        </span>
                        <h4 className="text-xl font-serif font-bold text-white mt-1 drop-shadow-md">
                          {selectedTemple.hindiName}
                        </h4>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-stone-900 p-6 text-center text-white">
                    <Compass className="w-12 h-12 text-amber-400 mb-3 animate-pulse" />
                    <h4 className="text-xl font-cinzel font-bold text-amber-200">{selectedTemple.name}</h4>
                    <p className="text-xs text-stone-300 max-w-md mt-2">
                      Low-Bandwidth mode active. Streaming paused to preserve data.
                    </p>
                  </div>
                )}

                {/* Status Badges Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none z-10">
                  <span className={`px-2.5 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 ${liveStatus.badgeColor}`}>
                    {liveStatus.status === 'LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                    <span>{liveStatus.status}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-medium border border-white/10 hidden sm:inline-block">
                    {selectedTemple.viewersCount.toLocaleString()} Devotees Tuning In
                  </span>
                </div>
              </div>

              {/* Ritual Timeline & Timings Strip */}
              <div className="bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                  <div>
                    <span className="font-bold text-amber-950">{liveStatus.currentRitual}</span>
                    <span className="text-stone-500 text-[11px] ml-2">Next: {liveStatus.nextRitual} ({liveStatus.nextRitualTime})</span>
                  </div>
                </div>
                <div className="font-mono text-stone-600 text-[11px]">
                  Countdown: <strong className="text-amber-900">{liveStatus.countdownToNext}</strong>
                </div>
              </div>

              {/* Interactive Virtual Offerings Section (No Donation UI) */}
              <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <div>
                    <h3 className="text-sm font-bold font-serif text-stone-900">
                      भक्ति अर्पण (Virtual Sacred Seva)
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Offer pushpanjali, light a holy diya, ring the consecrated bell, and offer prasad to {selectedTemple.deity}
                    </p>
                  </div>

                  <button
                    onClick={toggleAudio}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${
                      isAudioPlaying ? 'bg-amber-100 border-amber-300 text-amber-900' : 'bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>{isAudioPlaying ? 'Mantra Audio ON' : 'Mantra Audio'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  <button
                    onClick={handleOfferFlowers}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800 transition-all cursor-pointer group active:scale-95"
                  >
                    <Sparkles className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform mb-1" />
                    <span className="text-xs font-bold">{t.offerFlowers || 'पुष्पांजलि'}</span>
                    <span className="text-[10px] text-stone-500 mt-0.5 tabular-nums">
                      {offerings.flowers.toLocaleString()} Offered
                    </span>
                  </button>

                  <button
                    onClick={handleLightDiya}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer group active:scale-95 ${
                      isDiyaLit ? 'border-amber-500 bg-amber-100 text-amber-950 ring-2 ring-amber-400' : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800'
                    }`}
                  >
                    <Flame className={`w-6 h-6 mb-1 ${isDiyaLit ? 'text-amber-600 animate-bounce' : 'text-stone-500'}`} />
                    <span className="text-xs font-bold">{t.lightDiya || 'दीप प्रज्वलन'}</span>
                    <span className="text-[10px] text-stone-500 mt-0.5 tabular-nums">
                      {offerings.diyas.toLocaleString()} Lit
                    </span>
                  </button>

                  <button
                    onClick={handleRingBell}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer group active:scale-95 ${
                      isBellRinging ? 'border-amber-500 bg-amber-100 text-amber-950 ring-2 ring-amber-400' : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800'
                    }`}
                  >
                    <BellIcon className={`w-6 h-6 mb-1 ${isBellRinging ? 'text-amber-700 rotate-12 scale-110' : 'text-stone-500'}`} />
                    <span className="text-xs font-bold">{t.ringBell || 'घंटी बजाएं'}</span>
                    <span className="text-[10px] text-stone-500 mt-0.5 tabular-nums">
                      {offerings.bells.toLocaleString()} Rung
                    </span>
                  </button>

                  <button
                    onClick={handleOfferPrasad}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800 transition-all cursor-pointer group active:scale-95"
                  >
                    <Clock className="w-6 h-6 text-amber-700 group-hover:scale-110 transition-transform mb-1" />
                    <span className="text-xs font-bold">{t.offerPrasad || 'भोग अर्पण'}</span>
                    <span className="text-[10px] text-stone-500 mt-0.5 tabular-nums">
                      {offerings.prasad.toLocaleString()} Bhog
                    </span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Devotional Community Prayer Wall (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold font-serif text-stone-900">
                      भक्त प्रार्थना दीवार (Community Prayers)
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Live prayers offered by devotees across Bharat
                    </p>
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-stone-900">{comment.author}</span>
                        <span className="text-[10px] text-stone-400">{comment.city} · {comment.timestamp}</span>
                      </div>
                      <div className="inline-block px-1.5 py-0.5 bg-amber-100/80 text-amber-900 text-[10px] font-bold rounded">
                        {comment.mantra}
                      </div>
                      <p className="text-stone-700 text-xs leading-relaxed pt-0.5">
                        {comment.text}
                      </p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handlePostComment} className="pt-2 border-t border-stone-100 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name (नाम)"
                      value={devoteeName}
                      onChange={(e) => setDevoteeName(e.target.value)}
                      className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:border-amber-500"
                    />
                    <input
                      type="text"
                      placeholder="City / State (शहर)"
                      value={devoteeCity}
                      onChange={(e) => setDevoteeCity(e.target.value)}
                      className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Write your devotional prayer (प्रार्थना लिखें)..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="flex-1 text-xs px-3 py-2 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors cursor-pointer shrink-0"
                      title="Send Prayer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Quick Deity Switcher */}
              <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm">
                <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  Filter Shrines by Deity
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(['all', 'shiva', 'krishna', 'rama', 'hanuman', 'ganesha', 'devi', 'vishnu'] as DeityType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveDeityFilter(type)}
                      className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer capitalize font-medium ${
                        activeDeityFilter === type
                          ? 'bg-amber-900 text-white font-bold'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {type === 'all' ? 'All (सभी)' : type}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Quick Temple Switcher Carousel */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-cinzel font-bold text-stone-900">
                  Switch to Another Sacred Temple Broadcast
                </h3>
                <p className="text-xs text-stone-500">
                  Select any consecrated sanctuary to instantly switch the live feed
                </p>
              </div>
              <button
                onClick={() => setPlatformView('hub')}
                className="text-xs font-bold text-amber-900 hover:underline cursor-pointer"
              >
                View All {temples.length} Temples Directory →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTemples.slice(0, 8).map((temple) => {
                const isSelected = temple.id === selectedTemple.id;
                return (
                  <div
                    key={temple.id}
                    onClick={() => {
                      onSelectTemple(temple);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white ${
                      isSelected 
                        ? 'border-amber-600 ring-2 ring-amber-500/30 shadow-md bg-amber-50/20' 
                        : 'border-stone-200 hover:border-amber-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                          {temple.deity}
                        </span>
                        <h4 className="text-sm font-cinzel font-bold text-stone-900 truncate">
                          {temple.name}
                        </h4>
                        <p className="text-xs text-stone-500 truncate mt-0.5">
                          {temple.location}
                        </p>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shrink-0 mt-1" />
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                      <span className="tabular-nums font-medium text-stone-700">
                        {temple.viewersCount.toLocaleString()} watching
                      </span>
                      <span className="text-amber-800 font-semibold">
                        Switch Feed →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
