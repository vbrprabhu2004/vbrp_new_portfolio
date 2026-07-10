import { motion } from "framer-motion";
import vbrp from "../assets/vbrp.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0b0f19] text-white flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm{" "}
            <span className="text-orange-500">
              Ramanath Prabhu V B
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl text-gray-400"
          >
            Software & Web Developer • AI & ML Enthusiast • Aspiring Tech Entrepreneur 
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
            >
              View Projects
            </a>

            <a
              href="/VBRP Resume 6.0 1.pdf"
              download
              className="px-6 py-3 border border-gray-500 rounded-lg hover:border-orange-400 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={vbrp}
            alt="Ramanath"
            className="w-72 h-72 object-cover rounded-full border-4 border-orange-500 shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
