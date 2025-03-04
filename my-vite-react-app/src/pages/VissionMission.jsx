import React from 'react';
import ecomImage from '../Assets/Images/image2.png'; // Ensure correct path

const VisionMission = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-100 to-white text-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 relative">
          {/* Vision Section */}
          <div className="lg:w-1/2 relative opacity-0 animate__animated animate__fadeIn animate__delay-500 ">
            <div className="p-8 rounded-xl bg-opacity-70 bg-white  space-y-4 rounded-r-full ">
              <h2 className="text-3xl font-semibold text-black mb-4 font-serif">
                🌟 Our Vision
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-serif ">
                To be the global leader in e-commerce solutions, enabling businesses of all sizes to establish and scale their online presence effortlessly.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 text-center opacity-0 animate__animated animate__fadeIn animate__delay-1000">
            <div className="rounded-xl overflow-hidden flex justify-center items-center bg-gradient-to-r from-[#FFAB00] to-[#FFD500] font-serif rounded-r-full rounded-tr-full rounded-l-full ">
              <img
                src={ecomImage}
                alt="E-commerce Vision and Mission"
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="lg:w-1/2 relative opacity-0 animate__animated animate__fadeIn animate__delay-1000">
            <div className="p-8 rounded-xl bg-opacity-70 bg-white  space-y-4  rounded-l-full " >
              <h2 className="text-3xl font-semibold text-black mb-4 font-serif">
                🎯 Our Mission
              </h2>
              <p className="text-lg leading-relaxed font-serif">
                We provide customized, high-performing Shopify stores tailored to the unique needs of each business.
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default VisionMission;


