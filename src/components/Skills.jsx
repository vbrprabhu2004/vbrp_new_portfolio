import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaMicrosoft,
  FaNetworkWired,
  FaCode,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiApachekafka,
  SiPostman,
  SiIntellijidea,
  SiCanva,
} from "react-icons/si";

import {DiVisualstudio, DiPhotoshop}from "react-icons/di";

const programmingSkills = [
  { name: "C", icon: <FaCode /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

const backendSkills = [
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Apache Kafka", icon: <SiApachekafka /> },
  { name: "gRPC", icon: "📡" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Protocol Buffers", icon: "📦" },
  { name: "Microservices", icon: "⚙️" },
  { name: "Distributed Systems", icon: <FaNetworkWired /> },
  { name: "Event-Driven Architecture", icon: "📡" },
];

const coreSkills = [
  { name: "Data Structures & Algorithms", icon: "📚" },
  { name: "Operating Systems", icon: "💻" },
  { name: "Object-Oriented Programming", icon: "⚙️" },
  { name: "DBMS", icon: <FaDatabase /> },
  { name: "Computer Networks", icon: <FaNetworkWired /> },
];

const aiSkills = [
  { name: "Machine Learning", icon: "🤖" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "Transformers", icon: "🤖" },
  { name: "Natural Language Processing", icon: "💬" },
  { name: "Time Series Analysis", icon: "📈" },
  { name: "Signal Processing", icon: "📶" },
  { name: "Ensemble Learning", icon: "🧩" },
];

const developerTools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <DiVisualstudio /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
  { name: "Microsoft Office", icon: <FaMicrosoft /> },
];

const designTools = [
  { name: "Adobe Photoshop", icon: <DiPhotoshop /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Unity3D", icon: "🎮" },
  { name: "Kinemaster", icon: "🎬" },
];

function SkillCategory({ title, skills }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07 }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-5 flex flex-col items-center gap-2 hover:border-indigo-500 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-300"
          >
            <div className="text-indigo-400 text-2xl">
              {skill.icon}
            </div>

            <p className="text-sm font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-14"
        >
          Skills
        </motion.h2>

        <div className="space-y-14">

          <SkillCategory
            title="Programming Languages"
            skills={programmingSkills}
          />

          <SkillCategory
            title="Backend & Databases"
            skills={backendSkills}
          />

          <SkillCategory
            title="Core CS Concepts"
            skills={coreSkills}
          />

          <SkillCategory
            title="AI / Machine Learning"
            skills={aiSkills}
          />

          <SkillCategory
            title="Developer Tools"
            skills={developerTools}
          />

          <SkillCategory
            title="Design Tools"
            skills={designTools}
          />

        </div>

      </div>
    </section>
  );
}

export default Skills;
