import React, { useState } from 'react';
import { 
  X, 
  User, 
  Heart, 
  Sparkles, 
  Bell, 
  Calendar, 
  ShieldCheck, 
  WifiOff, 
  Wifi, 
  Printer, 
  Trash2,
  Video
} from 'lucide-react';
import { Temple, PujaBooking, DonationRecord, Language } from '../types';
import { translations } from '../i18n/translations';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  temples: Temple[];
  onSelectTempleForDarshan: (temple: Temple) => void;
  onRemoveFavorite: (templeId: string) => void;
  pujaBookings: PujaBooking[];
  donations: DonationRecord[];
  isOfflineMode: boolean;
  onToggleOfflineMode: () => void;
  currentLang: Language;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  favorites,
  temples,
  onSelectTempleForDarshan,
  onRemoveFavorite,
  pujaBookings,
  donations,
  isOfflineMode,
  onToggleOfflineMode,
  currentLang
}) => {
  const t = translations[currentLang] || translations.en;
  
  const [profileName, setProfileName] = useState('Radha Krishna Das');
  const [profileCity, setProfileCity] = useState('Varanasi, UP');
  const [activeTab, setActiveTab] = useState<'favorites' | 'pujas' | 'donations' | 'settings'>('favorites');
  
  // Notification preferences
  const [notifyTithi, setNotifyTithi] = useState(true);
  const [notifyEkadashi, setNotifyEkadashi] = useState(true);
  const [notifyRahuKaal, setNotifyRahuKaal] = useState(false);

  if (!isOpen) return null;

  const favoriteTemples = temples.filter(t => favorites.includes(t.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden my-8">
        
        {/* Profile Banner */}
        <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-800 border-2 border-amber-300 flex items-center justify-center text-lg font-bold text-amber-200">
              {profileName.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-cinzel font-bold">{profileName}</h3>
              <p className="text-xs text-amber-200/80">{profileCity} · Devotee Account</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-amber-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Headers */}
        <div className="flex border-b border-stone-200 px-6 pt-3 bg-stone-50 gap-4 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'favorites' ? 'border-amber-800 text-amber-900' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Saved Shrines ({favoriteTemples.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('pujas')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'pujas' ? 'border-amber-800 text-amber-900' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Booked Pujas ({pujaBookings.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('donations')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'donations' ? 'border-amber-800 text-amber-900' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Seva & 80G Receipts ({donations.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'settings' ? 'border-amber-800 text-amber-900' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Alerts & Offline Preferences</span>
          </button>
        </div>

        {/* Tab 1: Saved Shrines */}
        {activeTab === 'favorites' && (
          <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
            {favoriteTemples.length === 0 ? (
              <div className="p-8 text-center text-xs text-stone-500 bg-stone-50 rounded-xl">
                No saved shrines yet. Click the heart icon on any temple to quickly jump to its live darshan here.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favoriteTemples.map((tpl) => (
                  <div key={tpl.id} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-amber-800 uppercase">{tpl.deity}</span>
                      <h4 className="text-xs font-bold text-stone-900 truncate">{tpl.name}</h4>
                      <p className="text-[11px] text-stone-500 truncate">{tpl.city}, {tpl.state}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          onSelectTempleForDarshan(tpl);
                          onClose();
                        }}
                        className="p-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors cursor-pointer"
                        title="Watch Live Darshan"
                      >
                        <Video className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onRemoveFavorite(tpl.id)}
                        className="p-1.5 text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: My Pujas */}
        {activeTab === 'pujas' && (
          <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
            {pujaBookings.length === 0 ? (
              <div className="p-8 text-center text-xs text-stone-500 bg-stone-50 rounded-xl">
                No active puja bookings. You can book special Rudrabhishek, Kalyanotsavam or Chandi Havan from the Book Puja menu.
              </div>
            ) : (
              pujaBookings.map((b) => (
                <div key={b.bookingId} className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">{b.pujaName}</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold text-[10px]">{b.status}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-stone-600">
                    <div>Sanctum: <strong>{b.templeName}</strong></div>
                    <div>Date: <strong>{b.pujaDate}</strong></div>
                    <div>Sankalp Gotra: <strong>{b.gotra}</strong></div>
                    <div>Booking ID: <strong className="font-mono">{b.bookingId}</strong></div>
                  </div>
                  <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                    Sankalp for: {b.familyMembers}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 3: Donations */}
        {activeTab === 'donations' && (
          <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
            {donations.length === 0 ? (
              <div className="p-8 text-center text-xs text-stone-500 bg-stone-50 rounded-xl">
                No donations recorded in this session.
              </div>
            ) : (
              donations.map((d) => (
                <div key={d.transactionId} className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900">{d.cause}</h4>
                    <p className="text-stone-500">{d.templeName} · {d.date}</p>
                    <p className="text-[10px] font-mono text-stone-400">ID: {d.transactionId}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-mono font-bold text-amber-900">₹{d.amount.toLocaleString()}</div>
                    <button
                      onClick={() => window.print()}
                      className="text-[11px] text-amber-800 hover:underline flex items-center gap-1 cursor-pointer mt-1"
                    >
                      <Printer className="w-3 h-3" />
                      <span>Print 80G</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 4: Settings & Alerts */}
        {activeTab === 'settings' && (
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Daily Vedic Event Notifications
              </h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-stone-50 border border-stone-200 rounded-xl cursor-pointer">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Daily Sunrise Tithi & Muhurat Alert</span>
                    <span className="text-[11px] text-stone-500">Receive morning notification with today's Tithi, Nakshatra, and Abhijit Muhurat</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifyTithi}
                    onChange={(e) => setNotifyTithi(e.target.checked)}
                    className="accent-amber-800 w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3 bg-stone-50 border border-stone-200 rounded-xl cursor-pointer">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Ekadashi & Pradosh Vrat Reminders</span>
                    <span className="text-[11px] text-stone-500">Alert 24 hours prior to fast beginning and exact Parana timing next morning</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifyEkadashi}
                    onChange={(e) => setNotifyEkadashi(e.target.checked)}
                    className="accent-amber-800 w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3 bg-stone-50 border border-stone-200 rounded-xl cursor-pointer">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Rahu Kaal Daily Caution Alert</span>
                    <span className="text-[11px] text-stone-500">Notify 15 minutes before Rahu Kaal starts in your selected city</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifyRahuKaal}
                    onChange={(e) => setNotifyRahuKaal(e.target.checked)}
                    className="accent-amber-800 w-4 h-4 cursor-pointer"
                  />
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Rural India Low-Bandwidth Mode (ग्रामीण सुगम मोड)
              </h4>
              <p className="text-xs text-stone-600 mb-3">
                When active, high-definition video streaming is replaced with lightweight sanctum images and cached offline panchang tables to save 95% mobile data.
              </p>
              <button
                onClick={onToggleOfflineMode}
                className={`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors ${
                  isOfflineMode
                    ? 'bg-emerald-700 text-white'
                    : 'bg-stone-100 text-stone-800 border border-stone-200 hover:bg-stone-200'
                }`}
              >
                {isOfflineMode ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
                <span>{isOfflineMode ? 'Low-Bandwidth Mode is Active' : 'Switch to Low-Bandwidth Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
