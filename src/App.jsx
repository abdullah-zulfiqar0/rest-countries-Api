import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import "./index.css";
import axios from "axios";
import DetailPage from "./Components/DetailPage";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [countries, setcountries] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  // Purani selectedCountry state (ab URL param handle karega)
  // const [selectedCountry, setselectedCountry] = useState(null);

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
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-dark-bg text-dark-text" : "bg-gray-100 text-gray-900"
      }`}
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      {loading && <p className="py-10 text-center">Loading countries...</p>}
      {error && (
        <p className="py-10 text-center text-red-500">
          Failed to load countries data.
        </p>
      )}

      {/* REACT ROUTER ROUTING */}
      {!loading && !error && (
        <Routes>
          <Route
            path="/"
            element={<Home countries={countries} darkMode={darkMode} />}
          />
          <Route
            path="/country/:code"
            element={<DetailPage countries={countries} darkMode={darkMode} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}

      {/* =========================================================
          PURANA CONDITIONAL RENDERING CODE (COMMENTED OUT)
         =========================================================
      {!loading && !error && (
        selectedCountry ? (
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
            <div className="grid grid-cols-1 gap-12 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-12">
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
                <p className="py-10 text-center col-span-full">
                  No countries found.
                </p>
              )}
            </div>
          </>
        )
      )}
      ========================================================= */}
    </div>
  );
};

export default App;