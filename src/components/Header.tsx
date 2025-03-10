import React from "react";

export default function Header() {
  return (
    <header className="w-full   ">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Section - Text Content */}
          <div className="text-center lg:text-left lg:w-1/2 lg:ml-20">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6 text-shadow">
            CRICOP – CRICKET OPINION TRADING PLATFORM
            </h2>
            <h4 className="font-bold text-primary py-1 text-1xl lg:text-2xl">Trade Your Cricket Insights. Win Big.</h4>
            <p className="text-gray-700 text-base lg:text-lg mb-6 lg:mb-8">
            <strong>Welcome to CRICOP –</strong> the ultimate destination for cricket fans to share, trade, and profit from their match 
            predictions and opinions. Join our dynamic community and turn your passion for cricket into rewards!"
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-base lg:text-lg  transition duration-300 shadow-md animate-bounce">
              <i class="fa fa-download" aria-hidden="true"></i> DOWNLOAD & WIN
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="images/mobile.png"
              alt="CricOp"
              className="w-[450px] h-[600px] rounded-lg transform transition-transform duration-500 hover:scale-105 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
