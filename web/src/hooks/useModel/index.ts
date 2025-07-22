import { useMemo } from 'react';
import { BEDROCK_SPEECH_TO_SPEECH_MODELS, modelMetadata, ModelConfiguration } from '../../types/model';

export const MODELS = {
  speechToSpeechModelIds: BEDROCK_SPEECH_TO_SPEECH_MODELS,
  speechToSpeechModels: BEDROCK_SPEECH_TO_SPEECH_MODELS.map((modelId) => {
    return {
      modelId,
    };
  }) as ModelConfiguration[],
  modelDisplayName: (modelId: string) => {
    return modelMetadata[modelId]?.displayName || modelId;
  },
};

export const useModel = () => {
  return useMemo(() => MODELS, []);
};

export default useModel;
