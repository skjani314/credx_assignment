import React from 'react';
import { FaUpload, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../../context/Context';
const steps = [
  { icon: <FaUpload />, title: 'Upload License', description: 'Submit details of your unused licenses securely.' },
  { icon: <FaDollarSign />, title: 'Get Valuation', description: 'We evaluate your licenses and offer the best price.' },
  { icon: <FaCheckCircle />, title: 'Get Paid', description: 'Accept the offer and receive payment quickly.' },
];

const HowItWorks = () => {

const {darkMode} = useContext(Context);

  return (
    <section className={`py-16 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h2 className={`text-3xl font-bold mb-10 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>How It Works</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className={`rounded-lg shadow p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}> 
            <div className={`text-4xl mb-4 flex justify-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-600'}`}>{step.icon}</div>
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
            <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
