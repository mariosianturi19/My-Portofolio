"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer & Mobile App Creator";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 80);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-16 px-4 bg-background relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full bg-gradient-to-br from-primary/5 via-secondary/5 to-muted/5 blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-bold text-5xl md:text-7xl mb-6 tracking-tight">
            Togar Anthony <span className="text-primary">Mario</span> Sianturi
          </h1>
          
          <div className="h-8 mb-8">
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/mariosianturi19" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}