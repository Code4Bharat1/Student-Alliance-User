"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { UserCircleIcon } from "@heroicons/react/solid";
import ProfilePage from "./UserProfile/Profile";

const Navbar = () => {
  const pathname = usePathname();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] =
    useState(false);
  const [mounted, setMounted] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMobileProductDropdown = () =>
    setIsMobileProductDropdownOpen((prev) => !prev);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isProductActive = ["/Prod", "/printer", "/kits"].includes(pathname);
  const hideAuthNav = ["/contact", "/sign_up"].includes(pathname);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/home" className="flex items-center">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-18 hover:rotate-[-5deg] transition-transform duration-300"
          />
          </Link>
        </motion.div>

        {/* Mobile Icons: Hamburger + Cart */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Cart Icon (Mobile Only) */}
          {/* <Link href="/mycart" aria-label="Shopping Cart">
            <ShoppingCartIcon className="h-6 w-6 text-blue-600" />
          </Link> */}

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "/home", label: "Home" },
            { href: "/about", label: "About us" },
            { href: "/Prod", label: "Products" },
            { href: "/shop1", label: "Shop" },
            { href: "/blog", label: "Blog" },
            { href: "/getintouch", label: "Contact us" },
          ].map(({ href, label }) =>
            label === "Products" ? (
              <div className="relative" key={label} ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className={`flex items-center text-gray-800 hover:text-blue-600 focus:outline-none transition-colors duration-300 relative group ${
                    isProductActive ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {label}
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="h-4 w-7 ml-1" />
                  </motion.div>
                  {isProductActive && (
                    <motion.div
                      className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-xl rounded-md mt-1 z-10 w-48 border border-gray-100 overflow-hidden"
                    >
                      <Link
                        href="/Prod"
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200 ${
                          pathname === "/Prod"
                            ? "bg-blue-50 font-medium text-blue-600"
                            : ""
                        }`}
                      >
                        IFPD
                      </Link>
                      <Link
                        href="/printer"
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200 ${
                          pathname === "/printer"
                            ? "bg-blue-50 font-medium text-blue-600"
                            : ""
                        }`}
                      >
                        3D Printers
                      </Link>
                      <Link
                        href="/kits"
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200 ${
                          pathname === "/kits"
                            ? "bg-blue-50 font-medium text-blue-600"
                            : ""
                        }`}
                      >
                        STEM & Robotics
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={href}
                  className={`relative text-gray-800 hover:text-blue-600 transition-colors duration-300 ${
                    pathname === href ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* Cart + Sign In (Desktop Only) */}
        {!hideAuthNav && (
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              className="relative hover:text-blue-600 focus:outline-none group"
              aria-label="Shopping Cart"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <Link href={"/mycart"}>
                <div className="relative p-2 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                  <ShoppingCartIcon className="h-6 w-6 text-blue-600" />
                </div>
              </Link> */}
            </motion.button>
            {/* Only render auth UI after mount to avoid hydration mismatch */}
            {mounted ? (
              token ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center focus:outline-none cursor-pointer"
                    aria-label="User menu"
                  >
                    <UserCircleIcon className="h-8 w-8 text-blue-600 cursor-pointer" />
                    {/* Optionally show user name */}
                    {/* <span className="ml-2 text-gray-800 font-medium">{user?.name}</span> */}
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
                        <Link href={'/profile'}>
                        <button
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer"
                          onClick={() => {
                            router.push("/profile");
                          }}
                        >
                          Profile
                        </button>
                        </Link>
                        <button
                          onClick={() => {
                            dispatch(logout());
                            window.dispatchEvent(new Event("Logout"));
                            setIsProfileDropdownOpen(false);
                            window.location.reload();
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer"
                        >
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign in
                </motion.a>
              )
            ) : null}
          </div>
        )}
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 px-6 pt-6 pb-12 overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col space-y-4 text-gray-800 text-lg">
              <Link
                href="/home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-blue-600"
              >
                About us
              </Link>

              <div>
                <button
                  onClick={toggleMobileProductDropdown}
                  className="flex justify-between w-full items-center hover:text-blue-600 focus:outline-none"
                >
                  Products
                  <motion.div
                    animate={{ rotate: isMobileProductDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="h-5 w-5 ml-1" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isMobileProductDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 flex flex-col space-y-2 overflow-hidden"
                    >
                      <Link
                        href="/Prod"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-base hover:text-blue-600 ${
                          pathname === "/Prod"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        IFPD
                      </Link>
                      <Link
                        href="/printer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-base hover:text-blue-600 ${
                          pathname === "/printer"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        3D Printers
                      </Link>
                      <Link
                        href="/kits"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-base hover:text-blue-600 ${
                          pathname === "/kits"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        STEM & Robotics
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/shop1"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Shop
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Blog
              </Link>
              <Link
                href="/getintouch"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Contact us
              </Link>

              <motion.a
                href="/contact"
                target="_blank"
                className="mt-6 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Sign in
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

// After successful login (in your login handler)
// dispatch(
//   loginSuccess({
//     token: res.data.token,
//     user: res.data.customer,
//   })
// );
// localStorage.setItem("userToken", res.data.token);
// localStorage.setItem("userInfo", JSON.stringify(res.data.customer));
// router.push("/home"); // or wherever you want to redirect
