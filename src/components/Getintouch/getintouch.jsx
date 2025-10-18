'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    const nameRegex = /^[A-Za-z ]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    let hasError = false;
    const newErrors = { name: '', email: '', mobile: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      hasError = true;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Enter a valid name';
      hasError = true;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      hasError = true;
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile is required';
      hasError = true;
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit number';
      hasError = true;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    // Prepare form data for Web3Forms
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("mobile", formData.mobile);
    submissionData.append("message", formData.message);
    submissionData.append("access_key", "b1eb1d8a-d85e-49f1-ae95-7658e2dadc06");

    const object = Object.fromEntries(submissionData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        toast.success('🎉 Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
      } else {
        console.error('Submission failed:', result);
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />

      <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Have a question or want to work together? Drop us a message and we'll get back to you soon!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Contact Form */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 animate-fadeInLeft">
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Send Message</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'name' ? 'text-purple-600' : 'text-gray-400'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-400 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-purple-500 focus:bg-white'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'email' ? 'text-purple-600' : 'text-gray-400'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-400 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-purple-500 focus:bg-white'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mobile Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'mobile' ? 'text-purple-600' : 'text-gray-400'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="10-digit mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('mobile')}
                      onBlur={() => setFocusedField('')}
                      maxLength="10"
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        errors.mobile 
                          ? 'border-red-400 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-purple-500 focus:bg-white'
                      }`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-400 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-purple-500 focus:bg-white'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Map & Info */}
            <div className="space-y-8 animate-fadeInRight">
              
              {/* Map */}
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30166.6275494296!2d72.876894!3d19.071279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c892197ad4a7%3A0x6f69acffd67753e2!2sStudent%20Alliance%20LLP!5e0!3m2!1sen!2sin!4v1745559611644!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Location Card */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                  <p className="text-white/90 text-sm">Mumbai, Maharashtra</p>
                  <p className="text-white/90 text-sm">India</p>
                </div>

                {/* Response Time Card */}
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Quick Response</h3>
                  <p className="text-white/90 text-sm">We reply within</p>
                  <p className="text-white/90 text-sm font-semibold">24 hours</p>
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Our support team is always here to assist you. Feel free to reach out anytime!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }
      `}</style>
    </>
  );
};

export default GetinTouch;