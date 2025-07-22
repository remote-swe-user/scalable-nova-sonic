import React, { useState, useRef, useEffect } from 'react';

interface InputChatContentProps {
  content: string;
  onChangeContent: (content: string) => void;
  onSend: () => void;
  fullWidth?: boolean;
  resetDisabled?: boolean;
  hideReset?: boolean;
  disableMarginBottom?: boolean;
  disabled?: boolean;
  sendIcon?: React.ReactNode;
}

const InputChatContent: React.FC<InputChatContentProps> = ({
  content,
  onChangeContent,
  onSend,
  fullWidth = false,
  resetDisabled = false,
  hideReset = false,
  disableMarginBottom = false,
  disabled = false,
  sendIcon,
}) => {
  const [rows, setRows] = useState(3);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const newRows = Math.ceil(scrollHeight / 24); // Assuming line height is 24px
      setRows(Math.max(3, Math.min(newRows, 20)));
    }
  }, [content]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-11/12 md:w-10/12'} ${!disableMarginBottom ? 'mb-2' : ''}`}>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => onChangeContent(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={rows}
        disabled={disabled}
        className="w-full border border-gray-300 rounded-md p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Type your message here..."
      />
      <div className="absolute bottom-3 right-3 flex gap-2">
        {!hideReset && (
          <button
            disabled={resetDisabled}
            onClick={() => onChangeContent('')}
            className={`p-2 rounded-full ${resetDisabled ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-100'}`}
            title="Clear message"
          >
            ✕
          </button>
        )}
        <button
          onClick={onSend}
          disabled={disabled || !content.trim()}
          className={`p-2 rounded-full ${
            disabled || !content.trim() ? 'text-gray-300' : 'text-blue-500 hover:bg-blue-100'
          }`}
          title="Send message"
        >
          {sendIcon || '→'}
        </button>
      </div>
    </div>
  );
};

export default InputChatContent;
