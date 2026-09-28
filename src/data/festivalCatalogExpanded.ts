import { FestivalDefinition } from './festivalDatabase';

export const expandedFestivalsList: FestivalDefinition[] = [
  {
    id: 'dussehra',
    canonical_name: 'Dussehra (Vijayadashami)',
    hindi_name: 'दशहरा (विजयादशमी व रावण दहन)',
    gujarati_name: 'દશેરા (વિજયાદશમી - ફાફડા જલેબી)',
    alternate_names: ['Vijayadashami', 'Dasara', 'Dashahara', 'Ayudha Puja'],
    regional_names: {
      hi: 'दशहरा / विजयादशमी',
      gu: 'દશેરા (વિજયાદશમી)',
      kn: 'ಮೈಸೂರು ದಸರಾ (Mysuru Dasara)',
      te: 'విజయదశమి / దసరా',
      ta: 'விஜயதசமி (Vijayadasami)',
      bn: 'বিজয়া দশমী (Bijoya Dashami)',
      mr: 'दसरा (शमी पूजन / सीमोल्लंघन)'
    },
    sanskrit_name: 'विजयादशमी (दशहरा)',
    transliteration: 'Vijayādaśamī',
    slug: 'dussehra',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Bhagwan Shri Rama & Mata Durga (Aparajita)',
    deity_category: 'rama',
    lunar_month: 'ashwin',
    paksha: 'shukla',
    tithi_name: 'Dashami (दशमी)',
    tithi_number: 10,
    base_day_of_year: 293,
    calculation_method: 'Ashwin Shukla Dashami prevailing during Aparahna Kaal (Vijaya Muhurat)',
    short_description: 'The monumental victory of good over evil commemorating Lord Rama’s vanquishing of demon-king Ravana and Devi Durga’s victory over Mahishasura.',
    full_overview: 'Dussehra (derived from Dasha-Hara, meaning "removal of the ten heads of ego and vice") marks the triumphant climax of the Navratri festival. On this 10th day, towering effigies of Ravana, Kumbhakarna, and Meghnada stuffed with fireworks are set ablaze in open grounds (Ramlila maidans) across India amidst cheering crowds. In South India, tools, books, and vehicles are sanctified through Ayudha Puja, and new education begins with Vidyarambham.',
    significance: 'Signifies that no matter how mighty or learned an evil force (symbolized by the 10 heads of Ravana representing desire, anger, greed, attachment, pride, jealousy, mind, intellect, memory, and ego), it is inevitably obliterated by pure Dharma. Farmers also celebrate the end of monsoon and beginning of winter harvesting.',
    history_and_tradition: 'In the Mahabharata, the Pandavas retrieved their concealed celestial weapons from the hollow of the Shami tree on this day after completing their one-year incognito exile (Agyatvas) and routed the Kaurava army. Kings historically marched for victory (Seemollanghan) on this auspicious day.',
    cultural_traditions: [
      'Burning towering effigies of Ravana with fire-arrows shot by Shri Rama.',
      'Shami Tree worship (Shami Pujan) and exchanging Shami leaves as symbolic "Gold" in Maharashtra.',
      'Ayudha Puja (worshipping books, vehicles, instruments, and crafts) across South India.',
      'Mysuru Dasara royal jumbo savari procession carrying Goddess Chamundeshwari in a golden howdah.',
      'Eating fresh hot Fafda and crisp Jalebi in Gujarat starting at daybreak.'
    ],
    regions: ['Pan-India', 'North India', 'Karnataka (Mysuru)', 'Gujarat', 'Maharashtra', 'West Bengal', 'Global'],
    languages: ['Hindi', 'Kannada', 'Gujarati', 'Telugu', 'Tamil', 'Bengali', 'Marathi'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'ashwin-festivals', 'rama-festivals'],
    related_festivals: ['navratri-shardiya', 'durga-puja', 'ayudha-puja', 'vidyarambham', 'diwali'],
    related_vrat: ['aparajita-puja'],
    related_temple_ids: ['chamundeshwari-mysuru', 'somnath', 'vaishno-devi'],
    seo_title_template: 'Dussehra 2026 Date, Vijaya Muhurat, Ravan Dahan Timing & Shami Puja',
    seo_description_template: 'Complete Dussehra 2026 guide with exact Aparahna Vijaya Muhurat, Ravan Dahan timings, Ayudha Puja vidhi, Shami tree worship & Mysuru Dasara schedule.',
    puja_information: {
      overview: 'Includes Aparajita Puja during Aparahna Kaal, Shami tree worship, and blessing of weapons, vehicles, books, and professional instruments.',
      samagri: [
        { item: 'Shami Leaves & Aparajita Flowers', quantity: '1 bunch', required: true, significance: 'Shami purifies sins and secures invincibility.' },
        { item: 'Red Chunri, Roli, Akshat, Flowers', quantity: '50g', required: true, significance: 'Offerings to Goddess Aparajita.' },
        { item: 'Sandalwood Paste & Kumkum for Vehicles/Tools', quantity: '1 bowl', required: true, significance: 'Sanctifies daily instruments of livelihood.' },
        { item: 'Jalebi & Fafda / Sweets', quantity: '500g', required: true, significance: 'Traditional celebration foods.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Aparajita Devi Pujan', mantra: 'ॐ अपराजितायै नमः। हारीति काश्यपी देवी दैत्यदानवदर्पहा। मम देहि जयं देवि सर्वशत्रुविनाशिनी॥', procedure: 'Construct an eight-petaled lotus diagram with akshat facing Northeast and invoke Aparajita.' },
        { stepNumber: 2, title: 'Shami Vriksha Pujan', mantra: 'शमी शमयते पापं शमी लोहितकण्टका। धारिण्यर्जुनबाणानां रामस्य प्रियवादिनी॥', procedure: 'Worship the Shami tree with water, chandan, akshat, and lamps; take leaves as auspicious blessing.' },
        { stepNumber: 3, title: 'Ayudha & Vahana Puja', mantra: 'ॐ विश्वकर्मणे नमः।', procedure: 'Clean vehicles, pens, machines, apply swastik with sindoor-ghee paste, and perform aarti.' },
        { stepNumber: 4, title: 'Ravan Dahan & Ram Darshan', mantra: 'सियावर रामचन्द्र की जय!', procedure: 'Witness the symbolic destruction of effigies and chant the victory of Rama.' }
      ],
      aartiName: 'Shri Ramachandra Kripalu Bhaju Man',
      prasadDetails: 'Jalebi, Fafda, Rasgulla, Peda, and dry fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Aparahna Vijaya Muhurat',
      rulesDescription: 'Vijayadashami is named after Vijaya Muhurat (the 11th Muhurat of the day, occurring in early afternoon between 1:45 PM and 2:35 PM). Any enterprise, new journey, or venture initiated during this window is destined for victory.',
      calculationKey: 'vijaya',
      traditionalNotice: 'If Dashami prevails across two days, the day containing the full Vijaya Muhurat in Aparahna is chosen.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'The nine-day Navratri fast ends on Dashami morning after sunrise, after which devotees enjoy celebratory feasts.',
      allowedFoods: ['All festive sweets', 'Fafda-Jalebi', 'Regional delicacies'],
      prohibitedFoods: ['Non-vegetarian food in traditional households'],
      regionalExceptions: 'In Gujarat, serpentine queues form outside sweet shops at 5:00 AM on Dussehra morning to purchase hot Fafda and sweet Jalebi.'
    },
    regional_variations: [
      {
        region: 'Gujarat',
        customs: 'Celebrated with unprecedented enthusiasm eating Fafda (crisp gram flour strips) with hot papaya sambharo and sweet spiral Jalebis. Millions of kilograms are consumed across Gujarat on this single morning.',
        distinctiveNames: ['Dussehra Fafda-Jalebi Mahotsav'],
        uniqueFoodsOrRituals: 'Fafda, Jalebi, Raw Papaya Sambharo, Fried green chillies.'
      },
      {
        region: 'Karnataka (Mysuru)',
        customs: 'The world-famous Mysuru Dasara celebrated since the Vijayanagara Empire. The Mysuru Palace is illuminated with over 100,000 light bulbs. A massive procession with richly caparisoned elephants carries Goddess Chamundeshwari through the city.',
        distinctiveNames: ['Mysuru Dasara', 'Jumbo Savari'],
        uniqueFoodsOrRituals: 'Mysore Pak, Holige, Kosambari.'
      },
      {
        region: 'Maharashtra',
        customs: 'People worship the Shami tree and exchange Apta tree leaves (referred to as "Sona" or gold) with friends and elders, symbolizing wishes for golden prosperity and harmony.',
        distinctiveNames: ['Dasara Sona Watne', 'Seemollanghan'],
        uniqueFoodsOrRituals: 'Apta leaves exchange, Shrikhand-Puri.'
      }
    ],
    faqs: [
      { question: 'When is Dussehra 2026?', answer: 'In 2026, Dussehra (Vijayadashami) falls on Tuesday, October 20, 2026, with the Vijaya Muhurat from 01:58 PM to 02:44 PM.' },
      { question: 'Why is Fafda and Jalebi eaten in Gujarat on Dussehra?', answer: 'In Vedic scripture, Lord Rama was very fond of a sweet called "Shashkuli" (the ancient precursor of modern Jalebi). Furthermore, after 9 days of intense fasting, the combination of hot salty gram flour (Fafda) and sugar syrup (Jalebi) restores electrolytes and blood sugar safely.' },
      { question: 'What is Vijaya Muhurat?', answer: 'Vijaya Muhurat is an exceptionally auspicious 48-minute period occurring in the afternoon. Shastras state that tasks started in this Muhurat meet with sure triumph without need for elaborate astrological checks.' }
    ],
    references: [
      { title: 'Markandeya Purana', source: 'Devi Mahatmyam', quoteOrChapter: 'Slaughter of Mahishasura on Dashami' },
      { title: 'Nirnaya Sindhu', source: 'Ashwin Prakarana', quoteOrChapter: 'Injunctions for Aparajita and Shami Puja' }
    ]
  },

  {
    id: 'karwa-chauth',
    canonical_name: 'Karwa Chauth (Karak Chaturthi)',
    hindi_name: 'करवा चौथ (करक चतुर्थी व चंद्रोदय पूजन)',
    gujarati_name: 'કરવા ચોથ (ચંદ્રોદય પૂજન વ્રત)',
    alternate_names: ['Karak Chaturthi', 'Karva Chauth', 'Suhagan Vrat'],
    regional_names: {
      hi: 'करवा चौथ',
      gu: 'કરવા ચોથ',
      pa: 'ਕਰਵਾ ਚੌਥ (Karwa Chauth)',
      mr: 'करवा चौथ'
    },
    sanskrit_name: 'करकचतुर्थी',
    transliteration: 'Karakacaturthī',
    slug: 'karwa-chauth',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'Goddess Parvati, Lord Shiva, Lord Ganesha & Chandra Dev',
    deity_category: 'devi',
    lunar_month: 'kartik',
    paksha: 'krishna',
    tithi_name: 'Chaturthi (चतुर्थी)',
    tithi_number: 4,
    base_day_of_year: 301,
    calculation_method: 'Kartik Krishna Chaturthi prevailing at Moonrise (Chandrodaya Vyapini)',
    short_description: 'The deeply cherished marital fast observed by married Hindu women praying for the longevity, health, and prosperity of their husbands.',
    full_overview: 'Karwa Chauth is an austere Nirjala (waterless) day-long fast observed from before dawn until the sighting of the Moon at night. Married women (and brides-to-be) wake up before sunrise to eat "Sargi" (a loving pre-dawn meal gifted by mothers-in-law). Throughout the day, dressed in bridal red, adorned with intricate Henna (Mehendi) and Solah Shringar, women listen to the Karwa Chauth Vrat Katha, conduct evening Gauri Puja, and break the fast only after viewing the Moon through a sieve (Chhalni) and offering Arghya.',
    significance: 'Exemplifies the sublime devotion of Savitri, who reclaimed her husband Satyavan from Yamaraj, and Queen Veeravati. The earthen pot (Karwa) with a spout represents the channel of divine nectar (Amrita) poured by Mata Parvati into the family’s life.',
    history_and_tradition: 'Rooted in the Mahabharata, where Lord Krishna advised Draupadi to observe Karak Chaturthi to ensure the safety and victory of the Pandavas in war. Traditionally popular in Punjab, Haryana, Rajasthan, Uttar Pradesh, and now observed pan-India and globally.',
    cultural_traditions: [
      'Eating pre-dawn Sargi containing dry fruits, feni, fruits, and sweets before sunrise.',
      'Applying intricate bridal Mehendi designs on palms and adorning Solah Shringar.',
      'Evening group Vrat Katha where women rotate their decorated Karwa pots (Thali Batana).',
      'Viewing the rising Moon through a sieve, then viewing the husband’s face through the same sieve.',
      'Husband offering the first sip of water and sweet to gently break the wife’s waterless fast.'
    ],
    regions: ['North India', 'Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan', 'Gujarat', 'Global Diaspora'],
    languages: ['Hindi', 'Punjabi', 'Rajasthani', 'Gujarati'],
    hero_image_theme: 'rose',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'kartik-festivals', 'vrat-festivals'],
    related_festivals: ['diwali', 'hoi-ashtami', 'vat-savitri', 'hartalika-teej', 'sankashti-chaturthi'],
    related_vrat: ['karwa-chauth-vrat', 'sankashti-vrat'],
    related_temple_ids: ['kashi-vishwanath', 'mahalakshmi-mumbai'],
    seo_title_template: 'Karwa Chauth 2026 Date, City-wise Moonrise Time & Puja Muhurat',
    seo_description_template: 'Complete Karwa Chauth 2026 guide with exact city-wise Moonrise timings (Ahmedabad, Delhi, Mumbai, etc.), Puja Muhurat, Sargi rules, Vrat Katha & Parana vidhi.',
    puja_information: {
      overview: 'Conducted in two phases: Sandhya Puja before sunset reciting the Vrat Katha with Maa Gauri and Karwa pots; and the nocturnal Chandra Darshan Arghya ritual.',
      samagri: [
        { item: 'Clay or Brass Karwa with Spout and Lid', quantity: '2 pcs', required: true, significance: 'Vessel symbolizing life and marital fidelity.' },
        { item: 'Sieve (Chhalni)', quantity: '1 pc', required: true, significance: 'Used to filter moonlight onto the husband’s face.' },
        { item: 'Diya with Pure Cow Ghee & Bati', quantity: '2 pcs', required: true, significance: 'Light placed on the sieve and Karwa.' },
        { item: 'Water Pot (Lota) for Chandra Arghya', quantity: '1 pc', required: true, significance: 'For pouring milk-water arghya to Chandra Dev.' },
        { item: 'Maa Parvati / Gauri Idol or Image', quantity: '1 pc', required: true, significance: 'Akhand Saubhagya granting deity.' },
        { item: 'Mathri, Sweets, Dry Fruits for Baya', quantity: '1 thali', required: true, significance: 'Traditional gift offered to mother-in-law.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Sargi Sevan', mantra: 'ॐ पार्वत्यै नमः।', procedure: 'Consume wholesome Sargi gifted by mother-in-law before Brahma Muhurat sunrise; drink ample water.' },
        { stepNumber: 2, title: 'Sandhya Gauri Puja & Vrat Katha', mantra: 'नमः शिवायै शर्वाण्यै सौभाग्यं संततिं शुभाम्। प्रयच्छ भक्तियुक्तायै नारीणां हरवल्लभे॥', procedure: 'Gather with fellow women in afternoon, listen to Veeravati’s story, rotate Karwas, and seek elders’ blessings.' },
        { stepNumber: 3, title: 'Chandra Darshan & Arghya Samarpan', mantra: 'ॐ सोमाय नमः। क्षीरोदार्णवसंभूत अत्रिनेत्रसमुद्भव। गृहाणार्घ्यं शशाङ्केश रोहिण्या सहितो मम॥', procedure: 'Offer water mixed with milk, akshat, and sugar to the rising Moon; bow with folded hands.' },
        { stepNumber: 4, title: 'Husband Darshan through Sieve', mantra: 'अखण्ड सौभाग्यं भवतु।', procedure: 'Look at the illuminated Moon through the sieve, then look at your husband; husband feeds first sip of water.' }
      ],
      aartiName: 'Karwa Mata Aarti',
      prasadDetails: 'Mathri, kheer, puri, malpua, and dry fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Karwa Chauth Puja Muhurat & City Moonrise',
      rulesDescription: 'Evening Sandhya Puja is conducted during sunset twilight (approx. 5:45 PM to 7:00 PM). The fast culminates at the moment of actual Moonrise, which varies significantly by geographical longitude across cities.',
      calculationKey: 'standard',
      traditionalNotice: 'Moonrise in Eastern cities (Kolkata) occurs much earlier than Western cities (Ahmedabad, Mumbai). Devotees must check their specific city moonrise time.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'Strict waterless fast from sunrise till Moonrise. Fast is broken only after offering Arghya to the Moon and taking water from the husband’s hand.',
      allowedFoods: ['Pre-dawn Sargi (fruits, nuts, milk sweets)', 'Festive dinner post-moonrise'],
      prohibitedFoods: ['Water or food during daytime hours', 'Non-vegetarian food', 'Pungent foods'],
      regionalExceptions: 'If the Moon is obscured by clouds or rain, shastras permit breaking the fast based on the astronomical moonrise calculation time after worshipping the Moon direction.'
    },
    regional_variations: [
      {
        region: 'Punjab & Delhi',
        customs: 'Celebrated on an elaborate community scale. Sargi sent by mother-in-law includes Feni, Matar, Dry fruits, and traditional outfits. Baya gifts are presented to mothers-in-law after the evening katha.',
        distinctiveNames: ['Sargi & Baya Tradition'],
        uniqueFoodsOrRituals: 'Feni, Mathri, Meethi Mathri, Sarson ka Saag.'
      },
      {
        region: 'Rajasthan & Gujarat',
        customs: 'Women wear traditional Bandhani and Leheriya sarees with heavy gold jewelry. Women exchange clay Karwas filled with wheat and sugar seven times while singing traditional folk songs.',
        distinctiveNames: ['Karak Chaturthi'],
        uniqueFoodsOrRituals: 'Churma, Ghewar, Peda.'
      }
    ],
    faqs: [
      { question: 'When is Karwa Chauth 2026?', answer: 'In 2026, Karwa Chauth falls on Thursday, October 29, 2026, on Kartik Krishna Chaturthi.' },
      { question: 'What is the significance of the sieve (Chhalni)?', answer: 'The sieve symbolizes filtering out all negative planetary rays, worldly distractions, and illusions, allowing only the pure, loving essence of moonlight and marital devotion to reach the husband.' },
      { question: 'What should one do if the Moon is not visible due to clouds?', answer: 'Dharmasindhu provides that if the Moon is hidden by clouds, one should calculate the exact astronomical moonrise time for that city, face in the direction of the Moon, visualize Chandra Dev with Rohini, offer Arghya, and break the fast.' }
    ],
    references: [
      { title: 'Vamana Purana', source: 'Karak Chaturthi Vrata Mahatmya', quoteOrChapter: 'Story of Queen Veeravati and Divine Mother Parvati' },
      { title: 'Dharmasindhu', source: 'Kartik Krishna Chaturthi', quoteOrChapter: 'Rules for Chandrodaya Vyapini Chaturthi' }
    ]
  },

  {
    id: 'chhat-puja',
    canonical_name: 'Chhath Puja (Surya Shashthi & Dala Chhath)',
    hindi_name: 'छठ महापर्व (नहाय-खाय, खरना, संध्या अर्घ्य व उषा अर्घ्य)',
    gujarati_name: 'છઠ્ઠ પૂજા (સૂર્ય ષષ્ઠી - અર્ઘ્ય વિધાન)',
    alternate_names: ['Surya Shashthi', 'Dala Chhath', 'Chhathi Maiya Puja', 'Ravi Shashthi', 'Kattiki Chhath'],
    regional_names: {
      hi: 'छठ पूजा / डाला छठ',
      gu: 'છઠ પૂજા',
      bn: 'ছট পূজা',
      mr: 'छठ पूजा'
    },
    sanskrit_name: 'सूर्यषष्ठीव्रतम् (छठ्ठीमाता)',
    transliteration: 'Sūryaṣaṣṭhīvrata',
    slug: 'chhath-puja',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'Surya Bhagwan & Chhathi Maiya (Mata Usha & Pratyusha)',
    deity_category: 'surya',
    lunar_month: 'kartik',
    paksha: 'shukla',
    tithi_name: 'Kartik Shukla Shashthi (कार्तिक शुक्ल षष्ठी)',
    tithi_number: 6,
    base_day_of_year: 318,
    calculation_method: 'Kartik Shukla Chaturthi (Nahay Khay) through Saptami (Usha Arghya sunrise)',
    short_description: 'The rigorous 4-day Vedic solar festival worshipping the Sun God and Chhathi Maiya standing chest-deep in water at sunset and sunrise.',
    full_overview: 'Chhath Puja is one of the ancient-most, eco-friendly, and austere Vedic celebrations observed with unmatched purity across Bihar, Jharkhand, Eastern Uttar Pradesh, and by diaspora communities worldwide. Spanning four days—Nahay-Khay (purification), Kharna (sacred rice-milk kheer fast), Sandhya Arghya (sunset offering in flowing water), and Usha Arghya (sunrise culmination)—devotees stand waist-deep in rivers, ponds, or water bodies holding bamboo soop baskets laden with seasonal produce, sugarcane stalks, and handmade Thekua prasad.',
    significance: 'Unique in world theology: Chhath pays equal reverence to both the setting Sun (gratitude for life lived and challenges faced) and the rising Sun (hope, health, and new beginnings). Chhathi Maiya, the sixth manifestation of Nature (Prakriti / Katyayani), protects offspring and blesses families with vitality and cure from chronic ailments.',
    history_and_tradition: 'Traced directly to the Rigveda’s solar hymns, Mahabharata (where Karna worshipped his father Surya while standing in the Ganga, and Draupadi observed the fast during exile to regain royal prosperity), and Ramayana (where Rama and Sita observed Surya Shashthi vrat after returning to Ayodhya).',
    cultural_traditions: [
      'Day 1 (Nahay-Khay): Cleaning the entire house, cooking Lauki-Bhaat (bottle gourd and rice) in earthen/bronze vessels with rock salt.',
      'Day 2 (Kharna): Whole-day waterless fast ending in the evening with Rasiya kheer cooked with sugarcane juice and whole wheat rotis on a clay stove with mango wood.',
      'Day 3 (Sandhya Arghya): Carrying bamboo Daura baskets to river ghats, standing chest-deep in water offering milk and water arghya to the setting Sun.',
      'Night Jagaran: Lighting clay elephant lamps (Kosiya) and singing emotional Maithili and Bhojpuri Chhathi geet.',
      'Day 4 (Usha Arghya): Offering morning arghya to the rising Sun and breaking the 36-hour waterless fast with ginger, raw sugar, and Thekua.'
    ],
    regions: ['Bihar', 'Jharkhand', 'Uttar Pradesh (Purvanchal)', 'Delhi (Yamuna Ghats)', 'Mumbai', 'Gujarat (Surat & Ahmedabad riverfront)', 'Nepal (Terai)', 'Global Diaspora'],
    languages: ['Bhojpuri', 'Maithili', 'Magahi', 'Hindi', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'kartik-festivals', 'surya-festivals', 'vrat-festivals'],
    related_festivals: ['diwali', 'bhai-dooj', 'makar-sankranti', 'chaitra-chhath'],
    related_vrat: ['surya-shashthi-vrat'],
    related_temple_ids: ['surya-mandir-deo', 'konark', 'kashi-vishwanath'],
    seo_title_template: 'Chhath Puja 2026 Dates, Sunset & Sunrise Arghya Muhurat & Vidhi',
    seo_description_template: 'Complete Chhath Puja 2026 4-day timetable: Nahay-Khay, Kharna, Sandhya Arghya sunset timing, Usha Arghya sunrise timing, authentic Thekua recipe & Chhathi Maiya geet.',
    puja_information: {
      overview: 'Conducted in pristine natural water bodies using natural woven bamboo baskets (Soop/Daura) filled with all fresh produce harvested from mother earth without processing.',
      samagri: [
        { item: 'Bamboo Soop & Daura Baskets', quantity: '2 or more', required: true, significance: 'Woven organic vessels untouched by synthetic chemicals.' },
        { item: 'Thekua (Whole wheat, pure ghee, jaggery/sugar, cardamom)', quantity: '51 pcs', required: true, significance: 'Sanctified traditional energy cookie cooked on clay stove.' },
        { item: 'Whole Sugarcane with leaves (Ganna)', quantity: '5 stalks', required: true, significance: 'Tied together to form a canopy over the Kosiya altar.' },
        { item: 'Daabh Nimbu (Giant sweet grapefruit/lemon)', quantity: '2 pcs', required: true, significance: 'Rare winter citrus fruit sacred to Surya.' },
        { item: 'Raw Turmeric & Ginger Plants with roots', quantity: '1 bunch', required: true, significance: 'Symbolizes medicinal vitality from the Sun.' },
        { item: 'Clay Kosi (Elephant figurine lamp)', quantity: '1 set', required: false, significance: 'Lit in courtyards for vows fulfillment.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Day 1: Nahay Khay', mantra: 'ॐ सूर्याय नमः।', procedure: 'Take holy bath, cook Kaddu-Bhat on clean wooden fire, and eat single sanctified meal.' },
        { stepNumber: 2, title: 'Day 2: Kharna / Lohanda', mantra: 'ॐ षष्ठी देव्यै नमः।', procedure: 'Fast all day without water; prepare jaggery kheer and roti at dusk, offer to Surya, partake, and begin 36-hour Nirjala vow.' },
        { stepNumber: 3, title: 'Day 3: Sandhya Arghya (Asta-chalgami Surya)', mantra: 'ॐ एहि सूर्य सहस्रांशो तेजोराशे जगत्पते। अनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर॥', procedure: 'Walk barefoot to the river ghat, stand waist-deep facing West, hold Soop with both hands, pour milk-water arghya as the Sun sets.' },
        { stepNumber: 4, title: 'Day 4: Usha Arghya (Udaya-chalgami Surya)', mantra: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥', procedure: 'Return before dawn, stand facing East, offer morning arghya as first solar ray appears, pray for family progeny, and conclude fast.' }
      ],
      aartiName: 'Chhathi Maiya Aarti & Sharda Sinha Songs',
      prasadDetails: 'Thekua, Kasar (rice flour laddus), bananas, Daabh nimbu, sugarcane, and dry fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Sunset (Sandhya) & Sunrise (Usha) Arghya Muhurats',
      rulesDescription: 'Unlike all other pujas, Chhath requires exact local sunset time on Kartik Shukla Shashthi and exact local sunrise time on Kartik Shukla Saptami for offering Arghya.',
      calculationKey: 'standard',
      traditionalNotice: 'Timings vary by city and riverbank; devotees must stand in water before the astronomical moment.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'The Vrati observes continuous waterless fasting from Kharna night through the 4th morning, breaking the fast only after Usha Arghya.',
      allowedFoods: ['Strictly waterless during the 36 hours of main fast', 'Pure satvik food during Nahay-Khay'],
      prohibitedFoods: ['Non-vegetarian food, onion, garlic anywhere in the home', 'Table salt during puja preparation'],
      regionalExceptions: 'Known as Chaiti Chhath when celebrated in Chaitra month on a smaller scale.'
    },
    regional_variations: [
      {
        region: 'Bihar & Purvanchal',
        customs: 'The cultural soul of the region. Every family prepares for months, ghats are decorated with solar lights, and entire cities turn vegetarian and devoted.',
        distinctiveNames: ['Chhathi Maiya Utsav', 'Bhojpuri Chhath'],
        uniqueFoodsOrRituals: 'Thekua, Rasiya Kheer, Kosi Bharai.'
      },
      {
        region: 'Gujarat (Ahmedabad Sabarmati & Surat Tapi Ghats)',
        customs: 'Celebrated by hundreds of thousands on the Sabarmati Riverfront in Ahmedabad and the Tapi River in Surat with full civic and cultural support.',
        distinctiveNames: ['Sabarmati Chhath Mahotsav'],
        uniqueFoodsOrRituals: 'Thekua, Sugarcane canopy on riverbanks.'
      }
    ],
    faqs: [
      { question: 'When is Chhath Puja 2026?', answer: 'In 2026, Chhath Puja spans from Friday, November 13 (Nahay Khay) to Monday, November 16, 2026 (Usha Arghya). Sandhya Arghya falls on Sunday, November 15, 2026.' },
      { question: 'Why is the setting Sun worshipped first on Chhath?', answer: 'Hindu philosophy teaches that twilight and dusk deserve equal reverence as dawn. Worshipping the setting Sun teaches acceptance, gratitude for our life journey, and humility before transitions.' },
      { question: 'What is Thekua?', answer: 'Thekua is a sacred cookie made of whole wheat flour, organic jaggery or sugar, cow ghee, fennel seeds, and grated dry coconut, deep-fried slowly in pure ghee on a wood-fire clay stove.' }
    ],
    references: [
      { title: 'Rigveda', source: 'Mandala 1, Sukta 50', quoteOrChapter: 'Solar Invocations of Surya Deva' },
      { title: 'Mahabharata', source: 'Vana Parva', quoteOrChapter: 'Draupadi and Dhaumya Muni Discourse on Surya Upasana' }
    ]
  },

  {
    id: 'akshaya-tritiya',
    canonical_name: 'Akshaya Tritiya (Akha Teej)',
    hindi_name: 'अक्षय तृतीया (आखा तीज व परशुराम जयंती)',
    gujarati_name: 'અક્ષય તૃતીયા (અખા ત્રીજ - સુવર્ણ ખરીદી)',
    alternate_names: ['Akha Teej', 'Akshaya Thadige', 'Parashurama Jayanti', 'Treta Yuga Commencement'],
    regional_names: {
      hi: 'अक्षय तृतीया / आखा तीज',
      gu: 'અખા ત્રીજ (અક્ષય તૃતીયા)',
      mr: 'अक्षय्य तृतीया',
      te: 'అక్షయ తృతీయ (Akshaya Trithiya)',
      ta: 'அட்சய திருதியை (Akshaya Tritiya)',
      kn: 'ಅಕ್ಷಯ ತೃತೀಯ (Akshaya Thadige)'
    },
    sanskrit_name: 'अक्षयतृतीया (युगादिः)',
    transliteration: 'Akṣayatṛtīyā',
    slug: 'akshaya-tritiya',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Vishnu, Goddess Mahalakshmi & Lord Parashurama',
    deity_category: 'vishnu',
    lunar_month: 'vaishakha',
    paksha: 'shukla',
    tithi_name: 'Tritiya (तृतीया)',
    tithi_number: 3,
    base_day_of_year: 110,
    calculation_method: 'Vaishakha Shukla Tritiya prevailing during Purvahna / Madhyahna Kaal',
    short_description: 'The day of unwaning auspiciousness where all good deeds, charity, knowledge, and gold investments yield eternal, inexhaustible spiritual merit.',
    full_overview: 'The Sanskrit word "Akshaya" means "imperishable, inexhaustible, and never diminishing." Falling on Vaishakha Shukla Tritiya, this day is recognized as one of the Sade-Teen Muhurats (3.5 most potent dates of the year) requiring no astrological Muhurat verification for auspicious undertakings. On this day, Lord Parashurama descended as the 6th avatar of Vishnu, the Treta Yuga commenced, River Ganga descended to Earth, and Maharishi Vedavyasa began composing the Mahabharata with Lord Ganesha.',
    significance: 'Whatever charity, japa, yajna, or study is undertaken on this day produces everlasting merit (Akshaya Phala). Purchasing gold or investing in durable assets symbolizes welcoming eternal prosperity and righteousness into one’s life.',
    history_and_tradition: 'In the Mahabharata, Bhagwan Krishna gifted the "Akshaya Patra" (a vessel providing inexhaustible food) to the Pandavas on this tithi during their forest exile. Sudama visited Lord Krishna in Dwarka with a humble handful of beaten rice on Akshaya Tritiya and was blessed with limitless divine fortune.',
    cultural_traditions: [
      'Purchasing gold coins, jewelry, silver, real estate, or new commercial equipment.',
      'Performing Jal Daan (donating earthen water pitchers with camphor and jaggery) to alleviate summer heat.',
      'Inaugurating construction of the grand chariots (Chandan Yatra) for the Puri Jagannath Rathyatra.',
      'Opening the sacred portals of Badrinath and Kedarnath shrines in the Himalayas.',
      'Commencing summer marriages, Griha Pravesh, and business ventures.'
    ],
    regions: ['Pan-India', 'Gujarat', 'Maharashtra', 'Odisha', 'South India', 'North India', 'Global'],
    languages: ['Sanskrit', 'Hindi', 'Gujarati', 'Marathi', 'Telugu', 'Tamil', 'Kannada'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'vaishakha-festivals', 'vishnu-festivals', 'lakshmi-festivals'],
    related_festivals: ['parashurama-jayanti', 'chandan-yatra', 'ganga-dussehra', 'buddha-purnima'],
    related_vrat: ['akshaya-tritiya-vrat'],
    related_temple_ids: ['badrinath', 'puri-jagannath', 'dwarkadhish', 'tirupati'],
    seo_title_template: 'Akshaya Tritiya 2026 Date, Gold Buying Muhurat & Puja Vidhi',
    seo_description_template: 'Complete Akshaya Tritiya 2026 guide with exact Gold Purchase Muhurat, Lakshmi-Narayana Puja Vidhi, Jal Daan significance, Akshaya Patra history & Badrinath opening dates.',
    puja_information: {
      overview: 'Worship of Lakshmi-Narayana with yellow flowers, Tulsi leaves, sandalwood paste, offering of barley (Yava), soaked moong dal, and charity of umbrellas, fans, and water pitchers.',
      samagri: [
        { item: 'Clay Water Pitcher (Ghara / Kumbha)', quantity: '1 pc', required: true, significance: 'Filled with water, camphor, and jaggery to donate to the thirsty.' },
        { item: 'Barley Grains (Yava) & Raw Wheat', quantity: '250g', required: true, significance: 'Ancient Vedic grain of abundance and longevity.' },
        { item: 'Gold/Silver item or Clean Coin', quantity: '1 pc', required: false, significance: 'Anointed with chandan and placed before Lakshmi.' },
        { item: 'Hand Fans (Pankha) & Umbrella', quantity: '1 set', required: false, significance: 'Summer charity gifts to monks and laborers.' },
        { item: 'Tulsi Leaves & Yellow Marigold Flowers', quantity: '1 basket', required: true, significance: 'Dedicated to Bhagwan Vishnu.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Snan & Surya Dhyan', mantra: 'ॐ नमो नारायणाय।', procedure: 'Take holy bath and offer water to the Sun with black sesame and barley.' },
        { stepNumber: 2, title: 'Lakshmi Narayana Abhishekam', mantra: 'ॐ श्रीं ह्रीं क्लीं लक्ष्मी-नारायणाय नमः।', procedure: 'Bathe idols with panchamrit, offer yellow chandan, tulsi leaves, and yellow garments.' },
        { stepNumber: 3, title: 'Kumbha Daan Sankalp', mantra: 'एष धर्मघटो दत्तो ब्रह्मविष्णुशिवात्मकः। अस्य प्रदानात्तृप्यन्तु पितरोऽपि पितामहाः॥', procedure: 'Fill clay pot with clean water, perfume with camphor, touch with right hand, and donate to a Brahmin or temple.' },
        { stepNumber: 4, title: 'Gold Purchase Dedication', mantra: 'ॐ हिरण्यगर्भाय नमः।', procedure: 'Place newly purchased gold or silver before the deity, sprinkle Gangajal, apply tilak, and pray for righteous use of wealth.' }
      ],
      aartiName: 'Om Jai Jagdish Hare & Lakshmi Aarti',
      prasadDetails: 'Sattu laddu, soaked moong dal, seasonal mangoes, panchamrit, and pedha.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Gold Buying & Shubh Karya Muhurat',
      rulesDescription: 'Tritiya Tithi must prevail during morning or midday hours. If Tritiya covers both morning and afternoon, the entire span is considered auspicious without flaw.',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Akshaya Tritiya is an "Abujh Muhurat" (self-authenticated auspicious day) exempt from normal inauspicious planetary defects.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'While general fasting is optional, charity (Daan) is mandatory to reap the eternal spiritual merit of the day.',
      allowedFoods: ['Festive satvik meals', 'Sattu preparations', 'Mango delicacies', 'Sweet rice'],
      prohibitedFoods: ['Tamasic food', 'Alcohol', 'Stale food'],
      regionalExceptions: 'In parts of Maharashtra and Gujarat, newly harvested mangoes (Aamras) are formally offered to the deities on Akshaya Tritiya.'
    },
    regional_variations: [
      {
        region: 'Odisha (Puri)',
        customs: 'Marks the commencement of the 42-day Chandan Yatra of Lord Jagannath and the ceremonial construction of the gigantic wooden chariots for the world-famous Rathyatra.',
        distinctiveNames: ['Chandan Yatra', 'Ratha Anukula'],
        uniqueFoodsOrRituals: 'Chandan Yatra boat procession, Chhappan Bhog.'
      },
      {
        region: 'Gujarat & Maharashtra',
        customs: 'Regarded as the golden day for jewelry purchases and launching new financial investments. Thousands of weddings take place simultaneously without horoscope matching.',
        distinctiveNames: ['Akha Teej', 'Akshaya Tritiya Sona'],
        uniqueFoodsOrRituals: 'Aamras-Puri, Kesar Shrikhand, Gold coins purchase.'
      }
    ],
    faqs: [
      { question: 'When is Akshaya Tritiya 2026?', answer: 'In 2026, Akshaya Tritiya falls on Sunday, April 19, 2026, with the auspicious Gold Purchase and Puja Muhurat extending from dawn till late evening.' },
      { question: 'Why is buying gold so popular on Akshaya Tritiya?', answer: 'Gold represents Goddess Mahalakshmi and the Sun’s eternal luminescence. Purchasing gold on this day symbolizes that one’s prosperity will never diminish or deplete throughout the year.' },
      { question: 'What is the most meritorious charity (Daan) on this day?', answer: 'Donating earthen pots filled with drinking water (Jala-Kumbha), umbrellas, hand fans, barley (Yava), food grains, and footwear to travelers and the poor is extolled in the Skanda Purana.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Vaishakha Masa Mahatmya', quoteOrChapter: 'Chapter 23: The Glories of Akshaya Tritiya Vrata' },
      { title: 'Bhavishya Purana', source: 'Uttara Parva', quoteOrChapter: 'The Inexhaustible Merits of Jaladaana on Akshaya Tritiya' }
    ]
  },

  {
    id: 'gudi-padwa-ugadi',
    canonical_name: 'Gudi Padwa & Ugadi (Chaitra Navratri New Year)',
    hindi_name: 'गुड़ी पड़वा व उगादी (नवसंवत्सर - चैत्र शुक्ल प्रतिपदा)',
    gujarati_name: 'ચૈત્ર સુદ એકમ (નવ સંવત્સર - ગુડી પડવો / ઉગાદી)',
    alternate_names: ['Ugadi', 'Yugadi', 'Samvatsar Padvo', 'Chaitra Pratipada', 'Cheti Chand', 'Sajibu Cheiraoba'],
    regional_names: {
      mr: 'गुढीपाडवा (नववर्ष)',
      te: 'ఉగాది (శ్రీ క్రోధి నామ సంవత్సరం)',
      kn: 'ಯುಗಾದಿ (Ugadi Habba)',
      gu: 'ચૈત્રિ નવરાત્રી / પડવો',
      hi: 'नवसंवत्सर / गुड़ी पड़वा',
      ta: 'உகாதி (Ugadi)'
    },
    sanskrit_name: 'चैत्रशुक्लप्रतिपदा (युगादिः)',
    transliteration: 'Caitraśuklapratipadā',
    slug: 'gudi-padwa-ugadi',
    festival_type: 'new-year',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Brahma (Creator), Bhagwan Rama & Mata Durga',
    deity_category: 'devi',
    lunar_month: 'chaitra',
    paksha: 'shukla',
    tithi_name: 'Pratipada (प्रतिपदा)',
    tithi_number: 1,
    base_day_of_year: 78,
    calculation_method: 'Chaitra Shukla Pratipada at Sunrise (Udaya Tithi)',
    short_description: 'The Vedic New Year celebrating Lord Brahma’s creation of the cosmos, the hoisting of the triumphant Gudi in Maharashtra, and tasting the six flavors of Ugadi Pachadi.',
    full_overview: 'Chaitra Shukla Pratipada marks the commencement of the ancient Vedic New Year, the beginning of the Shalivahana Shaka and Vikram Samvat calendars, and the inauguration of Chaitra Navratri. In Maharashtra, families hoist a "Gudi"—a victory flag made of bright silk cloth draped over a bamboo pole, crowned with neem leaves, mango twigs, a flower garland, and an upturned silver or copper pot (Kalash). In Karnataka, Andhra Pradesh, and Telangana, it is celebrated as Ugadi (Yuga-Adi, the beginning of an era), centered on the ritual consumption of Ugadi Pachadi.',
    significance: 'According to the Brahma Purana, Lord Brahma created the universe, celestial spheres, planets, and time on this exact dawn. In Maharashtra, it commemorates the historic victory of the Satavahana King Shalivahana over invading Sakas. In Ayodhya, Lord Rama’s coronation took place on this day.',
    history_and_tradition: 'Mentioned in the Atharva Veda and Surya Siddhanta. Priests recite the "Panchanga Shravanam"—reading the astrological predictions, rainfall forecasts, and royal governance for the incoming King and Minister planets of the year.',
    cultural_traditions: [
      'Hoisting the sacred Gudi outside windows and roofs on the right side of the entrance.',
      'Tasting Ugadi Pachadi / Bevu-Bella (a mixture of neem buds, jaggery, tamarind, raw mango, salt, and chilli representing the six tastes of life).',
      'Attending Panchanga Shravanam (listening to the annual planetary forecast).',
      'Wearing new traditional attire and participating in vibrant street processions (Shobha Yatra).',
      'Feasting on Puran Poli in Maharashtra and Holige / Obbattu in Karnataka.'
    ],
    regions: ['Maharashtra', 'Karnataka', 'Andhra Pradesh & Telangana', 'Goa', 'Gujarat', 'Global'],
    languages: ['Marathi', 'Telugu', 'Kannada', 'Hindi', 'Gujarati'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'chaitra-festivals', 'new-year-festivals'],
    related_festivals: ['chaitra-navratri', 'cheti-chand', 'rama-navami', 'gudi-padwa'],
    related_vrat: ['chaitra-navratri-ghatasthapana'],
    related_temple_ids: ['tirupati', 'somnath', 'siddhivinayak'],
    seo_title_template: 'Gudi Padwa & Ugadi 2026 Date, Gudi Sthapana Muhurat & Pachadi Recipe',
    seo_description_template: 'Complete Gudi Padwa & Ugadi 2026 guide with exact Gudi Sthapana Muhurat, Ugadi Pachadi 6-flavor significance, Panchang Shravanam & Puran Poli recipe.',
    puja_information: {
      overview: 'Early morning oil bath (Abhyanga Snan) before sunrise, followed by raising the auspicious Gudi flag, drawing Rangoli, and listening to the annual Panchang.',
      samagri: [
        { item: 'Bamboo Pole (5-6 feet)', quantity: '1 pc', required: true, significance: 'Shaft of the victory standard (Brahmadhvaja).' },
        { item: 'Bright Silk Vastra (Yellow/Green/Red with Zari border)', quantity: '1 pc', required: true, significance: 'Draped on the pole representing royal majesty.' },
        { item: 'Silver or Copper Kalash (Lota)', quantity: '1 pc', required: true, significance: 'Placed upside down atop the pole symbolizing cosmic crown.' },
        { item: 'Fresh Neem Leaves & Mango Twigs', quantity: '1 bunch', required: true, significance: 'Wards off impurities and purifies atmospheric air.' },
        { item: 'Sugar Candy Garland (Gathi)', quantity: '1 garland', required: true, significance: 'Represents sweetness in the forthcoming year.' },
        { item: 'Ugadi Pachadi Ingredients (Neem, Jaggery, Raw Mango, Tamarind, Salt, Pepper)', quantity: '1 bowl', required: true, significance: 'Symbolizes life’s balance of joys, sorrows, surprises, and challenges.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Abhyanga Snan & Rangoli', mantra: 'ॐ वर्षवर्धनाय नमः।', procedure: 'Take pre-sunrise bath with fragrant ubtan and sesame oil; decorate entrance with colorful rangoli.' },
        { stepNumber: 2, title: 'Gudi Sthapana (Raising the Brahmadhvaja)', mantra: 'ॐ ब्रह्मध्वजाय नमः। ब्रह्मरूपे नमस्तेऽस्तु महाविघ्नविनाशिनि। त्रैलोक्यरक्षिणि देवि ध्वजेऽस्मिन् संनिधिं कुरु॥', procedure: 'Fasten silk cloth, neem, mango leaves, gathi, and kalash onto bamboo pole and erect at sunrise.' },
        { stepNumber: 3, title: 'Prasad Sevan (Bevu Bella / Ugadi Pachadi)', mantra: 'शतयुर्वज्रदेहाय सर्वसम्पत्कराय च। सर्वारिष्टविनाशाय निम्बपत्रं निवेदये॥', procedure: 'Consume the sanctified bitter-sweet mixture on empty stomach as medicine and spiritual philosophy.' },
        { stepNumber: 4, title: 'Panchanga Shravanam', mantra: 'तिथेश्च श्रियमाप्नोति वारादायुष्यवर्धनम्। नक्षत्राद्धरते पापं योगाद्रोगनिवारणम्॥', procedure: 'Read or listen to the year’s planetary ruler, eclipses, monsoon prospects, and blessings.' }
      ],
      aartiName: 'Brahmadhvaja Aarti & Ganapati Aarti',
      prasadDetails: 'Ugadi Pachadi, Puran Poli with Katachi Amti, Shrikhand-Puri, and Holige.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pratah Gudi Sthapana & Ugadi Muhurat',
      rulesDescription: 'Gudi must be hoisted at dawn immediately following sunrise while Pratipada Tithi is active.',
      calculationKey: 'standard',
      traditionalNotice: 'Gudi must be respectfully lowered before sunset on the same evening after offering Sandhya Aarti.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'This is a celebratory New Year feast day. Devotees take the bitter neem prasad first, followed by a lavish family banquet featuring Puran Poli.',
      allowedFoods: ['Puran Poli', 'Shrikhand', 'Holige', 'Ugadi Pachadi', 'All satvik festival foods'],
      prohibitedFoods: ['Non-vegetarian food', 'Alcohol', 'Stale food'],
      regionalExceptions: 'Devotees observing Chaitra Navratri Ghatasthapana simultaneously fast on phalahari diet from this day forward.'
    },
    regional_variations: [
      {
        region: 'Maharashtra',
        customs: 'Every balcony and bungalow displays the majestic Gudi. Women wear traditional Nauvari (nine-yard) sarees, ride motorcycles in Shobha Yatras with saffron turbans, and cook sweet Puran Poli.',
        distinctiveNames: ['Gudhi Padwa', 'Shobha Yatra'],
        uniqueFoodsOrRituals: 'Gudi hoisting, Puran Poli, Katachi Amti, Shrikhand.'
      },
      {
        region: 'Andhra Pradesh & Telangana',
        customs: 'Known as Ugadi. Houses are washed and decorated with fresh green mango leaf torans. Families prepare Ugadi Pachadi incorporating all 6 tastes (Shadruchulu) and attend Panchanga Shravanam.',
        distinctiveNames: ['Ugadi', 'Samvatsaradi'],
        uniqueFoodsOrRituals: 'Ugadi Pachadi (Neem, Jaggery, Mango, Tamarind, Salt, Chilli), Bobbattu.'
      },
      {
        region: 'Karnataka',
        customs: 'Known as Yugadi. Devotees exchange "Bevu-Bella" (neem and jaggery) greeting each other with prayers that the coming year balance pleasure and pain with equanimity.',
        distinctiveNames: ['Yugadi Habba', 'Bevu Bella'],
        uniqueFoodsOrRituals: 'Bevu-Bella, Obbattu (Holige) with ghee and warm milk.'
      }
    ],
    faqs: [
      { question: 'When is Gudi Padwa and Ugadi 2026?', answer: 'In 2026, Gudi Padwa and Ugadi will be celebrated on Thursday, March 19, 2026, on Chaitra Shukla Pratipada, welcoming the new Hindu Samvatsar.' },
      { question: 'What is the philosophy behind Ugadi Pachadi’s six tastes?', answer: 'Ugadi Pachadi combines Sweet (Jaggery - happiness), Sour (Tamarind - unpleasant surprises), Bitter (Neem buds - sadness), Salty (Salt - fear/interest), Pungent (Chilli - anger), and Astringent/Tangy (Raw Mango - new experiences). It teaches that life is a composite of all these flavors, to be accepted with grace.' },
      { question: 'Why is the Gudi hoisted on the right side of the house?', answer: 'In Vastu and Shastra, the right side represents the solar pingala energy and active auspiciousness, warding off negative vibrations from entering the dwelling.' }
    ],
    references: [
      { title: 'Brahma Purana', source: 'Srishti Khanda', quoteOrChapter: 'The Dawn of Creation on Chaitra Shukla Pratipada' },
      { title: 'Surya Siddhanta', source: 'Kala Kriya', quoteOrChapter: 'Calculation of the New Lunar Samvatsara' }
    ]
  }
];
