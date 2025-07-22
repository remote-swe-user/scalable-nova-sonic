import React from 'react';

const ScrollTopBottom: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={scrollToTop}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        title="一番上へスクロール"
      >
        ↑
      </button>
      <button
        onClick={scrollToBottom}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        title="一番下へスクロール"
      >
        ↓
      </button>
    </div>
  );
};

export default ScrollTopBottom;
