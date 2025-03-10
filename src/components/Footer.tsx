
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  // Animation variants for footer sections
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="mt-auto py-8 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-5 text-primary">KNOW US</h1>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {[
            {
              href: "https://facebook.com",
              icon: "facebook",
              color: "text-blue-600 hover:text-blue-800",
            },
            {
              href: "https://youtube.com",
              icon: "youtube",
              color: "text-red-600 hover:text-red-800",
            },
            {
              href: "https://twitter.com",
              icon: "twitter",
              color: "text-blue-400 hover:text-blue-600",
            },
            {
              href: "https://instagram.com",
              icon: "instagram",
              color: "text-pink-600 hover:text-pink-800",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition duration-300`}
            >
              <i
                className={`fab fa-${social.icon} fa-2x`}
                aria-hidden="true"
              ></i>
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-600 mb-6">
          {[
            { path: "/terms", label: "Terms & Conditions" },
            { path: "/gameofskills", label: "Games of Skills" },
            { path: "/privacypolicy", label: "Privacy Policy" },
            {
              path: "/returnpolicy",
              label: "Returns, Refunds & Cancellations",
            },
            { path: "/about", label: "About Us" },
            { path: "/faq", label: "FAQs" },
            { path: "/help", label: "Help & Support" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-primary hover:text-gray-900 font-bold transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="text-center text-md bg-gray-800 text-white py-3 mb-6 lg:-mb-6">
          &copy; {new Date().getFullYear()} CricOpinion Trade Company | All
          rights reserved.
        </div>
      </div>
      {/* Sticky Download & Win Button - Visible only on Mobile and Tablet */}
      <div className="fixed bottom-0 left-0 w-[92%] ml-[4%] lg:hidden rounded-s-sm ">
        <button className="w-full bg-primary text-white py-4 rounded-none font-semibold text-base shadow-md hover:bg-primary-dark transition duration-300 ">
          <i className="fa fa-download mr-2" aria-hidden="true"></i> DOWNLOAD &
          WIN
        </button>
      </div>
    </motion.footer>
  );
}
