"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent } from "../components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { toast } from "../hooks/use-toast"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill out all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error(data.message || "Something went wrong")
      }
    } catch (err) {
      console.error("Error sending email:", err)
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10"></div>
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
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I&apos;m always open
            to new ideas and collaborations.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 -z-10"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary to-primary/70 p-3 rounded-xl shadow-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-foreground/70 break-words">adigunabdulrahman3@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-secondary to-secondary/70 p-3 rounded-xl shadow-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <p className="text-foreground/70">+234 811 2656 046</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-accent to-accent/70 p-3 rounded-xl shadow-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Location</h4>
                      <p className="text-foreground/70">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-medium text-lg mb-4">Social Profiles</h4>
                  <div className="flex gap-3">
                    {[
                      { name: "GitHub", href: "https://github.com/adigunabdulrahman", color: "#333" },
                      { name: "LinkedIn", href: "https://linkedin.com/in/abdulrahman-adigun", color: "#0077B5" },
                      { name: "X (Twitter)", href: "https://twitter.com/adigunabdulrahman", color: "#1DA1F2" },
                      { name: "Instagram", href: "https://instagram.com/adigunabdulrahman", color: "#E1306C" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/10"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: `${social.color}30`,
                          borderColor: `${social.color}50`,
                          transition: { type: "spring", stiffness: 300, damping: 10 },
                        }}
                      >
                        <span className="sr-only">{social.name}</span>
                        <span className="text-sm" style={{ color: social.color }}>
                          {social.name.charAt(0)}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 -z-10"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                  Send Me a Message
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 focus:border-primary/50 transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-white/5 border-white/10 focus:border-secondary/50 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="bg-white/5 border-white/10 focus:border-accent/50 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      className="min-h-[150px] bg-white/5 border-white/10 focus:border-highlight/50 transition-all duration-300"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

