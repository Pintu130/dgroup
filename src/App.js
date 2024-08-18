import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Review from "./page/Review.jsx";
import Contact from "./page/Contact";
import NavBar from "./common/NavBar";
import ScrollTop from "./common/ScrollTop";
import ScrollProgressBar from "./common/ScrollProgressBar";
import Tracker from "./page/Tracker";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <ScrollProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/track" element={<Tracker />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        <ScrollTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
