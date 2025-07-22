export interface ModelMetadata {
  flags: {
    [key: string]: boolean;
  };
  displayName: string;
}

export const MODEL_FEATURE = {
  SPEECH_TO_SPEECH: { speechToSpeech: true },
};

export const modelMetadata: { [key: string]: ModelMetadata } = {
  // === Speech to Speech ===
  'amazon.nova-sonic-v1:0': {
    flags: MODEL_FEATURE.SPEECH_TO_SPEECH,
    displayName: 'Nova Sonic',
  },
};

export const BEDROCK_SPEECH_TO_SPEECH_MODELS = Object.keys(modelMetadata).filter(
  (model) => modelMetadata[model].flags.speechToSpeech
);

export type ModelConfiguration = {
  modelId: string;
  region?: string;
};
