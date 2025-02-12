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
                className="bg-yellow-500 text-black text-bold px-6 py-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
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
          <div className="w-180 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-700 text-lg md:text-2xl px-6 py-6 leading-relaxed text-center">
            "At Visai Engineering, we specialize in innovative building and infrastructure solutions. Our expertise spans structural and mechanical design engineering. Our team of certified professionals deliver industry-leading services with cutting-edge technology."
          </p>
        </div>

        <h1 className="text-5xl font-extrabold text-orange-400 py-8 text-center">OUR SERVICES</h1>

        <div className="mt-10">
          <h2 className="text-3xl font-extrabold text-yellow-400 uppercase text-center p-5">STRUCTURAL ENGINEERING</h2>
          <div className="w-100 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
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
              Our structural engineers design and analyze buildings and infrastructure to ensure safety, stability, and durability. They work with materials and collaborate with other professionals to create efficient, sustainable structures while adhering to safety standards and regulations.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-yellow-400 uppercase text-center p-10">MECHANICAL ENGINEERING</h2>
        <div className="w-100 h-1 bg-yellow-500 mx-auto mb-10 rounded-full"></div>

        <div className="bg-gray-100 p-5 rounded-lg">
          {/* HVAC Solution */}
          <div className="bg-gray-100 text-gray-900 rounded-lg p-5 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img src={hvac} alt="HVAC Solution" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-4">HVAC SOLUTION</h2>
              <p className="text-gray-700 text-lg mb-6">
                HVAC stands for Heating, Ventilation, and Air Conditioning. It refers to the system used to regulate indoor temperature, humidity, air quality, and circulation. HVAC systems are crucial for maintaining comfort in buildings, ensuring efficient heating and cooling, and promoting good air quality through ventilation.
              </p>
            </div>
          </div>

          {/* Plumbing Systems */}
          <div className="bg-gray-100 text-gray-900 rounded-lg p-5 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-4">PLUMBING SYSTEMS</h2>
              <p className="text-gray-700 text-lg mb-6">
                Plumbing systems involve the installation and maintenance of pipes, fixtures, and fittings to manage water supply, drainage, and waste removal in buildings.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img src={plumbing} alt="Plumbing Systems" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>

          {/* Fire Protection */}
          <div className="bg-gray-100 text-gray-900 rounded-lg p-5 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img src={fireSafety} alt="Fire Protection" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-4">FIRE PROTECTION</h2>
              <p className="text-gray-700 text-lg mb-6">
                A fire protection system is designed to prevent, detect, and control fires to minimize damage and ensure safety.
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
              <h2 className="text-4xl font-bold mb-4">SAFETY</h2>
              <p className="text-gray-700 text-lg mb-6">
              We rigorously follow the industry safety standards to ensure the safety of our workers and the public. Safety is our number one priority.
              </p>
              <h2 className="text-4xl font-bold mb-4">SUSTAINABILITY
              </h2>
              <p className="text-gray-700 text-lg mb-6">
              We prioritizesustainability in all our designs to ensure minimal environmental impact. Managing the environment is crucial for future generations, and we believe in always doing the right thing.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
