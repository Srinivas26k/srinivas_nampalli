"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Coffee, DollarSign, Gift } from "lucide-react"
import Image from "next/image"

export default function SponsorSection() {
  const sponsorTiers = [
    {
      name: "Coffee Supporter",
      amount: "$5",
      description: "Buy me a coffee to fuel late-night coding sessions",
      benefits: ["Thank you mention", "Early access to blog posts"],
      color: "bg-yellow-500",
      icon: Coffee,
      popular: false,
    },
    {
      name: "Code Contributor",
      amount: "$25",
      description: "Support ongoing open-source development",
      benefits: ["All previous benefits", "Priority support", "Name in project credits"],
      color: "bg-blue-500",
      icon: Star,
      popular: true,
    },
    {
      name: "Innovation Partner",
      amount: "$100",
      description: "Help fund new AI research and development",
      benefits: ["All previous benefits", "Monthly progress updates", "Input on project direction"],
      color: "bg-purple-500",
      icon: Gift,
      popular: false,
    },
  ]

  const currentSponsors = [
    {
      name: "TechCorp Inc.",
      tier: "Innovation Partner",
      logo: "/assets/uploads/sponsor-1.png",
      website: "https://techcorp.com",
      message: "Supporting the future of AI development",
    },
    {
      name: "John Developer",
      tier: "Code Contributor",
      logo: "/assets/uploads/sponsor-2.png",
      website: null,
      message: "Love the open-source contributions!",
    },
  ]

  const monetizationLinks = {
    patreon: "https://patreon.com/TechWithSrinivas",
    buymeacoffee: "https://buymeacoffee.com/srinivaskv",
    githubSponsors: "https://github.com/sponsors/Srinivas26k",
    paypal: "https://paypal.me/srinivaskv",
  }

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Support My Work</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Help me continue building amazing AI tools, creating educational content, and contributing to open-source
            projects. Your support makes a real difference!
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {sponsorTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <Card
                className={`bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full ${tier.popular ? "ring-2 ring-orange-500/50" : ""}`}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-full ${tier.color}/20 mb-6`}>
                    <tier.icon className={`h-8 w-8 text-white`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-purple-300 mb-4">
                    {tier.amount}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <ul className="space-y-2 mb-8">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <Heart className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${tier.color} hover:opacity-90`}>
                    <a href={monetizationLinks.patreon} target="_blank" rel="noopener noreferrer">
                      Become a Sponsor
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Sponsors */}
        {currentSponsors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Amazing Sponsors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {currentSponsors.map((sponsor, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
                  <CardContent className="p-0 flex items-center">
                    <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden bg-slate-700">
                      <Image
                        src={sponsor.logo || "/placeholder.svg?height=64&width=64"}
                        alt={sponsor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{sponsor.name}</h4>
                      <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                        {sponsor.tier}
                      </Badge>
                      <p className="text-gray-400 text-sm">{sponsor.message}</p>
                      {sponsor.website && (
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 text-sm"
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quick Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Quick Support Options</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <a
                href={monetizationLinks.patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Heart className="mr-2 h-5 w-5" />
                Patreon
              </a>
            </Button>
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
              <a
                href={monetizationLinks.buymeacoffee}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Buy Me a Coffee
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-400/10">
              <a
                href={monetizationLinks.githubSponsors}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Star className="mr-2 h-5 w-5" />
                GitHub Sponsors
              </a>
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a
                href={monetizationLinks.paypal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                PayPal
              </a>
            </Button>
          </div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Every contribution, no matter the size, helps me dedicate more time to creating valuable content, building
            useful tools, and sharing knowledge with the community. Thank you for your support! 🙏
          </p>
        </motion.div>
      </div>
    </section>
  )
}
