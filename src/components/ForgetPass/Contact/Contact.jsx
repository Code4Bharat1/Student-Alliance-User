"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { loginSuccess } from "@/redux/slices/authSlice";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "/api/customers/login",
        { email: form.email, password: form.password },
      );
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userInfo", JSON.stringify(res.data.customer));
      dispatch(
        loginSuccess({ token: res.data.token, user: res.data.customer }),
      );
      setMessage("Login successful!");
      setTimeout(() => {
        router.push("/");
      }, 100);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-bg-card rounded-2xl p-8 border border-border-primary"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-text-inverse"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              <FiLock size={24} />
            </div>
            <h2 className="text-3xl font-bold text-text-heading">Sign In</h2>
            <p className="text-text-secondary mt-2 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign_up"
                className="text-brand-primary font-medium hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-text-primary text-sm font-medium block mb-2">
                Email
              </label>
              <div className="relative">
                <FiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
                  size={16}
                />
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-bg-input border border-border-primary rounded-lg text-text-primary text-sm focus:outline-none focus:border-border-focus transition-colors"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-text-primary text-sm font-medium block mb-2">
                Password
              </label>
              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
                  size={16}
                />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 bg-bg-input border border-border-primary rounded-lg text-text-primary text-sm focus:outline-none focus:border-border-focus transition-colors"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-text-secondary">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border-primary"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-brand-primary text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm font-semibold rounded-lg text-text-inverse bg-brand-primary hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Signing in..." : "Sign In"}
            </motion.button>

            {/* Message */}
            <AnimatePresence>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`text-center text-sm ${message.includes("successful") ? "text-success" : "text-error"}`}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
