"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ClientOnly from "@/components/ui/client-only"
import heroImage2 from "@/public/hero-english.avif"
import heroImage3 from "@/public/chinnese-hero.avif"
import heroImage1 from "@/public/hero-local.avif"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [particles, setParticles] = useState<Array<{
    width: string;
    height: string;
    top: string;
    left: string;
    animation: string;
    animationDelay: string;
  }>>([])

  // Images for the slider
  const sliderImages = [
    {
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop",
      alt: "Students learning languages in classroom",
    },
    {
      src: heroImage2,
      alt: "Graduation ceremony with students",
    },
    {
      src: heroImage1,
      alt: "Students in group discussion",
    },
    {
      src: heroImage3,
      alt: "Students studying in library",
    },
  ]

  // Generate particles only on client-side to avoid hydration mismatch
  useEffect(() => {
    const particlesArray = Array.from({ length: 20 }, () => ({
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
      animationDelay: `${Math.random() * 5}s`,
    }))
    setParticles(particlesArray)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [sliderImages.length])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Reset interval when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
    }, 5000)
  }

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-gradient-to-r from-[#0046ad] to-[#0067ff] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left pt-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
              Master New Languages <span className="text-[#f5b100] block mt-1">Open New Doors</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Join thousands of students who have achieved fluency in multiple languages with our expert instructors and
              proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#f5b100] hover:bg-[#f5b100]/90 text-white rounded-full px-8 text-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8 text-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full mt-8 lg:mt-0"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Custom Slider */}
              <div className="absolute inset-0">
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Custom Dots Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? "bg-white w-4" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating achievement cards - moved outside the slider container */}
            <ClientOnly>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-10 -left-5 sm:-left-10 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg max-w-[150px] sm:max-w-[200px] z-50 hidden lg:block"
              >
                <h3 className="font-bold text-[#0046ad] text-sm sm:text-base">6+ Languages</h3>
                <p className="text-xs sm:text-sm text-gray-600">Comprehensive courses in multiple languages</p>
              </motion.div>
            </ClientOnly>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-10 -right-5 sm:-right-10 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg max-w-[150px] sm:max-w-[200px] z-50 hidden lg:block"
            >
              <h3 className="font-bold text-[#0046ad] text-sm sm:text-base">Expert Instructors</h3>
              <p className="text-xs sm:text-sm text-gray-600">Learn from certified native speakers</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated particles - Using client-side generated values */}
        <ClientOnly>
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-10"
                style={{
                  width: particle.width,
                  height: particle.height,
                  top: particle.top,
                  left: particle.left,
                  animation: particle.animation,
                  animationDelay: particle.animationDelay,
                }}
              ></div>
            ))}
          </div>
        </ClientOnly>

        {/* Scroll Down Indicator */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-20"
        >
          <p className="text-white/80 text-sm mb-2">Scroll Down</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="bg-white/20 backdrop-blur-sm rounded-full p-2"
          >
            <ChevronDown className="h-5 w-5 text-white" />
          </motion.div>
        </motion.div>
        */}
      </div>
    </section>
  )
}
