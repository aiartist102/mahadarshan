import { FestivalDefinition } from './festivalDatabase';

export const drikCollection2FestivalsList: FestivalDefinition[] = [
  {
    id: 'baisakhi',
    canonical_name: 'Baisakhi (Vaisakhi & Mesha Sankranti)',
    hindi_name: 'बैसाखी (वैशाखी, मेष संक्रांति व सौर नववर्ष)',
    gujarati_name: 'બૈસાખી (મેષ સંક્રાંતિ)',
    alternate_names: ['Vaisakhi', 'Mesha Sankranti', 'Khalsa Sirjana Diwas'],
    regional_names: {
      pa: 'ਵਿਸਾਖੀ (Vaisakhi)',
      hi: 'बैसाखी',
      gu: 'બૈસાખી',
      bn: 'পয়লা বৈশাখ (Pohela Boishakh)',
      ta: 'புத்தாண்டு (Puthandu)',
      ml: 'വിഷു (Vishu)'
    },
    sanskrit_name: 'मेषसंक्रान्तिः / वैशाखोत्सवः',
    transliteration: 'Baisākhī',
    slug: 'baisakhi',
    festival_type: 'harvest',
    religion: 'hindu',
    sect: 'all',
    deity: 'Surya Bhagwan & Khalsa Panth (Guru Gobind Singh Ji)',
    deity_category: 'surya',
    lunar_month: 'solar',
    paksha: 'solar',
    tithi_name: 'Mesha 1 (Solar Ingress into Aries)',
    tithi_number: 1,
    base_day_of_year: 104,
    calculation_method: 'Sun enters Mesha Rasi (Aries) on April 13 or 14',
    short_description: 'The monumental spring harvest celebration marking the entry of Sun into Aries, celebrated as New Year across Bengal (Pohela Boishakh), Tamil Nadu (Puthandu), Kerala (Vishu), Assam (Bohag Bihu), and the founding of the Khalsa Panth.',
    full_overview: 'Baisakhi marks the astronomical beginning of the solar cycle when the Sun enters Mesha (Aries). In Punjab, farmers express joy for the ripe golden wheat harvest with energetic Bhangra. In Sikh history, it commemorates April 13, 1699, when Guru Gobind Singh established the Khalsa Panth. Across India, it is hailed as the pan-Indian solar New Year.',
    significance: 'Spiritual gratitude for the harvest grain and moral renewal into righteousness, self-defense, and equality.',
    cultural_traditions: [
      'Taking holy dips in sacred rivers like the Ganga at Haridwar and Sarovar at Golden Temple Amritsar.',
      'Performing dynamic Bhangra and Giddha dance in rural Punjab.',
      'Processions of the Panj Pyare carrying the Nishan Sahib.',
      'Preparing Kheer, Puda, and festive sweet yellow rice (Meethed Chawal).'
    ],
    regions: ['Punjab', 'Haryana', 'West Bengal', 'Tamil Nadu', 'Kerala', 'Assam', 'Odisha', 'Global Diaspora'],
    languages: ['Punjabi', 'Hindi', 'Bengali', 'Tamil', 'Malayalam', 'Assamese'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'harvest-festivals', 'new-year-cluster'],
    related_festivals: ['gudi-padwa-ugadi', 'makar-sankranti', 'pongal'],
    related_vrat: [],
    related_temple_ids: ['golden-temple', 'har-ki-pauri'],
    seo_title_template: 'Baisakhi 2026 Date, Mesha Sankranti Muhurat & Pan-India New Year Guide',
    seo_description_template: 'Baisakhi 2026 exact date, Mesha Sankranti bath timings, Khalsa foundation history, Pohela Boishakh, Vishu and Puthandu celebrations.',
    puja_information: {
      overview: 'Early morning holy dip in sacred rivers or home bath with Ganga water, followed by Surya Arghya and charity.',
      samagri: [
        { item: 'Copper Lota with Ganga water & flowers', quantity: '1 set', required: true, significance: 'Sun God Arghya' },
        { item: 'Jaggery, Wheat grains & seasonal fruits', quantity: '1 kg', required: true, significance: 'Harvest charity (Daan)' },
        { item: 'Yellow flowers & Chandan', quantity: '1 plate', required: true, significance: 'Solar worship' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Snana', procedure: 'Take a bath before sunrise in a holy river or with water sanctified with holy herbs.' },
        { stepNumber: 2, title: 'Surya Namaskar & Arghya', procedure: 'Offer water mixed with red chandan, akshat, and red flowers to the rising Sun.' },
        { stepNumber: 3, title: 'Gurdwara or Temple Visit', procedure: 'Participate in community prayers and listen to devotional hymns.' },
        { stepNumber: 4, title: 'Langar & Annadaan', procedure: 'Distribute cooked food and fresh harvest grains to the needy.' }
      ],
      prasadDetails: 'Kada Prasad (wheat flour halwa with pure ghee), sweet yellow rice, and sugarcane juice.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Mesha Sankranti Punya Kaal',
      rulesDescription: 'Auspicious bathing and charity window around solar transition.',
      calculationKey: 'standard'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Grand festive family lunch served with fresh harvest bread and sweets.'
    },
    regional_variations: [
      {
        region: 'Kerala',
        customs: 'Celebrated as Vishu: seeing auspicious items first thing in the morning (Vishu Kani) and elders giving pocket money (Vishu Kaineettam).',
        distinctiveNames: ['Vishu'],
        uniqueFoodsOrRituals: 'Vishu Kani platter with Kanikkonna flowers, cucumber, gold, and mirrors.'
      },
      {
        region: 'West Bengal',
        customs: 'Celebrated as Pohela Boishakh: opening of Haalkhata new business ledger accounts with blessings of Lakshmi-Ganesh.',
        distinctiveNames: ['Pohela Boishakh', 'Nobo Borsho'],
        uniqueFoodsOrRituals: 'Sweet Rosogolla, sandesh, and cultural parades.'
      }
    ],
    faqs: [
      { question: 'Why does Baisakhi fall on April 13 or 14 every year?', answer: 'Because it is based on the sidereal solar calendar (Sauramana) tracking the Sun’s astronomical ingress into the zodiac sign of Aries (Mesha Rasi).' }
    ],
    references: [
      { title: 'Surya Siddhanta', source: 'Sankranti Chapter' }
    ]
  },
  {
    id: 'holika-dahan',
    canonical_name: 'Holika Dahan (Chhoti Holi)',
    hindi_name: 'होलिका दहन (छोटी होली व प्रहलाद विजयोत्सव)',
    gujarati_name: 'હોળી દહન (હોલિકા દહન અને ધાણી-ચણા પૂજન)',
    alternate_names: ['Chhoti Holi', 'Kamudu Pyre', 'Holika Deepam'],
    regional_names: {
      hi: 'होलिका दहन / छोटी होली',
      gu: 'હોલિકા દહન',
      mr: 'होळी प्रदीपन',
      te: 'కాముని దహనం'
    },
    sanskrit_name: 'होलिकाप्रदीपनम्',
    transliteration: 'Holikā Dahana',
    slug: 'holika-dahan',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Bhakta Prahlada, Lord Narasimha & Agni Deva',
    deity_category: 'vishnu',
    lunar_month: 'phalguna',
    paksha: 'shukla',
    tithi_name: 'Purnima (पूर्णिमा)',
    tithi_number: 15,
    base_day_of_year: 84,
    calculation_method: 'Phalguna Purnima prevailing during Pradosh Kaal free from Bhadra Dosha',
    short_description: 'The monumental victory of devotion over arrogance, burning the demoness Holika in the sacred pyre and delivering the innocent child Prahlada unburnt by grace of Lord Vishnu.',
    full_overview: 'Holika Dahan takes place on the eve of Holi during Phalguna Purnima. The demon king Hiranyakashipu commanded his sister Holika, who possessed a fire-immune shawl, to sit in a roaring fire with child Prahlada on her lap. By divine will, the wind blew the cloak onto Prahlada while Holika burned to ashes.',
    significance: 'Exemplifies the eternal spiritual truth that righteous faith cannot be consumed by evil, disease, or adversity.',
    cultural_traditions: [
      'Erecting a large bonfire weeks in advance using dry wood and cow-dung garlands (Badkula/Gulari).',
      'Calculating exact Bhadra-free Pradosh Muhurat to ignite the pyre.',
      'Circumambulating the fire offering ears of green wheat/gram, coconut, and popped rice (Dhaani/Mamra).',
      'Applying the auspicious ash (Bhasma) onto the forehead next morning as divine protection.'
    ],
    regions: ['Pan-India', 'North India', 'Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh'],
    languages: ['Hindi', 'Gujarati', 'Marathi', 'Bhojpuri'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'holi-cluster', 'spring-festivals'],
    related_festivals: ['holi', 'rang-panchami', 'maha-shivaratri'],
    related_vrat: ['phalguna-purnima-vrat'],
    related_temple_ids: ['vrindavan-bankey-bihari'],
    seo_title_template: 'Holika Dahan 2026 Date, Bhadra Free Muhurat & Pyre Vidhi',
    seo_description_template: 'Holika Dahan 2026 exact date, Pradosh Kaal auspicious bonfire timings, Bhadra Mukha & Puchha timings, and authentic puja steps.',
    puja_information: {
      overview: 'Puja is conducted at the pyre before lighting, offering raw cotton thread, roli, akshat, and cow-dung toy garlands.',
      samagri: [
        { item: 'Dhaani (Popped Jowar) & Roasted Gram (Chana)', quantity: '500g', required: true, significance: 'New crop offering' },
        { item: 'Dry Coconut (Gola) with jaggery inside', quantity: '1 pc', required: true, significance: 'Offered into fire' },
        { item: 'Badkula (Cow dung garlands)', quantity: '4 necklaces', required: true, significance: 'Dedicated to ancestors & Hanuman' },
        { item: 'Raw white cotton thread', quantity: '1 spool', required: true, significance: 'For 3, 5 or 7 parikramas' }
      ],
      steps: [
        { stepNumber: 1, title: 'Worship of Pyre', procedure: 'Bathe the ground around pyre with water, apply Roli, Akshat, and flower garlands.' },
        { stepNumber: 2, title: 'Thread Parikrama', procedure: 'Walk around the Holika pyre 3 or 7 times winding the raw cotton yarn.' },
        { stepNumber: 3, title: 'Offer Coconut & Dhaani', procedure: 'Toss dry coconut, popped sorghum, and badkula into the pyre.' },
        { stepNumber: 4, title: 'Roast Green Harvest Ears', procedure: 'Lightly roast fresh green wheat ears (Hola) over embers and eat together as Prasad.' }
      ],
      prasadDetails: 'Roasted green wheat ears (Hola), popped jowar (Dhaani), Gur, and dry coconut pieces.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Bhadra-Free Holika Dahan Muhurat',
      rulesDescription: 'Pradosh Kaal of Phalguna Purnima when Bhadra has passed.',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Families enjoy hot Gujiya, Malpua, and festive meals after pyre parikrama.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why must Holika Dahan never be done during Bhadra?', answer: 'Vedic scriptures strictly forbid Holika lighting during Bhadra because it is considered malefic and believed to bring strife to the kingdom or community.' }
    ],
    references: [
      { title: 'Bhavishya Purana', source: 'Holika Mahatmya' },
      { title: 'Narada Purana', source: 'Prahlada Charitra' }
    ]
  },
  {
    id: 'rang-panchami',
    canonical_name: 'Rang Panchami',
    hindi_name: 'रंग पंचमी (देवताओं की होली व गुलाल उत्सव)',
    gujarati_name: 'રંગ પાંચમ (દેવ રંગોત્સવ)',
    alternate_names: ['Ranga Panchami', 'Deva Holi'],
    regional_names: {
      hi: 'रंग पंचमी',
      gu: 'રંગ પાંચમ',
      mr: 'रंगपंचमी',
      raj: 'रंग पंचमी'
    },
    sanskrit_name: 'रङ्गपञ्चमी / देवहोली',
    transliteration: 'Raṅga Pañcamī',
    slug: 'rang-panchami',
    festival_type: 'seasonal',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Krishna & Sri Radha, Lord Shiva',
    deity_category: 'krishna',
    lunar_month: 'phalguna',
    paksha: 'krishna',
    tithi_name: 'Panchami (चैत्र कृष्ण पंचमी)',
    tithi_number: 5,
    base_day_of_year: 90,
    calculation_method: 'Celebrated 5 days after Holi on Chaitra / Phalguna Krishna Panchami',
    short_description: 'The celestial conclusion to Holi celebrations five days later, particularly famous in Indore, Ujjain, Maharashtra, and Rajasthan with throwing energized abir-gulal into the sky for the deities.',
    full_overview: 'Rang Panchami falls on the fifth day following Holi. Unlike the worldly color play of Dhulandi, Rang Panchami carries a deep spiritual connotation: throwing consecrated colors (Gulal) into the sky activates subtle divine cosmic waves and purifies the atmosphere with positive vibrations. In Indore, millions join the centuries-old royal Gair procession.',
    significance: 'Awakens the Rajoguna and Sattvaguna, celebrating victory over negative elements and absorbing divine joy.',
    cultural_traditions: [
      'The historic Indore Gair (Holi procession with pressurized color mist engines and water tankers).',
      'Throwing pink and yellow Gulal towards the deities in temples.',
      'Devotees gather at Mahakaleshwar Temple in Ujjain where Lord Shiva is drenched in fragrant Gulal.',
      'Singing traditional Phag and Krishna-Radha Horis.'
    ],
    regions: ['Madhya Pradesh (Indore, Ujjain)', 'Maharashtra', 'Rajasthan', 'Gujarat'],
    languages: ['Hindi', 'Marathi', 'Malwi', 'Gujarati'],
    hero_image_theme: 'rose',
    topical_collections: ['popular', 'holi-cluster', 'spring-festivals'],
    related_festivals: ['holi', 'holika-dahan'],
    related_vrat: [],
    related_temple_ids: ['mahakaleshwar-ujjain', 'bankey-bihari'],
    seo_title_template: 'Rang Panchami 2026 Date, Indore Gair & Puja Muhurat',
    seo_description_template: 'Rang Panchami 2026 date, celebration timings, Indore famous Gair procession, spiritual significance of Gulal, and temple celebrations.',
    puja_information: {
      overview: 'Offer natural pink and red Gulal at the feet of Radha-Krishna or Lord Shiva before playing.',
      samagri: [
        { item: 'Natural Herbal Gulal (Abir & Chandan)', quantity: '1 plate', required: true, significance: 'Offering to deities' },
        { item: 'Sweets (Gujiya & Puran Poli)', quantity: '500g', required: true, significance: 'Festive Prasad' }
      ],
      steps: [
        { stepNumber: 1, title: 'Temple Abir Seva', procedure: 'Place fragrant gulal on deity feet asking for peace and universal joy.' },
        { stepNumber: 2, title: 'Sky Offering', procedure: 'Throw handfuls of dry pink abir into the open sky invoking the celestial devatas.' },
        { stepNumber: 3, title: 'Joyful Gathering', procedure: 'Greet neighbors and elders applying mild chandan tilak on foreheads.' }
      ],
      prasadDetails: 'Gujiya, Thandai, and Puran Poli.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Rang Panchami Gulal Muhurat',
      rulesDescription: 'Morning through afternoon hours of Krishna Panchami.',
      calculationKey: 'day_choghadiya'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Traditional feast enjoyed after midday celebrations.'
    },
    regional_variations: [],
    faqs: [
      { question: 'What is the historic Indore Gair?', answer: 'The Holkar royal dynasty of Indore started the Gair tradition over 150 years ago where thousands march through Rajwada square with water cannons showering organic colors on everyone.' }
    ],
    references: [
      { title: 'Vedic Color Festivals', source: 'Spring Rites of Sanatana Tradition' }
    ]
  },
  {
    id: 'varalakshmi-vratam',
    canonical_name: 'Varalakshmi Vratam',
    hindi_name: 'वरलक्ष्मी व्रतम (मां वरलक्ष्मी महापूजन व अष्टलक्ष्मी वरदान)',
    gujarati_name: 'વરલક્ષ્મી વ્રત (અષ્ટલક્ષ્મી પૂજન)',
    alternate_names: ['Varalakshmi Pooja', 'Vara Mahalakshmi Vratam'],
    regional_names: {
      te: 'వరలక్ష్మీ వ్రతం (Varalakshmi Vratam)',
      ta: 'வரலட்சுமி விரதம் (Varalakshmi Nombu)',
      kn: 'ವರಮಹಾಲಕ್ಷ್ಮಿ ವ್ರತ (Varamahalakshmi Vrata)',
      hi: 'वरलक्ष्मी व्रत',
      gu: 'વરલક્ષ્મી વ્રત'
    },
    sanskrit_name: 'वरलक्ष्मीव्रतम् / महालक्ष्मीपूजा',
    transliteration: 'Varalakṣmī Vratam',
    slug: 'varalakshmi-vratam',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'Goddess Varalakshmi (Giver of Boons & Ashta Lakshmi)',
    deity_category: 'lakshmi',
    lunar_month: 'shravana',
    paksha: 'shukla',
    tithi_name: 'Shravana Shukla Friday before Purnima',
    tithi_number: 14,
    base_day_of_year: 226,
    calculation_method: 'Observed on the Friday preceding the Full Moon day (Purnima) in the month of Shravana',
    short_description: 'The premier Lakshmi festival celebrated by married women across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu by adorning a silver or brass Kalash as the Goddess with gold jewelry, silk sarees, and nine-knot threads.',
    full_overview: 'Varalakshmi Vratam is the most auspicious goddess observance in South India. Worshipping Goddess Varalakshmi is equivalent to worshipping all eight forms of Lakshmi (Ashta Lakshmi: wealth, earth, learning, love, fame, peace, pleasure, and strength). Women install a sacred Kalash adorned with a facial mask (Amman Mukham), tie silk threads with nine knots (Toram), and prepare divine delicacies.',
    significance: 'Bestows boons (Vara) of family longevity, health, abundant prosperity, and spiritual fulfillment.',
    history_and_tradition: 'Extolled by Lord Shiva to Goddess Parvati in the Skanda Purana, citing the legend of Charumati, a devoted housewife whom Lakshmi blessed in a dream.',
    cultural_traditions: [
      'Adorning the coconut atop the Kalash with turmeric, eyes, nose, or using a silver Amman face mask.',
      'Draping a mini silk saree (Pattu Pavadai) and gold jewelry onto the Kalash.',
      'Tying the yellow 9-knot sacred thread (Nonbu Charadu / Toram) onto the right wrist.',
      'Offering a grand feast of 9 traditional delicacies (Poli, Vada, Payasam, Sundal, etc.).',
      'Exchanging Tamboolam with neighboring married women.'
    ],
    regions: ['Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Global Diaspora'],
    languages: ['Telugu', 'Tamil', 'Kannada', 'Sanskrit', 'English'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'lakshmi-festivals', 'vrat-fasting', 'south-indian'],
    related_festivals: ['diwali', 'sharad-purnima', 'dhanteras'],
    related_vrat: ['lakshmi-vrat'],
    related_temple_ids: ['mahalakshmi-kolhapur', 'kanipakam'],
    seo_title_template: 'Varalakshmi Vratam 2026 Date, Kalash Puja Muhurat & Toram Vidhi',
    seo_description_template: 'Varalakshmi Vratam 2026 exact date, Friday puja muhurat (Singha Lagna, Vrishabha Lagna), Kalash decoration, 9-knot Toram mantra and Charumati katha.',
    puja_information: {
      overview: 'Conducted on Friday morning or evening during Sthir Lagna (Vrishabha or Simha) with consecrated Kalash.',
      samagri: [
        { item: 'Silver or Brass Kalash with Rice & Dry Fruits', quantity: '1 set', required: true, significance: 'Abode of Goddess' },
        { item: 'Amman Face Mask or turmeric-coated coconut', quantity: '1 pc', required: true, significance: 'Devi countenance' },
        { item: 'Yellow thread with 9 knots (Toram)', quantity: 'As needed', required: true, significance: 'Invoking 9 forms of Lakshmi' },
        { item: 'Lotus flowers, Jasmine garlands & Kumkum', quantity: '1 plate', required: true, significance: 'Beloved flowers of Devi' }
      ],
      steps: [
        { stepNumber: 1, title: 'Kalash Sthapana', procedure: 'Fill kalash with raw rice, coins, turmeric root, and betel leaves; top with coconut and Amman face.' },
        { stepNumber: 2, title: 'Avahana & Shodashopachara', procedure: 'Invoke Goddess Varalakshmi with the Lakshmi Ashtothram.' },
        { stepNumber: 3, title: 'Tie 9-Knot Toram', procedure: 'Chant the Toram mantra and tie the yellow thread to the right wrist.' },
        { stepNumber: 4, title: 'Maha Naivedyam & Tamboolam', procedure: 'Offer 9 varieties of dishes and distribute tamboolam to married women.' }
      ],
      prasadDetails: 'Medhu Vada, Chana Sundal, Payasam, sweet Appam, and Pulihora.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Varalakshmi Sthir Lagna Muhurat',
      rulesDescription: 'Simha Lagna (Morning) or Vrishabha Lagna (Evening twilight).',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Ekbukta',
      paranaRules: 'Devotees consume satvik prasadam meal on Friday night after evening aarti.'
    },
    regional_variations: [],
    faqs: [
      { question: 'What do the 9 knots on the Varalakshmi thread signify?', answer: 'The 9 knots represent the nine divine forms of Lakshmi: Kamala, Vidya, Saubhagya, Amrutha, Kanti, Satya, Bhoga, Vijaya, and Sarva Sampada.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Varalakshmi Vratam Chapter' }
    ]
  },
  {
    id: 'labh-pancham',
    canonical_name: 'Labh Pancham (Saubhagya Panchami)',
    hindi_name: 'लाभ पंचम (सौभाग्य पंचमी, व्यापार शुभारंभ व शारदा पूजन)',
    gujarati_name: 'લાભ પાંચમ (નવા વર્ષના વેપાર-ધંધાના મુહૂર્ત અને ચોપડા પૂજન)',
    alternate_names: ['Saubhagya Panchami', 'Labh Panchami', 'Jnan Panchami (Jain)'],
    regional_names: {
      gu: 'લાભ પાંચમ / સૌભાગ્ય પાંચમ',
      hi: 'लाभ पंचमी / सौभाग्य पंचमी',
      mr: 'लाभ पंचमी',
      raj: 'लाभ पंचम'
    },
    sanskrit_name: 'सौभाग्यपञ्चमी / लाभपञ्चमी',
    transliteration: 'Lābha Pañcamī',
    slug: 'labh-pancham',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Ganesha, Goddess Lakshmi & Saraswati (Sharda)',
    deity_category: 'ganesha',
    lunar_month: 'kartik',
    paksha: 'shukla',
    tithi_name: 'Panchami (पंचमी)',
    tithi_number: 5,
    base_day_of_year: 317,
    calculation_method: 'Kartik Shukla Panchami morning auspicious Choghadiya',
    short_description: 'The quintessential Gujarati festival marking the reopening of shops, offices, and factories after Diwali holidays, writing "Shubh" and "Labh" on new ledger books to ensure profitable enterprise.',
    full_overview: 'Labh Pancham (also revered as Saubhagya Panchami) falls on Kartik Shukla Panchami and concludes the grand Diwali festivities in Gujarat, Maharashtra, and Rajasthan. Commercial establishments, textile markets, diamond bourses, and retail shops that closed on Diwali open their shutters on this day during auspicious Choghadiya (Labh and Amrit) to commence new business.',
    significance: 'Ensures that commerce is infused with divine virtue (Shubh) leading to true righteous prosperity (Labh) and longevity.',
    cultural_traditions: [
      'Opening commercial shops and mills after the 5-day Diwali vacation.',
      'Drawing red Swastika (Sathiya) and writing "Shubh" on left and "Labh" on right using vermillion and turmeric.',
      'Conducting special Sharda Puja and Lakshmi-Ganesh puja at the office altar.',
      'Jain community celebrates this day as Jnan Panchami, worshipping holy scriptures and knowledge books.'
    ],
    regions: ['Gujarat', 'Saurashtra', 'Mumbai', 'Rajasthan', 'NRI Gujarati Business Community'],
    languages: ['Gujarati', 'Hindi', 'Marwari'],
    hero_image_theme: 'amber',
    topical_collections: ['popular', 'kartik-festivals', 'gujarati-special', 'ganesha-festivals'],
    related_festivals: ['diwali', 'dhanteras', 'bhai-dooj'],
    related_vrat: [],
    related_temple_ids: ['shrinathji', 'somnath'],
    seo_title_template: 'Labh Pancham 2026 Date, Business Opening Shubh Muhurat & Chopda Puja',
    seo_description_template: 'Labh Pancham 2026 exact date, Shubh Labh Choghadiya timings to open shops in Gujarat, Sharda Pujan vidhi and Saubhagya Panchami importance.',
    puja_information: {
      overview: 'Conducted at shop/office counters in the morning during Labh or Amrit Choghadiya.',
      samagri: [
        { item: 'New Account Ledger / Laptop / Register', quantity: '1 set', required: true, significance: 'Business instrument' },
        { item: 'Kumkum (Roli), Akshat & Sopari', quantity: '1 plate', required: true, significance: 'Swastika invocation' },
        { item: 'Boondi Laddu or Jalebi', quantity: '1 kg', required: true, significance: 'Sweet start to business' }
      ],
      steps: [
        { stepNumber: 1, title: 'Open Office in Shubh Kaal', procedure: 'Arrive at the business premises during Labh or Amrit Choghadiya.' },
        { stepNumber: 2, title: 'Draw Sathiya & Shubh-Labh', procedure: 'Draw sacred Swastika on the threshold and account books using red kumkum.' },
        { stepNumber: 3, title: 'Lakshmi-Ganesh Arati', procedure: 'Light incense and diya at the cash register (Galla) seeking ethical earnings.' },
        { stepNumber: 4, title: 'First Sale & Sweet Sharing', procedure: 'Perform auspicious first transaction (Bohni) and distribute laddus to staff and customers.' }
      ],
      prasadDetails: 'Boondi Laddu, Jalebi, and dry fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Labh & Amrit Choghadiya Muhurat',
      rulesDescription: 'Morning Choghadiya of Kartik Shukla Panchami.',
      calculationKey: 'day_choghadiya'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Festive sweets and tea distributed among clients and colleagues.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why is it called Labh Pancham?', answer: 'In Sanskrit and Gujarati, "Labh" means auspicious profit or benefit and "Pancham" means the fifth day. Initiating work on this day ensures sustainable, ethical success throughout the fiscal year.' }
    ],
    references: [
      { title: 'Vedic Commercial Ethics', source: 'Kartik Shukla Panchami Traditions' }
    ]
  },
  {
    id: 'hariyali-teej',
    canonical_name: 'Hariyali Teej',
    hindi_name: 'हरियाली तीज (श्रावणी तीज व झूला उत्सव)',
    gujarati_name: 'હરિયાળી ત્રીજ (શ્રાવણી તીજ)',
    alternate_names: ['Shravani Teej', 'Chhoti Teej'],
    regional_names: {
      hi: 'हरियाली तीज / श्रावणी तीज',
      gu: 'હરિયાળી ત્રીજ',
      raj: 'तीज (Teej Procession Jaipur)'
    },
    sanskrit_name: 'हरितालिका / श्रावणतृतीया',
    transliteration: 'Hariyālī Tīja',
    slug: 'hariyali-teej',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'shaiva',
    deity: 'Lord Shiva & Mata Parvati',
    deity_category: 'shiva',
    lunar_month: 'shravana',
    paksha: 'shukla',
    tithi_name: 'Tritiya (तृतीया)',
    tithi_number: 3,
    base_day_of_year: 216,
    calculation_method: 'Shravana Shukla Tritiya prevailing during daytime',
    short_description: 'The joyous monsoon festival where women wear emerald green attire, swing on tree swings adorned with flowers, apply mehendi, and worship Shiva-Parvati to commemorate their divine reunion.',
    full_overview: 'Hariyali Teej falls during the lush monsoon month of Shravana. Nature turns vibrant green, and women dress in shades of green (symbolizing life, fertility, and renewal). Married daughters receive gifts of clothes and sweets (Sindhara) from their parents, swing under mango trees, and sing melodious folk songs.',
    significance: 'Commemorates the day Lord Shiva accepted Goddess Parvati as his consort after 108 ascetic rebirths of unwavering devotion.',
    cultural_traditions: [
      'Wearing green sarees, bangles, and applying intricate henna (Mehendi) designs.',
      'Tying flower-bedecked swings (Jhula) on banyan and mango branches.',
      'Exchange of Sindhara (gifts of Ghewar, sweets, bangles, and cosmetics) from maternal homes.',
      'World-famous Teej Mata procession in the walled city of Jaipur.'
    ],
    regions: ['Rajasthan', 'Haryana', 'Uttar Pradesh', 'Bihar', 'Punjab', 'Madhya Pradesh'],
    languages: ['Hindi', 'Rajasthani', 'Haryanvi', 'Bhojpuri'],
    hero_image_theme: 'emerald',
    topical_collections: ['popular', 'teej-festivals', 'vrat-fasting', 'shravana-festivals'],
    related_festivals: ['hartalika-teej', 'raksha-bandhan', 'karwa-chauth'],
    related_vrat: ['shiva-parvati-vrat'],
    related_temple_ids: ['city-palace-jaipur', 'bankey-bihari'],
    seo_title_template: 'Hariyali Teej 2026 Date, Shravani Teej Muhurat & Sindhara Vidhi',
    seo_description_template: 'Hariyali Teej 2026 exact date, puja muhurat, Ghewar sweets, swing traditions, Mehendi significance, and Jaipur Teej procession.',
    puja_information: {
      overview: 'Conducted in the morning or afternoon by installing clay idols of Shiva-Parvati adorned with green cloths.',
      samagri: [
        { item: 'Green glass bangles, green saree & mehendi', quantity: '1 set', required: true, significance: 'Monsoon harmony' },
        { item: 'Belpatra, flowers & Bilva fruit', quantity: '1 plate', required: true, significance: 'Shiva worship' },
        { item: 'Fresh Ghewar & Malpua', quantity: '1 box', required: true, significance: 'Seasonal bhog' }
      ],
      steps: [
        { stepNumber: 1, title: 'Shringar & Solah Shringar', procedure: 'Take a morning bath, apply mehendi, and wear green garments.' },
        { stepNumber: 2, title: 'Worship of Shiva-Parvati', procedure: 'Offer Belpatra to Shiva and green Chunri with Sindoor to Mata Parvati.' },
        { stepNumber: 3, title: 'Katha & Jhula', procedure: 'Listen to the Teej Vrat Katha and enjoy swings with fellow women singing folk songs.' },
        { stepNumber: 4, title: 'Receive Sindhara', procedure: 'Accept blessings and gifts from in-laws and parents.' }
      ],
      prasadDetails: 'Ghewar, Malpua, and sweet Mathri.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Hariyali Teej Morning Puja Muhurat',
      rulesDescription: 'Shravana Shukla Tritiya daytime.',
      calculationKey: 'day_choghadiya'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Satvik evening feast with sweet Ghewar after moonrise or evening prayer.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why is green color auspicious on Hariyali Teej?', answer: 'Green represents the lush monsoon rejuvenation of nature, prosperity, fertile abundance, and the evergreen love between Lord Shiva and Parvati.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Shravana Mahatmya' }
    ]
  },
  {
    id: 'karthigai-deepam',
    canonical_name: 'Karthigai Deepam',
    hindi_name: 'कार्तிகை தீபம் (कार्तिक दीपम व अरुणाचल महादीपम)',
    gujarati_name: 'કાર્તિક દીપમ (દક્ષિણ ભારતીય દીપોત્સવ)',
    alternate_names: ['Karthikai Vilakkidu', 'Annamalaiyar Deepam'],
    regional_names: {
      ta: 'கார்த்திகை தீபம் (Karthigai Deepam)',
      te: 'కార్తీక దీపం',
      ml: 'കാർത്തിക വിളക്ക്',
      hi: 'कार्तिक दीपम'
    },
    sanskrit_name: 'कृत्तिकादीपोत्सवः / महादीपम्',
    transliteration: 'Kārttikai Dīpam',
    slug: 'karthigai-deepam',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'shaiva',
    deity: 'Lord Shiva (Arunachaleswara as Pillar of Fire) & Lord Murugan',
    deity_category: 'shiva',
    lunar_month: 'solar',
    paksha: 'solar',
    tithi_name: 'Krittika Nakshatra in Tamil Month Karthigai',
    tithi_number: 15,
    base_day_of_year: 335,
    calculation_method: 'Observed when Krittika Nakshatra prevails on Pournami evening in Tamil month Karthigai',
    short_description: 'The ancient festival of cosmic fire celebrated across Tamil Nadu and Kerala, where millions of clay lamps line every home and a colossal cauldron of flame (Maha Deepam) is lit atop holy Mount Arunachala in Tiruvannamalai.',
    full_overview: 'Karthigai Deepam is one of the oldest recorded festivals of Tamil Nadu, mentioned in the ancient Tolkappiyam and Sangam literature (Akananuru). It marks the divine manifestation of Lord Shiva as an infinite column of fire (Lingodbhava) to quell the egos of Brahma and Vishnu. At dusk, thousands of kilograms of ghee and camphor fuel a mammoth flame atop the 2,668-foot Arunachala hill in Tiruvannamalai, visible for dozens of miles.',
    significance: 'Dispels spiritual ignorance through the brilliant beacon of non-dual consciousness and cosmic light.',
    cultural_traditions: [
      'Lighting rows of earthenware Agal Vilakku lamps filled with neem or sesame oil in courtyards and windows.',
      'The lighting of the colossal Maha Deepam cauldron at 6:00 PM atop Mount Arunachala.',
      'Performing the 14-kilometer barefoot Girivalam (circumambulation) of Arunachala hill by over a million pilgrims.',
      'Eating Pori Urundai (sweet puffed rice balls with jaggery and dry ginger).'
    ],
    regions: ['Tamil Nadu', 'Kerala', 'Puducherry', 'Sri Lanka', 'Malaysia', 'Singapore'],
    languages: ['Tamil', 'Malayalam', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-25', 'popular', 'shiva-festivals', 'south-indian'],
    related_festivals: ['diwali', 'kartik-purnima', 'maha-shivaratri'],
    related_vrat: ['kartika-somavaram'],
    related_temple_ids: ['arunachaleswarar-tiruvannamalai'],
    seo_title_template: 'Karthigai Deepam 2026 Date, Tiruvannamalai Maha Deepam & Muhurat',
    seo_description_template: 'Karthigai Deepam 2026 date, Arunachala hill Maha Deepam lighting time, Krittika nakshatra timings, Agal Vilakku traditions and Pori recipes.',
    puja_information: {
      overview: 'Lighting dozens of terracotta Agal Vilakku lamps at dusk facing north and east.',
      samagri: [
        { item: 'Clay Agal Vilakku Lamps', quantity: '21 to 51 pcs', required: true, significance: 'Divine luminescence' },
        { item: 'Pure Cow Ghee or Sesame / Iluppai Oil', quantity: '500ml', required: true, significance: 'Purity of lamp fuel' },
        { item: 'Pori (Puffed Rice) with Jaggery (Vellam)', quantity: '500g', required: true, significance: 'Traditional sweet offering' }
      ],
      steps: [
        { stepNumber: 1, title: 'Cleanse & Fill Lamps', procedure: 'Wash terracotta lamps, apply sandalwood and kumkum, fill with pure oil and cotton wicks.' },
        { stepNumber: 2, title: 'Light at Dusk', procedure: 'Light lamps exactly at sunset chanting "Annamalaiyare Arogara!".' },
        { stepNumber: 3, title: 'Line Walls & Doorways', procedure: 'Place lit lamps in rows across verandas, windowsills, and entry pathways.' },
        { stepNumber: 4, title: 'Offer Pori Urundai', procedure: 'Offer sweet jaggery-coated puffed rice and bananas to Lord Murugan and Shiva.' }
      ],
      prasadDetails: 'Nel Pori Urundai (puffed paddy balls with jaggery, cardamom, and dry ginger) and Appam.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Karthigai Maha Deepam Kaal',
      rulesDescription: 'Sunset window when Krittika nakshatra prevails on Pournami.',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Prasad is eaten following the evening deepam lighting.'
    },
    regional_variations: [],
    faqs: [
      { question: 'What is Mount Arunachala in Tiruvannamalai?', answer: 'Mount Arunachala is revered by saints including Sri Ramana Maharshi as the physical embodiment of Lord Shiva Himself in the form of a sacred mountain of wisdom.' }
    ],
    references: [
      { title: 'Sangam Literature - Akananuru', source: 'Poem 141' },
      { title: 'Tiruvannamalai Sthala Purana', source: 'Lingodbhava Appearance' }
    ]
  }
];
