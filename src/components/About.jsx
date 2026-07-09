import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-indigo-500 mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed"> 
           Hi, I'm <span className="text-white font-semibold">Ramanath Prabhu V B</span>,
           an aspiring tech enthusiast passionate about learning, 
           building impactful technology, and solving meaningful problems. 
           I enjoy turning ideas into practical solutions and continuously 
           exploring new technologies to broaden my skills. I'm committed to 
           continuous growth as a software engineer, value collaboration and
           lifelong learning, and, above all, strive to give back to society 
           for all it has given me.
           </p>

        </motion.div>

        {/* Right Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              💼 What I Do
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Software & Web Development
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              🧠 Interests
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              AI, ML, Deep Learning & Backend
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              🌱 Learning
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Cloud, System Design & New Technologies
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              🤝 Values
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Curiosity, Consistency & Growth
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;