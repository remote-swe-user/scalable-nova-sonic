import React from 'react';
import { UnrecordedMessage } from '../types';

interface ChatMessageProps {
  chatContent: UnrecordedMessage;
  hideFeedback?: boolean;
  hideSaveSystemContext?: boolean;
  loading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  chatContent, 
  loading = false 
}) => {
  const { role, content } = chatContent;
  
  return (
    <div className={`p-4 ${role === 'assistant' ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="font-bold mb-2">
        {role === 'user' ? 'あなた' : role === 'assistant' ? 'アシスタント' : 'システム'}
      </div>
      <div className="whitespace-pre-wrap">
        {content}
        {loading && (
          <span className="inline-block animate-pulse">▋</span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
