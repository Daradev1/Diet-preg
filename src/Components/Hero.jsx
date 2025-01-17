import React from 'react';
import ladyImg from '../assets/ladyImg.png';
import bgImg from '../assets/bgImg.jpg'; // Import the background image

const Hero = () => {
  return (
    <div
      className="relative bg-cover z-50 bg-center bg-no-repeat h-full"
      style={{ backgroundImage: `url(${bgImg})`, }} // Use the imported image
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-6">
        {/* Left Text Section */}
        <div className="text-white text-center lg:text-left max-w-lg">
          <h1 className="text-4xl md:text-3xl mb-4 capitalize  mt-8">Nourishing with healthy <span className="text-button">food</span> choices</h1>
          <button className="bg-button text-white font-bold py-2 px-4 rounded-sm">
            Get Started
          </button>
        </div>
    
        {/* Right Image Section */}
        <div className=" lg:mt-0 lg:ml-12">
          <img src={ladyImg} alt="Hero" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
