"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
    try {
      await axios.post(
        "/api/customers",
        { name: form.name, email: form.email, password: form.password }
      );
      setMessage("Account created successfully! Redirecting to login...");
      setMessageType("success");
      setForm({ name: "", email: "", password: "" });
      setTimeout(() => { router.push("/login"); }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Sign up failed. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
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
            <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-text-inverse" style={{ backgroundImage: "var(--brand-gradient)" }}>
              <FiUser size={24} />
            </div>
            <h2 className="text-3xl font-bold text-text-heading">Create Account</h2>
            <p className="text-text-secondary mt-2 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-brand-primary font-medium hover:underline">Login here</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-text-primary text-sm font-medium block mb-2">Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-bg-input border border-border-primary rounded-lg text-text-primary text-sm focus:outline-none focus:border-border-focus transition-colors"
                  placeholder="Enter name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-text-primary text-sm font-medium block mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
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
              <label className="text-text-primary text-sm font-medium block mb-2">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 bg-bg-input border border-border-primary rounded-lg text-text-primary text-sm focus:outline-none focus:border-border-focus transition-colors"
                  placeholder="Enter password"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 rounded border-border-primary"
              />
              I accept the{" "}
              <Link href="/terms" className="text-brand-primary font-medium hover:underline">Terms and Conditions</Link>
            </label>

            {/* Message */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-sm text-center rounded-lg py-3 ${
                    messageType === "success" ? "bg-success-bg text-success" : "bg-error-bg text-error"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm font-semibold rounded-lg text-text-inverse bg-brand-primary hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Creating..." : "Create Account"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
