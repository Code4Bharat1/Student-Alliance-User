"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";

export default function UpdatePass() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!password || !confirm) { setError("Please fill in all fields."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }

    setLoading(true);
    try {
      await axios.post("/api/customers/update-password", { email, password });
      toast.success("Password updated successfully!");
      setTimeout(() => { router.push("/login"); }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update password. Try again.");
    } finally {
      setLoading(false);
    }
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
              <FiLock size={24} />
            </div>
            <h2 className="text-2xl font-bold text-text-heading">Reset Password</h2>
            <p className="text-text-secondary text-sm mt-2">Enter your new password below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-text-primary text-sm font-medium block mb-2">New Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="w-full pl-10 pr-10 py-3 bg-bg-input border border-border-primary rounded-lg text-text-primary text-sm focus:outline-none focus:border-border-focus transition-colors"
                  placeholder="Enter new password"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-text-primary text-sm font-medium block mb-2">Confirm Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => { setConfirm(e.target.value); setError(""); }}
                  className="w-full pl-10 pr-10 py-3 bg-bg-input border border-border-primary rounded-lg text-text-primary text-sm focus:outline-none focus:border-border-focus transition-colors"
                  placeholder="Confirm new password"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-error text-sm bg-error-bg rounded-lg py-2 px-3"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm font-semibold rounded-lg text-text-inverse bg-brand-primary hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Updating..." : "Update Password"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
