import React, { useContext } from 'react';
import Context from '../../context/Context';

const data = [
  { label: 'Payout Speed', softsell: 'Instant', competitor: 'Weeks' },
  { label: 'Best Price Guarantee', softsell: '✔️', competitor: '✖️' },
  { label: '24/7 Support', softsell: '✔️', competitor: '✖️' },
  { label: 'Security & Compliance', softsell: '✔️', competitor: 'Varies' },
  { label: 'Process Simplicity', softsell: 'One-click', competitor: 'Complex paperwork' },
  { label: 'Hidden Fees', softsell: 'None', competitor: 'Possible' },
];

const ComparisonTable = () => {
  const { darkMode } = useContext(Context);
  return (
    <section className={`py-16 px-4 max-w-4xl mx-auto transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>SoftSell vs. Traditional Resale</h2>
      <div className="overflow-x-auto">
        <table className={`min-w-full rounded-xl shadow-lg overflow-hidden text-center border-separate border-spacing-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <thead>
            <tr>
              <th className={`py-3 px-4 text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-blue-900'}`}></th>
              <th className={`py-3 px-4 text-lg font-bold rounded-tl-xl ${darkMode ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-900'}`}>SoftSell</th>
              <th className={`py-3 px-4 text-lg font-bold rounded-tr-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-900'}`}>Traditional</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.label} className="">
                <td className={`py-3 px-4 font-medium ${darkMode ? 'text-gray-200' : 'text-blue-900'}`}>{row.label}</td>
                <td className={`py-3 px-4 font-semibold ${darkMode ? 'bg-blue-800 text-white' : 'bg-blue-50 text-blue-900'}`}>{row.softsell}</td>
                <td className={`py-3 px-4 font-semibold ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-blue-900'}`}>{row.competitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
