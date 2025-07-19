"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

export default function ImageLightbox({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  objectFit = "contain",
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [panX, setPanX] = useState(0)
  const [panY, setPanY] = useState(0)

  const openLightbox = () => {
    console.log("Opening lightbox") // Debug log
    setIsOpen(true)
    setZoom(1) // Reset zoom when opening
    setPanX(0) // Reset pan when opening
    setPanY(0)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    console.log("Closing lightbox") // Debug log
    setIsOpen(false)
    setZoom(1) // Reset zoom when closing
    setPanX(0) // Reset pan when closing
    setPanY(0)
    document.body.style.overflow = 'unset'
  }

  // Handle escape key and zoom
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeLightbox()
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (!isOpen) return
      
      e.preventDefault()
      
      const zoomFactor = 0.1
      const delta = e.deltaY > 0 ? -zoomFactor : zoomFactor
      
      setZoom(prevZoom => {
        const newZoom = prevZoom + delta
        // Clamp zoom between 0.5 (50%) and 2.5 (250%)
        return Math.min(Math.max(newZoom, 0.5), 2.5)
      })
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('wheel', handleWheel)
    }
  }, [isOpen])

  return (
    <>
      {/* Clickable Image */}
      <div
        className={`cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105 ${className}`}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          openLightbox()
        }}

      >
        {fill ? (
          <Image src={src || "/placeholder.svg"} alt={alt} fill className={`object-${objectFit}`} />
        ) : (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width || 400}
            height={height || 300}
            className={`object-${objectFit}`}
          />
        )}
      </div>

      {/* Simple Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
          style={{ zIndex: 99999 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-20 right-6 p-3 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full transition-all border-2 border-white border-opacity-30"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            style={{ zIndex: 100001 }}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Background - click to close */}
          <div 
            className="absolute inset-0"
            onClick={closeLightbox}
          />

          {/* Image Container with Zoom */}
          <div 
            className="relative max-w-[95vw] max-h-[95vh] p-4 overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => {
              if (zoom <= 1) return // Only allow panning when zoomed in
              
              const startX = e.clientX - panX
              const startY = e.clientY - panY
              
              const handleMouseMove = (e: MouseEvent) => {
                setPanX(e.clientX - startX)
                setPanY(e.clientY - startY)
              }
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove)
                document.removeEventListener('mouseup', handleMouseUp)
              }
              
              document.addEventListener('mousemove', handleMouseMove)
              document.addEventListener('mouseup', handleMouseUp)
            }}
          >
            <img 
              src={src || "/placeholder.svg"} 
              alt={alt}
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{ 
                maxWidth: '95vw', 
                maxHeight: '95vh',
                transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`,
                transformOrigin: 'center center'
              }}
              draggable={false}
            />
          </div>

          {/* Zoom Indicator */}
          <div className="absolute top-20 left-6 bg-black bg-opacity-70 rounded-lg px-3 py-2 text-white text-sm">
            <p>{Math.round(zoom * 100)}%</p>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-lg px-4 py-2 text-white">
            <p className="text-sm">{alt}</p>
          </div>
        </div>
      )}
    </>
  )
}