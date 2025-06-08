"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

export default function ResumePage() {
  const personalInfo = {
    name: "Srinivas Nampalli",
    title: "AI & Automation Engineer",
    email: "srinivasvarma764@gmail.com",
    phone: "+91 XXXXX XXXXX", // Placeholder
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/srinivas-nampalli/",
    github: "https://github.com/Srinivas26k",
  }

  const experience = [
    {
      title: "AI & Automation Engineer",
      company: "Freelance & Open Source",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Developed AI-powered content generation systems using OpenAI API and custom NLP models",
        "Built automation workflows for data processing and analysis, improving efficiency by 60%",
        "Created real-time stock prediction models using LSTM neural networks with 85% accuracy",
        "Contributed to open-source AI projects with 500+ GitHub stars and active community engagement",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Ford Motor Company",
      period: "Summer 2023",
      location: "Dearborn, MI (Remote)",
      description: [
        "Developed battery capacity visualization tools for electric vehicle performance monitoring",
        "Created interactive dashboards using D3.js and Python for real-time data analysis",
        "Collaborated with cross-functional teams to optimize battery performance algorithms",
        "Implemented data pipeline solutions that reduced processing time by 40%",
      ],
    },
    {
      title: "Research Assistant",
      company: "Defence Research and Development Organisation (DRDO)",
      period: "2022 - 2023",
      location: "Hyderabad, India",
      description: [
        "Contributed to defense technology research focusing on automation systems",
        "Developed control algorithms for autonomous systems using MATLAB and Simulink",
        "Conducted performance analysis and optimization of mechanical control systems",
        "Published research findings in internal technical reports and presentations",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "University Name", // Placeholder
      period: "2021 - 2025",
      location: "Hyderabad, India",
      details: [
        "Specialization in Automation and Control Systems",
        "Relevant Coursework: Thermodynamics, Fluid Mechanics, Control Systems, CAD/CAM",
        "Projects: Water Purification System, Automated Manufacturing Process Design",
      ],
    },
  ]

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Rust", "MATLAB", "C++"],
    "AI & Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "LSTM", "NLP"],
    "Web Development": ["React", "Next.js", "Node.js", "FastAPI", "Flask", "REST APIs"],
    "Data & Visualization": ["Pandas", "NumPy", "D3.js", "Matplotlib", "Plotly", "PostgreSQL", "MongoDB"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "Linux", "Jupyter", "VS Code"],
    Engineering: ["CAD", "SolidWorks", "AutoCAD", "Control Systems", "Thermodynamics", "Fluid Mechanics"],
  }

  const projects = [
    {
      name: "AI SEO Content Generator",
      description: "Intelligent content generation system using advanced NLP models",
      tech: ["Python", "OpenAI API", "FastAPI", "React"],
    },
    {
      name: "Real-time Stock Price Predictor",
      description: "LSTM-based neural network for stock price prediction",
      tech: ["TensorFlow", "Python", "React", "WebSocket"],
    },
    {
      name: "Battery Capacity Visualizer",
      description: "Ford internship project for EV battery performance monitoring",
      tech: ["D3.js", "Python", "Flask", "PostgreSQL"],
    },
    {
      name: "Water Purification System",
      description: "IoT-enabled water purification with UV + RO technology",
      tech: ["Arduino", "IoT", "React Native", "Node.js"],
    },
  ]

  const achievements = [
    "Developed AI systems with 500+ GitHub stars and active community engagement",
    "Improved automation workflow efficiency by 60% through intelligent process optimization",
    "Created stock prediction models with 85% accuracy using advanced LSTM networks",
    "Contributed to Ford's EV battery monitoring systems during summer internship",
    "Published research findings in DRDO technical reports and presentations",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Resume</h1>
          <p className="text-xl text-purple-200 mb-8">
            AI & Automation Engineer with expertise in building intelligent systems
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-white mb-2">{personalInfo.name}</h2>
                <p className="text-xl text-purple-300 mb-6">{personalInfo.title}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-purple-400" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-purple-400" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{job.title}</h4>
                      <p className="text-purple-300 mb-2">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">{job.period}</p>
                      <p className="text-gray-400 text-sm">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
          {education.map((edu, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-300 mb-2">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{edu.period}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="bg-slate-800/50 border-slate-700 p-6">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
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
            ))}
          </div>
        </motion.div>

        {/* Key Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Key Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-purple-400/30 text-purple-300 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Key Achievements</h3>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <CardContent className="p-0">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2">🏆</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-800/20 to-cyan-800/20 border-purple-500/30 p-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-white mb-4">Get the Full Resume</h3>
              <p className="text-gray-300 mb-6">
                Download the complete PDF version with detailed project descriptions and references.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-200 hover:bg-purple-400/10"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
