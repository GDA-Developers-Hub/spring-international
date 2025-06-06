"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import logo from "@/public/logo.avif"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Courses",
      href: "/courses",
      dropdown: [
        { name: "English Courses", href: "/courses/english" },
        { name: "French Courses", href: "/courses/french" },
        { name: "Spanish Courses", href: "/courses/spanish" },
        { name: "German Courses", href: "/courses/german" },
        { name: "Arabic Courses", href: "/courses/arabic" },
        { name: "Swahili Courses", href: "/courses/swahili" },
      ],
    },
    {
      name: "Proficiency",
      href: "/proficiency",
      dropdown: [
        { name: "IELTS", href: "/proficiency/ielts" },
        { name: "TOEFL", href: "/proficiency/toefl" },
        { name: "PTE", href: "/proficiency/pte" },
        { name: "GRE", href: "/proficiency/gre" },
        { name: "SAT", href: "/proficiency/sat" },
        { name: "TOEIC, OET & DUOLINGO", href: "/proficiency/other" },
      ],
    },
    { name: "About Us", href: "/about-us" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname?.startsWith(href)
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-3"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={menuRef}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative z-10 flex items-center">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src={logo}
                alt="Language Academy Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold text-sm md:text-lg text-[#0046ad]">Spring International</h1>
              <p className="text-[10px] md:text-xs text-gray-600">Training College</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div>
                    <button
                      onMouseEnter={() => toggleDropdown(link.name)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                        isActive(link.href)
                          ? "text-[#0046ad] bg-blue-50"
                          : "text-gray-700 hover:text-[#0046ad] hover:bg-blue-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-1">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-[#0046ad] ${
                                  isActive(item.href) ? "text-[#0046ad] bg-blue-50" : "text-gray-700"
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      link.name === "Contact Us"
                        ? "bg-[#0046ad] text-white hover:bg-[#0046ad]/90"
                        : isActive(link.href)
                          ? "text-[#0046ad] bg-blue-50"
                          : "text-gray-700 hover:text-[#0046ad] hover:bg-blue-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden flex items-center justify-center p-1.5 rounded-full"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </motion.header>

      {/* Mobile Navigation - Modern Redesign */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Hide the navbar when sidebar is open */}
            <style jsx global>{`
              header {
                display: none;
              }
              
              /* Custom scrollbar styles */
              ::-webkit-scrollbar {
                width: 2px;
              }
              ::-webkit-scrollbar-track {
                background: #f1f1f1;
              }
              ::-webkit-scrollbar-thumb {
                background: #888;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: #555;
              }
            `}</style>
            <motion.div
              className="lg:hidden fixed inset-0 z-[90] flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="relative w-4/5 max-w-sm bg-white h-full overflow-y-auto shadow-xl"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 flex items-center justify-center p-1.5 rounded-full z-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Language Academy Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="ml-3">
                      <h1 className="font-bold text-sm text-[#0046ad]">Spring International</h1>
                      <p className="text-[10px] text-gray-600">Training College</p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  {navLinks.map((link, index) => (
                    <div key={link.name} className="mb-1">
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(link.name)}
                            className={`flex items-center justify-between w-full px-5 py-3 text-left text-sm font-medium ${
                              isActive(link.href) ? "text-[#0046ad] bg-blue-50" : "text-gray-700"
                            }`}
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                activeDropdown === link.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-gray-50"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center px-8 py-2.5 text-xs ${
                                      isActive(item.href) ? "text-[#0046ad] bg-blue-50/70 font-medium" : "text-gray-600"
                                    }`}
                                  >
                                    <ChevronRight className="h-3 w-3 mr-2 text-gray-400" />
                                    {item.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block px-5 py-3 text-sm font-medium ${
                            link.name === "Contact Us"
                              ? "text-[#0046ad] font-semibold"
                              : isActive(link.href)
                                ? "text-[#0046ad] bg-blue-50"
                                : "text-gray-700"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Enroll Now Button in Mobile Menu */}
                <div className="mt-auto p-5 bg-gray-50 border-t border-gray-100">
                  <Button className="w-full bg-[#0046ad] hover:bg-[#0046ad]/90 text-white text-sm py-2" asChild>
                    <Link href="/contact-us">Enroll Now</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
