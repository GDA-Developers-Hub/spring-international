"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProficiencyPage() {
  const exams = [
    {
      title: "IELTS Preparation",
      description:
        "Ideal for those seeking higher education or professional registration in English-speaking countries.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/proficiency/ielts",
      features: [
        "Comprehensive coverage of all four skills: Reading, Writing, Listening, and Speaking",
        "Practice with authentic test materials",
        "Personalized feedback from experienced instructors",
        "Regular mock tests to track progress",
      ],
    },
    {
      title: "TOEFL Preparation",
      description: "This course is advanced and recognized for academic admissions in the United States and globally.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/proficiency/toefl",
      features: [
        "Focused training on academic English skills",
        "Computer-based test practice",
        "Strategic approaches to each test section",
        "Vocabulary building for academic contexts",
      ],
    },
    {
      title: "PTE Preparation",
      description: "Accepted by universities worldwide and used for visa applications in Australia and New Zealand.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/proficiency/pte",
      features: [
        "Computer-based test strategies",
        "Real-time scoring and feedback",
        "Focus on integrated skills assessment",
        "Time management techniques",
      ],
    },
    {
      title: "GRE Preparation",
      description: "Essential for graduate school applicants who need to show a range of English skills.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/proficiency/gre",
      features: [
        "Verbal reasoning strategies",
        "Analytical writing techniques",
        "Quantitative reasoning approaches",
        "Advanced vocabulary building",
      ],
    },
    {
      title: "SAT Preparation",
      description: "Critical for college admissions in the United States of America.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/proficiency/sat",
      features: [
        "Evidence-based reading and writing practice",
        "Math section strategies",
        "Essay writing techniques",
        "Test-taking strategies and time management",
      ],
    },
    {
      title: "TOEIC, OET, and DUOLINGO",
      description: "Specialized exams catering to professional needs and newer digital formats.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/proficiency/other",
      features: [
        "Profession-specific language training (OET)",
        "Business English focus (TOEIC)",
        "Digital test format strategies (DUOLINGO)",
        "Customized preparation based on test requirements",
      ],
    },
  ]

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Language Proficiency Exams</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Prepare for international language certifications with our specialized exam preparation courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exams Overview Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0046ad]"
          >
            Our Exam Preparation Programs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exams.map((exam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                      <Image src={exam.image || "/placeholder.svg"} alt={exam.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6 bg-white md:w-2/3">
                      <h3 className="text-xl font-bold mb-3 text-[#0046ad]">{exam.title}</h3>
                      <p className="text-gray-600 mb-4">{exam.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {exam.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        variant="outline"
                        className="border-[#0046ad] text-[#0046ad] hover:bg-[#0046ad] hover:text-white transition-colors"
                        asChild
                      >
                        <Link href={exam.href}>
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Why Choose Our Exam Preparation?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized approach ensures you achieve your target scores and gain the confidence needed for
              success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from certified teachers with extensive experience in exam preparation and high success rates.",
              },
              {
                title: "Comprehensive Materials",
                description:
                  "Access up-to-date study materials, practice tests, and resources designed specifically for each exam.",
              },
              {
                title: "Personalized Approach",
                description:
                  "Receive individualized attention and feedback to address your specific strengths and areas for improvement.",
              },
              {
                title: "Proven Methodology",
                description:
                  "Follow a structured curriculum that covers all exam components and proven test-taking strategies.",
              },
              {
                title: "Regular Progress Tracking",
                description: "Monitor your improvement through regular mock tests and detailed performance analysis.",
              },
              {
                title: "Flexible Scheduling",
                description:
                  "Choose from various course formats including intensive, regular, weekend, and private classes.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-3 text-[#0046ad]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our students consistently achieve their target scores and gain admission to prestigious institutions
              worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah K.",
                exam: "IELTS",
                score: "Band 7.5",
                testimonial:
                  "The structured approach and mock tests were invaluable. I achieved my target score on the first attempt!",
              },
              {
                name: "David M.",
                exam: "TOEFL",
                score: "112/120",
                testimonial:
                  "The instructors provided personalized feedback that helped me improve my weakest areas. Highly recommended!",
              },
              {
                name: "Amina H.",
                exam: "GRE",
                score: "325/340",
                testimonial:
                  "The vocabulary building techniques and analytical writing strategies were game-changers for my GRE preparation.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0046ad]/10 rounded-full flex items-center justify-center text-[#0046ad] font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-800">{story.name}</h3>
                    <p className="text-sm text-gray-600">
                      {story.exam} - {story.score}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{story.testimonial}"</p>
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
            Ready to Achieve Your Target Score?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll in our exam preparation courses and take the first step toward your academic and professional goals.
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
