export * from './speech-to-speech';
export * from './model';

// 必要な型定義をここに追加
export interface UnrecordedMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}
