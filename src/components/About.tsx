import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for the key points
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animation plays only once
        >
          <div className="flex justify-center items-center w-full">
            <h1 className="text-primary text-3xl lg:text-4xl font-bold flex items-center gap-4">
              <span className="w-12 h-1.5 bg-primary rounded-full"></span>
              ABOUT CRICOP
              <span className="w-12 h-1.5 bg-primary rounded-full"></span>
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            CRICOP is a one-of-a-kind opinion trading platform dedicated exclusively to cricket. Our platform empowers cricket enthusiasts to exchange predictions, engage in vibrant discussions, and earn rewards as the action unfolds on the pitch.
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          className="grid grid-cols-1 lg:px-56 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animation plays only once
        >
          {/* Exclusively Cricket */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Scale up on hover
          >
            {/* Border Highlight Animation */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-300"></div>
            <div className="flex justify-center">
              <i className="fas fa-baseball-ball text-5xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-6">
              Exclusively Cricket
            </h3>
            <p className="mt-2 text-gray-600">
              Tailored for true cricket lovers with specialized features.
            </p>
          </motion.div>

          {/* Innovative Trading */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Scale up on hover
          >
            {/* Border Highlight Animation */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-300"></div>
            <div className="flex justify-center">
              <i className="fa-solid fa-sack-dollar text-5xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-6">
              Innovative Trading
            </h3>
            <p className="mt-2 text-gray-600">
              Transform your predictions into real rewards.
            </p>
          </motion.div>

          {/* Community-Driven */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Scale up on hover
          >
            {/* Border Highlight Animation */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-300"></div>
            <div className="flex justify-center">
              <i className="fa-solid fa-person text-5xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-6">
              Community-Driven
            </h3>
            <p className="mt-2 text-gray-600">
              Connect with thousands of fans sharing your passion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}