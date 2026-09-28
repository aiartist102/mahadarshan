import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Landmark, 
  Image as ImageIcon, 
  Clock, 
  MapPin, 
  Plane, 
  Train, 
  Car, 
  Sparkles, 
  ExternalLink, 
  X, 
  Maximize2, 
  Share2, 
  ShieldCheck, 
  Heart, 
  Calendar,
  Layers
} from 'lucide-react';
import { Temple, Language, TempleImage } from '../types';
import { translations } from '../i18n/translations';

interface ExpandableTempleInfoProps {
  temple: Temple;
  currentLang: Language;
  onBookPuja?: (temple: Temple) => void;
  onDonate?: (temple: Temple) => void;
  isFav?: boolean;
  onToggleFavorite?: (templeId: string) => void;
  initialExpanded?: boolean;
  showDedicatedPageModal?: boolean;
  onCloseDedicatedModal?: () => void;
}

export const ExpandableTempleInfo: React.FC<ExpandableTempleInfoProps> = ({
  temple,
  currentLang,
  onBookPuja,
  onDonate,
  isFav,
  onToggleFavorite,
  initialExpanded = false,
  showDedicatedPageModal = false,
  onCloseDedicatedModal
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const [activeTab, setActiveTab] = useState<'history' | 'architecture' | 'gallery' | 'aarti' | 'travel'>('history');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<TempleImage | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);
  const [isFullPageOpen, setIsFullPageOpen] = useState(showDedicatedPageModal);

  const t = translations[currentLang] || translations.en;

  const handleShare = () => {
    const shareText = `Explore ${temple.name} (${temple.hindiName}) in ${temple.city}, ${temple.state}.\nDarshan Hours: ${temple.darshanHours}\nOfficial Website: ${temple.officialStreamWebsite || 'https://mahadarshan.bharat'}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const renderContent = (isModal: boolean = false) => (
    <div className="space-y-6">
      {/* Sub Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-amber-900 text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>इतिहास व महत्व (History & Significance)</span>
        </button>

        <button
          onClick={() => setActiveTab('architecture')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'architecture'
              ? 'bg-amber-900 text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <Landmark className="w-4 h-4" />
          <span>वास्तुकला व स्थापत्य (Architecture)</span>
        </button>

        <button
          onClick={() => setActiveTab('gallery')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'gallery'
              ? 'bg-amber-900 text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>भव्य चित्र दीर्घा (Photo Gallery)</span>
          {temple.gallery && (
            <span className="ml-1 px-1.5 py-0.2 bg-amber-700 text-white text-[10px] rounded-full">
              {temple.gallery.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('aarti')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'aarti'
              ? 'bg-amber-900 text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>दैनिक आरती समय (Aarti Schedule)</span>
        </button>

        <button
          onClick={() => setActiveTab('travel')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'travel'
              ? 'bg-amber-900 text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>यात्रा मार्गदर्शिका (Travel Guide)</span>
        </button>
      </div>

      {/* Tab 1: History & Significance */}
      {activeTab === 'history' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-amber-950 font-serif flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  आध्यात्मिक महत्व (Spiritual Significance)
                </h4>
                <p className="text-stone-800 text-xs sm:text-sm mt-2 leading-relaxed">
                  {temple.significance}
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
                <h4 className="text-sm font-bold text-stone-900 font-serif flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  पौराणिक इतिहास व स्थापना (Puranic Lore & Origin)
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {temple.history}
                </p>
              </div>

              {temple.festivalsCelebrated && (
                <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    प्रमुख पर्व व महामहोत्सव (Major Celebrated Festivals)
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {temple.festivalsCelebrated.map((fest, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg"
                      >
                        {fest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Facts Sidebar */}
            <div className="space-y-4">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4 text-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  मंदिर मुख्य विवरण (At a Glance)
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-stone-400 block text-[11px]">प्रधान देवता (Presiding Deity)</span>
                    <strong className="text-stone-900 text-sm font-serif">{temple.deity}</strong>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[11px]">स्थान (Location)</span>
                    <strong className="text-stone-800">{temple.location}</strong>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[11px]">दैनिक दर्शन समय (Darshan Hours)</span>
                    <strong className="text-emerald-700">{temple.darshanHours}</strong>
                  </div>

                  {temple.officialStreamWebsite && (
                    <div className="pt-2 border-t border-stone-200">
                      <a
                        href={temple.officialStreamWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-900 font-semibold underline"
                      >
                        <span>आधिकारिक ट्रस्ट पोर्टल</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                {onBookPuja && (
                  <button
                    onClick={() => onBookPuja(temple)}
                    className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer text-center shadow"
                  >
                    विशेष पूजा / संकल्प बुक करें
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Architecture & Design */}
      {activeTab === 'architecture' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <div className="inline-block px-2.5 py-1 bg-amber-100 text-amber-900 rounded-md text-[11px] font-bold uppercase tracking-wider mb-2">
                स्थापत्य शैली (Architectural Style)
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900">
                {temple.architecture?.style || 'प्राचीन भारतीय मंदिर स्थापत्य शैली'}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                निर्माण काल: <strong className="text-stone-800">{temple.architecture?.builtCentury || 'प्राचीन काल'}</strong>
                {temple.architecture?.patron && (
                  <> · मुख्य संरक्षक: <strong className="text-stone-800">{temple.architecture.patron}</strong></>
                )}
              </p>
            </div>

            {/* Architectural Highlights */}
            {temple.architecture?.highlights && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-700" />
                  वास्तुकला की मुख्य विशेषताएं (Design & Structural Highlights)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {temple.architecture.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-medium">
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Materials used */}
            {temple.architecture?.materials && (
              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/60 text-xs">
                <span className="text-amber-950 font-bold block mb-1">
                  प्रयुक्त निर्माण सामग्री व पत्थर (Construction Stones & Materials):
                </span>
                <p className="text-stone-700 leading-relaxed">
                  {temple.architecture.materials}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Photo Gallery with Lightbox */}
      {activeTab === 'gallery' && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-stone-900 font-serif">
              {temple.name} की दिव्य चित्र दीर्घा (High-Resolution Visual Archive)
            </h4>
            <span className="text-xs text-stone-500">
              किसी भी चित्र पर क्लिक करके बड़ा देखें
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {temple.gallery && temple.gallery.length > 0 ? (
              temple.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedGalleryImage(img)}
                  className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-950 border border-stone-200 shadow-sm cursor-pointer hover:shadow-md transition-all"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h5 className="text-xs font-bold font-serif leading-snug drop-shadow">
                      {img.title}
                    </h5>
                    <p className="text-[11px] text-stone-300 truncate mt-0.5">
                      {img.caption}
                    </p>
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full p-8 text-center bg-stone-50 rounded-2xl border border-stone-200 text-stone-500 text-xs">
                चित्र उपलब्ध कराए जा रहे हैं...
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Daily Aarti Schedule */}
      {activeTab === 'aarti' && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h4 className="text-sm font-bold font-serif text-stone-900">
                  दैनिक आरती व नैवेद्य समय सारणी (Daily Rituals & Aarti Timings)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  सर्व दर्शन समय: <strong className="text-amber-900">{temple.darshanHours}</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {temple.aartiTimings.map((aarti, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-stone-900 font-serif">
                        {aarti.hindiName}
                      </h5>
                      <span className="text-xs text-stone-500 font-medium">({aarti.name})</span>
                    </div>
                    <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-md">
                      {aarti.time}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {aarti.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Travel Guide */}
      {activeTab === 'travel' && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <h4 className="text-base font-bold font-serif text-stone-900">
                तीर्थ यात्रा मार्गदर्शिका (How to Reach & Pilgrim Information)
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                {temple.name} - {temple.location}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <Plane className="w-4 h-4 text-amber-700" />
                  <span>निकटतम हवाई अड्डा (By Air)</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {temple.travelInfo?.nearestAirport || 'निकटतम प्रमुख हवाई अड्डा उपलब्ध है।'}
                </p>
              </div>

              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <Train className="w-4 h-4 text-amber-700" />
                  <span>निकटतम रेलवे स्टेशन (By Train)</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {temple.travelInfo?.nearestRailway || 'निकटतम रेलवे स्टेशन उपलब्ध है।'}
                </p>
              </div>

              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <Car className="w-4 h-4 text-amber-700" />
                  <span>सड़क व बस मार्ग (By Road)</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {temple.travelInfo?.roadConnectivity || 'राष्ट्रीय राजमार्गों से पूर्णतः जुड़ा हुआ।'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                <span className="text-xs font-bold text-stone-900 block">
                  सर्वोत्तम यात्रा समय (Best Season to Visit):
                </span>
                <p className="text-xs text-stone-600">
                  {temple.travelInfo?.bestTimeToVisit || 'अक्टूबर से मार्च का समय सबसे सुखद रहता है।'}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                <span className="text-xs font-bold text-stone-900 block">
                  पोशाक नियम व आचार संहिता (Dress Code & Guidelines):
                </span>
                <p className="text-xs text-stone-600">
                  {temple.travelInfo?.dressCode || 'पारंपरिक भारतीय परिधान की सलाह दी जाती है।'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* 1. Collapsible Card on Live Darshan page */}
      <div className="bg-white border border-stone-200/90 rounded-2xl shadow-sm overflow-hidden transition-all">
        {/* Toggle Bar */}
        <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-amber-50/50 via-white to-amber-50/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 shrink-0">
              <Landmark className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
                  {temple.name}
                </h3>
                <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-semibold hidden sm:inline">
                  {temple.city}
                </span>
              </div>
              <p className="text-xs text-stone-500 font-serif">
                {temple.hindiName} · {temple.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 border border-stone-200"
              title="Share temple details"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedShare ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => setIsFullPageOpen(true)}
              className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-amber-200 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Open Full Details Page"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>विस्तृत पृष्ठ खोलें (Full Details Page)</span>
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3.5 py-2 bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>{isExpanded ? 'संक्षिप्त करें (Hide)' : 'मंदिर विवरण देखें (Expand Info)'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Content Area */}
        {isExpanded && (
          <div className="p-4 sm:p-6 border-t border-stone-200/80 bg-white">
            {renderContent(false)}
          </div>
        )}
      </div>

      {/* 2. Full Dedicated Temple Details Modal / Page View */}
      {(isFullPageOpen || showDedicatedPageModal) && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-[#FAF7F2] text-stone-900 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-amber-900/30 flex flex-col">
            
            {/* Modal Hero Header with Temple Banner */}
            <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-stone-950 shrink-0">
              <img
                src={temple.bannerImage || temple.gallery?.[0]?.url || 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80'}
                alt={temple.name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/30" />

              <button
                onClick={() => {
                  setIsFullPageOpen(false);
                  onCloseDedicatedModal?.();
                }}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer border border-white/20"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 text-white space-y-1">
                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-600 rounded-md uppercase tracking-wider text-amber-100">
                  {temple.deity}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif drop-shadow-md">
                  {temple.name}
                </h2>
                <p className="text-xs sm:text-sm text-stone-200 font-serif drop-shadow">
                  {temple.hindiName} · {temple.location}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-8 flex-1 overflow-y-auto">
              {renderContent(true)}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-stone-500">
                दर्शन समय: <strong className="text-stone-800">{temple.darshanHours}</strong>
              </div>
              <div className="flex gap-2">
                {onBookPuja && (
                  <button
                    onClick={() => {
                      setIsFullPageOpen(false);
                      onCloseDedicatedModal?.();
                      onBookPuja(temple);
                    }}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    पूजा बुक करें
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsFullPageOpen(false);
                    onCloseDedicatedModal?.();
                  }}
                  className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  बंद करें (Close)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Image Lightbox for High-Quality Gallery */}
      {selectedGalleryImage && (
        <div
          onClick={() => setSelectedGalleryImage(null)}
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700 flex flex-col cursor-default"
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-3 right-3 z-30 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedGalleryImage.url}
                alt={selectedGalleryImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-4 bg-stone-900 text-white border-t border-stone-800">
              <h4 className="text-sm font-bold font-serif text-amber-200">
                {selectedGalleryImage.title}
              </h4>
              <p className="text-xs text-stone-400 mt-1">
                {selectedGalleryImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
