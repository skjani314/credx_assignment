import React, { useContext } from 'react';
import { FaLock, FaUserShield, FaCertificate, FaThumbsUp } from 'react-icons/fa';
import Context from '../../context/Context';

const badges = [
  { icon: <FaLock />, label: 'SSL Secured' },
  { icon: <FaUserShield />, label: 'GDPR Compliant' },
  { icon: <FaCertificate />, label: 'ISO Certified' },
  { icon: <FaThumbsUp />, label: 'Customer Satisfaction' },
];

const TrustBadges = () => {
  const { darkMode } = useContext(Context);
  return (
    <section className={`py-8 px-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8">
        {badges.map((badge, idx) => (
          <div key={idx} className={`flex flex-col items-center text-center transition-colors duration-300 ${darkMode ? 'text-blue-200' : 'text-blue-700'} animate-cardfadein`} style={{animationDelay:`${0.1+idx*0.12}s`}}>
            <span className={`text-4xl mb-2 p-3 rounded-full shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:animate-bounce transition-transform`}>{badge.icon}</span>
            <span className="text-sm font-semibold mt-1">{badge.label}</span>
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

export default TrustBadges;
