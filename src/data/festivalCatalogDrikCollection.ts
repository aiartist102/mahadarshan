import { FestivalDefinition } from './festivalDatabase';

export const drikCollectionFestivalsList: FestivalDefinition[] = [
  {
    id: 'pongal',
    canonical_name: 'Pongal (Thai Pongal & Makaravilakku)',
    hindi_name: 'पोंगल (थाई पोंगल, मट्टू पोंगल व मकरविलक्कु)',
    gujarati_name: 'પોંગલ (દક્ષિણ ભારતીય સૂર્ય મહોત્સવ)',
    alternate_names: ['Thai Pongal', 'Makaravilakku', 'Bhogi Pongal', 'Mattu Pongal'],
    regional_names: {
      ta: 'தைப்பொங்கல் (Thai Pongal)',
      ml: 'മകരവിളക്ക് (Makaravilakku)',
      te: 'సంక్రాంతి / పొంగల్',
      hi: 'पोंगल',
      gu: 'પોંગલ'
    },
    sanskrit_name: 'मकरसंक्रान्तिः / पोङ्गलोत्सवः',
    transliteration: 'Poṅgal',
    slug: 'pongal',
    festival_type: 'harvest',
    religion: 'hindu',
    sect: 'all',
    deity: 'Surya Bhagwan & Mother Nature',
    deity_category: 'surya',
    lunar_month: 'solar',
    paksha: 'solar',
    tithi_name: 'Thai 1 (Uttarayana Ingress)',
    tithi_number: 1,
    base_day_of_year: 14,
    calculation_method: 'Sun enters Makara Rasi in Tamil Solar Month Thai',
    short_description: 'The 4-day Tamil harvest festival celebrating the Sun God, bovine wealth, and fresh agricultural prosperity with boiling sweet rice milk in brass pots.',
    full_overview: 'Pongal is the supreme thanksgiving harvest festival celebrated predominantly in Tamil Nadu and throughout South India. Spread over four days—Bhogi, Thai Pongal, Mattu Pongal, and Kaanum Pongal—it honors Surya Bhagwan for bountiful harvests.',
    significance: 'Spilling over of sweet boiled milk (Pongalo Pongal!) signifies boundless prosperity, spiritual overflow, and peace.',
    history_and_tradition: 'Traced back to Sangam literature over 2,000 years ago as Dravidian harvest celebrations described in the Manimekalai.',
    cultural_traditions: [
      'Boiling fresh harvest rice with jaggery and milk in decorated earthen or bronze pots until it overflows.',
      'Shouting "Pongalo Pongal!" in joyous chorus as milk boils over facing the morning Sun.',
      'Drawing Kolams with rice flour at dawn.',
      'Honoring cattle on Mattu Pongal with painted horns and garlands.'
    ],
    regions: ['Tamil Nadu', 'Kerala', 'Puducherry', 'Malaysia', 'Singapore', 'Sri Lanka'],
    languages: ['Tamil', 'Malayalam', 'English', 'Hindi'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-25', 'popular', 'harvest-festivals', 'sun-festivals', 'south-indian'],
    related_festivals: ['makar-sankranti', 'lohri', 'onam'],
    related_vrat: ['surya-vrat'],
    related_temple_ids: ['meenakshi-madurai', 'sabarimala', 'brihadeeswara'],
    seo_title_template: 'Pongal 2026 Date, Thai Pongal Muhurat & 4-Day Celebration Guide',
    seo_description_template: 'Complete Pongal 2026 guide with Thai Pongal sunrise muhurat, Pongal boiling time, Kolam traditions, and recipes.',
    puja_information: {
      overview: 'Surya Pongal Puja is performed outdoors facing east in the morning, placing the pot upon an auspicious hearth (aduppu).',
      samagri: [
        { item: 'New Clay or Brass Pongal Pot', quantity: '1 pc', required: true, significance: 'Purity of vessel' },
        { item: 'Fresh Raw Rice & Moong Dal', quantity: '500g', required: true, significance: 'Fresh harvest offerings' },
        { item: 'Organic Jaggery (Vellam)', quantity: '500g', required: true, significance: 'Sweetness of life' },
        { item: 'Fresh Turmeric Plant with leaves', quantity: '2 stalks', required: true, significance: 'Tied around the neck of pot' },
        { item: 'Sugarcanes (Karumbu)', quantity: '2 full stalks', required: true, significance: 'Abundance and protection' }
      ],
      steps: [
        { stepNumber: 1, title: 'Adorn Hearth & Pot', procedure: 'Tie fresh turmeric stalks around the neck of the pot and draw sacred vibhuti and kumkum stripes.' },
        { stepNumber: 2, title: 'Boil Milk facing East', procedure: 'Heat fresh milk until it boils over while chanting Pongalo Pongal.' },
        { stepNumber: 3, title: 'Add Rice & Jaggery', procedure: 'Add washed new rice, roasted dal, and melted jaggery with ghee, cashews, and cardamom.' },
        { stepNumber: 4, title: 'Surya Arghya & Karpura Harathi', procedure: 'Offer Pongal prasadam on plantain leaves with coconut and lit camphor to Surya.' }
      ],
      prasadDetails: 'Sakkarai Pongal (sweet jaggery rice) and Ven Pongal (savory cumin-pepper rice) offered with ripe bananas.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Thai Pongal Sankranti Muhurat',
      rulesDescription: 'Conducted during early morning Brahma or auspicious Choghadiya facing the rising Sun.',
      calculationKey: 'standard'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Feast begins following the Surya Arghya offering with sugarcane and Sakkarai Pongal.'
    },
    regional_variations: [
      {
        region: 'Tamil Nadu',
        customs: 'Four-day observance: Bhogi (discarding old items), Thai Pongal, Mattu Pongal, and Kaanum Pongal (family outings).',
        distinctiveNames: ['Thai Pongal', 'Perum Pongal'],
        uniqueFoodsOrRituals: 'Elaborate Kolams, Jallikattu bull-taming, and sugarcane gifts.'
      }
    ],
    faqs: [
      { question: 'Why does milk boil over during Pongal?', answer: 'The boiling over of milk symbolizes overflowing abundance, peace, and good fortune for the family in the coming year.' }
    ],
    references: [
      { title: 'Tiruppavai of Andal', source: 'Sangam Tamil Bhakti Literature' }
    ]
  },
  {
    id: 'lohri',
    canonical_name: 'Lohri',
    hindi_name: 'लोहड़ी (रबी फसल व अग्नि देव पूजन)',
    gujarati_name: 'લોહરી (અગ્નિ પૂજન ઉત્સવ)',
    alternate_names: ['Lohadi', 'Lal Loi'],
    regional_names: {
      pa: 'ਲੋਹੜੀ (Lohri)',
      hi: 'लोहड़ी',
      gu: 'લોહરી'
    },
    sanskrit_name: 'लोहरी / वह्निपूजनोत्सवः',
    transliteration: 'Lohrī',
    slug: 'lohri',
    festival_type: 'harvest',
    religion: 'hindu',
    sect: 'all',
    deity: 'Agni Deva (Fire God) & Surya Bhagwan',
    deity_category: 'other',
    lunar_month: 'solar',
    paksha: 'solar',
    tithi_name: 'Eve of Makar Sankranti',
    tithi_number: 29,
    base_day_of_year: 13,
    calculation_method: 'Celebrated on the night preceding Makar Sankranti',
    short_description: 'The spirited winter harvest festival honoring Agni Deva with sacred bonfires, folk songs of Dulla Bhatti, sesame rewri, and popcorn offerings.',
    full_overview: 'Lohri is the joyous harvest festival celebrated with immense enthusiasm in Punjab, Haryana, and Northern India on the coldest night before Makar Sankranti, marking the departure of winter and arrival of longer, warmer days.',
    significance: 'Circumbulating the holy fire while offering sesame seeds (til), gur, peanuts, and rewri invites health, fertility, and removes negative energies.',
    history_and_tradition: 'Associated with the folk legend of Dulla Bhatti, who rescued young girls from abductors and arranged their weddings with dignity.',
    cultural_traditions: [
      'Lighting community bonfires in courtyards after sunset.',
      'Parikrama around the holy fire while chanting "Aadar aye dilather jaye".',
      'Singing traditional folk songs honoring Dulla Bhatti.',
      'Dancing vigorous Bhangra and Giddha around the bonfire.'
    ],
    regions: ['Punjab', 'Haryana', 'Delhi', 'Himachal Pradesh', 'Jammu', 'Canada', 'UK'],
    languages: ['Punjabi', 'Hindi', 'English'],
    hero_image_theme: 'orange',
    topical_collections: ['popular', 'harvest-festivals', 'winter-festivals'],
    related_festivals: ['makar-sankranti', 'pongal', 'baisakhi'],
    related_vrat: [],
    related_temple_ids: ['golden-temple'],
    seo_title_template: 'Lohri 2026 Date, Bonfire Muhurat & Celebration Vidhi',
    seo_description_template: 'Lohri 2026 exact date, evening bonfire timings, Dulla Bhatti legend, rewri offerings, and traditional customs.',
    puja_information: {
      overview: 'Families gather around the lit bonfire after dusk, offer prayers to Agni Deva, and distribute Prasad.',
      samagri: [
        { item: 'Dried Cow Dung Cakes & Wood Logs', quantity: 'As needed', required: true, significance: 'Purity of holy fire' },
        { item: 'Til (Sesame Seeds) & Gur (Jaggery)', quantity: '250g', required: true, significance: 'Offerings to Agni' },
        { item: 'Rewri, Gajak & Peanuts', quantity: '500g', required: true, significance: 'Winter warmth Prasad' },
        { item: 'Popcorn (Phulle)', quantity: '250g', required: true, significance: 'Harvest grain gratitude' }
      ],
      steps: [
        { stepNumber: 1, title: 'Kindle Sacred Bonfire', procedure: 'Light the bonfire after sunset invoking Agni Deva and Surya Bhagwan.' },
        { stepNumber: 2, title: 'Offer Ahuti & Parikrama', procedure: 'Perform clockwise circumambulations offering til, gur, rewri, and peanuts into the fire.' },
        { stepNumber: 3, title: 'Sing & Rejoice', procedure: 'Sing traditional Lohri folk songs and celebrate new marriages or newborn babies in the family.' }
      ],
      prasadDetails: 'Til-gur rewri, roasted peanuts, puffed corn, and Makki di Roti with Sarson da Saag.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Lohri Sankranti Bonfire Kaal',
      rulesDescription: 'Evening twilight and Pradosh Kaal after sunset.',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Traditional festive dinner served following the bonfire offerings.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why is Lohri especially celebrated for new brides and newborns?', answer: 'In Punjabi tradition, a family celebrates their first Lohri after a marriage or birth as a thanksgiving to nature for fertility and lineage continuity.' }
    ],
    references: [
      { title: 'Punjab Folklore and Agrarian Rites', source: 'Vedic Fire Worship Traditions' }
    ]
  },
  {
    id: 'chaitra-navratri',
    canonical_name: 'Chaitra Navratri & Ghatasthapana',
    hindi_name: 'चैत्र नवरात्रि व घटस्थापना (वासंतिक नवरात्रि)',
    gujarati_name: 'ચૈત્રિ નવરાત્રી અને ઘટસ્થાપન',
    alternate_names: ['Vasant Navratri', 'Chaitri Navratri', 'Rama Navratri'],
    regional_names: {
      hi: 'चैत्र नवरात्रि / वासंतिक नवरात्र',
      gu: 'ચૈત્રિ નવરાત્રી',
      mr: 'चैत्र नवरात्र',
      te: 'చైత్ర నవరాత్రులు',
      ta: 'சைத்ர நவராத்திரி'
    },
    sanskrit_name: 'चैत्रनवरात्रोत्सवः / वासन्तिकनवरात्रम्',
    transliteration: 'Caitra Navarātri',
    slug: 'chaitra-navratri',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'shakta',
    deity: 'Navadurga (Nine Manifestations of Shakti) & Bhagwan Rama',
    deity_category: 'devi',
    lunar_month: 'chaitra',
    paksha: 'shukla',
    tithi_name: 'Pratipada to Navami (प्रतिपदा से नवमी)',
    tithi_number: 1,
    base_day_of_year: 80,
    calculation_method: 'Chaitra Shukla Pratipada morning Kalash Sthapana during Dvi-Svabhava Lagna or Abhijit',
    short_description: 'The 9-day spring celebration of Shakti invoking the 9 divine forms of Goddess Durga, concluding with Ram Navami on the ninth day.',
    full_overview: 'Chaitra Navratri marks the beginning of the Hindu Vedic New Year on Pratipada. Dedicated to Mother Goddess Durga, devotees observe 9 days of fasting, continuous Akhand Jyoti, recitation of Devi Mahatmya (Durga Saptashati), and celebrate Sri Rama Navami on the 9th day.',
    significance: 'Spiritual rejuvenation in spring aligning biological rhythms through satvik fasting and prayer, awakening dormant Kundalini energy.',
    history_and_tradition: 'Mentioned in the Devi Bhagavata Purana and Markandeya Purana as the original Navratri observed by sages and kings in the spring equinox season.',
    cultural_traditions: [
      'Ghatasthapana (Kalash Sthapana) with sowing of barley seeds (Jowar).',
      'Worship of Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri across 9 days.',
      'Kanya Pujan (revering young girls as living embodiments of Shakti) on Ashtami or Navami.',
      'Fasting on satvik diet and lighting Akhand Deepam.'
    ],
    regions: ['Pan-India', 'North India', 'Gujarat', 'Maharashtra', 'Madhya Pradesh'],
    languages: ['Hindi', 'Sanskrit', 'Gujarati', 'Marathi'],
    hero_image_theme: 'rose',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'navratri-cluster', 'devi-festivals'],
    related_festivals: ['rama-navami', 'gudi-padwa-ugadi', 'navratri-shardiya'],
    related_vrat: ['durga-ashtami-vrat', 'kanya-pujan'],
    related_temple_ids: ['vaishno-devi', 'kamakhya', 'ambaji'],
    seo_title_template: 'Chaitra Navratri 2026 Dates, Ghatasthapana Muhurat & Day-by-Day Puja Vidhi',
    seo_description_template: 'Complete Chaitra Navratri 2026 schedule, Kalash Sthapana muhurat, 9 Devi forms, fasting rules, mantras and Ram Navami dates.',
    puja_information: {
      overview: 'Commences with Ghatasthapana on Pratipada morning during auspicious lagna avoiding Chitra Nakshatra and Vaidhriti Yoga.',
      samagri: [
        { item: 'Copper or Earthen Kalash with Coconut', quantity: '1 set', required: true, significance: 'Cosmic womb (Hiranyagarbha)' },
        { item: 'Earthen tray with clean soil & Barley (Jau)', quantity: '1 set', required: true, significance: 'Seed of universal fertility' },
        { item: 'Mango or Ashoka leaves', quantity: '5 or 7 pcs', required: true, significance: 'Divine canopy' },
        { item: 'Red Chunri and Shringar items for Mata', quantity: '1 set', required: true, significance: 'Offerings to Devi' },
        { item: 'Akhand Diya with pure cow ghee', quantity: '1 lamp', required: true, significance: 'Unbroken light of consciousness' }
      ],
      steps: [
        { stepNumber: 1, title: 'Kalash Sthapana', procedure: 'Sow barley in clean soil, place water-filled kalash with sacred coins, betel nut, mango leaves, and wrapped coconut.' },
        { stepNumber: 2, title: 'Avahana & Akhand Jyot', procedure: 'Invoke Goddess Durga with Vedic mantras and light the unbroken sacred flame for 9 days.' },
        { stepNumber: 3, title: 'Durga Saptashati Path', procedure: 'Recite chapters of Devi Mahatmya daily with devotion.' },
        { stepNumber: 4, title: 'Kanya Pujan & Havan', procedure: 'Wash feet of young girls, apply tilak, offer puri-chana-halwa and seek their divine blessings.' }
      ],
      prasadDetails: 'Halwa, Poori, Kala Chana, Singhora Kheer, and fresh seasonal fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Ghatasthapana Muhurat',
      rulesDescription: 'First one-third of the daytime on Pratipada, or during Abhijit Muhurat.',
      calculationKey: 'day_choghadiya'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Fast ends on Dashami morning following Kanya Pujan and final arati of Sri Rama Navami.'
    },
    regional_variations: [],
    faqs: [
      { question: 'What is the difference between Chaitra Navratri and Sharad Navratri?', answer: 'Chaitra Navratri falls in spring (Chaitra month) and concludes with Ram Navami, while Sharad Navratri falls in autumn (Ashwin) and culminates in Dussehra / Durga Puja.' }
    ],
    references: [
      { title: 'Devi Bhagavata Purana', source: 'Skanda 3, Chapter 26' },
      { title: 'Markandeya Purana', source: 'Devi Mahatmya' }
    ]
  },
  {
    id: 'hartalika-teej',
    canonical_name: 'Hartalika Teej',
    hindi_name: 'हरतालिका तीज (अखंड सौभाग्य व शिव-पार्वती महाव्रत)',
    gujarati_name: 'હરતાલિકા ત્રીજ (અખંડ સૌભાગ્ય વ્રત)',
    alternate_names: ['Haritalika Teej', 'Hartalika Tritiya'],
    regional_names: {
      hi: 'हरतालिका तीज',
      gu: 'હરતાલિકા ત્રીજ',
      mr: 'हरतालिका तृतीया',
      te: 'హరితాళికా తీజ్'
    },
    sanskrit_name: 'हरितालिकाव्रतम्',
    transliteration: 'Haritālikā Tīja',
    slug: 'hartalika-teej',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'shaiva',
    deity: 'Lord Shiva & Mata Parvati',
    deity_category: 'shiva',
    lunar_month: 'bhadrapada',
    paksha: 'shukla',
    tithi_name: 'Tritiya (तृतीया)',
    tithi_number: 3,
    base_day_of_year: 247,
    calculation_method: 'Bhadrapada Shukla Tritiya prevailing during Pradosh Kaal and morning',
    short_description: 'The supreme nirjala (waterless) fast observed by married women for marital longevity and unmarried women for a virtuous husband, worshipping handcrafted clay idols of Shiva-Parvati.',
    full_overview: 'Hartalika Teej commemorates the day Goddess Parvati’s close friends (Aali) abducted (Harita) her to dense forests so that she could perform intense penance to attain Lord Shiva as her husband without parental obstruction.',
    significance: 'Exemplifies supreme dedication, unconditional love, and spiritual fortitude, granting unbroken marital bliss (Akhand Saubhagya).',
    history_and_tradition: 'Narrated by Lord Shiva Himself to Mata Parvati in the Bhavishyottara Purana, detailing her 107 previous births of penance.',
    cultural_traditions: [
      'Observing strict 24-hour Nirjala fasting (without water or food).',
      'Sculpting natural sand or clay idols of Shiva, Parvati, and Ganesha with one’s own hands.',
      'Night-long vigil (Ratri Jagran) with kirtan and traditional Teej folk songs.',
      'Dressing in vibrant red, green, or yellow bridal attire with complete Solah Shringar.'
    ],
    regions: ['Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Rajasthan', 'Maharashtra', 'Gujarat', 'Nepal'],
    languages: ['Hindi', 'Bhojpuri', 'Maithili', 'Marathi', 'Nepali'],
    hero_image_theme: 'emerald',
    topical_collections: ['top-20', 'top-25', 'popular', 'teej-festivals', 'vrat-fasting', 'shiva-festivals'],
    related_festivals: ['ganesh-chaturthi', 'karwa-chauth', 'hariyali-teej'],
    related_vrat: ['shivaratri-vrat', 'vat-savitri'],
    related_temple_ids: ['kashi-vishwanath'],
    seo_title_template: 'Hartalika Teej 2026 Date, Pradosh Kaal Puja Muhurat & Vrat Katha',
    seo_description_template: 'Hartalika Teej 2026 exact date, Pradosh Kaal puja timings, handmade clay idol vidhi, nirjala fasting rules, and Vrat Katha.',
    puja_information: {
      overview: 'Puja is conducted during Pradosh Kaal (twilight) or morning by installing handcrafted clay idols of Lord Shiva, Mata Parvati, and Lord Ganesha under a floral mandap.',
      samagri: [
        { item: 'Fine River Sand or Clay for Idols', quantity: '1 bowl', required: true, significance: 'Earth element connection' },
        { item: 'Belpatra, Shami leaves & Dhatura flower', quantity: '11 pcs each', required: true, significance: 'Favorite offerings of Shiva' },
        { item: '16 Shringar items for Mata Parvati', quantity: '1 set', required: true, significance: 'Bindi, sindoor, bangles, mehendi, chunri' },
        { item: 'Fresh fruits, sweets and coconut', quantity: '5 varieties', required: true, significance: 'Panchamrit and fruit offering' }
      ],
      steps: [
        { stepNumber: 1, title: 'Murtikar Sthapana', procedure: 'Sculpt Shiva, Parvati, and Ganesha from clean sand or clay and place them on a decorated chowki.' },
        { stepNumber: 2, title: 'Shodashopachara Puja', procedure: 'Offer Belpatra, Janeu, Chandan to Shiva, and complete 16 Shringar to Parvati.' },
        { stepNumber: 3, title: 'Hartalika Vrat Katha Path', procedure: 'Listen to the sacred Vrat Katha with a burning camphor or diya in hand.' },
        { stepNumber: 4, title: 'Ratri Jagran & Visarjan', procedure: 'Perform arati every 3 hours through the night. Conclude with visarjan into flowing water the next morning.' }
      ],
      prasadDetails: 'Suji Halwa, Gujiya, Ghewar, Panchamrit, and five seasonal fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pradosh Kaal Hartalika Puja Muhurat',
      rulesDescription: 'Conducted in Pradosh Kaal or morning during Hast nakshatra.',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'Fast is broken the following morning (Chaturthi) after offering final prayers and immersion of clay idols.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Can unmarried girls observe Hartalika Teej?', answer: 'Yes, unmarried girls traditionally observe this fast with great faith to pray for a noble, compassionate, and loving life partner like Lord Shiva.' }
    ],
    references: [
      { title: 'Bhavishyottara Purana', source: 'Hartalika Vrat Mahatmya' }
    ]
  },
  {
    id: 'vat-savitri',
    canonical_name: 'Vat Savitri Vrat',
    hindi_name: 'वट सावित्री व्रत (वट वृक्ष पूजन व सत्यवान-सावित्री कथा)',
    gujarati_name: 'વટ સાવિત્રી વ્રત (વડ પૂજન)',
    alternate_names: ['Vat Purnima', 'Vat Amavasya', 'Savitri Vrat'],
    regional_names: {
      hi: 'वट सावित्री व्रत',
      gu: 'વટ સાવિત્રી વ્રત / વડ પૂજા',
      mr: 'वटपौर्णिमा (Vat Purnima)',
      or: 'ସାବିତ୍ରୀ ବ୍ରତ (Savitri Brata)'
    },
    sanskrit_name: 'वटसावित्रीव्रतम्',
    transliteration: 'Vaṭa Sāvitrī Vratam',
    slug: 'vat-savitri',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'Savitri, Satyavan, Lord Yama & Brahma-Savitri in Banyan Tree',
    deity_category: 'devi',
    lunar_month: 'jyeshtha',
    paksha: 'krishna',
    tithi_name: 'Jyeshtha Amavasya / Purnima',
    tithi_number: 30,
    base_day_of_year: 153,
    calculation_method: 'Jyeshtha Amavasya in North India; Jyeshtha Purnima in Gujarat, Maharashtra & South',
    short_description: 'Revered fast where married women wrap sacred red-yellow threads around the immortal Banyan tree (Vat Vriksha) praying for husband’s long life, remembering Savitri’s triumph over Yama.',
    full_overview: 'Vat Savitri Vrat honors the legendary devotion of Savitri, who through steadfast intellect and unwavering virtue compelled Yamaraj (the God of Death) to restore the life of her deceased husband Satyavan beneath a Banyan tree.',
    significance: 'The Vat Vriksha (Banyan tree) represents the Trimurti—Brahma in the roots, Vishnu in the trunk, and Shiva in the canopy—symbolizing immortality and protection.',
    cultural_traditions: [
      'Wrapping red and yellow raw cotton thread (Moli) seven times around the Vat Vriksha trunk.',
      'Watering the sacred tree roots and offering soaked black gram (Chana), flowers, and wet grains.',
      'Fanning the husband with a hand-held bamboo fan (Bījhnā) as an act of loving care.',
      'Hearing the poignant Savitri-Satyavan Katha from elder women.'
    ],
    regions: ['Pan-India', 'North India (Amavasya)', 'Maharashtra & Gujarat (Purnima)', 'Odisha'],
    languages: ['Hindi', 'Marathi', 'Gujarati', 'Odia'],
    hero_image_theme: 'amber',
    topical_collections: ['popular', 'vrat-fasting', 'jyeshtha-festivals'],
    related_festivals: ['karwa-chauth', 'hartalika-teej'],
    related_vrat: ['karwa-chauth-vrat'],
    related_temple_ids: [],
    seo_title_template: 'Vat Savitri Vrat 2026 Date, Vat Purnima Muhurat & Puja Vidhi',
    seo_description_template: 'Vat Savitri Vrat 2026 date, tree parikrama muhurat, Savitri Satyavan katha, fasting rules for Amavasya and Purnima traditions.',
    puja_information: {
      overview: 'Conducted in the morning under a live Banyan tree with offerings of soaked chana, seasonal fruits, and raw thread.',
      samagri: [
        { item: 'Raw white cotton thread or yellow/red yarn', quantity: '1 spool', required: true, significance: 'For 7 parikramas of the tree' },
        { item: 'Soaked Black Gram (Kala Chana)', quantity: '250g', required: true, significance: 'Offered to tree and consumed to break fast' },
        { item: 'Handmade Bamboo Fan (Pankha)', quantity: '1 pc', required: true, significance: 'Reverence to life partner' },
        { item: 'Red Sindoor, Haldi, Akshat and seasonal fruits', quantity: '1 plate', required: true, significance: 'Traditional Shringar offerings' }
      ],
      steps: [
        { stepNumber: 1, title: 'Worship Vat Vriksha', procedure: 'Bathe the roots of the Banyan tree with pure water and milk, apply chandan, kumkum, and flowers.' },
        { stepNumber: 2, title: 'Thread Parikrama', procedure: 'Circumambulate the tree 7 times while wrapping the sacred yarn around its trunk.' },
        { stepNumber: 3, title: 'Katha Shravan', procedure: 'Sit together with fellow devotees and listen to the Savitri-Satyavan legend.' },
        { stepNumber: 4, title: 'Offer Chana Prasadam', procedure: 'Swallow whole soaked gram seeds with water while seeking blessings for marital longevity.' }
      ],
      prasadDetails: 'Soaked black chana, mangoes, jackfruit, sweet puri, and soaked lentils.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Vat Savitri Morning Puja Muhurat',
      rulesDescription: 'Early morning sunrise period during Amavasya / Purnima.',
      calculationKey: 'standard'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Fast is broken by swallowing 7 or 11 soaked whole chana with water after the tree parikrama.'
    },
    regional_variations: [
      {
        region: 'North India & Bihar',
        customs: 'Celebrated on Jyeshtha Amavasya.',
        distinctiveNames: ['Vat Savitri Amavasya', 'Barsait'],
        uniqueFoodsOrRituals: 'Bamboo fan fanning ritual and chana prasad.'
      },
      {
        region: 'Maharashtra & Gujarat',
        customs: 'Celebrated 15 days later on Jyeshtha Purnima.',
        distinctiveNames: ['Vat Purnima'],
        uniqueFoodsOrRituals: 'Women in traditional Nauvari / Patola sarees perform combined rituals.'
      }
    ],
    faqs: [
      { question: 'Why is Vat Savitri observed on two different dates?', answer: 'Due to North India using the Purnimanta calendar (where month ends on Purnima and dark fortnight falls first) versus Western and Southern India using the Amanta calendar.' }
    ],
    references: [
      { title: 'Mahabharata, Vana Parva', source: 'Pativrata Mahatmya Parva' }
    ]
  },
  {
    id: 'devshayani-ekadashi',
    canonical_name: 'Devshayani Ekadashi (Ashadhi Ekadashi)',
    hindi_name: 'देवशयनी एकादशी (आषाढ़ी एकादशी व चातुर्मास प्रारंभ)',
    gujarati_name: 'દેવશયની એકાદશી (અષાઢી અગિયારસ - ચતુર્માસ પ્રારંભ)',
    alternate_names: ['Ashadhi Ekadashi', 'Padma Ekadashi', 'Hari Shayani Ekadashi'],
    regional_names: {
      hi: 'देवशयनी एकादशी',
      gu: 'અષાઢી અગિયારસ',
      mr: 'आषाढी एकादशी (पंढरपूर वारी)',
      te: 'తొలి ఏకాదశి (Tholi Ekadashi)'
    },
    sanskrit_name: 'शयनीएकादशी / चातुर्मास्यव्रतम्',
    transliteration: 'Devaśayanī Ekādaśī',
    slug: 'devshayani-ekadashi',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Bhagwan Vishnu & Lord Vitthal (Pandharpur)',
    deity_category: 'vishnu',
    lunar_month: 'ashadha',
    paksha: 'shukla',
    tithi_name: 'Ekadashi (एकादशी)',
    tithi_number: 11,
    base_day_of_year: 191,
    calculation_method: 'Ashadha Shukla Ekadashi at Sunrise',
    short_description: 'Marks the divine cosmic slumber of Lord Vishnu in Kshira Sagara for four sacred monsoon months (Chaturmas), and the culmination of Pandharpur Wari yatra.',
    full_overview: 'On Devshayani Ekadashi, Bhagwan Vishnu enters Yogic slumber (Yoga Nidra) on Sheshanaga in the cosmic Ocean of Milk. This initiates Chaturmas—the four most sacred months of spiritual austerity, non-violence, and self-restraint. In Maharashtra, over a million Warkari pilgrims converge at Vitthal Temple Pandharpur chanting "Gyanba Tukaram".',
    significance: 'External auspicious ceremonies like marriages pause during Chaturmas, turning the human focus inward toward meditation, reading scriptures, and purification.',
    history_and_tradition: 'Mentioned in Bhavishyottara Purana where Lord Krishna explains the story of King Mandhata, whose drought-stricken kingdom was restored through this vrat.',
    cultural_traditions: [
      'Grand arrival of Palkhis carrying Padukas of Sant Dnyaneshwar and Sant Tukaram in Pandharpur.',
      'Taking vows of Chaturmas (abstaining from greens in Shravan, curd in Bhadrapada, milk in Ashwin, and dal in Kartik).',
      'Observing strict Ekadashi fast with fruits and milk.',
      'Continuous Vishnu Sahasranama chanting and Bhajan sessions.'
    ],
    regions: ['Pan-India', 'Maharashtra', 'Gujarat', 'Andhra Pradesh', 'Karnataka'],
    languages: ['Marathi', 'Hindi', 'Gujarati', 'Telugu', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['popular', 'ekadashi-festivals', 'vrat-fasting', 'ashadha-festivals'],
    related_festivals: ['devutthana-ekadashi', 'guru-purnima', 'tulsi-vivah'],
    related_vrat: ['ekadashi-vrat', 'chaturmas-vrat'],
    related_temple_ids: ['pandharpur-vitthal'],
    seo_title_template: 'Devshayani Ekadashi 2026 Date, Parana Muhurat & Chaturmas Rules',
    seo_description_template: 'Devshayani Ekadashi 2026 exact date, Ashadhi Ekadashi Parana timings, Chaturmas dietary rules, and Pandharpur Wari significance.',
    puja_information: {
      overview: 'Devotees bathe Vishnu idols in Panchamrit, offer yellow flowers and Tulsi, and symbolically lay the deity to sleep on a decorated couch.',
      samagri: [
        { item: 'Fresh Tulsi leaves', quantity: '108 leaves', required: true, significance: 'Supreme pleasure of Vishnu' },
        { item: 'Yellow Silk Cloth & Flowers', quantity: '1 set', required: true, significance: 'Pitambara attire' },
        { item: 'Panchamrit (Milk, Curd, Ghee, Honey, Sugar)', quantity: '1 bowl', required: true, significance: 'Sacred abhishekam' },
        { item: 'Small bedding/cradle for Laddu Gopal/Vishnu', quantity: '1 set', required: false, significance: 'Yoga Nidra preparation' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Snana & Sankalp', procedure: 'Take a holy morning bath and resolve to observe the Ekadashi fast and 4-month Chaturmas vows.' },
        { stepNumber: 2, title: 'Panchamrit Abhishek', procedure: 'Bathe Bhagwan Vishnu / Shaligram chanting the Purusha Sukta.' },
        { stepNumber: 3, title: 'Vishnu Sahasranama Path', procedure: 'Chant 1,000 divine names offering fresh Tulsi leaves with each name.' },
        { stepNumber: 4, title: 'Shayana Seva Mantra', procedure: 'Place the deity on a comfortable bedding reciting the sacred bedtime prayer: "Suptaye Tvam Jaganatha...".' }
      ],
      prasadDetails: 'Sabudana Khichdi, Makhana Kheer with rock salt, and seasonal fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Ekadashi Puja & Chaturmas Sankalp Kaal',
      rulesDescription: 'Morning hours following sunrise.',
      calculationKey: 'standard'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Parana must be completed on Dwadashi morning before Hari Vasara ends.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why are marriages prohibited during Chaturmas?', answer: 'Because Bhagwan Vishnu, the cosmic preserver of oaths and marital harmony, rests in Yoga Nidra; thus spiritual energies are reserved for inner austerity.' }
    ],
    references: [
      { title: 'Bhavishyottara Purana', source: 'Devshayani Ekadashi Mahatmya' }
    ]
  },
  {
    id: 'devutthana-ekadashi',
    canonical_name: 'Devutthana Ekadashi (Prabodhini & Tulsi Vivah)',
    hindi_name: 'देवउठनी एकादशी (प्रबोधिनी एकादशी, तुलसी विवाह प्रारंभ)',
    gujarati_name: 'દેવઉઠી અગિયારસ (તુલસી વિવાહ ઉત્સવ)',
    alternate_names: ['Prabodhini Ekadashi', 'Dev Uthani Gyaras', 'Kartiki Ekadashi'],
    regional_names: {
      hi: 'देवउठनी एकादशी / देव प्रबोधिनी',
      gu: 'દેવઉઠી અગિયારસ',
      mr: 'कार्तिकी एकादशी (प्रबोधिनी)',
      te: 'ప్రబోధినీ ఏకాదశి'
    },
    sanskrit_name: 'प्रबोधिनीएकादशी / देवोत्थानम्',
    transliteration: 'Devotthāna Ekādaśī',
    slug: 'devutthana-ekadashi',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Bhagwan Vishnu & Tulsi Maharani',
    deity_category: 'vishnu',
    lunar_month: 'kartik',
    paksha: 'shukla',
    tithi_name: 'Ekadashi (एकादशी)',
    tithi_number: 11,
    base_day_of_year: 324,
    calculation_method: 'Kartik Shukla Ekadashi at Sunrise',
    short_description: 'Celebrates the awakening of Lord Vishnu from his 4-month slumber, inaugurating the auspicious wedding season with the ceremonial marriage of Tulsi and Shaligram.',
    full_overview: 'Devutthana Ekadashi marks the glorious awakening of Lord Vishnu from Yoga Nidra, ending Chaturmas. Devotees construct sugarcane canopies, draw footprints of Vishnu entering the courtyard, and begin the divine 5-day Tulsi Vivah ceremonies, unblocking all wedding festivities across India.',
    significance: 'Symbolizes the dawn of righteous action, revival of marriages, and gratitude for spiritual knowledge gained during the months of retreat.',
    cultural_traditions: [
      'Awakening Bhagwan Vishnu by beating metal thalis and chanting "Utho Deva, Baitho Deva!".',
      'Constructing a four-pillar Mandap from fresh sugarcane stalks.',
      'Drawing lotus footprints with rice lime slurry from courtyard to puja altar.',
      'Conducting Tulsi Vivah with Shaligram complete with Kanyadaan, Mangalsutra, and Sindoor.'
    ],
    regions: ['Pan-India', 'North India', 'Gujarat', 'Maharashtra', 'Rajasthan'],
    languages: ['Hindi', 'Gujarati', 'Marathi', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'ekadashi-festivals', 'kartik-festivals'],
    related_festivals: ['tulsi-vivah', 'kartik-purnima', 'devshayani-ekadashi'],
    related_vrat: ['ekadashi-vrat'],
    related_temple_ids: ['shrinathji', 'pandharpur-vitthal'],
    seo_title_template: 'Devutthana Ekadashi 2026 Date, Tulsi Vivah Muhurat & Awakening Vidhi',
    seo_description_template: 'Devutthana Ekadashi 2026 exact date, Vishnu awakening mantras, sugarcane mandap vidhi, and Tulsi Vivah timings.',
    puja_information: {
      overview: 'Puja is conducted at sunset under a sugarcane pavilion with offerings of water chestnuts (Singhara), sweet potato, and radishes.',
      samagri: [
        { item: 'Sugarcane stalks with leaves', quantity: '4 full stalks', required: true, significance: 'For marriage canopy' },
        { item: 'Singhara (Water Chestnut), Sweet Potato, Radish, Ber', quantity: '500g each', required: true, significance: 'Seasonal harvest bhog' },
        { item: 'Tulsi Vrindavan & Shaligram stone', quantity: '1 pair', required: true, significance: 'Divine bride and groom' },
        { item: 'Red Chunri, Yellow cloth & Garland', quantity: '2 sets', required: true, significance: 'Bridal adornments' }
      ],
      steps: [
        { stepNumber: 1, title: 'Sugarcane Mandap', procedure: 'Tie 4 sugarcane stalks into a canopy over the Tulsi plant and Shaligram.' },
        { stepNumber: 2, title: 'Awakening Chant', procedure: 'Light 11 diyas and chant "Uttishtha Govinda Tyaja Nidram Jagatpate" while ringing temple bells.' },
        { stepNumber: 3, title: 'Offer Harvest Produce', procedure: 'Offer fresh sweet potatoes, amla, singhara, and sugarcane chunks.' },
        { stepNumber: 4, title: 'Tulsi Vivah Sankalp', procedure: 'Tie the sacred matrimonial knot between Shaligram and Tulsi chanting Vedic Mangalashtaka.' }
      ],
      prasadDetails: 'Boiled sweet potato, fresh Singhara, sugarcane pieces, and Makhana kheer.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Devutthana Sandhya Puja Muhurat',
      rulesDescription: 'Conducted in twilight (Sandhya) and Pradosh Kaal.',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Parana on Kartik Shukla Dwadashi morning with Tulsi water and satvik feast.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why does the Hindu wedding season start on Devutthana Ekadashi?', answer: 'Because Lord Vishnu reawakens to bless society with righteousness and prosperity, sanctifying matrimonial bonds.' }
    ],
    references: [
      { title: 'Padma Purana', source: 'Kartik Mahatmya' },
      { title: 'Skanda Purana', source: 'Vishnu Awakening Chapter' }
    ]
  },
  {
    id: 'vaikuntha-ekadashi',
    canonical_name: 'Vaikuntha Ekadashi (Mukkoti Ekadashi)',
    hindi_name: 'वैकुंठ एकादशी (मुक्कोटी एकादशी व वैकुंठ द्वार दर्शन)',
    gujarati_name: 'વૈકુંઠ એકાદશી (મોક્ષદા એકાદશી)',
    alternate_names: ['Mukkoti Ekadashi', 'Swarga Vathil Ekadashi', 'Mokshada Ekadashi'],
    regional_names: {
      ta: 'வைகுண்ட ஏகாதசி (Vaikunta Ekadasi)',
      te: 'వైకుంఠ ఏకాదశి / ముక్కోటి ఏకాదశి',
      kn: 'ವೈಕುಂಠ ಏಕಾದಶಿ (Vaikuntha Ekadashi)',
      ml: 'സ്വർഗ്ഗവാതിൽ ഏകാദശി'
    },
    sanskrit_name: 'वैकुण्ठैकादशी / मोक्षप्रदैकादशी',
    transliteration: 'Vaikuṇṭha Ekādaśī',
    slug: 'vaikuntha-ekadashi',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Lord Venkateswara & Sri Ranganatha',
    deity_category: 'vishnu',
    lunar_month: 'margashirsha',
    paksha: 'shukla',
    tithi_name: 'Ekadashi (Dhanurmas Shukla)',
    tithi_number: 11,
    base_day_of_year: 355,
    calculation_method: 'Margashirsha / Dhanurmas Shukla Ekadashi at Sunrise',
    short_description: 'The supreme Vaishnava observance where the celestial Vaikuntha Dwaram (Gate to Heaven) is opened at Tirumala Tirupati and Srirangam temples, liberating souls from rebirth.',
    full_overview: 'Vaikuntha Ekadashi is the preeminent festival celebrated across South Indian Sri Vaishnava temples. Millions of devotees queue from midnight at Tirumala and Sri Ranganathaswamy Temple, Srirangam, to pass through the majestic Vaikuntha Dwaram (Paramapada Vasal), believed to bestow immediate liberation.',
    significance: 'It is believed that on this sacred day, 33 crore (Mukkoti) celestial deities descend to Vaikuntha to worship Lord Narayana.',
    cultural_traditions: [
      'Passing through the northern Vaikuntha Dwaram gateway in temples.',
      'Recitation of the entire 4,000 Divya Prabandham by temple priests.',
      'Complete waterless fasting and all-night vigil reciting Vishnu Sahasranama.',
      'Coincides with Gita Jayanti—the day Lord Krishna imparted the Bhagavad Gita to Arjuna.'
    ],
    regions: ['Andhra Pradesh', 'Tamil Nadu', 'Karnataka', 'Telangana', 'Kerala'],
    languages: ['Tamil', 'Telugu', 'Kannada', 'Sanskrit', 'English'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-25', 'popular', 'ekadashi-festivals', 'south-indian'],
    related_festivals: ['gita-jayanti', 'nirjala-ekadashi'],
    related_vrat: ['ekadashi-vrat'],
    related_temple_ids: ['tirupati-balaji', 'srirangam'],
    seo_title_template: 'Vaikuntha Ekadashi 2026 Date, Vaikuntha Dwaram Timings & Parana Vidhi',
    seo_description_template: 'Vaikuntha Ekadashi 2026 date, Tirupati Balaji Vaikuntha Dwaram schedule, fasting rules, Gita Jayanti correlation, and Parana times.',
    puja_information: {
      overview: 'Conducted before dawn by offering Tulsi garlands, chanting Vishnu Sahasranama, and circumambulating temples.',
      samagri: [
        { item: 'Fresh Green Tulsi Leaves & Garlands', quantity: '5 garlands', required: true, significance: 'Paramapada offering' },
        { item: 'Pure Cow Milk, Honey & Ghee for Abhishekam', quantity: '1 set', required: true, significance: 'Panchamrit ritual' },
        { item: 'Yellow silk cloth & Chandan paste', quantity: '1 set', required: true, significance: 'Venkateswara Shringar' }
      ],
      steps: [
        { stepNumber: 1, title: 'Nirmalya Seva & Suprabhatam', procedure: 'Wake before sunrise at 3:30 AM and chant the Venkateswara Suprabhatam.' },
        { stepNumber: 2, title: 'Pass Through Sacred Gateway', procedure: 'Visit temple and walk through the northern Vaikuntha Dwaram gateway in devout reverence.' },
        { stepNumber: 3, title: 'Gita Chanting', procedure: 'Recite all 18 chapters or Chapter 12 and 15 of the Bhagavad Gita.' },
        { stepNumber: 4, title: 'Akhanda Kirtan', procedure: 'Spend the night singing Govinda Namavali without sleeping.' }
      ],
      prasadDetails: 'Tirupati Laddu, sweet Pongal, and Puliyodarai (tamarind rice) distributed after Dwadashi parana.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Vaikuntha Dwaram Opening Muhurat',
      rulesDescription: 'Early morning Brahma Muhurat opening of temple sanctums.',
      calculationKey: 'standard'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Upavas',
      paranaRules: 'Parana on Dwadashi morning with gooseberry (Amla) and Agathi keerai (hummingbird tree leaves).'
    },
    regional_variations: [],
    faqs: [
      { question: 'What is Vaikuntha Dwaram?', answer: 'The special northern gate in Vishnu temples opened only during the 10 days of Vaikuntha Ekadashi. Passing through it represents leaving mortal illusion and entering the divine abode of peace.' }
    ],
    references: [
      { title: 'Padma Purana', source: 'Uttara Khanda' }
    ]
  },
  {
    id: 'ahoi-ashtami',
    canonical_name: 'Ahoi Ashtami',
    hindi_name: 'अहोई अष्टमी (संतान दीर्घायु व अहोई माता पूजन)',
    gujarati_name: 'અહોઈ આઠમ (સંતાન રક્ષા વ્રત)',
    alternate_names: ['Ahoi Aathe', 'Ahoi Ashtami Vrat'],
    regional_names: {
      hi: 'अहोई अष्टमी / अहोई आठे',
      gu: 'અહોઈ આઠમ',
      pa: 'ਅਹੋਈ ਅਸ਼ਟਮੀ'
    },
    sanskrit_name: 'अहोईअष्टमीव्रतम्',
    transliteration: 'Ahoī Aṣṭamī',
    slug: 'ahoi-ashtami',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'Goddess Ahoi (Ahoi Mata) & Syahu Mata',
    deity_category: 'devi',
    lunar_month: 'kartik',
    paksha: 'krishna',
    tithi_name: 'Ashtami (अष्टमी)',
    tithi_number: 8,
    base_day_of_year: 304,
    calculation_method: 'Kartik Krishna Ashtami observed when stars (Taara) appear in evening',
    short_description: 'Sacred fast observed by mothers for the health, prosperity, and longevity of their children, breaking the fast upon sighting stars or the moon in the evening sky.',
    full_overview: 'Falling four days after Karwa Chauth and eight days before Diwali, Ahoi Ashtami is an affectionate fast where mothers draw the image of Ahoi Mata and Syahu Mata with her cubs on the wall, praying for divine protection over their children.',
    significance: 'Maternal devotion mirroring the penance of the legendary woman who accidentally harmed porcupine cubs and through this vrat regained her seven sons.',
    cultural_traditions: [
      'Drawing image of Ahoi Mata with geru (ochre paste) on courtyard walls.',
      'Wearing a sacred silver necklace called "Syahu Mala", adding silver beads every year for each child.',
      'Keeping water in a clean Karwa and offering Arghya to the stars (Taara Arghya) at twilight.',
      'Mothers abstain from water until seeing the stars.'
    ],
    regions: ['Uttar Pradesh', 'Haryana', 'Punjab', 'Delhi', 'Rajasthan', 'Madhya Pradesh'],
    languages: ['Hindi', 'Punjabi', 'Bhojpuri'],
    hero_image_theme: 'rose',
    topical_collections: ['popular', 'vrat-fasting', 'kartik-festivals'],
    related_festivals: ['karwa-chauth', 'diwali', 'dhanteras'],
    related_vrat: ['karwa-chauth-vrat'],
    related_temple_ids: ['radha-kund'],
    seo_title_template: 'Ahoi Ashtami 2026 Date, Star Sighting Muhurat & Puja Vidhi',
    seo_description_template: 'Ahoi Ashtami 2026 exact date, evening star sighting and moonrise timings, Syahu Mala vidhi, and Ahoi Mata Vrat Katha.',
    puja_information: {
      overview: 'Puja is conducted at twilight by drawing Ahoi Mata and offering grain and water to evening stars.',
      samagri: [
        { item: 'Ahoi Mata picture/poster or Geru paint', quantity: '1 set', required: true, significance: 'Sanctum drawing' },
        { item: 'Silver Syahu locket with beads & sacred thread', quantity: '1 necklace', required: true, significance: 'Lineage protection' },
        { item: 'Radha Kund holy water / clean Karwa water', quantity: '1 pot', required: true, significance: 'Arghya offering' },
        { item: '8 Wheat Puris and Halwa or Pua', quantity: '8 sets', required: true, significance: 'Ashtami offering' }
      ],
      steps: [
        { stepNumber: 1, title: 'Draw Ahoi Altar', procedure: 'Draw Ahoi Mata with eight corners, the Sun, Moon, and cubs of Syahu Mata.' },
        { stepNumber: 2, title: 'Katha Shravan', procedure: 'Mothers sit together holding wheat grains in their dupatta and listen to the Ahoi Katha.' },
        { stepNumber: 3, title: 'Star Arghya', procedure: 'Step outside as evening stars appear and offer water Arghya to the first visible star.' },
        { stepNumber: 4, title: 'Bless Children', procedure: 'Touch the feet of elders and feed sweets to children before breaking the fast.' }
      ],
      prasadDetails: 'Atta Halwa, sweet wheat Malpua, and seasonal radishes.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Star Sighting & Evening Puja Muhurat',
      rulesDescription: 'Conducted in twilight as stars (Taara) appear in the sky.',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'Fast broken immediately after offering Arghya to evening stars (or moon in some traditions).'
    },
    regional_variations: [],
    faqs: [
      { question: 'Who takes the holy dip at Radha Kund on Ahoi Ashtami?', answer: 'Couples wishing for children travel to Radha Kund near Mathura to take a midnight dip together on Ahoi Ashtami night, believed to grant offspring.' }
    ],
    references: [
      { title: 'Bhavishya Purana', source: 'Kartik Krishna Ashtami Vrat' }
    ]
  },
  {
    id: 'gangaur',
    canonical_name: 'Gangaur (Gauri Tritiya)',
    hindi_name: 'गणगौर (गौरी तृतीया व ईसर-गौरा पूजन)',
    gujarati_name: 'ગણગૌર (ગૌરી ત્રીજ ઉત્સવ)',
    alternate_names: ['Gauri Tritiya', 'Gangaur Vrat'],
    regional_names: {
      hi: 'गणगौर / गौरी तृतीया',
      gu: 'ગણગૌર',
      raj: 'गणगौर (Ghanghor)'
    },
    sanskrit_name: 'गणगौरमहोत्सवः / गौरीपर्व',
    transliteration: 'Gaṇagaura',
    slug: 'gangaur',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'shaiva',
    deity: 'Goddess Gauri (Parvati) & Lord Shiva (Isar)',
    deity_category: 'devi',
    lunar_month: 'chaitra',
    paksha: 'shukla',
    tithi_name: 'Tritiya (तृतीया)',
    tithi_number: 3,
    base_day_of_year: 82,
    calculation_method: 'Chaitra Shukla Tritiya morning and evening',
    short_description: 'The colourful Rajasthani and Gujarati festival honoring Mata Gauri and Isarji with clay idols, floral songs, colorful processions, and delicious Ghewar.',
    full_overview: 'Gangaur (Gana = Shiva, Gauri = Parvati) is the most colorful festival of Rajasthan, Gujarat, and Malwa, celebrated for 16 days starting the day after Holi and culminating on Chaitra Shukla Tritiya. Married women pray for marital bliss while unmarried women pray for ideal life partners.',
    significance: 'Celebrates the departure of Gauri from her maternal home to Mount Kailash with Lord Shiva.',
    cultural_traditions: [
      'Creating beautiful clay idols of Isar (Shiva) and Gauri (Parvati).',
      'Singing traditional Gangaur folk songs like "Gor Gor Gomti".',
      'Carrying Gauri idols on heads in royal processions with camel and horse parades in Jaipur and Udaipur.',
      'Exchanging seasonal sweets like Ghewar, Sinjara, and Mathri.'
    ],
    regions: ['Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Haryana', 'NRI Marwari Diaspora'],
    languages: ['Rajasthani', 'Hindi', 'Gujarati'],
    hero_image_theme: 'rose',
    topical_collections: ['popular', 'devi-festivals', 'chaitra-festivals'],
    related_festivals: ['chaitra-navratri', 'hartalika-teej', 'gudi-padwa-ugadi'],
    related_vrat: ['gauri-vrat'],
    related_temple_ids: ['city-palace-jaipur'],
    seo_title_template: 'Gangaur 2026 Date, Gauri Tritiya Puja Muhurat & Procession Guide',
    seo_description_template: 'Gangaur 2026 date, Isar-Gauri puja timings, Sinjara celebrations, Ghewar prasad, and traditional folk songs.',
    puja_information: {
      overview: 'Puja is conducted using clay idols of Isar and Gauri adorned with fresh grass and bridal garments.',
      samagri: [
        { item: 'Clay idols of Isarji & Gauriji', quantity: '1 pair', required: true, significance: 'Divine couple' },
        { item: 'Fresh green Doob grass', quantity: '1 bunch', required: true, significance: 'Sprinkling holy water' },
        { item: 'Ghewar, Sinjara sweets and Falhari', quantity: '1 box', required: true, significance: 'Traditional bhog' },
        { item: 'Red Chunri, Bangles and Mehendi', quantity: '1 set', required: true, significance: 'Shringar offering' }
      ],
      steps: [
        { stepNumber: 1, title: 'Adorn Idols', procedure: 'Dress Isar and Gauri in rich brocade and jewelry.' },
        { stepNumber: 2, title: 'Water Sprinkling & Singing', procedure: 'Dip green grass into milk and holy water and sprinkle it gently on the idols while singing folk songs.' },
        { stepNumber: 3, title: 'Offer Ghewar', procedure: 'Offer 16 small round sweets (falhari) and fresh Ghewar to Gauri Mata.' },
        { stepNumber: 4, title: 'Visarjan Procession', procedure: 'Take the idols in a celebratory royal procession to lakes, stepwells (Baori), or rivers for reverent immersion.' }
      ],
      prasadDetails: 'Traditional Ghewar, sweet mathri, and milk halwa.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Gangaur Tritiya Morning Puja Muhurat',
      rulesDescription: 'Conducted in morning during Chaitra Shukla Tritiya.',
      calculationKey: 'day_choghadiya'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Ekbukta',
      paranaRules: 'Single meal taken after afternoon visarjan and feeding sweets to female friends.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why is Gangaur celebrated for 16 days?', answer: 'The 16 days represent the 16 phases of the Moon (Shodasha Kala) and 16 qualities of feminine virtue through which Parvati won Lord Shiva.' }
    ],
    references: [
      { title: 'Padma Purana', source: 'Gauri Tritiya Mahatmya' }
    ]
  },
  {
    id: 'jayaparvati-vrat',
    canonical_name: 'Jayaparvati Vrat (Gujarat Gauri Vrat)',
    hindi_name: 'जयापार्वती व्रत (गुजरात गौरी व्रत - मोराकत)',
    gujarati_name: 'જયાપાર્વતી વ્રત (મોળાકત વ્રત - જવારા પૂજન)',
    alternate_names: ['Molakat Vrat', 'Gauri Vrat', 'Aluna Vrat'],
    regional_names: {
      gu: 'જયાપાર્વતી વ્રત / મોળાકત',
      hi: 'जयापार्वती व्रत',
      mr: 'जया पार्वती व्रत'
    },
    sanskrit_name: 'जयापार्वतीव्रतम् / अलवणव्रतम्',
    transliteration: 'Jayāpārvatī Vratam',
    slug: 'jayaparvati-vrat',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'shaiva',
    deity: 'Lord Shiva & Mata Jaya-Parvati',
    deity_category: 'devi',
    lunar_month: 'ashadha',
    paksha: 'shukla',
    tithi_name: 'Trayodashi to Krishna Tritiya (5 Days)',
    tithi_number: 13,
    base_day_of_year: 193,
    calculation_method: 'Ashadha Shukla Trayodashi morning Javara installation for 5 days',
    short_description: 'The beloved 5-day saltless (Aluna) penance observed by girls and women in Gujarat for harmonious marriage, happiness, and righteous progeny.',
    full_overview: 'Jayaparvati Vrat (locally known as Morakat or Molakat) is a cherished five-day penance observed by maidens and married women in Gujarat starting on Ashadha Shukla Trayodashi. Devotees sprout barley/wheat seeds (Jawara) in earthen cups, worship Shiva-Parvati with Kumkum and flowers, and abstain completely from salt for 5 days, concluding with a grand night-long vigil (Jagran).',
    significance: 'Commemorates how a pious Brahmin woman cured her husband’s leprosy through unconditional devotion and fasting to Goddess Parvati.',
    cultural_traditions: [
      'Sowing wheat or barley grains in small earthen cups (Kodiyu) on day 1 to grow green Jawara.',
      'Observing strict Aluna diet (food cooked without even a grain of salt) for 5 days.',
      'Tying a sacred red-white thread (Nagla) made of cotton dipped in kumkum.',
      'Observing the all-night Jagran on the fifth night with garba, games, and devotion.'
    ],
    regions: ['Gujarat', 'Saurashtra', 'Kutch', 'Mumbai Gujarati Community', 'Global Gujarati Diaspora'],
    languages: ['Gujarati', 'Hindi', 'Sanskrit'],
    hero_image_theme: 'emerald',
    topical_collections: ['popular', 'vrat-fasting', 'ashadha-festivals', 'gujarati-special'],
    related_festivals: ['hartalika-teej', 'gangaur'],
    related_vrat: ['gauri-vrat'],
    related_temple_ids: ['somnath', 'ambaji'],
    seo_title_template: 'Jayaparvati Vrat 2026 Dates, Javara Sthapana & Jagran Vidhi',
    seo_description_template: 'Jayaparvati Vrat 2026 5-day schedule, Jawara planting muhurat, saltless (Aluna) diet recipes, and Jagran parana rules in Gujarat.',
    puja_information: {
      overview: 'Conducted over 5 days in front of sprouting Jawara and Shiva-Parvati icons.',
      samagri: [
        { item: 'Small Earthen Pots with Soil', quantity: '2 pots', required: true, significance: 'For growing green Jawara' },
        { item: 'Clean Wheat / Barley Grains', quantity: '100g', required: true, significance: 'Sown on Trayodashi morning' },
        { item: 'Cotton Nagla with Kumkum spots', quantity: '5 strings', required: true, significance: 'Sacred adornment for Jawara' },
        { item: 'Fresh Bilva leaves and flowers', quantity: 'Daily fresh', required: true, significance: 'Shiva-Parvati worship' }
      ],
      steps: [
        { stepNumber: 1, title: 'Jawara Ropan', procedure: 'Sow wheat seeds in fertile soil in small earthen cups chanting "Om Namah Shivaya".' },
        { stepNumber: 2, title: 'Daily Nitya Puja', procedure: 'Water Jawara daily, offer chandan, kumkum, and wrap cotton Nagla thread around the pot.' },
        { stepNumber: 3, title: 'Saltless Diet (Aluna)', procedure: 'Consume only milk, fruits, dry fruits, and unsalted wheat/gram preparations.' },
        { stepNumber: 4, title: 'Night Jagran & Visarjan', procedure: 'Stay awake all night on the 5th day singing Bhajans and Garba. Conclude with Jawara immersion in a river or sea.' }
      ],
      prasadDetails: 'Dry fruits, unsalted milk sweets, seasonal fruits, and wheat porridge without salt.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Trayodashi Jawara Sthapana Muhurat',
      rulesDescription: 'Morning hours of Ashadha Shukla Trayodashi.',
      calculationKey: 'day_choghadiya'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Ekbukta',
      paranaRules: 'Parana on the 6th morning after Jagran with regular salted festive meal.'
    },
    regional_variations: [],
    faqs: [
      { question: 'What is Aluna food in Jayaparvati Vrat?', answer: 'Aluna means food strictly prepared without salt. Devotees eat fruit, milk, or unsalted flour preparations to practice restraint and discipline.' }
    ],
    references: [
      { title: 'Padma Purana', source: 'Jayaparvati Vrat Katha' }
    ]
  },
  {
    id: 'narasimha-jayanti',
    canonical_name: 'Narasimha Jayanti',
    hindi_name: 'नृसिंह जयंती (भगवान नृसिंह प्राकट्योत्सव)',
    gujarati_name: 'નૃસિંહ જયંતી (ભક્ત પ્રહલાદ રક્ષક પ્રભુ)',
    alternate_names: ['Narasimha Chaturdashi', 'Nrsimha Jayanthi'],
    regional_names: {
      hi: 'नृसिंह जयंती',
      gu: 'નરસિંહ જયંતિ',
      te: 'నృసింహ జయంతి',
      ta: 'நரசிம்ம ஜெயந்தி'
    },
    sanskrit_name: 'नृसिंहजन्मोत्सवः / नृसिंहचतुर्दशी',
    transliteration: 'Nṛsiṁha Jayantī',
    slug: 'narasimha-jayanti',
    festival_type: 'jayanti',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Bhagwan Narasimha (Half-Lion, Half-Man Avatar of Vishnu) & Bhakta Prahlada',
    deity_category: 'vishnu',
    lunar_month: 'vaishakha',
    paksha: 'shukla',
    tithi_name: 'Chaturdashi (चतुर्दशी)',
    tithi_number: 14,
    base_day_of_year: 134,
    calculation_method: 'Vaishakha Shukla Chaturdashi prevailing at Sunset (Sayankal / Sandhya Vyapini)',
    short_description: 'Celebrates the appearance of the fierce yet compassionate fourth incarnation of Lord Vishnu, bursting from a stone pillar at dusk to protect his child devotee Prahlada and destroy Hiranyakashipu.',
    full_overview: 'Narasimha Jayanti commemorates the manifestation of Lord Narasimha, the half-man half-lion avatar of Lord Vishnu. At sunset on Vaishakha Shukla Chaturdashi, the Lord appeared to validate the faith of young Bhakta Prahlada, upholding cosmic righteousness without violating Brahma’s boon.',
    significance: 'Affirms that God is omnipresent in every pillar and particle, ready to defend truth, innocence, and unwavering faith.',
    cultural_traditions: [
      'Observing fast until sunset (Sayankal).',
      'Special Sandhya Kaal abhishekam with panchamrit, sugarcane juice, and cold water to appease the fierce form.',
      'Chanting the powerful Narasimha Kavacha and Ugram Veeram Maha-Vishnum mantra.',
      'Distributing Panakam (cooling jaggery-pepper-cardamom drink) and soaked green moong.'
    ],
    regions: ['Pan-India', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Gujarat'],
    languages: ['Telugu', 'Sanskrit', 'Hindi', 'Tamil'],
    hero_image_theme: 'amber',
    topical_collections: ['popular', 'jayanti-festivals', 'vishnu-festivals', 'vaishakha-festivals'],
    related_festivals: ['rama-navami', 'janmashtami', 'akshaya-tritiya'],
    related_vrat: ['ekadashi-vrat'],
    related_temple_ids: ['simhachalam', 'ahobilam'],
    seo_title_template: 'Narasimha Jayanti 2026 Date, Sayankal Puja Muhurat & Mantras',
    seo_description_template: 'Narasimha Jayanti 2026 exact date, twilight appearance puja muhurat, Panakam prasad, Narasimha Kavacham and fasting vidhi.',
    puja_information: {
      overview: 'Performed precisely during Sayankal (sunset twilight) when the Lord manifested.',
      samagri: [
        { item: 'Jaggery, black pepper, cardamom & dry ginger', quantity: '1 set', required: true, significance: 'For cooling Panakam' },
        { item: 'Sugarcane juice & coconut water', quantity: '500ml', required: true, significance: 'Abhishekam to cool fierce form' },
        { item: 'Red flowers, Tulsi leaves and Chandan paste', quantity: '1 plate', required: true, significance: 'Loving adoration' }
      ],
      steps: [
        { stepNumber: 1, title: 'Sayankal Snana & Sankalp', procedure: 'Take a bath before sunset and sit facing east or north.' },
        { stepNumber: 2, title: 'Panchamrit & Panakam Abhishek', procedure: 'Perform abhishekam on Narasimha Shaligram chanting the Narasimha Gayatri.' },
        { stepNumber: 3, title: 'Narasimha Kavacham', procedure: 'Chant the protective prayer given by Prahlada Maharaj in the Brahmanda Purana.' },
        { stepNumber: 4, title: 'Offer Panakam & Arati', procedure: 'Offer cool Panakam and cucumber slices, breaking the fast with devotion.' }
      ],
      prasadDetails: 'Panakam (sweet jaggery drink with dry ginger and pepper), Kosambari (soaked moong salad), and seasonal fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Sayankal Narasimha Appearance Kaal',
      rulesDescription: 'Sunset twilight window between sunset and 1 hour following sunset.',
      calculationKey: 'pradosh'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Naktavrata',
      paranaRules: 'Fast broken at nightfall after the sunset abhishekam with Panakam and fruits.'
    },
    regional_variations: [],
    faqs: [
      { question: 'Why is Panakam offered to Lord Narasimha?', answer: 'Due to the intense cosmic heat generated by the fierce manifestation of Narasimha, cooling beverages like Panakam made of water, jaggery, cardamom, and pepper are lovingly offered to soothe the Lord.' }
    ],
    references: [
      { title: 'Srimad Bhagavatam', source: 'Canto 7, Chapter 8' },
      { title: 'Narasimha Purana', source: 'Avatar Manifestation Chapter' }
    ]
  },
  {
    id: 'anant-chaturdashi',
    canonical_name: 'Anant Chaturdashi (Ganesh Visarjan)',
    hindi_name: 'अनंत चतुर्दशी (गणेश विसर्जन व अनंत सूत्र महाव्रत)',
    gujarati_name: 'અનંત ચૌદશ (ગણેશ વિસર્જન અને અનંત દોરા પૂજન)',
    alternate_names: ['Anant Chaudas', 'Ganesh Visarjan Day'],
    regional_names: {
      hi: 'अनंत चतुर्दशी / गणेश विसर्जन',
      gu: 'અનંત ચૌદશ',
      mr: 'अनंत चतुर्दशी (गणेश विसर्जन)',
      kn: 'ಅನಂತ ಚತುರ್ದಶಿ (Ananta Chaturdashi)'
    },
    sanskrit_name: 'अनन्तचतुर्दशी / गणेशविसर्जनोत्सवः',
    transliteration: 'Ananta Caturdaśī',
    slug: 'anant-chaturdashi',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Ananta Padmanabha (Vishnu) & Lord Ganesha',
    deity_category: 'vishnu',
    lunar_month: 'bhadrapada',
    paksha: 'shukla',
    tithi_name: 'Chaturdashi (चतुर्दशी)',
    tithi_number: 14,
    base_day_of_year: 258,
    calculation_method: 'Bhadrapada Shukla Chaturdashi during daytime Madhyahna',
    short_description: 'The monumental dual festival featuring the grand immersion (Visarjan) of Lord Ganesha after 10 days of Ganeshotsav, and the worship of Lord Vishnu with the sacred 14-knot thread (Ananta Sutra).',
    full_overview: 'Anant Chaturdashi is observed with thrilling enthusiasm nationwide. Millions march to seas, rivers, and lakes chanting "Ganpati Bappa Morya, Pudhchya Varshi Laukariya!". Concurrently, devotees worship Lord Ananta Padmanabha by tying a consecrated 14-knot sacred silk band on the right arm, symbolizing the 14 realms of creation preserved by Vishnu.',
    significance: 'Lord Ganesha returns to Mount Kailash carrying away all obstacles, while Ananta Vrat restores lost fortunes, peace, and eternal protection.',
    cultural_traditions: [
      'Grand processions in Mumbai, Pune, and Surat with Dhol-Tasha troupes carrying majestic Ganpati idols.',
      'Tying the 14-knot sacred cotton/silk thread (Ananta Sutra) on the right wrist of men and left wrist of women.',
      'Offering 14 sweet puris (Ghir) or anarse to Lord Vishnu.',
      'Revering the Sheshanaga upon which Lord Ananta reclines.'
    ],
    regions: ['Pan-India', 'Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Goa', 'Karnataka'],
    languages: ['Marathi', 'Hindi', 'Gujarati', 'Konkani'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'ganesha-festivals', 'vishnu-festivals'],
    related_festivals: ['ganesh-chaturthi', 'pitru-paksha'],
    related_vrat: ['anant-vrat'],
    related_temple_ids: ['siddhivinayak', 'padmanabhaswamy'],
    seo_title_template: 'Anant Chaturdashi 2026 Date, Ganesh Visarjan Muhurat & Anant Sutra Vidhi',
    seo_description_template: 'Anant Chaturdashi 2026 date, exact morning/afternoon/night Ganesh Visarjan auspicious Choghadiya, 14-knot Ananta thread vidhi and katha.',
    puja_information: {
      overview: 'Morning worship of Lord Ananta with 14-knot thread, followed by afternoon and evening farewell of Lord Ganesha.',
      samagri: [
        { item: '14-knot Silk Ananta Thread (Sutra)', quantity: '1 thread', required: true, significance: 'Represents 14 planetary spheres' },
        { item: 'Haldi, Kumkum, and Akshat', quantity: '50g', required: true, significance: 'Consecration of thread' },
        { item: '14 Sweet Puris / Pua', quantity: '14 pcs', required: true, significance: 'Bhog to Lord Ananta' },
        { item: 'Flowers, Dhoop and Aarti plate for Ganesha farewell', quantity: '1 set', required: true, significance: 'Uttar Puja and Visarjan' }
      ],
      steps: [
        { stepNumber: 1, title: 'Ananta Padmanabha Puja', procedure: 'Install seven-hooded Sheshanaga replica made of durva grass or metal, worship with 14-knot silk cord.' },
        { stepNumber: 2, title: 'Tie Sacred Thread', procedure: 'Tie the purified thread onto the arm while reciting "Ananta Sansara Samudra Magne...".' },
        { stepNumber: 3, title: 'Ganesha Uttarpuja', procedure: 'Offer final prayers, modaks, and arati to Lord Ganesha thanking Him for his 10-day stay.' },
        { stepNumber: 4, title: 'Visarjan Procession', procedure: 'Immerse the idol respectfully in water while chanting farewell slogans with folded hands.' }
      ],
      prasadDetails: '14 Sweet puris, Modaks, Kheer, and Panchamrit.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Anant Puja & Ganesh Visarjan Shubh Muhurat',
      rulesDescription: 'Morning Choghadiya (Shubh, Labh, Amrit) and Afternoon Abhijit.',
      calculationKey: 'day_choghadiya'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Ekbukta',
      paranaRules: 'Single satvik meal with sweet puris after completing the Ananta thread puja.'
    },
    regional_variations: [],
    faqs: [
      { question: 'What do the 14 knots on the Ananta thread signify?', answer: 'The 14 knots represent the fourteen cosmic realms (Bhu, Bhuva, Svah, Maha, Jana, Tapa, Satya, and seven lower realms) protected by the infinite Lord Narayana.' }
    ],
    references: [
      { title: 'Bhavishya Purana', source: 'Ananta Chaturdashi Vrat Katha' }
    ]
  }
];
