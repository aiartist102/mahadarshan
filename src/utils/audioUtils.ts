// High-fidelity Vedic temple bell synthesizer using Web Audio API
export function playTempleBellSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;
    
    // Fundamental and harmonic overtone frequencies of a brass Panchadhatu temple bell
    const frequencies = [432, 864, 1296, 1728, 2592, 3456];
    const decays = [3.2, 2.6, 2.0, 1.5, 0.9, 0.6];
    const gains = [0.4, 0.25, 0.15, 0.1, 0.05, 0.03];
    
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      
      // Slight pitch wobble characteristic of resonant bell metal
      osc.frequency.exponentialRampToValueAtTime(freq * 0.998, now + decays[idx]);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(gains[idx], now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + decays[idx]);
    });
  } catch {
    // Graceful silent fallback if Web Audio is restricted by browser policy
  }
}

// Sankha (Conch) resonance chime
export function playConchSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(260, now + 0.4);
    osc.frequency.linearRampToValueAtTime(220, now + 1.8);
    
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 2.2);
  } catch {
    // Graceful fallback
  }
}
