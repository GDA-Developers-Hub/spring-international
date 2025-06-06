"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactUsPage() {
  const locations = [
    {
      name: "Kilimani Branch",
      address: "Kilimani Road, Nairobi",
      phone: "+254 722 728350",
      email: "kilimani@sitc-tvet.ac.ke",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
    },
    {
      name: "Town Branch",
      address: "Central Business District, Nairobi",
      phone: "+254 748 698566",
      email: "town@sitc-tvet.ac.ke",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
    },
    {
      name: "Westlands Branch",
      address: "Westlands Area, Nairobi",
      phone: "+254 741098157",
      email: "westlands@sitc-tvet.ac.ke",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
    },
  ]

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We're here to answer your questions and help you start your language learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0046ad]"
          >
            Our Locations
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 text-[#0046ad]">{location.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#f5b100] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#f5b100] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#f5b100] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{location.email}</p>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#f5b100] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>I am interested in:</Label>
                <RadioGroup defaultValue="language-courses" className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="language-courses" id="language-courses" />
                    <Label htmlFor="language-courses" className="cursor-pointer">
                      Language Courses
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="proficiency-exams" id="proficiency-exams" />
                    <Label htmlFor="proficiency-exams" className="cursor-pointer">
                      Proficiency Exams
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="corporate-training" id="corporate-training" />
                    <Label htmlFor="corporate-training" className="cursor-pointer">
                      Corporate Training
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Preferred Course/Exam</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course or exam" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English Courses</SelectItem>
                    <SelectItem value="french">French Courses</SelectItem>
                    <SelectItem value="spanish">Spanish Courses</SelectItem>
                    <SelectItem value="german">German Courses</SelectItem>
                    <SelectItem value="arabic">Arabic Courses</SelectItem>
                    <SelectItem value="swahili">Swahili Courses</SelectItem>
                    <SelectItem value="ielts">IELTS Preparation</SelectItem>
                    <SelectItem value="toefl">TOEFL Preparation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message or inquiry" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-[#0046ad] hover:bg-[#0067ff]">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </motion.div>
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
              Find quick answers to common questions about our courses and services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What are your class schedules?",
                answer:
                  "We offer flexible scheduling options including morning, afternoon, evening, and weekend classes to accommodate different needs. Specific schedules vary by course and location.",
              },
              {
                question: "How long does it take to complete a course?",
                answer:
                  "Course duration varies depending on the language and level. Typically, each level takes 8-12 weeks to complete with classes 2-3 times per week. We also offer intensive courses that can be completed in a shorter timeframe.",
              },
              {
                question: "Do you offer online classes?",
                answer:
                  "Yes, we offer both in-person and online classes for most of our language courses and exam preparation programs. Our online classes provide the same quality instruction with added convenience.",
              },
              {
                question: "What is your refund policy?",
                answer:
                  "We offer a partial refund if you withdraw from a course within the first week. After the first week, refunds are considered on a case-by-case basis. Please refer to our terms and conditions for more details.",
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">
              Don't see your question here? Contact us directly and we'll be happy to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0046ad]">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Visit one of our convenient locations in Nairobi.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded-xl shadow-md overflow-hidden h-[400px] relative"
          >
            {/* Placeholder for map - in a real implementation, you would use Google Maps or similar */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
