import React from 'react';
import { useContext } from 'react';
import Context from '../../context/Context';
const testimonials = [
  {
    name: 'Jane Smith',
    role: 'IT Manager',
    company: 'TechNova',
    text: 'SoftSell made it incredibly easy to resell our unused licenses. Highly recommended!'
  },
  {
    name: 'David Lee',
    role: 'Procurement Head',
    company: 'SysCore Ltd.',
    text: 'Professional and quick process. We recovered significant value from old software.'
  }
];

const Testimonials = () => {

const { darkMode } = useContext(Context);

  return (
    <section className={`py-16 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <h2 className={`text-3xl font-bold mb-10 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {testimonials.map((t, index) => (
          <div key={index} className={`p-6 rounded-lg shadow text-left transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              "{t.text}"
            </p>
            <p className={`text-sm font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.name}</p>
            <p className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.role}, {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
