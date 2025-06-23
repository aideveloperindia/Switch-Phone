"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  image?: string
  delay?: number
  className?: string
}

export default function Testimonial({
  quote,
  author,
  role,
  company,
  image,
  delay = 0,
  className = ''
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring" as const,
        stiffness: 100
      }}
      className={`
        relative
        rounded-2xl p-6 sm:p-8
        bg-white shadow-xl
        ${className}
      `}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-8 text-electric-indigo/10">
        <svg
          className="h-16 w-16 transform rotate-180"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Quote Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="relative z-10"
      >
        <p className="text-lg text-gray-600 italic mb-8">"{quote}"</p>

        <div className="flex items-center">
          {image && (
            <div className="flex-shrink-0 mr-4">
              <Image
                src={image}
                alt={author}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
          )}
          <div>
            <h4 className="text-base font-semibold text-rich-black">{author}</h4>
            <p className="text-sm text-gray-500">
              {role} at {company}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-indigo to-signal-red rounded-b-2xl" />
    </motion.div>
  )
} 