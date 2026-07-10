import { motion } from "framer-motion";
import {
  FaUserTie,
  FaBullhorn,
  FaBriefcase,
} from "react-icons/fa";

const responsibilities = [
  {
    title: "Placement Representative",
    organization: "Centre for University Industry Collaboration (CUIC), Anna University",
    duration: "Apr 2024 – Sep 2025",
    description:
      "Coordinated placement-related activities, facilitated communication between students and the placement cell, organized recruitment drives, and supported students throughout the placement process.",
    icon: <FaBriefcase size={22} />,
  },
  {
    title: "Member of Association of Computer Technologists (ACT)",
    organization: "Department of Computer Technology, Madras Institute of Technology (MIT)",
    duration: "Oct 2022 – Apr 2026",
    description:
      "Contributed to event management and student engagement initiatives through video editing, poster design, and the organization of technical events, workshops, and department symposiums.",
    icon: <FaUserTie size={22} />,
  },
  {
    title: "Student Volunteer",
    organization: "National Service Scheme",
    duration: "Oct 2022 – Feb 2024",
    description:
      "Actively contributed to NSS initiatives at Anna University - MIT Campus through social service activities, event organization, and creative poster design. Successfully participated in a two-week NSS Special Camp, engaging in community development, awareness programs, and volunteer service activities.",
    icon: <FaBullhorn size={22} />,
  },
];

function Responsibilities() {
  return (
    <section
      id="responsibilities"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-500 mb-16"
        >
          Responsibilities
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-orange-600 ml-6">

          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-12 ml-10"
            >

              {/* Timeline Circle */}
              <div className="absolute -left-[60px] w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center border-4 border-[#0b0f19]">
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-orange-400 mt-1">
                  {item.organization}
                </p>

                <p className="text-gray-500 mt-2">
                  {item.duration}
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Responsibilities;
