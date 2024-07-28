import React from "react";
import { AboutUs, Home_Slider2 } from "../assets";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { MdEmojiTransportation, MdPrivacyTip } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import SubHeader from "../common/SubHeader";
import Footer from "./Footer/Footer";
import HomeCounter from "./HomeCounter";
AOS.init({
  duration: 1000,
});

const About = () => {
  const location = useLocation();

  return (
    <div>
      {location?.pathname === "/about" && (
        <div className="my-12">
          <SubHeader img={AboutUs} text={"About"} />
        </div>
      )}
      <div
        className={`relative h-screen xs:mx-2 md:mx-10 overflow-hidden ${
          location?.pathname === "/about" ? "mt-10" : "mt-16 md:mt-24 xl:mt-32"
        } `}
      >
        <img
          src={Home_Slider2}
          alt="about"
          className="absolute inset-0 object-cover w-full h-full opacity-100 rounded-xl"
        />
        <div className="absolute inset-0 bg-[#0891b2] opacity-50 rounded-xl"></div>
        <div className="relative text-white p-1 xs:p-2 md:p-4 ">
          <h1
            className="text-3xl md:text-4xl font-bold text-center text-yellow-500"
            data-aos="slide-up"
          >
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-5 md:gap-10 xl:gap-20 mx-2 xs:mx-4 md:mx-9 mt-5 md:mt-12">
            <div>
              <div className="flex mt-2 md:mt-4" data-aos="slide-right">
                <div className="border-l-4 md:border-l-8 border-yellow-500 h-16 md:h-32 lg:h-36 xl:h-48 mr-4"></div>
                <p className="text-xl xs:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">
                  We Are Leader In Packers and Movers Services
                </p>
              </div>
              <div data-aos="slide-right">
                <p className="my-2 xl:my-3">
                  Our company is working in packers and movers sector since last
                  10 years.
                </p>
                <p className="my-2 xl:my-3">
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
            <div
              className="space-y-2 md:space-y-7 mt-2 md:mt-5 font-bold"
              data-aos="slide-left"
            >
              <div className="flex items-center gap-3">
                <p className="text-yellow-500">
                  <FaBoxesPacking className="w-7 md:w-10 h-7 md:h-10" />
                </p>
                <p>Packing Service</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-yellow-500">
                  <FaTruckLoading className="w-7 md:w-10 h-7 md:h-10" />
                </p>
                <p>Loading Unloading Service</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-yellow-500">
                  <MdEmojiTransportation className="w-7 md:w-10 h-7 md:h-10" />
                </p>
                <p>Car and Bike Transportation</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-yellow-500">
                  <IoStorefront className="w-7 md:w-10 h-7 md:h-10" />
                </p>
                <p>Storag Service</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-yellow-500">
                  <GrServices className="w-7 md:w-10 h-7 md:h-10" />
                </p>
                <p>Transportation Service</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-yellow-500">
                  <MdPrivacyTip className="w-7 md:w-10 h-7 md:h-10" />
                </p>
                <p>Transit Insurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {location?.pathname === "/about" && (
        <div>
          <HomeCounter />
        </div>
      )}
      {location?.pathname === "/about" && (
        <div className="mt-10">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default About;
