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
            WHY YOU PLAY CRICOP
            <span className="w-12 h-1.5 bg-primary rounded-full"></span>
          </h1>
        </div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        you're not just watching cricket – you're actively shaping the game. Here’s why cricket fans choose <strong>CRICOP</strong>.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center py-8 px-4">
        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
          {[
            {
              title: "Transform Your Passion",
              text: "Convert your cricket insights into rewards. Every prediction you make has the potential to pay off.",
              index: "01",
            },
            {
              title: "Real-Time Engagement",
              text: "Experience live opinion trading with a vibrant community of fans. Stay ahead with real-time updates and expert analytics.",
              index: "02",
            },
            {
              title: "Showcase Your Expertise",
              text: "Whether you’re a seasoned strategist or a passionate newcomer, your voice matters. Prove your cricket IQ and earn respect among peers.",
              index: "03",
            },
            {
              title: "Interactive & Intuitive",
              text: "Enjoy a user-friendly platform designed exclusively for cricket lovers. Every interaction is smooth, dynamic, and rewarding.",
              index: "04",
            },
            {
              title: "Be Part of the Revolution",
              text: "Join a community where every opinion counts. With CRICOP, you’re not just a spectator – you're a game-changer.",
              index: "05",
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
                title: "Transform Your Passion",
                text: "Convert your cricket insights into rewards. Every prediction you make has the potential to pay off.",
                index: "01",
              },
              {
                title: "Real-Time Engagement",
                text: "Experience live opinion trading with a vibrant community of fans. Stay ahead with real-time updates and expert analytics.",
                index: "02",
              },
              {
                title: "Showcase Your Expertise",
                text: "Whether you’re a seasoned strategist or a passionate newcomer, your voice matters. Prove your cricket IQ and earn respect among peers.",
                index: "03",
              },
              {
                title: "Interactive & Intuitive",
                text: "Enjoy a user-friendly platform designed exclusively for cricket lovers. Every interaction is smooth, dynamic, and rewarding.",
                index: "04",
              },
              {
                title: "Be Part of the Revolution",
                text: "Join a community where every opinion counts. With CRICOP, you’re not just a spectator – you're a game-changer.",
                index: "05",
              },
            ].map((card, index) => (
              <SwiperSlide key={index}>
                <div className="w-[275px] mx-auto bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary cursor-pointer transform hover:-translate-y-2">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}