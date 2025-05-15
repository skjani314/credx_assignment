import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../../context/Context';
const Navbar = () => {
  const {darkMode, setDarkMode} =useContext(Context);

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow z-50 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-blue-600'}`}></div>
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>SoftSell</span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`transition-colors duration-300 ${darkMode ? 'text-yellow-300' : 'text-gray-800'}`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
