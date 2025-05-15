import React from 'react';
import { FaUpload, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { icon: <FaUpload />, title: 'Upload License', description: 'Submit details of your unused licenses securely.' },
  { icon: <FaDollarSign />, title: 'Get Valuation', description: 'We evaluate your licenses and offer the best price.' },
  { icon: <FaCheckCircle />, title: 'Get Paid', description: 'Accept the offer and receive payment quickly.' },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
