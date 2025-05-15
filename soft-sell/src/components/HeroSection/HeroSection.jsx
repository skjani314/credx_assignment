import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Sell Unused Software Licenses with Ease
        </h1>
        <p className="text-lg text-gray-600 mb-8">
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