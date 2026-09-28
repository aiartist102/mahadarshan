import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  MapPin, 
  Package, 
  ShieldCheck,
  Printer
} from 'lucide-react';
import { Temple, Language, PujaBooking } from '../types';
import { translations } from '../i18n/translations';

interface PujaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  temples: Temple[];
  selectedTemple?: Temple;
  onConfirmBooking: (booking: PujaBooking) => void;
  currentLang: Language;
}

const pujaRituals = [
  { id: 'rudrabhishek', name: 'Laghu Rudrabhishek with Bilva & Panchamrit', price: 2100, deity: 'Lord Shiva', duration: '2 Hours' },
  { id: 'mahamrityunjaya', name: 'Mahamrityunjaya Jaap & Havan (1008 Chants)', price: 3100, deity: 'Lord Shiva', duration: '3 Hours' },
  { id: 'kalyanotsavam', name: 'Sri Venkateswara Swamy Kalyanotsavam Seva', price: 2500, deity: 'Lord Vishnu', duration: '2.5 Hours' },
  { id: 'ganesha-athirudra', name: 'Siddhivinayak Maha Abhishek & 108 Modak Archana', price: 1500, deity: 'Lord Ganesha', duration: '1.5 Hours' },
  { id: 'chandi-havan', name: 'Maha Chandi Yagya & Kumkumarchana', price: 5100, deity: 'Mata Shakti', duration: '4 Hours' },
  { id: 'satyanarayan', name: 'Shri Satyanarayan Vrat Katha & Havan', price: 1100, deity: 'Lord Vishnu', duration: '1.5 Hours' }
];

const gotraList = [
  'Kashyap (कश्यप)', 'Bharadwaj (भारद्वाज)', 'Vashishta (वशिष्ठ)',
  'Vishwamitra (विश्वामित्र)', 'Gautama (गौतम)', 'Jamadagni (जमदग्नि)',
  'Atri (अत्रि)', 'Agastya (अगस्त्य)', 'Garg (गर्ग)', 'Kaushik (कौशिक)',
  'Shandilya (शांडिल्य)', 'Parashar (पराशर)', 'Harita (हारीत)', 'Sankrithi (सांकृति)', 'Other / Not Known'
];

export const PujaBookingModal: React.FC<PujaBookingModalProps> = ({
  isOpen,
  onClose,
  temples,
  selectedTemple,
  onConfirmBooking,
  currentLang
}) => {
  const t = translations[currentLang] || translations.en;

  const [templeId, setTempleId] = useState(selectedTemple?.id || temples[0].id);
  const [selectedPujaId, setSelectedPujaId] = useState(pujaRituals[0].id);
  const [pujaDate, setPujaDate] = useState(new Date(Date.now() + 86400000).toISOString().split('T')[0]);
  const [devoteeName, setDevoteeName] = useState('');
  const [gotra, setGotra] = useState('Kashyap (कश्यप)');
  const [nakshatra, setNakshatra] = useState('Rohini');
  const [familyMembers, setFamilyMembers] = useState('');
  const [courierAddress, setCourierAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<PujaBooking | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const currentTpl = temples.find(t => t.id === templeId) || temples[0];
  const selectedPuja = pujaRituals.find(p => p.id === selectedPujaId) || pujaRituals[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!devoteeName) return;

    setIsProcessing(true);
    setTimeout(() => {
      const booking: PujaBooking = {
        bookingId: `PUJA-${Math.floor(100000 + Math.random() * 900000)}`,
        templeId: currentTpl.id,
        templeName: currentTpl.name,
        pujaName: selectedPuja.name,
        pujaDate: pujaDate,
        devoteeName: devoteeName,
        gotra: gotra,
        nakshatra: nakshatra,
        familyMembers: familyMembers || 'Family of ' + devoteeName,
        prasadCourierAddress: courierAddress || 'Digital Darshan (No Courier)',
        amount: selectedPuja.price,
        paymentMethod: 'Instant Gateway (UPI / NetBanking)',
        status: 'Confirmed',
        createdAt: new Date().toLocaleDateString()
      };

      onConfirmBooking(booking);
      setConfirmedBooking(booking);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-amber-900/20 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center text-amber-200">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-cinzel font-bold">
                {confirmedBooking ? 'Puja Consecration Confirmed' : t.bookSpecialPuja}
              </h3>
              <p className="text-xs text-amber-200/80">
                Performed by Authenticated Temple Priests with Individual Sankalp
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-amber-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!confirmedBooking ? (
          <form onSubmit={handleBooking} className="p-6 space-y-5">
            
            {/* Shrine & Puja Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Select Temple Destination
                </label>
                <select
                  value={templeId}
                  onChange={(e) => setTempleId(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-medium"
                >
                  {temples.map((tpl) => (
                    <option key={tpl.id} value={tpl.id}>
                      {tpl.name} ({tpl.city})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Preferred Auspicious Date
                </label>
                <input
                  type="date"
                  required
                  value={pujaDate}
                  onChange={(e) => setPujaDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-medium"
                />
              </div>
            </div>

            {/* Puja Ritual Selector */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Choose Vedic Ritual & Seva
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                {pujaRituals.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPujaId(p.id)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      selectedPujaId === p.id
                        ? 'border-amber-700 bg-amber-50/70 ring-1 ring-amber-600'
                        : 'border-stone-200 hover:border-amber-300 bg-stone-50/40'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-bold text-stone-900 leading-tight">{p.name}</span>
                      <span className="text-xs font-bold text-amber-900 font-mono">₹{p.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-stone-500 mt-1">
                      <span>{p.deity}</span>
                      <span>·</span>
                      <span>{p.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sacred Sankalp Details */}
            <div className="pt-3 border-t border-stone-100 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Sacred Sankalp Information (संकल्प विवरण)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Primary Devotee Name</label>
                  <input
                    type="text"
                    required
                    value={devoteeName}
                    onChange={(e) => setDevoteeName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra Sharma"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Gotra (गोत्र)</label>
                  <select
                    value={gotra}
                    onChange={(e) => setGotra(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                  >
                    {gotraList.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Janma Nakshatra</label>
                  <input
                    type="text"
                    value={nakshatra}
                    onChange={(e) => setNakshatra(e.target.value)}
                    placeholder="e.g. Rohini / Pushya"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Family Members for Sankalp Chanting (Names & Relations)
                </label>
                <input
                  type="text"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(e.target.value)}
                  placeholder="e.g. Sunita (Wife), Rahul (Son), Priya (Daughter)"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Delivery Address for Holy Prasad Box (Optional)
                </label>
                <textarea
                  rows={2}
                  value={courierAddress}
                  onChange={(e) => setCourierAddress(e.target.value)}
                  placeholder="Complete postal address, PIN code, and contact number for speed post dispatch"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 px-4 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-sm font-bold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Recording Sankalp with Priest...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Confirm Puja Booking (₹{selectedPuja.price.toLocaleString()})</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Booking Confirmation View */
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-cinzel font-bold text-stone-900">
                Puja Booking Successfully Confirmed!
              </h4>
              <p className="text-xs text-stone-600">
                The temple head priest (Purohit) will recite your Gotra and family Sankalp on the scheduled date.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-amber-50/40 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="font-bold text-stone-900">Booking Pass #{confirmedBooking.bookingId}</span>
                <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                  {confirmedBooking.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-stone-700">
                <div>
                  <span className="text-stone-400 block text-[10px]">Devotee:</span>
                  <strong>{confirmedBooking.devoteeName}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Gotra:</span>
                  <strong>{confirmedBooking.gotra}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Temple Sanctum:</span>
                  <strong>{confirmedBooking.templeName}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Ritual:</span>
                  <strong>{confirmedBooking.pujaName}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Scheduled Date:</span>
                  <strong>{confirmedBooking.pujaDate}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Dakshina Amount:</span>
                  <strong className="font-mono text-amber-900">₹{confirmedBooking.amount.toLocaleString()}</strong>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 text-stone-600 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Prasad box will be dispatched within 48 hours post-ritual completion.</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Booking Pass</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
