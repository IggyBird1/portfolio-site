"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SpotlightEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      animate={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  )
}
