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
    <section className={`py-16 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold mb-10 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Why Choose Us</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className={`rounded-lg p-6 shadow transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}> 
            <div className={`text-3xl mb-3 flex justify-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-600'}`}>{item.icon}</div>
            <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
            <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
