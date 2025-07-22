/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SPEECH_TO_SPEECH_NAMESPACE: string;
  readonly VITE_APP_SPEECH_TO_SPEECH_EVENT_API_ENDPOINT: string;
  readonly VITE_APP_SPEECH_TO_SPEECH_MODEL_IDS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
