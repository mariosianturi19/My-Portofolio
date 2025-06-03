// components/sections/Projects.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye, Star, Users, Award } from "lucide-react";

// Data proyek berdasarkan CV dan repositori GitHub
const projects = [
  {
    id: 1,
    title: "Si-Bantu",
    description: "Bangkit Capstone 2024 - Smart assistant mobile application for helping people with daily tasks using machine learning and AI technologies.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Android", "Machine Learning", "TensorFlow", "Kotlin", "Firebase", "AI"],
    github: "https://github.com/indra1222/Bangkitcapstone",
    category: "Mobile",
    featured: true,
    isCapstone: true,
    teamProject: true,
  },
  {
    id: 2,
    title: "SIGAP UNDIP",
    description: "Modern academic information system for Diponegoro University built with Next.js and TypeScript.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Next.js", "TypeScript", "React", "CSS"],
    github: "https://github.com/mariosianturi19/SIGAP-UNDIP",
    category: "Web",
    featured: true,
  },
  {
    id: 3,
    title: "NBA App",
    description: "React Native mobile application for NBA statistics and team information with modern UI.",
    image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["React Native", "JavaScript", "CSS"],
    github: "https://github.com/mariosianturi19/NBA-App",
    category: "Mobile",
    featured: true,
  },
  {
    id: 4,
    title: "Klik Digital Dashboard",
    description: "Professional dashboard website for PT. Klik Digital Sinergi with advanced analytics.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Next.js", "TypeScript", "CSS", "JavaScript"],
    github: "#",
    category: "Web",
    featured: true,
  },
  {
    id: 5,
    title: "Endorsement Website",
    description: "Social media influencer endorsement platform with payment integration and user management.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/mariosianturi19/Endorsement_Website",
    category: "Web",
  },
  {
    id: 6,
    title: "Basketball Court Booking",
    description: "Online basketball court booking system with real-time availability and payment processing.",
    image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/mariosianturi19/Booking-Basketball-Court",
    category: "Web",
  },
  {
    id: 7,
    title: "Outlet Recognition Website",
    description: "Website for outlet recognition using computer vision and machine learning algorithms.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Node.js", "HTML", "CSS", "JavaScript", "Computer Vision"],
    github: "#",
    category: "Web",
  },
  {
    id: 8,
    title: "Interpolation Algorithm",
    description: "Python implementation of numerical interpolation algorithms for data science and computational mathematics.",
    image: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Python", "Jupyter", "NumPy", "SciPy", "Mathematics"],
    github: "https://github.com/mariosianturi19/Implementasi-Interpolasi",
    category: "Algorithm",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-section">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">02.</span> Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge 
              and showcases different technologies and approaches to problem-solving.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {["All", "Web", "Mobile", "Algorithm"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "primary" : "outline"}
                onClick={() => setFilter(category)}
                size="sm"
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="h-full group overflow-hidden card-hover bg-card/50 backdrop-blur-sm border-border/50">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay buttons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.github !== "#" && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="glass"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {/* Badge Container */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {project.featured && (
                        <Badge className="bg-primary/90 text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      {project.isCapstone && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <Award className="h-3 w-3 mr-1" />
                          Capstone
                        </Badge>
                      )}
                      {project.teamProject && (
                        <Badge variant="secondary" className="bg-blue-500/90 text-white">
                          <Users className="h-3 w-3 mr-1" />
                          Team
                        </Badge>
                      )}
                    </div>
                    
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      {project.isCapstone && (
                        <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full">
                          Bangkit 2024
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <div className="w-full flex gap-2">
                      {project.github !== "#" ? (
                        <Button variant="outline" size="sm" className="flex-1 group" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-3 w-3 transition-transform group-hover:scale-110" />
                            View Code
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="flex-1" disabled>
                          <Github className="mr-2 h-3 w-3" />
                          Private Repository
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Statistics */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">Capstone Project</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button variant="outline" size="lg" className="group" asChild>
              <a 
                href="https://github.com/mariosianturi19" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}