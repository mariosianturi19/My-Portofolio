"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from "lucide-react"

// Data berdasarkan CV yang diberikan
const experiences = [
	{
		id: 1,
		title: "Front-End Developer",
		company: "PT. Klik Digital Sinergi",
		location: "Jakarta, Indonesia",
		period: "Jan 2025 - Feb 2025",
		type: "Internship",
		description: "Developed responsive dashboard using Next.js, TypeScript, and modern CSS frameworks.",
		skills: ["Next.js", "TypeScript", "CSS", "JavaScript"],
		category: "work",
	},
	{
		id: 2,
		title: "Front-End Developer",
		company: "PT. Telekomunikasi Selular",
		location: "Jakarta, Indonesia",
		period: "Jul 2024 - Aug 2024",
		type: "Internship",
		description: "Contributed to web development projects using modern frameworks and best practices.",
		skills: ["React", "JavaScript", "CSS", "HTML"],
		category: "work",
	},
	{
		id: 3,
		title: "Teaching Assistant",
		company: "Diponegoro University",
		location: "Semarang, Indonesia",
		period: "Feb 2024 - Jun 2024",
		type: "Part-time",
		description: "Mentored students in programming fundamentals and computer science concepts.",
		skills: ["Teaching", "Java", "Programming", "Mentoring"],
		category: "work",
	},
	{
		id: 4,
		title: "Mobile Development Cohort",
		company: "Bangkit Academy by Google, Tokopedia, Gojek & Traveloka",
		location: "Remote, Indonesia",
		period: "Feb 2024 - Jul 2024",
		type: "Bootcamp",
		description:
			"Intensive 6-month program focusing on mobile development, machine learning, and cloud computing. Completed capstone project Si-Bantu with team collaboration.",
		skills: [
			"Android Development",
			"Kotlin",
			"Machine Learning",
			"TensorFlow",
			"Firebase",
			"Google Cloud Platform",
			"Team Collaboration",
		],
		category: "education",
		isBangkit: true,
	},
]

const education = [
	{
		id: 1,
		title: "Computer Engineering",
		company: "Diponegoro University",
		location: "Semarang, Indonesia",
		period: "2022 - Present",
		type: "Bachelor's Degree",
		description: "Focusing on software development, algorithms, and computer systems.",
		skills: ["Software Engineering", "Data Structures", "Algorithms"],
		category: "education",
	},
	{
		id: 2,
		title: "Mathematics & Natural Sciences",
		company: "SMA Negeri 55",
		location: "Jakarta, Indonesia",
		period: "2019 - 2022",
		type: "High School",
		description: "Specialized in STEM subjects with focus on mathematics and physics.",
		skills: ["Mathematics", "Physics", "Chemistry"],
		category: "education",
	},
]

const certificates = [
	{ name: "Belajar Fundamental Aplikasi Android", issuer: "Dicoding Indonesia", year: "2023" },
	{ name: "Memulai Pemrograman dengan Kotlin", issuer: "Dicoding Indonesia", year: "2023" },
	{ name: "CCNAv7: Introduction to Networks", issuer: "Cisco Networking Academy", year: "2023" },
	{ name: "Belajar Dasar AI", issuer: "Dicoding Indonesia", year: "2023" },
	{ name: "Database Design Learner", issuer: "Oracle Academy", year: "2023" },
]

const organizations = [
	{
		id: 1,
		title: "Member",
		company: "Google Developer Student Clubs (GDSC) Diponegoro University",
		location: "Semarang, Indonesia",
		period: "Sep 2023 - Jul 2024",
		type: "Organization",
		description:
			"Being a member of GDSC as a bridge between theory and practice to have an interest in developing skills in the field of technology especially Google Technologies.",
		skills: ["Google Technologies", "Community Building", "Tech Development", "Leadership"],
		category: "organization",
	},
	{
		id: 2,
		title: "Member",
		company: "Computer Engineering Research Club (CERC) Diponegoro University",
		location: "Semarang, Indonesia",
		period: "Apr 2023 - Jun 2024",
		type: "Organization",
		description:
			"Being a member of CERC in the software field with the goal of improving programming skills, especially in frontend and backend.",
		skills: ["Programming", "Frontend Development", "Backend Development", "Research"],
		category: "organization",
	},
]

export default function Experience() {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

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
		<section id="experience" className="py-16 md:py-24 bg-muted/30">
			<div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
				<motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
					<motion.div variants={itemVariants} className="text-center mb-16">
						<span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
							Background
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
							<span className="text-primary">04.</span> Experience & Education
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							My professional journey and educational background that shaped my skills in software development.
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-6"></div>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
						{/* Work Experience */}
						<motion.div variants={itemVariants}>
							<div className="flex items-center gap-3 mb-8">
								<div className="bg-primary/10 p-3 rounded-lg">
									<Briefcase className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-2xl font-bold">Work Experience</h3>
							</div>

							<div className="space-y-4 mb-8">
								{experiences.map((exp, index) => (
									<motion.div
										key={exp.id}
										initial={{ opacity: 0, x: -50 }}
										animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
									>
										<Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
											<CardHeader className="pb-3">
												<div className="flex justify-between items-start mb-2">
													<div>
														<CardTitle className="text-lg">{exp.title}</CardTitle>
														<CardDescription className="font-medium text-foreground/80">
															{exp.company}
														</CardDescription>
													</div>
													<Badge className="text-xs">{exp.type}</Badge>
												</div>
												<div className="flex items-center gap-4 text-sm text-muted-foreground">
													<div className="flex items-center gap-1">
														<Calendar className="h-3 w-3" />
														{exp.period}
													</div>
													<div className="flex items-center gap-1">
														<MapPin className="h-3 w-3" />
														{exp.location}
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<p className="text-sm text-muted-foreground mb-3 leading-relaxed">
													{exp.description}
												</p>
												<div className="flex flex-wrap gap-1">
													{exp.skills.map((skill) => (
														<Badge key={skill} className="text-xs">
															{skill}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>

							{/* Organizations */}
							<div className="flex items-center gap-3 mb-6">
								<div className="bg-orange-500/10 p-3 rounded-lg">
									<Award className="h-5 w-5 text-orange-500" />
								</div>
								<h3 className="text-xl font-bold">Organizations</h3>
							</div>

							<div className="space-y-4">
								{organizations.map((org, index) => (
									<motion.div
										key={org.id}
										initial={{ opacity: 0, x: -50 }}
										animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
									>
										<Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
											<CardHeader className="pb-3">
												<div className="flex justify-between items-start mb-2">
													<div>
														<CardTitle className="text-lg">{org.title}</CardTitle>
														<CardDescription className="font-medium text-foreground/80">
															{org.company}
														</CardDescription>
													</div>
													<Badge variant="secondary" className="text-xs">
														{org.type}
													</Badge>
												</div>
												<div className="flex items-center gap-4 text-sm text-muted-foreground">
													<div className="flex items-center gap-1">
														<Calendar className="h-3 w-3" />
														{org.period}
													</div>
													<div className="flex items-center gap-1">
														<MapPin className="h-3 w-3" />
														{org.location}
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<p className="text-sm text-muted-foreground mb-3 leading-relaxed">
													{org.description}
												</p>
												<div className="flex flex-wrap gap-1">
													{org.skills.map((skill) => (
														<Badge key={skill} variant="outline" className="text-xs">
															{skill}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Education & Certificates */}
						<motion.div variants={itemVariants}>
							<div className="flex items-center gap-3 mb-8">
								<div className="bg-primary/10 p-3 rounded-lg">
									<GraduationCap className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-2xl font-bold">Education</h3>
							</div>

							<div className="space-y-4 mb-8">
								{education.map((edu, index) => (
									<motion.div
										key={edu.id}
										initial={{ opacity: 0, x: 50 }}
										animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
									>
										<Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
											<CardHeader className="pb-3">
												<div className="flex justify-between items-start mb-2">
													<div>
														<CardTitle className="text-lg">{edu.title}</CardTitle>
														<CardDescription className="font-medium text-foreground/80">
															{edu.company}
														</CardDescription>
													</div>
													<Badge className="text-xs">{edu.type}</Badge>
												</div>
												<div className="flex items-center gap-4 text-sm text-muted-foreground">
													<div className="flex items-center gap-1">
														<Calendar className="h-3 w-3" />
														{edu.period}
													</div>
													<div className="flex items-center gap-1">
														<MapPin className="h-3 w-3" />
														{edu.location}
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<p className="text-sm text-muted-foreground mb-3 leading-relaxed">
													{edu.description}
												</p>
												<div className="flex flex-wrap gap-1">
													{edu.skills.map((skill) => (
														<Badge key={skill} className="text-xs">
															{skill}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>

							{/* Certificates */}
							<div className="flex items-center gap-3 mb-6">
								<div className="bg-primary/10 p-3 rounded-lg">
									<Award className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Certificates</h3>
							</div>

							<div className="grid gap-3">
								{certificates.map((cert, index) => (
									<motion.div
										key={cert.name}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.4, delay: index * 0.05 }}
									>
										<Card className="p-4 card-hover bg-card/30 backdrop-blur-sm border-border/50">
											<div className="flex justify-between items-start">
												<div className="flex-1">
													<h4 className="font-medium text-sm leading-tight mb-1">{cert.name}</h4>
													<p className="text-xs text-muted-foreground">{cert.issuer}</p>
												</div>
												<Badge className="text-xs ml-2">{cert.year}</Badge>
											</div>
										</Card>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
