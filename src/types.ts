export type Language = 'en' | 'hi' | 'gu' | 'mr' | 'ta' | 'te' | 'bn' | 'pa' | 'kn' | 'ml' | 'or' | 'sa';

export type DeityType = 'shiva' | 'vishnu' | 'krishna' | 'rama' | 'devi' | 'hanuman' | 'ganesha' | 'sikh' | 'jain' | 'buddha' | 'all' | 'other';

export type ReligionType = 'all' | 'hindu' | 'jain' | 'sikh' | 'buddha' | 'muslim' | 'christian' | 'national';

export type HolidayType = 'gazetted' | 'restricted' | 'bank' | 'observance' | 'none';

export type CalendarSystemId = 
  | 'vikram-purnimanta'
  | 'vikram-amanta'
  | 'shaka-samvat'
  | 'tamil-sauramana'
  | 'bengali-panjika'
  | 'malayalam-kollam'
  | 'nanakshahi'
  | 'jain-vira-nirvana'
  | 'gregorian-india';

export interface CalendarSystemInfo {
  id: CalendarSystemId;
  name: string;
  nativeName: string;
  region: string;
  language: string;
  currentYear: string;
  eraName: string;
  description: string;
  months: { id: number; name: string; nativeName: string; approxSolarSpan: string }[];
}

export interface ComprehensiveEvent {
  id: string;
  name: string;
  hindiName: string;
  regionalName?: string;
  date: string; // YYYY-MM-DD
  dayOfWeek: string;
  religion: ReligionType;
  isVrat: boolean;
  holidayType: HolidayType;
  holidayCategory?: 'Central Gazetted' | 'State Bank Holiday' | 'Restricted Holiday' | 'Regional';
  description: string;
  rituals: string;
  muhurat?: string;
  tithiDetails?: string;
  states?: string;
}

export interface TempleArchitecture {
  style: string;
  builtCentury: string;
  patron?: string;
  highlights: string[];
  materials?: string;
}

export interface TempleImage {
  url: string;
  title: string;
  caption: string;
}

export interface TempleTravelInfo {
  nearestAirport: string;
  nearestRailway: string;
  roadConnectivity?: string;
  bestTimeToVisit?: string;
  dressCode?: string;
}

export interface Temple {
  id: string;
  name: string;
  hindiName: string;
  deity: string;
  deityType: DeityType;
  location: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  streamUrl: string; // YouTube embed or video stream URL
  streamTitle: string;
  isLive: boolean;
  viewersCount: number;
  bannerImage?: string;
  fallbackVideoUrl?: string;
  youtubeVideoId?: string;
  officialStreamWebsite?: string;
  architecture?: TempleArchitecture;
  gallery?: TempleImage[];
  travelInfo?: TempleTravelInfo;
  festivalsCelebrated?: string[];
  aartiTimings: {
    name: string;
    hindiName: string;
    time: string;
    description: string;
  }[];
  history: string;
  significance: string;
  darshanHours: string;
  virtualOfferings: {
    flowers: number;
    diyas: number;
    bells: number;
    prasad: number;
  };
  audioChantUrl?: string;
  audioTitle?: string;
  slug?: string;
  templeType?: 'jyotirlinga' | 'shakti-peeth' | 'char-dham' | 'major-temple' | 'swaminarayan' | 'sikh' | 'jain';
  openingTime?: string;
  closingTime?: string;
  streamProvider?: string;
  streamStatus?: 'LIVE' | 'STARTING SOON' | 'UPCOMING' | 'OFFLINE' | 'TEMPLE CLOSED';
  faqs?: { question: string; answer: string }[];
  poojaSchedule?: { name: string; time: string; description: string }[];
}

export interface CityData {
  id: string;
  name: string;
  hindiName: string;
  state: string;
  lat: number;
  lng: number;
  sunriseDeltaMin: number; // approximate solar offset
  isPopular?: boolean;
}

export interface ChoghadiyaItem {
  name: string;
  hindiName: string;
  type: 'shubh' | 'labh' | 'amrit' | 'char' | 'rog' | 'kaal' | 'udveg';
  ruler: string;
  startTime: string;
  endTime: string;
  isAuspicious: boolean;
}

export interface HoraItem {
  timeSpan: string;
  planet: string;
  planetHindi: string;
  nature: 'beneficial' | 'neutral' | 'inauspicious';
  recommendedAction: string;
}

export interface DailyPanchang {
  date: string;
  formattedDate: string;
  cityName: string;
  cityHindiName: string;
  timezone: string;
  lat: number;
  lng: number;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  suryaRashi: string;
  suryaRashiHindi: string;
  chandraRashi: string;
  chandraRashiHindi: string;
  chandraRashiTransition?: string;
  
  // 5 Limbs (Panchang)
  tithi: string;
  tithiHindi: string;
  tithiEndsAt: string;
  nextTithi?: string;
  nextTithiHindi?: string;
  tithiDeity?: string;
  paksha: 'Shukla Paksha' | 'Krishna Paksha';
  pakshaHindi: string;
  gujaratiPaksha?: string;
  
  nakshatra: string;
  nakshatraHindi: string;
  nakshatraEndsAt: string;
  nextNakshatra?: string;
  nextNakshatraHindi?: string;
  nakshatraLord: string;
  nakshatraPada: string;
  
  yoga: string;
  yogaHindi: string;
  yogaEndsAt: string;
  nextYoga?: string;
  
  karana: string;
  karanaHindi: string;
  karanaEndsAt: string;
  secondKarana?: string;
  secondKaranaHindi?: string;
  secondKaranaEndsAt?: string;
  bhadra?: {
    isActive: boolean;
    vasa: string;
    startTime: string;
    endTime: string;
    warning: string;
  };
  
  vaar: string;
  vaarHindi: string;
  vaarLord: string;

  // Samvat & Calendars
  vikramSamvat: number;
  vikramSamvatName: string;
  sakaSamvat: number;
  sakaSamvatName: string;
  gujaratiSamvat: number;
  kaliYugaYear: number;
  ritu: string;
  aayana: string;
  amantaMasa: string;
  purnimantaMasa: string;
  gujaratiMasa: string;

  // Auspicious Muhurats
  abhijitMuhurat: string;
  brahmaMuhurat: string;
  amritKaal: string;
  vijayaMuhurat: string;
  godhuliMuhurat: string;
  sayahnaSandhya: string;
  pratahSandhya: string;
  nishitaMuhurat: string;
  specialYogas?: { name: string; hindiName: string; isAuspicious: boolean; description: string }[];

  // Inauspicious Muhurats
  rahuKaal: string;
  yamaganda: string;
  gulikaKaal: string;
  durmuhurtam: string;
  varjyam: string;
  dishaShool: string;
  dishaShoolRemedy: string;

  // Solar & Lunar Details (Drik Panchang)
  dayDuration?: string;
  nightDuration?: string;
  suryaNakshatra?: string;
  suryaNakshatraHindi?: string;
  moonIllumination?: string;
  moonPhaseHindi?: string;

  // Vedic Astrological Strengths & Ritual Checks
  chandraBalam: string[];
  chandraBalamHindi: string[];
  agnivasa?: {
    status: string;
    vasa: string;
    isAuspicious: boolean;
    description: string;
  };
  shivavasa?: {
    status: string;
    vasa: string;
    isAuspicious: boolean;
    description: string;
  };
  anandadiYoga?: string;

  // Choghadiya & Hora
  dayChoghadiya: ChoghadiyaItem[];
  nightChoghadiya: ChoghadiyaItem[];
  horaTimings: HoraItem[];

  // Celebrations & Observances
  primaryFestival?: {
    title: string;
    hindiTitle: string;
    badge: string;
    description: string;
    hindiDescription: string;
    pujaMuhurat?: string;
    fastRules?: string;
    icon?: string;
  };
  festivalDeepDive?: {
    title: string;
    hindiTitle: string;
    badge: string;
    icon: string;
    significance: string;
    pujaMuhurat: string;
    pujaVidhi: string[];
    vratRules: string;
    mantras: { mantra: string; meaning: string }[];
    dosAndDonts: { dos: string[]; donts: string[] };
  };
  festivalsToday: { name: string; hindiName: string; description: string; isVrat: boolean; timing?: string }[];
}

export interface KundaliResult {
  name: string;
  dob: string;
  tob: string;
  pob: string;
  lagna: string;
  rashi: string;
  nakshatra: string;
  nakshatraLord: string;
  luckyColor: string;
  luckyNumber: number;
  luckyGemstone: string;
  manglikStatus: 'Non-Manglik' | 'Mild Manglik' | 'Full Manglik';
  sadeSatiStatus: string;
  chartPlanets: {
    house: number;
    planet: string;
    sign: string;
    degree: string;
    isRetrograde?: boolean;
  }[];
  lifePredictions: {
    career: string;
    wealth: string;
    relationship: string;
    health: string;
    spiritual: string;
  };
  remedies: string[];
}

export interface FestivalItem {
  id: string;
  name: string;
  hindiName: string;
  date: string;
  dayOfWeek: string;
  religion: ReligionType;
  isVrat: boolean;
  description: string;
  rituals: string;
  muhurat?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  hindiTitle: string;
  summary: string;
  content: string;
  category: 'Temple Architecture' | 'Vedic Wisdom' | 'Rituals' | 'Festivals' | 'Sacred Geography';
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  views: number;
  likes: number;
  tags: string[];
  commentsCount: number;
}

export interface ForumPost {
  id: string;
  author: string;
  city: string;
  title: string;
  content: string;
  templeTag: string;
  likes: number;
  timestamp: string;
  replies: {
    id: string;
    author: string;
    text: string;
    timestamp: string;
  }[];
}

export interface DevotionalComment {
  id: string;
  templeId: string;
  author: string;
  city: string;
  mantra: string;
  text: string;
  timestamp: string;
  likes: number;
}

export interface PujaBooking {
  bookingId: string;
  templeId: string;
  templeName: string;
  pujaName: string;
  pujaDate: string;
  devoteeName: string;
  gotra: string;
  nakshatra: string;
  familyMembers: string;
  prasadCourierAddress: string;
  amount: number;
  paymentMethod: string;
  status: 'Confirmed' | 'Completed' | 'Pending';
  createdAt: string;
}

export interface DonationRecord {
  transactionId: string;
  templeId: string;
  templeName: string;
  cause: string;
  donorName: string;
  email: string;
  amount: number;
  panNumber?: string;
  is80GEligible: boolean;
  date: string;
}
