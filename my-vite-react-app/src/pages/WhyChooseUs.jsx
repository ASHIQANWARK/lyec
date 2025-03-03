import React from "react";
import WhyImage from "../Assets/Images/e com logo black.png";

const WhyChooseUs = () => {
  const radius = 250; // Radius for placing elements in a circular pattern
  const features = [
    { icon: "&#x20b9;", title: "Affordable Plans", desc: "Subscription models tailored to every stage of your growth.", angle: 0 },
    { icon: "fa-tools", title: "User-Friendly Tools", desc: "Build and manage your online store effortlessly.", angle: 72 },
    { icon: "fa-expand", title: "Scalable Solutions", desc: "Expand your business with features that grow with you.", angle: 144 },
    { icon: "fa-headset", title: "Expert Support", desc: "Access guidance and training every step of the way.", angle: 216 },
    { icon: "fa-store", title: "Multi-Channel Selling", desc: "Reach customers on marketplaces like Amazon, Meesho, and social media.", angle: 288 }
  ];

  // Helper to render an icon based on its content
  const renderIcon = (icon, sizeClasses) => {
    if (icon.startsWith("&#")) {
      return (
        <span
          dangerouslySetInnerHTML={{ __html: icon }}
          className={`${sizeClasses} text-gray-800`}
        />
      );
    } else {
      return <i className={`fas ${icon} ${sizeClasses} text-gray-800`} aria-hidden="true" />;
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen py-12 bg-gradient-to-r from-[#FFAB00] to-[#FFD500] font-serif">
      <div className="container mx-auto text-center px-6 relative">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide animate__animated animate__fadeInDown">
          Why Choose Us?
        </h2>

        {/* Circular Layout Wrapper (For larger screens) */}
        <div className="relative w-full sm:w-[600px] h-full sm:h-[600px] mx-auto flex items-center justify-center sm:flex-nowrap">
          {/* Center Image (Visible only on larger screens) */}
          <div className="absolute w-32 h-32 sm:w-52 sm:h-52 flex items-center justify-center bg-white rounded-full shadow-2xl z-10 sm:block hidden">
            <img
              src={WhyImage}
              alt="Why Choose Us"
              className="w-full h-full object-contain rounded-full animate-spin-slow"
            />
          </div>

          {/* Feature Cards Positioned in a Circular Layout (For larger screens) */}
          <div className="hidden sm:flex sm:flex-wrap justify-center items-center">
            {features.map((item, index) => {
              const angleRad = (item.angle * Math.PI) / 180; // Convert angle to radians
              const x = radius * Math.cos(angleRad); // X coordinate
              const y = radius * Math.sin(angleRad); // Y coordinate

              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center justify-center text-center w-32 sm:w-40"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  {/* Icon inside a circular container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-2">
                    {renderIcon(item.icon, "text-2xl sm:text-3xl")}
                  </div>
                  {/* Feature Title */}
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  {/* Feature Description */}
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout (Stacked Features for Small Screens) */}
        <div className="sm:hidden flex flex-col items-center justify-center w-full space-y-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6">
              {/* Icon inside a circular container */}
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-4">
                {renderIcon(item.icon, "text-3xl")}
              </div>
              {/* Feature Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              {/* Feature Description */}
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
