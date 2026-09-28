export interface MuhuratDetails {
  id: string;
  title: string;
  hindiTitle: string;
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
  };
  shortDescription: string;
  significance: string;
  rules: string[];
  bestNakshatras: string[];
  bestLagnas: string[];
  avoidPeriods: string[];
  upcomingDates: {
    date: string;
    day: string;
    tithi: string;
    nakshatra: string;
    shubhTime: string;
    specialNote?: string;
  }[];
}

export const allMuhuratGuides: Record<string, MuhuratDetails> = {
  vivah: {
    id: 'vivah',
    title: 'Vivah Muhurat (Wedding Auspicious Dates)',
    hindiTitle: 'शुभ विवाह मुहूर्त (पाणिग्रहण संस्कार)',
    iconName: 'rings',
    colorScheme: {
      bg: 'bg-emerald-50/70 hover:bg-emerald-50',
      border: 'border-emerald-200/80',
      text: 'text-emerald-950',
      iconBg: 'bg-emerald-800 text-white'
    },
    shortDescription: 'Shastric auspicious dates, Lagnas and Nakshatras for sacred Hindu weddings.',
    significance: 'विवाह 16 संस्कारों में सबसे महत्वपूर्ण संस्कार है। शुभ लग्न व त्रिबल शुद्धि (सूर्य, चन्द्र व गुरु का बल) देखकर किया गया पाणिग्रहण संस्कार दाम्पत्य जीवन में सुख, समृद्धि और अखंड सौभाग्य प्रदान करता है।',
    rules: [
      'Chaturmas Avoidance: देवशयनी एकादशी से देवउठनी एकादशी तक भगवान विष्णु के योगनिद्रा में होने के कारण विवाह वर्जित रहता है।',
      'Guru-Shukra Tara Asta: जब गुरु या शुक्र अस्त होते हैं, तब विवाह संस्कार नहीं किया जाता।',
      'Tribala Shuddhi: वर के लिए सूर्य व गुरु का बल तथा वधू के लिए गुरु व चंद्र का बल शुभ होना अनिवार्य है।',
      'Kanya-Vrishabha-Mithuna-Kanya-Dhanu-Kumbha Lagna: स्थिर व द्विस्वभाव लग्न को विवाह हेतु सर्वश्रेष्ठ माना गया है।'
    ],
    bestNakshatras: [
      'Rohini (रोहिणी)', 
      'Mrigashira (मृगशिरा)', 
      'Magha (मघा)', 
      'Uttara Phalguni (उत्तराफाल्गुनी)', 
      'Hasta (हस्त)', 
      'Swati (स्वाति)', 
      'Anuradha (अनुराधा)', 
      'Mula (मूल)', 
      'Uttara Ashadha (उत्तराषाढ़ा)', 
      'Uttara Bhadrapada (उत्तराभाद्रपद)', 
      'Revati (रेवती)'
    ],
    bestLagnas: ['Vrishabha (वृषभ)', 'Mithuna (मिथुन)', 'Kanya (कन्या)', 'Vrishchika (वृश्चिक)', 'Dhanu (धनु)', 'Kumbha (कुम्भ)'],
    avoidPeriods: ['Chaturmas (चातुर्मास)', 'Holashtak (होलाष्टक)', 'Pitra Paksha (श्राद्ध पक्ष)', 'Adhik Maas (मलमास/पुरुषोत्तम मास)', 'Surya Sankranti Day'],
    upcomingDates: [
      { date: '21 Nov 2026', day: 'Saturday', tithi: 'Shukla Dwadashi', nakshatra: 'Revati', shubhTime: '07:15 PM to 11:45 PM', specialNote: 'Tulsi Vivah Parv Shubh Lagna' },
      { date: '24 Nov 2026', day: 'Tuesday', tithi: 'Purnima', nakshatra: 'Krittika / Rohini', shubhTime: '09:30 PM to 02:40 AM', specialNote: 'Kartik Purnima Mahurat' },
      { date: '25 Nov 2026', day: 'Wednesday', tithi: 'Krishna Pratipada', nakshatra: 'Rohini', shubhTime: '07:05 PM to 01:15 AM', specialNote: 'Amrit Siddhi Yoga' },
      { date: '02 Dec 2026', day: 'Wednesday', tithi: 'Krishna Navami', nakshatra: 'Uttara Phalguni', shubhTime: '06:40 PM to 12:20 AM', specialNote: 'Godhuli Muhurat Special' },
      { date: '07 Dec 2026', day: 'Monday', tithi: 'Krishna Trayodashi', nakshatra: 'Anuradha', shubhTime: '08:10 PM to 03:00 AM', specialNote: 'Somwar Shubh Vivah' },
      { date: '11 Dec 2026', day: 'Friday', tithi: 'Shukla Dwitiya', nakshatra: 'Mula', shubhTime: '07:00 PM to 11:30 PM', specialNote: 'Shukra-Guru Samyukt' }
    ]
  },

  grihapravesh: {
    id: 'grihapravesh',
    title: 'Griha Pravesh (Housewarming Auspicious Dates)',
    hindiTitle: 'शुभ गृह प्रवेश मुहूर्त एवं वास्तु पूजा',
    iconName: 'home',
    colorScheme: {
      bg: 'bg-orange-50/70 hover:bg-orange-50',
      border: 'border-orange-200/80',
      text: 'text-orange-950',
      iconBg: 'bg-amber-800 text-white'
    },
    shortDescription: 'Auspicious timings for entering a new, renovated or rented house with Vastu Shanti.',
    significance: 'गृह प्रवेश शुभ मुहूर्त में करने से घर में सकारात्मक ऊर्जा, सुख, समृद्धि, शांति और वास्तु पुरुष का आशीर्वाद बना रहता है। तीन प्रकार के गृह प्रवेश होते हैं: अपूर्व (नया घर), सपूर्व (प्रवास पश्चात पुनः प्रवेश) और द्वन्द्व (जीर्णोद्धार के बाद प्रवेश)।',
    rules: [
      'Shukla Paksha is preferred: शुक्ल पक्ष की द्वितीया, तृतीया, पंचमी, सप्तमी, दशमी, एकादशी और त्रयोदशी सर्वश्रेष्ठ तिथियां हैं।',
      'Avoid Amavasya and Rikta Tithis: अमावस्या तथा रिक्ता तिथियों (चतुर्थी, नवमी, चतुर्दशी) को गृह प्रवेश न करें।',
      'Sun Position: जब सूर्य उत्तरायण में मकर, कुम्भ, मीन, मेष, वृष या मिथुन राशि में हो तब गृह प्रवेश अति शुभ होता है।',
      'Vastu Shanti and Navagraha Havan: प्रवेश से पूर्व कलश स्थापना, वास्तु पूजन एवं नवग्रह होम अवश्य करें।'
    ],
    bestNakshatras: ['Rohini (रोहिणी)', 'Mrigashira (मृगशिरा)', 'Pushya (पुष्य)', 'Uttara Phalguni (उत्तराफाल्गुनी)', 'Hasta (हस्त)', 'Chitra (चित्रा)', 'Anuradha (अनुराधा)', 'Uttara Ashadha (उत्तराषाढ़ा)', 'Uttara Bhadrapada (उत्तराभाद्रपद)', 'Revati (रेवती)'],
    bestLagnas: ['Taurus (वृषभ)', 'Leo (सिंह)', 'Scorpio (वृश्चिक)', 'Aquarius (कुम्भ) - स्थिर लग्न'],
    avoidPeriods: ['Tuesday (मंगलवार वर्जित)', 'Rahu Kaal', 'Bhadra Period (भद्रा काल)', 'Shraddha Paksha', 'Holashtak'],
    upcomingDates: [
      { date: '18 Nov 2026', day: 'Wednesday', tithi: 'Shukla Navami', nakshatra: 'Shatabhisha', shubhTime: '06:50 AM to 10:30 AM', specialNote: 'Akshaya Navami Shubh Pravesh' },
      { date: '21 Nov 2026', day: 'Saturday', tithi: 'Shukla Dwadashi', nakshatra: 'Revati', shubhTime: '08:15 AM to 12:15 PM', specialNote: 'Tulsi Vivah Parv' },
      { date: '27 Nov 2026', day: 'Friday', tithi: 'Krishna Tritiya', nakshatra: 'Punarvasu', shubhTime: '07:10 AM to 11:20 AM', specialNote: 'Guru Pushya Samanvaya' },
      { date: '04 Dec 2026', day: 'Friday', tithi: 'Krishna Ekadashi', nakshatra: 'Chitra', shubhTime: '06:45 AM to 10:15 AM', specialNote: 'Utpanna Ekadashi Vastu Puja' },
      { date: '10 Dec 2026', day: 'Thursday', tithi: 'Shukla Pratipada', nakshatra: 'Mula', shubhTime: '08:30 AM to 01:00 PM', specialNote: 'Guruwar Shubh Choghadiya' }
    ]
  },

  vehicle: {
    id: 'vehicle',
    title: 'Vehicle Muhurat (Car & Bike Purchase Timings)',
    hindiTitle: 'वाहन खरीद शुभ मुहूर्त (कार, बाइक व व्यावसायिक वाहन)',
    iconName: 'car',
    colorScheme: {
      bg: 'bg-blue-50/70 hover:bg-blue-50',
      border: 'border-blue-200/80',
      text: 'text-blue-950',
      iconBg: 'bg-blue-800 text-white'
    },
    shortDescription: 'Sacred planetary timings to purchase new vehicles for longevity, safety and prosperity.',
    significance: 'वाहन धातु व अग्नि-तत्व का सम्मिश्रण है। शुभ मुहूर्त, चर नक्षत्र और अमृत/शुभ चौघड़िया में वाहन खरीदने से दुर्घटनाओं से सुरक्षा, यात्रा में सफलता और सुखद अनुभव प्राप्त होता है।',
    rules: [
      'Preferred Days: सोमवार, बुधवार, गुरुवार, शुक्रवार व रविवार को वाहन क्रय हेतु अत्यंत शुभ माना गया है।',
      'Strict Avoidance of Rahu Kaal: राहुकाल के समय वाहन की चाबी या डिलीवरी बिल्कुल न लें।',
      'Char Nakshatras: स्वाति, पुनर्वसु, श्रवण, धनिष्ठा, शतभिषा जैसे चर नक्षत्र वाहन गति हेतु श्रेष्ठ होते हैं।',
      'Vehicle Puja: वाहन प्राप्ति के तुरंत बाद किसी सिद्ध मन्दिर या पुरोहित से वाहन पूजन (स्वास्तिक, नींबू-मिर्च, नारियल) अवश्य करवाएं।'
    ],
    bestNakshatras: ['Ashwini (अश्विनी)', 'Rohini (रोहिणी)', 'Punarvasu (पुनर्वसु)', 'Pushya (पुष्य)', 'Hasta (हस्त)', 'Swati (स्वाति)', 'Shravana (श्रवण)', 'Dhanishta (धनिष्ठा)'],
    bestLagnas: ['Aries (मेष)', 'Mithuna (मिथुन)', 'Kanya (कन्या)', 'Dhanu (धनु)'],
    avoidPeriods: ['Tuesday (मंगलवार को लोहे का क्रय वर्जित)', 'Amavasya', 'Rahu Kaal', 'Bhadra Vishti Karana'],
    upcomingDates: [
      { date: '25 Sep 2026', day: 'Friday', tithi: 'Shukla Chaturdashi', nakshatra: 'Purva Bhadrapada', shubhTime: '06:29 AM - 10:59 AM (Amrit & Shubh)', specialNote: 'Anant Chaturdashi Shubh Delivery' },
      { date: '11 Oct 2026', day: 'Sunday', tithi: 'Shukla Pratipada', nakshatra: 'Chitra', shubhTime: '07:30 AM to 12:30 PM', specialNote: 'Navratri Day 1 Ghatasthapana' },
      { date: '19 Oct 2026', day: 'Monday', tithi: 'Shukla Navami', nakshatra: 'Uttara Ashadha', shubhTime: '08:00 AM to 02:00 PM', specialNote: 'Maha Navami / Ayudha Puja (Vehicle Blessing)' },
      { date: '20 Oct 2026', day: 'Tuesday', tithi: 'Shukla Dashami', nakshatra: 'Shravana', shubhTime: '02:05 PM to 05:30 PM', specialNote: 'Vijayadashami (Best for Machines/Vehicles)' },
      { date: '06 Nov 2026', day: 'Friday', tithi: 'Krishna Trayodashi', nakshatra: 'Hasta', shubhTime: '11:15 AM to 04:30 PM', specialNote: 'Dhanteras Mahamuhurat (Gold & Vehicles)' }
    ]
  },

  business: {
    id: 'business',
    title: 'Business Muhurat (Shop, Office & Startup Opening)',
    hindiTitle: 'व्यापार, दुकान एवं नवीन प्रतिष्ठान उद्घाटन मुहूर्त',
    iconName: 'briefcase',
    colorScheme: {
      bg: 'bg-indigo-50/70 hover:bg-indigo-50',
      border: 'border-indigo-200/80',
      text: 'text-indigo-950',
      iconBg: 'bg-indigo-800 text-white'
    },
    shortDescription: 'Auspicious Lagnas and Choghadiyas for opening new shops, signing deals and business growth.',
    significance: 'व्यापार में लाभ, ग्राहकों की वृद्धि और स्थायी समृद्धि के लिए स्थिर लग्न (वृषभ, सिंह, वृश्चिक, कुम्भ) तथा लाभ व अमृत चौघड़िया में प्रतिष्ठान का उद्घाटन करना शास्त्रों में परम कल्याणकारी माना गया है।',
    rules: [
      'Fixed Lagna Preference: वृषभ, सिंह या कुम्भ जैसे स्थिर लग्न में व्यापार शुरू करने से व्यवसाय में स्थायित्व रहता है।',
      'Labh & Amrit Choghadiya: उद्घाटन या रिबन काटने का समय सदैव लाभ या अमृत चौघड़िया में रखें।',
      'Budha-Guru Blessing: बुधवार (व्यापार कारक बुध) तथा गुरुवार (धन कारक गुरु) नए अनुबंधों हेतु अति शुभ हैं।',
      'Lakshmi-Ganesh Puja: प्रथम दिन गणेश जी व महालक्ष्मी का षोडशोपचार पूजन कर बही-खाते या लैपटॉप पर ॐ व स्वास्तिक अंकित करें।'
    ],
    bestNakshatras: ['Pushya (पुष्य)', 'Ashwini (अश्विनी)', 'Rohini (रोहिणी)', 'Hasta (हस्त)', 'Chitra (चित्रा)', 'Anuradha (अनुराधा)', 'Revati (रेवती)'],
    bestLagnas: ['Taurus (वृषभ)', 'Leo (सिंह)', 'Scorpio (वृश्चिक)', 'Aquarius (कुम्भ)'],
    avoidPeriods: ['Rikta Tithis (4, 9, 14)', 'Rahu Kaal', 'Bhadra Period', 'Solar/Lunar Eclipse days'],
    upcomingDates: [
      { date: '25 Sep 2026', day: 'Friday', tithi: 'Shukla Chaturdashi', nakshatra: 'Purva Bhadrapada', shubhTime: '06:29 AM - 09:30 AM (Amrit & Shubh)', specialNote: 'Anant Chaturdashi Auspicious Start' },
      { date: '11 Oct 2026', day: 'Sunday', tithi: 'Shukla Pratipada', nakshatra: 'Chitra', shubhTime: '09:00 AM to 12:00 PM', specialNote: 'Navratri Kalash Sthapana & New Ventures' },
      { date: '20 Oct 2026', day: 'Tuesday', tithi: 'Shukla Dashami', nakshatra: 'Shravana', shubhTime: '02:05 PM to 03:45 PM', specialNote: 'Vijayadashami (Triumph in Commerce)' },
      { date: '06 Nov 2026', day: 'Friday', tithi: 'Krishna Trayodashi', nakshatra: 'Hasta', shubhTime: '09:30 AM to 01:30 PM', specialNote: 'Dhanteras Business Inception & Accounts' },
      { date: '09 Nov 2026', day: 'Monday', tithi: 'Shukla Pratipada', nakshatra: 'Vishakha', shubhTime: '08:15 AM to 11:45 AM', specialNote: 'Bestu Varas / New Financial Year (Chopda Pujan)' }
    ]
  },

  festivals: {
    id: 'festivals',
    title: 'Yearly Festivals & Fasting Vrat Calendar',
    hindiTitle: 'सनातन हिन्दू पर्व, व्रत एवं महोत्सव सूची',
    iconName: 'flame',
    colorScheme: {
      bg: 'bg-rose-50/70 hover:bg-rose-50',
      border: 'border-rose-200/80',
      text: 'text-rose-950',
      iconBg: 'bg-rose-800 text-white'
    },
    shortDescription: 'Authentic pan-Indian religious calendar of major Hindu festivals, Jayantis and Vrats.',
    significance: 'हिन्दू धर्म में प्रत्येक पर्व प्रकृति, ऋतु परिवर्तन, ग्रहों की गति और ईश्वर के प्रति कृतज्ञता प्रकट करने का पावन माध्यम है। उपवास व पूजन से शरीर व मन की शुद्धि होती है।',
    rules: [
      'Purnima & Ekadashi Vrats: हर माह के दोनों पक्षों की एकादशी तथा पूर्णिमा व्रत आत्म-कल्याणकारी हैं।',
      'Pradosh Vrat: त्रयोदशी तिथि पर सायंकाल शिव आराधना समस्त कष्टों का निवारण करती है।',
      'Sankashti Chaturthi: कृष्ण पक्ष की चतुर्थी को चंद्र दर्शन कर व्रत पारण किया जाता है।'
    ],
    bestNakshatras: ['All auspicious lunar days'],
    bestLagnas: ['All'],
    avoidPeriods: ['None (Devotional prayer is always beneficial)'],
    upcomingDates: [
      { date: '25 Sep 2026', day: 'Friday', tithi: 'Shukla Chaturdashi', nakshatra: 'Purva Bhadrapada', shubhTime: 'All Day', specialNote: 'Anant Chaturdashi & Ganesh Visarjan' },
      { date: '26 Sep 2026', day: 'Saturday', tithi: 'Bhadrapada Purnima', nakshatra: 'Uttara Bhadrapada', shubhTime: 'All Day', specialNote: 'Satyanarayan Vrat & Pitru Paksha Begins' },
      { date: '10 Oct 2026', day: 'Saturday', tithi: 'Sarva Pitru Amavasya', nakshatra: 'Hasta', shubhTime: '11:30 AM - 02:30 PM', specialNote: 'Mahalaya Pitru Paksha Culmination' },
      { date: '11 Oct 2026', day: 'Sunday', tithi: 'Navratri Day 1', nakshatra: 'Chitra', shubhTime: '06:21 AM - 10:14 AM', specialNote: 'Sharadiya Navratri Ghatasthapana' },
      { date: '20 Oct 2026', day: 'Tuesday', tithi: 'Vijayadashami', nakshatra: 'Shravana', shubhTime: '02:05 PM - 02:52 PM', specialNote: 'Dussehra / Ravan Dahan' },
      { date: '06 Nov 2026', day: 'Friday', tithi: 'Dhanteras', nakshatra: 'Hasta', shubhTime: '06:00 PM - 08:15 PM', specialNote: 'Dhanvantari Jayanti & Kuber Puja' },
      { date: '08 Nov 2026', day: 'Sunday', tithi: 'Diwali', nakshatra: 'Swati', shubhTime: '05:45 PM - 07:42 PM', specialNote: 'Deepavali Mahalakshmi Pujan' },
      { date: '09 Nov 2026', day: 'Monday', tithi: 'Govardhan Puja', nakshatra: 'Vishakha', shubhTime: 'Morning', specialNote: 'Annakut & Gujarati New Year' },
      { date: '14 Nov 2026', day: 'Saturday', tithi: 'Chhath Puja', nakshatra: 'Uttara Ashadha', shubhTime: 'Sunset Arghya', specialNote: 'Surya Shashthi Sandhya Arghya' },
      { date: '20 Nov 2026', day: 'Friday', tithi: 'Dev Uthani Ekadashi', nakshatra: 'Uttara Bhadrapada', shubhTime: 'All Day', specialNote: 'Tulsi Vivah & Wedding Season Begins' }
    ]
  }
};
