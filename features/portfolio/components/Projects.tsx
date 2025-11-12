"use client";

import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Agent Platform",
    description:
      "Multiple AI agents built using Google SDK, deployed with Python FastAPI. Features intelligent conversation, task automation, and seamless API integration.",
    tech: ["Python", "FastAPI", "Google SDK", "GenAI", "Docker"],
    github: "https://github.com/alamsabb",
    highlight: true,
    icon: Sparkles,
  },
  {
    title: "Fullstack Web Application",
    description:
      "Modern web application built with Next.js and React, featuring responsive design, real-time updates, and scalable architecture.",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
    github: "https://github.com/alamsabb",
    icon: ExternalLink,
  },
  {
    title: "Mobile Application",
    description:
      "Cross-platform mobile app developed with Flutter, delivering native performance and beautiful UI across iOS and Android.",
    tech: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/alamsabb",
    icon: ExternalLink,
  },
  {
    title: "Cloud-Deployed Microservices",
    description:
      "Scalable microservices architecture deployed on AWS using Docker, ECS, and ECR with automated CI/CD pipelines.",
    tech: ["AWS", "Docker", "ECS", "ECR", "Node.js"],
    github: "https://github.com/alamsabb",
    icon: ExternalLink,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wider"
        >
          FEATURED PROJECTS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon || ExternalLink;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`relative p-6 rounded-lg backdrop-blur-md bg-black/40 border-2 ${
                  project.highlight
                    ? "border-yellow-400/70 shadow-[0_0_40px_rgba(255,255,0,0.4)] ring-2 ring-yellow-400/30"
                    : "border-yellow-400/30 shadow-[0_0_20px_rgba(255,255,0,0.1)]"
                } transition-all flex flex-col`}
              >
                {project.highlight && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(255,255,0,0.6)] flex items-center gap-1"
                  >
                    <Sparkles className="size-3" />
                    GenAI
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${
                    project.highlight
                      ? "from-yellow-400 to-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.5)]"
                      : "from-blue-400 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  } mb-4 w-fit`}
                >
                  <Icon className="size-6 text-black" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 rounded-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full backdrop-blur-md bg-black/30 border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-300 shadow-[0_0_15px_rgba(255,255,0,0.2)]"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
