"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { FiMail, FiArrowLeft } from "react-icons/fi";

export default function ForgotPass() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) { setEmailError("Email is required"); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { setEmailError("Please enter a valid email address"); return; }

    setIsSubmitting(true);
    setEmailError("");

    try {
      const res = await axios.get(
        `/api/customers/email/${encodeURIComponent(email)}`
      );
      if (!res.data || !res.data._id) {
        setEmailError("No user found with this email.");
        setIsSubmitting(false);
        return;
      }
      await axios.post("/api/auth/send-otp", { email });
      toast.success("OTP sent successfully! Please check your email.");
      router.push(`/OTP?email=${encodeURIComponent(email)}`);
    } catch (error) {
      setEmailError(error.response?.data?.message || "Failed to verify email. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12">
      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md"
          >
            <div className="bg-bg-card rounded-2xl p-8 border border-border-primary" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-text-inverse" style={{ backgroundImage: "var(--brand-gradient)" }}>
                  <FiMail size={24} />
                </div>
                <h2 className="text-2xl font-bold text-text-heading">Forgot Password</h2>
                <p className="text-text-secondary text-sm mt-2">Enter your email and we&apos;ll send you a verification code</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-text-primary text-sm font-medium block mb-2">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                      className={`w-full pl-10 pr-4 py-3 bg-bg-input border rounded-lg text-text-primary text-sm focus:outline-none transition-colors ${emailError ? "border-error" : "border-border-primary focus:border-border-focus"}`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {emailError && <p className="text-error text-xs mt-1">{emailError}</p>}
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-sm font-semibold rounded-lg text-text-inverse bg-brand-primary hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Sending OTP..." : "Send Verification Code"}
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/login" className="inline-flex items-center gap-1 text-sm text-brand-primary hover:underline">
                  <FiArrowLeft size={14} /> Back to Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
