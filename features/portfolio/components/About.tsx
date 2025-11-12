"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wider relative"
        >
          <AnimatedText text="ABOUT ME" delay={0} />
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="backdrop-blur-md bg-black/40 p-8 rounded-lg border-2 border-yellow-400/30 shadow-[0_0_30px_rgba(255,255,0,0.1)]"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate{" "}
              <span className="text-yellow-400 font-bold">
                Fullstack Developer
              </span>{" "}
              with
              <span className="text-yellow-400 font-bold">
                {" "}
                2 years of development experience
              </span>
              , specializing in building modern web applications and AI-powered
              solutions. My expertise spans across the entire development stack,
              from frontend frameworks to backend services and cloud
              infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 p-8 rounded-lg border-2 border-yellow-400/50 shadow-[0_0_40px_rgba(255,255,0,0.2)] relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <Brain className="size-8 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              As a{" "}
              <span className="text-yellow-300 font-bold text-xl">
                GenAI Developer
              </span>
              , I have built multiple AI agents using Google SDK and deployed
              them using Python FastAPI. I'm passionate about leveraging
              artificial intelligence to create intelligent, responsive
              applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-md bg-black/40 p-8 rounded-lg border-2 border-yellow-400/30 shadow-[0_0_30px_rgba(255,255,0,0.1)]"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond web development, I also develop mobile applications using{" "}
              <span className="text-yellow-400 font-semibold">Flutter</span>,
              creating cross-platform solutions that deliver seamless user
              experiences. My cloud expertise includes{" "}
              <span className="text-yellow-400 font-semibold">
                AWS services
              </span>{" "}
              like EC2, Docker, ECS, and ECR, enabling me to deploy and scale
              applications efficiently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
