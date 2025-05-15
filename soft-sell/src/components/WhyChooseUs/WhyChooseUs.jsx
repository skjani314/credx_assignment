import React from 'react';
import { FaShieldAlt, FaRocket, FaHeadset, FaHandshake } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../../context/Context';

const features = [
  { icon: <FaShieldAlt />, title: 'Secure & Legal', desc: '100% compliant with licensing policies.' },
  { icon: <FaRocket />, title: 'Fast Process', desc: 'Quick evaluations and instant payments.' },
  { icon: <FaHeadset />, title: 'Support', desc: 'Friendly help whenever you need it.' },
  { icon: <FaHandshake />, title: 'Trusted Deals', desc: 'Transparent offers with no hidden charges.' },
];

const WhyChooseUs = () => {
  const {darkMode}=useContext(Context); 
  return (
    <section className={`py-20 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-100 via-white to-blue-50'}`}>
      <h2 className={`text-4xl font-extrabold mb-12 tracking-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>Why Choose Us</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {features.map((item, index) => (
          <div key={index} className={`rounded-2xl p-8 shadow-lg flex flex-col items-center transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white/95 border border-blue-100 hover:shadow-2xl'} group animate-cardfadein`} style={{animationDelay:`${0.1+index*0.12}s`}}>
            <div className={`flex items-center justify-center w-16 h-16 mb-6 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'} shadow-lg text-3xl group-hover:animate-bounce`}>{item.icon}</div>
            <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{item.title}</h3>
            <p className={`text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>{item.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes cardfadein {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-cardfadein { animation: cardfadein 0.7s cubic-bezier(.4,2,.6,1) both; }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
