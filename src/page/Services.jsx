import React from "react";
import Card from "../common/Card";
import { Home_Slider2, Service } from "../assets";
import { ServicesCard } from "../assets/data";
import { useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import SubHeader from "../common/SubHeader";

const Services = () => {
  const location = useLocation();

  return (
    <div>
      {location?.pathname === "/services" && (
        <div className="my-12">
          <SubHeader img={Service} text={"Services"} />
        </div>
      )}

      <div className={`relative xs:mx-2 md:mx-10 overflow-hidden mb-20 ${location?.pathname === "/services" ? 'mt-10' : 'mt-16 md:mt-24 xl:mt' } `}>
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
            Our Services
          </h1>
          <div className="flex mt-2 md:my-10 " data-aos="slide-right">
            <p className="text-xl xs:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center">
              We Provide Best Packers and Movers Services
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center mx-5 my-10"
            data-aos="fade-up"
          >
            {ServicesCard?.map((item, index) => {
              return (
                <div key={index} className="">
                  <Card
                    title={item?.title}
                    imageUrl={item?.image}
                    description={item?.description}
                    icon={item?.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {location?.pathname === "/services" && (
        <div className="mt-10">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Services;
