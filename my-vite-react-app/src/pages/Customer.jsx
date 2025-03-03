import React from 'react';
import Flyrad from '../Assets/Images/Flyrad.jpg';
import SIB from '../Assets/Images/SIB.jpg';
import careercafe from '../Assets/Images/careercafe.jpg';
import incubenation from '../Assets/Images/incubenation.jpg';
import CAP from '../Assets/Images/CAP.jpg';

const Customers = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-[#FFAbo] mb-12">
        Our Customers
      </h2>
      <div className="container mx-auto px-4 relative z-10">
        <div className=" rounded-3xl shadow-xl p-8 transform   overflow-hidden">
          {/* Decorative background shape */}
          <div className="absolute inset-0 bg-black  rounded-3xl -z-10"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 justify-center">
            <div className="flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl rounded-full overflow-hidden bg-white">
              <img className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400" src={careercafe} alt="Career Cafe" />
            </div>
            <div className="flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl rounded-full overflow-hidden bg-white">
              <img className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400" src={SIB} alt="Study in Bangalore" />
            </div>
            <div className="flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl rounded-full overflow-hidden bg-white">
              <img className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400" src={incubenation} alt="Incubenation" />
            </div>
            <div className="flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl rounded-full overflow-hidden bg-white">
              <img className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400" src={CAP} alt="Adcap" />
            </div>
            <div className="flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl rounded-full overflow-hidden bg-white">
              <img className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400" src={Flyrad} alt="Flyrad" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
