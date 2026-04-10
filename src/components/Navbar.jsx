"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useTheme } from "@/components/ThemeProvider";
import {
  FiSun,
  FiMoon,
  FiChevronDown,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
  FiShoppingCart,
} from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { theme, toggleTheme } = useTheme();

  const dispatch = useDispatch();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/Prod", label: "Products" },
    { href: "/shop1", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/getintouch", label: "Contact us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-2"
          : "bg-bg-navbar/95 py-4 border-b border-border-primary"
      }`}
      style={
        scrolled ? { boxShadow: "0 4px 30px rgba(0,0,0,0.08)" } : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Image
                src="/logo.png"
                alt="Student Alliance"
                width={176}
                height={80}
                className={`h-auto transition-all duration-300 ${scrolled ? "w-28 sm:w-32" : "w-32 sm:w-36 lg:w-40"}`}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) =>
              label === "Products" ? (
                <div key={label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className={`nav-link flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive("/Prod")
                        ? "text-brand-primary bg-brand-primary/10 active"
                        : "text-text-secondary hover:text-brand-primary hover:bg-bg-hover"
                    }`}
                  >
                    Products
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-bg-card/95 backdrop-blur-xl border border-border-primary rounded-xl overflow-hidden"
                        style={{
                          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
                        }}
                      >
                        {[
                          {
                            href: "/Prod",
                            label: "IFPD",
                            desc: "Interactive Flat Panels",
                          },
                          {
                            href: "/printer",
                            label: "3D Printers",
                            desc: "Professional printing",
                          },
                          {
                            href: "/kits",
                            label: "STEM & Robotics",
                            desc: "Learning kits",
                          },
                        ].map((item) => (
                          <Link
                            key={item.label}
                            className="block px-4 py-3 hover:bg-bg-hover transition-colors group"
                            href={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="text-sm font-medium text-text-primary group-hover:text-brand-primary transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-text-muted mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className={`nav-link px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(href)
                      ? "text-brand-primary bg-brand-primary/10 active"
                      : "text-text-secondary hover:text-brand-primary hover:bg-bg-hover"
                  }`}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {/* <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-xl bg-bg-hover/80 text-text-secondary hover:text-brand-primary border border-transparent hover:border-border-primary transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -12, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 12, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <FiSun size={18} />
                  ) : (
                    <FiMoon size={18} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button> */}

            {/* Cart */}
            <Link href="/mycart">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-bg-hover/80 text-text-secondary hover:text-brand-primary border border-transparent hover:border-border-primary transition-all duration-300"
              >
                <FiShoppingCart size={18} />
              </motion.div>
            </Link>

            {isAuthenticated ? (
              mounted && (
                <div className="relative" ref={profileDropdownRef}>
                  <motion.button
                    onClick={toggleProfileDropdown}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/15 transition-all duration-300"
                  >
                    <FiUser size={18} />
                  </motion.button>

                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-bg-card/95 backdrop-blur-xl border border-border-primary rounded-xl overflow-hidden"
                        style={{
                          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
                        }}
                      >
                        <Link
                          href="/profile"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3 px-4 py-3 text-text-primary hover:bg-bg-hover transition-colors">
                            <FiUser size={16} />
                            <span className="text-sm font-medium">Profile</span>
                          </div>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-3 text-error hover:bg-error-bg transition-colors"
                        >
                          <FiLogOut size={16} />
                          <span className="text-sm font-medium">Logout</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <motion.button
                  onClick={() => router.push("/login")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2 text-sm font-medium rounded-xl text-text-primary border border-border-primary hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                >
                  Login
                </motion.button>
                <motion.button
                  onClick={() => router.push("/sign_up")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2 text-sm font-medium rounded-xl text-text-inverse transition-all duration-300 pulse-glow"
                  style={{ backgroundImage: "var(--brand-gradient)" }}
                >
                  Sign up
                </motion.button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2.5 rounded-xl bg-bg-hover/80 text-text-secondary hover:text-brand-primary transition-all duration-300"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-border-primary bg-bg-card/95 backdrop-blur-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map(({ href, label }) => {
                if (label === "Products") {
                  return (
                    <div key={label} className="space-y-1">
                      <button
                        onClick={() => setIsMobileProductsOpen((v) => !v)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive(href)
                            ? "text-brand-primary bg-brand-primary/10"
                            : "text-text-secondary hover:text-brand-primary hover:bg-bg-hover"
                        }`}
                      >
                        <span>Products</span>
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isMobileProductsOpen && (
                        <div className="pl-4 pr-2 space-y-1">
                          <Link
                            href="/Prod"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileProductsOpen(false);
                            }}
                            className="block px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-brand-primary hover:bg-bg-hover transition-colors"
                          >
                            IFPD
                          </Link>
                          <Link
                            href="/printer"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileProductsOpen(false);
                            }}
                            className="block px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-brand-primary hover:bg-bg-hover transition-colors"
                          >
                            3D Printers
                          </Link>
                          <Link
                            href="/kits"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileProductsOpen(false);
                            }}
                            className="block px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-brand-primary hover:bg-bg-hover transition-colors"
                          >
                            STEM & Robotics
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(href)
                        ? "text-brand-primary bg-brand-primary/10"
                        : "text-text-secondary hover:text-brand-primary hover:bg-bg-hover"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              {!isAuthenticated && (
                <div className="flex gap-2 pt-3 border-t border-border-primary mt-3">
                  <button
                    onClick={() => {
                      router.push("/login");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1 py-2.5 text-sm font-medium rounded-xl text-text-primary border border-border-primary hover:border-brand-primary transition-all"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      router.push("/sign_up");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1 py-2.5 text-sm font-medium rounded-xl text-text-inverse transition-all"
                    style={{ backgroundImage: "var(--brand-gradient)" }}
                  >
                    Sign up
                  </button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
