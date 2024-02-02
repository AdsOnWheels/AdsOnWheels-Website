import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-1 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        {/* Navigation Links */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
