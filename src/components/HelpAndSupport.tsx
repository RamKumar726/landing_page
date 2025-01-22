import React from "react";
import Cards from "./Cards.tsx";



const cardsData = [
  {
    image: "images/mail.png",
    description: "Mails",
    paragraph: "Support",
  },
  {
    image: "https://i.pinimg.com/564x/70/74/2b/70742ba6b7c1ad0670cc7075d283483e.jpg",
    description: "Telegram",
    paragraph: "Support",
  },
  {
    image: "images/phone.png",
    description: "Calls",
    paragraph: "Support",
  },
  
];
const noOfCardsInARow = 3
const imageHeight='h-8'
const imageWidth = 'w-8'

export default function HelpAndSupport() {
  return (
    <section id="helpandsupport" className="py-20 bg-white">
      <div className="px-4 md:px-40 lg:px-52">
        <div className="container mx-auto px-4 bg-gray-200 rounded py-20">
        <h2 className="text-3xl font-bold text-center ">Help & Support</h2>
        <p className=" text-gray-500 lg:px-72">As we follow user first, we had provided you the multi channel customer support</p>
        </div>
         <div className="-mt-20">
         <Cards cardsData={cardsData}  noOfCardsInARow={noOfCardsInARow} imageHeight={imageHeight}  imageWidth={imageWidth} />
         </div>
      </div>
      
    </section>
  );
}
