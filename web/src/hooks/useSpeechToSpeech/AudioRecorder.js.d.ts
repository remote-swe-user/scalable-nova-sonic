export class AudioRecorder {
  constructor();
  addEventListener(event: string, callback: Function): void;
  start(): Promise<boolean>;
  stop(): void;
}
