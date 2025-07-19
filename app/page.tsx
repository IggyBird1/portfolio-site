"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  Star,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Download,
  Calendar,
  LocateIcon as Location,
  Languages,
  Award,
} from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArtstation } from "@fortawesome/free-brands-svg-icons"
import ProjectCard from "@/components/project-card"
import IllustrationSlideshow from "@/components/illustration-slideshow"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          {/* Main Title with Enhanced Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                IGAL
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                V
              </span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="h-6 w-6 text-purple-400 fill-purple-400" />
            </motion.div>
            <h2 className="text-xl md:text-2xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent font-light">
              Animator & Video Editor
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-cyan-400 fill-cyan-400" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Self-taught creative driven by curiosity to transform complex ideas into visual stories. Specializing in 3D
            animation, motion graphics, and video editing.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 px-8 py-3 rounded-full"
              >
                <a href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 rounded-full backdrop-blur-sm bg-transparent"
              >
                <a href="#resume">View Resume</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-8 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <p className="text-center">
                  My journey as a creative has always been driven by an insatiable curiosity to transform complex ideas
                  into visual stories. As a self-taught artist and animator, I've turned my passion for technology and
                  storytelling into a unique skill set that breathes life into every project.
                </p>
              </div>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <p className="text-center">
                  I thrive on turning challenging concepts into engaging, intuitive visual experiences that connect,
                  communicate, and captivate. My autodidactic approach has allowed me to develop a diverse skill set
                  across 3D animation, motion graphics, video editing, and brand identity design.
                </p>
              </div>
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <p className="text-center">
                  Currently open to new opportunities and excited to grow through collaboration, I bring creativity,
                  adaptability, and problem-solving skills to every project I undertake.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resume
            </span>
          </motion.h2>

          <div className="max-w-6xl mx-auto">


            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Experience & Education */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Work Experience */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-green-400" />
                    Work Experience
                  </h3>

                  <div className="space-y-6">
                    {/* Visual Content Specialist */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">Visual Content Specialist</h4>
                        <span className="text-green-400 text-sm font-medium">Mar 2023 - Mar 2025</span>
                      </div>
                      <p className="text-cyan-400 font-medium mb-3">PROMAI LTD</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Led visual content creation, producing complex marketing and training videos</li>
                        <li>• Created 2D and 3D animations and developed comprehensive brand identity systems</li>
                        <li>
                          • Managed company's digital presence with focus on accessibility and user-friendly design
                        </li>
                        <li>
                          • Innovated training material development by converting technical information into accessible
                          formats
                        </li>
                      </ul>
                    </div>

                    {/* Video Editor */}
                    <div className="border-l-4 border-purple-500 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">Video Editor</h4>
                        <span className="text-purple-400 text-sm font-medium">2022 - 2023</span>
                      </div>
                      <p className="text-cyan-400 font-medium mb-3">Freelance</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Created video content independently for multiple companies</li>
                        <li>• Delivered high-quality visual content across various industries</li>
                      </ul>
                    </div>

                    {/* Support Specialist */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">Support Specialist</h4>
                        <span className="text-blue-400 text-sm font-medium">2021 - Mar 2023</span>
                      </div>
                      <p className="text-cyan-400 font-medium mb-3">TIKSHOOV</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Provided support at national call center during COVID-19 crisis</li>
                        <li>• Demonstrated adaptability and problem-solving in high-pressure environment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center">
                    <Award className="mr-3 h-6 w-6 text-purple-400" />
                    Education
                  </h3>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-bold text-white mb-2">Online Courses</h4>
                    <span className="text-purple-400 text-sm font-medium">2022 - Present</span>
                    <p className="text-gray-300 mt-3">
                      Continuous self-directed learning across multiple platforms, focusing on:
                    </p>
                    <ul className="text-gray-300 space-y-1 text-sm mt-2">
                      <li>• Adobe Creative Suite mastery</li>
                      <li>• 3D Animation and Blender</li>
                      <li>• Motion Graphics and Design Theory</li>
                      <li>• Advanced video editing techniques</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Skills & Languages */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Technical Skills */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Technical Skills
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Core Competencies</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          "3D Animation",
                          "Motion Graphics & 2D Animation",
                          "Video Editing",
                          "Graphics (Icons, Logos, Typography)",
                          "Content Transcription & Localization",
                        ].map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-3"
                          >
                            <span className="text-gray-300">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Software Knowledge */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Software Knowledge
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Adobe Premiere Pro",
                      "Adobe After Effects",
                      "Adobe Illustrator",
                      "Adobe Photoshop",
                      "Clip Studio Paint",
                      "Blender",
                    ].map((software, index) => (
                      <motion.div
                        key={software}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg p-3 text-center"
                      >
                        <span className="text-gray-300 text-sm font-medium">{software}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Professional Strengths */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Professional Strengths
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                    {["Creativity", "Adaptability", "Curiosity", "Problem-Solving", "Deadline Management"].map(
                      (strength, index) => (
                        <motion.div
                          key={strength}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-3 text-center"
                        >
                          <span className="text-gray-300 font-medium">{strength}</span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent flex items-center">
                    <Languages className="mr-3 h-6 w-6 text-orange-400" />
                    Languages
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg">
                      <span className="text-white font-medium">Hebrew</span>
                      <span className="text-orange-400 text-sm">Native</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg">
                      <span className="text-white font-medium">English</span>
                      <span className="text-orange-400 text-sm">Fluent/Professional</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-950 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>

          {/* Completed Projects */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Completed Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ProjectCard
                title="Prombo"
                description="A cute, robotic teacher within manufacturing industries"
                imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset-3-SdilqVZuBT3uQQsJBcEpFt0dUXM2of.png"
                href="/projects/prombo"
                gradient="from-cyan-500 to-blue-500"
              />

              {/* Illustrations with Slideshow */}
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
                <div className="overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 rounded-2xl">
                  <Link href="/projects/illustrations" className="block h-full">
                    <motion.div
                      className="relative h-64 w-full overflow-hidden rounded-t-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IllustrationSlideshow />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-emerald-500/30"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </motion.div>
                    <div className="p-6 relative">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileHover={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.h3
                        className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-emerald-300 transition-all duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Illustrations
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        Character designs & Digital artwork
                      </motion.p>
                      <motion.div
                        className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                      >
                        View Project
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Concept Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Concept Projects
            </h3>
            <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
              Creative explorations and concept development showcasing range and experimental work
            </p>
            <div className="grid grid-cols-1 max-w-md mx-auto">
              <div className="relative">
                <ProjectCard
                  title="Morning Paws"
                  description="An analog-horror inspired project mixed with Sanrio's kawaii aesthetic"
                  imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test2.png-rjWUX7cCcArPhIQdNfonB15iLLnRat.jpeg"
                  href="/projects/morning-paws"
                  gradient="from-pink-500 to-purple-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  CONCEPT
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">Email</h4>
                    <p className="text-gray-300">igalv95@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Location className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">Location</h4>
                    <p className="text-gray-300">Tel-Aviv, Israel</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-white">Connect</h4>
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
                      <Link href={social.href} className="text-gray-400 hover:text-purple-400 transition-colors">
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
                    <Link
                      href="https://www.artstation.com/iggy3"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <FontAwesomeIcon icon={faArtstation} className="h-6 w-6" />
                      <span className="sr-only">ArtStation</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
