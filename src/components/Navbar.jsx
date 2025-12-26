"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const pathname = usePathname();
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
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(e.target)
      ) {
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
      <div className="flex items-center justify-between gap-3 w-full">
        {/* Logo */}
        <Link href="/home">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={176}
            height={80}
            className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto"
            priority
          />
        </Link>

        {/* Menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? "block fixed inset-0 bg-white z-50 p-6 overflow-auto max-lg:w-3/4 max-lg:min-w-[300px] max-lg:shadow-md"
              : "hidden lg:block"
          }`}
        >
          {isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden fixed top-3 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              ✕
            </button>
          )}

          <ul className="lg:flex gap-x-4 max-lg:space-y-3">
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
                  className="relative px-3"
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
                    Products <ChevronDownIcon className="h-4 w-5 ml-1" />
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
                          <Link className="block px-4 py-2" href="/Prod">
                            IFPD
                          </Link>
                        </li>
                        <li>
                          <Link className="block px-4 py-2" href="/printer">
                            3D Printers
                          </Link>
                        </li>
                        <li>
                          <Link className="block px-4 py-2" href="/kits">
                            STEM & Robotics
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={label} className="px-3">
                  <Link
                    href={href}
                    className={`font-medium text-[15px] ${
                      isActive(href)
                        ? "text-blue-700"
                        : "text-slate-900 hover:text-blue-700"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 lg:gap-4 max-lg:ml-auto">
          {isAuthenticated ? (
            mounted && (
              <div className="relative" ref={profileDropdownRef}>
                <button onClick={toggleProfileDropdown}>
                  <UserCircleIcon className="h-8 w-8 text-blue-600" />
                </button>

                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg"
                    >
                      <Link href="/profile">
                        <button className="block w-full px-4 py-2 text-left">
                          Profile
                        </button>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          ) : (
            <>
              <button
                onClick={() => router.push("/login")}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-full border"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/sign_up")}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-full bg-blue-600 text-white"
              >
                Sign up
              </button>
            </>
          )}

          <button onClick={toggleMobileMenu} className="lg:hidden">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
