import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import "./index.css";
import Control from "./Components/Control";
import axios from "axios";
import CardComponent from "./Components/CardComponent";
import DetailPage from "./Components/DetailPage";

const App = () => {
  const [countries, setcountries] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [selectedRegion, setselectedRegion] = useState("");
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [selectedCountry, setselectedCountry] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const filterCountries = countries.filter((fil) => {
    const name = (fil?.name?.common || fil?.name || "").toLowerCase();
    const region = fil?.region || "";
    const nameSearch = name.includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion ? region === selectedRegion : true;

    return nameSearch && matchesRegion;
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setloading(true);
        const response = await axios.get("/data.json");
        setcountries(response.data);
      } catch (err) {
        console.log("Error occurred while fetching Data");
        seterror(err);
      } finally {
        setloading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-dark-bg text-dark-text" : "bg-gray-100 text-gray-900"}`}
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      {loading && <p className="text-center py-10">Loading countries...</p>}
      {error && (
        <p className="text-red-500 text-center py-10">
          Failed to load countries data.
        </p>
      )}

      {!loading &&
        !error &&
        (selectedCountry ? (
          <DetailPage
            countries={countries}
            selectedCountry={selectedCountry}
            setselectedCountry={setselectedCountry}
            onBack={() => setselectedCountry(null)}
            darkMode={darkMode}
          />
        ) : (
          <>
            <Control
              searchQuery={searchQuery}
              setSearchQuery={setsearchQuery}
              selectedRegion={selectedRegion}
              setselectedRegion={setselectedRegion}
              darkMode={darkMode}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 md:px-12 py-8">
              {filterCountries.length > 0 ? (
                filterCountries.map((coun) => (
                  <CardComponent
                    key={coun?.name?.common || coun?.name}
                    coun={coun}
                    setselectedCountry={setselectedCountry}
                    darkMode={darkMode}
                  />
                ))
              ) : (
                <p className="col-span-full text-center py-10">
                  No countries found.
                </p>
              )}
            </div>
          </>
        ))}
    </div>
  );
};

export default App;
