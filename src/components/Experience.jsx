import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import ZentropyLogo from "../assets/projects/zentropy.jpg";
import nicLogo from "../assets/projects/nic.jpg";

const experiences = [
  {
    role: "Member Technical Intern",
    company: "Zentropy Technologies",
    duration: "Jan 2026 – May 2026",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Successfully completed a 5-month Software Development Internship, gaining practical experience in backend engineering and distributed systems. Worked with Python, Apache Kafka, gRPC, and Protocol Buffers to develop scalable, event-driven applications and service communication solutions. Acquired hands-on exposure to distributed ID generation, real-time message streaming, microservices communication, and modern backend architecture principles.",
    logo: ZentropyLogo,
    icon: <FaBriefcase size={22} />,
  },
  {
    role: "In-plant Trainee",
    company: "National Informatics Centre (NIC), MeitY",
    duration: "Jun 2024",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Gained exposure to secure e-Governance infrastructure through the National Knowledge Network (NKN) and NIC initiatives, while developing foundational knowledge in Operating Systems, Full-Stack Development, Networking, Artificial Intelligence & Machine Learning, Computer Ethics, and Open-Source Technologies.",
    logo: nicLogo,
    icon: <FaBriefcase size={22} />,
  },
];

function Experience() {
  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-orange-600 ml-6">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-12 ml-10"
            >

              {/* Timeline Circle */}
              <div className="absolute -left-[60px] w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center border-4 border-[#0b0f19]">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300">

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                  {/* Company Logo */}
                  <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div>

                    <h3 className="text-2xl font-semibold">
                      {exp.role}
                    </h3>

                    <p className="text-orange-400 mt-1">
                      {exp.company}
                    </p>

                    <p className="text-gray-300 mt-3">
                      {exp.location}
                    </p>

                    <p className="text-gray-500 mt-2">
                      {exp.duration}
                    </p>

                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
