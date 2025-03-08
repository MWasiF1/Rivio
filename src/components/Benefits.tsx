"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaCheck } from "react-icons/fa";

export default function Benefits() {
  const features = [
    { img: "/image/monitor_heart (1).png", text: "Real-Time Monitoring" },
    { img: "/image/objects.png", text: "Instant Alerts" },
    { img: "/image/signal_wifi_off.png", text: "No Wifi Needed" },
    { img: "/image/Exclude.png", text: "Long Battery Life" },
    { img: "/image/dash.png", text: "Dashboard Integration" },
    { img: "/image/water_drop.png", text: "Works with Any Liquid/Solid" },
  ];

  return (
    <div className="bg-black py-10 px-4 min-h-screen">
               <Image
                src="/image/Ellipse 1441.png"
                alt="feature"
                width={1000}
                height={1600}
                className="absolute left-0  z-10"
            />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 text-white">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0a1b0c] bg-opacity-10 p-6 sm:p-10 rounded-2xl border-2 border-[#01C41D] bg-cover bg-center"
          style={{ backgroundImage: "url('/image/boxes.png')" }}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ultrasonic <br />
              <span className="text-[#00D11F]">Level Sensors</span>
            </h1>

            <p className="text-[#FFFFFF] font-normal text-base sm:text-lg leading-relaxed mt-4">
              Uses high-frequency sound waves to measure liquid or solid levels.
            </p>
            <p className="text-[#FFFFFF] font-normal text-base sm:text-lg leading-relaxed">
              Best Uses for Water, fuel, and bulk material monitoring.
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Contactless measurement",
                "Works with various liquids and solids",
                "Cost-effective and reliable",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <FaCheck className="text-[#00D11F]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md flex items-center gap-2">
              Get Level Sensor <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden lg:flex bg-[#152e19] border border-[#284D2D] bg-opacity-10 p-6 rounded-xl"></div>
        </div>

        <div className="mt-24 px-4 mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            Key Features <span className="text-[#00D11F]">& Benefits</span>
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0e2311] bg-opacity-20 p-6 rounded-xl border-2 border-[#01C41D] flex flex-col items-center justify-center"
              >
                <Image
                  src={feature.img}
                  width={50}
                  height={50}
                  alt={feature.text}
                  className="w-12 h-12 mb-3"
                />
                <p className="text-sm font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
              </div>
              
              <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0a1b0c] bg-opacity-10 p-6 sm:p-10 rounded-2xl border-2 border-[#01C41D] bg-cover bg-center"
          style={{ backgroundImage: "url('/image/boxes.png')" }}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Installation <br />
              <span className="text-[#00D11F]">& Maintenance</span>
            </h1>

            <p className="text-[#FFFFFF] font-normal text-base sm:text-lg leading-relaxed mt-4">
              Once installed, the sensor continuously monitors levels with high precision.
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Follow the installation guide for a hassle-free setup.",
                "Keep sensors dust-free for optimal performance.",
                "Replace batteries periodically for uninterrupted tracking.",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <FaCheck className="text-[#00D11F]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md flex items-center gap-2">
              Get Level Sensor <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden lg:flex bg-[#152e19] border border-[#284D2D] bg-opacity-10 p-6 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}