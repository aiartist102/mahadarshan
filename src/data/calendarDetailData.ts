export interface CalendarDeepDiveData {
  id: string;
  slug: string;
  name: string;
  nativeName: string;
  title: string;
  tagline: string;
  heroBadge: string;
  region: string;
  language: string;
  eraName: string;
  currentYear: string;
  calculationType: string;
  epochStart: string; // e.g., '57 BCE' or '78 CE'
  rulingDeities?: string[];
  bannerImageTheme: 'gold' | 'saffron' | 'crimson' | 'emerald' | 'amber' | 'royal-blue';
  
  // Historical & Astrological Narrative
  historyAndOrigin: {
    founderOrKing: string;
    historicalEra: string;
    narrative: string;
    puranicReferences: string[];
  };

  astronomicalCalculation: {
    systemName: string;
    solarOrLunar: 'Lunisolar' | 'Sidereal Solar' | 'Tropical Solar';
    monthStartRule: string; // e.g., 'Amanta (starts after Amavasya)' or 'Purnimanta'
    dayStartRule: string; // e.g., 'Sunrise to Sunrise (Udaya Tithi)'
    intercalaryRule: string; // Adhika Masa explanation
    equinoxRule: string;
    corePrinciples: string[];
  };

  // Complete 12 Months Ephemeris Guide
  monthsBreakdown: {
    monthNumber: number;
    name: string;
    nativeName: string;
    gregorianSpan: string;
    seasonRitu: string;
    seasonRituHindi: string;
    presidingDeity: string;
    significance: string;
    keyFestivals: string[];
  }[];

  // Specific Observances & Sacred Rules
  specialRules: {
    title: string;
    rule: string;
    shastraBasis: string;
  }[];

  // Cultural Lifestyle & Regional Practices
  culturalSignificance: {
    dailyLifeRole: string;
    templesGoverned: string[];
    culinaryAndAgrarianTraditions: string[];
  };

  // SEO & Educational FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface FestivalSpecialCalendarData {
  id: string;
  slug: string;
  name: string;
  nativeName: string;
  title: string;
  subtitle: string;
  category: 'festival' | 'vrat' | 'special';
  duration: string;
  presidingDeity: string;
  themeColor: 'amber' | 'crimson' | 'saffron' | 'indigo' | 'emerald';
  overview: string;
  scripturalOrigin: string;

  // Day-by-Day Itinerary
  itinerary: {
    dayNumber: number;
    dayTitle: string;
    nativeDayTitle: string;
    tithiAndTiming: string;
    approx2026Date: string;
    rituals: string[];
    offeringsAndPrasad: string;
    significance: string;
  }[];

  // Step-by-Step Puja Vidhi
  pujaVidhi: {
    stepNumber: number;
    title: string;
    description: string;
  }[];

  // Sacred Mantras
  sacredMantras: {
    mantraName: string;
    sanskritText: string;
    englishTransliteration: string;
    meaning: string;
  }[];

  // Fasting Guidelines & Parana
  fastingRules: {
    rules: string[];
    allowedFoods: string[];
    prohibitedFoods: string[];
    paranaTimingRule: string;
  };

  // Dos & Don'ts
  dosAndDonts: {
    dos: string[];
    donts: string[];
  };

  // Regional Variations
  regionalTraditions: {
    region: string;
    customs: string;
  }[];

  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
}

// 1. Comprehensive Deep Dive Details for All 14 Yearly Calendars
export const yearlyCalendarDeepDives: Record<string, CalendarDeepDiveData> = {
  'gujarati-calendar': {
    id: 'gujarati-calendar',
    slug: 'gujarati',
    name: 'Gujarati Calendar (Vikram Samvat Amanta)',
    nativeName: 'ગુજરાતી પંચાંગ કેલેન્ડર (વિક્રમ સંવત)',
    title: 'Gujarati Calendar - Sud, Vad, Bestu Varas, Tithi & Choghadiya',
    tagline: 'The Sacred Lunisolar Almanac of Gujarat starting with Nutan Varsh right after Diwali',
    heroBadge: 'Vikram Samvat 2082 - 2083 • Amanta System (અમાનત)',
    region: 'Gujarat, Saurashtra, Kutch & Global Gujarati Diaspora',
    language: 'Gujarati (ગુજરાતી)',
    eraName: 'Vikram Samvat (Gujarati)',
    currentYear: '2082 - 2083',
    calculationType: 'Lunisolar Amanta (અમાનત)',
    epochStart: '57 BCE (King Vikramaditya of Ujjain)',
    rulingDeities: ['Mata Ambaji', 'Lord Somnath (Shiva)', 'Lord Dwarkadhish (Krishna)', 'Lord Ganesha', 'Maa Lakshmi'],
    bannerImageTheme: 'amber',
    historyAndOrigin: {
      founderOrKing: 'Maharaja Vikramaditya of Ujjain (57 BCE)',
      historicalEra: 'Established to commemorate victory over Saka invaders; adapted as the official merchant & religious calendar of Gujarat for over two millennia.',
      narrative: 'Unlike Northern Vikram Samvat which begins in Chaitra, the Gujarati calendar begins immediately following the auspicious festival of Diwali, on Kartak Sud Ekam (Bestu Varas). This alignment was established by ancient Gujarati guild-masters and merchants who balanced their annual financial and spiritual ledger (Chopda) on Diwali night and inaugurated their new year the next morning with Saal Mubarak and Bestu Varas greetings.',
      puranicReferences: [
        'Skanda Purana (Prabhas Khanda - regarding Somnath and Gujarati sacred tithis)',
        'Bhavishya Purana (Celebration of Deepawali and Govardhan Annakut)',
        'Muhurat Chintamani (Auspicious Choghadiya timings for trade and travels)'
      ]
    },
    astronomicalCalculation: {
      systemName: 'Drik Siddhanta & Surya Siddhanta (Amanta Tradition)',
      solarOrLunar: 'Lunisolar',
      monthStartRule: 'Amanta — Months start the morning after Amavasya (Amas). The first half is Shukla Paksha (Sud / શુદ) and second half is Krishna Paksha (Vad / વદ).',
      dayStartRule: 'Sunrise to Sunrise (સૂર્યોદય આધારિત તિથિ / Udaya Tithi)',
      intercalaryRule: 'Adhika Masa (અધિક માસ / પુરૂષોત્તમ માસ) is inserted approximately every 32 to 33 months when a lunar month has no solar ingress (Sankranti).',
      equinoxRule: 'Uttarayan is celebrated with cosmic grandeur when the Sun enters Makara Rasi (Capricorn) on January 14.',
      corePrinciples: [
        'Sud (શુદ): Waxing Moon phase (Shukla Paksha), from Ekam (1) to Purnima / Poonam (15).',
        'Vad (વદ): Waning Moon phase (Krishna Paksha), from Ekam (1) to Amas (15 / 30).',
        'Chopda Pujan: Account books, pens, and ledgers worshipped during Shubh/Labh/Amrit Choghadiya on Diwali.',
        'Bestu Varas: Celebrated on Kartak Sud 1 with temple visits and exchanging sweets.'
      ]
    },
    monthsBreakdown: [
      {
        monthNumber: 1,
        name: 'Kartak',
        nativeName: 'કારતક (બેસતું વર્ષ)',
        gregorianSpan: 'October - November',
        seasonRitu: 'Hemant (Pre-Winter)',
        seasonRituHindi: 'हेमंत ऋतु',
        presidingDeity: 'Lord Damodara / Mahalakshmi',
        significance: 'Inaugural month of the Gujarati year. Features Bestu Varas, Bhai Beej, Labh Pancham, Tulsi Vivah, and Dev Diwali.',
        keyFestivals: ['Bestu Varas (New Year)', 'Bhai Beej', 'Labh Pancham (Shop Reopening)', 'Devutthana Ekadashi', 'Tulsi Vivah', 'Kartik Poonam (Dev Diwali)']
      },
      {
        monthNumber: 2,
        name: 'Magshar',
        nativeName: 'માગશર',
        gregorianSpan: 'November - December',
        seasonRitu: 'Hemant (Winter)',
        seasonRituHindi: 'हेमंत ऋतु',
        presidingDeity: 'Lord Krishna (Gita: "Among months, I am Margashirsha")',
        significance: 'Month of supreme spiritual study, Gita recitation, and Mokshada Ekadashi.',
        keyFestivals: ['Utpanna Ekadashi', 'Mokshada Ekadashi', 'Gita Jayanti', 'Dattatreya Jayanti']
      },
      {
        monthNumber: 3,
        name: 'Posh',
        nativeName: 'પોષ',
        gregorianSpan: 'December - January',
        seasonRitu: 'Shishir (Deep Winter)',
        seasonRituHindi: 'शिशिर ऋतु',
        presidingDeity: 'Surya Narayana',
        significance: 'Features the joyous festival of Uttarayan (Kite Festival) as the Sun transitions northward.',
        keyFestivals: ['Saphala Ekadashi', 'Uttarayan / Vasi Uttarayan', 'Pausha Putrada Ekadashi']
      },
      {
        monthNumber: 4,
        name: 'Maha',
        nativeName: 'મહા',
        gregorianSpan: 'January - February',
        seasonRitu: 'Shishir (Late Winter)',
        seasonRituHindi: 'शिशिर ऋतु',
        presidingDeity: 'Lord Shiva & Devi Saraswati',
        significance: 'Month of spring advent (Vasant Panchami) and cosmic worship on Maha Shivratri.',
        keyFestivals: ['Vasant Panchami (Saraswati Puja)', 'Ratha Saptami', 'Bhavnath Mahadev Fair (Junagadh)', 'Maha Shivratri']
      },
      {
        monthNumber: 5,
        name: 'Fagan',
        nativeName: 'ફાગણ',
        gregorianSpan: 'February - March',
        seasonRitu: 'Vasant (Spring)',
        seasonRituHindi: 'वसंत ऋतु',
        presidingDeity: 'Sri Radharani & Lord Krishna',
        significance: 'Colors, joy, and harvesting wheat; Holi-Dhuleti and sacred pilgrimage to Palitana Shatrunjaya.',
        keyFestivals: ['Vijaya Ekadashi', 'Holi Dahan', 'Dhuleti', 'Chhoti Kashi Jamnagar fairs']
      },
      {
        monthNumber: 6,
        name: 'Chaitra',
        nativeName: 'ચૈત્ર',
        gregorianSpan: 'March - April',
        seasonRitu: 'Vasant (Early Summer)',
        seasonRituHindi: 'वसंत ऋतु',
        presidingDeity: 'Lord Rama & Maa Durga',
        significance: 'Chaitra Navratri, Ram Navami, and Hanuman Jayanti with intensive fasting and temple pujas.',
        keyFestivals: ['Chaitra Navratri Ghatasthapana', 'Ram Navami', 'Kamada Ekadashi', 'Hanuman Jayanti (Chaitra Poonam)']
      },
      {
        monthNumber: 7,
        name: 'Vaishakh',
        nativeName: 'વૈશાખ',
        gregorianSpan: 'April - May',
        seasonRitu: 'Grishma (Summer)',
        seasonRituHindi: 'ग्रीष्म ऋतु',
        presidingDeity: 'Lord Madhusudana',
        significance: 'Month of infinite charity and gold purchase on Akshaya Tritiya, Narasimha Jayanti.',
        keyFestivals: ['Akshaya Tritiya (Akha Teej)', 'Narasimha Chaturdashi', 'Mohini Ekadashi', 'Buddha Purnima']
      },
      {
        monthNumber: 8,
        name: 'Jeth',
        nativeName: 'જેઠ',
        gregorianSpan: 'May - June',
        seasonRitu: 'Grishma (Peak Summer)',
        seasonRituHindi: 'ग्रीष्म ऋतु',
        presidingDeity: 'Lord Trivikrama',
        significance: 'Features the most rigorous waterless fast of the year: Nirjala Ekadashi, and Vat Savitri Vrat.',
        keyFestivals: ['Vat Savitri Vrat (Banyan tree worship)', 'Nirjala Ekadashi (Bhim Ekadashi)', 'Ganga Dussehra']
      },
      {
        monthNumber: 9,
        name: 'Ashadh',
        nativeName: 'અષાઢ',
        gregorianSpan: 'June - July',
        seasonRitu: 'Varsha (Monsoon Arrival)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Lord Vamana & Lord Jagannath',
        significance: 'Ahmedabad Jagannath Rath Yatra on Ashadh Sud Beej; Guru Purnima and start of sacred Chaturmas.',
        keyFestivals: ['Ahmedabad Rath Yatra (Ashadh Sud Beej)', 'Devshayani Ekadashi (Chaturmas start)', 'Guru Purnima']
      },
      {
        monthNumber: 10,
        name: 'Shravan',
        nativeName: 'શ્રાવણ',
        gregorianSpan: 'July - August',
        seasonRitu: 'Varsha (Monsoon)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Lord Shiva (Mahadev)',
        significance: 'The most sacred devotional month in Gujarat. Daily Bilvapatra Puja, Shravani Somvar fasts, Janmashtami in Dwarka.',
        keyFestivals: ['Shravan Somvar Fasts', 'Raksha Bandhan / Narali Poonam', 'Kajari Teej', 'Janmashtami (Dwarkadhish Mahotsav)', 'Nand Mahotsav']
      },
      {
        monthNumber: 11,
        name: 'Bhadarvo',
        nativeName: 'ભાદરવો',
        gregorianSpan: 'August - September',
        seasonRitu: 'Varsha (Late Monsoon)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Lord Ganesha & Pitrus (Ancestors)',
        significance: 'Ganesh Utsav, Ambaji Bhadravi Poonam Mahamela, Paryushan Mahaparva, and 16 days of Shraddha.',
        keyFestivals: ['Ganesh Chaturthi', 'Ambaji Bhadravi Poonam Mela', 'Anant Chaturdashi', 'Shraddha Paksha (Pitru Tarpan)']
      },
      {
        monthNumber: 12,
        name: 'Aaso',
        nativeName: 'આસો',
        gregorianSpan: 'September - October',
        seasonRitu: 'Sharad (Autumn)',
        seasonRituHindi: 'शरद ऋतु',
        presidingDeity: 'Maa Jagdamba & Maa Mahalakshmi',
        significance: 'World-famous 9 nights of Garba (Sharad Navratri), Dussehra, Sharad Purnima, Dhanteras, and Diwali culminating the year.',
        keyFestivals: ['Sharad Navratri (Garba & Dandiya)', 'Dussehra (Jalebi-Fafda tradition)', 'Sharad Poonam', 'Dhanteras', 'Kali Chaudas', 'Diwali (Year End / Chopda Pujan)']
      }
    ],
    specialRules: [
      {
        title: 'Chopda Pujan & Muhurat Trading',
        rule: 'Ledgers, account books, and trading platforms are sanctified on Aaso Vad Amas (Diwali) during Shubh/Amrit Choghadiya. Swastika, Om, and "Shubh Labh" are inscribed in red vermilion.',
        shastraBasis: 'Brihat Samhita & Gujarati Vyapar Shastra'
      },
      {
        title: 'Bestu Varas Greetings',
        rule: 'Devotees take blessings of elders and deities at sunrise, greeting each other with "Nutan Varshabhinandan" and "Saal Mubarak". Salt (Sabras) is bought as a symbol of prosperity.',
        shastraBasis: 'Gujarati Sanatan tradition'
      },
      {
        title: 'Amas vs Purnima Boundaries',
        rule: 'Because the month ends on Amas, the entire dark fortnight (Vad) belongs to the preceding month, keeping Diwali as the final climax of the old year.',
        shastraBasis: 'Siddhantic Amanta Canon'
      }
    ],
    culturalSignificance: {
      dailyLifeRole: 'Governs every Gujarati household’s tithis, business operations, gold buying days (Pushya Nakshatra), marriage muhurats, and temple visits.',
      templesGoverned: ['Somnath Jyotirlinga', 'Dwarkadhish Mandir', 'Ambaji Shaktipeeth', 'Pavagadh Mahakali', 'Shamlaji', 'Palitana Jain Tirth'],
      culinaryAndAgrarianTraditions: [
        'Dussehra: Fafda-Jalebi breakfast across all cities.',
        'Makar Sankranti: Undhiyu, Jalebi, and Chikki.',
        'Diwali: Ghughra, Mathiya, Chorafali, and Mohanthal.',
        'Shravan: Farali dishes (Moraiya, Sabudana khichdi, Rajgira puri).'
      ]
    },
    faqs: [
      {
        question: 'Why does the Gujarati New Year begin on the day after Diwali instead of Chaitra?',
        answer: 'While northern Indian states celebrate the New Year in Chaitra (spring), the Gujarati tradition observes the Vikram Samvat Amanta calendar where the financial, merchant, and spiritual cycle culminates on Diwali (Aaso Vad Amas). The following day, Kartak Sud Ekam, represents a fresh beginning (Bestu Varas / Nutan Varsh) blessed by Lord Krishna’s lifting of Govardhan Hill and the blessing of Maa Lakshmi.'
      },
      {
        question: 'What do "Sud" and "Vad" mean in Gujarati calendar dates?',
        answer: '"Sud" (શુદ) refers to Shukla Paksha, the waxing bright fortnight from New Moon to Full Moon (Poonam). "Vad" (વદ) refers to Krishna Paksha, the waning dark fortnight from Full Moon to New Moon (Amas). For instance, "Kartak Sud Ekam" is the 1st bright day of Kartak (Bestu Varas).'
      },
      {
        question: 'What is Labh Pancham?',
        answer: 'Labh Pancham (Kartak Sud Pancham) is observed on the 5th day of the Gujarati New Year. It is considered the most auspicious day to reopen shops, inaugurate new ventures, and restart commercial operations after the Diwali festive hiatus.'
      }
    ]
  },

  'hindu-purnimanta': {
    id: 'hindu-purnimanta',
    slug: 'hindu',
    name: 'Hindu Calendar (Vikram Samvat Purnimanta)',
    nativeName: 'विक्रम संवत् वैदिक पंचांग (पूर्णिमान्त)',
    title: 'Hindu Calendar - Lunar Tithi, Vrats, Nakshatra & Vedic Festivals',
    tagline: 'The foundational timekeeping system of Sanatana Dharma across Northern and Central Bharat',
    heroBadge: 'Vikram Samvat 2083 • Purnimanta System (पूर्णिमान्त)',
    region: 'Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, Haryana, Delhi, Himachal, Uttarakhand & Nepal',
    language: 'Hindi / Sanskrit (हिन्दी / संस्कृत)',
    eraName: 'Vikram Samvat',
    currentYear: '2083',
    calculationType: 'Lunisolar Purnimanta (पूर्णिमान्त)',
    epochStart: '57 BCE (King Vikramaditya)',
    rulingDeities: ['Bhagwan Vishnu', 'Lord Shiva (Kashi Vishwanath)', 'Lord Rama (Ayodhya)', 'Lord Krishna (Mathura-Vrindavan)', 'Maa Durga'],
    bannerImageTheme: 'saffron',
    historyAndOrigin: {
      founderOrKing: 'Maharaja Vikramaditya of Ujjain (57 BCE)',
      historicalEra: 'Sanctioned in ancient astronomical treatises including the Surya Siddhanta, Vedanga Jyotisha, and Aryabhatiya.',
      narrative: 'In the Purnimanta system, the lunar month reaches its culmination on the Full Moon day (Purnima). Therefore, the month begins on Krishna Pratipada (the day after Purnima), placing Krishna Paksha first and Shukla Paksha second. The sacred civil and religious year begins with Chaitra Shukla Pratipada, which marks the dawn of creation by Brahma and the coronation of Lord Rama in Ayodhya.',
      puranicReferences: [
        'Surya Siddhanta (Lunisolar planetary calculations and Tithi mathematics)',
        'Vishnu Purana (Cosmic cycles of Yugas, Manvantaras, and Samvatsaras)',
        'Skanda Purana (Detailed procedures for Vrats, Ekadashi, and sacred river snana)'
      ]
    },
    astronomicalCalculation: {
      systemName: 'Surya Siddhanta & Drik Ganita (Purnimanta tradition)',
      solarOrLunar: 'Lunisolar',
      monthStartRule: 'Purnimanta — The month starts the day after Purnima (Krishna Pratipada) and concludes on the next Purnima.',
      dayStartRule: 'Udaya Tithi (Prevailing Tithi at local astronomical sunrise)',
      intercalaryRule: 'Adhika Masa (Purushottam Masa) is added every ~32.5 months whenever two New Moons occur within the same solar sign.',
      equinoxRule: 'Harmonizes the lunar month cycle with the sidereal transit of the Sun through the 12 Rasis.',
      corePrinciples: [
        'Krishna Paksha (बदी): Days 1 to 15, concluding on Amavasya (New Moon).',
        'Shukla Paksha (सुदी): Days 1 to 15, concluding on Purnima (Full Moon).',
        'Udaya Tithi Principle: If a Tithi is prevailing at sunrise, that entire solar day is consecrated for rituals governed by that Tithi.',
        'Adhika Masa: Dedicated solely to devotional worship, Bhagavad Gita path, and daana.'
      ]
    },
    monthsBreakdown: [
      {
        monthNumber: 1,
        name: 'Chaitra',
        nativeName: 'चैत्र',
        gregorianSpan: 'March - April',
        seasonRitu: 'Vasant (Spring)',
        seasonRituHindi: 'वसंत ऋतु',
        presidingDeity: 'Lord Brahma & Lord Rama',
        significance: 'Vedic New Year begins on Chaitra Shukla 1. Navratri, Ram Navami, and Hanuman Jayanti.',
        keyFestivals: ['Chaitra Navratri Ghatasthapana', 'Ram Navami', 'Hanuman Jayanti']
      },
      {
        monthNumber: 2,
        name: 'Vaishakha',
        nativeName: 'वैशाख',
        gregorianSpan: 'April - May',
        seasonRitu: 'Grishma (Summer)',
        seasonRituHindi: 'ग्रीष्म ऋतु',
        presidingDeity: 'Lord Madhusudana',
        significance: 'Akshaya Tritiya, Buddha Purnima, Ganga Saptami, and sacred water charity (Jaldan).',
        keyFestivals: ['Akshaya Tritiya', 'Ganga Saptami', 'Narasimha Jayanti', 'Buddha Purnima']
      },
      {
        monthNumber: 3,
        name: 'Jyeshtha',
        nativeName: 'ज्येष्ठ',
        gregorianSpan: 'May - June',
        seasonRitu: 'Grishma (Peak Summer)',
        seasonRituHindi: 'ग्रीष्म ऋतु',
        presidingDeity: 'Lord Trivikrama',
        significance: 'Nirjala Ekadashi, Vat Savitri Vrat, and Ganga Dussehra honoring the descent of sacred Ganga.',
        keyFestivals: ['Ganga Dussehra', 'Nirjala Ekadashi', 'Vat Purnima']
      },
      {
        monthNumber: 4,
        name: 'Ashadha',
        nativeName: 'आषाढ़',
        gregorianSpan: 'June - July',
        seasonRitu: 'Varsha (Monsoon Arrival)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Lord Vamana',
        significance: 'Jagannath Rath Yatra, Devshayani Ekadashi (initiation of Chaturmas), and Guru Purnima.',
        keyFestivals: ['Jagannath Rath Yatra', 'Devshayani Ekadashi', 'Guru Purnima']
      },
      {
        monthNumber: 5,
        name: 'Shravana',
        nativeName: 'श्रावण',
        gregorianSpan: 'July - August',
        seasonRitu: 'Varsha (Monsoon)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Lord Shiva',
        significance: 'The holiest month for Lord Shiva. Kanwar Yatra, Shravan Somwar fasts, Nag Panchami, Raksha Bandhan.',
        keyFestivals: ['Shravan Somwar Fasts', 'Nag Panchami', 'Raksha Bandhan / Shravani Purnima']
      },
      {
        monthNumber: 6,
        name: 'Bhadrapada',
        nativeName: 'भाद्रपद',
        gregorianSpan: 'August - September',
        seasonRitu: 'Varsha (Late Monsoon)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Lord Krishna & Lord Ganesha',
        significance: 'Krishna Janmashtami, Ganesh Chaturthi, Hartalika Teej, and start of Pitru Paksha Shraddha.',
        keyFestivals: ['Kajari Teej', 'Krishna Janmashtami', 'Hartalika Teej', 'Ganesh Chaturthi', 'Anant Chaturdashi']
      },
      {
        monthNumber: 7,
        name: 'Ashwina',
        nativeName: 'आश्विन (क्वार)',
        gregorianSpan: 'September - October',
        seasonRitu: 'Sharad (Autumn)',
        seasonRituHindi: 'शरद ऋतु',
        presidingDeity: 'Maa Durga & Lord Rama',
        significance: 'Conclusion of Pitru Paksha; 9 days of Sharad Navratri, Durga Puja, Dussehra, and Sharad Purnima.',
        keyFestivals: ['Sarva Pitru Amavasya', 'Sharad Navratri', 'Durga Ashtami', 'Vijayadashami (Dussehra)', 'Sharad Purnima']
      },
      {
        monthNumber: 8,
        name: 'Kartika',
        nativeName: 'कार्तिक',
        gregorianSpan: 'October - November',
        seasonRitu: 'Hemant (Pre-Winter)',
        seasonRituHindi: 'हेमंत ऋतु',
        presidingDeity: 'Lord Damodara / Lord Vishnu',
        significance: 'The supreme month of light and penance. Karwa Chauth, Dhanteras, Diwali, Govardhan Puja, Chhath Puja, Dev Diwali.',
        keyFestivals: ['Karwa Chauth', 'Dhanteras', 'Diwali', 'Govardhan Puja', 'Bhai Dooj', 'Chhath Mahaparva', 'Dev Deepawali']
      },
      {
        monthNumber: 9,
        name: 'Margashirsha',
        nativeName: 'मार्गशीर्ष (अगहन)',
        gregorianSpan: 'November - December',
        seasonRitu: 'Hemant (Winter)',
        seasonRituHindi: 'हेमंत ऋतु',
        presidingDeity: 'Lord Krishna',
        significance: 'Mokshada Ekadashi, Gita Jayanti, and Dattatreya Jayanti.',
        keyFestivals: ['Gita Jayanti', 'Mokshada Ekadashi', 'Dattatreya Jayanti']
      },
      {
        monthNumber: 10,
        name: 'Pausha',
        nativeName: 'पौष',
        gregorianSpan: 'December - January',
        seasonRitu: 'Shishir (Deep Winter)',
        seasonRituHindi: 'शिशिर ऋतु',
        presidingDeity: 'Bhagwan Bhaskara (Surya Dev)',
        significance: 'Month of Sun worship; concludes with the monumental Makar Sankranti transit and holy dips in Prayagraj Sangam.',
        keyFestivals: ['Pausha Putrada Ekadashi', 'Makar Sankranti', 'Magh Mela Sangam Snan start']
      },
      {
        monthNumber: 11,
        name: 'Magha',
        nativeName: 'माघ',
        gregorianSpan: 'January - February',
        seasonRitu: 'Shishir (Late Winter)',
        seasonRituHindi: 'शिशिर ऋतु',
        presidingDeity: 'Lord Madhava',
        significance: 'Kalpavas at Prayagraj, Mauni Amavasya, Vasant Panchami, and Ratha Saptami.',
        keyFestivals: ['Mauni Amavasya', 'Vasant Panchami', 'Ratha Saptami', 'Magha Purnima Snan']
      },
      {
        monthNumber: 12,
        name: 'Phalguna',
        nativeName: 'फाल्गुन',
        gregorianSpan: 'February - March',
        seasonRitu: 'Vasant (Spring Arrival)',
        seasonRituHindi: 'वसंत ऋतु',
        presidingDeity: 'Lord Shiva & Sri Krishna',
        significance: 'Maha Shivratri, Holika Dahan, and joyous Holi celebrations in Braj.',
        keyFestivals: ['Maha Shivratri', 'Amalaki Ekadashi', 'Holika Dahan', 'Holi']
      }
    ],
    specialRules: [
      {
        title: 'Purnimanta Krishna Paksha Rule',
        rule: 'Because months end on Purnima, Krishna Paksha is reckoned with the new month name. For instance, Janmashtami is celebrated on Bhadrapada Krishna Ashtami in North India, while in Amanta regions it falls in month Shravana, but ON THE EXACT SAME SOLAR DAY.',
        shastraBasis: 'Surya Siddhanta & Muhurat Chintamani'
      },
      {
        title: 'Udaya Tithi Precedence',
        rule: 'A fast or festival is observed on the day the governing Tithi is active at sunrise (Udayavyapi Tithi), even if the Tithi changes 30 minutes after sunrise.',
        shastraBasis: 'Dharma Sindhu & Nirnaya Sindhu'
      }
    ],
    culturalSignificance: {
      dailyLifeRole: 'Dictates the religious life, fasting days, weddings, and agrarian sowing/harvest seasons across North and Central India.',
      templesGoverned: ['Kashi Vishwanath (Varanasi)', 'Ram Janmabhoomi (Ayodhya)', 'Banke Bihari (Vrindavan)', 'Mahakaleshwar (Ujjain)', 'Badrinath & Kedarnath', 'Pashupatinath (Kathmandu)'],
      culinaryAndAgrarianTraditions: [
        'Holi: Gujiya, Thandai, and Malpua.',
        'Makar Sankranti: Khichdi, Til ke Laddu, and Chivda.',
        'Chhath Puja: Thekua, Kasar, and sugarcane.',
        'Navratri: Kuttu ka atta, Singhara halwa, and Sabudana.'
      ]
    },
    faqs: [
      {
        question: 'What is the key difference between Purnimanta and Amanta systems?',
        answer: 'In the Purnimanta system, the lunar month ends on Purnima (Full Moon), meaning Krishna Paksha comes first and Shukla Paksha comes second. In the Amanta system, the month ends on Amavasya (New Moon), placing Shukla Paksha first. Note that astronomical tithis and celestial positions are identical in both systems.'
      },
      {
        question: 'Why does Chaitra Navratri mark the Vedic New Year?',
        answer: 'According to Brahma Purana, Lord Brahma commenced the creation of the universe at the moment of sunrise on Chaitra Shukla Pratipada. It also marks the transition into spring (Vasant Ritu) and the beginning of Vikram Samvat.'
      }
    ]
  },

  'tamil-calendar': {
    id: 'tamil-calendar',
    slug: 'tamil',
    name: 'Tamil Solar Calendar (தமிழ் நாட்காட்டி)',
    nativeName: 'தமிழ் திருக்கணித சௌரமான நாட்காட்டி',
    title: 'Tamil Calendar - Puthandu, Pongal, Nakshatras & Gowri Panchangam',
    tagline: 'The Sacred Sidereal Solar Calendar of Tamil Nadu and Sri Lankan Tamils',
    heroBadge: 'Parabhava Varudam (பராபவ) • 60-Year Jovian Cycle',
    region: 'Tamil Nadu, Puducherry, Sri Lanka, Malaysia, Singapore & Diaspora',
    language: 'Tamil (தமிழ்)',
    eraName: 'Tamil Year Cycle (60-Year Cycle)',
    currentYear: 'Parabhava (பராபவ)',
    calculationType: 'Sidereal Solar (சௌரமானம்)',
    epochStart: '3102 BCE (Kali Yuga base) with 60-year cyclical Jovian reckoning',
    rulingDeities: ['Lord Murugan (Karthikeya)', 'Lord Shiva (Nataraja)', 'Maa Meenakshi', 'Lord Ranganatha', 'Lord Venkateswara'],
    bannerImageTheme: 'crimson',
    historyAndOrigin: {
      founderOrKing: 'Sangam Era ancient Tamil astronomers & Tolkappiyam records',
      historicalEra: 'Rooted in Sangam literature and codified under the Chola and Pandya empires.',
      narrative: 'The Tamil calendar is a sidereal solar calendar that follows the movement of the Sun through the 12 signs of the Zodiac (Rasis). The New Year (Chithirai Puthandu) begins on the first day of Chithirai (mid-April) when the Sun enters Mesha Rasi (Aries). The calendar uses a 60-year Jovian cycle (Arupathu Varudangal) where each year has a distinctive Sanskrit-Tamil name like Prabhava, Vibhava, Shukla, Pramodoota, Prajotpatti, and Parabhava.',
      puranicReferences: [
        'Tolkappiyam (References to solar solstices and Aadi perukku)',
        'Silappatikaram (Detailed celebrations of Indira Vizha in month of Chithirai)',
        'Vakya Panchangam & Thirukanitha Panchangam traditions'
      ]
    },
    astronomicalCalculation: {
      systemName: 'Thirukanitha & Vakya Solar Systems',
      solarOrLunar: 'Sidereal Solar',
      monthStartRule: 'Sankranti (Sankramana) — When the Sun transitions from one Rasi to the next. If ingress occurs after sunset, the month begins on the following day.',
      dayStartRule: 'Sunrise to Sunrise',
      intercalaryRule: 'No Adhika Masa needed because solar month lengths naturally adjust based on the earth’s orbital speed (29 to 32 days).',
      equinoxRule: 'Chithirai 1st corresponds to the vernal equinox transit into Mesha Rasi.',
      corePrinciples: [
        'Months are named after the solar constellations: Mesha (Chithirai), Rishabha (Vaikasi), etc.',
        'Gowri Panchangam: Specialized sub-divisions of the day (Amrita, Rogam, Labham, Shubham, Visham) for scheduling undertakings.',
        'Nalla Neram: The universally observed auspicious window of each day.'
      ]
    },
    monthsBreakdown: [
      {
        monthNumber: 1,
        name: 'Chithirai',
        nativeName: 'சித்திரை (புத்தாண்டு)',
        gregorianSpan: 'April 14 - May 14',
        seasonRitu: 'Ilavenil (Early Summer)',
        seasonRituHindi: 'वसंत / ग्रीष्म',
        presidingDeity: 'Maa Meenakshi & Lord Sundareswarar',
        significance: 'Tamil New Year (Puthandu), Madurai Meenakshi Thirukalyanam, and Chitra Pournami.',
        keyFestivals: ['Chithirai Puthandu (Tamil New Year)', 'Meenakshi Thirukalyanam', 'Chitra Pournami']
      },
      {
        monthNumber: 2,
        name: 'Vaikasi',
        nativeName: 'வைகாசி',
        gregorianSpan: 'May 15 - June 14',
        seasonRitu: 'Mudhuvenil (Mid Summer)',
        seasonRituHindi: 'ग्रीष्म',
        presidingDeity: 'Lord Murugan',
        significance: 'Vaikasi Visakam (Birth of Lord Murugan) and grand Brahmotsavams across Murugan Arupadaiveedu temples.',
        keyFestivals: ['Vaikasi Visakam', 'Narasimha Jayanti']
      },
      {
        monthNumber: 3,
        name: 'Aani',
        nativeName: 'ஆனி',
        gregorianSpan: 'June 15 - July 15',
        seasonRitu: 'Mudhuvenil (Late Summer)',
        seasonRituHindi: 'ग्रीष्म',
        presidingDeity: 'Lord Nataraja',
        significance: 'Aani Thirumanjanam at Chidambaram Nataraja Temple celebrating cosmic celestial dance.',
        keyFestivals: ['Aani Thirumanjanam (Chidambaram)']
      },
      {
        monthNumber: 4,
        name: 'Aadi',
        nativeName: 'ஆடி',
        gregorianSpan: 'July 16 - August 16',
        seasonRitu: 'Kaar (Monsoon)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Maa Amman / Mariamman / Goddess Kaveri',
        significance: 'Sacred month dedicated to Shakti worship; Aadi Perukku (river thanksgiving) and Aadi Pooram (Andal Jayanti).',
        keyFestivals: ['Aadi Pirappu', 'Aadi Perukku (Kaveri Puja)', 'Aadi Pooram (Andal Jayanti)', 'Aadi Amavasai']
      },
      {
        monthNumber: 5,
        name: 'Avani',
        nativeName: 'ஆவணி',
        gregorianSpan: 'August 17 - September 16',
        seasonRitu: 'Kaar (Monsoon)',
        seasonRituHindi: 'वर्षा ऋतु',
        presidingDeity: 'Lord Ganesha & Lord Krishna',
        significance: 'Avani Avittam (Gayatri Japam & thread changing), Gokulashtami, and Vinayagar Chaturthi.',
        keyFestivals: ['Avani Avittam (Upakarma)', 'Gayatri Japam', 'Gokulashtami', 'Vinayagar Chaturthi']
      },
      {
        monthNumber: 6,
        name: 'Purattasi',
        nativeName: 'புரட்டாசி',
        gregorianSpan: 'September 17 - October 17',
        seasonRitu: 'Koothir (Autumn)',
        seasonRituHindi: 'शरद ऋतु',
        presidingDeity: 'Lord Venkateswara (Balaji)',
        significance: 'Purattasi Saturdays are observed with strict vegetarian fasting and lamps dedicated to Lord of Tirumala.',
        keyFestivals: ['Purattasi Sani (Saturday fasting)', 'Navaratri', 'Vijayadasami']
      },
      {
        monthNumber: 7,
        name: 'Aippasi',
        nativeName: 'ஐப்பசி',
        gregorianSpan: 'October 18 - November 16',
        seasonRitu: 'Koothir (Late Autumn)',
        seasonRituHindi: 'शरद / हेमंत',
        presidingDeity: 'Lord Shiva & Lord Murugan',
        significance: 'Aippasi Annabishekam (adorning Shivalinga with cooked rice) and Deepavali / Soorasamharam.',
        keyFestivals: ['Aippasi Annabishekam', 'Deepavali (Ganga Snanam)', 'Skanda Sashti & Soorasamharam']
      },
      {
        monthNumber: 8,
        name: 'Karthigai',
        nativeName: 'கார்த்திகை',
        gregorianSpan: 'November 17 - December 15',
        seasonRitu: 'Munpani (Early Winter)',
        seasonRituHindi: 'हेमंत ऋतु',
        presidingDeity: 'Lord Shiva (Arunachaleswarar) & Lord Murugan',
        significance: 'Karthigai Deepam festival with the magnificent Maha Deepam atop Thiruvannamalai Hill.',
        keyFestivals: ['Karthigai Somavaram', 'Thiruvannamalai Karthigai Deepam']
      },
      {
        monthNumber: 9,
        name: 'Margazhi',
        nativeName: 'மார்கழி',
        gregorianSpan: 'December 16 - January 13',
        seasonRitu: 'Munpani (Winter)',
        seasonRituHindi: 'शिशिर ऋतु',
        presidingDeity: 'Lord Krishna & Sri Andal',
        significance: 'Spiritual dawn of the Gods; chanting Thiruppavai and Thiruvempavai at 4 AM; Vaikunta Ekadashi.',
        keyFestivals: ['Vaikunta Ekadashi (Sorga Vasal opening)', 'Arudra Darisanam', 'Hanumath Jayanthi']
      },
      {
        monthNumber: 10,
        name: 'Thai',
        nativeName: 'தை (பொங்கல்)',
        gregorianSpan: 'January 14 - February 12',
        seasonRitu: 'Pinpani (Late Winter)',
        seasonRituHindi: 'शिशिर ऋतु',
        presidingDeity: 'Surya Bhagwan & Lord Murugan',
        significance: 'Thai Pongal harvest festival, Mattu Pongal, Kaanum Pongal, and the grand Thaipusam celebration.',
        keyFestivals: ['Bhogi Pandigai', 'Thai Pongal (Surya Pongal)', 'Mattu Pongal & Jallikattu', 'Kaanum Pongal', 'Thaipusam (Palani Kavadi)']
      },
      {
        monthNumber: 11,
        name: 'Masi',
        nativeName: 'மாசி',
        gregorianSpan: 'February 13 - March 13',
        seasonRitu: 'Pinpani (Late Winter)',
        seasonRituHindi: 'शिशिर / वसंत',
        presidingDeity: 'Lord Shiva',
        significance: 'Masi Magam with holy sea dips and grand temple tank floating car festivals (Theppotsavam).',
        keyFestivals: ['Maha Shivaratri', 'Masi Magam']
      },
      {
        monthNumber: 12,
        name: 'Panguni',
        nativeName: 'பங்குனி',
        gregorianSpan: 'March 14 - April 13',
        seasonRitu: 'Ilavenil (Spring Arrival)',
        seasonRituHindi: 'वसंत ऋतु',
        presidingDeity: 'Lord Shiva & Mata Parvati',
        significance: 'Panguni Uthiram: The celestial wedding day of Shiva-Parvati, Rama-Sita, and Murugan-Deivanai.',
        keyFestivals: ['Panguni Uthiram (Divine Celestial Weddings)', 'Karadayan Nombu']
      }
    ],
    specialRules: [
      {
        title: 'Margazhi Auspiciousness Without Weddings',
        rule: 'Month Margazhi is strictly dedicated to spiritual sadhana, temple chanting of Thiruppavai, and early morning kolams. Weddings and house warmings are avoided to keep full focus on the divine.',
        shastraBasis: 'Bhagavad Gita ("Masanam Margashirsho Ham") & Alwar Tradition'
      },
      {
        title: 'Thai Piranthal Vazhi Pirakkum',
        rule: 'A revered Tamil saying meaning "With the arrival of month Thai, new paths and auspicious ventures open up". Marriages, business inaugurations, and housewarmings resume with immense vigor.',
        shastraBasis: 'Tamil Cultural Shastra'
      }
    ],
    culturalSignificance: {
      dailyLifeRole: 'Directs every temple festival in Tamil Nadu, daily Gowri Panchangam consultations, and auspicious marriage muhurats.',
      templesGoverned: ['Madurai Meenakshi Amman', 'Thiruvannamalai Arunachaleswarar', 'Chidambaram Nataraja', 'Srirangam Ranganathaswamy', 'Palani Murugan Mandir', 'Rameswaram Ramanathaswamy'],
      culinaryAndAgrarianTraditions: [
        'Thai Pongal: Sweet Jaggery Rice Pongal cooked in earthen pots until boiling over ("Pongalo Pongal!").',
        'Puthandu: Pachadi prepared with neem flowers, raw mango, jaggery, tamarind, and green chillies (symbolizing life’s six emotional tastes).'
      ]
    },
    faqs: [
      {
        question: 'Why does the Tamil Year start in mid-April instead of January 1st?',
        answer: 'The Tamil calendar is sidereal solar. The first day of Chithirai (mid-April) marks the exact astronomical moment when the Sun completes a full 360° circle through the cosmos and enters the very first zodiac sign, Mesha (Aries). This is celebrated as Chithirai Puthandu.'
      },
      {
        question: 'What is Gowri Panchangam in Tamil daily life?',
        answer: 'Gowri Panchangam is an ancient Tamil astrological division of day and night into five cosmic segments: Uthi (Growth), Amirtham (Nectar/Success), Rogam (Disease), Sobanam (Auspiciousness), and Visham (Poison). Devotees consult it to choose auspicious times (Nalla Neram) for travel and new ventures.'
      }
    ]
  }
};

// 2. Comprehensive Details for Festival & Special Calendars
export const festivalSpecialDeepDives: Record<string, FestivalSpecialCalendarData> = {
  'chhath-puja-calendar': {
    id: 'chhath-puja-calendar',
    slug: 'chhath',
    name: 'Chhath Mahaparva Calendar (छठ महापर्व)',
    nativeName: 'छठ महापर्व (सूर्य षष्ठी व्रत)',
    title: 'Chhath Mahaparva - 4-Day Solar Penance, Sandhya & Usha Arghya',
    subtitle: 'The Most Rigorous and Pure Vedic Solar Thanksgiving to Surya Bhagwan and Chhathi Maiya',
    category: 'festival',
    duration: '4 Days (Kartik Shukla Chaturthi to Saptami)',
    presidingDeity: 'Surya Dev (Sun God) & Chhathi Maiya (Usha / Pratyusha)',
    themeColor: 'crimson',
    overview: 'Chhath Puja is an ancient Vedic festival dedicated to Bhagwan Surya and Shashthi Devi (Chhathi Maiya). Spanning four rigorous days of austerity, waterless fasting (Nirjala), and holy river vigil, it is unique because worship is offered not only to the rising Sun, but first to the setting Sun (Sandhya Arghya), acknowledging both beginnings and closures of cosmic existence.',
    scripturalOrigin: 'Rigveda contains sacred hymns dedicated to the Sun’s illumination. In the Mahabharata, Draupadi and the Pandavas observed Chhath Vrat on Sage Dhaumya’s advice to regain their lost kingdom and health. Karna, the son of Surya Dev, was the foremost devotee who stood in waist-deep water offering Arghya at sunrise.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Nahay Khay (नहाय खाय)',
        nativeDayTitle: 'नहाय-खाय (पवित्र स्नान एवं सात्विक भोजन)',
        tithiAndTiming: 'Kartik Shukla Chaturthi',
        approx2026Date: 'November 12, 2026',
        rituals: [
          'Vratis (fasting devotees) clean the entire home and take a ritual bath in a holy river or pond.',
          'Cook pure sattvic meal of Kaddu-Bhat (bottle gourd curry cooked in pure ghee and rock salt) with Arwa chawal and Chana dal.',
          'The Vrati eats once only; other family members partake after the Vrati finishes.'
        ],
        offeringsAndPrasad: 'Kaddu-Bhat, Lauki sabzi, Chana dal, Rock salt (Sendha Namak)',
        significance: 'Complete inner and external purification of body and mind for the 72-hour penance.'
      },
      {
        dayNumber: 2,
        dayTitle: 'Kharna / Rasiyaav (खरना)',
        nativeDayTitle: 'खरना (लोहंडा एवं रसियाव-रोटी प्रसाद)',
        tithiAndTiming: 'Kartik Shukla Panchami',
        approx2026Date: 'November 13, 2026',
        rituals: [
          'Vrati observes a strict Nirjala (waterless) fast throughout the entire day from sunrise.',
          'In the evening after sunset, sweet Rasiyaav (rice kheer cooked in sugarcane jaggery and pure cow milk) and Roti are prepared over a clay stove (Chulha) using mango wood.',
          'Offered to Surya Dev and Chhathi Maiya; Vrati breaks the day’s fast in solitary silence. From this moment, a 36-hour unbroken Nirjala fast commences.'
        ],
        offeringsAndPrasad: 'Gur Kheer (Rasiyaav), Whole wheat Ghee Roti, Bananas',
        significance: 'Steadfast concentration; invoking Shashthi Devi’s blessings for family progeny and longevity.'
      },
      {
        dayNumber: 3,
        dayTitle: 'Sandhya Arghya / Pehli Arghya (सायंकालीन अर्घ्य)',
        nativeDayTitle: 'सायंकालीन अर्घ्य (डूबते सूर्य को अर्घ्य)',
        tithiAndTiming: 'Kartik Shukla Shashthi',
        approx2026Date: 'November 14, 2026',
        rituals: [
          'Family members prepare traditional Thekua, Kasar laddu, and gather sugarcane with sprouts, bananas, Daakh, coconuts, and seasonal roots in woven bamboo baskets (Soop and Daura).',
          'Vratis and families walk barefoot to the river ghat in procession carrying the Daura on head, singing devotional Chhath geet.',
          'At sunset, Vrati stands waist-deep in water holding the decorated Soop while family members pour cow milk and water as Arghya to the setting Sun.'
        ],
        offeringsAndPrasad: 'Traditional Thekua (wheat flour, jaggery, ghee, dry fruits), Sugarcane, Grapefruit, Radish with greens, Coconut',
        significance: 'Paying homage to the setting Sun, expressing gratitude for sustaining life on Earth.'
      },
      {
        dayNumber: 4,
        dayTitle: 'Usha Arghya & Parana (उषा अर्घ्य एवं पारण)',
        nativeDayTitle: 'उषा अर्घ्य (उगते सूर्य को अर्घ्य एवं पारण)',
        tithiAndTiming: 'Kartik Shukla Saptami',
        approx2026Date: 'November 15, 2026',
        rituals: [
          'Vratis return to the river bank before dawn in the Brahma Muhurat.',
          'Stand in the cold waters awaiting the first rays of the rising Sun.',
          'As Surya Dev appears on the eastern horizon, the final Usha Arghya is offered with milk and sacred mantras.',
          'Devotees take blessings of the Vrati, touch their feet, apply vermilion (Sindoor from nose to parting of hair), and the 36-hour fast concludes with ginger and jaggery Parana.'
        ],
        offeringsAndPrasad: 'Sacred river water, raw milk, Thekua prasad, ginger and water for Parana',
        significance: 'Culmination of the mahaparva; receiving boundless cosmic energy, health, longevity, and spiritual fulfillment.'
      }
    ],
    pujaVidhi: [
      { stepNumber: 1, title: 'Pavithrikaran & Preparation of Daura', description: 'Clean bamboo baskets (Soop/Daura) and wash all fruits in clean water. Inscribe vermilion Swastika on each Soop.' },
      { stepNumber: 2, title: 'Cooking Thekua in Sanctified Area', description: 'Thekua must be prepared only by fasting devotees or clean hands over traditional clay stove using pure desi ghee and jaggery.' },
      { stepNumber: 3, title: 'Ghat Pilgrimage', description: 'Walk barefoot carrying the Chhath Daura upon the head, singing traditional Maithili and Bhojpuri Chhath hymns.' },
      { stepNumber: 4, title: 'Offering Arghya in Waist-Deep Water', description: 'Hold the Soop with lit earthen lamp facing the Sun and rotate five times clockwise while family members pour water and milk stream.' },
      { stepNumber: 5, title: 'Parana & Prasad Distribution', description: 'Break the fast with raw milk, ginger, and jaggery, followed by distributing Thekua prasad to all attendees.' }
    ],
    sacredMantras: [
      {
        mantraName: 'Surya Gayatri Mantra',
        sanskritText: 'ॐ भास्कराय विद्महे महाद्युतिकराय धीमहि। तन्नो आदित्यः प्रचोदयात्॥',
        englishTransliteration: 'Om Bhaskaraya Vidmahe Mahadyutikaraya Dhimahi, Tanno Adityah Prachodayat.',
        meaning: 'May we contemplate the radiant illuminator of the universe. May the Sun God awaken and enlighten our intellect.'
      },
      {
        mantraName: 'Surya Arghya Stotram',
        sanskritText: 'एहि सूर्य सहस्त्रांशो तेजोराशे जगत्पते। अनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर॥',
        englishTransliteration: 'Ehi Surya Sahasramsho Tejorashe Jagatpate, Anukampaya Mam Bhaktya Grihanarghyam Divakara.',
        meaning: 'O thousand-rayed Sun God, ocean of cosmic radiance and Lord of the universe, have compassion upon my devotion and kindly accept this Arghya.'
      }
    ],
    fastingRules: {
      rules: [
        'Total unbroken 36 hours of waterless (Nirjala) fasting from Kharna evening to Usha Arghya.',
        'Strict celibacy, sleeping on the floor on a straw mat or blanket.',
        'No anger, criticism, or impure speech during the period.'
      ],
      allowedFoods: ['Water and simple fruits only during Day 1 and Day 2 daytime before Kharna.'],
      prohibitedFoods: ['Grains, pulses, salt, and water during the 36-hour Nirjala phase.'],
      paranaTimingRule: 'Conducted immediately after offering Usha Arghya at sunrise on Kartik Shukla Saptami.'
    },
    dosAndDonts: {
      dos: [
        'Use clay stoves and mango wood for sacred cooking.',
        'Apply orange sindoor generously from the bridge of the nose upwards.',
        'Stand reverently facing the Sun in living water (river or pond).'
      ],
      donts: [
        'Do not touch prasad or soop with unwashed hands or shoes.',
        'Never use non-veg, onion, garlic, or table salt in the entire house.',
        'Do not drop any offerings on the ground.'
      ]
    },
    regionalTraditions: [
      { region: 'Bihar, Jharkhand & Purvanchal (UP)', customs: 'Observed in every village and town riverbank; grand illumination of Ganga ghats from Patna to Varanasi.' },
      { region: 'Delhi, Mumbai & Kolkata', customs: 'Devotees gather at Yamuna ghats, Juhu Beach, and Rabindra Sarobar lake; artificial water tanks created in residential colonies.' },
      { region: 'Nepal (Terai / Madhesh)', customs: 'Observed with equal national sanctity across Janakpur Dham, Birgunj, and Kathmandu ponds.' }
    ],
    faqs: [
      {
        question: 'Why is Chhath Puja offered to the setting Sun first?',
        answer: 'Vedic philosophy teaches that cosmic creation is incomplete without acknowledging the ending of cycles. Worshipping the setting Sun (Sandhya Arghya) acknowledges life’s twilight, maturity, and darkness before welcoming the glorious new dawn (Usha Arghya).'
      },
      {
        question: 'What is Thekua and why is it so sacred in Chhath?',
        answer: 'Thekua is the signature prasad of Chhath made of stone-ground whole wheat, sugarcane jaggery, green cardamom, fennel seeds, and deep-fried in pure desi ghee. It is stamped with traditional wooden molds and cooked with absolute ritual cleanliness.'
      }
    ]
  },

  'diwali-calendar': {
    id: 'diwali-calendar',
    slug: 'diwali',
    name: 'Diwali 5-Day Puja & New Year Calendar',
    nativeName: 'दीपावली ५ दिवसीय पूजन महोत्सव पंचांग',
    title: 'Diwali 5-Day Calendar - Dhanteras, Kali Chaudas, Lakshmi Puja, Chopda Pujan & Bhai Dooj',
    subtitle: 'Comprehensive Astrological Guide to the Festival of Lights, Pradosh Kaal & Auspicious Muhurats',
    category: 'festival',
    duration: '5 Days (Dhanteras to Bhai Dooj)',
    presidingDeity: 'Mata Mahalakshmi, Lord Ganesha, Lord Kuber, and Lord Dhanvantari',
    themeColor: 'amber',
    overview: 'Deepawali is the premier festival of Sanatana Dharma symbolizing the triumph of light over darkness, wisdom over ignorance, and righteousness over evil. Celebrating Lord Rama’s return to Ayodhya after 14 years of exile and the churning of the ocean (Samudra Manthan) which revealed Maa Lakshmi, it spans five continuous days of illumination, wealth invocation, and familial joy.',
    scripturalOrigin: 'Skanda Purana, Padma Purana, and Bhavishya Purana establish the five-day Deepawali sequence and detail the specific earthen lamp placements for Lord Yama, Goddess Lakshmi, and Lord Dhanvantari.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Dhanteras (Dhanatrayodashi)',
        nativeDayTitle: 'धनतेरस (धनत्रयोदशी एवं धन्वंतरि जयंती)',
        tithiAndTiming: 'Ashwina / Kartika Krishna Trayodashi',
        approx2026Date: 'November 6, 2026',
        rituals: [
          'Purchase gold, silver, brass utensils, or broom (Jhadu - symbol of Lakshmi).',
          'Worship Lord Dhanvantari (the celestial healer) for sound health and vitality.',
          'Light a 4-wick mustard oil lamp (Yama Deepam) facing south outside the house at dusk to ward off untimely death.'
        ],
        offeringsAndPrasad: 'Coriander seeds (Dhaniya), Batasha, Jaggery, Kheer',
        significance: 'Arrival of divine healer Dhanvantari with Amrit Kalash; invulnerability against illness.'
      },
      {
        dayNumber: 2,
        dayTitle: 'Naraka Chaturdashi / Kali Chaudas',
        nativeDayTitle: 'नरक चतुर्दशी / काली चौदस / रूप चौदस',
        tithiAndTiming: 'Krishna Chaturdashi',
        approx2026Date: 'November 7, 2026',
        rituals: [
          'Perform Abhyanga Snan (holy oil and ubtan bath) before sunrise to cleanse fatigue and sins.',
          'In Gujarat: Kali Chaudas worship with Vada and Surma to dispel negative energies and evil eye.',
          'Light 14 earthen lamps in the evening.'
        ],
        offeringsAndPrasad: 'Urad dal vada, Puri, Poha, Sweets',
        significance: 'Lord Krishna and Satyabhama vanquishing demon Narakasura; liberation of 16,000 imprisoned souls.'
      },
      {
        dayNumber: 3,
        dayTitle: 'Diwali & Sri Mahalakshmi Pujan',
        nativeDayTitle: 'दीपावली (श्री महालक्ष्मी एवं गणेश महापूजन)',
        tithiAndTiming: 'Krishna Amavasya',
        approx2026Date: 'November 8, 2026',
        rituals: [
          'Cleanse the house, draw sacred Rangoli at threshold with rice flour and natural colors.',
          'Perform Lakshmi-Ganesha-Kuber-Saraswati Pujan during Pradosh Kaal and fixed Vrishabha Lagna.',
          'In Gujarat: Conduct auspicious Chopda Pujan for business ledgers and computers.',
          'Illuminate every corner of the house with 21 or more pure ghee and mustard oil lamps.'
        ],
        offeringsAndPrasad: 'Panchamrit, Kheel, Batashe, Modak, Ladoos, Lotus flowers, Pomegranate',
        significance: 'Goddess Mahalakshmi descends to bless pure and illuminated homes with eternal spiritual and material abundance.'
      },
      {
        dayNumber: 4,
        dayTitle: 'Govardhan Puja / Annakut / Bestu Varas',
        nativeDayTitle: 'गोवर्धन पूजा / अन्नकूट / गुजराती नूतन वर्ष (બેસતું વર્ષ)',
        tithiAndTiming: 'Shukla Pratipada',
        approx2026Date: 'November 9, 2026',
        rituals: [
          'Craft Govardhan Hill with cow dung and decorate with flowers and sugarcane.',
          'Prepare 56 food delicacies (Chappan Bhog) or Annakut for Lord Krishna.',
          'In Gujarat: Celebrate Bestu Varas (New Year Day) by seeking elder blessings and wearing new garments.'
        ],
        offeringsAndPrasad: '56 Bhog Annakut, Makhan-Mishri, Kadhi-Khichdi',
        significance: 'Lord Krishna lifting Govardhan Hill on his little finger to protect Vrajavasis from Indra’s torrential rains.'
      },
      {
        dayNumber: 5,
        dayTitle: 'Bhai Dooj / Yama Dwitiya / Bhai Beej',
        nativeDayTitle: 'भाई दूज / यम द्वितीया / ભાઈબીજ',
        tithiAndTiming: 'Shukla Dwitiya',
        approx2026Date: 'November 10, 2026',
        rituals: [
          'Sisters apply vermilion and unbroken rice (Akshat) tilak on brothers’ foreheads.',
          'Feed brothers sweets and home-cooked feast; brothers offer gifts and pledge lifelong protection.',
          'Sacred bath in the Yamuna River at Mathura ensures freedom from Yamaloka.'
        ],
        offeringsAndPrasad: 'Basundi, Puri, Gujiya, Dry fruits',
        significance: 'Lord Yamaraj visiting his sister Goddess Yamuna, granting a boon that any brother receiving tilak on this day will never suffer untimely death.'
      }
    ],
    pujaVidhi: [
      { stepNumber: 1, title: 'Altar Preparation & Kalash Sthapana', description: 'Spread red cloth over wooden chowki. Inscribe rice Swastika. Place copper Kalash with water, betel nut, coin, mango leaves, and coconut.' },
      { stepNumber: 2, title: 'Invocation of Lord Ganesha', description: 'Worship Ganesha first with dhoop, deep, red flowers, and modak to remove all obstacles from the home.' },
      { stepNumber: 3, title: 'Mahalakshmi & Kuber Avahan', description: 'Offer lotus flowers, silver coins, gold ornaments, and recite Sri Suktam and Lakshmi Ashtakam.' },
      { stepNumber: 4, title: 'Chopda Pujan (Account Books)', description: 'Draw Om and Swastika with Roli on new account books, sprinkling Akshat and seeking ethical prosperity.' },
      { stepNumber: 5, title: 'Deep Daan & Aarti', description: 'Perform Mahalakshmi Aarti singing "Om Jai Lakshmi Mata", distributing prasad to all family members.' }
    ],
    sacredMantras: [
      {
        mantraName: 'Maha Lakshmi Beej Mantra',
        sanskritText: 'ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥',
        englishTransliteration: 'Om Shreem Hreem Shreem Kamale Kamalalaye Praseeda Praseeda Shreem Hreem Shreem Om Mahalakshmyai Namah.',
        meaning: 'O Supreme Goddess Mahalakshmi, seated upon the pure lotus flower, bestow Thy divine grace and eternal abundance upon our home.'
      },
      {
        mantraName: 'Kuber Ashta Lakshmi Mantra',
        sanskritText: 'ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा॥',
        englishTransliteration: 'Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye Dhana-Dhanya-Samriddhim Me Dehi Dapaya Swaha.',
        meaning: 'Salutations to Lord Kuber, Guardian of divine treasures. Bestow prosperity, food grain, and auspicious wealth.'
      }
    ],
    fastingRules: {
      rules: [
        'Devotees fast on Diwali day until the evening Pradosh Lakshmi Puja is completed.',
        'Sattvic vegetarian feast without garlic or onion following the Aarti.'
      ],
      allowedFoods: ['Fruits, milk, sweets, water during daytime.'],
      prohibitedFoods: ['Non-veg, alcohol, stale food, garlic, onion.'],
      paranaTimingRule: 'Concluded after performing the main Lakshmi Aarti in Pradosh Kaal.'
    },
    dosAndDonts: {
      dos: [
        'Light lamps in odd numbers (11, 21, 51, 108).',
        'Keep the entrance clean, well-lit, and adorned with Toran of mango leaves.',
        'Worship silver coins along with the idols.'
      ],
      donts: [
        'Do not gamble or consume intoxicants on Diwali night.',
        'Never sweep dust out of the home immediately after Lakshmi Puja.',
        'Do not extinguish any burning diya intentionally.'
      ]
    },
    regionalTraditions: [
      { region: 'Gujarat', customs: 'Diwali marks the year-end (Chopda Pujan); the very next day is the grand New Year (Bestu Varas).' },
      { region: 'Bengal & Assam', customs: 'Celebrated as the fierce, magnificent Kali Puja at midnight with 108 red hibiscus flowers.' },
      { region: 'Maharashtra', customs: 'Features Vasubaras cow worship, Abhyanga Snan, and Faral (Chakli, Karanji, Ladu).' },
      { region: 'North India (UP, Bihar, Punjab, Rajasthan)', customs: 'Bumper Lakshmi-Ganesh worship, visiting relatives with Mithai boxes, and lighting countless clay diyas.' }
    ],
    faqs: [
      {
        question: 'What is the significance of Pradosh Kaal and Sthir Lagna for Lakshmi Puja?',
        answer: 'Pradosh Kaal is the auspicious period of approximately 2 hours and 24 minutes starting from sunset. Sthir Lagna (fixed signs like Vrishabha / Taurus) is chosen because "Sthir" means immovable; worshipping Goddess Lakshmi in a fixed sign ensures that prosperity stays permanently in the home rather than moving away.'
      },
      {
        question: 'What is Chopda Pujan?',
        answer: 'Chopda Pujan is an ancient Gujarati and Marwari merchant tradition of worshipping new account books, ledgers, journals, and computers. Prayers are offered to Goddess Saraswati and Goddess Lakshmi to grant honesty, prosperity, and success in the coming year.'
      }
    ]
  },

  'ekadashi-calendar': {
    id: 'ekadashi-calendar',
    slug: 'ekadashi',
    name: 'All 24/26 Ekadashis Annual Fasting Calendar',
    nativeName: 'सम्पूर्ण २४/२६ एकादशी व्रत एवं पारण पंचांग',
    title: 'All Ekadashis Calendar - Vrat Dates, Parana Timings & Vishnu Mahatmya',
    subtitle: 'The Supreme Spiritual Fasting Day Occurring Twice Every Lunar Month for Soul Liberation',
    category: 'vrat',
    duration: '24 to 26 Days Annually',
    presidingDeity: 'Bhagwan Sri Hari Vishnu (Narayana)',
    themeColor: 'indigo',
    overview: 'Ekadashi is the eleventh lunar day (Tithi) of both Shukla and Krishna Paksha in the Hindu calendar. Celebrated as "Hari Vasara", it is consecrated exclusively to the worship of Lord Vishnu. Astrologically and physiologically, fasting on Ekadashi purifies the bloodstream, aligns human consciousness with lunar gravity, and grants immense spiritual merit.',
    scripturalOrigin: 'According to the Padma Purana, Ekadashi manifested as a divine feminine energy from Lord Vishnu’s body to slay the demon Mura. Pleased by her devotion, Vishnu granted her the boon that anyone who fasts on her day will be freed from all karmic impurities and attain Vaikuntha.',
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: 'Pausha Putrada Ekadashi (पौष पुत्रदा एकादशी)',
        nativeDayTitle: 'पुत्रदा एकादशी (संतान सुख एवं रक्षा)',
        tithiAndTiming: 'Pausha Shukla Ekadashi',
        approx2026Date: 'January 19, 2026',
        rituals: ['Waterless fast, worshipping Bal Gopal with butter and sugar candy.'],
        offeringsAndPrasad: 'Panchamrit, Tulsi leaves, Yellow fruits',
        significance: 'Bestows righteous children and protects family progeny.'
      },
      {
        dayNumber: 2,
        dayTitle: 'Shattila Ekadashi (षटतिला एकादशी)',
        nativeDayTitle: 'षटतिला एकादशी (तिल का ६ प्रकार से प्रयोग)',
        tithiAndTiming: 'Magha Krishna Ekadashi',
        approx2026Date: 'February 3, 2026',
        rituals: ['Use sesame seeds in six distinct sacred ways: bath, paste, oblation, charity, water, and food.'],
        offeringsAndPrasad: 'Til Ladoo, White sesame water',
        significance: 'Destroys bodily diseases and grants immense spiritual merit.'
      },
      {
        dayNumber: 3,
        dayTitle: 'Jaya Ekadashi (जया एकादशी)',
        nativeDayTitle: 'जया एकादशी (पिशाच योनि से मुक्ति)',
        tithiAndTiming: 'Magha Shukla Ekadashi',
        approx2026Date: 'February 17, 2026',
        rituals: ['Night-long Vishnu Sahasranama chanting and Akhand Diya.'],
        offeringsAndPrasad: 'Lotus flowers, Makhana Kheer',
        significance: 'Liberates the soul from ghostly realms and negative karmas.'
      },
      {
        dayNumber: 4,
        dayTitle: 'Amalaki Ekadashi (आमलकी एकादशी)',
        nativeDayTitle: 'आमलकी एकादशी (आंवला वृक्ष पूजन)',
        tithiAndTiming: 'Phalguna Shukla Ekadashi',
        approx2026Date: 'March 18, 2026',
        rituals: ['Worship of the sacred Amla tree with incense and lighting lamps under its shade.'],
        offeringsAndPrasad: 'Fresh Amla fruits, Sandalwood paste',
        significance: 'Bestows eternal youth, health, and supreme Lakshmi blessings.'
      },
      {
        dayNumber: 5,
        dayTitle: 'Nirjala Ekadashi (निर्जला एकादशी / भीमसेनी)',
        nativeDayTitle: 'निर्जला एकादशी (बिना जल का महाकठिन व्रत)',
        tithiAndTiming: 'Jyeshtha Shukla Ekadashi',
        approx2026Date: 'June 15, 2026',
        rituals: ['Complete 24-hour fast without drinking a single drop of water from sunrise to next day’s sunrise.'],
        offeringsAndPrasad: 'Earthen pitcher filled with cold water, fan, seasonal fruits donated to Brahmins',
        significance: 'Single Nirjala Ekadashi grants the accumulated fruits of all 24 Ekadashis of the year.'
      },
      {
        dayNumber: 6,
        dayTitle: 'Devshayani Ekadashi (देवशयनी एकादशी / आषाढी वारी)',
        nativeDayTitle: 'देवशयनी एकादशी (चातुर्मास प्रारंभ)',
        tithiAndTiming: 'Ashadha Shukla Ekadashi',
        approx2026Date: 'July 15, 2026',
        rituals: ['Lord Vishnu enters four months of cosmic yogic slumber (Yoga Nidra). Pandharpur Vitthala Wari culmination.'],
        offeringsAndPrasad: 'Yellow silks, Tulsi garlands, Fruits',
        significance: 'Inauguration of the four-month period of spiritual austerity (Chaturmas).'
      },
      {
        dayNumber: 7,
        dayTitle: 'Devutthana / Prabodhini Ekadashi (देवउठनी एकादशी)',
        nativeDayTitle: 'देवप्रबोधिनी एकादशी (भगवान का शयन से जागरण)',
        tithiAndTiming: 'Kartika Shukla Ekadashi',
        approx2026Date: 'November 20, 2026',
        rituals: ['Wake Lord Vishnu with conch shells and brass gongs; perform Tulsi Vivah with Shaligram.'],
        offeringsAndPrasad: 'Sugarcane, Singhadha, Ber, Radish, Sweet potato',
        significance: 'Chaturmas concludes; auspicious marriage muhurats commence across India.'
      },
      {
        dayNumber: 8,
        dayTitle: 'Mokshada Ekadashi & Gita Jayanti (मोक्षदा एकादशी)',
        nativeDayTitle: 'मोक्षदा एकादशी (श्रीमद्भगवद्गीता प्राकट्य दिवस)',
        tithiAndTiming: 'Margashirsha Shukla Ekadashi',
        approx2026Date: 'December 20, 2026',
        rituals: ['Recitation of all 18 chapters of Bhagavad Gita and feeding cows.'],
        offeringsAndPrasad: 'Tulsi Manjari, Fruits, Milk',
        significance: 'Direct path to liberation; day Lord Krishna spoke Gita to Arjuna.'
      }
    ],
    pujaVidhi: [
      { stepNumber: 1, title: 'Sankalpa at Sunrise', description: 'Take bath at sunrise, hold water and rice, taking vow: "I shall fast on this holy Ekadashi dedicated to Sri Hari".' },
      { stepNumber: 2, title: 'Worship of Shaligram / Laddu Gopal', description: 'Perform Panchamrit Abhishek with milk, honey, curd, ghee, and sugar; adorn with yellow flowers and Tulsi.' },
      { stepNumber: 3, title: 'Ekadashi Vrat Katha & Stotras', description: 'Read the specific puranic story of the Ekadashi from Bhavishyottara or Padma Purana.' },
      { stepNumber: 4, title: 'Night Vigil (Jagaran)', description: 'Spend the night singing Bhajans and chanting "Om Namo Bhagavate Vasudevaya".' },
      { stepNumber: 5, title: 'Parana on Dwadashi', description: 'Break the fast strictly during the prescribed Dwadashi Parana Muhurat after offering food to cows and Brahmins.' }
    ],
    sacredMantras: [
      {
        mantraName: 'Vishnu Ashtakshara Mantra',
        sanskritText: 'ॐ नमो नारायणाय॥',
        englishTransliteration: 'Om Namo Narayanaya.',
        meaning: 'I surrender to the Supreme Lord Narayana, the sustainer and preserver of all creation.'
      },
      {
        mantraName: 'Maha Vishnu Dhyan Sloka',
        sanskritText: 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्। लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥',
        englishTransliteration: 'Shantakaram Bhujagashayanam Padmanabham Suresham, Vishvadharam Gaganasadrisham Meghavarnam Shubhangam...',
        meaning: 'I bow to Lord Vishnu, of peaceful demeanor, resting upon the serpent Adisesha, from whose navel sprouts the cosmic lotus.'
      }
    ],
    fastingRules: {
      rules: [
        'Total abstention from all grains, wheat, rice, corn, pulses, and beans.',
        'No onions, garlic, mushrooms, or table salt.',
        'Rock salt (Sendha Namak) and fruit foods (Faral) permitted if unable to do Nirjala.'
      ],
      allowedFoods: ['Fruits, milk, curd, nuts, Sabudana, Rajgira, Kuttu, Potatoes, Amla.'],
      prohibitedFoods: ['Wheat, rice, lentils, beans, mustard seeds, non-veg, alcohol.'],
      paranaTimingRule: 'Parana MUST be done on Dwadashi before the Dwadashi Tithi ends and outside the Hari Vasara window.'
    },
    dosAndDonts: {
      dos: [
        'Pluck Tulsi leaves on Dashami (the day before), never on Ekadashi or Dwadashi.',
        'Chant Vishnu Sahasranama Stotram.',
        'Maintain gentle, truthful, and benevolent conduct.'
      ],
      donts: [
        'Never pluck Tulsi leaves on Ekadashi day.',
        'Do not sleep during daytime on Ekadashi.',
        'Never consume rice on Ekadashi; shastras state eating rice is equivalent to consuming karma.'
      ]
    },
    regionalTraditions: [
      { region: 'Maharashtra (Varkari Sampradaya)', customs: 'Millions walk barefoot singing abhangas of Sant Tukaram and Dnyaneshwar to Pandharpur Vitthala Temple.' },
      { region: 'South India (TTD & Srirangam)', customs: 'Vaikunta Ekadashi celebrated with the grand opening of "Vaikunta Dwaram" (Gate of Heaven) at Tirumala and Srirangam.' },
      { region: 'Gujarat', customs: 'Strict Farali fasts with Moraiyo khichdi and Rajgira shiro; massive temple satsangs at Dwarka and Dakor.' }
    ],
    faqs: [
      {
        question: 'Why is eating rice strictly forbidden on Ekadashi?',
        answer: 'Puranic lore relates that the sins personified (Papapurusha) took refuge in rice and grain on Ekadashi. Scientifically, rice retains significant water, which increases bodily sluggishness and conflicts with the gravitational pull of the moon on this day.'
      },
      {
        question: 'What happens if Parana is not done during the designated time?',
        answer: 'Scriptures declare that the spiritual fruits of the Ekadashi fast are lost if Parana is completed before sunrise, during Hari Vasara, or after Dwadashi ends. Adhering to the exact Parana Muhurat ensures the full merit is preserved.'
      }
    ]
  }
};
