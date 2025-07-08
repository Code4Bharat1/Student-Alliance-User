"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newOtp = [...otp];
      for (let i = 0; i < pasteData.length; i++) {
        newOtp[i] = pasteData[i];
      }
      setOtp(newOtp);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      alert("Please enter the 6-digit OTP.");
      return;
    }
    try {
      await axios.post("https://student-alliance-api.code4bharat.com/api/auth/verify-otp", {
        email,
        otp: otpValue,
      });
      toast.success("OTP verified successfully!");
      router.push("/UpdatePass?email=" + email);
      // Optionally redirect here
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "OTP verification failed. Please try again."
      );
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      await axios.post("https://student-alliance-api.code4bharat.com/api/auth/send-otp", { email });
      setCountdown(30);
    } catch {
      alert("Failed to resend OTP. Try again.");
    }
    setIsResending(false);
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      {isMounted && (
        <div className="w-full max-w-md mx-4">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 backdrop-blur-sm bg-opacity-90">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Verify Your Account
            </h2>
            <p className="text-gray-500 text-center mb-6">
              We've sent a 6-digit code to your email
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <div className="flex justify-between space-x-2">
                  {otp.map((digit, index) => (
                    <div key={index}>
                      <input
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-12 h-16 text-2xl text-center rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <span>Verify</span>
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Didn't receive code?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={countdown > 0 || isResending}
                    className={`font-medium ${
                      countdown > 0 || isResending
                        ? "text-gray-400"
                        : "text-blue-600 hover:underline hover:text-blue-700"
                    } transition-colors`}
                  >
                    {isResending
                      ? "Sending..."
                      : countdown > 0
                      ? `Resend in ${countdown}s`
                      : "Resend Code"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
