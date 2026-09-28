export interface PujaSamagriItem {
  item: string;
  quantity: string;
  required: boolean;
  regionalAlternative?: string;
  significance: string;
}

export interface PujaStepItem {
  stepNumber: number;
  title: string;
  mantra?: string;
  procedure: string;
  cautionOrNote?: string;
}

export interface RegionalVariationItem {
  region: string;
  customs: string;
  distinctiveNames: string[];
  uniqueFoodsOrRituals: string;
}

export interface FestivalFaqItem {
  question: string;
  answer: string;
}

export interface FestivalReferenceItem {
  title: string;
  source: string;
  quoteOrChapter?: string;
}

export interface FestivalDefinition {
  id: string;
  canonical_name: string;
  hindi_name: string;
  gujarati_name?: string;
  alternate_names: string[];
  regional_names: Record<string, string>;
  sanskrit_name: string;
  transliteration: string;
  slug: string;
  festival_type: 'major' | 'jayanti' | 'vrat' | 'sankranti' | 'new-year' | 'temple' | 'seasonal' | 'harvest';
  religion: 'hindu' | 'jain' | 'sikh';
  sect: 'all' | 'vaishnava' | 'shaiva' | 'shakta' | 'smarta' | 'iskcon' | 'jain';
  deity: string;
  deity_category: 'shiva' | 'vishnu' | 'krishna' | 'rama' | 'ganesha' | 'hanuman' | 'devi' | 'lakshmi' | 'saraswati' | 'surya' | 'murugan' | 'ayyappa' | 'jagannath' | 'guru' | 'other';
  lunar_month: 'chaitra' | 'vaishakha' | 'jyeshtha' | 'ashadha' | 'shravana' | 'bhadrapada' | 'ashwin' | 'kartik' | 'margashirsha' | 'pausha' | 'magha' | 'phalguna' | 'solar';
  paksha: 'shukla' | 'krishna' | 'solar';
  tithi_name: string;
  tithi_number: number;
  base_day_of_year: number; // approximate day offset for astronomical calculation
  solar_rule?: string;
  calculation_method: string;
  short_description: string;
  full_overview: string;
  significance: string;
  history_and_tradition?: string;
  cultural_traditions: string[];
  regions: string[];
  languages: string[];
  hero_image_theme: string;
  topical_collections: string[];
  related_festivals: string[];
  related_vrat: string[];
  related_temple_ids: string[];
  seo_title_template: string;
  seo_description_template: string;
  puja_information: {
    overview: string;
    samagri: PujaSamagriItem[];
    steps: PujaStepItem[];
    aartiName?: string;
    prasadDetails: string;
  };
  muhurat_information: {
    primaryMuhuratName: string;
    rulesDescription: string;
    calculationKey: 'pradosh_amavasya' | 'madhyahna' | 'nishita' | 'vijaya' | 'pradosh' | 'sandhi' | 'day_choghadiya' | 'standard';
    traditionalNotice?: string;
  };
  fasting_information: {
    isFastingDay: boolean;
    fastType: 'Nirjala' | 'Phalahar' | 'Ekbukta' | 'Naktavrata' | 'Upavas' | 'None';
    paranaRules: string;
    allowedFoods?: string[];
    prohibitedFoods?: string[];
    regionalExceptions?: string;
  };
  regional_variations: RegionalVariationItem[];
  faqs: FestivalFaqItem[];
  references: FestivalReferenceItem[];
}

// Master Festival Catalog containing core Hindu & Indian festivals with rich, original data
export const masterFestivalCatalog: FestivalDefinition[] = [
  {
    id: 'diwali',
    canonical_name: 'Diwali (Deepavali & Lakshmi Puja)',
    hindi_name: 'दीपावली (महालक्ष्मी पूजन व दीपोत्सव)',
    gujarati_name: 'દિવાળી (ચોપડા પૂજન / લક્ષ્મી પૂજન)',
    alternate_names: ['Deepavali', 'Lakshmi Puja', 'Divali', 'Deepotsav', 'Bandi Chhor Divas'],
    regional_names: {
      gu: 'દિવાળી (ચોપડા પૂજન)',
      hi: 'दीपावली / दीवाली',
      ta: 'தீபாவளி (Deepavali)',
      te: 'దీపావళి (Deepavali)',
      bn: 'দীপাবলি / কালীপূজা (Shyama Puja)',
      mr: 'दिवाळी (लक्ष्मीपूजन)',
      ml: 'ദീപാവലി (Deepavali)',
      kn: 'ದೀಪಾವಳಿ (Deepavali)',
      or: 'ଦୀପାବଳୀ'
    },
    sanskrit_name: 'दीपावली (दीपमालिका)',
    transliteration: 'Dīpāvalī',
    slug: 'diwali',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Goddess Lakshmi & Lord Ganesha',
    deity_category: 'lakshmi',
    lunar_month: 'kartik',
    paksha: 'krishna',
    tithi_name: 'Amavasya (अमावस्या)',
    tithi_number: 30,
    base_day_of_year: 312,
    calculation_method: 'Kartik Amavasya prevailing during Pradosh Kaal and Nishita Kaal',
    short_description: 'The supreme festival of lights celebrating the cosmic victory of light over darkness, truth over untruth, and the divine advent of Mahalakshmi with Lord Ganesha.',
    full_overview: 'Diwali, also known as Deepavali (literally "a row of clay lamps"), is the grandest Sanatana celebration observed across India and globally. Falling on the darkest night of Kartik Amavasya, millions of earthen lamps (diyas) illuminate courtyards, temples, and homes to welcome Goddess Mahalakshmi, the granter of spiritual illumination, auspiciousness, and righteous prosperity.',
    significance: 'Spiritually, lighting the diya represents awakening the inner divine consciousness and dispelling the darkness of ignorance (Tamaso Ma Jyotirgamaya). In the Ramayana, it commemorates the joyful return of Bhagwan Shri Rama, Sita Mata, and Lakshmana to Ayodhya after 14 years of exile. In Mahabharata, it marks the return of the Pandavas. In Gujarat, it marks the completion of the fiscal year with Chopda Pujan.',
    history_and_tradition: 'Mentioned extensively in the Skanda Purana, Padma Purana, and Bhavishya Purana, Deepavali is an ancient autumn festival that aligns with the end of the Kharif harvest season. In ancient times, farmers expressed gratitude to Mahalakshmi and Kubera for fertile yields.',
    cultural_traditions: [
      'Lighting rows of sesame oil and cow-ghee diyas at dusk.',
      'Drawing intricate colored rice flour and natural powder Rangolis at the threshold.',
      'Performing Sharda Puja and Chopda Pujan on new ledger accounts by traders in Gujarat and Rajasthan.',
      'Exchanging homemade sweets like Kaju Katli, Gujiya, Mohanthal, and dry fruits.',
      'Bursting traditional firecrackers symbolizing the triumph of celestial light.'
    ],
    regions: ['Pan-India', 'Gujarat', 'Maharashtra', 'North India', 'Bengal', 'South India', 'Nepal', 'Global Diaspora'],
    languages: ['Hindi', 'Gujarati', 'Sanskrit', 'Tamil', 'Telugu', 'Bengali', 'Marathi'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'kartik-festivals', 'diwali-cluster', 'lakshmi-festivals'],
    related_festivals: ['dhanteras', 'naraka-chaturdashi', 'govardhan-puja', 'bhai-dooj', 'gujarati-new-year'],
    related_vrat: ['kartik-vrat', 'dhanteras-kubera-vrat'],
    related_temple_ids: ['somnath', 'mahalakshmi-mumbai', 'golden-temple', 'shrinathji'],
    seo_title_template: 'Diwali 2026 Date, Lakshmi Puja Muhurat, Tithi & Deepavali Guide',
    seo_description_template: 'Complete Diwali 2026 guide with exact Lakshmi Puja Pradosh Kaal, Vrishabha Lagna, Nishita Kaal, Chopda Pujan muhurat, authentic step-by-step puja vidhi, mantras & regional customs.',
    puja_information: {
      overview: 'Diwali Mahalakshmi Puja is traditionally conducted during Pradosh Kaal when Vrishabha Lagna (fixed ascendant / Sthir Lagna) prevails. A stable Lagna is believed to retain the blessings of Lakshmi permanently in the home.',
      samagri: [
        { item: 'Idols of Mahalakshmi & Lord Ganesha', quantity: '1 pair', required: true, significance: 'Ganesha removes obstacles while Lakshmi bestows wisdom and righteous abundance.' },
        { item: 'Clay Diyas (Earthen Lamps)', quantity: '21 to 51 pcs', required: true, significance: 'Disperses darkness and invites divine luminescence.' },
        { item: 'Pure Cow Ghee & Mustard/Sesame Oil', quantity: '500g', required: true, significance: 'Fuel for the primary Akhand Diya.' },
        { item: 'Silver or Gold Coin with Lakshmi imprint', quantity: '1 pc', required: false, regionalAlternative: 'Clean copper coin', significance: 'Symbolizes sovereign material and spiritual wealth.' },
        { item: 'Red Cloth (Lal Vastra) for Altar', quantity: '1 meter', required: true, significance: 'Represents divine cosmic shakti.' },
        { item: 'Roli, Akshat (Unbroken Rice), Haldi, Kumkum', quantity: '50g each', required: true, significance: 'Auspicious tilak and invocation materials.' },
        { item: 'Lotus Flowers & Fresh Rose Garland', quantity: '2 garlands', required: true, significance: 'Favorite seat of Goddess Kamalavasini.' },
        { item: 'Betel Leaves (Paan) & Supari', quantity: '5 pairs', required: true, significance: 'Signifies purity and guest reverence.' },
        { item: 'Kheel & Batashe (Puffed Rice & Sugar Candies)', quantity: '250g', required: true, significance: 'Traditional harvest harvest offering to Lakshmi.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Purification & Altar Preparation (Pavitrikaran)', mantra: 'ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा। यः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥', procedure: 'Sprinkle Ganga water over yourself, the puja altar, and all sacred samagri.' },
        { stepNumber: 2, title: 'Solemn Oath (Sankalp)', mantra: 'मम आत्मनः पुत्रपौत्रादिसहितस्य सकलदुरितोपशमनपूर्वक धनधान्यसमृद्ध्यर्थं श्री महालक्ष्मी प्रीत्यर्थं पूजनमहं करिष्ये।', procedure: 'Take water, akshat, and flower in right hand, recite your gotra, city, and year, and offer to the deities.' },
        { stepNumber: 3, title: 'Lord Ganesha Invocation (Prathama Puja)', mantra: 'ॐ गं गणपतये नमः। वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥', procedure: 'Bathe Ganesha with panchamrit, offer sindoor, janeu, modak, and red flowers.' },
        { stepNumber: 4, title: 'Kalash Sthapana & Varuna Invocation', mantra: 'ॐ वरुणाय नमः। कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः।', procedure: 'Place copper kalash with water, mango leaves, betel nut, and coconut wrapped in red moli.' },
        { stepNumber: 5, title: 'Mahalakshmi Dhyan & Sodashopachara Puja', mantra: 'ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥', procedure: 'Offer padya, arghya, achamana, snan, vastra, yajnopavita, chandan, akshat, pushpa, dhoop, deep, naivedya.' },
        { stepNumber: 6, title: 'Kubera & Bahi-Khata (Chopda) Pujan', mantra: 'ॐ कुबेराय नमः। ॐ श्रीं ॐ ह्रीं श्रीं ह्रीं क्लीं श्रीं क्लीं वित्तेश्वराय नमः॥', procedure: 'Anoint new ledger books, safes, and digital tools with swastik and offer akshat.' },
        { stepNumber: 7, title: 'Maha Aarti & Deep Daan', mantra: 'ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता। तुमको निसदिन सेवत, हर विष्णु विधाता॥', procedure: 'Sing Mahalakshmi Aarti with camphor diya, distribute prasad to all family members, and place diyas at the main entrance, kitchen, and water source.' }
      ],
      aartiName: 'Om Jai Lakshmi Mata',
      prasadDetails: 'Kheel-batashe, laddu, kheer, fruits, dry fruits, and panchamrit.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pradosh Kaal & Vrishabha Sthir Lagna Lakshmi Puja',
      rulesDescription: 'Pradosh Kaal begins at sunset and lasts for approximately 2 hours and 24 minutes. Performing puja during Vrishabha Sthir Lagna within Pradosh Kaal ensures eternal peace and wealth in the household.',
      calculationKey: 'pradosh_amavasya',
      traditionalNotice: 'While householders and shopkeepers perform puja during Pradosh Kaal, ascetics and Tantric practitioners observe Nishita Kaal Maha Puja at midnight.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Devotees keep a fast throughout the day, taking only water or fruits, and break the fast after the completion of the evening Mahalakshmi Puja and Aarti.',
      allowedFoods: ['Milk', 'Fruits', 'Sabudana', 'Singhara flour', 'Makhana', 'Dry fruits'],
      prohibitedFoods: ['Grains (Wheat, Rice)', 'Onion & Garlic', 'Alcohol & Non-vegetarian food', 'Common salt (Rock salt/Sendha Namak is permitted)'],
      regionalExceptions: 'In some regions of South India, devotees take an auspicious oil bath before sunrise on Naraka Chaturdashi and celebrate with festive feasts.'
    },
    regional_variations: [
      {
        region: 'Gujarat',
        customs: 'Chopda Pujan is conducted with utmost reverence on Diwali evening. New accounting books are opened with auspicious Shree and Swastik symbols. The day immediately after Diwali is celebrated as Bestu Varas (Gujarati New Year) and Annakut.',
        distinctiveNames: ['Chopda Pujan', 'Diwali Padvo', 'Bestu Varas'],
        uniqueFoodsOrRituals: 'Mohanthal, Ghari, Chorafali, Mathiya, and Shrikhand.'
      },
      {
        region: 'Bengal & Eastern India',
        customs: 'While North and West India worship Mahalakshmi, Bengal celebrates Kali Puja (Shyama Puja) on the midnight of Kartik Amavasya to destroy ego and dark forces.',
        distinctiveNames: ['Shyama Puja', 'Mahanisha Kali Puja'],
        uniqueFoodsOrRituals: 'Khichuri bhog, Labra, Luchi, and Sandesh offered to Maa Kali.'
      },
      {
        region: 'Tamil Nadu & Kerala (South India)',
        customs: 'Celebrated primarily on Naraka Chaturdashi with early morning Ganga Snanam (warm sesame oil bath before sunrise), wearing new clothes, and eating medicinal Deepavali Marundu herbal paste.',
        distinctiveNames: ['Deepavali Ganga Snanam'],
        uniqueFoodsOrRituals: 'Deepavali Marundu (digestive herbal preparation), Murukku, Adhirasam.'
      },
      {
        region: 'Maharashtra',
        customs: 'Celebrated over five days including Vasubaras (worship of cows), Dhanatrayodashi, Narak Chaturdashi (Abhyanga Snan), Lakshmi Pujan, and Bhaubeej.',
        distinctiveNames: ['Diwali Faral', 'Vasubaras'],
        uniqueFoodsOrRituals: 'Chivda, Karanji, Chakli, Shankarpali, and Poha.'
      }
    ],
    faqs: [
      { question: 'When is Diwali 2026?', answer: 'In 2026, Diwali falls on Sunday, November 8, 2026, on Kartik Krishna Amavasya. The auspicious Pradosh Kaal Lakshmi Puja Muhurat is in the evening across all Indian cities.' },
      { question: 'Why is Lakshmi Puja performed during Pradosh Kaal and Sthir Lagna?', answer: 'Pradosh Kaal (the twilight period of 2 hours and 24 minutes following sunset) is sacred for Divine Mother Mahalakshmi. Performing puja in Sthir Lagna (fixed zodiac ascendants like Taurus/Vrishabha) ensures that wealth and peace remain steadily anchored in the home.' },
      { question: 'What is the significance of lighting 21 or 51 Diyas?', answer: 'The lamps represent the elimination of 51 spiritual impurities and the inviting of the Navadurgas, Ashta Lakshmis, and Dikpalas into one’s residence.' },
      { question: 'How is Diwali celebrated in Gujarat?', answer: 'In Gujarat, Diwali evening features grand Chopda Pujan, where businessmen close past accounts and inaugurate new ledgers with ink sanctified by saffron and sandalwood. The day following Diwali is celebrated as Bestu Varas (Gujarati New Year).' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Kartika Masa Mahatmya', quoteOrChapter: 'Chapter on Dipavali Nirnaya & Lakshmi Snan' },
      { title: 'Bhavishya Purana', source: 'Uttara Parva', quoteOrChapter: 'Discourse on Deepotsava & Kubera Puja' },
      { title: 'Nirnaya Sindhu', source: 'Festival Injunctions', quoteOrChapter: 'Section on Kartik Amavasya Vyapti' }
    ]
  },

  {
    id: 'holi',
    canonical_name: 'Holi (Festival of Colors & Holika Dahan)',
    hindi_name: 'होली (होलिका दहन व धुलेंडी रंगोत्सव)',
    gujarati_name: 'હોળી (હોળીકા દહન અને ધૂળેટી)',
    alternate_names: ['Holika Dahan', 'Dhulandi', 'Rangwali Holi', 'Dol Purnima', 'Basant Utsav', 'Phagwah'],
    regional_names: {
      gu: 'હોળી - ધૂળેટી',
      hi: 'होली - धुलेंडी',
      bn: 'দোল পূর্ণিমা (Dol Purnima)',
      mr: 'होळी - धुलीवंदन',
      or: 'ଦୋଳ ପୂର୍ଣ୍ଣିମା (Dola Purnima)',
      ta: 'ஹோலி (Holi)',
      te: 'హోళీ (Holi)'
    },
    sanskrit_name: 'होलिकोत्सव (हुताशनी)',
    transliteration: 'Holikotsava',
    slug: 'holi',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Narasimha, Bhakta Prahlada, Lord Krishna & Radha',
    deity_category: 'krishna',
    lunar_month: 'phalguna',
    paksha: 'shukla',
    tithi_name: 'Purnima (पूर्णिमा)',
    tithi_number: 15,
    base_day_of_year: 62,
    calculation_method: 'Holika Dahan occurs on Phalguna Purnima during Pradosh Kaal, devoid of Bhadra (Bhadra-free window)',
    short_description: 'The jubilant spring festival marking the destruction of evil demoness Holika by divine grace, and the joyous color play commemorating the divine love of Radha and Krishna.',
    full_overview: 'Holi is a vibrant two-day festival welcoming spring (Vasant Ritu). On the eve of Phalguna Purnima, massive sacred bonfires are lit for Holika Dahan, commemorating young devotee Prahlada’s miraculous salvation from fire while his demonic aunt Holika was consumed. The following morning (Dhulandi or Dhuleti), people joyfully apply colored powders (Gulal) and waters, erasing social barriers.',
    significance: 'Symbolizes the victory of pure devotional faith (Bhakti) over autocratic ego and tyranny. Agrarian significance includes offering roasted fresh barley grains (Holka) from the new harvest into the sacred fire as gratitude to Agni Dev.',
    history_and_tradition: 'Described in the Narada Purana, Jaimini Mimamsa, and celebrated with great fervor in the Braj region (Mathura, Vrindavan, Barsana, Nandgaon) as the eternal celebration of Radha Krishna Prema.',
    cultural_traditions: [
      'Performing Parikrama (circumambulation) of the Holika bonfire with raw yarn.',
      'Roasting fresh green gram and wheat stalks in the sacred flames.',
      'Playing with organic flower-based herbal gulal (Abir).',
      'Singing traditional Hori folk songs and Braj Dham Rasiyas.',
      'Sipping chilled Thandai enriched with saffron, almonds, and rose petals.'
    ],
    regions: ['Pan-India', 'Uttar Pradesh (Braj)', 'Gujarat', 'Rajasthan', 'Bihar', 'Bengal', 'Global Diaspora'],
    languages: ['Hindi', 'Gujarati', 'Braj Bhasha', 'Bengali', 'Marathi'],
    hero_image_theme: 'rose',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'phalguna-festivals', 'krishna-festivals'],
    related_festivals: ['chhoti-holi', 'lathmar-holi', 'dol-purnima', 'phulera-dooj', 'rang-panchami'],
    related_vrat: ['phalguna-purnima-vrat'],
    related_temple_ids: ['bankey-bihari', 'dwarkadhish', 'kashi-vishwanath'],
    seo_title_template: 'Holi 2026 Date, Holika Dahan Muhurat, Bhadra Timings & Guide',
    seo_description_template: 'Complete Holi 2026 guide with exact Holika Dahan Pradosh Muhurat, Bhadra Mukha/Punchha calculation, Rangwali Holi (Dhuleti) date, ritual procedure & Braj celebrations.',
    puja_information: {
      overview: 'Holika Dahan puja involves invoking Lord Ganesha, Bhakta Prahlada, and Lord Narasimha. Water, akshat, flowers, turmeric, whole coconut, and cow-dung cakes (badkula) are offered into the bonfire.',
      samagri: [
        { item: 'Whole Coconut (Nariyal)', quantity: '1 pc', required: true, significance: 'Offered into the fire to neutralize negative planetary influences.' },
        { item: 'Dry Cow Dung Cakes (Badkula/Gulari)', quantity: '1 garland', required: true, significance: 'Traditional purified organic fuel.' },
        { item: 'Raw White Cotton Thread (Kacha Sut)', quantity: '1 roll', required: true, significance: 'Wrapped around Holika tree/pyre during circumambulation.' },
        { item: 'Fresh Wheat / Barley Stalks', quantity: '5 stalks', required: true, significance: 'Symbolizes blessing for the upcoming Rabi crop.' },
        { item: 'Roli, Akshat, Haldi, Flowers', quantity: '50g each', required: true, significance: 'Tilak offerings to Agni Dev.' },
        { item: 'Pure Water Pot (Lota)', quantity: '1 pot', required: true, significance: 'Used to encircle the fire with calming water.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Bhakta Prahlada & Narasimha Dhyan', mantra: 'ॐ नृसिंहाय विद्महे वज्रनखाय धीमहि। तन्नः सिंहः प्रचोदयात्॥', procedure: 'Meditate upon Lord Narasimha’s compassionate protection of innocent devotees.' },
        { stepNumber: 2, title: 'Altar Worship of Holika Pyre', mantra: 'ॐ होलिकायै नमः। असृक्पाभयसंत्रस्तैः कृता त्वं होलिके यतः। अतस्त्वां पूजयिष्यामि भूते भूतिप्रदा भव॥', procedure: 'Sprinkle water, apply roli and akshat, and lay flower garlands around the wood pyre.' },
        { stepNumber: 3, title: 'Cotton Thread Parikrama', mantra: 'प्रदक्षिणां करोमीश सर्वपापप्रणाशिनीम्।', procedure: 'Walk clockwise 3, 5, or 7 times around the pyre, wrapping the cotton thread.' },
        { stepNumber: 4, title: 'Kindling of Sacred Fire', mantra: 'ॐ अग्नये नमः। दीक्षां देहि पावक।', procedure: 'Light the fire during the auspicious Bhadra-free Pradosh window.' },
        { stepNumber: 5, title: 'Grain Offering & Ash Tilak', mantra: 'अन्नपतेऽन्नस्य नो देहि।', procedure: 'Roast barley stalks in embers; apply holy cooling vibhuti/ash to forehead next morning.' }
      ],
      aartiName: 'Shri Narasimha Aarti',
      prasadDetails: 'Gunjia, Puran Poli, Malpua, Thandai, roasted grains, and sweet sweetmeats.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Holika Dahan Pradosh Kaal Muhurat',
      rulesDescription: 'Shastras strictly prohibit Holika Dahan during Bhadra. If Bhadra prevails during Pradosh, one must wait until Bhadra Mukha passes or conduct Dahan during Bhadra Punchha.',
      calculationKey: 'pradosh',
      traditionalNotice: 'Dahan conducted during Bhadra brings misfortune to the town or realm according to Dharmasindhu.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Ekbukta',
      paranaRules: 'Many devotees observe a fast during the day and consume food only after paying obeisance to the lighted Holika in the evening.',
      allowedFoods: ['Fruits', 'Milk', 'Panchamrit', 'Fasting flours'],
      prohibitedFoods: ['Non-vegetarian food', 'Alcohol', 'Stale food'],
      regionalExceptions: 'In Gujarat, children and newly married couples observe Dhuleti fast and break it after taking darshan of Holika ash.'
    },
    regional_variations: [
      {
        region: 'Braj (Mathura, Vrindavan, Barsana)',
        customs: 'Celebrated for over 40 days starting from Vasant Panchami. Famous for Lathmar Holi of Barsana and Nandgaon, Phoolon Ki Holi at Bankey Bihari Temple, and Chhadimar Holi of Gokul.',
        distinctiveNames: ['Lathmar Holi', 'Rangotsav', 'Phoolon ki Holi'],
        uniqueFoodsOrRituals: 'Makkhan Mishri, Thandai, Malpua.'
      },
      {
        region: 'Bengal & Odisha',
        customs: 'Observed as Dol Purnima (Dola Yatra). Murthis of Radha and Krishna are placed on elaborately decorated swings (Dol) and taken in royal processions accompanied by Sankirtan.',
        distinctiveNames: ['Dol Purnima', 'Basant Utsav', 'Dola Yatra'],
        uniqueFoodsOrRituals: 'Malpua, Rasgulla, Kheer, and Khol-Kirtan.'
      },
      {
        region: 'Gujarat & Rajasthan',
        customs: 'Celebrated as Dhuleti with lively Garba and Gair dances around community bonfires. Young boys retrieve coconuts tied atop trees amidst friendly mock resistance.',
        distinctiveNames: ['Dhuleti', 'Gair Dance'],
        uniqueFoodsOrRituals: 'Dates (Khajur), Roasted Dhani (popped sorghum), and Ghughra.'
      }
    ],
    faqs: [
      { question: 'When is Holi 2026?', answer: 'In 2026, Holika Dahan will be observed on Tuesday, March 3, 2026, on Phalguna Purnima. Rangwali Holi (Dhulandi/Dhuleti) will be celebrated on Wednesday, March 4, 2026.' },
      { question: 'What is the rule regarding Bhadra on Holika Dahan?', answer: 'Dharmic texts mandate that Holika must never be ignited during Bhadra. If Bhadra exists, scholars calculate the auspicious Bhadra Punchha (tail) or wait until Bhadra concludes after Pradosh Kaal.' },
      { question: 'What is the spiritual meaning of Holika Dahan?', answer: 'It proves that unshakeable devotion (Bhakti) is shielded by the Almighty, while arrogance, hatred, and cruelty (Holika) are reduced to ashes.' }
    ],
    references: [
      { title: 'Narada Purana', source: 'Purva Bhaga', quoteOrChapter: 'Prahlada Charitra and Holika Nirnaya' },
      { title: 'Dharmasindhu', source: 'Phalguna Prakarana', quoteOrChapter: 'Detailed Bhadra Rules for Holika Dahan' }
    ]
  },

  {
    id: 'maha-shivaratri',
    canonical_name: 'Maha Shivaratri',
    hindi_name: 'महाशिवरात्रि (महानिशीथ काल व चार प्रहर पूजा)',
    gujarati_name: 'મહાશિવરાત્રી (જલાભિષેક અને રુદ્રાભિષેક)',
    alternate_names: ['Shivaratri', 'Maha Sivaratri', 'The Great Night of Shiva', 'Rudra Ratri'],
    regional_names: {
      gu: 'મહાશિવરાત્રી (શિવ પૂજન)',
      hi: 'महाशिवरात्रि',
      ta: 'மகா சிவராத்திரி (Maha Sivaratri)',
      te: 'మహా శివరాత్రి (Maha Shivaratri)',
      kn: 'ಮಹಾ ಶಿವರಾತ್ರಿ (Maha Shivaratri)',
      ml: 'മഹാശിവരാത്രി (Maha Shivaratri)',
      mr: 'महाशिवरात्री',
      bn: 'মহা শিবরাত্রি'
    },
    sanskrit_name: 'महाशिवरात्रिः',
    transliteration: 'Mahāśivarātriḥ',
    slug: 'maha-shivaratri',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'shaiva',
    deity: 'Lord Shiva & Mata Parvati',
    deity_category: 'shiva',
    lunar_month: 'phalguna',
    paksha: 'krishna',
    tithi_name: 'Chaturdashi (चतुर्दशी)',
    tithi_number: 14,
    base_day_of_year: 46,
    calculation_method: 'Magha/Phalguna Krishna Chaturdashi prevailing during Nishita Kaal (local midnight)',
    short_description: 'The supreme night of cosmic consciousness celebrating Lord Shiva’s eternal wedding with Mata Parvati and the manifestation of the infinite Jyotirlinga column of light.',
    full_overview: 'Maha Shivaratri is the most sacred observance in the Shaivite tradition, celebrated on the 14th day of the dark fortnight. On this night, cosmic planetary positions naturally assist human spiritual energies to surge upwards. Devotees observe strict waterless or fruit-based fasting, remain awake in upright posture (Jagaran), and offer bilva leaves and Gangajal across the four quarters of the night (Char Prahar).',
    significance: 'Commemorates when Lord Shiva drank the deadly Kalakuta poison arising from the Samudra Manthan to protect all living beings, holding it in His throat which turned blue (Nilakantha). It also marks the appearance of Shiva as an unfathomable pillar of cosmic fire (Lingodbhava Murti).',
    history_and_tradition: 'Expounded in the Shiva Purana (Vidyeshvara Samhita), Linga Purana, and Skanda Purana. A single bilva leaf offered with devotion on this night is extolled as granting redemption from sins accrued over lifetimes.',
    cultural_traditions: [
      'Performing continuous Abhishekam with Panchamrit, tender coconut water, and bhasma.',
      'Chanting Sri Rudram, Chamakam, Shiva Tandava Stotram, and Mahamrityunjaya Mantra.',
      'Keeping midnight vigil (Maha Jagaran) with spiritual discourses and bhajans.',
      'Char Prahar Puja with specific dravyas for each prahar (milk, curd, ghee, honey).'
    ],
    regions: ['Pan-India', 'Kashmir', 'Varanasi', 'Gujarat (Somnath)', 'Tamil Nadu', 'Nepal (Pashupatinath)', 'Global'],
    languages: ['Sanskrit', 'Hindi', 'Gujarati', 'Tamil', 'Telugu', 'Kannada'],
    hero_image_theme: 'stone',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'shiva-festivals', 'phalguna-festivals', 'vrat-festivals'],
    related_festivals: ['masik-shivaratri', 'pradosham', 'shravan-somwar', 'somvati-amavasya'],
    related_vrat: ['shivaratri-vrat', 'pradosha-vrat'],
    related_temple_ids: ['somnath', 'kashi-vishwanath', 'mahakaleshwar', 'kedarnath', 'rameswaram'],
    seo_title_template: 'Maha Shivaratri 2026 Date, Nishita Kaal, 4 Prahar Puja Timings & Vrat',
    seo_description_template: 'Complete Maha Shivaratri 2026 guide with exact Nishita Kaal Muhurat, 4 Prahar Abhishekam timings, Bilvapatra Puja Vidhi, Mahamrityunjaya Mantra & Parana rules.',
    puja_information: {
      overview: 'Shiva Linga Abhishekam is performed sequentially using Milk, Curd, Ghee, Honey, Sugar (Panchamrit), followed by Gangajal, Chandan, Vibhuti, and offering of intact trifoliate Bilva leaves.',
      samagri: [
        { item: 'Bilva Leaves (Belpatra)', quantity: '108 leaves', required: true, significance: 'Trifoliate leaves represent the three Gunas (Sattva, Rajas, Tamas) and Shiva’s three eyes.' },
        { item: 'Gangajal & Panchamrit Ingredients', quantity: '1 set', required: true, significance: 'Cools the fiery energy of the Lingodbhava manifestation.' },
        { item: 'Bhasma / Sacred Ash', quantity: '50g', required: true, significance: 'Symbol of ultimate dissolution and purity of consciousness.' },
        { item: 'Dhatura Fruit & Flower', quantity: '2 pcs', required: false, significance: 'Symbolizes neutralizing inner poisons of ego, anger, and greed.' },
        { item: 'White Lotus / Aak (Calotropis) Flowers', quantity: '1 garland', required: true, significance: 'Favorite cooling flowers of Mahadeva.' },
        { item: 'Janeu (Sacred Thread)', quantity: '1 pc', required: true, significance: 'Offered during Shodashopachara vastra samarpan.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Bhasma & Rudraksha Dharan and Dhyanam', mantra: 'ॐ वन्दे देव उमापतिं सुरगुरुं वन्दे जगत्कारणम्। वन्दे पन्नगभूषणं मृगधरं वन्दे पशूनां पतिम्॥', procedure: 'Sit facing North or East, apply tripundra of sacred bhasma, wear rudraksha beads, and meditate on Lord Shiva.' },
        { stepNumber: 2, title: 'Jalabhishekam & Panchamrit Snanam', mantra: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्यchainsोर्मुक्षीय माऽमृतात्॥', procedure: 'Bathe the Shiva Linga with continuous stream of Gangajal, milk, curd, ghee, honey, and sugarcane juice.' },
        { stepNumber: 3, title: 'Bilvashtakam Chanting & Bilva Samarpan', mantra: 'त्रिदलं त्रिगुणाकारं त्रिनेत्रं च त्रियायुधम्। त्रिजन्मपापसंहारं एकबिल्वं शिवार्पणम्॥', procedure: 'Offer 108 fresh bilva leaves, keeping the smooth green side downward on the Linga.' },
        { stepNumber: 4, title: 'Chandan, Bhasma & Pushpa Samarpan', mantra: 'ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥', procedure: 'Anoint with white sandalwood paste, sprinkle aromatic vibhuti, and crown with dhatura and aak flowers.' },
        { stepNumber: 5, title: 'Char Prahar Night Worship', mantra: 'ॐ नमः शिवाय।', procedure: 'Perform four pujas throughout the night: 1st Prahar (Milk), 2nd Prahar (Curd), 3rd Prahar (Ghee), 4th Prahar (Honey).' },
        { stepNumber: 6, title: 'Shiva Aarti & Prarthana', mantra: 'कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥', procedure: 'Perform camphor aarti, seek forgiveness for all unintentional transgressions, and maintain silent contemplation.' }
      ],
      aartiName: 'Om Jai Shiv Omkara',
      prasadDetails: 'Bhang thandai, Panchamrit, fruits, roasted makhana, and sabudana khichdi.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Nishita Kaal Maha Puja Muhurat',
      rulesDescription: 'Nishita Kaal occurs during the 8th Muhurat of the night, spanning approximately 48 minutes centered around astronomical midnight.',
      calculationKey: 'nishita',
      traditionalNotice: 'If Chaturdashi touches Nishita Kaal on two consecutive nights, the first night is chosen if it encompasses the entire Nishita window.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'The fast is concluded next morning after sunrise and before the expiry of Chaturdashi Tithi, following a morning bath and Shiva darshan.',
      allowedFoods: ['Milk', 'Fruits', 'Sabudana', 'Water (if observing Phalahar fast)'],
      prohibitedFoods: ['All grains (Rice, Wheat, Dal)', 'Salt (only Sendha namak permitted)', 'Tamasic vegetables'],
      regionalExceptions: 'In Kashmir Shaivism, the festival is observed as Herath with special Vatak Puja involving walnuts and soaked vessels.'
    },
    regional_variations: [
      {
        region: 'Kashmir',
        customs: 'Known as "Herath" (derived from Hararatri). Devotees fill clay pots with water and walnuts representing Shiva and Parvati, worship them for three days, and distribute soaked walnuts as sacred prasad.',
        distinctiveNames: ['Herath', 'Vatak Puja'],
        uniqueFoodsOrRituals: 'Dun (soaked walnuts), special dry fruit offerings.'
      },
      {
        region: 'Gujarat (Junagadh & Somnath)',
        customs: 'The world-famous Bhavnath Fair at Junagadh witnesses thousands of Naga Sadhus and ascetics converging at midnight to take a holy dip in the Mrigi Kund on Shivaratri.',
        distinctiveNames: ['Bhavnath Mahadev Mela', 'Somnath Maha Darshan'],
        uniqueFoodsOrRituals: 'Maha Aarti, Bhang prasad, Dudh-Poha.'
      },
      {
        region: 'Tamil Nadu & Karnataka',
        customs: 'Temples like Chidambaram Nataraja, Arunachaleswara at Tiruvannamalai, and Murudeshwar see continuous night-long temple abhishekams and Classical Natyanjali dance festivals.',
        distinctiveNames: ['Natyanjali Festival', 'Maha Sivaratri'],
        uniqueFoodsOrRituals: 'Kalyana Utsavam, Panchamrita Abhishekam.'
      }
    ],
    faqs: [
      { question: 'When is Maha Shivaratri 2026?', answer: 'In 2026, Maha Shivaratri will be observed on Sunday, February 15, 2026. The Nishita Kaal Puja Muhurat is from 12:09 AM to 01:00 AM.' },
      { question: 'What are the Char Prahar timings on Shivaratri?', answer: 'The four night quarters (Prahars) divide the night into evening (6 PM - 9 PM), night (9 PM - 12 AM), midnight (12 AM - 3 AM), and dawn (3 AM - 6 AM), each using specific sanctified fluids for Abhishek.' },
      { question: 'Why is keeping vigil (Jagaran) recommended?', answer: 'The natural cosmic upsurge of energy on this night is optimal for the upward flow of Kundalini through the spine, which is aided by keeping the spine erect and staying alert.' }
    ],
    references: [
      { title: 'Shiva Purana', source: 'Vidyeshvara Samhita', quoteOrChapter: 'Chapter 9: The Appearance of the Great Jyotirlinga' },
      { title: 'Linga Purana', source: 'Purva Bhaga', quoteOrChapter: 'Chapter 85: The Injunctions of Sivaratri Vrata' }
    ]
  },

  {
    id: 'janmashtami',
    canonical_name: 'Krishna Janmashtami (Gokulashtami)',
    hindi_name: 'श्री कृष्ण जन्माष्टमी (महानिशीथ व्यापिनी)',
    gujarati_name: 'શ્રીકૃષ્ણ જન્માષ્ટમી (દ્વારકા મહોત્સવ / મટકી ફોડ)',
    alternate_names: ['Gokulashtami', 'Krishna Jayanti', 'Ashtami Rohini', 'Dahi Handi', 'Saatam-Aatham'],
    regional_names: {
      gu: 'જન્માષ્ટમી (સાતમ-આઠમ / દ્વારકા ઉત્સવ)',
      hi: 'कृष्ण जन्माष्टमी',
      mr: 'गोकुळाष्टमी / दहीहंडी (Dahi Handi)',
      ta: 'கோகுலாஷ்டமி / ஸ்ரீ ஜெயந்தி (Gokulashtami)',
      te: 'శ్రీకృష్ణ జన్మాష్టమి (Krishna Jayanti)',
      ml: 'അഷ്ടമി രോഹിണി (Ashtami Rohini)',
      kn: 'ಕೃಷ್ಣ ಜನ್ಮಾಷ್ಟಮಿ (Krishna Janmashtami)',
      bn: 'জন্মাষ্টমী (Janmashtami)'
    },
    sanskrit_name: 'श्रीकृष्णजन्माष्टमी (गोकुलाष्टमी)',
    transliteration: 'Śrīkṛṣṇajanmāṣṭamī',
    slug: 'janmashtami',
    festival_type: 'jayanti',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Lord Krishna (Bala Gopala)',
    deity_category: 'krishna',
    lunar_month: 'bhadrapada',
    paksha: 'krishna',
    tithi_name: 'Ashtami (अष्टमी)',
    tithi_number: 8,
    base_day_of_year: 247,
    calculation_method: 'Bhadrapada Krishna Ashtami prevailing at midnight, ideally with Rohini Nakshatra overlap',
    short_description: 'The divine descent of Bhagwan Shri Krishna at midnight in the prison cell of Mathura to restore Dharma and bestow supreme Prema Bhakti.',
    full_overview: 'Krishna Janmashtami celebrates the divine birth of the eighth avatar of Bhagwan Vishnu. Born in the pitch darkness of midnight inside Kamsa’s prison while torrential rains flooded the Yamuna, the infant Krishna was carried by Vasudeva to Gokula. Devotees fast until midnight, swing baby Krishna in ornately decorated cradles (Palna), and prepare 56 sacred delicacies (Chhappan Bhog).',
    significance: 'Krishna’s avatar signifies the destruction of tyrannical adharma (Kamsa, Jarasandha, Shishupala) and the revelatory teaching of the Bhagavad Gita on the battlefield of Kurukshetra. It represents the awakening of divine love and joy in the devotee’s heart.',
    history_and_tradition: 'Detailed in the Srimad Bhagavatam (Canto 10), Harivamsa, and Vishnu Purana. Traditions distinguish between Smarta Janmashtami (governed by Ashtami presence at midnight) and Vaishnava/ISKCON Sri Jayanti (governed by Rohini Nakshatra and Udaya Tithi).',
    cultural_traditions: [
      'Gently rocking the silver/wooden cradle (Palna / Jhula) of Laddu Gopala after midnight.',
      'Decorating floors with tiny footsteps of Krishna walking towards the puja altar.',
      'Dahi Handi competitions across Maharashtra and Gujarat, forming human pyramids.',
      'Singing the 108 sacred names of Krishna and reciting the Srimad Bhagavad Gita.',
      'Preparing Makhan-Mishri, Panjiri, and Chhappan Bhog.'
    ],
    regions: ['Pan-India', 'Mathura-Vrindavan', 'Gujarat (Dwarka & Dakor)', 'Maharashtra', 'South India (Udupi & Guruvayur)', 'Global'],
    languages: ['Hindi', 'Gujarati', 'Braj Bhasha', 'Marathi', 'Tamil', 'Kannada'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'krishna-festivals', 'bhadrapada-festivals', 'jayanti-festivals'],
    related_festivals: ['dahi-handi', 'nandotsav', 'radhashtami', 'shravan-saatam', 'gita-jayanti'],
    related_vrat: ['janmashtami-vrat', 'rohini-vrat'],
    related_temple_ids: ['dwarkadhish', 'bankey-bihari', 'shrinathji', 'somnath'],
    seo_title_template: 'Krishna Janmashtami 2026 Date, Nishita Kaal Midnight Puja & Parana',
    seo_description_template: 'Complete Krishna Janmashtami 2026 guide with exact Nishita Kaal Janmotsav Muhurat, Smarta vs Vaishnava dates, Rohini Nakshatra timing, Laddu Gopal Puja Vidhi & Dahi Handi.',
    puja_information: {
      overview: 'Midnight Abhishekam of Laddu Gopal with Shankha using Gangajal, Panchamrit, and pure rose water, followed by adorning new Pitambari vastra, Morpankh crown, and swinging the cradle.',
      samagri: [
        { item: 'Idol of Laddu Gopal / Baby Krishna', quantity: '1 pc', required: true, significance: 'Centerpiece of devotion.' },
        { item: 'Decorated Cradle (Palna / Jhula)', quantity: '1 set', required: true, significance: 'Commemorates the loving parental care in Gokula.' },
        { item: 'Conch Shell (Dakshinavarti Shankha)', quantity: '1 pc', required: true, significance: 'Used for sacred abhishekam bath of Vishnu avatar.' },
        { item: 'Fresh White Butter & Crystal Sugar (Makhan Mishri)', quantity: '1 bowl', required: true, significance: 'Beloved offering of infant Krishna.' },
        { item: 'Panchamrit & Tulsi Leaves', quantity: '1 bowl', required: true, significance: 'Krishna does not accept naivedya without sacred Tulsi.' },
        { item: 'Dhaniya Panjiri & Seed Sweets', quantity: '250g', required: true, significance: 'Traditional digestive fasting prasad.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Purification & Altar Illumination', mantra: 'ॐ नमो भगवते वासुदेवाय।', procedure: 'Light lamps, clean the altar, and draw auspicious butter-footsteps.' },
        { stepNumber: 2, title: 'Midnight Shankha Abhishekam', mantra: 'ॐ क्लीं कृष्णाय नमः। सच्चिदानन्दरूपाय विश्वोत्पत्त्यादिहेतवे। तापत्रयविनाशाय श्रीकृष्णाय वयं नुमः॥', procedure: 'At precisely 12:00 midnight, bathe the deity with panchamrit while ringing bells and blowing the conch.' },
        { stepNumber: 3, title: 'Shringar & Morpankh Mukut Samarpan', mantra: 'बर्हापीडं नटवरवपुः कर्णयोः कर्णिकारं बिभ्रद्वासः कनककपिशं वैजयन्तीं च मालाम्।', procedure: 'Dress in yellow silk garments, place the peacock feather crown, flute, and pearl necklace.' },
        { stepNumber: 4, title: 'Palna Jhulana (Cradle Rocking)', mantra: 'नन्द के आनन्द भयो, जय कन्हैया लाल की। हाथी घोड़ा पालकी, जय कन्हैया लाल की॥', procedure: 'Place the deity gently in the swing and allow each family member to rock the swing.' },
        { stepNumber: 5, title: 'Maha Bhog & Aarti', mantra: 'आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की॥', procedure: 'Offer Makhan-Mishri, Dhaniya Panjiri, Chhappan Bhog, perform aarti, and distribute prasad.' }
      ],
      aartiName: 'Aarti Kunj Bihari Ki',
      prasadDetails: 'Makhan mishri, Dhaniya panjiri, Makhana kheer, fruits, and Charanamrit.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Nishita Kaal Janmotsav Muhurat',
      rulesDescription: 'Because Bhagwan Krishna manifested exactly at midnight, the 45-minute window centered on astronomical midnight is the pinnacle of the celebration.',
      calculationKey: 'nishita',
      traditionalNotice: 'Smarta followers celebrate when Ashtami prevails at midnight. Vaishnava followers observe the festival when Ashtami touches Rohini Nakshatra with sunrise prevalence.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'The fast is broken either after midnight puja when Ashtami concludes, or next morning after sunrise following Rohini Nakshatra parana.',
      allowedFoods: ['Fruits', 'Milk', 'Singhara flour', 'Kuttu ka atta', 'Makhan mishri (prasad)'],
      prohibitedFoods: ['Grains', 'Pulses', 'Spices with common salt', 'Onion and garlic'],
      regionalExceptions: 'In Gujarat, Shravan Vad Saatam (Sheetala Satam) involves eating food cooked the previous day (Thado Kholo), followed by Aatham (Janmashtami fast).'
    },
    regional_variations: [
      {
        region: 'Gujarat (Dwarka & Saurashtra)',
        customs: 'At the holy Dwarkadhish Jagat Mandir, the deity is adorned in royal attire with diamond crowns. Pilgrims from across Saurashtra participate in dynamic Shobha Yatras and Makhan handi festivals.',
        distinctiveNames: ['Dwarka Janmotsav', 'Nandotsav'],
        uniqueFoodsOrRituals: 'Panchajanya Shankha Darshan, Dhaniya Panjiri.'
      },
      {
        region: 'Maharashtra (Mumbai & Pune)',
        customs: 'Celebrated on the following day with world-renowned Dahi Handi contests where Govinda pathaks form towering multi-tiered human pyramids to shatter earthen pots hung high in the air.',
        distinctiveNames: ['Dahi Handi', 'Govinda Utsav'],
        uniqueFoodsOrRituals: 'Kala (beaten rice mixed with curd, cucumber, and pomegranate).'
      },
      {
        region: 'Tamil Nadu & Kerala',
        customs: 'Known as Gokulashtami or Ashtami Rohini. Devotees draw rice paste footsteps of infant Krishna from the front gate to the puja altar and prepare Seedai, Murukku, and Appam.',
        distinctiveNames: ['Gokulashtami', 'Ashtami Rohini'],
        uniqueFoodsOrRituals: 'Uppu Seedai, Vella Seedai, Neyyappam, Aval (poha).'
      }
    ],
    faqs: [
      { question: 'When is Krishna Janmashtami 2026?', answer: 'In 2026, Krishna Janmashtami will be celebrated on Thursday, September 3, 2026 (Smarta) and Friday, September 4, 2026 (Vaishnava / ISKCON) across Indian cities.' },
      { question: 'Why are there two different dates for Janmashtami?', answer: 'Smarta tradition emphasizes Ashtami Tithi presence at astronomical midnight. Vaishnava tradition emphasizes Rohini Nakshatra association and the Udaya Tithi rule.' },
      { question: 'What is Dhaniya Panjiri and why is it eaten?', answer: 'Dhaniya Panjiri is prepared by roasting coriander seed powder in cow ghee with powdered sugar and dry fruits. Coriander is medicinal and easily digestible after an intense fast.' }
    ],
    references: [
      { title: 'Srimad Bhagavatam', source: 'Canto 10, Chapter 3', quoteOrChapter: 'The Birth of Lord Krishna in the Prison of Kamsa' },
      { title: 'Harivamsa Purana', source: 'Vishnu Parva', quoteOrChapter: 'Gokula Leela and Vasudeva’s crossing of the Yamuna' }
    ]
  },

  {
    id: 'ganesh-chaturthi',
    canonical_name: 'Ganesh Chaturthi (Vinayaka Chavithi)',
    hindi_name: 'गणेश चतुर्थी (विनायक स्थापना व महापूजा)',
    gujarati_name: 'ગણેશ ચતુર્થી (ગણેશ સ્થાપના અને વિસર્જન)',
    alternate_names: ['Vinayaka Chaturthi', 'Vinayagar Chaturthi', 'Ganeshotsav', 'Anant Chaturdashi Visarjan'],
    regional_names: {
      mr: 'गणेशोत्सव (गणपती बाप्पा मोरया)',
      gu: 'ગણેશ ચતુર્થી (સ્થાપના)',
      hi: 'गणेश चतुर्थी',
      te: 'వినాయక చవితి (Vinayaka Chavithi)',
      ta: 'விநாயகர் சதுர்த்தி (Vinayagar Chaturthi)',
      kn: 'ಗಣೇಶ ಚತುರ್ಥಿ (Ganesha Chaturthi)'
    },
    sanskrit_name: 'श्रीगणेशचतुर्थी',
    transliteration: 'Śrīgaṇeśacaturthī',
    slug: 'ganesh-chaturthi',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Ganesha (Vighnaharta)',
    deity_category: 'ganesha',
    lunar_month: 'bhadrapada',
    paksha: 'shukla',
    tithi_name: 'Chaturthi (चतुर्थी)',
    tithi_number: 4,
    base_day_of_year: 258,
    calculation_method: 'Bhadrapada Shukla Chaturthi prevailing during Madhyahna Kaal (midday)',
    short_description: 'The spectacular 10-day celebration inaugurating the arrival of Vighnaharta Ganesha from Kailash Parvat with modaks, durva grass, and grand community pandals.',
    full_overview: 'Ganesh Chaturthi marks the manifestation of Lord Ganesha, the elephant-headed deity of intellect, wisdom, and auspicious beginnings. Celebrated with immense grandeur over 10 days culminating on Anant Chaturdashi, clay idols (murtis) are installed in homes and grand public pandals. Devotees offer 21 Durva blades, red hibiscus flowers, and steamed Modaks, chanting "Ganpati Bappa Morya, Pudhchya Varshi Laukariya!"',
    significance: 'Ganesha was created by Mata Parvati from her sacred unguents and infused with Prana. Lord Shiva later bestowed the head of Gajasura upon Him and ordained that Ganesha must be worshipped before invoking any other deity in the universe (Prathama Pujya).',
    history_and_tradition: 'Celebrated since the Satavahana, Rashtrakuta, and Maratha dynasties under Chhatrapati Shivaji Maharaj. In 1893, freedom fighter Lokmanya Bal Gangadhar Tilak transformed the private home worship into a massive public community festival (Sarvajanik Ganeshotsav) to unite Indian society.',
    cultural_traditions: [
      'Murti Sthapana with Pranapratishta rituals during Madhyahna Muhurat.',
      'Offering 21 Modaks and 21 blades of fresh Durva (Bermuda grass).',
      'Avoiding gazing at the Moon on Chaturthi evening to avert the Mithya Kalank (false accusation) curse.',
      'Daily morning and evening Aarti with rhythmic Dhol-Tasha beats.',
      'Visarjan (immersion) processions on 1.5, 3, 5, 7, and 11th days (Anant Chaturdashi).'
    ],
    regions: ['Pan-India', 'Maharashtra', 'Gujarat', 'Goa', 'Telangana & Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Global'],
    languages: ['Marathi', 'Hindi', 'Gujarati', 'Telugu', 'Tamil', 'Kannada'],
    hero_image_theme: 'orange',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'ganesha-festivals', 'bhadrapada-festivals'],
    related_festivals: ['anant-chaturdashi', 'rishi-panchami', 'gauri-puja', 'sankashti-chaturthi'],
    related_vrat: ['sankashti-vrat', 'vinayaka-chaturthi-vrat'],
    related_temple_ids: ['siddhivinayak', 'somnath', 'mahalakshmi-mumbai'],
    seo_title_template: 'Ganesh Chaturthi 2026 Date, Sthapana Madhyahna Muhurat & Visarjan',
    seo_description_template: 'Complete Ganesh Chaturthi 2026 guide with exact Madhyahna Murti Sthapana Muhurat, Moon avoidance timing, 21 Durva Puja Vidhi, Modak recipe & Visarjan dates.',
    puja_information: {
      overview: 'Conducted during Madhyahna Kaal with Shodashopachara rituals including Avahana, Pranapratishta, Asana, Padya, Arghya, Snana, Vastra, Yajnopavita, Gandha, Pushpa, Durva, Dhoopa, Deepa, Naivedya, and Aarti.',
      samagri: [
        { item: 'Clay Idol of Lord Ganesha (Shadu Mati Murti)', quantity: '1 pc', required: true, significance: 'Eco-friendly clay dissolves back into mother earth harmoniously.' },
        { item: 'Durva Grass Blades', quantity: '21 blades tied in pairs', required: true, significance: 'Cools Ganesha’s internal fire after swallowing the demon Analasura.' },
        { item: 'Fresh Steamed Modaks (Ukadiche Modak)', quantity: '21 pcs', required: true, significance: 'Ganesha’s most cherished sweet offering representing wisdom.' },
        { item: 'Red Hibiscus (Jaswand) Flowers', quantity: '11 flowers', required: true, significance: 'Red is the sacred chromatic frequency of the Muladhara Chakra.' },
        { item: 'Sindoor (Vermilion)', quantity: '50g', required: true, significance: 'Signifies auspiciousness and warrior valor.' },
        { item: 'Betel Leaves & Areca Nuts (Paan-Supari)', quantity: '5 pairs', required: true, significance: 'Token of auspicious hospitality.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Deepa Prajvalan & Shankha Naad', mantra: 'ॐ गं गणपतये नमः।', procedure: 'Light brass oil lamps on both sides of the altar and blow the conch shell.' },
        { stepNumber: 2, title: 'Prana Pratishtha (Infusion of Life)', mantra: 'अस्य प्राणाः प्रतिष्ठन्तु अस्य प्राणाः क्षरन्तु च। अस्यै देवत्वमर्चायै मामहेति च कश्चन॥', procedure: 'Touch the heart and forehead of the idol with a blade of durva to invite the cosmic presence.' },
        { stepNumber: 3, title: 'Durva & Hibiscus Offering with 21 Names', mantra: 'ॐ सुमुखाय नमः। ॐ एकदन्ताय नमः। ॐ कपिलाय नमः। ॐ गजकर्णकाय नमः। ॐ लम्बोदराय नमः...', procedure: 'Offer a pair of durva blades and a red flower with each of the 21 sacred names of Ganesha.' },
        { stepNumber: 4, title: 'Naivedya Samarpan (Modak Offering)', mantra: 'मोदकप्रियाय नमः। सद्योजातं प्रपद्यामि सद्योजाताय वै नमः॥', procedure: 'Serve 21 fresh modaks, banana, and coconut; encircle water around the plate three times.' },
        { stepNumber: 5, title: 'Maha Aarti & Atharvashirsha Path', mantra: 'सुखकर्ता दुखहर्ता वार्ता विघ्नाची। नुरवी पुरवी प्रेम कृपा जयाची॥', procedure: 'Sing traditional Marathi or Sanskrit aartis and recite the Ganapati Atharvashirsha Upanishad.' }
      ],
      aartiName: 'Sukhkarta Dukhharta & Jai Ganesh Deva',
      prasadDetails: 'Ukadiche modak, churma laddu, coconut, banana, and panchamrit.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Madhyahna Ganesha Sthapana & Puja Muhurat',
      rulesDescription: 'Shastras state Lord Ganesha was born at Madhyahna Kaal (around solar midday). Therefore, murti installation must strictly be performed in this midday slot.',
      calculationKey: 'madhyahna',
      traditionalNotice: 'Do not view the Moon between evening twilight and moonset on Bhadrapada Chaturdashi to avoid the Mithya Dosha curse.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Upavas',
      paranaRules: 'Many devotees observe a fast till the midday puja concludes, breaking it with Modak prasad and fruits.',
      allowedFoods: ['Fruits', 'Milk', 'Modak made without grains', 'Sabudana', 'Singhara'],
      prohibitedFoods: ['Salted grain meals during puja hours', 'Non-vegetarian food', 'Tamasic vegetables'],
      regionalExceptions: 'In Karnataka, Gauri Habba is celebrated one day before Ganesh Chaturthi by married women fasting for marital happiness.'
    },
    regional_variations: [
      {
        region: 'Maharashtra',
        customs: 'The heartland of Ganeshotsav. Thousands of historic mandals like Lalbaugcha Raja, Dagdusheth Halwai, and Khetwadi attract millions. Community life revolves around aartis and social causes.',
        distinctiveNames: ['Sarvajanik Ganeshotsav', 'Lalbaugcha Raja Darshan'],
        uniqueFoodsOrRituals: 'Ukadiche Modak (steamed rice flour dumplings stuffed with jaggery and fresh coconut).'
      },
      {
        region: 'Telangana & Andhra Pradesh',
        customs: 'Known as Vinayaka Chavithi. Enormous eco-friendly idols like the Khairatabad Ganesha (often over 50 feet) are erected. Grand prasadam like Pala Munjalu and Kudumulu are distributed.',
        distinctiveNames: ['Vinayaka Chavithi', 'Khairatabad Ganesha'],
        uniqueFoodsOrRituals: 'Kudumulu, Undrallu (steamed rice rava balls), Bellam Thalikalu.'
      },
      {
        region: 'Gujarat',
        customs: 'Observed with tremendous vigor in Surat, Ahmedabad, and Vadodara. Pandals are erected on every block with energetic garba performances in the evenings.',
        distinctiveNames: ['Ganesh Utsav Gujarat'],
        uniqueFoodsOrRituals: 'Churma Ladu, Motichoor Laddu, and Peda.'
      }
    ],
    faqs: [
      { question: 'When is Ganesh Chaturthi 2026?', answer: 'In 2026, Ganesh Chaturthi falls on Monday, September 14, 2026, with the Madhyahna Ganesha Puja Muhurat from 11:08 AM to 01:34 PM.' },
      { question: 'Why shouldn’t we look at the Moon on Ganesh Chaturthi?', answer: 'According to the Ganesha Purana, the Moon mocked Ganesha’s physique when He stumbled. Ganesha cursed the Moon that anyone looking at it on this tithi would incur false accusations (Mithya Kalank), as even Bhagwan Krishna faced in the Syamantaka jewel episode.' },
      { question: 'What is the remedy if one accidentally sees the Moon?', answer: 'One should chant the sacred Syamantaka Mani Mantra: "सिंहः प्रसेनमवधीत्सिंहो जाम्बवता हतः। सुकुमारक मा रोदीस्तव ह्येष स्यमन्तकः॥"' }
    ],
    references: [
      { title: 'Ganesha Purana', source: 'Upasana Khanda', quoteOrChapter: 'Chapter 13: The Descent of Ganesha on Bhadrapada Chaturthi' },
      { title: 'Ganapati Atharvashirsha', source: 'Atharva Veda', quoteOrChapter: 'Upanishadic Invocation of the Primordial Vighneshwara' }
    ]
  },

  {
    id: 'navratri-shardiya',
    canonical_name: 'Shardiya Navratri (Nine Divine Nights)',
    hindi_name: 'शारदीय नवरात्रि (घटस्थापना व नवदुर्गा महोत्सव)',
    gujarati_name: 'શારદીય નવરાત્રી (ગરબા મહોત્સવ / અંબાજી પાવાગઢ આરાધના)',
    alternate_names: ['Maha Navratri', 'Sharad Navratri', 'Garba Utsav', 'Durga Navratri', 'Ashwin Navratri'],
    regional_names: {
      gu: 'નવરાત્રી (ગરબા ઉત્સવ - દાંડિયા રાસ)',
      hi: 'शारदीय नवरात्रि',
      bn: 'শারদীয়া নবরাত্রি / দুর্গোৎসব',
      mr: 'नवरात्रोत्सव',
      ta: 'சாரதா நவராத்திரி / கொலு (Golu)',
      te: 'శరన్నవరాత్రులు (Sharad Navaratri)',
      kn: 'ನವರಾತ್ರಿ ಹಬ್ಬ (Navaratri Habba)'
    },
    sanskrit_name: 'शारदीयनवरात्रम्',
    transliteration: 'Śāradīyanavarātram',
    slug: 'navratri-shardiya',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'shakta',
    deity: 'Mata Durga (Navadurga - 9 Forms)',
    deity_category: 'devi',
    lunar_month: 'ashwin',
    paksha: 'shukla',
    tithi_name: 'Pratipada to Navami (प्रतिपदा से नवमी)',
    tithi_number: 1,
    base_day_of_year: 285,
    calculation_method: 'Ashwin Shukla Pratipada Ghatasthapana during Abhijit Muhurat or Pratipada Dwi-Svabhava Lagna',
    short_description: 'The supreme 9-day festival worshipping the nine transcendent forms of Goddess Durga (Navadurga) with Ghatasthapana, Akhand Jyoti, fasts, and devotional Garba Raas.',
    full_overview: 'Shardiya Navratri, celebrated in autumn, represents the triumph of divine feminine energy (Adi Parashakti) over Mahishasura. Over nine nights, devotees venerate the nine distinct manifestations: Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. In Gujarat, it is celebrated with world-famous night-long Garba dance encircling the sanctified Garbha Deep.',
    significance: 'Describes the cosmic battle in the Devi Mahatmyam (Durga Saptashati) wherein Mahishasura was vanquished after a furious nine-day battle, culminating on Vijayadashami. In the Ramayana, Bhagwan Rama performed the Chandi Yajna and invoked Durga before marching to Lanka to slay Ravana.',
    history_and_tradition: 'Grounded in the Markandeya Purana, Devi Bhagavata Purana, and Kalika Purana. Worship includes sowing seven holy grains (Jaware), lighting the uninterrupted flame (Akhand Deep), and honoring young girls (Kanya Pujan) as personifications of the Mother Goddess.',
    cultural_traditions: [
      'Ghatasthapana (Kalash installation) with holy soil and barley seeds.',
      'Night-long traditional Garba and Dandiya Raas in Gujarat and across the globe.',
      'Recitation of the 13 chapters of Durga Saptashati (Chandi Path).',
      'Bommai Golu doll exhibitions in Tamil Nadu and Karnataka.',
      'Kanya Pujan (worshipping 9 pre-pubescent girls) on Maha Ashtami and Navami.'
    ],
    regions: ['Pan-India', 'Gujarat', 'West Bengal', 'Uttar Pradesh', 'Maharashtra', 'Himachal Pradesh', 'Global'],
    languages: ['Sanskrit', 'Gujarati', 'Hindi', 'Bengali', 'Tamil', 'Marathi'],
    hero_image_theme: 'rose',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'devi-festivals', 'ashwin-festivals', 'navratri-cluster'],
    related_festivals: ['chaitra-navratri', 'durga-puja', 'maha-ashtami', 'maha-navami', 'vijayadashami'],
    related_vrat: ['navratri-upavas', 'durga-ashtami-vrat'],
    related_temple_ids: ['vaishno-devi', 'kamakhya', 'ambaji', 'somnath'],
    seo_title_template: 'Shardiya Navratri 2026 Dates, Ghatasthapana Muhurat, 9 Days Color & Vidhi',
    seo_description_template: 'Complete Shardiya Navratri 2026 guide with exact Ghatasthapana Abhijit Muhurat, 9 Navdurga forms, daily color guide, Durga Saptashati path vidhi, Garba & Kanya Pujan.',
    puja_information: {
      overview: 'Begins with Ghatasthapana (consecration of a clay pot filled with sacred earth, sowing barley seeds, and placing a coconut) along with lighting an Akhand Diya that remains lit for nine continuous days.',
      samagri: [
        { item: 'Clay Pot for Ghatasthapana (Kalash)', quantity: '1 pc', required: true, significance: 'Represents the embryonic cosmos filled with divine waters.' },
        { item: 'Clean Earth & Barley Seeds (Jau)', quantity: '250g', required: true, significance: 'Sprouting green shoots represent abundance, fertility, and cosmic growth.' },
        { item: 'Unpeeled Raw Coconut with Husk (Shriphal)', quantity: '1 pc', required: true, significance: 'Crown of the Kalash wrapped in red chunri.' },
        { item: 'Red Cloth & Mata Ki Chunri', quantity: '2 pcs', required: true, significance: 'Traditional shringar offering to Durga.' },
        { item: 'Akhand Jyoti Brass/Clay Lamp & Pure Ghee', quantity: '1 liter ghee', required: true, significance: 'Unbroken flame symbolizes perpetual divine vigilance.' },
        { item: 'Shringaar Samagri (Bindi, Bangles, Mehendi, Kajal)', quantity: '1 basket', required: true, significance: 'Suhag and shakti offerings to the Divine Mother.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Ghatasthapana & Jowar Sowing', mantra: 'ॐ भूर्भुवः स्वः कुलदेवतायै नमः। कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः॥', procedure: 'Sow barley in clay dish, place the water-filled Kalash in center with mango leaves, coin, supari, and coconut.' },
        { stepNumber: 2, title: 'Akhand Deep Prajvalan', mantra: 'ॐ दीपज्योतिः परब्रह्म दीपज्योतिर्जनार्दनः। दीपो हरतु मे पापं दीपज्योतिर्नमोऽस्तु ते॥', procedure: 'Light the pure cow ghee lamp with solemn resolution to keep it burning continuously for 9 days.' },
        { stepNumber: 3, title: 'Devi Avahana & Shodashopachara', mantra: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥', procedure: 'Offer padya, vastra, chandan, kumkum, akshat, pushpa garland, and dhoop to the Goddess.' },
        { stepNumber: 4, title: 'Durga Saptashati Path / Kavach / Argala', mantra: 'ॐ जयंती मंगला काली भद्रकाली कपालिनी। दुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तु ते॥', procedure: 'Chant the Devi Kavach, Argala Stotram, Kilaka, and selected chapters of the Durga Saptashati.' },
        { stepNumber: 5, title: 'Kanya Pujan (Ashtami / Navami)', mantra: 'ॐ कुमार्यै नमः। ॐ त्रिमूर्त्यै नमः। ॐ कल्याण्यै नमः...', procedure: 'Wash the feet of nine young girls, apply tilak, feed halwa-puri-chana, and offer gifts and seek their blessings.' }
      ],
      aartiName: 'Ambe Tu Hai Jagdambe Kali & Jai Ambe Gauri',
      prasadDetails: 'Kheer, halwa, puri, soaked black gram (kale chane), seasonal fruits, and dry fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Ghatasthapana Pratipada & Abhijit Muhurat',
      rulesDescription: 'Ghatasthapana must be performed on Pratipada during the first one-third of daytime (Chitra Nakshatra and Vaidhriti Yoga should be avoided if possible; Abhijit Muhurat is most auspicious).',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Ghatasthapana is strictly prohibited during nighttime or after midday.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Devotees fast for either all 9 days or on pairs (1st & 8th days), consuming only phalahari foods, breaking the fast on Dashami morning.',
      allowedFoods: ['Kuttu (Buckwheat) flour', 'Singhara flour', 'Samak rice', 'Sabudana', 'Potatoes', 'Milk', 'Fruits', 'Sendha Namak'],
      prohibitedFoods: ['Wheat, Rice, Lentils', 'Table salt', 'Onion and Garlic', 'Mustard seeds', 'Asafoetida (Hing)'],
      regionalExceptions: 'In Gujarat, many devotees observe Nakta-vrata (eating one fruit-based meal a day after performing evening Garba).'
    },
    regional_variations: [
      {
        region: 'Gujarat',
        customs: 'The world’s longest dance festival. Every village, town, and stadium features thousands of dancers in traditional Chaniya Choli and Kediya, dancing circular steps around a perforated clay pot containing a lamp (Garbha Deep).',
        distinctiveNames: ['Garba Mahotsav', 'Dandiya Raas'],
        uniqueFoodsOrRituals: 'Garbha Deep worship, Fafda-Jalebi on Dussehra, Dudh-Poha on Sharad Purnima.'
      },
      {
        region: 'South India (Tamil Nadu, Karnataka, Andhra)',
        customs: 'Celebrated as Navaratri Golu / Kolu. Families arrange tiered steps displaying traditional clay figurines of gods, saints, and temple processions. Friends and relatives visit to exchange betel leaves, coconuts, and sundal.',
        distinctiveNames: ['Bommai Golu', 'Kolu'],
        uniqueFoodsOrRituals: 'Sundal (seasoned legume stir-fries), Mysore Pak, Payasam.'
      },
      {
        region: 'Himachal Pradesh (Kullu)',
        customs: 'Kullu Dussehra commences on the 10th day when other celebrations conclude, gathering over 200 local deities in palanquins at Dhalpur Maidan in dedication to Bhagwan Raghunath.',
        distinctiveNames: ['Kullu Dussehra'],
        uniqueFoodsOrRituals: 'Raghunath Yatra, local Pahari natti dances.'
      }
    ],
    faqs: [
      { question: 'When is Shardiya Navratri 2026?', answer: 'In 2026, Shardiya Navratri begins on Sunday, October 11, 2026, with Ghatasthapana, and concludes with Maha Navami on Monday, October 19, 2026, followed by Vijayadashami on October 20, 2026.' },
      { question: 'What is the significance of the Garba dance in Gujarat?', answer: 'The word "Garba" comes from "Garbha" (womb). The dancers move in concentric circles around a perforated clay lamp (Garbha Deep), symbolizing that human life moves in cycles around the central, unchanging divine light of the Divine Mother.' },
      { question: 'What are the nine colors of Navratri?', answer: 'Each day of Navratri is associated with a distinct planetary color, widely worn by devotees: Yellow, Green, Grey, Orange, White, Red, Royal Blue, Pink, and Purple.' }
    ],
    references: [
      { title: 'Markandeya Purana', source: 'Devi Mahatmyam', quoteOrChapter: 'Chapters 1-13 (Durga Saptashati)' },
      { title: 'Devi Bhagavata Purana', source: 'Skandha 3', quoteOrChapter: 'Discourse on the Navaratra Vrata Rules' }
    ]
  },

  {
    id: 'durga-puja',
    canonical_name: 'Durga Puja (Durgotsava & Sharadotsav)',
    hindi_name: 'दुर्गा पूजा (महाषष्ठी, महाअष्टमी, सन्धि पूजा व विसर्जन)',
    gujarati_name: 'દુર્ગા પૂજા મહોત્સવ (સંધિ પૂજા)',
    alternate_names: ['Durgotsava', 'Sharadotsava', 'Maha Saptami', 'Maha Ashtami', 'Sandhi Puja', 'Maha Navami', 'Bijoya Dashami'],
    regional_names: {
      bn: 'দুর্গাপূজা (শারদোৎসব)',
      or: 'ଦୁର୍ଗା ପୂଜା (Durgotsav)',
      as: 'দুৰ্গা পূজা',
      hi: 'दुर्गा पूजा',
      gu: 'દુર્ગા પૂજા'
    },
    sanskrit_name: 'श्रीमहादुर्गापूजनम्',
    transliteration: 'Durgāpūjā',
    slug: 'durga-puja',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'shakta',
    deity: 'Maa Durga (Mahishasuramardini) with Lakshmi, Saraswati, Ganesha & Kartikeya',
    deity_category: 'devi',
    lunar_month: 'ashwin',
    paksha: 'shukla',
    tithi_name: 'Shashthi to Dashami (षष्ठी से दशमी)',
    tithi_number: 6,
    base_day_of_year: 289,
    calculation_method: 'Ashwin Shukla Shashthi (Bodhan) through Dashami, with Sandhi Puja at the exact juncture of Ashtami and Navami',
    short_description: 'The UNESCO Intangible Cultural Heritage celebration of Bengal and Eastern India welcoming Mother Durga with grand art installations, Dhak drums, Sandhi Puja, and Sindoor Khela.',
    full_overview: 'Durga Puja, celebrated across Bengal, Assam, Odisha, and Tripura, is an unmatched cultural and devotional celebration. Maa Durga descends to her maternal home on Earth accompanied by her four children: Lakshmi (wealth), Saraswati (knowledge), Ganesha (auspiciousness), and Kartikeya (strength). Over five days—Shashthi, Saptami, Ashtami, Navami, and Dashami—colossal architectural pandals display majestic clay idols.',
    significance: 'Celebrates the extermination of the buffalo demon Mahishasura. The pinnacle of the puja is Sandhi Puja, performed during the exact 48-minute intersection between the end of Ashtami and the start of Navami, when Devi manifested as Chamunda to slay demons Chanda and Munda.',
    history_and_tradition: 'Mentioned in the Kalika Purana and Krittivasi Ramayana, where Bhagwan Rama performed Akalbodhan (untimely invocation) in autumn before battling Ravana, offering 108 blue lotuses.',
    cultural_traditions: [
      'Akalbodhan and Bilva Nimantran under a wood-apple tree on Shashthi.',
      'Kola Bou (banana plant bride / Nabapatrika) sacred holy bath at dawn on Saptami.',
      'Resonant beats of Dhak drums and mesmerizing Dhunuchi Naach dances with burning coconut husks and camphor.',
      'Offering 108 red lotuses and lighting 108 clay lamps during Sandhi Puja.',
      'Sindoor Khela (married women applying vermilion to each other) and tearful Visarjan on Bijoya Dashami.'
    ],
    regions: ['West Bengal (Kolkata)', 'Assam', 'Odisha', 'Tripura', 'Jharkhand', 'Delhi (CR Park)', 'Global Diaspora'],
    languages: ['Bengali', 'Sanskrit', 'Assamese', 'Odia', 'Hindi'],
    hero_image_theme: 'rose',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'devi-festivals', 'ashwin-festivals', 'navratri-cluster'],
    related_festivals: ['navratri-shardiya', 'mahalaya', 'sandhi-puja', 'bijoya-dashami', 'kali-puja'],
    related_vrat: ['durga-ashtami-vrat', 'sandhi-puja-upavas'],
    related_temple_ids: ['kamakhya', 'kalighat', 'dakshineswar'],
    seo_title_template: 'Durga Puja 2026 Schedule, Sandhi Puja Muhurat, Pandal Dates & Rituals',
    seo_description_template: 'Complete Durga Puja 2026 timetable from Mahalaya, Shashthi Bodhan, Maha Saptami, Maha Ashtami Sandhi Puja, Nabami Bhog to Bijoya Dashami & Sindoor Khela.',
    puja_information: {
      overview: 'Each of the five days has designated Vedic-Tantric rituals: Shashthi (Bodhan, Adhivas, Amantran), Saptami (Nabapatrika Snan, Prana Pratishtha), Ashtami (Mahasnan, Sandhi Puja with 108 lotuses), Navami (Homa, Balidan symbolic offering), Dashami (Darpan Visarjan, Sindoor Khela).',
      samagri: [
        { item: 'Nabapatrika (Nine Sacred Plants bundled together)', quantity: '1 set', required: true, significance: 'Represents the nine manifestations of nature/Mother Earth.' },
        { item: 'Red Lotuses (Padma)', quantity: '108 flowers', required: true, significance: 'Recalls Lord Rama’s offering to appease Durga during Akalbodhan.' },
        { item: 'Clay Lamps for Sandhi Puja', quantity: '108 diyas', required: true, significance: 'Illuminates the sacred transition from Ashtami into Navami.' },
        { item: 'Dhunuchi (Clay Censer) & Coconut Husk, Dhuna (Resin)', quantity: '2 sets', required: true, significance: 'Produces sacred fragrant smoke for Aarti and ritual dance.' },
        { item: 'Mirror (Darpan) for Pratibimba Snan', quantity: '1 brass mirror', required: true, significance: 'Used to bathe the reflection of the deity without damaging clay idols.' },
        { item: 'Sindoor (Vermilion)', quantity: '250g', required: true, significance: 'Crucial for Bijoya Dashami Sindoor Khela.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Mahalaya & Tarpan (Pre-Festival Prelude)', mantra: 'ॐ आगच्छन्तु मे पितरः इमं गृह्णन्तु जलाञ्जलिम्।', procedure: 'Performed on Mahalaya Amavasya offering homage to ancestors and inviting Maa Durga down to Earth.' },
        { stepNumber: 2, title: 'Akalbodhan & Shashthi Adhivas', mantra: 'ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे।', procedure: 'Awakening of the Goddess under a Bilva tree on Shashthi evening.' },
        { stepNumber: 3, title: 'Nabapatrika Snan & Saptami Puja', mantra: 'ॐ नवपत्रिकावासिन्यै दुर्गायै नमः।', procedure: 'Kola Bou is carried to the river at sunrise for a ritual bath, draped in a yellow/red saree, and placed beside Ganesha.' },
        { stepNumber: 4, title: 'Sandhi Puja (The 48-Minute Cosmic Vertex)', mantra: 'ॐ चण्डिके चण्डरूपेण चण्डमुण्डविनाशिनि। नमस्ते वरदे देवि शरण्ये वरवर्धिनि॥', procedure: 'Conducted during the final 24 minutes of Ashtami and first 24 minutes of Navami with 108 lotuses and 108 lamps.' },
        { stepNumber: 5, title: 'Maha Navami Homa & Kumari Puja', mantra: 'या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥', procedure: 'Sacred fire oblation and worshipping pre-pubescent girls as living forms of the Goddess.' },
        { stepNumber: 6, title: 'Darpan Visarjan & Sindoor Khela on Dashami', mantra: 'गच्छ गच्छ परं स्थानं स्वस्थानं परमेश्वरि। यत्पूजितं मया देवि परिपूर्णं तदस्तु मे॥', procedure: 'Immersing the reflection in water, playing with sindoor, and bidding affectionate farewell.' }
      ],
      aartiName: 'Dhunuchi Naach Aarti with Dhak',
      prasadDetails: 'Khichuri bhog, Labra, Charchari, Payesh (kheer), Sandesh, and Mishti Doi.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Sandhi Puja Muhurat (Ashtami-Navami Juncture)',
      rulesDescription: 'Sandhi Puja must take place across the precise 48 minutes when Ashtami Tithi ends and Navami Tithi begins, requiring minute-accurate astronomical calculation.',
      calculationKey: 'sandhi',
      traditionalNotice: 'If Ashtami ends past midnight, Sandhi Puja timing is adjusted strictly to the astronomical moment of tithi transition.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Upavas',
      paranaRules: 'Devotees fast on Maha Ashtami until the completion of Sandhi Puja and Anjali, breaking their fast with fruits and sweets.',
      allowedFoods: ['Fruits', 'Sweets', 'Luchi made with pure ghee', 'Vegetarian bhog'],
      prohibitedFoods: ['Non-vegetarian food on Ashtami day', 'Cooked rice during fasting period'],
      regionalExceptions: 'On Dashami evening, Bengalis celebrate Bijoya by touching feet of elders, exchanging sweets (Sandesh), and greeting with "Shubho Bijoya".'
    },
    regional_variations: [
      {
        region: 'Kolkata & West Bengal',
        customs: 'Celebrated on a stupendous urban scale with thousands of thematic art pandals, corporate and community awards, and millions of pedestrians strolling day and night (Pandal Hopping).',
        distinctiveNames: ['Sharodotsab', 'Kolkata Durga Puja'],
        uniqueFoodsOrRituals: 'Bhog Khichuri, Dhunuchi Naach, Pushpanjali in pristine new Dhoti and Jamdani saree.'
      },
      {
        region: 'Assam & Tripura',
        customs: 'Observed with traditional Vedic rituals at historic Shakti Peethas like Kamakhya Temple in Guwahati with classical Bihu-infused recitations and devotion.',
        distinctiveNames: ['Assam Durgotsav'],
        uniqueFoodsOrRituals: 'Pitha, Payas, and temple Prasad.'
      }
    ],
    faqs: [
      { question: 'When is Durga Puja 2026?', answer: 'In 2026, Durga Puja celebrations begin with Maha Shashthi on Thursday, October 15, 2026, followed by Maha Saptami on Oct 16, Maha Ashtami on Oct 17, Maha Navami on Oct 18, and Bijoya Dashami on Monday, October 19, 2026.' },
      { question: 'What is Sandhi Puja and why is it so important?', answer: 'Sandhi Puja takes place at the exact 48-minute intersection between Ashtami and Navami. This was the moment Chamunda manifested from Durga’s forehead to slay demons Chanda and Munda.' },
      { question: 'What is the significance of Kola Bou (Nabapatrika)?', answer: 'Kola Bou is not Ganesha’s wife; it is the personification of Mother Nature through nine sacred plants (banana, turmeric, bel, pomegranate, ashoka, mana, rice, jayanti, and colacasia).' }
    ],
    references: [
      { title: 'Kalika Purana', source: 'Durgotsava Nirnaya', quoteOrChapter: 'Detailed Rituals of Bodhan and Sandhi Puja' },
      { title: 'Brihad Dharma Purana', source: 'Uttara Khanda', quoteOrChapter: 'Akalbodhan of Rama in the Golden Age' }
    ]
  },

  {
    id: 'makar-sankranti',
    canonical_name: 'Makar Sankranti (Uttarayan, Pongal & Magh Bihu)',
    hindi_name: 'मकर संक्रांति (उत्तरायण, पोंगल व खिचड़ी पर्व)',
    gujarati_name: 'ઉત્તરાયણ (મકર સંક્રાંતિ - પતંગ મહોત્સવ)',
    alternate_names: ['Uttarayan', 'Thai Pongal', 'Magh Bihu', 'Khichdi', 'Lohri', 'Makara Vilakku', 'Pousha Sankranti'],
    regional_names: {
      gu: 'ઉત્તરાયણ (પતંગોત્સવ / ખીચડો)',
      ta: 'தை பொங்கல் (Thai Pongal)',
      hi: 'मकर संक्रांति / खिचड़ी',
      te: 'మకర సంక్రాంతి (Pedda Panduga)',
      kn: 'ಮಕರ ಸಂಕ್ರಾಂತಿ (Makara Sankramana)',
      ml: 'മകരവിളക്ക് (Makaravilakku)',
      as: 'মাঘ বিহু (Magh Bihu)',
      mr: 'मकर संक्रांत (तिळगूळ घ्या)'
    },
    sanskrit_name: 'मकरसंक्रान्तिः',
    transliteration: 'Makara Saṅkrāntiḥ',
    slug: 'makar-sankranti',
    festival_type: 'sankranti',
    religion: 'hindu',
    sect: 'all',
    deity: 'Surya Narayana (The Sun God)',
    deity_category: 'surya',
    lunar_month: 'solar',
    paksha: 'solar',
    tithi_name: 'Solar Transition into Capricorn (मकर राशि प्रवेश)',
    tithi_number: 1,
    base_day_of_year: 14,
    solar_rule: 'Moment the Sun enters Makara Rashi (Capricorn) according to Nirayana Zodiac',
    calculation_method: 'Exact Nirayana astronomical moment of the Sun transiting into Makara Rashi',
    short_description: 'The celestial harvest festival marking Surya Deva’s northward journey (Uttarayan) into Makara Rashi, celebrated with sesame-jaggery, flying kites, and holy snan.',
    full_overview: 'Makar Sankranti is one of the few Hindu festivals calculated by the solar calendar rather than lunar phases. It marks the moment the Sun enters the zodiac sign of Capricorn (Makara), heralding the beginning of warmer days, longer daylight, and the sacred 6-month Uttarayan period (the daytime of the Gods). In Gujarat, the entire sky is filled with colorful kites (Patang Utsav); in Tamil Nadu, it is celebrated as the grand 4-day Pongal; and in Assam as Magh Bihu.',
    significance: 'Regarded as a highly auspicious day for charity (Daan), holy river bathing (Tirtha Snan at Prayagraj Triveni Sangam, Gangasagar, and Haridwar), and offering gratitude for the winter harvest. In the Mahabharata, Bhishma Pitamaha chose to depart his mortal frame on Uttarayan.',
    history_and_tradition: 'Mentioned in the Surya Siddhanta and Matsya Purana. The solar transition creates a sacred window of "Punya Kaal" and "Maha Punya Kaal" where any philanthropic donation multiply spiritual merit exponentially.',
    cultural_traditions: [
      'Taking holy dips in holy rivers (Ganga Snan) at dawn.',
      'Flying paper kites on rooftops from dawn to midnight with shouts of "Kai Po Che!".',
      'Distributing Tilgul (sesame and jaggery) with the greeting "Tilgul ghya, god god bola" in Maharashtra.',
      'Cooking sweet Pongal in clay pots until it boils over, symbolizing prosperity.',
      'Lighting bonfire Uji huts and feasting on Pitha in Assam during Magh Bihu.'
    ],
    regions: ['Pan-India', 'Gujarat', 'Tamil Nadu', 'Maharashtra', 'Uttar Pradesh & Bihar', 'Assam', 'Andhra & Telangana', 'Kerala'],
    languages: ['Hindi', 'Gujarati', 'Tamil', 'Telugu', 'Marathi', 'Assamese', 'Kannada'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'sankranti-festivals', 'surya-festivals', 'harvest-festivals'],
    related_festivals: ['lohri', 'thai-pongal', 'magh-bihu', 'vishu', 'gangasagar-mela'],
    related_vrat: ['makar-sankranti-snan-daan'],
    related_temple_ids: ['sabarimala', 'somnath', 'kashi-vishwanath'],
    seo_title_template: 'Makar Sankranti 2026 Date, Uttarayan Punya Kaal Muhurat & Snan Daan',
    seo_description_template: 'Complete Makar Sankranti 2026 guide with exact Solar Ingress timing, Punya Kaal & Maha Punya Kaal Muhurat, Gujarat Kite Festival, Thai Pongal, Til-Gud & Snan rituals.',
    puja_information: {
      overview: 'Dedicated to Bhagwan Surya Narayana with morning Arghya in copper pot, offering sesame seeds (Til), jaggery (Gud), new rice, black blankets, and khichdi to the needy.',
      samagri: [
        { item: 'Copper Kalash for Surya Arghya', quantity: '1 pc', required: true, significance: 'Copper is the sacred conductive metal of the Sun.' },
        { item: 'Black & White Sesame Seeds (Til)', quantity: '250g', required: true, significance: 'Sesame is ruled by Saturn (Shani), who is worshipped together with father Surya on Sankranti.' },
        { item: 'Organic Jaggery (Gud)', quantity: '500g', required: true, significance: 'Sweet warming winter energy of Surya.' },
        { item: 'Khichdi Ingredients (Rice, Urad Dal, Ghee, Spices)', quantity: '1 basket', required: true, significance: 'Symbol of universal harmony and agrarian thanksgiving.' },
        { item: 'Red Sandalwood (Rakta Chandan) & Red Flowers', quantity: '50g', required: true, significance: 'Favorite cooling offerings to the Sun God.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Tirtha Snan', mantra: 'गङ्गे च यमुने चैव गोदावरि सरस्वति। नर्मदे सिन्धु कावेरि जलेऽस्मिन् संनिधिं कुरु॥', procedure: 'Take bath before sunrise in a holy river or add Gangajal and sesame seeds to domestic bathwater.' },
        { stepNumber: 2, title: 'Surya Arghya Samarpan', mantra: 'ॐ घृणिः सूर्य आदित्याय नमः। एहि सूर्य सहस्त्रांशो तेजोराशे जगत्पते। अनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर॥', procedure: 'Offer water mixed with red chandan, akshat, and til through the copper pot toward the rising Sun.' },
        { stepNumber: 3, title: 'Aditya Hridaya Stotram Recitation', mantra: 'ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम्। रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम्॥', procedure: 'Recite the sacred hymn gifted by Sage Agastya to Lord Rama.' },
        { stepNumber: 4, title: 'Mahadaan (Charity of Til, Khichdi & Woolens)', mantra: 'दानेन प्राप्यते सर्वं दानेन सुखमेधते।', procedure: 'Gift raw khichdi ingredients, sesame sweets, and warm garments to Brahmins, monks, and the needy.' }
      ],
      aartiName: 'Surya Dev Ki Aarti',
      prasadDetails: 'Til-Gud laddoos, Khichdi with cow ghee, Pongal, Chikki, and Undhiyu.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Makar Sankranti Punya Kaal & Maha Punya Kaal',
      rulesDescription: 'The Punya Kaal spans 16 Ghatis (approx. 6 hours and 24 minutes) from the moment of the Sun’s ingress into Makara Rashi. Maha Punya Kaal occurs during the first few Ghatis of ingress.',
      calculationKey: 'standard',
      traditionalNotice: 'If the Sun transits into Makara after sunset, the Punya Kaal is observed the following morning at sunrise.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Makar Sankranti is a feast day. Devotees take bath, offer Surya Arghya, perform charity, and eat sanctified hot Khichdi and sesame sweets with family.',
      allowedFoods: ['Sesame-jaggery sweets', 'Freshly harvested sugarcane', 'Khichdi', 'Undhiyu', 'Pongal'],
      prohibitedFoods: ['Stale food', 'Tamasic food', 'Alcohol'],
      regionalExceptions: 'In parts of Bihar and UP, the morning meal strictly starts with Dahi-Chuda (curd with flattened rice) and Gur-Til sweets.'
    },
    regional_variations: [
      {
        region: 'Gujarat (Ahmedabad, Surat, Vadodara)',
        customs: 'Celebrated as Uttarayan and Vasi Uttarayan. Millions crowd rooftops from sunrise to midnight flying combat kites (Tukkal at night). Traditional meals feature Undhiyu (slow-cooked clay pot winter vegetable stew) and Jalebi.',
        distinctiveNames: ['Uttarayan', 'Patang Utsav', 'Vasi Uttarayan'],
        uniqueFoodsOrRituals: 'Undhiyu, Jalebi, Til Chikki, Sing Chikki, Mamra Ladu.'
      },
      {
        region: 'Tamil Nadu',
        customs: 'Celebrated as the 4-day Thai Pongal: Bhogi Pongal (clearing old belongings), Surya Pongal (boiling sweet rice in clay pot outdoors until it overflows with shouts of "Pongalo Pongal!"), Mattu Pongal (decorating cattle), and Kaanum Pongal.',
        distinctiveNames: ['Thai Pongal', 'Mattu Pongal'],
        uniqueFoodsOrRituals: 'Sakkarai Pongal (sweet rice with jaggery, cashew, and ghee), Ven Pongal.'
      },
      {
        region: 'Maharashtra',
        customs: 'Devotees exchange multicolored sugar coated sesame sweets (Halwa) and Tilgul laddoos saying "Tilgul ghya, god god bola" (Accept this sesame-jaggery and speak sweet words). Married women host "Haldi-Kunku" get-togethers.',
        distinctiveNames: ['Makar Sankrant', 'Haldi Kunku'],
        uniqueFoodsOrRituals: 'Tilgul, Gulachi Poli (sweet jaggery stuffed flatbread).'
      }
    ],
    faqs: [
      { question: 'When is Makar Sankranti 2026?', answer: 'In 2026, Makar Sankranti is observed on Thursday, January 14, 2026, as the Sun transits into Makara Rashi in the afternoon hours.' },
      { question: 'Why does Makar Sankranti date remain mostly fixed around January 14 or 15?', answer: 'Unlike lunar festivals which shift by 10-11 days annually, Makar Sankranti is governed by the solar sidereal calendar. Due to the precession of equinoxes (Ayanamsha), the date shifts by one day roughly every 72 years.' },
      { question: 'Why are sesame seeds (Til) and jaggery (Gud) eaten on Sankranti?', answer: 'Scientifically, sesame and jaggery produce warmth, nourish the body against dry winter winds, and enhance immunity. Spiritually, sesame represents humility, and jaggery represents sweetness in speech and relations.' }
    ],
    references: [
      { title: 'Surya Siddhanta', source: 'Sankranti Prakarana', quoteOrChapter: 'Calculation of Nirayana Makara Transition' },
      { title: 'Matsya Purana', source: 'Daan Dharma', quoteOrChapter: 'The Incomparable Merit of Sankranti Snana and Tiladaana' }
    ]
  },

  {
    id: 'rama-navami',
    canonical_name: 'Sri Rama Navami',
    hindi_name: 'श्री राम नवमी (श्री राम जन्मोत्सव - मध्याह्न काल)',
    gujarati_name: 'શ્રી રામ નવમી (રામ જન્મોત્સવ)',
    alternate_names: ['Ram Navami', 'Sri Ramanavami', 'Chaitra Rama Navami', 'Ayodhya Janmotsav'],
    regional_names: {
      hi: 'श्री राम नवमी',
      gu: 'શ્રી રામ નવમી',
      te: 'శ్రీరామ నవమి (Sita Rama Kalyanam)',
      ta: 'ஸ்ரீ ராம நவமி (Sri Rama Navami)',
      kn: 'ಶ್ರೀ ರಾಮ ನವಮಿ (Sri Rama Navami)',
      mr: 'राम नवमी'
    },
    sanskrit_name: 'श्रीरामनवमी',
    transliteration: 'Śrīrāmanavamī',
    slug: 'rama-navami',
    festival_type: 'jayanti',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Bhagwan Maryada Purushottam Rama',
    deity_category: 'rama',
    lunar_month: 'chaitra',
    paksha: 'shukla',
    tithi_name: 'Navami (नवमी)',
    tithi_number: 9,
    base_day_of_year: 86,
    calculation_method: 'Chaitra Shukla Navami prevailing during Madhyahna Kaal (Abhijit Muhurat)',
    short_description: 'The auspicious birth of Maryada Purushottam Bhagwan Shri Rama in Ayodhya at midday during Abhijit Muhurat, concluding Chaitra Navratri.',
    full_overview: 'Sri Rama Navami celebrates the divine advent of the seventh avatar of Bhagwan Vishnu in the sacred city of Ayodhya to King Dasharatha and Queen Kausalya. Described in the Valmiki Ramayana, Rama was born at the stroke of midday under Punarvasu Nakshatra when five planets were in exaltation. The day marks the culmination of Chaitra Navratri with continuous Ramcharitmanas recitations, rocking of the baby cradle, and distribution of Panakam and Kosambari.',
    significance: 'Bhagwan Rama embodies Dharma in its most sublime, steadfast, and compassionate human expression. He established Ramarajya—an ideal state where righteousness, truth, justice, and welfare flourished equally for all beings without fear or partiality.',
    history_and_tradition: 'Celebrated across Ayodhya’s Ram Janmabhoomi, Rameswaram, and worldwide. In South India, particularly Bhadrachalam in Telangana, the day is celebrated with the grand celestial wedding of Sita and Rama (Sita Rama Kalyanam).',
    cultural_traditions: [
      'Midday Ram Janmotsav celebration with ringing bells, conch blowing, and chanting "Bhaye Pragat Kripala".',
      'Akhand Path of Tulsidas’s Shri Ramcharitmanas.',
      'Sita Rama Kalyanam (celestial wedding rituals) in South Indian temples.',
      'Distribution of Panakam (sweet jaggery cardamom water) and Kosambari (soaked moong dal salad).',
      'Grand Ratha Yatra processions across Ayodhya and major temple cities.'
    ],
    regions: ['Pan-India', 'Uttar Pradesh (Ayodhya)', 'Bihar', 'Telangana (Bhadrachalam)', 'Andhra Pradesh', 'Tamil Nadu', 'Global'],
    languages: ['Hindi', 'Sanskrit', 'Telugu', 'Tamil', 'Awadhi', 'Gujarati'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'rama-festivals', 'chaitra-festivals', 'jayanti-festivals'],
    related_festivals: ['chaitra-navratri', 'hanuman-jayanti', 'vivah-panchami', 'dussehra'],
    related_vrat: ['rama-navami-vrat'],
    related_temple_ids: ['somnath', 'kashi-vishwanath', 'golden-temple'],
    seo_title_template: 'Sri Rama Navami 2026 Date, Madhyahna Janmotsav Muhurat & Puja',
    seo_description_template: 'Complete Sri Rama Navami 2026 guide with exact Madhyahna Ram Janmotsav Muhurat in Ayodhya, Ramcharitmanas recitation, Sita Rama Kalyanam & Panakam recipe.',
    puja_information: {
      overview: 'Conducted during midday (Madhyahna) between 11:00 AM and 1:30 PM. The infant form of Rama is bathed with Gangajal, placed in a decorated swing, adorned with yellow silk, and offered sacred Panakam.',
      samagri: [
        { item: 'Shri Rama Idol / Ram Darbar Murti', quantity: '1 set', required: true, significance: 'Represents Rama with Sita Mata, Lakshmana, and Hanuman.' },
        { item: 'Baby Rama Cradle (Palna)', quantity: '1 pc', required: true, significance: 'For the midday Janmotsav ritual.' },
        { item: 'Panakam (Jaggery, Water, Pepper, Cardamom, Ginger)', quantity: '1 pot', required: true, significance: 'Traditional Ayurvedic coolant beverage of Rama.' },
        { item: 'Kosambari (Soaked Moong Dal, Coconut, Lemon, Green Chilli)', quantity: '1 bowl', required: true, significance: 'Wholesome nutritious summer offering.' },
        { item: 'Tulsi Leaves & Lotus Flowers', quantity: '21 leaves', required: true, significance: 'Essential for Maha Vishnu avatar worship.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Snan & Dhyanam', mantra: 'ॐ आपदामपहर्तारं दातारं सर्वसम्पदाम्। लोकाभिरामं श्रीरामं भूयो भूयो नमाम्यहम्॥', procedure: 'Take purifying morning bath and meditate on the lotus feet of Shri Rama.' },
        { stepNumber: 2, title: 'Midday Janmotsav Invocation', mantra: 'भये प्रगट कृपाला दीनदयाला कौसल्या हितकारी। हरषित महतारी मुनि मन हारी अद्भुत रूप बिचारी॥', procedure: 'At exact solar midday, unveil the baby Rama idol, blow conches, and scatter flower petals.' },
        { stepNumber: 3, title: 'Shodashopachara Puja & Tulsi Offering', mantra: 'ॐ रामाय नमः। ॐ रामभद्राय नमः। ॐ रामचन्द्राय नमः।', procedure: 'Offer yellow chandan, akshat, fragrant flowers, and 108 fresh tulsi leaves.' },
        { stepNumber: 4, title: 'Panakam & Kosambari Naivedya', mantra: 'ॐ नमो भगवते रघुनन्दनाय।', procedure: 'Offer cooling jaggery panakam, kosambari, and seasonal fruits.' },
        { stepNumber: 5, title: 'Shri Ramachandra Kripalu Bhaju Man Aarti', mantra: 'श्रीरामचन्द्र कृपालु भजु मन हरण भवभय दारुणम्। नवकञ्जलोचन कञ्जमुख करकञ्ज पद कञ्जारुणम्॥', procedure: 'Sing Goswami Tulsidas’s immortal Stuti with camphor flame.' }
      ],
      aartiName: 'Shri Ramachandra Kripalu Bhaju Man',
      prasadDetails: 'Panakam, Kosambari, Panchamrit, Pedha, and seasonal muskmelons.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Madhyahna Ram Janmotsav Muhurat',
      rulesDescription: 'Navami Tithi must prevail during the Madhyahna period (roughly 6 Ghatis centered at noon) for authentic celebration of Ram Janmotsav.',
      calculationKey: 'madhyahna',
      traditionalNotice: 'If Navami prevails during Madhyahna on two consecutive days, the day with Punarvasu Nakshatra overlap takes absolute priority.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Upavas',
      paranaRules: 'Devotees keep a fast from sunrise to midday, breaking it after the Janmotsav Aarti with Panakam and fruits.',
      allowedFoods: ['Panakam', 'Fruits', 'Milk', 'Singhara flour dishes', 'Kosambari'],
      prohibitedFoods: ['Grains (Rice, Wheat)', 'Onion and garlic', 'Common salt during fast'],
      regionalExceptions: 'In Telangana and Andhra, devotees attend the day-long Sita Rama Kalyanam wedding and partake in the grand Kalyana Prasadam.'
    },
    regional_variations: [
      {
        region: 'Ayodhya & North India',
        customs: 'The Ram Janmabhoomi Temple witnesses hundreds of thousands of pilgrims taking a holy dip in the sacred Sarayu River and congregating at midday for the Divine Aarti.',
        distinctiveNames: ['Ayodhya Janmotsav', 'Ram Navami Mela'],
        uniqueFoodsOrRituals: 'Sarayu Snan, Akhand Ramcharitmanas Path, Chappan Bhog.'
      },
      {
        region: 'Telangana (Bhadrachalam) & Andhra Pradesh',
        customs: 'Celebrated as Sri Sita Rama Kalyana Mahotsavam. The state government officially presents pearl garlands (Mutyala Talambralu) and silk garments to the temple on behalf of the people.',
        distinctiveNames: ['Sita Rama Kalyanam', 'Bhadrachalam Utsavam'],
        uniqueFoodsOrRituals: 'Mutyala Talambralu, Panakam, Vadapappu (Kosambari), Chalimidi.'
      }
    ],
    faqs: [
      { question: 'When is Sri Rama Navami 2026?', answer: 'In 2026, Sri Rama Navami falls on Friday, March 27, 2026, with the Madhyahna Ram Janmotsav Muhurat from 11:12 AM to 01:38 PM.' },
      { question: 'Why is Panakam specially prepared on Rama Navami?', answer: 'Panakam is an ancient Ayurvedic beverage made from water, jaggery, black pepper, cardamom, and ginger. Falling at the onset of sweltering Chaitra summer, it balances Pitta dosha and cools the body instantly.' },
      { question: 'What planets were exalted at the birth of Lord Rama?', answer: 'According to Valmiki Ramayana (Bala Kanda 18.8-10), five planets—Sun, Mars, Jupiter, Venus, and Saturn—were in their signs of exaltation, with Jupiter and Moon in Cancer ascendant (Lagna).' }
    ],
    references: [
      { title: 'Valmiki Ramayana', source: 'Bala Kanda', quoteOrChapter: 'Sarga 18: The Divine Birth of Rama in Ayodhya' },
      { title: 'Ramcharitmanas', source: 'Balkand', quoteOrChapter: 'Bhaye Pragat Kripala Deendayala Chaupai' }
    ]
  },

  {
    id: 'raksha-bandhan',
    canonical_name: 'Raksha Bandhan (Rakhi Purnima)',
    hindi_name: 'रक्षाबंधन (राखी पूर्णिमा व श्रावणी उपाकर्म)',
    gujarati_name: 'રક્ષાબંધન (બળેવ / નાળિયેરી પૂનમ)',
    alternate_names: ['Rakhi', 'Shravani Purnima', 'Baleva', 'Narali Purnima', 'Avani Avittam', 'Gamha Purnima'],
    regional_names: {
      hi: 'रक्षाबंधन / राखी',
      gu: 'રક્ષાબંધન / બળેવ',
      mr: 'नारळी पौर्णिमा / रक्षाबंधन',
      ta: 'ஆவணி அவிட்டம் (Avani Avittam)',
      te: 'రాఖీ పౌర్ణమి (Rakhi Pournami)',
      kn: 'ರಕ್ಷಾಬಂಧನ (Rakshabandhana)',
      or: 'ଗହ୍ମା ପୂର୍ଣ୍ଣିମା (Gamha Purnima)'
    },
    sanskrit_name: 'रक्षाबन्धनम् (श्रावणी)',
    transliteration: 'Rakṣābandhanam',
    slug: 'raksha-bandhan',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Vishnu, Mata Lakshmi, King Bali, Lord Varuna',
    deity_category: 'vishnu',
    lunar_month: 'shravana',
    paksha: 'shukla',
    tithi_name: 'Purnima (पूर्णिमा)',
    tithi_number: 15,
    base_day_of_year: 240,
    calculation_method: 'Shravana Purnima during Aparahna or Pradosh Kaal, devoid of Bhadra',
    short_description: 'The sacred festival celebrating the eternal bond of protection and unconditional love between siblings, along with Shravani Upakarma and Narali Purnima.',
    full_overview: 'Raksha Bandhan is the tender celebration of sibling love. Sisters tie a sacred silken thread (Rakhi or Raksha Sutra) around their brothers’ right wrists, pray for their long life and happiness, apply an auspicious kumkum-akshat tilak, and feed sweets. In return, brothers present gifts and take a lifelong vow to safeguard their sisters’ dignity and welfare. Concurrently, Brahmins and Yajurvedis perform Upakarma (changing the sacred Janeu thread), and coastal fishermen worship Varuna Deva by offering coconuts on Narali Purnima.',
    significance: 'Grounded in ancient Puranic lore: Mata Lakshmi tied a protective thread onto the demon-king Bali to secure Lord Vishnu’s release from Patala. Draupadi tore her silk sari border to bandage Krishna’s bleeding finger during Shishupala’s execution, and Krishna declared Himself forever indebted to protect her dignity.',
    history_and_tradition: 'Mentioned in the Bhavishya Purana where Indrani tied a sacred amulet given by Guru Brihaspati on Indra’s wrist, empowering him to triumph over the Asuras. In 1905, Nobel laureate Rabindranath Tagore used Raksha Bandhan to foster communal unity against the British partition of Bengal.',
    cultural_traditions: [
      'Tying the protective Rakhi during auspicious Bhadra-free Aparahna hours.',
      'Performing Aarti of brothers and sweet feeding with Ghewar, Gujiya, and Peda.',
      'Performing Shravani Upakarma (sacred thread renewal) in rivers and temples.',
      'Offering golden-husked coconuts to Lord Varuna by fishermen in Maharashtra and Gujarat (Narali Purnima).'
    ],
    regions: ['Pan-India', 'North India', 'Gujarat', 'Maharashtra', 'Rajasthan', 'South India', 'Global'],
    languages: ['Hindi', 'Gujarati', 'Marathi', 'Punjabi', 'Sanskrit', 'Bengali'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'shravana-festivals'],
    related_festivals: ['narali-purnima', 'avani-avittam', 'bhai-dooj', 'kajari-teej'],
    related_vrat: ['shravani-upakarma', 'shravana-purnima-vrat'],
    related_temple_ids: ['somnath', 'dwarkadhish', 'golden-temple'],
    seo_title_template: 'Raksha Bandhan 2026 Date, Rakhi Tying Muhurat & Bhadra End Time',
    seo_description_template: 'Complete Raksha Bandhan 2026 guide with exact Aparahna Rakhi Tying Muhurat, Bhadra Mukha/Punchha calculation, Shravani Upakarma & sibling rituals.',
    puja_information: {
      overview: 'A sister prepares a silver or brass thali with a Diya, Roli, Akshat, Rakhi threads, and sweets. She ties the Rakhi while reciting the ancient Raksha Stotram mantra.',
      samagri: [
        { item: 'Rakhi (Raksha Sutra)', quantity: '1 or more', required: true, significance: 'Protective thread charged with affection and spiritual power.' },
        { item: 'Roli, Kumkum & Akshat (Unbroken Rice)', quantity: '25g', required: true, significance: 'Applied on the Ajna Chakra for spiritual protection.' },
        { item: 'Ghee Diya for Aarti', quantity: '1 pc', required: true, significance: 'Wards off evil energies and sanctifies the aura.' },
        { item: 'Traditional Sweets (Ghewar, Peda, Kaju Katli)', quantity: '250g', required: true, significance: 'Represents mutual sweetness in relations.' },
        { item: 'Sister Gift / Cash Envelope', quantity: '1 token', required: true, significance: 'Token of love and perpetual assurance of security.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Thali Preparation & Diya Lighting', mantra: 'ॐ दीपज्योतिषे नमः।', procedure: 'Arrange the Rakhi thali with diya, roli, unbroken rice grains, rakhi, and sweets.' },
        { stepNumber: 2, title: 'Tilak & Akshat Application', mantra: 'ॐ चन्दनस्य महत्पुण्यं पवित्रं पापनाशनम्। आपदां हरते नित्यं लक्ष्मीस्तिष्ठति सर्वदा॥', procedure: 'Sister applies red kumkum tilak on brother’s forehead, followed by unbroken white rice.' },
        { stepNumber: 3, title: 'Tying of Raksha Sutra', mantra: 'येन बद्धो बली राजा दानवेन्द्रो महाबलः। तेन त्वामनुबध्नामि रक्षे मा चल मा चल॥', procedure: 'Tie the rakhi firmly on brother’s right wrist while reciting this immortal protective shloka.' },
        { stepNumber: 4, title: 'Aarti & Sweet Feeding', mantra: 'दीर्घायुर्भव।', procedure: 'Circle the lighted diya around brother’s face, feed sweets, and brother presents gifts and touches elders’ feet.' }
      ],
      aartiName: 'Aarti Raksha Bandhan',
      prasadDetails: 'Ghewar, Gujiya, Rasgulla, Kheer, and coconut sweets.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Aparahna Rakhi Tying Muhurat',
      rulesDescription: 'Raksha Bandhan must strictly NOT be performed during Bhadra Kaal. If Bhadra exists during morning or afternoon, one must wait until Bhadra concludes or perform during Aparahna / Pradosh Kaal.',
      calculationKey: 'standard',
      traditionalNotice: 'Tying Rakhi during Bhadra is believed to harm the brother’s longevity according to Dharmasindhu.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Sisters generally fast from morning until they tie the Rakhi and perform the aarti of their brothers, after which they partake in a festive meal.',
      allowedFoods: ['Festive sweets', 'Traditional regional dishes'],
      prohibitedFoods: ['Non-vegetarian food', 'Alcoholic beverages'],
      regionalExceptions: 'In South India, Brahmins observe a strict fast during morning Upakarma rituals until the changing of the Yajnopavita is accomplished.'
    },
    regional_variations: [
      {
        region: 'North & Western India',
        customs: 'Sisters tie Rakhi to brothers and often to sisters-in-law (Lumba Rakhi in Rajasthan). Massive family feasts feature Ghewar and seasonal delicacies.',
        distinctiveNames: ['Rakhi', 'Lumba Rakhi'],
        uniqueFoodsOrRituals: 'Ghewar, Malpua, Kaju Katli.'
      },
      {
        region: 'Maharashtra (Coastal Belt)',
        customs: 'Celebrated as Narali Purnima (Coconut Full Moon). The Koli fishing community offers decorated coconuts to Varuna Deva, praying for calm seas before launching fishing boats.',
        distinctiveNames: ['Narali Purnima'],
        uniqueFoodsOrRituals: 'Narali Bhaat (sweet coconut rice), Karanji.'
      },
      {
        region: 'South India',
        customs: 'Celebrated as Avani Avittam. Yajurvedi Brahmins gather at temple tanks and rivers to perform Kamo-karshit Japam and change the sacred Janeu thread (Yajnopavita).',
        distinctiveNames: ['Avani Avittam', 'Upakarma'],
        uniqueFoodsOrRituals: 'Appam, Vadai, Payasam.'
      }
    ],
    faqs: [
      { question: 'When is Raksha Bandhan 2026?', answer: 'In 2026, Raksha Bandhan will be celebrated on Friday, August 28, 2026, on Shravana Shukla Purnima with the auspicious Bhadra-free Rakhi tying window.' },
      { question: 'Why should Rakhi not be tied during Bhadra?', answer: 'In Hindu astrology, Bhadra is the ferocious daughter of Surya and sister of Shani. Auspicious actions performed during Bhadra bring obstacles and decay, as witnessed when Ravana’s sister tied Rakhi during Bhadra leading to his downfall.' },
      { question: 'What is the meaning of the Rakhi mantra "Yena Baddho Bali Raja"?', answer: '"I tie upon you that same sacred protective seal with which the supreme demon-king Bali was bound by Lord Vishnu; O sacred thread, stay steadfast and protect always."' }
    ],
    references: [
      { title: 'Bhavishya Purana', source: 'Uttara Parva', quoteOrChapter: 'Discourse on the Indrani Raksha Sutra' },
      { title: 'Dharmasindhu', source: 'Shravana Purnima Nirnaya', quoteOrChapter: 'Injunctions regarding Bhadra and Aparahna Vyapti' }
    ]
  }
];
