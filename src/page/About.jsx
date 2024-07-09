import React from "react";
import { Home_Slider2 } from "../assets";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { MdEmojiTransportation, MdPrivacyTip } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});

const About = () => {
  return (
    <div className="relative h-screen mt-32 mx-10  overflow-hidden">
      <img
        src={Home_Slider2}
        alt="about"
        className="absolute inset-0 object-cover w-full h-full opacity-100 rounded-xl"
      />
      <div className="absolute inset-0 bg-blue-900 opacity-70 rounded-xl"></div>
      <div className="relative text-white p-4 ">
        <h1
          className="text-4xl font-bold text-center text-yellow-500"
          data-aos="slide-up"
        >
          About Us
        </h1>
        <div className="grid grid-cols-2 gap-20 mx-9 mt-12">
          <div>
            <div className="flex mt-4" data-aos="slide-right">
              <div className="border-l-8 border-yellow-500 h-48 mr-4"></div>
              <p className="text-6xl font-bold">
                We Are Leader In Packers and Movers Services
              </p>
            </div>
            <div data-aos="slide-right">
              <p className="my-3">
                Our company is working in packers and movers sector since last
                10 years.
              </p>
              <p className="my-3">
                Our company provides services in almost 98% cities of India.
              </p>
              <p>
                For over 10 years D Group Packers and Movers to the highest of
                standards. With man power available 24 hours a day to both
                commercial and Corperate industries we pride ourselves on
                treating the customer fairly as some emergencies. customer
                service and have the experience and professional knowledge to
                carry out any Problem .
              </p>
            </div>
          </div>
          <div className="space-y-7 mt-5 font-bold" data-aos="slide-left">
            <div className="flex items-center gap-3">
              <p className="text-yellow-500">
                <FaBoxesPacking size={40} />
              </p>
              <p>Packing Service</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-yellow-500">
                <FaTruckLoading size={40} />
              </p>
              <p>Loading Unloading Service</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-yellow-500">
                <MdEmojiTransportation size={40} />
              </p>
              <p>Car and Bike Transportation</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-yellow-500">
                <IoStorefront size={40} />
              </p>
              <p>Storag Service</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-yellow-500">
                <GrServices size={40} />
              </p>
              <p>Transportation Service</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-yellow-500">
                <MdPrivacyTip size={40} />
              </p>
              <p>Transit Insurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
