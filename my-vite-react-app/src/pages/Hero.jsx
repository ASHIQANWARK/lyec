import React from 'react';
import WebsiteImage from '../Assets/Images/E_commerce_Brochure_page-0001-removebg.png'; // Adjust the path as needed

const Hero = () => {
  return (
    <section className="flex items-center min-h-screen py-12 bg-gradient-to-r from-[#FFAB00] to-[#FFD500]  font-serif">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={WebsiteImage}
              alt="Hero Image"
              className="w-full rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Right Side - Content */}
          <div className="lg:w-1/2 px-4">
            <h1 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg text-black leading-tight mb-4 text-center lg:text-left lg:ml-16">
              Transform Your Business with Digital Solutions!
            </h1>
            <p className="text-xl text-white mb-6 text-center lg:text-left lg:ml-16">
              Start your journey today with our intuitive tools and flexible plans. "Launch Your E-commerce" helps businesses like yours adapt, grow, and thrive in the digital world with ease and efficiency.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-block bg-black border-2 text-white text-base font-semibold px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 ease-in-out lg:ml-16"
              >
                📞 Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
