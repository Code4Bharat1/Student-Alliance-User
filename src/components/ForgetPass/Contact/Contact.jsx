"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";
import { useState } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/slices/authSlice";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const hideAuthNav = ["/contact", "/sign_up"].includes(pathname);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "https://student-alliance-api.code4bharat.com/api/customers/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      // Assuming your API returns { token, customer }
      dispatch(
        loginSuccess({
          token: res.data.token,
          user: res.data.customer,
        })
      );
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userInfo", JSON.stringify(res.data.customer));
      setMessage("Login successful!");
      router.push("/");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Welcome back
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Welcome back please enter your details
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-black pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={showPassword ? "show" : "hide"}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-700">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <Link href="/forgot-password">
              <span className="text-blue-500 hover:underline">Forgot password</span>
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition duration-200"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </motion.button>
          {message && (
            <div className="text-center text-sm mt-2 text-red-500">
              {message}
            </div>
          )}

          <div className="relative text-center text-gray-900 my-4">
            <span className="bg-white px-2">or</span>
            <div className="absolute left-0 top-1/2 w-full border-t border-gray-200 transform -translate-y-1/2"></div>
          </div>

          {/* Social Icons Side by Side */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              type="button"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-red-500 text-xl" />
            </button>
            <button
              type="button"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookF className="text-blue-600 text-xl" />
            </button>
            <button
              type="button"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FaInstagram className="text-pink-500 text-xl" />
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/sign_up" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </motion.div>
      <WhatsAppWidget />

      {/* Cart + Sign In/Profile (Desktop Only) */}
      {!hideAuthNav && (
        <div className="hidden md:flex items-center space-x-6">
          {/* ...your existing code for cart, sign in, and profile dropdown... */}
        </div>
      )}
    </div>
  );
}
