"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (message) setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptTerms) {
      setMessage("Please accept the Terms and Conditions");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const res = await axios.post(
        "https://student-alliance-api.code4bharat.com/api/customers",
        {
          name: form.name,
          email: form.email,
          password: form.password,
        }
      );

      setMessage("Account created successfully! Redirecting to login...");
      setMessageType("success");
      setForm({ name: "", email: "", password: "" });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Sign up failed. Please try again."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-10 mb-10 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        {/* Left Side - Image */}
        <div className="max-md:order-1 p-4">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="https://readymadeui.com/signin-image.webp"
            alt="login-image"
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
          />
        </div>

        {/* Right Side - Form */}
        <div className="  flex items-center md:rounded-tl-[55px] md:rounded-bl-[55px] lg:p-12 p-8 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="max-w-lg w-full mx-auto"
          >
            <div className="mb-12">
              <h1 className="text-3xl font-semibold text-purple-400">
                Create an account
              </h1>
            </div>

            {/* Full Name */}
            <div>
              <label className="text-white text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-slate-500 focus:border-white pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-slate-500 focus:border-white pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-slate-500 focus:border-white pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mt-8">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 shrink-0 rounded cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="text-slate-300 ml-3 block text-sm"
              >
                I accept the{" "}
                <Link href="/terms" className="text-purple-400 font-medium hover:underline ml-1">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            {/* Message */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-6 text-sm text-center rounded-md py-3 ${
                    messageType === "success"
                      ? "bg-green-50 text-green-600 border border-green-300"
                      : "bg-red-50 text-red-600 border border-red-300"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <div className="mt-8">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-max shadow-xl py-3 px-6 min-w-32 text-sm text-white font-medium rounded-sm bg-purple-600 hover:bg-purple-500 focus:outline-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {loading ? "Creating..." : "Register"}
              </motion.button>

              <p className="text-sm text-slate-300 mt-8">
                Already have an account?{" "}
                <Link
                  href="/contact"
                  className="text-purple-400 font-medium hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </motion.form>
        </div>
      </div>

      <WhatsAppWidget />
    </div>
  );
}
