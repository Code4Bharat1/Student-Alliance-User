"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const pathname = usePathname();
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen((prev) => !prev);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileDropdownOpen(false);
    router.push("/");
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo */}
        <Link href="/home" className="max-sm:hidden">
          <img src="/images/logo.jpg" alt="logo" className="w-36" />
        </Link>
        <Link href="/home" className="hidden max-sm:block">
          <img src="/images/logo.jpg" alt="logo" className="w-25" />
        </Link>

        {/* Menu (Desktop + Mobile) */}
        <div
          className={`${
            isMobileMenuOpen
              ? "block fixed inset-0 bg-white z-50 p-6 overflow-auto max-lg:w-3/4 max-lg:min-w-[300px] max-lg:shadow-md"
              : "hidden lg:block"
          }`}
        >
          {/* Close Button (Mobile) */}
          {isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden fixed top-3 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
              </svg>
            </button>
          )}

          {/* Links */}
          <ul className="lg:flex gap-x-4 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <Link href="/home">
                <img src="/images/logo.jpg" alt="logo" className="w-36" />
              </Link>
            </li>

            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About us" },
              { href: "/Prod", label: "Products" },
              { href: "/shop1", label: "Shop" },
              { href: "/blog", label: "Blog" },
              { href: "/getintouch", label: "Contact us" },
            ].map(({ href, label }) =>
              label === "Products" ? (
                <li
                  key={label}
                  className="relative max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                  ref={dropdownRef}
                >
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center font-medium text-[15px] ${
                      isActive("/Prod")
                        ? "text-blue-700"
                        : "text-slate-900 hover:text-blue-700"
                    }`}
                  >
                    {label}
                    <ChevronDownIcon className="h-4 w-5 ml-1" />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bg-white shadow-md rounded-md border mt-2 w-44 z-50"
                      >
                        <li>
                          <Link
                            href="/Prod"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            IFPD
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/printer"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            3D Printers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/kits"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            STEM & Robotics
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li
                  key={label}
                  className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                >
                  <Link
                    href={href}
                    className={`block font-medium text-[15px] transition-all ${
                      isActive(href)
                        ? "text-blue-700"
                        : "text-slate-900 hover:text-blue-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex max-lg:ml-auto space-x-4 items-center">
          {mounted && (
            <>
              {isAuthenticated ? (
                <div className="relative" ref={profileDropdownRef}>
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center focus:outline-none"
                  >
                    <UserCircleIcon className="h-8 w-8 text-blue-600 hover:text-blue-700 transition-colors" />
                  </button>
                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                      >
                        <Link href="/profile">
                          <button
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer rounded-t-md"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            Profile
                          </button>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer rounded-b-md"
                        >
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => router.push("/login")}
                    className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => router.push("/sign_up")}
                    className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all"
                  >
                    Sign up
                  </button>
                </>
              )}
            </>
          )}

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden cursor-pointer"
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;