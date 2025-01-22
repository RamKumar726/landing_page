// Main.tsx
import React from "react";
import Banner from "./Banner.tsx";
import Cards from "./Cards.tsx";
import HowToPlay from "./HowToPlay.tsx";
import AboutUs from "./AboutUs.tsx";
import HelpAndSupport from "./HelpAndSupport.tsx";
import FAQ from './FAQ.tsx'
import Features from "./Features.tsx";
function Main() {
  const cardsData = [
    {
      image: "images/downloads.png",
      description: "9 MILLION +",
      paragraph: "downloads",
    },
    {
      image: "images/contests.png",
      description: "250 +",
      paragraph: "Daily contests",
    },
    {
      image: "images/winnings.png",
      description: " 1 CRORE +",
      paragraph: "Daily Winnings",
    },
    {
      image: "images/fee.png",
      description: "LOWEST ENTRY FEE",
      paragraph: "Among All Fantasy Platforms",
    },
  ];
  const noOfCardsInARow = 4;
  const imageHeight = 'h-auto'
  const imageWidth = 'w-28'
  return (
    <div>
      <Banner banner={"images/banner1.jpg"} />

      <Cards cardsData={cardsData} noOfCardsInARow={noOfCardsInARow} imageHeight={imageHeight} imageWidth={imageWidth} />

      {/* How To Play Section */}
      <HowToPlay />

      {/* About Us Section */}
      <AboutUs />
    
      <Features />
      

      {/* Help & Support Section */}
      <HelpAndSupport / >
      <FAQ/ >
    </div>
  );
}

export default Main;
