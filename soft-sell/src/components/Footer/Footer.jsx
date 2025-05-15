import React, { useContext } from 'react';
import Context from '../../context/Context';

const Footer = () => {
  const { darkMode } = useContext(Context);
  return (
    <footer className={`w-full py-8 px-4 mt-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-semibold">SoftSell &copy; {new Date().getFullYear()}</div>
        <div className="flex space-x-4 text-sm">
          <a href="#" className={`hover:underline ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Privacy Policy</a>
          <a href="#" className={`hover:underline ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Terms of Service</a>
          <a href="#" className={`hover:underline ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
