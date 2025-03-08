import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa"; 
export default function WorksHero() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 flex items-center">
                     <Image
  src="/image/Ellipse 1440.png"
  alt="Dashboard"
  width={900}
  height={700}
  className="absolute top-2/4 right-0 -translate-y-1/2 z-10"
/>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center">
        <div className="flex flex-col items-center md:items-start md:max-w-md">
  <h1 className="text-white text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl font-bold">
    Effortless Monitoring <span className="text-[#00D11F]">with Rivio</span>
  </h1>
  <ul className="mt-4 space-y-3">
    <li className="flex items-start space-x-2">
      <FaCheck className="text-[#00D11F] mt-1" />
      <p className="text-white">Live status updates for device health & performance</p>
    </li>
    <li className="flex items-start space-x-2">
      <FaCheck className="text-[#00D11F] mt-1" />
      <p className="text-white">Smart alerts to notify only when needed</p>
    </li>
    <li className="flex items-start space-x-2">
      <FaCheck className="text-[#00D11F] mt-1" />
      <p className="text-white">Easy setup & scalability</p>
    </li>
  </ul>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
  <div className="flex flex-col items-center w-24">
    <Image src="/image/monitor_heart (1).png" alt="Real-Time Monitoring" width={32} height={32} />
    <span className="mt-2 text-sm text-white text-center">Real-Time Monitoring</span>
  </div>
  <div className="flex flex-col items-center w-24">
    <Image src="/image/objects.png" alt="Instant Alerts" width={32} height={32} />
    <span className="mt-2 text-sm text-white text-center">Instant Alerts</span>
  </div>
  <div className="flex flex-col items-center w-24">
    <Image src="/image/signal_wifi_off.png" alt="No WiFi Needed" width={32} height={32} />
    <span className="mt-2 text-sm text-white text-center">No Wifi Needed</span>
  </div>
  <div className="flex flex-col items-center w-24">
    <Image src="/image/battt.png" alt="Long Battery Life" width={48} height={48} />
    <span className="mt-2 text-sm text-white text-center">Long Battery Life</span>
  </div>
</div>

</div>
<div className="flex justify-center md:justify-end mt-8">
  <div className="flex flex-col items-center">
    <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] rounded-lg p-2">
      <Image
        src="/image/Screenshot 2025-03-08 at 12.46.25 AM 1.png" 
        alt="Dashboard"
        width={500}
        height={600}
        className="w-full max-h-[600px] h-auto object-contain rounded-md"
      />
    </div>
    <button className="mt-6 px-12 py-2 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white rounded-[12px]">
      Expand View
    </button>
  </div>
</div>
      </div>
    </div>
  );
}
