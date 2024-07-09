// src/useCounter.js
import { useEffect, useState } from 'react';

const useCounter = (end, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, start, duration]);

  return count;
};

export default useCounter;
