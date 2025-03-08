import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa"; 
const features = [
  {
    image: "/image/image (3).png",
    alt: "Rivio device components",
    title: "Order Your Rivio Device",
    points: [
      "Choose the right sensor for your needs—whether it's for tanks, industrial equipment, or environmental monitoring.",
      "Each device is pre-configured and ready to use."
    ]
  },
  {
    image: "/image/image (4).png",
    alt: "Person installing Rivio device",
    title: "Install in Minutes",
    points: [
      "No wires, no hassle! Battery-powered & wireless for quick setup.",
      "Just place the device, and it starts transmitting data immediately."
    ]
  },
  {
    image: "/image/image (5).png",
    alt: "Person monitoring data on laptop and phone",
    title: "Monitor in Real Time",
    points: [
      "View live data anytime, anywhere through Rivio's dashboard or mobile app.",
      "Get critical metrics like tank levels, power status, environmental readings, etc."
    ]
  },
  {
    image: "/image/image (6).png",
    alt: "Person receiving alerts on phone",
    title: "Get Instant Alerts",
    points: [
      "Rivio's smart notifications keep you informed.",
      "Alerts only when action is needed—avoid unnecessary notifications."
    ]
  },
  {
    image: "/image/image (7).png",
    alt: "Person receiving alerts on phone",
    title: "Automate Maintenance & Service",
    points: [
      "Set up scheduled maintenance & service requests directly from Rivio.",
      "Reduce manual tracking and ensure timely repairs or check-ups."
    ]
  },
  {
    image: "/image/image (8).png",
    alt: "Person receiving alerts on phone",
    title: "Optimize with Data & Insights",
    points: [
      "Rivio helps you analyze trends, predict failures, and improve efficiency.",
      "Make data-backed decisions to cut costs and enhance performance."
    ]
  }
];
export default function Flow() {
  return (
    <div className="bg-black min-h-screen text-white py-26 px-4 flex flex-col items-center">
         <Image
                      src="/image/Ellipse 1441.png"
                      alt="feature"
                      width={1000}
                      height={1600}
                      className="absolute left-0  z-10"
                  />
      <div className="text-center max-w-6xl mb-30">
        <h2 className="text-white text-center text-4xl font-bold whitespace-nowrap">
          How Rivio Works: <span className="text-[#00D11F]">A Simple, Smart Process</span>
        </h2>
        <p className="mt-8 text-lg text-gray-300">
          From setup to insights, Rivio makes IoT monitoring effortless. Follow these easy steps to install, track, and optimize your devices—whether you&apos;re managing one or thousands.
        </p>
      </div>
      
            <div className="bg-black min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="bg-black border border-[#00D11F] rounded-3xl h-[530px]">
                <div className="mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={350}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                      </div>
                      <div className="p-6">
                <h2 className="text-[#00D11F] text-2xl font-bold mb-4">{feature.title}</h2>
                <div className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaCheck className="text-[#00D11F] text-lg min-w-[20px] mt-1" />

                      <p className="text-white text-md">{point}</p>
                    </div>
                  ))}
                </div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
          
           <div className="text-center max-w-6xl mb-10 mt-30">
        <h2 className="text-white text-center text-4xl font-bold whitespace-nowrap">
          Ready to see what <span className="text-[#00D11F]">Rivio can do?</span>
        </h2>
      <p className="mt-6 text-lg text-gray-300">
  Whether you need an off-the-shelf solution or custom integration, we&apos;re here to help.
</p>

               <button className="mt-6 px-12 py-2 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white rounded-[12px]">
      Get Started
    </button>
      </div>
    </div>
  );
}
