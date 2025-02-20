import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionAnswer() {
  // State to manage the currently active question
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Array of questions and answers
  const questions = [
    {
      question: "What is Cric Opinion?",
      answer:
        "Cric Opinion is a dreamy ethereal platform for Cricket lovers to experience the most earnest sports and games experience, virtually!",
    },
    {
      question: "Can I withdraw money by playing real money earning games?",
      answer:
        "Yes. You can withdraw your real cash winnings on SportsBaazi once your account has been KYC verified. Post this, you can withdraw the amount straight to your bank account by opting for any of the available payment options on SportsBaazi such as UPI, NetBanking, e-wallet among others.",
    },
    {
      question: "Is refund for the cancelled match get at what time?",
      answer: "You get refund at the same time the match get cancelled",
    },
    {
      question: "How to deposit the amount?",
      answer:
        "You can deposit with any UPI payment and cards and net banking and you can see that transaction in your wallet.",
    },
  ];

  return (
    <section id="FAQ" className="lg:py-20 py-8 -mt-20">
      <div className="px-4 md:px-40 lg:px-52">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-8 mb-10 rounded">
          <div className="w-full max-w-3xl space-y-6">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-transparent bg-clip-text bg-primary text-4xl lg:text-4xl font-bold flex items-center justify-center gap-4">
                <span className="w-16 h-2 bg-primary rounded-full"></span>
                CRIC OPINOIN FAQ's
                <span className="w-16 h-2 bg-primary rounded-full"></span>
              </h1>
              
            </div>

            {/* Questions and Answers */}
            {questions.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.question}
                  </h2>
                </div>
                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 pb-6 text-gray-600"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
