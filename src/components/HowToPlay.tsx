import React from "react";
// Icons for each step
import { FaQuestionCircle, FaRupeeSign, FaChartLine, FaHandHoldingUsd, FaSearch, FaSyncAlt } from "react-icons/fa";

export default function HowToPlay() {
  const steps = [
    {
      icon: <FaQuestionCircle className="w-10 h-10 text-primary" />,
      title: " Pick a Question",
      description:
        "For instance, “Will India win the match against Pakistan?” Choose 'Yes' if you believe India will come out on top, or 'No' if you back Pakistan."
    },
    {
      icon: <FaRupeeSign className="w-10 h-10 text-primary" />,
      title: "Set Your Price",
      description:
        "After selecting your answer, assign a price for your prediction, ranging between Rs 0.5 and 9.5 per unit. This value represents the current price for one unit of your opinion.",
    },
    {
      icon: <FaChartLine className="w-10 h-10 text-primary" />,
      title: "Choose Your Quantity",
      description:
        "Decide how many units you want to invest in. Your total stake is calculated as Total Investment = Price × Quantity",
    },
    {
      icon: <FaHandHoldingUsd className="w-10 h-10 text-primary" />,
      title: "Invest to Multiply Your Winnings",
      description:
        "The more units you purchase, the higher your potential returns. Increase your quantity to maximize your earnings if your prediction proves correct.",
    },
    {
      icon: <FaSearch className="w-10 h-10 text-primary" />,
      title: "Find Your Trading Partner",
      description:
        "CRICOP will automatically match you with someone holding the opposite view. If your prediction turns out to be correct when the event concludes, you earn Rs 10 per unit.",
    },
    {
      icon: <FaSyncAlt className="w-10 h-10 text-primary" />,
      title: "Manage Your Order",
      description:
        "You have full control over your orders: Cancel or Sell: If your order remains unmatched, you receive a full refund. Secure Your Winnings: For matched orders, you can sell them to lock in profits or reduce losses",
    },
  ];

  return (
    <section id="how-to-play">
      <div className="">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-transparent bg-clip-text bg-primary text-4xl lg:text-4xl font-bold flex items-center justify-center gap-4">
          <span className="w-16 h-2 bg-primary rounded-full"></span>
          HOW TO PLAY
          <span className="w-16 h-2 bg-primary rounded-full"></span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto px-4">
        Get started with <strong>CRICOP</strong> and transform your cricket predictions into cash rewards with these simple steps:
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex justify-center  px-4">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary cursor-pointer transform hover:-translate-y-2"
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
    </section>
  );
}