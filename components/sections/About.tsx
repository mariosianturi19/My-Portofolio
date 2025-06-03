"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { MoveRight, Code, Palette, Smartphone, Award } from "lucide-react";

export default function About() {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    "JavaScript", "TypeScript", "React", "React Native", "Next.js", 
    "Node.js", "PHP", "Laravel", "Python", "Java", "Kotlin"
  ];

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Modern Design",
      description: "Creating beautiful user interfaces"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile First",
      description: "Responsive design approach"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Bangkit Graduate",
      description: "Google-backed program graduate"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-section">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">01.</span> Get to know me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                I'm a passionate developer who loves creating digital experiences
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Togar Anthony Mario Sianturi, a passionate front-end developer and mobile app creator 
                  based in Semarang, Indonesia. I enjoy creating beautiful, functional digital experiences 
                  that solve real-world problems.
                </p>
                <p>
                  I'm a proud graduate of the <strong className="text-primary">Bangkit Academy 2024</strong>, 
                  Google's flagship program for developing tech talents in Indonesia. Through this program, 
                  I enhanced my skills in mobile development, machine learning, and cloud computing, 
                  culminating in the <strong className="text-primary">Si-Bantu capstone project</strong>.
                </p>
                <p>
                  With a strong foundation in modern web technologies and mobile development, 
                  I specialize in building responsive websites and intuitive mobile applications
                  that provide exceptional user experiences across all devices.
                </p>
                <p>
                  I'm constantly learning and exploring new technologies to stay at the forefront
                  of digital innovation. When I'm not coding, I enjoy contributing to open-source
                  projects and sharing knowledge with the developer community.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Technologies I work with:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Badge 
                        className={`hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer ${
                          skill === "Machine Learning" || skill === "TensorFlow" ? "bg-orange-500/10 text-orange-600 border-orange-200" : ""
                        }`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <a 
                  href="#projects" 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium group transition-colors"
                >
                  Check out my work
                  <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="glass rounded-xl p-6 card-hover"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        feature.title === "Bangkit Graduate" 
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}