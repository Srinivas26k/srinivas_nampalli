"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  Brain,
  Zap,
  Globe,
  Lightbulb,
  FileText,
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  Shield,
  Award,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [activeTab, setActiveTab] = useState("all")

  // This would normally come from your CMS
  const servicesData = {
    title: "Professional Services",
    description:
      "Transform your business with cutting-edge AI and automation solutions. From intelligent chatbots to custom machine learning models, I deliver results that drive growth and efficiency.",
    services: [
      {
        name: "AI Chatbot Development",
        shortDescription: "Intelligent conversational AI that understands your customers and drives engagement",
        icon: "MessageCircle",
        pricing: { startingPrice: "$2,500", currency: "USD", type: "Project-based" },
        timeline: "4-6 weeks",
        featured: true,
        popular: true,
        category: "ai",
      },
      {
        name: "Custom Machine Learning Models",
        shortDescription: "Tailored ML solutions that solve your specific business challenges",
        icon: "Brain",
        pricing: { startingPrice: "$5,000", currency: "USD", type: "Project-based" },
        timeline: "6-12 weeks",
        featured: true,
        popular: false,
        category: "ai",
      },
      {
        name: "Automation Workflow Development",
        shortDescription: "Streamline your business processes with intelligent automation",
        icon: "Zap",
        pricing: { startingPrice: "$1,500", currency: "USD", type: "Project-based" },
        timeline: "2-4 weeks",
        featured: false,
        popular: true,
        category: "automation",
      },
      {
        name: "Web Application Development",
        shortDescription: "Modern, responsive web applications built with cutting-edge technologies",
        icon: "Globe",
        pricing: { startingPrice: "$3,000", currency: "USD", type: "Project-based" },
        timeline: "6-10 weeks",
        featured: false,
        popular: false,
        category: "web",
      },
      {
        name: "AI Consulting & Strategy",
        shortDescription: "Expert guidance on AI implementation and digital transformation",
        icon: "Lightbulb",
        pricing: { startingPrice: "$200", currency: "USD", type: "Hourly" },
        timeline: "1-3 weeks",
        featured: false,
        popular: false,
        category: "consulting",
      },
      {
        name: "Technical Writing & Documentation",
        shortDescription: "Clear, comprehensive technical documentation that developers love",
        icon: "FileText",
        pricing: { startingPrice: "$100", currency: "USD", type: "Hourly" },
        timeline: "1-4 weeks",
        featured: false,
        popular: false,
        category: "writing",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        testimonial:
          "Srinivas delivered an exceptional AI chatbot that increased our customer engagement by 300%. His technical expertise and attention to detail are outstanding.",
        rating: 5,
      },
      {
        name: "Michael Chen",
        company: "DataFlow Solutions",
        testimonial:
          "The automation workflows Srinivas built saved us 20 hours per week. The ROI was immediate and the quality of work exceeded our expectations.",
        rating: 5,
      },
    ],
  }

  const iconMap = {
    MessageCircle,
    Brain,
    Zap,
    Globe,
    Lightbulb,
    FileText,
  }

  const categories = [
    { id: "all", label: "All Services" },
    { id: "ai", label: "AI & ML" },
    { id: "automation", label: "Automation" },
    { id: "web", label: "Web Development" },
    { id: "consulting", label: "Consulting" },
    { id: "writing", label: "Writing" },
  ]

  const filteredServices =
    activeTab === "all"
      ? servicesData.services
      : servicesData.services.filter((service) => service.category === activeTab)

  const featuredServices = servicesData.services.filter((service) => service.featured)

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Professional Services</h1>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto mb-8">{servicesData.description}</p>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Happy Clients", value: "50+" },
              { icon: Award, label: "Projects Completed", value: "100+" },
              { icon: TrendingUp, label: "Average ROI", value: "300%" },
              { icon: Shield, label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center">
                          <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                            <IconComponent className="h-8 w-8 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-white mb-2">{service.name}</h3>
                            <div className="flex gap-2">
                              {service.featured && <Badge className="bg-purple-600 text-white">Featured</Badge>}
                              {service.popular && (
                                <Badge variant="outline" className="border-orange-400 text-orange-300">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-6 leading-relaxed">{service.shortDescription}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-300">
                          <DollarSign className="h-4 w-4 mr-2 text-green-400" />
                          <span>Starting at {service.pricing.startingPrice}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Clock className="h-4 w-4 mr-2 text-blue-400" />
                          <span>{service.timeline}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-purple-600 hover:bg-purple-700 flex-1">
                          <Link href="/contact" className="flex items-center justify-center">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-400/10">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* All Services with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Services</h2>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-slate-800/50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => {
                  const IconComponent = iconMap[service.icon]
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="p-2 bg-purple-600/20 rounded-lg mr-3">
                              <IconComponent className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                              {service.popular && (
                                <Badge variant="outline" className="border-orange-400 text-orange-300 text-xs mt-1">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>

                          <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>

                          <div className="space-y-2 mb-4 text-sm">
                            <div className="flex items-center text-gray-300">
                              <DollarSign className="h-3 w-3 mr-2 text-green-400" />
                              <span>From {service.pricing.startingPrice}</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <Clock className="h-3 w-3 mr-2 text-blue-400" />
                              <span>{service.timeline}</span>
                            </div>
                          </div>

                          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                            <Link href="/contact" className="flex items-center justify-center">
                              Get Quote
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.testimonial}"</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-purple-300 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-800/20 to-cyan-800/20 border-purple-500/30 p-12">
            <CardContent>
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how AI and automation can drive growth, reduce costs, and give you a competitive edge in
                your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-200 hover:bg-purple-400/10"
                >
                  Schedule Consultation
                </Button>
              </div>

              {/* Monetization Links */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-gray-400 mb-4">Support my work:</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" className="border-pink-400 text-pink-300 hover:bg-pink-400/10">
                    <a href="https://patreon.com/TechWithSrinivas" target="_blank" rel="noopener noreferrer">
                      Patreon
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-400 text-yellow-300 hover:bg-yellow-400/10"
                  >
                    <a href="https://buymeacoffee.com/srinivaskv" target="_blank" rel="noopener noreferrer">
                      Buy Me a Coffee
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="border-blue-400 text-blue-300 hover:bg-blue-400/10">
                    <a href="https://medium.com/@srinivaskv" target="_blank" rel="noopener noreferrer">
                      Medium
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
