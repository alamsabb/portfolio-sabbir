"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import { GlitchText } from "./GlitchText";
import { AnimatedText } from "./AnimatedText";
import { useState, useEffect } from "react";

export function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const particleData = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(particleData);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      {/* Additional animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tight relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,0,0.5)] relative inline-block">
              <TypingText
                text="SABBIR ALAM"
                speed={150}
                className="text-6xl md:text-8xl font-bold"
              />
              {/* Glitch overlay effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent opacity-0"
                animate={{
                  opacity: [0, 0.3, 0],
                  x: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              >
                SABBIR ALAM
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="space-y-4"
          >
            <motion.p
              className="text-2xl md:text-4xl text-yellow-300/90 font-semibold tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <AnimatedText text="FULLSTACK DEVELOPER" delay={2} />
            </motion.p>
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 border-2 border-yellow-400/50 shadow-[0_0_20px_rgba(255,255,0,0.3)]"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: 1,
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                delay: 2.5,
                scale: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                },
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 40px rgba(255,255,0,0.6)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="size-5 text-yellow-400" />
              </motion.div>
              <motion.span
                className="text-lg font-bold text-yellow-300 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.7 }}
              >
                <GlitchText text="GENAI DEVELOPER" />
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-yellow-400/20 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <p className="relative z-10">
            <AnimatedText
              text="Building scalable applications with"
              delay={3}
              className="inline"
            />{" "}
            <motion.span
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              Next.js
            </motion.span>
            ,{" "}
            <motion.span
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              React
            </motion.span>
            ,{" "}
            <motion.span
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              Node.js
            </motion.span>
            ,{" "}
            <motion.span
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              Spring
            </motion.span>
            , and{" "}
            <motion.span
              className="text-yellow-400 font-semibold inline-block"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              FastAPI
            </motion.span>
            . Specialized in{" "}
            <motion.span
              className="text-yellow-300 font-bold inline-block"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,0,0.5)",
                  "0 0 20px rgba(255,255,0,0.8)",
                  "0 0 10px rgba(255,255,0,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              GenAI development
            </motion.span>{" "}
            with experience deploying AI agents using Google SDK.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:from-yellow-400 hover:to-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.4)] border-2 border-yellow-400"
            >
              <Link
                href="https://github.com/alamsabb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-5" />
                GitHub
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 backdrop-blur-md bg-black/30 border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-300 shadow-[0_0_15px_rgba(255,255,0,0.2)]"
            >
              <Link href="mailto:sabbira2203@gmail.com">
                <Mail className="size-5" />
                Contact
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 backdrop-blur-md bg-black/30 border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-300 shadow-[0_0_15px_rgba(255,255,0,0.2)]"
            >
              <Link
                href="https://linkedin.com/in/sabbir-alam-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-5" />
                LinkedIn
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
