import React from "react";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function WhyOpinion() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#f9fafb] to-white">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center w-full px-4">
          <h1 className="text-primary text-3xl lg:text-4xl font-bold flex items-center gap-4">
            <span className="w-12 h-1.5 bg-primary rounded-full"></span>
            WHY YOU PLAY CRIC OPINION
            <span className="w-12 h-1.5 bg-primary rounded-full"></span>
          </h1>
        </div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the features that make us the best choice for your gaming and prediction needs.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center py-8 px-4">
        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
          {[
            {
              title: "WITHDRAW WINNINGS INSTANTLY!",
              text: "80% transactions processed in less than a minute",
              index: "01",
            },
            {
              title: "100% SAFE & SECURE",
              text: "No bots, Only Fun. Customer Support. RNG Approved",
              index: "02",
            },
            {
              title: "PREDICT AND WIN MONEY",
              text: "Informed predictions and real-time data on Cricket, Kabbadi, Crypto, Bitcoin",
              index: "03",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-[300px] bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary cursor-pointer transform hover:-translate-y-2"
            >
              <p className="text-sm font-bold text-white bg-primary px-3 py-1.5 rounded-lg shadow-md">
                {card.index}
              </p>
              <p className="text-2xl font-bold text-center text-gray-800">
                {card.title}
              </p>
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Swiper Carousel */}
        <div className="lg:hidden w-full max-w-screen-lg">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
          >
            {[
              {
                title: "WITHDRAW WINNINGS INSTANTLY!",
                text: "80% transactions processed in less than a minute",
                index: "01",
              },
              {
                title: "100% SAFE & SECURE",
                text: "No bots, Only Fun. Customer Support. RNG Approved",
                index: "02",
              },
              {
                title: "PREDICT AND WIN MONEY",
                text: "Informed predictions and real-time data on Cricket, Kabbadi, Crypto, Bitcoin",
                index: "03",
              },
            ].map((card, index) => (
              <SwiperSlide key={index}>
                <div className="w-[275px] mx-auto bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary cursor-pointer transform hover:-translate-y-2">
                  <p className="text-sm font-bold text-white bg-[#e57e25] px-3 py-1.5 rounded-lg shadow-md">
                    {card.index}
                  </p>
                  <p className="text-2xl font-bold text-center text-gray-800">
                    {card.title}
                  </p>
                  <p className="text-sm text-gray-500 text-center leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}