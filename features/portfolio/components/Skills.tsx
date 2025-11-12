"use client";

import { Code, Database, Cloud, Smartphone, Brain } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend & Fullstack",
    icon: Code,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    color: "from-blue-400 to-cyan-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Spring", "FastAPI", "Python"],
    color: "from-green-400 to-emerald-400",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
  },
  {
    title: "GenAI Development",
    icon: Brain,
    skills: ["Google SDK", "AI Agents", "FastAPI Deployment", "Python"],
    color: "from-yellow-400 to-yellow-500",
    highlight: true,
    glow: "shadow-[0_0_40px_rgba(255,255,0,0.5)]",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Cross-platform"],
    color: "from-indigo-400 to-blue-400",
    glow: "shadow-[0_0_20px_rgba(99,102,241,0.3)]",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "Docker", "ECS", "ECR", "Deployment"],
    color: "from-orange-400 to-red-400",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.3)]",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wider relative"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,0,0.5)",
                "0 0 40px rgba(255,255,0,0.8)",
                "0 0 20px rgba(255,255,0,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SKILLS & TECHNOLOGIES
          </motion.span>
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative p-6 rounded-lg backdrop-blur-md bg-black/40 border-2 ${
                  category.highlight
                    ? "border-yellow-400/70 ring-2 ring-yellow-400/30"
                    : "border-yellow-400/30"
                } transition-all ${category.glow}`}
              >
                {category.highlight && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(255,255,0,0.6)]"
                  >
                    FEATURED
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 ${category.glow}`}
                >
                  <Icon className="size-6 text-black" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium backdrop-blur-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
