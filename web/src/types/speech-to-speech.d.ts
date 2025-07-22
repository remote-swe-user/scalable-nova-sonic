export type SpeechToSpeechEventType =
  | 'ready'
  | 'end'
  | 'audioOutput'
  | 'audioInput'
  | 'textStart'
  | 'textOutput'
  | 'textStop'
  | 'promptStart'
  | 'systemPrompt'
  | 'audioStart'
  | 'audioStop';

export type SpeechToSpeechEvent = {
  direction: 'ctob' | 'btoc';
  event: SpeechToSpeechEventType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
};

export type Model = {
  modelId: string;
  region?: string;
  roleArn?: string;
};

export type UnrecordedMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};
