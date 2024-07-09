// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Contact from "./page/Contact";
import NavBar from "./common/NavBar";
import ScrollTop from "./common/ScrollTop";
import ScrollProgressBar from "./common/ScrollProgressBar";

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
        </Routes>
        <ScrollTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
