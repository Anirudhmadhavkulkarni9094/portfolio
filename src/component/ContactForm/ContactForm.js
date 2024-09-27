import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contextConfig/ThemeContext';

function ContactForm() {
  const { darkMode } = useContext(ThemeContext); // Get dark mode status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    budget: '',
    currency: 'USD',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to an email service, backend API, or any other action
    console.log('Form data:', formData);
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return <p className="text-center text-2xl font-semibold text-green-600">Thank you for your inquiry! I'll get back to you soon.</p>;
  }

  return (
    <div className={darkMode ? 'bg-black min-h-screen font-mono p-10' : 'bg-white font-mono p-10'}>
      <div className="max-w-2xl mx-auto p-6 border-4 rounded-xl">
        <h2 className={darkMode ? 'text-3xl font-bold text-center mb-8 text-gray-100' : 'text-3xl font-bold text-center mb-8 text-gray-900'}>
          Contact Me for a Project Inquiry
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className={darkMode ? 'block text-lg font-medium text-gray-100' : 'block text-lg font-medium text-gray-700'}>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={darkMode 
                ? 'mt-1 block w-full rounded-md bg-gray-800 border-gray-600 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' 
                : 'mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className={darkMode ? 'block text-lg font-medium text-gray-100' : 'block text-lg font-medium text-gray-700'}>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={darkMode 
                ? 'mt-1 block w-full rounded-md bg-gray-800 border-gray-600 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' 
                : 'mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'}
              placeholder="Enter your email"
            />
          </div>

          {/* Project Details */}
          <div>
            <label className={darkMode ? 'block text-lg font-medium text-gray-100' : 'block text-lg font-medium text-gray-700'}>Project Details</label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              className={darkMode 
                ? 'mt-1 block w-full rounded-md bg-gray-800 border-gray-600 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' 
                : 'mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'}
              rows="4"
              placeholder="Describe your project"
            />
          </div>

          {/* Budget */}
          <div>
            <label className={darkMode ? 'block text-lg font-medium text-gray-100' : 'block text-lg font-medium text-gray-700'}>Estimated Budget</label>
            <div className="flex space-x-2">
              {/* Currency Selection */}
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                required
                className={darkMode 
                  ? 'bg-gray-800 text-gray-100 rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2'
                  : 'bg-white text-gray-900 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2'}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>

              {/* Budget Input */}
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className={darkMode 
                  ? 'w-full bg-gray-800 text-gray-100 rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2' 
                  : 'w-full bg-white text-gray-900 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2'}
                placeholder="Enter your estimated budget"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={darkMode ? 'block text-lg font-medium text-gray-100' : 'block text-lg font-medium text-gray-700'}>Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={darkMode 
                ? 'mt-1 block w-full rounded-md bg-gray-800 border-gray-600 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' 
                : 'mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'}
              rows="3"
              placeholder="Any additional information or questions"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
