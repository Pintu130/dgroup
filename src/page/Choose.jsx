import React from "react";
import { Chooes } from "../assets";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { choose } from "../assets/data";

const Choose = () => {
 
  return (
    <div>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg overflow-hidden flex">
          <div
            className="w-1/2 overflow-hidden border-r-8 border-r-blue-500 rounded-r-full"
            data-aos="slide-right"
          >
            <img
              src={Chooes}
              alt="Home Shifting"
              className="w-full object-cover"
            />
          </div>
          
          <div className="w-1/2 p-4">
            <h1
              className="text-3xl md:text-4xl font-bold  text-yellow-500 capitalize"
              data-aos="slide-up"
            >
              Why Choosing Us !
            </h1>
            <div>
              <h1
                className="text-xl md:text-2xl font-bold py-2"
                data-aos="slide-up"
              >
                Few Reasons Why People Choosing Us!
              </h1>
              {choose?.map((itme, index) => {
                return (
                  <div data-aos="slide-left" key={index}>
                    <div className="my-2">
                      <div className="flex items-center gap-2">
                        <IoCheckmarkDoneCircle className="w-8 h-8 text-yellow-500" />
                        <p className="text-xl font-semibold text-blue-500">
                          {itme?.title}
                        </p>
                      </div>
                      <p className="ml-10">
                        {itme?.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              <button className="bg-blue-500 px-3 py-2 text-white font-semibold rounded-full shadow-2xl hover:bg-blue-600" data-aos="slide-left">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
