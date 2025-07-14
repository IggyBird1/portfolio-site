"use client"

import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArtstation } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.footer
      className="border-t border-gray-800 bg-black text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <Image
                src="/images/igalv-logo-long.svg"
                alt="IGAL V Logo"
                width={150}
                height={45}
                className="h-8 w-auto filter brightness-0 invert opacity-80"
              />
            </div>
            <p className="mb-4">
              Multidisciplinary creative specializing in digital illustration, graphic design, and animation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <motion.li key={item.href} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={item.href} className="hover:text-purple-400 transition-colors">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/iggy.v1/", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/igal-vaintrub-407821274/", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    color: "#a855f7",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={social.href} className="hover:text-purple-400 transition-colors">
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
              {/* ArtStation with FontAwesome icon */}
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  color: "#a855f7",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://www.artstation.com/iggy3" className="hover:text-purple-400 transition-colors">
                  <FontAwesomeIcon icon={faArtstation} className="h-6 w-6" />
                  <span className="sr-only">ArtStation</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-12 border-t border-gray-800 pt-8 text-center" variants={itemVariants}>
          <p>&copy; {new Date().getFullYear()} IGAL V. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
