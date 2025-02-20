// Main.tsx
import React from "react";
import Header from "./Header.tsx";
import Cards from "./Cards.tsx";
import WhyOpinion from "./WhyOpinion.tsx";
import HowToPlay from "./HowToPlay.tsx";
import QuestionAnswer from "./FAQ.tsx";

function Main() {
    return (
    <div className="mt-24">
      <Header />
      <Cards noOfCardsInARow={2} />
      <WhyOpinion />
      <HowToPlay />
      <QuestionAnswer />
    </div>
  );
}

export default Main;
