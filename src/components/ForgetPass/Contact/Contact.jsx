"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { loginSuccess } from "@/redux/slices/authSlice";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const hideAuthNav = ["/login", "/sign_up"].includes(pathname);

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

      // ✅ First set localStorage
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userInfo", JSON.stringify(res.data.customer));

      // ✅ Then dispatch to Redux
      dispatch(
        loginSuccess({
          token: res.data.token,
          user: res.data.customer,
        })
      );

      setMessage("Login successful!");
      
      // ✅ Small delay to ensure state updates
      setTimeout(() => {
        router.push("/");
      }, 100);
      
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 py-10 mb-2 min-h-screen grid md:grid-cols-2 items-center gap-8">
      {/* Left Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-md:order-1 p-6"
      >
        <img
          src="https://readymadeui.com/signin-image.webp"
          alt="login"
          className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
        />
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center md:p-10 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full shadow-xl"
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-lg w-full mx-auto text-slate-900"
        >
          <div className="mb-12">
            <h3 className="text-4xl font-bold">Sign in</h3>
            <p className="text-slate-600 text-sm mt-4">
              Don't have an account?
              <Link
                href="/sign_up"
                className="text-blue-600 font-medium hover:underline ml-1"
              >
                Register here
              </Link>
            </p>
          </div>

          <div className="space-y-8">
            {/* Email Field */}
            <div>
              <label className="text-slate-900 text-xs font-medium block mb-2">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full text-sm border-b border-slate-300 focus:border-slate-800 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    ></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="text-slate-900 text-xs font-medium block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="w-full text-sm border-b border-slate-300 focus:border-slate-800 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="absolute right-2"
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
                          className="w-[18px] h-[18px]"
                          viewBox="0 0 20 20"
                          fill="#bbb"
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
                          className="w-[18px] h-[18px]"
                          viewBox="0 0 20 20"
                          fill="#bbb"
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
            </div>

            {/* Remember + Forgot */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <label className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 border-slate-300 rounded"
                />
                <span className="text-slate-600 ml-3 text-sm">
                  Remember me
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-12">
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 text-sm font-medium tracking-wider rounded-full text-white bg-slate-800 hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </motion.button>
            {message && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm mt-2 ${
                  message.includes("successful") ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </motion.p>
            )}
          </div>

          {/* Divider */}
          <div className="my-4 flex items-center gap-4">
            <hr className="w-full border-slate-300" />
            <p className="text-sm text-slate-900 text-center">or</p>
            <hr className="w-full border-slate-300" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm font-medium tracking-wider text-slate-900 border border-slate-300 rounded-full bg-slate-50 hover:bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fbbd00"
                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
              />
              <path
                fill="#0f9d58"
                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
              />
              <path
                fill="#31aa52"
                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
              />
              <path
                fill="#3c79e6"
                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
              />
              <path
                fill="#cf2d48"
                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
              />
              <path
                fill="#eb4132"
                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
              />
            </svg>
            Continue with Google
          </button>
        </form>
      </motion.div>

      <WhatsAppWidget />

      {!hideAuthNav && (
        <div className="hidden md:flex items-center space-x-6"></div>
      )}
    </div>
  );
}