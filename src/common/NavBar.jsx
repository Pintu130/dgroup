import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavLogo } from "../assets";
import { IoMenuSharp } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header onClick={()=> isMobileMenuOpen && setIsMobileMenuOpen(!isMobileMenuOpen)} className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={"/"} className="flex items-center">
            <img src={NavLogo} className="mr-3 md:h-12 h-9" alt="Logo" />
          </Link>
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
            <ul className="flex lg:text-lg flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  exact="true"
                  className={`block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 ${isActive("/") ? "text-yellow-500 font-semibold" : "text-gray-700"}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors duration-300 ${isActive("/about") ? "text-yellow-500 font-semibold" : "text-gray-700"}`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors duration-300 ${isActive("/services") ? "text-yellow-500 font-semibold" : "text-gray-700"}`}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/track"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors duration-300 ${isActive("/track") ? "text-yellow-500 font-semibold" : "text-gray-700"}`}
                >
                  Track Now
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors duration-300 ${isActive("/contact") ? "text-yellow-500 font-semibold" : "text-gray-700"}`}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/review"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors duration-300 ${isActive("/review") ? "text-yellow-500 font-semibold" : "text-gray-700"}`}
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
