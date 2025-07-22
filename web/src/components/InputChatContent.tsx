import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

interface InputChatContentProps {
  content: string;
  onChangeContent: (content: string) => void;
  onSend: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  disableMarginBottom?: boolean;
  resetDisabled?: boolean;
  hideReset?: boolean;
  sendIcon?: React.ReactNode;
}

const InputChatContent: React.FC<InputChatContentProps> = ({
  content,
  onChangeContent,
  onSend,
  fullWidth = false,
  disabled = false,
  disableMarginBottom = false,
  resetDisabled = false,
  hideReset = false,
  sendIcon,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey === false && !disabled) {
      e.preventDefault();
      onSend();
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [content]);

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${disableMarginBottom ? '' : 'mb-2'}`}>
      <div className={`border ${isFocused ? 'border-blue-500' : 'border-gray-300'} rounded-md bg-white`}>
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => onChangeContent(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full p-3 min-h-[100px] max-h-[300px] outline-none resize-none"
          disabled={disabled}
          placeholder="メッセージを入力..."
        />
        <div className="flex justify-end p-2 gap-2">
          {!hideReset && (
            <Button
              onClick={() => onChangeContent('')}
              outlined
              disabled={resetDisabled || disabled}
            >
              リセット
            </Button>
          )}
          <Button
            onClick={onSend}
            disabled={!content.trim() || disabled}
          >
            {sendIcon || '送信'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputChatContent;
