"use client"

import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryMethod: "Delivery", // default
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting form data:", formData);

  try {
    const response = await axios.post("https://student-alliance-api.code4bharat.com/api/users", formData);
    setMessage(response.data.message || "User created successfully");
    console.log("Success response:", response.data);
  } catch (error) {
    console.error("Error caught in submission:", error);  // <-- Log full error object

    if (error.response) {
      // Backend responded with a status outside 2xx
      console.error("Backend error response data:", error.response.data);
      console.error("Backend error status:", error.response.status);
      setMessage(error.response.data.message || `Error: ${error.response.statusText}`);
    } else if (error.request) {
      // Request made but no response received
      console.error("No response received:", error.request);
      setMessage("No response from server. Please try again later.");
    } else {
      // Something happened setting up the request
      console.error("Error setting up request:", error.message);
      setMessage(`Request error: ${error.message}`);
    }
  }
};


  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        {["name", "email", "phone", "country", "city", "state", "zipCode"].map((field) => (
          <div key={field} style={{ marginBottom: 12 }}>
            <label>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            </label>
          </div>
        ))}

        <div style={{ marginBottom: 12 }}>
          <label>
            Delivery Method:
            <select
              name="deliveryMethod"
              value={formData.deliveryMethod}
              onChange={handleChange}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            >
              <option value="Delivery">Delivery</option>
              <option value="Pick up">Pick up</option>
            </select>
          </label>
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
      </form>
      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
};

export default page;
