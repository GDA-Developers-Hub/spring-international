"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientOnly from "@/components/ui/client-only"
import HeroSection from "@/components/hero-section"
import FeaturedPrograms from "@/components/featured-programs"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import LayoutWrapper to avoid SSR issues
const LayoutWrapper = dynamic(() => import("./layout-wrapper"), { ssr: false })

export default function Home() {
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true })

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <HeroSection />

        <motion.section
          className="py-12 sm:py-20 px-4 md:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-yellow-100 opacity-20 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0046ad] to-[#0067ff]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Welcome to Spring International Training College
            </motion.h2>
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-8 text-[#f5b100]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              The Premier Language School in Nairobi, Kenya
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              At <span className="text-[#0046ad] font-medium">Language Academy</span>, we are committed to helping you
              master the world's most sought-after languages through expertly designed courses tailored for every learner.
              Whether you're a beginner, an advanced learner, or preparing for international language exams, we provide
              the perfect blend of flexibility and excellence to guide you on your language journey.
            </motion.p>
          </div>
        </motion.section>

        <FeaturedPrograms />
        <WhyChooseUs />
        <Testimonials />

        <motion.section
          className="py-16 sm:py-20 px-4 md:px-8 relative overflow-hidden"
          ref={ctaRef}
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Background with futuristic gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0046ad] via-[#0055d4] to-[#0067ff] overflow-hidden">
            {/* Animated particles - Only rendered on client-side */}
            <ClientOnly>
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white opacity-10"
                    style={{
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  ></div>
                ))}
              </div>
            </ClientOnly>

            {/* Mesh gradient overlay */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Language Journey?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-3xl mx-auto text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join thousands of satisfied students who have transformed their language skills with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-[#f5b100] hover:bg-[#f5b100]/90] text-white rounded-full px-8 text-lg group relative overflow-hidden w-full sm:w-auto"
                asChild
              >
                <Link href="/contact-us">
                  <span className="relative z-10 flex items-center">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f5b100] to-[#ffcc00] group-hover:scale-110 transition-transform duration-300"></span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* CSS for floating animation */}
          <style jsx>{`
            @keyframes float {
              0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) translateX(100px);
                opacity: 0;
              }
            }
          `}</style>
        </motion.section>
      </div>
    </LayoutWrapper>
  )
}
