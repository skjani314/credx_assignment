import React from 'react';

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
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow text-left">
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <p className="text-sm font-semibold text-gray-800">{t.name}</p>
            <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
