import React from "react";
import "animate.css"; // Ensure Animate.css is installed and imported
import ourImage from "../Assets/Images/E commerce Brochure_page-0005.jpg"; // Your image import

const OurProcess = () => {
  const processSteps = [
    {
      title: "💡 Consultation",
      description:
        "Understanding your business needs to tailor our services effectively.",
    },
    {
      title: "🎨 Design & Development",
      description:
        "Creating a responsive and user-friendly Shopify store that reflects your brand.",
    },
    {
      title: "🔧 Integration & Optimization",
      description:
        "Enhancing your store with essential apps for improved functionality.",
    },
    {
      title: "🚀 Launch & Growth",
      description:
        "Implementing marketing strategies to ensure your success in the market.",
    },
  ];

  return (
    <section className="relative py-12 bg-[#ffffff]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column: Process Timeline */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft">
            <div className="bg-white p-8 rounded-3xl  space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Process Icon */}
                  <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full w-12 h-12 text-xl font-semibold absolute -left-6">
                    {index + 1}
                  </div>
                  {/* Process Content */}
                  <div className="ml-14 space-y-3">
                    <h3 className="text-2xl font-semibold text-yellow-500">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700">{step.description}</p>
                  </div>
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-0 top-8 w-0.5 bg-gray-300 h-16 ml-7"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Background */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-full">
              <img
                src={ourImage}
                alt="Hero Image"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold z-10">
                Watch the Process
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
