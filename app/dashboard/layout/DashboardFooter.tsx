import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <>
      <footer className="dark:bg-[#141728] bg-gray-50 border-t border-gray-200 p-4">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  href="/"
                  className="dark:text-slate-500 text-gray-600 dark:hover:text-slate-300 hover:text-gray-900 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="dark:text-slate-500 text-gray-600 dark:hover:text-slate-300 hover:text-gray-900 transition-colors duration-300"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="dark:text-slate-500 text-gray-600 dark:hover:text-slate-300 hover:text-gray-900 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              &copy; 2024 <span className="dark:text-white">OutFront.</span> All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DashboardFooter;
