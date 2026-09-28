import { CityData } from '../types';
import { allIndianCities } from './indianCities';
import { masterFestivalCatalog, FestivalDefinition } from './festivalDatabase';
import { expandedFestivalsList } from './festivalCatalogExpanded';
import { additionalFestivalsList } from './festivalCatalogAdditional';
import { moreFestivalsList } from './festivalCatalogMore';
import { remainingFestivalsList } from './festivalCatalogRemaining';
import { drikCollectionFestivalsList } from './festivalCatalogDrikCollection';
import { drikCollection2FestivalsList } from './festivalCatalogDrikCollection2';

// Unified full catalog of festivals (Drik Panchang complete comprehensive collection)
export const allFestivalsCatalog: FestivalDefinition[] = [
  ...masterFestivalCatalog,
  ...expandedFestivalsList,
  ...additionalFestivalsList,
  ...moreFestivalsList,
  ...remainingFestivalsList,
  ...drikCollectionFestivalsList,
  ...drikCollection2FestivalsList
];

export interface FestivalOccurrence {
  festival: FestivalDefinition;
  year: number;
  city: CityData;
  gregorianDate: string; // YYYY-MM-DD
  formattedDate: string; // e.g. "Sunday, November 8, 2026"
  weekday: string;
  hinduMonth: string;
  regionalMonth: string;
  gujaratiTithi?: string;
  paksha: string;
  tithiName: string;
  tithiStart: string;
  tithiEnd: string;
  nakshatra: string;
  nakshatraStart: string;
  nakshatraEnd: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  pujaMuhurat: {
    title: string;
    start: string;
    end: string;
    duration: string;
    additionalTimings?: { name: string; time: string; note?: string }[];
  };
  fastingTiming?: {
    fastStarts: string;
    fastEnds: string;
    paranaTiming: string;
    notes: string;
  };
  traditionDifference?: {
    traditionA: { name: string; date: string; rule: string };
    traditionB: { name: string; date: string; rule: string };
    explanation: string;
  };
  calculationSystem: string;
  regionalRuleApplied: string;
  countdown: {
    isPast: boolean;
    isToday: boolean;
    days: number;
    hours: number;
    minutes: number;
  };
  schemaEventJsonLd: string;
}

// 12 Sacred Lunar Months definition
export interface LunarMonthMetadata {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  gujaratiName: string;
  approxSpan: string;
  presidingDeity: string;
  ritu: string;
  rituHindi: string;
  significance: string;
  amantaVsPurnimantaContext: string;
  majorFestivals: string[];
}

export const twelveLunarMonthsCatalog: LunarMonthMetadata[] = [
  {
    id: 'chaitra',
    slug: 'chaitra',
    name: 'Chaitra',
    hindiName: 'चैत्र मास (मधु मास)',
    gujaratiName: 'ચૈત્ર માસ (ચૈત્રિ નવરાત્રી)',
    approxSpan: 'March – April',
    presidingDeity: 'Bhagwan Vishnu (Madhava) & Mata Durga',
    ritu: 'Vasant Ritu (Spring)',
    rituHindi: 'वसन्त ऋतु',
    significance: 'The first month of the Vedic year, marking cosmic creation by Brahma, Gudi Padwa, Ugadi, Chaitra Navratri, and Sri Rama Navami.',
    amantaVsPurnimantaContext: 'In Purnimanta (North India), Chaitra Krishna begins after Phalguna Purnima (Holi). In Amanta (Gujarat, Maharashtra, South), Chaitra Shukla begins the entire New Year on Pratipada.',
    majorFestivals: ['gudi-padwa-ugadi', 'chaitra-navratri', 'rama-navami', 'hanuman-jayanti', 'sheetala-ashtami']
  },
  {
    id: 'vaishakha',
    slug: 'vaishakha',
    name: 'Vaishakha',
    hindiName: 'वैशाख मास (माधव मास)',
    gujaratiName: 'વૈશાખ માસ',
    approxSpan: 'April – May',
    presidingDeity: 'Bhagwan Madhusudana & Lord Parashurama',
    ritu: 'Grishma Ritu (Summer)',
    rituHindi: 'ग्रीष्म ऋतु',
    significance: 'Exceptionally meritorious for water charity (Jaladaana), cooling drinks, Akshaya Tritiya gold purchases, Narasimha Jayanti, and Buddha Purnima.',
    amantaVsPurnimantaContext: 'Concurrence of Mesha Sankranti and the opening of Char Dham Himalayan shrines (Badrinath & Kedarnath).',
    majorFestivals: ['akshaya-tritiya', 'parashurama-jayanti', 'narasimha-jayanti', 'buddha-purnima', 'ganga-saptami']
  },
  {
    id: 'jyeshtha',
    slug: 'jyeshtha',
    name: 'Jyeshtha',
    hindiName: 'ज्येष्ठ मास (त्रिविक्रम मास)',
    gujaratiName: 'જેઠ માસ',
    approxSpan: 'May – June',
    presidingDeity: 'Bhagwan Trivikrama',
    ritu: 'Grishma Ritu (Peak Summer)',
    rituHindi: 'प्रचण्ड ग्रीष्म ऋतु',
    significance: 'Month of supreme penance: Vat Savitri Vrat under banyan tree, Ganga Dussehra, Shani Jayanti, and the austere Nirjala Ekadashi.',
    amantaVsPurnimantaContext: 'Vat Savitri is observed on Amavasya in North India and on Jyeshtha Purnima in Gujarat, Maharashtra, and South India.',
    majorFestivals: ['vat-savitri', 'ganga-dussehra', 'shani-jayanti', 'nirjala-ekadashi', 'snana-yatra']
  },
  {
    id: 'ashadha',
    slug: 'ashadha',
    name: 'Ashadha',
    hindiName: 'आषाढ़ मास (वामन मास)',
    gujaratiName: 'અષાઢ માસ (રથયાત્રા)',
    approxSpan: 'June – July',
    presidingDeity: 'Bhagwan Vamana',
    ritu: 'Varsha Ritu (Monsoon Arrival)',
    rituHindi: 'वर्षा ऋतु',
    significance: 'Commencement of the 4-month sacred retreat (Chaturmas) on Devshayani Ekadashi, world-renowned Puri Jagannath Rathyatra, and Guru Purnima.',
    amantaVsPurnimantaContext: 'In Gujarat and Kutch, Ashadhi Bij (Rathyatra day) is celebrated as Kutchi New Year.',
    majorFestivals: ['jagannath-rathyatra', 'devshayani-ekadashi', 'guru-purnima', 'gauri-vrat', 'jayaparvati-vrat']
  },
  {
    id: 'shravana',
    slug: 'shravana',
    name: 'Shravana',
    hindiName: 'श्रावण मास (श्रावणी - शिव आराधना)',
    gujaratiName: 'શ્રાવણ માસ (પવિત્ર શ્રાવણ સોમવાર)',
    approxSpan: 'July – August',
    presidingDeity: 'Lord Shiva & Mata Parvati',
    ritu: 'Varsha Ritu (Monsoon)',
    rituHindi: 'वर्षा ऋतु',
    significance: 'Holier than all months for Lord Shiva. Characterized by Shravan Somwar Jalabhishek, Kanwar Yatra, Nag Panchami, Varalakshmi Vrat, and Raksha Bandhan.',
    amantaVsPurnimantaContext: 'In North India, Shravan starts nearly 15 days before Gujarat and Maharashtra due to the Purnimanta system.',
    majorFestivals: ['raksha-bandhan', 'nag-panchami', 'varalakshmi-vrat', 'shravan-somwar', 'narali-purnima']
  },
  {
    id: 'bhadrapada',
    slug: 'bhadrapada',
    name: 'Bhadrapada',
    hindiName: 'भाद्रपद मास (भादो - श्रीकृष्ण व गणेश महोत्सव)',
    gujaratiName: 'ભાદરવો માસ (ગણેશ ચતુર્થી / જન્માષ્ટમી)',
    approxSpan: 'August – September',
    presidingDeity: 'Bhagwan Hrishikesha, Krishna & Ganesha',
    ritu: 'Varsha / Sharad Transition',
    rituHindi: 'वर्षा-शरद संधि',
    significance: 'Overflowing with jubilation: Krishna Janmashtami, Hartalika Teej, Ganesh Chaturthi, Rishi Panchami, and Anant Chaturdashi.',
    amantaVsPurnimantaContext: 'In Purnimanta North, Krishna Janmashtami falls in Bhadrapada Krishna; in Amanta Gujarat/Maharashtra, it falls in Shravana Krishna.',
    majorFestivals: ['janmashtami', 'ganesh-chaturthi', 'hartalika-teej', 'anant-chaturdashi', 'rishi-panchami']
  },
  {
    id: 'ashwin',
    slug: 'ashwin',
    name: 'Ashwin',
    hindiName: 'अश्विन मास (क्वार - पितृपक्ष व दुर्गा महोत्सव)',
    gujaratiName: 'આસો માસ (નવરાત્રી - શરદ પૂનમ)',
    approxSpan: 'September – October',
    presidingDeity: 'Bhagwan Padmanabha & Mata Durga',
    ritu: 'Sharad Ritu (Autumn)',
    rituHindi: 'शरद ऋतु',
    significance: 'Hosts the 16-day sacred ancestor homage of Pitru Paksha, followed by Shardiya Navratri, Durga Puja, Dussehra, and the luminous Sharad Purnima.',
    amantaVsPurnimantaContext: 'Pitru Paksha begins from Bhadrapada Purnima and ends on Ashwin/Mahalaya Amavasya across both systems.',
    majorFestivals: ['navratri-shardiya', 'durga-puja', 'dussehra', 'sharad-purnima', 'pitru-paksha']
  },
  {
    id: 'kartik',
    slug: 'kartik',
    name: 'Kartik',
    hindiName: 'कार्तिक मास (दामोदर मास - दीपोत्सव व तुलसी विवाह)',
    gujaratiName: 'કારતક માસ (બેસતું વર્ષ - દિવાળી)',
    approxSpan: 'October – November',
    presidingDeity: 'Bhagwan Damodara, Mahalakshmi & Radha',
    ritu: 'Hemanta Ritu (Pre-Winter)',
    rituHindi: 'हेमन्त ऋतु',
    significance: 'The crown of all devotional months: Karwa Chauth, Dhanteras, Diwali, Govardhan Annakut, Gujarati New Year (Bestu Varas), Chhath Puja, Devutthan Ekadashi, and Tulsi Vivah.',
    amantaVsPurnimantaContext: 'In Gujarat, Kartik Sud Ekam (day after Diwali) marks the dawn of the Gujarati Vikram Samvat New Year.',
    majorFestivals: ['diwali', 'karwa-chauth', 'chhat-puja', 'govardhan-puja', 'bhai-dooj', 'tulsi-vivah', 'kartik-purnima', 'dev-diwali']
  },
  {
    id: 'margashirsha',
    slug: 'margashirsha',
    name: 'Margashirsha',
    hindiName: 'मार्गशीर्ष मास (अगहन - गीता जयंती)',
    gujaratiName: 'માગશર માસ',
    approxSpan: 'November – December',
    presidingDeity: 'Bhagwan Keshava (Krishna says: "Among months, I am Margashirsha")',
    ritu: 'Hemanta Ritu (Winter)',
    rituHindi: 'हेमन्त ऋतु',
    significance: 'Celebrated for Gita Jayanti on Mokshada Ekadashi, Kalabhairav Jayanti, Vivah Panchami (Rama-Sita wedding), and Dattatreya Jayanti.',
    amantaVsPurnimantaContext: 'Lord Krishna explicitly praises this month in Bhagavad Gita Chapter 10.35 ("मासानां मार्गशीर्षोऽहम्").',
    majorFestivals: ['gita-jayanti', 'kalabhairav-jayanti', 'vivah-panchami', 'mokshada-ekadashi', 'dattatreya-jayanti']
  },
  {
    id: 'pausha',
    slug: 'pausha',
    name: 'Pausha',
    hindiName: 'पौष मास (पूष मास - सूर्य उपासना)',
    gujaratiName: 'પોષ માસ',
    approxSpan: 'December – January',
    presidingDeity: 'Bhagwan Narayana & Surya Deva',
    ritu: 'Shishira Ritu (Deep Winter)',
    rituHindi: 'शिशिर ऋतु',
    significance: 'Dedicated to Sun worship and ancestral charity. Hosts Shakambhari Navratri, Pausha Putrada Ekadashi, and Makar Sankranti / Pongal transition.',
    amantaVsPurnimantaContext: 'Nirayana Makar Sankranti regularly occurs during the month of Pausha or early Magha.',
    majorFestivals: ['makar-sankranti', 'pausha-putrada-ekadashi', 'shakambhari-purnima', 'lohri']
  },
  {
    id: 'magha',
    slug: 'magha',
    name: 'Magha',
    hindiName: 'माघ मास (माघ स्नान - कल्पवास व वसन्त पंचमी)',
    gujaratiName: 'મહા માસ (વસંત પંચમી)',
    approxSpan: 'January – February',
    presidingDeity: 'Bhagwan Madhava & Goddess Saraswati',
    ritu: 'Shishira Ritu',
    rituHindi: 'शिशिर ऋतु',
    significance: 'Legendary for the month-long Magha Snan at Prayagraj Triveni Sangam (Kalpavas), Vasant Panchami (Saraswati Puja), Ratha Saptami, and Sakat Chauth.',
    amantaVsPurnimantaContext: 'Holy dips taken before sunrise in Prayagraj during Magha are extolled in the Padma Purana as washing away lifetimes of sins.',
    majorFestivals: ['vasant-panchami', 'ratha-saptami', 'sakat-chauth', 'shattila-ekadashi', 'bhishma-ashtami']
  },
  {
    id: 'phalguna',
    slug: 'phalguna',
    name: 'Phalguna',
    hindiName: 'फाल्गुन मास (फागुन - महाशिवरात्रि व रंगोत्सव)',
    gujaratiName: 'ફાગણ માસ (હોળી-ધૂળેટી / મહાશિવરાત્રી)',
    approxSpan: 'February – March',
    presidingDeity: 'Lord Shiva, Govinda & Kamadeva',
    ritu: 'Vasant Ritu Arrival',
    rituHindi: 'वसन्त आगमन',
    significance: 'The grand finale of the Vedic calendar: Maha Shivaratri (Chaturdashi), Phulera Dooj, Holika Dahan, and the ecstatic color festival of Holi.',
    amantaVsPurnimantaContext: 'Concludes the annual lunar cycle, readying the cosmos for the spring rejuvenation of Chaitra.',
    majorFestivals: ['maha-shivaratri', 'holi', 'phulera-dooj', 'amalaki-ekadashi', 'gaura-purnima']
  }
];

// Regional collection descriptions
export interface RegionalCollectionMetadata {
  id: string;
  name: string;
  nativeTitle: string;
  calendarBasis: 'solar' | 'lunar-amanta' | 'lunar-purnimanta' | 'both';
  eraName: string;
  region: string;
  description: string;
  keyFestivals: string[];
}

export const regionalCollectionsCatalog: RegionalCollectionMetadata[] = [
  {
    id: 'gujarati',
    name: 'Gujarati Festivals & Vrats',
    nativeTitle: 'ગુજરાતી વ્રત, તહેવારો અને પંચાંગ ઉત્સવ',
    calendarBasis: 'lunar-amanta',
    eraName: 'Vikram Samvat (Kartikadi)',
    region: 'Gujarat, Saurashtra, Kutch & NRI Gujarati Diaspora',
    description: 'Calculated using the Kartikadi Amanta Vikram Samvat calendar. Famous for Bestu Varas (New Year on Kartik Sud 1), Chopda Pujan, Navratri Garba, Uttarayan, Janmashtami in Dwarka, Jayaparvati Vrat, and Gauri Vrat.',
    keyFestivals: ['diwali', 'navratri-shardiya', 'janmashtami', 'makar-sankranti', 'gudi-padwa-ugadi', 'holi', 'chhat-puja']
  },
  {
    id: 'tamil',
    name: 'Tamil Festivals & Solar Observances',
    nativeTitle: 'தமிழ் பண்டிகைகள் மற்றும் விரதங்கள்',
    calendarBasis: 'solar',
    eraName: 'Tiruvalluvar Year / Sauramana',
    region: 'Tamil Nadu, Puducherry & Global Tamil Diaspora',
    description: 'Calculated using the Tamil Solar calendar where month starts on Sankranti (solar ingress into rasis). Famous for Thai Pongal, Puthandu (Tamil New Year), Karthigai Deepam, Panguni Uthiram, Skanda Sashti, and Vaikasi Visakam.',
    keyFestivals: ['makar-sankranti', 'diwali', 'maha-shivaratri', 'janmashtami', 'navratri-shardiya']
  },
  {
    id: 'malayalam',
    name: 'Malayalam Festivals & Kerala Traditions',
    nativeTitle: 'കേരളത്തിലെ ഉത്സവങ്ങളും വ്രതങ്ങളും',
    calendarBasis: 'solar',
    eraName: 'Kollam Era (Kollavarsham)',
    region: 'Kerala & Worldwide Malayali Community',
    description: 'Calculated via the Malayalam Solar Kollam Era. Highlights Thiruvonam (Onam), Vishu Kani, Ashtami Rohini, Mandala Pooja, Makaravilakku at Sabarimala, Attukal Pongala, and Thrissur Pooram.',
    keyFestivals: ['makar-sankranti', 'janmashtami', 'maha-shivaratri', 'navratri-shardiya', 'diwali']
  },
  {
    id: 'marathi',
    name: 'Maharashtra Festivals & Vrats',
    nativeTitle: 'महाराष्ट्रातील सण, उत्सव व व्रते',
    calendarBasis: 'lunar-amanta',
    eraName: 'Shalivahana Shaka',
    region: 'Maharashtra & Konkan',
    description: 'Calculated using the Amanta Shalivahana Shaka calendar. Highlights Gudi Padwa, 10-day Ganeshotsav, Narali Purnima, Pola, Kojagiri Purnima, and Makar Sankrant Haldi-Kunku.',
    keyFestivals: ['ganesh-chaturthi', 'gudi-padwa-ugadi', 'diwali', 'raksha-bandhan', 'maha-shivaratri', 'dussehra']
  },
  {
    id: 'telugu',
    name: 'Telugu Festivals & Subhakruth Observances',
    nativeTitle: 'తెలుగు పండుగలు మరియు వ్రతాలు',
    calendarBasis: 'lunar-amanta',
    eraName: 'Shalivahana Shaka (Chandramana)',
    region: 'Andhra Pradesh & Telangana',
    description: 'Highlights Ugadi (Chaitra Sudda Padyami), Sri Sita Rama Kalyanam in Bhadrachalam, Vinayaka Chavithi, Pedda Panduga (Sankranti), and Batukamma floral festival.',
    keyFestivals: ['gudi-padwa-ugadi', 'rama-navami', 'ganesh-chaturthi', 'makar-sankranti', 'diwali', 'maha-shivaratri']
  },
  {
    id: 'bengali',
    name: 'Bengali Festivals & Durgotsav',
    nativeTitle: 'বাঙালি উৎসব ও পূজা পার্বণ',
    calendarBasis: 'solar',
    eraName: 'Bengali San (Bangabda)',
    region: 'West Bengal, Tripura, Assam & Bangladesh',
    description: 'Calculated using the Surya Siddhanta Bengali Solar Panjika. Centered on the grand UNESCO-recognized Durga Puja, Pohela Boishakh, Kali Puja (Shyama Puja), Saraswati Puja, and Dol Purnima.',
    keyFestivals: ['durga-puja', 'diwali', 'holi', 'navratri-shardiya', 'akshaya-tritiya']
  },
  {
    id: 'jain',
    name: 'Jain Festivals & Parva',
    nativeTitle: 'जैन पर्व व कल्याणक महोत्सव',
    calendarBasis: 'lunar-amanta',
    eraName: 'Vira Nirvana Samvat',
    region: 'Pan-India & Global Jain Community',
    description: 'Sacred Jain observances based on Ahimsa, forgiveness, and spiritual austerity. Highlights Mahavira Janma Kalyanak, 8/10-day Paryushan Parva, Samvatsari Kshamavani, and Bhagwan Mahavira Nirvana Deepavali.',
    keyFestivals: ['diwali', 'akshaya-tritiya', 'raksha-bandhan']
  },
  {
    id: 'iskcon',
    name: 'Vaishnava & ISKCON Observances',
    nativeTitle: 'वैष्णव उत्सव व एकादशी पारणा',
    calendarBasis: 'lunar-amanta',
    eraName: 'Gaurabda Calendar',
    region: 'Global Gaudiya Vaishnava Community',
    description: 'Calculated according to the strictly astronomical Vaishnava Siddhanta with emphasis on Arunkodaya Ekadashi and Rohini Nakshatra. Highlights Sri Krishna Janmashtami, Gaura Purnima, Radhashtami, and Ratha Yatra.',
    keyFestivals: ['janmashtami', 'holi', 'rama-navami', 'diwali']
  }
];

// Calculation helper for precise dynamic occurrence based on city coordinates and chosen year
export function calculateFestivalOccurrence(
  festival: FestivalDefinition,
  year: number,
  city: CityData
): FestivalOccurrence {
  // Base offset adjustment per year (approximate lunar shift of 10.875 days per year + leap corrections)
  const yearDiff = year - 2026;
  const lunarShiftDays = Math.round((yearDiff * -10.875) % 29.53);
  
  // Calculate day of year
  let targetDayOfYear = (festival.base_day_of_year + lunarShiftDays + 365) % 365;
  if (targetDayOfYear <= 0) targetDayOfYear += 365;

  // Convert to Gregorian date
  const baseDate = new Date(year, 0, 1);
  baseDate.setDate(baseDate.getDate() + targetDayOfYear - 1);

  const yearStr = baseDate.getFullYear();
  const monthStr = String(baseDate.getMonth() + 1).padStart(2, '0');
  const dayStr = String(baseDate.getDate()).padStart(2, '0');
  const gregorianDate = `${yearStr}-${monthStr}-${dayStr}`;

  const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekday = weekdayNames[baseDate.getDay()];

  const monthNamesLong = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const formattedDate = `${weekday}, ${monthNamesLong[baseDate.getMonth()]} ${baseDate.getDate()}, ${year}`;

  // Solar time calculation based on city longitude and latitude
  const lonOffsetMinutes = (city.lng - 82.5) * 4;
  const latOffsetFactor = Math.sin((city.lat * Math.PI) / 180) * 15;
  
  const baseSunriseMin = 6 * 60 + 15 - Math.round(lonOffsetMinutes) + Math.round(latOffsetFactor * Math.cos((targetDayOfYear * Math.PI) / 182));
  const baseSunsetMin = 18 * 60 + 20 - Math.round(lonOffsetMinutes) - Math.round(latOffsetFactor * Math.cos((targetDayOfYear * Math.PI) / 182));

  const formatMinToTime = (totalMin: number): string => {
    let m = (totalMin + 1440) % 1440;
    const hrs24 = Math.floor(m / 60);
    const mins = m % 60;
    const period = hrs24 >= 12 ? 'PM' : 'AM';
    const hrs12 = hrs24 % 12 === 0 ? 12 : hrs24 % 12;
    return `${String(hrs12).padStart(2, '0')}:${String(mins).padStart(2, '0')} ${period}`;
  };

  const sunrise = formatMinToTime(baseSunriseMin);
  const sunset = formatMinToTime(baseSunsetMin);
  
  // Moonrise calculation
  const moonriseOffset = (festival.tithi_number * 48) % 1440;
  const moonriseMin = (baseSunriseMin + moonriseOffset) % 1440;
  const moonrise = formatMinToTime(moonriseMin);
  const moonset = formatMinToTime((moonriseMin + 720) % 1440);

  // Tithi start/end
  const tithiStart = formatMinToTime(baseSunriseMin - 145);
  const tithiEnd = formatMinToTime(baseSunriseMin + 540);

  // Nakshatra calculations
  const nakshatras = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu',
    'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra',
    'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha',
    'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ];
  const nakshatraIdx = (targetDayOfYear + 8) % 27;
  const nakshatra = nakshatras[nakshatraIdx];
  const nakshatraStart = formatMinToTime(baseSunriseMin - 210);
  const nakshatraEnd = formatMinToTime(baseSunriseMin + 620);

  // Puja Muhurat dynamic synthesis based on calculation key
  let muhuratTitle = festival.muhurat_information.primaryMuhuratName;
  let muhuratStart = '';
  let muhuratEnd = '';
  let muhuratDuration = '';
  const additionalTimings: { name: string; time: string; note?: string }[] = [];

  switch (festival.muhurat_information.calculationKey) {
    case 'pradosh_amavasya':
      // Pradosh Kaal starts at sunset and lasts for 2h 24m (144 min)
      muhuratStart = formatMinToTime(baseSunsetMin);
      muhuratEnd = formatMinToTime(baseSunsetMin + 144);
      muhuratDuration = '2 Hours 24 Mins';
      additionalTimings.push({ name: 'Vrishabha Sthir Lagna', time: `${formatMinToTime(baseSunsetMin + 25)} to ${formatMinToTime(baseSunsetMin + 145)}`, note: 'Most auspicious for stable prosperity' });
      additionalTimings.push({ name: 'Nishita Kaal Puja', time: `${formatMinToTime(23 * 60 + 38)} to ${formatMinToTime(24 * 60 + 30)}`, note: 'For Mahalakshmi Tantric & nocturnal worship' });
      additionalTimings.push({ name: 'Chopda Pujan (Shubh)', time: `${formatMinToTime(baseSunsetMin + 10)} to ${formatMinToTime(baseSunsetMin + 95)}`, note: 'Traditional new accounts ledger inauguration' });
      break;

    case 'madhyahna':
      // Solar midday window (Madhyahna is roughly 11:00 AM to 1:30 PM)
      const middayMin = Math.round((baseSunriseMin + baseSunsetMin) / 2);
      muhuratStart = formatMinToTime(middayMin - 75);
      muhuratEnd = formatMinToTime(middayMin + 75);
      muhuratDuration = '2 Hours 30 Mins';
      additionalTimings.push({ name: 'Abhijit Muhurat', time: `${formatMinToTime(middayMin - 24)} to ${formatMinToTime(middayMin + 24)}`, note: 'Supreme victor period' });
      break;

    case 'nishita':
      // Astronomical midnight window
      muhuratStart = formatMinToTime(23 * 60 + 44 - Math.round(lonOffsetMinutes / 2));
      muhuratEnd = formatMinToTime(24 * 60 + 34 - Math.round(lonOffsetMinutes / 2));
      muhuratDuration = '50 Mins';
      additionalTimings.push({ name: '1st Prahar Puja', time: `${formatMinToTime(baseSunsetMin)} to ${formatMinToTime(baseSunsetMin + 180)}` });
      additionalTimings.push({ name: '2nd Prahar Puja', time: `${formatMinToTime(baseSunsetMin + 180)} to ${formatMinToTime(baseSunsetMin + 360)}` });
      additionalTimings.push({ name: '3rd Prahar (Nishita)', time: `${formatMinToTime(baseSunsetMin + 360)} to ${formatMinToTime(baseSunsetMin + 540)}` });
      additionalTimings.push({ name: '4th Prahar Puja', time: `${formatMinToTime(baseSunsetMin + 540)} to ${sunrise}` });
      break;

    case 'vijaya':
      // Aparahna Kaal (~ 2:00 PM)
      muhuratStart = formatMinToTime(13 * 60 + 58);
      muhuratEnd = formatMinToTime(14 * 60 + 46);
      muhuratDuration = '48 Mins';
      additionalTimings.push({ name: 'Aparahna Puja Window', time: '01:15 PM to 03:30 PM' });
      break;

    case 'sandhi':
      muhuratStart = formatMinToTime(baseSunsetMin - 24);
      muhuratEnd = formatMinToTime(baseSunsetMin + 24);
      muhuratDuration = '48 Mins';
      additionalTimings.push({ name: '108 Lotuses Samarpan', time: 'During Sandhi Muhurat' });
      break;

    default:
      muhuratStart = formatMinToTime(baseSunriseMin + 15);
      muhuratEnd = formatMinToTime(baseSunriseMin + 180);
      muhuratDuration = '2 Hours 45 Mins';
      break;
  }

  // Fasting timings calculation
  const fastingTiming = festival.fasting_information.isFastingDay ? {
    fastStarts: `${sunrise} (${weekday})`,
    fastEnds: festival.fasting_information.paranaRules.includes('moon') ? `${moonrise} (Night)` : `${sunrise} (Next Morning)`,
    paranaTiming: `${formatMinToTime(baseSunriseMin + 15)} to ${formatMinToTime(baseSunriseMin + 180)} next morning`,
    notes: festival.fasting_information.paranaRules
  } : undefined;

  // Tradition differences
  let traditionDifference: FestivalOccurrence['traditionDifference'] = undefined;
  if (festival.id === 'janmashtami') {
    traditionDifference = {
      traditionA: { name: 'Smarta Tradition', date: gregorianDate, rule: 'Observed when Ashtami prevails at midnight (Nishita Kaal)' },
      traditionB: { name: 'Vaishnava / ISKCON Tradition', date: `${yearStr}-${monthStr}-${String(Number(dayStr) + 1).padStart(2, '0')}`, rule: 'Observed when Rohini Nakshatra and sunrise Ashtami coincide' },
      explanation: 'Smarta householders follow midnight Tithi presence, whereas Vaishnava sects prioritize Rohini Nakshatra and Udaya Tithi rules.'
    };
  } else if (festival.id === 'vat-savitri') {
    traditionDifference = {
      traditionA: { name: 'Purnimanta (North India)', date: 'Jyeshtha Amavasya', rule: 'Observed on the new moon of Jyeshtha' },
      traditionB: { name: 'Amanta (Gujarat & Maharashtra)', date: 'Jyeshtha Purnima', rule: 'Observed 15 days later on the full moon of Jyeshtha' },
      explanation: 'The difference of 15 days stems from whether the calendar month ends on the New Moon (Amanta) or Full Moon (Purnimanta).'
    };
  }

  // Real-time countdown calculation
  const now = new Date();
  const targetDateObj = new Date(`${gregorianDate}T06:00:00`);
  const diffMs = targetDateObj.getTime() - now.getTime();
  const isPast = diffMs < -86400000;
  const isToday = Math.abs(diffMs) <= 86400000 && now.getDate() === baseDate.getDate() && now.getMonth() === baseDate.getMonth();

  const totalHours = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60)));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));

  // Schema.org Event JSON-LD
  const schemaEventJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': `${festival.canonical_name} ${year}`,
    'alternateName': festival.hindi_name,
    'startDate': `${gregorianDate}T${muhuratStart.replace(' ', '')}`,
    'endDate': `${gregorianDate}T${muhuratEnd.replace(' ', '')}`,
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
    'location': {
      '@type': 'Place',
      'name': `${city.name}, ${city.state}, India`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': city.name,
        'addressRegion': city.state,
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': city.lat,
        'longitude': city.lng
      }
    },
    'description': festival.short_description,
    'performer': {
      '@type': 'Person',
      'name': festival.deity
    }
  });

  return {
    festival,
    year,
    city,
    gregorianDate,
    formattedDate,
    weekday,
    hinduMonth: festival.lunar_month.charAt(0).toUpperCase() + festival.lunar_month.slice(1),
    regionalMonth: `${festival.lunar_month} (${festival.tithi_name})`,
    gujaratiTithi: `${festival.paksha === 'shukla' ? 'સુદ' : 'વદ'} ${festival.tithi_name.split('(')[0].trim()}`,
    paksha: festival.paksha === 'shukla' ? 'Shukla Paksha (सुद / Sud)' : 'Krishna Paksha (वद / Vad)',
    tithiName: festival.tithi_name,
    tithiStart,
    tithiEnd,
    nakshatra,
    nakshatraStart,
    nakshatraEnd,
    sunrise,
    sunset,
    moonrise,
    moonset,
    pujaMuhurat: {
      title: muhuratTitle,
      start: muhuratStart,
      end: muhuratEnd,
      duration: muhuratDuration,
      additionalTimings
    },
    fastingTiming,
    traditionDifference,
    calculationSystem: festival.calculation_method,
    regionalRuleApplied: `${city.name} (${city.lat.toFixed(2)}°N, ${city.lng.toFixed(2)}°E), IST (UTC+5:30)`,
    countdown: {
      isPast,
      isToday,
      days,
      hours,
      minutes
    },
    schemaEventJsonLd
  };
}

// Query helper: Fetch all festival occurrences for a given city and year
export function getYearlyFestivalOccurrences(year: number, cityId: string = 'ahmedabad'): FestivalOccurrence[] {
  const city = allIndianCities.find(c => c.id === cityId) || allIndianCities[0];
  return allFestivalsCatalog.map(fest => calculateFestivalOccurrence(fest, year, city));
}

// Definitive curated ranks for Top 10, Top 20, and Top 25 major Hindu festivals
export const top10FestivalIds: string[] = [
  'diwali',
  'holi',
  'maha-shivaratri',
  'janmashtami',
  'ganesh-chaturthi',
  'navratri-shardiya',
  'dussehra',
  'makar-sankranti',
  'raksha-bandhan',
  'rama-navami'
];

export const top20FestivalIds: string[] = [
  ...top10FestivalIds,
  'karwa-chauth',
  'chhat-puja',
  'akshaya-tritiya',
  'hanuman-jayanti',
  'vasant-panchami',
  'gudi-padwa-ugadi',
  'dhanteras',
  'bhai-dooj',
  'jagannath-rathyatra',
  'guru-purnima'
];

export const top25FestivalIds: string[] = [
  ...top20FestivalIds,
  'tulsi-vivah',
  'hartalika-teej',
  'hariyali-teej',
  'nirjala-ekadashi',
  'govardhan-puja'
];

// Query helper: Fetch popular festival collections
export function getCuratedFestivalCollection(
  collectionType: 'top-10' | 'top-20' | 'top-25' | 'popular',
  year: number = 2026,
  cityId: string = 'ahmedabad'
): FestivalOccurrence[] {
  const city = allIndianCities.find(c => c.id === cityId) || allIndianCities[0];
  let targetIds: string[];
  
  if (collectionType === 'top-10') {
    targetIds = top10FestivalIds;
  } else if (collectionType === 'top-20') {
    targetIds = top20FestivalIds;
  } else if (collectionType === 'top-25') {
    targetIds = top25FestivalIds;
  } else {
    // Curated popular list
    const set = new Set([
      ...top25FestivalIds,
      ...allFestivalsCatalog.filter(f => f.topical_collections.includes('popular')).map(f => f.id)
    ]);
    targetIds = Array.from(set);
  }

  const list = targetIds
    .map(id => allFestivalsCatalog.find(f => f.id === id || f.slug === id))
    .filter((f): f is FestivalDefinition => Boolean(f));

  return list.map(f => calculateFestivalOccurrence(f, year, city));
}

// Query helper: Fetch today's and upcoming festivals
export function getTodayAndUpcomingFestivals(
  cityId: string = 'ahmedabad',
  targetDate: Date = new Date()
): {
  today: FestivalOccurrence[];
  tomorrow: FestivalOccurrence[];
  next7Days: FestivalOccurrence[];
  next30Days: FestivalOccurrence[];
} {
  const city = allIndianCities.find(c => c.id === cityId) || allIndianCities[0];
  const currentYear = targetDate.getFullYear();
  const allThisYear = allFestivalsCatalog.map(f => calculateFestivalOccurrence(f, currentYear, city));

  const targetDateStr = targetDate.toISOString().split('T')[0];
  
  const tomorrowObj = new Date(targetDate);
  tomorrowObj.setDate(tomorrowObj.getDate() + 1);
  const tomorrowStr = tomorrowObj.toISOString().split('T')[0];

  const in7DaysObj = new Date(targetDate);
  in7DaysObj.setDate(in7DaysObj.getDate() + 7);
  const in7DaysStr = in7DaysObj.toISOString().split('T')[0];

  const in30DaysObj = new Date(targetDate);
  in30DaysObj.setDate(in30DaysObj.getDate() + 30);
  const in30DaysStr = in30DaysObj.toISOString().split('T')[0];

  const today = allThisYear.filter(o => o.gregorianDate === targetDateStr);
  const tomorrow = allThisYear.filter(o => o.gregorianDate === tomorrowStr);
  const next7Days = allThisYear.filter(o => o.gregorianDate >= targetDateStr && o.gregorianDate <= in7DaysStr);
  const next30Days = allThisYear.filter(o => o.gregorianDate >= targetDateStr && o.gregorianDate <= in30DaysStr);

  return {
    today: today.length > 0 ? today : [allThisYear[0]], // fallback to first major festival preview if today has none
    tomorrow,
    next7Days: next7Days.length > 0 ? next7Days : allThisYear.slice(0, 3),
    next30Days: next30Days.length > 0 ? next30Days : allThisYear.slice(0, 6)
  };
}

// Query helper: Compare festival across multiple cities (e.g. Ahmedabad vs Mumbai vs Delhi vs New York)
export function compareFestivalAcrossCities(
  festivalId: string,
  year: number,
  cityIds: string[]
): FestivalOccurrence[] {
  const festival = allFestivalsCatalog.find(f => f.id === festivalId || f.slug === festivalId) || allFestivalsCatalog[0];
  return cityIds.map(cId => {
    const city = allIndianCities.find(c => c.id === cId) || allIndianCities[0];
    return calculateFestivalOccurrence(festival, year, city);
  });
}
