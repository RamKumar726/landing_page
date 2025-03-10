import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Importing an arrow icon from Lucide React

export default function QuestionAnswer() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      question: "What is CRICOP?",
      answer:
        "CRICOP is a dedicated cricket opinion trading platform. It empowers cricket fans to trade their predictions and insights on match outcomes, offering a dynamic way to engage with the sport and earn rewards.",
    },
    {
      question: "How is CRICOP different from other platforms?",
      answer:
        "While other platforms cover a variety of sports and gaming experiences, CRICOP is exclusively focused on cricket. This specialization means:\n\n" +
        "- Tailored Experience: Every feature is designed with cricket fans in mind, ensuring deeper insights and engagement.\n" +
        "- Expert Analytics: CRICOP offers cricket-specific analytics and real-time updates that resonate with true enthusiasts.\n" +
        "- Focused Community: Join a vibrant community solely dedicated to cricket, where every opinion and trade matters.",
    },
    {
      question: "How does opinion trading work on CRICOP?",
      answer:
        "Trading on CRICOP is straightforward:\n\n" +
        "1. Pick a Question: Select a cricket-related question (e.g., 'Will India win against Pakistan?').\n" +
        "2. Set Your Price: Determine a price between Rs 0.5 and Rs 9.5 per unit for your prediction.\n" +
        "3. Select Quantity: Decide how many units you want to invest.\n" +
        "4. Get Matched: The platform pairs you with someone who has the opposite view. If your prediction is correct, you win Rs 10 per unit.",
    },
    {
      question: "How do I get started on CRICOP?",
      answer:
        "Getting started is simple:\n\n" +
        "1. Sign Up: Create your personalized profile on CRICOP.\n" +
        "2. Make Predictions: Choose cricket questions, set your price and quantity, and start trading your opinions.\n" +
        "3. Engage: Join a community of passionate cricket fans and see your insights come to life with every match.",
    },
    {
      question: "Is my investment secure on CRICOP?",
      answer:
        "Yes. CRICOP uses robust, secure technology to manage all transactions. If your order is unmatched, you receive a full refund. For matched orders, you have the flexibility to sell and lock in your winnings, ensuring a transparent and secure trading environment.",
    },
    {
      question: "What rewards can I earn on CRICOP?",
      answer:
        "If your prediction is correct, you earn Rs 10 per unit traded. The potential rewards increase as you trade more units, making CRICOP a thrilling way to monetize your cricket insights.",
    },
    {
      question: "Can I adjust or cancel my orders?",
      answer:
        "Absolutely. You have full control over your trades:\n\n" +
        "- Unmatched Orders: Cancel at any time for a full refund.\n" +
        "- Matched Orders: You can sell your position to secure profits or minimize losses.",
    },
    {
      question: "How is pricing determined on CRICOP?",
      answer:
        "After selecting your prediction, you set a price between Rs 0.5 and Rs 9.5 per unit. This dynamic pricing mechanism reflects the current market sentiment for that particular prediction and allows for a flexible trading experience.",
    },
    {
      question: "Why should I choose CRICOP?",
      answer:
        "CRICOP stands out because it’s built exclusively for cricket fans. With a focus on real-time opinion trading, cricket-specific analytics, and a community that shares your passion, CRICOP transforms the way you interact with the game. It’s more than just predictions—it’s about actively shaping your cricket experience.",
    },
    {
      question: "How can I get support if I have any questions?",
      answer:
        "Our dedicated support team is here to help. You can reach us via the 'Contact Us' page, email, or live chat on CRICOP. We’re committed to ensuring your experience is seamless and enjoyable.",
    },
  ];

  return (
    <section id="faq" className="lg:py-20 py-8 -mt-20">
      <div className="px-4 md:px-40 lg:px-52">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-8 mb-10 rounded">
          <div className="w-full max-w-3xl space-y-6">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-transparent bg-clip-text bg-primary text-4xl lg:text-4xl font-bold flex items-center justify-center gap-4">
                <span className="w-16 h-2 bg-primary rounded-full font-bold"></span>
                CRICOP FAQ's
                <span className="w-16 h-2 bg-primary rounded-full font-bold"></span>
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
                <div className="p-6 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.question}
                  </h2>
                  <motion.div
                    animate={{
                      rotate: activeQuestion === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-600" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 pb-6 text-gray-600 text-left"
                    >
                      <pre className="whitespace-pre-wrap font-sans">
                        {item.answer}
                      </pre>
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