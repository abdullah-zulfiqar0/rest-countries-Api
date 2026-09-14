import React from "react";

const DetailPage = ({
  countries,
  selectedCountry,
  setselectedCountry,
  onBack,
  darkMode,
}) => {
  return (
    <div
      className={`px-4 md:px-12 py-6 min-h-[calc(100vh-80px)] transition-colors duration-300 ${
        darkMode ? "text-dark-text" : "text-gray-900"
      }`}
    >
      <button
        onClick={onBack}
        className={`flex items-center gap-2 shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer rounded-lg py-3 px-8 mb-10 ${
          darkMode ? "bg-dark-element text-dark-text" : "bg-white text-gray-900"
        }`}
      >
        <span>←</span> Back
      </button>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left Container: Flag Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto max-h-[380px] object-cover rounded-lg shadow-md"
            src={
              selectedCountry?.flags?.png ||
              selectedCountry?.flags?.svg ||
              selectedCountry?.flag
            }
            alt={selectedCountry?.name?.common || selectedCountry?.name}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            {selectedCountry?.name?.common || selectedCountry?.name}
          </h1>

          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="font-semibold">Native Name: </span>
                {selectedCountry?.nativeName || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {selectedCountry?.population?.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {selectedCountry?.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {selectedCountry?.subregion || "N/A"}
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="font-semibold">Capital: </span>
                {selectedCountry?.capital || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {selectedCountry?.topLevelDomain || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {selectedCountry?.currencies
                  ? selectedCountry.currencies
                      .map((item) => item.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {selectedCountry?.languages
                  ? selectedCountry.languages
                      .map((item) => item.name)
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="text-sm md:text-base font-bold">
              <span>Border Countries: </span>
            </div>

            <div className="flex flex-wrap gap-2 text-sm md:text-base">
              {selectedCountry?.borders?.length > 0 ? (
                selectedCountry.borders.map((item) => (
                  <button
                    onClick={() => {
                      const targetCountry = countries.find(
                        (c) => c.alpha3Code === item || c.cca3 === item,
                      );
                      if (targetCountry) {
                        setselectedCountry(targetCountry);
                      }
                    }}
                    key={item}
                    className={`px-4 py-1 shadow-md rounded-md text-xs md:text-sm cursor-pointer transition-transform duration-200 hover:scale-105 ${
                      darkMode
                        ? "bg-dark-element text-dark-text"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <span>N/A</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
