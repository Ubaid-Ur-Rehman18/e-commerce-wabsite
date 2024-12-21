"use client";

import { TfiEmail } from "react-icons/tfi";

export default function Newsletter() {
  return (
    <div className="flex justify-center items-center mt-12 mb-20 px-4">
      <div className="bg-black rounded-2xl w-full max-w-screen-lg p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center md:justify-between">
        {/* Heading Section */}
        <h5 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 md:mb-0 max-w-lg">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h5>

        {/* Input and Button Section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center bg-white rounded-full w-full max-w-md p-2">
            <TfiEmail className="text-gray-500 ml-4 text-xl" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent outline-none px-4 py-2 text-gray-800"
              aria-label="Email Address"
            />
          </div>
          <button
            type="button"
            className="bg-white text-black font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
