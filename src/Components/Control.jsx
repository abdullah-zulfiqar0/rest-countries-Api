import React from 'react';

const Control = ({ searchQuery, setSearchQuery, selectedRegion, setselectedRegion, darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 px-4 md:px-12 py-6">
      
      {/* Search Input */}
      <div className={`flex items-center gap-4 px-6 py-4 rounded-lg shadow-md w-full md:w-1/3 transition-colors duration-300 ${
        darkMode ? 'bg-dark-element text-dark-text' : 'bg-white text-gray-900'
      }`}>
        <span className="text-lg">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a country..."
          className={`w-full bg-transparent border-none outline-none focus:ring-0 text-sm md:text-base ${
            darkMode ? 'placeholder-gray-400 text-dark-text' : 'placeholder-gray-500 text-gray-900'
          }`}
        />
      </div>

      {/* Region Dropdown */}
      <div className="w-48">
        <select
          value={selectedRegion}
          onChange={(e) => setselectedRegion(e.target.value)}
          className={`w-full px-6 py-4 rounded-lg shadow-md border-none outline-none focus:ring-0 cursor-pointer text-sm md:text-base transition-colors duration-300 ${
            darkMode ? 'bg-dark-element text-dark-text' : 'bg-white text-gray-900'
          }`}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

    </div>
  );
};

export default Control;
