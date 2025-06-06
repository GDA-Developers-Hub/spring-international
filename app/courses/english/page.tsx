"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, BookOpen, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnglishCoursePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">English Language Courses</h1>
              <p className="text-xl max-w-3xl mb-8">
                Enhance your communication skills with our structured English programs. From beginner to advanced
                levels, we help you become a confident English speaker.
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
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
                  alt="English Language Course"
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
                      <p className="text-gray-700">12 Weeks</p>
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

      {/* About English Course Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">About Our English Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our English language programs are designed to help you develop practical communication skills for
              academic, professional, and personal success in an English-speaking environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Why Learn English?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Global Communication</h4>
                    <p className="text-gray-600">
                      English is the most widely spoken language in the world, making it essential for international
                      communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Career Advancement</h4>
                    <p className="text-gray-600">
                      Proficiency in English opens doors to better job opportunities and career growth in multinational
                      companies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Academic Success</h4>
                    <p className="text-gray-600">
                      English is the primary language of instruction in many prestigious educational institutions
                      worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Access to Information</h4>
                    <p className="text-gray-600">
                      Most of the content on the internet and academic research is published in English, giving you
                      access to a wealth of information.
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
                    Our courses cover all language skills: speaking, listening, reading, and writing, with a focus on
                    practical communication.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Native-Speaking Teachers</h4>
                  <p className="text-gray-600">
                    Learn from qualified instructors who provide authentic pronunciation and cultural insights.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Small Class Sizes</h4>
                  <p className="text-gray-600">
                    Enjoy personalized attention with maximum 12 students per class, ensuring ample speaking practice.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Modern Teaching Methods</h4>
                  <p className="text-gray-600">
                    Experience interactive lessons using the latest communicative language teaching approaches.
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
                  "For students with no prior knowledge of English. Learn basic vocabulary, simple grammar, and everyday expressions.",
                duration: "12 weeks",
                topics: [
                  "Introductions and greetings",
                  "Basic vocabulary for daily life",
                  "Simple present tense",
                  "Numbers, colors, and time",
                ],
              },
              {
                level: "Elementary (A2)",
                description:
                  "Build on basic knowledge to construct simple sentences and engage in everyday conversations.",
                duration: "12 weeks",
                topics: [
                  "Past and future tenses",
                  "Shopping and travel vocabulary",
                  "Asking and answering questions",
                  "Writing short messages and emails",
                ],
              },
              {
                level: "Intermediate (B1-B2)",
                description:
                  "Develop fluency and express opinions on a variety of topics with increased vocabulary and grammar.",
                duration: "12 weeks",
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
                duration: "12 weeks",
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

      {/* Special Programs Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Specialized English Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In addition to our general English courses, we offer specialized programs tailored to specific needs and
              goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business English",
                description:
                  "Develop the language skills needed for professional environments, including meetings, presentations, negotiations, and business correspondence.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop",
                features: [
                  "Professional vocabulary and terminology",
                  "Business writing (emails, reports, proposals)",
                  "Presentation and negotiation skills",
                  "Cross-cultural business communication",
                ],
              },
              {
                title: "Academic English",
                description:
                  "Prepare for success in English-speaking academic environments with a focus on research, essay writing, presentations, and critical thinking.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
                features: [
                  "Academic writing and citation",
                  "Research and note-taking skills",
                  "Seminar and discussion techniques",
                  "Critical reading of academic texts",
                ],
              },
              {
                title: "Conversation & Pronunciation",
                description:
                  "Focus specifically on improving your speaking fluency, pronunciation, and listening comprehension for confident real-world communication.",
                image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
                features: [
                  "Pronunciation and accent reduction",
                  "Fluency development through discussion",
                  "Idiomatic expressions and slang",
                  "Active listening strategies",
                ],
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <h4 className="font-bold text-gray-700 mb-2">Program Highlights:</h4>
                  <ul className="space-y-1 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-[#0046ad] text-[#0046ad] hover:bg-[#0046ad] hover:text-white"
                    asChild
                  >
                    <Link href="/contact-us">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0046ad]">Our Teaching Methodology</h2>
              <p className="text-gray-600 mb-6">
                At Language Academy, we believe in a communicative approach to language learning that emphasizes
                practical usage and real-world application. Our methodology is designed to make learning English
                engaging, effective, and enjoyable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mt-1 mr-4">
                    <Target className="h-5 w-5 text-[#0046ad]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Immersive Environment</h3>
                    <p className="text-gray-600">
                      Classes are conducted entirely in English to maximize exposure and accelerate learning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mt-1 mr-4">
                    <Users className="h-5 w-5 text-[#0046ad]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Interactive Learning</h3>
                    <p className="text-gray-600">
                      Lessons involve pair work, group discussions, role-plays, and task-based activities to practice
                      language in context.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mt-1 mr-4">
                    <BookOpen className="h-5 w-5 text-[#0046ad]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Integrated Skills</h3>
                    <p className="text-gray-600">
                      Each lesson incorporates speaking, listening, reading, and writing to develop well-rounded
                      proficiency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mt-1 mr-4">
                    <Award className="h-5 w-5 text-[#0046ad]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Continuous Assessment</h3>
                    <p className="text-gray-600">
                      Regular progress checks and feedback ensure you're on track to meet your language goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop"
                  alt="English Class in Session"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Student Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our students who have transformed their English skills and achieved their goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah K.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
                testimonial:
                  "The English course at Language Academy transformed my communication skills completely. I went from being hesitant to speak to confidently giving presentations at work. The instructors are patient and knowledgeable, and the small class sizes ensure personalized attention.",
                achievement: "Secured a position at a multinational company",
              },
              {
                name: "David O.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                testimonial:
                  "I needed to improve my English for university studies abroad. The Academic English program provided exactly what I needed - from essay writing to presentation skills. Thanks to Language Academy, I was accepted into my dream program in the UK!",
                achievement: "Admitted to Master's program in London",
              },
              {
                name: "Amina H.",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
                testimonial:
                  "The Business English course was practical and relevant to my career needs. I learned how to write professional emails, conduct meetings, and negotiate effectively in English. This has opened up new opportunities for advancement in my company.",
                achievement: "Promoted to International Relations Manager",
              },
            ].map((testimonial, index) => (
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
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-[#0046ad] text-sm">{testimonial.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Course Fees</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer competitive pricing with flexible payment options to make quality English education accessible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Program",
                price: "KSh 25,000",
                duration: "12 weeks",
                schedule: "2 classes per week (3 hours each)",
                features: [
                  "Comprehensive course materials",
                  "Regular assessments and feedback",
                  "Access to online resources",
                  "Group classes (max 12 students)",
                  "Certificate upon completion",
                ],
                recommended: false,
              },
              {
                title: "Intensive Program",
                price: "KSh 40,000",
                duration: "8 weeks",
                schedule: "4 classes per week (3 hours each)",
                features: [
                  "Comprehensive course materials",
                  "Regular assessments and feedback",
                  "Access to online resources",
                  "Group classes (max 10 students)",
                  "One-on-one tutoring session (2 hours)",
                  "Certificate upon completion",
                  "Job interview preparation (if needed)",
                ],
                recommended: true,
              },
              {
                title: "Private Lessons",
                price: "KSh 2,500",
                duration: "Per hour",
                schedule: "Flexible scheduling",
                features: [
                  "Personalized curriculum",
                  "One-on-one instruction",
                  "Focus on your specific needs",
                  "Flexible scheduling",
                  "Customized learning materials",
                  "Rapid progress tracking",
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
                <p className="text-3xl font-bold mb-2">{package_.price}</p>
                <div className="flex flex-col gap-1 mb-4 text-sm text-gray-500">
                  <p>{package_.duration}</p>
                  <p>{package_.schedule}</p>
                </div>
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
      <section className="py-16 px-4 md:px-8">
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
              Find answers to common questions about our English language courses.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How do I know which level is right for me?",
                answer:
                  "Before enrolling, all students take a placement test to assess their current English proficiency. This helps us place you in the appropriate level class where you'll be challenged but not overwhelmed.",
              },
              {
                question: "What if I miss a class?",
                answer:
                  "We understand that sometimes missing a class is unavoidable. All our lessons are recorded and made available to enrolled students. Additionally, you can schedule a short catch-up session with an instructor to cover any important points you missed.",
              },
              {
                question: "Do you offer online classes?",
                answer:
                  "Yes, we offer both in-person and online classes for all our English courses. Our online classes provide the same quality instruction with added convenience, using interactive platforms that facilitate engagement and participation.",
              },
              {
                question: "Will I receive a certificate?",
                answer:
                  "Yes, upon successful completion of your course, you will receive a certificate indicating the course level completed and the skills acquired. Our certificates are recognized by many educational institutions and employers.",
              },
              {
                question: "Can I switch levels if the class is too easy or difficult?",
                answer:
                  "Yes, if you find that your assigned level isn't the right fit, you can discuss this with your instructor. We'll reassess your level and move you to a more appropriate class within the first two weeks of the course.",
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
            Ready to Improve Your English Skills?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll in our English language courses today and take the first step toward fluency and confidence.
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
