import React from "react";
import HomeSlider from "../component/HomeSlider";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./Services";
import Choose from "./Choose";
import Footer from "./Footer/Footer.jsx";
import HomeCounter from "./HomeCounter.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
AOS.init({
  duration: 1000,
});

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <About />
      <HomeCounter />
      <Choose />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
