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
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    icon: <Layout className="h-8 w-8 text-primary" />,
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Mobile Development",
    description: "Building native and cross-platform mobile applications",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Flutter", level: 75 },
      { name: "Android SDK", level: 75 },
      { name: "iOS Development", level: 65 },
    ],
  },
  {
    title: "Backend Development",
    description: "Building APIs and server-side applications",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences",
    icon: <PaintBucket className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 75 },
      { name: "Responsive Design", level: 90 },
      { name: "Design Systems", level: 85 },
      { name: "User Research", level: 70 },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core languages for various development tasks",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "Kotlin", level: 80 },
      { name: "Dart", level: 75 },
    ],
  },
  {
    title: "Tools & Other Skills",
    description: "Development tools and additional technical skills",
    icon: <Braces className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Testing (Jest, RTL)", level: 75 },
      { name: "Progressive Web Apps", level: 80 },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">03.</span> Skills & Expertise
              <div className="h-px bg-border flex-grow ml-4"></div>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              I've acquired a diverse set of skills throughout my journey as a developer. Here's a breakdown of my technical expertise and the technologies I work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{category.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
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