import React, { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Navbar */}
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            className="flex items-center space-x-2"
            href="/"
            aria-label="Brand"
          >
            <img
              className="w-10 h-10 rounded-full"
              src="https://ih1.redbubble.net/image.2062244241.1768/fposter,small,wall_texture,square_product,600x600.jpg"
              alt="Logo"
            />
            <span className="text-xl font-semibold text-gray-800">
              Cric Opinion
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <button
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => scrollToSection("howtoplay")}
            >
              How To Play
            </button>
            <button
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => scrollToSection("aboutus")}
            >
              About Us
            </button>
            <button
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => scrollToSection("helpandsupport")}
            >
              Help & Support
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleNav}
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isNavOpen ? "rotate-90" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isNavOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`${isNavOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} transition-all duration-500 overflow-hidden sm:hidden`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <button
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => {
                scrollToSection("howtoplay");
                setIsNavOpen(false);
              }}
            >
              How To Play
            </button>
            <button
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => {
                scrollToSection("aboutus");
                setIsNavOpen(false);
              }}
            >
              About Us
            </button>
            <button
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => {
                scrollToSection("helpandsupport");
                setIsNavOpen(false);
              }}
            >
              Help & Support
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
