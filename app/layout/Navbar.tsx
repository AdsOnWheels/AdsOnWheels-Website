"use client";

import React, { useState } from "react";

import Button from "../components/Button";
import AWLink from "../components/AWLink";
import Modal from "../components/Modal";
import ContactPage from "../pages/Contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/brands", text: "For Brands" },
    { href: "/riders", text: "For Riders" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <AWLink
                  href={menuItem.href}
                  text={menuItem.text}
                  color="dark"
                />
              </li>
            ))}
          </ul>
        </div>
        <AWLink
          href="/"
          text="OutFront"
          className="text-xl md:text-2xl lg:text-3xl font-bold"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <AWLink href={menuItem.href} text={menuItem.text} />
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Button
          text="Get In Touch"
          color="dutch"
          className="md:mr-4"
          onClick={toggleModal}
        />

        {isModalOpen && (
          <Modal
            text="Fill out the form below to reach out to us and we will get back to
          you as soon as possible."
          >
            <ContactPage />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Navbar;
