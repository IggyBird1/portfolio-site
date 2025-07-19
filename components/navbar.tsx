"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ["home", "about", "resume", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#resume", label: "Resume", id: "resume" },
    { href: "#portfolio", label: "Portfolio", id: "portfolio" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on a different page, navigate to home with the section hash
      window.location.href = `/#${sectionId}`
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6,
      }}
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-gray-800 bg-black/95 backdrop-blur-md shadow-lg"
          : "border-transparent bg-black/50 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center group">
          <motion.div className="relative h-8 w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* Desktop Logo - Long version */}
            <div className="hidden sm:block">
              <Image
                src="/images/igalv-logo-long.svg"
                alt="IGAL V Logo"
                width={120}
                height={32}
                className="h-8 w-auto filter brightness-0 invert group-hover:brightness-75 transition-all duration-300"
                priority
              />
            </div>
            {/* Mobile Logo - Compact version */}
            <div className="block sm:hidden">
              <Image
                src="/images/iv-logo-small.svg"
                alt="IV Logo"
                width={32}
                height={32}
                className="h-8 w-8 filter brightness-0 invert group-hover:brightness-75 transition-all duration-300"
                priority
              />
            </div>
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.5,
              }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group px-3 py-2 rounded-full",
                  activeSection === item.id
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5",
                )}
              >
                <span>{item.label}</span>
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 rounded-full",
                    activeSection === item.id ? "w-3/4" : "w-0 group-hover:w-1/2",
                  )}
                />
              </button>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={toggleMenu}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="grid gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "flex w-full items-center py-3 px-4 text-lg font-medium transition-colors duration-300 rounded-lg",
                        activeSection === item.id
                          ? "text-purple-400 bg-purple-500/10"
                          : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5",
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
