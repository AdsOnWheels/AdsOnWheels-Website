import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl text-left mx-auto flex flex-wrap justify-between items-start">
        {/* About Us */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-sm">
            Discover how AdsOnWheels is redefining advertising with purpose and
            innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
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
              <Link href="/terms">Terms of use</Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy">Privacy policy</Link>
            </li>
            <li className="mb-2">
              <Link href="/cookie">Cookie policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">1234 Ad Avenue</p>
          <p className="text-sm mb-2">Cityville, State 12345</p>
          <p className="text-sm">info@adsonwheels.com</p>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/4">
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

      {/* Divider Line */}
      <hr className="border-gray-700 my-8" />

      {/* Copyright */}
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 AdsOnWheels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
