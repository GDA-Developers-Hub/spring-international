"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Learning a Second Language in Today's Global Economy",
      excerpt:
        "Discover how mastering a new language can open doors to career opportunities and personal growth in an increasingly connected world.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 15, 2023",
      author: "Dr. Sarah Kimani",
      readTime: "5 min read",
      category: "Career Development",
    },
    {
      id: 2,
      title: "Effective Study Techniques for Language Learners",
      excerpt: "Explore proven methods to enhance your language learning process and achieve fluency faster.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 28, 2023",
      author: "Prof. David Ochieng",
      readTime: "7 min read",
      category: "Learning Tips",
    },
    {
      id: 3,
      title: "Cultural Immersion: The Key to Language Mastery",
      excerpt: "Learn how understanding cultural context can significantly improve your language acquisition journey.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 10, 2023",
      author: "Ms. Amina Hassan",
      readTime: "6 min read",
      category: "Cultural Insights",
    },
    {
      id: 4,
      title: "Preparing for IELTS: A Comprehensive Guide",
      excerpt: "Essential strategies and tips to help you achieve your target score on the IELTS exam.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 22, 2023",
      author: "Mr. John Mwangi",
      readTime: "8 min read",
      category: "Exam Preparation",
    },
    {
      id: 5,
      title: "The Evolution of Language Learning: From Textbooks to Apps",
      excerpt:
        "How technology has transformed the way we learn languages and what it means for modern language students.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 5, 2023",
      author: "Dr. Sarah Kimani",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      id: 6,
      title: "Multilingualism in Africa: Challenges and Opportunities",
      excerpt: "Exploring the rich linguistic landscape of Africa and its implications for education and society.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 18, 2023",
      author: "Prof. David Ochieng",
      readTime: "9 min read",
      category: "Regional Focus",
    },
  ]

  const categories = [
    "All Categories",
    "Career Development",
    "Learning Tips",
    "Cultural Insights",
    "Exam Preparation",
    "Technology",
    "Regional Focus",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-[#0046ad] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Language Academy Blog</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Insights, tips, and resources to enhance your language learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Search and Filter Section */}
      <section className="py-8 px-4 md:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 border-gray-300 rounded-md w-full"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

            <div className="w-full md:w-2/3 overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                      index === 0 ? "bg-[#0046ad] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#f5b100] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[#0046ad]">{post.title}</h3>

                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <Link
                      href={`/blogs/${post.id}`}
                      className="text-[#0046ad] font-medium flex items-center hover:text-[#0067ff] transition-colors"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="border-[#0046ad] text-[#0046ad] hover:bg-[#0046ad] hover:text-white transition-colors"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#0046ad]">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest articles, language learning tips, and exclusive offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-grow" />
              <Button className="bg-[#0046ad] hover:bg-[#0067ff]">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
