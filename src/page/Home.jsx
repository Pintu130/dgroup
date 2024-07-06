import React, { useState, useEffect } from 'react';
import { Home_Slider1 } from '../assets';

const Home = () => {
  const texts = ['Text1', 'Text2', 'Text3', 'Text4'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Home_Slider1})`,
          backgroundSize: 'cover',
          opacity: 0.7,
        }}
      ></div>

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-800 opacity-75 z-10"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
        <h1 className="text-4xl font-bold animate-slide">{texts[currentTextIndex]}</h1>
      </div>
    </div>
  );
};

export default Home;
