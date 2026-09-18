import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailPage = ({ countries, darkMode }) => {
  // 1. URL se country code extract karo
  const { code } = useParams();

  // 2. Current country find karo
  const selectedCountry = countries.find(
    (c) => (c?.cca3 || c?.alpha3Code || c?.name?.common) === code
  )

  if (!selectedCountry) {
    return <p className="py-10 text-center">Country details not found.</p>;
  }

  // --- EASY DATA EXTRACTIONS ---

  // Native Name
  const nativeName = selectedCountry?.name?.nativeName 
    ? Object.values(selectedCountry.name.nativeName)[0]?.common 
    : selectedCountry?.nativeName || selectedCountry?.name?.common || "N/A";

  // Capital
  const capital = Array.isArray(selectedCountry?.capital)
    ? selectedCountry.capital.join(", ")
    : selectedCountry?.capital || "N/A";

  // Currencies
  const currencies = selectedCountry?.currencies
    ? Object.values(selectedCountry.currencies).map((c) => c.name || c).join(", ")
    : "N/A";
// Languages
const languages = selectedCountry?.languages
  ? Array.isArray(selectedCountry.languages)
    ? selectedCountry.languages.map((l) => l.name || l).join(", ")
    : typeof selectedCountry.languages === "object"
    ? Object.values(selectedCountry.languages)
        .map((l) => (typeof l === "object" ? l.name : l))
        .join(", ")
    : selectedCountry.languages
  : "N/A";

  // BORDER COUNTRIES EXTRACTION LOGIC
  // Code ko full country name mein convert karta hai
  const getBorderName = (borderCode) => {
    const found = countries.find(
      (c) => (c?.cca3 || c?.alpha3Code) === borderCode
    );
    return found ? (found?.name?.common || found?.name) : borderCode;
  };

  return (
    <div className="px-6 py-8 mx-auto max-w-7xl">
      {/* Back Button */}
      <Link
        to="/"
        className={`inline-block px-8 py-2 rounded-md shadow-md mb-8 transition-opacity hover:opacity-80 ${
          darkMode ? 'bg-dark-element text-dark-text' : 'bg-white text-gray-900'
        }`}
      >
        ← Back
      </Link>

      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Flag */}
        <img
          src={selectedCountry?.flags?.png || selectedCountry?.flags?.svg || selectedCountry?.flag}
          alt={selectedCountry?.name?.common || selectedCountry?.name}
          className="object-contain w-full rounded-md shadow-lg max-h-96"
        />

        {/* Info Section */}
        <div>
          <h2 className="mb-6 text-3xl font-extrabold">
            {selectedCountry?.name?.common || selectedCountry?.name}
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2">
            <div className="space-y-2">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {selectedCountry?.population?.toLocaleString()}</p>
              <p><strong>Region:</strong> {selectedCountry?.region}</p>
              <p><strong>Sub Region:</strong> {selectedCountry?.subregion || 'N/A'}</p>
              <p><strong>Capital:</strong> {capital}</p>
            </div>

            <div className="space-y-2">
              <p><strong>Top Level Domain:</strong> {selectedCountry?.tld?.[0] || selectedCountry?.topLevelDomain?.[0] || 'N/A'}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>

          {/* BORDER COUNTRIES SECTION */}
          <div className="flex flex-wrap items-center gap-2">
            <strong className="mr-2">Border Countries:</strong>
            {selectedCountry?.borders && selectedCountry.borders.length > 0 ? (
              selectedCountry.borders.map((borderCode) => (
                <Link
                  key={borderCode}
                  to={`/country/${borderCode}`}
                  className={`px-4 py-1 text-sm rounded shadow transition-all hover:scale-105 ${
                    darkMode ? 'bg-dark-element text-dark-text' : 'bg-white text-gray-900'
                  }`}
                >
                  {getBorderName(borderCode)}
                </Link>
              ))
            ) : (
              <span>None</span>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailPage;