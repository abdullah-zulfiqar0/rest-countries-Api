import React from "react";

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`flex flex-col md:flex-row w-full py-7 shadow-md justify-between items-center transition-colors duration-300 ${darkMode ? "bg-dark-element text-dark-text" : "bg-white text-gray-900"}`}
    >
      <h1 className="text-[1.8rem] md:text-[2rem] font-[800] md:ml-12">
        Where in the world?
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="transition-transform duration-300 hover:scale-105 text-[1.1rem] md:text-[1.2rem] font-[600] cursor-pointer md:mr-12 flex items-center gap-2 mt-4 md:mt-0"
      >
        <span>{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</span>
      </button>
    </nav>
  );
};

export default NavBar;
