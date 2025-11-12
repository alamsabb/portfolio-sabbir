"use client";

import { Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Professional Experience",
    duration: "2+ Years",
    description: [
      "Developed and maintained fullstack applications using Next.js, React, and Node.js",
      "Built RESTful APIs using Spring Boot and FastAPI",
      "Created responsive web applications with modern UI/UX practices",
      "Implemented mobile applications using Flutter for cross-platform development",
    ],
  },
  {
    title: "GenAI Developer",
    company: "AI Agent Development",
    duration: "Recent",
    description: [
      "Built multiple AI agents using Google SDK",
      "Deployed AI agents in production using Python FastAPI",
      "Developed intelligent systems that leverage generative AI capabilities",
      "Integrated AI solutions into existing applications",
    ],
    highlight: true,
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "Infrastructure & Deployment",
    duration: "Ongoing",
    description: [
      "Deployed applications on AWS EC2 instances",
      "Containerized applications using Docker",
      "Managed container orchestration with AWS ECS",
      "Set up CI/CD pipelines and container registries with ECR",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wider"
        >
          EXPERIENCE
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative p-6 rounded-lg backdrop-blur-md bg-black/40 border-2 ${
                exp.highlight
                  ? "border-yellow-400/70 shadow-[0_0_40px_rgba(255,255,0,0.3)] ring-2 ring-yellow-400/30"
                  : "border-yellow-400/30 shadow-[0_0_20px_rgba(255,255,0,0.1)]"
              } transition-all`}
            >
              {exp.highlight && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(255,255,0,0.6)]"
                >
                  HIGHLIGHTED
                </motion.div>
              )}
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.4)]"
                >
                  <Briefcase className="size-6 text-black" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-300">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-yellow-400">
                      <Calendar className="size-4" />
                      <span className="font-semibold">{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-yellow-400 mt-1.5 font-bold">
                          ▸
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
