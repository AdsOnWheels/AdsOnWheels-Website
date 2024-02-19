import React from "react";
import Link from "next/link";
import useIsAdminPanel from "@/app/hooks/admin/useIsAdminPanel";

const Footer2 = () => {
  const isAdminPanel = useIsAdminPanel;

  return (
    <>
      {!isAdminPanel && (
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap -mx-4 justify-between items-start">
              {/* About Us Section */}
              <div className="px-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6">
                <h4 className="text-xl font-bold mb-4">About Us</h4>
                <p className="text-sm">
                  Discover how OutFront is redefining advertising with purpose
                  and innovation.
                </p>
              </div>

              {/* Quick Links Section */}
              <div className="px-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6">
                <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                <ul className="list-none p-0">
                  <li className="mb-2">
                    <Link href="/riders">Riders</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/brands">Brands</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/legal">Legal</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/legal/terms-of-use">Terms of use</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/legal/privacy-policy">Privacy policy</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/legal/cookie-policy">Cookie policy</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us Section */}
              <div className="px-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6">
                <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                <p className="text-sm mb-2">1234 Ad Avenue</p>
                <p className="text-sm mb-2">Cityville, State 12345</p>
                <p className="text-sm">
                  <Link href="mailto:info@outfront.nl">info@outfront.nl</Link>
                </p>
              </div>

              {/* Social Media Section */}
              <div className="px-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
                <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-white hover:text-gray-500 transition duration-300"
                  >
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-500 transition duration-300"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-500 transition duration-300"
                  >
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <hr className="border-gray-700 my-8" />

            {/* Copyright Section */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                &copy; 2024 OutFront. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer2;
