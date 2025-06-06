// Create a footer component that will be used on all pages

"use client"

import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#0046ad] text-white py-12 px-4 border-t border-blue-400 relative overflow-hidden">
      {/* Futuristic grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> Kilimani: +254 722 728350
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> Town: +254748 698566
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> Westlands: +254 741098157
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@sitc-tvet.ac.ke
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#f5b100] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-[#f5b100] transition-colors">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/proficiency" className="hover:text-[#f5b100] transition-colors">
                Proficiency
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-[#f5b100] transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to our newsletter for updates on new courses and events.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              required
            />
            <Button type="submit" className="rounded-l-none bg-[#f5b100] hover:bg-[#f5b100]/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-blue-400 text-center relative z-10">
        <p>
          © {new Date().getFullYear()} Spring International Training College - Language Academy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
