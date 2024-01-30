import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-1">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        {/* Navigation Links */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
