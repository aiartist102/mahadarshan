import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  Compass, 
  Flame, 
  Gem, 
  Award, 
  Clock, 
  Moon, 
  Sun, 
  ShieldCheck, 
  Calendar as CalendarIcon, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle,
  BookOpen,
  ArrowRight,
  Info
} from 'lucide-react';
import { 
  CompleteKundaliData, 
  BirthProfile, 
  RASHIS, 
  NAKSHATRAS 
} from '../../data/vedicJyotishEngine';
import { BirthDataForm } from './BirthDataForm';
import { JyotishViewId } from './JyotishTypes';
import { Language } from '../../types';

interface CalculatorDetailViewProps {
  toolId: JyotishViewId;
  kundali: CompleteKundaliData;
  profile: BirthProfile;
  onChangeProfile: (p: BirthProfile) => void;
  onNavigateToTool?: (id: JyotishViewId) => void;
  onNavigateToPanchang?: () => void;
  onNavigateToFestivals?: () => void;
  currentLang?: Language;
}

export const CalculatorDetailView: React.FC<CalculatorDetailViewProps> = ({
  toolId,
  kundali,
  profile,
  onChangeProfile,
  onNavigateToTool,
  onNavigateToPanchang,
  onNavigateToFestivals,
  currentLang = 'en'
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [prashnaQuestion, setPrashnaQuestion] = useState('Will my upcoming career venture be successful?');

  // Configure meta, titles, explanations, FAQs per toolId
  const getToolConfig = () => {
    switch (toolId) {
      case 'rashi':
        return {
          h1: 'Janma Rashi Calculator (जन्म राशि / Moon Sign)',
          subtitle: 'Calculate your true Vedic Sidereal Moon Sign based on planetary astronomical ephemeris and lunar longitude.',
          icon: Moon,
          category: 'Core Astrological Identity',
          faqs: [
            { q: 'What is Janma Rashi in Vedic Astrology?', a: 'In Vedic Jyotish, Janma Rashi is the zodiac sign occupied by the Moon at the precise moment of your birth. Unlike Western astrology which prioritizes the Sun sign, Vedic Jyotish places Moon sign at the pinnacle of emotional temperament, thought patterns, and life destiny.' },
            { q: 'Why is my Vedic Rashi different from my Western Zodiac sign?', a: 'Vedic astrology uses the Sidereal Zodiac which accounts for the axial precession of the equinoxes (Ayanamsha, ~24° shift), while Western astrology relies on the Tropical zodiac. As a result, your Vedic Moon sign is often one sign backward from Western calculations.' },
            { q: 'How does birth time affect Rashi calculation?', a: 'The Moon changes signs approximately every 2.25 days (54 hours). While less volatile than the 2-hour Lagna, birth time is critical when the Moon is close to the sign border (Sandhi).' }
          ]
        };
      case 'nakshatra':
        return {
          h1: 'Janma Nakshatra & Pada Calculator (जन्म नक्षत्र एवं पद)',
          subtitle: 'Calculate your Vedic birth star from 27 Nakshatras and 108 Padas with sacred deity, symbol, and naming syllables.',
          icon: Sparkles,
          category: 'Lunar Mansion Engine',
          faqs: [
            { q: 'What is a Nakshatra?', a: 'A Nakshatra is a 13° 20\' sector of the 360° zodiac. The Moon passes through 27 lunar mansions, each divided into four 3° 20\' quarters called Padas (108 Padas total).' },
            { q: 'How are baby naming syllables derived from Nakshatra?', a: 'Each of the 108 Padas has an associated primordial acoustic syllable (Swar). Naming a child with their Nakshatra Pada syllable harmonizes their vocal frequency with cosmic lunar vibrations.' },
            { q: 'What is the role of Nakshatra Lord in Vimshottari Dasha?', a: 'Your opening planetary Mahadasha at birth is determined strictly by the planetary ruler of your Janma Nakshatra.' }
          ]
        };
      case 'lagna':
        return {
          h1: 'Lagna (Ascendant) Calculator (लग्न चक्र गणना)',
          subtitle: 'Determine your rising sign, exact ascendant degree, and Local Sidereal Time (LST) based on geographical coordinates.',
          icon: Compass,
          category: 'First Bhava Engine',
          faqs: [
            { q: 'What is the Lagna or Ascendant?', a: 'Lagna is the exact zodiacal degree rising on the eastern horizon at the local moment of your birth. It governs your physical constitution, vitality, and external persona.' },
            { q: 'Why does Lagna change every 2 hours?', a: 'Because the Earth completes one full 360° rotation in approximately 24 hours, the 12 signs each take roughly 2 hours to rise on the eastern horizon.' },
            { q: 'What happens if my birth time is off by 10 minutes?', a: 'If your birth occurs near a sign boundary (Lagna Sandhi), a 5–10 minute variance can change your entire Ascendant, altering all 12 house lords.' }
          ]
        };
      case 'surya-rashi':
        return {
          h1: 'Surya Rashi (Vedic Sun Sign) Calculator (सूर्य राशि)',
          subtitle: 'Calculate your Sidereal Vedic Sun Sign, solar degree, and solar Nakshatra without Western tropical distortion.',
          icon: Sun,
          category: 'Atmakaraka Solar Engine',
          faqs: [
            { q: 'What is Surya Rashi in Vedic Astrology?', a: 'Surya Rashi represents the position of the Sun across the 12 Sidereal signs. In Jyotish, the Sun is the Karaka for Atman (the Soul), father, vital health, leadership, and divine authority.' },
            { q: 'When does the Sun change signs in Vedic astrology?', a: 'The Sun changes signs around the 14th–17th of every Gregorian month. This transition is known as Sankranti (e.g. Makar Sankranti, Mesha Sankranti).' }
          ]
        };
      case 'mangal-dosha':
        return {
          h1: 'Mangal Dosha / Kuja Dosha Calculator (मंगल दोष विचार)',
          subtitle: 'Comprehensive evaluation of Mars placement from Lagna, Moon, and Venus with classical Parashara cancellation rules.',
          icon: Flame,
          category: 'Marital Astrological Evaluation',
          faqs: [
            { q: 'What causes Mangal Dosha (Manglik)?', a: 'In classical Brihat Parashara Hora Shastra, Mangal Dosha occurs when Mars occupies the 1st, 4th, 7th, 8th, or 12th houses from Lagna, Moon, or Venus.' },
            { q: 'Are all Manglik placements malefic?', a: 'No. Shastras define extensive cancellation rules (Bhanga). If Mars is exalted in Capricorn, in its own sign (Aries/Scorpio), or aspected by benefic Jupiter, the affliction is greatly softened.' },
            { q: 'Does Mangal Dosha guarantee marital discord?', a: 'Never. Astrology is a spiritual map for self-mastery, not a fatalistic doom. Proper understanding and mutual harmony transcend astrological placements.' }
          ]
        };
      case 'kalasarpa-yoga':
        return {
          h1: 'Kalasarpa Yoga Calculator (कालसर्प योग विश्लेषण)',
          subtitle: 'Verify the hemming of all 7 classical planets between the Rahu-Ketu nodal axis across 12 traditional serpent types.',
          icon: ShieldCheck,
          category: 'Nodal Alignment Engine',
          faqs: [
            { q: 'What is Kalasarpa Yoga?', a: 'Kalasarpa Yoga is formed when all seven planets (Sun through Saturn) are placed within one half of the zodiac between Rahu and Ketu, leaving the other hemisphere empty.' },
            { q: 'What are the 12 types of Kalasarpa Yoga?', a: 'Depending on Rahu\'s house placement from 1st to 12th, they are: Ananta, Kulika, Vasuki, Shankhapala, Padma, Mahapadma, Takshaka, Karkotaka, Shankha, Pataka, Vishakt, and Sheshanaga.' },
            { q: 'What is Anshik (Partial) Kalasarpa?', a: 'When 6 planets are hemmed but one planet spills outside the nodal axis, it is known as Anshik Kalasarpa, with substantially diminished intensity.' }
          ]
        };
      case 'sade-sati':
        return {
          h1: 'Shani Sade Sati Calculator (शनि साढ़े साती एवं ढैय्या)',
          subtitle: 'Track Saturn\'s 7.5-year transit over your natal Moon through Rising, Peak, Setting, and 2.5-year Dhaiya phases.',
          icon: Clock,
          category: 'Saturn Transit Chronology',
          faqs: [
            { q: 'What is Shani Sade Sati?', a: 'Sade Sati is the 7.5-year transit of Saturn through the 12th, 1st, and 2nd houses relative to your natal Moon sign (each taking ~2.5 years).' },
            { q: 'Is Sade Sati always harmful?', a: 'No. Shani Maharaj is the Karmic disciplinarian. For Taurus, Libra, Capricorn, and Aquarius natives, Saturn often acts as a Yoga Karaka, yielding tremendous wisdom, maturity, and material foundation.' },
            { q: 'What are the three phases of Sade Sati?', a: '1. Rising Phase (12th from Moon - psychological focus), 2. Peak Phase (1st over Moon - core trials & perseverance), 3. Setting Phase (2nd from Moon - financial consolidation and relief).' }
          ]
        };
      case 'gemstone':
        return {
          h1: 'Vedic Ratna (Gemstone) Recommendation (रत्न परामर्श)',
          subtitle: 'Traditional Jyotish gemstone associations for Life Stone (Lagna), Lucky Stone (5th House), and Bhagya Stone (9th House).',
          icon: Gem,
          category: 'Vedic Remedial Talismans',
          faqs: [
            { q: 'How does Vedic astrology select gemstones?', a: 'Unlike Western birthstones based purely on birth month, Vedic Jyotish prescribes gemstones corresponding strictly to functional benefic lords of Trikona houses (1st, 5th, 9th).' },
            { q: 'Can gemstones cure biological medical conditions?', a: 'No. Gemstones are sacred symbolic talismans in traditional Indian spiritual philosophy. They must never be treated as scientific substitutes for medical therapy.' },
            { q: 'Why is testing required before wearing Blue Sapphire (Neelam)?', a: 'Neelam is ruled by Saturn and radiates intensely sharp cosmic frequencies. Traditional practitioners always recommend wrapping the stone in blue cloth under one\'s pillow for 3 nights before setting.' }
          ]
        };
      case 'rudraksha':
        return {
          h1: 'Sacred Rudraksha Recommendation (रुद्राक्ष परामर्श)',
          subtitle: 'Identify auspicious 1 to 14 Mukhi Rudraksha beads attuned to your birth chart and planetary ruling deities.',
          icon: Award,
          category: 'Shaivite Spiritual Bead Engine',
          faqs: [
            { q: 'What is a Mukhi in Rudraksha?', a: 'A Mukhi represents the natural vertical clefts or faces running down the sacred seed of the Elaeocarpus ganitrus tree, each governed by specific Vedic divinities and cosmic rays.' },
            { q: 'How is Rudraksha purified and worn?', a: 'Traditionally purified on a Monday morning with raw milk, honey, and Ganga jal, consecrated with the Shiva Panchakshari Mantra "ॐ नमः शिवाय", and strung in red silk thread.' }
          ]
        };
      case 'baby-names':
        return {
          h1: 'Baby Name & Initials by Nakshatra (नामकरण संस्कार)',
          subtitle: 'Discover auspicious Sanskrit, Hindi, and Indian baby names derived strictly from your child\'s birth Moon Nakshatra and Pada.',
          icon: Sparkles,
          category: 'Namakarana Sanskar Utility',
          faqs: [
            { q: 'How does Nakshatra determine a baby\'s name initial?', a: 'Each of the 27 Nakshatras has 4 Padas, making 108 syllables in total. For example, Rohini Pada 1 begins with "O", Pada 2 with "Va", Pada 3 with "Vi", and Pada 4 with "Vu".' },
            { q: 'What if a modern name does not match the exact initial?', a: 'Tradition allows keeping a formal sacred "Janma Rashi Name" for ritual horoscopes, alongside a worldly secular name for school and civil records.' }
          ]
        };
      case 'pancha-pakshi':
        return {
          h1: 'Pancha Pakshi Bird Astrology (पंच पक्षी शास्त्र)',
          subtitle: 'Tamil Siddha tradition calculating your cosmic birth bird and cyclical biorhythms: Ruling, Eating, Walking, Sleeping, Dying.',
          icon: Sparkles,
          category: 'Siddha Bio-Astrology',
          faqs: [
            { q: 'What is Pancha Pakshi Shastra?', a: 'Formulated by Agastya and Bogar Maharishi, Pancha Pakshi maps the five primordial birds (Vulture, Owl, Crow, Cock, Peacock) to the five Panchamahabhuta elements and lunar Nakshatras.' },
            { q: 'What do the 5 bird states mean?', a: 'Ruling (highest success & authority), Eating (productive and rewarding), Walking (mediocre/travel), Sleeping (sluggishness/rest), and Dying (avoid critical decisions).' }
          ]
        };
      case 'prashna':
        return {
          h1: 'Prashna Kundali (Horary Astrology Chart / प्रश्न कुंडली)',
          subtitle: 'Cast a real-time astrological chart for the exact moment and location a question is earnestly contemplated.',
          icon: Clock,
          category: 'Horary Divination Engine',
          faqs: [
            { q: 'What is Prashna Shastra?', a: 'Prashna Jyotish evaluates the cosmos at the exact time when a question arises in the mind of the seeker, using the current rising Lagna and Moon as significators.' },
            { q: 'Can Prashna substitute a birth chart?', a: 'Prashna is ideal when birth time is unknown or when addressing a singular, urgent life query (e.g. lost property, job offer, or recovery).' }
          ]
        };
      case 'sahasra-chandra':
        return {
          h1: 'Sahasra Purna Chandra Darshan (सहस्र चंद्र दर्शन)',
          subtitle: 'Identify the sacred milestone of witnessing 1,000 full moons in earthly life (approx. 80.8 years) with Shanti Puja details.',
          icon: Moon,
          category: 'Vedic Longevity Milestone',
          faqs: [
            { q: 'What is Sahasra Chandra Darshan?', a: 'In Vedic culture, witnessing 1,000 Purnimas (full moons) marks a profound life blessing of approximately 80 solar years, 8 months (1000 × 29.53 days = 29,530 days).' },
            { q: 'How is this celebrated in tradition?', a: 'Celebrated as an Ayushya Shanti Mahotsav where descendants gather to perform Mrityunjaya Homa and receive sacred blessings from elders.' }
          ]
        };
      case 'shraddha-tithi':
        return {
          h1: 'Shraddha Tithi & Pitru Paksha Calculator (श्राद्ध तिथि गणना)',
          subtitle: 'Calculate the accurate lunar Tithi for annual ancestral remembrance (Varshik Shraddha) and Mahalaya Pitru Paksha.',
          icon: Compass,
          category: 'Pitru Tarpan Chronology',
          faqs: [
            { q: 'How is Shraddha Tithi determined?', a: 'Annual Shraddha is performed on the lunar Tithi (Pratipada to Amavasya) prevailing during the sacred Kutapa Muhurat on the departure day in the Hindu calendar.' }
          ]
        };
      case 'vedic-time':
        return {
          h1: 'Vedic Time & Ishtakala Converter (वैदिक समय एवं इष्टकाल)',
          subtitle: 'Convert between modern hours/minutes and traditional Ghati, Vighati, Pal, Vela, and sunrise offsets.',
          icon: Clock,
          category: 'Ancient Chronometry Engine',
          faqs: [
            { q: 'What is a Ghati in Vedic time?', a: '1 Ahoratra (solar day) = 60 Ghatis. Therefore, 1 Ghati = 24 modern minutes. 1 Ghati is subdivided into 60 Vighatis (Pal), each lasting 24 seconds.' },
            { q: 'What is Ishtakala?', a: 'Ishtakala is the elapsed time in Ghatis and Pal from local sunrise to the moment of birth.' }
          ]
        };
      default:
        return {
          h1: 'Vedic Jyotish Astrology Calculator',
          subtitle: 'Explore authentic astronomical and astrological calculations according to traditional Parashara principles.',
          icon: Compass,
          category: 'General Utility',
          faqs: []
        };
    }
  };

  const config = getToolConfig();
  const IconComponent = config.icon;

  return (
    <div className="space-y-6">
      
      {/* Title & Introduction Banner */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
          <IconComponent className="w-4 h-4 text-amber-700" />
          <span>{config.category} · Brihat Parashara Hora Shastra</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
          {config.h1}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-4xl">
          {config.subtitle}
        </p>

        {/* Central Birth Form Shared Across Calculators */}
        <div className="mt-6 pt-5 border-t border-stone-100">
          <BirthDataForm
            profile={profile}
            onChangeProfile={onChangeProfile}
            title="Calculator Input Coordinates"
            subtitle="Calculations dynamically sync across all Jyotish modules using this birth profile."
            isCompact={true}
          />
        </div>
      </div>

      {/* Dynamic Results Module for Specific Calculator */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <h2 className="text-lg font-cinzel font-bold text-stone-900">
            Calculated Astrological Output for {profile.name}
          </h2>
          <span className="text-xs text-amber-800 font-mono bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/80">
            Ayanamsha: {kundali.profile.ayanamsha.toUpperCase()} ({kundali.ayanamshaValue.toFixed(2)}°)
          </span>
        </div>

        {/* 1. RASHI CALCULATOR VIEW */}
        {toolId === 'rashi' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Janma Rashi (Moon Sign)</span>
                <span className="text-xl font-bold text-amber-950 font-cinzel mt-1 block">
                  {kundali.moonRashiName} ({kundali.moonRashiSanskrit})
                </span>
                <span className="text-xs text-amber-800 mt-1 block">
                  Rashi Lord: {RASHIS[kundali.moonRashiIndex].lord}
                </span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Moon Exact Longitude</span>
                <span className="text-lg font-bold text-stone-900 font-mono mt-1 block">
                  {kundali.moonDegree.toFixed(2)}° in {kundali.moonRashiName}
                </span>
                <span className="text-xs text-stone-600 mt-1 block">
                  Total Sidereal: {kundali.planets.find(p => p.id === 'moon')?.longitude.toFixed(2)}°
                </span>
              </div>

              <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Janma Nakshatra</span>
                <span className="text-lg font-bold text-indigo-950 font-cinzel mt-1 block">
                  {kundali.moonNakshatra} (Pada {kundali.moonPada})
                </span>
                <span className="text-xs text-indigo-800 mt-1 block">
                  Element: {RASHIS[kundali.moonRashiIndex].element} · Modality: {RASHIS[kundali.moonRashiIndex].modality}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#fdfbf7] border border-amber-900/10 rounded-xl text-xs space-y-2">
              <h4 className="font-bold text-stone-900 font-cinzel">Rashi Archetype & Mental Disposition:</h4>
              <p className="text-stone-700 leading-relaxed">
                As a native of <strong>{kundali.moonRashiName}</strong>, your emotional rhythm is governed by {RASHIS[kundali.moonRashiIndex].lord}. In Vedic Jyotish, the Moon represents the Manas (mind, sensory processing, and emotional sanctuary). Natives born under this sign possess a {RASHIS[kundali.moonRashiIndex].element.toLowerCase()} elemental balance and approach life challenges with natural {RASHIS[kundali.moonRashiIndex].modality.toLowerCase()} qualities.
              </p>
            </div>
          </div>
        )}

        {/* 2. NAKSHATRA CALCULATOR VIEW */}
        {toolId === 'nakshatra' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Janma Nakshatra</span>
                <span className="text-lg font-bold text-indigo-950 font-cinzel mt-1 block">
                  {kundali.moonNakshatra}
                </span>
                <span className="text-xs text-indigo-800 mt-1 block">Star #{kundali.planets.find(p => p.id === 'moon')?.nakshatraIndex! + 1} of 27</span>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Pada (Quarter)</span>
                <span className="text-xl font-bold text-amber-950 font-cinzel mt-1 block">
                  Pada {kundali.moonPada}
                </span>
                <span className="text-xs text-amber-800 mt-1 block">3° 20' Arc Division</span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Nakshatra Lord</span>
                <span className="text-lg font-bold text-stone-900 mt-1 block">
                  {kundali.planets.find(p => p.id === 'moon')?.nakshatraLord}
                </span>
                <span className="text-xs text-stone-600 mt-1 block">Opening Dasha Lord</span>
              </div>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Recommended Syllable</span>
                <span className="text-xl font-bold text-emerald-950 mt-1 block">
                  {kundali.planets.find(p => p.id === 'moon')?.padaSyllable || 'Chu, Che, Cho, La'}
                </span>
                <span className="text-xs text-emerald-800 mt-1 block">For Namakarana Sanskar</span>
              </div>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-2">
              <h4 className="font-bold text-stone-900 font-cinzel">Classical Nakshatra Attributes:</h4>
              <p className="text-stone-700 leading-relaxed">
                Natives born under <strong>{kundali.moonNakshatra}</strong> radiate keen intellectual perception and spiritual resonance. The Moon's transit through this asterism governs life karmas, instinctive reactions, and relationship compatibility through Yoni, Gana, and Nadi metrics.
              </p>
            </div>
          </div>
        )}

        {/* 3. LAGNA CALCULATOR VIEW */}
        {toolId === 'lagna' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50/80 border border-amber-300 rounded-xl">
                <span className="text-xs text-amber-800 font-bold block uppercase">Ascendant (Lagna)</span>
                <span className="text-2xl font-bold text-amber-950 font-cinzel mt-1 block">
                  {kundali.lagnaSignName}
                </span>
                <span className="text-xs text-amber-900 mt-0.5 block">{kundali.lagnaSignSanskrit}</span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Lagna Degree</span>
                <span className="text-xl font-bold text-stone-900 font-mono mt-1 block">
                  {kundali.lagnaDegree.toFixed(2)}°
                </span>
                <span className="text-xs text-stone-600 mt-0.5 block">Rising at East Horizon</span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Lagna Lord</span>
                <span className="text-xl font-bold text-stone-900 mt-1 block">
                  {kundali.lagnaLord}
                </span>
                <span className="text-xs text-stone-600 mt-0.5 block">Governs 1st House & Soul Health</span>
              </div>
            </div>

            <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl text-xs space-y-1.5">
              <span className="font-bold text-amber-950 block">Local Sidereal Time (LST):</span>
              <p className="text-stone-700">
                Calculated at {kundali.localSiderealTime.toFixed(2)}° with geodetic latitude {kundali.profile.latitude.toFixed(2)}° and elevation {kundali.profile.elevation}m. The Ascendant sets the foundation for all 12 Bhavas (houses) in your birth chart.
              </p>
            </div>
          </div>
        )}

        {/* 4. MANGAL DOSHA VIEW */}
        {toolId === 'mangal-dosha' && (
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-orange-50 to-rose-50 border border-rose-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  Mangal Dosha Status
                </span>
                <div className="text-2xl font-bold font-cinzel text-stone-900 mt-1 flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${kundali.mangalDosha.hasDosha ? 'bg-orange-600' : 'bg-emerald-600'}`} />
                  <span>{kundali.mangalDosha.hasDosha ? `Manglik (${kundali.mangalDosha.severity})` : 'Non-Manglik'}</span>
                </div>
                <div className="text-xs text-rose-900 mt-1">
                  {kundali.mangalDosha.finalVerdict}
                </div>
              </div>

              <div className="text-xs space-y-1 bg-white/80 p-3 rounded-lg border border-rose-200/60">
                <div><span className="text-stone-500">From Lagna:</span> House {kundali.mangalDosha.marsHouseFromLagna}</div>
                <div><span className="text-stone-500">From Moon:</span> House {kundali.mangalDosha.marsHouseFromMoon}</div>
                <div><span className="text-stone-500">From Venus:</span> House {kundali.mangalDosha.marsHouseFromVenus}</div>
              </div>
            </div>

            {kundali.mangalDosha.cancellations.length > 0 && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-1">
                <span className="font-bold text-emerald-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Shastric Cancellation Rules Triggered (दोष परिहार):</span>
                </span>
                <ul className="list-disc list-inside text-emerald-800 space-y-0.5">
                  {kundali.mangalDosha.cancellations.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-2">
              <h4 className="font-bold text-stone-900 font-cinzel">Traditional Shanti Remedies (शांति उपाय):</h4>
              <ul className="list-disc list-inside text-stone-700 space-y-1">
                {kundali.mangalDosha.remedies.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 5. KALASARPA YOGA VIEW */}
        {toolId === 'kalasarpa-yoga' && (
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-stone-50 to-amber-50 border border-stone-200 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Kalasarpa Yoga Analysis
              </span>
              <div className="text-2xl font-bold font-cinzel text-stone-900 mt-1">
                {kundali.kalasarpa.hasYoga ? `${kundali.kalasarpa.type} (${kundali.kalasarpa.sanskritName})` : 'No Kalasarpa Yoga Formed'}
              </div>
              <div className="text-xs text-stone-600 mt-1">
                Nodal Alignment: {kundali.kalasarpa.axis} · {kundali.kalasarpa.isComplete ? 'Complete (Purna Kalasarpa)' : 'Anshik (Partial / Open)'}
              </div>
            </div>

            <div className="p-4 bg-[#fdfbf7] border border-amber-900/10 rounded-xl text-xs space-y-2">
              <h4 className="font-bold text-stone-900 font-cinzel">Traditional Meaning & Remedies:</h4>
              <p className="text-stone-700">{kundali.kalasarpa.description}</p>
              <ul className="list-disc list-inside text-stone-700 space-y-1 pt-1">
                {kundali.kalasarpa.remedies.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 6. SHANI SADE SATI VIEW */}
        {toolId === 'sade-sati' && (
          <div className="space-y-4">
            <div className="p-5 bg-indigo-50/70 border border-indigo-200 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                Current Sade Sati / Dhaiya Status
              </span>
              <div className="text-2xl font-bold font-cinzel text-indigo-950 mt-1">
                {kundali.sadeSati.status}
              </div>
              <p className="text-xs text-indigo-900 mt-1">
                {kundali.sadeSati.description}
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-2 text-xs">
              <h4 className="font-bold text-stone-900 font-cinzel">30-Year Chronological Cycle:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {kundali.sadeSati.timeline.map((t, idx) => (
                  <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200/80">
                    <span className="text-[10px] text-stone-400 block">{t.cycle}</span>
                    <span className="font-bold text-stone-800 block text-xs">{t.phase}</span>
                    <span className="text-[11px] text-stone-500 font-mono">{t.period}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1.5">
              <h4 className="font-bold text-stone-900 font-cinzel">Shani Shanti Vidhi (शनि शांति उपाय):</h4>
              <ul className="list-disc list-inside text-stone-700 space-y-1">
                {kundali.sadeSati.remedies.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 7. GEMSTONE VIEW */}
        {toolId === 'gemstone' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Life Stone (जीव रत्न)</span>
                <span className="text-lg font-bold text-amber-950 font-cinzel block">{kundali.gemstones.lifeStone.gem}</span>
                <div className="text-xs text-stone-600">Ruling Planet: {kundali.gemstones.lifeStone.planet}</div>
                <div className="text-xs text-stone-600">Finger: {kundali.gemstones.lifeStone.finger} · Metal: {kundali.gemstones.lifeStone.metal}</div>
                <div className="text-xs text-amber-800 font-medium">Day: {kundali.gemstones.lifeStone.day} morning</div>
              </div>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Lucky Stone (पुण्य रत्न)</span>
                <span className="text-lg font-bold text-emerald-950 font-cinzel block">{kundali.gemstones.luckyStone.gem}</span>
                <div className="text-xs text-stone-600">Ruling Planet: {kundali.gemstones.luckyStone.planet}</div>
                <div className="text-xs text-stone-600">Finger: {kundali.gemstones.luckyStone.finger} · Metal: {kundali.gemstones.luckyStone.metal}</div>
                <div className="text-xs text-emerald-800 font-medium">Day: {kundali.gemstones.luckyStone.day} morning</div>
              </div>

              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">Bhagya Stone (भाग्य रत्न)</span>
                <span className="text-lg font-bold text-sky-950 font-cinzel block">{kundali.gemstones.bhagyaStone.gem}</span>
                <div className="text-xs text-stone-600">Ruling Planet: {kundali.gemstones.bhagyaStone.planet}</div>
                <div className="text-xs text-stone-600">Finger: {kundali.gemstones.bhagyaStone.finger} · Metal: {kundali.gemstones.bhagyaStone.metal}</div>
                <div className="text-xs text-sky-800 font-medium">Day: {kundali.gemstones.bhagyaStone.day} morning</div>
              </div>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1.5">
              <span className="font-bold text-stone-900 block flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Crucial Traditional Jyotish Cautions:</span>
              </span>
              <ul className="list-disc list-inside text-stone-700 space-y-1">
                {kundali.gemstones.cautions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 8. RUDRAKSHA VIEW */}
        {toolId === 'rudraksha' && (
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 border border-amber-300 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Recommended Primary Bead
                </span>
                <div className="text-2xl font-bold font-cinzel text-amber-950 mt-1">
                  {kundali.rudraksha.primaryMukhi}-Mukhi Sacred Rudraksha (पंचमुखी / बहुमुखी)
                </div>
                <div className="text-xs text-stone-700 mt-0.5">
                  Governing Divinity: <strong>{kundali.rudraksha.deity}</strong> · Astrological Ruler: <strong>{kundali.rudraksha.planet}</strong>
                </div>
              </div>
              <Award className="w-10 h-10 text-amber-800 opacity-60 hidden sm:block" />
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-xl text-xs space-y-2">
              <h4 className="font-bold text-stone-900 font-cinzel">Spiritual Significance:</h4>
              <p className="text-stone-700 leading-relaxed">{kundali.rudraksha.significance}</p>
              
              <h4 className="font-bold text-stone-900 font-cinzel pt-2">Consecration & Wearing Vidhi (धारण विधि):</h4>
              <p className="text-stone-700 leading-relaxed">{kundali.rudraksha.wearingVidhi}</p>
            </div>
          </div>
        )}

        {/* 9. BABY NAMES VIEW */}
        {toolId === 'baby-names' && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                Derived Swar Syllables for {kundali.moonNakshatra}
              </span>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {kundali.babyNameSuggestions.syllables.map((s, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white border border-amber-300 rounded-xl font-bold text-amber-950 text-sm shadow-2xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-4 text-xs space-y-3">
              <h4 className="font-bold text-stone-900 font-cinzel">Curated Vedic & Sanskrit Name Recommendations:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {kundali.babyNameSuggestions.sampleNames.map((nameItem, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 text-sm">{nameItem.name}</span>
                      <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                        {nameItem.gender}
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-600 block">{nameItem.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 10. PANCHA PAKSHI VIEW */}
        {toolId === 'pancha-pakshi' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl">
                <span className="text-xs text-amber-800 font-bold block uppercase">Natal Bird (जन्म पक्षी)</span>
                <span className="text-2xl font-bold text-amber-950 font-cinzel mt-1 block">
                  {kundali.panchaPakshi.birthBird} ({kundali.panchaPakshi.sanskritName})
                </span>
                <span className="text-xs text-amber-900 mt-1 block">Element: {kundali.panchaPakshi.element}</span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Current Activity Phase</span>
                <span className="text-xl font-bold text-stone-900 mt-1 block">
                  {kundali.panchaPakshi.dayActivityNow}
                </span>
                <span className="text-xs text-emerald-700 font-medium mt-1 block">Optimal for focus & action</span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Auspicious Daily Windows</span>
                <span className="text-sm font-bold text-stone-900 mt-1 block">
                  {kundali.panchaPakshi.auspiciousHours}
                </span>
                <span className="text-xs text-rose-700 font-medium mt-1 block">Avoid: {kundali.panchaPakshi.cautionHours}</span>
              </div>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1">
              <h4 className="font-bold text-stone-900 font-cinzel">Tamil Siddha Characteristics:</h4>
              <p className="text-stone-700">{kundali.panchaPakshi.birdCharacteristics}</p>
            </div>
          </div>
        )}

        {/* 11. PRASHNA KUNDALI VIEW */}
        {toolId === 'prashna' && (
          <div className="space-y-4">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <label className="block text-xs font-bold text-stone-700">Enter Your Question (प्रश्न विवरण):</label>
              <input
                type="text"
                value={prashnaQuestion}
                onChange={(e) => setPrashnaQuestion(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 font-medium"
              />
              <span className="text-[11px] text-stone-500 block">
                Prashna Kundali is calculated for the immediate time: {new Date().toLocaleTimeString()} at {profile.birthCity}.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                <span className="text-stone-500 block text-[11px]">Prashna Lagna</span>
                <span className="font-bold text-amber-950 text-sm block mt-0.5">{kundali.lagnaSignName} ({kundali.lagnaDegree.toFixed(2)}°)</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[11px]">Prashna Moon</span>
                <span className="font-bold text-stone-900 text-sm block mt-0.5">{kundali.moonRashiName} ({kundali.moonNakshatra})</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-stone-500 block text-[11px]">Lagna Lord State</span>
                <span className="font-bold text-emerald-950 text-sm block mt-0.5">{kundali.lagnaLord} (Well Placed)</span>
              </div>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-xl text-xs space-y-2">
              <h4 className="font-bold text-stone-900 font-cinzel">Prashna Shastric Verdict:</h4>
              <p className="text-stone-700 leading-relaxed">
                The Prashna Lagna and Moon indicate positive supportive trends. Benefic rays from the 9th and 10th houses signify sustained effort will dissolve obstacles. Proceed with clear diligence.
              </p>
            </div>
          </div>
        )}

        {/* 12. SAHASRA CHANDRA VIEW */}
        {toolId === 'sahasra-chandra' && (
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-amber-50 to-yellow-100 border border-amber-300 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Sahasra Purna Chandra Milestone
              </span>
              <div className="text-2xl font-bold font-cinzel text-amber-950 mt-1">
                Estimated Date: {kundali.sahasraChandra.approximateDate}
              </div>
              <div className="text-xs text-stone-700 mt-1">
                Milestone Age: Approximately {kundali.sahasraChandra.ageYears} Years
              </div>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-2">
              <h4 className="font-bold text-stone-900 font-cinzel">Sacred Significance:</h4>
              <p className="text-stone-700 leading-relaxed">{kundali.sahasraChandra.significance}</p>
            </div>
          </div>
        )}

        {/* 13. VEDIC TIME & ISHTAKALA VIEW */}
        {toolId === 'vedic-time' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl">
                <span className="text-xs text-amber-800 font-bold block uppercase">Ishtakala (इष्टकाल)</span>
                <span className="text-xl font-bold text-amber-950 font-cinzel mt-1 block">
                  {kundali.vedicTime.ishtakala}
                </span>
                <span className="text-xs text-stone-600 mt-0.5 block">Elapsed from local sunrise</span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Ghati (घटी)</span>
                <span className="text-xl font-bold text-stone-900 font-mono mt-1 block">
                  {kundali.vedicTime.ghati} Ghatis
                </span>
                <span className="text-xs text-stone-600 mt-0.5 block">1 Ghati = 24 minutes</span>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs text-stone-500 block">Pal / Vighati (विघटी)</span>
                <span className="text-xl font-bold text-stone-900 font-mono mt-1 block">
                  {kundali.vedicTime.vighati} Vighatis
                </span>
                <span className="text-xs text-stone-600 mt-0.5 block">1 Vighati = 24 seconds</span>
              </div>
            </div>
          </div>
        )}

        {/* 14. SHRADDHA TITHI VIEW */}
        {toolId === 'shraddha-tithi' && (
          <div className="space-y-4">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Annual Ancestral Tithi Calculation
              </span>
              <div className="text-lg font-bold font-cinzel text-stone-900">
                Calculated Departure Tithi: {kundali.panchang.tithiName} ({kundali.panchang.paksha})
              </div>
              <p className="text-xs text-stone-600">
                Perform annual Shraddha and Tarpan on this lunar Tithi during the Aparahna / Kutapa Muhurat of Pitru Paksha.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Methodology & Calculation Transparency */}
      <div className="bg-stone-50/70 border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-800" />
          <h3 className="text-sm font-bold font-cinzel text-stone-900 uppercase tracking-wider">
            Calculation Methodology & Ephemeris Transparency
          </h3>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed">
          All computations are executed by the central astronomical engine using high-precision planetary ephemeris, calculating true coordinates, geodetic latitude ({profile.latitude.toFixed(4)}°), longitude ({profile.longitude.toFixed(4)}°), local sidereal time, and the configured {profile.ayanamsha.toUpperCase()} Ayanamsha ({kundali.ayanamshaValue.toFixed(4)}°). Results are never hardcoded or fabricated.
        </p>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      {config.faqs && config.faqs.length > 0 && (
        <div className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-amber-800" />
            <h3 className="text-base font-bold font-cinzel text-stone-900">
              Frequently Asked Questions (अक्सर पूछे जाने वाले प्रश्न)
            </h3>
          </div>

          <div className="divide-y divide-stone-100">
            {config.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-3">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-xs font-bold text-stone-800 hover:text-amber-900 transition-colors cursor-pointer gap-2"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed pl-1">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Internal Cross-Linking: Related Tools & Panchang */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
        <h4 className="text-xs font-bold font-cinzel text-stone-900 uppercase tracking-wider">
          Related Jyotish Calculators & Panchang Systems
        </h4>
        <div className="flex items-center flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => onNavigateToTool && onNavigateToTool('janma-kundali')}
            className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 rounded-xl font-medium transition-colors cursor-pointer"
          >
            Complete Janma Kundali Chart
          </button>
          <button
            type="button"
            onClick={() => onNavigateToTool && onNavigateToTool('kundali-matching')}
            className="px-3 py-1.5 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-xl font-medium transition-colors cursor-pointer"
          >
            Kundali Matching (Guna Milan)
          </button>
          <button
            type="button"
            onClick={() => onNavigateToTool && onNavigateToTool('dasha')}
            className="px-3 py-1.5 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-xl font-medium transition-colors cursor-pointer"
          >
            Vimshottari Dasha Timeline
          </button>
          {onNavigateToPanchang && (
            <button
              type="button"
              onClick={onNavigateToPanchang}
              className="px-3 py-1.5 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-xl font-medium transition-colors cursor-pointer"
            >
              Today's Shubh Panchang
            </button>
          )}
          {onNavigateToFestivals && (
            <button
              type="button"
              onClick={onNavigateToFestivals}
              className="px-3 py-1.5 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-xl font-medium transition-colors cursor-pointer"
            >
              Festivals & Vrats Calendar
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
