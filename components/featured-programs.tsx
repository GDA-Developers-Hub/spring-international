"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

import ielts from "@/public/ielts.avif"
import toefl from "@/public/toefl.avif"
import pte from "@/public/pte.avif"
import gre from "@/public/gre.avif"
import sat from "@/public/sat.avif"
import toeic from "@/public/toeic.avif"

import spanish from "@/public/spanish.jpg"
import english from "@/public/english.jpeg"
import french from "@/public/french.avif"
import arabic from "@/public/arabic.avif"
import swahili from "@/public/swahili.avif"
import german from "@/public/german.jpeg"

export default function FeaturedPrograms() {
  const [activeTab, setActiveTab] = useState("languages")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const languagePrograms = [
    {
      title: "Spanish Language Courses",
      description:
        "Speak Spanish like a native! Our Spanish courses are tailored to beginners and advanced learners who want to stand out globally.",
      image: spanish,
      link: "/courses/spanish",
    },
    {
      title: "French Language Courses",
      description:
        "Achieve fluency in French for personal growth, career advancement, or travel. Our French classes cover grammar, conversation, and cultural immersion.",
      image: french,
      link: "/courses/french",
    },
    {
      title: "English Language Courses",
      description:
        "Enhance your communication skills with our structured English programs. From beginner to advanced levels, we help you become a confident English speaker.",
      image: english,
      link: "/courses/english",
    },
    {
      title: "Arabic Language Course",
      description:
        "Master Arabic, a language rich in history and significance, to unlock the potential of the Middle East.",
      image: arabic,
      link: "/courses/arabic",
    },
    {
      title: "Swahili Language Course",
      description:
        "Connect with East Africa through Swahili, a lingua franca that offers expansive communication across African countries.",
      image: swahili,
      link: "/courses/swahili",
    },
    {
      title: "German Language Course",
      description:
        "Learn German, the language of innovation and European business, with our comprehensive and interactive courses.",
      image: german,
      link: "/courses/german",
    },
  ]

  const proficiencyExams = [
    {
      title: "IELTS Preparation",
      description:
        "Ideal for those seeking higher education or professional registration in English-speaking countries.",
      image: ielts,
      link: "/proficiency/ielts",
    },
    {
      title: "TOEFL Preparation",
      description: "This course is advancely recognized for academic admissions in the United States and globally.",
      image: toefl,
      link: "/proficiency/toefl",
    },
    {
      title: "PTE Preparation",
      description: "Accepted by universities worldwide and used for visa applications in Australia and New Zealand.",
      image: pte,
      link: "/proficiency/pte",
    },
    {
      title: "GRE Preparation",
      description: "Essential for graduate school applicants who need to show a range of English skills.",
      image: gre,
      link: "/proficiency/gre",
    },
    {
      title: "SAT Preparation",
      description: "This course is Critical for college admissions in the United States of America.",
      image: sat,
      link: "/proficiency/sat",
    },
    {
      title: "TOEIC, OET, and DUOLINGO",
      description: "Specialized exams catering to professional needs and newer digital formats.",
      image: toeic,
      link: "/proficiency/other-exams",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-yellow-100 opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0046ad] to-[#0067ff]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Featured Programs
        </motion.h2>

        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="languages" className="w-full max-w-3xl" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 p-1 rounded-full bg-blue-50">
              <TabsTrigger
                value="languages"
                className="text-base rounded-full data-[state=active]:bg-[#0046ad] data-[state=active]:text-white"
              >
                Language Courses
              </TabsTrigger>
              <TabsTrigger
                value="proficiency"
                className="text-base rounded-full data-[state=active]:bg-[#0046ad] data-[state=active]:text-white"
              >
                Proficiency Exams
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "languages" ? languagePrograms : proficiencyExams).map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden h-full border-none shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 bg-white relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#0046ad]/5 rounded-bl-full -mt-4 -mr-4 z-0"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-[#0046ad] group-hover:text-[#0067ff] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button
                      variant="outline"
                      className="border-[#0046ad] text-[#0046ad] hover:bg-[#0046ad] hover:text-white transition-colors group-hover:border-[#0067ff] group-hover:text-[#0067ff] group-hover:hover:bg-[#0067ff]"
                      asChild
                    >
                      <Link href={program.link}>
                        Learn More{" "}
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" className="bg-[#0046ad] hover:bg-[#0067ff] transition-colors rounded-full px-8" asChild>
            <Link href={activeTab === "languages" ? "/courses" : "/proficiency"}>View All Programs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
