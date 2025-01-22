import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HowToPlay() {
  const [currentImage, setCurrentImage] = useState("images/mobile-1.png");

  const features = [
    {
      title: "Easy to Register",
      description:
        "Very easy and convenient to register. Enter some basic details and here you go.",
      image: "images/mobile-1.png",
    },
    {
      title: "Choose your match",
      description:
        "Cric Opinion has an ample number of matches for its members to participate. So, Select the upcoming match from your favorite sportsParticipate in exciting contests and win big prizes.",
      image: "images/mobile-2.png",
    },
    {
      title: "Create the team",
      description:
        "Hand pick your Game Changing team composed of a Wicket Keepers, Batsmen, All Rounders and Bowlers. Create your best team/s with the only platform which have player selection side by side which help you to make the team/s more easy.",
      image: "images/mobile-3.png",
    },
    {
      title: "Chose and join the contest",
      description:
        "Join the contest for wide range of options which you find that you will win. We have covered it all, right from Free to Rs. 9999 and different number of participants in the leagues.",
      image: "images/mobile-4.png",
    },
  ];

  // Animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="howtoplay" className="py-20 bg-white">
      <div className="px-4 md:px-40 lg:px-52">
        <div className="container mx-auto px-4 bg-gray-200 rounded">
          {/* Heading */}
          <motion.h2
            className="text-3xl font-bold text-center pt-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How To Play ?
          </motion.h2>
          <motion.p
            className="mt-4 pb-7 text-center lg:px-60"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cric Opinion is a dreamy ethereal platform for Cricket lovers to
            experience the most earnest sports and games experience, virtually!
          </motion.p>

          {/* Image and List Section */}
          <div className="lg:flex lg:flex-row md:flex-col">
            <motion.img
              src="images/howtoplay1.png"
              alt="How to Play"
              className="lg:w-2/5 md:w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.ul
              className="list-disc md:px-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="lg:mt-20">
                It lets you try your skills and explore your fantasy knowledge
                and gaming skills on field.
              </li>
              <li className="mt-8">
                So, it’s time to take matters in your own hands and Change the
                Game!
              </li>
              <li className="mt-8">
                Simply follow these easy steps and get set for your fantastic
                fantasy experience!
              </li>
              <li className="mt-8">
                The concept is simple; you play wisely with the right team, earn
                points and cash. It’s all about the three C’s:
                Compete, Conquer
                and become a Champion!
              </li>
            </motion.ul>
          </div>

          {/* Features Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-11 px-4 md:px-8 lg:px-16 py-4">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="space-y-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                  onMouseEnter={() => setCurrentImage(feature.image)}
                  onMouseLeave={() => setCurrentImage("images/mobile-1.png")}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <h1 className="text-xl md:text-3xl font-bold text-gray-800">
                    {feature.title}
                  </h1>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={currentImage}
                alt="Feature Illustration"
                className="w-2/3 rounded-lg transition-opacity duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Why Cric Opinion ?</h1>
        <p className="text-gray-500">
          User friendly interface and get easy with games and fantasy sports.
        </p>
        <p className="text-gray-500">
          Enjoy the gaming experience and fantasy experience with best
          application.
        </p>
      </motion.div>
    </section>
  );
}