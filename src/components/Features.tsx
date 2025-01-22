import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards.tsx";

export default function Features() {
  const cardsData = [
    {
      image: "images/features-img1.png",
      paragraph:
        "Total transparency, only real users / players are on our platform.",
    },
    {
      image: "images/features-img3.png",
      paragraph: "Joining Rewards / Referral Rewards",
    },
    {
      image: "images/features-img4.png",
      paragraph: "First 4 Deposit Rewards.",
    },
    {
      image: "images/features-img5.png",
      paragraph: "3 Generation Referral Rewards",
    },
    {
      image: "images/features-img6.png",
      paragraph: "Most competitive platform charges",
    },
    {
      image: "images/features-img11.png",
      paragraph: "Tournament Leaderboard",
    },
  ];
  const imageHeight = "h-6";
  const imageWidth = "w-8";

  // Animation variants for features section
  const featuresVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

   // Animation for the image
   const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <section id="features" className="py-20 bg-white">
      <div className="px-4 md:px-40 lg:px-52">
        <motion.div
          className="container mx-auto px-4 bg-gray-200 rounded py-20"
          variants={featuresVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            className="text-3xl font-bold text-center"
            variants={featuresVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            Features
          </motion.h2>
          <Cards
            cardsData={cardsData}
            noOfCardsInARow={3}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        </motion.div>
      </div>
      <div className="px-4 md:px-40 lg:px-52">
        <motion.div
          className="container mx-auto bg-white-200 rounded mt-10"
          variants={featuresVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
        >
          <motion.h1
            className="text-3xl font-bold"
            variants={featuresVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.6 }}
          >
            Joining / Referral Rewards
          </motion.h1>
          <div className="lg:flex lg:flex-row md:flex-col">
            {/* Image Section */}
            <motion.div
              className="lg:w-1/2 w-full"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.8 }}
            >
              <img
                src="images/joining-reward-img.png"
                alt="Referral"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="lg:w-1/2 w-full flex flex-col justify-center items-center p-4 lg:p-8 text-black"
              variants={featuresVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 1 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                Join Now and Earn Rewards!
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-6 text-center">
                Refer your friends and get amazing rewards. Start earning today!
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Join Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}