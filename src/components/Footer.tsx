import React from 'react';
import { Heart, Compass, ShieldCheck, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
  onSelectTab: (tab: string) => void;
  onOpenDonate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onSelectTab }) => {
  const t = translations[currentLang] || translations.en;

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-900/30 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-stone-800">
          
          {/* Col 1 & 2: Brand & Sacred Mission */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-cinzel font-bold text-amber-200 tracking-wider">
              {t.portalTitle}
            </h3>
            <p className="text-xs text-amber-100/70 italic font-serif">
              "यतो धर्मस्ततो जयः · धर्मो रक्षति रक्षितः"
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              India's premier high-definition temple live streaming and Vedic Jyotish portal. Bringing sacred Garbhagriha darshan, authentic daily Panchang calculations, diamond Kundali analysis, and temple heritage directly to millions of devotees worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800/40">
                100% Non-Profit Trust Seva
              </span>
              <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/40">
                80G Tax-Exempt
              </span>
            </div>
          </div>

          {/* Col 3: Sanctum Darshan */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
              Sacred Sanctuaries
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => onSelectTab('live-darshan')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Kashi Vishwanath, Varanasi</button></li>
              <li><button onClick={() => onSelectTab('live-darshan')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Mahakaleshwar Jyotirlinga, Ujjain</button></li>
              <li><button onClick={() => onSelectTab('live-darshan')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Tirupati Venkateswara Balaji</button></li>
              <li><button onClick={() => onSelectTab('live-darshan')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Shri Ram Janmabhoomi, Ayodhya</button></li>
              <li><button onClick={() => onSelectTab('live-darshan')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Shree Somnath Jyotirlinga, Gujarat</button></li>
              <li><button onClick={() => onSelectTab('live-darshan')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Sri Harmandir Sahib, Amritsar</button></li>
            </ul>
          </div>

          {/* Col 4: Vedic Jyotish & Panchang */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
              Vedic Computations
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => onSelectTab('panchang')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Daily City-wise Shubh Panchang</button></li>
              <li><button onClick={() => onSelectTab('panchang')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Day & Night Choghadiya Timings</button></li>
              <li><button onClick={() => onSelectTab('panchang')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Abhijit & Brahma Muhurat Windows</button></li>
              <li><button onClick={() => onSelectTab('kundali')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Vedic Lagna Kundali Chart</button></li>
              <li><button onClick={() => onSelectTab('kundali')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Manglik Dosha & Sade Sati Check</button></li>
              <li><button onClick={() => onSelectTab('festivals')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Pan-India Festival & Vrat Calendar</button></li>
            </ul>
          </div>

          {/* Col 5: Seva & Community */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
              Seva & Pilgrim Sangha
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => onSelectTab('live-darshan')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">24/7 Sanctum Garbhagriha Feeds</button></li>
              <li><button onClick={() => onSelectTab('temple-map')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Interactive Bharat Pilgrim Map</button></li>
              <li><button onClick={() => onSelectTab('articles')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Temple Science & Architecture (culroot)</button></li>
              <li><button onClick={() => onSelectTab('forum')} className="hover:text-amber-200 transition-colors cursor-pointer text-left">Devotee Community Discussion</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} MahaDarshan Sacred Foundation. Dedicated to the eternal heritage of Bharat.</p>
          <div className="flex items-center gap-4">
            <span className="text-amber-400/80">Pure Satvik Technology</span>
            <span>·</span>
            <span>Zero Commercial Advertisements</span>
            <span>·</span>
            <span>Respecting All Traditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
