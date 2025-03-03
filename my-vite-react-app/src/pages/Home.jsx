import React from "react";
import Hero from "./Hero";
import VisionMission from "./VissionMission";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";
import FAQ from "./Faq";
import Customers from "./Customer";
import ChatBot from "./Chatbot"; // Import the ChatBot component

const Home = () => {
  return (
    <div>
      <Hero />
      <VisionMission />
      <WhyChooseUs />
      <OurProcess />
      <FAQ />
      <Customers />
    
      <ChatBot /> {/* Add chatbot */}
    </div>
  );
};

export default Home;
