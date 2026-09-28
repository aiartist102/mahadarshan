import { BirthProfile, CompleteKundaliData } from '../../data/vedicJyotishEngine';
import { Language } from '../../types';

export type JyotishViewId = 
  | 'hub'
  | 'janma-kundali'
  | 'kundali-matching'
  | 'rashi'
  | 'nakshatra'
  | 'lagna'
  | 'surya-rashi'
  | 'mangal-dosha'
  | 'kalasarpa-yoga'
  | 'sade-sati'
  | 'gemstone'
  | 'rudraksha'
  | 'baby-names'
  | 'pancha-pakshi'
  | 'prashna'
  | 'dasha'
  | 'ashtakavarga'
  | 'shadbala'
  | 'bhavabala'
  | 'upagraha'
  | 'sahasra-chandra'
  | 'vedic-time'
  | 'shraddha-tithi'
  | 'rashifal'
  | 'saved-kundalis'
  | 'celebrities';

export interface JyotishToolMeta {
  id: JyotishViewId;
  title: string;
  hindiTitle: string;
  gujaratiTitle: string;
  category: 'kundali' | 'calculators' | 'dosha' | 'astronomy' | 'remedies';
  description: string;
  iconName: string;
  badge?: string;
}

export const defaultBirthProfile: BirthProfile = {
  id: 'default-profile-1',
  name: 'Ananya Sharma',
  gender: 'female',
  birthDate: '1998-05-14',
  birthTime: '06:45',
  birthCity: 'Varanasi',
  birthState: 'Uttar Pradesh',
  birthCountry: 'India',
  latitude: 25.3176,
  longitude: 82.9739,
  elevation: 76,
  timezoneOffset: 5.5,
  timezoneName: 'Asia/Kolkata',
  ayanamsha: 'lahiri',
  houseSystem: 'equal',
  rahuKetuMode: 'true'
};
