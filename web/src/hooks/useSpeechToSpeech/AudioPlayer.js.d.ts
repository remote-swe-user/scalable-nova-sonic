export class AudioPlayer {
  constructor();
  addEventListener(event: string, callback: Function): void;
  start(): Promise<void>;
  bargeIn(): void;
  stop(): void;
  playAudio(samples: Float32Array): void;
  getSamples(): number[] | null;
  getVolume(): number;
}
