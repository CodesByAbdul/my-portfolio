"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Colorful background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-accent/10 via-secondary/10 to-primary/10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="w-full h-[600px] relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 z-10"></div>
              <Image src="/mypro-pic.png?height=800&width=600" alt="Abdulrahman Adigun" fill className="object-cover" />
            </div>
            <motion.div
              className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -top-5 -left-5 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
            >
              Hello, I&apos;m a Creative Developer
            </motion.h3>

            <motion.p variants={itemVariants} className="text-foreground/80 mb-4 text-lg">
              I&apos;m a passionate frontend developer with a keen eye for design and a love for creating intuitive, dynamic
              user experiences. With expertise in modern JavaScript frameworks and responsive design, I transform ideas
              into elegant digital solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-foreground/80 mb-8 text-lg">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sketching UI designs. I believe in continuous learning and pushing the boundaries of what&apos;s possible on
              the web.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="bg-card-gradient p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <h4 className="font-medium mb-2 text-primary">Location</h4>
                <p className="text-foreground/70">Lagos, Nigeria</p>
              </div>
              <div className="bg-card-gradient p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-secondary/20">
                <h4 className="font-medium mb-2 text-secondary">Experience</h4>
                <p className="text-foreground/70">3+ Years</p>
              </div>
              <div className="bg-card-gradient p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-accent/20">
                <h4 className="font-medium mb-2 text-accent">Email</h4>
                <p className="text-foreground/70 break-words text-sm">adigunabdulrahman3@gmail.com</p>
              </div>
              <div className="bg-card-gradient p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-highlight/20">
                <h4 className="font-medium mb-2 text-highlight">Education</h4>
                <p className="text-foreground/70">Agriculture, UNILORIN</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

