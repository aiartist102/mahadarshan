import { CalendarSystemInfo, CalendarSystemId, ComprehensiveEvent } from '../types';

export const calendarSystemsList: CalendarSystemInfo[] = [
  {
    id: 'vikram-purnimanta',
    name: 'Vikram Samvat (Purnimanta)',
    nativeName: 'विक्रम संवत् (पूर्णिमान्त)',
    region: 'North India (UP, Bihar, MP, Rajasthan, Haryana, Delhi, HP)',
    language: 'Hindi / Sanskrit',
    currentYear: '2083',
    eraName: 'Vikram Era',
    description: 'The premier traditional lunar calendar where the month ends on Purnima (Full Moon). Used across northern central Bharat for determining sacred festivals, fasts, and rituals.',
    months: [
      { id: 1, name: 'Chaitra', nativeName: 'चैत्र', approxSolarSpan: 'Mar - Apr' },
      { id: 2, name: 'Vaishakha', nativeName: 'वैशाख', approxSolarSpan: 'Apr - May' },
      { id: 3, name: 'Jyeshtha', nativeName: 'ज्येष्ठ', approxSolarSpan: 'May - Jun' },
      { id: 4, name: 'Ashadha', nativeName: 'आषाढ़', approxSolarSpan: 'Jun - Jul' },
      { id: 5, name: 'Shravana', nativeName: 'श्रावण', approxSolarSpan: 'Jul - Aug' },
      { id: 6, name: 'Bhadrapada', nativeName: 'भाद्रपद', approxSolarSpan: 'Aug - Sep' },
      { id: 7, name: 'Ashwina', nativeName: 'आश्विन', approxSolarSpan: 'Sep - Oct' },
      { id: 8, name: 'Kartika', nativeName: 'कार्तिक', approxSolarSpan: 'Oct - Nov' },
      { id: 9, name: 'Margashirsha', nativeName: 'मार्गशीर्ष (अगहन)', approxSolarSpan: 'Nov - Dec' },
      { id: 10, name: 'Pausha', nativeName: 'पौष', approxSolarSpan: 'Dec - Jan' },
      { id: 11, name: 'Magha', nativeName: 'माघ', approxSolarSpan: 'Jan - Feb' },
      { id: 12, name: 'Phalguna', nativeName: 'फाल्गुन', approxSolarSpan: 'Feb - Mar' }
    ]
  },
  {
    id: 'vikram-amanta',
    name: 'Vikram Samvat (Amanta / Gujarati)',
    nativeName: 'ગુજરાતી વિક્રમ સંવત (અમાનત)',
    region: 'Gujarat & Western India',
    language: 'Gujarati',
    currentYear: '2082 - 2083',
    eraName: 'Vikram Era (Amanta)',
    description: 'The lunar calendar where months begin after Amavasya (New Moon). The Gujarati New Year (Bestu Varas) starts right after Diwali on Kartak Sud Ekam.',
    months: [
      { id: 1, name: 'Kartak', nativeName: 'કારતક (નૂતન વર્ષ પ્રારંભ)', approxSolarSpan: 'Oct - Nov' },
      { id: 2, name: 'Magshar', nativeName: 'માગશર', approxSolarSpan: 'Nov - Dec' },
      { id: 3, name: 'Posh', nativeName: 'પોષ', approxSolarSpan: 'Dec - Jan' },
      { id: 4, name: 'Maha', nativeName: 'મહા', approxSolarSpan: 'Jan - Feb' },
      { id: 5, name: 'Fagan', nativeName: 'ફાગણ', approxSolarSpan: 'Feb - Mar' },
      { id: 6, name: 'Chaitra', nativeName: 'ચૈત્ર', approxSolarSpan: 'Mar - Apr' },
      { id: 7, name: 'Vaishakh', nativeName: 'વૈશાખ', approxSolarSpan: 'Apr - May' },
      { id: 8, name: 'Jeth', nativeName: 'જેઠ', approxSolarSpan: 'May - Jun' },
      { id: 9, name: 'Ashadh', nativeName: 'અષાઢ', approxSolarSpan: 'Jun - Jul' },
      { id: 10, name: 'Shravan', nativeName: 'શ્રાવણ', approxSolarSpan: 'Jul - Aug' },
      { id: 11, name: 'Bhadarvo', nativeName: 'ભાદરવો', approxSolarSpan: 'Aug - Sep' },
      { id: 12, name: 'Aaso', nativeName: 'આસો', approxSolarSpan: 'Sep - Oct' }
    ]
  },
  {
    id: 'shaka-samvat',
    name: 'Shalivahana Shaka (National & Deccan)',
    nativeName: 'शालिवाहन शक संवत् (राष्ट्रीय पंचांग)',
    region: 'Maharashtra, Karnataka, Andhra Pradesh, Telangana & Indian National Calendar',
    language: 'Marathi / Telugu / Kannada / Hindi',
    currentYear: '1948',
    eraName: 'Shaka Era',
    description: 'Adopted as the National Calendar of the Republic of India (1957) and celebrated as Gudi Padwa in Maharashtra and Ugadi in the Deccan. Months are Amanta.',
    months: [
      { id: 1, name: 'Chaitra', nativeName: 'चैत्र / చైత్రం', approxSolarSpan: 'Mar 22 - Apr 20' },
      { id: 2, name: 'Vaishakha', nativeName: 'वैशाख / వైశాఖం', approxSolarSpan: 'Apr 21 - May 21' },
      { id: 3, name: 'Jyeshtha', nativeName: 'ज्येष्ठ / జ్యేష్ఠం', approxSolarSpan: 'May 22 - Jun 21' },
      { id: 4, name: 'Ashadha', nativeName: 'आषाढ / ఆషాఢం', approxSolarSpan: 'Jun 22 - Jul 22' },
      { id: 5, name: 'Shravana', nativeName: 'श्रावण / శ్రావణం', approxSolarSpan: 'Jul 23 - Aug 22' },
      { id: 6, name: 'Bhadrapada', nativeName: 'भाद्रपद / భాద్రపదం', approxSolarSpan: 'Aug 23 - Sep 22' },
      { id: 7, name: 'Ashwina', nativeName: 'आश्विन / ఆశ్వయుజం', approxSolarSpan: 'Sep 23 - Oct 22' },
      { id: 8, name: 'Kartika', nativeName: 'कार्तिक / కార్తీకం', approxSolarSpan: 'Oct 23 - Nov 21' },
      { id: 9, name: 'Margashirsha', nativeName: 'मार्गशीर्ष / మార్గశిరం', approxSolarSpan: 'Nov 22 - Dec 21' },
      { id: 10, name: 'Pausha', nativeName: 'पौष / పుష్యం', approxSolarSpan: 'Dec 22 - Jan 20' },
      { id: 11, name: 'Magha', nativeName: 'माघ / మాఘం', approxSolarSpan: 'Jan 21 - Feb 19' },
      { id: 12, name: 'Phalguna', nativeName: 'फाल्गुन / ఫాల్గుణం', approxSolarSpan: 'Feb 20 - Mar 21' }
    ]
  },
  {
    id: 'tamil-sauramana',
    name: 'Tamil Solar Calendar (தமிழ் நாட்காட்டி)',
    nativeName: 'தமிழ் திருக்கணித சௌரமான நாட்காட்டி',
    region: 'Tamil Nadu & Puducherry',
    language: 'Tamil (தமிழ்)',
    currentYear: 'Parabhava (பராபவ வருடம்)',
    eraName: 'Tamil Year Cycle (60-year Jovian)',
    description: 'A sidereal solar calendar where the year begins with Mesha Sankranti on the 1st of Chithirai (mid-April). Governs major temple utsavams across Tamil Nadu.',
    months: [
      { id: 1, name: 'Chithirai', nativeName: 'சித்திரை (புத்தாண்டு)', approxSolarSpan: 'Apr 14 - May 14' },
      { id: 2, name: 'Vaikasi', nativeName: 'வைகாசி', approxSolarSpan: 'May 15 - Jun 14' },
      { id: 3, name: 'Aani', nativeName: 'ஆனி', approxSolarSpan: 'Jun 15 - Jul 15' },
      { id: 4, name: 'Aadi', nativeName: 'ஆடி', approxSolarSpan: 'Jul 16 - Aug 16' },
      { id: 5, name: 'Avani', nativeName: 'ஆவணி', approxSolarSpan: 'Aug 17 - Sep 16' },
      { id: 6, name: 'Purattasi', nativeName: 'புரட்டாசி (பெருமாள் மாதம்)', approxSolarSpan: 'Sep 17 - Oct 17' },
      { id: 7, name: 'Aippasi', nativeName: 'ஐப்பசி', approxSolarSpan: 'Oct 18 - Nov 16' },
      { id: 8, name: 'Karthigai', nativeName: 'கார்த்திகை (தீப திருநாள்)', approxSolarSpan: 'Nov 17 - Dec 15' },
      { id: 9, name: 'Margazhi', nativeName: 'மார்கழி (திருப்பாவை உற்சவம்)', approxSolarSpan: 'Dec 16 - Jan 13' },
      { id: 10, name: 'Thai', nativeName: 'தை (பொங்கல் திருநாள்)', approxSolarSpan: 'Jan 14 - Feb 12' },
      { id: 11, name: 'Masi', nativeName: 'மாசி', approxSolarSpan: 'Feb 13 - Mar 13' },
      { id: 12, name: 'Panguni', nativeName: 'பங்குனி (உத்திரம்)', approxSolarSpan: 'Mar 14 - Apr 13' }
    ]
  },
  {
    id: 'bengali-panjika',
    name: 'Bengali Panjika (বাংলা পঞ্জিকা)',
    nativeName: 'বঙ্গাব্দ পঞ্জিকা (সূর্যসিদ্ধান্ত)',
    region: 'West Bengal, Tripura, Assam, Bangladesh',
    language: 'Bengali (বাংলা)',
    currentYear: '1433 Bangabda',
    eraName: 'Bangabda (বঙ্গাব্দ)',
    description: 'The traditional solar almanac of Bengal starting on Poila Boishakh (April 14/15). Determines the accurate timings of Durga Puja, Kali Puja, and Saraswati Puja.',
    months: [
      { id: 1, name: 'Boishakh', nativeName: 'বৈশাখ (পয়লা বৈশাখ)', approxSolarSpan: 'Apr - May' },
      { id: 2, name: 'Joishtho', nativeName: 'জ্যৈষ্ঠ', approxSolarSpan: 'May - Jun' },
      { id: 3, name: 'Asharh', nativeName: 'আষাঢ়', approxSolarSpan: 'Jun - Jul' },
      { id: 4, name: 'Srabon', nativeName: 'শ্রাবণ', approxSolarSpan: 'Jul - Aug' },
      { id: 5, name: 'Bhadro', nativeName: 'ভাদ্র', approxSolarSpan: 'Aug - Sep' },
      { id: 6, name: 'Ashwin', nativeName: 'আশ্বিন (দুর্গাপূজা)', approxSolarSpan: 'Sep - Oct' },
      { id: 7, name: 'Kartik', nativeName: 'কার্তিক', approxSolarSpan: 'Oct - Nov' },
      { id: 8, name: 'Ogrohayon', nativeName: 'অগ্রহায়ণ', approxSolarSpan: 'Nov - Dec' },
      { id: 9, name: 'Poush', nativeName: 'পৌষ', approxSolarSpan: 'Dec - Jan' },
      { id: 10, name: 'Magh', nativeName: 'মাঘ', approxSolarSpan: 'Jan - Feb' },
      { id: 11, name: 'Falgun', nativeName: 'ফাল্গুন', approxSolarSpan: 'Feb - Mar' },
      { id: 12, name: 'Choitro', nativeName: 'চৈত্র', approxSolarSpan: 'Mar - Apr' }
    ]
  },
  {
    id: 'malayalam-kollam',
    name: 'Malayalam Kollam Era (കൊല്ലവർഷം)',
    nativeName: 'മലയാളം കൊല്ലവർഷം കലണ്ടർ',
    region: 'Kerala & Lakshadweep',
    language: 'Malayalam (മലയാളം)',
    currentYear: '1202 ME',
    eraName: 'Kollavarsham',
    description: 'The solar calendar of Kerala established in 825 CE. The New Year begins in Chingam (August), coinciding with the grand Onam celebrations and temple festivals.',
    months: [
      { id: 1, name: 'Chingam', nativeName: 'ചിങ്ങം (തിരുവോണം)', approxSolarSpan: 'Aug - Sep' },
      { id: 2, name: 'Kanni', nativeName: 'കന്നി', approxSolarSpan: 'Sep - Oct' },
      { id: 3, name: 'Thulam', nativeName: 'തുലാം', approxSolarSpan: 'Oct - Nov' },
      { id: 4, name: 'Vrischikam', nativeName: 'വൃശ്ചികം (ശബരിമല തീർത്ഥാടനം)', approxSolarSpan: 'Nov - Dec' },
      { id: 5, name: 'Dhanu', nativeName: 'ധനു (തിരുവാതിര)', approxSolarSpan: 'Dec - Jan' },
      { id: 6, name: 'Makaram', nativeName: 'മകരം (മകരവിളക്ക്)', approxSolarSpan: 'Jan - Feb' },
      { id: 7, name: 'Kumbham', nativeName: 'കുംഭം (ശിവരാത്രി)', approxSolarSpan: 'Feb - Mar' },
      { id: 8, name: 'Meenam', nativeName: 'മീനം', approxSolarSpan: 'Mar - Apr' },
      { id: 9, name: 'Medam', nativeName: 'മേടം (വിഷുക്കണി)', approxSolarSpan: 'Apr - May' },
      { id: 10, name: 'Edavam', nativeName: 'ഇടവം', approxSolarSpan: 'May - Jun' },
      { id: 11, name: 'Mithunam', nativeName: 'മിഥുനം', approxSolarSpan: 'Jun - Jul' },
      { id: 12, name: 'Karkidakam', nativeName: 'കർക്കടകം (രാമായണ മാസം)', approxSolarSpan: 'Jul - Aug' }
    ]
  },
  {
    id: 'nanakshahi',
    name: 'Nanakshahi Calendar (ਨਾਨਕਸ਼ਾਹੀ ਕੈਲੰਡਰ)',
    nativeName: 'ਸਿੱਖ ਨਾਨਕਸ਼ਾਹੀ ਕੈਲੰਡਰ',
    region: 'Punjab & Worldwide Sikh Sangat',
    language: 'Punjabi (ਪੰਜਾਬੀ / ਗੁਰਮੁਖੀ)',
    currentYear: '558 NS',
    eraName: 'Nanakshahi Era (Birth of Guru Nanak)',
    description: 'The solar calendar of Sikhism approved by the SGPC, starting with month Chet (March 14). Accurately establishes the Parkash Purab dates of all ten Sikh Gurus.',
    months: [
      { id: 1, name: 'Chet', nativeName: 'ਚੇਤ (ਨਵਾਂ ਵਰ੍ਹਾ ਪ੍ਰਾਰੰਭ)', approxSolarSpan: 'Mar 14 - Apr 13' },
      { id: 2, name: 'Vaisakh', nativeName: 'ਵੈਸਾਖ (ਖ਼ਾਲਸਾ ਸਾਜਨਾ ਦਿਵਸ)', approxSolarSpan: 'Apr 14 - May 14' },
      { id: 3, name: 'Jeth', nativeName: 'ਜੇਠ', approxSolarSpan: 'May 15 - Jun 14' },
      { id: 4, name: 'Harh', nativeName: 'ਹਾੜ੍ਹ', approxSolarSpan: 'Jun 15 - Jul 15' },
      { id: 5, name: 'Sawan', nativeName: 'ਸਾਵਣ', approxSolarSpan: 'Jul 16 - Aug 15' },
      { id: 6, name: 'Bhadon', nativeName: 'ਭਾਦੋਂ', approxSolarSpan: 'Aug 16 - Sep 14' },
      { id: 7, name: 'Assu', nativeName: 'ਅੱਸੂ', approxSolarSpan: 'Sep 15 - Oct 14' },
      { id: 8, name: 'Katak', nativeName: 'ਕੱਤਕ (ਗੁਰੂ ਨਾਨਕ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ)', approxSolarSpan: 'Oct 15 - Nov 13' },
      { id: 9, name: 'Maghar', nativeName: 'ਮੱਘਰ', approxSolarSpan: 'Nov 14 - Dec 13' },
      { id: 10, name: 'Poh', nativeName: 'ਪੋਹ (ਸ਼ਹੀਦੀ ਸਾਹਿਬਜ਼ਾਦੇ)', approxSolarSpan: 'Dec 14 - Jan 12' },
      { id: 11, name: 'Magh', nativeName: 'ਮਾਘ (ਮਾਘੀ ਮੇਲਾ)', approxSolarSpan: 'Jan 13 - Feb 11' },
      { id: 12, name: 'Phagun', nativeName: 'ਫੱਗਣ (ਹੋਲਾ ਮਹੱਲਾ)', approxSolarSpan: 'Feb 12 - Mar 13' }
    ]
  },
  {
    id: 'jain-vira-nirvana',
    name: 'Jain Vira Nirvana Samvat (VNS)',
    nativeName: 'वीर निर्वाण संवत् (जैन पंचांग)',
    region: 'Pan-India Jain Tradition (Digambara & Shwetambara)',
    language: 'Prakrit / Sanskrit / Hindi / Gujarati',
    currentYear: '2553 VNS',
    eraName: 'Vira Nirvana Era (Maha-Nirvana of Bhagwan Mahavira)',
    description: 'Commemorates the Nirvana of the 24th Tirthankara Bhagwan Mahavira on Kartik Amavasya (Diwali morning). Features Paryushan, Kshamavani, and Tirthankara Kalyanaks.',
    months: [
      { id: 1, name: 'Kartika', nativeName: 'कार्तिक (वीर निर्वाण संवत् प्रारंभ)', approxSolarSpan: 'Oct - Nov' },
      { id: 2, name: 'Margashirsha', nativeName: 'मार्गशीर्ष', approxSolarSpan: 'Nov - Dec' },
      { id: 3, name: 'Pausha', nativeName: 'पौष (पार्श्वनाथ कल्याणक)', approxSolarSpan: 'Dec - Jan' },
      { id: 4, name: 'Magha', nativeName: 'माघ (ऋषभदेव निर्वाण)', approxSolarSpan: 'Jan - Feb' },
      { id: 5, name: 'Phalguna', nativeName: 'फाल्गुन (अष्टाह्निका)', approxSolarSpan: 'Feb - Mar' },
      { id: 6, name: 'Chaitra', nativeName: 'चैत्र (महावीर स्वामी जन्म)', approxSolarSpan: 'Mar - Apr' },
      { id: 7, name: 'Vaishakha', nativeName: 'वैशाख (अक्षय तृतीया आहार)', approxSolarSpan: 'Apr - May' },
      { id: 8, name: 'Jyeshtha', nativeName: 'ज्येष्ठ', approxSolarSpan: 'May - Jun' },
      { id: 9, name: 'Ashadha', nativeName: 'आषाढ़ (चातुर्मास प्रारंभ)', approxSolarSpan: 'Jun - Jul' },
      { id: 10, name: 'Shravana', nativeName: 'श्रावण (मोक्ष सप्तमी)', approxSolarSpan: 'Jul - Aug' },
      { id: 11, name: 'Bhadrapada', nativeName: 'भाद्रपद (पर्यूषण महापर्व)', approxSolarSpan: 'Aug - Sep' },
      { id: 12, name: 'Ashwina', nativeName: 'आश्विन', approxSolarSpan: 'Sep - Oct' }
    ]
  },
  {
    id: 'gregorian-india',
    name: 'Indian Gazetted & Bank Public Holidays',
    nativeName: 'भारत सरकार राजपत्रित व बैंक सार्वजनिक अवकाश',
    region: 'Central Government, All States & Union Territories',
    language: 'English & Official State Languages',
    currentYear: '2026',
    eraName: 'Common Era (CE)',
    description: 'Comprehensive calendar of Central Government Gazetted Holidays, State Public Holidays, Bank Holidays (Negotiable Instruments Act), and national observances.',
    months: [
      { id: 1, name: 'January', nativeName: 'जनवरी', approxSolarSpan: 'Days: 31' },
      { id: 2, name: 'February', nativeName: 'फ़रवरी', approxSolarSpan: 'Days: 28' },
      { id: 3, name: 'March', nativeName: 'मार्च', approxSolarSpan: 'Days: 31' },
      { id: 4, name: 'April', nativeName: 'अप्रैल', approxSolarSpan: 'Days: 30' },
      { id: 5, name: 'May', nativeName: 'मई', approxSolarSpan: 'Days: 31' },
      { id: 6, name: 'June', nativeName: 'जून', approxSolarSpan: 'Days: 30' },
      { id: 7, name: 'July', nativeName: 'जुलाई', approxSolarSpan: 'Days: 31' },
      { id: 8, name: 'August', nativeName: 'अगस्त', approxSolarSpan: 'Days: 31' },
      { id: 9, name: 'September', nativeName: 'सितंबर', approxSolarSpan: 'Days: 30' },
      { id: 10, name: 'October', nativeName: 'अक्टूबर', approxSolarSpan: 'Days: 31' },
      { id: 11, name: 'November', nativeName: 'नवंबर', approxSolarSpan: 'Days: 30' },
      { id: 12, name: 'December', nativeName: 'दिसंबर', approxSolarSpan: 'Days: 31' }
    ]
  }
];

// Comprehensive database of Pan-India Festivals, Vrats, Gazetted Holidays & State Celebrations
export const comprehensiveEvents: ComprehensiveEvent[] = [
  // January 2026
  {
    id: 'new-year-day',
    name: 'New Year’s Day',
    hindiName: 'नव वर्ष दिवस (ईस्वी सन्)',
    date: '2026-01-01',
    dayOfWeek: 'Thursday',
    religion: 'national',
    isVrat: false,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'First day of the civil year celebrated across institutions and businesses.',
    rituals: 'Prayers for universal peace, charitable giving and new beginnings.',
    states: 'All India'
  },
  {
    id: 'guru-gobind-singh-jayanti',
    name: 'Guru Gobind Singh Ji Parkash Purab',
    hindiName: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ',
    date: '2026-01-05',
    dayOfWeek: 'Monday',
    religion: 'sikh',
    isVrat: false,
    holidayType: 'restricted',
    holidayCategory: 'Restricted Holiday',
    description: 'Birth anniversary of the tenth Sikh Guru who instituted the Khalsa Panth and wrote the Dasam Granth.',
    rituals: 'Akhand Path, Nagar Kirtan, martial Gatka displays, and community langar.',
    states: 'Punjab, Haryana, Chandigarh, Delhi'
  },
  {
    id: 'shat-tila-ekadashi',
    name: 'Shattila Ekadashi Vrat',
    hindiName: 'षटतिला एकादशी व्रत',
    date: '2026-01-14',
    dayOfWeek: 'Wednesday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'none',
    description: 'Sacred fast utilizing sesame seeds (til) in six spiritual ways: bathing, paste, oblation, water, food, and charity.',
    rituals: 'Offering white sesame seeds to Lord Vishnu, fasting, chanting Vishnu Sahasranama.',
    tithiDetails: 'Magha Krishna Ekadashi'
  },
  {
    id: 'makar-sankranti-pongal',
    name: 'Makar Sankranti / Pongal / Maghi / Uttarayan',
    hindiName: 'मकर संक्रांति / பொங்கல் / ਮਾਘੀ (उत्तरायण)',
    regionalName: 'Pongal (TN) / Uttarayan (Guj) / Maghi (Pb) / Khichdi (UP)',
    date: '2026-01-14',
    dayOfWeek: 'Wednesday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Sun enters Makara (Capricorn) marking the start of Uttarayan. Celebrated as Pongal in Tamil Nadu, Uttarayan kite festival in Gujarat, and Maghi in Punjab.',
    rituals: 'Holy dip in sacred rivers (Ganga Sagar, Prayagraj), cooking sweet Pongal rice, offering sesame-jaggery (til-gud).',
    muhurat: 'Sankranti Punya Kaal: 08:30 AM to 05:46 PM',
    states: 'All India'
  },
  {
    id: 'netaji-jayanti',
    name: 'Netaji Subhas Chandra Bose Jayanti (Parakram Diwas)',
    hindiName: 'नेताजी सुभाष चंद्र बोस जयंती (पराक्रम दिवस)',
    date: '2026-01-23',
    dayOfWeek: 'Friday',
    religion: 'national',
    isVrat: false,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'National Day of Valour commemorating Netaji Subhas Chandra Bose and the Azad Hind Fauj.',
    rituals: 'Floral tributes, patriotic parades, seminars on Indian independence struggle.',
    states: 'West Bengal, Odisha, Assam, Tripura'
  },
  {
    id: 'republic-day',
    name: 'Republic Day of India (गणतंत्र दिवस)',
    hindiName: '77वां गणतंत्र दिवस (राष्ट्रीय पर्व)',
    date: '2026-01-26',
    dayOfWeek: 'Monday',
    religion: 'national',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Commemorates the adoption of the Constitution of India in 1950. A mandatory national holiday across all states.',
    rituals: 'Grand ceremonial parade at Kartavya Path New Delhi, unfurling of the Tricolour, national anthem.',
    states: 'All India (Mandatory National Holiday)'
  },
  {
    id: 'vasant-panchami',
    name: 'Vasant Panchami & Saraswati Puja',
    hindiName: 'बसंत पंचमी (मां सरस्वती प्राकट्योत्सव)',
    date: '2026-01-23',
    dayOfWeek: 'Friday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'restricted',
    holidayCategory: 'Restricted Holiday',
    description: 'Arrival of spring (Ritu Vasant) and invocation of Maa Saraswati, goddess of learning, music, and arts.',
    rituals: 'Wearing yellow garments, offering yellow marigold flowers, keeping books and musical instruments before the deity, Aksharabyasam for children.',
    tithiDetails: 'Magha Shukla Panchami'
  },

  // February 2026
  {
    id: 'maha-shivratri-2026',
    name: 'Maha Shivratri (महाशिवरात्रि)',
    hindiName: 'महाशिवरात्रि (द्वादश ज्योतिर्लिंग महापर्व)',
    date: '2026-02-15',
    dayOfWeek: 'Sunday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'The supreme night of Lord Shiva and Mata Parvati’s celestial wedding. Continuous day and night vigil (Jagaran) and Rudrabhishek.',
    rituals: 'Panchamrit Abhishek, continuous Bilva leaf offering, chanting Maha Mrityunjaya mantra, midnight Nishita Kaal Puja.',
    muhurat: 'Nishita Kaal: 12:09 AM to 01:00 AM',
    tithiDetails: 'Phalguna / Magha Krishna Chaturdashi'
  },
  {
    id: 'chhatrapati-shivaji-jayanti',
    name: 'Chhatrapati Shivaji Maharaj Jayanti',
    hindiName: 'छत्रपति शिवाजी महाराज जयंती (शिवजयंती)',
    date: '2026-02-19',
    dayOfWeek: 'Thursday',
    religion: 'national',
    isVrat: false,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'Birth anniversary of Chhatrapati Shivaji Maharaj, the great Maratha founder of Hindavi Swarajya.',
    rituals: 'Dhol tasha recitals, powada singing, equestrian processions and floral tributes.',
    states: 'Maharashtra, Goa'
  },
  {
    id: 'ramadan-start',
    name: 'Ramadan First Roza (Start of Holy Month)',
    hindiName: 'माहे रमज़ान शरीफ़ (पहला रोज़ा)',
    date: '2026-02-18',
    dayOfWeek: 'Wednesday',
    religion: 'muslim',
    isVrat: true,
    holidayType: 'observance',
    description: 'Beginning of the Islamic month of dawn-to-dusk fasting, prayer, charity (Zakat), and introspection.',
    rituals: 'Suhoor pre-dawn meal, five daily prayers, Taraweeh recitation, Iftar feast at sunset.',
    states: 'All India'
  },

  // March 2026
  {
    id: 'holika-dahan',
    name: 'Holika Dahan (Chhoti Holi)',
    hindiName: 'होलिका दहन (भक्त प्रह्लाद विजय पर्व)',
    date: '2026-03-03',
    dayOfWeek: 'Tuesday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'restricted',
    holidayCategory: 'Restricted Holiday',
    description: 'Symbolic burning of Holika representing the victory of pure devotion (Bhakti of Prahlad) over tyranny and evil.',
    rituals: 'Lighting sacred bonfire at dusk, circumambulating with green wheat sheaves and coconut, applying ashes to forehead.',
    muhurat: 'Holika Dahan Muhurat: 06:24 PM to 08:51 PM',
    tithiDetails: 'Phalguna Purnima'
  },
  {
    id: 'holi-dhuleti',
    name: 'Holi (Dhulandi / Dhuleti)',
    hindiName: 'होली / धुलेंडी (रंगोत्सव)',
    date: '2026-03-04',
    dayOfWeek: 'Wednesday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Ecstatic festival of colors celebrating divine love of Radha-Krishna and the triumph of goodness.',
    rituals: 'Playing with herbal gulal, consuming gujiya and thandai, hugging friends with universal bonhomie.',
    states: 'All India'
  },
  {
    id: 'gudi-padwa-ugadi',
    name: 'Gudi Padwa / Ugadi / Chaitra Sukladi',
    hindiName: 'गुड़ी पड़वा / उगादी / नवसंवत्सर (संवत् 2083 प्रारंभ)',
    regionalName: 'Gudi Padwa (MH) / Ugadi (AP, TS, KA) / Cheti Chand (Sindhi)',
    date: '2026-03-19',
    dayOfWeek: 'Thursday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'The ancient Hindu New Year marked by Brahma’s creation of the cosmos and the Shalivahana victory. Houses raise decorated Gudis.',
    rituals: 'Raising silk-draped brass pot Gudi, eating neem-jaggery paste (Bevu-Bella) symbolizing life’s bitter-sweet balance.',
    tithiDetails: 'Chaitra Shukla Pratipada'
  },
  {
    id: 'eid-ul-fitr',
    name: 'Eid-ul-Fitr (Meethi Eid)',
    hindiName: 'ईद-उल-फ़ित्र (मीठी ईद)',
    date: '2026-03-21',
    dayOfWeek: 'Saturday',
    religion: 'muslim',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Celebration concluding the holy fasting month of Ramadan, dedicated to gratitude, charity (Fitrana), and brotherhood.',
    rituals: 'Eid Namaz in open Idgah grounds, embracing (Eid Milan), cooking Sevaiyan / Sheer Khurma, distributing gifts (Eidi).',
    states: 'All India'
  },
  {
    id: 'ram-navami-2026',
    name: 'Sri Rama Navami',
    hindiName: 'श्री राम नवमी (श्री रामलला जन्मोत्सव)',
    date: '2026-03-27',
    dayOfWeek: 'Friday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Divine appearance day of Maryada Purushottam Bhagwan Rama in Ayodhya at noon during Abhijit Muhurat.',
    rituals: 'Akhand Ramcharitmanas recitation, rocking baby Rama in cradle, distributing Panakam, grand Ayodhya Aarti.',
    muhurat: 'Madhyahna Muhurat: 11:12 AM to 01:38 PM',
    tithiDetails: 'Chaitra Shukla Navami'
  },
  {
    id: 'mahavir-jayanti-2026',
    name: 'Mahavir Swami Janma Kalyanak',
    hindiName: 'महावीर स्वामी जन्म कल्याणक (जैन महापर्व)',
    date: '2026-03-31',
    dayOfWeek: 'Tuesday',
    religion: 'jain',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Birth anniversary of the 24th Tirthankara Bhagwan Mahavira, messenger of Ahimsa (Universal Non-Violence) and Anekantavada.',
    rituals: 'Grand Rath Yatra procession, Abhishek of Tirthankara idols, recitation of Navkar Mantra, feeding the needy.',
    tithiDetails: 'Chaitra Shukla Trayodashi'
  },

  // April 2026
  {
    id: 'good-friday-2026',
    name: 'Good Friday',
    hindiName: 'गुड फ्राइडे (पुण्य शुक्रवार)',
    date: '2026-04-03',
    dayOfWeek: 'Friday',
    religion: 'christian',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Solemn day commemorating the passion, sacrifice, and crucifixion of Jesus Christ at Calvary for humanity’s redemption.',
    rituals: 'Church prayers, Stations of the Cross, fasting and veneration of the Cross.',
    states: 'All India'
  },
  {
    id: 'easter-sunday',
    name: 'Easter Sunday',
    hindiName: 'ईस्टर संडे (प्रभु ईसा मसीह पुनरुत्थान)',
    date: '2026-04-05',
    dayOfWeek: 'Sunday',
    religion: 'christian',
    isVrat: false,
    holidayType: 'observance',
    description: 'Joyful celebration of the resurrection of Jesus Christ on the third day after crucifixion.',
    rituals: 'Sunrise mass, candlelight services, sharing hot cross buns and Easter eggs.',
    states: 'All India'
  },
  {
    id: 'ambedkar-jayanti',
    name: 'Dr. B.R. Ambedkar Jayanti (Equality Day)',
    hindiName: 'भारत रत्न डॉ. बी.आर. अंबेडकर जयंती (समानता दिवस)',
    date: '2026-04-14',
    dayOfWeek: 'Tuesday',
    religion: 'national',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Birth anniversary of the Chief Architect of the Indian Constitution, social reformer, and champion of human dignity.',
    rituals: 'Floral tributes at Chaitya Bhoomi (Mumbai) and Parliament House, educational seminars on social justice.',
    states: 'All India'
  },
  {
    id: 'vaisakhi-poila-boishakh',
    name: 'Vaisakhi / Poila Boishakh / Puthandu / Vishu / Bohag Bihu',
    hindiName: 'ਵੈਸਾਖੀ / ਪੋਇਲਾ ਬੈਸਾਖ / தமிழ் புத்தாண்டு / വിഷു / বিহু',
    regionalName: 'Vaisakhi (Punjab) / Poila Boishakh (Bengal) / Puthandu (Tamil Nadu) / Vishu (Kerala) / Rongali Bihu (Assam)',
    date: '2026-04-14',
    dayOfWeek: 'Tuesday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'Pan-India Solar New Year and Khalsa Sajna Diwas commemorating Sri Guru Gobind Singh Ji creating the Khalsa in 1699.',
    rituals: 'Nagar Kirtan, viewing auspicious Vishukkani, Poila Boishakh cultural events, traditional Bihu dances.',
    states: 'Punjab, West Bengal, Tamil Nadu, Kerala, Assam, Odisha'
  },
  {
    id: 'akshaya-tritiya',
    name: 'Akshaya Tritiya (Akha Teej)',
    hindiName: 'अक्षय तृतीया (सर्वसिद्धि आखा तीज)',
    date: '2026-04-19',
    dayOfWeek: 'Sunday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'restricted',
    holidayCategory: 'Restricted Holiday',
    description: 'Eternal day of inexhaustible merit. Marks Treta Yuga beginning, birth of Lord Parashurama, and Ganga descent.',
    rituals: 'Purchasing gold/brass as sacred investments, Annadaan, offering water pots (Jal Kumbha) with barley.',
    tithiDetails: 'Vaishakha Shukla Tritiya'
  },

  // May 2026
  {
    id: 'buddha-purnima-2026',
    name: 'Buddha Purnima (Vesak Day)',
    hindiName: 'बुद्ध पूर्णिमा (त्रिविध पावन वैशाख पूर्णिमा)',
    date: '2026-05-01',
    dayOfWeek: 'Friday',
    religion: 'buddha',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Triple sacred celebration of Siddhartha Gautama Buddha’s birth, supreme Enlightenment at Bodh Gaya, and Maha Parinirvana.',
    rituals: 'Meditation at Mahabodhi temple, circumambulating stupas, lighting butter lamps, releasing captive birds/fish.',
    tithiDetails: 'Vaishakha Purnima'
  },
  {
    id: 'eid-ul-adha',
    name: 'Eid-ul-Adha (Bakrid)',
    hindiName: 'ईद-उल-अज़हा (बक़रीद)',
    date: '2026-05-28',
    dayOfWeek: 'Thursday',
    religion: 'muslim',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Feast of Sacrifice honoring Prophet Ibrahim’s profound devotion and willingness to sacrifice in obedience to God.',
    rituals: 'Morning communal prayers at Idgah, Qurbani (charitable animal sacrifice), distributing meat equally to poor and relatives.',
    states: 'All India'
  },

  // June 2026
  {
    id: 'nirjala-ekadashi-2026',
    name: 'Nirjala Bhimseni Ekadashi',
    hindiName: 'निर्जला एकादशी (भीम एकादशी महाव्रत)',
    date: '2026-06-25',
    dayOfWeek: 'Thursday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'none',
    description: 'The most austere of all 24 annual Ekadashis. Fasting strictly without food or water bestows the merit of all annual fasts.',
    rituals: 'Waterless fasting for 24 hours, donating water pitchers and seasonal fruits, reciting Vishnu Sahasranama.',
    tithiDetails: 'Jyeshtha Shukla Ekadashi'
  },
  {
    id: 'muharram-ashura',
    name: 'Muharram (Youm-e-Ashura)',
    hindiName: 'मोहर्रम (यौम-ए-आशूरा)',
    date: '2026-06-27',
    dayOfWeek: 'Saturday',
    religion: 'muslim',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Tenth day of Muharram commemorating the supreme martyrdom of Imam Hussain (grandson of Prophet Muhammad) at Karbala.',
    rituals: 'Tazia processions, mourning recitations (Marsiya), giving sherbet and water to thirsty pilgrims, voluntary fasting.',
    states: 'All India'
  },

  // July 2026
  {
    id: 'jagannath-rath-yatra',
    name: 'Puri Jagannath Rath Yatra',
    hindiName: 'पुरी श्री जगन्नाथ महाप्रभु रथयात्रा',
    date: '2026-07-16',
    dayOfWeek: 'Thursday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'World-renowned chariot festival where Lord Jagannath, Balabhadra, and Subhadra journey from Sri Mandir to Gundicha Temple on massive wooden chariots.',
    rituals: 'Chhera Panhara (King sweeps chariots with golden broom), lakhs of devotees pulling chariots, singing kirtans.',
    states: 'Odisha, Gujarat, Tripura, West Bengal'
  },
  {
    id: 'guru-purnima-2026',
    name: 'Guru Purnima (Maharshi Veda Vyasa Jayanti)',
    hindiName: 'गुरु पूर्णिमा (व्यास पूर्णिमा)',
    date: '2026-07-29',
    dayOfWeek: 'Wednesday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'restricted',
    holidayCategory: 'Restricted Holiday',
    description: 'Auspicious day honoring the spiritual master (Guru) and birthday of Krishna Dvaipayana Veda Vyasa, compiler of the four Vedas.',
    rituals: 'Guru Paduka Pujan, offering flowers and Dakshina to teachers and masters, initiation into spiritual mantras.',
    tithiDetails: 'Ashadha Purnima'
  },

  // August 2026
  {
    id: 'independence-day',
    name: 'Independence Day of India (स्वतंत्रता दिवस)',
    hindiName: '80वां स्वतंत्रता दिवस (राष्ट्रीय महापर्व)',
    date: '2026-08-15',
    dayOfWeek: 'Saturday',
    religion: 'national',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Marks India’s freedom from British colonial rule on August 15, 1947. A mandatory national holiday across all states.',
    rituals: 'Flag hoisting at Red Fort Delhi by the Prime Minister, 21-gun salute, kite flying across cities, singing Vande Mataram.',
    states: 'All India (Mandatory National Holiday)'
  },
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan & Sanskrit Diwas',
    hindiName: 'रक्षाबंधन (श्रावणी उपाकर्म एवं संस्कृत दिवस)',
    date: '2026-08-28',
    dayOfWeek: 'Friday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'restricted',
    holidayCategory: 'Restricted Holiday',
    description: 'Sacred knot of protection tied by sisters on brothers’ wrists. Also observed as Shravani Upakarma and World Sanskrit Day.',
    rituals: 'Tying Rakhi, exchanging sweets and vows of mutual protection, Yajnopavita changing ceremony for Brahmins.',
    tithiDetails: 'Shravana Purnima'
  },

  // September 2026
  {
    id: 'krishna-janmashtami-2026',
    name: 'Shri Krishna Janmashtami',
    hindiName: 'श्री कृष्ण जन्माष्टमी (दही हांडी उत्सव)',
    date: '2026-09-04',
    dayOfWeek: 'Friday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Joyous advent of Bhagwan Shri Krishna in Mathura at midnight. Celebrated worldwide with Dahi Handi human pyramids.',
    rituals: 'Bal Gopal Panchamrit Abhishek, swinging Laddu Gopal, fasting until midnight birth, preparing 56 Bhog.',
    muhurat: 'Nishita Janmotsav: 11:58 PM to 12:44 AM',
    tithiDetails: 'Bhadrapada Krishna Ashtami'
  },
  {
    id: 'paryushan-samvatsari',
    name: 'Paryushan Mahaparva & Samvatsari',
    hindiName: 'पर्यूषण महापर्व एवं संवत्सरी (मिच्छामि दुक्कडम्)',
    date: '2026-09-08',
    dayOfWeek: 'Tuesday',
    religion: 'jain',
    isVrat: true,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'The supreme Jain festival of forgiveness, introspection, and soul-purification. Concludes with "Micchami Dukkadam" for universal reconciliation.',
    rituals: 'Pratikraman, fasting, listening to Kalpasutra, seeking unconditional forgiveness from all living beings.',
    states: 'Gujarat, Rajasthan, Maharashtra, MP'
  },
  {
    id: 'ganesh-chaturthi-2026',
    name: 'Ganesh Chaturthi (Vinayaka Chavithi)',
    hindiName: 'गणेश चतुर्थी (महागणपति आगमन)',
    date: '2026-09-14',
    dayOfWeek: 'Monday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: '10-day grand festival welcoming Lord Ganesha, remover of obstacles. Houses and pandals install clay idols.',
    rituals: 'Prana Pratishtha, offering 21 Modaks and Durva grass, chanting Ganapati Atharvashirsha, concluding on Anant Chaturdashi.',
    muhurat: 'Madhyahna Puja: 11:05 AM to 01:34 PM',
    tithiDetails: 'Bhadrapada Shukla Chaturthi',
    states: 'All India'
  },

  // October 2026
  {
    id: 'gandhi-jayanti',
    name: 'Mahatma Gandhi Jayanti (International Day of Non-Violence)',
    hindiName: 'राष्ट्रपिता महात्मा गांधी जयंती (अहिंसा दिवस)',
    date: '2026-10-02',
    dayOfWeek: 'Friday',
    religion: 'national',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Birth anniversary of Mahatma Gandhi, Father of the Nation who led India to freedom through Satyagraha and Non-Violence.',
    rituals: 'Inter-faith prayer service at Raj Ghat New Delhi, singing "Raghupati Raghava Raja Ram", national sanitation drives.',
    states: 'All India (Mandatory National Holiday)'
  },
  {
    id: 'sharad-navratri-ghatasthapana',
    name: 'Sharad Navratri Begins (Ghatasthapana)',
    hindiName: 'शारदीय नवरात्रि प्रारंभ (कलश स्थापना)',
    date: '2026-10-11',
    dayOfWeek: 'Sunday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'none',
    description: 'Nine divine nights invoking the nine cosmic forms of Goddess Durga (Shailaputri to Siddhidatri).',
    rituals: 'Kalash installation, Akhand Jyoti lighting, Durga Saptashati recitation, Garba-Dandiya in Gujarat.',
    muhurat: 'Ghatasthapana Muhurat: 06:21 AM to 10:15 AM',
    tithiDetails: 'Ashwina Shukla Pratipada'
  },
  {
    id: 'maha-ashtami-durga-puja',
    name: 'Maha Ashtami / Durga Ashtami / Kanya Pujan',
    hindiName: 'महाष्टमी (दुर्गाष्टमी एवं कन्या पूजन)',
    date: '2026-10-19',
    dayOfWeek: 'Monday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'Peak of Durga Puja with Sandhi Puja performed at the juncture of Ashtami and Navami. Worship of nine young pre-pubescent girls as forms of the Goddess.',
    rituals: 'Lighting 108 lotus lamps during Sandhi Puja, Kanya Pujan with puri-chana-halwa, Dhunuchi dance.',
    tithiDetails: 'Ashwina Shukla Ashtami',
    states: 'West Bengal, Assam, Tripura, Bihar, Odisha, Jharkhand'
  },
  {
    id: 'vijayadashami-dussehra',
    name: 'Dussehra / Vijayadashami',
    hindiName: 'विजयादशमी / दशहरा (बुराई पर अच्छाई की विजय)',
    date: '2026-10-21',
    dayOfWeek: 'Wednesday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Victory of Lord Rama over the ten-headed demon king Ravana, and Goddess Durga vanquishing the demon Mahishasura.',
    rituals: 'Effigy burning of Ravana, Kumbhakarna, and Meghnad, Shami tree worship, Ayudha Puja (tool consecration).',
    states: 'All India'
  },

  // November 2026
  {
    id: 'diwali-lakshmi-puja-2026',
    name: 'Deepawali & Maha Lakshmi Puja',
    hindiName: 'दीपावली (महालक्ष्मी एवं कुबेर पूजन)',
    date: '2026-11-08',
    dayOfWeek: 'Sunday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'The supreme festival of lights celebrating Lord Rama’s return to Ayodhya and Goddess Lakshmi emerging from the churning of the cosmic ocean.',
    rituals: 'Lighting millions of earthen oil diyas, intricate rangoli, Pradosh Kaal Lakshmi-Kuber pujan, exchanging sweets.',
    muhurat: 'Lakshmi Puja Pradosh Kaal: 05:42 PM to 07:38 PM',
    tithiDetails: 'Kartika Krishna Amavasya',
    states: 'All India'
  },
  {
    id: 'govardhan-puja-gujarati-new-year',
    name: 'Govardhan Puja & Bestu Varas (Gujarati New Year)',
    hindiName: 'गोवर्धन पूजा / બેસતું વર્ષ (ગુજરાતી નૂતન વર્ષ)',
    regionalName: 'Bestu Varas (Gujarat) / Annakoot (North)',
    date: '2026-11-09',
    dayOfWeek: 'Monday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: 'Lord Krishna lifting Mount Govardhan on his little finger to shield Vrindavan from deluge. Also marks the Gujarati New Year (Vikram Samvat 2083).',
    rituals: 'Creating cowdung Govardhan hills, offering 56 different culinary dishes (Annakoot), touching elders’ feet in Gujarat.',
    states: 'Gujarat, UP, Rajasthan, Haryana, Delhi'
  },
  {
    id: 'bhai-dooj',
    name: 'Bhai Dooj (Yama Dwitiya)',
    hindiName: 'भाई दूज (यम द्वितीया)',
    date: '2026-11-10',
    dayOfWeek: 'Tuesday',
    religion: 'hindu',
    isVrat: false,
    holidayType: 'restricted',
    holidayCategory: 'Restricted Holiday',
    description: 'Honors the sacred bond of brothers and sisters, reenacting Yamraj visiting his sister Yamuna who applied tilak for his longevity.',
    rituals: 'Sisters applying vermilion-rice tilak on brothers’ foreheads, performing aarti, preparing festive sweets.',
    tithiDetails: 'Kartika Shukla Dwitiya'
  },
  {
    id: 'chhath-puja-sandhya-arghya',
    name: 'Chhath Puja (Sandhya Arghya & Usha Arghya)',
    hindiName: 'महापर्व छठ पूजा (संध्या एवं उषा अर्घ्य)',
    date: '2026-11-15',
    dayOfWeek: 'Sunday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'bank',
    holidayCategory: 'State Bank Holiday',
    description: '36-hour rigorous waterless fast dedicated to Lord Surya and Chhathi Maiya, standing knee-deep in sacred river waters.',
    rituals: 'Offering Arghya with bamboo soop containing thekua, sugarcane, and seasonal fruits to the setting and rising sun.',
    states: 'Bihar, Jharkhand, UP, Delhi, West Bengal'
  },
  {
    id: 'guru-nanak-jayanti-2026',
    name: 'Sri Guru Nanak Dev Ji Parkash Purab',
    hindiName: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ (ਗੁਰਪੁਰਬ)',
    date: '2026-11-24',
    dayOfWeek: 'Tuesday',
    religion: 'sikh',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Parkash Purab of the founder of Sikhism, Guru Nanak Dev Ji, who preached the oneness of God (Ik Onkar) and selfless service.',
    rituals: '48-hour unbroken Akhand Path, early morning Prabhat Pheris, illumination of Gurudwaras (Deepmala), community langar.',
    tithiDetails: 'Kartika Purnima',
    states: 'All India'
  },

  // December 2026
  {
    id: 'gita-jayanti-mokshada',
    name: 'Gita Jayanti & Mokshada Ekadashi',
    hindiName: 'गीता जयंती एवं मोक्षदा एकादशी',
    date: '2026-12-20',
    dayOfWeek: 'Sunday',
    religion: 'hindu',
    isVrat: true,
    holidayType: 'none',
    description: 'The historic day in Kurukshetra when Bhagwan Shri Krishna imparted the timeless wisdom of the Srimad Bhagavad Gita to warrior Arjuna.',
    rituals: 'Reciting all 18 chapters of Bhagavad Gita, observing Mokshada Ekadashi fast, holding philosophical discourses.',
    tithiDetails: 'Margashirsha Shukla Ekadashi'
  },
  {
    id: 'christmas-day',
    name: 'Christmas Day (बड़ा दिन)',
    hindiName: 'क्रिसमस (प्रभु ईसा मसीह जन्मोत्सव)',
    date: '2026-12-25',
    dayOfWeek: 'Friday',
    religion: 'christian',
    isVrat: false,
    holidayType: 'gazetted',
    holidayCategory: 'Central Gazetted',
    description: 'Joyous celebration of the birth of Jesus Christ, bringer of peace, love, and goodwill to humanity.',
    rituals: 'Midnight Christmas Mass, decorating Christmas trees, singing carols, sharing plum cake and festive feasts.',
    states: 'All India'
  },
  {
    id: 'veer-baal-diwas',
    name: 'Veer Baal Diwas (Chhote Sahibzade Martyrdom)',
    hindiName: 'ਵੀਰ ਬਾਲ ਦਿਵਸ (ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦੇ ਸ਼ਹੀਦੀ)',
    date: '2026-12-26',
    dayOfWeek: 'Saturday',
    religion: 'sikh',
    isVrat: false,
    holidayType: 'observance',
    description: 'National remembrance honoring the supreme martyrdom of Baba Zorawar Singh Ji (age 9) and Baba Fateh Singh Ji (age 7) who were bricked alive for their faith.',
    rituals: 'Kirtan at historic Fatehgarh Sahib Gurudwara, distribution of warm milk to pilgrims, tributes to child valor.',
    states: 'All India'
  }
];

// Helper function to derive regional calendar information for any date
export function getRegionalDateInfo(date: Date, calendarId: CalendarSystemId) {
  const monthIdx = date.getMonth(); // 0-11
  const day = date.getDate();
  const year = date.getFullYear();
  
  // Calculate approximate day of year
  const startOfYear = new Date(year, 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const tithiIndex = Math.floor((dayOfYear * 1.015) % 30);
  const isShukla = tithiIndex < 15;
  const pakshaName = isShukla ? 'Shukla Paksha' : 'Krishna Paksha';
  const pakshaHindi = isShukla ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
  const tithiNum = (tithiIndex % 15) + 1;

  const tithiNames = [
    'Pratipada (प्रतिपदा)', 'Dwitiya (द्वितीया)', 'Tritiya (तृतीया)', 'Chaturthi (चतुर्थी)',
    'Panchami (पंचमी)', 'Shashti (षष्ठी)', 'Saptami (सप्तमी)', 'Ashtami (अष्टमी)',
    'Navami (नवमी)', 'Dashami (दशमी)', 'Ekadashi (एकादशी)', 'Dwadashi (द्वादशी)',
    'Trayodashi (त्रयोदशी)', 'Chaturdashi (चतुर्दशी)', isShukla ? 'Purnima (पूर्णिमा)' : 'Amavasya (अमावस्या)'
  ];

  const tithiString = tithiNames[tithiNum - 1];

  switch (calendarId) {
    case 'vikram-purnimanta': {
      // Purnimanta month offset: Chaitra starts approx mid March
      const purnimantaMonths = [
        'Pausha', 'Magha', 'Phalguna', 'Chaitra', 'Vaishakha', 'Jyeshtha',
        'Ashadha', 'Shravana', 'Bhadrapada', 'Ashwina', 'Kartika', 'Margashirsha'
      ];
      const purnimantaHindi = [
        'पौष', 'माघ', 'फाल्गुन', 'चैत्र', 'वैशाख', 'ज्येष्ठ',
        'आषाढ़', 'श्रावण', 'भाद्रपद', 'आश्विन', 'कार्तिक', 'मार्गशीर्ष'
      ];
      const mName = purnimantaMonths[monthIdx];
      const mHindi = purnimantaHindi[monthIdx];
      return {
        eraYear: '2083',
        monthName: mName,
        monthNative: mHindi,
        displayDate: `${mHindi} ${pakshaHindi} ${tithiString.split(' ')[0]} (वि.सं. 2083)`,
        fullDetails: `Vikram Samvat 2083 · Month: ${mName} (${mHindi}) · ${pakshaName} · ${tithiString}`
      };
    }

    case 'vikram-amanta': {
      // Gujarati month mapping: Kartak is month 1
      const gujaratiMonths = [
        { name: 'Posh', native: 'પોષ' },
        { name: 'Maha', native: 'મહા' },
        { name: 'Fagan', native: 'ફાગણ' },
        { name: 'Chaitra', native: 'ચૈત્ર' },
        { name: 'Vaishakh', native: 'વૈશાખ' },
        { name: 'Jeth', native: 'જેઠ' },
        { name: 'Ashadh', native: 'અષાઢ' },
        { name: 'Shravan', native: 'શ્રાવણ' },
        { name: 'Bhadarvo', native: 'ભાદરવો' },
        { name: 'Aaso', native: 'આસો' },
        { name: 'Kartak', native: 'કારતક' },
        { name: 'Magshar', native: 'માગશર' }
      ];
      const gMonth = gujaratiMonths[monthIdx];
      const gujPaksha = isShukla ? 'સુદ' : 'વદ';
      return {
        eraYear: '2082 - 2083',
        monthName: gMonth.name,
        monthNative: gMonth.native,
        displayDate: `${gMonth.native} ${gujPaksha} ${tithiNum} (વિ.સં. ૨૦૮૩)`,
        fullDetails: `Gujarati Vikram Samvat 2083 · Month: ${gMonth.name} (${gMonth.native}) · ${gujPaksha} ${tithiNum}`
      };
    }

    case 'shaka-samvat': {
      const shakaMonths = [
        { name: 'Pausha', native: 'पौष / పుష్యం' },
        { name: 'Magha', native: 'माघ / మాఘం' },
        { name: 'Phalguna', native: 'फाल्गुन / ఫాల్గుణం' },
        { name: 'Chaitra', native: 'चैत्र / చైత్రం' },
        { name: 'Vaishakha', native: 'वैशाख / వైశాఖం' },
        { name: 'Jyeshtha', native: 'ज्येष्ठ / జ్యేష్ఠం' },
        { name: 'Ashadha', native: 'आषाढ / ఆషాఢం' },
        { name: 'Shravana', native: 'श्रावण / శ్రావణం' },
        { name: 'Bhadrapada', native: 'भाद्रपद / భాద్రపదం' },
        { name: 'Ashwina', native: 'आश्विन / ఆశ్వయుజం' },
        { name: 'Kartika', native: 'कार्तिक / కార్తీకం' },
        { name: 'Margashirsha', native: 'मार्गशीर्ष / మార్గశిరం' }
      ];
      const sMonth = shakaMonths[monthIdx];
      return {
        eraYear: '1948',
        monthName: sMonth.name,
        monthNative: sMonth.native,
        displayDate: `${sMonth.native.split(' ')[0]} ${pakshaHindi} ${tithiNum} (शक १९४८)`,
        fullDetails: `Shaka Samvat 1948 · Month: ${sMonth.name} · ${pakshaName} · ${tithiString}`
      };
    }

    case 'tamil-sauramana': {
      const tamilMonths = [
        { name: 'Thai', native: 'தை' },
        { name: 'Masi', native: 'மாசி' },
        { name: 'Panguni', native: 'பங்குனி' },
        { name: 'Chithirai', native: 'சித்திரை' },
        { name: 'Vaikasi', native: 'வைகாசி' },
        { name: 'Aani', native: 'ஆனி' },
        { name: 'Aadi', native: 'ஆடி' },
        { name: 'Avani', native: 'ஆவணி' },
        { name: 'Purattasi', native: 'புரட்டாசி' },
        { name: 'Aippasi', native: 'ஐப்பசி' },
        { name: 'Karthigai', native: 'கார்த்திகை' },
        { name: 'Margazhi', native: 'மார்கழி' }
      ];
      const tMonth = tamilMonths[monthIdx];
      // Approx Tamil solar day calculation (solar month transit around 14th)
      const tamilDay = day >= 14 ? day - 13 : day + 17;
      return {
        eraYear: 'Parabhava',
        monthName: tMonth.name,
        monthNative: tMonth.native,
        displayDate: `${tMonth.native} ${tamilDay} (பராபவ வருடம்)`,
        fullDetails: `Tamil Solar Calendar · Month: ${tMonth.name} (${tMonth.native}) Day ${tamilDay} · ${pakshaName}`
      };
    }

    case 'bengali-panjika': {
      const bengaliMonths = [
        { name: 'Poush', native: 'পৌষ' },
        { name: 'Magh', native: 'মাঘ' },
        { name: 'Falgun', native: 'ফাল্গুন' },
        { name: 'Choitro', native: 'চৈত্র' },
        { name: 'Boishakh', native: 'বৈশাখ' },
        { name: 'Joishtho', native: 'জ্যৈষ্ঠ' },
        { name: 'Asharh', native: 'আষাঢ়' },
        { name: 'Srabon', native: 'শ্রাবণ' },
        { name: 'Bhadro', native: 'ভাদ্র' },
        { name: 'Ashwin', native: 'আশ্বিন' },
        { name: 'Kartik', native: 'কার্তিক' },
        { name: 'Ogrohayon', native: 'অগ্রহায়ণ' }
      ];
      const bMonth = bengaliMonths[monthIdx];
      const bDay = day >= 15 ? day - 14 : day + 16;
      return {
        eraYear: '1433',
        monthName: bMonth.name,
        monthNative: bMonth.native,
        displayDate: `${bMonth.native} ${bDay} (১৪৩৩ বঙ্গাব্দ)`,
        fullDetails: `Bangabda 1433 · Month: ${bMonth.name} (${bMonth.native}) Day ${bDay} · Tithi: ${tithiString.split(' ')[0]}`
      };
    }

    case 'malayalam-kollam': {
      const malayalamMonths = [
        { name: 'Makaram', native: 'മകരം' },
        { name: 'Kumbham', native: 'കുംഭം' },
        { name: 'Meenam', native: 'മീനം' },
        { name: 'Medam', native: 'മേടം' },
        { name: 'Edavam', native: 'ഇടവം' },
        { name: 'Mithunam', native: 'മിഥുനം' },
        { name: 'Karkidakam', native: 'കർക്കടകം' },
        { name: 'Chingam', native: 'ചിങ്ങം' },
        { name: 'Kanni', native: 'കന്നി' },
        { name: 'Thulam', native: 'തുലാം' },
        { name: 'Vrischikam', native: 'വൃശ്ചികം' },
        { name: 'Dhanu', native: 'ധനു' }
      ];
      const mMonth = malayalamMonths[monthIdx];
      const mDay = day >= 16 ? day - 15 : day + 15;
      return {
        eraYear: '1202 ME',
        monthName: mMonth.name,
        monthNative: mMonth.native,
        displayDate: `${mMonth.native} ${mDay} (കൊല്ലവർഷം 1202)`,
        fullDetails: `Kollam Era 1202 ME · Month: ${mMonth.name} (${mMonth.native}) Day ${mDay}`
      };
    }

    case 'nanakshahi': {
      const nanakshahiMonths = [
        { name: 'Magh', native: 'ਮਾਘ' },
        { name: 'Phagun', native: 'ਫੱਗਣ' },
        { name: 'Chet', native: 'ਚੇਤ' },
        { name: 'Vaisakh', native: 'ਵੈਸਾਖ' },
        { name: 'Jeth', native: 'ਜੇਠ' },
        { name: 'Harh', native: 'ਹਾੜ੍ਹ' },
        { name: 'Sawan', native: 'ਸਾਵਣ' },
        { name: 'Bhadon', native: 'ਭਾਦੋਂ' },
        { name: 'Assu', native: 'ਅੱਸੂ' },
        { name: 'Katak', native: 'ਕੱਤਕ' },
        { name: 'Maghar', native: 'ਮੱਘਰ' },
        { name: 'Poh', native: 'ਪੋਹ' }
      ];
      const nMonth = nanakshahiMonths[monthIdx];
      const nDay = day >= 14 ? day - 13 : day + 17;
      return {
        eraYear: '558 NS',
        monthName: nMonth.name,
        monthNative: nMonth.native,
        displayDate: `${nMonth.native} ${nDay} (੫੫੮ ਨਾਨਕਸ਼ਾਹੀ)`,
        fullDetails: `Nanakshahi 558 NS · Month: ${nMonth.name} (${nMonth.native}) Day ${nDay}`
      };
    }

    case 'jain-vira-nirvana': {
      const jainMonths = [
        'Pausha', 'Magha', 'Phalguna', 'Chaitra', 'Vaishakha', 'Jyeshtha',
        'Ashadha', 'Shravana', 'Bhadrapada', 'Ashwina', 'Kartika', 'Margashirsha'
      ];
      const jainNative = [
        'पौष', 'माघ', 'फाल्गुन', 'चैत्र', 'वैशाख', 'ज्येष्ठ',
        'आषाढ़', 'श्रावण', 'भाद्रपद', 'आश्विन', 'कार्तिक', 'मार्गशीर्ष'
      ];
      const jName = jainMonths[monthIdx];
      const jNative = jainNative[monthIdx];
      return {
        eraYear: '2553 VNS',
        monthName: jName,
        monthNative: jNative,
        displayDate: `${jNative} ${pakshaHindi} ${tithiString.split(' ')[0]} (VNS 2553)`,
        fullDetails: `Vira Nirvana Samvat 2553 · Month: ${jName} (${jNative}) · ${pakshaName} · ${tithiString}`
      };
    }

    case 'gregorian-india':
    default: {
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return {
        eraYear: `${year} CE`,
        monthName: monthNames[monthIdx],
        monthNative: monthNames[monthIdx],
        displayDate: `${day} ${monthNames[monthIdx]} ${year}`,
        fullDetails: `Civil Calendar · ${day} ${monthNames[monthIdx]} ${year} · Tithi: ${tithiString}`
      };
    }
  }
}
