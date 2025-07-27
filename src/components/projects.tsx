"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Github, ExternalLink, Star } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive dashboard for e-commerce analytics with real-time data visualization.",
      image: "/farm-fresh-homepage.jpg?height=600&width=800",
      tags: ["React", "TypeScript", "Tailwind"],
      demoLink: "https://farm-fresh-ecommerce-site.vercel.app/",
      codeLink: "https://github.com/CodesByAbdul/farm-fresh-ecommerce",
      category: "Web App",
      color: "#FF5E5B", // primary
      featured: true,
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description: "A modern travel booking platform with interactive maps and personalized recommendations.",
      image: "/travelhub.jpg?height=600&width=800",
      tags: ["React", "Node.js", "Tailwind"],
      demoLink: "https://https://travelhub-zeta.vercel.app/",
      codeLink: "https://github.com/CodesByAbdul/travel-ease",
      category: "Full Stack",
      color: "#39A0ED", // secondary
      featured: true,
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      description: "Mobile-first fitness tracking application with workout plans and progress visualization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      codeLink: "#",
      category: "Mobile",
      color: "#8F3985", // accent
      featured: true,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A creative portfolio website for a digital artist with interactive galleries.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
      category: "Web App",
      color: "#FFD166", // highlight
      featured: true,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A responsive dashboard for managing and analyzing social media accounts.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Chart.js", "Styled Components"],
      demoLink: "#",
      codeLink: "#",
      category: "Web App",
      color: "#06D6A0", // success
      featured: false,
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description: "A platform for buying, selling, and renting properties with virtual tours.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
      color: "#FF5E5B", // primary
      featured: false,
    },
    {
      id: 7,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Firebase", "Material UI"],
      demoLink: "#",
      codeLink: "#",
      category: "Web App",
      color: "#39A0ED", // secondary
      featured: false,
    },
    {
      id: 8,
      title: "Recipe Finder",
      description: "A mobile app that suggests recipes based on ingredients you have at home.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Redux", "API Integration"],
      demoLink: "#",
      codeLink: "#",
      category: "Mobile",
      color: "#8F3985", // accent
      featured: false,
    },
    {
      id: 9,
      title: "Weather Dashboard",
      description: "A weather forecasting app with interactive maps and historical data analysis.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "D3.js", "Weather API"],
      demoLink: "#",
      codeLink: "#",
      category: "Web App",
      color: "#FFD166", // highlight
      featured: false,
    },
    {
      id: 10,
      title: "Music Streaming App",
      description: "A mobile app for streaming music with playlist creation and social sharing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Redux", "Audio API"],
      demoLink: "#",
      codeLink: "#",
      category: "Mobile",
      color: "#06D6A0", // success
      featured: false,
    },
    {
      id: 11,
      title: "News Aggregator",
      description: "A web app that collects and displays news from various sources with customizable feeds.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "News API"],
      demoLink: "#",
      codeLink: "#",
      category: "Web App",
      color: "#FF5E5B", // primary
      featured: false,
    },
    {
      id: 12,
      title: "Virtual Event Platform",
      description: "A platform for hosting virtual conferences with networking and interactive sessions.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "WebRTC", "Socket.io"],
      demoLink: "#",
      codeLink: "#",
      category: "Web App",
      color: "#39A0ED", // secondary
      featured: false,
    },
    {
      id: 13,
      title: "Food Delivery App",
      description: "A mobile app for ordering food from local restaurants with real-time delivery tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Google Maps API", "Firebase"],
      demoLink: "#",
      codeLink: "#",
      category: "Mobile",
      color: "#8F3985", // accent
      featured: false,
    },
    {
      id: 14,
      title: "Interactive Learning Platform",
      description: "An educational platform with interactive lessons, quizzes, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
      color: "#FFD166", // highlight
      featured: false,
    },
  ]

  const filters = ["All", "Web App", "Full Stack", "Mobile"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  }

  return (
    <section id="projects" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-accent/5 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-highlight/10 to-transparent blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            My Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Each one was carefully crafted with attention to detail, performance,
            and user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter, index) => (
            <Button
              key={index}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`mb-2 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-primary to-secondary border-none text-white shadow-lg"
                  : "border-white/20 hover:border-white/40 backdrop-blur-sm"
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="overflow-hidden group"
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-white/20 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <div className="bg-primary/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-white" />
                        Featured
                      </div>
                    </div>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white border-none"
                      asChild
                    >
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white border-none"
                      asChild
                    >
                      <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 relative flex-1 flex flex-col">
                  <div
                    className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[color:var(--project-color)] opacity-10 -z-10"
                    style={{ "--project-color": project.color } as React.CSSProperties}
                  ></div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${project.color}30`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p className="text-foreground/70 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="outline" className="border-white/20 hover:border-white/40 backdrop-blur-sm" asChild>
            <Link href="https://github.com/adigunabdulrahman" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More Projects on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

