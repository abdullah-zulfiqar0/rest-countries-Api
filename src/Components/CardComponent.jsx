import React from "react";
import { Link } from "react-router-dom"; // 1. Import karna zaroori hai

const CardComponent = ({ coun, darkMode }) => {
  const countryCode = coun?.cca3 || coun?.alpha3Code || coun?.name?.common;
 
  
  return (
    // Capital L and backticks (`) use karein
    <Link to={`/country/${countryCode}`}>
     
      <div 
        className={`rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
          darkMode ? 'bg-dark-element text-dark-text' : 'bg-white text-gray-900'
        }`}
      >
        <img
          className="object-cover w-full h-40"
          src={coun?.flags?.png || coun?.flags?.svg || coun?.flag}
          alt={coun?.name?.common || coun?.name}
        />

        <div className="p-6">
          <h2 className="w-full mb-4 text-lg font-bold">
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
    </Link>
  );
};

export default CardComponent;