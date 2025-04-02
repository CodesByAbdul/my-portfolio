"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: "HTML & CSS", level: 95, color: "#FF5E5B" }, // primary
    { name: "JavaScript", level: 90, color: "#39A0ED" }, // secondary
    { name: "React", level: 85, color: "#8F3985" }, // accent
    { name: "Next.js", level: 80, color: "#FFD166" }, // highlight
    { name: "TypeScript", level: 75, color: "#06D6A0" }, // success
    { name: "UI/UX Design", level: 70, color: "#FF5E5B" }, // primary
    { name: "Node.js", level: 65, color: "#39A0ED" }, // secondary
    { name: "GraphQL", level: 60, color: "#8F3985" }, // accent
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/10 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            I&apos;ve worked with a variety of technologies in the web development world. Here&apos;s an overview of my technical
            skills and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-white/20"
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <span className="font-bold" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 50,
                    damping: 25,
                  }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center"
        >
          {[
            { name: "React", color: "#39A0ED" },
            { name: "Next.js", color: "#000000" },
            { name: "TypeScript", color: "#3178C6" },
            { name: "Tailwind", color: "#06B6D4" },
            { name: "Node.js", color: "#539E43" },
            { name: "GraphQL", color: "#E535AB" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: `${tech.color}50`,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
                <span className="text-2xl font-bold" style={{ color: tech.color }}>
                  {tech.name.charAt(0)}
                </span>
              </motion.div>
              <h3 className="font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

