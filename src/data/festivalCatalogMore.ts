import { FestivalDefinition } from './festivalDatabase';

export const moreFestivalsList: FestivalDefinition[] = [
  {
    id: 'dhanteras',
    canonical_name: 'Dhanteras (Dhanvantari Trayodashi & Yamadeepdaan)',
    hindi_name: 'धनतेरस (धन्वंतरि त्रयोदशी व यमदीपदान)',
    gujarati_name: 'ધનતેરસ (ધન લક્ષ્મી પૂજન અને સોના-ચાંદી ખરીદી)',
    alternate_names: ['Dhantrayodashi', 'Dhanvantari Jayanti', 'Yamadeepdaan', 'Dhan Teras'],
    regional_names: {
      hi: 'धनतेरस / धनत्रयोदशी',
      gu: 'ધનતેરસ (લક્ષ્મી પૂજન)',
      mr: 'धनत्रयोदशी / यमदीपदान',
      ta: 'தன்வந்திரி ஜெயந்தி (Dhanvantari Jayanthi)',
      te: 'ధన త్రయోదశి (Dhana Trayodashi)',
      bn: 'ধানতেরাস'
    },
    sanskrit_name: 'धनत्रयोदशी (धन्वन्तरिजन्मोत्सवः)',
    transliteration: 'Dhanatrayodaśī',
    slug: 'dhanteras',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Bhagwan Dhanvantari (Ayurveda), Goddess Lakshmi, Lord Kubera & Yamaraj',
    deity_category: 'lakshmi',
    lunar_month: 'kartik',
    paksha: 'krishna',
    tithi_name: 'Trayodashi (त्रयोदशी)',
    tithi_number: 13,
    base_day_of_year: 310,
    calculation_method: 'Kartik Krishna Trayodashi prevailing during Pradosh Kaal',
    short_description: 'The auspicious first day of the 5-day Diwali celebration worshipping Bhagwan Dhanvantari, purchasing brass/silver/gold utensils, and lighting Yamadeepdaan.',
    full_overview: 'Dhanteras marks the glorious advent of Bhagwan Dhanvantari, the divine physician and avatar of Vishnu, who emerged from the celestial churning of the cosmic ocean (Samudra Manthan) carrying a golden pot of Amrita (immortal nectar) and the sacred science of Ayurveda. Concurrently, Goddess Mahalakshmi and Lord Kubera (treasurer of the gods) are invoked for wholesome health, righteous wealth, and longevity. At twilight, an earthen four-wick lamp is lit facing South outside the threshold for Yamadeepdaan to ward off untimely demise (Apamrityu).',
    significance: 'Preaches that the supreme wealth is sound physical and spiritual health ("Arogyam Parama Bhagyam"). Purchasing gold, silver, brass, copper utensils, and coriander seeds (Dhaniya) symbolizes inviting unblemished Lakshmi into the household.',
    history_and_tradition: 'Mentioned in the Bhagavata Purana, Skanda Purana, and Agni Purana. The story of King Hima’s 16-year-old son, whose premature death predicted on this night was averted by his astute young bride who illuminated the threshold with gold ornaments and glowing lamps, blinding the serpent of Death (Yama).',
    cultural_traditions: [
      'Purchasing precious metals (gold, silver, brass, copper) or new broomsticks (Jhadu).',
      'Buying whole dry coriander seeds (Dhaniya ke beej) to offer to Lakshmi and sow later.',
      'Lighting a 4-wick mustard-oil lamp outside the main gate facing South for Yamadeepdaan.',
      'Ayurveda practitioners across India celebrating National Ayurveda Day.',
      'Cleaning the home and adorning doorsteps with Lakshmi footprints and rangoli.'
    ],
    regions: ['Pan-India', 'Gujarat', 'Maharashtra', 'North India', 'Rajasthan', 'Global'],
    languages: ['Hindi', 'Gujarati', 'Marathi', 'Sanskrit', 'Telugu'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'kartik-festivals', 'diwali-cluster', 'lakshmi-festivals'],
    related_festivals: ['diwali', 'naraka-chaturdashi', 'govardhan-puja', 'bhai-dooj'],
    related_vrat: ['dhanteras-kubera-vrat', 'pradosh-vrat'],
    related_temple_ids: ['mahalakshmi-mumbai', 'somnath', 'dwarkadhish'],
    seo_title_template: 'Dhanteras 2026 Date, Gold Buying Muhurat, Kubera Puja & Yamadeepdaan',
    seo_description_template: 'Complete Dhanteras 2026 guide with exact Pradosh Kaal Muhurat, Gold & Utensils purchase timings, Dhanvantari Puja Vidhi, Kubera Mantra & Yamadeepdaan South-facing lamp procedure.',
    puja_information: {
      overview: 'Conducted during Pradosh Kaal with invocation of Dhanvantari, Mahalakshmi, Ganesha, and Kubera, followed by Yamadeepdaan at dusk.',
      samagri: [
        { item: 'Idol/Photo of Dhanvantari & Kubera', quantity: '1 set', required: true, significance: 'Providers of health and prosperity.' },
        { item: 'Newly purchased utensil or gold/silver coin', quantity: '1 pc', required: true, significance: 'Sanctified with chandan, akshat, and flowers.' },
        { item: 'Coriander Seeds (Khada Dhaniya)', quantity: '100g', required: true, significance: 'Ancient symbol of agricultural and domestic wealth.' },
        { item: 'Four-wick large clay lamp for Yamadeepdaan', quantity: '1 pc', required: true, significance: 'Lit facing South with mustard oil.' },
        { item: 'Ghee, Cotton wicks, Flowers, Sweets', quantity: 'Standard', required: true, significance: 'For the primary altar puja.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Dhanvantari Dhyan & Avahana', mantra: 'ॐ नमो भगवते महासुदर्शनाय वासुदेवाय धन्वन्तरये अमृतकलशहस्ताय सर्वभयविनाशाय सर्वरोगनिवारणाय त्रिलोकपतये नमः॥', procedure: 'Light incense and lamps, offer sandalwood, tulsi, and panchamrit to Bhagwan Dhanvantari.' },
        { stepNumber: 2, title: 'Kubera & Lakshmi Puja', mantra: 'ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा॥', procedure: 'Worship treasury, vault, and newly bought items with roli, akshat, and dry coriander.' },
        { stepNumber: 3, title: 'Yamadeepdaan (South-facing Lamp)', mantra: 'मृत्युना पाशदण्डाभ्यां कालेन च मया सह। त्रयोदश्यां दीपदानात्सूर्यजः प्रीयतां मम॥', procedure: 'At twilight, place the 4-wick lamp filled with mustard oil outside the house facing South.' }
      ],
      aartiName: 'Dhanvantari Aarti & Kubera Aarti',
      prasadDetails: 'Dry coriander powder with jaggery (Dhaniya Prasad), Kheer, Batashe, and seasonal fruits.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pradosh Kaal Dhanteras Puja & Buying Muhurat',
      rulesDescription: 'Trayodashi must prevail during Pradosh Kaal after sunset for the most potent benefits of Dhanvantari invocation and buying auspicious metals.',
      calculationKey: 'pradosh',
      traditionalNotice: 'Purchasing glass, iron, or sharp steel instruments is traditionally avoided on Dhanteras.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Normal festive satvik meals are consumed after performing the evening Pradosh puja.',
      allowedFoods: ['All satvik festive foods', 'Dhaniya prasad', 'Sweets'],
      prohibitedFoods: ['Non-vegetarian food', 'Alcohol', 'Stale food']
    },
    regional_variations: [
      {
        region: 'Gujarat',
        customs: 'Considered the premier day for purchasing silver and gold Lakshmi-Ganesha coins and sacred utensils. Businessmen thoroughly clean their offices and decorate them with fresh marigold torans.',
        distinctiveNames: ['Dhanteras Gujarat'],
        uniqueFoodsOrRituals: 'Kansar, Dhaniya-Jaggery prasad.'
      },
      {
        region: 'Maharashtra',
        customs: 'Known as Dhantrayodashi. Devotees offer lightly pounded coriander seeds mixed with jaggery (Dhane-Gool) as naivedya to signify good health.',
        distinctiveNames: ['Dhantrayodashi Faral'],
        uniqueFoodsOrRituals: 'Dhane-Gool prasad, Karanji.'
      }
    ],
    faqs: [
      { question: 'When is Dhanteras 2026?', answer: 'In 2026, Dhanteras falls on Friday, November 6, 2026, on Kartik Krishna Trayodashi with Pradosh Kaal in the evening.' },
      { question: 'What should be bought on Dhanteras?', answer: 'Traditional shastras recommend buying brass or copper utensils, silver coins, gold jewelry, clay Lakshmi-Ganesha idols, whole coriander seeds, and a new broom (which symbolizes sweeping poverty out of the house).' },
      { question: 'Why is Yamadeepdaan kept facing South?', answer: 'Yamaraj is the guardian of the Southern celestial quarter (Dakshina Disha). Lighting a dedicated four-wick lamp outside the threshold facing South appeases Yamaraj and prevents untimely demise (Apamrityu) of family members.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Kartika Masa Mahatmya', quoteOrChapter: 'Dhanatrayodashi Yamadeepdaan Vidhi' },
      { title: 'Bhavishya Purana', source: 'Uttara Parva', quoteOrChapter: 'Kubera Upasana on Trayodashi' }
    ]
  },

  {
    id: 'naraka-chaturdashi',
    canonical_name: 'Naraka Chaturdashi (Chhoti Diwali & Kali Chaudas)',
    hindi_name: 'नरक चतुर्दशी (रूप चौदस, काली चौदस व छोटी दीवाली)',
    gujarati_name: 'કાળી ચૌદશ (રૂપ ચતુર્દશી - ભૈરવ પૂજન)',
    alternate_names: ['Kali Chaudas', 'Roop Chaturdashi', 'Chhoti Diwali', 'Bhoot Chaturdashi', 'Deepavali Snan'],
    regional_names: {
      hi: 'नरक चतुर्दशी / छोटी दीवाली',
      gu: 'કાળી ચૌદશ (તેલ સ્નાન / વડા પૂજન)',
      mr: 'नरक चतुर्दशी (अभ्यंगस्नान)',
      ta: 'தீபாவளி கங்கா ஸ்நானம் (Ganga Snanam)',
      te: 'నరక చతుర్దశి (Naraka Chaturdashi)',
      bn: 'ভূত চতুর্দশী (Bhoot Chaturdashi)'
    },
    sanskrit_name: 'नरकचतुर्दशी (रूपचतुर्दशी)',
    transliteration: 'Narakacaturdaśī',
    slug: 'naraka-chaturdashi',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Krishna, Mata Satyabhama, Mahakali & Lord Yamaraj',
    deity_category: 'krishna',
    lunar_month: 'kartik',
    paksha: 'krishna',
    tithi_name: 'Chaturdashi (चतुर्दशी)',
    tithi_number: 14,
    base_day_of_year: 311,
    calculation_method: 'Kartik Krishna Chaturdashi prevailing during pre-dawn Abhyanga Snan time',
    short_description: 'The second day of Diwali celebrating Lord Krishna and Satyabhama’s annihilation of tyrant Narakasura, pre-dawn holy herbal bath, and Kali Chaudas.',
    full_overview: 'Naraka Chaturdashi commemorates the glorious day when Bhagwan Shri Krishna and His consort Satyabhama vanquished the tyrant demon Narakasura of Pragjyotishpura, liberating 16,100 captive celestial maidens. Before expiring, Narakasura pleaded that anyone taking an auspicious pre-dawn oil bath (Abhyanga Snan) on this day would not suffer the torments of Naraka (hell). In South India, this is the principal day of Deepavali with sunrise oil baths; in Gujarat and Bengal, the midnight is observed as Kali Chaudas and Bhoot Chaturdashi with 14 earthen lamps (Choddo Saak).',
    significance: 'Symbolizes washing away physical and mental impurities, laziness, and bad habits through the sacred sesame oil bath, and dispelling dark negative energies through the worship of Mahakali and Lord Krishna.',
    history_and_tradition: 'Expounded in the Srimad Bhagavatam (Canto 10) and Vishnu Purana. In Gujarat, Kali Chaudas is considered essential for propitiating protective deities (Kuldevi, Bhairava, Hanumanji) and warding off occult negativities.',
    cultural_traditions: [
      'Pre-dawn Abhyanga Snan using warm sesame oil and fragrant Ayurvedic Ubtan.',
      'In Bengal, eating 14 leafy greens (Choddo Saak) and lighting 14 diyas (Choddo Pradip).',
      'In Gujarat, frying savory urad dal vadas and offering them at crossroads or temples on Kali Chaudas.',
      'Lighting rows of lamps inside and around the home at twilight (Chhoti Diwali).',
      'South Indians bathing before dawn and consuming herbal Deepavali Marundu.'
    ],
    regions: ['Pan-India', 'Maharashtra', 'Gujarat', 'Tamil Nadu', 'Bengal', 'North India'],
    languages: ['Hindi', 'Gujarati', 'Marathi', 'Tamil', 'Telugu', 'Bengali'],
    hero_image_theme: 'orange',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'kartik-festivals', 'diwali-cluster'],
    related_festivals: ['dhanteras', 'diwali', 'govardhan-puja', 'bhai-dooj'],
    related_vrat: ['abhyanga-snan-vrat'],
    related_temple_ids: ['dwarkadhish', 'kalighat', 'mahalakshmi-mumbai'],
    seo_title_template: 'Naraka Chaturdashi 2026 Date, Abhyanga Snan Muhurat & Kali Chaudas Vidhi',
    seo_description_template: 'Complete Naraka Chaturdashi 2026 guide with exact Abhyanga Snan pre-dawn timing, Chhoti Diwali diyas, Gujarat Kali Chaudas rituals, Krishna Narakasura story & Choddo Pradip.',
    puja_information: {
      overview: 'Pre-dawn bath with sesame oil and ubtan, followed by applying new clothes, lighting lamps, and offering prayers to Lord Krishna and Mahakali.',
      samagri: [
        { item: 'Sesame (Til) Oil', quantity: '200ml', required: true, significance: 'Infused with the essence of Lakshmi on this morning.' },
        { item: 'Ubtan (Gram flour, turmeric, sandalwood, rose water)', quantity: '100g', required: true, significance: 'Herbal cleanser representing renewal.' },
        { item: '14 Clay Lamps (Chhoti Diwali Diyas)', quantity: '14 pcs', required: true, significance: 'Disperses ignorance and hellish realms.' },
        { item: 'Urad Dal Vadas (Gujarat tradition)', quantity: '1 bowl', required: false, significance: 'Offered during Kali Chaudas.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pre-Dawn Abhyanga Snan', mantra: 'ॐ अपामार्गप्रभावेण पापं मे नश्यतु प्रभो।', procedure: 'Massage body with warm sesame oil and herbal ubtan, bathe before sunrise invoking Mother Ganga.' },
        { stepNumber: 2, title: 'Krishna & Mahakali Smaran', mantra: 'ॐ क्लीं कृष्णाय गोविंदाय गोपीजनवल्लभाय नमः। ॐ क्रीं कालिकायै नमः॥', procedure: 'Light incense and lamps, offer red flowers and sweets to Krishna and Kali.' },
        { stepNumber: 3, title: 'Chhoti Diwali Deepotsav', mantra: 'दीपज्योतिर्नमोऽस्तु ते।', procedure: 'Light 14 clay diyas in evening at entrance, tulsi plant, water tank, and corners.' }
      ],
      aartiName: 'Shri Krishna Aarti & Kali Mata Aarti',
      prasadDetails: 'Deepavali sweets, Urad vadas, Kheer, and Poha.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Abhyanga Snan Pre-Dawn Muhurat',
      rulesDescription: 'Abhyanga Snan must be performed during moonlit dawn (Arunodaya Kaal) before sunrise while Chaturdashi Tithi is active.',
      calculationKey: 'standard',
      traditionalNotice: 'Shastras state that Goddess Lakshmi resides in sesame oil and Ganga resides in all water during the Arunodaya period of Naraka Chaturdashi.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Festive day; early morning bath is followed by joyful feasting with family.'
    },
    regional_variations: [
      {
        region: 'Gujarat',
        customs: 'Known as Kali Chaudas. Dedicated to warding off evil spirits and fear by chanting Hanuman Chalisa and offering urad dal fritters (vadas) to protective Bhairava and Hanuman shrines.',
        distinctiveNames: ['Kali Chaudas', 'Vada Chaudas'],
        uniqueFoodsOrRituals: 'Urad dal vadas, fried snacks.'
      },
      {
        region: 'Tamil Nadu & South India',
        customs: 'This is the main day of Deepavali. Firecrackers are burst at 4:30 AM after Ganga Snanam, and families feast on idli, sambar, and sweet delicacies.',
        distinctiveNames: ['Deepavali Pandigai'],
        uniqueFoodsOrRituals: 'Deepavali Marundu, Mysore Pak, Murukku.'
      }
    ],
    faqs: [
      { question: 'When is Naraka Chaturdashi 2026?', answer: 'In 2026, Naraka Chaturdashi falls on Saturday, November 7, 2026, with the auspicious pre-dawn Abhyanga Snan Muhurat between 05:08 AM and 06:34 AM.' },
      { question: 'Why is it called Roop Chaudas?', answer: 'It is believed that anointing the body with aromatic herbs, sesame oil, and ubtan before sunrise bestows physical radiance (Roop), longevity, and purification.' }
    ],
    references: [
      { title: 'Srimad Bhagavatam', source: 'Canto 10, Chapter 59', quoteOrChapter: 'The Deliverance of the Demon Narakasura' },
      { title: 'Padma Purana', source: 'Kartika Mahatmya', quoteOrChapter: 'Injunctions on Abhyanga Snanam on Chaturdashi' }
    ]
  },

  {
    id: 'govardhan-puja',
    canonical_name: 'Govardhan Puja (Annakut & Gujarati New Year / Bestu Varas)',
    hindi_name: 'गोवर्धन पूजा (अन्नकूट महोत्सव व गुजराती नूतन वर्ष)',
    gujarati_name: 'બેસતું વર્ષ (ગુજરાતી નવું વર્ષ - અન્નકૂટ મહોત્સવ)',
    alternate_names: ['Annakut', 'Bestu Varas', 'Gujarati New Year', 'Gau Puja', 'Bali Pratipada', 'Padwa'],
    regional_names: {
      gu: 'બેસતું વર્ષ / નૂતન વર્ષાભિનંદન (અન્નકૂટ)',
      hi: 'गोवर्धन पूजा / अन्नकूट',
      mr: 'बळीप्रतिपदा / गोवर्धन पूजा',
      bn: 'গোবর্ধন পূজা',
      ta: 'கோவர்தன பூஜை',
      te: 'గోవర్ధన పూజ'
    },
    sanskrit_name: 'गोवर्धनपूजा (अन्नकूटोत्सवः)',
    transliteration: 'Govardhanapūjā',
    slug: 'govardhan-puja',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'vaishnava',
    deity: 'Giriraj Govardhan, Lord Krishna, Mata Surabhi (Cows) & King Bali',
    deity_category: 'krishna',
    lunar_month: 'kartik',
    paksha: 'shukla',
    tithi_name: 'Pratipada (प्रतिपदा)',
    tithi_number: 1,
    base_day_of_year: 313,
    calculation_method: 'Kartik Shukla Pratipada (Udaya Tithi and Dyuta Pratipada)',
    short_description: 'Worshipping Govardhan Hill with gigantic mountains of food (Annakut), celebrating Lord Krishna lifting the hill on His little finger, and the Gujarati New Year (Bestu Varas).',
    full_overview: 'Govardhan Puja is celebrated the day after Diwali. It commemorates the leela where seven-year-old Krishna lifted the colossal Govardhan Mountain on the little finger of His left hand for seven continuous days to shelter the residents, cattle, and forests of Braj from the torrential wrath of Indra. Devotees craft replicas of Govardhan with fresh cow-dung, decorate with flowers, perform circumambulation (Parikrama), worship sacred cows (Gau Puja), and offer "Annakut" (a mountain of 56 to 108 vegetarian culinary dishes). In Gujarat, this day is celebrated as "Bestu Varas" (Gujarati New Year) marking the new financial and cultural cycle with the greeting "Nutan Varshabhinandan".',
    significance: 'Teaches environmental stewardship and ecological gratitude: worshipping nature, mountains, forests, and cows rather than appeasing celestial egos. In Gujarat, it represents a fresh start, family harmony, and forgiveness of past grievances.',
    history_and_tradition: 'Narrated in the Srimad Bhagavatam (Canto 10, Chapter 24-27) and Vishnu Purana. In temples across Nathdwara, Mathura, Vrindavan, and Swaminarayan Akshardham, thousands of varieties of traditional sweets and cooked foods are arranged in stepped cascades before the Lord.',
    cultural_traditions: [
      'Molding a reclining Govardhan figure from clean cow-dung and adorning with peacock feathers.',
      'Performing Govardhan Parikrama while carrying incense and chanting "Giriraj Maharaj ki Jai".',
      'Preparing Annakut consisting of 56 or 108 dishes, seasonal winter vegetables, and sweets.',
      'In Gujarat, touching elders’ feet, visiting temple Annakuts, and greeting "Saal Mubarak / Nutan Varshabhinandan".',
      'Bathing and worshipping cows and calves with turmeric, kumkum, and fresh green grass.'
    ],
    regions: ['Pan-India', 'Gujarat', 'Mathura-Vrindavan (Braj)', 'Rajasthan (Nathdwara)', 'Maharashtra', 'Global'],
    languages: ['Hindi', 'Gujarati', 'Braj Bhasha', 'Marathi', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'kartik-festivals', 'diwali-cluster', 'krishna-festivals', 'new-year-festivals'],
    related_festivals: ['diwali', 'bhai-dooj', 'chhat-puja', 'gujarati-new-year'],
    related_vrat: ['govardhan-vrat', 'gau-puja'],
    related_temple_ids: ['shrinathji', 'bankey-bihari', 'dwarkadhish', 'somnath'],
    seo_title_template: 'Govardhan Puja & Bestu Varas 2026 Date, Annakut Muhurat & Vidhi',
    seo_description_template: 'Complete Govardhan Puja & Gujarati New Year 2026 guide with exact Annakut Muhurat, Bestu Varas celebrations, cow-dung Govardhan Vidhi, 56 Bhog recipe & Gau Puja.',
    puja_information: {
      overview: 'Conducted during morning or afternoon Pratahkala/Madhyahna by sculpting Govardhan from cow dung, encircling with flowers, offering Annakut delicacies, and doing Aarti.',
      samagri: [
        { item: 'Fresh Clean Cow Dung', quantity: 'Sufficient', required: true, significance: 'Sacred natural medium for sculpting Giriraj hill.' },
        { item: 'Uncooked and Cooked Annakut (Multiple vegetables, grains, sweets)', quantity: '56 or 108 items', required: true, significance: 'Symbol of divine abundance provided by nature.' },
        { item: 'Flowers, Sugarcane, Curd, Milk, Akshat', quantity: 'Standard', required: true, significance: 'Offerings to Govardhan Nath.' },
        { item: 'Clay Diya with Pure Cow Ghee', quantity: '5 pcs', required: true, significance: 'For the Annakut Aarti.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Govardhan Sthapana & Decoration', mantra: 'गोवर्धन धराधार गोकुलत्राणकारक। विष्णुबाहुकृतोच्छ्राय गवां कोटिप्रदो भव॥', procedure: 'Sculpt the figure of Govardhan in courtyard, place clay pot of milk on navel, decorate with flowers.' },
        { stepNumber: 2, title: 'Gau (Cow) Puja', mantra: 'ॐ नमो गोभ्यः श्रीमतीभ्यः सौरभेयीभ्य एव च। नमो ब्रह्मसुताभ्यश्च पवित्राभ्यो नमो नमः॥', procedure: 'Anoint cows with turmeric, feed jaggery, fresh grass, and rotis; seek their peaceful blessings.' },
        { stepNumber: 3, title: 'Annakut Samarpan', mantra: 'ॐ श्रीकृष्णाय गोविन्दाय नमो नमः। अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः॥', procedure: 'Offer the mountain of cooked cereals, mixed winter vegetable sabzi, puris, halwa, and sweets.' },
        { stepNumber: 4, title: 'Parikrama & Maha Aarti', mantra: 'प्रदक्षिणं करोमीश सर्वकामफलप्रदम्।', procedure: 'Circumambulate Govardhan with family 7 times chanting devotional songs and conclude with aarti.' }
      ],
      aartiName: 'Shri Giriraj Ji Ki Aarti',
      prasadDetails: 'Annakut mixed vegetable curry, Kadhi, Puri, Kheer, Mohanthal, and 56 Bhog.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Govardhan Puja Pratah / Sayankal Muhurat',
      rulesDescription: 'Conducted on Kartik Shukla Pratipada during morning or afternoon hours.',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Pratipada dyuta period is highly auspicious for new commitments and spiritual renewal.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Grand feast day; devotees partake of the Annakut prasad with boundless joy.'
    },
    regional_variations: [
      {
        region: 'Gujarat (Ahmedabad, Surat, Rajkot)',
        customs: 'Celebrated as Bestu Varas (New Year of Vikram Samvat). Families dress in pristine traditional clothes, exchange sweets, touch elders’ feet, visit Swaminarayan and Krishna temples to marvel at colossal Annakuts displaying thousands of dishes, and greet "Nutan Varshabhinandan / Saal Mubarak".',
        distinctiveNames: ['Bestu Varas', 'Nutan Varshabhinandan', 'Gujarati Annakut'],
        uniqueFoodsOrRituals: 'Mohanthal, Mathiya, Chorafali, Ghari, Annakut Prasad.'
      },
      {
        region: 'Braj (Mathura, Vrindavan, Govardhan)',
        customs: 'Millions of pilgrims perform the 21-kilometer Govardhan Parikrama barefoot around the sacred hill, offering milk streams and sweet kheer.',
        distinctiveNames: ['Braj Govardhan Parikrama', 'Annakut Utsav'],
        uniqueFoodsOrRituals: 'Chhappan Bhog, Kadhi-Chawal, Makkhan-Mishri.'
      }
    ],
    faqs: [
      { question: 'When is Govardhan Puja & Bestu Varas 2026?', answer: 'In 2026, Govardhan Puja and the Gujarati New Year (Bestu Varas) will be celebrated on Monday, November 9, 2026, on Kartik Shukla Pratipada.' },
      { question: 'Why did Lord Krishna lift Govardhan Hill?', answer: 'To demolish the pride of King Indra who unleashed devastating deluges upon Braj when villagers ceased Indra’s sacrificial yajna, teaching that nature, soil, trees, and cows that sustain our everyday lives are worthy of true worship.' }
    ],
    references: [
      { title: 'Srimad Bhagavatam', source: 'Canto 10, Chapters 24-26', quoteOrChapter: 'The Lifting of Govardhana Hill' },
      { title: 'Vishnu Purana', source: 'Amsa 5', quoteOrChapter: 'Govardhanoddharana' }
    ]
  },

  {
    id: 'bhai-dooj',
    canonical_name: 'Bhai Dooj (Yama Dwitiya & Bhratri Dwitiya)',
    hindi_name: 'भाई दूज (यम द्वितीया, भ्रातृ द्वितीया व चित्रगुप्त पूजा)',
    gujarati_name: 'ભાઈ બીજ (યમ દ્વિતીયા - ભાઈ-બહેન પ્રેમ પર્વ)',
    alternate_names: ['Yama Dwitiya', 'Bhai Bij', 'Bhratri Dwitiya', 'Bhai Phonta', 'Bhav Bij', 'Chitragupta Puja'],
    regional_names: {
      hi: 'भाई दूज / यम द्वितीया',
      gu: 'ભાઈ બીજ (Bhai Beej)',
      bn: 'ভাই ফোঁটা (Bhai Phonta)',
      mr: 'भाऊबीज (Bhaubeej)',
      te: 'భగినీ హస్త భోజనం (Bhagini Hastha Bhojanam)',
      ta: 'எம துவிதியை (Yama Dwitiya)'
    },
    sanskrit_name: 'यमद्वितीया (भ्रातृद्वितीया)',
    transliteration: 'Yamadvitīyā',
    slug: 'bhai-dooj',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Lord Yamaraj, Goddess Yamuna & Lord Chitragupta',
    deity_category: 'vishnu',
    lunar_month: 'kartik',
    paksha: 'shukla',
    tithi_name: 'Dwitiya (द्वितीया)',
    tithi_number: 2,
    base_day_of_year: 314,
    calculation_method: 'Kartik Shukla Dwitiya prevailing during Aparahna Kaal',
    short_description: 'The tender culmination of Diwali where sisters apply auspicious tilak to brothers, prepare home feasts, and pray for their protection from mortality.',
    full_overview: 'Bhai Dooj (Yama Dwitiya) is the deeply touching conclusion of the five-day Diwali festivities. It celebrates the eternal bond between Yamuna and her brother Yamaraj (the Lord of Death). When Yamaraj visited Yamuna on this day, she welcomed Him with affectionate aarti, applied fragrant chandan tilak on His brow, and fed Him sumptuous delicacies. Pleased beyond measure, Yamaraj granted that any brother who receives a tilak from his sister and eats in her home on this day shall never face untimely death or the fear of hell (Naraka). Concurrently, Kayasthas and accountants celebrate Chitragupta Puja, venerating the cosmic keeper of deeds.',
    significance: 'Celebrates selfless sisterly love that holds the power to mollify even the sternest cosmic forces of mortality. In Bengal, sisters chant the famous protective blessing "Bhaiyer kapaale dilam phonta, Jomer duare porlo kaanta" (I place this tilak on my brother’s brow; may thorns bar the gates of death).',
    history_and_tradition: 'Found in the Skanda Purana, Padma Purana, and Bhavishya Purana. Another tradition recounts how Bhagwan Krishna visited His sister Subhadra after slaying the demon Narakasura; Subhadra warmly welcomed Him with sweets, flowers, and an auspicious tilak.',
    cultural_traditions: [
      'Sister inviting brother to her home for a lovingly cooked feast (Bhagini Hastha Bhojanam).',
      'Applying Chandan-Kumkum tilak with unbroken rice on brother’s forehead.',
      'Performing aarti with a brass lamp and offering dried coconut (Gola / Kopra).',
      'In Bengal (Bhai Phonta), applying sandalwood paste with the little finger of the left hand.',
      'Chitragupta Puja where inkpots (Dawat), pens, and ledger books are worshipped.'
    ],
    regions: ['Pan-India', 'North India', 'Gujarat', 'Maharashtra', 'Bengal', 'Bihar', 'Global'],
    languages: ['Hindi', 'Gujarati', 'Bengali', 'Marathi', 'Bhojpuri', 'Sanskrit'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'kartik-festivals', 'diwali-cluster'],
    related_festivals: ['diwali', 'raksha-bandhan', 'govardhan-puja', 'chhat-puja'],
    related_vrat: ['yama-dwitiya-vrat'],
    related_temple_ids: ['kashi-vishwanath', 'somnath', 'dwarkadhish'],
    seo_title_template: 'Bhai Dooj 2026 Date, Tilak Muhurat, Yama Dwitiya Vidhi & Mantras',
    seo_description_template: 'Complete Bhai Dooj 2026 guide with exact Aparahna Tilak Muhurat, sister-brother rituals, Yama Dwitiya Katha, Bengal Bhai Phonta mantras & Chitragupta Puja.',
    puja_information: {
      overview: 'Conducted in the afternoon during Aparahna Kaal. The sister seats her brother on a wooden stool, applies chandan tilak, performs aarti, feeds sweets, and exchanges gifts.',
      samagri: [
        { item: 'Dry Whole Coconut (Kopra / Gola)', quantity: '1 pc', required: true, significance: 'Presented by sister to brother as a token of protection.' },
        { item: 'Sandalwood Paste (Chandan), Roli, Akshat', quantity: '25g', required: true, significance: 'Applied on the forehead for auspicious longevity.' },
        { item: 'Brass Diya & Betel Leaves (Paan-Supari)', quantity: '1 set', required: true, significance: 'For the sibling protective aarti.' },
        { item: 'Sweets (Peda, Ladoo, Sandesh)', quantity: '1 box', required: true, significance: 'Feast sharing.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Seating on Asana & Sankalp', mantra: 'ॐ यमाय नमः। ॐ चित्रगुप्ताय नमः।', procedure: 'Seat brother on decorated wooden chowki facing East; sister prays for his long life.' },
        { stepNumber: 2, title: 'Tilak Samarpan', mantra: 'धर्मराज नमस्तुभ्यं नमस्ते यमुनाग्रज। पाहि मां सर्वदुःखेभ्यो दातारं सर्वसम्पदाम्॥', procedure: 'Apply sandalwood paste and kumkum tilak with unbroken rice on brother’s Ajna chakra.' },
        { stepNumber: 3, title: 'Aarti & Coconut Offering', mantra: 'दीर्घायुर्भव सौम्य।', procedure: 'Perform gentle camphor aarti, place dry coconut and sweets in his hands, and brother presents loving gifts.' }
      ],
      aartiName: 'Bhai Dooj Aarti & Yamaraj Stuti',
      prasadDetails: 'Basundi-Puri, Kheer, Kaju Katli, Sandesh, and home-cooked festive lunch.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Aparahna Bhai Dooj Tilak Muhurat',
      rulesDescription: 'Bhai Dooj Tilak is performed during Aparahna Kaal (post-midday between 01:15 PM and 03:30 PM).',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'Shastras state that a brother who consumes a meal cooked by his sister on Yama Dwitiya is blessed with health and immunity from sudden demise.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Sisters generally wait to eat until after applying tilak to their brothers and feeding them.'
    },
    regional_variations: [
      {
        region: 'Bengal',
        customs: 'Known as Bhai Phonta. Sisters apply sandalwood paste with the little finger of their left hand while reciting the famous protective rhyme three times.',
        distinctiveNames: ['Bhai Phonta'],
        uniqueFoodsOrRituals: 'Sandesh, Payesh, Luchi-Alur Dom.'
      },
      {
        region: 'Maharashtra',
        customs: 'Known as Bhaubeej. Brothers sit on floor mats decorated with Rangoli; sisters perform aarti and feed them freshly rolled Puran Poli or Basundi.',
        distinctiveNames: ['Bhaubeej'],
        uniqueFoodsOrRituals: 'Basundi-Puri, Shrikhand.'
      },
      {
        region: 'Gujarat',
        customs: 'Celebrated as Bhai Beej. Brothers visit married sisters’ homes, shower them with gifts, and partake in special home-cooked lunch (Bhai Beej Bhojan).',
        distinctiveNames: ['Bhai Beej'],
        uniqueFoodsOrRituals: 'Kansar, Sev-Khamani, Sweets.'
      }
    ],
    faqs: [
      { question: 'When is Bhai Dooj 2026?', answer: 'In 2026, Bhai Dooj falls on Wednesday, November 11, 2026, on Kartik Shukla Dwitiya with the auspicious Aparahna Tilak Muhurat in the afternoon.' },
      { question: 'What is the story of Yamaraj and Yamuna on Bhai Dooj?', answer: 'Yamuna invited her brother Yamaraj to visit her after many years. Pleased by her warm welcome, food, and tilak, Yamaraj granted that any brother visiting his sister on this day and receiving her tilak shall be protected from premature death and hell.' }
    ],
    references: [
      { title: 'Skanda Purana', source: 'Kartika Mahatmya', quoteOrChapter: 'Yama Dwitiya Mahatmya' },
      { title: 'Bhavishya Purana', source: 'Uttara Parva', quoteOrChapter: 'Dialogue of Yamaraj and Yamuna' }
    ]
  },

  {
    id: 'vasant-panchami',
    canonical_name: 'Vasant Panchami (Saraswati Puja & Shri Panchami)',
    hindi_name: 'वसन्त पंचमी (सरस्वती पूजा, श्री पंचमी व वागेश्वरी जयंती)',
    gujarati_name: 'વસંત પંચમી (સરસ્વતી પૂજન અને વસંતોત્સવ)',
    alternate_names: ['Saraswati Puja', 'Shri Panchami', 'Basant Panchami', 'Madana Panchami', 'Vagdevi Jayanti'],
    regional_names: {
      hi: 'वसन्त पंचमी / सरस्वती पूजा',
      gu: 'વસંત પંચમી',
      bn: 'সরস্বতী পূজা (Saraswati Puja)',
      or: 'ବସନ୍ତ ପଞ୍ଚମୀ (Basanta Panchami)',
      te: 'వసంత పంచమి (Sri Panchami)',
      ta: 'வசந்த பஞ்சமி (Vasant Panchami)',
      mr: 'वसंत पंचमी'
    },
    sanskrit_name: 'वसन्तपञ्चमी (श्रीपञ्चमी)',
    transliteration: 'Vasantapañcamī',
    slug: 'vasant-panchami',
    festival_type: 'major',
    religion: 'hindu',
    sect: 'all',
    deity: 'Goddess Saraswati (Goddess of Learning, Arts & Wisdom) & Lord Kamadeva',
    deity_category: 'saraswati',
    lunar_month: 'magha',
    paksha: 'shukla',
    tithi_name: 'Panchami (पंचमी)',
    tithi_number: 5,
    base_day_of_year: 23,
    calculation_method: 'Magha Shukla Panchami prevailing during Purvahna Kaal (morning)',
    short_description: 'The golden festival heralding the arrival of spring (Vasant Ritu), worshipping Goddess Saraswati with yellow flowers, pens, books, and initiating toddlers into learning.',
    full_overview: 'Vasant Panchami marks the birthday of Goddess Saraswati (Vagdevi), the embodiment of supreme knowledge, fine arts, music, and divine eloquence, who manifested from the mouth of Lord Brahma to endow the silent creation with speech, melody, and wisdom. Celebrated forty days before Holi, fields across India glow with yellow mustard blossoms, and devotees dress in bright yellow attire (representing the golden warmth of the Sun and the flowering of intellect). Students, teachers, and musicians place books, musical instruments, and pens at the feet of the Goddess and initiate young children into their first letters of the alphabet (Aksharabhyasam / Vidyarambham).',
    significance: 'Signifies the awakening of intellect (Dhi) and the blossoming of inner creative consciousness. Also celebrated as Kamadeva and Rati’s festival of spring love, honoring the renewal of nature and life.',
    history_and_tradition: 'Mentioned in the Matsya Purana, Brahmavaivarta Purana, and Jayadeva’s Gita Govinda. The day also commemorates the great 12th-century warrior Prithviraj Chauhan’s valor and the poet Kalidasa receiving enlightenment through Saraswati’s grace.',
    cultural_traditions: [
      'Wearing radiant yellow (Basanti) clothes and offering yellow marigolds and mustard blooms.',
      'Aksharabhyasam / Hatey Khori: Guiding young toddlers to write their very first sacred letters on slates or rice trays.',
      'Placing books, stationery, Veena, sitar, and musical instruments before the Goddess; abstaining from reading study books on this day as they are blessed.',
      'Cooking sweet saffron yellow rice (Meethe Chawal), Kesari Halwa, and Boondi laddoos.',
      'Flying vibrant kites in Punjab and North India under pleasant spring skies.'
    ],
    regions: ['Pan-India', 'Bengal', 'Bihar', 'Punjab', 'Gujarat', 'South India (Basar Saraswati Temple)', 'Global'],
    languages: ['Hindi', 'Bengali', 'Sanskrit', 'Telugu', 'Punjabi', 'Gujarati'],
    hero_image_theme: 'amber',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'magha-festivals', 'saraswati-festivals', 'seasonal-festivals'],
    related_festivals: ['holi', 'ratha-saptami', 'maha-shivaratri', 'vidyarambham'],
    related_vrat: ['saraswati-vrat'],
    related_temple_ids: ['kamakhya', 'kashi-vishwanath', 'somnath'],
    seo_title_template: 'Vasant Panchami 2026 Date, Saraswati Puja Muhurat & Aksharabhyasam',
    seo_description_template: 'Complete Vasant Panchami 2026 guide with exact morning Saraswati Puja Muhurat, Aksharabhyasam ritual for children, Saraswati Vandana mantras & yellow dress significance.',
    puja_information: {
      overview: 'Conducted in the morning (Purvahna Kaal) by dressing Saraswati in white and yellow, offering yellow flowers, pen, ink, white chandan, and reciting the Ya Kundendu stotram.',
      samagri: [
        { item: 'Idol/Image of Goddess Saraswati on White Swan', quantity: '1 pc', required: true, significance: 'Embodiment of pure discrimination and wisdom.' },
        { item: 'Yellow Flowers (Marigold, Mustard blossoms, Yellow Chrysanthemum)', quantity: '1 basket', required: true, significance: 'Favorite spring color of knowledge and vitality.' },
        { item: 'Books, Notebooks, Pens & Musical Instruments', quantity: '1 set', required: true, significance: 'Tools of learning blessed by the Mother.' },
        { item: 'White Sandalwood, Raw Turmeric, Akshat', quantity: '50g each', required: true, significance: 'Satvik cooling offerings.' },
        { item: 'Kesari Rice / Boondi / Ber (Plums)', quantity: '500g', required: true, significance: 'Traditional spring harvest prasad.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Snan & Yellow Vastra Dharan', mantra: 'ॐ ऐं सरस्वत्यै नमः।', procedure: 'Take purifying morning bath and wear clean yellow or white clothing.' },
        { stepNumber: 2, title: 'Saraswati Dhyanam & Avahana', mantra: 'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना। या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥', procedure: 'Meditate on the pure white lotus seat of Saraswati, hold akshat and flowers, and invoke her presence.' },
        { stepNumber: 3, title: 'Upachara Puja & Books Blessing', mantra: 'सरस्वति नमस्तुभ्यं वरदे कामरूपिणि। विद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा॥', procedure: 'Offer yellow chandan, flowers, pen, and books; sprinkle Gangajal on instruments.' },
        { stepNumber: 4, title: 'Aksharabhyasam / Hatey Khori for Children', mantra: 'ॐ श्रीं ह्रीं सरस्वत्यै नमः।', procedure: 'Hold the toddler’s hand to write "Om" or "Hari" on slate or rice grain plate.' },
        { stepNumber: 5, title: 'Aarti & Naivedya Samarpan', mantra: 'जय सरस्वती माता, मैया जय सरस्वती माता। सद्गुण वैभव शालिनी, त्रिभुवन विख्याता॥', procedure: 'Offer saffron rice and seasonal fruits (Ber/Plums), sing Saraswati aarti, and distribute prasad.' }
      ],
      aartiName: 'Jai Saraswati Mata & Ya Kundendu',
      prasadDetails: 'Meethe Chawal (Saffron yellow sweet rice), Boondi, Ber fruits, Kesari Halwa, and Mishri.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Purvahna Saraswati Puja Muhurat',
      rulesDescription: 'Vasant Panchami is celebrated during Purvahna Kaal (the time between sunrise and midday, roughly 6 Ghatis or 2.5 hours after dawn).',
      calculationKey: 'day_choghadiya',
      traditionalNotice: 'If Panchami starts after midday, the following morning when Panchami touches sunrise is celebrated.'
    },
    fasting_information: {
      isFastingDay: false,
      fastType: 'None',
      paranaRules: 'Devotees, particularly students, fast until the completion of morning Saraswati Puja, then partake of yellow prasad.'
    },
    regional_variations: [
      {
        region: 'Bengal & Eastern India',
        customs: 'Celebrated as the most beloved festival for youth and students. Pandals are erected in schools and colleges. Toddlers perform "Hatey Khori" (initiation into literacy). It is traditional to not eat Jujube (Kool / Ber) fruits until after Saraswati Puja.',
        distinctiveNames: ['Hatey Khori', 'Saraswati Puja Bengal'],
        uniqueFoodsOrRituals: 'Kool (Jujube fruit), Khichuri bhog, Labra, Beguni, Sandesh.'
      },
      {
        region: 'Punjab & North India',
        customs: 'Known as Basant Panchami. Golden mustard fields bloom everywhere; people eat Meethe Chawal and fly colorful paper kites under crisp skies.',
        distinctiveNames: ['Basant Mela', 'Kite Festival'],
        uniqueFoodsOrRituals: 'Meethe Chawal (yellow saffron rice), Makki ki Roti with Sarson ka Saag.'
      }
    ],
    faqs: [
      { question: 'When is Vasant Panchami 2026?', answer: 'In 2026, Vasant Panchami will be celebrated on Friday, January 23, 2026, on Magha Shukla Panchami with morning Saraswati Puja Muhurat.' },
      { question: 'Why is yellow color sacred on Vasant Panchami?', answer: 'Yellow represents the divine light of the Sun, the blossoming of mustard fields in spring, and the yellow garments worn by Goddess Saraswati representing energy, intellect, and optimism.' },
      { question: 'What is Aksharabhyasam / Hatey Khori?', answer: 'It is the sacred initiation of a toddler into the world of education. The guru or elder guides the child’s finger to write their first sacred syllables on a bed of dry rice or a slate.' }
    ],
    references: [
      { title: 'Matsya Purana', source: 'Saraswati Janma', quoteOrChapter: 'The Manifestation of Vagdevi from Brahma' },
      { title: 'Brahmavaivarta Purana', source: 'Prakriti Khanda', quoteOrChapter: 'Saraswati Upakhyana and Stotram' }
    ]
  },

  {
    id: 'hanuman-jayanti',
    canonical_name: 'Hanuman Jayanti (Chaitra Purnima Janmotsav)',
    hindi_name: 'श्री हनुमान जन्मोत्सव (चैत्र पूर्णिमा व संकटमोचन पूजन)',
    gujarati_name: 'હનુમાન જયંતી (ચૈત્ર પૂનમ - કષ્ટભંજન હનુમાનજી)',
    alternate_names: ['Hanuman Janmotsav', 'Anjaneya Jayanti', 'Bajrangbali Jayanti', 'Chaitra Purnima'],
    regional_names: {
      hi: 'श्री हनुमान जन्मोत्सव',
      gu: 'હનુમાન જયંતી (સાળંગપુર મહોત્સવ)',
      mr: 'हनुमान जयंती',
      ta: 'ஹனுமத் ஜெயந்தி (Hanumath Jayanthi - Margazhi)',
      te: 'హనుమాన్ జయంతి (41-day Deeksha - Vaisakha)',
      kn: 'ಹನುಮ ಜಯಂತಿ (Hanuma Jayanti)'
    },
    sanskrit_name: 'श्रीमद्धनुमज्जन्मोत्सवः',
    transliteration: 'Śrīmaddhanumajjanmotsavaḥ',
    slug: 'hanuman-jayanti',
    festival_type: 'jayanti',
    religion: 'hindu',
    sect: 'all',
    deity: 'Sankat Mochan Lord Hanuman (Anjaneya)',
    deity_category: 'hanuman',
    lunar_month: 'chaitra',
    paksha: 'shukla',
    tithi_name: 'Purnima (पूर्णिमा)',
    tithi_number: 15,
    base_day_of_year: 92,
    calculation_method: 'Chaitra Purnima prevailing at Sunrise (Udaya Purnima)',
    short_description: 'The glorious advent of Sankat Mochan Lord Hanuman, the 11th Rudra avatar of Shiva, celebrating selfless devotion, superhuman strength, and courage.',
    full_overview: 'Hanuman Jayanti marks the appearance of Bhagwan Hanuman, born to Mata Anjana and Kesari through the divine grace of Vayu Deva. Celebrated at sunrise on Chaitra Purnima across North and Western India, millions of devotees visit temples, chant the Hanuman Chalisa 108 times, recite the Sundarkand, offer bright red-orange sindoor and jasmine oil (Chola), and distribute Boondi and Besan laddoos. In South India, Andhra and Telangana observe a 41-day Hanuman Deeksha culminating on Vaishakha Krishna Dashami, while Tamil Nadu celebrates Hanumath Jayanthi during Margazhi Amavasya.',
    significance: 'Lord Hanuman personifies Dasya Bhakti (the perfection of devotional servitude), unyielding courage, intellect, humility, and celibacy (Brahmacharya). Chanting His sacred names dispels fear, negative planetary influences of Saturn (Shani Sade Sati), and removes severe obstacles (Sankat Mochan).',
    history_and_tradition: 'Expounded in the Valmiki Ramayana (Kishkindha & Sundara Kandas), Shiva Purana (Rudra Samhita), and Tulsidas’s Ramcharitmanas and Hanuman Bahuk.',
    cultural_traditions: [
      'Anointing the deity with fragrant jasmine oil (Chameli ka tel) mixed with pure orange Sindoor (Chola Samarpan).',
      'Continuous 108 or 1008 recitations of Goswami Tulsidas’s Shri Hanuman Chalisa.',
      'Evening Sundarkand path with musical harmonium and dholak.',
      'Offering a garland of betel leaves (Paan Mala), fresh Tulsi leaves, and sweet Boondi.',
      'In Gujarat, grand celebrations at world-famous shrines like Kashtbhanjan Dev Hanumanji Mandir in Sarangpur.'
    ],
    regions: ['Pan-India', 'North India', 'Gujarat (Sarangpur)', 'Maharashtra', 'Karnataka', 'Global'],
    languages: ['Hindi', 'Sanskrit', 'Awadhi', 'Gujarati', 'Telugu', 'Tamil'],
    hero_image_theme: 'orange',
    topical_collections: ['top-10', 'top-20', 'top-25', 'popular', 'chaitra-festivals', 'hanuman-festivals', 'jayanti-festivals'],
    related_festivals: ['rama-navami', 'chaitra-navratri', 'chaitra-purnima', 'dussehra'],
    related_vrat: ['hanuman-vrat', 'purnima-vrat'],
    related_temple_ids: ['salangpur-hanuman', 'somnath', 'kashi-vishwanath'],
    seo_title_template: 'Hanuman Jayanti 2026 Date, Chola Muhurat, Chalisa Vidhi & Sarangpur',
    seo_description_template: 'Complete Hanuman Jayanti 2026 guide with exact Chaitra Purnima sunrise Janmotsav Muhurat, Sindoor Chola procedure, 108 Hanuman Chalisa recitation & prasad.',
    puja_information: {
      overview: 'Conducted at sunrise with bathing, offering red sandalwood, chameli oil mixed with orange sindoor, betel leaf garland, and chanting the Hanuman Chalisa.',
      samagri: [
        { item: 'Orange Vermilion (Chola Sindoor)', quantity: '100g', required: true, significance: 'Hanuman coated his entire body with sindoor to ensure Rama’s long life.' },
        { item: 'Pure Jasmine Oil (Chameli ka Tel)', quantity: '100ml', required: true, significance: 'Traditional aromatic oil for anointing.' },
        { item: 'Garland of 21 Fresh Betel Leaves (Paan ki Mala)', quantity: '1 garland', required: true, significance: 'Sita Mata blessed Hanuman with betel leaves in Ashoka Vatika.' },
        { item: 'Sweet Boondi or Besan Laddoos', quantity: '500g', required: true, significance: 'Favorite sweet offering of Bajrangbali.' },
        { item: 'Tulsi Leaves & Red Flowers (Hibiscus/Rose)', quantity: '1 basket', required: true, significance: 'Essential for devotional offering.' }
      ],
      steps: [
        { stepNumber: 1, title: 'Pratah Snan & Rama Smaran', mantra: 'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥', procedure: 'Take dawn bath, meditate on Lord Rama first, and invoke Lord Hanuman.' },
        { stepNumber: 2, title: 'Sindoor & Chameli Oil Chola Offering', mantra: 'सिन्दूरं शोभनं रक्तं सौभाग्यं सुखवर्धनम्। शुभदं कामदं चैव सिन्दूरं प्रतिगृह्यताम्॥', procedure: 'Mix orange sindoor in jasmine oil and gently apply with clean cotton to the deity.' },
        { stepNumber: 3, title: 'Paan Mala & Janeu Samarpan', mantra: 'ॐ हं हनुमते नमः।', procedure: 'Offer sacred thread (Janeu), betel leaf garland, and fresh red flowers.' },
        { stepNumber: 4, title: 'Hanuman Chalisa & Sundarkand Chanting', mantra: 'अतुलितबलधामं हेमशैलाभदेहं दनुजवनकृशानुं ज्ञानिनामग्रगण्यम्। सकलगुणनिधानं वानराणामधीशं रघुपतिप्रियभक्तं वातजातं नमामि॥', procedure: 'Chant Hanuman Chalisa with full family, followed by the Bajrang Baan and Sankat Mochan Ashtak.' },
        { stepNumber: 5, title: 'Maha Aarti & Boondi Prasad', mantra: 'आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥', procedure: 'Perform camphor aarti, distribute sweet boondi and bananas, and apply sindoor tilak to all.' }
      ],
      aartiName: 'Aarti Kije Hanuman Lala Ki',
      prasadDetails: 'Sweet Boondi, Besan Ladoo, Bananas, Panchamrit, and Paan Beda.'
    },
    muhurat_information: {
      primaryMuhuratName: 'Pratah Sunrise Janmotsav Muhurat',
      rulesDescription: 'Shastras state Lord Hanuman appeared at the precise moment of sunrise on Chaitra Purnima; hence the dawn window is the most sacred.',
      calculationKey: 'standard',
      traditionalNotice: 'Lord Hanuman must always be worshipped after offering obeisance to Bhagwan Shri Rama and Sita Mata.'
    },
    fasting_information: {
      isFastingDay: true,
      fastType: 'Phalahar',
      paranaRules: 'Devotees keep a fast on Chaitra Purnima, breaking it with fruits and boondi prasad after the evening aarti.'
    },
    regional_variations: [
      {
        region: 'Gujarat (Sarangpur)',
        customs: 'At the world-renowned Shri Kashtbhanjan Dev Hanumanji Temple in Sarangpur, hundreds of thousands gather for grand Rajbhog aartis and Annakut.',
        distinctiveNames: ['Sarangpur Hanuman Mahotsav'],
        uniqueFoodsOrRituals: 'Maha Aarti, Sukhadi, Boondi Ladu.'
      },
      {
        region: 'Andhra Pradesh & Telangana',
        customs: 'Observed as a 41-day festival starting from Chaitra Purnima and concluding on Vaishakha Krishna Dashami with traditional Deeksha malas and Hanuman Vratam.',
        distinctiveNames: ['Hanuman Jayanthi Deeksha'],
        uniqueFoodsOrRituals: 'Vadamala, Appam, Bobbattu.'
      }
    ],
    faqs: [
      { question: 'When is Hanuman Jayanti 2026?', answer: 'In 2026, Hanuman Jayanti will be celebrated on Thursday, April 2, 2026, on Chaitra Purnima.' },
      { question: 'Why is orange sindoor offered to Lord Hanuman?', answer: 'One day, Hanuman saw Sita Mata applying sindoor in her hairline and asked why. Sita explained it was for Lord Rama’s long life and love. Hearing this, devotion-intoxicated Hanuman coated his entire body in orange sindoor to ensure eternal life and boundless love for his Lord Rama.' }
    ],
    references: [
      { title: 'Valmiki Ramayana', source: 'Kishkindha Kanda', quoteOrChapter: 'Sarga 66: Birth of Hanuman' },
      { title: 'Shiva Purana', source: 'Shatarudra Samhita', quoteOrChapter: 'Chapter 20: The Descent of the 11th Rudra' }
    ]
  }
];
