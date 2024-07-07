import React from 'react';
import { Link } from 'react-router-dom';

const NavbarNew = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/path-to-your-logo.png" alt="Packy Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800 ml-2">PACKY</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to={"/"}  className="text-orange-500 hover:text-orange-700">Home</Link>
            <Link to={"/about"}  className="text-gray-800 hover:text-gray-600">About</Link>
            <Link to={"/contact"}  className="text-gray-800 hover:text-gray-600">Contact</Link>
            <Link to={"/services"}  className="text-gray-800 hover:text-gray-600">Services</Link>
            <Link to={"/team"} className="text-gray-800 hover:text-gray-600">Team</Link>
            
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">Get A Quote</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
