"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArabicCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-r from-[#0046ad] to-[#0067ff] text-white overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Arabic Language Courses</h1>
              <p className="text-xl max-w-3xl mb-8">
                Master Arabic, a language rich in history and significance, to unlock the potential of the Middle East
                and connect with over 400 million speakers worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#f5b100] hover:bg-[#f5b100]/90 text-white rounded-full px-8" asChild>
                  <Link href="/contact-us">
                    Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8"
                >
                  Download Brochure
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581872151274-8ede2d7c8c8e?q=80&w=800&auto=format&fit=crop"
                  alt="Arabic Language Course"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#0046ad] font-bold">Next Batch Starts</p>
                      <p className="text-gray-700">June 20, 2023</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-[#0046ad] font-bold">Duration</p>
                      <p className="text-gray-700">16 Weeks</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-[#0046ad] font-bold">Mode</p>
                      <p className="text-gray-700">Online & Offline</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Arabic Course Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">About Our Arabic Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Arabic language programs are designed to help you develop practical communication skills for academic,
              professional, and personal success in an Arabic-speaking environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Why Learn Arabic?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Global Importance</h4>
                    <p className="text-gray-600">
                      Arabic is the fifth most spoken language worldwide and an official language in 26 countries across
                      the Middle East and North Africa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Career Opportunities</h4>
                    <p className="text-gray-600">
                      Arabic speakers are in high demand in fields like international relations, diplomacy, journalism,
                      business, and security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Cultural Heritage</h4>
                    <p className="text-gray-600">
                      Access a rich cultural and literary tradition spanning over 1,500 years, including poetry,
                      philosophy, and scientific texts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Religious Significance</h4>
                    <p className="text-gray-600">
                      Arabic is the language of the Quran and essential for deeper understanding of Islamic texts and
                      traditions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Course Highlights</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Comprehensive Curriculum</h4>
                  <p className="text-gray-600">
                    Our courses cover Modern Standard Arabic (MSA) and introduce regional dialects, with focus on all
                    language skills.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Native-Speaking Teachers</h4>
                  <p className="text-gray-600">
                    Learn from qualified instructors who provide authentic pronunciation and cultural insights.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600">
                    Experience Arabic culture through music, film, literature, and culinary activities integrated into
                    the curriculum.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Script Mastery</h4>
                  <p className="text-gray-600">
                    Special focus on mastering the Arabic script with calligraphy workshops and practical writing
                    exercises.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Levels Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Course Levels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer courses for all proficiency levels, from complete beginners to advanced speakers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "Beginner (A1)",
                description:
                  "For students with no prior knowledge of Arabic. Learn the alphabet, basic vocabulary, simple grammar, and everyday expressions.",
                duration: "16 weeks",
                topics: [
                  "Arabic alphabet and script",
                  "Basic vocabulary for daily life",
                  "Simple sentence structures",
                  "Numbers, colors, and time",
                ],
              },
              {
                level: "Elementary (A2)",
                description:
                  "Build on basic knowledge to construct simple sentences and engage in everyday conversations.",
                duration: "16 weeks",
                topics: [
                  "Past and present tenses",
                  "Shopping and travel vocabulary",
                  "Asking and answering questions",
                  "Writing short messages",
                ],
              },
              {
                level: "Intermediate (B1-B2)",
                description:
                  "Develop fluency and express opinions on a variety of topics with increased vocabulary and grammar.",
                duration: "16 weeks",
                topics: [
                  "Complex grammar structures",
                  "Discussion of current events",
                  "Professional communication",
                  "Reading and summarizing articles",
                ],
              },
              {
                level: "Advanced (C1-C2)",
                description:
                  "Refine your skills to near-native proficiency, focusing on nuance, idioms, and cultural context.",
                duration: "16 weeks",
                topics: [
                  "Advanced vocabulary and idioms",
                  "Academic writing and presentations",
                  "Debate and persuasive speaking",
                  "Literature and cultural studies",
                ],
              },
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#0046ad] font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0046ad]">{level.level}</h3>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-[#0046ad] px-3 py-1 rounded-full text-sm font-medium">
                    {level.duration}
                  </span>
                </div>
                <h4 className="font-bold text-gray-700 mb-2">Key Topics:</h4>
                <ul className="space-y-1">
                  {level.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
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
            Ready to Start Your Arabic Language Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll in our Arabic language courses today and open doors to new cultures, opportunities, and experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
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
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8 text-lg"
              asChild
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
