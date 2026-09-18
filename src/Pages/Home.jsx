import React, { useState } from "react";
import Control from "../Components/Control";
import CardComponent from "../Components/CardComponent";

const Home = ({ countries, darkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Search input aur Region dropdown ke hisab se filtering
  const filterCountries = countries.filter((fil) => {
    const name = (fil?.name?.common || fil?.name || "").toLowerCase();
    const region = fil?.region || "";
    const nameSearch = name.includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion ? region === selectedRegion : true;

    return nameSearch && matchesRegion;
  });

  return (
    <>
      {/* Search & Filter Controls */}
      <Control
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRegion={selectedRegion}
        setselectedRegion={setSelectedRegion}
        darkMode={darkMode}
      />
      
      {/* Countries Grid */}
      <div className="grid grid-cols-1 gap-12 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-12">
        {filterCountries.length > 0 ? (
          filterCountries.map((coun) => (
            <CardComponent
              key={coun?.cca3 || coun?.name?.common || coun?.name}
              coun={coun}
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
  );
};

// YEH LINE SAKHT ZAROORI HAI: Iske bina App.jsx is file ko import nahi kar sakta
export default Home;