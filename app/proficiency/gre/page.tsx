"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Award, BookOpen, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GREPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">GRE Preparation Course</h1>
              <p className="text-xl max-w-3xl mb-8">
                Master the Graduate Record Examination with our comprehensive preparation program designed by expert
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                  alt="GRE Preparation"
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
                      <p className="text-gray-700">10 Weeks</p>
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

      {/* About GRE Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">About GRE Exam</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Graduate Record Examination (GRE) is a standardized test that is an admissions requirement for many
              graduate schools worldwide, particularly in the United States.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0046ad]">Why Take GRE?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Graduate School Admissions</h4>
                    <p className="text-gray-600">
                      The GRE is required for admission to most graduate programs in the US and many other countries,
                      including Master's and PhD programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Scholarship Opportunities</h4>
                    <p className="text-gray-600">
                      High GRE scores can help you qualify for merit-based scholarships and fellowships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Career Advancement</h4>
                    <p className="text-gray-600">
                      A graduate degree can open doors to better job opportunities and higher salaries in many fields.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Versatile Application</h4>
                    <p className="text-gray-600">
                      The GRE is accepted for various programs including business, law, and other professional fields,
                      not just traditional graduate studies.
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
                  <h4 className="font-bold text-gray-800 mb-2">Analytical Writing (60 minutes)</h4>
                  <p className="text-gray-600">
                    Two essays: "Analyze an Issue" and "Analyze an Argument" that test critical thinking and analytical
                    writing skills.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Verbal Reasoning (60 minutes)</h4>
                  <p className="text-gray-600">
                    Two sections testing reading comprehension, critical reasoning, and vocabulary usage.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Quantitative Reasoning (70 minutes)</h4>
                  <p className="text-gray-600">
                    Two sections testing basic mathematical skills, understanding of elementary concepts, and ability to
                    reason quantitatively.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Experimental Section (Unscored)</h4>
                  <p className="text-gray-600">
                    An additional unidentified section that does not count toward your score but is used to test new
                    questions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our GRE Course Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Our GRE Preparation Course</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive GRE preparation course is designed to help you achieve your target score through
              personalized instruction and extensive practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-[#0046ad]" />,
                title: "Course Duration",
                description: "10 weeks (80 hours) of intensive training with flexible scheduling options.",
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
                description: "Learn from certified GRE trainers with proven track records.",
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
            Ready to Achieve Your Target GRE Score?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Enroll in our GRE preparation course today and take the first step toward your academic and professional
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
