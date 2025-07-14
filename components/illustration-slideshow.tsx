"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const illustrations = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-07-15_07-22-58.jpg-PUAnwkPaBfWzZGonLs0sheNqvgGK3p.jpeg",
    alt: "Traditional fabric study - Pencil drawing",
    title: "Fabric Study",
    medium: "Pencil Drawing",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Illustration43-dMtVpKvDNMhAQ4pDl7nnyGVnurEoHL.png",
    alt: "Digital character illustration",
    title: "Character Design",
    medium: "Digital Art",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nico42.jpg-Ae1xWZ1nbqXPZJeW5Jk6CkgtTnIhc1.jpeg",
    alt: "Fantasy character Nico - Digital illustration",
    title: "Fantasy Character",
    medium: "Digital Painting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixelgonis1-J8KOVU25krLLQqylIxE41jloBl05h6.png",
    alt: "Character Gonis - Digital illustration",
    title: "Character Design",
    medium: "Digital Art",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zhed_drasyl-wPsSx3oWREQOsi3VchR5k63CmhKEJx.png",
    alt: "Fantasy warrior character - Digital illustration",
    title: "Warrior Character",
    medium: "Digital Illustration",
  },
]

export default function IllustrationSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % illustrations.length)
    }, 4000) // Slower transition - 4 seconds

    return () => clearInterval(timer)
  }, [isPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + illustrations.length) % illustrations.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % illustrations.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gray-900 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center bg-gray-800"
        >
          <Image
            src={illustrations[currentIndex].src || "/placeholder.svg"}
            alt={illustrations[currentIndex].alt}
            fill
            className="object-contain" // Changed from object-cover to object-contain to prevent stretching
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </motion.div>
      </div>

      {/* Image Info Overlay */}
      <motion.div
        className="absolute bottom-4 left-4 text-white"
        key={`info-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h4 className="text-sm font-bold drop-shadow-lg">{illustrations[currentIndex].title}</h4>
        <p className="text-xs text-gray-300 drop-shadow-lg">{illustrations[currentIndex].medium}</p>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {illustrations.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        {currentIndex + 1} / {illustrations.length}
      </div>
    </div>
  )
}
