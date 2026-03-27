import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "OpenHealth",
    description: "AI-powered healthcare platform for multi-disease detection using ML, Deep Learning, and LLMs, with personalized insights and scalable deployment.Built an end-to-end AI system leveraging XGBoost, ResNet, and LLMs for multi-organ disease prediction, integrated with MLflow, DVC, and Docker for scalable deployment.",
    techStack: ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs", "XGBoost", "LangChain", "FastAPI", "Docker"],
    src: "rock.jpg",
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    color: "#5196fd",
    githubLink: "https://github.com/Aakansha-Tripathii/OpenHealth",
    // liveLink: "https://olova.js.org/",
  },
  {
    title: "AI-Powered PDF Intelligence System ",
    description:
      "DocGenius is an AI-powered RAG system that enables users to query PDFs using natural language, leveraging OpenAI embeddings, FAISS vector search, and LangChain to deliver accurate, context-aware answers grounded in document content.",
    techStack: ["LangChain", "OpenAI", "FAISS", "Streamlit", "Python"],
    src: "tree.jpg",
    link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    githubLink: "https://github.com/Aakansha-Tripathii/AI-Powered_PDF_Intelligence_System ",
    // liveLink: "https://codervai.vercel.app",
  },
  {
    title: "PharmaBot",
    description:
      "AI-powered medical chatbot built using a Retrieval-Augmented Generation (RAG) pipeline with Llama 2, LangChain, and Pinecone, enabling accurate, context-aware question answering over PDF documents.",
    techStack: ["Python", "LangChain", "Llama 2", "Pinecone", "Flask"],
    src: "water.jpg",
    link: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    color: "#fff",
    githubLink: "https://github.com/Aakansha-Tripathii/PharmaBot",
    // liveLink: "https://codewhisperer.vercel.app/",
  },
  // {
  //   title: "CodeKori 🔥",
  //   description:
  //     "CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
  //   techStack: ["React", "Tailwind CSS", "Compiler API"],
  //   src: "house.jpg",
  //   link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
  //   color: "#ed649e",
  //   githubLink: "https://github.com/Aakansha-Tripathii/CodeKori",
  //   liveLink: "https://codekori.js.org",
  // },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                techStack={project.techStack}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  techStack,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        {/* Modern full-width card design without image */}
        <div className="w-full flex flex-col bg-zinc-900 rounded-2xl overflow-hidden shadow-xl relative">

          {/* Project number overlay (Moved from image section) */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            Project {i + 1}
          </div>

          {/* Content section - full width now */}
          <div className="w-full p-6 pt-16 md:p-8 md:pt-20 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-full">
                {description}
              </p>

              {/* Tech Stack Rendering */}
              {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs md:text-sm font-medium rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link Only */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    GitHub Code
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
