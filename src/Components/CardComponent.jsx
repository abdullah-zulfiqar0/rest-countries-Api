import React from "react";

const CardComponent = ({ coun, setselectedCountry, darkMode }) => {
  return (
    <div 
      onClick={() => setselectedCountry(coun)}
      className={`rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
        darkMode ? 'bg-dark-element text-dark-text' : 'bg-white text-gray-900'
      }`}
    >
      <img
        className="w-full object-cover h-40"
        src={coun?.flags?.png || coun?.flags?.svg || coun?.flag}
        alt={coun?.name?.common || coun?.name}
      />

     
      <div className="p-6">
        <h2 className="mb-4 w-full font-bold text-lg">
          {coun?.name?.common || coun?.name}
        </h2>

        <p className="mb-1 text-sm">
          <span className="font-semibold">Population: </span>
          {coun?.population?.toLocaleString()}
        </p>

        <p className="mb-1 text-sm">
          <span className="font-semibold">Region: </span>
          {coun?.region}
        </p>

        <p className="mb-1 text-sm">
          <span className="font-semibold">Capital: </span>
          {coun?.capital || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;