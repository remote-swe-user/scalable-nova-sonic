import { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import VoiceChatPage from './pages/VoiceChatPage';
import './App.css';

function App() {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    try {
      // For development, we can use mock values if environment variables are not set
      const endpoint = import.meta.env.VITE_APP_SPEECH_TO_SPEECH_EVENT_API_ENDPOINT || 'https://example.com/event';
      
      // Configure Amplify with values from environment variables
      Amplify.configure({
        API: {
          Events: {
            endpoint: endpoint,
            region: 'us-east-1', // This should be configured based on your deployment
            defaultAuthMode: 'iam',
          }
        }
      });
      setIsConfigured(true);
    } catch (error) {
      console.error('Error configuring Amplify', error);
    }
  }, []);

  if (!isConfigured) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>Nova Sonic Voice Chat</h1>
      </header>
      <main>
        <VoiceChatPage />
      </main>
    </div>
  );
}

export default App;
