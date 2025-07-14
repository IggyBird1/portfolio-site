"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  gradient?: string
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  href,
  gradient = "from-purple-500 to-pink-500",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      className="group"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 rounded-2xl">
        <Link href={href} className="block h-full">
          <motion.div
            className="relative h-64 w-full overflow-hidden rounded-t-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            <motion.div
              className={cn("absolute inset-0 bg-gradient-to-t", gradient)}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
          <CardContent className="p-6 relative">
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              whileHover={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              View Project
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </motion.div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  )
}
