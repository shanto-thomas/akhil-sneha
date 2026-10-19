/**
 * Web Audio ambient wedding melody synthesizer
 * Plays a warm, romantic Canon in D chordal melody with acoustic piano & harp tone synthesis
 */

class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  // Pachelbel's Canon in D arpeggio frequencies (Hz)
  private readonly chords: number[][] = [
    // D Major: D3, A3, D4, F#4, A4
    [146.83, 220.0, 293.66, 369.99, 440.0],
    // A Major: A2, E3, A3, C#4, E4
    [110.0, 164.81, 220.0, 277.18, 329.63],
    // B Minor: B2, F#3, B3, D4, F#4
    [123.47, 185.0, 246.94, 293.66, 369.99],
    // F# Minor: F#2, C#3, F#3, A3, C#4
    [92.5, 138.59, 185.0, 220.0, 277.18],
    // G Major: G2, D3, G3, B3, D4
    [98.0, 146.83, 196.0, 246.94, 293.66],
    // D Major: D2, A2, D3, F#3, A3
    [73.42, 110.0, 146.83, 185.0, 220.0],
    // G Major: G2, D3, G3, B3, D4
    [98.0, 146.83, 196.0, 246.94, 293.66],
    // A Major: A2, E3, A3, C#4, E4
    [110.0, 164.81, 220.0, 277.18, 329.63],
  ];

  private currentChordIndex = 0;
  private currentNoteIndex = 0;

  private async initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch {
        // browser policy might require gesture
      }
    }
  }

  private playTone(freq: number, duration = 1.3, isBass = false) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;

    // Primary fundamental oscillator
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator(); // Gentle harmonic overtone for warmth
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = isBass ? 'triangle' : 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Warm subtle 2nd harmonic
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Warm low-pass acoustic filtering
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isBass ? 500 : 1300, now);

    const maxGain = isBass ? 0.08 : 0.06;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(maxGain, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(maxGain * 0.4, now + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  private step = () => {
    if (!this.isPlaying || !this.ctx) return;

    const chord = this.chords[this.currentChordIndex];
    const freq = chord[this.currentNoteIndex];
    const isBass = this.currentNoteIndex === 0;

    this.playTone(freq, isBass ? 1.8 : 1.1, isBass);

    this.currentNoteIndex++;
    if (this.currentNoteIndex >= chord.length) {
      this.currentNoteIndex = 0;
      this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
    }

    // Serene romantic pacing
    this.timerId = window.setTimeout(this.step, 360);
  };

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      await this.play();
      return true;
    }
  }

  public async play(): Promise<boolean> {
    await this.initContext();
    if (!this.ctx || this.ctx.state !== 'running') {
      return false;
    }
    if (this.isPlaying) return true;

    this.isPlaying = true;
    this.currentChordIndex = 0;
    this.currentNoteIndex = 0;
    this.step();
    this.notify();
    return true;
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }
}

export const weddingAudio = new WeddingAudioPlayer();
