import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

