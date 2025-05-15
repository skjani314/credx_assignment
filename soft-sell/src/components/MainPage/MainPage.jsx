import HeroSection from "../HeroSection/HeroSection"
import HowItWorks from "../HowItWorks/HowItWorks"
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"
import Testimonials from "../Testimonials/Testimonials"
import ContactForm from "../ContactForm/ContactForm"
import Navbar from "../Navbar/Navbar"
import { useContext } from "react";
import Context from "../../context/Context"
import React from "react";

const MainPage = (props) => {
  const { darkMode } =useContext(Context);

  return (
    <div className={`font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <div className="pt-16">
        <HeroSection darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <WhyChooseUs darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <ContactForm darkMode={darkMode} />
      </div>
    </div>
  );
};

export default MainPage