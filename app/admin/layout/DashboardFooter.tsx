import Link from "next/link";
import React from "react";

import useCurrentPathname from "@/app/hooks/useCurrentPathname";

const DashboardFooter = () => {
  const path = useCurrentPathname();

  return (
    <>
      {path !== "/admin" && (
        <footer className="dark:bg-gray-900 bg-gray-100 border-t border-gray-200 p-4">
          <div className="container mx-auto max-w-6xl flex justify-between items-center">
            <nav>
              <ul className="flex items-center space-x-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Copyright Section */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                &copy; 2024 OutFront. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default DashboardFooter;
