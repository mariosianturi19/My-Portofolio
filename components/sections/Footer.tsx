"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="font-bold text-xl text-primary">
              Mario<span className="text-accent-foreground">.dev</span>
            </a>
            <p className="text-muted-foreground mt-2">
              Frontend Developer & Mobile App Creator
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/mariosianturi19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/Togar-Anthony-Mario-Sianturi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:19mariosianturi@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Togar Anthony Mario Sianturi. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}