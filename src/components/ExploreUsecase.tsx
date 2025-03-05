import React from "react";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="bg-gradient-to-l from-black to-[#0A2A0A] text-white px-4 py-26">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal text-center">
          Explore <span className="text-[#00D11F]">Use Cases</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 mt-8 sm:mt-10 md:mt-12">
        {[
          { src: "/image/plumbing.png", label: "Septic & Water Monitoring" },
          { src: "/image/local_shipping.png", label: "Salt Delivery" },
          { src: "/image/golf_course.png", label: "Golf Course" },
        ].map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mt-8">
        {[
          { src: "/image/camping.png", label: "Marinas" },
          { src: "/image/directions_boat.png", label: "Municipalities" },
          { src: "/image/wc.png", label: "Public Restrooms" },
          { src: "/image/camping.png", label: "Campground Management" },
        ].map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-8">
        {[
          { src: "/image/agriculture.png", label: "Farm Operations" },
          { src: "/image/ac_unit.png", label: "Anti-Icing & Deicing Solutions" },
        ].map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const GridItem = ({ src, label }) => (
  <div className="group flex justify-center items-center gap-4 p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg transition-all duration-300 ease-in-out">
    <Image
      src={src}
      alt={label}
      width={40}
      height={40}
      className="w-10 h-10 transition-all duration-300 group-hover:filter group-hover:invert  group-hover:brightness-0 "
    />
    <h3 className="text-sm sm:text-sm font-semibold text-white">{label}</h3>
  </div>
);
