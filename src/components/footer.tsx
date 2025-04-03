"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/CodesByAbdul", color: "#333", name: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdulrahman-adigun3", color: "#0077B5", name: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/_afactor", color: "#1DA1F2", name: "X (Twitter)" },
    { icon: Instagram, href: "https://instagram.com/_afactor", color: "#E1306C", name: "Instagram" },
  ]

  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-6 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4">
              Abdulrahman Adigun
            </h3>
            <p className="text-foreground/70 mb-4">
              A passionate frontend developer focused on creating beautiful, responsive, and user-friendly web
              experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-foreground/70 hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-bold text-lg mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      backgroundColor: `${social.color}20`,
                      borderColor: `${social.color}50`,
                      boxShadow: `0 4px 12px ${social.color}30`,
                      transition: { type: "spring", stiffness: 300, damping: 10 },
                    }}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" style={{ color: social.color }} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Abdulrahman Adigun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

