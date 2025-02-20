import React from "react";
import { motion } from "framer-motion";

interface MatchData {
  team1: string;
  team2: string;
  team1Score: string;
  team2Score: string;
  overs: string;
  question: string;
  status: "live" | "upcoming"; // NEW: Status field
}

interface CardProps {
  noOfCardsInARow: number;
}

// Sample match data
const matchData: MatchData[] = [
  {
    team1: "PAK",
    team2: "NZ",
    team1Score: "187/3",
    team2Score: "—",
    overs: "36.1 overs",
    question: "Pakistan to win the match vs New Zealand?",
    status: "live",
  },
  {
    team1: "IND",
    team2: "AUS",
    team1Score: "245/5",
    team2Score: "—",
    overs: "42.3 overs",
    question: "India to chase the target against Australia?",
    status: "upcoming",
  },
  {
    team1: "ENG",
    team2: "SA",
    team1Score: "302/7",
    team2Score: "289/8",
    overs: "50 overs",
    question: "Can South Africa win in the final over?",
    status: "live",
  },
  {
    team1: "BAN",
    team2: "SL",
    team1Score: "—",
    team2Score: "—",
    overs: "Starts in 3 hours",
    question: "Who will win the upcoming match?",
    status: "upcoming",
  },
  {
    team1: "ZIM",
    team2: "SA",
    team1Score: "302/7",
    team2Score: "289/8",
    overs: "50 overs",
    question: "Can South Africa win in the final over?",
    status: "upcoming",
  },
  {
    team1: "IND",
    team2: "SL",
    team1Score: "—",
    team2Score: "—",
    overs: "Starts in 3 hours",
    question: "Who will win the upcoming match?",
    status: "upcoming",
  },
];

// Mapping for dynamic grid columns
const gridColsMapping: { [key: number]: string } = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export default function Cards({ noOfCardsInARow }: CardProps) {
  const gridClass = gridColsMapping[noOfCardsInARow] || "md:grid-cols-1";

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="text-center">
        {/* Heading with Spans */}
        <div className="flex justify-center items-center w-full px-10">
          <h1 className="text-primary text-2xl lg:text-4xl font-bold flex items-center gap-4">
          <span className="w-16 h-2 bg-primary rounded-full"></span>
            CRIC OPINION - PREDICT AND WIN REAL MONEY
            <span className="w-16 h-2 bg-primary rounded-full"></span>
          </h1>
        </div>

        {/* Subtext */}
        <p className=" p-3 text-lg">
          Just predict “Yes” or “No” on Cric Opinio to answer simple questions
          and win money!
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 ${gridClass} gap-8 w-full max-w-screen-lg`}
          >
            {matchData.map((match, index) => (
              <motion.div
                key={index}
                className="col-span-1 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <div className="p-6">
                  {/* Status Badge */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`rounded-full px-3 py-1 text-white font-bold text-sm ${
                        match.status === "live" ? "bg-red-600" : "bg-green-500"
                      }`}
                    >
                      <i className="fas fa-circle mr-1"></i>
                      {match.status.toUpperCase()}
                    </div>
                  </div>

                  {/* Teams vs Section */}
                  <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg">
                    <div className="bg-blue-700 rounded-full px-6 py-2 text-white font-bold">
                      {match.team1}
                    </div>
                    <div className="text-yellow-400 font-bold text-xl mx-2">
                      VS
                    </div>
                    <div className="bg-blue-700 rounded-full px-6 py-2 text-white font-bold">
                      {match.team2}
                    </div>
                  </div>

                  {/* Match Question */}
                  <div className="text-gray-800 font-semibold text-lg mb-4 text-center">
                    {match.question}
                  </div>

                  {/* Live Score or Start Time */}
                  <div className="text-blue-600 font-medium text-center">
                    {match.status === "live"
                      ? `${match.team1} ${match.team1Score} @ ${match.overs}`
                      : `Match Starts: ${match.overs}`}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
