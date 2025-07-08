'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    if (hasError) return;

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
        toast.success('Your message has been sent successfully!');
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
    }
  };

 return (
  <>
    {/* Toast container should be here */}
    <ToastContainer />

    <section className="w-full px-4 py-10 bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 max-w-5xl w-full border border-gray-300">
        {/* Contact Form */}
        <div className="flex-1">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-2xl font-semibold text-center text-[#0000FF] mb-4">
               Contact Us
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.4)]"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="placeholder:text-[#4D4040] placeholder:text-[13px] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full placeholder:text-[#4D4040] placeholder:text-[13px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="bg-[#0000FF] hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition duration-200"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Google Map Iframe */}
        <div className="flex-1 border border-black">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30166.6275494296!2d72.876894!3d19.071279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c892197ad4a7%3A0x6f69acffd67753e2!2sStudent%20Alliance%20LLP!5e0!3m2!1sen!2sin!4v1745559611644!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full min-h-[300px] border"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </>
);
}
export default GetinTouch;