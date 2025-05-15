import React from 'react';
import { useContext } from 'react';
import Context from '../../context/Context';
const HeroSection = () => {


  const {darkMode} = useContext(Context);


  return (
    <section className={`py-20 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Sell Unused Software Licenses with Ease
        </h1>
        <p className={`text-lg mb-8 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          SoftSell helps you unlock the value of your unused or expired licenses — safely, instantly, and legally.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default HeroSection;