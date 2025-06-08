"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample blog posts - in a real app, this would come from a CMS or markdown files
  const blogPosts = [
    {
      id: 1,
      title: "Building AI Agents That Think Like Humans",
      excerpt:
        "Exploring the principles of human-like reasoning in AI systems and how to implement them in practical applications.",
      content: "Full article content would go here...",
      author: "Srinivas Nampalli",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "Automation"],
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "From Mechanical to Digital: My Engineering Journey",
      excerpt:
        "How transitioning from mechanical engineering to AI opened new perspectives on problem-solving and system design.",
      content: "Full article content would go here...",
      author: "Srinivas Nampalli",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Career", "Engineering", "Personal"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Prompt Engineering: The Art of AI Communication",
      excerpt:
        "Deep dive into effective prompt engineering techniques for getting the best results from language models.",
      content: "Full article content would go here...",
      author: "Srinivas Nampalli",
      date: "2024-01-05",
      readTime: "12 min read",
      tags: ["AI", "Prompt Engineering", "LLM"],
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 4,
      title: "Building RAG Pipelines for Production",
      excerpt:
        "A comprehensive guide to implementing Retrieval-Augmented Generation systems that scale in production environments.",
      content: "Full article content would go here...",
      author: "Srinivas Nampalli",
      date: "2023-12-28",
      readTime: "15 min read",
      tags: ["AI", "RAG", "Production", "Architecture"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "Rust + Tauri: The Future of Desktop Apps",
      excerpt:
        "Why Rust and Tauri are becoming the go-to stack for building fast, secure, and lightweight desktop applications.",
      content: "Full article content would go here...",
      author: "Srinivas Nampalli",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Rust", "Tauri", "Desktop Apps", "Performance"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Automation in the Age of AI",
      excerpt:
        "How AI is transforming traditional automation and what it means for the future of work and productivity.",
      content: "Full article content would go here...",
      author: "Srinivas Nampalli",
      date: "2023-12-15",
      readTime: "7 min read",
      tags: ["Automation", "AI", "Future of Work"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 4)

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Blog</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Thoughts on AI, automation, engineering, and the future of technology. Sharing insights from building
            intelligent systems and solving real-world problems.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
            />
          </div>
        </motion.div>

        {/* Featured Posts */}
        {!searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-purple-600 text-white">Featured</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="h-4 w-4 ml-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="border-purple-400/30 text-purple-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-400/10">
                          <Link href={`/blog/${post.id}`} className="flex items-center">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts / Search Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            {searchTerm ? `Search Results (${filteredPosts.length})` : "Recent Articles"}
          </h2>

          {filteredPosts.length === 0 ? (
            <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
              <CardContent>
                <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                <Button
                  variant="outline"
                  onClick={() => setSearchTerm("")}
                  className="mt-4 border-purple-400 text-purple-200 hover:bg-purple-400/10"
                >
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="h-4 w-4 ml-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="outline" className="border-purple-400/30 text-purple-300 text-xs">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-400 text-purple-200 hover:bg-purple-400/10 w-full"
                        >
                          <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Coming Soon Notice */}
        {!searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-purple-800/20 to-cyan-800/20 border-purple-500/30 p-8 text-center">
              <CardContent>
                <h3 className="text-2xl font-bold text-white mb-4">More Content Coming Soon</h3>
                <p className="text-gray-300 mb-6">
                  I'm actively working on new articles about AI, automation, and engineering. Subscribe to stay updated
                  with the latest insights and tutorials.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Subscribe for Updates</Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
