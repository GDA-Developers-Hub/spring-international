"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, BookOpen, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import methodology from "@/public/methodology.png"

export default function FrenchCoursePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">French Language Courses</h1>
              <p className="text-xl max-w-3xl mb-8">
                Achieve fluency in French for personal growth, career advancement, or travel. Our French classes cover
                grammar, conversation, and cultural immersion.
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
                  src="https://images.unsplash.com/photo-1505902987837-9e40ec37e607?q=80&w=800&auto=format&fit=crop"
                  alt="French Language Course"
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

      {/* About French Course Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">About Our French Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our French language programs are designed to help you develop practical communication skills for academic,
              professional, and personal success in a French-speaking environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Why Learn French?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Global Language</h4>
                    <p className="text-gray-600">
                      French is spoken by over 300 million people worldwide and is an official language in 29 countries
                      across five continents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Career Opportunities</h4>
                    <p className="text-gray-600">
                      French is a working language of major international organizations, opening doors to careers in
                      diplomacy, international relations, and global business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Cultural Richness</h4>
                    <p className="text-gray-600">
                      Access French literature, cinema, art, and cuisine in their original form, enriching your cultural
                      understanding and appreciation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Travel Enhancement</h4>
                    <p className="text-gray-600">
                      Enhance your travel experiences in France, Canada, Switzerland, Belgium, and numerous African
                      countries where French is widely spoken.
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
                  <h4 className="font-bold text-gray-800 mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600">
                    Experience French culture through music, film, literature, and culinary activities integrated into
                    the curriculum.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">DELF/DALF Preparation</h4>
                  <p className="text-gray-600">
                    Our courses align with the Common European Framework of Reference (CEFR) and prepare you for
                    official French proficiency exams.
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
                  "For students with no prior knowledge of French. Learn basic vocabulary, simple grammar, and everyday expressions.",
                duration: "12 weeks",
                topics: [
                  "Introductions and greetings",
                  "Basic vocabulary for daily life",
                  "Present tense of regular verbs",
                  "Numbers, colors, and time",
                ],
              },
              {
                level: "Elementary (A2)",
                description:
                  "Build on basic knowledge to construct simple sentences and engage in everyday conversations.",
                duration: "12 weeks",
                topics: [
                  "Past tenses (passé composé, imparfait)",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Specialized French Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In addition to our general French courses, we offer specialized programs tailored to specific needs and
              goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business French",
                description:
                  "Develop the language skills needed for professional environments, including meetings, presentations, negotiations, and business correspondence in French.",
                image: "/placeholder.svg?height=400&width=600",
                features: [
                  "Professional vocabulary and terminology",
                  "Business writing (emails, reports, proposals)",
                  "Presentation and negotiation skills",
                  "Cross-cultural business communication",
                ],
              },
              {
                title: "DELF/DALF Preparation",
                description:
                  "Prepare for the official French language proficiency exams with targeted practice and expert guidance on exam strategies and requirements.",
                image: "/placeholder.svg?height=400&width=600",
                features: [
                  "Comprehensive coverage of all exam sections",
                  "Practice with authentic exam materials",
                  "Test-taking strategies and time management",
                  "Personalized feedback and progress tracking",
                ],
              },
              {
                title: "French for Travel",
                description:
                  "Learn practical French for travel situations, including ordering food, asking for directions, making reservations, and engaging in basic conversations with locals.",
                image: "/placeholder.svg?height=400&width=600",
                features: [
                  "Essential travel vocabulary and phrases",
                  "Cultural etiquette and customs",
                  "Navigation and transportation terminology",
                  "Handling common travel situations",
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
                practical usage and real-world application. Our methodology is designed to make learning French
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
                      Classes are conducted primarily in French to maximize exposure and accelerate learning.
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
                    <h3 className="font-bold text-gray-800 mb-1">Cultural Integration</h3>
                    <p className="text-gray-600">
                      French culture, history, and traditions are woven into lessons to provide context and deeper
                      understanding.
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
                  src="/placeholder.svg?height=800&width=600"
                  alt="French Class in Session"
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
              Hear from our students who have transformed their French skills and achieved their goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "David O.",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "Learning French at Language Academy was one of the best decisions I've made. The immersive teaching methods and cultural insights have prepared me well for my studies in France. The instructors are passionate and patient, making even complex grammar concepts accessible.",
                achievement: "Accepted to graduate program in Paris",
              },
              {
                name: "Marie L.",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "I needed French for my job in international relations. The Business French program provided exactly what I needed - from formal correspondence to negotiation vocabulary. I can now confidently participate in meetings with our French-speaking partners.",
                achievement: "Promoted to International Liaison Officer",
              },
              {
                name: "James K.",
                image: "/placeholder.svg?height=200&width=200",
                testimonial:
                  "I started learning French for a trip to France and fell in love with the language. The teachers make learning fun and engaging with cultural activities and conversation practice. I was able to navigate Paris with ease and even make friends with locals during my trip!",
                achievement: "Traveled solo through France for 3 months",
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
              We offer competitive pricing with flexible payment options to make quality French education accessible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Program",
                price: "KSh 28,000",
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
                price: "KSh 45,000",
                duration: "8 weeks",
                schedule: "4 classes per week (3 hours each)",
                features: [
                  "Comprehensive course materials",
                  "Regular assessments and feedback",
                  "Access to online resources",
                  "Group classes (max 10 students)",
                  "One-on-one tutoring session (2 hours)",
                  "Certificate upon completion",
                  "Cultural activities and workshops",
                ],
                recommended: true,
              },
              {
                title: "Private Lessons",
                price: "KSh 3,000",
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
              Find answers to common questions about our French language courses.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Is French difficult to learn for English speakers?",
                answer:
                  "French is considered one of the easier languages for English speakers to learn due to the many vocabulary similarities and shared linguistic roots. While aspects like pronunciation and grammatical gender may present challenges, our structured approach makes these concepts accessible and manageable for learners.",
              },
              {
                question: "How quickly can I expect to progress?",
                answer:
                  "Progress varies depending on your starting level, learning intensity, and practice outside of class. Generally, students in our standard program advance one CEFR level (e.g., from A1 to A2) in 12 weeks. Those in our intensive program often progress even faster. Consistent practice and engagement with the language outside of class significantly accelerates learning.",
              },
              {
                question: "Do you offer preparation for DELF/DALF exams?",
                answer:
                  "Yes, we offer specialized preparation courses for all levels of the DELF and DALF exams (A1 to C2). These courses focus on the specific skills and strategies needed for each section of the exam, with practice using authentic exam materials and personalized feedback from experienced instructors.",
              },
              {
                question: "Will I learn about French culture in the courses?",
                answer:
                  "Cultural understanding is an integral part of language learning. Our courses incorporate aspects of French culture, history, traditions, and contemporary society. We use authentic materials like French music, films, literature, and news to provide cultural context and enhance language learning.",
              },
              {
                question: "Can I join a course if I've already studied some French?",
                answer:
                  "Yes, we conduct a placement test for all new students to determine your current level of proficiency. This ensures you're placed in the appropriate class where you'll be challenged but not overwhelmed. If you have previous experience with French, you'll be able to continue from where you left off.",
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
            Ready to Start Your French Language Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll in our French language courses today and open doors to new cultures, opportunities, and experiences.
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
