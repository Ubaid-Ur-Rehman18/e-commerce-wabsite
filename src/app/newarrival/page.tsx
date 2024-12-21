// src/app/newarrival/page.tsx

import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const NewArrival = () => {
  const card = [
    {
      id: 1,
      image: "/image1.png",
      title: "T-SHIRT WITH TAPE DETAILS",
      price: "$120",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/newarr2.png",
      title: "SKINNY FIT JEANS",
      price: "$240",
      priceWas: "$260",
      rating: 4.5,
    },
    // Add other products as needed...
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          NEW ARRIVALS
        </h1>
        <p className="text-gray-600 mt-4">Discover the latest styles and trends!</p>
      </div>

      {/* Cards Section */}
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 m-auto">
        {card.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col">
            <div className="relative w-full h-64 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-800">{item.title}</h2>
            <div className="flex items-center gap-1 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`text-lg ${
                      index < Math.round(item.rating) ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{item.rating}/5</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">{item.price}</span>
              {item.priceWas && (
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-gray-500">{item.priceWas}</span>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-lg">
                    {calculateDiscount(item.price, item.priceWas)}% OFF
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10 mb-16">
        <button className="bg-gray-800 text-white px-6 py-3 text-lg rounded-full hover:bg-gray-700 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
                                                                                                                                                                                                                                                                                                           