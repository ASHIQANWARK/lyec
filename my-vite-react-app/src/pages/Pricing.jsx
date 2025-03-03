import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [plan, setPlan] = useState("monthly");
  const navigate = useNavigate();

  // Handler to redirect to registration form with the selected plan
  const handleSelectPlan = (selectedPlan) => {
    // You can pass the plan as a query parameter or in state
    navigate(`/register?plan=${selectedPlan}`);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#FFAB00] to-[#FFD500] font-serif">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Plans
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your business needs and start growing your online presence today.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full flex shadow-md">
            <button
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${
                plan === "monthly"
                  ? "bg-[#FFAB00] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${
                plan === "yearly"
                  ? "bg-[#FFAB00] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setPlan("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Basic Plan</h3>
            <p className="text-4xl font-extrabold mb-2 text-gray-900">
              {plan === "monthly" ? "₹4,500" : "₹28,800"}
              <span className="text-gray-500 text-lg font-medium ml-2 line-through">
                {plan === "monthly" ? "₹5,500" : "₹36,000"}
              </span>
            </p>
            <p className="text-gray-500 mb-4">For the first 3 months</p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>
                <span className="text-green-500">✔</span> Shopify store setup
              </li>
              <li>
                <span className="text-red-500">✖</span> Theme customization
              </li>
              <li>
                <span className="text-red-500">✖</span> App installation and setup
              </li>
              <li>
                <span className="text-red-500">✖</span> Customer Feature Development
              </li>
              <li>
                <span className="text-red-500">✖</span> SEO optimization
              </li>
              <li>
                <span className="text-green-500">✔</span> Payment & shipping setup
              </li>
              <li>
                <span className="text-green-500">✔</span> Product upload Assistance (10 products)
              </li>
              <li>
                <span className="text-green-500">✔</span> Monthly support (email support)
              </li>
              <li>
                <span className="text-red-500">✖</span> Analytics and reports
              </li>
              <li>
                <span className="text-red-500">✖</span> Marketing & Ads support
              </li>
              <li>
                <span className="text-green-500">✔</span> Domain name integration support
              </li>
              <li>
                <span className="text-green-500">✔</span> Product catalog with up to 50 items
              </li>
              <li>
                <span className="text-green-500">✔</span> Secure payment gateway integration
              </li>
            </ul>

            <button
              onClick={() => handleSelectPlan("basic")}
              className="w-full mt-6 bg-[#FFAB00] text-white py-3 rounded-lg font-semibold hover:bg-[#E69A00] transition"
            >
              Select Basic
            </button>
          </div>

          {/* Advanced Plan */}
          <div className="bg-[#222222] p-8 rounded-2xl shadow-xl relative scale-105 border border-yellow-500">
            <span className="absolute -top-3 right-3 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-full">
              Most Popular
            </span>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Advanced Plan</h3>
            <p className="text-4xl font-extrabold mb-2 text-white">
              {plan === "monthly" ? "₹6,500" : "₹78,000"}
              <span className="text-gray-400 text-lg font-medium ml-2 line-through">
                {plan === "monthly" ? "₹7,500" : "₹90,000"}
              </span>
            </p>
            <p className="text-gray-400 mb-4">For the first 3 months</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <span className="text-green-500">✔</span> Shopify store setup
              </li>
              <li>
                <span className="text-green-500">✔</span> Theme customization
              </li>
              <li>
                <span className="text-green-500">✔</span> App installation and setup
              </li>
              <li>
                <span className="text-red-500">✖</span> Customer Feature Development
              </li>
              <li>
                <span className="text-red-500">✖</span> SEO optimization
              </li>
              <li>
                <span className="text-green-500">✔</span> Payment & shipping setup
              </li>
              <li>
                <span className="text-green-500">✔</span> Product upload Assistance (50 products)
              </li>
              <li>
                <span className="text-green-500">✔</span> Monthly support (email and chat)
              </li>
              <li>
                <span className="text-red-500">✖</span> Analytics and reports
              </li>
              <li>
                <span className="text-red-500">✖</span> Marketing & Ads support
              </li>
              <li>
                <span className="text-green-500">✔</span> Product catalog with up to 500 items.
              </li>
              <li>
                <span className="text-red-500">✖</span> Discount and coupon code creation.
              </li>
              <li>
                <span className="text-green-500">✔</span> Automated email marketing campaigns.
              </li>
            </ul>
            <button
              onClick={() => handleSelectPlan("advanced")}
              className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Select Advanced
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Pro Plan</h3>
            <p className="text-4xl font-extrabold mb-2 text-gray-900">
              {plan === "monthly" ? "₹16,500" : "₹198,000"}
              <span className="text-gray-500 text-lg font-medium ml-2 line-through">
                {plan === "monthly" ? "₹18,500" : "₹222,000"}
              </span>
            </p>
            <p className="text-gray-500 mb-4">For the first 3 months</p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>
                <span className="text-green-500">✔</span> Shopify store setup
              </li>
              <li>
                <span className="text-green-500">✔</span> Theme customization
              </li>
              <li>
                <span className="text-green-500">✔</span> App installation and setup
              </li>
              <li>
                <span className="text-green-500">✔</span> Customer Feature Development
              </li>
              <li>
                <span className="text-green-500">✔</span> SEO optimization
              </li>
              <li>
                <span className="text-green-500">✔</span> Payment & shipping setup
              </li>
              <li>
                <span className="text-green-500">✔</span> Product upload Assistance (Unlimited)
              </li>
              <li>
                <span className="text-green-500">✔</span> Monthly support (Call, Email, Chat)
              </li>
              <li>
                <span className="text-green-500">✔</span> Analytics and reports
              </li>
              <li>
                <span className="text-green-500">✔</span> Marketing & Ads support
              </li>
              <li>
                <span className="text-green-500">✔</span> Product catalog with up to 1,200 items
              </li>
              <li>
                <span className="text-green-500">✔</span> Advanced analytics and custom reporting
              </li>
              <li>
                <span className="text-green-500">✔</span> Dedicated account manager
              </li>
            </ul>
            <button
              onClick={() => handleSelectPlan("pro")}
              className="w-full mt-6 bg-[#FFAB00] text-white py-3 rounded-lg font-semibold hover:bg-[#E69A00] transition"
            >
              Select Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
