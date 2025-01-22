import React from "react";
import Cards from "./Cards.tsx";
const row2Data = [
  {
    image: "images/achievement-img-2.png",
    paragraph:
      "Multi-channel Support System (Voice & Chat) (Pioneer in Fantasy Sport Industry)",
  },
  {
    image: "images/achievement-img-3.png",
    paragraph: "Winsome and clutter free user interface of our app.",
  },
];

const row3Data = [
  {
    image: "images/achievement-img-4.png",
    paragraph:
      "Side by side player view of each teams (Pioneer),"
  },
  {
    image: "images/achievement-img-5.png",
    paragraph: "Instant Bank & PayTM withdrawals",
  },
  {
    image: "images/achievement-img-6.png",
    paragraph:
      "Follow and following to friends and experts",
  },
  
];

const row4Data = [
  {
    image: "images/achievement-img-8.png",
    paragraph: "Live scores & statistics.",
  },
  {
    image: "images/achievement-img-9.png",
    paragraph:
      "Ground / Venue details",
  },
];

export default function AboutUs() {
  return (
    <section id="aboutus" className="py-20 bg-white">
      <div className="px-4 md:px-40 lg:px-52">
        <div className="container mx-auto px-4 bg-gray-200 rounded py-5">
          <h2 className="text-3xl font-bold text-center ">About Us</h2>
          <div className="lg:px-32">
            <div className="col-span-1 shadow border bg-white-200 p-4 rounded-lg flex flex-col items-center justify-center  bg-white mt-8">
              <img
                src="https://ih1.redbubble.net/image.2062244241.1768/fposter,small,wall_texture,square_product,600x600.jpg"
                alt="example"
                className="rounded w-28 h-28"
              />
              <p className=" text-gray-500 lg:px-28">
                {" "}
                Nominated for “Rookie of the Year” Award at Fantasy Sports &
                Gaming Association (FSGA) in the year 2025.{" "}
              </p>
            </div>

            
              <Cards
                cardsData={row2Data}
                noOfCardsInARow={2}
                imageHeight={"h-8"}
                imageWidth={"w-8"}
              />

              <Cards
                cardsData={row3Data}
                noOfCardsInARow={3}
                imageHeight={"h-8"}
                imageWidth={"w-8"}
              />
              <Cards
                cardsData={row4Data}
                noOfCardsInARow={2}
                imageHeight={"h-8"}
                imageWidth={"w-8"}
              />
       
          </div>
        </div>
      </div>
    </section>
  );
}
