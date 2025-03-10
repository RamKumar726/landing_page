// Main.tsx
import React from "react";
import Header from "./Header.tsx";
import Cards from "./Cards.tsx";
import WhyOpinion from "./WhyOpinion.tsx";
import HowToPlay from "./HowToPlay.tsx";
import QuestionAnswer from "./FAQ.tsx";
import AboutUs from "./About.tsx";
import Desclaimer from "./Desclaimer.tsx";
function Main() {
    return (
    <div className="mt-24">
      <Header />
      <AboutUs />
      <Cards noOfCardsInARow={2} />
      <WhyOpinion />
      <HowToPlay />
      <QuestionAnswer />
      <Desclaimer />
    </div>
  );
}

export default Main;
