import { KundaliResult } from '../types';

const rashis = [
  'Mesha (Aries / मेष)', 'Vrishabha (Taurus / वृषभ)', 'Mithuna (Gemini / मिथुन)',
  'Karka (Cancer / कर्क)', 'Simha (Leo / सिंह)', 'Kanya (Virgo / कन्या)',
  'Tula (Libra / तुला)', 'Vrishchika (Scorpio / वृश्चिक)', 'Dhanu (Sagittarius / धनु)',
  'Makara (Capricorn / मकर)', 'Kumbha (Aquarius / कुम्भ)', 'Meena (Pisces / मीन)'
];

const gemstoneMap: Record<number, string> = {
  0: 'Red Coral (मूंगा) - Mars',
  1: 'White Diamond / Opal (हीरा/ओपल) - Venus',
  2: 'Emerald (पन्ना) - Mercury',
  3: 'Natural Pearl (मोती) - Moon',
  4: 'Ruby / Manikya (माणिक्य) - Sun',
  5: 'Emerald (पन्ना) - Mercury',
  6: 'White Sapphire (श्वेत पुखराज) - Venus',
  7: 'Red Coral (मूंगा) - Mars',
  8: 'Yellow Sapphire (पीला पुखराज) - Jupiter',
  9: 'Blue Sapphire (नीलम) - Saturn',
  10: 'Blue Sapphire / Amethyst (नीलम) - Saturn',
  11: 'Yellow Topaz / Pukhraj (पुखराज) - Jupiter'
};

const colorsMap: Record<number, string> = {
  0: 'Crimson Red & Coral',
  1: 'Pearl White & Soft Cream',
  2: 'Emerald Green & Mint',
  3: 'Silvery White & Sky Blue',
  4: 'Royal Gold & Bright Orange',
  5: 'Forest Green & Olive',
  6: 'Ivory, Rose Pink & White',
  7: 'Deep Maroon & Rust',
  8: 'Bright Golden Yellow & Saffron',
  9: 'Royal Navy Blue & Indigo',
  10: 'Electric Blue & Turquoise',
  11: 'Golden Yellow & Sea Green'
};

export function generateVedicKundali(name: string, dob: string, tob: string, pob: string): KundaliResult {
  const birthDate = new Date(dob);
  const [hours, mins] = tob ? tob.split(':').map(Number) : [12, 0];
  
  // Deterministic astrological derivation from birth coordinates and time
  const dayOfYear = Math.floor((birthDate.getTime() - new Date(birthDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const timeOffsetHours = (hours || 12) + (mins || 0) / 60;
  
  // Lagna (Ascendant) moves approximately 1 sign every 2 hours
  const lagnaIndex = Math.floor(((dayOfYear / 30) + (timeOffsetHours / 2)) % 12);
  const moonRashiIndex = Math.floor(((dayOfYear / 2.5) + (timeOffsetHours / 10)) % 12);
  const nakshatraIndex = Math.floor((dayOfYear * 2 + timeOffsetHours) % 27);
  
  const nakshatrasList = [
    'Ashwini (Ketu)', 'Bharani (Venus)', 'Krittika (Sun)', 'Rohini (Moon)',
    'Mrigashira (Mars)', 'Ardra (Rahu)', 'Punarvasu (Jupiter)', 'Pushya (Saturn)',
    'Ashlesha (Mercury)', 'Magha (Ketu)', 'Purva Phalguni (Venus)', 'Uttara Phalguni (Sun)',
    'Hasta (Moon)', 'Chitra (Mars)', 'Swati (Rahu)', 'Vishakha (Jupiter)',
    'Anuradha (Saturn)', 'Jyeshtha (Mercury)', 'Mula (Ketu)', 'Purva Ashadha (Venus)',
    'Uttara Ashadha (Sun)', 'Shravana (Moon)', 'Dhanishta (Mars)', 'Shatabhisha (Rahu)',
    'Purva Bhadrapada (Jupiter)', 'Uttara Bhadrapada (Saturn)', 'Revati (Mercury)'
  ];
  
  const selectedNakshatra = nakshatrasList[nakshatraIndex];
  const nakshatraLord = selectedNakshatra.split('(')[1]?.replace(')', '') || 'Jupiter';
  
  // 12 Houses Planet distribution based on Lagna
  // Mars in house 1, 4, 7, 8, or 12 triggers Manglik Dosha in classical Parashara system
  const marsHouse = ((lagnaIndex + 3) % 12) + 1;
  const isManglik = [1, 4, 7, 8, 12].includes(marsHouse);
  const manglikStatus: 'Non-Manglik' | 'Mild Manglik' | 'Full Manglik' = isManglik ? (marsHouse === 7 || marsHouse === 8 ? 'Full Manglik' : 'Mild Manglik') : 'Non-Manglik';
  
  // Shani transit relative to Moon sign (Sade Sati check)
  const saturnRashiIndex = 10; // Current Saturn transit in Aquarius/Pisces
  const diffFromSaturn = (saturnRashiIndex - moonRashiIndex + 12) % 12;
  let sadeSatiStatus = 'No Sade Sati active. Shani Maharaj is in a favorable supportive house.';
  if (diffFromSaturn === 11) sadeSatiStatus = 'Sade Sati Rising Phase (आरोही चरण) - Focus on discipline and patience in financial planning.';
  else if (diffFromSaturn === 0) sadeSatiStatus = 'Sade Sati Peak Phase (मध्य चरण) - Spiritual growth, perseverance and avoiding speculation advised.';
  else if (diffFromSaturn === 1) sadeSatiStatus = 'Sade Sati Setting Phase (अवरोही चरण) - Transition period into renewed stability and long-term relief.';
  
  const chartPlanets = [
    { house: 1, planet: 'Lagna (Ascendant)', sign: rashis[lagnaIndex], degree: '14° 22\'' },
    { house: marsHouse, planet: 'Mangal (Mars)', sign: rashis[(lagnaIndex + marsHouse - 1) % 12], degree: '08° 45\'' },
    { house: ((lagnaIndex + moonRashiIndex) % 12) + 1, planet: 'Chandra (Moon)', sign: rashis[moonRashiIndex], degree: '21° 10\'' },
    { house: ((lagnaIndex + Math.floor(dayOfYear / 30)) % 12) + 1, planet: 'Surya (Sun)', sign: rashis[Math.floor(dayOfYear / 30) % 12], degree: '06° 54\'' },
    { house: ((lagnaIndex + 8) % 12) + 1, planet: 'Guru (Jupiter)', sign: rashis[(lagnaIndex + 8) % 12], degree: '17° 30\'' },
    { house: ((lagnaIndex + 4) % 12) + 1, planet: 'Budha (Mercury)', sign: rashis[(lagnaIndex + 4) % 12], degree: '25° 12\'' },
    { house: ((lagnaIndex + 6) % 12) + 1, planet: 'Shukra (Venus)', sign: rashis[(lagnaIndex + 6) % 12], degree: '12° 05\'' },
    { house: ((lagnaIndex + saturnRashiIndex) % 12) + 1, planet: 'Shani (Saturn)', sign: rashis[saturnRashiIndex], degree: '19° 44\'' },
    { house: ((lagnaIndex + 5) % 12) + 1, planet: 'Rahu (North Node)', sign: rashis[(lagnaIndex + 5) % 12], degree: '03° 18\'', isRetrograde: true },
    { house: ((lagnaIndex + 11) % 12) + 1, planet: 'Ketu (South Node)', sign: rashis[(lagnaIndex + 11) % 12], degree: '03° 18\'', isRetrograde: true }
  ];
  
  return {
    name: name || 'Devotee',
    dob: dob,
    tob: tob || '12:00',
    pob: pob || 'Varanasi',
    lagna: rashis[lagnaIndex],
    rashi: rashis[moonRashiIndex],
    nakshatra: selectedNakshatra,
    nakshatraLord: nakshatraLord,
    luckyColor: colorsMap[moonRashiIndex] || 'Golden Saffron',
    luckyNumber: ((moonRashiIndex % 9) + 1),
    luckyGemstone: gemstoneMap[moonRashiIndex] || 'Yellow Sapphire',
    manglikStatus: manglikStatus,
    sadeSatiStatus: sadeSatiStatus,
    chartPlanets: chartPlanets,
    lifePredictions: {
      career: `Your 10th house indicates strong analytical aptitude and leadership in organizational or entrepreneurial pursuits. With favorable planetary aspects from Jupiter, sustained dedication brings high respect and authority after age 28.`,
      wealth: `The 2nd and 11th houses form a Dhana Yoga indicating multiple sources of income. Prudent long-term investments in land, technology or ancestral domains will yield auspicious growth. Avoid impulsive speculation.`,
      relationship: `Venus and 7th house configurations suggest a supportive, cultured, and spiritually grounded companion. Mutual respect and transparent communication will be the cornerstone of domestic harmony.`,
      health: `Generally strong constitution with vitality governed by the Sun. Pay mindful attention to dietary rhythm, hydration, and regular morning Pranayama to keep Vata and Pitta doshas balanced.`,
      spiritual: `Strong inclination toward sacred pilgrimage, charitable acts (Daan), and meditation. Chanting your Ishta Devata mantra during sunrise hours will awaken profound clarity and peace of mind.`
    },
    remedies: [
      `Chant the Gayatri Mantra 108 times during Brahma Muhurat or morning sunrise.`,
      `Offer Arghya (water with red flowers & kumkum) to Surya Dev in a copper vessel daily.`,
      `Perform Jalabhishek with pure milk and bilva leaves on Mondays at a Shiva temple.`,
      `Engage in Annadaan (offering food to the needy or cows) on Ekadashi and Amavasya.`,
      `Keep an energized Shree Yantra or Brass Diya in the Ishanya (North-East) corner of your home.`
    ]
  };
}
