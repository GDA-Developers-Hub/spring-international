"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CoursesPage() {
  const courses = [
    {
      title: "English Language Courses",
      description:
        "Enhance your communication skills with our structured English programs. From beginner to advanced levels, we help you become a confident English speaker.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop",
      href: "/courses/english",
    },
    {
      title: "French Language Courses",
      description:
        "Achieve fluency in French for personal growth, career advancement, or travel. Our French classes cover grammar, conversation, and cultural immersion.",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=600&auto=format&fit=crop",
      href: "/courses/french",
    },
    {
      title: "Spanish Language Courses",
      description:
        "Speak Spanish like a native! Our Spanish courses are tailored to beginners and advanced learners who want to stand out globally.",
      image: "https://images.unsplash.com/photo-1551649001-7a2482d98d05?q=80&w=600&auto=format&fit=crop",
      href: "/courses/spanish",
    },
    {
      title: "German Language Courses",
      description:
        "Master German with our comprehensive courses designed for all proficiency levels. Open doors to education and career opportunities in German-speaking countries.",
      image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?q=80&w=600&auto=format&fit=crop",
      href: "/courses/german",
    },
    {
      title: "Arabic Language Courses",
      description:
        "Master Arabic, a language rich in history and significance, to unlock the potential of the Middle East.",
      image: "https://images.unsplash.com/photo-1579022092664-e3e2e4b4ea8e?q=80&w=600&auto=format&fit=crop",
      href: "/courses/arabic",
    },
    {
      title: "Swahili Language Courses",
      description:
        "Connect with East Africa through Swahili, a lingua franca that offers expansive communication across African countries.",
      image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=600&auto=format&fit=crop",
      href: "/courses/swahili",
    },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Language Courses</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Discover our wide range of language courses designed to help you achieve fluency and confidence in your
              chosen language.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0046ad]"
          >
            Our Language Programs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 bg-white relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#0046ad]/5 rounded-bl-full -mt-4 -mr-4 z-0"></div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 text-[#0046ad] group-hover:text-[#0067ff] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <Button
                        variant="outline"
                        className="border-[#0046ad] text-[#0046ad] hover:bg-[#0046ad] hover:text-white transition-colors"
                        asChild
                      >
                        <Link href={course.href}>
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Our Course Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our language courses follow a structured approach to ensure effective learning and measurable
              progress.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Beginner Level",
                description: "Build a strong foundation with basic vocabulary, grammar, and simple conversations.",
              },
              {
                title: "Intermediate Level",
                description: "Expand your knowledge with more complex grammar, vocabulary, and conversational skills.",
              },
              {
                title: "Advanced Level",
                description: "Refine your language skills with advanced grammar, idioms, and cultural nuances.",
              },
              {
                title: "Proficiency Level",
                description: "Achieve near-native fluency and prepare for international language certifications.",
              },
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#0046ad]/10 rounded-full flex items-center justify-center mb-4 text-[#0046ad] font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0046ad]">{level.title}</h3>
                <p className="text-gray-600">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-[#0046ad] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Language Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll today and take the first step towards mastering a new language.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[#f5b100] hover:bg-[#f5b100]/90 text-white rounded-full px-8 text-lg"
              asChild
            >
              <Link href="/contact-us">
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
