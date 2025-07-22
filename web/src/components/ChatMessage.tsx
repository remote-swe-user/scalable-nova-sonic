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
  hideFeedback = false,
  hideSaveSystemContext = false,
  loading = false
}) => {
  return (
    <div className="p-4">
      <div className="font-bold">
        {chatContent.role === 'system' ? 'System' : chatContent.role === 'user' ? 'You' : 'Assistant'}
      </div>
      <div className="whitespace-pre-wrap">
        {chatContent.content}
        {loading && (
          <span className="inline-block w-1 h-4 ml-1 bg-gray-500 animate-pulse"></span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
