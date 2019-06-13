import { useState, useEffect } from 'react';

export default () => {
  const [windowSize, setWindowSize] = useState(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  });

  useEffect(() => {
    const onResize = () =>
      typeof window !== 'undefined' &&
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  });

  return windowSize;
};
