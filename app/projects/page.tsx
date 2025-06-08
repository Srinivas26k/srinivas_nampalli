"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Filter } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "AI SEO Content Generator",
      description:
        "Intelligent content generation system that creates SEO-optimized articles using advanced NLP models. Features keyword optimization, content structure analysis, and automated meta tag generation.",
      longDescription:
        "A comprehensive AI-powered content generation platform that leverages OpenAI's GPT models to create high-quality, SEO-optimized articles. The system analyzes target keywords, competitor content, and search intent to generate engaging articles that rank well in search engines.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL", "Redis"],
      category: "ai",
      github: "https://github.com/Srinivas26k/ai-seo-generator",
      demo: "https://ai-seo-demo.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Real-time Stock Price Predictor",
      description:
        "LSTM-based neural network for predicting stock prices with real-time data processing. Includes technical indicators, sentiment analysis, and risk assessment features.",
      longDescription:
        "Advanced machine learning system that combines LSTM neural networks with technical analysis and sentiment data to predict stock price movements. Features real-time data ingestion, multiple prediction models, and comprehensive risk analysis.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["TensorFlow", "Python", "React", "WebSocket", "Alpha Vantage API", "Chart.js"],
      category: "ai",
      github: "https://github.com/Srinivas26k/stock-predictor",
      demo: "https://stock-predictor-demo.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "Battery Capacity Visualizer (Ford)",
      description:
        "Ford internship project for visualizing and analyzing battery performance metrics. Interactive dashboards for monitoring battery health, capacity degradation, and performance optimization.",
      longDescription:
        "Enterprise-level data visualization platform developed during Ford internship to monitor and analyze electric vehicle battery performance. Features real-time monitoring, predictive maintenance alerts, and comprehensive analytics dashboards.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["D3.js", "Python", "Flask", "PostgreSQL", "Docker", "AWS"],
      category: "engineering",
      github: "https://github.com/Srinivas26k/battery-visualizer",
      demo: null,
      featured: true,
    },
    {
      id: 4,
      title: "Water Purification System with UV + RO",
      description:
        "Innovative water purification system combining UV sterilization and reverse osmosis technology. Includes IoT monitoring and automated maintenance scheduling.",
      longDescription:
        "Comprehensive water purification solution that integrates UV sterilization with reverse osmosis filtration. Features IoT sensors for water quality monitoring, automated filter replacement alerts, and mobile app control.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Arduino", "IoT", "React Native", "Node.js", "MongoDB", "MQTT"],
      category: "engineering",
      github: "https://github.com/Srinivas26k/water-purification",
      demo: null,
      featured: false,
    },
    {
      id: 5,
      title: "Prompt Engineering Assistant",
      description:
        "AI-powered tool for optimizing and testing prompts across different language models. Features A/B testing, performance metrics, and prompt template library.",
      longDescription:
        "Comprehensive prompt engineering platform that helps developers and researchers optimize their AI prompts. Includes testing frameworks, performance analytics, and a collaborative prompt library.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "OpenAI API", "Anthropic API", "Supabase", "Tailwind CSS"],
      category: "ai",
      github: "https://github.com/Srinivas26k/prompt-assistant",
      demo: "https://prompt-assistant.vercel.app",
      featured: false,
    },
    {
      id: 6,
      title: "Automation Workflow Builder",
      description:
        "Visual workflow builder for creating complex automation sequences. Drag-and-drop interface with support for APIs, webhooks, and conditional logic.",
      longDescription:
        "No-code automation platform that allows users to create complex workflows using a visual interface. Supports integration with popular APIs, conditional logic, and scheduled executions.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "MongoDB", "Redis", "Docker", "Kubernetes"],
      category: "automation",
      github: "https://github.com/Srinivas26k/workflow-builder",
      demo: "https://workflow-demo.vercel.app",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "automation", label: "Automation" },
    { id: "engineering", label: "Engineering" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            A collection of AI systems, automation tools, and engineering solutions that bridge the gap between
            mechanical systems and intelligent software.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600 text-white">Featured</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-purple-400/30 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-400 text-purple-200 hover:bg-purple-400/10"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Filter className="h-5 w-5 text-purple-400 mt-2" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={
                  filter === category.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-400/30 text-purple-300 hover:bg-purple-400/10"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-purple-400/30 text-purple-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="border-purple-400/30 text-purple-300 text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-400 text-purple-200 hover:bg-purple-400/10 flex-1"
                        >
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex-1">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Demo
                          </Button>
                        )}
                      </div>
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
