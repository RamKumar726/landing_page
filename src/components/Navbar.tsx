import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  // Animation for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.25 },
    exit: { opacity: 0 },
  };

  return (
    <div className="bg-white">
      {/* Fixed Navbar Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-lg">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-primary">
          {/* Logo */}
          <a
            href="/"
            className="text-3xl font-bold leading-none text-white"
          >
            <img
              src="images/6.jpg"
              alt="Logo"
              className="w-14 h-14 rounded-full"
            />
          </a>
          {/* Burger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-white p-3"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6">
            <li>
              <a
                href="#how-to-play" // Hash link to the section
                className="text-sm text-white hover:text-gray-200"
                onClick={closeMenu}
              >
                How To Play
              </a>
            </li>
            <li className="text-gray-300"></li>
            <li>
              <a
                href="#about-us" // Hash link to the section
                className="text-sm text-white hover:text-gray-200"
                onClick={closeMenu}
              >
                About Us
              </a>
            </li>
            <li className="text-gray-300"></li>
            <li>
              <a
                href="#faq" // Hash link to the section
                className="text-sm text-white hover:text-gray-200"
                onClick={closeMenu}
              >
                FAQ's
              </a>
            </li>
            <li className="text-gray-300"></li>
            <li>
              <a
                href="#help-support" // Hash link to the section
                className="text-sm text-white hover:text-gray-200"
                onClick={closeMenu}
              >
                Rating & Reviews
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="navbar-backdrop fixed inset-0 bg-primary opacity-50 z-40"
              onClick={toggleMenu}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            {/* Mobile Menu */}
            <motion.nav
              className="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-6 bg-primary border-r overflow-y-auto z-50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center mb-8">
                <a
                  href="/"
                  className="mr-auto text-3xl font-bold leading-none"
                >
                  <img
                    src="images/6.jpg"
                    alt="Logo"
                    className="w-14 h-14 rounded-full"
                  />
                </a>
                <button className="navbar-close" onClick={toggleMenu}>
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#how-to-play" // Hash link to the section
                      className="block p-4 text-sm font-semibold text-white hover:text-blue-600"
                      onClick={closeMenu}
                    >
                      How To Play
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#about-us" // Hash link to the section
                      className="block p-4 text-sm font-semibold text-white hover:text-blue-600"
                      onClick={closeMenu}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#faq" // Hash link to the section
                      className="block p-4 text-sm font-semibold text-white hover:text-blue-600"
                      onClick={closeMenu}
                    >
                      FAQ's
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#help-support" // Hash link to the section
                      className="block p-4 text-sm font-semibold text-white hover:text-blue-600"
                      onClick={closeMenu}
                    >
                      Help & Support
                    </a>
                  </li>
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}