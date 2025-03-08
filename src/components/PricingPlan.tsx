'use client';
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa"; 
import Image from 'next/image';
export default function PricingPlan() {
    const [activePlan, setActivePlan] = useState("Monthly");

    const pricingData = [
        {
            title: "Basic Plan",
            description: "Ideal for small businesses",
            price: "19",
            features: ["1 device included (annually)", "Additional level sensors: $3 each", "GPS trackers: $5/month each", "Basic support", "Real-time data & alerting", "Dedicated integration help", "$2 activation fee per device (payable once)"],
        },
        {
            title: "Pro Plan",
            description: "For growing businesses",
            price: "49",
            features: ["5 devices included (annually)", "Additional level sensors: $3 each", "GPS trackers: $5/month each", "Priority support", "Real-time data & advanced analytics", "Dedicated integration help","$2 activation fee per device (payable once)"],
        },
        {
            title: "Enterprise",
            description: "For large scale businesses",
            price: "99",
            features: ["10 devices included (annually)", "Additional level sensors: $3 each", "GPS trackers: $5/month each", "24/7 support", "Real-time data & advanced analytics", "Dedicated integration help","$2 activation fee per device (payable once)"],
        },
    ];

    return (
        <div className="bg-black py-16 px-6 sm:px-8">
                             <Image
              src="/image/Ellipse 1442.png"
              alt="Dashboard"
              width={1000}
              height={1200}
              className="absolute right-0  z-10"
            />
            <h2 className="text-5xl sm:text-1xl text-white font-bold leading-[70.44px] tracking-normal text-center">
                Rivio <span className="text-[#00D11F] ">Pricing Plan</span>
            </h2>
            <p className="text-[#EDEDED] text-sm text-center mt-2 max-w-lg mx-auto">
               Choose a Rivio pricing plan that fits your business. Enjoy smart tracking, real-time alerts, and seamless automation at an affordable cost.
            </p>

            {/* Toggle Buttons (Grouped) */}
            <div className="flex justify-center mt-6">
                <div className="flex bg-[#1A3F2BCC] bg-opacity-80 rounded-lg p-1">
                    {["Monthly", "Yearly"].map((plan) => (
                        
                        <button
                            key={plan}
                            onClick={() => setActivePlan(plan)}
                            className={`px-6 py-2 text-lg text-white rounded-lg transition-all duration-300 ${activePlan === plan ? "bg-[#00D11F]" : "hover:bg-opacity-90"
                                }`}
                        >
                            {plan}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {pricingData.map((plan, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl transition-all duration-300 group w-full text-center hover:bg-[#0e2611] border border-transparent hover:border-[#01C41D]"
                    >
                        <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
                        <p className="text-[#EDEDED] text-sm mt-2">{plan.description}</p>
                        <p className="text-[#00D11F] text-3xl font-bold mt-4 relative inline-block">
                            ${plan.price}/mo
                        </p>

                        <div className="w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full my-4"></div>

                       <ul className="mt-4 space-y-2 text-gray-300 text-left">
    {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-center space-x-2">
            <FaCheck className="text-[#00D11F]" /> 
            <span>{feature}</span>
        </li>
    ))}
</ul>


                        <button className="mt-6 px-6 py-3 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-4 py-2 rounded-[12px]">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}
