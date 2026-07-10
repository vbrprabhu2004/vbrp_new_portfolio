import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const inspirations = [
  {
    name: "Mario Puzo (The Godfather, 1972)",
    quote: "A man who doesn't spend time with his family can never be a real man.",
    note:
      "No achievement is complete without the people who stand by you. Family keeps me grounded and reminds me of what truly matters.",
  },
  {
    name: "Mother Teresa",
    quote: "God doesn't require us to succeed, He only requires that you try.",
    note:
      "I focus on giving my best every day and trust God with the results.",
  },
  {
    name: "Joseph Kosinski (F1 : The Movie, 2025)",
    quote: "For what it's worth, don't be shitty to yourself. There's plenty of people out there that'll do that for you.",
    note:
      "A reminder to be patient with myself, learn from mistakes, and keep moving forward instead of being my own biggest critic.",
  },
];

function Inspiration() {
  return (
    <section
      id="inspiration"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-500 mb-14"
        >
          Mindset & Inspiration
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {inspirations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
            >
              <FaQuoteLeft className="text-orange-400 mb-4" />

              <p className="text-gray-300 italic">
                "{item.quote}"
              </p>

              <p className="mt-4 text-orange-400 font-semibold">
                — {item.name}
              </p>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {item.note}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Inspiration;
