import HeroSection from "../HeroSection/HeroSection"
import HowItWorks from "../HowItWorks/HowItWorks"
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"
import Testimonials from "../Testimonials/Testimonials"
import ContactForm from "../ContactForm/ContactForm"
import Navbar from "../Navbar/Navbar"
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import Context from "../../context/Context"
import React from "react";
import ComparisonTable from "../ComparisonTable/ComparisonTable";
import TrustBadges from "../TrustBadges/TrustBadges";
import ChatWidget from "../ChatWidget/ChatWidget";
import BlogSection from "../BlogSection/BlogSection";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";

const MainPage = (props) => {
  const { darkMode } =useContext(Context);

  return (
    <div className={`font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <div className="pt-16">
        <HeroSection  />
        <HowItWorks  />
        <ComparisonTable />
        <WhyChooseUs  />
        <TrustBadges />
        <BlogSection />
        <NewsletterSignup />
        <Testimonials  />
        <ContactForm  />
        <FAQ />
      </div>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default MainPage