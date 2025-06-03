"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Layout, Database, PaintBucket, Smartphone, Braces } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    description: "Modern web interfaces",
    icon: <Layout className="h-5 w-5 text-primary" />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Mobile",
    description: "Cross-platform apps",
    icon: <Smartphone className="h-5 w-5 text-primary" />,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Java", level: 75 },
      { name: "Android SDK", level: 75 },
    ],
  },
  {
    title: "Backend",
    description: "Server-side development",
    icon: <Database className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Languages",
    description: "Programming languages",
    icon: <Code className="h-5 w-5 text-primary" />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 85 },
    ],
  },
  {
    title: "Tools",
    description: "Development tools",
    icon: <Braces className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Webpack", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Design",
    description: "UI/UX Design",
    icon: <PaintBucket className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Figma", level: 80 },
      { name: "Responsive Design", level: 90 },
      { name: "Material Design", level: 75 },
      { name: "Bootstrap", level: 85 },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    <section id="skills" className="section-padding bg-background">
      <div className="container-section">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Skills & Technologies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">03.</span> What I Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
              >
                <Card className="h-full card-hover bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription className="text-sm">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: (index * 0.1) + (skillIndex * 0.05) 
                          }}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="relative">
                            <Progress 
                              value={skill.level} 
                              className="h-1.5"
                            />
                            <motion.div
                              className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: (index * 0.1) + (skillIndex * 0.1),
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}