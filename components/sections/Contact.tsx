"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Check,
  AlertCircle
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setFormStatus("success");
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">05.</span> Get In Touch
              <div className="h-px bg-border flex-grow ml-4"></div>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12">
              Have a project in mind or just want to chat? Feel free to reach out to me through the form below or via any of my contact channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:19mariosianturi@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      19mariosianturi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="https://wa.me/6287716554446" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +62 877 1655 4446
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/Togar-Anthony-Mario-Sianturi" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Togar Anthony Mario Sianturi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/mariosianturi19" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @mariosianturi19
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
                <p className="text-muted-foreground mb-4">
                  Follow me on social media or check out my work on various platforms.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/mariosianturi19" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent/80 p-3 rounded-full transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/Togar-Anthony-Mario-Sianturi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent/80 p-3 rounded-full transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {formStatus === "success" && (
                <Alert className="mb-6 bg-green-500/10 text-green-500 border-green-500/20">
                  <Check className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your message has been sent successfully. I'll get back to you soon!
                  </AlertDescription>
                </Alert>
              )}
              
              {formStatus === "error" && (
                <Alert className="mb-6 bg-destructive/10 text-destructive border-destructive/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error!</AlertTitle>
                  <AlertDescription>
                    There was a problem sending your message. Please try again later.
                  </AlertDescription>
                </Alert>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this regarding?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}