"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, Users, Award } from "lucide-react"

// Define the type for a project
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  category: "Mobile" | "Web" | "Algorithm"
  featured?: boolean
  isCapstone?: boolean
  teamProject?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Si-Bantu",
    description:
      "Bangkit Capstone 2024 - Smart assistant mobile application for helping people with daily tasks using machine learning and AI technologies.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Next.js", "TypeScript", "React", "CSS"],
    github: "https://github.com/mariosianturi19/SIGAP-UNDIP",
    category: "Web",
    featured: true,
  },
  {
    id: 3,
    title: "NBA App",
    description: "React Native mobile application for NBA statistics and team information with modern UI.",
    image:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["React Native", "JavaScript", "CSS"],
    github: "https://github.com/mariosianturi19/NBA-App",
    category: "Mobile",
    featured: true,
  },
  {
    id: 4,
    title: "Klik Digital Dashboard",
    description: "Professional dashboard website for PT. Klik Digital Sinergi with advanced analytics.",
    image:
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Next.js", "TypeScript", "CSS", "JavaScript"],
    github: "#", // Assuming "#" means no public link or private
    category: "Web",
    featured: true,
  },
  {
    id: 5,
    title: "Endorsement Website",
    description: "Social media influencer endorsement platform with payment integration and user management.",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/mariosianturi19/Endorsement_Website",
    category: "Web",
  },
  {
    id: 6,
    title: "Basketball Court Booking",
    description: "Online basketball court booking system with real-time availability and payment processing.",
    image:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/mariosianturi19/Booking-Basketball-Court",
    category: "Web",
  },
  {
    id: 7,
    title: "Outlet Recognition Website",
    description: "Website for outlet recognition using computer vision and machine learning algorithms.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Node.js", "HTML", "CSS", "JavaScript", "Computer Vision"],
    github: "#",
    category: "Web",
  },
  {
    id: 8,
    title: "Interpolation Algorithm",
    description:
      "Python implementation of numerical interpolation algorithms for data science and computational mathematics.",
    image:
      "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    tags: ["Python", "Jupyter", "NumPy", "SciPy", "Mathematics"],
    github: "https://github.com/mariosianturi19/Implementasi-Interpolasi",
    category: "Algorithm",
  },
]

type Category = "All" | "Web" | "Mobile" | "Algorithm"

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      {" "}
      {/* Assuming section-padding is py-16 md:py-24 */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {" "}
        {/* Assuming container-section is container mx-auto px-4 */}
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">02.</span> Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I have worked on. Each project represents a unique challenge and showcases
              different technologies and approaches to problem-solving.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {(["All", "Web", "Mobile", "Algorithm"] as Category[]).map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="h-9 px-4 text-sm transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                // The className logic for featured projects seems a bit unusual for lg screens,
                // but I'm keeping it as per the original code.
                // Featured: md:col-span-2 (takes full width on 2-col grid), lg:col-span-1 (takes 1/3 on 3-col grid)
                // Non-Featured: implicitly col-span-1 on all grids.
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="h-full group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {" "}
                  {/* Added card-hover equivalent */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {project.github !== "#" && (
                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            variant="secondary"
                            className="h-9 px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30" // Example glass effect
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                      {project.featured && (
                        <Badge className="bg-primary/90 text-primary-foreground shadow">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      {project.isCapstone && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow">
                          <Award className="h-3 w-3 mr-1" />
                          Capstone
                        </Badge>
                      )}
                      {project.teamProject && (
                        <Badge className="bg-blue-500/90 text-white shadow">
                          <Users className="h-3 w-3 mr-1" />
                          Team
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm shadow">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3 pt-4">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                      {project.isCapstone && (
                        <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full font-medium">
                          Bangkit 2024
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed h-16 overflow-hidden text-ellipsis">
                      {" "}
                      {/* Fixed height for description */}
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 pb-4">
                    <div className="w-full flex gap-2">
                      {project.github !== "#" ? (
                        <Button variant="outline" className="flex-1 group h-9 text-sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                            View Code
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" className="flex-1 h-9 text-sm" disabled>
                          <Github className="mr-2 h-3.5 w-3.5" />
                          Private Repository
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-card/50 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground mt-1">Total Projects</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary">5+</div>{" "}
              {/* This might need to be dynamic based on unique tags */}
              <div className="text-sm text-muted-foreground mt-1">Technologies</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground mt-1">Capstone Project</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Active</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button variant="outline" className="group h-11 px-8 text-base" asChild>
              <a href="https://github.com/mariosianturi19" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
