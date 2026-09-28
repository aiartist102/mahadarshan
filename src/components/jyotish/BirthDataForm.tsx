import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Clock, 
  Calendar as CalendarIcon, 
  User, 
  Settings2, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Globe
} from 'lucide-react';
import { BirthProfile, globalCitiesDirectory, AyanamshaSystem, HouseSystem, RahuKetuMode } from '../../data/vedicJyotishEngine';
import { Language } from '../../types';

interface BirthDataFormProps {
  profile: BirthProfile;
  onChangeProfile: (updated: BirthProfile) => void;
  onGenerate?: () => void;
  currentLang?: Language;
  title?: string;
  subtitle?: string;
  isCompact?: boolean;
}

export const BirthDataForm: React.FC<BirthDataFormProps> = ({
  profile,
  onChangeProfile,
  onGenerate,
  currentLang = 'en',
  title = 'Birth Details & Astronomical Settings (जन्म विवरण)',
  subtitle = 'Accurate Vedic astrological derivations require exact birth date, time, and coordinates.',
  isCompact = false
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [citySearch, setCitySearch] = useState(profile.birthCity);
  const [filteredCities, setFilteredCities] = useState<typeof globalCitiesDirectory>([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  const handleCityInput = (val: string) => {
    setCitySearch(val);
    if (val.trim().length >= 2) {
      const q = val.toLowerCase();
      const matches = globalCitiesDirectory.filter(
        c => c.city.toLowerCase().includes(q) || c.country.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)
      ).slice(0, 8);
      setFilteredCities(matches);
      setShowCitySuggestions(true);
    } else {
      setShowCitySuggestions(false);
    }
  };

  const handleSelectCity = (city: typeof globalCitiesDirectory[0]) => {
    setCitySearch(city.city);
    setShowCitySuggestions(false);
    onChangeProfile({
      ...profile,
      birthCity: city.city,
      birthState: city.state,
      birthCountry: city.country,
      latitude: city.lat,
      longitude: city.lng,
      elevation: city.elevation || 50,
      timezoneOffset: city.timezone,
      timezoneName: city.timezoneId
    });
  };

  const isTimeMissing = !profile.birthTime || profile.birthTime.trim() === '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onGenerate) onGenerate();
  };

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Vedic Jyotish Coordinates Engine</span>
          </div>
          <h2 className="text-lg sm:text-xl font-cinzel font-bold text-stone-900 mt-0.5">
            {title}
          </h2>
          <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-xl transition-colors cursor-pointer"
        >
          <Settings2 className="w-3.5 h-3.5 text-amber-800" />
          <span>{showAdvanced ? 'Hide Advanced Settings' : 'Ayanamsha & Coordinates'}</span>
          {showAdvanced ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {isTimeMissing && (
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Missing Birth Time Warning:</span> Accurate Lagna (Ascendant), Bhavas (Houses), and time-sensitive Dasha intervals require the exact birth time. We do not silently guess 12:00 PM without notifying you.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        {/* Core Birth Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1">
              <User className="w-3 h-3 text-stone-400" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => onChangeProfile({ ...profile, name: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 focus:bg-white font-medium text-stone-900"
              placeholder="e.g. Ananya Sharma"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Gender</label>
            <select
              value={profile.gender}
              onChange={(e) => onChangeProfile({ ...profile, gender: e.target.value as 'male' | 'female' | 'other' })}
              className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 focus:bg-white font-medium text-stone-900 cursor-pointer"
            >
              <option value="male">Male (पुरुष)</option>
              <option value="female">Female (महिला)</option>
              <option value="other">Other / Unisex</option>
            </select>
          </div>

          {/* Birth Date */}
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1">
              <CalendarIcon className="w-3 h-3 text-stone-400" />
              <span>Birth Date</span>
            </label>
            <input
              type="date"
              value={profile.birthDate}
              onChange={(e) => onChangeProfile({ ...profile, birthDate: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 focus:bg-white font-medium text-stone-900 cursor-pointer"
              required
            />
          </div>

          {/* Birth Time */}
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              <span>Birth Time (24h)</span>
            </label>
            <input
              type="time"
              value={profile.birthTime}
              onChange={(e) => onChangeProfile({ ...profile, birthTime: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 focus:bg-white font-medium text-stone-900 cursor-pointer"
              required
            />
          </div>

          {/* Birth City with Auto-suggest */}
          <div className="relative">
            <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-400" />
              <span>Birth City</span>
            </label>
            <input
              type="text"
              value={citySearch}
              onChange={(e) => handleCityInput(e.target.value)}
              onFocus={() => {
                if (citySearch.length >= 2) setShowCitySuggestions(true);
              }}
              className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-700 focus:bg-white font-medium text-stone-900"
              placeholder="Search City (e.g. Varanasi, London)"
              required
            />
            {showCitySuggestions && filteredCities.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-stone-200 rounded-xl shadow-lg z-30 max-h-56 overflow-y-auto divide-y divide-stone-100">
                {filteredCities.map((city, idx) => (
                  <button
                    key={`${city.city}-${idx}`}
                    type="button"
                    onClick={() => handleSelectCity(city)}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-amber-50 flex items-center justify-between text-stone-800 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-stone-900">{city.city}</span>
                      <span className="text-stone-500 text-[11px] ml-1">({city.state}, {city.country})</span>
                    </div>
                    <span className="text-[10px] text-amber-800 font-mono">
                      {city.lat > 0 ? `${city.lat.toFixed(2)}°N` : `${Math.abs(city.lat).toFixed(2)}°S`}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Advanced Settings Accordion */}
        {showAdvanced && (
          <div className="pt-4 border-t border-stone-100 bg-stone-50/70 p-4 rounded-xl space-y-3.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
              <Globe className="w-3.5 h-3.5 text-amber-800" />
              <span>Astronomical Ephemeris & Geodetic Parameters</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              {/* Latitude */}
              <div>
                <label className="block text-stone-600 mb-1">Latitude (° Decimal)</label>
                <input
                  type="number"
                  step="0.0001"
                  value={profile.latitude}
                  onChange={(e) => onChangeProfile({ ...profile, latitude: parseFloat(e.target.value) || 0 })}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono"
                />
              </div>

              {/* Longitude */}
              <div>
                <label className="block text-stone-600 mb-1">Longitude (° Decimal)</label>
                <input
                  type="number"
                  step="0.0001"
                  value={profile.longitude}
                  onChange={(e) => onChangeProfile({ ...profile, longitude: parseFloat(e.target.value) || 0 })}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono"
                />
              </div>

              {/* Timezone Offset */}
              <div>
                <label className="block text-stone-600 mb-1">Timezone Offset (Hrs)</label>
                <input
                  type="number"
                  step="0.25"
                  value={profile.timezoneOffset}
                  onChange={(e) => onChangeProfile({ ...profile, timezoneOffset: parseFloat(e.target.value) || 5.5 })}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono"
                />
              </div>

              {/* Elevation */}
              <div>
                <label className="block text-stone-600 mb-1">Elevation (Meters)</label>
                <input
                  type="number"
                  value={profile.elevation}
                  onChange={(e) => onChangeProfile({ ...profile, elevation: parseInt(e.target.value) || 50 })}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono"
                />
              </div>

              {/* Ayanamsha System */}
              <div>
                <label className="block text-stone-600 mb-1">Ayanamsha System</label>
                <select
                  value={profile.ayanamsha}
                  onChange={(e) => onChangeProfile({ ...profile, ayanamsha: e.target.value as AyanamshaSystem })}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium cursor-pointer"
                >
                  <option value="lahiri">Lahiri / Chitrapaksha (Standard)</option>
                  <option value="raman">B.V. Raman</option>
                  <option value="kp">Krishnamurti Paddhati (KP)</option>
                </select>
              </div>

              {/* House System */}
              <div>
                <label className="block text-stone-600 mb-1">House System (Bhava)</label>
                <select
                  value={profile.houseSystem}
                  onChange={(e) => onChangeProfile({ ...profile, houseSystem: e.target.value as HouseSystem })}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium cursor-pointer"
                >
                  <option value="equal">Equal House (Rashi = Bhava)</option>
                  <option value="shripati">Shripati Bhava Chalit</option>
                </select>
              </div>

              {/* Rahu / Ketu Mode */}
              <div>
                <label className="block text-stone-600 mb-1">Rahu / Ketu Calculation</label>
                <select
                  value={profile.rahuKetuMode}
                  onChange={(e) => onChangeProfile({ ...profile, rahuKetuMode: e.target.value as RahuKetuMode })}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium cursor-pointer"
                >
                  <option value="true">True Node (Oscillating Drik)</option>
                  <option value="mean">Mean Node (Average Orbit)</option>
                </select>
              </div>

              {/* Country & Olson Zone Display */}
              <div>
                <label className="block text-stone-600 mb-1">Timezone Name</label>
                <div className="px-2.5 py-1.5 bg-white/80 border border-stone-200 rounded-lg text-[11px] font-mono text-stone-700 truncate">
                  {profile.timezoneName || 'Asia/Kolkata'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="text-xs text-stone-500 hidden sm:block">
            Location: <span className="font-semibold text-stone-700">{profile.birthCity}, {profile.birthCountry}</span> · {profile.latitude > 0 ? `${profile.latitude.toFixed(2)}°N` : `${Math.abs(profile.latitude).toFixed(2)}°S`}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onGenerate && (
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Calculate & Update All Charts (गणना करें)</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
