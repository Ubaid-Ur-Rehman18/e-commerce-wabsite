"use client";

import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto bg-[#F2F0F1] w-full lg:h-[663px] gap-6 px-4 md:px-8 lg:px-12">
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col items-start gap-6 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-base md:text-lg text-black/60 leading-relaxed">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full">
          Shop Now
        </button>
        {/* Additional Images for Small Screens */}
        <div className="lg:hidden flex flex-col items-center gap-4 mt-8">
          <div className="flex justify-center items-center gap-4">
            <Image
              src="/Frame 54.png"
              alt="Frame 54"
              width={80}
              height={36}
              className="object-contain"
            />
            <Image
              src="/Frame 55.png"
              alt="Frame 55"
              width={80}
              height={36}
              className="object-contain"
            />
          </div>
          <Image
            src="/Frame 56.png"
            alt="Frame 56"
            width={80}
            height={36}
            className="object-contain"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 relative w-full h-64 sm:h-80 lg:h-full">
        {/* Vector Decorations */}
        <Image
          src="/Vector (3).png"
          alt="Vector Image Left-Center"
          width={40}
          height={40}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
        />
        <Image
          src="/Vector (3).png"
          alt="Vector Image Right-Top"
          width={80}
          height={80}
          className="absolute right-8 top-4 z-10 hidden md:block"
        />

        {/* Main Hero Image */}
        <Image
          src="/coverphoto.png"
          alt="Hero Image"
          layout="fill"
          objectFit="contain"
          className="object-center"
        />
      </div>
    </div>
  );
};
