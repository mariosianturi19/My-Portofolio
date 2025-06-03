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
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

// Sample career data based on CV
const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Jakarta, Indonesia",
    period: "2023 - Present",
    description: "Developing responsive web applications using React.js and Next.js. Collaborating with designers and backend developers to implement new features and improve existing ones.",
    type: "work",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Redux"],
  },
  {
    id: 2,
    title: "Mobile App Developer",
    company: "Mobile Studio",
    location: "Remote",
    period: "2022 - 2023",
    description: "Created cross-platform mobile applications using React Native and Flutter. Implemented state management solutions and integrated RESTful APIs.",
    type: "work",
    skills: ["React Native", "Flutter", "Firebase", "RESTful APIs"],
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "Digital Agency",
    location: "Bandung, Indonesia",
    period: "2021 - 2022",
    description: "Assisted in developing and maintaining client websites. Gained hands-on experience with modern web technologies and agile development methodologies.",
    type: "work",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "Git"],
  },
  {
    id: 4,
    title: "Android Development Expert",
    company: "Dicoding Indonesia",
    location: "Online",
    period: "2022",
    description: "Completed advanced Android development course, focusing on building complex, production-quality Android applications.",
    type: "education",
    skills: ["Android", "Kotlin", "Material Design", "Room Database", "Retrofit"],
    certificate: "https://www.dicoding.com/certificates/NVP749LNVPR0"
  },
  {
    id: 5,
    title: "Front-End Web Developer Expert",
    company: "Dicoding Indonesia",
    location: "Online",
    period: "2022",
    description: "Mastered advanced front-end web development concepts including Progressive Web Apps, testing, and optimization.",
    type: "education",
    skills: ["JavaScript", "PWA", "Webpack", "Testing", "Web Performance"],
    certificate: "https://www.dicoding.com/certificates/EYX4JJO16ZDL"
  },
  {
    id: 6,
    title: "Android Fundamentals",
    company: "Dicoding Indonesia",
    location: "Online",
    period: "2021",
    description: "Learned the fundamentals of Android application development using Kotlin programming language.",
    type: "education",
    skills: ["Android", "Kotlin", "Android Studio", "UI Components"],
    certificate: "https://www.dicoding.com/certificates/53XEQEYOKXRN"
  },
  {
    id: 7,
    title: "JavaScript Programming Foundations",
    company: "Dicoding Indonesia",
    location: "Online",
    period: "2021",
    description: "Built a strong foundation in JavaScript programming concepts and modern ES6+ features.",
    type: "education",
    skills: ["JavaScript", "ES6+", "Asynchronous JS", "Web API"],
    certificate: "https://www.dicoding.com/certificates/6RPNYYGWQZ2M"
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const workExperiences = experiences.filter(exp => exp.type === "work");
  const educationExperiences = experiences.filter(exp => exp.type === "education");

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">04.</span> Experience & Education
              <div className="h-px bg-border flex-grow ml-4"></div>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12">
              My professional journey and educational background that have shaped my skills and expertise in software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>

              <div className="relative border-l-2 border-border pl-6 space-y-6">
                {workExperiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between flex-wrap gap-2">
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          <Badge variant="outline">{experience.period}</Badge>
                        </div>
                        <CardDescription className="text-base">
                          {experience.company} • {experience.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Education & Certificates</h3>
              </div>

              <div className="relative border-l-2 border-border pl-6 space-y-6">
                {educationExperiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between flex-wrap gap-2">
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          <Badge variant="outline">{experience.period}</Badge>
                        </div>
                        <CardDescription className="text-base">
                          {experience.company} • {experience.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">{experience.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {experience.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        {experience.certificate && (
                          <a 
                            href={experience.certificate} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:underline"
                          >
                            <Award className="h-4 w-4 mr-2" />
                            View Certificate
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}