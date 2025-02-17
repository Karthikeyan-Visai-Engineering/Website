import React from "react";
import ImageSlider from "../components/ImageSlider";
import hvac from "../assets/servicehvac.jpg";
import plumbing from "../assets/serviceplumbing.jpg";
import fireSafety from "../assets/servicefire.webp";
import safety from "../assets/safety.jpg";
import structural from "../assets/Structure.jpg";

function Home() {
  const services = [
    {
      title: "HVAC Solutions",
      description:
        "Advanced heating, ventilation & air conditioning systems for optimal climate control.",
      img: hvac,
    },
    {
      title: "Plumbing Systems",
      description:
        "Comprehensive water distribution & drainage solutions ensuring efficiency.",
      img: plumbing,
    },
    {
      title: "Fire Protection",
      description:
        "Innovative fire prevention & suppression systems for maximum safety.",
      img: fireSafety,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center uppercase text-white">
          "Innovating Engineering Solutions for a Sustainable Future"
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>

        <div className="mt-8">
          <ImageSlider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 text-lg font-bold text-center">
          {["Certified Experts", "High-Quality Standards", "Efficient Project Execution", "Commitment to Safety"].map(
            (text, index) => (
              <div
                key={index}
                className="bg-yellow-500 text-black px-6 py-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                {text}
              </div>
            )
          )}
        </div>

        <div className="bg-white text-gray-900 p-10 md:p-14 rounded-lg shadow-2xl mx-4 md:mx-auto max-w-5xl transform hover:scale-105 transition duration-300">
          <h2 className="text-5xl font-extrabold text-center text-gray-900">
            WELCOME TO <span className="text-blue-700">VISAI ENGINEERING</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-700 text-lg md:text-2xl px-6 py-6 leading-relaxed text-center">
            "At Visai Engineering, we specialize in innovative building and infrastructure solutions. Our expertise spans structural and mechanical design engineering. Our team of certified professionals delivers industry-leading services with cutting-edge technology."
          </p>
        </div>

        <h1 className="text-5xl font-extrabold text-orange-400 py-8 text-center">OUR SERVICES</h1>

        <div className="mt-10">
          <h2 className="text-3xl font-extrabold text-yellow-400 uppercase text-center p-5">STRUCTURAL ENGINEERING</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
          <div className="mt-16 bg-gray-100 text-gray-900 rounded-lg shadow-lg p-10 flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={structural}
                alt="Structural Engineering"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>

            <div className="w-full lg:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-10 mt-1 lg:text-left">STRUCTURAL ENGINEERING</h1>
              <p className="text-gray-700 text-lg mb-6">
                Our structural engineers design and analyze buildings and infrastructure to ensure safety, stability, and durability.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-yellow-400 uppercase text-center p-10">MECHANICAL ENGINEERING</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10 rounded-full"></div>

        <div className="bg-gray-100 p-5 rounded-lg">
          {/* HVAC Solution */}
          <div className="bg-gray-100 text-gray-900 rounded-lg p-5 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img src={hvac} alt="HVAC Solution" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-4">MECHANICAL ENGINEERING</h1>
              <p className="text-gray-700 text-lg mb-6">
              Our mechanical engineers design the hvac, plumbing and fire protection systems of buildings. They turn concrete buildings into places of comfort & safety which enable great productivity for the final users. 
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-orange-400 py-8 text-center">SAFETY AND SUSTAINABILITY</h1>

        <div className="mt-16 bg-gray-100 text-gray-900 rounded-lg shadow-lg p-10 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img src={safety} alt="Safety Worker" className="w-full h-full object-cover rounded-l-lg" />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-4">SAFETY & SUSTAINABILITY</h2>
            <p className="text-gray-700 text-lg mb-6">
              We prioritize sustainability to ensure minimal environmental impact and future responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
