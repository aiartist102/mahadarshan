import { Temple } from '../types';
import { extendedTemplesList } from './templesExtended';
import { extendedTemplesPart2 } from './templesExtendedPart2';
import { extendedTemplesPart3 } from './templesExtendedPart3';

const baseTemples: Temple[] = [
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Jyotirlinga',
    hindiName: 'श्री काशी विश्वनाथ ज्योतिर्लिंग',
    deity: 'Lord Shiva (Mahadev)',
    deityType: 'shiva',
    location: 'Varanasi, Uttar Pradesh',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    lat: 25.3109,
    lng: 83.0107,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Kashi Vishwanath Mandir 24/7 Garbhagriha Live Darshan',
    isLive: true,
    viewersCount: 24890,
    bannerImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: '5qap5aO4i9A',
    officialStreamWebsite: 'https://shrikashivishwanath.org',
    architecture: {
      style: 'Nagara & North Indian Temple Architecture (नागर शैली)',
      builtCentury: '1780 CE (Restored by Maharani Ahilyabai Holkar; Expanded in 2021)',
      patron: 'Maharani Ahilyabai Holkar of Indore & Maharaja Ranjit Singh (Gold Plating)',
      highlights: [
        '800 kg Gold Plated Shikharas donated by Punjab ruler Maharaja Ranjit Singh in 1835',
        'Direct 50,000 sq meter Kashi Vishwanath Corridor connecting the temple directly to the holy River Ganga at Lalita Ghat',
        'Jnana Vapi (Well of Wisdom) adjacent to the main sanctum',
        'Elaborately sculpted silver doors (Rajat Dwar) guarding the divine Garbhagriha'
      ],
      materials: 'Chunar sandstone, Makrana marble, copper sheets plated with 24k gold, and pure silver'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
        title: 'Ganga Ghats & Kashi Vishwanath Sanctum',
        caption: 'Sacred riverbanks of Varanasi leading to the sanctum sanctorum of Lord Vishweshwara.'
      },
      {
        url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
        title: 'Maha Aarti & Deepotsav',
        caption: 'Devotees offering thousands of brass lamps during the divine evening Saptrishi Aarti.'
      },
      {
        url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80',
        title: 'Ancient Stone Carvings & Shikhara',
        caption: 'Intricate sandstone reliefs depicting celestial beings and sacred Shaiva stotras.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
        title: 'Corridor Illumination at Dusk',
        caption: 'The majestic corridor bathed in golden illumination welcoming pilgrims from across Bharat.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Lal Bahadur Shastri International Airport, Babatpur (VNS) - 24 km',
      nearestRailway: 'Varanasi Junction (BSB) - 4.5 km, Banaras (BSBS) - 4 km',
      roadConnectivity: 'Directly linked via NH-19, Purvanchal Expressway, and regular interstate bus services',
      bestTimeToVisit: 'October to March (Pleasant weather; Dev Deepawali & Mahashivratri festivals)',
      dressCode: 'Traditional Indian attire strictly recommended. Men: Dhoti/Kurta; Women: Saree or Salwar Suit for Sparsh Darshan.'
    },
    festivalsCelebrated: ['Maha Shivratri', 'Shravan Maas Somwar', 'Dev Deepawali', 'Rangbhari Ekadashi', 'Annapurna Parikrama'],
    aartiTimings: [
      { name: 'Mangla Aarti', hindiName: 'मंगला आरती', time: '03:00 AM - 04:00 AM', description: 'Early morning awakening of Lord Vishweshwara' },
      { name: 'Bhog Aarti', hindiName: 'भोग / मध्याह्न आरती', time: '11:15 AM - 12:20 PM', description: 'Sacred midday offering' },
      { name: 'Sandhya Aarti', hindiName: 'सप्तर्षि संध्या आरती', time: '07:00 PM - 08:15 PM', description: 'Grand Saptrishi Aarti with sacred conches' },
      { name: 'Shayan Aarti', hindiName: 'शयन आरती', time: '10:30 PM - 11:00 PM', description: 'Night slumber ceremony with sweet hymns' }
    ],
    history: 'Standing on the sacred western bank of Ganga, Kashi Vishwanath is one of the twelve sacred Jyotirlingas. Reconstructed by the saintly Queen Ahilyabai Holkar in 1780 and recently restored with the grand Kashi Vishwanath Corridor, it embodies the eternal spiritual core of Varanasi (Avimukta Kshetra).',
    significance: 'Spiritual liberation (Moksha) is believed to be attained by the mere sight and prayer at this eternal abode of Shiva.',
    darshanHours: '04:00 AM to 11:00 PM',
    virtualOfferings: { flowers: 142800, diyas: 98450, bells: 312000, prasad: 42100 },
    audioChantUrl: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=om-namah-shivaya-10499.mp3',
    audioTitle: 'Om Namah Shivaya Divine Chanting'
  },
  {
    id: 'mahakaleshwar-ujjain',
    name: 'Mahakaleshwar Jyotirlinga',
    hindiName: 'श्री महाकालेश्वर ज्योतिर्लिंग उज्जैन',
    deity: 'Lord Shiva (Mahakal)',
    deityType: 'shiva',
    location: 'Ujjain, Madhya Pradesh',
    city: 'Ujjain',
    state: 'Madhya Pradesh',
    lat: 23.1827,
    lng: 75.7682,
    streamUrl: 'https://www.youtube-nocookie.com/embed/fA3l2_7n2o0?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Mahakal Mandir Ujjain Live Bhasma Aarti & Darshan',
    isLive: true,
    viewersCount: 38450,
    bannerImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'fA3l2_7n2o0',
    officialStreamWebsite: 'https://shrimahakaleshwar.com',
    architecture: {
      style: 'Bhumija, Maratha & Chalukya Architecture (भूमिज व मराठा शैली)',
      builtCentury: '6th Century BCE (Puranic); Restored in 1736 CE by Maratha General Ranoji Shinde',
      patron: 'Ranoji Shinde & Malhar Rao Holkar',
      highlights: [
        'Dakshinmukhi (South-facing) Jyotirlinga, unique among all 12 Jyotirlingas, symbolizing mastery over Kaal (Death & Time)',
        'Three-tiered sanctum housing Mahakaleshwar at ground level, Omkareshwar in the middle tier, and Nagchandreshwar at the summit',
        'Nagchandreshwar shrine opens exclusively once a year on Nag Panchami',
        'Expansive 900-meter Mahakal Lok corridor showcasing 108 grand Stambhas depicting Anand Tandav'
      ],
      materials: 'Ancient basalt stone, red sandstone, sculpted marble, and copper-domed canopies'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80',
        title: 'Mahakal Garbhagriha & Silver Jaladhari',
        caption: 'The south-facing Swayambhu Jyotirlinga bathed in holy waters and bilva leaves.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
        title: 'Bhasma Aarti at Dawn (अमृत वेला)',
        caption: 'The venerated Bhasma Aarti performed with sacred ashes amidst Vedic stotras.'
      },
      {
        url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
        title: 'Mahakal Lok Corridor Pillars',
        caption: 'Majestic pillars illustrating the cosmic pastimes and lore of Lord Shiva.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Devi Ahilyabai Holkar Airport, Indore (IDR) - 55 km (Superfast Highway)',
      nearestRailway: 'Ujjain Junction (UJN) - 1.8 km',
      roadConnectivity: 'Four-lane expressway connectivity from Indore, Bhopal, and Kota',
      bestTimeToVisit: 'October to March; Shravan Maas for the glorious Mahakal Sawari processions',
      dressCode: 'Traditional dress mandatory for Garbhagriha Jalabhishek: Men in Unstitched Dhoti & Sola; Women in Saree.'
    },
    festivalsCelebrated: ['Maha Shivratri (9-day Shiv Navratri)', 'Shravan Sawari', 'Nag Panchami', 'Kartik Mela'],
    aartiTimings: [
      { name: 'Bhasma Aarti', hindiName: 'भस्म आरती (अमृत वेला)', time: '04:00 AM - 06:00 AM', description: 'World-famous sacred ash ritual with Vedic chants' },
      { name: 'Naivedya Aarti', hindiName: 'नैवेद्य आरती', time: '10:30 AM - 11:15 AM', description: 'Morning royal offering' },
      { name: 'Sandhya Aarti', hindiName: 'संध्या आरती', time: '05:00 PM - 05:45 PM', description: 'Dusk puja with brass lamps' },
      { name: 'Shayan Aarti', hindiName: 'शयन आरती', time: '10:30 PM - 11:00 PM', description: 'Night tranquil ceremony' }
    ],
    history: 'Mahakaleshwar is unique among the 12 Jyotirlingas for being Dakshinmukhi (facing south), symbolic of supreme mastery over death (Kaal). Located by the sacred Kshipra river in ancient Avanti, the temple features the celebrated Mahakal Lok corridor.',
    significance: 'Worshipping Mahakal removes the fear of untimely death (Akaal Mrityu) and grants fearless life.',
    darshanHours: '04:00 AM to 11:00 PM',
    virtualOfferings: { flowers: 198200, diyas: 145200, bells: 489000, prasad: 67300 },
    audioChantUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=tibetan-chanting-bell-8240.mp3',
    audioTitle: 'Mahamrityunjaya Mantra Chanting'
  },
  {
    id: 'tirupati-balaji',
    name: 'Tirupati Sri Venkateswara Swamy',
    hindiName: 'श्री तिरुपति वेंकटेश्वर स्वामी (बालाजी)',
    deity: 'Lord Vishnu (Govinda)',
    deityType: 'vishnu',
    location: 'Tirumala, Andhra Pradesh',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    lat: 13.6833,
    lng: 79.3472,
    streamUrl: 'https://www.youtube-nocookie.com/embed/Live_SVBC_Telugu?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'TTD SVBC Tirumala Srivari Temple Live Broadcast',
    isLive: true,
    viewersCount: 52100,
    bannerImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'svbc-live',
    officialStreamWebsite: 'https://tirupatibalaji.ap.gov.in',
    architecture: {
      style: 'Classic Dravidian Architecture (द्रविड़ गोपुरम शैली)',
      builtCentury: 'Expanded across Pallava, Chola, Pandya, and Vijayanagara dynasties (9th to 16th century CE)',
      patron: 'Sri Krishnadevaraya of Vijayanagara Empire & Queen Samavai of Pallavas',
      highlights: [
        'Ananda Nilayam Vimanam completely gilded in pure gold directly above the Garbhagriha',
        'Dhvajastambha and golden Tirumamani Mandapam with intricate granite pillars',
        'Vaikuntha Dwaram opened exclusively during Vaikuntha Ekadashi',
        'World-famous Laddu Prasadam prepared in the sacred Potu kitchen following 300-year-old Dittam tradition'
      ],
      materials: 'Black granite stone, gold sheets, bell bronze, and red sandstone'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
        title: 'Ananda Nilayam Golden Dome',
        caption: 'The magnificent gold-plated Vimana shining under the morning rays over the Seshachalam hills.'
      },
      {
        url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
        title: 'Srivari Brahmotsavam Golden Chariot',
        caption: 'Grand Garuda Vahana procession during the annual nine-day Brahmotsavam festival.'
      },
      {
        url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
        title: 'Pushkarini Sacred Holy Tank',
        caption: 'Swami Pushkarini where pilgrims take sacred baths before approaching the Lord.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Tirupati International Airport, Renigunta (TIR) - 38 km',
      nearestRailway: 'Tirupati Main (TPTY) - 22 km, Renigunta (RU) - 30 km',
      roadConnectivity: 'Ghat roads link Tirupati to Tirumala with dedicated pedestrian footpaths (Alipiri & Srivari Mettu)',
      bestTimeToVisit: 'September to March; Annual Brahmotsavam during Navratri',
      dressCode: 'Strict Vedic dress code. Men: Dhoti with Uttariyam or Kurta Pajama; Women: Saree or Half-Saree.'
    },
    festivalsCelebrated: ['Salakatla Brahmotsavam', 'Vaikuntha Ekadashi', 'Rathasapthami', 'Ugadi', 'Koil Alwar Thirumanjanam'],
    aartiTimings: [
      { name: 'Suprabhatam', hindiName: 'सुप्रभातम् सेवा', time: '03:00 AM - 03:30 AM', description: 'Auspicious dawn awakening with Sanskrit stotras' },
      { name: 'Thomala Seva', hindiName: 'तोमाल सेवा', time: '04:30 AM - 05:30 AM', description: 'Garland adornment ritual' },
      { name: 'Archana & Naivedyam', hindiName: 'अर्चना व नैवेद्यम्', time: '05:30 AM - 06:30 AM', description: '1008 holy names chanting' },
      { name: 'Ekanta Seva', hindiName: 'एकांत सेवा (शयनम्)', time: '11:00 PM - 11:30 PM', description: 'Night lullaby (Tallapaka Annamacharya kirtan)' }
    ],
    history: 'Perched atop the sacred Seshachalam Seven Hills in Tirumala, the temple was patronized by the Cholas, Pandyas, and the great Vijayanagara emperor Sri Krishnadevaraya. The idol of Lord Venkateswara is adorned with diamond crowns and precious rubies.',
    significance: 'Lord Venkateswara is believed to bestow prosperity and protection to all seekers in the Kali Yuga (Kalyuga Varada).',
    darshanHours: '03:00 AM to 11:30 PM',
    virtualOfferings: { flowers: 245000, diyas: 189000, bells: 560000, prasad: 112000 },
    audioChantUrl: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=om-namah-shivaya-10499.mp3',
    audioTitle: 'Sri Venkateswara Suprabhatam Stotram'
  },
  {
    id: 'somnath-jyotirlinga',
    name: 'Shree Somnath Jyotirlinga',
    hindiName: 'श्री सोमनाथ ज्योतिर्लिंग (प्रथम ज्योतिर्लिंग)',
    deity: 'Lord Shiva (Soma)',
    deityType: 'shiva',
    location: 'Prabhas Patan, Veraval, Gujarat',
    city: 'Somnath',
    state: 'Gujarat',
    lat: 20.8880,
    lng: 70.4012,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Somnath Mahadev Mandir 24/7 Live Darshan & Ocean Aarti',
    isLive: true,
    viewersCount: 19400,
    bannerImage: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'somnath-live',
    officialStreamWebsite: 'https://somnath.org',
    architecture: {
      style: 'Chalukya / Solanki Style of Hindu Temple Architecture (कैलास महामेरु प्रासाद)',
      builtCentury: 'Reconstructed in May 1951 inspired by Sardar Vallabhbhai Patel',
      patron: 'Sardar Vallabhbhai Patel, K. M. Munshi & Prabhas Patan Sompura Salats',
      highlights: [
        'Kailash Mahameru Prasad architectural layout with a 155-foot soaring main Shikhara',
        'Baan Stambh (Arrow Pillar) erected on the sea protection wall marking zero landmass straight to Antarctica',
        'Sagar Darshan overlooking the roaring waves of the Arabian Sea',
        'Exquisite stone carvings of 12 Adityas and celestial guardians'
      ],
      materials: 'Dhrangadhra honey-colored sandstone crafted by traditional Sompura sculptors'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
        title: 'Somnath Oceanfront Shikhara',
        caption: 'The majestic sandstone temple rising serenely on the shores of the Arabian Sea.'
      },
      {
        url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80',
        title: 'Baan Stambh (Arrow Pillar)',
        caption: 'The ancient navigational pillar proving unmatched Vedic geographical knowledge.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Diu Airport (DIU) - 85 km, Rajkot International (HSR) - 200 km',
      nearestRailway: 'Somnath Railway Station (SMNH) - 1.5 km, Veraval (VRL) - 7 km',
      roadConnectivity: 'Connected via NH-51 coastal highway from Porbandar, Junagadh, and Ahmedabad',
      bestTimeToVisit: 'November to February (Cool coastal breeze and grand Kartik Purnima fair)',
      dressCode: 'Modest traditional Indian attire recommended. Short dresses and sleeveless strictly restricted.'
    },
    festivalsCelebrated: ['Maha Shivratri', 'Kartik Purnima Somnath Fair', 'Shravan Somwar', 'Golokdham Utsav'],
    aartiTimings: [
      { name: 'Pratah Aarti', hindiName: 'प्रातः आरती', time: '07:00 AM', description: 'Morning oceanfront aarti' },
      { name: 'Madhyahna Aarti', hindiName: 'मध्याह्न आरती', time: '12:00 PM', description: 'Midday prayer' },
      { name: 'Sandhya Aarti', hindiName: 'सायं आरती', time: '07:00 PM', description: 'Dusk aarti accompanied by roaring Arabian sea waves' }
    ],
    history: 'The First among the Twelve Jyotirlingas, Somnath stands as a testament to eternal resilience. Built in the Chalukya (Solanki) architectural style, the temple features the historic Baan Stambh pointing straight to the South Pole without any landmass.',
    significance: 'Originally consecrated by Chandra Dev (the Moon God) to cure a curse, offering peace of mind and inner light.',
    darshanHours: '06:00 AM to 09:30 PM',
    virtualOfferings: { flowers: 87500, diyas: 65400, bells: 210000, prasad: 31000 }
  },
  {
    id: 'siddhivinayak-mumbai',
    name: 'Shree Siddhivinayak Ganapati Mandir',
    hindiName: 'श्री सिद्धिविनायक गणपति मंदिर मुंबई',
    deity: 'Lord Ganesha (Vighnaharta)',
    deityType: 'ganesha',
    location: 'Prabhadevi, Mumbai, Maharashtra',
    city: 'Mumbai',
    state: 'Maharashtra',
    lat: 19.0169,
    lng: 72.8304,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Siddhivinayak Mandir Prabhadevi Live Darshan Feed',
    isLive: true,
    viewersCount: 31800,
    bannerImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'siddhivinayak-live',
    officialStreamWebsite: 'https://siddhivinayak.org',
    architecture: {
      style: 'Multi-tiered Kalash Style with Dome Architecture (शिखर कलश शैली)',
      builtCentury: '1801 CE by Laxman Vithu and Deubai Patil; Rebuilt into modern complex in 1993',
      patron: 'Deubai Patil (built for childless mothers)',
      highlights: [
        'Idol carved from a single piece of black stone with the trunk tilted right (Siddhi trunk)',
        'Gold-plated 3.7-meter central crown kalash weighing over 1500 kg',
        'Ashtavinayak depictions sculpted inside the sanctum inner wooden dome',
        'Silver-plated sanctum doors engraved with images of Riddhi and Siddhi'
      ],
      materials: 'Black monolithic granite idol, Burma teak wood, marble floorings, and 24k gold leafing'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
        title: 'Siddhivinayak Prabhadevi Golden Dome',
        caption: 'The luminous sanctum kalash in the heart of Mumbai.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
        title: 'Angaraki Sankashti Chaturthi Darshan',
        caption: 'Millions of devotees queueing peacefully on auspicious Tuesday nights.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Chhatrapati Shivaji Maharaj International Airport (BOM) - 11 km',
      nearestRailway: 'Dadar Central & Western Junctions (DDR) - 1.5 km',
      roadConnectivity: 'Centrally situated in Prabhadevi accessible via Bandra-Worli Sea Link & Western Express',
      bestTimeToVisit: 'Year-round; Angaraki Sankashti Chaturthi & Ganeshotsav in Bhadrapada',
      dressCode: 'Decent traditional Indian clothing. Sleeveless tops and short shorts are discouraged.'
    },
    festivalsCelebrated: ['Ganesh Chaturthi (10 Days)', 'Angaraki Sankashti Chaturthi', 'Maghi Ganeshotsav', 'Diwali Padwa'],
    aartiTimings: [
      { name: 'Kakad Aarti', hindiName: 'काकड आरती', time: '05:30 AM - 06:00 AM', description: 'Morning devotional prayer' },
      { name: 'Shree Darshan', hindiName: 'मुख्य दर्शन', time: '06:00 AM - 12:15 PM', description: 'Devotee archana' },
      { name: 'Maha Aarti', hindiName: 'महाआरती (मंगलवार विशेष)', time: '07:30 PM - 08:00 PM', description: 'Grand Tuesday evening aarti' }
    ],
    history: 'Consecrated on 19 November 1801 by Laxman Vithu and Deubai Patil, this temple is revered as Navasacha Ganapati (one who fulfills heartfelt vows). The black stone idol features Ganesha’s trunk turning to the right, which represents Siddhi (attainment).',
    significance: 'Removal of all obstacles, career success, and auspicious beginnings (Shubharambh).',
    darshanHours: '05:30 AM to 10:00 PM',
    virtualOfferings: { flowers: 182000, diyas: 94000, bells: 380000, prasad: 54000 }
  },
  {
    id: 'vaishno-devi',
    name: 'Shri Mata Vaishno Devi Shrine',
    hindiName: 'श्री माता वैष्णो देवी धाम कटरा',
    deity: 'Mata Vaishno Devi (Maha Kali, Maha Lakshmi, Maha Saraswati)',
    deityType: 'devi',
    location: 'Trikuta Hills, Katra, Jammu & Kashmir',
    city: 'Katra',
    state: 'Jammu & Kashmir',
    lat: 33.0308,
    lng: 74.9490,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Holy Cave Shrine Bhawan Mata Vaishno Devi Live Darshan',
    isLive: true,
    viewersCount: 46200,
    bannerImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'vaishnodevi-live',
    officialStreamWebsite: 'https://maavaishnodevi.org',
    architecture: {
      style: 'Natural Sacred Mountain Cave Shrine (प्राकृतिक गुफा धाम)',
      builtCentury: 'Ancient Puranic; Managed by SMVDSB established in 1986',
      patron: 'Shri Mata Vaishno Devi Shrine Board & Pandit Shridhar',
      highlights: [
        'Natural rock formation in the 98-foot sacred cave representing the Three Pindies (Maha Kali, Maha Lakshmi, Maha Saraswati)',
        'Ardhkuwari cave halfway up the Trikuta mountain where Mata meditated for 9 months',
        'Bhairon Ghati temple at the mountain top essential to complete the pilgrimage',
        'Eco-friendly battery cars, ropeways, and helicopter connectivity across Katra to Bhawan'
      ],
      materials: 'Natural limestone and dolomite mountain cavern, reinforced stone tracks, and marble halls'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80',
        title: 'Trikuta Mountain Yatra Track',
        caption: 'The scenic 13 km mountain path winding up through the Himalayas.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
        title: 'Bhawan Illumination at Night',
        caption: 'The holy Bhawan illuminated with fairy lights amidst misty peaks.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Jammu Civil Airport (IXJ) - 50 km to Katra base camp',
      nearestRailway: 'Shri Mata Vaishno Devi Katra (SVDK) - 1.5 km to base',
      roadConnectivity: 'Direct Vande Bharat trains and NH-44 connecting Delhi, Chandigarh, and Jammu',
      bestTimeToVisit: 'March to November (Navratri periods witness divine festive aura)',
      dressCode: 'Comfortable pilgrimage clothing suited for mountain walk; Modest attire for holy cave.'
    },
    festivalsCelebrated: ['Chaitra Navratri', 'Sharad Navratri', 'Diwali', 'New Year Pilgrimage'],
    aartiTimings: [
      { name: 'Pratah Aarti', hindiName: 'प्रातः दिव्य आरती', time: '06:00 AM - 08:00 AM', description: 'Sacred pindi aarti in the holy sanctum' },
      { name: 'Sandhya Aarti', hindiName: 'सायं दिव्य आरती', time: '07:00 PM - 09:00 PM', description: 'Evening floral decoration and stotras' }
    ],
    history: 'Located in the holy Trikuta mountain cave at 5200 feet, the shrine houses the three natural rock pinnacles known as the Holy Pindies. Millions undertake the 13 km yatra from Katra to seek Maa Vaishnavi’s divine grace.',
    significance: 'Maa Vaishno Devi is revered for bestowing spiritual purity, protection, and fulfillment of virtuous wishes.',
    darshanHours: 'Open 24/7 (except during Aarti hours)',
    virtualOfferings: { flowers: 215000, diyas: 165000, bells: 520000, prasad: 89000 }
  },
  {
    id: 'ram-mandir-ayodhya',
    name: 'Shri Ram Janmabhoomi Mandir',
    hindiName: 'श्री राम जन्मभूमि मंदिर अयोध्या',
    deity: 'Bhagwan Ram Lalla',
    deityType: 'rama',
    location: 'Ayodhya, Uttar Pradesh',
    city: 'Ayodhya',
    state: 'Uttar Pradesh',
    lat: 26.7956,
    lng: 82.1943,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Ayodhya Ram Janmabhoomi Ram Lalla Live Aarti & Darshan',
    isLive: true,
    viewersCount: 68400,
    bannerImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'ayodhya-ramlalla-live',
    officialStreamWebsite: 'https://srjbtkshetra.org',
    architecture: {
      style: 'Gurjara-Chalukya / Nagara Classical Temple Architecture (नागर शैली)',
      builtCentury: 'Consecrated 22 January 2024 (Pran Pratishtha by PM Narendra Modi)',
      patron: 'Shri Ram Janmabhoomi Teerth Kshetra Trust & Chief Architect Chandrakant Sompura',
      highlights: [
        'Built entirely without iron or steel, designed to withstand earthquakes and last over 1000 years',
        'Five mandapas: Nritya Mandap, Rang Mandap, Sabha Mandap, Prarthana Mandap, and Kirtan Mandap',
        '360 meticulously hand-carved pillars depicting Ramayana episodes and 44 teak wood gold-plated doors',
        'Surya Tilak mechanism designed by CBRI scientists that bathes Ram Lalla’s forehead with sunlight on every Ram Navami'
      ],
      materials: 'Bansi Paharpur pink sandstone from Rajasthan, Makrana white marble, and Shaligram stone'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
        title: 'Shri Ram Lalla Garbhagriha',
        caption: 'The divine 5-year-old balak idol carved in Krishna Shila stone.'
      },
      {
        url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
        title: 'Bansi Paharpur Sandstone Carvings',
        caption: 'The majestic 161-foot tall Shikhara and sculpted Mandapa colonnade.'
      },
      {
        url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
        title: 'Sarayu River Aarti & Ram Ki Paidi',
        caption: 'Sacred river Sarayu glowing with millions of earthen diyas during Deepotsav.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Maharishi Valmiki International Airport, Ayodhya Dham (AYJ) - 8 km',
      nearestRailway: 'Ayodhya Dham Junction (AY) - 1.5 km, Ayodhya Cantt (AYC) - 6 km',
      roadConnectivity: 'Connected by Lucknow-Gorakhpur National Highway and modern electric bus transit',
      bestTimeToVisit: 'October to March; Ram Navami in Chaitra and Deepotsav in Kartik',
      dressCode: 'Decent traditional Indian clothing. Footwear, bags, and mobile phones deposited at pilgrim facilitation center.'
    },
    festivalsCelebrated: ['Ram Navami (Surya Tilak)', 'Deepotsav', 'Vivah Panchami', 'Hanuman Jayanti', 'Janaki Navami'],
    aartiTimings: [
      { name: 'Mangala Aarti', hindiName: 'मंगला आरती', time: '04:30 AM', description: 'Dawn aarti awakening Ram Lalla' },
      { name: 'Shringar Aarti', hindiName: 'श्रृंगार आरती', time: '06:30 AM', description: 'Sacred adornment with silk robes and flowers' },
      { name: 'Bhog Aarti', hindiName: 'भोग आरती', time: '12:00 PM', description: 'Midday royal meal offering' },
      { name: 'Sandhya Aarti', hindiName: 'संध्या आरती', time: '07:30 PM', description: 'Evening camphor light ceremony' },
      { name: 'Shayan Aarti', hindiName: 'शयन आरती', time: '10:00 PM', description: 'Night lullaby' }
    ],
    history: 'Built in the classical Nagara architectural style on the sacred birthplace of Lord Rama along the Sarayu river, the grand temple represents the cultural soul of Bharatvarsha, crafted with pink sandstone from Bansi Paharpur.',
    significance: 'Maryada Purushottam Shri Rama embodies righteousness, truth, and ideal dharma.',
    darshanHours: '06:30 AM to 09:30 PM',
    virtualOfferings: { flowers: 340000, diyas: 280000, bells: 790000, prasad: 145000 }
  },
  {
    id: 'golden-temple-amritsar',
    name: 'Sachkhand Sri Harmandir Sahib',
    hindiName: 'श्री हरमंदिर साहिਬ (स्वर्ण मंदिर अमृतसर)',
    deity: 'Sri Guru Granth Sahib Ji',
    deityType: 'sikh',
    location: 'Amritsar, Punjab',
    city: 'Amritsar',
    state: 'Punjab',
    lat: 31.6200,
    lng: 74.8765,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Sachkhand Sri Harmandir Sahib 24/7 Gurbani Kirtan Live',
    isLive: true,
    viewersCount: 58900,
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'harmandir-sahib-live',
    officialStreamWebsite: 'https://sgpc.net',
    architecture: {
      style: 'Sikh Architecture with Rajput & Mughal influences (ਸਿੱਖ ਆਰਕੀਟੈਕਚਰ)',
      builtCentury: 'Completed 1604 CE; Golden foil plating completed in 1830 by Maharaja Ranjit Singh',
      patron: 'Guru Arjan Dev Ji & Maharaja Ranjit Singh (Sher-e-Punjab)',
      highlights: [
        'Built at a lower level than surrounding land, requiring devotees to step downwards symbolizing humility',
        'Four entrance doors in four cardinal directions symbolizing universal brotherhood welcoming all faiths',
        'Surrounded by the Amrit Sarovar (Nectar Pool) fed by the Ravi river',
        'World’s largest community kitchen (Guru Ka Langar) serving free nutritious meals to over 100,000 pilgrims daily'
      ],
      materials: 'White Italian marble inlaid with semi-precious stones (Pietra Dura) and pure 24k gold foil'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
        title: 'Golden Sanctum Floating on Amrit Sarovar',
        caption: 'The reflection of the gilded sanctum in the sacred nectar waters at dawn.'
      },
      {
        url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
        title: 'Bandi Chhor Divas & Diwali Illumination',
        caption: 'Thousands of oil lamps illuminating the Parikrama in celestial radiance.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Sri Guru Ram Dass Jee International Airport, Amritsar (ATQ) - 12 km',
      nearestRailway: 'Amritsar Junction (ASR) - 2 km (Free SGPC electric shuttle available)',
      roadConnectivity: 'Grand Trunk Road (NH-1 / NH-44) from Delhi and Chandigarh',
      bestTimeToVisit: 'October to March (Parkash Purab & Bandi Chhor Divas celebrations)',
      dressCode: 'Head must be respectfully covered with a scarf/rumal. Bare feet washed in Charan Ganga before entry. No tobacco/alcohol.'
    },
    festivalsCelebrated: ['Guru Nanak Gurpurab', 'Baisakhi (Khalsa Sajna Divas)', 'Bandi Chhor Divas (Diwali)', 'Guru Gobind Singh Parkash Purab', 'Hola Mohalla'],
    aartiTimings: [
      { name: 'Amrit Vela Kirtan', hindiName: 'ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਕੀਰਤਨ', time: '02:30 AM - 04:30 AM', description: 'Asa Di Var recitation during nectar hours' },
      { name: 'Palki Sahib Sewa', hindiName: 'ਪਾਲਕੀ ਸਾਹਿਬ ਸੇਵਾ', time: '04:30 AM - 05:00 AM', description: 'Ceremonial procession of Guru Granth Sahib' },
      { name: 'Rehras Sahib', hindiName: 'ਰਹਿਰਾਸ ਸਾਹਿਬ', time: '06:30 PM - 07:30 PM', description: 'Evening devotional recitation' },
      { name: 'Sukh Asan Sewa', hindiName: 'ਸੁੱਖ ਆਸਣ ਸੇਵਾ', time: '10:00 PM - 10:45 PM', description: 'Night retirement to Kotha Sahib' }
    ],
    history: 'Founded by the fourth Sikh Guru, Guru Ram Das Ji, and completed by Guru Arjan Dev Ji who installed the Adi Granth in 1604. It has four entrances welcoming all humankinds regardless of caste, creed, or faith, and serves hundreds of thousands daily in the Guru Ka Langar.',
    significance: 'Spiritual equality, selfless seva, and uninterrupted divine Gurbani contemplation.',
    darshanHours: 'Open 24 Hours Daily',
    virtualOfferings: { flowers: 195000, diyas: 110000, bells: 140000, prasad: 210000 }
  },
  {
    id: 'shirdi-sai-sansthan',
    name: 'Shri Saibaba Sansthan Trust',
    hindiName: 'श्री साईंबाबा संस्थान शिर्डी',
    deity: 'Shri Sai Baba',
    deityType: 'all',
    location: 'Shirdi, Ahmednagar, Maharashtra',
    city: 'Shirdi',
    state: 'Maharashtra',
    lat: 19.7667,
    lng: 74.4767,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Shri Saibaba Samadhi Mandir Shirdi 24/7 Live Telecast',
    isLive: true,
    viewersCount: 29800,
    bannerImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'shirdi-sai-live',
    officialStreamWebsite: 'https://sai.org.in',
    architecture: {
      style: 'Modern Devotional Shrine & Heritage Wada Architecture (समाधि मंदिर शैली)',
      builtCentury: '1918 CE (Originally constructed as Buti Wada by Gopalrao Buti of Nagpur)',
      patron: 'Shreemant Gopalrao Buti of Nagpur & Devotees',
      highlights: [
        'Italian white marble statue of Sai Baba sculpted by Balaji Vasant Talim installed in 1954',
        'Akhand Dhuni in Dwarkamai perpetually burning since the 19th century producing sacred Udi',
        'Historic neem tree in Gurusthan where Sai Baba was first spotted as a young ascetic',
        'Chavadi where Baba stayed on alternate nights during processions'
      ],
      materials: 'White Italian marble, yellow stone from Buti Wada, teak woodwork, and golden throne'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
        title: 'Sai Baba Samadhi Mandir Sanctum',
        caption: 'The sacred Samadhi of Sadguru Sai Baba adorned in gold and velvet shawls.'
      },
      {
        url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
        title: 'Dwarkamai & Akhand Dhuni',
        caption: 'The humble mosque where Sai Baba lived for over 60 years demonstrating universal love.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Shirdi International Airport, Kakadi (SAG) - 14 km',
      nearestRailway: 'Sainagar Shirdi Railway Station (SNSI) - 2.5 km, Kopargaon (KPG) - 16 km',
      roadConnectivity: 'Samruddhi Mahamarg expressway connects Mumbai to Shirdi in 3.5 hours',
      bestTimeToVisit: 'October to March; Ram Navami, Guru Purnima & Vijayadashami festivals',
      dressCode: 'Modest and decent clothing. Traditional Indian attire preferred.'
    },
    festivalsCelebrated: ['Ram Navami', 'Guru Purnima', 'Vijayadashami (Sai Punyatithi)', 'Diwali'],
    aartiTimings: [
      { name: 'Kakad Aarti', hindiName: 'काकड आरती', time: '04:30 AM - 05:00 AM', description: 'Morning awakening aarti' },
      { name: 'Madhyan Aarti', hindiName: 'मध्याह्न आरती', time: '12:00 PM - 12:30 PM', description: 'Noon offering' },
      { name: 'Dhoop Aarti', hindiName: 'धूप आरती', time: 'Sunset / 06:15 PM', description: 'Evening incense ritual' },
      { name: 'Shej Aarti', hindiName: 'शेज आरती', time: '10:30 PM - 10:50 PM', description: 'Night retirement prayer' }
    ],
    history: 'The sacred Samadhi temple where the 19th-century saint Sai Baba lived and gave his core teaching: "Sabka Malik Ek" (One God governs all). Pilgrims from across the world visit the sanctum, Dwarkamai, and Chavadi.',
    significance: 'Shraddha (faith) and Saburi (patience), healing grace, and universal compassion.',
    darshanHours: '04:00 AM to 11:15 PM',
    virtualOfferings: { flowers: 134000, diyas: 89000, bells: 245000, prasad: 61000 }
  },
  {
    id: 'palitana-jain-tirth',
    name: 'Palitana Shatrunjaya Jain Tirth',
    hindiName: 'पालीताना शत्रुंजय जैन महातीर्थ',
    deity: 'Lord Rishabhanatha (Adinath Bhagwan)',
    deityType: 'jain',
    location: 'Palitana, Bhavnagar, Gujarat',
    city: 'Palitana',
    state: 'Gujarat',
    lat: 21.5034,
    lng: 71.8687,
    streamUrl: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=1&playsinline=1&rel=0',
    streamTitle: 'Palitana Adinath Chaumukha Mandir Live Stream',
    isLive: true,
    viewersCount: 16800,
    bannerImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-and-incense-in-a-temple-43093-large.mp4',
    youtubeVideoId: 'palitana-live',
    officialStreamWebsite: 'https://anandjitirthji.org',
    architecture: {
      style: 'Maru-Gurjara & Solanki Jain Architecture (सफेद संगमरमर जैन स्थापत्य)',
      builtCentury: '900 CE to 1600 CE (Constructed over 9 centuries across the Shatrunjaya hills)',
      patron: 'Kumarpal, Vastupal-Tejpal, Seth Anandji Kalyanji Pedhi',
      highlights: [
        'World’s only hill with more than 863 masterfully sculpted white marble Jain temples',
        'Chaumukha temple of Bhagwan Adinath with soaring towers visible from miles away',
        'Exquisite filigree marble ceilings (Mandapa carvings) showing geometric and lotus rosettes',
        'Sacred 3800 stone steps climb from the base camp to the peaks of Shatrunjaya'
      ],
      materials: 'Pure Makrana white marble, Dhrangadhra stone, and gold ornaments'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
        title: 'Shatrunjaya Hill Temple Complex',
        caption: 'Over 860 shining marble tirthas clustered like a celestial city atop the hills.'
      },
      {
        url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80',
        title: 'Adinath Bhagwan Chaumukha Temple',
        caption: 'The four-faced sanctum radiating peace across the four cardinal directions.'
      }
    ],
    travelInfo: {
      nearestAirport: 'Bhavnagar Airport (BHO) - 52 km, Ahmedabad International (AMD) - 215 km',
      nearestRailway: 'Palitana Station (PIT) - 2 km, Sihor Junction (SOJ) - 28 km',
      roadConnectivity: 'Well connected by state highways from Bhavnagar, Ahmedabad, and Vadodara',
      bestTimeToVisit: 'November to February; Kartik Purnima & Chaitra Purnima Maha Yatra days',
      dressCode: 'Strict white or pale traditional Jain puja clothes required for touching the idols (Pakshal). No leather allowed.'
    },
    festivalsCelebrated: ['Kartik Sud Poonam Yatra', 'Chaitri Poonam', 'Mahavir Janma Kalyanak', 'Paryushan Mahaparva'],
    aartiTimings: [
      { name: 'Pakshal Pooja', hindiName: 'प्रक्षाल पूजा', time: '06:30 AM - 07:30 AM', description: 'Morning sacred bathing of Tirthankara idols' },
      { name: 'Ashtaprakari Pooja', hindiName: 'अष्टप्रकारी पूजा', time: '08:00 AM - 10:30 AM', description: 'Eightfold ritual worship with saffron & flowers' },
      { name: 'Mangal Divo', hindiName: 'मंगल दीवो व आरती', time: '06:30 PM', description: 'Evening illuminated peace ceremony' }
    ],
    history: 'Shatrunjaya hill features over 860 magnificent marble temples carved with celestial precision, representing the holiest pilgrimage site for the Svetambara Jain community where millions of souls attained Moksha.',
    significance: 'Non-violence (Ahimsa), self-restraint, and detachment leading to ultimate liberation.',
    darshanHours: '06:00 AM to 06:00 PM (No night stay permitted on hill)',
    virtualOfferings: { flowers: 65000, diyas: 48000, bells: 95000, prasad: 24000 }
  }
];

const allTemplesCatalog: Temple[] = [
  ...baseTemples,
  ...extendedTemplesList,
  ...extendedTemplesPart2,
  ...extendedTemplesPart3
];

const uniqueTempleMap = new Map<string, Temple>();
allTemplesCatalog.forEach(temple => {
  if (!uniqueTempleMap.has(temple.id)) {
    uniqueTempleMap.set(temple.id, temple);
  }
});

export const initialTemples: Temple[] = Array.from(uniqueTempleMap.values());

