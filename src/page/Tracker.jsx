import React from "react";

const Tracker = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-blue-200 w-[310px] h-[200px] xs:w-[350px] xs:h-[250px] md:w-[650px] md:h-[300px] xl:w-[800px] xl:h-[300px] flex items-center justify-center rounded-2xl shadow-2xl border border-blue-200">
        <div className="text-blue-700 text-4xl xs:text-5xl md:text-6xl xl:text-8xl font-bold">Coming Soon!</div>
      </div>
    </div>
  );
};

export default Tracker;
