"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">01.</span> About Me
            <div className="h-px bg-border flex-grow ml-4"></div>
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3">
              <p className="text-lg mb-6 text-muted-foreground">
                Hello! I'm Togar Anthony Mario Sianturi, a passionate frontend developer and mobile app creator 
                based in Indonesia. I enjoy creating beautiful, functional digital experiences 
                that solve real-world problems.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                With a strong foundation in modern web technologies and mobile development, 
                I specialize in building responsive websites and intuitive mobile applications
                that provide exceptional user experiences across all devices.
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                I'm constantly learning and exploring new technologies to stay at the forefront
                of digital innovation. When I'm not coding, I enjoy contributing to open-source
                projects and sharing knowledge with the developer community.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technologies I enjoy working with:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                </div>
              </div>

              <a href="#projects" className="inline-flex items-center text-primary hover:underline group">
                Check out my work
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="md:col-span-2 relative">
              <div className="aspect-square rounded-md overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                <div className="h-full w-full overflow-hidden rounded-md bg-muted">
                  <img 
                    src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Developer profile" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}