import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className="top-header bg-gray-100 text-sm py-2 px-6 md:px-8 flex justify-between items-center flex-wrap">
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-wrap">
        <p className="text-gray-600">Welcome to Shop.co!</p>
        <Link href="/help" className="text-blue-500 hover:underline">
          Help Center
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 flex-wrap">
        <Link href="/login" className="text-gray-600 hover:underline">
          Login
        </Link>
        <Link href="/signup" className="text-gray-600 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
                                            
  );
};

const Navbar = () => {
  return (
    <div
      className="navbar font-IntegralCF w-full h-[100px] bg-white shadow-md fixed z-50"
      style={{ top: "40px" }} // Add spacing below the TopHeader
    >
      <div className="max-w-[1170px] h-full flex flex-col md:flex-row border-b-2 border-gray-300 justify-between items-center mx-auto px-6 md:px-8">
        {/* Logo */}
        <h1 className="text-[32px] font-bold mb-4 md:mb-0">SHOP.CO</h1>

        {/* Navigation Links */}
        <ul className="font-Satoshi flex flex-wrap gap-4 text-sm sm:text-base md:gap-6 md:flex-row justify-center md:justify-start">
  <li className="hover:border-b-2 border-gray-400 cursor-pointer">
    <Link href="/" className="flex items-center">
      Shop <RiArrowDropDownLine className="text-2xl" />
    </Link>
  </li>
  <li className="hover:border-b-2 border-gray-400 cursor-pointer">
    <Link href="/Cart">Cart</Link>
  </li>
  <li className="hover:border-b-2 border-gray-400 cursor-pointer">
    <Link href="/newarrival">NewArrival</Link>
  </li>
  <li className="hover:border-b-2 border-gray-400 cursor-pointer">
    <Link href="/brands" target="_blank" rel="noopener noreferrer">
      Brands
    </Link>
  </li>
  <li className="hover:border-b-2 border-gray-400 cursor-pointer">
    <Link href="/categorypage">Category</Link> {/* New Category Link */}
  </li>
</ul>



        {/* Search Bar and Icons */}
        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center md:justify-end mt-4 md:mt-0">
          <div className="flex items-center bg-[#F5F5F5] rounded-xl overflow-hidden">
            <IoSearch className="text-3xl text-gray-700 px-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="font-Satoshi bg-[#F5F5F5] px-4 py-2 outline-none text-sm w-[200px] sm:w-[250px] md:w-[300px]"
            />
          </div>
          <FiShoppingCart className="text-2xl text-black cursor-pointer" />
          <IoPersonCircleSharp className="text-3xl text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      {/* Main Content */}
      <div className="pt-[160px]">
        {/* Page Content Goes Here */}
      </div>
    </div>
  );
};

export default Navbar;
