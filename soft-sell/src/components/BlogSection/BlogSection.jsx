import React, { useContext } from 'react';
import Context from '../../context/Context';

const posts = [
  {
    title: 'Maximizing Value from Unused Software Licenses',
    desc: 'Learn how to turn your unused software licenses into cash and optimize your IT budget with best practices.',
    link: '#',
  },
  {
    title: 'Is Software License Resale Legal? What You Need to Know',
    desc: 'A quick guide to the legal aspects of software license resale and how to stay compliant.',
    link: '#',
  },
  {
    title: '5 Tips for a Smooth Software License Sale',
    desc: 'Follow these tips to ensure a fast, secure, and profitable license resale experience.',
    link: '#',
  },
];

const BlogSection = () => {
  const { darkMode } = useContext(Context);
  return (
    <section className={`py-16 px-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
      <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>Resources & Blog</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className={`rounded-2xl shadow-lg p-6 flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} animate-cardfadein`} style={{animationDelay:`${0.1+idx*0.12}s`}}>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{post.title}</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>{post.desc}</p>
            <a href={post.link} className={`mt-auto inline-block px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'} hover:scale-105 transition-transform`}>Read More</a>
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

export default BlogSection;
