import { FestivalDefinition } from './festivalDatabase';

export const remainingFestivalsList: FestivalDefinition[] = [
  {
    id: 'nag-panchami',
    canonical_name: 'Nag Panchami',
    hindi_name: 'नाग पंचमी (सर्प देवता पूजन व कालसर्प दोष निवारण)',
    gujarati_name: 'નાગ પાંચમ (નાગ પૂજન)',
    alternate_names: ['Naga Panchami', 'Nagula Chavithi', 'Shravana Nag Panchami'],
    regional_names: {
      hi: 'नाग पंचमी',
      gu: 'નાગ પાંચમ',
      mr: 'नागपंचमी',
      te: 'నాగుల చవితి / నాగ పంచమి',
      ta: 'நாக பஞ்சமி (Naga Panchami)',
      kn: 'ನಾಗ ಪಂಚಮಿ (Naga Panchami)'
    },
    sanskrit_name: 'नागपञ्चमी',
    transliteration: 'Nāgapañcamī',
    slug: 'nag-panchami',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'The Twelve Divine Nagas (Ananta, Vasuki, Shesha, Padmanabha, Kambala, Shankhapala, Dhritarashtra, Takshaka, Kaliya)',
    deity_category: 'shiva',
    lunar_month: 'shravana',
    paksha: 'shukla',
    tithi_name: 'Panchami (पंचमी)',
    tithi_number: 5,
    base_day_of_year: 231,
    calculation_method: 'Shravana Shukla Panchami at Sunrise',
    short_description: 'Worshipping the celestial serpent deities with milk, turmeric, and parched paddy (Lawa), praying for protection against serpent bites and Kaal Sarp Dosha.',
    full_overview: 'Nag Panchami is observed on Shravana Shukla Panchami. In Vedic tradition, serpents are revered as guardians of the subterranean world (Patala), custodians of nature’s subterranean aquifers, and intimate ornaments of Lord Shiva and couch of Lord Vishnu (Sheshanaga). On this day, devotees bathe serpent idols with milk and water, offer haldi (turmeric), chandan, fresh flowers, and parched rice (Kheel/Lawa), and pray for the protection of their families and fields. Plowing or digging the earth is strictly forbidden on this day to avoid unintentionally injuring subterranean serpents.',
    significance: 'Promotes harmony with wildlife and the ecological food chain. Spiritually, it symbolizes awakening the Kundalini Shakti (the dormant coiled serpentine energy at the base of the spine).',
    history_and_tradition: 'Rooted in the Mahabharata (Astika Muni stopping King Janamejaya’s Sarpa Satra snake sacrifice) and Harivamsa (Lord Krishna subduing the venomous serpent Kaliya in the Yamuna on this day).',
    cultural_traditions: [
      'Drawing serpent figures on doorways with cow dung, neem juice, and geru (red ochre).',
      'Offering raw milk, puffed rice (Lawa), and turmeric paste at snake anthills (Valmeekam) and Shiva temples.',
      'Refraining strictly from chopping, digging, or using iron tavas on the hearth.',
      'Sisters praying for the longevity and health of their brothers.'
    ],
    regions: ['Pan-India', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Karnataka', 'Bengal'],
    languages: ['Hindi', 'Gujarati', 'Marathi', 'Sanskrit', 'Telugu', 'Kannada'],
    hero_image_theme: 'stone',
    topical_collections: ['top-25', 'popular', 'shravana-festivals', 'shiva-festivals'],
    related_festivals: ['raksha-bandhan', 'shravan-somwar', 'maha-shivaratri'],
    related_vrat: ['nag-panchami-vrat'],
    related_temple_ids: ['somnath', 'kashi-vishwanath', 'mahakaleshwar'],
    seo_title_template: 'Nag Panchami 2026 Date, Puja Muhurat & 12 Nagas Mantra',
    seo_description_template: 'Complete Nag Panchami 2026 guide with exact Shravana Panchami Muhurat, 12 Sacred Nagas Mantras, milk offering vidhi & Kaal Sarp Dosha remedies.',
    puja_information: {
      overview: 'Serpent figures or Shiva Linga with Nagabharana are bathed with milk and Gangajal, anointed with turmeric, and offered lotus flowers and roasted paddy.',
      samagri: [
        { item: 'Silver / Brass / Clay Naga Idol', quantity: '1 pc', required: true, significance: 'Representation of divine serpents.' },
        { item: 'Raw Cow Milk', quantity: '250ml', required: true, significance: 'Traditional cooling offering.' },
        { item: 'Turmeric Paste (Haldi) & White Chandan', quantity: '25g', required: true, significance: 'Serpents are cooled by pure haldi.' },
        { item: 'Parched Paddy (Kheel / Lawa)', quantity: '100g', required: true, significance: 'Sacred agricultural harvest offering.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Doorway Raksha Rekha', mantra: 'ॐ नमोऽस्तु सर्पेभ्यो ये के च पृथिवीमनु। ये अन्तरिक्षे ये दिवि तेभ्यः सर्पेभ्यो नमः॥', procedure: 'Draw serpent designs with cow dung and turmeric on either side of the entrance.' },
        { stepNumber: 2, title: 'Naga Abhishekam', mantra: 'अनन्तं वासुकिं शेषं पद्मनाभं च कम्बलम्। शङ्खपालं धृतराष्ट्रं तक्षकं कालियं तथा॥', procedure: 'Bathe the serpent idol with milk, water, and offer turmeric, akshat, and flowers while reciting the 12 sacred names.' },
        { stepNumber: 3, title: 'Lawa & Dhoop Samarpan', mantra: 'ॐ भुजङ्गेशाय नमः।', procedure: 'Offer kheel, jaggery, light dhoop, and seek blessings for protection of home.' }
      ],
      aartiName: 'Naga Devata Aarti',
      prasadDetails: 'Kheer, Lawa (parched rice), milk, and seasonal fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pratah Nag Panchami Puja Muhurat',
      rulesDescription: 'Observed during morning hours on Shravana Shukla Panchami.',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Digging or tilling soil is strictly prohibited on Nag Panchami.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Ekbukta',
      paranaRules: 'Devotees fast throughout the day and eat a single meal at night cooked without frying or iron griddle.'
    },
    regional_variations: [
      {
        region: 'Maharashtra (Shirala)',
        customs: 'Historically celebrated in Battis Shirala with veneration of live serpents, now observed with beautiful clay idols and floral rangolis.',
        distinctiveNames: ['Nagpanchami Maharashtra'],
        uniqueFoodsOrRituals: 'Dind (steamed sweet parcel), puran dumplings.'
      }
    ],
    faqs: [
      { question: 'When is Nag Panchami 2026?', answer: 'In 2026, Nag Panchami will be observed on Tuesday, August 18, 2026, on Shravana Shukla Panchami.' },
      { question: 'Who are the nine principal Nagas worshipped?', answer: 'Ananta, Vasuki, Shesha, Padmanabha, Kambala, Shankhapala, Dhritarashtra, Takshaka, and Kaliya.' }
    ],
    references: [
      { title: 'Bhavishya Purana', source: 'Panchami Vrata', quoteOrChapter: 'Sarpa Puja and Story of Astika Muni' }
    ]
  },

  {
    id: 'ratha-saptami',
    canonical_name: 'Ratha Saptami (Surya Jayanti & Arogya Saptami)',
    hindi_name: 'रथ सप्तमी (सूर्य जयंती, अचला सप्तमी व आरोग्य दान)',
    gujarati_name: 'રથ સપ્તમી (સૂર્ય જયંતી - અર્ઘ્ય વિધાન)',
    alternate_names: ['Surya Jayanti', 'Achala Saptami', 'Arogya Saptami', 'Magha Saptami'],
    regional_names: {
      hi: 'रथ सप्तमी / सूर्य जयंती',
      gu: 'રથ સપ્તમી',
      te: 'రథ సప్తమి (Ratha Saptami - Tirupati)',
      ta: 'ரத சப்தமி (Ratha Saptami)',
      kn: 'ರಥ ಸಪ್ತಮಿ (Ratha Saptami)'
    },
    sanskrit_name: 'रथसप्तमी (सूर्यजयन्ती)',
    transliteration: 'Rathasaptamī',
    slug: 'ratha-saptami',
    festival_type: 'jayanti',
    religion: 'hindu',
    sect: 'all',
    deity: 'Bhagwan Surya Narayana (riding the 7-horse chariot)',
    deity_category: 'surya',
    lunar_month: 'magha',
    paksha: 'shukla',
    tithi_name: 'Saptami (सप्तमी)',
    tithi_number: 7,
    base_day_of_year: 25,
    calculation_method: 'Magha Shukla Saptami prevailing during Arunodaya (pre-dawn sunrise)',
    short_description: 'The birthday of the Sun God (Surya Jayanti) celebrating His celestial chariot drawn by seven horses, granting vitality, eye health, and curing chronic ailments.',
    full_overview: 'Ratha Saptami marks the cosmic birth anniversary of Bhagwan Surya Narayana, who illuminated the entire universe with His supreme brilliance on Magha Shukla Saptami. It symbolizes the Sun God steering His celestial golden chariot—drawn by seven horses (representing the seven prismatic colors of sunlight and seven days of the week) driven by the legless charioteer Aruna—towards the northern hemisphere. Devotees take bath before sunrise holding seven Calotropis (Aak / Erukku) leaves on their body with raw rice and sesame seeds, invoking the Sun for immunity and release from all bodily ailments (Arogya). At Tirupati Balaji, Lord Malayappa Swami is taken out in grand procession on seven different celestial vahanas from dawn till night.',
    significance: 'Grants supreme radiant health (Arogya), cures ophthalmic and skin afflictions, and bestows vitality. The Rigveda declares: "Arogyam Bhaskaradichhet" (Seek radiant health from the Sun).',
    history_and_tradition: 'Described in the Matsya Purana, Bhavishya Purana, and Samba Purana (where Krishna’s son Samba was cured of leprosy through Surya Aradhana).',
    cultural_traditions: [
      'Arunodaya Snan using 7 Calotropis (Erukku/Aak) leaves placed on head, shoulders, and chest.',
      'Boiling fresh milk and rice in direct morning sunlight in an earthen pot until it overflows (Ksheeranna).',
      'Drawing the seven-horse chariot of Surya with colored powders outside front doors.',
      'Recitation of the Aditya Hridaya Stotram and Surya Ashtakam at sunrise.',
      'Grand 7-Vahana procession at Tirumala Tirupati Devasthanam.'
    ],
    regions: ['Pan-India', 'Andhra Pradesh (Tirupati)', 'Tamil Nadu', 'Karnataka', 'Gujarat', 'Odisha (Konark)'],
    languages: ['Telugu', 'Tamil', 'Sanskrit', 'Hindi', 'Gujarati', 'Kannada'],
    hero_image_theme: 'amber',
    topical_collections: ['top-25', 'popular', 'magha-festivals', 'surya-festivals', 'jayanti-festivals'],
    related_festivals: ['makar-sankranti', 'chhat-puja', 'vasant-panchami'],
    related_vrat: ['achala-saptami-vrat'],
    related_temple_ids: ['tirupati', 'konark', 'somnath'],
    seo_title_template: 'Ratha Saptami 2026 Date, Arunodaya Snan Muhurat & Erukku Leaf Vidhi',
    seo_description_template: 'Complete Ratha Saptami 2026 guide with exact Magha Saptami Snan Muhurat, 7 Erukku leaves bath procedure, Surya Jayanti mantras & Tirupati Brahmotsavam.',
    puja_information: {
      overview: 'Pre-dawn bath with Calotropis leaves, offering arghya to rising Sun in copper pot, cooking milk-rice in sunlight, and reciting Aditya Hridaya Stotram.',
      samagri: [
        { item: 'Calotropis (Aak / Erukku) Leaves', quantity: '7 leaves', required: true, significance: 'Placed on body during bath to absorb solar healing.' },
        { item: 'Copper Lota for Surya Arghya', quantity: '1 pc', required: true, significance: 'Conducts solar energy.' },
        { item: 'Red Sandalwood (Rakta Chandan) & Red Flowers', quantity: 'Standard', required: true, significance: 'Beloved solar offerings.' },
        { item: 'Earthen pot for cooking Paramannam', quantity: '1 pot', required: true, significance: 'Cooked under direct solar rays.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Arunodaya Snanam with 7 Leaves', mantra: 'नमस्ते रुद्ररूपाय रसानां पतये नमः। वरुणायाऽथ पूष्णे च भानवे ते नमो नमः॥', procedure: 'Place one leaf on head, two on shoulders, two on knees, two on feet with raw rice and sesame; take pre-dawn bath.' },
        { stepNumber: 2, title: 'Surya Arghya Samarpan', mantra: 'ॐ नमो भगवते श्रीसूर्यायाऽऽदित्याय। विष्णवे ते नमः।', procedure: 'Pour water mixed with red chandan, akshat, and jaggery toward the rising Sun.' },
        { stepNumber: 3, title: 'Aditya Hridaya Stotra Path', mantra: 'आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम्। जयावहं जपेन्नित्यमक्षयं परमं शुभम्॥', procedure: 'Recite Sage Agastya’s 31 verses to attain vitality and dispel negativity.' }
      ],
      aartiName: 'Surya Narayana Aarti',
      prasadDetails: 'Paramannam (milk-rice with jaggery cooked in sunlight), bananas, and sugarcane.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Arunodaya Snan & Surya Puja Muhurat',
      rulesDescription: 'Takes place during Arunodaya (approx. 1 hour and 12 minutes before sunrise).',
      calculationKey: 'standard',
      traditionalNotice: 'Bath taken during Arunodaya on Achala Saptami cleanses sins from seven lifetimes.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Devotees consume the sunlight-cooked Paramannam after morning Surya Arghya.'
    },
    regional_variations: [
      {
        region: 'Andhra Pradesh (Tirumala Tirupati)',
        customs: 'Known as "One Day Brahmotsavam". Lord Venkateswara is taken out in magnificent processions on seven different vahanas (Surya Prabha, Chinna Sesha, Garuda, Hanuman, Kalpavriksha, Sarva Bhupala, Chandra Prabha) from 6:00 AM till night.',
        distinctiveNames: ['Tirumala Ratha Saptami', 'Saptha Vahana Seva'],
        uniqueFoodsOrRituals: 'Chakkara Pongal, Pulihora.'
      }
    ],
    faqs: [
      { question: 'When is Ratha Saptami 2026?', answer: 'In 2026, Ratha Saptami falls on Sunday, January 25, 2026, on Magha Shukla Saptami.' },
      { question: 'Why are 7 Calotropis (Erukku) leaves placed on the body during bath?', answer: 'The seven leaves represent the seven chakras and seven horses of the Sun. Bathing with these medicinal leaves on this specific solar alignment neutralizes negative energies and cures physical weaknesses.' }
    ],
    references: [
      { title: 'Matsya Purana', source: 'Saptami Vrata', quoteOrChapter: 'Surya Ratha Nirupana' },
      { title: 'Bhavishya Purana', source: 'Brahma Parva', quoteOrChapter: 'The Glories of Achala Saptami' }
    ]
  },

  {
    id: 'sheetala-ashtami',
    canonical_name: 'Sheetala Ashtami (Basoda & Sheetala Saptami)',
    hindi_name: 'शीतला अष्टमी (बासोड़ा, शीतला सातम व बासी भोजन पर्व)',
    gujarati_name: 'શીતળા સાતમ (ટાઢું ખાવાનો ઉત્સવ)',
    alternate_names: ['Basoda', 'Sheetala Saptami', 'Thado Kholo', 'Basora'],
    regional_names: {
      hi: 'शीतला अष्टमी / बासोड़ा',
      gu: 'શીતળા સાતમ (રાંધણ છઠ અને શીતળા સાતમ)',
      mr: 'शीतला सप्तमी',
      pa: 'ਬਾਸੋੜਾ (Basoda)'
    },
    sanskrit_name: 'शीतलाष्टमी (शीतलापूजनम्)',
    transliteration: 'Śītalāṣṭamī',
    slug: 'sheetala-ashtami',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'Mata Sheetala (Cooling Goddess)',
    deity_category: 'devi',
    lunar_month: 'chaitra',
    paksha: 'krishna',
    tithi_name: 'Ashtami (अष्टमी)',
    tithi_number: 8,
    base_day_of_year: 70,
    calculation_method: 'Chaitra Krishna Ashtami (observed on Saptami in Gujarat as Sheetala Satam)',
    short_description: 'Honoring Mata Sheetala to protect families from seasonal fevers, smallpox, and heat ailments; no fire is lit on this day, and only food cooked the previous evening (Basoda) is eaten.',
    full_overview: 'Sheetala Ashtami (Basoda) is a unique health and Ayurvedic preservation festival celebrated following Holi. Mata Sheetala ("The Cooling One") is mounted on a donkey, holding a sacred cooling broom, a winnowing basket, and an earthen water pot, personifying hygiene, immune resilience, and cooling balance against blistering spring temperatures. On this day, no cooking stoves or hearth fires are lit anywhere in the household; families worship the cold hearth and consume food freshly cooked the previous evening (hence "Basoda" from "Basi" meaning previous day’s food). In Gujarat, this is celebrated with great devotion as "Sheetala Satam" after "Randhan Chhath" (the cooking day).',
    significance: 'Preaches biological cooling, kitchen hygiene, and seasonal adaptation as winter transitions into scorching summer, shielding children from infectious poxes, measles, and seasonal viral outbreaks.',
    history_and_tradition: 'Mentioned in the Skanda Purana (Sheetala Ashtakam composed by Lord Shiva).',
    cultural_traditions: [
      'Cooking all meals (puri, sweet rotis, gulgule, curd, dal) on Saptami evening ("Randhan Chhath" in Gujarat).',
      'Keeping the kitchen hearth cold on Ashtami; worshipping the stove with turmeric and raw milk.',
      'Visiting Sheetala Mata temples at dawn and offering cold water, curds, neem leaves, and rabdi.',
      'Eating only cold, room-temperature meals with family and distributing food to the needy.'
    ],
    regions: ['North India', 'Rajasthan', 'Gujarat', 'Haryana', 'Madhya Pradesh'],
    languages: ['Hindi', 'Gujarati', 'Rajasthani'],
    hero_image_theme: 'stone',
    topical_collections: ['chaitra-festivals', 'devi-festivals', 'vrat-festivals'],
    related_festivals: ['holi', 'chaitra-navratri', 'gudi-padwa-ugadi'],
    related_vrat: ['sheetala-vrat'],
    related_temple_ids: ['sheetala-mata-gurugram', 'somnath'],
    seo_title_template: 'Sheetala Ashtami & Basoda 2026 Date, Puja Vidhi & Randhan Chhath',
    seo_description_template: 'Complete Sheetala Ashtami (Basoda) 2026 guide with exact date, cold food tradition significance, Sheetala Mata Stotram & Gujarat Sheetala Satam rituals.',
    puja_information: {
      overview: 'Offerings of cold water, raw milk, curd, neem twigs, and previous day cooked delicacies to Sheetala Mata at dawn.',
      samagri: [
        { item: 'Cold Food cooked previous evening (Puri, Gulgule, Rabdi)', quantity: '1 thali', required: true, significance: 'Sanctified Basoda offering.' },
        { item: 'Fresh Neem Twigs & Raw Milk', quantity: '1 bunch', required: true, significance: 'Antibacterial and cooling herbs.' },
        { item: 'Cold Water Pot with Turmeric', quantity: '1 pot', required: true, significance: 'For cooling anointment.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Snan & Cold Food Offering', mantra: 'ॐ ह्रीं श्रीं शीतलायै नमः।', procedure: 'Take cold morning bath, carry previous day’s food to temple or home altar, offer with curds and neem.' },
        { stepNumber: 2, title: 'Sheetala Stotram Chanting', mantra: 'वन्देऽहं शीतलां देवीं रासभस्थां दिगम्बराम्। मार्जनीकलशोपेतां शूर्पालङ्कृतमस्तकाम्॥', procedure: 'Recite Lord Shiva’s hymn of Sheetala Mata praying for children’s protection.' }
      ],
      aartiName: 'Sheetala Mata Aarti',
      prasadDetails: 'Basoda prasad: Cold puri, meethi roti, rabdi, curd rice, and gulgule.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pratah Sheetala Puja Muhurat',
      rulesDescription: 'Conducted early in the morning before breakfast on Chaitra Krishna Ashtami.',
      calculationKey: 'standard',
      traditionalNotice: 'No cooking fires may be ignited in the house on this day.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Devotees consume only food cooked the previous evening; no freshly cooked hot food is eaten.'
    },
    regional_variations: [
      {
        region: 'Gujarat',
        customs: 'Celebrated as "Sheetala Satam" on Krishna Saptami. The previous day is "Randhan Chhath" where women spend all evening cooking Kansar, Thepla, and Fafda. On Satam, the Chulha (stove) is washed, anointed with vermilion, and given rest.',
        distinctiveNames: ['Sheetala Satam', 'Randhan Chhath'],
        uniqueFoodsOrRituals: 'Thepla, Kansar, Vada, Chutney eaten cold.'
      }
    ],
    faqs: [
      { question: 'When is Sheetala Ashtami and Basoda 2026?', answer: 'In 2026, Sheetala Ashtami (Basoda) will be observed on Wednesday, March 11, 2026. In Gujarat, Sheetala Satam is observed on Tuesday, March 10, 2026.' },
      { question: 'Why is only cold food eaten on Basoda?', answer: 'To give rest to household cooking fires, foster kitchen sanitation, and allow digestive organs to cool down as summer begins with probiotic foods like curds and fermented grains.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Kashi Khanda', quoteOrChapter: 'Shri Sheetala Ashtakam' }
    ]
  },

  {
    id: 'gita-jayanti',
    canonical_name: 'Gita Jayanti (Mokshada & Vaikuntha Ekadashi)',
    hindi_name: 'गीता जयंती (मोक्षदा एकादशी व श्रीमद्भगवद्गीता प्राकट्योत्सव)',
    gujarati_name: 'ગીતા જયંતી (મોક્ષદા એકાદશી)',
    alternate_names: ['Mokshada Ekadashi', 'Vaikuntha Ekadashi', 'Bhagavad Gita Jayanti', 'Mukkoti Ekadashi'],
    regional_names: {
      hi: 'गीता जयंती / मोक्षदा एकादशी',
      gu: 'ગીતા જયંતી',
      te: 'వైకుంఠ ఏకాదశి (Vaikuntha Dwara Darshanam)',
      ta: 'வைகுண்ட ஏகாதசி (Vaikuntha Ekadashi - Srirangam)',
      kn: 'ವೈಕುಂಠ ಏಕಾದಶಿ (Vaikuntha Ekadashi)'
    },
    sanskrit_name: 'श्रीमद्भगवद्गीताजयन्ती (मोक्षदा)',
    transliteration: 'Śrīmadbhagavadgītājayantī',
    slug: 'gita-jayanti',
    festival_type: 'jayanti',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Lord Krishna (Parthasarathy) & Srimad Bhagavad Gita',
    deity_category: 'krishna',
    lunar_month: 'margashirsha',
    paksha: 'shukla',
    tithi_name: 'Ekadashi (एकादशी)',
    tithi_number: 11,
    base_day_of_year: 354,
    calculation_method: 'Margashirsha Shukla Ekadashi at Sunrise',
    short_description: 'The advent of the song celestial: celebrating the historic moment on Kurukshetra when Bhagwan Krishna delivered the 700 verses of the Bhagavad Gita to Arjuna.',
    full_overview: 'Gita Jayanti is the singular scripture birth anniversary celebrated in Sanatana Dharma. Over 5,000 years ago on the battlefield of Kurukshetra on Margashirsha Shukla Ekadashi, Bhagwan Shri Krishna enlightened the despondent warrior Arjuna with the immortal 700 verses of the Srimad Bhagavad Gita. In South India, this same day is celebrated as Vaikuntha Ekadashi (Mukkoti Ekadashi), where the celestial "Vaikuntha Dwara" (gates of heaven) at Tirupati and Srirangam Ranganathaswamy Temple are thrown open for millions of pilgrims.',
    significance: 'The Gita is the ultimate essence of the Upanishads (Gitopanishad), providing universal psychological clarity, ethical courage, and the path of Karma Yoga, Jnana Yoga, and Prema Bhakti for all humanity.',
    history_and_tradition: 'Found in the Bhishma Parva of Vyasa’s Mahabharata (Chapters 23-40).',
    cultural_traditions: [
      'Chanting all 18 chapters (700 verses) of the Srimad Bhagavad Gita in temples and homes.',
      'Gita Yajna: Offering sacred oblations into the fire with each Gita shloka.',
      'Passing through the illuminated "Vaikuntha Dwara" portal at Tirupati and Srirangam temples.',
      'Distributing copies of the Bhagavad Gita to students, seekers, and libraries.'
    ],
    regions: ['Pan-India', 'Haryana (Kurukshetra Jyotisar)', 'Tamil Nadu (Srirangam)', 'Andhra Pradesh (Tirupati)', 'Global'],
    languages: ['Sanskrit', 'Hindi', 'Tamil', 'Telugu', 'Gujarati', 'English'],
    hero_image_theme: 'amber',
    topical_collections: ['top-25', 'popular', 'margashirsha-festivals', 'krishna-festivals', 'jayanti-festivals'],
    related_festivals: ['janmashtami', 'devutthan-ekadashi', 'radhashtami'],
    related_vrat: ['mokshada-ekadashi-vrat'],
    related_temple_ids: ['tirupati', 'srirangam', 'dwarkadhish', 'somnath'],
    seo_title_template: 'Gita Jayanti & Vaikuntha Ekadashi 2026 Date, 18 Chapters Path & Muhurat',
    seo_description_template: 'Complete Gita Jayanti 2026 guide with exact Mokshada Ekadashi Parana timing, 700 verses chanting schedule, Kurukshetra Jyotisar history & Vaikuntha Dwara Darshanam.',
    puja_information: {
      overview: 'Worship of the Bhagavad Gita grantha and Lord Krishna with yellow flowers, lighting lamps, and reciting chapter 12 (Bhakti Yoga) and chapter 15 (Purushottama Yoga).',
      samagri: [
        { item: 'Srimad Bhagavad Gita Book', quantity: '1 copy', required: true, significance: 'Embodiment of divine wisdom.' },
        { item: 'Yellow Silk Cloth & Tulsi Leaves', quantity: 'Standard', required: true, significance: 'Offering to Parthasarathy Krishna.' },
        { item: 'Chandan, Akshat, Dhoop, Deep', quantity: 'Standard', required: true, significance: 'For scripture aradhana.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Grantha Pujan', mantra: 'ॐ नमो भगवते वासुदेवाय। गीता सुगीता कर्तव्या किमन्यैः शास्त्रविस्तरैः। या स्वयं पद्मनाभस्य मुखपद्माद्विनिःसृता॥', procedure: 'Wrap Gita in red/yellow silk, place on altar, apply sandalwood tilak, offer flowers.' },
        { stepNumber: 2, title: 'Gita Mahatmya & Recitation', mantra: 'सर्वोपनिषदो गावो दोग्धा गोपालनन्दनः। पार्थो वत्सः सुधीर्भोक्ता दुग्धं गीतामृतं महत्॥', procedure: 'Chant verses from Chapter 12 and 15 or perform complete Gita Parayanam.' }
      ],
      aartiName: 'Gita Aarti & Krishna Aarti',
      prasadDetails: 'Panchamrit, Makhana kheer, fruits, and Tulsi water.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Ekadashi Sunrise & Gita Parayanam Window',
      rulesDescription: 'Observed during daylight hours on Margashirsha Shukla Ekadashi.',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Fast is broken next morning on Dwadashi during the Parana window.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Mokshada Ekadashi fast is broken next morning after sunrise.'
    },
    regional_variations: [
      {
        region: 'Haryana (Kurukshetra)',
        customs: 'At Jyotisar (the exact banyan tree site where Krishna spoke the Gita), international Gita Mahotsav with sound-light shows, Yajna, and recitations takes place.',
        distinctiveNames: ['International Gita Mahotsav', 'Jyotisar Darshan'],
        uniqueFoodsOrRituals: 'Maha Yajna, Brahmasarovar Snan.'
      },
      {
        region: 'Tamil Nadu (Srirangam) & Tirupati',
        customs: 'Celebrated as Vaikuntha Ekadashi. Devotees pass through the decorated Paramapada Vasal (Gate to Vaikuntha) at 4:30 AM.',
        distinctiveNames: ['Vaikuntha Ekadashi', 'Paramapada Vasal'],
        uniqueFoodsOrRituals: 'Sundal, Thali, Temple Prasadam.'
      }
    ],
    faqs: [
      { question: 'When is Gita Jayanti 2026?', answer: 'In 2026, Gita Jayanti and Vaikuntha Ekadashi fall on Sunday, December 20, 2026, on Margashirsha Shukla Ekadashi.' },
      { question: 'How many verses and chapters are in the Bhagavad Gita?', answer: 'The Bhagavad Gita contains exactly 18 chapters and 700 verses (shlokas) situated within the Bhishma Parva of the Mahabharata.' }
    ],
    references: [
      { title: 'Mahabharata', source: 'Bhishma Parva, Chapters 23-40', quoteOrChapter: 'Srimad Bhagavad Gita' },
      { title: 'Varaha Purana', source: 'Gita Mahatmya', quoteOrChapter: 'The Glories of Chanting the Gita' }
    ]
  },

  {
    id: 'sakat-chauth',
    canonical_name: 'Sakat Chauth (Vakratunda Sankashti & Tilakuta Chauth)',
    hindi_name: 'सकट चौथ (तिलकुटा चौथ, वक्रतुंड संकष्टी व संतान दीर्घायु व्रत)',
    gujarati_name: 'સકટ ચોથ (તિલકુટા સંકષ્ટ ચતુર્થી)',
    alternate_names: ['Tilakuta Chauth', 'Mahi Chauth', 'Maghi Chauth', 'Sankat Chauth'],
    regional_names: {
      hi: 'सकट चौथ / तिलकुट चौथ',
      gu: 'સકટ ચોથ',
      mr: 'संकष्टी चतुर्थी (माघी)',
      te: 'సంకష్ట చతుర్థి'
    },
    sanskrit_name: 'सङ्कष्टचतुर्थी (तिलकुटा)',
    transliteration: 'Sakaṭacaturthī',
    slug: 'sakat-chauth',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Ganesha (Sankat Mochan) & Chandra Dev',
    deity_category: 'ganesha',
    lunar_month: 'magha',
    paksha: 'krishna',
    tithi_name: 'Chaturthi (चतुर्थी)',
    tithi_number: 4,
    base_day_of_year: 7,
    calculation_method: 'Magha Krishna Chaturdashi prevailing at Moonrise (Chandrodaya Vyapini)',
    short_description: 'Mothers observing strict waterless fasting to pray for the longevity, intelligence, and safety of their children, offering mountains of Til-Kuta (sesame and jaggery) to Lord Ganesha.',
    full_overview: 'Sakat Chauth (also known as Tilakuta Chauth or Maghi Sankashti) is a deeply revered maternal fast observed on Magha Krishna Chaturthi. Mothers fast without water from dawn until the moon rises at night, praying to Vighnaharta Ganesha to ward off all misfortunes, chronic illnesses, and calamities from their children’s lives. Women sculpt or offer a large mound of pounded sesame seeds mixed with jaggery (Til-Kuta) representing a hillock, recount the story of the potter’s kiln and the sparrow’s offspring saved by Ganesha, and offer Arghya to the rising Moon.',
    significance: 'Demonstrates that Ganesha is the ultimate dispeller of all existential crises (Sankat-Harta). Sesame seeds (Til) and jaggery consumed on this cold winter night nourish the body and balance planetary Doshas.',
    history_and_tradition: 'Mentioned in the Ganesha Purana and Bhavishya Purana.',
    cultural_traditions: [
      'Mothers keeping strict Nirjala (waterless) day-long fast for the protection of their children.',
      'Pounding roasted sesame seeds with jaggery to sculpt the "Tilakuta Pahar" (sesame hillock).',
      'Listening to the ancient Sakat Chauth Vrat Katha of the potter and the poor old woman.',
      'Offering Arghya with milk, water, and durva to the rising Moon before concluding the fast.'
    ],
    regions: ['North India', 'Uttar Pradesh', 'Rajasthan', 'Bihar', 'Madhya Pradesh', 'Gujarat'],
    languages: ['Hindi', 'Bhojpuri', 'Rajasthani', 'Gujarati'],
    hero_image_theme: 'stone',
    topical_collections: ['magha-festivals', 'ganesha-festivals', 'vrat-festivals'],
    related_festivals: ['ganesh-chaturthi', 'karwa-chauth', 'hoi-ashtami'],
    related_vrat: ['sankashti-vrat'],
    related_temple_ids: ['siddhivinayak', 'somnath'],
    seo_title_template: 'Sakat Chauth 2026 Date, Moonrise Time & Tilakuta Puja Vidhi',
    seo_description_template: 'Complete Sakat Chauth 2026 guide with exact city-wise Moonrise time, Tilakuta mountain recipe, Ganesha Vrat Katha, mother fasting rules & Arghya procedure.',
    puja_information: {
      overview: 'Worship of Ganesha in evening with sesame jaggery laddus, recitation of Vrat Katha, followed by Moon worship at night.',
      samagri: [
        { item: 'Til-Kuta (Pounded sesame and jaggery)', quantity: '500g', required: true, significance: 'The signature sacred offering of Sakat Chauth.' },
        { item: 'Durva Grass & Red Hibiscus Flowers', quantity: '21 blades', required: true, significance: 'Favorite offerings to Ganesha.' },
        { item: 'Sweet Potatoes (Shakarkandi)', quantity: '4-5 pcs', required: true, significance: 'Winter root vegetable offering.' },
        { item: 'Milk and Water Lota for Moon Arghya', quantity: '1 pot', required: true, significance: 'For concluding the fast.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Sankalp', mantra: 'ॐ गं गणपतये नमः।', procedure: 'Take dawn bath, take pledge to fast for children’s well-being without water.' },
        { stepNumber: 2, title: 'Evening Ganesha Puja & Tilakuta Samarpan', mantra: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥', procedure: 'Offer Til-Kuta, sweet potatoes, durva, and fruits to Ganesha; listen to the Vrat Katha.' },
        { stepNumber: 3, title: 'Chandra Arghya at Moonrise', mantra: 'गगनार्णवमाणिक्य चन्द्र दाक्षायणीपते। गृहाणार्घ्यं मया दत्तं गणेशप्रिय मङ्गलम्॥', procedure: 'Offer milk-water arghya to the rising Moon, perform aarti, and break fast with Til-Kuta prasad.' }
      ],
      aartiName: 'Jai Ganesh Jai Ganesh Deva',
      prasadDetails: 'Til-Kuta (Til-Gud laddoos), boiled sweet potatoes, and fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Moonrise Arghya Muhurat',
      rulesDescription: 'Fast is broken precisely at the moment of local moonrise.',
      calculationKey: 'standard',
      traditionalNotice: 'Check the specific city moonrise time for breaking the fast.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'Strict waterless fast broken only after sighting the Moon and offering Arghya.'
    },
    regional_variations: [
      {
        region: 'Uttar Pradesh & Rajasthan',
        customs: 'Families prepare large sculptures of goats or mountains from Til-Kuta which are ceremonially cut and distributed as prasad.',
        distinctiveNames: ['Tilakuta Chauth', 'Sakat Chauth'],
        uniqueFoodsOrRituals: 'Til-Kuta, Shakarkand.'
      }
    ],
    faqs: [
      { question: 'When is Sakat Chauth 2026?', answer: 'In 2026, Sakat Chauth falls on Wednesday, January 7, 2026, on Magha Krishna Chaturthi.' },
      { question: 'Why do mothers observe Sakat Chauth?', answer: 'Mothers observe this severe waterless fast to invoke Lord Ganesha’s protection to eliminate all dangers, sickness, and obstacles from their children’s lives.' }
    ],
    references: [
      { title: 'Ganesha Purana', source: 'Sankashti Vrata Khanda', quoteOrChapter: 'The Story of the Potter and the Sparrow' }
    ]
  }
];
