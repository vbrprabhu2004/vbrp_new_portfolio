import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// IMPORT YOUR IMAGES
import aiImg from "../assets/projects/AI chatbot.jpg";
import crossImg from "../assets/projects/Cross modal.jpg";
import heartImg from "../assets/projects/Heart murmur.jpg";
import titanicImg from "../assets/projects/Titanic survival.jpg";
import wikiImg from "../assets/projects/Wikipedia q and a.jpg";

const projects = [
  {
    title: "Cross-Modal Attention Framework for Risk Prediction Using Vital Signs and Clinical Notes",
    image: crossImg,
    description:
      "Built an AI-driven healthcare risk prediction framework using multimodal ICU data from the MIMIC-III dataset. Utilized BioBART and BioClinicalBERT with a Cross-Modal Attention mechanism to fuse vital signs and clinical notes for accurate patient mortality risk prediction.",
    tech: "Deep Learning • PyTorch • Machine Learning • Natural Language Processing (NLP) • Time Series Analysis • Artificial Intelligence (AI)",
    github:
      "https://github.com/vbrprabhu2004/FYP-CROSS-MODAL-ATTENTION-FRAMEWORK-FOR-RISK-PREDICTION-USING-VITAL-SIGNS-AND-CLINICAL-NOTES",
  },
  {
    title: "Deep Murmur : AI - Driven Phonocardiogram Analysis for Detecting Heart Murmur",
    image: heartImg,
    description:
      "Developed a deep learning model using PCG signals and MFCCs to detect heart murmurs.",
    tech: "Python • Signal Processing • Deep Learning • Ensemble Learning • Time Series Classification",
    github:
      "https://github.com/vbrprabhu2004/Heart-Murmur-CIP-Project",
  },
  {
    title: "AI-Enabled Web Chat Application",
    image: aiImg,
    description:
      "Built an intelligent web-based chatbot using Java Servlets, JSP, and JavaScript, integrated with the Azure OpenAI API to process over 7,000+ real-time user interactions. Implemented a custom client-server architecture enabling fast, interactive AI-driven conversations.",
    tech: "Java Servlets • JSP • JavaScript • REST APIs • Azure OpenAI • Web Development",
    github:
      "https://github.com/vbrprabhu2004/-AI-Enabled-Web-Chat-Application",
  },
  {
    title: "Titanic Passenger Survival Prediction",
    image: titanicImg,
    description:
      "Built a ML model to predict Titanic survival using Decision Tree & Naive Bayes.",
    tech: "Python • Machine Learning • Data Preprocessing • Model Evaluation",
    github:
      "https://github.com/vbrprabhu2004/Titanic-Passenger-Survival-Prediction",
  },
  {
    title: "Wikipedia-Based Question Answering System",
    image: wikiImg,
    description:
      "Created a QA system using Wikipedia content with DistilBERT.",
    tech: "Python • NLP • Deep Learning • Transformers",
    github:
      "https://github.com/vbrprabhu2004/Wikipedia-Based-Question-Answering-System",
  },
  
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-500 mb-14"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden shadow-md hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg transition duration-300"
            >

              {project.image && (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              )}

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(" • ").map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-400"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-400 hover:underline"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
