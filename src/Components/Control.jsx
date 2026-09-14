import React from "react";

const Control = ({setSearchQuery,selectedRegion,setselectedRegion}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4 md:px-12 py-6">
      
     
      <div className="transition-transform duration-300 hover:scale-105 relative w-full md:w-[480px]">
       
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          onChange={(e)=>setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          className="w-full bg-dark-element text-dark-text py-4 pl-14 pr-4 rounded-md shadow-md outline-none placeholder:text-gray-400"
        />
      </div>

  
      <div className=" transition-transform duration-300 hover:scale-105 w-52">
        <select  onChange={(e) => setselectedRegion(e.target.value)} className="w-full bg-dark-element text-dark-text py-4 px-6 rounded-md shadow-md outline-none cursor-pointer">
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

    </div>
  );
};

export default Control;