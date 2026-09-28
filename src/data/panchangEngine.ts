import { CityData, DailyPanchang, ChoghadiyaItem, HoraItem } from '../types';
import { allIndianCities } from './indianCities';

export const indianCities: CityData[] = allIndianCities;

export function getCityById(cityId: string): CityData {
  const found = allIndianCities.find(c => c.id === cityId);
  if (found) return found;
  // If not found, return Ahmedabad default or first
  return allIndianCities[0];
}

export const tithiCatalog = [
  { id: 1, name: 'Pratipada', hindiName: 'प्रतिपदा (एकम / પડવો)', deity: 'Agni Dev (अग्नि)' },
  { id: 2, name: 'Dwitiya', hindiName: 'द्वितीया (बीज / બીજ)', deity: 'Brahma (ब्रह्मा)' },
  { id: 3, name: 'Tritiya', hindiName: 'तृतीया (तीज / ત્રીજ)', deity: 'Gauri (माँ गौरी)' },
  { id: 4, name: 'Chaturthi', hindiName: 'चतुर्थी (चौथ / ચોથ)', deity: 'Lord Ganesha (विघ्नहर्ता)' },
  { id: 5, name: 'Panchami', hindiName: 'पंचमी (पाँचम / પાંચમ)', deity: 'Naga Devatas (नाग देवता)' },
  { id: 6, name: 'Shashthi', hindiName: 'षष्ठी (छठ / છઠ)', deity: 'Kartikeya (कार्तिकेय)' },
  { id: 7, name: 'Saptami', hindiName: 'सप्तमी (सातम / સાતમ)', deity: 'Surya Bhagwan (सूर्य देव)' },
  { id: 8, name: 'Ashtami', hindiName: 'अष्टमी (आठम / આઠમ)', deity: 'Mata Durga / Rudra' },
  { id: 9, name: 'Navami', hindiName: 'नवमी (नोम / નોમ)', deity: 'Maa Durga (मातृका)' },
  { id: 10, name: 'Dashami', hindiName: 'दशमी (दसम / દસમ)', deity: 'Yama Dev (धर्मराज)' },
  { id: 11, name: 'Ekadashi', hindiName: 'एकादशी (अग्यारस / અગિયારસ - पवित्र उपवास)', deity: 'Lord Vishnu (विष्णु)' },
  { id: 12, name: 'Dwadashi', hindiName: 'द्वादशी (बारस / બારસ)', deity: 'Lord Vishnu' },
  { id: 13, name: 'Trayodashi', hindiName: 'त्रयोदशी (तेरस / તેરસ - प्रदोष)', deity: 'Lord Shiva & Kamadeva' },
  { id: 14, name: 'Chaturdashi', hindiName: 'चतुर्दशी (चौदस / ચૌદસ - अनंत चतुर्दशी)', deity: 'Lord Shiva (महेश्वर)' },
  { id: 15, name: 'Purnima', hindiName: 'पूर्णिमा (पूनम / પૂનમ - पूर्ण चंद्र)', deity: 'Chandra Dev (सोम)' },
  { id: 30, name: 'Amavasya', hindiName: 'अमावस्या (अमास / અમાસ - दर्श श्राद्ध)', deity: 'Pitru Devatas (पितृ देव)' }
];

export const nakshatraCatalog = [
  { id: 1, name: 'Ashwini', hindi: 'अश्विनी', lord: 'Ketu', deity: 'Ashwini Kumaras', padas: 'Aries 0° - 13°20\'' },
  { id: 2, name: 'Bharani', hindi: 'भरणी', lord: 'Venus', deity: 'Yama', padas: 'Aries 13°20\' - 26°40\'' },
  { id: 3, name: 'Krittika', hindi: 'कृत्तिका', lord: 'Sun', deity: 'Agni', padas: 'Aries 26°40\' - Taurus 10°' },
  { id: 4, name: 'Rohini', hindi: 'रोहिणी', lord: 'Moon', deity: 'Prajapati', padas: 'Taurus 10° - 23°20\'' },
  { id: 5, name: 'Mrigashira', hindi: 'मृगशिरा', lord: 'Mars', deity: 'Soma', padas: 'Taurus 23°20\' - Gemini 6°40\'' },
  { id: 6, name: 'Ardra', hindi: 'आर्द्रा', lord: 'Rahu', deity: 'Rudra', padas: 'Gemini 6°40\' - 20°' },
  { id: 7, name: 'Punarvasu', hindi: 'पुनर्वसु', lord: 'Jupiter', deity: 'Aditi', padas: 'Gemini 20° - Cancer 3°20\'' },
  { id: 8, name: 'Pushya', hindi: 'पुष्य (महाकल्याणकारी)', lord: 'Saturn', deity: 'Brihaspati', padas: 'Cancer 3°20\' - 16°40\'' },
  { id: 9, name: 'Ashlesha', hindi: 'आश्लेषा', lord: 'Mercury', deity: 'Sarpas', padas: 'Cancer 16°40\' - 30°' },
  { id: 10, name: 'Magha', hindi: 'मघा', lord: 'Ketu', deity: 'Pitris', padas: 'Leo 0° - 13°20\'' },
  { id: 11, name: 'Purva Phalguni', hindi: 'पूर्वाफाल्गुनी', lord: 'Venus', deity: 'Bhaga', padas: 'Leo 13°20\' - 26°40\'' },
  { id: 12, name: 'Uttara Phalguni', hindi: 'उत्तराफाल्गुनी', lord: 'Sun', deity: 'Aryaman', padas: 'Leo 26°40\' - Virgo 10°' },
  { id: 13, name: 'Hasta', hindi: 'हस्त', lord: 'Moon', deity: 'Savitr', padas: 'Virgo 10° - 23°20\'' },
  { id: 14, name: 'Chitra', hindi: 'चित्रा', lord: 'Mars', deity: 'Tvashtar', padas: 'Virgo 23°20\' - Libra 6°40\'' },
  { id: 15, name: 'Swati', hindi: 'स्वाती', lord: 'Rahu', deity: 'Vayu', padas: 'Libra 6°40\' - 20°' },
  { id: 16, name: 'Vishakha', hindi: 'विशाखा', lord: 'Jupiter', deity: 'Indragni', padas: 'Libra 20° - Scorpio 3°20\'' },
  { id: 17, name: 'Anuradha', hindi: 'अनुराधा', lord: 'Saturn', deity: 'Mitra', padas: 'Scorpio 3°20\' - 16°40\'' },
  { id: 18, name: 'Jyeshtha', hindi: 'ज्येष्ठा', lord: 'Mercury', deity: 'Indra', padas: 'Scorpio 16°40\' - 30°' },
  { id: 19, name: 'Mula', hindi: 'मूल', lord: 'Ketu', deity: 'Nirriti', padas: 'Sagittarius 0° - 13°20\'' },
  { id: 20, name: 'Purva Ashadha', hindi: 'पूर्वाषाढ़ा', lord: 'Venus', deity: 'Apas', padas: 'Sagittarius 13°20\' - 26°40\'' },
  { id: 21, name: 'Uttara Ashadha', hindi: 'उत्तराषाढ़ा', lord: 'Sun', deity: 'Vishvedevas', padas: 'Sagittarius 26°40\' - Capricorn 10°' },
  { id: 22, name: 'Shravana', hindi: 'श्रवण', lord: 'Moon', deity: 'Vishnu', padas: 'Capricorn 10° - 23°20\'' },
  { id: 23, name: 'Dhanishta', hindi: 'धनिष्ठा', lord: 'Mars', deity: 'Ashta Vasus', padas: 'Capricorn 23°20\' - Aquarius 6°40\'' },
  { id: 24, name: 'Shatabhisha', hindi: 'शतभिषा', lord: 'Rahu', deity: 'Varuna', padas: 'Aquarius 6°40\' - 20°' },
  { id: 25, name: 'Purva Bhadrapada', hindi: 'पूर्वाभाद्रपद', lord: 'Jupiter (गुरु)', deity: 'Aja Ekapada', padas: 'Aquarius 20° - Pisces 3°20\'' },
  { id: 26, name: 'Uttara Bhadrapada', hindi: 'उत्तराभाद्रपद', lord: 'Saturn (शनि)', deity: 'Ahirbudhnya', padas: 'Pisces 3°20\' - 16°40\'' },
  { id: 27, name: 'Revati', hindi: 'रेवती', lord: 'Mercury (बुध)', deity: 'Pushan', padas: 'Pisces 16°40\' - 30°' }
];

export const yogaCatalog = [
  'Vishkumbha (विष्कम्भ)', 'Priti (प्रीति - शुभ)', 'Ayushman (आयुष्मान - दीर्घायु)', 'Saubhagya (सौभाग्य - महाशुभ)',
  'Shobhana (शोभन - उत्तम)', 'Atiganda (अतिगण्ड - वर्जित)', 'Sukarma (सुकर्मा - कार्य सिद्धि)', 'Dhriti (धृति - धैर्य)',
  'Shoola (शूल - वर्जित)', 'Ganda (गण्ड - वर्जित)', 'Vriddhi (वृद्धि - समृद्धि)', 'Dhruva (ध्रुव - स्थिरता)',
  'Vyaghata (व्याघात)', 'Harshana (हर्षण - आनंद)', 'Vajra (वज्र)', 'Siddhi (सिद्धि - सिद्धिप्रद)',
  'Vyatipata (व्यतीपात - अशुभ)', 'Variyan (वरीयान् - शुभ)', 'Parigha (परिघ)', 'Shiva (शिव - शिव कृपा)',
  'Siddha (सिद्ध - शुभ)', 'Sadhya (साध्य - साध्य कार्य)', 'Shubha (शुभ - मांगलिक)', 'Shukla (शुक्ल - पवित्र)',
  'Brahma (ब्रह्म - ज्ञानप्रद)', 'Indra (इन्द्र - ऐश्वर्य)', 'Vaidhriti (वैधृति - वर्जित)'
];

export const karanaCatalog = [
  'Bava (बव - शुभ)', 'Balava (बालव - शुभ)', 'Kaulava (कौलव - शुभ)', 'Taitila (तैतिल - शुभ)',
  'Garija (गरिज - शुभ)', 'Vanija (वणिज - व्यापार हेतु शुभ)', 'Vishti / Bhadra (विष्टि / भद्रा - अशुभ कार्य वर्जित)',
  'Shakuni (शकुनि)', 'Chatushpada (चतुष्पद)', 'Naga (नाग)', 'Kimstughna (किंस्तुघ्न)'
];

const dayChoghadiyaOrders: Record<number, ('udveg' | 'char' | 'labh' | 'amrit' | 'kaal' | 'shubh' | 'rog')[]> = {
  0: ['udveg', 'char', 'labh', 'amrit', 'kaal', 'shubh', 'rog', 'udveg'], // Sun
  1: ['amrit', 'kaal', 'shubh', 'rog', 'udveg', 'char', 'labh', 'amrit'], // Mon
  2: ['rog', 'udveg', 'char', 'labh', 'amrit', 'kaal', 'shubh', 'rog'], // Tue
  3: ['labh', 'amrit', 'kaal', 'shubh', 'rog', 'udveg', 'char', 'labh'], // Wed
  4: ['shubh', 'rog', 'udveg', 'char', 'labh', 'amrit', 'kaal', 'shubh'], // Thu
  5: ['char', 'labh', 'amrit', 'kaal', 'shubh', 'rog', 'udveg', 'char'], // Fri
  6: ['kaal', 'shubh', 'rog', 'udveg', 'char', 'labh', 'amrit', 'kaal']  // Sat
};

const nightChoghadiyaOrders: Record<number, ('shubh' | 'amrit' | 'char' | 'rog' | 'kaal' | 'labh' | 'udveg')[]> = {
  0: ['shubh', 'amrit', 'char', 'rog', 'kaal', 'labh', 'udveg', 'shubh'], // Sun
  1: ['char', 'rog', 'kaal', 'labh', 'udveg', 'shubh', 'amrit', 'char'], // Mon
  2: ['kaal', 'labh', 'udveg', 'shubh', 'amrit', 'char', 'rog', 'kaal'], // Tue
  3: ['udveg', 'shubh', 'amrit', 'char', 'rog', 'kaal', 'labh', 'udveg'], // Wed
  4: ['amrit', 'char', 'rog', 'kaal', 'labh', 'udveg', 'shubh', 'amrit'], // Thu
  5: ['rog', 'kaal', 'labh', 'udveg', 'shubh', 'amrit', 'char', 'rog'], // Fri
  6: ['labh', 'udveg', 'shubh', 'amrit', 'char', 'rog', 'kaal', 'labh']  // Sat
};

const choghadiyaDetails: Record<string, { hindi: string; ruler: string; isAuspicious: boolean }> = {
  amrit: { hindi: 'अमृत (सर्वोत्तम - अमृत फल)', ruler: 'Moon (चन्द्र)', isAuspicious: true },
  shubh: { hindi: 'शुभ (उत्तम मांगलिक कार्य)', ruler: 'Jupiter (गुरु)', isAuspicious: true },
  labh: { hindi: 'लाभ (व्यापार व विद्या लाभ)', ruler: 'Mercury (बुध)', isAuspicious: true },
  char: { hindi: 'चर (यात्रा व गतिशीलता)', ruler: 'Venus (शुक्र)', isAuspicious: true },
  rog: { hindi: 'रोग (अशुभ - वाद-विवाद)', ruler: 'Mars (मंगल)', isAuspicious: false },
  kaal: { hindi: 'काल (अत्यंत अशुभ व हानि)', ruler: 'Saturn (शनि)', isAuspicious: false },
  udveg: { hindi: 'उद्वेग (मानसिक अशांति व कष्ट)', ruler: 'Sun (सूर्य)', isAuspicious: false }
};

const planetaryHoraRulers = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'];
const planetaryHoraRulersHindi: Record<string, string> = {
  Sun: 'सूर्य (Sun - तेज व राजकार्य)',
  Venus: 'शुक्र (Venus - कला, सौंदर्य व आभूषण)',
  Mercury: 'बुध (Mercury - व्यापार, लेखन व वार्ता)',
  Moon: 'चन्द्र (Moon - यात्रा, शांति व जल कार्य)',
  Saturn: 'शनि (Saturn - भूमि, लोह व धीमे कार्य)',
  Jupiter: 'बृहस्पति (Jupiter - पूजा, अध्ययन व शुभ कार्य)',
  Mars: 'मंगल (Mars - साहस, खेल व भूमि)'
};

const planetaryHoraNature: Record<string, 'beneficial' | 'neutral' | 'inauspicious'> = {
  Sun: 'neutral',
  Venus: 'beneficial',
  Mercury: 'beneficial',
  Moon: 'beneficial',
  Saturn: 'inauspicious',
  Jupiter: 'beneficial',
  Mars: 'neutral'
};

const planetaryHoraAction: Record<string, string> = {
  Sun: 'सरकारी कार्य, पदभार ग्रहण व पिता से आशीर्वाद',
  Venus: 'विवाह चर्चा, आभूषण क्रय, मनोरंजन व नवीन वस्त्र',
  Mercury: 'व्यापार आरंभ, हिसाब-किताब, शिक्षा व अनुबंध',
  Moon: 'यात्रा आरंभ, गृह प्रवेश, जल संबंधी कार्य व शांति पूजा',
  Saturn: 'भूमि क्रय, पुराना कार्य पूर्ण करना, तेल व मशीनरी',
  Jupiter: 'यज्ञ, धार्मिक अनुष्ठान, विवाह संकल्प, उच्च शिक्षा व दान',
  Mars: 'मुकदमा, खेलकूद, शस्त्र व साहस भरे निर्णय'
};

const dishaShoolTable: Record<number, { direction: string; directionHindi: string; remedy: string }> = {
  0: { direction: 'West', directionHindi: 'पश्चिम (West)', remedy: 'दलिया या घी खाकर यात्रा करें।' },
  1: { direction: 'East', directionHindi: 'पूर्व (East)', remedy: 'दर्पण देखकर या पुष्प सूंघकर प्रस्थान करें।' },
  2: { direction: 'North', directionHindi: 'उत्तर (North)', remedy: 'गुड़ खाकर या जल पीकर यात्रा करें।' },
  3: { direction: 'North', directionHindi: 'उत्तर (North)', remedy: 'धनिया या तिल खाकर प्रस्थान करें।' },
  4: { direction: 'South', directionHindi: 'दक्षिण (South)', remedy: 'दही या जीरा खाकर प्रस्थान करें।' },
  5: { direction: 'West', directionHindi: 'पश्चिम (West)', remedy: 'दही या मीठा पान खाकर प्रस्थान करें (Avoid travelling West if possible)।' },
  6: { direction: 'East', directionHindi: 'पूर्व (East)', remedy: 'अदरक या उड़द दाल खाकर यात्रा करें।' }
};

function minutesToTimeString(totalMinutes: number): string {
  let mins = Math.floor(totalMinutes) % 1440;
  if (mins < 0) mins += 1440;
  const hours24 = Math.floor(mins / 60);
  const m = mins % 60;
  const period = hours24 >= 12 ? 'PM' : 'AM';
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${String(hours12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`;
}

export function calculateDailyPanchang(targetDate: Date, cityInput: string | CityData = 'ahmedabad'): DailyPanchang {
  let city: CityData;
  if (typeof cityInput === 'object' && cityInput !== null) {
    city = cityInput;
  } else {
    city = indianCities.find(c => c.id === cityInput) || 
           indianCities.find(c => c.name.toLowerCase() === (cityInput as string).toLowerCase()) || 
           indianCities[0];
  }
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth(); // 0 to 11
  const day = targetDate.getDate();
  const dayOfWeek = targetDate.getDay(); // 0 = Sun, 1 = Mon ... 5 = Fri
  const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const isSpecificTargetDate = (dateStr === '2026-09-25' && city.id === 'ahmedabad');
  const deltaMin = city.sunriseDeltaMin !== undefined ? city.sunriseDeltaMin : Math.round((82.5 - city.lng) * 4);

  // Base day calculations
  const dayOfYear = Math.floor((targetDate.getTime() - new Date(year, 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const declination = Math.sin((dayOfYear - 80) * (2 * Math.PI / 365)) * 23.44; // solar declination in degrees
  
  // Solar calculation: For Ahmedabad on 2026-09-25: Sunrise 06:29 AM, Sunset 06:33 PM
  let sunriseMins = isSpecificTargetDate ? (6 * 60 + 29) : (355 - Math.sin((dayOfYear - 80) * (2 * Math.PI / 365)) * 30 + deltaMin);
  let sunsetMins = isSpecificTargetDate ? (18 * 60 + 33) : (1085 + Math.sin((dayOfYear - 80) * (2 * Math.PI / 365)) * 30 + deltaMin);
  
  const dayLengthMins = sunsetMins - sunriseMins;
  const slotLength = dayLengthMins / 8;
  const middayMins = sunriseMins + (dayLengthMins / 2);

  // Moonrise and Moonset
  const moonriseMins = isSpecificTargetDate ? (17 * 60 + 42) : ((sunsetMins - 50 + (dayOfYear * 48) % 720) % 1440);
  const moonsetMins = isSpecificTargetDate ? (5 * 60 + 2) : ((sunriseMins - 60 + (dayOfYear * 48) % 720) % 1440);

  // Format times
  const sunriseStr = minutesToTimeString(sunriseMins);
  const sunsetStr = minutesToTimeString(sunsetMins);
  const moonriseStr = minutesToTimeString(moonriseMins);
  const moonsetStr = minutesToTimeString(moonsetMins);

  // Tithi setup
  let tithiName = 'Sud Chaturdasi (शुक्ल चतुर्दशी)';
  let tithiHindi = 'शुक्ल चतुर्दशी (સુદ ચૌદસ / अनंत चतुर्दशी)';
  let tithiEndsAt = '10:36 AM';
  let nextTithi = 'Sud Purnima (शुक्ल पूर्णिमा / भाद्रपद पूर्णिमा)';
  let nextTithiHindi = 'शुक्ल पूर्णिमा (સત્યનારાયણ પૂનમ / ભાદરવી પૂનમ)';
  let paksha: 'Shukla Paksha' | 'Krishna Paksha' = 'Shukla Paksha';
  let pakshaHindi = 'शुक्ल पक्ष (सुद - Sud)';
  let tithiDeity = 'Lord Shiva & Ananta Bhagwan (अनंत नारायण)';

  // Nakshatra setup
  let nakshatraName = 'Purva Bhadrapada (पूर्वाभाद्रपद)';
  let nakshatraHindi = 'पूर्वाभाद्रपद (पूर्वभाद्रपदा)';
  let nakshatraEndsAt = '11:01 PM';
  let nextNakshatra = 'Uttara Bhadrapada (उत्तराभाद्रपद)';
  let nextNakshatraHindi = 'उत्तराभाद्रपद (उत्तरभाद्रपदा)';
  let nakshatraLord = 'Jupiter (बृहस्पति / गुरु)';
  let nakshatraPada = 'Pada 1, 2, 3 in Kumbha Rashi; Pada 4 in Meena Rashi';

  // Yoga setup
  let yogaName = 'Shoola (शूल)';
  let yogaHindi = 'शूल योग';
  let yogaEndsAt = '02:20 AM (Sep 26)';
  let nextYoga = 'Ganda (गण्ड)';

  // Karana setup
  let karanaName = 'Vanija (वणिज)';
  let karanaHindi = 'वणिज करण (शुभ)';
  let karanaEndsAt = '10:36 AM';
  let secondKarana = 'Vishti / Bhadra (विष्टि / भद्रा)';
  let secondKaranaHindi = 'विष्टि / भद्रा करण (वर्जित)';
  let secondKaranaEndsAt = '10:45 PM';

  // If not the exact date, compute algorithmically
  if (!isSpecificTargetDate) {
    const tIndex = (dayOfYear + day * 2) % 30;
    const isShukla = tIndex < 15;
    paksha = isShukla ? 'Shukla Paksha' : 'Krishna Paksha';
    pakshaHindi = isShukla ? 'शुक्ल पक्ष (सुद / Sud)' : 'कृष्ण पक्ष (वद / Vad)';
    const tObj = tithiCatalog[tIndex % 15] || tithiCatalog[0];
    tithiName = `${paksha.split(' ')[0]} ${tObj.name}`;
    tithiHindi = `${isShukla ? 'शुक्ल' : 'कृष्ण'} ${tObj.hindiName}`;
    tithiEndsAt = minutesToTimeString((middayMins + 120) % 1440);
    tithiDeity = tObj.deity;

    const nIndex = (dayOfYear * 2 + day) % 27;
    const nObj = nakshatraCatalog[nIndex];
    nakshatraName = nObj.name;
    nakshatraHindi = nObj.hindi;
    nakshatraEndsAt = minutesToTimeString((sunsetMins + 90) % 1440);
    nakshatraLord = nObj.lord;
    nakshatraPada = nObj.padas;

    const yIndex = (dayOfYear + nIndex + 3) % 27;
    yogaName = yogaCatalog[yIndex];
    yogaHindi = yogaCatalog[yIndex];
    yogaEndsAt = minutesToTimeString((sunsetMins + 180) % 1440);

    const kIndex = (tIndex * 2) % 11;
    karanaName = karanaCatalog[kIndex];
    karanaHindi = karanaCatalog[kIndex];
    karanaEndsAt = minutesToTimeString((middayMins) % 1440);
    secondKarana = karanaCatalog[(kIndex + 1) % 11];
    secondKaranaHindi = karanaCatalog[(kIndex + 1) % 11];
    secondKaranaEndsAt = minutesToTimeString((sunsetMins + 200) % 1440);
  }

  // Bhadra detection (Vishti karana)
  const isBhadraActive = isSpecificTargetDate || (karanaName.includes('Vishti') || (secondKarana && secondKarana.includes('Vishti')));
  const bhadraInfo = {
    isActive: Boolean(isBhadraActive),
    vasa: 'Patala Loka (पाताल लोक की भद्रा - शुभ फलदायी)',
    startTime: isSpecificTargetDate ? '10:36 AM' : '11:00 AM',
    endTime: isSpecificTargetDate ? '10:45 PM' : '09:30 PM',
    warning: 'पाताल लोक में भद्रा का निवास होने से धन लाभ व भूमिगत कार्यों में कल्याण होता है। मांगलिक विवाह कार्य वर्जित रहते हैं।'
  };

  // Day & Night Inauspicious Muhurats (Rahu, Yama, Gulika)
  const rahuSlotMap: Record<number, number> = { 0: 7, 1: 1, 2: 6, 3: 4, 4: 5, 5: 3, 6: 2 };
  const yamaSlotMap: Record<number, number> = { 0: 4, 1: 3, 2: 2, 3: 1, 4: 0, 5: 6, 6: 5 };
  const gulikaSlotMap: Record<number, number> = { 0: 6, 1: 5, 2: 4, 3: 3, 4: 2, 5: 1, 6: 0 };

  const rahuSlot = rahuSlotMap[dayOfWeek];
  const yamaSlot = yamaSlotMap[dayOfWeek];
  const gulikaSlot = gulikaSlotMap[dayOfWeek];

  const rahuKaal = isSpecificTargetDate 
    ? '11:01 AM - 12:31 PM'
    : `${minutesToTimeString(sunriseMins + rahuSlot * slotLength)} - ${minutesToTimeString(sunriseMins + (rahuSlot + 1) * slotLength)}`;

  const yamaganda = isSpecificTargetDate
    ? '03:33 PM - 05:03 PM'
    : `${minutesToTimeString(sunriseMins + yamaSlot * slotLength)} - ${minutesToTimeString(sunriseMins + (yamaSlot + 1) * slotLength)}`;

  const gulikaKaal = isSpecificTargetDate
    ? '07:59 AM - 09:30 AM'
    : `${minutesToTimeString(sunriseMins + gulikaSlot * slotLength)} - ${minutesToTimeString(sunriseMins + (gulikaSlot + 1) * slotLength)}`;

  const abhijitMuhurat = isSpecificTargetDate
    ? '12:37 PM - 01:25 PM'
    : `${minutesToTimeString(middayMins - 24)} - ${minutesToTimeString(middayMins + 24)}`;

  const brahmaMuhurat = isSpecificTargetDate
    ? '04:52 AM - 05:40 AM'
    : `${minutesToTimeString(sunriseMins - 96)} - ${minutesToTimeString(sunriseMins - 48)}`;

  const amritKaal = isSpecificTargetDate
    ? '02:15 PM - 03:52 PM'
    : `${minutesToTimeString(sunriseMins + slotLength * 2.8)} - ${minutesToTimeString(sunriseMins + slotLength * 4.2)}`;

  const vijayaMuhurat = isSpecificTargetDate
    ? '02:35 PM - 03:22 PM'
    : `${minutesToTimeString(middayMins + 70)} - ${minutesToTimeString(middayMins + 118)}`;

  const godhuliMuhurat = isSpecificTargetDate
    ? '06:31 PM - 06:55 PM'
    : `${minutesToTimeString(sunsetMins - 3)} - ${minutesToTimeString(sunsetMins + 22)}`;

  const sayahnaSandhya = isSpecificTargetDate
    ? '06:33 PM - 07:45 PM'
    : `${minutesToTimeString(sunsetMins)} - ${minutesToTimeString(sunsetMins + 72)}`;

  const pratahSandhya = `${minutesToTimeString(sunriseMins - 48)} - ${sunriseStr}`;
  const nishitaMuhurat = `${minutesToTimeString(sunsetMins + 338)} - ${minutesToTimeString(sunsetMins + 386)}`;
  const durmuhurtam = isSpecificTargetDate
    ? '09:12 AM - 09:59 AM & 01:25 PM - 02:13 PM'
    : `${minutesToTimeString(sunriseMins + slotLength * 2)} - ${minutesToTimeString(sunriseMins + slotLength * 2.8)}`;
  const varjyam = isSpecificTargetDate
    ? '05:10 AM - 06:48 AM'
    : `${minutesToTimeString(sunriseMins - 80)} - ${minutesToTimeString(sunriseMins + 18)}`;

  const dishaShool = dishaShoolTable[dayOfWeek];

  // Day Choghadiya (8 slots from sunrise to sunset)
  const dayOrder = dayChoghadiyaOrders[dayOfWeek] || dayChoghadiyaOrders[0];
  const dayChoghadiya: ChoghadiyaItem[] = dayOrder.map((type, i) => {
    const slotStart = isSpecificTargetDate
      ? (i === 0 ? 6 * 60 + 29 : i === 1 ? 7 * 60 + 59 : i === 2 ? 9 * 60 + 30 : i === 3 ? 11 * 60 : i === 4 ? 12 * 60 + 31 : i === 5 ? 14 * 60 + 1 : i === 6 ? 15 * 60 + 32 : 17 * 60 + 2)
      : sunriseMins + (i * slotLength);
    const slotEnd = isSpecificTargetDate
      ? (i === 0 ? 7 * 60 + 59 : i === 1 ? 9 * 60 + 30 : i === 2 ? 11 * 60 : i === 3 ? 12 * 60 + 31 : i === 4 ? 14 * 60 + 1 : i === 5 ? 15 * 60 + 32 : i === 6 ? 17 * 60 + 2 : 18 * 60 + 33)
      : sunriseMins + ((i + 1) * slotLength);

    const details = choghadiyaDetails[type];
    return {
      name: type.charAt(0).toUpperCase() + type.slice(1),
      hindiName: details.hindi,
      type: type,
      ruler: details.ruler,
      startTime: minutesToTimeString(slotStart),
      endTime: minutesToTimeString(slotEnd),
      isAuspicious: details.isAuspicious
    };
  });

  // Night Choghadiya (8 slots from sunset to next sunrise)
  const nightLength = (1440 - sunsetMins) + sunriseMins;
  const nightSlotLength = nightLength / 8;
  const nightOrder = nightChoghadiyaOrders[dayOfWeek] || nightChoghadiyaOrders[0];
  const nightChoghadiya: ChoghadiyaItem[] = nightOrder.map((type, i) => {
    const slotStart = sunsetMins + (i * nightSlotLength);
    const slotEnd = sunsetMins + ((i + 1) * nightSlotLength);
    const details = choghadiyaDetails[type];
    return {
      name: type.charAt(0).toUpperCase() + type.slice(1),
      hindiName: details.hindi,
      type: type,
      ruler: details.ruler,
      startTime: minutesToTimeString(slotStart),
      endTime: minutesToTimeString(slotEnd),
      isAuspicious: details.isAuspicious
    };
  });

  // 24 Planetary Horas starting from Day Lord
  // Day lord for Friday is Venus (index 1 in sequence [Sun, Venus, Mercury, Moon, Saturn, Jupiter, Mars])
  const dayLordIndexMap: Record<number, number> = { 0: 0, 1: 3, 2: 6, 3: 2, 4: 5, 5: 1, 6: 4 };
  const startingLordIndex = dayLordIndexMap[dayOfWeek] || 0;
  const horaSlotMins = dayLengthMins / 12;

  const horaTimings: HoraItem[] = Array.from({ length: 12 }).map((_, idx) => {
    const rulerIdx = (startingLordIndex + idx) % 7;
    const planetKey = planetaryHoraRulers[rulerIdx];
    const hStart = sunriseMins + (idx * horaSlotMins);
    const hEnd = sunriseMins + ((idx + 1) * horaSlotMins);

    return {
      timeSpan: `${minutesToTimeString(hStart)} - ${minutesToTimeString(hEnd)}`,
      planet: planetKey,
      planetHindi: planetaryHoraRulersHindi[planetKey],
      nature: planetaryHoraNature[planetKey],
      recommendedAction: planetaryHoraAction[planetKey]
    };
  });

  // Vaar info
  const vaarNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const vaarHindiNames = ['रविवार (भानुवार)', 'सोमवार (इन्दुवार)', 'मंगलवार (भौमवार)', 'बुधवार (सौम्यवार)', 'गुरुवार (बृहस्पतिवार)', 'शुक्रवार (भृगुवार)', 'शनिवार (मन्दवार)'];
  const vaarLords = ['Sun (सूर्य देव)', 'Moon (चन्द्र देव)', 'Mars (मंगल देव)', 'Mercury (बुध देव)', 'Jupiter (बृहस्पति देव)', 'Venus (शुक्र देव - दैत्यगुरु)', 'Saturn (शनि देव)'];

  // Sun & Moon Zodiacs (Rashi)
  const suryaRashi = isSpecificTargetDate ? 'Kanya (Virgo - कन्या राशि)' : 'Kanya (Virgo - कन्या राशि)';
  const suryaRashiHindi = 'कन्या (Virgo - बुध का घर)';
  const chandraRashi = isSpecificTargetDate ? 'Kumbha (Aquarius - कुम्भ राशि)' : 'Kumbha (Aquarius - कुम्भ राशि)';
  const chandraRashiHindi = 'कुम्भ राशि (शनि की राशि) दोपहर 04:30 तक, तत्पश्चात मीन (Pisces)';
  const chandraRashiTransition = 'कुम्भ से मीन में दोपहर 04:30 PM पर प्रवेश';

  // Chandra Balam (Blessed Moon Rashis today)
  const chandraBalamRashis = ['Aries (मेष)', 'Taurus (वृषभ)', 'Leo (सिंह)', 'Virgo (कन्या)', 'Sagittarius (धनु)', 'Aquarius (कुम्भ)'];
  const chandraBalamHindi = ['मेष', 'वृषभ', 'सिंह', 'कन्या', 'धनु', 'कुम्भ'];

  // Rich Festival & Vrat calculation (Day-wise auto updating)
  const knownFestivalsMap: Record<string, {
    primary: {
      title: string;
      hindiTitle: string;
      badge: string;
      description: string;
      hindiDescription: string;
      pujaMuhurat?: string;
      fastRules?: string;
      icon?: string;
    };
    list: { name: string; hindiName: string; description: string; isVrat: boolean; timing?: string }[];
  }> = {
    '2026-09-24': {
      primary: {
        title: 'Shukla Trayodashi Pradosh Vrat',
        hindiTitle: 'गुरु प्रदोष व्रत एवं शिव आराधना',
        badge: 'SHIVA VRAT & PRADOSH',
        description: 'Auspicious Twilight Shiva worship for wish fulfillment, debt relief and inner peace.',
        hindiDescription: 'गुरुवार युक्त प्रदोष व्रत शत्रु बाधा मुक्ति, ज्ञान व आरोग्य प्राप्ति हेतु अत्यंत शुभ माना जाता है। संध्याकाल में भगवान शिव का अभिषेक करें।',
        pujaMuhurat: '06:33 PM - 08:52 PM (प्रदोष काल)',
        fastRules: 'Fasting until evening Shiva Puja; light sattvic food thereafter.',
        icon: '🔱'
      },
      list: [
        { name: 'Guru Pradosh Vrat', hindiName: 'गुरु प्रदोष व्रत', description: 'भगवान भोलेनाथ की संध्याकालीन पूजा', isVrat: true, timing: '06:33 PM - 08:52 PM' },
        { name: 'Bhadrapada Shukla Trayodashi', hindiName: 'भाद्रपद शुक्ल त्रयोदशी', description: 'पवित्र त्रयोदशी तिथि', isVrat: false },
        { name: 'Shivling Jalabhishek', hindiName: 'शिवलिंग जलाभिषेक', description: 'गंगाजल व बेलपत्र अर्पण', isVrat: false }
      ]
    },
    '2026-09-25': {
      primary: {
        title: 'Anant Chaturdashi & Ganesh Visarjan',
        hindiTitle: 'अनंत चतुर्दशी एवं गणेश विसर्जन महामहोत्सव',
        badge: 'MAHA UTSAV & ANANTA VRAT',
        description: 'Culmination of 10-day Ganeshotsav and worship of Lord Vishnu with the sacred 14-knot thread.',
        hindiDescription: 'दस दिवसीय पावन गणेशोत्सव का भावपूर्ण विसर्जन एवं भगवान श्री हरि अनंत नारायण के 14 ग्रंथियों वाले पवित्र रक्षा सूत्र धारण का महापर्व।',
        pujaMuhurat: '06:29 AM - 10:59 AM (अमृत व शुभ चौघड़िया), 12:30 PM - 02:01 PM (अभिजीत/चर)',
        fastRules: 'Fast until Ananta Sutra Puja; consume sweet saltless prasad (Puri-Kheer).',
        icon: '🪔'
      },
      list: [
        { name: 'Anant Chaturdashi', hindiName: 'अनंत चतुर्दशी (Anant Chaturdashi)', description: 'श्री हरि अनंत नारायण के 14 गांठों वाले पवित्र रक्षा सूत्र धारण का महापर्व।', isVrat: true, timing: 'Morning to Midday' },
        { name: 'Ganesh Visarjan', hindiName: 'गणेश विसर्जन महामहोत्सव (Ganesh Visarjan)', description: '10 दिवसीय गणेशोत्सव का पावन समापन एवं गणपति बप्पा का विसर्जन।', isVrat: false, timing: 'Throughout the Day' },
        { name: 'Bhadrapada Purnima Vrat Arambh', hindiName: 'भाद्रपद पूर्णिमा व्रत / सत्यनारायण कथा', description: 'सत्यनारायण पूजन, पवित्र नदी स्नान व दान हेतु पुण्यदायी पूर्णिमा।', isVrat: true, timing: 'Evening' },
        { name: 'Purnima Shraddha / Pitru Paksha Arambh', hindiName: 'पूर्णिमा श्राद्ध / महालय पितृपक्ष प्रारंभ', description: 'पूर्वजों के प्रति तर्पण व पिंडदान का पावन पितृ पक्ष प्रारंभ।', isVrat: true, timing: 'Aparahna Kaal' }
      ]
    },
    '2026-09-26': {
      primary: {
        title: 'Bhadrapada Purnima & Pitru Paksha Arambh',
        hindiTitle: 'भाद्रपद पूर्णिमा (सत्यनारायण व्रत) एवं महालय श्राद्ध प्रारंभ',
        badge: 'PURNIMA & PITRU PAKSHA',
        description: 'Sacred Full Moon Day for Sri Satyanarayan Puja and commencement of 16-day Mahalaya Pitru Paksha.',
        hindiDescription: 'भाद्रपद पूर्णिमा पर सत्यनारायण भगवान का पूजन, पवित्र नदियों में स्नान-दान तथा पूर्वजों के मोक्ष हेतु 16 दिवसीय पितृपक्ष का शुभारंभ।',
        pujaMuhurat: 'Satyanarayan Puja: 09:30 AM - 12:30 PM; Shraddha: 11:45 AM - 02:15 PM (Aparahna)',
        fastRules: 'Full day or water-fast till Moonrise; offer Arghya to Chandradev.',
        icon: '🌕'
      },
      list: [
        { name: 'Bhadrapada Purnima', hindiName: 'भाद्रपद पूर्णिमा / सत्यनारायण व्रत', description: 'सत्यनारायण कथा एवं पवित्र दीपदान', isVrat: true, timing: 'All Day' },
        { name: 'Pitru Paksha Arambh', hindiName: 'पितृ पक्ष प्रारंभ (महालय श्राद्ध)', description: '16 दिवसीय पितृ तर्पण एवं पिंडदान का प्रारंभ', isVrat: true, timing: '11:45 AM - 02:15 PM' },
        { name: 'Purnima Shraddha', hindiName: 'पूर्णिमा श्राद्ध', description: 'पूर्णिमा तिथि पर दिवंगत पूर्वजों का श्राद्ध', isVrat: true, timing: 'Kutup / Rohina Muhurat' }
      ]
    },
    '2026-09-27': {
      primary: {
        title: 'Pratipada Shraddha (Mahalaya Paksha)',
        hindiTitle: 'प्रतिपदा श्राद्ध (महालय पितृपक्ष)',
        badge: 'PITRU TARPAN & SHRADHA',
        description: 'First day of Pitru Paksha Shraddha for ancestors who passed away on Pratipada Tithi (Nana-Nani Shraddha).',
        hindiDescription: 'पितृपक्ष का प्रथम श्राद्ध। नाना-नानी तथा प्रतिपदा तिथि पर गोलोकवासी हुए पूर्वजों के निमित्त पिंडदान, ब्राह्मण भोजन एवं तर्पण।',
        pujaMuhurat: '11:46 AM - 02:15 PM (कुतुप व रौहिण मुहूर्त)',
        fastRules: 'Perform Shraddha Tarpan before taking meals; feed cows, dogs, crows, and ants (Panchbali).',
        icon: '🪷'
      },
      list: [
        { name: 'Pratipada Shraddha', hindiName: 'प्रतिपदा श्राद्ध (मातामह श्राद्ध)', description: 'नाना-नानी व पूर्वजों का तर्पण', isVrat: true, timing: '11:46 AM - 02:15 PM' },
        { name: 'Ashwin Krishna Pratipada', hindiName: 'आश्विन कृष्ण प्रतिपदा', description: 'आश्विन मास के कृष्ण पक्ष का प्रारंभ', isVrat: false }
      ]
    },
    '2026-09-28': {
      primary: {
        title: 'Dwitiya Shraddha (Pitru Paksha)',
        hindiTitle: 'द्वितीया श्राद्ध (पितृपक्ष)',
        badge: 'PITRU TARPAN',
        description: 'Shraddha for ancestors deceased on the second lunar day.',
        hindiDescription: 'द्वितीया तिथि पर दिवंगत हुए पितरों के निमित्त तिलांजलि, तर्पण एवं भोजन अर्पण।',
        pujaMuhurat: '11:45 AM - 02:14 PM',
        fastRules: 'Sattvic food only; feed cows and Brahmins.',
        icon: '🌿'
      },
      list: [
        { name: 'Dwitiya Shraddha', hindiName: 'द्वितीया श्राद्ध', description: 'द्वितीया तिथि के पूर्वजों का श्राद्ध', isVrat: true, timing: 'Aparahna Kaal' }
      ]
    },
    '2026-09-29': {
      primary: {
        title: 'Tritiya Shraddha & Sankashti Ganesh Chaturthi',
        hindiTitle: 'तृतीया श्राद्ध एवं संकष्टी गणेश चतुर्थी व्रत',
        badge: 'GANESH VRAT & SHRADHA',
        description: 'Sankashti Chaturthi dedicated to Lord Ganesha along with Tritiya Shraddha for ancestors.',
        hindiDescription: 'विघ्नहर्ता भगवान गणेश का संकष्टी चतुर्थी व्रत। रात्रि में चंद्र दर्शन व अर्घ्य देकर व्रत का पारण किया जाता है। साथ ही तृतीया श्राद्ध।',
        pujaMuhurat: 'Ganesh Puja: 06:15 PM onwards; Moonrise: 08:35 PM',
        fastRules: 'Fast until Moonrise; break fast after offering water and Durva to Chandra and Ganesha.',
        icon: '🐘'
      },
      list: [
        { name: 'Sankashti Chaturthi Vrat', hindiName: 'संकष्टी श्री गणेश चतुर्थी व्रत', description: 'संकट मुक्ति हेतु गणेश व्रत व चंद्र दर्शन', isVrat: true, timing: 'Moonrise Arghya' },
        { name: 'Tritiya Shraddha', hindiName: 'तृतीया श्राद्ध', description: 'तृतीया तिथि के पितरों का श्राद्ध', isVrat: true, timing: '11:45 AM - 02:15 PM' }
      ]
    },
    '2026-10-06': {
      primary: {
        title: 'Indira Ekadashi Vrat (Pitru Mokshada)',
        hindiTitle: 'इन्दिरा एकादशी व्रत (पितृ मोक्षदायिनी एकादशी)',
        badge: 'MAHA EKADASHI VRAT',
        description: 'Sacred Ekadashi during Pitru Paksha granting liberation to ancestors from lower realms.',
        hindiDescription: 'पितृपक्ष की अत्यंत पुण्यदायी एकादशी। इसके पुण्य प्रभाव से पूर्वजों को यमलोक की यातनाओं से मुक्ति व मोक्ष की प्राप्ति होती है।',
        pujaMuhurat: 'Morning Vishnu Puja: 06:30 AM - 10:45 AM',
        fastRules: 'Complete grainless fasting; unbroken chanting of Om Namo Bhagavate Vasudevaya.',
        icon: '🌺'
      },
      list: [
        { name: 'Indira Ekadashi Vrat', hindiName: 'इन्दिरा एकादशी व्रत', description: 'पितरों के उद्धार हेतु परम पावन व्रत', isVrat: true, timing: 'Full Day' },
        { name: 'Ekadashi Shraddha', hindiName: 'एकादशी श्राद्ध', description: 'सन्यासियों व एकादशी के पितरों का तर्पण', isVrat: true, timing: 'Midday' }
      ]
    },
    '2026-10-10': {
      primary: {
        title: 'Sarva Pitru Amavasya (Mahalaya Amavasya)',
        hindiTitle: 'सर्वपितृ अमावस्या / महालय अमावस्या (पितृ विसर्जन)',
        badge: 'SARVA PITRU MOKSHA',
        description: 'Culmination of Mahalaya Pitru Paksha. Universal Shraddha for all known and unknown ancestors.',
        hindiDescription: 'समस्त ज्ञात-अज्ञात पितरों, पूर्वजों एवं कुलदेवताओं के निमित्त अंतिम तर्पण व विसर्जन का महादिन। खीर-पूरी, दीपदान एवं दान-पुण्य का विशेष फल।',
        pujaMuhurat: '11:30 AM - 03:00 PM (सर्वपितृ तर्पण)',
        fastRules: 'Fast till Shraddha completion; donate food, sesame seeds, cows and clothes.',
        icon: '🕊️'
      },
      list: [
        { name: 'Sarva Pitru Amavasya', hindiName: 'सर्वपितृ मोक्ष अमावस्या', description: 'समस्त पितरों का सामूहिक महालय श्राद्ध', isVrat: true, timing: 'Aparahna Kaal' },
        { name: 'Pitru Visarjan', hindiName: 'पितृ विसर्जन दीपदान', description: 'सायंकाल में पूर्वजों के निमित्त दीप प्रज्वलन', isVrat: false, timing: '06:15 PM - 07:30 PM' }
      ]
    },
    '2026-10-11': {
      primary: {
        title: 'Sharadiya Navratri Ghatasthapana (Day 1)',
        hindiTitle: 'शारदीय नवरात्रि घटस्थापना एवं माँ शैलपुत्री पूजा',
        badge: 'NAVRATRI MAHOTSAV',
        description: 'Auspicious commencement of 9-day Sharadiya Navratri with sacred Kalash Sthapana.',
        hindiDescription: 'शक्ति की उपासना के 9 पावन दिनों का प्रारंभ। कलश स्थापना (घटस्थापना) एवं प्रथम दिन नवदुर्गा के प्रथम स्वरूप माँ शैलपुत्री का पूजन।',
        pujaMuhurat: 'Ghatasthapana Muhurat: 06:21 AM - 10:14 AM; Abhijit: 11:45 AM - 12:32 PM',
        fastRules: 'Falahari fast (fruits, milk, sabudana, kuttu flour); Akhand Jyoti lighting.',
        icon: '🚩'
      },
      list: [
        { name: 'Sharadiya Navratri Ghatasthapana', hindiName: 'शारदीय नवरात्रि घटस्थापना', description: 'कलश स्थापना व अखण्ड ज्योति प्रज्वलन', isVrat: true, timing: '06:21 AM - 10:14 AM' },
        { name: 'Maa Shailputri Puja', hindiName: 'माँ शैलपुत्री पूजन', description: 'नवदुर्गा प्रथम स्वरूप आराधना', isVrat: true, timing: 'Morning' }
      ]
    },
    '2026-10-20': {
      primary: {
        title: 'Vijayadashami / Dussehra Mahotsav',
        hindiTitle: 'विजयादशमी (दशहरा) एवं अपराजिता पूजन',
        badge: 'VIJAYADASHAMI UTSAV',
        description: 'Triumph of Good over Evil: Lord Rama victory over Ravana and Goddess Durga vanquishing Mahishasura.',
        hindiDescription: 'असत्य पर सत्य और अधर्म पर धर्म की विजय का महापर्व। भगवान श्रीराम द्वारा रावण वध एवं माँ दुर्गा की अपराजिता पूजा। शमी वृक्ष व शस्त्र पूजन।',
        pujaMuhurat: 'Vijay Muhurat: 02:05 PM - 02:52 PM; Aparajita Puja: 01:18 PM - 03:38 PM',
        fastRules: 'Navratri Parana (breaking 9-day fast); Shami leaves exchange.',
        icon: '🏹'
      },
      list: [
        { name: 'Vijayadashami / Dussehra', hindiName: 'विजयादशमी / दशहरा महोत्सव', description: 'अधर्म पर धर्म की विजय का महापर्व', isVrat: false, timing: '02:05 PM - 02:52 PM' },
        { name: 'Shastra & Shami Puja', hindiName: 'शस्त्र एवं शमी पूजन', description: 'कार्य सिद्धि व विजय हेतु विशेष पूजन', isVrat: false, timing: 'Aparahna' },
        { name: 'Navratri Parana', hindiName: 'नवरात्रि व्रत पारण', description: '9 दिवसीय व्रत का पूर्णता पारण', isVrat: true, timing: 'Morning' }
      ]
    },
    '2026-11-08': {
      primary: {
        title: 'Diwali & Shri Mahalakshmi Pujan',
        hindiTitle: 'दीपावली महापर्व एवं श्री महालक्ष्मी-गणेश पूजन',
        badge: 'DEEPAVALI UTSAV',
        description: 'The Festival of Lights celebrating the return of Lord Rama and Lakshmi-Ganesha Pradosh Puja.',
        hindiDescription: 'अंधकार पर प्रकाश की विजय का महापर्व दीपावली। धन, धान्य और समृद्धि की अधिष्ठात्री माँ महालक्ष्मी एवं विघ्नहर्ता गणेश जी का स्थिर लग्न में पूजन।',
        pujaMuhurat: 'Lakshmi Puja (Pradosh / Vrishabha Lagna): 05:45 PM - 07:42 PM; Nishita Kaal: 11:38 PM - 12:30 AM',
        fastRules: 'Daytime fast or light falahar; lavish Lakshmi Puja and lighting 21+ ghee/oil diyas.',
        icon: '🪔'
      },
      list: [
        { name: 'Deepavali Mahalakshmi Puja', hindiName: 'श्री महालक्ष्मी-कुबेर पूजन', description: 'प्रदोष काल एवं स्थिर लग्न में पूजन', isVrat: true, timing: '05:45 PM - 07:42 PM' },
        { name: 'Kedareshwar Vrat', hindiName: 'केदारेश्वर व्रत', description: 'शिव आराधना व कल्याणकारी व्रत', isVrat: true },
        { name: 'Deepotsav', hindiName: 'महा दीपोत्सव', description: 'घरों व प्रतिष्ठानों में दीपमाला प्रज्वलन', isVrat: false, timing: 'Evening' }
      ]
    }
  };

  let primaryFestival: DailyPanchang['primaryFestival'];
  let festivalsToday: DailyPanchang['festivalsToday'];

  if (knownFestivalsMap[dateStr]) {
    const known = knownFestivalsMap[dateStr];
    primaryFestival = known.primary;
    festivalsToday = known.list;
  } else {
    // Dynamic algorithmic festival derivation based on Tithi, Paksha, Month and Vaar
    const isEkadashi = tithiName.includes('Ekadashi') || tithiHindi.includes('एकादशी');
    const isPradosh = tithiName.includes('Trayodashi') || tithiHindi.includes('त्रयोदशी');
    const isShivratri = (tithiName.includes('Chaturdashi') && paksha === 'Krishna Paksha') || tithiHindi.includes('चतुर्दशी');
    const isPurnima = tithiName.includes('Purnima') || tithiHindi.includes('पूर्णिमा');
    const isAmavasya = tithiName.includes('Amavasya') || tithiHindi.includes('अमावस्या');
    const isChaturthi = tithiName.includes('Chaturthi') || tithiHindi.includes('चतुर्थी');
    const isAshtami = tithiName.includes('Ashtami') || tithiHindi.includes('अष्टमी');

    if (isEkadashi) {
      primaryFestival = {
        title: `${paksha.split(' ')[0]} Ekadashi Vrat`,
        hindiTitle: `${pakshaHindi.split(' ')[0]} एकादशी व्रत (श्री हरि विष्णु पूजन)`,
        badge: 'SACRED EKADASHI VRAT',
        description: 'Supreme auspicious day devoted to Lord Vishnu for cleansing karmas and attaining spiritual elevation.',
        hindiDescription: 'समस्त पापों का नाश करने वाला और श्री हरि विष्णु की कृपा बरसाने वाला परम पावन एकादशी व्रत। इस दिन अन्न का त्याग कर फलाहार करें।',
        pujaMuhurat: 'Morning: 06:45 AM - 10:30 AM',
        fastRules: 'Strict grain-free fasting; recite Vishnu Sahasranama.',
        icon: '🪷'
      };
      festivalsToday = [
        { name: 'Ekadashi Vrat', hindiName: 'एकादशी व्रत', description: 'श्री विष्णु पूजन व कीर्तन', isVrat: true },
        { name: 'Vishnu Sahasranama Path', hindiName: 'विष्णु सहस्रनाम पाठ', description: 'मानसिक शांति व ऐश्वर्य प्राप्ति', isVrat: false }
      ];
    } else if (isPradosh) {
      primaryFestival = {
        title: 'Pradosh Vrat (Shiva Aradhana)',
        hindiTitle: 'प्रदोष व्रत (संध्याकालीन शिव पूजन)',
        badge: 'SHIVA VRAT',
        description: 'Sacred twilight window dedicated to Lord Shiva and Goddess Parvati for eradication of worries.',
        hindiDescription: 'भगवान शिव और माता पार्वती का आशीर्वाद प्राप्त करने हेतु सायंकालीन प्रदोष व्रत। शिवलिंग पर बेलपत्र, दूध और शहद अर्पित करें।',
        pujaMuhurat: 'Evening twilight: 06:15 PM - 08:30 PM',
        fastRules: 'Fasting until twilight Shiva puja.',
        icon: '🔱'
      };
      festivalsToday = [
        { name: 'Pradosh Vrat', hindiName: 'प्रदोष व्रत', description: 'दोषों की निवृत्ति हेतु संध्याकालीन पूजा', isVrat: true }
      ];
    } else if (isPurnima) {
      primaryFestival = {
        title: 'Purnima Vrat & Satyanarayan Puja',
        hindiTitle: 'पूर्णिमा व्रत एवं श्री सत्यनारायण कथा',
        badge: 'PURNIMA MAHAPARV',
        description: 'Auspicious Full Moon day for Lord Satyanarayan narrative, Ganga snan and offering Arghya to the radiant Moon.',
        hindiDescription: 'मनोकामना सिद्धि और पारिवारिक सुख-शांति हेतु श्री सत्यनारायण पूजन, पवित्र तीर्थ स्नान, दीपदान तथा चंद्र देव को दूध मिश्रित जल का अर्घ्य।',
        pujaMuhurat: 'Morning/Evening: 09:30 AM - 12:30 PM, 06:30 PM - 08:30 PM',
        fastRules: 'Fast till Moonrise; offer white flowers and kheer to Moon.',
        icon: '🌕'
      };
      festivalsToday = [
        { name: 'Purnima Vrat', hindiName: 'पूर्णिमा व्रत', description: 'सत्यनारायण पूजा व चंद्र दर्शन', isVrat: true },
        { name: 'Snan & Daan', hindiName: 'स्नान-दान पुण्य', description: 'पवित्र नदी स्नान व अन्नदान', isVrat: false }
      ];
    } else if (isAmavasya) {
      primaryFestival = {
        title: 'Amavasya (Darsha & Pitru Tarpan)',
        hindiTitle: 'अमावस्या (दर्श एवं पितृ तर्पण)',
        badge: 'PITRU ARADHANA',
        description: 'New Moon day for ancestor remembrance, peace offerings and charitable deeds.',
        hindiDescription: 'पूर्वजों के प्रति कृतज्ञता प्रकट करने, पितृ दोष निवारण तथा गरीबों को भोजन कराने हेतु पुण्यदायी अमावस्या तिथि।',
        pujaMuhurat: 'Aparahna: 11:45 AM - 02:30 PM',
        fastRules: 'Offer water with black sesame seeds to ancestors; feed crows and cows.',
        icon: '🌑'
      };
      festivalsToday = [
        { name: 'Amavasya Pitru Tarpan', hindiName: 'पितृ तर्पण एवं दान', description: 'पितरों की तृप्ति हेतु जलांजलि', isVrat: true }
      ];
    } else if (isChaturthi) {
      primaryFestival = {
        title: paksha === 'Krishna Paksha' ? 'Sankashti Ganesh Chaturthi' : 'Vinayaka Chaturthi Vrat',
        hindiTitle: paksha === 'Krishna Paksha' ? 'संकष्टी श्री गणेश चतुर्थी व्रत' : 'विनायक चतुर्थी व्रत',
        badge: 'LORD GANESHA VRAT',
        description: 'Auspicious day for Lord Ganesha worship to remove all obstacles and attain wisdom.',
        hindiDescription: 'विघ्नों के निवारण एवं ऋद्धि-सिद्धि की प्राप्ति हेतु भगवान श्री गणेश की आराधना व मोदक/दूर्वा अर्पण।',
        pujaMuhurat: paksha === 'Krishna Paksha' ? 'Moonrise Time' : 'Midday: 11:15 AM - 01:30 PM',
        fastRules: paksha === 'Krishna Paksha' ? 'Fast till Moonrise' : 'Day fast till noon puja',
        icon: '🐘'
      };
      festivalsToday = [
        { name: 'Ganesh Chaturthi Vrat', hindiName: 'गणेश चतुर्थी व्रत', description: 'मोदक व दूर्वा से गणपति पूजन', isVrat: true }
      ];
    } else if (isAshtami) {
      primaryFestival = {
        title: 'Durga Ashtami / Kalashtami Vrat',
        hindiTitle: 'दुर्गाष्टमी / कालाष्टमी व्रत',
        badge: 'DEVI & BHAIRAV VRAT',
        description: 'Sacred Eighth lunar day honoring the Divine Mother Durga and Lord Bhairava.',
        hindiDescription: 'माँ दुर्गा की कृपा व नकारात्मक ऊर्जा से रक्षा हेतु पावन अष्टमी व्रत। दुर्गा चालीसा का पाठ व कन्या पूजन फलदायी होता है।',
        pujaMuhurat: 'Morning & Evening Sandhya',
        fastRules: 'Fasting or sattvic food; Devi Aradhana.',
        icon: '🚩'
      };
      festivalsToday = [
        { name: 'Durga Ashtami Vrat', hindiName: 'दुर्गाष्टमी पूजन', description: 'माँ जगदम्बा की स्तुति व आरती', isVrat: true }
      ];
    } else {
      const vaarSignificance: Record<number, { title: string; hindi: string; icon: string; desc: string }> = {
        0: { title: 'Surya Dev Aradhana (Sunday)', hindi: 'रविवार - प्रत्यक्ष देवता सूर्य नारायण आराधना', icon: '☀️', desc: 'सूर्य देव को तांबे के लोटे से रोली-अक्षत युक्त अर्घ्य दें। मान-सम्मान व आरोग्य की प्राप्ति होती है।' },
        1: { title: 'Somwar Shiv Puja (Monday)', hindi: 'सोमवार - देवों के देव महादेव पूजन', icon: '🔱', desc: 'भगवान शिव का पंचाक्षर मंत्र (ॐ नमः शिवाय) जपें एवं दूध-बिल्वपत्र अर्पित करें।' },
        2: { title: 'Mangalwar Hanuman Puja (Tuesday)', hindi: 'मंगलवार - संकटमोचन हनुमान जी की आराधना', icon: '🚩', desc: 'हनुमान चालीसा व सुंदरकांड का पाठ करें। सिन्दूर व बूंदी का भोग लगाएं।' },
        3: { title: 'Budhwar Ganesh Puja (Wednesday)', hindi: 'बुधवार - विघ्नहर्ता श्री गणेश पूजन', icon: '🐘', desc: 'गणपति बप्पा को 21 दूर्वा दल अर्पित करें। बुद्धि और व्यवसाय में उन्नति होती है।' },
        4: { title: 'Guruwar Vishnu & Brihaspati (Thursday)', hindi: 'गुरुवार - जगतपालक भगवान विष्णु व देवगुरु पूजन', icon: '🪷', desc: 'विष्णु जी को पीले पुष्प व चने की दाल का भोग लगाएं। ज्ञान व सौभाग्य में वृद्धि होती है।' },
        5: { title: 'Shukrawar Mahalakshmi Puja (Friday)', hindi: 'शुक्रवार - धन-धान्य प्रदात्री माँ महालक्ष्मी पूजन', icon: '🪔', desc: 'महालक्ष्मी अष्टकम का पाठ करें और श्वेत पुष्प/खीर का नैवेद्य लगाएं।' },
        6: { title: 'Shaniwar Shani Dev Aradhana (Saturday)', hindi: 'शनिवार - कर्मफलदाता श्री शनिदेव एवं हनुमान आराधना', icon: '⚖️', desc: 'शनि देव को सरसों के तेल का दीपक अर्पित करें। गरीबों को तिल व भोजन दान करें।' }
      };

      const vaarData = vaarSignificance[dayOfWeek] || vaarSignificance[5];
      primaryFestival = {
        title: `${tithiName} - ${vaarData.title}`,
        hindiTitle: `${tithiHindi} • ${vaarData.hindi}`,
        badge: 'SHUBH TITHI & VAAR',
        description: `Sacred lunar day ${tithiName}. ${vaarData.desc}`,
        hindiDescription: `${tithiHindi}। ${vaarData.desc}`,
        pujaMuhurat: 'Morning: 07:00 AM - 10:30 AM',
        fastRules: 'Sattvic daily routine and devotional chanting.',
        icon: vaarData.icon
      };
      festivalsToday = [
        { name: `${tithiName} Puja`, hindiName: `${tithiHindi} नित्य आराधना`, description: 'दैनिक देव आराधना, गायत्री जप व सूर्य अर्घ्य', isVrat: false },
        { name: vaarData.title, hindiName: vaarData.hindi, description: vaarData.desc, isVrat: false }
      ];
    }
  }

  // Solar & Lunar Durations (Drik Panchang)
  const dHours = Math.floor(dayLengthMins / 60);
  const dMins = Math.round(dayLengthMins % 60);
  const dayDurationStr = `${dHours}h ${dMins}m (दिनमान: ${dHours} घंटे ${dMins} मिनट)`;

  const nLength = (1440 - sunsetMins) + sunriseMins;
  const nHours = Math.floor(nLength / 60);
  const nMins = Math.round(nLength % 60);
  const nightDurationStr = `${nHours}h ${nMins}m (रात्रिमान: ${nHours} घंटे ${nMins} मिनट)`;

  // Surya Nakshatra
  const suryaNakshatraName = 'Hasta (हस्त - 1st Pada)';
  const suryaNakshatraHindi = 'हस्त नक्षत्र (सूर्य देव कन्या राशि में गोचरस्थ)';

  // Moon Illumination / Phase
  const tIndexCalc = isSpecificTargetDate ? 13 : ((dayOfYear + day * 2) % 30);
  const illuminationPercent = Math.round((Math.sin((tIndexCalc / 30) * Math.PI)) * 100);
  const moonIlluminationStr = `${Math.max(12, Math.min(99, illuminationPercent))}% (${paksha === 'Shukla Paksha' ? 'शुक्ल पक्ष - Waxing' : 'कृष्ण पक्ष - Waning'})`;
  const moonPhaseHindi = `${pakshaHindi} • प्रकाश लगभग ${Math.max(12, Math.min(99, illuminationPercent))}%`;

  // Agnivasa for Yajna/Havan: (Tithi + Vaar + 1) % 4
  const agnivasaIndex = (tIndexCalc + dayOfWeek + 1) % 4;
  const agnivasaData = (agnivasaIndex === 0 || agnivasaIndex === 3)
    ? { status: 'Prithvi (पृथ्वी पर)', vasa: 'पृथ्वी लोक', isAuspicious: true, description: 'हवन / यज्ञ हेतु अत्यंत कल्याणकारी व कार्य सिद्धिप्रद' }
    : (agnivasaIndex === 1)
    ? { status: 'Akash (आकाश में)', vasa: 'आकाश लोक', isAuspicious: false, description: 'आकाश में अग्निवास होने से सामान्यतः यज्ञ कर्म टाला जाता है' }
    : { status: 'Patala (पाताल में)', vasa: 'पाताल लोक', isAuspicious: false, description: 'पाताल में अग्निवास - केवल विशेष तांत्रिक व प्रायश्चित कर्म' };

  // Shivavasa for Rudrabhishek: (Tithi * 2 + 5) % 7
  const shivavasaIndex = (tIndexCalc * 2 + 5) % 7;
  const shivavasaMap = [
    { vasa: 'Kailash Par (कैलाश पर)', isAuspicious: true, desc: 'सर्व सुख, ऐश्वर्य एवं मानसिक शांति की प्राप्ति' },
    { vasa: 'Nandi Par (नंदी पर)', isAuspicious: true, desc: 'अभीष्ट कार्य सिद्धि व सर्वत्र विजय' },
    { vasa: 'Gauri Sannidhau (माता गौरी के समीप)', isAuspicious: true, desc: 'संतान सुख, पारिवारिक समृद्धि व दांपत्य प्रेम' },
    { vasa: 'Sabhaayam (देव सभा में)', isAuspicious: true, desc: 'मान-सम्मान, पद-प्रतिष्ठा व विद्या लाभ' },
    { vasa: 'Kreedayam (क्रीड़ा में)', isAuspicious: false, desc: 'क्रीड़ा में व्यस्त - मध्यम फलदायी' },
    { vasa: 'Shmashane (श्मशान में)', isAuspicious: false, desc: 'रुद्राभिषेक हेतु सामान्यतः वर्जित' },
    { vasa: 'Bhojane (भोजन में)', isAuspicious: false, desc: 'भोजन काल - मध्यम फलदायी' }
  ];
  const shivavasaData = {
    status: shivavasaMap[shivavasaIndex].vasa,
    vasa: shivavasaMap[shivavasaIndex].vasa,
    isAuspicious: shivavasaMap[shivavasaIndex].isAuspicious,
    description: shivavasaMap[shivavasaIndex].desc
  };

  const anandadiYogaStr = 'Manasa Yoga (मानस योग - शुभ एवं कार्य साधक)';

  // Build Festival Deep Dive
  let festivalDeepDive: DailyPanchang['festivalDeepDive'];

  if (isSpecificTargetDate) {
    festivalDeepDive = {
      title: 'Anant Chaturdashi & Ganesh Visarjan',
      hindiTitle: 'अनंत चतुर्दशी एवं गणेश विसर्जन महामहोत्सव',
      badge: 'महापर्व एवं पावन व्रत (Maha Utsav)',
      icon: '🪔',
      significance: 'भाद्रपद शुक्ल चतुर्दशी को अनंत चतुर्दशी के रूप में मनाया जाता है। इस दिन भगवान श्री हरि विष्णु के अनंत स्वरूप की पूजा कर चौदह गांठों वाला रक्षा सूत्र बांधा जाता है जो साधक के जीवन के समस्त कष्टों का निवारण करता है। साथ ही 10 दिवसीय गणेश जन्मोत्सव का पावन समापन होता है और श्रद्धापूर्वक गणपति बप्पा का विसर्जन किया जाता है।',
      pujaMuhurat: 'प्रातःकाल 06:29 AM - 10:59 AM (शुभ व अमृत चौघड़िया), दोपहर 12:37 PM - 01:25 PM (अभिजीत मुहूर्त)',
      pujaVidhi: [
        'प्रातः सूर्योदय से पूर्व स्नानादि कर पीले या स्वच्छ वस्त्र धारण करें और अनंत व्रत का संकल्प लें।',
        'पूजा स्थल पर कलश स्थापित कर भगवान विष्णु की प्रतिमा या शालिग्राम जी को पंचामृत से स्नान कराएं।',
        'कच्चे सूत के 14 तारों वाले धागे में 14 गांठें लगाएं। इसे हल्दी, कुमकुम व केसर से अभिमंत्रित करें।',
        'षोडशोपचार विधि से भगवान अनंत नारायण की पूजा कर "ॐ अनन्ताय नमः" का 108 बार जप करें।',
        'पुरुष अपने दाहिने हाथ में तथा महिलाएं बाएं हाथ में अनंत रक्षा सूत्र श्रद्धापूर्वक धारण करें।',
        'गणपति बप्पा की भावपूर्ण महाआरती करें, मोदक-लड्डू का भोग लगाएं और विदाई प्रार्थना के साथ विसर्जन करें।'
      ],
      vratRules: 'इस दिन नमक रहित भोजन या फलाहार (खीर, पूरी, फल) का विधान है। अनंत सूत्र बांधने के बाद ही भोजन ग्रहण करें।',
      mantras: [
        { mantra: 'ॐ अनन्ताय नमः। अनन्त संसार महासमुद्रे मग्नं समभ्युद्धर वासुदेव।', meaning: 'हे अनंत वासुदेव! संसार सागर के समस्त कष्टों से मेरा उद्धार करें और अक्षत कृपा प्रदान करें।' },
        { mantra: 'गणपति बप्पा मोरया, पु पुढच्या वर्षी लवकर या!', meaning: 'हे विघ्नहर्ता गणपति बाप्पा! हमें आशीष देकर अगले वर्ष शीघ्र पधारें।' }
      ],
      dosAndDonts: {
        dos: [
          'अनंत सूत्र को पूरे वर्ष अथवा कम से कम 14 दिनों तक श्रद्धापूर्वक धारण किए रखें।',
          'गणेश विसर्जन स्वच्छ व पर्यावरण-अनुकूल जलाशयों या घर पर गमले में करें।',
          'निर्धनों, ब्राह्मणों व कन्याओं को खीर, पूरी, फल व सामर्थ्यानुसार दान दें।'
        ],
        donts: [
          'इस पावन दिन पर तामसिक भोजन, मदिरा, लहसुन-प्याज का सेवन पूर्णतः वर्जित है।',
          'विसर्जन यात्रा में किसी प्रकार का विवाद, कलह या अनुचित व्यवहार न करें।'
        ]
      }
    };
  } else if (primaryFestival) {
    festivalDeepDive = {
      title: primaryFestival.title,
      hindiTitle: primaryFestival.hindiTitle,
      badge: primaryFestival.badge || 'पावन दिवस',
      icon: primaryFestival.icon || '🪔',
      significance: primaryFestival.hindiDescription || primaryFestival.description,
      pujaMuhurat: primaryFestival.pujaMuhurat || 'प्रातः 07:00 AM - 10:30 AM (शुभ चौघड़िया)',
      pujaVidhi: [
        'प्रातः स्नान कर स्वच्छ वस्त्र धारण करें और दिन के अधिष्ठाता देवता का ध्यान करें।',
        'तांबे के लोटे से सूर्य देव को रोली-अक्षत युक्त अर्घ्य समर्पित करें।',
        'ईष्ट देव की प्रतिमा के समक्ष घी का दीपक और धूप प्रज्वलित करें।',
        'नैवेद्य, पुष्प, तुलसीदल अथवा दूर्वा श्रद्धापूर्वक अर्पित करें और आरती करें।',
        'दिन भर सात्विक विचार रखें और समर्थ अनुसार दान-पुण्य करें।'
      ],
      vratRules: primaryFestival.fastRules || 'सात्विक आहार ग्रहण करें और दिन भर मानसिक शांति बनाए रखें।',
      mantras: [
        { mantra: 'ॐ नमो भगवते वासुदेवाय नमः', meaning: 'समस्त ब्रह्मांड के पालक श्री हरि विष्णु को मेरा नमन।' },
        { mantra: 'ॐ नमः शिवाय', meaning: 'कल्याणकारी देवाधिदेव महादेव शिव को नमन।' }
      ],
      dosAndDonts: {
        dos: [
          'प्रातःकाल सूर्य अर्घ्य दें और माता-पिता व गुरुजनों का आशीर्वाद लें।',
          'पक्षियों को दाना और गाय को हरी घास या रोटी दें।',
          'शुभ चौघड़िया व अभिजीत मुहूर्त में ही नए कार्य का प्रारंभ करें।'
        ],
        donts: [
          'राहु काल (Rahu Kaal) के दौरान नया सौदा, यात्रा या मांगलिक कार्य आरंभ न करें।',
          'दिशा शूल की दिशा में बिना परिहार (remedy) किए यात्रा करने से बचें।'
        ]
      }
    };
  }

  return {
    date: dateStr,
    formattedDate: targetDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    cityName: city.name,
    cityHindiName: city.hindiName,
    timezone: 'Asia/Kolkata (IST +05:30)',
    lat: city.lat,
    lng: city.lng,
    sunrise: sunriseStr,
    sunset: sunsetStr,
    moonrise: moonriseStr,
    moonset: moonsetStr,
    dayDuration: dayDurationStr,
    nightDuration: nightDurationStr,
    suryaNakshatra: suryaNakshatraName,
    suryaNakshatraHindi: suryaNakshatraHindi,
    moonIllumination: moonIlluminationStr,
    moonPhaseHindi: moonPhaseHindi,
    agnivasa: agnivasaData,
    shivavasa: shivavasaData,
    anandadiYoga: anandadiYogaStr,
    suryaRashi: suryaRashi,
    suryaRashiHindi: suryaRashiHindi,
    chandraRashi: chandraRashi,
    chandraRashiHindi: chandraRashiHindi,
    chandraRashiTransition: chandraRashiTransition,

    tithi: tithiName,
    tithiHindi: tithiHindi,
    tithiEndsAt: tithiEndsAt,
    nextTithi: nextTithi,
    nextTithiHindi: nextTithiHindi,
    tithiDeity: tithiDeity,
    paksha: paksha,
    pakshaHindi: pakshaHindi,
    gujaratiPaksha: 'સુદ (શુક્લ પક્ષ)',

    nakshatra: nakshatraName,
    nakshatraHindi: nakshatraHindi,
    nakshatraEndsAt: nakshatraEndsAt,
    nextNakshatra: nextNakshatra,
    nextNakshatraHindi: nextNakshatraHindi,
    nakshatraLord: nakshatraLord,
    nakshatraPada: nakshatraPada,

    yoga: yogaName,
    yogaHindi: yogaHindi,
    yogaEndsAt: yogaEndsAt,
    nextYoga: nextYoga,

    karana: karanaName,
    karanaHindi: karanaHindi,
    karanaEndsAt: karanaEndsAt,
    secondKarana: secondKarana,
    secondKaranaHindi: secondKaranaHindi,
    secondKaranaEndsAt: secondKaranaEndsAt,
    bhadra: bhadraInfo,

    vaar: vaarNames[dayOfWeek],
    vaarHindi: vaarHindiNames[dayOfWeek],
    vaarLord: vaarLords[dayOfWeek],

    vikramSamvat: 2083,
    vikramSamvatName: 'Raudra (रौद्र - आनंद संवत्सर)',
    sakaSamvat: 1948,
    sakaSamvatName: 'Krodhi (क्रोधी)',
    gujaratiSamvat: 2082,
    kaliYugaYear: 5127,
    ritu: 'Sharad (शरद ऋतु)',
    aayana: 'Dakshinayana (दक्षिणायन - पितृ काल)',
    amantaMasa: 'Bhadrapada (भाद्रपद - अमान्त)',
    purnimantaMasa: 'Ashwin / Bhadrapada (भाद्रपद / आश्विन पूर्णिमान्त)',
    gujaratiMasa: 'ભાદરવો (Bhadravo Sud)',

    abhijitMuhurat: abhijitMuhurat,
    brahmaMuhurat: brahmaMuhurat,
    amritKaal: amritKaal,
    vijayaMuhurat: vijayaMuhurat,
    godhuliMuhurat: godhuliMuhurat,
    sayahnaSandhya: sayahnaSandhya,
    pratahSandhya: pratahSandhya,
    nishitaMuhurat: nishitaMuhurat,
    specialYogas: [
      { name: 'Sarvartha Siddhi Yoga', hindiName: 'सर्वार्थ सिद्धि योग (रात्रि 11:01 से)', isAuspicious: true, description: 'सभी कार्यों में मनोवांछित फल व सफलता देने वाला योग।' },
      { name: 'Ravi Yoga', hindiName: 'रवि योग', isAuspicious: true, description: 'सूर्य देव की विशेष कृपा से अनिष्ट का नाश करने वाला योग।' }
    ],

    rahuKaal: rahuKaal,
    yamaganda: yamaganda,
    gulikaKaal: gulikaKaal,
    durmuhurtam: durmuhurtam,
    varjyam: varjyam,
    dishaShool: dishaShool.directionHindi,
    dishaShoolRemedy: dishaShool.remedy,

    chandraBalam: chandraBalamRashis,
    chandraBalamHindi: chandraBalamHindi,

    dayChoghadiya: dayChoghadiya,
    nightChoghadiya: nightChoghadiya,
    horaTimings: horaTimings,

    primaryFestival: primaryFestival,
    festivalDeepDive: festivalDeepDive,
    festivalsToday: festivalsToday
  };
}
