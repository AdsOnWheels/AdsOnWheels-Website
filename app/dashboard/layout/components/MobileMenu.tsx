import React, { useState } from "react";

interface Props {
  isOpen: boolean | undefined;
}

const MobileMenu = ({ isOpen }: Props) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleToggle = () => {
    setIsMobileMenu(isMobileMenu!);
  };
  return (
    <button
      className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
      onClick={handleToggle}
    >
      {/* Icon for mobile menu */}
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      )}
    </button>
  );
};

export default MobileMenu;
