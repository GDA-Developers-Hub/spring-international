"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Award, BookOpen, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PTEPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">PTE Academic Preparation Course</h1>
              <p className="text-xl max-w-3xl mb-8">
                Master the Pearson Test of English Academic with our comprehensive preparation program designed by
                expert instructors.
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
                  src="/placeholder.svg?height=800&width=600"
                  alt="PTE Preparation"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#0046ad] font-bold">Next Batch Starts</p>
                      <p className="text-gray-700">June 25, 2023</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-[#0046ad] font-bold">Duration</p>
                      <p className="text-gray-700">4 Weeks</p>
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

      {/* About PTE Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">About PTE Academic</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Pearson Test of English Academic (PTE Academic) is a computer-based English language test that
              assesses the speaking, writing, reading and listening abilities of non-native English speakers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Why Take PTE Academic?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Fast Results</h4>
                    <p className="text-gray-600">
                      Typically available within 48 hours, allowing for quick application submissions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Global Recognition</h4>
                    <p className="text-gray-600">
                      Accepted by thousands of institutions worldwide, including universities, colleges, and government
                      agencies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Objective Scoring</h4>
                    <p className="text-gray-600">
                      Computer-based scoring ensures unbiased assessment of your English skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Visa Applications</h4>
                    <p className="text-gray-600">
                      Accepted for visa applications to Australia, New Zealand, and other countries.
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
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Exam Format</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Speaking & Writing (77-93 minutes)</h4>
                  <p className="text-gray-600">
                    Personal introduction, read aloud, repeat sentence, describe image, re-tell lecture, answer short
                    questions, summarize written text, and essay writing.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Reading (32-41 minutes)</h4>
                  <p className="text-gray-600">
                    Fill in the blanks, multiple-choice questions, re-order paragraphs, and reading & writing fill in
                    the blanks.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Listening (45-57 minutes)</h4>
                  <p className="text-gray-600">
                    Summarize spoken text, multiple-choice questions, fill in the blanks, highlight correct summary,
                    select missing word, highlight incorrect words, and write from dictation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our PTE Course Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Our PTE Academic Preparation Course</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive PTE preparation course is designed to help you achieve your target score through
              personalized instruction and extensive practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-[#0046ad]" />,
                title: "Course Duration",
                description: "4 weeks (40 hours) of intensive training with flexible scheduling options.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#0046ad]" />,
                title: "Class Schedule",
                description: "Weekday and weekend batches available to suit your convenience.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#0046ad]" />,
                title: "Class Size",
                description: "Small batch sizes (max 10 students) for personalized attention.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#0046ad]" />,
                title: "Expert Instructors",
                description: "Learn from certified PTE trainers with proven track records.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-[#0046ad]" />,
                title: "Study Materials",
                description: "Comprehensive study materials and practice tests included.",
              },
              {
                icon: <Target className="h-10 w-10 text-[#0046ad]" />,
                title: "Mock Tests",
                description: "Regular mock tests with detailed feedback and performance analysis.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#0046ad]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Course Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured curriculum covers all aspects of the PTE Academic exam to ensure you're fully prepared.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Speaking & Writing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Techniques for clear pronunciation and fluency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Strategies for describing images effectively</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Methods for summarizing written and spoken text</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Essay writing structure and development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Reading</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Techniques for quickly identifying key information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Strategies for re-ordering paragraphs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Methods for filling in the blanks accurately</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Vocabulary building for academic contexts</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Listening</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Note-taking strategies for spoken summaries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Techniques for identifying correct and incorrect information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Methods for writing from dictation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Practice with various accents and speech patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Test-Taking Strategies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Time management techniques for each section</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Computer-based test navigation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Methods for eliminating incorrect answers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Stress management and confidence building</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
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
                name: "Emily W.",
                score: "85/90",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "The PTE-specific strategies taught in this course were exactly what I needed. I achieved my target score on the first attempt and secured admission to my dream university in Australia!",
                university: "University of Melbourne",
              },
              {
                name: "Raj P.",
                score: "82/90",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "The instructors provided personalized feedback that helped me improve my weakest areas. Their strategies for the speaking section were game-changers!",
                university: "University of Auckland",
              },
              {
                name: "Sofia L.",
                score: "79/90",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "I was struggling with the describe image task, but the intensive practice sessions and expert guidance helped me overcome my challenges and achieve my target score.",
                university: "RMIT University",
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
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{story.name}</h3>
                    <p className="text-[#0046ad] font-medium">PTE Score: {story.score}</p>
                    <p className="text-sm text-gray-600">{story.university}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{story.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Course Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that best suits your learning needs and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Package",
                price: "KSh 25,000",
                features: [
                  "4-week course (40 hours)",
                  "Comprehensive study materials",
                  "3 full-length mock tests",
                  "Regular homework and assignments",
                  "Access to online resources",
                  "Group classes (max 10 students)",
                ],
                recommended: false,
              },
              {
                title: "Premium Package",
                price: "KSh 35,000",
                features: [
                  "4-week course (40 hours)",
                  "Comprehensive study materials",
                  "5 full-length mock tests",
                  "Regular homework and assignments",
                  "Access to online resources",
                  "Group classes (max 8 students)",
                  "2 one-on-one coaching sessions",
                  "Extended access to online resources",
                ],
                recommended: true,
              },
              {
                title: "Intensive Package",
                price: "KSh 45,000",
                features: [
                  "4-week course (50 hours)",
                  "Comprehensive study materials",
                  "8 full-length mock tests",
                  "Regular homework and assignments",
                  "Unlimited access to online resources",
                  "Small group classes (max 6 students)",
                  "4 one-on-one coaching sessions",
                  "Personalized study plan",
                  "Post-course support",
                ],
                recommended: false,
              },
            ].map((package_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-6 rounded-xl shadow-md border ${
                  package_.recommended ? "border-[#0046ad]" : "border-gray-100"
                } relative`}
              >
                {package_.recommended && (
                  <div className="absolute top-0 right-0 bg-[#0046ad] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-[#0046ad]">{package_.title}</h3>
                <p className="text-3xl font-bold mb-6">{package_.price}</p>
                <ul className="space-y-2 mb-8">
                  {package_.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    package_.recommended
                      ? "bg-[#0046ad] hover:bg-[#0046ad]/90"
                      : "bg-gray-100 text-[#0046ad] hover:bg-gray-200"
                  }`}
                  asChild
                >
                  <Link href="/contact-us">Enroll Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our PTE Academic preparation course.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to prepare for PTE Academic?",
                answer:
                  "The preparation time varies depending on your current English proficiency level and target score. Our standard course is 4 weeks long, which is sufficient for most students to see significant improvement. However, some students may require more or less time based on their individual needs.",
              },
              {
                question: "What's the difference between PTE and other English tests?",
                answer:
                  "PTE Academic is a computer-based test with AI scoring, which eliminates human bias. It offers faster results (typically within 48 hours) compared to other tests. PTE is widely accepted for university admissions and visa applications, particularly for Australia and New Zealand.",
              },
              {
                question: "Can I switch between online and in-person classes?",
                answer:
                  "Yes, we offer a flexible hybrid model that allows students to attend classes either online or in-person based on their convenience. You can switch between the two modes with prior notification to our administrative team.",
              },
              {
                question: "How are the mock tests conducted?",
                answer:
                  "Our mock tests simulate the actual PTE Academic exam environment. You'll take the test on a computer under timed conditions, either at our center or online with proctoring. After each mock test, you'll receive detailed feedback and a score estimate for each section.",
              },
              {
                question: "Do you provide assistance with visa applications?",
                answer:
                  "Yes, we offer additional services to help students with their visa applications, including guidance on selecting the right visa category, preparing application documents, and understanding the English language requirements. These services are available at an additional cost and can be discussed with our counselors.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold mb-2 text-[#0046ad]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
            Ready to Achieve Your Target PTE Score?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll in our PTE Academic preparation course today and take the first step toward your academic and
            professional goals.
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
