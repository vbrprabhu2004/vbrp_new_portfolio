import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-white px-6 py-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Section */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Built by,<br />
            <span className="text-orange-500">
              Ramanath
            </span>
          </h1>

          <p className="text-gray-400 mt-4">
            Software & Web Developer • AI & ML Enthusiast • Aspiring Tech Entrepreneur
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* Gmail Compose Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vbrprabhu2004@gmail.com&su=Opportunity%20from%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-2 rounded-full flex items-center gap-2 hover:border-orange-500 transition"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="http://www.linkedin.com/in/ramanathprabhu-vb"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-2 rounded-full flex items-center gap-2 hover:border-orange-500 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/vbrprabhu2004"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-2 rounded-full flex items-center gap-2 hover:border-orange-500 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.instagram.com/ramanath_prabhu_/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-2 rounded-full flex items-center gap-2 hover:border-orange-500 transition"
            >
              <FaInstagram /> Instagram
            </a>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 md:items-end">

          <h3 className="text-lg text-gray-300 tracking-wide">
            ••• Contacts •••
          </h3>

          <div className="flex gap-6 text-gray-400 text-sm">

            <a href="#about" className="hover:text-orange-400">
              About
            </a>

            <a href="#skills" className="hover:text-orange-400">
              Skills
            </a>

            <a href="#projects" className="hover:text-orange-400">
              Projects
            </a>

            <a href="#experience" className="hover:text-orange-400">
              Experience
            </a>

          </div>

          {/* Site Info Box */}
          <div className="border border-gray-800 rounded-xl p-6 text-gray-400 text-sm w-full md:w-auto">

            <p>
              <span className="text-white">Site</span>
            </p>

            <p className="mt-2">
              Designed & coded by{" "}
              <span className="text-orange-400">Ramanath Prabhu V B</span>
            </p>

            <p>
              Powered by React & Tailwind 
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
