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
    <section className={`py-20 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-100 via-white to-blue-50'}`}>
      <h2 className={`text-4xl font-extrabold mb-12 tracking-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>How It Works</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div key={index} className={`relative rounded-2xl shadow-lg p-8 flex flex-col items-center transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white/95 border border-blue-100 hover:shadow-2xl'} group animate-cardfadein`} style={{animationDelay:`${0.1+index*0.15}s`}}>
            <div className={`flex items-center justify-center w-16 h-16 mb-6 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'} shadow-lg text-3xl group-hover:animate-bounce`}>{step.icon}</div>
            <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{step.title}</h3>
            <p className={`text-base transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>{step.description}</p>
            {index < steps.length - 1 && (
              <span className={`hidden sm:block absolute right-[-32px] top-1/2 transform -translate-y-1/2 text-4xl ${darkMode ? 'text-blue-700' : 'text-blue-200'}`}>&rarr;</span>
            )}
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

export default HowItWorks;
