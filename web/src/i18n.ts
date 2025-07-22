import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation resources
const resources = {
  en: {
    translation: {
      'voiceChat.title': 'Voice Chat with Nova Sonic',
      'voiceChat.start': 'Start Voice Chat',
      'voiceChat.close': 'End Session',
      'voiceChat.im_listening': "I'm listening...",
      'voiceChat.experimental_warning_title': 'Experimental Feature',
      'voiceChat.experimental_warning': 'This voice chat feature uses Amazon Nova Sonic via Bedrock. The feature may sometimes be unstable or have unexpected behavior.',
      'voiceChat.default_system_prompt': 'You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don\'t know the answer to a question, please don\'t share false information.',
      'chat.system_prompt': 'System prompt',
      'chat.initialize': 'Reset',
      'chat.show_system_prompt': 'Show system prompt',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
