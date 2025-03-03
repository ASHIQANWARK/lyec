import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Images/e com logo black.png'; // Adjust the path as needed

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-12 transform transition-transform duration-300 hover:scale-110 font-serif" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-lg font-medium text-[#000]">
          <Link to="/" className="hover:text-[#000] transition-all duration-300 ease-in-out transform hover:scale-105 font-serif">Home</Link>
          <Link to="/pricing" className="hover:text-[#000] transition-all duration-300 ease-in-out transform hover:scale-105 font-serif">Plan</Link>
          <Link to="/about" className="hover:text-[#000] transition-all duration-300 ease-in-out transform hover:scale-105 font-serif">About</Link>
          <Link to="/contact" className="hover:text-[#000] transition-all duration-300 ease-in-out transform hover:scale-105 font-serif">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#000] focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-transparent border-t-0 transform transition-all duration-300 ease-in-out font-serif`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-[#000] transform transition-transform duration-300 hover:scale-105 font-serif"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="block text-gray-700 hover:text-[#000] transform transition-transform duration-300 hover:scale-105 font-serif"
            onClick={() => setIsOpen(false)}
          >
            Plan
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-[#000] transform transition-transform duration-300 hover:scale-105 font-serif"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-[#000] transform transition-transform duration-300 hover:scale-105 font-serif"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
