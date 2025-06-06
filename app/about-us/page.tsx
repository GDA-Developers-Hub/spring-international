"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, BookOpen, Clock, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Language Academy</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              The premier language school in Nairobi, Kenya, dedicated to helping students achieve fluency and
              confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0046ad]">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Spring International Training College - Language Academy was founded with a vision to provide
                high-quality language education that empowers individuals to connect with the world. Since our
                establishment, we have been committed to excellence in language instruction.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small language center has grown into one of Kenya's most respected language schools,
                serving thousands of students from diverse backgrounds and helping them achieve their personal and
                professional language goals.
              </p>
              <p className="text-gray-600">
                Our journey has been defined by our unwavering commitment to innovative teaching methods, personalized
                learning experiences, and a supportive environment that fosters growth and confidence in language
                acquisition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Language Academy Campus"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence in language education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide exceptional language education that empowers individuals to communicate effectively across
                cultures, advance their careers, and broaden their horizons through linguistic proficiency.
              </p>
              <p className="text-gray-600">
                We are committed to creating a supportive learning environment where students can develop confidence and
                fluency through innovative teaching methods and personalized attention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the leading language education institution in East Africa, recognized for excellence in teaching,
                innovative methodologies, and producing graduates who excel in multilingual environments.
              </p>
              <p className="text-gray-600">
                We aspire to bridge cultural divides through language education and contribute to a more connected and
                understanding global community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to language education and student success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-10 w-10 text-[#0046ad]" />,
                title: "Student-Centered",
                description:
                  "We prioritize the unique needs and goals of each student, providing personalized learning experiences.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#0046ad]" />,
                title: "Excellence",
                description:
                  "We strive for the highest standards in teaching, curriculum development, and student support.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-[#0046ad]" />,
                title: "Innovation",
                description:
                  "We embrace modern teaching methodologies and technologies to enhance the learning experience.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#0046ad]" />,
                title: "Efficiency",
                description: "We value our students' time and design programs that deliver results efficiently.",
              },
              {
                icon: <MapPin className="h-10 w-10 text-[#0046ad]" />,
                title: "Cultural Awareness",
                description:
                  "We promote understanding and appreciation of diverse cultures alongside language acquisition.",
              },
              {
                icon: <Building className="h-10 w-10 text-[#0046ad]" />,
                title: "Integrity",
                description:
                  "We conduct ourselves with honesty, transparency, and ethical practices in all our operations.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#0046ad]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated team of language experts committed to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Kimani",
                role: "Director",
                image: "/placeholder.svg?height=300&width=300",
                description: "Ph.D. in Linguistics with over 15 years of experience in language education.",
              },
              {
                name: "Prof. David Ochieng",
                role: "Academic Coordinator",
                image: "/placeholder.svg?height=300&width=300",
                description: "Specialist in language acquisition methodologies and curriculum development.",
              },
              {
                name: "Ms. Amina Hassan",
                role: "Senior English Instructor",
                image: "/placeholder.svg?height=300&width=300",
                description: "CELTA-certified with extensive experience teaching English as a second language.",
              },
              {
                name: "Mr. Jean-Pierre Dubois",
                role: "French Language Coordinator",
                image: "/placeholder.svg?height=300&width=300",
                description: "Native French speaker with a master's degree in French language education.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-[#0046ad]">{member.name}</h3>
                  <p className="text-[#f5b100] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
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
            Join Our Language Learning Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Experience the difference of learning with Kenya's premier language school.
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
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
