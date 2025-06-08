"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "AI & Automation Engineer",
      company: "Freelance & Open Source",
      description: "Building intelligent automation systems and contributing to open-source AI projects.",
      type: "work",
    },
    {
      year: "2023",
      title: "Ford Internship",
      company: "Ford Motor Company",
      description: "Developed battery capacity visualization tools and worked on automotive data analytics.",
      type: "work",
    },
    {
      year: "2022",
      title: "DRDO Research Project",
      company: "Defence Research and Development Organisation",
      description: "Contributed to defense technology research focusing on automation systems.",
      type: "work",
    },
    {
      year: "2021-2025",
      title: "B.Tech Mechanical Engineering",
      company: "University",
      description: "Specialized in automation and control systems, bridging mechanical and AI domains.",
      type: "education",
    },
  ]

  const skills = {
    "AI & Machine Learning": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face"],
    "Automation & Backend": ["FastAPI", "Flask", "Node.js", "REST APIs", "Microservices", "Docker"],
    "Frontend & Visualization": ["React", "Next.js", "D3.js", "Tailwind CSS", "TypeScript", "JavaScript"],
    "Tools & Platforms": ["Git", "AWS", "Vercel", "Jupyter", "VS Code", "Linux", "Rust", "Tauri"],
    Engineering: ["CAD", "MATLAB", "Solidworks", "Control Systems", "Thermodynamics", "Fluid Mechanics"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            From mechanical systems to intelligent automation – my journey of building AI that bridges the physical and
            digital worlds.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <CardContent className="p-0">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Srinivas Nampalli"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Srinivas Nampalli</h2>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                    <span>20 years old</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-purple-400" />
                    <span>Mechanical Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-purple-400" />
                    <span>AI & Automation Engineer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    My journey began in the world of mechanical engineering, where I learned to understand how physical
                    systems work, how forces interact, and how to design solutions that move the world forward. But I
                    quickly realized that the future lies in the intersection of physical and digital intelligence.
                  </p>
                  <p>
                    At 20, I've already had the privilege of working with industry leaders like Ford Motor Company and
                    contributing to defense research at DRDO. These experiences taught me that the most impactful
                    solutions come from understanding both the mechanical foundations and the intelligent systems that
                    can optimize them.
                  </p>
                  <p>
                    Today, I focus on building AI agents and automation systems that don't just process data, but
                    understand context, learn from patterns, and make decisions like humans would. My mission is to
                    create technology that feels natural, works reliably, and solves real-world problems.
                  </p>
                  <p>
                    I believe in open-source collaboration, continuous learning, and building systems that empower
                    others. Whether it's developing SEO content generators, predicting stock markets with LSTM networks,
                    or visualizing complex engineering data, I'm passionate about making AI accessible and practical.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-500"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <Card className="bg-slate-800/50 border-slate-700 p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={item.type === "work" ? "default" : "secondary"} className="mb-2">
                            {item.type === "work" ? "Work" : "Education"}
                          </Badge>
                          <span className="text-purple-400 font-semibold">{item.year}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-purple-300 mb-3">{item.company}</p>
                        <p className="text-gray-400">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 p-6 h-full">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-semibold text-white mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10"
                        >
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
      </div>
    </div>
  )
}
