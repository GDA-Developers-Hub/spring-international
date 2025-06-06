"use client"

import { useEffect } from "react"

export default function AdminPageWrapper({ children }) {
  useEffect(() => {
    // Directly hide elements on the /admin route
    const navbar = document.querySelector("nav")
    const footer = document.querySelector("footer")
    const scrollToTop = document.querySelector(".scroll-to-top")

    if (navbar) navbar.style.display = "none"
    if (footer) footer.style.display = "none"
    if (scrollToTop) scrollToTop.style.display = "none"

    // Add data attribute to body
    document.body.setAttribute("data-path", "/admin")

    return () => {
      // Cleanup
      if (navbar) navbar.style.display = ""
      if (footer) footer.style.display = ""
      if (scrollToTop) scrollToTop.style.display = ""
      document.body.removeAttribute("data-path")
    }
  }, [])

  return <>{children}</>
}
