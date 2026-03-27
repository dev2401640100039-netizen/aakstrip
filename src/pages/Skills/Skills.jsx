import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cpu, Cloud } from "lucide-react";
import {
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Machine Learning",
      color: "text-blue-400",
      skills: [
        { name: "NumPy", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "Pandas", icon: <FaPython className="w-4 h-4 text-[#150458]" /> },
        { name: "Scikit-learn", icon: <FaPython className="w-4 h-4 text-[#F7931E]" /> },
        { name: "XGBoost", icon: <Cpu className="w-4 h-4 text-[#EC4E20]" /> },
        { name: "Feature Engineering", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Model Evaluation", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6B6B]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Deep Learning & AI",
      color: "text-purple-400",
      skills: [
        { name: "PyTorch", icon: <FaPython className="w-4 h-4 text-[#EE4C2C]" /> },
        { name: "TensorFlow", icon: <FaPython className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "Neural Networks", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" /> },
        { name: "CNNs", icon: <Cpu className="w-4 h-4 text-[#00C853]" /> },
        { name: "Transformers", icon: <Cpu className="w-4 h-4 text-[#FFD600]" /> },
        { name: "Hugging Face", icon: <Cpu className="w-4 h-4 text-[#FF4081]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Generative AI & LLMs",
      color: "text-pink-400",
      skills: [
        { name: "LangChain", icon: <Cpu className="w-4 h-4 text-[#00BFA5]" /> },
        { name: "LlamaIndex", icon: <Cpu className="w-4 h-4 text-[#FF7043]" /> },
        { name: "RAG Systems", icon: <BsGrid1X2 className="w-4 h-4 text-[#AB47BC]" /> },
        { name: "Prompt Engineering", icon: <MdAnimation className="w-4 h-4 text-[#29B6F6]" /> },
        { name: "OpenAI API", icon: <Cpu className="w-4 h-4 text-[#10A37F]" /> },
        { name: "Embeddings", icon: <Cpu className="w-4 h-4 text-[#FFCA28]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      color: "text-green-400",
      skills: [
        { name: "FastAPI", icon: <FaPython className="w-4 h-4 text-[#009688]" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "WebSockets", icon: <BsGrid1X2 className="w-4 h-4 text-[#00C853]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
      ],
    },
    {
      icon: Database,
      title: "Data & Databases",
      color: "text-yellow-400",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "FAISS", icon: <Cpu className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "ChromaDB", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" /> },
        { name: "Redis", icon: <Database className="w-4 h-4 text-[#DC382D]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "MLOps & Cloud",
      color: "text-orange-400",
      skills: [
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "MLflow", icon: <Cpu className="w-4 h-4 text-[#0194E2]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
