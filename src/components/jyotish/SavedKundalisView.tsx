import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Save, 
  Trash2, 
  Copy, 
  Edit3, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Download,
  Upload,
  Plus
} from 'lucide-react';
import { BirthProfile } from '../../data/vedicJyotishEngine';

interface SavedKundalisViewProps {
  currentProfile: BirthProfile;
  onLoadProfile: (profile: BirthProfile) => void;
  onNavigateToKundali: () => void;
}

const STORAGE_KEY = 'mahadarshan_saved_kundalis';

export const SavedKundalisView: React.FC<SavedKundalisViewProps> = ({
  currentProfile,
  onLoadProfile,
  onNavigateToKundali
}) => {
  const [profiles, setProfiles] = useState<BirthProfile[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [currentProfile];
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
    } catch (e) {
      console.error(e);
    }
  }, [profiles]);

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleSaveCurrent = () => {
    const existingIndex = profiles.findIndex(p => p.id === currentProfile.id);
    if (existingIndex >= 0) {
      const updated = [...profiles];
      updated[existingIndex] = { ...currentProfile };
      setProfiles(updated);
      showToast('Updated active profile in saved list!');
    } else {
      const newEntry = {
        ...currentProfile,
        id: `profile-${Date.now()}`
      };
      setProfiles([newEntry, ...profiles]);
      showToast('Saved current profile to list!');
    }
  };

  const handleDelete = (id: string) => {
    if (profiles.length <= 1) {
      showToast('Cannot delete the last remaining profile.');
      return;
    }
    setProfiles(profiles.filter(p => p.id !== id));
    showToast('Profile deleted.');
  };

  const handleDuplicate = (p: BirthProfile) => {
    const copy: BirthProfile = {
      ...p,
      id: `profile-${Date.now()}`,
      name: `${p.name} (Copy)`
    };
    setProfiles([copy, ...profiles]);
    showToast(`Duplicated ${p.name}`);
  };

  const handleOpen = (p: BirthProfile) => {
    onLoadProfile(p);
    onNavigateToKundali();
  };

  const handleStartRename = (p: BirthProfile) => {
    setEditingId(p.id);
    setEditName(p.name);
  };

  const handleSaveRename = (id: string) => {
    if (!editName.trim()) return;
    setProfiles(profiles.map(p => p.id === id ? { ...p, name: editName.trim() } : p));
    setEditingId(null);
    showToast('Profile renamed.');
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profiles, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', 'mahadarshan_kundali_profiles.json');
    dlAnchor.click();
    showToast('Exported profiles to JSON');
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Users className="w-4 h-4 text-amber-700" />
            <span>Profile Vault · Private Local Session</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
            Saved Kundalis & Family Horoscopes (सहेजी गई कुंडलियां)
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
            Store and manage birth charts for family members, friends, or consultation clients. All data is securely kept in your private browser storage.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSaveCurrent}
            className="px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Save Current Profile ({currentProfile.name})</span>
          </button>
          <button
            type="button"
            onClick={handleExportJSON}
            className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium border border-stone-200 transition-colors cursor-pointer"
            title="Backup profiles to file"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {successToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Profiles Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((p) => {
          const isCurrentlyActive = p.id === currentProfile.id;
          const isEditing = editingId === p.id;

          return (
            <div 
              key={p.id}
              className={`bg-white rounded-2xl border p-5 shadow-sm space-y-4 flex flex-col justify-between transition-all ${
                isCurrentlyActive ? 'border-amber-700 ring-2 ring-amber-600/30' : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div>
                <div className="flex items-start justify-between">
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 w-full mr-2">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="px-2 py-1 text-xs border border-stone-300 rounded-lg w-full font-bold"
                        autoFocus
                      />
                      <button
                        onClick={() => handleSaveRename(p.id)}
                        className="px-2 py-1 bg-amber-800 text-white rounded text-xs font-bold"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-stone-900 font-cinzel text-base">{p.name}</h3>
                      {isCurrentlyActive && (
                        <span className="text-[10px] uppercase font-bold text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-stone-400">
                    <button
                      onClick={() => handleStartRename(p)}
                      className="hover:text-stone-700 p-1 cursor-pointer"
                      title="Rename"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDuplicate(p)}
                      className="hover:text-stone-700 p-1 cursor-pointer"
                      title="Duplicate"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="hover:text-rose-700 p-1 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 space-y-1 text-xs text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{p.birthDate} at {p.birthTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{p.birthCity}, {p.birthCountry}</span>
                  </div>
                  <div className="text-[11px] text-stone-400 pt-1 font-mono">
                    Coords: {p.latitude.toFixed(2)}°, {p.longitude.toFixed(2)}° · {p.ayanamsha.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400">
                  Gender: {p.gender.toUpperCase()}
                </span>
                <button
                  type="button"
                  onClick={() => handleOpen(p)}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 hover:text-amber-950 text-stone-800 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Open Kundali</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
