"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Linkedin, Github, Send, MessageCircle, Briefcase, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srinivasvarma764@gmail.com",
      href: "mailto:srinivasvarma764@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/srinivas-nampalli",
      href: "https://www.linkedin.com/in/srinivas-nampalli/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Srinivas26k",
      href: "https://github.com/Srinivas26k",
    },
  ]

  const collaborationTypes = [
    {
      icon: Briefcase,
      title: "Freelance Projects",
      description: "AI automation systems, web applications, and data analysis projects",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Open-source contributions, research projects, and technical partnerships",
    },
    {
      icon: MessageCircle,
      title: "Consulting",
      description: "AI strategy, automation workflows, and technical architecture advice",
    },
  ]

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Ready to build something amazing together? I'm available for freelance projects, collaborations, and
            internship opportunities. Let's create intelligent solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 block">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, collaboration idea, or just say hello!"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <info.icon className="h-5 w-5 text-purple-400 mr-4" />
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Types */}
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Collaborate</h3>
                <div className="space-y-6">
                  {collaborationTypes.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <type.icon className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{type.title}</h4>
                        <p className="text-gray-400">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-purple-800/20 to-cyan-800/20 border-purple-500/30 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-4">Current Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Available for new projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-white">Open to internship opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-white">Interested in research collaborations</span>
                  </div>
                </div>
                <p className="text-gray-300 mt-6">Response time: Usually within 24 hours</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-slate-800/50 border-slate-700 p-12">
            <CardContent>
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Build the Future Together?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Whether you have a groundbreaking AI project, need automation solutions, or want to collaborate on
                open-source initiatives, I'm excited to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me Directly
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-200 hover:bg-purple-400/10"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
