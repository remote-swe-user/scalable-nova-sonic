import React, { useState, useEffect } from 'react';

const ScrollTopBottom: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className={`flex flex-col space-y-2 transition-opacity ${showButton ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={scrollToTop}
        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
        aria-label="Scroll to top"
      >
        ▲
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
        aria-label="Scroll to bottom"
      >
        ▼
      </button>
    </div>
  );
};

export default ScrollTopBottom;
