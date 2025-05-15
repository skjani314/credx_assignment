import React from 'react';
import { useContext } from 'react';
import Context from '../../context/Context';

const bgLight = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"; // Example: software/tech background
const bgDark = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"; // Example: dark tech background

const HeroSection = () => {
  const { darkMode } = useContext(Context);
  const bgImage = darkMode ? bgDark : bgLight;

  return (
    <section
      id="hero"
      className={`py-24 px-4 text-center transition-colors duration-300 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-100 via-white to-blue-50'}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={`absolute inset-0 w-full h-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/70'}`} aria-hidden="true"></div>
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center animate-cardfadein">
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900 drop-shadow-lg'} animate-slidefadein`}>
          Sell Unused Software Licenses with Ease
        </h1>
        <p className={`text-lg mb-8 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-blue-700 drop-shadow'} animate-slidefadein2`}>
          SoftSell helps you unlock the value of your unused or expired licenses — safely, instantly, and legally.
        </p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 animate-fadein" style={{animationDelay:'0.3s'}}>Get a Free Valuation</a>
      </div>
      <div className="absolute left-0 right-0 bottom-0 flex justify-center gap-2 pb-4 z-0">
        <span className="w-3 h-3 bg-blue-500 rounded-full opacity-70 animate-pulse"></span>
        <span className="w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-pulse delay-200"></span>
        <span className="w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-pulse delay-400"></span>
      </div>
      <style>{`
        @keyframes cardfadein {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-cardfadein { animation: cardfadein 0.7s cubic-bezier(.4,2,.6,1) both; }
        @keyframes slidefadein {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slidefadein { animation: slidefadein 0.7s 0.1s both; }
        @keyframes slidefadein2 {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slidefadein2 { animation: slidefadein2 0.7s 0.2s both; }
        .animate-fadein { animation: fadein 0.7s 0.3s both; }
      `}</style>
    </section>
  );
};

export default HeroSection;