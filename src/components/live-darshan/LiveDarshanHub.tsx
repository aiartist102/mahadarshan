import React, { useState } from 'react';
import { 
  Play, 
  Search, 
  Sparkles, 
  Flame, 
  Heart, 
  Clock, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Filter,
  Eye,
  Tv,
  Calendar,
  Layers,
  BookOpen
} from 'lucide-react';
import { Temple, Language, DeityType } from '../../types';
import { getTempleLiveStatus } from '../../utils/templeRitualEngine';

interface LiveDarshanHubProps {
  temples: Temple[];
  currentLang: Language;
  onSelectTemple: (t: Temple) => void;
  onOpenTempleDetail: (t: Temple) => void;
  favorites: string[];
  onToggleFavorite: (templeId: string) => void;
  onNavigateToPanchang?: () => void;
  onNavigateToFestivals?: () => void;
}

export type HubCategoryTab = 
  | 'live-now' 
  | 'all' 
  | 'jyotirlinga' 
  | 'char-dham' 
  | 'shakti-peeth' 
  | 'krishna-rama'
  | 'ganesha-hanuman'
  | 'south-temples'
  | 'favorites';

export const LiveDarshanHub: React.FC<LiveDarshanHubProps> = ({
  temples,
  currentLang,
  onSelectTemple,
  onOpenTempleDetail,
  favorites,
  onToggleFavorite,
  onNavigateToPanchang,
  onNavigateToFestivals
}) => {
  const [activeTab, setActiveTab] = useState<HubCategoryTab>('live-now');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeity, setSelectedDeity] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');

  // Compute live temples count dynamically
  const liveTemplesList = temples.filter(t => t.isLive);
  const liveCount = liveTemplesList.length;

  // Filter temples
  const filteredTemples = temples.filter(temple => {
    // Tab filter
    if (activeTab === 'live-now' && !temple.isLive) return false;
    if (activeTab === 'jyotirlinga' && temple.templeType !== 'jyotirlinga') return false;
    if (activeTab === 'char-dham' && temple.templeType !== 'char-dham') return false;
    if (activeTab === 'shakti-peeth' && temple.templeType !== 'shakti-peeth') return false;
    if (activeTab === 'krishna-rama' && temple.deityType !== 'krishna' && temple.deityType !== 'rama') return false;
    if (activeTab === 'ganesha-hanuman' && temple.deityType !== 'ganesha' && temple.deityType !== 'hanuman') return false;
    if (activeTab === 'south-temples' && !['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'].includes(temple.state)) return false;
    if (activeTab === 'favorites' && !favorites.includes(temple.id)) return false;

    // Dropdown filters
    if (selectedDeity !== 'all' && temple.deityType !== selectedDeity) return false;
    if (selectedState !== 'all' && temple.state !== selectedState) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = temple.name.toLowerCase().includes(q) || temple.hindiName.toLowerCase().includes(q);
      const matchCity = temple.city.toLowerCase().includes(q) || temple.state.toLowerCase().includes(q);
      const matchDeity = temple.deity.toLowerCase().includes(q);
      return matchName || matchCity || matchDeity;
    }

    return true;
  });

  const allStates = Array.from(new Set(temples.map(t => t.state))).sort();

  return (
    <div className="space-y-6">
      
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-r from-[#FAF7F2] via-amber-50/50 to-orange-50/40 border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-4xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span>All-India Divine Sanctum Network · 24/7 Sacred Broadcasts</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-950 leading-tight">
            Live Darshan — Watch Live Temple Darshan, Aarti & Pooja
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Experience divine live darshan, daily aartis, and sacred rituals from consecrated Jyotirlingas, Shakti Peeths, Char Dham, and holy temples across India from the peace of your home.
          </p>

          {/* Quick Counter Strip */}
          <div className="pt-2 flex items-center flex-wrap gap-4 text-xs font-bold">
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-stone-200/90 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-red-700 font-extrabold">{liveCount} Temples Live Right Now</span>
            </div>

            <div className="text-stone-500 font-medium">
              35+ Verified Shrines · 12 Jyotirlingas · 4 Char Dham · 51 Shakti Peeths
            </div>
          </div>
        </div>

        {/* Global Search & Filter Bar */}
        <div className="mt-6 pt-5 border-t border-amber-900/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search temple, deity or city (e.g. Mahakal, Somnath, Ayodhya, Kashi)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 shadow-2xs text-stone-900 font-medium"
            />
          </div>

          <div>
            <select
              value={selectedDeity}
              onChange={(e) => setSelectedDeity(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 shadow-2xs text-stone-800 font-medium cursor-pointer"
            >
              <option value="all">All Deities (सभी देवता)</option>
              <option value="shiva">Lord Shiva (शिव)</option>
              <option value="krishna">Lord Krishna (कृष्ण)</option>
              <option value="rama">Lord Rama (राम)</option>
              <option value="hanuman">Lord Hanuman (हनुमान)</option>
              <option value="ganesha">Lord Ganesha (गणेश)</option>
              <option value="devi">Maa Durga / Devi (देवी)</option>
              <option value="vishnu">Lord Vishnu (विष्णु)</option>
            </select>
          </div>

          <div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 shadow-2xs text-stone-800 font-medium cursor-pointer"
            >
              <option value="all">All States (सभी राज्य)</option>
              {allStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        {[
          { id: 'live-now', label: `🔴 Live Now (${liveCount})` },
          { id: 'all', label: `All Temples (${temples.length})` },
          { id: 'jyotirlinga', label: '🔱 12 Jyotirlingas' },
          { id: 'char-dham', label: '🚩 Char Dham' },
          { id: 'shakti-peeth', label: '🌺 Shakti Peeths' },
          { id: 'krishna-rama', label: '🪷 Sri Krishna & Rama' },
          { id: 'ganesha-hanuman', label: '🪔 Ganesha & Hanuman' },
          { id: 'south-temples', label: '🦚 South Mahakshetrams' },
          { id: 'favorites', label: `❤️ My Shrines (${favorites.length})` }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                isActive
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Temples Discovery Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-500">
          <span>Showing <strong>{filteredTemples.length}</strong> sanctified shrines</span>
          {activeTab === 'favorites' && favorites.length === 0 && (
            <span className="text-amber-800">You haven't saved any shrines yet. Click the heart icon on any temple.</span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTemples.map((temple) => {
            const status = getTempleLiveStatus(temple);
            const isFav = favorites.includes(temple.id);

            return (
              <div
                key={temple.id}
                className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Card Banner Image / Live Preview */}
                <div className="relative aspect-video w-full bg-stone-900 overflow-hidden">
                  <img
                    src={temple.bannerImage || 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80'}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded-md text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 ${status.badgeColor}`}>
                      {status.status === 'LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                      <span>{status.status}</span>
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => onToggleFavorite(temple.id)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 backdrop-blur-xs text-white hover:text-rose-500 transition-colors cursor-pointer"
                    title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Current Ritual Badge */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs">
                    <span className="text-[10px] text-amber-300 font-bold block uppercase tracking-wider">
                      Current Ritual:
                    </span>
                    <span className="font-semibold text-white truncate block">
                      {status.currentRitual}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                      {temple.deity}
                    </span>
                    <h3 className="font-cinzel font-bold text-stone-900 text-base group-hover:text-amber-900 transition-colors">
                      {temple.name}
                    </h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{temple.location}</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs gap-2">
                    <button
                      onClick={() => onSelectTemple(temple)}
                      className="flex-1 py-2 px-3 bg-amber-900 hover:bg-amber-950 text-white rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-white text-white" />
                      <span>Watch Live</span>
                    </button>

                    <button
                      onClick={() => onOpenTempleDetail(temple)}
                      className="py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-bold transition-colors cursor-pointer text-xs"
                      title="View temple details, aartis, and history"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SEO & Devotional Educational Guide Section */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-800" />
          <h2 className="text-xl font-cinzel font-bold text-stone-900">
            Live Temple Darshan Online — Spiritual Significance & Guidelines
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          In Sanatana Dharma, divine darshan signifies an auspicious visual connection with the consecrated deity. Through pure intention, devotion, and viewing the sacred sanctum during auspicious aarti hours, devotees receive peaceful blessings and spiritual upliftment regardless of physical geographical distance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
            <h4 className="font-bold text-stone-900 text-xs font-cinzel">Verified Live Feeds</h4>
            <p className="text-xs text-stone-600">
              Streams and sanctum broadcasts are authenticated directly from official temple trusts, devasthanams, and verified public broadcast authorities.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
            <h4 className="font-bold text-stone-900 text-xs font-cinzel">Timezone Aware Rituals</h4>
            <p className="text-xs text-stone-600">
              Mangala Aarti, Shringar, Rajbhog, and Sandhya Aarti timings are synchronized according to Indian Standard Time (Asia/Kolkata).
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
            <h4 className="font-bold text-stone-900 text-xs font-cinzel">Connected Panchang</h4>
            <p className="text-xs text-stone-600">
              Each shrine is seamlessly integrated with today’s Vedic Tithi, Nakshatra, and festival muhurats calculated for its specific geographical location.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
