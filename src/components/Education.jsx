import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

import mitLogo from "../assets/projects/mit.jpg";
import gpLogo from "../assets/projects/gp.jpg";
import evpsLogo from "../assets/projects/evps.jpg";

const education = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Computer Science and Engineering",
    institution: "Madras Institute of Technology (MIT), Anna University, Chennai",
    duration: "2022 - 2026",
    logo: mitLogo,
    icon: <FaGraduationCap size={22} />,
  },
  {
    title: "Std 12 (State Board)",
    subtitle: "Higher Secondary Education",
    institution: "Green Park Matriculation Higher Secondary School, Namakkal",
    duration: "2020 - 2022",
    logo: gpLogo,
    icon: <FaSchool size={22} />,
  },
  {
    title: "Std 10 (CBSE)",
    subtitle: "Secondary Education",
    institution: "Emerald Valley Public School, Salem",
    duration: "2019 - 2020",
    logo: evpsLogo,
    icon: <FaSchool size={22} />,
  },
];

function Education() {
  return (
    <section
      id="education"
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
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-orange-600 ml-6">

          {education.map((item, index) => (
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
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300">

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                  {/* Logo */}
                  <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center flex-shrink-0">

                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-16 h-16 object-contain"
                    />

                  </div>

                  {/* Details */}
                  <div>

                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-orange-400 mt-1">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {item.institution}
                    </p>

                    <p className="text-gray-500 mt-2">
                      {item.duration}
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

export default Education;
