import { FestivalDefinition } from './festivalDatabase';

export const additionalFestivalsList: FestivalDefinition[] = [
  {
    id: 'nirjala-ekadashi',
    canonical_name: 'Nirjala Ekadashi (Bhimseni Ekadashi)',
    hindi_name: 'निर्जला एकादशी (भीमसेनी एकादशी व महाव्रत)',
    gujarati_name: 'નિર્જળા એકાદશી (ભીમ અગિયારસ)',
    alternate_names: ['Bhimseni Ekadashi', 'Pandava Ekadashi', 'Jyeshtha Shukla Ekadashi'],
    regional_names: {
      hi: 'निर्जला एकादशी / भीम एकादशी',
      gu: 'ભીમ અગિયારસ / નિર્જળા',
      mr: 'निर्जला एकादशी',
      te: 'నిర్జల ఏకాదశి',
      ta: 'நிர்ஜலா ஏகாதசி'
    },
    sanskrit_name: 'निर्जलाएकादशी (भीमसेनी)',
    transliteration: 'Nirjalā Ekādaśī',
    slug: 'nirjala-ekadashi',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Bhagwan Vishnu & Bhima',
    deity_category: 'vishnu',
    lunar_month: 'jyeshtha',
    paksha: 'shukla',
    tithi_name: 'Ekadashi (एकादशी)',
    tithi_number: 11,
    base_day_of_year: 165,
    calculation_method: 'Jyeshtha Shukla Ekadashi at Sunrise (Arunodaya Vyapini)',
    short_description: 'The most austere and spiritually powerful of all 24 Ekadashis: fasting without even a drop of water bestows the accumulated spiritual merit of all annual Ekadashis.',
    full_overview: 'Nirjala Ekadashi falls during the sweltering heat of Jyeshtha. Bhimasena, the second Pandava brother blessed with immense digestive fire (Vrika), confessed to Maharishi Vedavyasa that he could not fast twice every month. Vyasadeva instructed him to observe this single, rigorous waterless fast from sunrise to next morning’s sunrise, promising that it equaled the spiritual merit of observing all 24 Ekadashis. Devotees offer water pots (Jala Kumbha), seasonal hand fans, and sweet summer fruits to pilgrims and the needy.',
    significance: 'Purifies physical organs, conquers senses, and destroys accumulated spiritual transgressions. Water donation on this scorching summer day represents the highest virtue.',
    history_and_tradition: 'Expounded in the Padma Purana (Uttara Khanda) and Brahma Vaivarta Purana.',
    cultural_traditions: [
      'Observing strict 24-hour waterless fasting without consuming even a single drop of water.',
      'Setting up sweet water and Sherbet distribution stalls (Chhabeel) on streets and temples.',
      'Donating earthen pitchers filled with cool water, melons, and hand fans to Brahmins and travelers.',
      'Night-long singing of Vishnu Sahasranama and Bhagavad Gita.'
    ],
    regions: ['Pan-India', 'North India', 'Gujarat', 'Maharashtra', 'Global'],
    languages: ['Hindi', 'Gujarati', 'Sanskrit', 'Marathi'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'jyeshtha-festivals', 'vrat-festivals', 'vishnu-festivals'],
    related_festivals: ['devshayani-ekadashi', 'devutthan-ekadashi', 'gita-jayanti'],
    related_vrat: ['ekadashi-vrat', 'nirjala-vrat'],
    related_temple_ids: ['badrinath', 'dwarkadhish', 'somnath'],
    seo_title_template: 'Nirjala Ekadashi 2026 Date, Parana Timing & Waterless Vrat Rules',
    seo_description_template: 'Complete Nirjala Ekadashi 2026 guide with exact Dwadashi Parana Muhurat, waterless fasting rules, Bhima story, Jal Daan significance & Vishnu Puja Vidhi.',
    puja_information: {
      overview: 'Worship of Lord Vishnu with yellow flowers, Tulsi leaves, water pitcher donation, and Vishnu Sahasranama chanting.',
      samagri: [
        { item: 'Clay Water Pitcher with Camphor (Jala Kumbha)', quantity: '1 or 2 pcs', required: true, significance: 'Supreme charity of cool water on summer day.' },
        { item: 'Hand Fan (Pankha) & Umbrella', quantity: '1 set', required: false, significance: 'Protection against summer heat for the needy.' },
        { item: 'Seasonal Summer Fruits (Melon, Mango)', quantity: '1 basket', required: true, significance: 'Cooling offerings.' },
        { item: 'Tulsi Leaves & Yellow Chandan', quantity: '21 leaves', required: true, significance: 'Devotion to Vishnu.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Sankalp', mantra: 'ॐ नमो नारायणाय।', procedure: 'Take dawn bath, take water in right hand, pledge 24-hour waterless fast for the pleasure of Vishnu.' },
        { stepNumber: 2, title: 'Vishnu Sahasranama Stotram', mantra: 'विष्णुं जिष्णुं महाविष्णुं प्रभविष्णुं महेश्वरम्।', procedure: 'Chant 1,000 sacred names of Vishnu and offer fresh yellow flowers and Tulsi.' },
        { stepNumber: 3, title: 'Jala Kumbha Daan', mantra: 'देवदेव जगन्नाथ प्राप्तेऽयं ज्येष्ठे मासि च। ददामि जलकुम्भं च प्रीतो भव जनार्दन॥', procedure: 'Donate fragrant water pots to Brahmins and establish water kiosks for thirsty birds and travelers.' }
      ],
      aartiName: 'Om Jai Jagdish Hare',
      prasadDetails: 'Melon, mangoes, cucumber, and charanamrit.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Dwadashi Parana Muhurat',
      rulesDescription: 'Parana must strictly be completed next morning on Dwadashi after sunrise and before the expiry of Dwadashi Tithi (Hari Vasara must be avoided).',
      calculationKey: 'standard',
      traditionalNotice: 'Breaking fast after Dwadashi expires or during Hari Vasara nullifies the merit according to Shastras.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Nirjala',
      paranaRules: 'Strict waterless fast for 24 hours from sunrise on Ekadashi till sunrise on Dwadashi.',
      allowedFoods: ['Strictly waterless during fast', 'Water, fruits, and light satvik meal on Dwadashi Parana'],
      prohibitedFoods: ['Any water or food during the 24 hours of fast']
    },
    regional_variations: [
      {
        region: 'North India & Gujarat',
        customs: 'Charity stalls (Chhabeel) are set up on highways and streets offering cool sweet rose sherbet to all passersby.',
        distinctiveNames: ['Chhabeel Seva', 'Bhim Agiyaras'],
        uniqueFoodsOrRituals: 'Water, Sherbet, Melons distribution.'
      }
    ],
    faqs: [
      { question: 'When is Nirjala Ekadashi 2026?', answer: 'In 2026, Nirjala Ekadashi falls on Thursday, June 25, 2026, with the Dwadashi Parana window next morning between 05:35 AM and 08:22 AM.' },
      { question: 'Can one sip water during Achamana?', answer: 'Shastras permit taking only a tiny drop of water that can wet a single mustard seed during ritual Achamana (cleansing) while reciting Vishnu names, but swallowing water as a beverage is strictly prohibited.' }
    ],
    references: [
      { title: 'Padma Purana', source: 'Uttara Khanda', quoteOrChapter: 'Nirjala Ekadashi Vrata Mahatmya' }
    ]
  },

  {
    id: 'jagannath-rathyatra',
    canonical_name: 'Jagannath Puri Rathyatra',
    hindi_name: 'जगन्नाथ पुरी रथयात्रा (गुंडिचा यात्रा व तीन रथ)',
    gujarati_name: 'જગન્નાથ રથયાત્રા (અમદાવાદ જમાલપુર રથયાત્રા)',
    alternate_names: ['Ratha Yatra', 'Gundicha Yatra', 'Car Festival', 'Chariot Festival'],
    regional_names: {
      or: 'ରଥଯାତ୍ରା (Ratha Jatra - Puri)',
      gu: 'અમદાવાદ રથયાત્રા (જમાલપુર)',
      hi: 'जगन्नाथ रथयात्रा',
      bn: 'রথযাত্রা (Rathayatra)'
    },
    sanskrit_name: 'श्रीजगन्नाथरथयात्रा',
    transliteration: 'Śrījagannātharathayātrā',
    slug: 'jagannath-rathyatra',
    festival_type: 'temple',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Lord Jagannath, Lord Balabhadra & Devi Subhadra',
    deity_category: 'jagannath',
    lunar_month: 'ashadha',
    paksha: 'shukla',
    tithi_name: 'Dwitiya (द्वितीया)',
    tithi_number: 2,
    base_day_of_year: 184,
    calculation_method: 'Ashadha Shukla Dwitiya (Ashadhi Bij)',
    short_description: 'The monumental chariot festival where Lord of the Universe (Jagannath) steps out of the temple onto the streets on three colossal wooden chariots.',
    full_overview: 'The world-famous Jagannath Rathyatra is celebrated on Ashadha Shukla Dwitiya. Lord Jagannath, His elder brother Balabhadra, and sister Subhadra journey from the sanctum sanctorum of the Puri Shrimandir to the Gundicha Temple (their aunt’s abode) on three towering wooden chariots: Nandighosha, Taladhwaja, and Darpadalana. Millions pull the chariot ropes, as scriptures declare that merely beholding the Lord on His chariot (Rathe tu Vamanam drishtva) grants liberation from rebirth. In Ahmedabad, the 148-year-old historic Rathyatra from the Jamalpur Jagannath Temple is celebrated as Gujarat’s largest festival.',
    significance: 'Symbolizes the Supreme Divinity stepping out of temple barriers to embrace every devotee regardless of caste, creed, or nationality. The Gajapati King of Puri sweeps the chariot platforms with a golden broom (Chera Panhara), demonstrating that before God, the king is a humble servant.',
    history_and_tradition: 'Mentioned in the Skanda Purana, Brahma Purana, and Kapila Samhita.',
    cultural_traditions: [
      'Pahandi Bije: Royal ceremonial carrying of the gigantic wooden deities onto the chariots.',
      'Chera Panhara: The King sweeping the chariot decks with a golden broom and fragrant sandalwood water.',
      'Pulling the giant ropes of the chariots by millions of pilgrims with chants of "Jai Jagannath!".',
      'The 9-day stay of the deities at Gundicha temple before Bahuda Yatra (return journey).',
      'Eating Khaja, Podapitha, and Mahaprasad.'
    ],
    regions: ['Odisha (Puri)', 'Gujarat (Ahmedabad)', 'Bengal (Mahesh)', 'Global ISKCON Chariots'],
    languages: ['Odia', 'Hindi', 'Gujarati', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'ashadha-festivals', 'temple-festivals', 'jagannath-festivals'],
    related_festivals: ['snana-yatra', 'bahuda-yatra', 'guru-purnima'],
    related_vrat: ['ashadhi-bij'],
    related_temple_ids: ['puri-jagannath', 'somnath', 'dwarkadhish'],
    seo_title_template: 'Jagannath Rathyatra 2026 Date, Puri & Ahmedabad Chariot Timings',
    seo_description_template: 'Complete Jagannath Rathyatra 2026 guide: Puri Chariots schedule, Ahmedabad Jamalpur Rathyatra, Chera Panhara, 3 Chariots details & Mahaprasad.',
    puja_information: {
      overview: 'Special Ratha Pratishta, offering of 56 Bhog Mahaprasad, and sweeping of chariot decks.',
      samagri: [
        { item: 'Three Chariots (Nandighosha, Taladhwaja, Darpadalana)', quantity: '3 chariots', required: true, significance: 'Constructed from neem wood without metal nails.' },
        { item: 'Thick Jute Ropes', quantity: '6 long ropes', required: true, significance: 'Pulled by devotees for supreme liberation.' },
        { item: 'Podapitha & Khaja sweets', quantity: 'Standard', required: true, significance: 'Lord Jagannath’s favorite Odia delicacies.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Mangala Alati & Pahandi', mantra: 'नीलाचलनिवासाय नित्याय परमात्मने। बलभद्रसुभद्राभ्यां जगन्नाथाय ते नमः॥', procedure: 'Deities are swayed ceremoniously down temple stairs with floral crowns (Tahia).' },
        { stepNumber: 2, title: 'Chera Panhara Ritual', mantra: 'ॐ जगन्नाथाय नमः।', procedure: 'The King sweeps the chariot with golden broom and sprinkles sandalwood water.' },
        { stepNumber: 3, title: 'Ratha Tana (Pulling the Chariot)', mantra: 'रथे तु वामनं दृष्ट्वा पुनर्जन्म न विद्यते।', procedure: 'Pilgrims touch the sacred ropes and pull the chariots toward Gundicha temple.' }
      ],
      aartiName: 'Jagannathashtakam & Aarti',
      prasadDetails: 'Mahaprasad, Khaja, Podapitha, Rasagola, and Dalma.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Ratha Yatra Tana Muhurat',
      rulesDescription: 'Chariot pulling commences on Ashadha Shukla Dwitiya in the afternoon.',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Observance of Ashadhi Bij marks Kutchi New Year in Gujarat.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Feast day; partaking of Jagannath Mahaprasad is considered the highest blessing.'
    },
    regional_variations: [
      {
        region: 'Gujarat (Ahmedabad)',
        customs: 'The 148-year-old Rathyatra starting from Jamalpur Temple traverses 14 kilometers through old Ahmedabad with decorated elephants, Akhada gymnasts, and bhajan mandalis.',
        distinctiveNames: ['Ahmedabad Rathyatra', 'Jamalpur Rathyatra'],
        uniqueFoodsOrRituals: 'Sprouted Moong (Mag), Jamun fruits, and Peda.'
      }
    ],
    faqs: [
      { question: 'When is Jagannath Rathyatra 2026?', answer: 'In 2026, the Puri and Ahmedabad Jagannath Rathyatra will be held on Thursday, July 16, 2026, on Ashadha Shukla Dwitiya.' },
      { question: 'What is Chera Panhara?', answer: 'It is the humility ritual where the titular King of Puri (Gajapati Maharaja) sweeps the platforms of all three chariots with a golden broom, proving that all earthly status vanishes before the Lord of the Universe.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Utkala Khanda', quoteOrChapter: 'Puri Ratha Yatra Mahatmya' }
    ]
  },

  {
    id: 'guru-purnima',
    canonical_name: 'Guru Purnima (Vyasa Purnima)',
    hindi_name: 'गुरु पूर्णिमा (व्यास पूर्णिमा व गुरु पूजन)',
    gujarati_name: 'ગુરુ પૂર્ણિમા (ગુરુ પૂજન અને વ્યાસ જયંતી)',
    alternate_names: ['Vyasa Purnima', 'Guru Puja', 'Ashadha Purnima'],
    regional_names: {
      hi: 'गुरु पूर्णिमा',
      gu: 'ગુરુ પૂર્ણિમા',
      mr: 'गुरु पौर्णिमा',
      te: 'గురు పౌర్ణమి (Guru Pournami)',
      ta: 'குரு பூர்ணிமா (Guru Purnima)'
    },
    sanskrit_name: 'गुरुपूर्णिमा (व्यासपूर्णिमा)',
    transliteration: 'Gurupūrṇimā',
    slug: 'guru-purnima',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'The Spiritual Guru, Maharishi Veda Vyasa & Lord Dattatreya',
    deity_category: 'guru',
    lunar_month: 'ashadha',
    paksha: 'shukla',
    tithi_name: 'Purnima (पूर्णिमा)',
    tithi_number: 15,
    base_day_of_year: 196,
    calculation_method: 'Ashadha Shukla Purnima at Sunrise (Udaya Purnima)',
    short_description: 'Honoring the spiritual Master (Guru) and celebrating the birthday of Maharishi Veda Vyasa, the compiler of the four Vedas and author of the 18 Puranas.',
    full_overview: 'Guru Purnima is celebrated on Ashadha Purnima in deep gratitude to the lineage of spiritual preceptors (Guru Parampara). The Guru dispels "Gu" (darkness of ignorance) through "Ru" (the radiance of illumination). It marks the appearance day of Krishna Dwaipayana Veda Vyasa, who classified the singular Veda into Rig, Sama, Yajur, and Atharva, authored the 18 Puranas, the Mahabharata, and the Brahma Sutras. Disciples gather at ashrams, wash their Guru’s feet with sandalwood water (Padapuja), offer dakshina, and take sacred spiritual initiation.',
    significance: 'Recognizes that without the guiding beacon of a realized master, the soul wanders aimlessly in worldly illusion. "Gurur Brahma Gurur Vishnur Gurur Devo Maheshwarah; Gurur Sakshat Param Brahma Tasmai Shri Gurave Namah."',
    history_and_tradition: 'Mentioned in the Guru Gita (Skanda Purana) and Bhagavata Purana. Gautama Buddha delivered his first sermon (Dhammacakkappavattana Sutta) at Sarnath on this day.',
    cultural_traditions: [
      'Performing Guru Padapuja (worshipping the wooden sandals / Padukas of the preceptor).',
      'Recitation of the Guru Gita and Adi Shankaracharya’s Guru Stotram.',
      'Sanyasis and monks commencing their 4-month Chaturmas Vrata retreat.',
      'Disciples offering Dakshina and taking vows of discipline and scriptural study.'
    ],
    regions: ['Pan-India', 'Varanasi', 'Haridwar', 'Rishikesh', 'Gujarat', 'Global'],
    languages: ['Sanskrit', 'Hindi', 'Gujarati', 'Marathi', 'Tamil', 'Telugu'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'ashadha-festivals', 'guru-festivals'],
    related_festivals: ['jagannath-rathyatra', 'devshayani-ekadashi', 'buddha-purnima'],
    related_vrat: ['chaturmas-vrat', 'purnima-vrat'],
    related_temple_ids: ['kashi-vishwanath', 'somnath', 'kedarnath'],
    seo_title_template: 'Guru Purnima 2026 Date, Guru Padapuja Vidhi & Vyasa Jayanti',
    seo_description_template: 'Complete Guru Purnima 2026 guide with exact Ashadha Purnima timing, Guru Padapuja vidhi, Guru Gita mantras, Vyasa Purnima significance & Chaturmas start.',
    puja_information: {
      overview: 'Disciples wash the feet of the Guru or his sacred Padukas with Gangajal and rose water, offer chandan, garlands, vastra, fruits, and seek blessings.',
      samagri: [
        { item: 'Guru Padukas (Wooden Sandals) or Image', quantity: '1 set', required: true, significance: 'Symbolizes the grounding grace of the master.' },
        { item: 'Gangajal, Milk, Rose Water for Padapuja', quantity: 'Standard', required: true, significance: 'Reverential foot bath.' },
        { item: 'White/Yellow Sandalwood Paste & Akshat', quantity: '50g', required: true, significance: 'Cooling anointment.' },
        { item: 'Yellow Flowers Garland & Guru Dakshina', quantity: '1 garland', required: true, significance: 'Token of gratitude.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Guru Dhyanam', mantra: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः॥', procedure: 'Sit before the Guru with palms joined and meditate on the Guru as the embodiment of the Trinity.' },
        { stepNumber: 2, title: 'Padapuja', mantra: 'अखण्डमण्डलाकारं व्याप्तं येन चराचरम्। तत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः॥', procedure: 'Wash feet/padukas with holy water, dry with clean cloth, apply chandan tilak and flower petals.' },
        { stepNumber: 3, title: 'Guru Gita Chanting & Aarti', mantra: 'ॐ नमो गुरुभ्यो गुरुपादुकाभ्यो नमः।', procedure: 'Recite selections from the Guru Gita, perform aarti, offer dakshina, and prostrate (Sashtanga Namaskar).' }
      ],
      aartiName: 'Guru Aarti & Guru Stotram',
      prasadDetails: 'Saffron kheer, Panchamrit, dry fruits, and seasonal fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pratah Guru Puja Muhurat',
      rulesDescription: 'Ashadha Purnima prevailing at sunrise is celebrated with day-long puja.',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Monks begin their 4-month stationary Chaturmas vows on this evening.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Many devotees fast till noon, then partake of Guru Prasadam.'
    },
    regional_variations: [
      {
        region: 'Varanasi & Rishikesh',
        customs: 'Ashrams along the Ganga are illuminated; thousands gather at dawn to take holy dip and attend Guru Darshan.',
        distinctiveNames: ['Vyasa Jayanti Mahotsav'],
        uniqueFoodsOrRituals: 'Maha Bhandara prasad.'
      }
    ],
    faqs: [
      { question: 'When is Guru Purnima 2026?', answer: 'In 2026, Guru Purnima falls on Wednesday, July 29, 2026, on Ashadha Shukla Purnima.' },
      { question: 'Why is it called Vyasa Purnima?', answer: 'Because it is the birth anniversary of Sage Veda Vyasa, the greatest teacher of Sanatana Dharma who organized the Vedic knowledge into comprehensive scriptures.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Uttara Khanda', quoteOrChapter: 'Shri Guru Gita' }
    ]
  },

  {
    id: 'tulsi-vivah',
    canonical_name: 'Tulsi Vivah (Devutthan Ekadashi & Prabodhini)',
    hindi_name: 'तुलसी विवाह (देवउठनी एकादशी, प्रबोधिनी व भीष्म पंचक)',
    gujarati_name: 'તુલસી વિવાહ (દેવઊઠી અગિયારસ - લગ્ન ઋતુ પ્રારંભ)',
    alternate_names: ['Devutthan Ekadashi', 'Prabodhini Ekadashi', 'Devutthana Dwadashi', 'Shaligram Tulsi Vivah'],
    regional_names: {
      hi: 'तुलसी विवाह / देवउठनी एकादशी',
      gu: 'તુલસી વિવાહ (દેવઊઠી અગિયારસ)',
      mr: 'तुळशी विवाह',
      te: 'తులసి కళ్యాణం (Tulasi Kalyanam)',
      ta: 'துளசி கல்யாணம் (Tulasi Kalyanam)'
    },
    sanskrit_name: 'तुलसीविवाहः (प्रबोधिनी)',
    transliteration: 'Tulasīvivāhaḥ',
    slug: 'tulsi-vivah',
    festival_type: 'vrat',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Mata Tulsi (Vrinda) & Bhagwan Shaligram (Vishnu)',
    deity_category: 'vishnu',
    lunar_month: 'kartik',
    paksha: 'shukla',
    tithi_name: 'Ekadashi to Dwadashi (एकादशी / द्वादशी)',
    tithi_number: 11,
    base_day_of_year: 324,
    calculation_method: 'Kartik Shukla Ekadashi / Dwadashi concluding Chaturmas',
    short_description: 'The celestial wedding of Mata Tulsi with Bhagwan Shaligram (Vishnu), waking the Lord from His 4-month yogic slumber and opening the annual Hindu wedding season.',
    full_overview: 'Tulsi Vivah marks the divine wedding ceremony of sacred Tulsi (holy basil, incarnation of Vrinda) with Bhagwan Shaligram (Vishnu). On Devutthan (Prabodhini) Ekadashi, Lord Vishnu awakens from His four-month cosmic slumber (Yoga Nidra) in Ksheerasagara that began on Devshayani Ekadashi. With His awakening, the sacred retreat of Chaturmas ends, and the auspicious Hindu marriage season (Shubh Vivah Muhurat) officially opens across India. The Tulsi pot is beautifully painted with rangoli, adorned like a Hindu bride with red chunri and jewelry, while a Shaligram stone or Krishna idol acts as the groom.',
    significance: 'Performing the Kanyadaan of Mata Tulsi is extolled in the Puranas as bestowing the unparalleled spiritual merit of performing a thousand horse-sacrifices (Ashwamedha Yajna) and ensuring eternal harmony in household relationships.',
    history_and_tradition: 'Narrated in the Padma Purana, Skanda Purana, and Shiva Purana (story of Vrinda and Jalandhara).',
    cultural_traditions: [
      'Decorating the Tulsi Vrindavan like a traditional wedding mandap with sugarcane stalks.',
      'Adorning the Tulsi plant with red bridal veil (Chunri), bangles, necklace, and vermilion.',
      'Holding the sacred wedding curtain (Antarpat) between Shaligram and Tulsi during Mangalashtak mantras.',
      'Lighting sugarcane bonfires, singing wedding songs, and bursting celebratory crackers.',
      'Cooking seasonal delicacies like sweet potato, amla (gooseberry), singhara, and sugarcane.'
    ],
    regions: ['Pan-India', 'Gujarat', 'Maharashtra', 'North India', 'Rajasthan', 'South India'],
    languages: ['Hindi', 'Gujarati', 'Marathi', 'Sanskrit', 'Telugu'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'kartik-festivals', 'vrat-festivals', 'vishnu-festivals'],
    related_festivals: ['diwali', 'kartik-purnima', 'dev-diwali', 'devshayani-ekadashi'],
    related_vrat: ['devutthan-ekadashi-vrat'],
    related_temple_ids: ['dwarkadhish', 'shrinathji', 'somnath'],
    seo_title_template: 'Tulsi Vivah 2026 Date, Vivah Muhurat, Puja Vidhi & Wedding Mantras',
    seo_description_template: 'Complete Tulsi Vivah 2026 guide with exact Devutthan Ekadashi Muhurat, Shaligram Tulsi wedding rituals, Kanyadaan vidhi, Mangalashtak & prasad.',
    puja_information: {
      overview: 'Conducted like an authentic Hindu wedding ceremony with bridal shringar, Mangalashtak recitation, Varmala exchange, and circumambulation.',
      samagri: [
        { item: 'Potted Tulsi Plant', quantity: '1 pot', required: true, significance: 'The divine bride.' },
        { item: 'Shaligram Shila or Krishna Murti', quantity: '1 pc', required: true, significance: 'The divine groom.' },
        { item: 'Sugarcane Stalks (Ganna)', quantity: '4 stalks', required: true, significance: 'Erected as the 4 pillars of the wedding mandap.' },
        { item: 'Red Bridal Chunri, Mangalsutra, Bangles, Sindoor', quantity: '1 set', required: true, significance: 'Bridal shringar for Tulsi.' },
        { item: 'Antarpat (White cloth with Swastika)', quantity: '1 pc', required: true, significance: 'Held between bride and groom during Mangalashtak.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Mandap & Shringar', mantra: 'ॐ तुलस्यै नमः।', procedure: 'Set up 4 sugarcane stalks over Tulsi pot, drape with red chunri, put bangles on branches, place Shaligram on right.' },
        { stepNumber: 2, title: 'Lord Vishnu Awakening (Devotthan)', mantra: 'उत्तिष्ठोत्तिष्ठ गोविन्द उत्तिष्ठ गरुड़ध्वज। उत्तिष्ठ कमलाकान्त त्रैलोक्यं मङ्गलं कुरु॥', procedure: 'Chant awakening shloka, ring brass bells and ghanta to gently awaken Vishnu from Yoga Nidra.' },
        { stepNumber: 3, title: 'Vivah Sanskar & Mangalashtak', mantra: 'तुलसी कल्याणि नमस्तुभ्यं हरिवल्लभे।', procedure: 'Recite Mangalashtak, tie sacred wedding knot (Gathbandhan) with cotton thread, throw akshat.' },
        { stepNumber: 4, title: 'Kanyadaan & Saptapadi', mantra: 'ॐ नमो भगवते वासुदेवाय।', procedure: 'Perform symbolic Kanyadaan with holy water, circumambulate four times, and distribute wedding prasad.' }
      ],
      aartiName: 'Tulsi Mata Aarti & Shaligram Aarti',
      prasadDetails: 'Sugarcane pieces, sweet potatoes, water chestnuts (singhara), amla, and kheer.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pradosh / Sayankal Tulsi Vivah Muhurat',
      rulesDescription: 'Performed on Kartik Shukla Ekadashi or Dwadashi during evening twilight.',
      calculationKey: 'pradosh',
      traditionalNotice: 'All auspicious wedding muhurats for humans open only after Tulsi Vivah is performed.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Upavas',
      paranaRules: 'Devutthan Ekadashi fast is broken next morning on Dwadashi after sunrise.'
    },
    regional_variations: [
      {
        region: 'Gujarat & Maharashtra',
        customs: 'Celebrated on Dwadashi evening with grandeur. Fireworks are ignited and wedding feasts with sugarcane and amla are shared.',
        distinctiveNames: ['Tulsi Vivah Gujarat', 'Tulsiche Lagna'],
        uniqueFoodsOrRituals: 'Sugarcane, Amla, Chivda, Puran Poli.'
      }
    ],
    faqs: [
      { question: 'When is Tulsi Vivah 2026?', answer: 'In 2026, Devutthan Ekadashi falls on Friday, November 20, 2026, and Tulsi Vivah is celebrated between November 20 and November 21, 2026.' },
      { question: 'Why does Tulsi marry Shaligram?', answer: 'According to the Padma Purana, Vrinda was a devoted queen whose husband Jalandhara was invincible due to her purity. When Vishnu took Jalandhara’s form to defeat the demon, Vrinda cursed Vishnu to become a stone (Shaligram). Vishnu, touched by her supreme devotion, granted that she would be reborn as the sacred Tulsi plant and that He would never accept any food offering without her, marrying her eternally every Kartik.' }
    ],
    references: [
      { title: 'Padma Purana', source: 'Uttara Khanda', quoteOrChapter: 'Story of Vrinda and Tulsi Vivah Mahatmya' }
    ]
  },

  {
    id: 'onam',
    canonical_name: 'Onam (Thiruvonam & Harvest Festival)',
    hindi_name: 'ओणम (तिरुवोणम, महाबली स्वागत व नौका दौड़)',
    gujarati_name: 'ઓણમ મહોત્સવ (રાજા બલિ સ્વાગત પર્વ)',
    alternate_names: ['Thiruvonam', 'Kerala Harvest Festival', 'Thiru Onam', 'Vallam Kali'],
    regional_names: {
      ml: 'ഓണം (തിരുവോണം - മഹാബലി)',
      ta: 'ஓணம் (Thiruvonam)',
      hi: 'ओणम',
      gu: 'ઓણમ'
    },
    sanskrit_name: 'श्रीमहाबलिप्रवेशोत्सवः (श्रोणोत्सवः)',
    transliteration: 'Oṇam (Thiruvōṇam)',
    slug: 'onam',
    festival_type: 'harvest',
    religion: 'hindu',
    sect: 'all',
    deity: 'King Mahabali & Lord Vamana (Avatar of Vishnu)',
    deity_category: 'vishnu',
    lunar_month: 'solar',
    paksha: 'solar',
    tithi_name: 'Shravana / Thiruvonam Asterism (ചിങ്ങം)',
    tithi_number: 1,
    base_day_of_year: 244,
    solar_rule: 'Chingam month during Thiruvonam Nakshatra',
    calculation_method: 'Malayalam solar month Chingam when Thiruvonam Nakshatra prevails',
    short_description: 'The premier harvest festival of Kerala celebrating the annual homecoming of beloved King Mahabali with flower carpets (Pookkalam) and the grand 26-dish Onasadya feast.',
    full_overview: 'Onam is the 10-day cultural and harvest festival of Kerala culminating on the auspicious day of Thiruvonam in the Malayalam month of Chingam. It commemorates the legendary golden age of righteous King Mahabali (Maveli), under whose egalitarian rule all citizens were equal, truthful, and prosperous without theft or sorrow. When Lord Vishnu manifested as Vamana to curb Mahabali’s cosmic dominion, the benevolent king offered his own head for Vamana’s third step. Granted a boon to visit his beloved subjects once every year, all Malayalis welcome their sovereign with magnificent floral carpets (Pookkalam), graceful Kaikottikali dances, thrilling snake boat races (Vallam Kali), and the traditional 26-dish feast served on banana leaves (Onasadya).',
    significance: 'Celebrates an egalitarian society devoid of social divides, deceit, and malice. Commemorates the famous Malayalam verse: "Maveli nadu vaneedum kalam, manushyarellarum onnupole" (When Mahabali ruled the land, all humans were equal).',
    history_and_tradition: 'Mentioned in the Bhagavata Purana (Canto 8, Vamana Charitra) and classical Sangam literature (Maduraikkanci).',
    cultural_traditions: [
      'Laying intricate circular floral carpets (Pookkalam) at courtyards from Atham till Thiruvonam.',
      'Grand 26-dish vegetarian banquet (Onasadya) served strictly on banana leaves.',
      'Snake Boat Races (Vallam Kali / Nehru Trophy) with synchronized rowing and Vanchipattu songs on backwaters.',
      'Pulikali (Tiger dance) and Kaikottikali (women’s circular clap dance around lamps).',
      'Wearing pristine white and gold handloom Kasavu sarees and Mundu.'
    ],
    regions: ['Kerala', 'Global Malayali Diaspora', 'Tamil Nadu (Nilgiris)'],
    languages: ['Malayalam', 'Sanskrit', 'English'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'harvest-festivals', 'vishnu-festivals'],
    related_festivals: ['vishu', 'makar-sankranti', 'pongal'],
    related_vrat: ['onam-celebration'],
    related_temple_ids: ['thrikkakara-vamana', 'padmanabhaswamy', 'guruvayur'],
    seo_title_template: 'Onam 2026 Date, Thiruvonam Timings, Pookkalam & Onasadya Dishes',
    seo_description_template: 'Complete Onam 2026 guide: 10 days from Atham to Thiruvonam, Pookkalam designs, 26 Onasadya dishes recipe, King Mahabali history & Vallam Kali boat race.',
    puja_information: {
      overview: 'Clay pyramid idols of Vamana and Mahabali (Onathappan) are installed on flower carpets, adorned with rice paste and worshipped with morning aarti.',
      samagri: [
        { item: 'Fresh Flowers (Thumba, Chemparathy, Chethi, Marigold)', quantity: 'Multiple baskets', required: true, significance: 'For the multi-layered Pookkalam.' },
        { item: 'Clay Pyramids (Onathappan / Thrikkakara Appan)', quantity: '4-5 pcs', required: true, significance: 'Represents Lord Vamana and King Mahabali.' },
        { item: 'Fresh Plantain / Banana Leaves', quantity: 'Sufficient', required: true, significance: 'Traditional tableware for Onasadya.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pookkalam Laying', mantra: 'ॐ नमो नारायणाय।', procedure: 'Create expanding concentric floral patterns from dawn.' },
        { stepNumber: 2, title: 'Onathappan Worship', mantra: 'ॐ वामनाय नमः।', procedure: 'Place clay pyramids in center of Pookkalam, anoint with rice batter, offer flowers and fruits.' },
        { stepNumber: 3, title: 'Onasadya Feast', mantra: 'अन्नं ब्रह्म रसं विष्णुर्भोक्ता देवो महेश्वरः।', procedure: 'Serve traditional 26-dish satvik feast with payasam to family and guests.' }
      ],
      aartiName: 'Vamana Stuti & Onam Songs',
      prasadDetails: 'Onasadya (Avial, Sambar, Thoran, Olan, Kalan, Ada Pradhaman Payasam, Sarkara Upperi).'
    },
    muhurat_information: {
      primaryMuhuratName: 'Thiruvonam Nakshatra Window',
      rulesDescription: 'Celebrated when Thiruvonam (Shravana) Nakshatra prevails in Chingam month.',
      calculationKey: 'standard',
      traditionalNotice: 'Thrikkakara Temple in Kochi is the epicentre of Onam celebrations.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Grand celebratory feast day; eating Onasadya with friends and strangers is customary.'
    },
    regional_variations: [
      {
        region: 'Kerala',
        customs: 'The state’s national festival observed by all communities across religions with complete cultural unity.',
        distinctiveNames: ['Thiruvonam', 'Kerala National Festival'],
        uniqueFoodsOrRituals: 'Onasadya, Ada Pradhaman, Palada Payasam, Banana chips.'
      }
    ],
    faqs: [
      { question: 'When is Onam 2026?', answer: 'In 2026, Thiruvonam (the principal day of Onam) falls on Wednesday, August 26, 2026.' },
      { question: 'What are the essential dishes of an authentic Onasadya?', answer: 'A traditional Onasadya features over 24-26 dishes served on a banana leaf in precise order: Rice, Sambar, Parippu with ghee, Avial, Thoran, Olan, Kalan, Erissery, Pachadi, Kichadi, Rasam, Moru, Inji Puli, Pappadam, Sharkara Upperi, Banana chips, and Ada Pradhaman Payasam.' }
    ],
    references: [
      { title: 'Srimad Bhagavatam', source: 'Canto 8, Chapters 18-23', quoteOrChapter: 'Vamana Avatar and King Bali’s Surrender' }
    ]
  },

  {
    id: 'sharad-purnima',
    canonical_name: 'Sharad Purnima (Kojagari Lakshmi Puja & Raas Purnima)',
    hindi_name: 'शरद पूर्णिमा (कोजागरी लक्ष्मी पूजा, अमृत खीर व महारास)',
    gujarati_name: 'શરદ પૂનમ (દૂધ-પૌંઆ ઉત્સવ અને ગરબા)',
    alternate_names: ['Kojagari Purnima', 'Kumar Purnima', 'Raas Purnima', 'Kaumudi Utsav'],
    regional_names: {
      hi: 'शरद पूर्णिमा / कोजागरी',
      gu: 'શરદ પૂનમ (દૂધ પૌંઆ)',
      bn: 'কোজাগরী লক্ষ্মীপূজা (Kojagari Lakshmi Puja)',
      or: 'କୁମାର ପୂର୍ଣ୍ଣିମା (Kumar Purnima)',
      mr: 'कोजागरी पौर्णिमा'
    },
    sanskrit_name: 'शरत्पूर्णिमा (कोजागरी)',
    transliteration: 'Śaratpūrṇimā',
    slug: 'sharad-purnima',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Goddess Mahalakshmi, Chandra Dev & Lord Krishna (Maha Raas)',
    deity_category: 'lakshmi',
    lunar_month: 'ashwin',
    paksha: 'shukla',
    tithi_name: 'Purnima (पूर्णिमा)',
    tithi_number: 15,
    base_day_of_year: 298,
    calculation_method: 'Ashwin Shukla Purnima prevailing during Nishita Kaal (midnight)',
    short_description: 'The night of 16 celestial rays where nectar rains from the full moon; pots of milk-rice kheer are placed on rooftops under moonlight, and Mahalakshmi asks "Ko Jagarti?" (Who is awake?).',
    full_overview: 'Sharad Purnima occurs on the luminous autumn full moon of Ashwin, when the Moon approaches closest to Earth and shines in its full 16 celestial digits (Shodasha Kala). It is believed that rays of divine nectar (Amrita) cascade from the Moon on this night. Devotees prepare sweet milk-rice Kheer or flattened rice in milk (Dudh-Poha) and place the vessels under the direct moonlight overnight so the food absorbs cooling medicinal lunar rays. At midnight, Goddess Mahalakshmi traverses the earth querying "Ko Jagarti?" ("Who is awake?"), showering boundless wealth and health upon those keeping spiritual vigil. In Vrindavan, this is celebrated as Raas Purnima, commemorating the transcendental Maha Raas of Krishna and the Gopis.',
    significance: 'Balances Pitta dosha aggravated during autumn. The consumed moonlight-infused kheer cures respiratory ailments, enhances eyesight, and bestows longevity and peace of mind.',
    history_and_tradition: 'Expounded in the Srimad Bhagavatam (Raas Panchadhyayi), Skanda Purana, and Sanatkumara Samhita.',
    cultural_traditions: [
      'Placing clay or silver vessels filled with Kheer / Dudh-Poha under open moonlight on terraces.',
      'Keeping midnight vigil chanting the Sri Suktam and Mahalakshmi Stotram.',
      'In Bengal, performing grand Kojagari Lakshmi Puja with alpona floor art.',
      'In Gujarat, singing Garba under the moonlit sky and eating Dudh-Poha (Doodh Pauva).',
      'In Odisha, celebrated as Kumar Purnima by unmarried youth worshipping the Moon.'
    ],
    regions: ['Pan-India', 'Gujarat', 'Bengal', 'Odisha', 'Maharashtra', 'Mathura-Vrindavan'],
    languages: ['Hindi', 'Gujarati', 'Bengali', 'Odia', 'Marathi', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'ashwin-festivals', 'lakshmi-festivals', 'krishna-festivals'],
    related_festivals: ['navratri-shardiya', 'diwali', 'karwa-chauth'],
    related_vrat: ['kojagari-vrat', 'purnima-vrat'],
    related_temple_ids: ['bankey-bihari', 'mahalakshmi-mumbai', 'somnath'],
    seo_title_template: 'Sharad Purnima 2026 Date, Kheer Moonlight Muhurat & Kojagari Puja',
    seo_description_template: 'Complete Sharad Purnima 2026 guide with exact full moon timing, Kojagari Lakshmi Puja Nishita Kaal, Amrit Kheer rooftop procedure, Dudh Poha & Maha Raas history.',
    puja_information: {
      overview: 'Conducted at night under open moonlight with invocation of Chandra Dev and Mahalakshmi, placing kheer under moonbeams.',
      samagri: [
        { item: 'Rice-Milk Kheer or Dudh-Poha', quantity: '1 pot', required: true, significance: 'Covered with thin muslin to absorb moonlight rays.' },
        { item: 'Silver or Brass Bowl', quantity: '1 pc', required: true, significance: 'Cools lunar energy.' },
        { item: 'White Flowers, Chandan & Akshat', quantity: 'Standard', required: true, significance: 'Offerings to Chandra Dev and Lakshmi.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Kheer Preparation & Placement', mantra: 'ॐ सोमाय नमः।', procedure: 'Cook rice kheer with cow milk, sugar, cardamom, and saffron; place on rooftop under direct moonlight covered with fine mesh.' },
        { stepNumber: 2, title: 'Kojagari Lakshmi & Chandra Puja', mantra: 'ॐ श्रीं ह्रीं क्लीं त्रिभुवनमहालक्ष्म्यै अस्माकं दारिद्र्यनाशाय प्रचुरधनदेहि देहि क्लीं ह्रीं श्रीं ॐ॥', procedure: 'At midnight, chant Sri Suktam and offer white lotus flowers and chandan to Mahalakshmi and the Moon.' },
        { stepNumber: 3, title: 'Prasad Sevan', mantra: 'अमृताभिषेकोऽस्तु।', procedure: 'Consume the moon-blessed kheer next morning on empty stomach with family.' }
      ],
      aartiName: 'Lakshmi Aarti & Chandra Aarti',
      prasadDetails: 'Moonlight-infused Kheer, Dudh-Poha (Doodh Pauva), Makhana, and sweets.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Kojagari Nishita Kaal & Moonrise Muhurat',
      rulesDescription: 'Ashwin Purnima prevailing at midnight (Nishita Kaal) is celebrated.',
      calculationKey: 'nishita',
      traditionalNotice: 'Vessels containing kheer must be kept under open moonlight for at least 3-4 hours after 10:00 PM.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Devotees fast until evening moonrise, partake of light phalahar, and eat the Amrit kheer after midnight or next morning.'
    },
    regional_variations: [
      {
        region: 'Gujarat',
        customs: 'Known as Sharad Poonam. Families gather on terraces dressed in pristine white clothes, dance Garba beneath the moonlight, and eat chilled Doodh-Pauva (sweetened milk with flattened rice).',
        distinctiveNames: ['Sharad Poonam', 'Doodh Pauva Utsav'],
        uniqueFoodsOrRituals: 'Doodh Pauva (milk poha), Garba on terrace.'
      },
      {
        region: 'Bengal',
        customs: 'Celebrated as Kojagari Lakshmi Puja. Idols of Lakshmi are worshipped in homes with intricate white rice flour Alpana depicting Lakshmi’s lotus footprints.',
        distinctiveNames: ['Kojagari Lokkhi Pujo'],
        uniqueFoodsOrRituals: 'Khichuri, Naru (coconut laddoos), Taaler Bora.'
      }
    ],
    faqs: [
      { question: 'When is Sharad Purnima 2026?', answer: 'In 2026, Sharad Purnima falls on Sunday, October 25, 2026, on Ashwin Shukla Purnima.' },
      { question: 'Why is Kheer placed under the Moon on Sharad Purnima?', answer: 'On Sharad Purnima, the Moon is nearest to Earth and radiates positive therapeutic vibrations. Saffron milk-rice kheer absorbs these cool, soothing lunar rays, balancing autumn bile (Pitta) and promoting wellness.' }
    ],
    references: [
      { title: 'Srimad Bhagavatam', source: 'Canto 10, Chapters 29-33', quoteOrChapter: 'The Rasa Lila on Sharad Purnima' },
      { title: 'Sanatkumara Samhita', source: 'Kojagari Vrata', quoteOrChapter: 'Lakshmi Sanchara at Midnight' }
    ]
  },

  {
    id: 'kartik-purnima',
    canonical_name: 'Kartik Purnima (Dev Diwali & Tripurari Purnima)',
    hindi_name: 'कार्तिक पूर्णिमा (देव दीपावली, त्रिपुरारी पूर्णिमा व गंगा स्नान)',
    gujarati_name: 'દેવ દિવાળી (ત્રિપુરારી પૂનમ અને સોમનાથ મેળો)',
    alternate_names: ['Dev Deepavali', 'Tripurari Purnima', 'Tripurotsav', 'Boita Bandana', 'Guru Nanak Jayanti'],
    regional_names: {
      hi: 'देव दीपावली / कार्तिक पूर्णिमा',
      gu: 'દેવ દિવાળી (Dev Diwali)',
      bn: 'রাস পূর্ণিমা / দেব দীপাবলি',
      or: 'ବୋଇତ ବନ୍ଦାଣ (Boita Bandana)',
      mr: 'त्रिपुरारी पौर्णिमा',
      ta: 'கார்த்திகை தீபம் (Karthigai Deepam)'
    },
    sanskrit_name: 'कार्तिकपूर्णिमा (त्रिपुरारिपूर्णिमा)',
    transliteration: 'Kārtikapūrṇimā',
    slug: 'kartik-purnima',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Shiva (Tripurantaka), Lord Vishnu (Matsya Avatar) & Mata Ganga',
    deity_category: 'shiva',
    lunar_month: 'kartik',
    paksha: 'shukla',
    tithi_name: 'Purnima (पूर्णिमा)',
    tithi_number: 15,
    base_day_of_year: 328,
    calculation_method: 'Kartik Shukla Purnima prevailing during Pradosh Kaal (Dev Diwali in Varanasi)',
    short_description: 'The gods’ Diwali celebrated when Lord Shiva annihilated the demon Tripurasura and Vishnu incarnated as Matsya; Varanasi ghats are illuminated with over one million oil lamps.',
    full_overview: 'Kartik Purnima, also celebrated as Dev Diwali (the Diwali of the Gods), is one of the most visually breathtaking and spiritually elevated nights in Sanatana Dharma. Legend recounts that on this full moon, Lord Shiva as Tripurantaka slew the three invulnerable flying demonic cities of Tripurasura with a single celestial arrow. In jubilation, the Devas descended from the heavens onto the sacred Ghats of Varanasi (Kashi) to bathe in the Ganga and illuminate the riverbanks with millions of glowing diyas. Concurrently, it marks the incarnation of Bhagwan Vishnu as the Matsya (fish) avatar to save the Vedas and Manu from the cosmic deluge. In Odisha, people celebrate Boita Bandana, floating miniature decorative boats with lamps.',
    significance: 'Bathing in a sacred river on Kartik Purnima (Kartik Snan) and lighting lamps (Deepdaan) at dusk equals the merit of thousands of royal sacrifices. It also marks the appearance anniversary of Guru Nanak Dev Ji (Prakash Parv).',
    history_and_tradition: 'Expounded in the Shiva Purana (Rudra Samhita, Yuddha Khanda), Matsya Purana, and Skanda Purana.',
    cultural_traditions: [
      'Dev Diwali in Varanasi: Over 1.5 million earthen clay diyas illuminating all 84 ghats from Assi to Rajghat.',
      'Holy river dips (Kartik Snan) at dawn in Haridwar, Prayagraj, Pushkar, and Varanasi.',
      'Boita Bandana in Odisha: Floating miniature bark or paper boats with betel leaves, lamps, and coins in water bodies at sunrise.',
      'Pushkar Camel Fair and sacred dip in Pushkar lake.',
      'Lighting 365 wicks (representing the full solar year) in temples and home altars.'
    ],
    regions: ['Varanasi (Kashi)', 'Pan-India', 'Gujarat (Somnath)', 'Odisha', 'Rajasthan (Pushkar)', 'Global'],
    languages: ['Hindi', 'Sanskrit', 'Gujarati', 'Odia', 'Marathi', 'Punjabi'],
    hero_image_theme: 'amber',
    topical_collections: ['top-20', 'top-25', 'popular', 'kartik-festivals', 'shiva-festivals', 'diwali-cluster'],
    related_festivals: ['diwali', 'tulsi-vivah', 'chhat-puja', 'boita-bandana'],
    related_vrat: ['kartik-snan-vrat', 'purnima-vrat'],
    related_temple_ids: ['kashi-vishwanath', 'somnath', 'golden-temple'],
    seo_title_template: 'Kartik Purnima 2026 Date, Dev Diwali Varanasi Muhurat & Ganga Snan',
    seo_description_template: 'Complete Kartik Purnima 2026 guide with exact Dev Diwali Pradosh Kaal Muhurat in Varanasi, 365 wicks Deepdaan, Tripurari Shiva story, Matsya Jayanti & Boita Bandana.',
    puja_information: {
      overview: 'Early dawn bath in holy water, followed by lighting clay lamps at temples and water bodies at twilight (Deep Daan).',
      samagri: [
        { item: 'Clay Diyas with Sesame or Ghee', quantity: '21 to 51 pcs', required: true, significance: 'Illumination of twilight.' },
        { item: '365 Wicks (Chausath Bati or 365 soot)', quantity: '1 set', required: false, significance: 'Compensates for any missed daily aartis throughout the year.' },
        { item: 'Miniature Floating Boat (Odisha tradition)', quantity: '1 pc', required: false, significance: 'For Boita Bandana at sunrise.' },
        { item: 'Bilva Leaves & Ganga Water', quantity: 'Standard', required: true, significance: 'Offerings to Lord Tripurantaka Shiva.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Ganga Snan', mantra: 'ॐ नमो भगवते महामत्स्याय।', procedure: 'Take dawn bath in river or with Gangajal, offer arghya to Surya, and worship Matsya avatar.' },
        { stepNumber: 2, title: 'Tripurantaka Shiva Aradhana', mantra: 'ॐ नमः शिवाय। त्रिनेत्राय त्रिपुरान्तकाय नमः।', procedure: 'Offer bilva leaves, white chandan, and panchamrit to the Shiva Linga.' },
        { stepNumber: 3, title: 'Maha Deepdaan at Dusk (Pradosh Kaal)', mantra: 'कीटाः पतङ्गा मशकाश्च वृक्षा जले स्थले ये विचरन्ति जीवाः। दृष्ट्वा प्रदीपं न च जन्मभागिनो भवन्ति ते मुक्तिजुषः सुमुक्ताः॥', procedure: 'Light lamps at river ghats, temples, and tulsi plant at twilight for universal liberation.' }
      ],
      aartiName: 'Shiva Aarti & Ganga Aarti',
      prasadDetails: 'Kheer, Malpua, Panchamrit, and seasonal winter fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Dev Diwali Pradosh Kaal Deepdaan Muhurat',
      rulesDescription: 'Dev Diwali is observed during Pradosh Kaal on Kartik Purnima when twilight illuminates the riverbanks.',
      calculationKey: 'pradosh',
      traditionalNotice: 'If Purnima covers two twilights, the day when Purnima touches Pradosh Kaal is observed in Varanasi.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Upavas',
      paranaRules: 'Devotees fast until evening Deepdaan and aarti, after which satvik food is consumed.'
    },
    regional_variations: [
      {
        region: 'Varanasi (Kashi)',
        customs: 'The spiritual spectacle of the world. All 84 ghats are illuminated by over a million lamps. Grand Maha Aartis with fire torches at Dashashwamedh and Assi Ghats draw millions of travelers.',
        distinctiveNames: ['Varanasi Dev Deepavali', 'Kashi Mahotsav'],
        uniqueFoodsOrRituals: 'Maha Ganga Aarti, Millions of floating diyas.'
      },
      {
        region: 'Odisha',
        customs: 'Celebrated as Boita Bandana (boat worship). In memory of ancient Odia maritime traders (Sadhabas) who sailed to Bali, Java, and Sumatra, people float miniature boats with lamps and betel leaves at dawn.',
        distinctiveNames: ['Boita Bandana', 'Bali Yatra'],
        uniqueFoodsOrRituals: 'Floating toy boats, Habisha dalma.'
      }
    ],
    faqs: [
      { question: 'When is Kartik Purnima and Dev Diwali 2026?', answer: 'In 2026, Kartik Purnima and Dev Diwali will be celebrated on Tuesday, November 24, 2026, with the Pradosh Kaal Deepdaan window from 05:22 PM to 07:48 PM.' },
      { question: 'Why is it called Dev Diwali?', answer: 'Because the Devas (gods) themselves descended to Earth to celebrate Lord Shiva’s triumph over Tripurasura and celebrate their own Diwali on the ghats of Kashi.' }
    ],
    references: [
      { title: 'Shiva Purana', source: 'Rudra Samhita', quoteOrChapter: 'Tripurasura Samhara' },
      { title: 'Matsya Purana', source: 'Matsyavatar Katha', quoteOrChapter: 'Descent of the Fish Avatar' }
    ]
  }
];
