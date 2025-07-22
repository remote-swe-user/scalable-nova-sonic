import { useEffect, useRef, useState } from 'react';

const useFollow = () => {
  const scrollableContainer = useRef<HTMLDivElement>(null);
  const [following, setFollowing] = useState(true);
  const [scroller, setScroller] = useState<number | null>(null);

  useEffect(() => {
    if (!following) {
      if (scroller) {
        clearInterval(scroller);
        setScroller(null);
      }
      return;
    }

    if (scroller) {
      return;
    }

    const id = window.setInterval(() => {
      if (scrollableContainer.current) {
        scrollableContainer.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, 300);
    setScroller(id);

    return () => {
      clearInterval(id);
    };
  }, [following, scroller]);

  return { scrollableContainer, following, setFollowing };
};

export default useFollow;
