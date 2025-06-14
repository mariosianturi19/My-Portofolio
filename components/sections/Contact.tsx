"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check, AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Initialize EmailJS (put this in useEffect if needed)
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.user_name || formData.user_name.trim().length < 2) {
      newErrors.user_name = "Name must be at least 2 characters."
    }

    if (!formData.user_email || !/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address."
    }

    if (!formData.subject || formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters."
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration missing")
      setFormStatus("error")
      return
    }

    setIsSubmitting(true)
    setFormStatus(null)

    try {
      if (!form.current) {
        throw new Error("Form reference not found")
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey)

      console.log("Email sent successfully:", result.text)

      setFormStatus("success")
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      })

      // Auto hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setFormStatus("error")

      // Auto hide error message after 5 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "19mariosianturi@gmail.com",
      href: "mailto:19mariosianturi@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+62 877 1655 4446",
      href: "https://wa.me/6287716554446",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Semarang, Indonesia",
      href: null,
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Togar Anthony Mario Sianturi",
      href: "https://www.linkedin.com/in/togar-anthony-mario-sianturi/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "@mariosianturi19",
      href: "https://github.com/mariosianturi19",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">05.</span> Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
              together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">Let's start a conversation</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{item.label}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/mariosianturi19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/togar-anthony-mario-sianturi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </motion.a>
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> I typically respond to messages within 24 hours. For urgent matters,
                  please contact me directly via WhatsApp.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Alert className="mb-6 bg-green-500/10 text-green-600 border-green-500/20">
                      <Check className="h-4 w-4" />
                      <AlertTitle>Message Sent Successfully! 🎉</AlertTitle>
                      <AlertDescription>
                        Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Alert className="mb-6 bg-destructive/10 text-destructive border-destructive/20">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Failed to Send Message</AlertTitle>
                      <AlertDescription>
                        There was a problem sending your message. Please try again or contact me directly via email.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-background/50"
                        disabled={isSubmitting}
                      />
                      {errors.user_name && <p className="text-sm text-destructive mt-1">{errors.user_name}</p>}
                    </div>

                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-background/50"
                        disabled={isSubmitting}
                      />
                      {errors.user_email && <p className="text-sm text-destructive mt-1">{errors.user_email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="bg-background/50"
                      disabled={isSubmitting}
                    />
                    {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      className="min-h-[120px] bg-background/50"
                      disabled={isSubmitting}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <Button type="submit" disabled={isSubmitting} className="w-full group relative overflow-hidden">
                      <div className="flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            Send Message
                          </>
                        )}
                      </div>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
