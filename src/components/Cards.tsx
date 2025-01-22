import React from "react";
import { motion } from "framer-motion";

interface Card {
  image: string; // Use 'string' instead of 'String'
  description: string; // Use 'string' instead of 'String'
  paragraph?: string; // Optional field
}

interface CardProps {
  cardsData: Card[];
  noOfCardsInARow: number;
  imageHeight: string; // New prop for image height
  imageWidth: string; // Use 'string' instead of 'String'
}

// Mapping for dynamic grid columns
const gridColsMapping: { [key: number]: string } = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export default function Cards({ cardsData, noOfCardsInARow, imageHeight, imageWidth }: CardProps) {
  const gridClass = gridColsMapping[noOfCardsInARow] || "md:grid-cols-1";

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Use template literals for dynamic class names */}
      <div className={`grid grid-cols-1 ${gridClass} gap-4 mt-4`}>
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="col-span-1 shadow border bg-white-200 p-4 rounded-lg flex flex-col items-center justify-center hover:animate-pulse bg-white"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // Animations trigger every time the card comes into view
          >
            <img
              src={card.image}
              alt={`Column ${index + 1}`}
              className={`${imageWidth} rounded ${imageHeight}`} // Use the imageHeight prop
            />
            <h1>
              <strong>{card.description}</strong>
            </h1>
            {/* Render paragraph only if it exists */}
            {card.paragraph && (
              <p className="text-gray-500">{card.paragraph}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}