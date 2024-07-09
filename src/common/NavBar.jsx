import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavLogo } from "../assets";
import { IoMenuSharp } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={NavLogo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          </a>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleMobileMenu}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <RiCloseLargeFill size={25} />
              ) : (
                <IoMenuSharp size={25} />
              )}
            </button>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  exact
                  className="block py-2 pr-4 pl-3 text-blue-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  activeClassName="text-primary-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 transition-colors duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 transition-colors duration-300"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/track"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 transition-colors duration-300"
                >
                  Track Now
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 transition-colors duration-300"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/review"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 transition-colors duration-300"
                >
                  Review
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
