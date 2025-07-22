/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SPEECH_TO_SPEECH_NAMESPACE: string;
  readonly VITE_APP_SPEECH_TO_SPEECH_EVENT_API_ENDPOINT: string;
  readonly VITE_APP_SPEECH_TO_SPEECH_MODEL_IDS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.svg?react' {
  import React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}
