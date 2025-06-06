"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function AdminWrapper({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    // Function to hide elements
    const hideElements = () => {
      const navbar = document.querySelector("nav")
      const footer = document.querySelector("footer")
      const scrollToTop = document.querySelector(".scroll-to-top")

      if (navbar) navbar.style.display = "none"
      if (footer) footer.style.display = "none"
      if (scrollToTop) scrollToTop.style.display = "none"

      // Add a class to the body to indicate we're in admin mode
      document.body.classList.add("admin-mode")
    }

    // Hide elements immediately
    hideElements()

    // Set up a MutationObserver to handle dynamically loaded elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          hideElements()
        }
      })
    })

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      // Show navbar and footer when leaving admin section
      const navbar = document.querySelector("nav")
      const footer = document.querySelector("footer")
      const scrollToTop = document.querySelector(".scroll-to-top")

      if (navbar) navbar.style.display = ""
      if (footer) footer.style.display = ""
      if (scrollToTop) scrollToTop.style.display = ""

      document.body.classList.remove("admin-mode")

      // Disconnect the observer when the component unmounts
      observer.disconnect()
    }
  }, [pathname])

  return <>{children}</>
}
