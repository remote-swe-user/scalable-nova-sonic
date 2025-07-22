import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ja: {
    translation: {
      voiceChat: {
        title: 'Nova Sonic 音声チャット',
        default_system_prompt: 'あなたは役立つAIアシスタントです。ユーザーの質問に簡潔かつ正確に答えてください。',
        start: '会話を開始',
        close: '会話を終了',
        im_listening: 'お話しください...',
        experimental_warning_title: '実験的機能',
        experimental_warning: 'この音声チャットは実験的な機能です。会話は録音されません。',
      },
      chat: {
        show_system_prompt: 'システムプロンプトを表示',
        system_prompt: 'システムプロンプト',
        initialize: '初期化',
      }
    }
  },
  en: {
    translation: {
      voiceChat: {
        title: 'Nova Sonic Voice Chat',
        default_system_prompt: 'You are a helpful AI assistant. Answer user questions concisely and accurately.',
        start: 'Start conversation',
        close: 'End conversation',
        im_listening: 'I\'m listening...',
        experimental_warning_title: 'Experimental Feature',
        experimental_warning: 'This voice chat is an experimental feature. Conversations are not recorded.',
      },
      chat: {
        show_system_prompt: 'Show system prompt',
        system_prompt: 'System prompt',
        initialize: 'Initialize',
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
