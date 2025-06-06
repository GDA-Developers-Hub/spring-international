"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Award, BookOpen, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function IELTSPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">IELTS Preparation Course</h1>
              <p className="text-xl max-w-3xl mb-8">
                Achieve your target band score with our comprehensive IELTS preparation program designed by expert
                instructors.
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
                  alt="IELTS Preparation"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#0046ad] font-bold">Next Batch Starts</p>
                      <p className="text-gray-700">June 15, 2023</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-[#0046ad] font-bold">Duration</p>
                      <p className="text-gray-700">8 Weeks</p>
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

      {/* About IELTS Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">About IELTS Exam</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The International English Language Testing System (IELTS) is designed to assess the language ability of
              candidates who need to study or work where English is the language of communication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Why Take IELTS?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Global Recognition</h4>
                    <p className="text-gray-600">
                      IELTS is recognized by over 11,000 organizations worldwide, including universities, employers,
                      professional bodies, and immigration authorities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Immigration Requirements</h4>
                    <p className="text-gray-600">
                      Many countries require IELTS for visa applications, including the UK, Australia, Canada, and New
                      Zealand.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Academic Advancement</h4>
                    <p className="text-gray-600">
                      Universities and colleges in many countries require IELTS as part of their admission requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Professional Registration</h4>
                    <p className="text-gray-600">
                      Many professional registration bodies require an IELTS score for practice in English-speaking
                      countries.
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
                  <h4 className="font-bold text-gray-800 mb-2">Listening (30 minutes)</h4>
                  <p className="text-gray-600">
                    Four recorded monologues and conversations with 40 questions to test your listening comprehension.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Reading (60 minutes)</h4>
                  <p className="text-gray-600">
                    Three long reading passages with 40 questions designed to test a wide range of reading skills.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Writing (60 minutes)</h4>
                  <p className="text-gray-600">
                    Two tasks: Task 1 requires you to describe visual information, and Task 2 requires an essay response
                    to an argument.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Speaking (11-14 minutes)</h4>
                  <p className="text-gray-600">
                    A face-to-face interview with an examiner, consisting of three parts to test your speaking
                    abilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our IELTS Course Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Our IELTS Preparation Course</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive IELTS preparation course is designed to help you achieve your target band score through
              personalized instruction and extensive practice.
            </p>
          </motion.div>

          <Tabs defaultValue="academic" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="academic" className="text-base py-3">
                IELTS Academic
              </TabsTrigger>
              <TabsTrigger value="general" className="text-base py-3">
                IELTS General Training
              </TabsTrigger>
            </TabsList>
            <TabsContent value="academic">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Calendar className="h-10 w-10 text-[#0046ad]" />,
                    title: "Course Duration",
                    description: "8 weeks (80 hours) of intensive training with flexible scheduling options.",
                  },
                  {
                    icon: <Clock className="h-10 w-10 text-[#0046ad]" />,
                    title: "Class Schedule",
                    description: "Weekday and weekend batches available to suit your convenience.",
                  },
                  {
                    icon: <Users className="h-10 w-10 text-[#0046ad]" />,
                    title: "Class Size",
                    description: "Small batch sizes (max 12 students) for personalized attention.",
                  },
                  {
                    icon: <Award className="h-10 w-10 text-[#0046ad]" />,
                    title: "Expert Instructors",
                    description: "Learn from certified IELTS trainers with proven track records.",
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
            </TabsContent>
            <TabsContent value="general">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Calendar className="h-10 w-10 text-[#0046ad]" />,
                    title: "Course Duration",
                    description: "6 weeks (60 hours) of focused training with flexible scheduling options.",
                  },
                  {
                    icon: <Clock className="h-10 w-10 text-[#0046ad]" />,
                    title: "Class Schedule",
                    description: "Weekday and weekend batches available to suit your convenience.",
                  },
                  {
                    icon: <Users className="h-10 w-10 text-[#0046ad]" />,
                    title: "Class Size",
                    description: "Small batch sizes (max 12 students) for personalized attention.",
                  },
                  {
                    icon: <Award className="h-10 w-10 text-[#0046ad]" />,
                    title: "Expert Instructors",
                    description: "Learn from certified IELTS trainers with proven track records.",
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
            </TabsContent>
          </Tabs>
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
              Our structured curriculum covers all aspects of the IELTS exam to ensure you're fully prepared.
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
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Listening Module</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Note-taking techniques for different question types</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Strategies for identifying key information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Practice with various accents and speech patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Time management during the listening test</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Reading Module</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Skimming and scanning techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Identifying main ideas and supporting details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Strategies for different question types</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Vocabulary building for academic and general texts</span>
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
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Writing Module</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Task 1: Describing graphs, charts, and processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Task 2: Essay structure and development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Grammar and vocabulary for academic writing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Common mistakes and how to avoid them</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">Speaking Module</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Part 1: Introduction and interview techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Part 2: Long turn speaking strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Part 3: Discussion skills and critical thinking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Pronunciation, fluency, and coherence development</span>
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
              Our students consistently achieve their target band scores and gain admission to prestigious institutions
              worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah K.",
                score: "Band 7.5",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "The structured approach and mock tests were invaluable. I achieved my target score on the first attempt and secured admission to my dream university in the UK!",
                university: "University of Manchester",
              },
              {
                name: "David M.",
                score: "Band 8.0",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "The instructors provided personalized feedback that helped me improve my weakest areas. Their strategies for the writing section were game-changers!",
                university: "University of Sydney",
              },
              {
                name: "Amina H.",
                score: "Band 7.0",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "I was struggling with the speaking module, but the intensive practice sessions and expert guidance helped me overcome my nervousness and achieve my target score.",
                university: "University of Toronto",
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
                    <p className="text-[#0046ad] font-medium">IELTS Score: {story.score}</p>
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
                price: "KSh 35,000",
                features: [
                  "8-week course (80 hours)",
                  "Comprehensive study materials",
                  "4 full-length mock tests",
                  "Regular homework and assignments",
                  "Access to online resources",
                  "Group classes (max 12 students)",
                ],
                recommended: false,
              },
              {
                title: "Premium Package",
                price: "KSh 45,000",
                features: [
                  "8-week course (80 hours)",
                  "Comprehensive study materials",
                  "8 full-length mock tests",
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
                price: "KSh 60,000",
                features: [
                  "8-week course (100 hours)",
                  "Comprehensive study materials",
                  "12 full-length mock tests",
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
              Find answers to common questions about our IELTS preparation course.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to prepare for IELTS?",
                answer:
                  "The preparation time varies depending on your current English proficiency level and target band score. Our standard course is 8 weeks long, which is sufficient for most students to see significant improvement. However, some students may require more or less time based on their individual needs.",
              },
              {
                question: "Do you offer a guarantee for achieving a specific band score?",
                answer:
                  "While we cannot guarantee specific band scores as the final result depends on various factors including your starting level and dedication, we do guarantee a structured approach to preparation that has helped thousands of students achieve their target scores. Our track record shows that students who complete our course and follow our guidance typically improve by 1-1.5 bands.",
              },
              {
                question: "Can I switch between online and in-person classes?",
                answer:
                  "Yes, we offer a flexible hybrid model that allows students to attend classes either online or in-person based on their convenience. You can switch between the two modes with prior notification to our administrative team.",
              },
              {
                question: "What happens if I miss a class?",
                answer:
                  "We understand that sometimes missing a class is unavoidable. All our classes are recorded and made available to enrolled students. Additionally, you can schedule a short catch-up session with an instructor to cover any important points you missed.",
              },
              {
                question: "How are the mock tests conducted?",
                answer:
                  "Our mock tests simulate the actual IELTS exam environment. For the Listening, Reading, and Writing modules, you'll take the test under timed conditions at our center or online with proctoring. The Speaking module is conducted one-on-one with an instructor who is trained in IELTS assessment. After each mock test, you'll receive detailed feedback and a band score estimate.",
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
            Ready to Achieve Your Target IELTS Score?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll in our IELTS preparation course today and take the first step toward your academic and professional
            goals.
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
