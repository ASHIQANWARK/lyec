import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    businessModel: "b2c",
    intent: "exploring",
    industry: "clothing",
    products: [],
    budget: "",
    launchDate: "",
    marketingServices: [],
    communicationPreference: "email",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Inquiry Submitted:", formData);
    // You can add further processing or API calls here.
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        📢 E-Commerce Sales Inquiry Form
      </h2>
      <p className="text-center text-gray-500 mb-4">
        Let us know your business needs, and we'll help you grow!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="businessName"
            placeholder="Business Name (if any)"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <input
          type="url"
          name="website"
          placeholder="Website (if any)"
          value={formData.website}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="businessModel"
          value={formData.businessModel}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="b2c">B2C (Business to Consumer)</option>
          <option value="b2b">B2B (Business to Business)</option>
          <option value="d2c">D2C (Direct to Consumer)</option>
          <option value="dropshipping">Dropshipping</option>
        </select>

        <select
          name="intent"
          value={formData.intent}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="exploring">Just Exploring</option>
          <option value="ready">Ready to Start</option>
          <option value="expanding">Looking to Expand</option>
          <option value="consulting">Need Consultation</option>
        </select>

        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="clothing">Clothing & Fashion</option>
          <option value="electronics">Electronics & Gadgets</option>
          <option value="beauty">Beauty & Skincare</option>
          <option value="home">Home & Kitchen</option>
          <option value="fitness">Fitness & Sports</option>
          <option value="food">Food & Groceries</option>
          <option value="handmade">Handmade & Crafts</option>
        </select>

        <label className="block text-gray-700">
          Which products are you interested in selling?
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            "T-Shirts & Apparel",
            "Smartphones",
            "Skincare & Cosmetics",
            "Furniture",
            "Health Supplements",
            "Toys & Games",
            "Books & Stationery",
            "Jewelry & Accessories",
          ].map((product) => (
            <label key={product} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="products"
                value={product}
                checked={formData.products.includes(product)}
                onChange={handleChange}
              />
              {product}
            </label>
          ))}
        </div>

        <input
          type="number"
          name="budget"
          placeholder="Estimated Budget ($)"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          name="launchDate"
          value={formData.launchDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <label className="block text-gray-700">
          Marketing Services Needed:
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            "SEO Optimization",
            "Social Media Ads",
            "Influencer Marketing",
            "Email Marketing",
            "Website Design",
          ].map((service) => (
            <label key={service} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="marketingServices"
                value={service}
                checked={formData.marketingServices.includes(service)}
                onChange={handleChange}
              />
              {service}
            </label>
          ))}
        </div>

        <label className="block text-gray-700">
          Preferred Communication Method:
        </label>
        <select
          name="communicationPreference"
          value={formData.communicationPreference}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="email">Email</option>
          <option value="phone">Phone Call</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="zoom">Zoom Meeting</option>
        </select>

        <textarea
          name="comments"
          placeholder="Additional Comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 font-bold"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;

