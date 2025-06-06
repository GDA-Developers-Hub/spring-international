"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith("/admin")

  useEffect(() => {
    if (isAdminRoute) {
      document.body.classList.add("admin-mode")
    } else {
      document.body.classList.remove("admin-mode")
    }
  }, [isAdminRoute])

  if (isAdminRoute) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}
