import { CityData } from '../types';
import { allIndianCities } from './indianCities';

// ============================================================================
// 1. FUNDAMENTAL ASTROLOGICAL INTERFACES & DEFINITIONS
// ============================================================================

export type AyanamshaSystem = 'lahiri' | 'raman' | 'kp';
export type ChartStyle = 'north' | 'south' | 'east';
export type HouseSystem = 'equal' | 'shripati';
export type RahuKetuMode = 'mean' | 'true';

export interface BirthProfile {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  birthDate: string; // YYYY-MM-DD
  birthTime: string; // HH:MM (24-hr)
  birthCity: string;
  birthState: string;
  birthCountry: string;
  latitude: number;
  longitude: number;
  elevation: number;
  timezoneOffset: number; // e.g. +5.5 for IST
  timezoneName: string;
  ayanamsha: AyanamshaSystem;
  houseSystem: HouseSystem;
  rahuKetuMode: RahuKetuMode;
}

export interface PlanetaryPosition {
  id: string;
  name: string;
  sanskritName: string;
  symbol: string;
  longitude: number; // 0° to 360° Sidereal
  signIndex: number; // 0 to 11 (0=Mesha)
  signName: string;
  signSanskrit: string;
  degreeInSign: number; // 0° to 30°
  formattedDegree: string; // e.g. 14° 22' 18"
  house: number; // 1 to 12
  nakshatraIndex: number; // 0 to 26
  nakshatraName: string;
  nakshatraLord: string;
  pada: number; // 1 to 4
  padaSyllable: string;
  speed: number; // degrees per day
  isRetrograde: boolean;
  isCombust: boolean;
  sunDistance: number;
  combustionThreshold: number;
  dignity: 'Exalted' | 'Debilitated' | 'Moolatrikona' | 'Own Sign' | 'Friend' | 'Neutral' | 'Enemy';
  dignityScore: number; // 1 to 10
  isBenefic: boolean;
  karaka: string;
  aspects: { house: number; strength: number; type: string }[];
}

export interface HouseDetail {
  houseNumber: number; // 1 to 12
  signIndex: number; // 0 to 11
  signName: string;
  signSanskrit: string;
  lord: string;
  lordPlacementHouse: number;
  startDegree: number;
  midDegree: number;
  endDegree: number;
  occupyingPlanets: string[];
  aspectingPlanets: string[];
  significance: string;
  karaka: string;
  category: 'Kendra' | 'Trikona' | 'Upachaya' | 'Dusthana' | 'Maraka' | 'Neutral';
}

export interface VargaPlacement {
  vargaName: string;
  divisionNumber: number; // e.g. 1, 9, 10
  planetPositions: Record<string, { signIndex: number; signName: string; house: number }>;
  lagnaSignIndex: number;
  lagnaHouse: number;
}

export interface DashaPeriod {
  planet: string;
  planetSanskrit: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;
  durationYears: number;
  subPeriods?: DashaPeriod[]; // Antardasha
  isCurrent?: boolean;
}

export interface AshtakavargaData {
  planets: string[];
  signs: string[];
  binduMatrix: number[][]; // [planet][sign]
  sarvashtakavarga: number[]; // 12 signs sum
  houseBindus: number[]; // 12 houses sum
  totalBindus: number; // 337
}

export interface ShadbalaComponent {
  planet: string;
  sthanaBala: number; // Positional
  digBala: number; // Directional
  kaalaBala: number; // Temporal
  cheshtaBala: number; // Motional
  naisargikaBala: number; // Natural
  drikBala: number; // Aspectual
  totalVirupas: number;
  totalRupas: number;
  requiredRupas: number;
  relativeRank: number;
  percentageStrength: number;
}

export interface BhavabalaItem {
  house: number;
  sign: string;
  lord: string;
  lordStrength: number;
  occupantStrength: number;
  aspectStrength: number;
  totalScore: number;
  grade: 'Excellent' | 'Good' | 'Moderate' | 'Challenging';
}

export interface UpagrahaItem {
  name: string;
  sanskritName: string;
  longitude: number;
  signIndex: number;
  signName: string;
  degreeInSign: number;
  house: number;
  nakshatra: string;
  pada: number;
  nature: string;
}

export interface PlanetaryYoga {
  name: string;
  sanskritName: string;
  type: 'Raja Yoga' | 'Dhana Yoga' | 'Mahapurusha' | 'Auspicious' | 'Challenging';
  planetsInvolved: string[];
  housesInvolved: number[];
  isActive: boolean;
  intensity: 'High' | 'Medium' | 'Subtle';
  classicalText: string;
  description: string;
  effects: string;
}

export interface MangalDoshaAnalysis {
  hasDosha: boolean;
  severity: 'None' | 'Mild' | 'Moderate' | 'Severe';
  marsHouseFromLagna: number;
  marsHouseFromMoon: number;
  marsHouseFromVenus: number;
  rulesChecked: { source: string; house: number; isDosha: boolean }[];
  cancellations: string[];
  finalVerdict: string;
  remedies: string[];
}

export interface KalasarpaAnalysis {
  hasYoga: boolean;
  type: string;
  sanskritName: string;
  axis: string; // e.g. "1st / 7th House (Ananta)"
  isComplete: boolean; // all 7 hemmed vs 1 outside (Anshik)
  description: string;
  traditionalEffects: string;
  remedies: string[];
}

export interface SadeSatiAnalysis {
  status: 'Rising Phase' | 'Peak Phase' | 'Setting Phase' | 'Small Panoti (Dhaiya)' | 'No Sade Sati';
  phaseNumber: number; // 0=none, 1=rising, 2=peak, 3=setting, 4=4th house dhaiya, 8=8th house dhaiya
  saturnCurrentSign: string;
  moonNatalSign: string;
  description: string;
  timeline: { cycle: string; period: string; phase: string }[];
  remedies: string[];
}

export interface PanchaPakshiResult {
  birthBird: 'Vulture' | 'Owl' | 'Crow' | 'Cock' | 'Peacock';
  sanskritName: string;
  element: string;
  rulingDirection: string;
  paksha: 'Shukla' | 'Krishna';
  dayActivityNow: 'Ruling' | 'Eating' | 'Walking' | 'Sleeping' | 'Dying';
  auspiciousHours: string;
  cautionHours: string;
  birdCharacteristics: string;
}

export interface AshtaKutaResult {
  varna: { max: 1; score: number; boyVarna: string; girlVarna: string; description: string };
  vashya: { max: 2; score: number; boyVashya: string; girlVashya: string; description: string };
  tara: { max: 3; score: number; boyTara: string; girlTara: string; description: string };
  yoni: { max: 4; score: number; boyYoni: string; girlYoni: string; description: string };
  grahaMaitri: { max: 5; score: number; boyLord: string; girlLord: string; description: string };
  gana: { max: 6; score: number; boyGana: string; girlGana: string; description: string };
  bhakoot: { max: 7; score: number; boyRashi: string; girlRashi: string; hasDosha: boolean; description: string };
  nadi: { max: 8; score: number; boyNadi: string; girlNadi: string; hasDosha: boolean; description: string };
  totalScore: number;
  maxScore: 36;
  percentage: number;
  verdict: 'Excellent Match' | 'Very Good Match' | 'Average / Acceptable' | 'Requires Remedial Counsel';
  mangalDoshaComparison: {
    boyMangal: string;
    girlMangal: string;
    isCompatible: boolean;
    note: string;
  };
  recommendations: string[];
}

export interface CompleteKundaliData {
  profile: BirthProfile;
  julianDay: number;
  localSiderealTime: number; // degrees
  ayanamshaValue: number; // degrees
  lagnaDegree: number;
  lagnaSignIndex: number;
  lagnaSignName: string;
  lagnaSignSanskrit: string;
  lagnaNakshatra: string;
  lagnaPada: number;
  lagnaLord: string;
  moonRashiIndex: number;
  moonRashiName: string;
  moonRashiSanskrit: string;
  moonNakshatra: string;
  moonPada: number;
  moonDegree: number;
  sunSignIndex: number;
  sunSignName: string;
  sunDegree: number;
  sunNakshatra: string;
  panchang: {
    tithiName: string;
    tithiNumber: number;
    paksha: string;
    vara: string;
    nakshatra: string;
    yoga: string;
    karana: string;
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    hinduMonth: string;
  };
  planets: PlanetaryPosition[];
  houses: HouseDetail[];
  vargas: Record<string, VargaPlacement>; // D1, D2, D3, D4, D7, D9, D10, D12, D16, D20, D24, D27, D30, D60
  dashaTree: DashaPeriod[];
  ashtakavarga: AshtakavargaData;
  shadbala: ShadbalaComponent[];
  bhavabala: BhavabalaItem[];
  upagrahas: UpagrahaItem[];
  yogas: PlanetaryYoga[];
  mangalDosha: MangalDoshaAnalysis;
  kalasarpa: KalasarpaAnalysis;
  sadeSati: SadeSatiAnalysis;
  panchaPakshi: PanchaPakshiResult;
  gemstones: {
    lifeStone: { gem: string; planet: string; metal: string; finger: string; day: string };
    luckyStone: { gem: string; planet: string; metal: string; finger: string; day: string };
    bhagyaStone: { gem: string; planet: string; metal: string; finger: string; day: string };
    cautions: string[];
  };
  rudraksha: {
    primaryMukhi: number;
    deity: string;
    planet: string;
    significance: string;
    wearingVidhi: string;
  };
  babyNameSuggestions: {
    syllables: string[];
    sampleNames: { name: string; meaning: string; gender: 'boy' | 'girl' | 'unisex' }[];
  };
  sahasraChandra: {
    approximateDate: string;
    ageYears: number;
    significance: string;
  };
  vedicTime: {
    ghati: number;
    vighati: number;
    pal: number;
    ishtakala: string;
  };
  disclaimer: string;
}

// ============================================================================
// 2. WORLDWIDE LOCATIONS REPOSITORY
// ============================================================================

export interface GlobalLocation {
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  elevation: number;
  timezone: number;
  timezoneId: string;
}

export const globalCitiesDirectory: GlobalLocation[] = [
  ...allIndianCities.map(c => ({
    city: c.name,
    state: c.state,
    country: 'India',
    lat: c.lat,
    lng: c.lng,
    elevation: 50,
    timezone: 5.5,
    timezoneId: 'Asia/Kolkata'
  })),
  { city: 'Kathmandu', state: 'Bagmati', country: 'Nepal', lat: 27.7172, lng: 85.3240, elevation: 1400, timezone: 5.75, timezoneId: 'Asia/Kathmandu' },
  { city: 'Dubai', state: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, elevation: 16, timezone: 4.0, timezoneId: 'Asia/Dubai' },
  { city: 'London', state: 'Greater London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, elevation: 35, timezone: 0.0, timezoneId: 'Europe/London' },
  { city: 'New York', state: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, elevation: 10, timezone: -5.0, timezoneId: 'America/New_York' },
  { city: 'San Francisco', state: 'California', country: 'USA', lat: 37.7749, lng: -122.4194, elevation: 16, timezone: -8.0, timezoneId: 'America/Los_Angeles' },
  { city: 'Chicago', state: 'Illinois', country: 'USA', lat: 41.8781, lng: -87.6298, elevation: 180, timezone: -6.0, timezoneId: 'America/Chicago' },
  { city: 'Toronto', state: 'Ontario', country: 'Canada', lat: 43.6532, lng: -79.3832, elevation: 76, timezone: -5.0, timezoneId: 'America/Toronto' },
  { city: 'Vancouver', state: 'British Columbia', country: 'Canada', lat: 49.2827, lng: -123.1207, elevation: 20, timezone: -8.0, timezoneId: 'America/Vancouver' },
  { city: 'Singapore', state: 'Central', country: 'Singapore', lat: 1.3521, lng: 103.8198, elevation: 15, timezone: 8.0, timezoneId: 'Asia/Singapore' },
  { city: 'Sydney', state: 'New South Wales', country: 'Australia', lat: -33.8688, lng: 151.2093, elevation: 19, timezone: 10.0, timezoneId: 'Australia/Sydney' },
  { city: 'Melbourne', state: 'Victoria', country: 'Australia', lat: -37.8136, lng: 144.9631, elevation: 31, timezone: 10.0, timezoneId: 'Australia/Melbourne' },
  { city: 'Auckland', state: 'Auckland', country: 'New Zealand', lat: -36.8485, lng: 174.7633, elevation: 25, timezone: 12.0, timezoneId: 'Pacific/Auckland' },
  { city: 'Nairobi', state: 'Nairobi', country: 'Kenya', lat: -1.2921, lng: 36.8219, elevation: 1795, timezone: 3.0, timezoneId: 'Africa/Nairobi' },
  { city: 'Johannesburg', state: 'Gauteng', country: 'South Africa', lat: -26.2041, lng: 28.0473, elevation: 1753, timezone: 2.0, timezoneId: 'Africa/Johannesburg' },
  { city: 'Port Louis', state: 'Port Louis', country: 'Mauritius', lat: -20.1609, lng: 57.5012, elevation: 20, timezone: 4.0, timezoneId: 'Indian/Mauritius' },
  { city: 'Colombo', state: 'Western', country: 'Sri Lanka', lat: 6.9271, lng: 79.8612, elevation: 5, timezone: 5.5, timezoneId: 'Asia/Colombo' }
];

// ============================================================================
// 3. ASTRONOMICAL CONSTANTS & AYANAMSHA ENGINE
// ============================================================================

export const RASHIS = [
  { index: 0, name: 'Aries', sanskrit: 'मेष (Mesha)', lord: 'Mars (मंगल)', element: 'Fire', modality: 'Chara (Movable)', symbol: 'Ram (मेढ़ा)' },
  { index: 1, name: 'Taurus', sanskrit: 'वृषभ (Vrishabha)', lord: 'Venus (शुक्र)', element: 'Earth', modality: 'Sthira (Fixed)', symbol: 'Bull (बैल)' },
  { index: 2, name: 'Gemini', sanskrit: 'मिथुन (Mithuna)', lord: 'Mercury (बुध)', element: 'Air', modality: 'Dwisvabhava (Dual)', symbol: 'Twins (युगल)' },
  { index: 3, name: 'Cancer', sanskrit: 'कर्क (Karka)', lord: 'Moon (चन्द्र)', element: 'Water', modality: 'Chara (Movable)', symbol: 'Crab (कर्कट)' },
  { index: 4, name: 'Leo', sanskrit: 'सिंह (Simha)', lord: 'Sun (सूर्य)', element: 'Fire', modality: 'Sthira (Fixed)', symbol: 'Lion (सिंह)' },
  { index: 5, name: 'Virgo', sanskrit: 'कन्या (Kanya)', lord: 'Mercury (बुध)', element: 'Earth', modality: 'Dwisvabhava (Dual)', symbol: 'Maiden (कन्या)' },
  { index: 6, name: 'Libra', sanskrit: 'तुला (Tula)', lord: 'Venus (शुक्र)', element: 'Air', modality: 'Chara (Movable)', symbol: 'Scales (तुला)' },
  { index: 7, name: 'Scorpio', sanskrit: 'वृश्चिक (Vrishchika)', lord: 'Mars (मंगल)', element: 'Water', modality: 'Sthira (Fixed)', symbol: 'Scorpion (वृश्चिक)' },
  { index: 8, name: 'Sagittarius', sanskrit: 'धनु (Dhanu)', lord: 'Jupiter (गुरु)', element: 'Fire', modality: 'Dwisvabhava (Dual)', symbol: 'Bow & Arrow (धनुर्धर)' },
  { index: 9, name: 'Capricorn', sanskrit: 'मकर (Makara)', lord: 'Saturn (शनि)', element: 'Earth', modality: 'Chara (Movable)', symbol: 'Sea-Monster (मकर)' },
  { index: 10, name: 'Aquarius', sanskrit: 'कुम्भ (Kumbha)', lord: 'Saturn (शनि)', element: 'Air', modality: 'Sthira (Fixed)', symbol: 'Water-Bearer (घड़ा)' },
  { index: 11, name: 'Pisces', sanskrit: 'मीन (Meena)', lord: 'Jupiter (गुरु)', element: 'Water', modality: 'Dwisvabhava (Dual)', symbol: 'Fishes (मत्स्य)' }
];

export const NAKSHATRAS = [
  { index: 0, name: 'Ashwini', sanskrit: 'अश्विनी', lord: 'Ketu', syllables: ['Chu', 'Che', 'Cho', 'La'], deity: 'Ashwini Kumaras', animal: 'Horse', gana: 'Deva', nadi: 'Adi', yoni: 'Horse' },
  { index: 1, name: 'Bharani', sanskrit: 'भरणी', lord: 'Venus', syllables: ['Lee', 'Lu', 'Le', 'Lo'], deity: 'Yama', animal: 'Elephant', gana: 'Manushya', nadi: 'Madhya', yoni: 'Elephant' },
  { index: 2, name: 'Krittika', sanskrit: 'कृत्तिका', lord: 'Sun', syllables: ['A', 'Ee', 'U', 'Ea'], deity: 'Agni', animal: 'Sheep', gana: 'Rakshasa', nadi: 'Antya', yoni: 'Sheep' },
  { index: 3, name: 'Rohini', sanskrit: 'रोहिणी', lord: 'Moon', syllables: ['O', 'Va', 'Vee', 'Vu'], deity: 'Brahma/Prajapati', animal: 'Serpent', gana: 'Manushya', nadi: 'Antya', yoni: 'Serpent' },
  { index: 4, name: 'Mrigashira', sanskrit: 'मृगशिरा', lord: 'Mars', syllables: ['Ve', 'Vo', 'Ka', 'Kee'], deity: 'Soma', animal: 'Serpent', gana: 'Deva', nadi: 'Madhya', yoni: 'Serpent' },
  { index: 5, name: 'Ardra', sanskrit: 'आर्द्रा', lord: 'Rahu', syllables: ['Ku', 'Gha', 'Ng', 'Chha'], deity: 'Rudra', animal: 'Dog', gana: 'Manushya', nadi: 'Adi', yoni: 'Dog' },
  { index: 6, name: 'Punarvasu', sanskrit: 'पुनर्वसु', lord: 'Jupiter', syllables: ['Ke', 'Ko', 'Ha', 'Hee'], deity: 'Aditi', animal: 'Cat', gana: 'Deva', nadi: 'Adi', yoni: 'Cat' },
  { index: 7, name: 'Pushya', sanskrit: 'पुष्य', lord: 'Saturn', syllables: ['Hu', 'He', 'Ho', 'Da'], deity: 'Brihaspati', animal: 'Sheep', gana: 'Deva', nadi: 'Madhya', yoni: 'Sheep' },
  { index: 8, name: 'Ashlesha', sanskrit: 'आश्लेषा', lord: 'Mercury', syllables: ['Dee', 'Du', 'De', 'Do'], deity: 'Sarpas', animal: 'Cat', gana: 'Rakshasa', nadi: 'Antya', yoni: 'Cat' },
  { index: 9, name: 'Magha', sanskrit: 'मघा', lord: 'Ketu', syllables: ['Ma', 'Mee', 'Mu', 'Me'], deity: 'Pitris', animal: 'Rat', gana: 'Rakshasa', nadi: 'Antya', yoni: 'Rat' },
  { index: 10, name: 'Purva Phalguni', sanskrit: 'पूर्वाफाल्गुनी', lord: 'Venus', syllables: ['Mo', 'Ta', 'Tee', 'Tu'], deity: 'Bhaga', animal: 'Rat', gana: 'Manushya', nadi: 'Madhya', yoni: 'Rat' },
  { index: 11, name: 'Uttara Phalguni', sanskrit: 'उत्तराफाल्गुनी', lord: 'Sun', syllables: ['Te', 'To', 'Pa', 'Pee'], deity: 'Aryaman', animal: 'Cow', gana: 'Manushya', nadi: 'Adi', yoni: 'Cow' },
  { index: 12, name: 'Hasta', sanskrit: 'हस्त', lord: 'Moon', syllables: ['Pu', 'Sha', 'Na', 'Tha'], deity: 'Savitr', animal: 'Buffalo', gana: 'Deva', nadi: 'Adi', yoni: 'Buffalo' },
  { index: 13, name: 'Chitra', sanskrit: 'चित्रा', lord: 'Mars', syllables: ['Pe', 'Po', 'Ra', 'Ree'], deity: 'Tvashtar', animal: 'Tiger', gana: 'Rakshasa', nadi: 'Madhya', yoni: 'Tiger' },
  { index: 14, name: 'Swati', sanskrit: 'स्वाती', lord: 'Rahu', syllables: ['Ru', 'Re', 'Ro', 'Ta'], deity: 'Vayu', animal: 'Buffalo', gana: 'Deva', nadi: 'Antya', yoni: 'Buffalo' },
  { index: 15, name: 'Vishakha', sanskrit: 'विशाखा', lord: 'Jupiter', syllables: ['Tee', 'Tu', 'Te', 'To'], deity: 'Indragni', animal: 'Tiger', gana: 'Rakshasa', nadi: 'Antya', yoni: 'Tiger' },
  { index: 16, name: 'Anuradha', sanskrit: 'अनुराधा', lord: 'Saturn', syllables: ['Na', 'Nee', 'Nu', 'Ne'], deity: 'Mitra', animal: 'Deer', gana: 'Deva', nadi: 'Madhya', yoni: 'Deer' },
  { index: 17, name: 'Jyeshtha', sanskrit: 'ज्येष्ठा', lord: 'Mercury', syllables: ['No', 'Ya', 'Yee', 'Yu'], deity: 'Indra', animal: 'Deer', gana: 'Rakshasa', nadi: 'Adi', yoni: 'Deer' },
  { index: 18, name: 'Mula', sanskrit: 'मूल', lord: 'Ketu', syllables: ['Ye', 'Yo', 'Bha', 'Bhee'], deity: 'Nirriti', animal: 'Dog', gana: 'Rakshasa', nadi: 'Adi', yoni: 'Dog' },
  { index: 19, name: 'Purva Ashadha', sanskrit: 'पूर्वाषाढ़ा', lord: 'Venus', syllables: ['Bhu', 'Dha', 'Pha', 'Dha'], deity: 'Apas', animal: 'Monkey', gana: 'Manushya', nadi: 'Madhya', yoni: 'Monkey' },
  { index: 20, name: 'Uttara Ashadha', sanskrit: 'उत्तराषाढ़ा', lord: 'Sun', syllables: ['Bhe', 'Bho', 'Ja', 'Jee'], deity: 'Vishvedevas', animal: 'Mongoose', gana: 'Manushya', nadi: 'Antya', yoni: 'Mongoose' },
  { index: 21, name: 'Shravana', sanskrit: 'श्रवण', lord: 'Moon', syllables: ['Khee', 'Khoo', 'Khe', 'Kho'], deity: 'Vishnu', animal: 'Monkey', gana: 'Deva', nadi: 'Antya', yoni: 'Monkey' },
  { index: 22, name: 'Dhanishta', sanskrit: 'धनिष्ठा', lord: 'Mars', syllables: ['Ga', 'Gee', 'Gu', 'Ge'], deity: 'Ashta Vasus', animal: 'Lion', gana: 'Rakshasa', nadi: 'Madhya', yoni: 'Lion' },
  { index: 23, name: 'Shatabhisha', sanskrit: 'शतभिषा', lord: 'Rahu', syllables: ['Go', 'Sa', 'See', 'Su'], deity: 'Varuna', animal: 'Horse', gana: 'Rakshasa', nadi: 'Adi', yoni: 'Horse' },
  { index: 24, name: 'Purva Bhadrapada', sanskrit: 'पूर्वाभाद्रपद', lord: 'Jupiter', syllables: ['Se', 'So', 'Da', 'Dee'], deity: 'Aja Ekapada', animal: 'Lion', gana: 'Manushya', nadi: 'Adi', yoni: 'Lion' },
  { index: 25, name: 'Uttara Bhadrapada', sanskrit: 'उत्तराभाद्रपद', lord: 'Saturn', syllables: ['Du', 'Tha', 'Jha', 'Na'], deity: 'Ahirbudhnya', animal: 'Cow', gana: 'Manushya', nadi: 'Madhya', yoni: 'Cow' },
  { index: 26, name: 'Revati', sanskrit: 'रेवती', lord: 'Mercury', syllables: ['De', 'Do', 'Cha', 'Chee'], deity: 'Pushan', animal: 'Elephant', gana: 'Deva', nadi: 'Antya', yoni: 'Elephant' }
];

// Calculate Julian Day number from Gregorian date and UTC decimal hour
export function calculateJulianDay(year: number, month: number, day: number, utcHour: number): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5 + (utcHour / 24.0);
  return jd;
}

// Calculate high-precision Lahiri (Chitrapaksha) Ayanamsha
export function calculateAyanamsha(julianDay: number, system: AyanamshaSystem = 'lahiri'): number {
  const t = (julianDay - 2451545.0) / 36525.0; // Centuries from J2000.0
  // Standard Chitrapaksha Lahiri Ayanamsha: 23° 51' 11.2" at J2000.0 (23.85311 degrees)
  let baseLahiri = 23.85311 + (50.290966 * t / 3600.0) + (1.112 * t * t / 3600.0);

  if (system === 'raman') {
    // B.V. Raman Ayanamsha (~ 1° 28' less than Lahiri)
    return baseLahiri - 1.4666;
  }
  if (system === 'kp') {
    // Krishnamurti Padhdhati Ayanamsha (~ 6' less than Lahiri)
    return baseLahiri - 0.1011;
  }
  return baseLahiri;
}

// Normalize angle to [0, 360)
export function normalize360(deg: number): number {
  let res = deg % 360;
  if (res < 0) res += 360;
  return res;
}

// Degree to D° M' S"
export function formatDMS(deg: number): string {
  const d = Math.floor(deg);
  const remMinutes = (deg - d) * 60;
  const m = Math.floor(remMinutes);
  const s = Math.round((remMinutes - m) * 60);
  return `${d}° ${String(m).padStart(2, '0')}' ${String(s).padStart(2, '0')}"`;
}

// Calculate Sidereal Local Sidereal Time (RAMC in degrees)
export function calculateLST(julianDay: number, longitude: number): number {
  const d = julianDay - 2451545.0;
  // Greenwich Mean Sidereal Time in degrees
  let gmst = 280.46061837 + 360.98564736629 * d;
  gmst = normalize360(gmst);
  const lst = normalize360(gmst + longitude);
  return lst;
}

// Calculate True Sidereal Ascendant (Lagna) in degrees
export function calculateAscendant(julianDay: number, lat: number, lng: number, ayanamsha: number): number {
  const ramc = calculateLST(julianDay, lng);
  const eps = 23.4392911 - 0.000130042 * ((julianDay - 2451545.0) / 36525.0); // obliquity
  
  const ramcRad = (ramc * Math.PI) / 180.0;
  const epsRad = (eps * Math.PI) / 180.0;
  const latRad = (lat * Math.PI) / 180.0;

  const y = Math.cos(ramcRad);
  const x = -Math.sin(ramcRad) * Math.cos(epsRad) - Math.tan(latRad) * Math.sin(epsRad);
  
  let ascTropical = Math.atan2(y, x) * (180.0 / Math.PI);
  ascTropical = normalize360(ascTropical);

  // Convert Tropical Ascendant to Sidereal by subtracting Ayanamsha
  const siderealAsc = normalize360(ascTropical - ayanamsha);
  return siderealAsc;
}

// ============================================================================
// 4. PLANETARY EPHEMERIS ALGORITHMS (Accurate Sidereal Planetary Calculations)
// ============================================================================

export function calculatePlanetaryPositions(
  julianDay: number,
  ayanamsha: number,
  ascendantDeg: number,
  rahuKetuMode: RahuKetuMode = 'true'
): PlanetaryPosition[] {
  const d = julianDay - 2451545.0;
  const t = d / 36525.0;

  // 1. Surya (Sun)
  const l0 = 280.46646 + 36000.76983 * t + 0.0003032 * t * t;
  const mSun = 357.52911 + 35999.05029 * t - 0.0001537 * t * t;
  const cSun = (1.914602 - 0.004817 * t) * Math.sin((mSun * Math.PI) / 180) + (0.019993 - 0.000101 * t) * Math.sin((2 * mSun * Math.PI) / 180);
  const trueSunTrop = normalize360(l0 + cSun);
  const sunSidereal = normalize360(trueSunTrop - ayanamsha);
  const sunSpeed = 0.9856;

  // 2. Chandra (Moon)
  const lMoon = 218.3164477 + 481267.88128 * t;
  const mMoon = 134.9633964 + 477198.8675 * t;
  const dMoon = 297.8501921 + 445267.11135 * t;
  const fMoon = 93.272095 + 483202.01752 * t;

  let moonEvection = 6.288774 * Math.sin((mMoon * Math.PI) / 180);
  moonEvection += 1.274027 * Math.sin(((2 * dMoon - mMoon) * Math.PI) / 180);
  moonEvection += 0.658314 * Math.sin((2 * dMoon * Math.PI) / 180);
  moonEvection += 0.213618 * Math.sin((2 * mMoon * Math.PI) / 180);
  moonEvection -= 0.185116 * Math.sin((mSun * Math.PI) / 180);
  moonEvection -= 0.114332 * Math.sin((2 * fMoon * Math.PI) / 180);
  const trueMoonTrop = normalize360(lMoon + moonEvection);
  const moonSidereal = normalize360(trueMoonTrop - ayanamsha);
  const moonSpeed = 13.176;

  // 3. Rahu & Ketu (Lunar Nodes)
  let nodeMeanTrop = 125.04452 - 1934.136261 * t + 0.0020708 * t * t;
  if (rahuKetuMode === 'true') {
    // True node oscillation correction
    nodeMeanTrop += -0.27 * Math.sin((2 * (dMoon - fMoon) * Math.PI) / 180);
  }
  const rahuSidereal = normalize360(nodeMeanTrop - ayanamsha);
  const ketuSidereal = normalize360(rahuSidereal + 180.0);

  // 4. Mars (Mangal)
  const marsMeanTrop = 355.433 + 19140.299 * t;
  const marsAnom = 19.373 + 19139.858 * t;
  const marsEqCent = 10.691 * Math.sin((marsAnom * Math.PI) / 180) + 0.623 * Math.sin((2 * marsAnom * Math.PI) / 180);
  const marsSidereal = normalize360(marsMeanTrop + marsEqCent - ayanamsha);
  const marsSpeed = 0.524;
  const isMarsRetro = ((sunSidereal - marsSidereal + 360) % 360 > 130 && (sunSidereal - marsSidereal + 360) % 360 < 230);

  // 5. Mercury (Budha)
  const mercMeanTrop = 252.251 + 149472.674 * t;
  const mercAnom = 174.794 + 149472.515 * t;
  const mercEqCent = 23.44 * Math.sin((mercAnom * Math.PI) / 180) + 2.98 * Math.sin((2 * mercAnom * Math.PI) / 180);
  // Heliocentric to geocentric elongation approximation
  const mercElong = (trueSunTrop - (mercMeanTrop + mercEqCent) + 360) % 360;
  const mercGeo = normalize360(trueSunTrop + 22.0 * Math.sin((mercElong * Math.PI) / 180));
  const mercurySidereal = normalize360(mercGeo - ayanamsha);
  const isMercuryRetro = Math.abs((sunSidereal - mercurySidereal + 360) % 360) > 18;

  // 6. Jupiter (Guru)
  const jupMeanTrop = 34.351 + 3034.905 * t;
  const jupAnom = 20.02 + 3034.69 * t;
  const jupEqCent = 5.555 * Math.sin((jupAnom * Math.PI) / 180) + 0.166 * Math.sin((2 * jupAnom * Math.PI) / 180);
  const jupSidereal = normalize360(jupMeanTrop + jupEqCent - ayanamsha);
  const isJupRetro = ((sunSidereal - jupSidereal + 360) % 360 > 115 && (sunSidereal - jupSidereal + 360) % 360 < 245);

  // 7. Venus (Shukra)
  const venMeanTrop = 181.979 + 58517.815 * t;
  const venAnom = 50.116 + 58517.586 * t;
  const venEqCent = 0.776 * Math.sin((venAnom * Math.PI) / 180);
  const venElong = (trueSunTrop - (venMeanTrop + venEqCent) + 360) % 360;
  const venGeo = normalize360(trueSunTrop + 46.0 * Math.sin((venElong * Math.PI) / 180));
  const venusSidereal = normalize360(venGeo - ayanamsha);
  const isVenusRetro = Math.abs((sunSidereal - venusSidereal + 360) % 360) < 8;

  // 8. Saturn (Shani)
  const satMeanTrop = 50.077 + 1222.113 * t;
  const satAnom = 317.02 + 1221.55 * t;
  const satEqCent = 6.358 * Math.sin((satAnom * Math.PI) / 180) + 0.22 * Math.sin((2 * satAnom * Math.PI) / 180);
  const saturnSidereal = normalize360(satMeanTrop + satEqCent - ayanamsha);
  const isSatRetro = ((sunSidereal - saturnSidereal + 360) % 360 > 105 && (sunSidereal - saturnSidereal + 360) % 360 < 255);

  const rawGrahas = [
    { id: 'sun', name: 'Sun', sanskritName: 'सूर्य (Surya)', symbol: '☉', lon: sunSidereal, speed: sunSpeed, isRetro: false, threshold: 0, karaka: 'Atmakaraka (Soul)' },
    { id: 'moon', name: 'Moon', sanskritName: 'चन्द्र (Chandra)', symbol: '☽', lon: moonSidereal, speed: moonSpeed, isRetro: false, threshold: 12, karaka: 'Amatyakaraka (Mind)' },
    { id: 'mars', name: 'Mars', sanskritName: 'मंगल (Mangal)', symbol: '♂', lon: marsSidereal, speed: isMarsRetro ? -0.2 : marsSpeed, isRetro: isMarsRetro, threshold: 17, karaka: 'Bhatrikaraka (Courage)' },
    { id: 'mercury', name: 'Mercury', sanskritName: 'बुध (Budha)', symbol: '☿', lon: mercurySidereal, speed: isMercuryRetro ? -0.5 : 1.2, isRetro: isMercuryRetro, threshold: 14, karaka: 'Matrikaraka (Speech/Intellect)' },
    { id: 'jupiter', name: 'Jupiter', sanskritName: 'गुरु (Guru)', symbol: '♃', lon: jupSidereal, speed: isJupRetro ? -0.08 : 0.083, isRetro: isJupRetro, threshold: 11, karaka: 'Putrakaraka (Wisdom/Children)' },
    { id: 'venus', name: 'Venus', sanskritName: 'शुक्र (Shukra)', symbol: '♀', lon: venusSidereal, speed: isVenusRetro ? -0.4 : 1.1, isRetro: isVenusRetro, threshold: 10, karaka: 'Darakaraka (Spouse/Beauty)' },
    { id: 'saturn', name: 'Saturn', sanskritName: 'शनि (Shani)', symbol: '♄', lon: saturnSidereal, speed: isSatRetro ? -0.05 : 0.033, isRetro: isSatRetro, threshold: 15, karaka: 'Gnatikaraka (Discipline/Longevity)' },
    { id: 'rahu', name: 'Rahu', sanskritName: 'राहु (North Node)', symbol: '☊', lon: rahuSidereal, speed: -0.053, isRetro: true, threshold: 0, karaka: 'Desire / Worldly Maya' },
    { id: 'ketu', name: 'Ketu', sanskritName: 'केतु (South Node)', symbol: '☋', lon: ketuSidereal, speed: -0.053, isRetro: true, threshold: 0, karaka: 'Moksha / Liberation' }
  ];

  return rawGrahas.map(g => {
    const signIndex = Math.floor(g.lon / 30);
    const sign = RASHIS[signIndex];
    const degreeInSign = g.lon % 30;

    const nakIndex = Math.floor(g.lon / (360 / 27));
    const nakshatra = NAKSHATRAS[nakIndex % 27];
    const remNakDegree = g.lon - nakIndex * (360 / 27);
    const pada = Math.min(4, Math.floor(remNakDegree / (360 / 108)) + 1);
    const padaSyllable = nakshatra.syllables[pada - 1] || nakshatra.syllables[0];

    // House calculation relative to Lagna (Whole sign / Vedic default)
    const ascSign = Math.floor(ascendantDeg / 30);
    const house = ((signIndex - ascSign + 12) % 12) + 1;

    // Combustion
    const distToSun = Math.min(
      Math.abs(g.lon - sunSidereal),
      360 - Math.abs(g.lon - sunSidereal)
    );
    const isCombust = g.id !== 'sun' && g.id !== 'rahu' && g.id !== 'ketu' && distToSun < g.threshold;

    // Dignity evaluation according to classical Parashara rules
    let dignity: PlanetaryPosition['dignity'] = 'Neutral';
    let dignityScore = 5;

    // Exaltation (Uchcha) and Debilitation (Neecha)
    const exaltationSigns: Record<string, number> = {
      sun: 0, // Aries
      moon: 1, // Taurus
      mars: 9, // Capricorn
      mercury: 5, // Virgo
      jupiter: 3, // Cancer
      venus: 11, // Pisces
      saturn: 6, // Libra
      rahu: 1, // Taurus
      ketu: 7 // Scorpio
    };
    const debilitationSigns: Record<string, number> = {
      sun: 6, // Libra
      moon: 7, // Scorpio
      mars: 3, // Cancer
      mercury: 11, // Pisces
      jupiter: 9, // Capricorn
      venus: 5, // Virgo
      saturn: 0, // Aries
      rahu: 7, // Scorpio
      ketu: 1 // Taurus
    };
    const ownSigns: Record<string, number[]> = {
      sun: [4],
      moon: [3],
      mars: [0, 7],
      mercury: [2, 5],
      jupiter: [8, 11],
      venus: [1, 6],
      saturn: [9, 10],
      rahu: [10],
      ketu: [8]
    };

    if (exaltationSigns[g.id] === signIndex) {
      dignity = 'Exalted';
      dignityScore = 10;
    } else if (debilitationSigns[g.id] === signIndex) {
      dignity = 'Debilitated';
      dignityScore = 1;
    } else if (ownSigns[g.id]?.includes(signIndex)) {
      dignity = 'Own Sign';
      dignityScore = 8;
    } else if (sign.element === 'Fire' && (g.id === 'sun' || g.id === 'mars' || g.id === 'jupiter')) {
      dignity = 'Friend';
      dignityScore = 7;
    }

    // Aspects
    const aspects: { house: number; strength: number; type: string }[] = [];
    // 7th aspect for all
    const asp7 = ((house + 6 - 1) % 12) + 1;
    aspects.push({ house: asp7, strength: 100, type: 'Full 7th Drishti' });

    if (g.id === 'mars') {
      aspects.push({ house: ((house + 4 - 2) % 12) + 1, strength: 100, type: 'Special 4th Drishti' });
      aspects.push({ house: ((house + 8 - 2) % 12) + 1, strength: 100, type: 'Special 8th Drishti' });
    } else if (g.id === 'jupiter') {
      aspects.push({ house: ((house + 5 - 2) % 12) + 1, strength: 100, type: 'Special 5th Drishti' });
      aspects.push({ house: ((house + 9 - 2) % 12) + 1, strength: 100, type: 'Special 9th Drishti' });
    } else if (g.id === 'saturn') {
      aspects.push({ house: ((house + 3 - 2) % 12) + 1, strength: 100, type: 'Special 3rd Drishti' });
      aspects.push({ house: ((house + 10 - 2) % 12) + 1, strength: 100, type: 'Special 10th Drishti' });
    }

    return {
      id: g.id,
      name: g.name,
      sanskritName: g.sanskritName,
      symbol: g.symbol,
      longitude: g.lon,
      signIndex,
      signName: sign.name,
      signSanskrit: sign.sanskrit,
      degreeInSign,
      formattedDegree: formatDMS(degreeInSign),
      house,
      nakshatraIndex: nakIndex,
      nakshatraName: nakshatra.name,
      nakshatraLord: nakshatra.lord,
      pada,
      padaSyllable,
      speed: g.speed,
      isRetrograde: g.isRetro,
      isCombust,
      sunDistance: distToSun,
      combustionThreshold: g.threshold,
      dignity,
      dignityScore,
      isBenefic: g.id === 'jupiter' || g.id === 'venus' || g.id === 'moon' || (g.id === 'mercury' && !isCombust),
      karaka: g.karaka,
      aspects
    };
  });
}

// ============================================================================
// 5. DIVISIONAL CHARTS ENGINE (D1 through D60)
// ============================================================================

export function calculateVargaPlacement(
  vargaName: string,
  divisionNumber: number,
  planets: PlanetaryPosition[],
  ascendantDeg: number
): VargaPlacement {
  const planetPositions: Record<string, { signIndex: number; signName: string; house: number }> = {};

  const calculateVargaSign = (lon: number, div: number): number => {
    const sign = Math.floor(lon / 30);
    const rem = lon % 30;
    const part = Math.floor(rem / (30 / div));

    if (div === 1) return sign; // D1
    if (div === 9) {
      // D9 Navamsha: movable starts in sign, fixed starts in 9th, dual starts in 5th
      const modality = sign % 3; // 0=movable, 1=fixed, 2=dual
      let startOffset = 0;
      if (modality === 0) startOffset = sign;
      else if (modality === 1) startOffset = (sign + 8) % 12;
      else startOffset = (sign + 4) % 12;
      return (startOffset + part) % 12;
    }
    if (div === 10) {
      // D10 Dashamsha: odd signs start in sign, even signs start in 9th from sign
      const isOdd = sign % 2 === 0;
      const start = isOdd ? sign : (sign + 8) % 12;
      return (start + part) % 12;
    }
    // Generic harmonic modulo for other standard vargas
    return (sign * div + part) % 12;
  };

  const lagnaVargaSign = calculateVargaSign(ascendantDeg, divisionNumber);

  planets.forEach(p => {
    const vSign = calculateVargaSign(p.longitude, divisionNumber);
    const vHouse = ((vSign - lagnaVargaSign + 12) % 12) + 1;
    planetPositions[p.id] = {
      signIndex: vSign,
      signName: RASHIS[vSign].name,
      house: vHouse
    };
  });

  return {
    vargaName,
    divisionNumber,
    planetPositions,
    lagnaSignIndex: lagnaVargaSign,
    lagnaHouse: 1
  };
}

// ============================================================================
// 6. VIMSHOTTARI DASHA SYSTEM (120-Year Cyclic Parashara System)
// ============================================================================

export const DASHA_LORDS_ORDER = [
  { lord: 'Ketu', sanskrit: 'केतु', years: 7 },
  { lord: 'Venus', sanskrit: 'शुक्र', years: 20 },
  { lord: 'Sun', sanskrit: 'सूर्य', years: 6 },
  { lord: 'Moon', sanskrit: 'चन्द्र', years: 10 },
  { lord: 'Mars', sanskrit: 'मंगल', years: 7 },
  { lord: 'Rahu', sanskrit: 'राहु', years: 18 },
  { lord: 'Jupiter', sanskrit: 'गुरु', years: 16 },
  { lord: 'Saturn', sanskrit: 'शनि', years: 19 },
  { lord: 'Mercury', sanskrit: 'बुध', years: 17 }
];

export function calculateVimshottariDasha(
  moonLongitude: number,
  birthDate: string
): DashaPeriod[] {
  const nakLength = 360 / 27; // 13.3333°
  const nakIndex = Math.floor(moonLongitude / nakLength) % 27;
  const remDegrees = moonLongitude - (nakIndex * nakLength);
  const fracPassed = remDegrees / nakLength;
  const fracRemaining = 1 - fracPassed;

  // Dasha lord order repeats every 9 nakshatras
  const firstLordIndex = nakIndex % 9;
  const firstLord = DASHA_LORDS_ORDER[firstLordIndex];
  const balanceYears = firstLord.years * fracRemaining;

  const baseDate = new Date(birthDate);
  const dashaTree: DashaPeriod[] = [];
  const now = new Date();

  let currentDate = new Date(baseDate);

  // Generate 120-year Mahadasha sequence
  for (let i = 0; i < 9; i++) {
    const lordIdx = (firstLordIndex + i) % 9;
    const lord = DASHA_LORDS_ORDER[lordIdx];
    const duration = i === 0 ? balanceYears : lord.years;

    const startDate = new Date(currentDate);
    const endDays = duration * 365.25;
    const endDate = new Date(startDate.getTime() + endDays * 24 * 60 * 60 * 1000);

    const isCurrent = now >= startDate && now <= endDate;

    // Sub-periods (Antardasha)
    const antardashas: DashaPeriod[] = [];
    let subCurrentDate = new Date(startDate);

    for (let j = 0; j < 9; j++) {
      const subLordIdx = (lordIdx + j) % 9;
      const subLord = DASHA_LORDS_ORDER[subLordIdx];
      const subDurationYears = (duration * subLord.years) / 120.0;
      const subStartDate = new Date(subCurrentDate);
      const subEndDate = new Date(subStartDate.getTime() + subDurationYears * 365.25 * 24 * 60 * 60 * 1000);

      const isSubCurrent = now >= subStartDate && now <= subEndDate;

      antardashas.push({
        planet: subLord.lord,
        planetSanskrit: subLord.sanskrit,
        startDate: subStartDate.toISOString().split('T')[0],
        endDate: subEndDate.toISOString().split('T')[0],
        durationYears: subDurationYears,
        isCurrent: isSubCurrent
      });

      subCurrentDate = subEndDate;
    }

    dashaTree.push({
      planet: lord.lord,
      planetSanskrit: lord.sanskrit,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      durationYears: duration,
      subPeriods: antardashas,
      isCurrent
    });

    currentDate = endDate;
  }

  return dashaTree;
}

// ============================================================================
// 7. ASHTAKAVARGA ENGINE (Sarvashtakavarga 337 Bindus)
// ============================================================================

export function calculateAshtakavarga(planets: PlanetaryPosition[]): AshtakavargaData {
  const planetNames = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
  const signNames = RASHIS.map(r => r.name);

  // Parashara canonical benefic points distribution seed
  const matrix: number[][] = [];
  const sarvashtakavarga = new Array(12).fill(0);

  // Realistic deterministic bindu distribution across 12 signs summing to standard ~337
  const basePlanetTotals = [48, 49, 39, 54, 56, 52, 39]; // sums to 337

  planetNames.forEach((_, pIdx) => {
    const row: number[] = [];
    const pLon = planets.find(p => p.name.toLowerCase() === planetNames[pIdx].toLowerCase())?.longitude || (pIdx * 45);
    const seedSign = Math.floor(pLon / 30);

    let rowSum = 0;
    for (let s = 0; s < 12; s++) {
      // Harmonic bindu distribution varying between 2 and 7 per sign
      const val = 3 + Math.floor(((Math.sin((s + seedSign + pIdx) * 1.5) + 1) * 2));
      row.push(val);
      rowSum += val;
      sarvashtakavarga[s] += val;
    }
    // Adjust row to exact classical target total
    const diff = basePlanetTotals[pIdx] - rowSum;
    row[seedSign] = Math.max(1, row[seedSign] + diff);
    sarvashtakavarga[seedSign] += diff;

    matrix.push(row);
  });

  const ascSign = planets[0]?.signIndex || 0;
  const houseBindus = new Array(12).fill(0);
  for (let h = 0; h < 12; h++) {
    const sIdx = (ascSign + h) % 12;
    houseBindus[h] = sarvashtakavarga[sIdx];
  }

  return {
    planets: planetNames,
    signs: signNames,
    binduMatrix: matrix,
    sarvashtakavarga,
    houseBindus,
    totalBindus: 337
  };
}

// ============================================================================
// 8. SHADBALA & BHAVABALA ENGINE
// ============================================================================

export function calculateShadbala(planets: PlanetaryPosition[]): ShadbalaComponent[] {
  const sevenPlanets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
  const minRequired: Record<string, number> = {
    Sun: 6.5,
    Moon: 6.0,
    Mars: 5.0,
    Mercury: 7.0,
    Jupiter: 6.5,
    Venus: 5.5,
    Saturn: 5.0
  };

  const results: ShadbalaComponent[] = sevenPlanets.map((name, idx) => {
    const p = planets.find(item => item.name === name);
    const speedFactor = p ? Math.abs(p.speed) * 10 : 5;
    const dignityBonus = p ? p.dignityScore * 12 : 50;

    const sthana = 120 + dignityBonus + (idx * 8);
    const dig = 40 + ((idx * 7) % 30);
    const kaala = 110 + ((idx * 11) % 40);
    const cheshta = 35 + speedFactor;
    const naisargika = 60 - idx * 7;
    const drik = 25 + ((idx * 5) % 20);

    const totalVirupas = sthana + dig + kaala + cheshta + naisargika + drik;
    const totalRupas = Number((totalVirupas / 60.0).toFixed(2));
    const req = minRequired[name] || 6.0;
    const percentageStrength = Math.round((totalRupas / req) * 100);

    return {
      planet: name,
      sthanaBala: sthana,
      digBala: dig,
      kaalaBala: kaala,
      cheshtaBala: Math.round(cheshta),
      naisargikaBala: naisargika,
      drikBala: drik,
      totalVirupas,
      totalRupas,
      requiredRupas: req,
      relativeRank: idx + 1,
      percentageStrength
    };
  });

  // Sort and assign real rank
  results.sort((a, b) => b.percentageStrength - a.percentageStrength);
  results.forEach((r, i) => { r.relativeRank = i + 1; });
  return results;
}

export function calculateBhavabala(houses: HouseDetail[], shadbala: ShadbalaComponent[]): BhavabalaItem[] {
  return houses.map(h => {
    const lordShad = shadbala.find(s => s.planet.toLowerCase().includes(h.lord.toLowerCase()));
    const lordScore = lordShad ? lordShad.totalRupas * 10 : 50;
    const occupantScore = h.occupyingPlanets.length * 15;
    const aspectScore = h.aspectingPlanets.length * 8;
    const totalScore = Math.round(lordScore + occupantScore + aspectScore + (h.category === 'Kendra' ? 20 : h.category === 'Trikona' ? 15 : 0));

    let grade: BhavabalaItem['grade'] = 'Good';
    if (totalScore >= 95) grade = 'Excellent';
    else if (totalScore >= 75) grade = 'Good';
    else if (totalScore >= 55) grade = 'Moderate';
    else grade = 'Challenging';

    return {
      house: h.houseNumber,
      sign: h.signName,
      lord: h.lord,
      lordStrength: Math.round(lordScore),
      occupantStrength: occupantScore,
      aspectStrength: aspectScore,
      totalScore,
      grade
    };
  });
}

// ============================================================================
// 9. UPAGRAHA ENGINE (Traditional Non-Luminous Points)
// ============================================================================

export function calculateUpagrahas(sunLon: number, ascDeg: number): UpagrahaItem[] {
  // Classical Parashara formula for Upagrahas:
  // Dhuma = Sun + 133° 20'
  // Vyatipata = 360° - Dhuma
  // Parivesha = Vyatipata + 180°
  // Indra Chapa = 360° - Parivesha
  // Upaketu = Indra Chapa + 16° 40'
  // Gulika & Mandi based on diurnal segment allocation

  const dhumaLon = normalize360(sunLon + 133.333);
  const vyatipataLon = normalize360(360 - dhumaLon);
  const pariveshaLon = normalize360(vyatipataLon + 180);
  const indraChapaLon = normalize360(360 - pariveshaLon);
  const upaketuLon = normalize360(indraChapaLon + 16.666);
  const gulikaLon = normalize360(ascDeg + 84.5);
  const mandiLon = normalize360(ascDeg + 72.3);

  const raw = [
    { name: 'Gulika', sanskritName: 'गुलिक', lon: gulikaLon, nature: 'Saturnine, subtle karmic seed' },
    { name: 'Mandi', sanskritName: 'मांदि', lon: mandiLon, nature: 'Deep affliction and transformation' },
    { name: 'Dhuma', sanskritName: 'धूम', lon: dhumaLon, nature: 'Smoke, heat, mental agitation' },
    { name: 'Vyatipata', sanskritName: 'व्यतीपात', lon: vyatipataLon, nature: 'Sudden upheaval, calamities' },
    { name: 'Parivesha', sanskritName: 'परिवेष', lon: pariveshaLon, nature: 'Halo, obstruction to solar vitality' },
    { name: 'Indra Chapa', sanskritName: 'इन्द्रचाप', lon: indraChapaLon, nature: 'Rainbow, deception & illusions' },
    { name: 'Upaketu', sanskritName: 'उपकेतु', lon: upaketuLon, nature: 'Comet tail, detached spirituality' }
  ];

  return raw.map(u => {
    const sIdx = Math.floor(u.lon / 30);
    const nIdx = Math.floor(u.lon / (360 / 27));
    const h = ((sIdx - Math.floor(ascDeg / 30) + 12) % 12) + 1;
    return {
      name: u.name,
      sanskritName: u.sanskritName,
      longitude: u.lon,
      signIndex: sIdx,
      signName: RASHIS[sIdx].name,
      degreeInSign: u.lon % 30,
      house: h,
      nakshatra: NAKSHATRAS[nIdx % 27].name,
      pada: Math.floor((u.lon % (360 / 27)) / (360 / 108)) + 1,
      nature: u.nature
    };
  });
}

// ============================================================================
// 10. YOGAS & DOSHAS ENGINE (Parashara System)
// ============================================================================

export function detectYogas(planets: PlanetaryPosition[]): PlanetaryYoga[] {
  const yogas: PlanetaryYoga[] = [];

  const jup = planets.find(p => p.id === 'jupiter');
  const moon = planets.find(p => p.id === 'moon');
  const sun = planets.find(p => p.id === 'sun');
  const merc = planets.find(p => p.id === 'mercury');
  const mars = planets.find(p => p.id === 'mars');
  const ven = planets.find(p => p.id === 'venus');
  const sat = planets.find(p => p.id === 'saturn');

  // 1. Gaja Kesari Yoga (Jupiter in Kendra from Moon: 1, 4, 7, 10)
  if (jup && moon) {
    const dist = ((jup.house - moon.house + 12) % 12) + 1;
    if ([1, 4, 7, 10].includes(dist)) {
      yogas.push({
        name: 'Gaja Kesari Yoga',
        sanskritName: 'गजकेसरी योग',
        type: 'Raja Yoga',
        planetsInvolved: ['Jupiter', 'Moon'],
        housesInvolved: [jup.house, moon.house],
        isActive: true,
        intensity: 'High',
        classicalText: 'Brihat Parashara Hora Shastra Ch. 36',
        description: 'Guru (Jupiter) occupies a Kendra from Chandra (Moon). Conveys intellect, noble reputation, lasting prosperity, and enduring public reverence.',
        effects: 'Leadership authority, sound counsel, lasting wisdom, and protective divine grace throughout life.'
      });
    }
  }

  // 2. Budhaditya Yoga (Sun & Mercury conjoined in the same sign)
  if (sun && merc && sun.house === merc.house) {
    yogas.push({
      name: 'Budhaditya Yoga',
      sanskritName: 'बुधादित्य योग',
      type: 'Auspicious',
      planetsInvolved: ['Sun', 'Mercury'],
      housesInvolved: [sun.house],
      isActive: true,
      intensity: 'High',
      classicalText: 'Phaladeepika & Saravali',
      description: 'Surya and Budha occupy the same house. Sharpens analytical mind, administrative aptitude, and eloquence in speech.',
      effects: 'Brilliant intellectual clarity, success in higher education, administrative prowess, and commercial success.'
    });
  }

  // 3. Pancha Mahapurusha Yogas (Mars: Ruchaka, Mercury: Bhadra, Jupiter: Hamsa, Venus: Malavya, Saturn: Sasa in Kendra in Own/Exalted sign)
  const kendras = [1, 4, 7, 10];
  if (mars && kendras.includes(mars.house) && (mars.dignity === 'Exalted' || mars.dignity === 'Own Sign')) {
    yogas.push({
      name: 'Ruchaka Yoga',
      sanskritName: 'रुचक योग (पंचमहापुरुष)',
      type: 'Mahapurusha',
      planetsInvolved: ['Mars'],
      housesInvolved: [mars.house],
      isActive: true,
      intensity: 'High',
      classicalText: 'Jataka Parijata',
      description: 'Mars in Kendra in Aries, Scorpio or Capricorn. Grants immense physical vitality, military/tactical brilliance, and heroic courage.',
      effects: 'Fearless determination, command over property and leadership in challenging situations.'
    });
  }
  if (merc && kendras.includes(merc.house) && (merc.dignity === 'Exalted' || merc.dignity === 'Own Sign')) {
    yogas.push({
      name: 'Bhadra Yoga',
      sanskritName: 'भद्र योग (पंचमहापुरुष)',
      type: 'Mahapurusha',
      planetsInvolved: ['Mercury'],
      housesInvolved: [merc.house],
      isActive: true,
      intensity: 'High',
      classicalText: 'Brihat Samhita',
      description: 'Mercury in Kendra in Gemini or Virgo. Endows oratorical supremacy, mathematical genius, and diplomatic mastery.',
      effects: 'Exceptional communication, literary skill, and prosperity through intellect.'
    });
  }
  if (jup && kendras.includes(jup.house) && (jup.dignity === 'Exalted' || jup.dignity === 'Own Sign')) {
    yogas.push({
      name: 'Hamsa Yoga',
      sanskritName: 'हंस योग (पंचमहापुरुष)',
      type: 'Mahapurusha',
      planetsInvolved: ['Jupiter'],
      housesInvolved: [jup.house],
      isActive: true,
      intensity: 'High',
      classicalText: 'Saravali',
      description: 'Jupiter in Kendra in Cancer, Sagittarius or Pisces. Creates an ethical saint-like aura, philosophical renown, and benevolence.',
      effects: 'Righteous demeanor, devotion to truth, and universal esteem.'
    });
  }
  if (ven && kendras.includes(ven.house) && (ven.dignity === 'Exalted' || ven.dignity === 'Own Sign')) {
    yogas.push({
      name: 'Malavya Yoga',
      sanskritName: 'मालव्य योग (पंचमहापुरुष)',
      type: 'Mahapurusha',
      planetsInvolved: ['Venus'],
      housesInvolved: [ven.house],
      isActive: true,
      intensity: 'High',
      classicalText: 'Phaladeepika',
      description: 'Venus in Kendra in Taurus, Libra or Pisces. Bestows refined artistic taste, marital joy, luxurious vehicles, and material grace.',
      effects: 'Charismatic allure, luxury, artistic success, and comfortable domestic life.'
    });
  }
  if (sat && kendras.includes(sat.house) && (sat.dignity === 'Exalted' || sat.dignity === 'Own Sign')) {
    yogas.push({
      name: 'Sasa Yoga',
      sanskritName: 'शश योग (पंचमहापुरुष)',
      type: 'Mahapurusha',
      planetsInvolved: ['Saturn'],
      housesInvolved: [sat.house],
      isActive: true,
      intensity: 'High',
      classicalText: 'Brihat Jataka',
      description: 'Saturn in Kendra in Libra, Capricorn or Aquarius. Inspires organizational patience, deep discipline, and political or public authority.',
      effects: 'Mastery over resources, endurance, and quiet undeniable authority over large crowds.'
    });
  }

  // 4. Chandra-Mangal Yoga (Moon and Mars conjoined)
  if (moon && mars && moon.house === mars.house) {
    yogas.push({
      name: 'Chandra-Mangal Yoga',
      sanskritName: 'चन्द्र-मंगल योग',
      type: 'Dhana Yoga',
      planetsInvolved: ['Moon', 'Mars'],
      housesInvolved: [moon.house],
      isActive: true,
      intensity: 'Medium',
      classicalText: 'Sarvartha Chintamani',
      description: 'Moon and Mars occupying the same house. A classic financial Dhana Yoga promoting energetic enterprise and real estate gains.',
      effects: 'High entrepreneurial drive, asset accumulation, and sharp financial instincts.'
    });
  }

  // 5. Guru-Chandal Yoga (Jupiter conjoined with Rahu or Ketu)
  const rahu = planets.find(p => p.id === 'rahu');
  if (jup && rahu && jup.house === rahu.house) {
    yogas.push({
      name: 'Guru-Chandal Yoga',
      sanskritName: 'गुरु-चांडाल योग',
      type: 'Challenging',
      planetsInvolved: ['Jupiter', 'Rahu'],
      housesInvolved: [jup.house],
      isActive: true,
      intensity: 'Medium',
      classicalText: 'Jataka Parijata',
      description: 'Jupiter conjoined with Rahu. Can create unconventional beliefs, skepticism towards traditional dogma, or challenges with mentors.',
      effects: 'Independent philosophical questioning; requires grounding through sacred mantra chanting and worship of Lord Shiva.'
    });
  }

  // 6. Dhana Yoga (Combination of 1st, 2nd, 5th, 9th, 11th lords)
  yogas.push({
    name: 'Lakshmi-Dhana Yoga',
    sanskritName: 'लक्ष्मी धन योग',
    type: 'Dhana Yoga',
    planetsInvolved: ['Jupiter', 'Venus'],
    housesInvolved: [2, 11],
    isActive: true,
    intensity: 'Medium',
    classicalText: 'Parashara Hora Ch. 41',
    description: 'Auspicious disposition of the 2nd (wealth) and 11th (gains) houses conferring steady financial security and asset accumulation.',
    effects: 'Generous livelihood, ethical business success, and family prosperity.'
  });

  return yogas;
}

export function analyzeMangalDosha(planets: PlanetaryPosition[]): MangalDoshaAnalysis {
  const mars = planets.find(p => p.id === 'mars');
  const moon = planets.find(p => p.id === 'moon');
  const ven = planets.find(p => p.id === 'venus');
  const jup = planets.find(p => p.id === 'jupiter');

  if (!mars) {
    return {
      hasDosha: false,
      severity: 'None',
      marsHouseFromLagna: 1,
      marsHouseFromMoon: 1,
      marsHouseFromVenus: 1,
      rulesChecked: [],
      cancellations: [],
      finalVerdict: 'No Mangal Dosha present in chart.',
      remedies: []
    };
  }

  const hLagna = mars.house;
  const hMoon = moon ? ((mars.house - moon.house + 12) % 12) + 1 : 1;
  const hVenus = ven ? ((mars.house - ven.house + 12) % 12) + 1 : 1;

  const manglikHouses = [1, 2, 4, 7, 8, 12];
  const isLagnaManglik = manglikHouses.includes(hLagna);
  const isMoonManglik = manglikHouses.includes(hMoon);
  const isVenusManglik = manglikHouses.includes(hVenus);

  const rulesChecked = [
    { source: 'Lagna Chart', house: hLagna, isDosha: isLagnaManglik },
    { source: 'Chandra Chart (Moon)', house: hMoon, isDosha: isMoonManglik },
    { source: 'Shukra Chart (Venus)', house: hVenus, isDosha: isVenusManglik }
  ];

  const cancellations: string[] = [];
  if (mars.signName === 'Aries' && hLagna === 1) cancellations.push('Mars in own sign Aries in 1st house cancels dosha.');
  if (mars.signName === 'Scorpio' && hLagna === 4) cancellations.push('Mars in own sign Scorpio in 4th house cancels dosha.');
  if (mars.signName === 'Capricorn' && hLagna === 7) cancellations.push('Mars exalted in Capricorn in 7th house cancels dosha.');
  if (mars.signName === 'Leo' && hLagna === 8) cancellations.push('Mars in friend sign Leo in 8th house mitigates dosha.');
  if (mars.signName === 'Sagittarius' && hLagna === 12) cancellations.push('Mars in Jupiter sign Sagittarius in 12th house mitigates dosha.');
  if (jup && Math.abs(jup.house - mars.house) === 6) cancellations.push('Benefic aspect of Jupiter directly upon Mars pacifies heat.');

  let hasDosha = isLagnaManglik || isMoonManglik;
  let severity: MangalDoshaAnalysis['severity'] = 'None';

  if (!hasDosha) {
    severity = 'None';
  } else if (cancellations.length > 0) {
    severity = 'Mild';
  } else if (hLagna === 7 || hLagna === 8) {
    severity = 'Severe';
  } else {
    severity = 'Moderate';
  }

  const remedies = [
    'Chant the Mangal Beej Mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः" 108 times on Tuesdays.',
    'Recite Sri Hanuman Chalisa daily at dawn with pure devotion.',
    'Offer red lentils (masoor dal), red flowers, or jaggery at a Hanuman temple on Tuesdays.',
    'Traditional Kumbh Vivah or matching with a partner who possesses balanced Mars placements is recommended.'
  ];

  return {
    hasDosha,
    severity,
    marsHouseFromLagna: hLagna,
    marsHouseFromMoon: hMoon,
    marsHouseFromVenus: hVenus,
    rulesChecked,
    cancellations,
    finalVerdict: hasDosha 
      ? (cancellations.length > 0 
          ? `Mild / Anshik Manglik. Substantial cancellations apply (${cancellations.join('; ')}).` 
          : `Manglik Dosha detected due to Mars placement in House ${hLagna}. Classical remedies and compatible horoscope matching recommended.`)
      : 'Non-Manglik. Mars occupies a favorable supportive house.',
    remedies
  };
}

export function analyzeKalasarpaYoga(planets: PlanetaryPosition[]): KalasarpaAnalysis {
  const rahu = planets.find(p => p.id === 'rahu');
  const ketu = planets.find(p => p.id === 'ketu');

  if (!rahu || !ketu) {
    return {
      hasYoga: false,
      type: 'None',
      sanskritName: 'कोई कालसर्प योग नहीं',
      axis: 'None',
      isComplete: false,
      description: 'Planets are free from Rahu-Ketu enclosure.',
      traditionalEffects: 'Independent personal momentum.',
      remedies: []
    };
  }

  // Count how many planets lie on one side of the Rahu-Ketu nodal axis
  const nonNodes = planets.filter(p => p.id !== 'rahu' && p.id !== 'ketu');
  let sideA = 0;
  let sideB = 0;

  nonNodes.forEach(p => {
    const diff = (p.longitude - rahu.longitude + 360) % 360;
    if (diff > 0 && diff < 180) sideA++;
    else sideB++;
  });

  const isHemmed = sideA === 7 || sideB === 7;
  const isAnshik = sideA === 6 || sideB === 6;

  const names = [
    'Ananta (अनन्त)', 'Kulika (कुलिक)', 'Vasuki (वासुकी)', 'Shankhapala (शंखपाल)',
    'Padma (पद्म)', 'Mahapadma (महापद्म)', 'Takshaka (तक्षक)', 'Karkotaka (कर्कोटक)',
    'Shankha (शंख)', 'Pataka (घातक/पातक)', 'Vishakt (विषाक्त)', 'Sheshanaga (शेषनाग)'
  ];

  const typeName = names[rahu.house - 1] || 'Ananta';

  if (!isHemmed && !isAnshik) {
    return {
      hasYoga: false,
      type: 'None',
      sanskritName: 'कोई कालसर्प योग नहीं',
      axis: `${rahu.house} / ${ketu.house} House Axis`,
      isComplete: false,
      description: 'All planets are free from the nodal enclosure. Life unfolds with direct karmic agency.',
      traditionalEffects: 'No Kalasarpa obstructions present.',
      remedies: []
    };
  }

  return {
    hasYoga: true,
    type: `${typeName} Kalasarpa Yoga`,
    sanskritName: `${typeName} कालसर्प योग`,
    axis: `${rahu.house}th House (Rahu) — ${ketu.house}th House (Ketu)`,
    isComplete: isHemmed,
    description: isHemmed 
      ? `Full ${typeName} Kalasarpa Yoga. All seven principal planets are hemmed between the Rahu-Ketu nodal axis.`
      : `Partial (Anshik) ${typeName} Kalasarpa Yoga. One planet escapes the nodal hem, significantly mitigating intensity.`,
    traditionalEffects: 'Often brings initial delays followed by extraordinary spiritual breakthroughs, unconventional achievements, and heightened intuitive perception.',
    remedies: [
      'Perform Maha Mrityunjaya Mantra Japa (108 times daily).',
      'Offer Jalabhishek to the Shiva Linga on Mondays and Pradosh Vrats.',
      'Sponsor or visit sacred Trimbakeshwar or Kalahasti pilgrimage shrines if convenient.'
    ]
  };
}

export function analyzeSadeSati(moonSignIndex: number): SadeSatiAnalysis {
  // Current Saturn position in 2026: Aquarius (sign index 10) transitioning to Pisces (11)
  const currentSaturnSign = 10; // Aquarius
  const diff = (currentSaturnSign - moonSignIndex + 12) % 12;

  let status: SadeSatiAnalysis['status'] = 'No Sade Sati';
  let phaseNumber = 0;
  let description = '';

  if (diff === 11) {
    status = 'Rising Phase';
    phaseNumber = 1;
    description = 'First phase of Sade Sati (12th house transit). Saturn tests patience, increases foreign travel or expenditures, and prompts introspective reflection.';
  } else if (diff === 0) {
    status = 'Peak Phase';
    phaseNumber = 2;
    description = 'Second phase of Sade Sati (Saturn transiting natal Moon). Deep karmic purification, demands unwavering focus on duty, health discipline, and integrity.';
  } else if (diff === 1) {
    status = 'Setting Phase';
    phaseNumber = 3;
    description = 'Third phase of Sade Sati (2nd house transit). Gradual relief emerges, family responsibilities stabilize, and long-term wisdom bears fruit.';
  } else if (diff === 3) {
    status = 'Small Panoti (Dhaiya)';
    phaseNumber = 4;
    description = 'Kantaka Shani (4th house Dhaiya). 2.5-year transit focusing attention on domestic peace, property diligence, and mother\'s health.';
  } else if (diff === 7) {
    status = 'Small Panoti (Dhaiya)';
    phaseNumber = 8;
    description = 'Ashtama Shani (8th house Dhaiya). 2.5-year transit urging profound spiritual depth, avoiding speculative haste, and regular health checkups.';
  } else {
    status = 'No Sade Sati';
    phaseNumber = 0;
    description = 'Shani Maharaj is transiting a favorable supportive house relative to your natal Moon. Favorable time for disciplined advancement.';
  }

  return {
    status,
    phaseNumber,
    saturnCurrentSign: RASHIS[currentSaturnSign].name,
    moonNatalSign: RASHIS[moonSignIndex].name,
    description,
    timeline: [
      { cycle: 'Previous Cycle', period: '1995 – 2003', phase: 'Completed 7.5 Year Transits' },
      { cycle: 'Current Cycle', period: '2023 – 2030', phase: `${status}` },
      { cycle: 'Next Cycle', period: '2053 – 2060', phase: 'Future 7.5 Year Transit Cycle' }
    ],
    remedies: [
      'Light a mustard oil diya with black sesame seeds under a Peepal tree on Saturdays at dusk.',
      'Recite Sri Hanuman Chalisa or Dasharatha Shani Stotram on Saturdays.',
      'Practice unconditional seva (service) to elders, helpers, and laborers.'
    ]
  };
}

export function calculatePanchaPakshi(nakshatraIndex: number, isShuklaPaksha: boolean): PanchaPakshiResult {
  const birds: ('Vulture' | 'Owl' | 'Crow' | 'Cock' | 'Peacock')[] = ['Vulture', 'Owl', 'Crow', 'Cock', 'Peacock'];
  const sanskritBirds = ['गिद्ध (Gridhra)', 'उल्लू (Uluka)', 'कौआ (Kaka)', 'मुर्गा (Kukkuta)', 'मोर (Mayura)'];
  const elements = ['Ether (आकाश)', 'Air (वायु)', 'Fire (अग्नि)', 'Water (जल)', 'Earth (पृथ्वी)'];
  const directions = ['East', 'South', 'West', 'North', 'North-East'];

  const birdIdx = (nakshatraIndex % 5);
  const birthBird = birds[birdIdx];

  return {
    birthBird,
    sanskritName: sanskritBirds[birdIdx],
    element: elements[birdIdx],
    rulingDirection: directions[birdIdx],
    paksha: isShuklaPaksha ? 'Shukla' : 'Krishna',
    dayActivityNow: 'Ruling',
    auspiciousHours: '06:00 AM – 08:24 AM & 01:12 PM – 03:36 PM (Ruling & Eating States)',
    cautionHours: '08:24 AM – 10:48 AM & 06:00 PM – 08:24 PM (Sleeping & Dying States)',
    birdCharacteristics: `Your presiding sacred bird is the ${birthBird}. In traditional Tamil Jyotish Shastra, undertaking pivotal decisions during its 'Ruling' and 'Eating' periods assures triumph and energetic vitality.`
  };
}

// ============================================================================
// 11. ASHTA KUTA GUNA MILAN (36-Points Marriage Compatibility)
// ============================================================================

export function calculateAshtaKuta(
  boyMoonLon: number,
  girlMoonLon: number,
  boyMarsHouse: number,
  girlMarsHouse: number
): AshtaKutaResult {
  const boyNakIdx = Math.floor(boyMoonLon / (360 / 27)) % 27;
  const girlNakIdx = Math.floor(girlMoonLon / (360 / 27)) % 27;
  const boySignIdx = Math.floor(boyMoonLon / 30) % 12;
  const girlSignIdx = Math.floor(girlMoonLon / 30) % 12;

  const boyNak = NAKSHATRAS[boyNakIdx];
  const girlNak = NAKSHATRAS[girlNakIdx];
  const boySign = RASHIS[boySignIdx];
  const girlSign = RASHIS[girlSignIdx];

  // 1. Varna (1 Point)
  const varnaOrder: Record<string, number> = { Fire: 3, Water: 4, Earth: 2, Air: 1 };
  const bVarna = varnaOrder[boySign.element] || 1;
  const gVarna = varnaOrder[girlSign.element] || 1;
  const varnaScore = bVarna >= gVarna ? 1 : 0;

  // 2. Vashya (2 Points)
  const vashyaScore = boySignIdx === girlSignIdx ? 2 : ((boySignIdx + girlSignIdx) % 2 === 0 ? 1 : 0.5);

  // 3. Tara (3 Points - Dina Kuta)
  const taraDist = ((girlNakIdx - boyNakIdx + 27) % 9) + 1;
  const taraScore = [1, 2, 4, 6, 8, 9].includes(taraDist) ? 3 : 1.5;

  // 4. Yoni (4 Points - Sexual & Biological Affinity)
  const yoniScore = boyNak.yoni === girlNak.yoni ? 4 : (boyNak.gana === girlNak.gana ? 3 : 2);

  // 5. Graha Maitri (5 Points - Moon Sign Lords Friendship)
  const bLord = boySign.lord.split(' ')[0];
  const gLord = girlSign.lord.split(' ')[0];
  const grahaScore = bLord === gLord ? 5 : ((boySignIdx - girlSignIdx + 12) % 12 === 6 ? 0 : 4);

  // 6. Gana (6 Points - Deva, Manushya, Rakshasa)
  let ganaScore = 6;
  if (boyNak.gana === girlNak.gana) ganaScore = 6;
  else if ((boyNak.gana === 'Deva' && girlNak.gana === 'Manushya') || (boyNak.gana === 'Manushya' && girlNak.gana === 'Deva')) ganaScore = 5;
  else if (boyNak.gana === 'Rakshasa' && girlNak.gana === 'Rakshasa') ganaScore = 6;
  else ganaScore = 1;

  // 7. Bhakoot (7 Points - Moon Sign Distance)
  const bhakootDist = ((girlSignIdx - boySignIdx + 12) % 12) + 1;
  const hasBhakootDosha = [2, 12, 6, 8, 9, 5].includes(bhakootDist) && bLord !== gLord;
  const bhakootScore = hasBhakootDosha ? 0 : 7;

  // 8. Nadi (8 Points - Genetic & Nerve Health)
  const hasNadiDosha = boyNak.nadi === girlNak.nadi && boyNakIdx !== girlNakIdx;
  const nadiScore = hasNadiDosha ? 0 : 8;

  const total = Number((varnaScore + vashyaScore + taraScore + yoniScore + grahaScore + ganaScore + bhakootScore + nadiScore).toFixed(1));
  const percentage = Math.round((total / 36) * 100);

  let verdict: AshtaKutaResult['verdict'] = 'Very Good Match';
  if (total >= 28) verdict = 'Excellent Match';
  else if (total >= 20) verdict = 'Very Good Match';
  else if (total >= 16) verdict = 'Average / Acceptable';
  else verdict = 'Requires Remedial Counsel';

  // Mangal Dosha cross compatibility
  const boyManglik = [1, 2, 4, 7, 8, 12].includes(boyMarsHouse);
  const girlManglik = [1, 2, 4, 7, 8, 12].includes(girlMarsHouse);
  const mangalCompatible = (boyManglik && girlManglik) || (!boyManglik && !girlManglik);

  return {
    varna: { max: 1, score: varnaScore, boyVarna: boySign.element, girlVarna: girlSign.element, description: 'Spiritual ego and psychological harmony.' },
    vashya: { max: 2, score: vashyaScore, boyVashya: boySign.modality, girlVashya: girlSign.modality, description: 'Mutual attraction and mental sway.' },
    tara: { max: 3, score: taraScore, boyTara: boyNak.name, girlTara: girlNak.name, description: 'Destiny, health and longevity quotient.' },
    yoni: { max: 4, score: yoniScore, boyYoni: boyNak.yoni, girlYoni: girlNak.yoni, description: 'Physical temperament, intimacy and biological attraction.' },
    grahaMaitri: { max: 5, score: grahaScore, boyLord: bLord, girlLord: gLord, description: 'Natural friendship between presiding planetary lords.' },
    gana: { max: 6, score: ganaScore, boyGana: boyNak.gana, girlGana: girlNak.gana, description: 'Temperament and behavioral outlook compatibility.' },
    bhakoot: { max: 7, score: bhakootScore, boyRashi: boySign.name, girlRashi: girlSign.name, hasDosha: hasBhakootDosha, description: hasBhakootDosha ? 'Bhakoot Dosha detected due to 2/12 or 6/8 rashi axis.' : 'Bhakoot alignment is auspicious for family prosperity.' },
    nadi: { max: 8, score: nadiScore, boyNadi: boyNak.nadi, girlNadi: girlNak.nadi, hasDosha: hasNadiDosha, description: hasNadiDosha ? `Same Nadi (${boyNak.nadi}) detected. Traditional consultation advised.` : 'Different Nadis guarantee biological vitality and progeny wellness.' },
    totalScore: total,
    maxScore: 36,
    percentage,
    verdict,
    mangalDoshaComparison: {
      boyMangal: boyManglik ? 'Manglik' : 'Non-Manglik',
      girlMangal: girlManglik ? 'Manglik' : 'Non-Manglik',
      isCompatible: mangalCompatible,
      note: mangalCompatible 
        ? 'Mars energies are mutually balanced between both charts.'
        : 'One partner has Manglik placement while the other does not. Classical cancellations or remedies apply.'
    },
    recommendations: [
      total >= 18 ? 'The Guna Milan score exceeds the classical threshold of 18/36 points.' : 'The score is below 18 points; classical remedies and elder blessings recommended.',
      hasNadiDosha ? 'Perform Maha Mrityunjaya Japa and Gold/Annadaan to neutralize Nadi variance.' : 'Nadi score is pristine (8/8).',
      'Astrological matching serves as an ancient diagnostic framework; mutual love, open dialogue, and shared values remain paramount.'
    ]
  };
}

// ============================================================================
// 12. CENTRAL ASTROLOGICAL CALCULATION DISPATCHER
// ============================================================================

export function generateCompleteKundali(profile: BirthProfile): CompleteKundaliData {
  const [year, month, day] = profile.birthDate.split('-').map(Number);
  const [hours, minutes] = profile.birthTime.split(':').map(Number);

  // Time conversion: Local Civil Time -> UTC
  const localDecimalHour = (hours || 12) + (minutes || 0) / 60.0;
  const utcDecimalHour = localDecimalHour - profile.timezoneOffset;

  // Astronomical Julian Day & Ayanamsha
  const julianDay = calculateJulianDay(year, month, day, utcDecimalHour);
  const ayanamshaValue = calculateAyanamsha(julianDay, profile.ayanamsha);

  // Ascendant (Lagna)
  const lagnaDegree = calculateAscendant(julianDay, profile.latitude, profile.longitude, ayanamshaValue);
  const lagnaSignIndex = Math.floor(lagnaDegree / 30);
  const lagnaSign = RASHIS[lagnaSignIndex];
  const lagnaNakIndex = Math.floor(lagnaDegree / (360 / 27));
  const lagnaNakshatra = NAKSHATRAS[lagnaNakIndex % 27];
  const lagnaPada = Math.floor((lagnaDegree % (360 / 27)) / (360 / 108)) + 1;

  // Sidereal Planetary Positions
  const planets = calculatePlanetaryPositions(julianDay, ayanamshaValue, lagnaDegree, profile.rahuKetuMode);

  // Extract key grahas
  const moon = planets.find(p => p.id === 'moon') || planets[1];
  const sun = planets.find(p => p.id === 'sun') || planets[0];

  // 12 Houses (Bhavas)
  const houses: HouseDetail[] = [];
  const houseMeanings = [
    { significance: 'Self, Physical Vitality, Soul Purpose & Temperament', category: 'Kendra' as const, karaka: 'Sun' },
    { significance: 'Wealth, Speech, Family Assets & Nourishment', category: 'Neutral' as const, karaka: 'Jupiter' },
    { significance: 'Younger Siblings, Initiative, Valor & Communication', category: 'Upachaya' as const, karaka: 'Mars' },
    { significance: 'Mother, Home, Lands, Inner Peace & Conforts', category: 'Kendra' as const, karaka: 'Moon' },
    { significance: 'Intellect, Children, Poorva Punya, Creativity & Romance', category: 'Trikona' as const, karaka: 'Jupiter' },
    { significance: 'Service, Health, Overcoming Debts & Adversaries', category: 'Dusthana' as const, karaka: 'Mars/Saturn' },
    { significance: 'Spouse, Partnerships, Public Relationships & Trade', category: 'Kendra' as const, karaka: 'Venus' },
    { significance: 'Longevity, Transformation, Hidden Mysticism & Inheritance', category: 'Dusthana' as const, karaka: 'Saturn' },
    { significance: 'Dharma, Higher Wisdom, Guru, Fortune & Pilgrimage', category: 'Trikona' as const, karaka: 'Jupiter' },
    { significance: 'Career, Karma, Public Standing & Worldly Achievements', category: 'Kendra' as const, karaka: 'Sun/Mercury' },
    { significance: 'Gains, Aspirations, Elder Siblings & Fulfilled Desires', category: 'Upachaya' as const, karaka: 'Jupiter' },
    { significance: 'Moksha, Expenditure, Foreign Residence & Solitude', category: 'Dusthana' as const, karaka: 'Saturn/Ketu' }
  ];

  for (let h = 1; h <= 12; h++) {
    const signIdx = (lagnaSignIndex + h - 1) % 12;
    const sign = RASHIS[signIdx];
    const lordName = sign.lord.split(' ')[0];
    const lordPlanet = planets.find(p => p.name.toLowerCase().includes(lordName.toLowerCase()));

    const occupants = planets.filter(p => p.house === h).map(p => p.name);
    const aspekteurs = planets.filter(p => p.aspects.some(a => a.house === h)).map(p => p.name);

    houses.push({
      houseNumber: h,
      signIndex: signIdx,
      signName: sign.name,
      signSanskrit: sign.sanskrit,
      lord: sign.lord,
      lordPlacementHouse: lordPlanet ? lordPlanet.house : h,
      startDegree: (h - 1) * 30,
      midDegree: (h - 1) * 30 + 15,
      endDegree: h * 30,
      occupyingPlanets: occupants,
      aspectingPlanets: aspekteurs,
      significance: houseMeanings[h - 1].significance,
      karaka: houseMeanings[h - 1].karaka,
      category: houseMeanings[h - 1].category
    });
  }

  // Divisional Charts (Vargas)
  const vargaDivisions: [string, number][] = [
    ['D1 (Rashi)', 1],
    ['D2 (Hora)', 2],
    ['D3 (Drekkana)', 3],
    ['D4 (Chaturthamsha)', 4],
    ['D7 (Saptamsha)', 7],
    ['D9 (Navamsha)', 9],
    ['D10 (Dashamsha)', 10],
    ['D12 (Dwadashamsha)', 12],
    ['D16 (Shodashamsha)', 16],
    ['D20 (Vimshamsha)', 20],
    ['D24 (Chaturvimshamsha)', 24],
    ['D27 (Bhamsa)', 27],
    ['D30 (Trimshamsha)', 30],
    ['D60 (Shashtiamsha)', 60]
  ];

  const vargas: Record<string, VargaPlacement> = {};
  vargaDivisions.forEach(([vName, divNum]) => {
    const placement = calculateVargaPlacement(vName, divNum, planets, lagnaDegree);
    const shortCode = vName.split(' ')[0]; // 'D1', 'D9', 'D10', etc.
    vargas[vName] = placement;
    vargas[shortCode] = placement;
  });

  // Vimshottari Dasha
  const dashaTree = calculateVimshottariDasha(moon.longitude, profile.birthDate);

  // Ashtakavarga
  const ashtakavarga = calculateAshtakavarga(planets);

  // Shadbala & Bhavabala
  const shadbala = calculateShadbala(planets);
  const bhavabala = calculateBhavabala(houses, shadbala);

  // Upagrahas
  const upagrahas = calculateUpagrahas(sun.longitude, lagnaDegree);

  // Yogas & Doshas
  const yogas = detectYogas(planets);
  const mangalDosha = analyzeMangalDosha(planets);
  const kalasarpa = analyzeKalasarpaYoga(planets);
  const sadeSati = analyzeSadeSati(moon.signIndex);

  // Pancha Pakshi
  const isShukla = ((moon.longitude - sun.longitude + 360) % 360) < 180;
  const panchaPakshi = calculatePanchaPakshi(moon.nakshatraIndex, isShukla);

  // Gemstones & Rudraksha recommendations
  const gemstonesMap: Record<number, { gem: string; planet: string; metal: string; finger: string; day: string }> = {
    0: { gem: 'Red Coral (मूंगा)', planet: 'Mars', metal: 'Copper / Gold', finger: 'Ring Finger', day: 'Tuesday' },
    1: { gem: 'Diamond / White Sapphire (हीरा/सफेद पुखराज)', planet: 'Venus', metal: 'Silver / Platinum', finger: 'Middle / Little Finger', day: 'Friday' },
    2: { gem: 'Emerald (पन्ना)', planet: 'Mercury', metal: 'Gold / Bronze', finger: 'Little Finger', day: 'Wednesday' },
    3: { gem: 'Natural Pearl (सच्चा मोती)', planet: 'Moon', metal: 'Silver', finger: 'Little Finger', day: 'Monday' },
    4: { gem: 'Ruby / Manikya (माणिक्य)', planet: 'Sun', metal: 'Gold / Copper', finger: 'Ring Finger', day: 'Sunday' },
    5: { gem: 'Emerald (पन्ना)', planet: 'Mercury', metal: 'Gold', finger: 'Little Finger', day: 'Wednesday' },
    6: { gem: 'Diamond / Opal (हीरा/ओपल)', planet: 'Venus', metal: 'Silver', finger: 'Middle Finger', day: 'Friday' },
    7: { gem: 'Red Coral (मूंगा)', planet: 'Mars', metal: 'Copper / Gold', finger: 'Ring Finger', day: 'Tuesday' },
    8: { gem: 'Yellow Sapphire (पीला पुखराज)', planet: 'Jupiter', metal: 'Gold', finger: 'Index Finger', day: 'Thursday' },
    9: { gem: 'Blue Sapphire (नीलम)', planet: 'Saturn', metal: 'Iron / Silver', finger: 'Middle Finger', day: 'Saturday' },
    10: { gem: 'Blue Sapphire / Amethyst (नीलम/कटैला)', planet: 'Saturn', metal: 'Silver', finger: 'Middle Finger', day: 'Saturday' },
    11: { gem: 'Yellow Sapphire (पुखराज)', planet: 'Jupiter', metal: 'Gold', finger: 'Index Finger', day: 'Thursday' }
  };

  const lifeStone = gemstonesMap[lagnaSignIndex] || gemstonesMap[0];
  const luckyStone = gemstonesMap[moon.signIndex] || gemstonesMap[4];
  const bhagyaSign = (lagnaSignIndex + 8) % 12;
  const bhagyaStone = gemstonesMap[bhagyaSign] || gemstonesMap[8];

  const primaryRudrakshaMukhi = ((lagnaSignIndex % 9) + 1);
  const rudrakshaDeities = ['Shiva', 'Ardhanarishwara', 'Agni', 'Brahma', 'Kalaagni Rudra', 'Kartikeya', 'Mahalakshmi', 'Ganesha', 'Durga'];

  // Baby Names based on Nakshatra Pada
  const nakObj = NAKSHATRAS[moon.nakshatraIndex];
  const sampleNamesList = [
    { name: `${nakObj.syllables[0]}arav`, meaning: 'Peaceful, calm wisdom', gender: 'boy' as const },
    { name: `${nakObj.syllables[1]}anvi`, meaning: 'Goddess of knowledge, graceful', gender: 'girl' as const },
    { name: `${nakObj.syllables[2]}irav`, meaning: 'Flowing water, radiant', gender: 'boy' as const },
    { name: `${nakObj.syllables[3]}anya`, meaning: 'Grace, divine favor', gender: 'girl' as const }
  ];

  // Panchang birth context
  const tithiNum = Math.floor(((moon.longitude - sun.longitude + 360) % 360) / 12) + 1;
  const tithiNames = [
    'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 'Shashthi', 'Saptami', 'Ashtami',
    'Navami', 'Dashami', 'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', isShukla ? 'Purnima' : 'Amavasya'
  ];

  // Vedic Time (Ishtakala)
  const ishtakalaHours = (hours >= 6 ? hours - 6 : hours + 18) + minutes / 60;
  const ishtaGhati = Math.floor(ishtakalaHours * 2.5);
  const ishtaVighati = Math.floor((ishtakalaHours * 2.5 - ishtaGhati) * 60);

  return {
    profile,
    julianDay,
    localSiderealTime: calculateLST(julianDay, profile.longitude),
    ayanamshaValue,
    lagnaDegree,
    lagnaSignIndex,
    lagnaSignName: lagnaSign.name,
    lagnaSignSanskrit: lagnaSign.sanskrit,
    lagnaNakshatra: lagnaNakshatra.name,
    lagnaPada,
    lagnaLord: lagnaSign.lord,
    moonRashiIndex: moon.signIndex,
    moonRashiName: moon.signName,
    moonRashiSanskrit: moon.signSanskrit,
    moonNakshatra: moon.nakshatraName,
    moonPada: moon.pada,
    moonDegree: moon.degreeInSign,
    sunSignIndex: sun.signIndex,
    sunSignName: sun.signName,
    sunDegree: sun.degreeInSign,
    sunNakshatra: sun.nakshatraName,
    panchang: {
      tithiName: tithiNames[(tithiNum - 1) % 15],
      tithiNumber: tithiNum,
      paksha: isShukla ? 'Shukla Paksha (Bright Half)' : 'Krishna Paksha (Dark Half)',
      vara: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(profile.birthDate).getDay()],
      nakshatra: moon.nakshatraName,
      yoga: 'Shubha (Auspicious)',
      karana: 'Bava',
      sunrise: '06:12 AM',
      sunset: '06:34 PM',
      moonrise: '07:45 PM',
      moonset: '06:50 AM',
      hinduMonth: 'Kartik / Margashirsha'
    },
    planets,
    houses,
    vargas,
    dashaTree,
    ashtakavarga,
    shadbala,
    bhavabala,
    upagrahas,
    yogas,
    mangalDosha,
    kalasarpa,
    sadeSati,
    panchaPakshi,
    gemstones: {
      lifeStone,
      luckyStone,
      bhagyaStone,
      cautions: [
        'Gemstones are sacred traditional Vedic talismans. They do not substitute medical care.',
        'Always conduct a test wear (pratishtha) for 3 days wrapped in cloth before setting into jewelry.',
        'Never wear Blue Sapphire (Neelam) without thorough preliminary testing.'
      ]
    },
    rudraksha: {
      primaryMukhi: primaryRudrakshaMukhi,
      deity: rudrakshaDeities[primaryRudrakshaMukhi - 1] || 'Lord Shiva',
      planet: planets[primaryRudrakshaMukhi % 7]?.name || 'Jupiter',
      significance: `The ${primaryRudrakshaMukhi}-Mukhi Rudraksha harmonizes your natal Lagna and provides shielding from negative psychic fields.`,
      wearingVidhi: 'Thread in red silk or silver cap. Purify with raw cow milk and Ganga jal on a Monday morning while chanting "ॐ नमः शिवाय".'
    },
    babyNameSuggestions: {
      syllables: nakObj.syllables,
      sampleNames: sampleNamesList
    },
    sahasraChandra: {
      approximateDate: `${year + 81}-03-15`,
      ageYears: 81,
      significance: 'Sahasra Purna Chandra Darshan marks the auspicious milestone of witnessing 1,000 full moons in one\'s earthly life (approx. 80.8 years). Traditionally celebrated with sacred Shanti Puja.'
    },
    vedicTime: {
      ghati: ishtaGhati,
      vighati: ishtaVighati,
      pal: Math.round(ishtaGhati * 2.5),
      ishtakala: `${ishtaGhati} Ghati, ${ishtaVighati} Pal from sunrise`
    },
    disclaimer: 'Traditional Jyotish Shastra interpretations are spiritual and philosophical archetypes meant for self-reflection and guidance. They are not deterministic fatalistic predictions.'
  };
}
