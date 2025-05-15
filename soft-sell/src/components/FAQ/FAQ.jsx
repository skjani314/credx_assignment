import React, { useContext } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Context from '../../context/Context';

const faqs = [
  {
    question: 'Is software license resale legal?',
    answer: 'Yes, reselling software licenses is legal in many regions, provided the original license terms allow it. We ensure all transactions are compliant.'
  },
  {
    question: 'How do I get paid?',
    answer: 'Once your license is verified and the sale is complete, payment is processed instantly via your preferred method.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard encryption and never share your information without consent.'
  },
  {
    question: 'What types of licenses can I sell?',
    answer: 'We accept a wide range of software, cloud, and enterprise licenses. Contact us if you have a specific question.'
  }
];

const FAQ = () => {
  const { darkMode } = useContext(Context);
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className={`py-16 px-4 max-w-4xl mx-auto transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} id="faq">
      <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`rounded-lg border transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'} animate-cardfadein`} style={{animationDelay:`${0.1+idx*0.12}s`}}>
            <button
              className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="font-medium">{faq.question}</span>
              <span className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>{openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            {openIndex === idx && (
              <div className={`px-6 pb-4 text-sm transition-colors duration-300 animate-fadein ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{faq.answer}</div>
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
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein { animation: fadein 0.7s; }
      `}</style>
    </section>
  );
};

export default FAQ;
