"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Front-End Developer & Mobile App Creator"

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setTypedText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(intervalId)
      }
    }, 80)

    return () => clearInterval(intervalId)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="relative">
              <span className="gradient-text">Mario</span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-16 mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              {typedText}
              <span className="animate-blink text-primary">|</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I create beautiful, responsive web applications and mobile apps with modern technologies. Let's build
            something amazing together.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="group h-12 px-6 text-base" asChild>
              <a href="#projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button className="group h-12 px-6 text-base button-outline" asChild>
              <a href="https://github.com/mariosianturi19" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                GitHub
              </a>
            </Button>
            <Button className="group h-12 px-6 text-base button-secondary" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="block p-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  )
}
