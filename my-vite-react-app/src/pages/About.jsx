import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#FFAB00] to-[#FFD500] py-20 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          About Launch Your E-commerce
        </h1>
        <p className="mt-4 text-lg text-gray-100 max-w-4xl mx-auto">
          Launch Your E-commerce is dedicated to empowering small businesses to take the leap into the digital marketplace with ease. By offering a seamless transition to online sales, we provide innovative tools, expert advice, and scalable solutions tailored to meet the unique needs of growing businesses. Whether you're just starting or looking to optimize your current online operations, our comprehensive platform is here to help you every step of the way. We are committed to helping you unlock your brand's full potential and succeed in the ever-evolving world of e-commerce.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#FFAB00] mb-8">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Our team is a diverse group of professionals, each contributing their expertise to provide small businesses with the best possible service and support. From strategic vision to day-to-day operations, our leadership team works relentlessly to drive the success of every client. Learn more about the amazing individuals behind Launch Your E-commerce:
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {/* Founder */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#FFAB00]">Founder</h3>
            <img src="founder-photo.jpg" alt="Founder" className="rounded-full w-40 h-40 mx-auto mt-6 mb-4"/>
            <p className="text-lg text-gray-700">
              Our Founder, [Founder Name], had a vision to create an all-in-one platform that would level the playing field for small businesses in the online space. With years of experience in both the tech and retail industries, [Founder Name] is deeply passionate about creating opportunities for entrepreneurs to thrive in a digital-first world.
            </p>
          </div>

          {/* CEO */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#FFAB00]">CEO</h3>
            <img src="ceo-photo.jpg" alt="CEO" className="rounded-full w-40 h-40 mx-auto mt-6 mb-4"/>
            <p className="text-lg text-gray-700">
              As CEO, [CEO Name] leads the company with a focus on innovation and growth. With a background in business management and a passion for digital transformation, [CEO Name] is committed to delivering cutting-edge solutions that help businesses grow faster and more efficiently in the competitive e-commerce landscape.
            </p>
          </div>

          {/* CMO */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#FFAB00]">CMO</h3>
            <img src="cmo-photo.jpg" alt="CMO" className="rounded-full w-40 h-40 mx-auto mt-6 mb-4"/>
            <p className="text-lg text-gray-700">
              [CMO Name] brings years of marketing expertise to the team, driving our marketing strategies and ensuring that our message reaches the right audience. With a deep understanding of digital marketing, brand development, and customer engagement, [CMO Name] is dedicated to helping businesses build strong, lasting relationships with their customers.
            </p>
          </div>

          {/* CFO */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#FFAB00]">CFO</h3>
            <img src="cfo-photo.jpg" alt="CFO" className="rounded-full w-40 h-40 mx-auto mt-6 mb-4"/>
            <p className="text-lg text-gray-700">
              As the CFO, [CFO Name] oversees the financial health of the company, ensuring that we maintain strong financial practices and drive long-term value for our clients and partners. [CFO Name]'s expertise in financial management and strategic planning helps guide Launch Your E-commerce toward sustainable growth and success.
            </p>
          </div>

          {/* COO */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#FFAB00]">COO</h3>
            <img src="coo-photo.jpg" alt="COO" className="rounded-full w-40 h-40 mx-auto mt-6 mb-4"/>
            <p className="text-lg text-gray-700">
              [COO Name] is responsible for the day-to-day operations of Launch Your E-commerce, ensuring that everything runs smoothly and efficiently. With a background in operations management and logistics, [COO Name] leads the team to implement innovative processes that enhance productivity and improve customer satisfaction across the board.
            </p>
          </div>
          {/* CSO */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#FFAB00]">CSO</h3>
            <img src="coo-photo.jpg" alt="CSO" className="rounded-full w-40 h-40 mx-auto mt-6 mb-4"/>
            <p className="text-lg text-gray-700">
              [CSO Name] is responsible for the day-to-day operations of Launch Your E-commerce, ensuring that everything runs smoothly and efficiently. With a background in operations management and logistics, [COO Name] leads the team to implement innovative processes that enhance productivity and improve customer satisfaction across the board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

