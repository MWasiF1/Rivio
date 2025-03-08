'use client';
import React, { useState } from 'react';
export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index: unknown) => {
        if (activeIndex === index) {
            setActiveIndex(null); 
        } else {
            setActiveIndex(index); 
        }
    };
    const accordionData = [
        { title: "How does Rivio help businesses improve asset tracking?", content: 'Rivio leverages real-time IoT technology to automate tracking, optimize resource management, and reduce manual inspections. With instant alerts and remote monitoring, businesses stay informed and in control 24/7.' },
        { title: "Is Rivio’s system easy to set up and use?", content: "Absolutely! It features a user-friendly interface with quick and hassle-free installation." },
        { title: "Can Rivio help reduce operational costs?", content: "Yes, by improving efficiency, minimizing waste, and optimizing resource usage." },
        { title: "How does Rivio’s level tracking system work?", content: "It uses smart sensors and real-time data to monitor and optimize inventory levels." },
        { title: "What industries can benefit from Rivio’s tracking solutions?", content: " Rivio’s tracking solutions are ideal for industries like logistics, manufacturing, oil & gas, and agriculture." },
    ];
    return (
        <div className="bg-black p-6 sm:p-8">
            <div className="px-4 sm:px-8">
                <h2 className="text-5xl sm:text-1xl text-white font-bold leading-[70.44px] tracking-normal text-center">
                    Frequently Asked <span className="text-[#00D11F]">Questions</span>
                </h2>
                <p className="text-[#F2F2F2] text-center mt-2 max-w-2xl mx-auto md:text-sm sm:text-[18px]">
                  Find answers to common questions about Rivio’s smart tracking and monitoring solutions.
                </p>
            </div>
            <div className="mt-8 max-w-6xl mx-auto">
                {accordionData.map((item, index) => (
                    <div
                        key={index}
                        className={`border border-[#01C41D] mb-4 rounded-lg transition-all duration-300 ${activeIndex === index ? "bg-[#0e2611]" : ""}`}
                    >
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className="text-2xl text-[#00D11F] font-semibold">{item.title}</h2>
                            <i className={`fa ${activeIndex === index ? "fa-ellipsis-h" : "fa-plus"}`} style={{ color: '#01C41D', fontSize: '20px' }}></i>
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 text-gray-300">
                                <p className="text-[20px] leading-[23.48px] tracking-[0%] font-normal">{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
