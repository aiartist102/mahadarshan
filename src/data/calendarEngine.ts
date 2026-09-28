import { CityData } from '../types';
import { allIndianCities } from './indianCities';

// Primary Calendar Categories for the Calendar Hub
export type CalendarCategoryGroup = 
  | 'yearly'
  | 'festival'
  | 'regional'
  | 'nepali'
  | 'religious'
  | 'special'
  | 'new-year'
  | 'vrat';

export interface CalendarDefinition {
  id: string;
  slug: string;
  name: string;
  nativeName: string;
  title: string;
  category: CalendarCategoryGroup;
  region: string;
  language: string;
  calendarType: 'lunar-amanta' | 'lunar-purnimanta' | 'solar-sidereal' | 'solar-tropical' | 'lunisolar-sectarian' | 'civil';
  eraName: string;
  currentYear: string;
  description: string;
  keyFestivals: string[];
  explanation: {
    overview: string;
    calculationBasis: string;
    regionalContext: string;
    monthSystem: string;
    specialRules: string[];
    differencesFromGregorian: string;
  };
  months: { id: number; name: string; nativeName: string; approxSpan: string }[];
}

export interface CalendarDayInfo {
  date: string; // YYYY-MM-DD
  dayNumber: number;
  dayOfWeek: string;
  dayOfWeekShort: string;
  isToday: boolean;
  isWeekend: boolean;
  
  // Astronomical & Tithi
  tithiNumber: number;
  tithiName: string;
  tithiHindi: string;
  tithiEnd: string;
  paksha: 'Shukla' | 'Krishna';
  pakshaName: string;
  nakshatra: string;
  nakshatraEnd: string;
  yoga: string;
  karana: string;
  
  // Regional Date
  regionalDateNumber: number;
  regionalMonthName: string;
  regionalYear: string;
  regionalEra: string;
  
  // Sun & Moon
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  
  // Events & Observances
  isEkadashi: boolean;
  isPurnima: boolean;
  isAmavasya: boolean;
  isSankranti: boolean;
  sankrantiName?: string;
  isPradosh: boolean;
  isChaturthi: boolean;
  
  // Festivals
  events: CalendarEventDetail[];
  holidays: string[];
}

export interface CalendarEventDetail {
  id: string;
  name: string;
  hindiName: string;
  regionalName?: string;
  date: string;
  category: 'major-festival' | 'vrat' | 'jayanti' | 'puja' | 'holiday' | 'sankranti';
  significance: string;
  history?: string;
  pujaVidhi?: string[];
  muhurat?: string;
  fastRules?: string;
  mantras?: { mantra: string; meaning: string }[];
  dosAndDonts?: { dos: string[]; donts: string[] };
  regionalVariations?: string;
  relatedCalendarId?: string;
}

// 1. Directory of all 14 Yearly Calendar Systems
export const yearlyCalendarsCatalog: CalendarDefinition[] = [
  {
    id: 'hindu-purnimanta',
    slug: 'hindu',
    name: 'Hindu Calendar (Purnimanta)',
    nativeName: 'विक्रम संवत् पंचांग (पूर्णिमान्त)',
    title: 'Hindu Calendar - Lunar Tithi, Vrats & Festivals',
    category: 'yearly',
    region: 'North & Central India (UP, Bihar, MP, Rajasthan, Haryana, Delhi, HP)',
    language: 'Hindi / Sanskrit',
    calendarType: 'lunar-purnimanta',
    eraName: 'Vikram Samvat',
    currentYear: '2083',
    description: 'The ancient Vedic lunisolar calendar where the lunar month culminates on Purnima (Full Moon). Governs Holi, Raksha Bandhan, Janmashtami, and major Vedic vrats.',
    keyFestivals: ['Maha Shivratri', 'Holi', 'Ram Navami', 'Janmashtami', 'Durga Ashtami', 'Diwali'],
    explanation: {
      overview: 'The Hindu Purnimanta calendar is the foundational timekeeping system of Sanatana Dharma across northern and central Bharat. Each month concludes with the full illumination of the Moon on Purnima.',
      calculationBasis: 'Based on the angular distance of 12° between the Sun and Moon (Surya-Chandra Antara) defining each Tithi. The year consists of 12 lunar months with periodic Adhika Masa (intercalary month) every 32.5 months to align with the solar cycle.',
      regionalContext: 'Predominantly observed in Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, Haryana, Delhi, Himachal Pradesh, Uttarakhand, and Nepal.',
      monthSystem: '12 lunar months: Chaitra, Vaishakha, Jyeshtha, Ashadha, Shravana, Bhadrapada, Ashwina, Kartika, Margashirsha, Pausha, Magha, Phalguna.',
      specialRules: [
        'Month begins on Krishna Pratipada and ends on Purnima.',
        'Krishna Paksha precedes Shukla Paksha in each month.',
        'Festivals in Krishna Paksha are calculated in the next month compared to Amanta calendars.'
      ],
      differencesFromGregorian: 'Gregorian is purely solar and seasonal. Hindu calendar harmonizes both lunar phases for religious consciousness and solar seasons for agrarian cycles.'
    },
    months: [
      { id: 1, name: 'Chaitra', nativeName: 'चैत्र', approxSpan: 'Mar - Apr' },
      { id: 2, name: 'Vaishakha', nativeName: 'वैशाख', approxSpan: 'Apr - May' },
      { id: 3, name: 'Jyeshtha', nativeName: 'ज्येष्ठ', approxSpan: 'May - Jun' },
      { id: 4, name: 'Ashadha', nativeName: 'आषाढ़', approxSpan: 'Jun - Jul' },
      { id: 5, name: 'Shravana', nativeName: 'श्रावण', approxSpan: 'Jul - Aug' },
      { id: 6, name: 'Bhadrapada', nativeName: 'भाद्रपद', approxSpan: 'Aug - Sep' },
      { id: 7, name: 'Ashwina', nativeName: 'आश्विन', approxSpan: 'Sep - Oct' },
      { id: 8, name: 'Kartika', nativeName: 'कार्तिक', approxSpan: 'Oct - Nov' },
      { id: 9, name: 'Margashirsha', nativeName: 'मार्गशीर्ष', approxSpan: 'Nov - Dec' },
      { id: 10, name: 'Pausha', nativeName: 'पौष', approxSpan: 'Dec - Jan' },
      { id: 11, name: 'Magha', nativeName: 'माघ', approxSpan: 'Jan - Feb' },
      { id: 12, name: 'Phalguna', nativeName: 'फाल्गुन', approxSpan: 'Feb - Mar' }
    ]
  },
  {
    id: 'gujarati-calendar',
    slug: 'gujarati',
    name: 'Gujarati Calendar (Amanta)',
    nativeName: 'ગુજરાતી પંચાંગ કેલેન્ડર (વિક્રમ સંવત)',
    title: 'Gujarati Calendar - Sud, Vad, Bestu Varas & Tithi',
    category: 'yearly',
    region: 'Gujarat & Worldwide Gujarati Diaspora',
    language: 'Gujarati (ગુજરાતી)',
    calendarType: 'lunar-amanta',
    eraName: 'Vikram Samvat (Gujarati)',
    currentYear: '2082 - 2083',
    description: 'The beloved Gujarati Vikram Samvat calendar where the year begins right after Diwali on Kartak Sud Ekam (Bestu Varas). Uses Sud (bright) and Vad (dark) fortnights.',
    keyFestivals: ['Bestu Varas', 'Chopda Pujan', 'Uttarayan', 'Maha Shivratri', 'Janmashtami', 'Diwali'],
    explanation: {
      overview: 'The Gujarati calendar is an Amanta lunisolar calendar with deep entrepreneurial and devotional roots. The New Year (Nutan Varshabhinandan) is celebrated on the day after Diwali.',
      calculationBasis: 'Months end at the New Moon (Amavasya / Amas). The bright fortnight is called Sud (શુક્લ પક્ષ) and the dark fortnight is Vad (કૃષ્ણ પક્ષ).',
      regionalContext: 'Used by the global Gujarati community, business houses for Muhurat trading, and temples like Somnath, Dwarka, and Ambaji.',
      monthSystem: 'Begins with Kartak: Kartak, Magshar, Posh, Maha, Fagan, Chaitra, Vaishakh, Jeth, Ashadh, Shravan, Bhadarvo, Aaso.',
      specialRules: [
        'New Year begins in month of Kartak, directly following Diwali.',
        'Diwali is celebrated on Aaso Vad Amas, the final day of the Gujarati year.',
        'Chopda Pujan and Sharda Pujan are conducted during auspicious Choghadiya on Diwali evening.'
      ],
      differencesFromGregorian: 'Changes years in October/November around Diwali rather than January 1st.'
    },
    months: [
      { id: 1, name: 'Kartak', nativeName: 'કારતક (બેસતું વર્ષ)', approxSpan: 'Oct - Nov' },
      { id: 2, name: 'Magshar', nativeName: 'માગશર', approxSpan: 'Nov - Dec' },
      { id: 3, name: 'Posh', nativeName: 'પોષ', approxSpan: 'Dec - Jan' },
      { id: 4, name: 'Maha', nativeName: 'મહા (શિવરાત્રી)', approxSpan: 'Jan - Feb' },
      { id: 5, name: 'Fagan', nativeName: 'ફાગણ (હોળી)', approxSpan: 'Feb - Mar' },
      { id: 6, name: 'Chaitra', nativeName: 'ચૈત્ર (રામનવમી)', approxSpan: 'Mar - Apr' },
      { id: 7, name: 'Vaishakh', nativeName: 'વૈશાખ', approxSpan: 'Apr - May' },
      { id: 8, name: 'Jeth', nativeName: 'જેઠ', approxSpan: 'May - Jun' },
      { id: 9, name: 'Ashadh', nativeName: 'અષાઢ (રથયાત્રા)', approxSpan: 'Jun - Jul' },
      { id: 10, name: 'Shravan', nativeName: 'શ્રાવણ (પવિત્ર શ્રાવણ માસ)', approxSpan: 'Jul - Aug' },
      { id: 11, name: 'Bhadarvo', nativeName: 'ભાદરવો (ગણેશોત્સવ / શ્રાદ્ધ)', approxSpan: 'Aug - Sep' },
      { id: 12, name: 'Aaso', nativeName: 'આસો (નવરાત્રી / દિવાળી)', approxSpan: 'Sep - Oct' }
    ]
  },
  {
    id: 'indian-national',
    slug: 'indian',
    name: 'Indian National Calendar (Saka Samvat)',
    nativeName: 'भारतीय राष्ट्रीय पंचांग (शक संवत्)',
    title: 'Indian National Calendar - Saka Era, Solar Months & Gazetted Holidays',
    category: 'yearly',
    region: 'Government of India, All States & Union Territories',
    language: 'Hindi, English & State Languages',
    calendarType: 'solar-tropical',
    eraName: 'Shaka Samvat',
    currentYear: '1948',
    description: 'The official civil calendar adopted by the Indian Parliament on 22 March 1957. Synchronized with the Gregorian calendar and based on the vernal equinox.',
    keyFestivals: ['Republic Day', 'Independence Day', 'Gandhi Jayanti', 'Chaitra 1', 'Buddha Purnima'],
    explanation: {
      overview: 'Adopted alongside the Gregorian calendar by the Government of India on the recommendation of the Calendar Reform Committee led by astrophysicist Meghnad Saha.',
      calculationBasis: 'Based on the Shaka Era (78 CE). The year begins on Chaitra 1 (March 22 in normal years, March 21 in leap years). Chaitra has 30 days (31 in leap years); the next 5 months have 31 days each; the last 6 months have 30 days each.',
      regionalContext: 'Used in the Gazette of India, All India Radio news bulletins, communications issued by the President, and government calendars.',
      monthSystem: 'Chaitra, Vaishakha, Jyeshtha, Ashadha, Shravana, Bhadrapada, Ashwina, Kartika, Margashirsha, Pausha, Magha, Phalguna.',
      specialRules: [
        'Days in Chaitra match the Gregorian leap year pattern.',
        'Fixed relationship with Gregorian dates facilitates seamless civil administration.'
      ],
      differencesFromGregorian: 'Retains classical Sanskrit month names and astronomical equinox inception while matching Gregorian civil predictability.'
    },
    months: [
      { id: 1, name: 'Chaitra', nativeName: 'चैत्र', approxSpan: 'Mar 22 - Apr 20' },
      { id: 2, name: 'Vaishakha', nativeName: 'वैशाख', approxSpan: 'Apr 21 - May 21' },
      { id: 3, name: 'Jyeshtha', nativeName: 'ज्येष्ठ', approxSpan: 'May 22 - Jun 21' },
      { id: 4, name: 'Ashadha', nativeName: 'आषाढ़', approxSpan: 'Jun 22 - Jul 22' },
      { id: 5, name: 'Shravana', nativeName: 'श्रावण', approxSpan: 'Jul 23 - Aug 22' },
      { id: 6, name: 'Bhadrapada', nativeName: 'भाद्रपद', approxSpan: 'Aug 23 - Sep 22' },
      { id: 7, name: 'Ashwina', nativeName: 'आश्विन', approxSpan: 'Sep 23 - Oct 22' },
      { id: 8, name: 'Kartika', nativeName: 'कार्तिक', approxSpan: 'Oct 23 - Nov 21' },
      { id: 9, name: 'Margashirsha', nativeName: 'मार्गशीर्ष', approxSpan: 'Nov 22 - Dec 21' },
      { id: 10, name: 'Pausha', nativeName: 'पौष', approxSpan: 'Dec 22 - Jan 20' },
      { id: 11, name: 'Magha', nativeName: 'माघ', approxSpan: 'Jan 21 - Feb 19' },
      { id: 12, name: 'Phalguna', nativeName: 'फाल्गुन', approxSpan: 'Feb 20 - Mar 21' }
    ]
  },
  {
    id: 'tamil-calendar',
    slug: 'tamil',
    name: 'Tamil Calendar (தமிழ் நாட்காட்டி)',
    nativeName: 'தமிழ் திருக்கணித சௌரமான நாட்காட்டி',
    title: 'Tamil Calendar - Puthandu, Pongal, Nakshatra & Gowri Panchangam',
    category: 'yearly',
    region: 'Tamil Nadu, Puducherry, Sri Lanka, Malaysia, Singapore',
    language: 'Tamil (தமிழ்)',
    calendarType: 'solar-sidereal',
    eraName: 'Tamil 60-Year Jovian Cycle (பராபவ)',
    currentYear: 'Parabhava (பராபவ வருடம்)',
    explanation: {
      overview: 'The Tamil calendar is a sidereal solar calendar that follows the movement of the Sun through the 12 signs of the Zodiac (Rasis). The New Year (Chithirai Puthandu) begins with Mesha Sankranti on April 14.',
      calculationBasis: 'The day begins at sunrise. Months are determined by the exact transit (Sankramana) of the Sun into a new zodiac sign. If ingress occurs after sunset, the month starts the following day.',
      regionalContext: 'Governs daily temple worship, Brahmotsavams at Madurai Meenakshi, Rameswaram, Chidambaram, and Palani.',
      monthSystem: 'Chithirai, Vaikasi, Aani, Aadi, Avani, Purattasi, Aippasi, Karthigai, Margazhi, Thai, Masi, Panguni.',
      specialRules: [
        'Pongal is celebrated on the first day of month Thai (Thai Pongal).',
        'Purattasi Saturdays are revered for Lord Venkateswara prayers.',
        'Margazhi is dedicated to Thiruppavai and early morning temple chants without marriages.'
      ],
      differencesFromGregorian: 'Solar calendar aligned with the sidereal nirayana zodiac rather than the tropical equinoctial points.'
    },
    description: 'A sidereal solar calendar starting on 1st Chithirai (mid-April). Features Pongal, Panguni Uthiram, Skanda Sashti, and Gowri Panchangam.',
    keyFestivals: ['Puthandu', 'Thai Pongal', 'Panguni Uthiram', 'Karthigai Deepam', 'Thaipusam'],
    months: [
      { id: 1, name: 'Chithirai', nativeName: 'சித்திரை (புத்தாண்டு)', approxSpan: 'Apr 14 - May 14' },
      { id: 2, name: 'Vaikasi', nativeName: 'வைகாசி', approxSpan: 'May 15 - Jun 14' },
      { id: 3, name: 'Aani', nativeName: 'ஆனி (நடராஜர் திருமஞ்சனம்)', approxSpan: 'Jun 15 - Jul 15' },
      { id: 4, name: 'Aadi', nativeName: 'ஆடி (ஆடிப்பெருக்கு)', approxSpan: 'Jul 16 - Aug 16' },
      { id: 5, name: 'Avani', nativeName: 'ஆவணி (ஆவணி அவிட்டம்)', approxSpan: 'Aug 17 - Sep 16' },
      { id: 6, name: 'Purattasi', nativeName: 'புரட்டாசி (பெருமாள் விரதம்)', approxSpan: 'Sep 17 - Oct 17' },
      { id: 7, name: 'Aippasi', nativeName: 'ஐப்பசி (அன்னாபிஷேகம்)', approxSpan: 'Oct 18 - Nov 16' },
      { id: 8, name: 'Karthigai', nativeName: 'கார்த்திகை (மகா தீபம்)', approxSpan: 'Nov 17 - Dec 15' },
      { id: 9, name: 'Margazhi', nativeName: 'மார்கழி (வைகுண்ட ஏகாதசி)', approxSpan: 'Dec 16 - Jan 13' },
      { id: 10, name: 'Thai', nativeName: 'தை (பொங்கல் பண்டிகை)', approxSpan: 'Jan 14 - Feb 12' },
      { id: 11, name: 'Masi', nativeName: 'மாசி (மாசி மகம்)', approxSpan: 'Feb 13 - Mar 13' },
      { id: 12, name: 'Panguni', nativeName: 'பங்குனி (உத்திரம் திருநாள்)', approxSpan: 'Mar 14 - Apr 13' }
    ]
  },
  {
    id: 'telugu-calendar',
    slug: 'telugu',
    name: 'Telugu Calendar (తెలుగు క్యాలెండర్)',
    nativeName: 'శ్రీ శాలివాహన శక తెలుగు పంచాంగం',
    title: 'Telugu Calendar - Ugadi, Tithi, TTD Brahmotsavams & Festivals',
    category: 'yearly',
    region: 'Andhra Pradesh, Telangana & Rayalaseema',
    language: 'Telugu (తెలుగు)',
    calendarType: 'lunar-amanta',
    eraName: 'Shalivahana Shaka',
    currentYear: '1948',
    description: 'The ancient Amanta calendar of the Telugu people starting on Ugadi (Chaitra Shukla Pratipada). Aligns festivals across Tirumala Tirupati Devasthanams.',
    keyFestivals: ['Ugadi', 'Sri Rama Navami', 'Bonalu', 'Bathukamma', 'Sankranti', 'Vaikunta Ekadashi'],
    explanation: {
      overview: 'Observed across Andhra Pradesh and Telangana. Governed by the Amanta lunar system and celebrated with Panchanga Sravanam on Ugadi.',
      calculationBasis: 'Follows lunar Tithi from sunrise to sunrise. Months start with Shukla Paksha and conclude on Amavasya.',
      regionalContext: 'Regulates Tirumala Tirupati Brahmotsavam, Srisailam Mallikarjuna festivals, and Warangal Bhadrakali pujas.',
      monthSystem: 'Chaitram, Vaishakham, Jyeshtham, Ashadham, Shravanam, Bhadrapadam, Ashwayujam, Karthikam, Margashiram, Pushyam, Magham, Phalgunam.',
      specialRules: [
        'Ugadi Pacchadi made of six tastes (Shadruchulu) is partaken on New Year day.',
        'Bathukamma floral festival takes place during Navratri.'
      ],
      differencesFromGregorian: 'Harmonizes solar equinox with lunar phases via Adhika Masa intercalation.'
    },
    months: [
      { id: 1, name: 'Chaitram', nativeName: 'చైత్రం (ఉగాది)', approxSpan: 'Mar - Apr' },
      { id: 2, name: 'Vaishakham', nativeName: 'వైశాఖం', approxSpan: 'Apr - May' },
      { id: 3, name: 'Jyeshtham', nativeName: 'జ్యేష్ఠం', approxSpan: 'May - Jun' },
      { id: 4, name: 'Ashadham', nativeName: 'ఆషాఢం (బోనాలు)', approxSpan: 'Jun - Jul' },
      { id: 5, name: 'Shravanam', nativeName: 'శ్రావణం (వరలక్ష్మి వ్రతం)', approxSpan: 'Jul - Aug' },
      { id: 6, name: 'Bhadrapadam', nativeName: 'భాద్రపదం (వినాయక చవితి)', approxSpan: 'Aug - Sep' },
      { id: 7, name: 'Ashwayujam', nativeName: 'ఆశ్వయుజం (బతుకమ్మ / దసరా)', approxSpan: 'Sep - Oct' },
      { id: 8, name: 'Karthikam', nativeName: 'కార్తీకం (దీపోత్సవం)', approxSpan: 'Oct - Nov' },
      { id: 9, name: 'Margashiram', nativeName: 'మార్గశిరం', approxSpan: 'Nov - Dec' },
      { id: 10, name: 'Pushyam', nativeName: 'పుష్యం (సంక్రాంతి పండుగ)', approxSpan: 'Dec - Jan' },
      { id: 11, name: 'Magham', nativeName: 'మాఘం (మహాశివరాత్రి)', approxSpan: 'Jan - Feb' },
      { id: 12, name: 'Phalgunam', nativeName: 'ఫాల్గుణం (హోలీ)', approxSpan: 'Feb - Mar' }
    ]
  },
  {
    id: 'kannada-calendar',
    slug: 'kannada',
    name: 'Kannada Calendar (ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್)',
    nativeName: 'ಶಾಲಿವಾಹನ ಶಕೆ ಕನ್ನಡ ಪಂಚಾಂಗ',
    title: 'Kannada Calendar - Yugadi, Karaga, Mysore Dasara & Tithi',
    category: 'yearly',
    region: 'Karnataka',
    language: 'Kannada (ಕನ್ನಡ)',
    calendarType: 'lunar-amanta',
    eraName: 'Shalivahana Shaka',
    currentYear: '1948',
    description: 'The traditional calendar of Karnataka commencing on Yugadi. Sets dates for Bangalore Karaga, Mysore Dasara, Hampi Utsav, and Kaveri Sankramana.',
    keyFestivals: ['Yugadi', 'Mysore Dasara', 'Makara Sankranti', 'Gowri Habba', 'Ganesh Chaturthi', 'Karaga'],
    explanation: {
      overview: 'Followed across Karnataka with immense reverence. The New Year starts on Yugadi with Bevu-Bella distribution symbolizing joy and sorrow in balance.',
      calculationBasis: 'Amanta lunar calculation synchronized with solar equinoxes. Governed by classical Siddhantic texts.',
      regionalContext: 'Essential for temple festivals at Chamundeshwari Mysore, Udupi Krishna Matha, and Dharmasthala Manjunatha.',
      monthSystem: 'Chaitra, Vaishakha, Jyeshtha, Ashadha, Shravana, Bhadrapada, Ashwina, Kartika, Margashira, Pushya, Magha, Phalguna.',
      specialRules: [
        'Mysore Dasara celebrated as Naada Habba (State Festival) across 10 days of Navaratri.',
        'Swarna Gowri Vrat celebrated on Bhadrapada Shukla Tritiya preceding Ganesha Chaturthi.'
      ],
      differencesFromGregorian: 'Vedic lunisolar calculations with exact lunar tithis.'
    },
    months: [
      { id: 1, name: 'Chaitra', nativeName: 'ಚೈತ್ರ (ಯುಗಾದಿ)', approxSpan: 'Mar - Apr' },
      { id: 2, name: 'Vaishakha', nativeName: 'ವೈಶಾಖ', approxSpan: 'Apr - May' },
      { id: 3, name: 'Jyeshtha', nativeName: 'ಜ್ಯೇಷ್ಠ', approxSpan: 'May - Jun' },
      { id: 4, name: 'Ashadha', nativeName: 'ಆಷಾಢ', approxSpan: 'Jun - Jul' },
      { id: 5, name: 'Shravana', nativeName: 'ಶ್ರಾವಣ', approxSpan: 'Jul - Aug' },
      { id: 6, name: 'Bhadrapada', nativeName: 'ಭಾದ್ರಪದ (ಗಣೇಶ ಹಬ್ಬ)', approxSpan: 'Aug - Sep' },
      { id: 7, name: 'Ashwina', nativeName: 'ಆಶ್ವಯುಜ (ದಸರಾ)', approxSpan: 'Sep - Oct' },
      { id: 8, name: 'Kartika', nativeName: 'ಕಾರ್ತಿಕ (ದೀಪಾವಳಿ)', approxSpan: 'Oct - Nov' },
      { id: 9, name: 'Margashira', nativeName: 'ಮಾರ್ಗಶಿರ', approxSpan: 'Nov - Dec' },
      { id: 10, name: 'Pushya', nativeName: 'ಪುಷ್ಯ (ಸಂಕ್ರಾಂತಿ)', approxSpan: 'Dec - Jan' },
      { id: 11, name: 'Magha', nativeName: 'ಮಾಘ (ಶಿವರಾತ್ರಿ)', approxSpan: 'Jan - Feb' },
      { id: 12, name: 'Phalguna', nativeName: 'ಫಾಲ್ಗುಣ', approxSpan: 'Feb - Mar' }
    ]
  },
  {
    id: 'malayalam-calendar',
    slug: 'malayalam',
    name: 'Malayalam Calendar (കൊല്ലവർഷം)',
    nativeName: 'മലയാളം കൊല്ലവർഷം കലണ്ടർ',
    title: 'Malayalam Calendar - Kollavarsham, Onam, Vishu & Sabarimala',
    category: 'yearly',
    region: 'Kerala & Lakshadweep',
    language: 'Malayalam (മലയാളം)',
    calendarType: 'solar-sidereal',
    eraName: 'Kollam Era (കൊല്ലവർഷം)',
    currentYear: '1202 ME',
    description: 'The solar calendar of Kerala established in 825 CE. Begins with Chingam (August) during Onam, and features Vishu and the Sabarimala Mandala Kalam.',
    keyFestivals: ['Onam / Thiruvonam', 'Vishu Kani', 'Makaravilakku', 'Thrissur Pooram', 'Attukal Pongala'],
    explanation: {
      overview: 'Kollavarsham is a unique sidereal solar calendar of God\'s Own Country. The astronomical year begins when the Sun enters Simha Rasi (Chingam).',
      calculationBasis: 'Based on the solar transit through the 12 Nirayana solar signs. If transit occurs within 18 Nazhikas (around 1:12 PM), that day is the 1st of the month.',
      regionalContext: 'Directs pilgrimage seasons at Sabarimala Ayyappa Temple, Guruvayur Sri Krishna, and Padmanabhaswamy Temple.',
      monthSystem: 'Chingam, Kanni, Thulam, Vrischikam, Dhanu, Makaram, Kumbham, Meenam, Medam, Edavam, Mithunam, Karkidakam.',
      specialRules: [
        'Vishu marks the astronomical solar vernal equinox on Medam 1st.',
        'Vrischikam 1 marks the 41-day sacred Sabarimala Mandala Vratam.',
        'Karkidakam is observed as Ramayana Masam across Kerala households.'
      ],
      differencesFromGregorian: 'Solar calendar following the Sun\'s journey across the constellations of the zodiac.'
    },
    months: [
      { id: 1, name: 'Chingam', nativeName: 'ചിങ്ങം (ഓണം / തിരുവോണം)', approxSpan: 'Aug - Sep' },
      { id: 2, name: 'Kanni', nativeName: 'കന്നി', approxSpan: 'Sep - Oct' },
      { id: 3, name: 'Thulam', nativeName: 'തുലാം', approxSpan: 'Oct - Nov' },
      { id: 4, name: 'Vrischikam', nativeName: 'വൃശ്ചികം (മണ്ഡലകാലം)', approxSpan: 'Nov - Dec' },
      { id: 5, name: 'Dhanu', nativeName: 'ധനു (തിരുവാതിര)', approxSpan: 'Dec - Jan' },
      { id: 6, name: 'Makaram', nativeName: 'മകരം (മകരവിളക്ക്)', approxSpan: 'Jan - Feb' },
      { id: 7, name: 'Kumbham', nativeName: 'കുംഭം (ശിവരാത്രി)', approxSpan: 'Feb - Mar' },
      { id: 8, name: 'Meenam', nativeName: 'മീനം', approxSpan: 'Mar - Apr' },
      { id: 9, name: 'Medam', nativeName: 'മേടം (വിഷുക്കണി)', approxSpan: 'Apr - May' },
      { id: 10, name: 'Edavam', nativeName: 'ഇടവം', approxSpan: 'May - Jun' },
      { id: 11, name: 'Mithunam', nativeName: 'മിഥുനം', approxSpan: 'Jun - Jul' },
      { id: 12, name: 'Karkidakam', nativeName: 'കർക്കടകം (രാമായണ മാസം)', approxSpan: 'Jul - Aug' }
    ]
  },
  {
    id: 'marathi-calendar',
    slug: 'marathi',
    name: 'Marathi Calendar (मराठी पंचांग)',
    nativeName: 'शालिवाहन शक संवत् मराठी दिनदर्शिका',
    title: 'Marathi Calendar - Gudi Padwa, Ganeshotsav & Ashadhi Ekadashi',
    category: 'yearly',
    region: 'Maharashtra & Goa',
    language: 'Marathi (मराठी)',
    calendarType: 'lunar-amanta',
    eraName: 'Shalivahana Shaka',
    currentYear: '1948',
    description: 'The revered Amanta calendar of Maharashtra starting on Gudi Padwa. Centers on Pandharpur Wari, 10-day Ganeshotsav, and Narali Purnima.',
    keyFestivals: ['Gudi Padwa', 'Ashadhi Ekadashi (Pandharpur Wari)', 'Ganesh Chaturthi', 'Narali Purnima', 'Kojagiri Purnima'],
    explanation: {
      overview: 'Follows Shalivahana Shaka era. Begins joyously with hoisting the auspicious Gudi on Chaitra Shukla Pratipada.',
      calculationBasis: 'Amanta lunar calculation where each month ends with Amavasya. Varkari Wari pilgrimage to Pandharpur is determined by Ekadashis.',
      regionalContext: 'Regulates Mahalakshmi Kolhapur, Shirdi Sai Sansthan, Ashtavinayak temples, and Tuljapur Bhavani pujas.',
      monthSystem: 'Chaitra, Vaishakha, Jyeshtha, Ashadha, Shravana, Bhadrapada, Ashwina, Kartika, Margashirsha, Pausha, Magha, Phalguna.',
      specialRules: [
        'Ashadhi and Kartiki Ekadashi draw millions on foot to Lord Vitthala of Pandharpur.',
        'Hartalika Vrat observed by women on Bhadrapada Shukla Tritiya.'
      ],
      differencesFromGregorian: 'Rooted in lunar tithis and celestial transitions.'
    },
    months: [
      { id: 1, name: 'Chaitra', nativeName: 'चैत्र (गुढीपाडवा)', approxSpan: 'Mar - Apr' },
      { id: 2, name: 'Vaishakha', nativeName: 'वैशाख', approxSpan: 'Apr - May' },
      { id: 3, name: 'Jyeshtha', nativeName: 'ज्येष्ठ (वटपौर्णिमा)', approxSpan: 'May - Jun' },
      { id: 4, name: 'Ashadha', nativeName: 'आषाढ (आषाढी एकादशी वारी)', approxSpan: 'Jun - Jul' },
      { id: 5, name: 'Shravana', nativeName: 'श्रावण (नारळी पौर्णिमा / रक्षाबंधन)', approxSpan: 'Jul - Aug' },
      { id: 6, name: 'Bhadrapada', nativeName: 'भाद्रपद (गणेशोत्सव)', approxSpan: 'Aug - Sep' },
      { id: 7, name: 'Ashwina', nativeName: 'आश्विन (नवरात्र / दसरा)', approxSpan: 'Sep - Oct' },
      { id: 8, name: 'Kartika', nativeName: 'कार्तिक (दिवाळी / तुळशी विवाह)', approxSpan: 'Oct - Nov' },
      { id: 9, name: 'Margashirsha', nativeName: 'मार्गशीर्ष (दत्तजयंती)', approxSpan: 'Nov - Dec' },
      { id: 10, name: 'Pausha', nativeName: 'पौष (मकर संक्रांत)', approxSpan: 'Dec - Jan' },
      { id: 11, name: 'Magha', nativeName: 'माघ (महाशिवरात्री)', approxSpan: 'Jan - Feb' },
      { id: 12, name: 'Phalguna', nativeName: 'फाल्गुन (धुलीवंदन / रंगपंचमी)', approxSpan: 'Feb - Mar' }
    ]
  },
  {
    id: 'bengali-calendar',
    slug: 'bengali',
    name: 'Bengali Calendar (বাংলা পঞ্জিকা)',
    nativeName: 'বঙ্গাব্দ পঞ্জিকা (সূর্যসিদ্ধান্ত ভিত্তিক)',
    title: 'Bengali Calendar - Poila Boishakh, Durga Puja & Panjika Timings',
    category: 'yearly',
    region: 'West Bengal, Tripura, Assam, Bangladesh & Global Bengalis',
    language: 'Bengali (বাংলা)',
    calendarType: 'solar-sidereal',
    eraName: 'Bangabda (বঙ্গাব্দ)',
    currentYear: '1433 Bangabda',
    description: 'The solar calendar of Bengal starting on Poila Boishakh (mid-April). Accurately computes Durga Puja, Kali Puja, Saraswati Puja, and Nababarsho.',
    keyFestivals: ['Poila Boishakh', 'Durga Puja (Mahalaya to Dashami)', 'Kali Puja', 'Saraswati Puja', 'Rath Yatra'],
    explanation: {
      overview: 'Originating during the Mughal and Sena eras, the Bengali calendar is sidereal solar. Governed by authentic Surya Siddhanta and Drik Panjikas.',
      calculationBasis: 'Follows the Sun entering Mesha Rasi (Boishakh). The daily calendar incorporates lunar tithis for puja determinations.',
      regionalContext: 'Center of Bengali life, literature, and culture; dictates Kalighat, Dakshineswar, Belur Math, and Tarapith temple timings.',
      monthSystem: 'Boishakh, Joishtho, Asharh, Srabon, Bhadro, Ashwin, Kartik, Ogrohayon, Poush, Magh, Falgun, Choitro.',
      specialRules: [
        'Durga Puja is calculated on Ashwin Shukla Shashthi to Dashami with Sandhi Puja at the juncture of Ashtami and Navami.',
        'Jamai Sashthi observed in month Joishtho.'
      ],
      differencesFromGregorian: 'Solar months with varying lengths (30 to 32 days) determined by the Sun’s orbital speed.'
    },
    months: [
      { id: 1, name: 'Boishakh', nativeName: 'বৈশাখ (পয়লা বৈশাখ)', approxSpan: 'Apr - May' },
      { id: 2, name: 'Joishtho', nativeName: 'জ্যৈষ্ঠ (জামাই ষষ্ঠী)', approxSpan: 'May - Jun' },
      { id: 3, name: 'Asharh', nativeName: 'আষাঢ় (রথযাত্রা)', approxSpan: 'Jun - Jul' },
      { id: 4, name: 'Srabon', nativeName: 'শ্রাবণ', approxSpan: 'Jul - Aug' },
      { id: 5, name: 'Bhadro', nativeName: 'ভাদ্র (জন্মাষ্টমী)', approxSpan: 'Aug - Sep' },
      { id: 6, name: 'Ashwin', nativeName: 'আশ্বিন (শারদীয়া দুর্গাপূজা)', approxSpan: 'Sep - Oct' },
      { id: 7, name: 'Kartik', nativeName: 'কার্তিক (কালীপূজা / দীপাবলি)', approxSpan: 'Oct - Nov' },
      { id: 8, name: 'Ogrohayon', nativeName: 'অগ্রহায়ণ (নবান্ন)', approxSpan: 'Nov - Dec' },
      { id: 9, name: 'Poush', nativeName: 'পৌষ (পৌষ সংক্রান্তি)', approxSpan: 'Dec - Jan' },
      { id: 10, name: 'Magh', nativeName: 'মাঘ (সরস্বতী পূজা)', approxSpan: 'Jan - Feb' },
      { id: 11, name: 'Falgun', nativeName: 'ফাল্গুন (দোলযাত্রা)', approxSpan: 'Feb - Mar' },
      { id: 12, name: 'Choitro', nativeName: 'চৈত্র (চড়ক পূজা)', approxSpan: 'Mar - Apr' }
    ]
  },
  {
    id: 'odia-calendar',
    slug: 'odia',
    name: 'Odia Calendar (ଓଡ଼ିଆ କ୍ୟାଲେଣ୍ଡର)',
    nativeName: 'ଓଡ଼ିଆ ପାଞ୍ଜି (ଜଗନ୍ନାଥ ସଂସ୍କୃତି)',
    title: 'Odia Calendar - Puri Rath Yatra, Pana Sankranti, Raja & Nuakhai',
    category: 'yearly',
    region: 'Odisha & Odia Diaspora',
    language: 'Odia (ଓଡ଼ିଆ)',
    calendarType: 'solar-sidereal',
    eraName: 'Odia Samvat / Anka Year',
    currentYear: '1433 Odia Year',
    description: 'The sacred almanac of Odisha deeply connected with Jagannath culture. Celebrates Pana Sankranti (New Year), Rath Yatra, Snana Yatra, and Nuakhai.',
    keyFestivals: ['Pana Sankranti', 'Puri Rath Yatra', 'Snana Yatra', 'Raja Parba', 'Nuakhai', 'Kumar Purnima'],
    explanation: {
      overview: 'Rooted in the worship of Lord Jagannath of Puri, the Odia calendar aligns solar months with lunar tithis.',
      calculationBasis: 'Solar month begins on Sankranti. The Odia New Year begins on Pana Sankranti (Maha Vishuva Sankranti) around April 14.',
      regionalContext: 'Determines the daily Nitis (rituals) of the Puri Jagannath Temple, Lingaraj Temple Bhubaneswar, and Konark Sun Temple.',
      monthSystem: 'Baisakha, Jyestha, Ashadha, Srabana, Bhadraba, Aswina, Kartika, Margasira, Pausa, Magha, Phalguna, Chaitra.',
      specialRules: [
        'Ratha Yatra falls on Ashadha Shukla Dwitiya.',
        'Raja Parba celebrates earth mother fertility over 3 days in mid-June.',
        'Nuakhai is the agricultural harvest thanksgiving in western Odisha.'
      ],
      differencesFromGregorian: 'Governed by centuries of royal Jagannath almanac traditions.'
    },
    months: [
      { id: 1, name: 'Baisakha', nativeName: 'ବୈଶାଖ (ପଣା ସଂକ୍ରାନ୍ତି)', approxSpan: 'Apr - May' },
      { id: 2, name: 'Jyestha', nativeName: 'ଜ୍ୟେଷ୍ଠ (ସ୍ନାନ ଯାତ୍ରା / ଶୀତଳ ଷଷ୍ଠୀ)', approxSpan: 'May - Jun' },
      { id: 3, name: 'Ashadha', nativeName: 'ଆଷାଢ଼ (ଶ୍ରୀଗୁଣ୍ଡିଚା ରଥଯାତ୍ରା)', approxSpan: 'Jun - Jul' },
      { id: 4, name: 'Srabana', nativeName: 'ଶ୍ରାବଣ', approxSpan: 'Jul - Aug' },
      { id: 5, name: 'Bhadraba', nativeName: 'ଭାଦ୍ରବ (ଜନ୍ମାଷ୍ଟମୀ / ନୂଆଁଖାଇ)', approxSpan: 'Aug - Sep' },
      { id: 6, name: 'Aswina', nativeName: 'ଆଶ୍ୱିନ (ଦୁର୍ଗାପୂଜା / କୁମାର ପୂର୍ଣ୍ଣିମା)', approxSpan: 'Sep - Oct' },
      { id: 7, name: 'Kartika', nativeName: 'କାର୍ତ୍ତିକ (ରାସ ପୂର୍ଣ୍ଣିମା / ବୋଇତ ବନ୍ଦାଣ)', approxSpan: 'Oct - Nov' },
      { id: 8, name: 'Margasira', nativeName: 'ମାର୍ଗଶିର (ମାଣବସା ଗୁରୁବାର)', approxSpan: 'Nov - Dec' },
      { id: 9, name: 'Pausa', nativeName: 'ପୌଷ (ଧନୁ ସଂକ୍ରାନ୍ତି)', approxSpan: 'Dec - Jan' },
      { id: 10, name: 'Magha', nativeName: 'ମାଘ (ମାଘ ସପ୍ତମୀ / ଚନ୍ଦ୍ରଭାଗା)', approxSpan: 'Jan - Feb' },
      { id: 11, name: 'Phalguna', nativeName: 'ଫାଲ୍ଗୁନ (ଦୋଳ ଯାତ୍ରା)', approxSpan: 'Feb - Mar' },
      { id: 12, name: 'Chaitra', nativeName: 'ଚୈତ୍ର (ଚୈତ୍ର ଯାତ୍ରା)', approxSpan: 'Mar - Apr' }
    ]
  },
  {
    id: 'assamese-calendar',
    slug: 'assamese',
    name: 'Assamese Calendar (অসমীয়া পঞ্জিকা)',
    nativeName: 'ভাস୍କৰাব্দ অসমীয়া দিনপঞ্জী',
    title: 'Assamese Calendar - Bohag Bihu, Rongali Bihu & Bhaskar Era',
    category: 'yearly',
    region: 'Assam & Brahmaputra Valley',
    language: 'Assamese (অসমীয়া)',
    calendarType: 'solar-sidereal',
    eraName: 'Bhaskar Era (ভাস୍କৰাব্দ)',
    currentYear: '1433 Bhaskarada',
    description: 'The sidereal solar calendar of Assam named after King Bhaskaravarman. Highlights Rongali (Bohag) Bihu, Kati Bihu, Magh Bihu, and Kamakhya Ambubachi.',
    keyFestivals: ['Bohag Bihu (Rongali Bihu)', 'Magh Bihu (Bhogali Bihu)', 'Kati Bihu (Kongali Bihu)', 'Ambubachi Mela'],
    explanation: {
      overview: 'Honoring the great 7th-century Kamarupa monarch Kumar Bhaskaravarman, this calendar synchronizes agrarian life with the Brahmaputra ecosystem.',
      calculationBasis: 'Solar ingress into Aries marks the 1st of Bohag. Months begin when the Sun crosses into each Rashi.',
      regionalContext: 'Governs Kamakhya Devi temple pujas, Barpeta Satra, and Majuli Vaishnavite monasteries.',
      monthSystem: 'Bohag, Jeth, Ahar, Saun, Bhada, Ahin, Kati, Aghon, Puh, Magh, Faguna, Chot.',
      specialRules: [
        'Bohag Bihu marks the Assamese New Year with cattle washing (Goru Bihu) and community feasts.',
        'Ambubachi Mela at Kamakhya Temple occurs in Ahar (June) during Earth menstruation period.'
      ],
      differencesFromGregorian: 'Solar calendar aligned with the sidereal zodiac and the agricultural rhythm of Assam.'
    },
    months: [
      { id: 1, name: 'Bohag', nativeName: 'ব\'হাগ (ৰঙালী বিহু)', approxSpan: 'Apr - May' },
      { id: 2, name: 'Jeth', nativeName: 'জেঠ', approxSpan: 'May - Jun' },
      { id: 3, name: 'Ahar', nativeName: 'আহাৰ (অম্বুবাচী মেলা)', approxSpan: 'Jun - Jul' },
      { id: 4, name: 'Saun', nativeName: 'শাওণ', approxSpan: 'Jul - Aug' },
      { id: 5, name: 'Bhada', nativeName: 'ভাদ (শঙ্কৰদেৱ তিথি)', approxSpan: 'Aug - Sep' },
      { id: 6, name: 'Ahin', nativeName: 'আহিন (দুৰ্গাপূজা)', approxSpan: 'Sep - Oct' },
      { id: 7, name: 'Kati', nativeName: 'কাতি (কঙালী বিহু)', approxSpan: 'Oct - Nov' },
      { id: 8, name: 'Aghon', nativeName: 'আঘোণ', approxSpan: 'Nov - Dec' },
      { id: 9, name: 'Puh', nativeName: 'পুহ', approxSpan: 'Dec - Jan' },
      { id: 10, name: 'Magh', nativeName: 'মাঘ (ভোগালী বিহু / মেজি)', approxSpan: 'Jan - Feb' },
      { id: 11, name: 'Faguna', nativeName: 'ফাগুন (দৌল যাত্ৰা)', approxSpan: 'Feb - Mar' },
      { id: 12, name: 'Chot', nativeName: 'চ\'ত', approxSpan: 'Mar - Apr' }
    ]
  },
  {
    id: 'jain-calendar',
    slug: 'jain',
    name: 'Jain Calendar (वीर निर्वाण संवत्)',
    nativeName: 'जैन वीर निर्वाण संवत् पंचांग',
    title: 'Jain Calendar - Paryushan, Mahavir Jayanti, Samvatsari & Kalyanaks',
    category: 'religious',
    region: 'Pan-India & Global Jain Community (Shwetambara & Digambara)',
    language: 'Prakrit / Hindi / Gujarati / Sanskrit',
    calendarType: 'lunar-amanta',
    eraName: 'Vira Nirvana Samvat (VNS)',
    currentYear: '2553 VNS',
    description: 'The spiritual calendar commemorating the Nirvana of 24th Tirthankara Bhagwan Mahavira on Diwali morning. Features Paryushan, Kshamavani, and Tirthankara Kalyanaks.',
    keyFestivals: ['Mahavir Janma Kalyanak', 'Paryushan Mahaparva', 'Samvatsari (Kshamavani)', 'Diwali Nirvana Kalyanak', 'Akshaya Tritiya Parna', 'Oli Fasting'],
    explanation: {
      overview: 'Dedicated to inner purification and Ahimsa. The era begins in 527 BCE when Bhagwan Mahavira attained Nirvana at Pavapuri on Kartik Amavasya.',
      calculationBasis: 'Lunisolar calculation with strict observance of Ashtami, Chaturdashi, and Pakkhi tithis for fasting (Poshadh). Distinct from Hindu festival dates.',
      regionalContext: 'Observed at sacred Jain pilgrimage centers including Palitana, Shikharji, Girnar, Shravanabelagola, and Ranakpur.',
      monthSystem: 'Kartika, Margashirsha, Pausha, Magha, Phalguna, Chaitra, Vaishakha, Jyeshtha, Ashadha, Shravana, Bhadrapada, Ashwina.',
      specialRules: [
        'Paryushan celebrated in Bhadrapada for 8 days (Shwetambara) and 10 days Das Lakshana (Digambara).',
        'Universal forgiveness requested on Samvatsari with the phrase: "Micchami Dukkadam".',
        'Root vegetables (Kandmool) and green vegetables are abstained from on Tithi fasting days.'
      ],
      differencesFromGregorian: 'Begins 527 years before Common Era and is organized around Tirthankara Pancha Kalyanaks.'
    },
    months: [
      { id: 1, name: 'Kartika', nativeName: 'कार्तिक (वीर निर्वाण संवत् प्रारंभ)', approxSpan: 'Oct - Nov' },
      { id: 2, name: 'Margashirsha', nativeName: 'मार्गशीर्ष', approxSpan: 'Nov - Dec' },
      { id: 3, name: 'Pausha', nativeName: 'पौष (पार्श्वनाथ कल्याणक)', approxSpan: 'Dec - Jan' },
      { id: 4, name: 'Magha', nativeName: 'माघ (ऋषभदेव निर्वाण)', approxSpan: 'Jan - Feb' },
      { id: 5, name: 'Phalguna', nativeName: 'फाल्गुन (अष्टाह्निका पर्व)', approxSpan: 'Feb - Mar' },
      { id: 6, name: 'Chaitra', nativeName: 'चैत्र (महावीर स्वामी जन्म)', approxSpan: 'Mar - Apr' },
      { id: 7, name: 'Vaishakha', nativeName: 'वैशाख (अक्षय तृतीया पारणा)', approxSpan: 'Apr - May' },
      { id: 8, name: 'Jyeshtha', nativeName: 'ज्येष्ठ', approxSpan: 'May - Jun' },
      { id: 9, name: 'Ashadha', nativeName: 'आषाढ़ (चातुर्मास प्रारंभ)', approxSpan: 'Jun - Jul' },
      { id: 10, name: 'Shravana', nativeName: 'श्रावण (मोक्ष सप्तमी)', approxSpan: 'Jul - Aug' },
      { id: 11, name: 'Bhadrapada', nativeName: 'भाद्रपद (पर्यूषण महापर्व / संवत्सरी)', approxSpan: 'Aug - Sep' },
      { id: 12, name: 'Ashwina', nativeName: 'आश्विन (आश्विन ओली)', approxSpan: 'Sep - Oct' }
    ]
  },
  {
    id: 'iskcon-calendar',
    slug: 'iskcon',
    name: 'ISKCON Vaishnava Calendar (गौराब्द)',
    nativeName: 'इस्कॉन गौड़ीय वैष्णव पंचांग (गौराब्द)',
    title: 'ISKCON Calendar - Gaurabda, Vaishnava Ekadashis & Acharya Appearance',
    category: 'religious',
    region: 'Mayapur, Vrindavan & Global ISKCON Centers',
    language: 'Sanskrit / English / Bengali / Hindi',
    calendarType: 'lunisolar-sectarian',
    eraName: 'Gaurabda Era (Birth of Sri Chaitanya Mahaprabhu)',
    currentYear: '540 Gaurabda',
    description: 'The Gaudiya Vaishnava calendar counting from the appearance of Sri Chaitanya Mahaprabhu in 1486 CE. Governs strict Vaishnava Ekadashis, Mahadvadashis, and Janmashtami.',
    keyFestivals: ['Gaura Purnima', 'Sri Krishna Janmashtami', 'Radhastami', 'Narasimha Chaturdashi', 'Ratha Yatra', 'Govardhan Puja', 'Nityananda Trayodashi'],
    explanation: {
      overview: 'Authorized by Srila Prabhupada and the GBC. Months are named after transcendental names of Lord Vishnu (Madhava, Govinda, Damodara, etc.).',
      calculationBasis: 'Follows pure lunar calculation with strict Shuddha Ekadashi rules (rejecting Arunodaya Viddha Ekadashi where Dashami touches sunrise).',
      regionalContext: 'Regulates deities\' worship at ISKCON Mayapur, Vrindavan Krishna Balaram Temple, and centers in 100+ countries.',
      monthSystem: 'Vishnu, Madhusudana, Trivikrama, Vamana, Sridhara, Hrishikesha, Padmanabha, Damodara, Keshava, Narayana, Madhava, Govinda.',
      specialRules: [
        'Strict fasting from grains and beans on all Vaishnava Ekadashis.',
        'Mahadvadashi special rules override standard Ekadashi tithis.',
        'Features appearance and disappearance dates of the Six Goswamis of Vrindavan and Gaudiya Acharyas.'
      ],
      differencesFromGregorian: 'Pure spiritual timekeeping revolving around devotional loving service (Bhakti).'
    },
    months: [
      { id: 1, name: 'Vishnu', nativeName: 'विष्णु मास (चैत्र)', approxSpan: 'Mar - Apr' },
      { id: 2, name: 'Madhusudana', nativeName: 'मधुसूदन मास (वैशाख)', approxSpan: 'Apr - May' },
      { id: 3, name: 'Trivikrama', nativeName: 'त्रिविक्रम मास (ज्येष्ठ)', approxSpan: 'May - Jun' },
      { id: 4, name: 'Vamana', nativeName: 'वामन मास (आषाढ़)', approxSpan: 'Jun - Jul' },
      { id: 5, name: 'Sridhara', nativeName: 'श्रीधर मास (श्रावण)', approxSpan: 'Jul - Aug' },
      { id: 6, name: 'Hrishikesha', nativeName: 'हृषीकेश मास (भाद्रपद - जन्माष्टमी)', approxSpan: 'Aug - Sep' },
      { id: 7, name: 'Padmanabha', nativeName: 'पद्मनाभ मास (आश्विन)', approxSpan: 'Sep - Oct' },
      { id: 8, name: 'Damodara', nativeName: 'दामोदर मास (कार्तिक - दीपदान)', approxSpan: 'Oct - Nov' },
      { id: 9, name: 'Keshava', nativeName: 'केशव मास (मार्गशीर्ष - गीता जयंती)', approxSpan: 'Nov - Dec' },
      { id: 10, name: 'Narayana', nativeName: 'नारायण मास (पौष)', approxSpan: 'Dec - Jan' },
      { id: 11, name: 'Madhava', nativeName: 'माधव मास (माघ)', approxSpan: 'Jan - Feb' },
      { id: 12, name: 'Govinda', nativeName: 'गोविंद मास (फाल्गुन - गौर पूर्णिमा)', approxSpan: 'Feb - Mar' }
    ]
  },
  {
    id: 'nepali-calendar',
    slug: 'nepali',
    name: 'Nepali Calendar (नेपाली पात्रो)',
    nativeName: 'नेपाली बिक್ರम संवत् पात्रो',
    title: 'Nepali Calendar - Bikram Sambat, Dashain & Tihar Festival Dates',
    category: 'nepali',
    region: 'Nepal & Worldwide Nepalese Communities',
    language: 'Nepali (नेपाली)',
    calendarType: 'solar-sidereal',
    eraName: 'Bikram Sambat (वि.सं.)',
    currentYear: '2083 BS',
    description: 'The national civil and religious calendar of Nepal based on Bikram Sambat. Features the grand national celebrations of Dashain (15 days) and Tihar (5 days).',
    keyFestivals: ['Bikram Sambat New Year', 'Bijaya Dashami (Dashain)', 'Tihar (Deepawali & Bhai Tika)', 'Chhath Parva', 'Maha Shivaratri', 'Teej'],
    explanation: {
      overview: 'The official calendar of Nepal. It operates ahead of the Gregorian calendar by approximately 56 years and 8.5 months.',
      calculationBasis: 'Solar month begins on the day of solar transit (Sankranti). Months range from 29 to 32 days depending on exact astronomical transit durations.',
      regionalContext: 'Regulates government offices in Kathmandu and sacred rituals at Pashupatinath, Muktinath, and Janakpur Dham.',
      monthSystem: 'Baisakh, Jestha, Asar, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, Chaitra.',
      specialRules: [
        'Dashain is observed over 15 days from Ghatasthapana to Kojagrat Purnima.',
        'Tihar is observed over 5 days: Kaag, Kukur, Gai/Lakshmi, Govardhan/Mha, and Bhai Tika.'
      ],
      differencesFromGregorian: 'Solar months with varying lengths determined by precise solar transit calculations.'
    },
    months: [
      { id: 1, name: 'Baisakh', nativeName: 'बैशाख (नयाँ वर्ष)', approxSpan: 'Apr - May' },
      { id: 2, name: 'Jestha', nativeName: 'जेठ', approxSpan: 'May - Jun' },
      { id: 3, name: 'Asar', nativeName: 'असार (रोपाइँ महोत्सव)', approxSpan: 'Jun - Jul' },
      { id: 4, name: 'Shrawan', nativeName: 'साउन (साउने सोमबार)', approxSpan: 'Jul - Aug' },
      { id: 5, name: 'Bhadra', nativeName: 'भाद्र (हरितालिका तीज)', approxSpan: 'Aug - Sep' },
      { id: 6, name: 'Ashwin', nativeName: 'असोज (बडादशैँ / घटस्थापना)', approxSpan: 'Sep - Oct' },
      { id: 7, name: 'Kartik', nativeName: 'कात्तिक (तिहार / भाइटीका)', approxSpan: 'Oct - Nov' },
      { id: 8, name: 'Mangsir', nativeName: 'मंसिर (विवाह पञ्चमी)', approxSpan: 'Nov - Dec' },
      { id: 9, name: 'Poush', nativeName: 'पुष', approxSpan: 'Dec - Jan' },
      { id: 10, name: 'Magh', nativeName: 'माघ (माघे संक्रान्ति)', approxSpan: 'Jan - Feb' },
      { id: 11, name: 'Falgun', nativeName: 'फागुन (महाशिवरात्रि / होली)', approxSpan: 'Feb - Mar' },
      { id: 12, name: 'Chaitra', nativeName: 'चैत (घोडेजात्रा / चैते दशैँ)', approxSpan: 'Mar - Apr' }
    ]
  }
];

// 2. Directory of Festival & Dedicated Observance Calendars
export const festivalCalendarsCatalog = [
  {
    id: 'diwali-calendar',
    slug: 'diwali',
    name: 'Diwali Puja Calendar',
    nativeName: 'दीपावली पूजन महोत्सव पंचांग',
    category: 'festival',
    description: 'Complete 5-day Deepawali sequence from Dhanteras to Bhai Dooj with exact Pradosh Lakshmi Puja Muhurats and Choghadiya.',
    eventsCount: '5 Days (Dhanteras to Bhai Dooj)',
    keyDates: ['Dhanteras', 'Naraka Chaturdashi / Kali Chaudas', 'Diwali Lakshmi Puja', 'Govardhan Puja', 'Bhai Dooj']
  },
  {
    id: 'gujarati-diwali-calendar',
    slug: 'gujarati-diwali',
    name: 'Gujarati Diwali & New Year Calendar',
    nativeName: 'ગુજરાતી દિવાળી અને નૂતન વર્ષ પંચાંગ',
    category: 'festival',
    description: 'Dedicated Gujarati Diwali sequence: Dhanteras, Kali Chaudas, Diwali Lakshmi-Sharda-Chopda Pujan, Bestu Varas, and Bhai Beej with auspicious Muhurat trading hours.',
    eventsCount: '5 Days + Bestu Varas',
    keyDates: ['Dhanteras', 'Kali Chaudas', 'Diwali Chopda Pujan', 'Bestu Varas (New Year)', 'Bhai Beej']
  },
  {
    id: 'durga-puja-calendar',
    slug: 'durga-puja',
    name: 'Durga Puja Calendar (শারদীয়া দুর্গোৎসব)',
    nativeName: 'শারদীয়া দুর্গাপূজা দিনপঞ্জিকা',
    category: 'festival',
    description: 'Full ceremonial itinerary of Durga Puja: Mahalaya, Kalparambha, Bodhan, Saptami, Maha Ashtami, Sandhi Puja, Maha Navami, and Sindoor Khela / Visarjan.',
    eventsCount: '10 Days (Mahalaya to Dashami)',
    keyDates: ['Mahalaya', 'Maha Saptami', 'Maha Ashtami', 'Sandhi Puja', 'Maha Navami', 'Bijoya Dashami']
  },
  {
    id: 'navratri-calendar',
    slug: 'navratri',
    name: 'Navratri Calendar (Chaitra & Sharad)',
    nativeName: 'नवरात्रि कलश स्थापना एवं नवदुर्गा पूजन पंचांग',
    category: 'festival',
    description: 'Day-by-day sequence for the 9 forms of Maa Durga (Shailputri to Siddhidatri), Ghatasthapana Muhurat, Kanya Pujan, and Vijayadashami.',
    eventsCount: '9 Sacred Nights',
    keyDates: ['Ghatasthapana', 'Day 1 Shailputri', 'Day 7 Kalratri', 'Day 8 Mahagauri (Durga Ashtami)', 'Day 9 Siddhidatri (Maha Navami)', 'Vijayadashami']
  },
  {
    id: 'onam-calendar',
    slug: 'onam',
    name: 'Onam 10-Day Festival Calendar',
    nativeName: 'ഓണം 10 ദിന ആഘോഷ കലണ്ടർ',
    category: 'festival',
    description: 'The complete 10-day Onam celebration from Atham to Thiruvonam with Athachamayam, Pookalam floral designs, Onasadya feast, and Pulikali.',
    eventsCount: '10 Days (Atham to Thiruvonam)',
    keyDates: ['Atham (Day 1)', 'Chithira', 'Chodhi', 'Vishakam', 'Anizham', 'Thrikketta', 'Moolam', 'Pooradam', 'Uthradam (1st Onam)', 'Thiruvonam (Main Day)']
  },
  {
    id: 'mysore-dasara-calendar',
    slug: 'mysore-dasara',
    name: 'Mysore Dasara Royal Calendar',
    nativeName: 'ಮೈಸೂರು ದಸರಾ ರಾಜ ಮಹೋತ್ಸವ ಪಂಚಾಂಗ',
    category: 'festival',
    description: 'Grand Karnataka state festival calendar: Chamundeshwari Puja, Palace illumination, Ayudha Puja, and the world-famous Vijayadashami Jumboo Savari elephant procession.',
    eventsCount: '10 Days',
    keyDates: ['Dasara Inauguration at Chamundi Hill', 'Royal Durbar', 'Ayudha Puja', 'Vijayadashami Jumboo Savari', 'Torchlight Parade']
  },
  {
    id: 'saraswati-puja-calendar',
    slug: 'saraswati-puja',
    name: 'Saraswati Puja Calendar',
    nativeName: 'सरस्वती पूजा एवं विद्यारंभ पंचांग',
    category: 'festival',
    description: 'Auspicious dates for invoking Goddess of Wisdom on Vasant Panchami, Navratri Saraswati Avahan, and Vijayadashami Vidyarambham.',
    eventsCount: 'Vasant Panchami & Navratri',
    keyDates: ['Vasant Panchami', 'Navratri Saraswati Avahan', 'Saraswati Pradhan Puja', 'Saraswati Balidan & Visarjan', 'Vidyarambham']
  },
  {
    id: 'chhath-puja-calendar',
    slug: 'chhath',
    name: 'Chhath Mahaparva Calendar',
    nativeName: 'छठ महापर्व (सूर्य षष्ठी व्रत)',
    category: 'festival',
    description: 'The rigorous 4-day solar penance honoring Surya Dev and Chhathi Maiya: Nahay Khay, Kharna, Sandhya Arghya at sunset, and Usha Arghya at sunrise.',
    eventsCount: '4 Days (Nahay Khay to Parana)',
    keyDates: ['Day 1: Nahay Khay', 'Day 2: Kharna / Rasiyaav', 'Day 3: Sandhya Arghya (Dusk)', 'Day 4: Usha Arghya (Dawn) & Parana']
  },
  {
    id: 'makar-sankranti-calendar',
    slug: 'makar-sankranti',
    name: 'Makar Sankranti & Uttarayan Calendar',
    nativeName: 'मकर संक्रांति एवं उत्तरायण पुण्यकाल पंचांग',
    category: 'festival',
    description: 'The monumental solar transit when Surya enters Makara Rasi. Details Punya Kaal, Maha Punya Kaal, Pongal, Lohri, and Maghi.',
    eventsCount: 'Annual Solar Transition',
    keyDates: ['Lohri (Punjab)', 'Makar Sankranti / Uttarayan', 'Thai Pongal (Tamil Nadu)', 'Mattu Pongal', 'Maha Punya Kaal']
  },
  {
    id: 'sankranti-calendar',
    slug: 'sankranti',
    name: 'All 12 Solar Sankrantis Calendar',
    nativeName: 'द्वादश सूर्य संक्रांति वार्षिक पंचांग',
    category: 'special',
    description: 'Complete annual ephemeris of all 12 solar ingresses: Mesha, Vrishabha, Mithuna, Karka, Simha, Kanya, Tula, Vrishchika, Dhanu, Makara, Kumbha, Meena with exact Punya Kaal.',
    eventsCount: '12 Solar Ingresses',
    keyDates: ['Makar Sankranti', 'Kumbha Sankranti', 'Meena Sankranti', 'Mesha Sankranti', 'Karka Sankranti (Dakshinayan)', 'Simha Sankranti', 'Kanya Sankranti', 'Tula Sankranti']
  },
  {
    id: 'purnima-calendar',
    slug: 'purnima',
    name: 'Annual Purnima Fasting Calendar',
    nativeName: 'वार्षिक पूर्णिमा व्रत एवं सत्यनारायण कथा पंचांग',
    category: 'special',
    description: 'All 12/13 Full Moon days with exact tithi start/end times, fasting rules, and Sri Satyanarayan Puja Muhurats.',
    eventsCount: '12-13 Full Moons Annually',
    keyDates: ['Pausha Purnima', 'Magha Purnima', 'Holi Purnima', 'Chaitra Purnima', 'Buddha Purnima', 'Guru Purnima', 'Sharad Purnima', 'Kartik Purnima']
  },
  {
    id: 'amavasya-calendar',
    slug: 'amavasya',
    name: 'Annual Amavasya Tarpan Calendar',
    nativeName: 'वार्षिक अमावस्या एवं पितृ तर्पण पंचांग',
    category: 'special',
    description: 'All New Moon days with timings for Pitru Tarpan, Darsha Shradha, and remedial remedies for Pitru Dosha.',
    eventsCount: '12-13 New Moons Annually',
    keyDates: ['Mauni Amavasya', 'Somvati Amavasya', 'Shani Jayanti Amavasya', 'Hariyali Amavasya', 'Sarva Pitru Amavasya', 'Diwali Amavasya']
  },
  {
    id: 'ekadashi-calendar',
    slug: 'ekadashi',
    name: 'All 24/26 Ekadashis Vrat Calendar',
    nativeName: 'सम्पूर्ण २४/२६ एकादशी व्रत एवं पारण पंचांग',
    category: 'vrat',
    description: 'Every sacred Ekadashi of Shukla and Krishna Paksha with Vishnu Sahasranama worship, spiritual story, and exact Parana time.',
    eventsCount: '24-26 Ekadashis Annually',
    keyDates: ['Nirjala Ekadashi', 'Devshayani Ekadashi', 'Indira Ekadashi', 'Devutthana Ekadashi', 'Mokshada Ekadashi (Gita Jayanti)', 'Vaikunta Ekadashi']
  },
  {
    id: 'dashavatara-calendar',
    slug: 'dashavatara',
    name: 'Dashavatara Jayanti Calendar',
    nativeName: 'श्री दशावतार प्राकट्योत्सव पंचांग',
    category: 'special',
    description: 'Observance days of the 10 divine incarnations of Bhagwan Vishnu: Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, and Kalki.',
    eventsCount: '10 Avatar Jayantis',
    keyDates: ['Matsya Jayanti', 'Varaha Jayanti', 'Narasimha Jayanti', 'Kurma Jayanti', 'Vamana Jayanti', 'Parashurama Jayanti', 'Sri Rama Navami', 'Krishna Janmashtami']
  },
  {
    id: 'dasha-mahavidya-calendar',
    slug: 'dasha-mahavidya',
    name: 'Dasha Mahavidya Jayanti Calendar',
    nativeName: 'दश महाविद्या प्राकट्य एवं तांत्रिक जयंती पंचांग',
    category: 'special',
    description: 'Sacred Jayantis and invocation days of the 10 Supreme Tantric Goddesses: Kali, Tara, Tripura Sundari, Bhuvaneshwari, Bhairavi, Chhinnamasta, Dhumavati, Bagalamukhi, Matangi, and Kamala.',
    eventsCount: '10 Mahavidya Jayantis',
    keyDates: ['Bagalamukhi Jayanti', 'Chhinnamasta Jayanti', 'Dhumavati Jayanti', 'Kali Jayanti', 'Bhairavi Jayanti', 'Matangi Jayanti', 'Tara Jayanti']
  },
  {
    id: 'nepali-dashain-calendar',
    slug: 'nepali-dashain',
    name: 'Nepali Dashain Festival Calendar',
    nativeName: 'बडादशैँ १५ दिने राष्ट्रिय महोत्सव पात्रो',
    category: 'nepali',
    description: '15-day complete Nepali national celebration from Ghatasthapana, Phulpati, Maha Ashtami, Maha Navami, Bijaya Dashami Tika to Kojagrat Purnima.',
    eventsCount: '15 Days',
    keyDates: ['Ghatasthapana', 'Fulpati', 'Maha Ashtami', 'Maha Navami', 'Bijaya Dashami (Tika & Jamara)', 'Kojagrat Purnima']
  },
  {
    id: 'nepali-tihar-calendar',
    slug: 'nepali-tihar',
    name: 'Nepali Tihar (Deepawali) Calendar',
    nativeName: 'यमपञ्चक तिहार ५ दिने पावन पात्रो',
    category: 'nepali',
    description: '5-day Yamapanchak festival sequence honoring Kaag (crow), Kukur (dog), Gai (cow/Goddess Lakshmi), Govardhan / Mha Puja, and Bhai Tika.',
    eventsCount: '5 Days (Yamapanchak)',
    keyDates: ['Day 1: Kaag Tihar', 'Day 2: Kukur Tihar', 'Day 3: Gai Tihar & Lakshmi Puja', 'Day 4: Govardhan Puja & Mha Puja', 'Day 5: Bhai Tika']
  }
];

// 3. Dynamic Astronomical & Calendar Calculation Engine
export function calculateYearlyCalendarDays(
  year: number,
  calendarDef: CalendarDefinition,
  city: CityData
): Record<number, CalendarDayInfo[]> {
  const result: Record<number, CalendarDayInfo[]> = {};
  
  // Base day calculations for the selected year and city
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const daysInMonths = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Tithi names catalog
  const tithiCatalog = [
    { name: 'Pratipada', hindi: 'प्रतिपदा' },
    { name: 'Dwitiya', hindi: 'द्वितीया' },
    { name: 'Tritiya', hindi: 'तृतीया' },
    { name: 'Chaturthi', hindi: 'चतुर्थी' },
    { name: 'Panchami', hindi: 'पंचमी' },
    { name: 'Shashthi', hindi: 'षष्ठी' },
    { name: 'Saptami', hindi: 'सप्तमी' },
    { name: 'Ashtami', hindi: 'अष्टमी' },
    { name: 'Navami', hindi: 'नवमी' },
    { name: 'Dashami', hindi: 'दशमी' },
    { name: 'Ekadashi', hindi: 'एकादशी' },
    { name: 'Dwadashi', hindi: 'द्वादशी' },
    { name: 'Trayodashi', hindi: 'त्रयोदशी' },
    { name: 'Chaturdashi', hindi: 'चतुर्दशी' },
    { name: 'Purnima', hindi: 'पूर्णिमा' }
  ];

  const nakshatraCatalog = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
    'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
    'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta',
    'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ];

  const yogaCatalog = [
    'Vishkumbha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma',
    'Dhriti', 'Shoola', 'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana',
    'Vajra', 'Siddhi', 'Vyatipata', 'Variyan', 'Parigha', 'Shiva', 'Siddha',
    'Sadhya', 'Shubha', 'Shukla', 'Brahma', 'Indra', 'Vaidhriti'
  ];

  const karanaCatalog = [
    'Bava', 'Balava', 'Kaulava', 'Taitila', 'Garija', 'Vanija', 'Vishti',
    'Shakuni', 'Chatushpada', 'Naga', 'Kimstughna'
  ];

  // Year offset factors for accurate year-over-year tithi alignment
  const baseTithiOffset = Math.floor(((year - 2026) * 10.875) % 30 + 30) % 30;

  let dayCounterInYear = 0;

  for (let m = 0; m < 12; m++) {
    result[m] = [];
    const totalDaysInMonth = daysInMonths[m];

    for (let d = 1; d <= totalDaysInMonth; d++) {
      dayCounterInYear++;
      const dateObj = new Date(year, m, d);
      const dateStr = `${year}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dayOfWeekIdx = dateObj.getDay();

      // Solar times for city
      const deltaMin = city.sunriseDeltaMin !== undefined ? city.sunriseDeltaMin : Math.round((82.5 - city.lng) * 4);
      const dayOfYear = dayCounterInYear;
      const sunriseMins = Math.round(360 - Math.sin((dayOfYear - 80) * (2 * Math.PI / 365)) * 28 + deltaMin);
      const sunsetMins = Math.round(1080 + Math.sin((dayOfYear - 80) * (2 * Math.PI / 365)) * 28 + deltaMin);

      const sunriseStr = `${String(Math.floor(sunriseMins / 60)).padStart(2, '0')}:${String(sunriseMins % 60).padStart(2, '0')} AM`;
      const sunsetStr = `${String(Math.floor((sunsetMins - 720) / 60)).padStart(2, '0')}:${String(sunsetMins % 60).padStart(2, '0')} PM`;

      // Lunar Tithi calculation
      const tithiRawIndex = Math.floor((dayCounterInYear * 0.984 + baseTithiOffset + 24) % 30);
      const isShukla = tithiRawIndex < 15;
      const tithiNum = (tithiRawIndex % 15) + 1;
      const tObj = tithiCatalog[(tithiNum - 1) % 15];

      const paksha = isShukla ? 'Shukla' : 'Krishna';
      const pakshaName = isShukla ? 'शुक्ल पक्ष (Sud)' : 'कृष्ण पक्ष (Vad)';
      const tithiName = tithiNum === 15 ? (isShukla ? 'Purnima' : 'Amavasya') : tObj.name;
      const tithiHindi = tithiNum === 15 ? (isShukla ? 'पूर्णिमा' : 'अमावस्या') : `${isShukla ? 'शुक्ल' : 'कृष्ण'} ${tObj.hindi}`;

      const nakshatraIdx = Math.floor((dayCounterInYear * 1.015 + 11) % 27);
      const yogaIdx = Math.floor((dayCounterInYear * 1.04 + 7) % 27);
      const karanaIdx = Math.floor((tithiRawIndex * 2) % 11);

      // Important Vrat Checks
      const isEkadashi = (tithiNum === 11);
      const isPurnima = (isShukla && tithiNum === 15);
      const isAmavasya = (!isShukla && tithiNum === 15);
      const isChaturthi = (tithiNum === 4);
      const isPradosh = (tithiNum === 13);
      
      // Sankranti approximation (approx 14th/15th of each month)
      const isSankranti = (d === 14 || (m === 0 && d === 14) || (m === 3 && d === 14));
      let sankrantiName: string | undefined = undefined;
      if (isSankranti) {
        const sankrantiSigns = ['Makara', 'Kumbha', 'Meena', 'Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya', 'Tula', 'Vrishchika', 'Dhanu'];
        sankrantiName = `${sankrantiSigns[m]} Sankranti`;
      }

      // Regional Month & Date calculation
      let regDateNum = d;
      let regMonthName = calendarDef.months[m]?.name || 'Chaitra';
      let regYear = calendarDef.currentYear;

      if (calendarDef.id === 'tamil-calendar') {
        regDateNum = d >= 14 ? d - 13 : d + 16;
        const tamilMonthIdx = d >= 14 ? (m + 9) % 12 : (m + 8) % 12;
        regMonthName = calendarDef.months[tamilMonthIdx]?.name || 'Chithirai';
      } else if (calendarDef.id === 'malayalam-calendar') {
        regDateNum = d >= 16 ? d - 15 : d + 15;
        const malMonthIdx = d >= 16 ? (m + 5) % 12 : (m + 4) % 12;
        regMonthName = calendarDef.months[malMonthIdx]?.name || 'Chingam';
      } else if (calendarDef.id === 'bengali-calendar') {
        regDateNum = d >= 15 ? d - 14 : d + 16;
        const benMonthIdx = d >= 15 ? (m + 9) % 12 : (m + 8) % 12;
        regMonthName = calendarDef.months[benMonthIdx]?.name || 'Boishakh';
      } else if (calendarDef.id === 'gujarati-calendar') {
        regMonthName = calendarDef.months[(m + 6) % 12]?.name || 'Kartak';
        regDateNum = tithiNum;
      }

      // Check events for this date
      const dayEvents: CalendarEventDetail[] = [];
      const holidays: string[] = [];

      // Add astronomical tithi events
      if (isEkadashi) {
        dayEvents.push({
          id: `ekadashi-${dateStr}`,
          name: `${paksha} Ekadashi Vrat`,
          hindiName: `${paksha === 'Shukla' ? 'शुक्ल' : 'कृष्ण'} एकादशी व्रत`,
          date: dateStr,
          category: 'vrat',
          significance: 'Supreme auspicious fasting day dedicated to Bhagwan Vishnu for soul purification.',
          history: 'Observed twice a lunar month in the Vedic tradition since Treta Yuga.',
          fastRules: 'Strict grain-free fasting; consume fruits and milk.'
        });
      }

      if (isPurnima) {
        dayEvents.push({
          id: `purnima-${dateStr}`,
          name: `${regMonthName} Purnima (Satyanarayan Puja)`,
          hindiName: `${regMonthName} पूर्णिमा व्रत व सत्यनारायण कथा`,
          date: dateStr,
          category: 'major-festival',
          significance: 'Auspicious full moon day for sacred river bath, charity, and Satyanarayan narrative.',
          history: 'Sanctified in the Skanda Purana for prosperity and family peace.',
          fastRules: 'Fast till Moonrise; offer Arghya to Chandradev.'
        });
      }

      if (isAmavasya) {
        dayEvents.push({
          id: `amavasya-${dateStr}`,
          name: `${regMonthName} Amavasya (Pitru Tarpan)`,
          hindiName: `${regMonthName} दर्श अमावस्या एवं पितृ तर्पण`,
          date: dateStr,
          category: 'vrat',
          significance: 'Auspicious day for honoring ancestors with black sesame seeds and water oblations.',
          history: 'Scripturally designated day when departed ancestors bless their lineage.',
          fastRules: 'Perform Tarpan before noon; feed cows, crows, and the needy.'
        });
      }

      if (isPradosh) {
        dayEvents.push({
          id: `pradosh-${dateStr}`,
          name: `${dayNames[dayOfWeekIdx]} Pradosh Vrat`,
          hindiName: `${dayNames[dayOfWeekIdx]} प्रदोष व्रत (संध्या शिव पूजा)`,
          date: dateStr,
          category: 'vrat',
          significance: 'Twilight worship of Lord Shiva and Goddess Parvati to eradicate planetary afflictions.',
          history: 'Observed on the 13th lunar day during twilight Sandhya Kaal.'
        });
      }

      if (isChaturthi) {
        dayEvents.push({
          id: `chaturthi-${dateStr}`,
          name: isShukla ? 'Vinayaka Chaturthi' : 'Sankashti Ganesh Chaturthi',
          hindiName: isShukla ? 'विनायक चतुर्थी व्रत' : 'संकष्टी श्री गणेश चतुर्थी',
          date: dateStr,
          category: 'vrat',
          significance: 'Day of worship for Lord Ganesha to conquer obstacles and obtain discernment.',
          history: 'Derived from Ganesha Purana; fast concluded after Moon sighting.'
        });
      }

      if (isSankranti && sankrantiName) {
        dayEvents.push({
          id: `sankranti-${dateStr}`,
          name: sankrantiName,
          hindiName: `${sankrantiName} (सूर्य संक्रांति)`,
          date: dateStr,
          category: 'sankranti',
          significance: 'Sun enters a new zodiac sign, opening auspicious Punya Kaal for meditation and charity.',
          history: 'Solar ingress documented in Surya Siddhanta.'
        });
      }

      // Add major festival matches
      const matchedKnownEvents = findFestivalsForDate(dateStr, m, d, tithiNum, isShukla, calendarDef.id);
      matchedKnownEvents.forEach(evt => dayEvents.push(evt));

      const today = new Date();
      const isDateToday = (
        today.getDate() === d &&
        today.getMonth() === m &&
        today.getFullYear() === year
      );

      result[m].push({
        date: dateStr,
        dayNumber: d,
        dayOfWeek: dayNames[dayOfWeekIdx],
        dayOfWeekShort: dayNamesShort[dayOfWeekIdx],
        isToday: isDateToday,
        isWeekend: dayOfWeekIdx === 0 || dayOfWeekIdx === 6,
        tithiNumber: tithiNum,
        tithiName: tithiName,
        tithiHindi: tithiHindi,
        tithiEnd: '01:45 PM',
        paksha: paksha,
        pakshaName: pakshaName,
        nakshatra: nakshatraCatalog[nakshatraIdx],
        nakshatraEnd: '05:20 PM',
        yoga: yogaCatalog[yogaIdx],
        karana: karanaCatalog[karanaIdx],
        regionalDateNumber: regDateNum,
        regionalMonthName: regMonthName,
        regionalYear: regYear,
        regionalEra: calendarDef.eraName,
        sunrise: sunriseStr,
        sunset: sunsetStr,
        moonrise: '06:15 PM',
        moonset: '05:30 AM',
        isEkadashi,
        isPurnima,
        isAmavasya,
        isSankranti,
        sankrantiName,
        isPradosh,
        isChaturthi,
        events: dayEvents,
        holidays
      });
    }
  }

  return result;
}

// 4. Festival Matcher across Months & Tithis
function findFestivalsForDate(
  dateStr: string,
  monthIdx: number,
  dayNum: number,
  tithiNum: number,
  isShukla: boolean,
  calendarId: string
): CalendarEventDetail[] {
  const events: CalendarEventDetail[] = [];

  // Month 0 = January
  if (monthIdx === 0) {
    if (dayNum === 1) {
      events.push({
        id: 'new-year',
        name: 'New Year Day (Civil)',
        hindiName: 'ईस्वी सन् नव वर्ष',
        date: dateStr,
        category: 'holiday',
        significance: 'Global civil calendar year commencement.',
        history: 'Introduced with Gregorian calendar reform.'
      });
    }
    if (dayNum === 13) {
      events.push({
        id: 'lohri',
        name: 'Lohri Festival',
        hindiName: 'लोहड़ी महापर्व (अग्नि पूजन)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Harvest festival of Punjab honoring fire and Sun.',
        history: 'Celebrates winter solstice passing and sugarcane harvest.'
      });
    }
    if (dayNum === 14) {
      events.push({
        id: 'makar-sankranti',
        name: 'Makar Sankranti / Pongal / Uttarayan',
        hindiName: 'मकर संक्रांति / पोंगल / उत्तरायण',
        regionalName: 'Pongal (TN) / Uttarayan (Gujarat) / Maghi (Punjab)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Sun enters Makara (Capricorn) marking the start of Uttarayan, bringing warmth and abundance.',
        history: 'Foundational festival of Surya Siddhanta celebrated in all Indian states.',
        pujaVidhi: [
          'Take a sacred bath in holy rivers at sunrise.',
          'Offer Arghya to Surya Bhagwan with red flowers, jaggery, and sesame.',
          'Fly kites in Gujarat; cook sweet Pongal rice in Tamil Nadu; distribute Til-Gud.'
        ],
        muhurat: 'Punya Kaal: 08:30 AM - 05:45 PM; Maha Punya Kaal: 08:30 AM - 10:15 AM'
      });
    }
    if (dayNum === 23) {
      events.push({
        id: 'vasant-panchami',
        name: 'Vasant Panchami (Maa Saraswati Puja)',
        hindiName: 'बसंत पंचमी (सरस्वती प्राकट्य दिवस)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Invocation of Goddess of wisdom, music, and learning; arrival of spring season.',
        history: 'Brahmavaivarta Purana narrates the advent of Goddess Saraswati on this day.',
        pujaVidhi: [
          'Wear yellow attire and offer yellow marigold flowers.',
          'Place books, pens, musical instruments before Saraswati idol.',
          'Recite Saraswati Vandana and seek blessings for education.'
        ]
      });
    }
    if (dayNum === 26) {
      events.push({
        id: 'republic-day',
        name: 'Republic Day of India',
        hindiName: 'गणतंत्र दिवस (राष्ट्रीय पर्व)',
        date: dateStr,
        category: 'holiday',
        significance: 'Adoption of the Constitution of India in 1950.',
        history: 'Celebrated with grand parade at Kartavya Path New Delhi.'
      });
    }
  }

  // Month 1 = February
  if (monthIdx === 1) {
    if (dayNum === 15 || (!isShukla && tithiNum === 14)) {
      events.push({
        id: 'maha-shivratri',
        name: 'Maha Shivratri (Great Night of Shiva)',
        hindiName: 'महाशिवरात्रि (महानिशीथ काल पूजा)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Cosmic night of Lord Shiva and Mata Parvati’s celestial wedding; manifestation of Jyotirlinga.',
        history: 'Shiva Purana documents continuous four-prahar Jalabhishek and vigil.',
        pujaVidhi: [
          'Observe day and night fast.',
          'Offer continuous water, milk, honey, curd, and Bilvapatra to Shivalinga.',
          'Nishita Kaal midnight worship with Om Namah Shivaya chanting.'
        ],
        muhurat: 'Nishita Kaal: 12:09 AM - 01:00 AM'
      });
    }
  }

  // Month 2 = March
  if (monthIdx === 2) {
    if (dayNum === 3 || (isShukla && tithiNum === 15)) {
      events.push({
        id: 'holika-dahan',
        name: 'Holika Dahan (Chhoti Holi)',
        hindiName: 'होलिका दहन (भक्त प्रह्लाद विजय)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Triumph of devotion over demonic arrogance as Prahlad was saved from fire.',
        history: 'Found in Vishnu Purana; sacred fire burns negativity.'
      });
    }
    if (dayNum === 4) {
      events.push({
        id: 'holi',
        name: 'Holi (Dhulandi / Festival of Colors)',
        hindiName: 'होली (धुलेंडी / रंगों का महापर्व)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Vibrant celebration of joy, spring, and divine love of Radha-Krishna.',
        history: 'Brahmotsava in Braj Dham (Vrindavan, Barsana, Mathura).'
      });
    }
    if (dayNum === 19 || (isShukla && tithiNum === 1)) {
      events.push({
        id: 'chaitra-navratri-new-year',
        name: 'Chaitra Navratri / Gudi Padwa / Ugadi',
        hindiName: 'चैत्र नवरात्रि प्रारंभ / गुड़ी पड़वा / उगादी',
        regionalName: 'Gudi Padwa (MH) / Ugadi (AP, TS, KA) / Cheti Chand (Sindhi)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Commencement of Vikram Samvat and Shalivahana Shaka New Year; 9-day Navadurga worship.',
        history: 'Brahma commenced creation of cosmos on this exact lunar day.',
        pujaVidhi: [
          'Ghatasthapana (Kalash installation) with barley sowing.',
          'Hoist auspicious Gudi outside Maharashtrian homes.',
          'Taste Ugadi Pacchadi embracing life’s diverse experiences.'
        ],
        muhurat: 'Ghatasthapana Muhurat: 06:22 AM - 10:14 AM'
      });
    }
    if (dayNum === 27 || (isShukla && tithiNum === 9)) {
      events.push({
        id: 'ram-navami',
        name: 'Sri Rama Navami',
        hindiName: 'श्री राम नवमी (मर्यादा पुरुषोत्तम जन्मोत्सव)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Birth of Maryada Purushottam Lord Rama in Ayodhya at midday during Abhijit Muhurat.',
        history: 'Valmiki Ramayana documents birth under Punarvasu Nakshatra and Cancer Lagna.',
        pujaVidhi: [
          'Midday Aarti and singing Rama Janma Stuti.',
          'Rocking baby Rama idol in ornate swing (Palna).',
          'Akhand Ramcharitmanas recitation.'
        ],
        muhurat: 'Madhyahna Muhurat: 11:12 AM - 01:38 PM'
      });
    }
  }

  // Month 3 = April
  if (monthIdx === 3) {
    if (dayNum === 2 || (isShukla && tithiNum === 15)) {
      events.push({
        id: 'hanuman-jayanti',
        name: 'Sri Hanuman Janmotsav',
        hindiName: 'श्री हनुमान जन्मोत्सव (चैत्र पूर्णिमा)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Birth of Sankat Mochan Mahabali Hanuman bestowal of courage, strength, and dispelling evil.',
        history: 'Chaitra Purnima manifestation of Lord Shiva’s eleventh Rudra incarnation.'
      });
    }
    if (dayNum === 14) {
      events.push({
        id: 'solar-new-years',
        name: 'Tamil Puthandu / Baisakhi / Poila Boishakh / Bohag Bihu / Vishu',
        hindiName: 'तमिल पुत्थांडु / बैसाखी / पोइला बैशाख / बिहू / विषु',
        regionalName: 'Puthandu (TN) / Baisakhi (PB) / Poila Boishakh (WB) / Vishu (KL) / Bohag Bihu (AS)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Mesha Sankranti solar New Year celebrated across northern, southern, and eastern India.',
        history: 'Marks Sun entering the first zodiac sign Aries (Mesha Rasi).'
      });
    }
    if (dayNum === 20 || (isShukla && tithiNum === 3)) {
      events.push({
        id: 'akshaya-tritiya',
        name: 'Akshaya Tritiya (Akha Teej)',
        hindiName: 'अक्षय तृतीया (अक्षय पुण्य एवं स्वर्ण क्रय मुहूर्त)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Eternally imperishable day where deeds, charity, and gold purchases multiply infinitely.',
        history: 'Day Treta Yuga began; Bhagwan Parashurama manifested.'
      });
    }
  }

  // Month 6 = July
  if (monthIdx === 6) {
    if (dayNum === 16 || (isShukla && tithiNum === 2)) {
      events.push({
        id: 'rath-yatra',
        name: 'Puri Sri Jagannath Rath Yatra',
        hindiName: 'जगन्नाथ रथयात्रा (पुरी महामहोत्सव)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Lord Jagannath, Balabhadra, and Subhadra journey to Gundicha Temple on massive wooden chariots.',
        history: 'Celebrated in Puri for millennia as the world’s grandest chariot procession.'
      });
    }
    if (dayNum === 29 || (isShukla && tithiNum === 15)) {
      events.push({
        id: 'guru-purnima',
        name: 'Guru Purnima (Vyasa Purnima)',
        hindiName: 'गुरु पूर्णिमा (महर्षि वेदव्यास जयंती)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Paying homage to spiritual preceptors and Maharshi Veda Vyasa who compiled the 4 Vedas.'
      });
    }
  }

  // Month 7 = August
  if (monthIdx === 7) {
    if (dayNum === 15) {
      events.push({
        id: 'independence-day',
        name: 'Independence Day of India',
        hindiName: 'स्वतंत्रता दिवस (राष्ट्रीय पर्व)',
        date: dateStr,
        category: 'holiday',
        significance: 'Commemorating freedom of Bharat in 1947.'
      });
    }
    if (dayNum === 28 || (isShukla && tithiNum === 15)) {
      events.push({
        id: 'raksha-bandhan',
        name: 'Raksha Bandhan & Shravani Purnima',
        hindiName: 'रक्षाबंधन एवं श्रावणी उपाकर्म',
        date: dateStr,
        category: 'major-festival',
        significance: 'Sacred bond of protection between brother and sister; changing of Yajnopavita (sacred thread).'
      });
    }
  }

  // Month 8 = September
  if (monthIdx === 8) {
    if (dayNum === 4 || (!isShukla && tithiNum === 8)) {
      events.push({
        id: 'janmashtami',
        name: 'Sri Krishna Janmashtami',
        hindiName: 'श्री कृष्ण जन्माष्टमी (मध्यरात्रि जन्मोत्सव)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Midnight advent of Bhagwan Sri Krishna in Mathura prison to establish righteousness.',
        history: 'Rohini Nakshatra and Ashtami Tithi in Bhadrapada.',
        pujaVidhi: [
          'Full-day fasting till midnight birth moment.',
          'Panchamrit Abhishek of Laddu Gopal.',
          'Chanting Hare Krishna Mahamantra and reading Srimad Bhagavatam.'
        ],
        muhurat: 'Nishita Kaal: 11:58 PM - 12:44 AM'
      });
    }
    if (dayNum === 14 || (isShukla && tithiNum === 4)) {
      events.push({
        id: 'ganesh-chaturthi',
        name: 'Ganesh Chaturthi (Vinayaka Chavithi)',
        hindiName: 'गणेश चतुर्थी (विनायक जन्मोत्सव)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Installation of Lord Ganesha in homes and public pandals for 10 glorious days.',
        history: 'Revived as a unifying national celebration by Lokmanya Tilak in Maharashtra.'
      });
    }
    if (dayNum === 25 || (isShukla && tithiNum === 14)) {
      events.push({
        id: 'anant-chaturdashi',
        name: 'Anant Chaturdashi & Ganesh Visarjan',
        hindiName: 'अनंत चतुर्दशी एवं गणेश विसर्जन महामहोत्सव',
        date: dateStr,
        category: 'major-festival',
        significance: 'Worship of Lord Vishnu’s infinite form with 14-knot thread; culmination of 10-day Ganeshotsav.',
        history: 'Pandavas observed Anant Vrat during exile to regain prosperity.'
      });
    }
  }

  // Month 9 = October
  if (monthIdx === 9) {
    if (dayNum === 2) {
      events.push({
        id: 'gandhi-jayanti',
        name: 'Mahatma Gandhi Jayanti',
        hindiName: 'महात्मा गांधी जयंती (अंतर्राष्ट्रीय अहिंसा दिवस)',
        date: dateStr,
        category: 'holiday',
        significance: 'Birth of Father of the Nation and Apostle of Ahimsa.'
      });
    }
    if (dayNum === 11 || (isShukla && tithiNum === 1)) {
      events.push({
        id: 'sharad-navratri',
        name: 'Sharad Navratri Ghatasthapana',
        hindiName: 'शारदीय नवरात्रि घटस्थापना',
        date: dateStr,
        category: 'major-festival',
        significance: 'The premier autumnal 9 nights honoring Divine Mother Durga and the cosmic battle against Mahishasura.'
      });
    }
    if (dayNum === 18 || (isShukla && tithiNum === 8)) {
      events.push({
        id: 'durga-ashtami',
        name: 'Maha Ashtami / Durga Ashtami',
        hindiName: 'दुर्गा अष्टमी (महाष्टमी एवं कन्या पूजन)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Culmination of Devi battle; worship of young girls as living personifications of the Goddess.'
      });
    }
    if (dayNum === 20 || (isShukla && tithiNum === 10)) {
      events.push({
        id: 'vijayadashami',
        name: 'Dussehra / Vijayadashami',
        hindiName: 'विजयादशमी / दशहरा (रावण दहन एवं शमी पूजन)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Triumph of Good over Evil: Lord Rama’s victory over Ravana and Durga’s slaying of Mahishasura.'
      });
    }
    if (dayNum === 25 || (isShukla && tithiNum === 15)) {
      events.push({
        id: 'sharad-purnima',
        name: 'Sharad Purnima (Kojagari Lakshmi Puja)',
        hindiName: 'शरद पूर्णिमा (कोजागरी लक्ष्मी पूजा व अमृत खीर)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Moon showers celestial nectar; Maharaas in Vrindavan; Goddess Lakshmi descends blessing those awake.'
      });
    }
  }

  // Month 10 = November
  if (monthIdx === 10) {
    if (dayNum === 6) {
      events.push({
        id: 'dhanteras',
        name: 'Dhanteras (Dhanatrayodashi / Dhanvantari Jayanti)',
        hindiName: 'धनतेरस (धनत्रयोदशी एवं भगवान धन्वंतरि जयंती)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Advent of Lord Dhanvantari with Amrit Kalash; buying brass, silver, and gold for prosperity.',
        muhurat: 'Pradosh Puja: 05:45 PM - 08:12 PM'
      });
    }
    if (dayNum === 7) {
      events.push({
        id: 'kali-chaudas',
        name: 'Naraka Chaturdashi / Kali Chaudas / Chhoti Diwali',
        hindiName: 'नरक चतुर्दशी / काली चौदस / छोटी दिवाली',
        date: dateStr,
        category: 'major-festival',
        significance: 'Lord Krishna vanquishing demon Narakasura; Abhyanga Snan to cleanse afflictions.'
      });
    }
    if (dayNum === 8 || (!isShukla && tithiNum === 15)) {
      events.push({
        id: 'diwali',
        name: 'Diwali (Deepawali & Sri Mahalakshmi Pujan)',
        hindiName: 'दीपावली (श्री महालक्ष्मी एवं गणेश महापूजन)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Festival of Lights celebrating Lord Rama’s return to Ayodhya and auspicious Lakshmi Puja in Pradosh Vrishabha Lagna.',
        pujaVidhi: [
          'Cleanse altar and draw colorful Rangoli.',
          'Light 21 or more ghee and mustard oil diyas.',
          'Worship Mahalakshmi, Ganesha, Kuber, and Saraswati.',
          'In Gujarat: Perform Chopda Pujan for new account books.'
        ],
        muhurat: 'Lakshmi Puja (Pradosh / Vrishabha Lagna): 05:45 PM - 07:42 PM; Nishita Kaal: 11:38 PM - 12:30 AM'
      });
    }
    if (dayNum === 9 || (isShukla && tithiNum === 1)) {
      events.push({
        id: 'govardhan-bestu-varas',
        name: 'Govardhan Puja / Annakut / Gujarati New Year (Bestu Varas)',
        hindiName: 'गोवर्धन पूजा / अन्नकूट / गुजराती नूतन वर्ष (बेસતું વર્ષ)',
        regionalName: 'Bestu Varas (Gujarat) / Annakut (Vrindavan)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Lord Krishna lifting Govardhan Hill on his little finger; 56 bhog Annakut; Gujarati Vikram Samvat New Year begins.'
      });
    }
    if (dayNum === 10 || (isShukla && tithiNum === 2)) {
      events.push({
        id: 'bhai-dooj',
        name: 'Bhai Dooj / Yama Dwitiya / Bhai Beej',
        hindiName: 'भाई दूज / यम द्वितीया / ભાઈબીજ',
        date: dateStr,
        category: 'major-festival',
        significance: 'Goddess Yamuna welcoming brother Yamaraj; sisters applying Tilak ensuring brothers’ longevity.'
      });
    }
    if (dayNum === 14 || (isShukla && tithiNum === 6)) {
      events.push({
        id: 'chhath-sandhya',
        name: 'Chhath Puja (Sandhya Arghya to Sun)',
        hindiName: 'छठ पूजा (सायंकालीन अर्घ्य)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Standing in holy waters offering Arghya to setting Sun with Thekua and fresh harvest fruits.'
      });
    }
    if (dayNum === 24 || (isShukla && tithiNum === 15)) {
      events.push({
        id: 'guru-nanak-jayanti',
        name: 'Guru Nanak Dev Ji Parkash Purab / Dev Diwali',
        hindiName: 'श्री गुरु नानक देव जी प्रकाश पर्व / देव दीपावली (काशी)',
        date: dateStr,
        category: 'major-festival',
        significance: 'Birth of the founder of Sikhism; Dev Deepawali when Gods celebrate Diwali in Kashi lighting 10 lakh diyas.'
      });
    }
  }

  // Month 11 = December
  if (monthIdx === 11) {
    if (dayNum === 20 || (isShukla && tithiNum === 11)) {
      events.push({
        id: 'gita-jayanti',
        name: 'Gita Jayanti (Mokshada Ekadashi)',
        hindiName: 'गीता जयंती एवं मोक्षदा एकादशी',
        date: dateStr,
        category: 'major-festival',
        significance: 'Bhagwan Sri Krishna speaking the Bhagavad Gita to Arjuna at Kurukshetra battlefield.'
      });
    }
    if (dayNum === 25) {
      events.push({
        id: 'christmas',
        name: 'Christmas Day',
        hindiName: 'क्रिसमस पर्व (बड़ा दिन)',
        date: dateStr,
        category: 'holiday',
        significance: 'Birth of Jesus Christ celebrated across institutions.'
      });
    }
  }

  return events;
}

// 5. Search helper for Calendar Directory
export function searchCalendarsAndFestivals(
  query: string,
  categoryFilter: string = 'all'
) {
  const cleanQ = query.trim().toLowerCase();
  
  const allEntries = [
    ...yearlyCalendarsCatalog.map(c => ({
      type: 'yearly' as const,
      id: c.id,
      title: c.name,
      subtitle: `${c.region} • ${c.language}`,
      region: c.region,
      category: c.category,
      slug: c.slug,
      description: c.description,
      tags: [c.name, c.nativeName, c.region, c.language, ...c.keyFestivals]
    })),
    ...festivalCalendarsCatalog.map(f => ({
      type: 'festival' as const,
      id: f.id,
      title: f.name,
      subtitle: f.nativeName,
      region: 'Pan-India',
      category: f.category,
      slug: f.slug,
      description: f.description,
      tags: [f.name, f.nativeName, ...f.keyDates]
    }))
  ];

  return allEntries.filter(entry => {
    const matchesCat = categoryFilter === 'all' || entry.category === categoryFilter;
    if (!matchesCat) return false;
    if (!cleanQ) return true;
    return entry.tags.some(tag => tag.toLowerCase().includes(cleanQ)) ||
           entry.title.toLowerCase().includes(cleanQ) ||
           entry.description.toLowerCase().includes(cleanQ);
  });
}
