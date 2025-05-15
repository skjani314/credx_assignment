import React from 'react';
import { useContext } from 'react';
import Context from '../../context/Context';
const testimonials = [
  {
    name: 'Jane Smith',
    role: 'IT Manager',
    company: 'TechNova',
    text: 'SoftSell made it incredibly easy to resell our unused licenses. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'David Lee',
    role: 'Procurement Head',
    company: 'SysCore Ltd.',
    text: 'Professional and quick process. We recovered significant value from old software.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Priya Patel',
    role: 'Operations Lead',
    company: 'Cloudify',
    text: 'The process was transparent and the support team was always available. Great experience!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Carlos Gomez',
    role: 'CIO',
    company: 'InnovaTech',
    text: 'We got the best price for our unused licenses. The transaction was smooth and secure.',
    image: 'https://randomuser.me/api/portraits/men/85.jpg'
  },
  {
    name: 'Emily Chen',
    role: 'Procurement Specialist',
    company: 'NextGen Solutions',
    text: 'Highly professional team and a seamless process from start to finish.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

const Testimonials = () => {
  const { darkMode } = useContext(Context);
  const [current, setCurrent] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(1);
  const total = testimonials.length;

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () => setCurrent((current - slidesToShow + total) % total);
  const next = () => setCurrent((current + slidesToShow) % total);

  React.useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + slidesToShow) % total), 6000);
    return () => clearInterval(timer);
  }, [total, slidesToShow]);

  // Get the testimonials to show based on slidesToShow and current
  const getVisibleTestimonials = () => {
    if (slidesToShow === 1) return [testimonials[current]];
    // For 2 slides, show current and next (wrap around)
    return [
      testimonials[current],
      testimonials[(current + 1) % total]
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className={`py-16 px-4 text-center font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-100 via-white to-blue-50'}`} id="testimonials">
      <h2 className={`text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className={`grid gap-8 ${slidesToShow === 2 ? 'lg:grid-cols-2' : ''}`}>
          {visibleTestimonials.map((t, idx) => (
            <div key={idx} className={`p-8 rounded-2xl shadow-xl flex flex-col items-center transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white/95 border border-blue-100'} group hover:shadow-2xl animate-cardfadein`} style={{animationDelay:`${0.1+idx*0.15}s`}}>
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-md group-hover:scale-110 group-hover:animate-bounce transition-transform duration-300" />
              <p className={`mb-4 text-center text-lg font-medium transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-blue-700'} font-serif`}>
                "{t.text}"
              </p>
              <p className={`text-base font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{t.name}</p>
              <p className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-blue-500'}`}>{t.role}, {t.company}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-6">
          <button onClick={prev} aria-label="Previous testimonial" className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white hover:bg-blue-700' : 'bg-white border-blue-200 text-blue-600 hover:bg-blue-100'} shadow`}>&larr;</button>
          {testimonials.map((_, idx) => (
            <span key={idx} className={`w-3 h-3 rounded-full mx-1 inline-block transition-all duration-200 ${current === idx ? 'bg-blue-600 animate-pulse' : darkMode ? 'bg-gray-600' : 'bg-blue-200'}`}></span>
          ))}
          <button onClick={next} aria-label="Next testimonial" className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white hover:bg-blue-700' : 'bg-white border-blue-200 text-blue-600 hover:bg-blue-100'} shadow`}>&rarr;</button>
        </div>
        <style>{`
          @keyframes cardfadein {
            from { opacity: 0; transform: translateY(32px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-cardfadein { animation: cardfadein 0.7s cubic-bezier(.4,2,.6,1) both; }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
