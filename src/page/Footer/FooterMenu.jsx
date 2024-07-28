import React from "react";
import { Link } from "react-router-dom";
import { Logomain } from "../../assets";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";


const FooterMenu = () => {
  return (
    <div className="flex items-end w-full bg-white" data-aos="fade-up">
      <footer className=" w-full text-gray-700 bg-gray-100 body-font">
        <div className="flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">

          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center xl:pl-20  md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/4 ">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Quick Link
              </h2>
              <nav className="mb-10 list-none small:ml-8 xs:ml-6 sm:ml-0 flex flex-wrap md:flex-col md:gap-0 gap-3">
                <li className="mt-2">
                  <Link className="flex gap-3 items-center text-gray-500 cursor-pointer hover:text-gray-900">
                    <MdHome className="h-5 w-5" />
                    <p>Home</p>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className="flex gap-3 items-center text-gray-500 cursor-pointer hover:text-gray-900">
                    <FaBookOpen className="h-4 w-4" />
                    <p>About</p>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className="flex gap-2 items-center text-gray-500 cursor-pointer hover:text-gray-900">
                    <MdMiscellaneousServices className="h-5 w-5" />
                    <p>Services</p>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className="flex gap-3 items-center text-gray-500 cursor-pointer hover:text-gray-900">
                    <MdContactPhone className="h-4 w-4" />
                    <p>Contact</p>
                  </Link>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/4 md:w-1/4">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Get Help
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3 flex flex-col">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Term & conditions
                  </Link>
                  <span className="inline-flex space-x-4 lg:space-x-6 justify-center mt-2  md:justify-start">
                    <Link className="text-gray-500 cursor-pointer hover:text-gray-700">
                      <FaFacebookF className="h-5 w-5" />
                    </Link>
                    <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                      <FaXTwitter className="h-5 w-5" />
                    </Link>
                    <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                      <FaInstagram className="h-5 w-5" />
                    </Link>
                    <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                      <IoLogoYoutube className="h-5 w-5" />
                    </Link>
                  </span>
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
                    <div className="flex gap-5 ">
                      <FaLocationDot className="h-5 w-5" />
                      <p>
                        Shop no - 1/5, sanskar Avenue, behind Yogi petrol pump,
                        zadeshwar, Bharuch, Gujarat - 392001
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="mt-3">
                  <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                    <div className="flex xs:gap-3 ">
                      <MdAddIcCall className="h-5 w-5" />
                      <p>+919106512707, +919558037242</p>
                    </div>
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
