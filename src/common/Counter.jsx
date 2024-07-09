// src/components/Counter.js
import React, { useEffect, useRef, useState } from 'react';
import useCounter from '../component/useCounter';
// import useCounter from '../useCounter';

const Counter = ({ value, label, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const count = useCounter(isVisible ? value : 0);

  const onScroll = () => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="text-center p-4" ref={ref}>
      <div className="text-6xl text-blue-500 font-extrabold w-36">{count}</div>
      <div className="text-xl pt-2">{label}</div>
    </div>
  );
};

export default Counter;
