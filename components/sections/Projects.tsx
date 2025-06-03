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
import { Github, ExternalLink } from "lucide-react";

// Sample project data - this would ideally come from a CMS or API
const projects = [
  {
    id: 1,
    title: "Bookshelf App",
    description: "A web application for managing your book collection with search, filter, and sorting features.",
    image: "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "HTML", "CSS", "localStorage"],
    github: "https://github.com/mariosianturi19/Bookshelf-app",
    liveDemo: null,
    category: "Web",
  },
  {
    id: 2,
    title: "Dicoding Story App",
    description: "A social story sharing platform with camera integration, location mapping, and authentication.",
    image: "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Android", "Kotlin", "Retrofit", "Google Maps API"],
    github: "https://github.com/mariosianturi19/story-app",
    liveDemo: null,
    category: "Mobile",
  },
  {
    id: 3,
    title: "Restaurant Catalog",
    description: "A progressive web app (PWA) showcasing restaurants with offline support and favorites feature.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "PWA", "Webpack", "IndexedDB"],
    github: "https://github.com/mariosianturi19/restaurant-app",
    liveDemo: null,
    category: "Web",
  },
  {
    id: 4,
    title: "GitHub User App",
    description: "Mobile application to search and view GitHub user profiles and repositories using GitHub API.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Android", "Kotlin", "GitHub API", "Room Database"],
    github: "https://github.com/mariosianturi19/github-user-app",
    liveDemo: null,
    category: "Mobile",
  },
  {
    id: 5,
    title: "MovieDB Catalog",
    description: "Movie and TV show catalog application with features to view details and save favorites.",
    image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Android", "Kotlin", "Room", "TMDB API"],
    github: "https://github.com/mariosianturi19/Movie-Catalog",
    liveDemo: null,
    category: "Mobile",
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

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">02.</span> My Projects
              <div className="h-px bg-border flex-grow ml-4"></div>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Here are some of the projects I've worked on. Each project was built to solve a specific problem or to learn new technologies.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              <Button 
                variant={filter === "All" ? "default" : "outline"} 
                onClick={() => setFilter("All")}
              >
                All
              </Button>
              <Button 
                variant={filter === "Web" ? "default" : "outline"} 
                onClick={() => setFilter("Web")}
              >
                Web
              </Button>
              <Button 
                variant={filter === "Mobile" ? "default" : "outline"} 
                onClick={() => setFilter("Mobile")}
              >
                Mobile
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-background/80 p-2 rounded-full hover:bg-background transition-colors duration-200"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/80 p-2 rounded-full hover:bg-background transition-colors duration-200"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex gap-4 w-full">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.liveDemo ? (
                        <Button size="sm" className="flex-1" asChild>
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" className="flex-1" disabled>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo N/A
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/mariosianturi19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                See more on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}