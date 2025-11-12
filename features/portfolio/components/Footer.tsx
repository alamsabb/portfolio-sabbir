"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t-2 border-yellow-400/30 backdrop-blur-md bg-black/40 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 text-center md:text-left"
          >
            © {new Date().getFullYear()} Sabbir Alam. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-4">
            {[
              {
                href: "https://github.com/alamsabb",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "mailto:sabbira2203@gmail.com",
                icon: Mail,
                label: "Email",
              },
              {
                href: "https://linkedin.com/in/sabbir-alam-dev",
                icon: Linkedin,
                label: "LinkedIn",
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Icon className="size-5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-center"
        >
          <p className="text-xs text-gray-500">
            Fullstack Developer •{" "}
            <span className="text-yellow-400">GenAI Specialist</span> • 2+ Years
            Experience
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
