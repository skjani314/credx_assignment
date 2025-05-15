import React from 'react';
import { FaShieldAlt, FaRocket, FaHeadset, FaHandshake } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, title: 'Secure & Legal', desc: '100% compliant with licensing policies.' },
  { icon: <FaRocket />, title: 'Fast Process', desc: 'Quick evaluations and instant payments.' },
  { icon: <FaHeadset />, title: 'Support', desc: 'Friendly help whenever you need it.' },
  { icon: <FaHandshake />, title: 'Trusted Deals', desc: 'Transparent offers with no hidden charges.' },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 shadow">
            <div className="text-blue-600 text-3xl mb-3 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
