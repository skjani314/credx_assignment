import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../../context/Context';

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'How It Works', to: 'howitworks' },
  { label: 'Why Choose Us', to: 'whychooseus' },
  { label: 'Blog', to: 'blog' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
  { label: 'FAQ', to: 'faq' },
];

const Navbar = () => {
  const {darkMode, setDarkMode} =useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.to);
        if (!el) return { id: item.to, top: Infinity };
        return { id: item.to, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const min = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(min.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow z-50 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/vite.svg" alt="SoftSell Logo" className="w-8 h-8 rounded-full bg-white shadow" />
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>SoftSell</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <button
              key={item.to}
              onClick={() => handleNavClick(item.to)}
              className={`font-semibold transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${active === item.to ? (darkMode ? 'text-blue-400' : 'text-blue-700 underline') : (darkMode ? 'text-gray-200' : 'text-gray-700')} hover:text-blue-500`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`transition-colors duration-300 ml-2 ${darkMode ? 'text-yellow-300' : 'text-gray-800'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <button
          className="md:hidden text-2xl focus:outline-none ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className={`md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-4 space-y-2 transition-all duration-300`}> 
          {navItems.map(item => (
            <button
              key={item.to}
              onClick={() => handleNavClick(item.to)}
              className={`block w-full text-left font-semibold px-2 py-2 rounded transition-colors duration-200 ${active === item.to ? (darkMode ? 'text-blue-400' : 'text-blue-700 underline') : (darkMode ? 'text-gray-200' : 'text-gray-700')} hover:text-blue-500`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`mt-2 transition-colors duration-300 ${darkMode ? 'text-yellow-300' : 'text-gray-800'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
