import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "Finalist – Unity Hackathon 2025",
    place: "Madras Institute of Technology (MIT), Anna University",
    description:
      "Selected as a finalist in the Unity 2025 Hackathon conducted by Naan Mudhalvan, collaborating on innovative solutions and demonstrating problem-solving, teamwork, and game/application development skills.",
  },
  {
    title: "Winner – Presitige Event, TRIGGER Symposium 2024",
    place: "Department of Computer Technology, Madras Institute of Technology (MIT)",
    description:
      "I have secured the First Place in the Prestige event as part of TRIGGER '24, organized by the Association of Computer Technologists, Department of Computer Technology, MIT Campus, Anna University.",
  },
  {
    title: "Runner – OOPS Odyssey Event, TRIGGER Symposium 2024",
    place: "Department of Computer Technology, Madras Institute of Technology (MIT)",
    description:
      "I have secured the Second Place in the OOPS Odyssey event as part of TRIGGER '24, organized by the Association of Computer Technologists, Department of Computer Technology, MIT Campus, Anna University.",
  },
  {
    title: "Voluntary Blood Donor – Blood Donation Camp 2025",
    place: "Department of Transfusion Medicine, Rela Hospital, Chromepet, Chennai",
    description:
      "I’m honored to have received a Certificate of Appreciation for donating blood — a small act that can make a life-saving difference — at the Voluntary Blood Donation Camp organized by the Department of Transfusion Medicine, Rela Hospital, Chromepet, Chennai.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </motion.h2>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-md hover:border-orange-500 transition"
            >
              <div className="text-orange-400 mb-3">
                <FaTrophy size={26} />
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-1">
                {item.place}
              </p>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;
