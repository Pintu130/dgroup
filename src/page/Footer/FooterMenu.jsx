import React from "react";
import { Link } from "react-router-dom";
import { Logomain } from "../../assets";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const FooterMenu = () => {
  return (
    <div className="flex items-end w-full bg-white">
      <footer className=" w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">

          <div className="flex-shrink-0 w mx-auto text-center md:mx-0 md:text-left">
            <Link to={'/'} className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img src={Logomain} alt="logo" className="h-16 w-44" />
            </Link>
            <div className="mt-4">
              <span className="inline-flex space-x-7 justify-center mt-2  sm:justify-start">
                <Link className="text-gray-500 cursor-pointer hover:text-gray-700">
                  <FaFacebookF className="h-6 w-6" />
                </Link>
                <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <FaXTwitter className="h-6 w-6" />
                </Link>
                <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <IoLogoYoutube className="h-6 w-6" />
                </Link>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20  md:mt-0 md:text-left">

            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Quick Link
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                   About
                  </Link>
                </li>
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
               Get Help
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Term & conditions
                  </Link>
                </li>
              </nav>
            </div>
          
            <div className="w-full px-4 lg:w-2/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Get in Touch
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                    
                      <p>Shop no - 1/5, sanskar Avenue, </p>
                    
                  </Link>
                </li>
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Request a Quote
                  </Link>
                </li>
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                    +123-456-7890
                  </Link>
                </li>
              </nav>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterMenu;
