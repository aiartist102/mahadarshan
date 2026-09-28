import { Temple } from '../types';

export interface RitualInfo {
  name: string;
  hindiName: string;
  time: string;
  description: string;
  isCurrent: boolean;
  isPast: boolean;
  isUpcoming: boolean;
}

export interface TempleLiveStatus {
  status: 'LIVE' | 'STARTING SOON' | 'UPCOMING' | 'TEMPLE CLOSED' | 'OFFLINE';
  badgeColor: string;
  currentRitual: string;
  currentRitualHindi: string;
  nextRitual: string;
  nextRitualTime: string;
  countdownToNext: string;
  isTempleOpen: boolean;
  templeHours: string;
}

/**
 * Parses time string like "04:00 AM" or "04:00 AM - 05:00 AM" into minutes from midnight
 */
function parseTimeToMinutes(timeStr: string): number {
  if (!timeStr) return 0;
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();

  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

/**
 * Gets current time in minutes from midnight for Indian Standard Time (IST / Asia/Kolkata)
 */
function getISTMinutes(): { currentMinutes: number; hours: number; minutes: number; seconds: number } {
  const now = new Date();
  // Format in Asia/Kolkata
  const istFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });
  
  const parts = istFormatter.formatToParts(now);
  const hours = parseInt(parts.find(p => p.type === 'hour')?.value || '12', 10);
  const minutes = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
  const seconds = parseInt(parts.find(p => p.type === 'second')?.value || '0', 10);

  return {
    currentMinutes: hours * 60 + minutes,
    hours,
    minutes,
    seconds
  };
}

/**
 * Detects real-time ritual status, next ritual countdown, and temple open/closed status
 */
export function getTempleLiveStatus(temple: Temple): TempleLiveStatus {
  const { currentMinutes, seconds } = getISTMinutes();

  const openingMinutes = temple.openingTime ? parseTimeToMinutes(temple.openingTime) : 4 * 60; // default 4 AM
  const closingMinutes = temple.closingTime ? parseTimeToMinutes(temple.closingTime) : 23 * 60; // default 11 PM

  const isTempleOpen = currentMinutes >= openingMinutes && currentMinutes <= closingMinutes;

  // Evaluate Aartis
  const aartis = temple.aartiTimings || [];
  let currentRitual = isTempleOpen ? 'General Sacred Darshan (दर्शन)' : 'Temple Closed (विश्राम)';
  let currentRitualHindi = isTempleOpen ? 'सामान्य पावन दर्शन' : 'मंदिर विश्राम / कपाट बंद';
  let nextRitual = 'Mangala Aarti (प्रातः मंगला आरती)';
  let nextRitualTime = '04:00 AM';
  let minDiffToNext = 999999;

  for (const aarti of aartis) {
    const startMin = parseTimeToMinutes(aarti.time.split('-')[0].trim());
    const endMin = aarti.time.includes('-') 
      ? parseTimeToMinutes(aarti.time.split('-')[1].trim())
      : startMin + 45;

    // Check if right now is within this aarti window
    if (currentMinutes >= startMin && currentMinutes <= endMin) {
      currentRitual = `${aarti.name} (LIVE AARTI)`;
      currentRitualHindi = `${aarti.hindiName} (सजीव आरती)`;
    }

    // Find closest upcoming aarti
    let diff = startMin - currentMinutes;
    if (diff < 0) diff += 24 * 60; // next day

    if (diff < minDiffToNext) {
      minDiffToNext = diff;
      nextRitual = aarti.name;
      nextRitualTime = aarti.time.split('-')[0].trim();
    }
  }

  // Format countdown string HH:MM:SS
  const remainingHours = Math.floor(minDiffToNext / 60);
  const remainingMins = minDiffToNext % 60;
  const remainingSecs = (60 - seconds) % 60;
  const countdownToNext = `${String(remainingHours).padStart(2, '0')}:${String(remainingMins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`;

  // Determine Stream Status
  let status: TempleLiveStatus['status'] = 'LIVE';
  let badgeColor = 'bg-emerald-600';

  if (!isTempleOpen) {
    status = 'TEMPLE CLOSED';
    badgeColor = 'bg-stone-500';
  } else if (temple.isLive) {
    status = 'LIVE';
    badgeColor = 'bg-red-600 animate-pulse';
  } else if (minDiffToNext <= 30) {
    status = 'STARTING SOON';
    badgeColor = 'bg-amber-600 animate-pulse';
  } else {
    status = 'UPCOMING';
    badgeColor = 'bg-indigo-600';
  }

  return {
    status,
    badgeColor,
    currentRitual,
    currentRitualHindi,
    nextRitual,
    nextRitualTime,
    countdownToNext,
    isTempleOpen,
    templeHours: temple.darshanHours || '04:00 AM - 11:00 PM'
  };
}

/**
 * Returns list of aartis with past/current/upcoming statuses for schedule rendering
 */
export function getDetailedRitualsSchedule(temple: Temple): RitualInfo[] {
  const { currentMinutes } = getISTMinutes();

  return (temple.aartiTimings || []).map((aarti) => {
    const startMin = parseTimeToMinutes(aarti.time.split('-')[0].trim());
    const endMin = aarti.time.includes('-') 
      ? parseTimeToMinutes(aarti.time.split('-')[1].trim())
      : startMin + 45;

    const isCurrent = currentMinutes >= startMin && currentMinutes <= endMin;
    const isPast = currentMinutes > endMin;
    const isUpcoming = currentMinutes < startMin;

    return {
      name: aarti.name,
      hindiName: aarti.hindiName,
      time: aarti.time,
      description: aarti.description,
      isCurrent,
      isPast,
      isUpcoming
    };
  });
}
