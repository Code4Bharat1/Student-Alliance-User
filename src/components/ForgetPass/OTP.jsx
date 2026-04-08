"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiShield } from "react-icons/fi";

export const dynamic = "force-dynamic";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (text.length === 6) {
      setOtp(text.split(""));
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) { toast.error("Please enter the 6-digit OTP."); return; }
    setLoading(true);
    try {
      await axios.post("/api/auth/verify-otp", { email, otp: otpValue });
      toast.success("OTP verified successfully!");
      router.push(`/UpdatePass?email=${encodeURIComponent(email)}`);
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      await axios.post("/api/auth/send-otp", { email });
      toast.success("OTP resent!");
      setCountdown(30);
      setOtp(["", "", "", "", "", ""]);
    } catch {
      toast.error("Failed to resend OTP.");
    }
    setIsResending(false);
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-bg-card rounded-2xl p-8 border border-border-primary" style={{ boxShadow: "var(--shadow-lg)" }}>
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-text-inverse" style={{ backgroundImage: "var(--brand-gradient)" }}>
              <FiShield size={24} />
            </div>
            <h2 className="text-2xl font-bold text-text-heading">Verify OTP</h2>
            <p className="text-text-secondary text-sm mt-2">
              Enter the 6-digit code sent to <span className="text-brand-primary font-medium">{email}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-3" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-xl font-bold bg-bg-input border border-border-primary rounded-lg text-text-primary focus:outline-none focus:border-border-focus transition-colors"
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading || otp.join("").length !== 6}
              className="w-full py-3 text-sm font-semibold rounded-lg text-text-inverse bg-brand-primary hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </motion.button>

            <div className="text-center text-sm">
              {countdown > 0 ? (
                <p className="text-text-tertiary">Resend OTP in <span className="text-brand-primary font-medium">{countdown}s</span></p>
              ) : (
                <button type="button" onClick={handleResend} disabled={isResending} className="text-brand-primary hover:underline font-medium disabled:opacity-50">
                  {isResending ? "Resending..." : "Resend OTP"}
                </button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
