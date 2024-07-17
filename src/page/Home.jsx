import React from "react";
import HomeSlider from "../component/HomeSlider";
import About from "./About";
import Counter from "../common/Counter";
import { TiStarburst } from "react-icons/ti";
import { FaUsers, FaUsersLine } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./Services";
import Choose from "./Choose";
import Footer from "./Footer";
AOS.init({
  duration: 1000,
});

const Home = () => {
  const counters = [
    { value: 10, label: "Years Experience", icon: <TiStarburst size={55} /> },
    { value: 135, label: "Team Members", icon: <FaUsersLine size={55} /> },
    { value: 2458, label: "Happy Clients", icon: <FaUsers size={55} /> },
    {
      value: 2989,
      label: "Booking Done",
      icon: <IoCheckmarkDoneCircleSharp size={55} />,
    },
  ];

  return (
    <div>
      <HomeSlider />
      <About />
      <div className="bg-gray-950 text-white py-20 flex flex-col justify-center items-center mt-16 md:mt-24 xl:mt-32">
        <div
          className="flex flex-wrap justify-center gap-10"
          data-aos="slide-up"
        >
          {counters.map((counter, index) => (
            <div
              key={index}
              className="border border-blue-950 rounded-md p-5 transition-transform duration-300 ease-in-out transform lg:hover:scale-110"
            >
              <p className="flex justify-center text-yellow-500">
                {counter?.icon}
              </p>
              <Counter
                value={counter.value}
                label={counter.label}
                icon="icon-path"
              />
            </div>
          ))}
        </div>
      </div>
     <Choose/>
     <Services/>
     <Footer/>
    </div>
  );
};

export default Home;
