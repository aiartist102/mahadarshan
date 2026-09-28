import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShieldCheck, 
  CheckCircle, 
  Printer, 
  Download, 
  QrCode, 
  CreditCard, 
  Building
} from 'lucide-react';
import { Temple, Language, DonationRecord } from '../types';
import { translations } from '../i18n/translations';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  temples: Temple[];
  selectedTemple?: Temple;
  onRecordDonation: (record: DonationRecord) => void;
  currentLang: Language;
}

const donationPresets = [101, 251, 501, 1100, 2100, 5100];

const causesList = [
  { id: 'annadaan', label: 'Annadaan (Free Daily Pilgrim Meal Seva)', desc: 'Provides nutritious satvik meals to visiting sadhus and devotees' },
  { id: 'gaushala', label: 'Desi Gaushala & Fodder Care Seva', desc: 'Maintains indigenous Indian sacred cows with green fodder and medical care' },
  { id: 'akhand-jyoti', label: 'Akhand Diya & Camphor Aarti Seva', desc: 'Supplies pure desi cow ghee, sesame oil, and organic camphor for sanctum aartis' },
  { id: 'restoration', label: 'Temple Heritage & Stone Restoration', desc: 'Preserves ancient carvings, corridors, and stone architecture' },
  { id: 'veda-pathshala', label: 'Veda Pathshala & Gurukul Vidya', desc: 'Supports young students memorizing Vedas and Sanskrit scriptures' }
];

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  temples,
  selectedTemple,
  onRecordDonation,
  currentLang
}) => {
  const t = translations[currentLang] || translations.en;
  
  const [templeId, setTempleId] = useState(selectedTemple?.id || temples[0].id);
  const [cause, setCause] = useState('annadaan');
  const [amount, setAmount] = useState<number>(501);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [need80G, setNeed80G] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [completedRecord, setCompletedRecord] = useState<DonationRecord | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const currentSelectedTemple = temples.find(t => t.id === templeId) || temples[0];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : amount;
    if (!finalAmount || finalAmount <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      const record: DonationRecord = {
        transactionId: `MD-DON-${Date.now().toString().slice(-8)}`,
        templeId: currentSelectedTemple.id,
        templeName: currentSelectedTemple.name,
        cause: causesList.find(c => c.id === cause)?.label || cause,
        donorName: donorName || 'Ananda Bhakta',
        email: email || 'bhakta@mahadarshan.bharat',
        amount: finalAmount,
        panNumber: need80G ? panNumber || 'ABCDE1234F' : undefined,
        is80GEligible: need80G,
        date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
      };

      onRecordDonation(record);
      setCompletedRecord(record);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-amber-900/20 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center text-amber-200">
              <Heart className="w-4 h-4 fill-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-cinzel font-bold">
                {completedRecord ? 'Sanctified Seva E-Receipt' : t.sevaDonation}
              </h3>
              <p className="text-xs text-amber-200/80">
                100% Direct to Registered Temple Trust · 80G Tax Exemption
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
        {!completedRecord ? (
          <form onSubmit={handleDonate} className="p-6 space-y-5">
            
            {/* Temple Selector */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Select Sacred Shrine / Trust
              </label>
              <select
                value={templeId}
                onChange={(e) => setTempleId(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-medium cursor-pointer"
              >
                {temples.map((tpl) => (
                  <option key={tpl.id} value={tpl.id}>
                    {tpl.name} ({tpl.city}, {tpl.state})
                  </option>
                ))}
              </select>
            </div>

            {/* Cause Selector */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Select Devotional Cause (सेवा प्रकल्प)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {causesList.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCause(c.id)}
                    className={`p-2.5 text-left rounded-lg border transition-all cursor-pointer ${
                      cause === c.id
                        ? 'border-amber-700 bg-amber-50/60 ring-1 ring-amber-600'
                        : 'border-stone-200 hover:border-amber-300 bg-stone-50/50'
                    }`}
                  >
                    <span className="text-xs font-bold text-stone-900 block">{c.label}</span>
                    <span className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">{c.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Presets */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Contribution Amount (₹ Dakshina)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-2">
                {donationPresets.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-1.5 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      amount === val && !customAmount
                        ? 'bg-amber-800 text-white border-amber-800 shadow-sm'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-amber-50'
                    }`}
                  >
                    ₹{val.toLocaleString()}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Or enter custom amount in INR"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount(0);
                }}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-medium"
              />
            </div>

            {/* Devotee Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Donor Full Name</label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Email for Receipt</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">PAN Card (for 80G Tax Exemption)</label>
                <input
                  type="text"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 uppercase font-mono"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 border-t border-stone-100">
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Select Secure Payment Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'upi', label: 'UPI / QR Code', icon: QrCode },
                  { id: 'card', label: 'Debit / Credit Card', icon: CreditCard },
                  { id: 'netbanking', label: 'NetBanking', icon: Building }
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setPaymentMethod(pm.id as any)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === pm.id
                        ? 'bg-amber-100 text-amber-950 border-amber-500 shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <pm.icon className="w-4 h-4" />
                    <span>{pm.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3 px-4 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-sm font-bold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span>Processing Sanctified Offering...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Contribute ₹{(customAmount ? parseFloat(customAmount) : amount).toLocaleString()} & Get 80G Receipt</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Completed Sanctified E-Receipt */
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-cinzel font-bold text-stone-900">
                Seva Successfully Consecrated!
              </h4>
              <p className="text-xs text-stone-600">
                May the divine blessings of {completedRecord.templeName} bring peace and prosperity to your family.
              </p>
            </div>

            {/* Printable Receipt Card */}
            <div className="p-4 rounded-xl border-2 border-amber-900/20 bg-amber-50/40 space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                <span className="font-bold text-stone-900">MahaDarshan Seva Trust</span>
                <span className="text-[11px] font-mono text-stone-500">Txn: {completedRecord.transactionId}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-stone-700">
                <div>
                  <span className="text-stone-400 block text-[10px]">Devotee / Donor:</span>
                  <strong className="text-stone-900">{completedRecord.donorName}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Date:</span>
                  <strong className="text-stone-900">{completedRecord.date}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Sanctuary:</span>
                  <strong className="text-stone-900">{completedRecord.templeName}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Seva Cause:</span>
                  <strong className="text-stone-900">{completedRecord.cause}</strong>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Amount Donated:</span>
                  <strong className="text-base text-amber-900 font-bold font-mono">
                    ₹{completedRecord.amount.toLocaleString()}
                  </strong>
                </div>
                {completedRecord.panNumber && (
                  <div>
                    <span className="text-stone-400 block text-[10px]">80G PAN Reference:</span>
                    <strong className="text-stone-900 font-mono">{completedRecord.panNumber}</strong>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-amber-200 text-[11px] text-amber-950 italic text-center">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः" · Donations are 50% exempt under Section 80G of Income Tax Act.
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg cursor-pointer"
              >
                Return to Darshan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
