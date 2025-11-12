"use client";

import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wider"
        >
          GET IN TOUCH
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:from-yellow-400 hover:to-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.4)] border-2 border-yellow-400"
            >
              <Link href="mailto:sabbira2203@gmail.com">
                <Mail className="size-5" />
                Email Me
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 backdrop-blur-md bg-black/30 border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-300 shadow-[0_0_15px_rgba(255,255,0,0.2)]"
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
              size="lg"
              variant="outline"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 p-8 rounded-lg backdrop-blur-md bg-black/40 border-2 border-yellow-400/30 shadow-[0_0_30px_rgba(255,255,0,0.1)]"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 10] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            >
              <MessageCircle className="size-6 text-yellow-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-yellow-300">
              Let's Connect
            </h3>
          </div>
          <p className="text-gray-300">
            Whether you're looking for a developer for your next project or want
            to collaborate on something exciting, I'd love to hear from you!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
