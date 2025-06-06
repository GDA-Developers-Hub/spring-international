"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Kimani",
      role: "English Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      quote:
        "Language Academy transformed my English skills completely. The instructors are patient and knowledgeable, and the small class sizes ensure personalized attention. I passed my IELTS with a band 7.5!",
    },
    {
      id: 2,
      name: "David Ochieng",
      role: "French Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      quote:
        "Learning French at Language Academy was one of the best decisions I've made. The immersive teaching methods and cultural insights have prepared me well for my studies in France. Merci beaucoup!",
    },
    {
      id: 3,
      name: "Amina Hassan",
      role: "Arabic Student",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&auto=format&fit=crop",
      quote:
        "The Arabic course exceeded my expectations. The instructors make complex grammar concepts easy to understand, and the conversational practice has given me confidence to speak with native speakers.",
    },
    {
      id: 4,
      name: "John Mwangi",
      role: "TOEFL Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
      quote:
        "I needed to improve my TOEFL score for university admission, and Language Academy helped me achieve it in just 3 months. The exam preparation strategies were invaluable!",
    },
  ]

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay || !isInView) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, isInView])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background with futuristic elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #0046ad 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#0046ad]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#f5b100]/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0046ad] to-[#0067ff] mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experiences learning languages at Language Academy Kenya.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative h-[400px] md:h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 h-full flex flex-col md:flex-row items-center relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-blue-50 rounded-full opacity-20 -translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-50 rounded-full opacity-20 translate-x-20 translate-y-20"></div>

                    <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0 relative z-10">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#f5b100]">
                        <Image
                          src={testimonials[current].image || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative z-10">
                      <Quote className="w-10 h-10 text-[#0046ad]/20 mb-4" />
                      <p className="text-gray-700 italic mb-6 text-lg">{testimonials[current].quote}</p>
                      <div>
                        <h4 className="font-bold text-[#0046ad] text-xl">{testimonials[current].name}</h4>
                        <p className="text-[#f5b100]">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#0046ad] w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-white rounded-full p-2 shadow-lg text-[#0046ad] hover:bg-[#0046ad] hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              next()
              setAutoplay(false)
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white rounded-full p-2 shadow-lg text-[#0046ad] hover:bg-[#0046ad] hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
