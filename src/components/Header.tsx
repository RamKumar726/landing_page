import React from "react";

export default function Header() {
  return (
    <header className="w-full  py-8 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Section - Text Content */}
          <div className="text-center lg:text-left lg:w-1/2 lg:ml-20">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6 text-shadow">
              CRIC OPINION - PREDICTION APP TO WIN CASH
            </h2>
            <p className="text-gray-700 text-base lg:text-lg mb-6 lg:mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-base lg:text-lg  transition duration-300 shadow-md animate-bounce">
              <i class="fa fa-download" aria-hidden="true"></i> DOWNLOAD & WIN
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="images/mobile-1.png"
              alt="Mobile"
              className="w-full max-w-[200px] lg:max-w-[250px] rounded-lg transform transition-transform duration-500 hover:scale-105 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
