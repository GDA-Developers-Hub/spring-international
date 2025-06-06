"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Gauge, Building2, ListChecks, CheckCircle, Map, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Gauge className="w-16 h-16 text-red-600" />,
      title: "Comprehensive Language Courses",
      description: "Learn English, French, Spanish, German, Chinese, and more through interactive lessons.",
      titleColor: "text-[#f5b100]",
    },
    {
      icon: <Building2 className="w-16 h-16 text-red-600" />,
      title: "Certified Instructors",
      description: "Our expert tutors ensure you achieve fluency and confidence in your chosen language.",
      titleColor: "text-[#f5b100]",
    },
    {
      icon: <ListChecks className="w-16 h-16 text-red-600" />,
      title: "Exam Preparation",
      description: "Get ready for IELTS, TOEFL, and DELF with focused preparation programs.",
      titleColor: "text-[#f5b100]",
    },
    {
      icon: <CheckCircle className="w-16 h-16 text-red-600" />,
      title: "Accredited Programs",
      description:
        "Join our accredited TVET programs and gain qualifications that employers respect and recognize worldwide!",
      titleColor: "text-[#f5b100]",
    },
    {
      icon: <Map className="w-16 h-16 text-red-600" />,
      title: "Affordable Tuition",
      description: "We believe quality education should be accessible to everyone.",
      titleColor: "text-[#f5b100]",
    },
    {
      icon: <Handshake className="w-16 h-16 text-red-600" />,
      title: "Career Support",
      description:
        "We provide holistic career guidance and support services to ensure you confidently navigate your future career path and achieve success.",
      titleColor: "text-[#f5b100]",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-10 w-80 h-80 rounded-full bg-yellow-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-red-100 opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          style={{
            background: "linear-gradient(90deg, #4300ff 0%, #5e00ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Why Choose Language Academy?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.7 }}
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-2xl border border-white border-opacity-20 shadow-xl group-hover:bg-opacity-60 transition-all duration-500 -z-10"></div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    {feature.icon}
                  </div>
                </motion.div>

                <h3
                  className={`text-xl font-bold mb-4 text-center ${feature.titleColor} group-hover:scale-105 transition-transform duration-300`}
                >
                  {feature.title}
                </h3>

                <p className="text-gray-700 text-center">{feature.description}</p>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "linear-gradient(90deg, #f5b100, #ff4d4d, #f5b100)",
                    backgroundSize: "200% 200%",
                    animation: "gradient-animation 3s ease infinite",
                    WebkitBackgroundClip: "padding-box",
                    padding: "2px",
                    zIndex: -5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
      <div className="mt-12 text-center">
        <Button className="bg-[#0046ad] hover:bg-[#0067ff] transition-colors rounded-full px-8" asChild>
          <Link href="/about-us">Learn More About Us</Link>
        </Button>
      </div>
    </section>
  )
}
