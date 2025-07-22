import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      voiceChat: {
        title: 'Voice Chat with Nova Sonic',
        start: 'Start Voice Chat',
        close: 'End Voice Chat',
        im_listening: 'I\'m listening...',
        experimental_warning_title: 'Experimental Feature',
        experimental_warning: 'This voice chat feature is experimental. It uses Amazon Nova Sonic to enable voice conversations.',
        default_system_prompt: 'You are a helpful assistant. Respond concisely and clearly to the user\'s questions.'
      },
      chat: {
        system_prompt: 'System Prompt',
        show_system_prompt: 'Show system prompt',
        initialize: 'Reset to Default'
      }
    }
  },
  ja: {
    translation: {
      voiceChat: {
        title: 'Nova Sonicによる音声チャット',
        start: '音声チャットを開始',
        close: '音声チャットを終了',
        im_listening: '聞いています...',
        experimental_warning_title: '試験的機能',
        experimental_warning: 'この音声チャット機能は試験的なものです。Amazon Nova Sonicを使用して音声会話を可能にします。',
        default_system_prompt: 'あなたは役立つアシスタントです。ユーザーの質問に簡潔かつ明確に答えてください。'
      },
      chat: {
        system_prompt: 'システムプロンプト',
        show_system_prompt: 'システムプロンプトを表示',
        initialize: 'デフォルトにリセット'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
