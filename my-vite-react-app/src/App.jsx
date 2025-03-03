import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VisionMission from "./pages/VissionMission";
import WhyChooseUs from "./pages/WhyChooseUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import EnquiryForm from "./pages/Form";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Uncomment and fix the About route once you have the About page */}
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/VissionMission" element={<VisionMission />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/EnquiryForm" element={<EnquiryForm />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

