import React from "react";
// Icons for each step
import { FaQuestionCircle, FaRupeeSign, FaChartLine, FaHandHoldingUsd, FaSearch, FaSyncAlt } from "react-icons/fa";

export default function HowToPlay() {
  const steps = [
    {
      icon: <FaQuestionCircle className="w-10 h-10 text-primary" />,
      title: "Choose a Question",
      description:
        "For example, 'Will INDIA win the match vs PAKISTAN?' Select 'Yes' if you think INDIA will win, or 'No' if you think PAKISTAN will win.",
    },
    {
      icon: <FaRupeeSign className="w-10 h-10 text-primary" />,
      title: "Set Your Price",
      description:
        "After choosing your answer, set the price between Rs 0.5-9.5 for each prediction. The price shown is the current price for one unit of the prediction.",
    },
    {
      icon: <FaChartLine className="w-10 h-10 text-primary" />,
      title: "Select Quantity",
      description:
        "Choose how many quantities you want to buy. Your investment is calculated as: Price × Quantity.",
    },
    {
      icon: <FaHandHoldingUsd className="w-10 h-10 text-primary" />,
      title: "Earn More by Investing More",
      description:
        "The more quantities you buy, the more you can win. To increase your earnings, choose a higher quantity.",
    },
    {
      icon: <FaSearch className="w-10 h-10 text-primary" />,
      title: "Find Your Match",
      description:
        "We’ll match you with someone who has the opposite opinion. If your prediction is correct when the event ends, you win Rs 10 per quantity.",
    },
    {
      icon: <FaSyncAlt className="w-10 h-10 text-primary" />,
      title: "Adjust or Cancel Your Order",
      description:
        "If needed, you can cancel or sell any placed orders. If your order is unmatched, you get a full refund. If matched, you can sell it to lock in your winnings or reduce losses.",
    },
  ];

  return (
    <div className="py-16 ">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-transparent bg-clip-text bg-primary text-4xl lg:text-4xl font-bold flex items-center justify-center gap-4">
          <span className="w-16 h-2 bg-primary rounded-full"></span>
          HOW TO PLAY
          <span className="w-16 h-2 bg-primary rounded-full"></span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto px-4">
          To start opinion trading on CricOpinion, simply predict and win cash with these easy steps:
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex justify-center py-8 px-4">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-[#e57e25] cursor-pointer transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-primary">{step.icon}</div>
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}