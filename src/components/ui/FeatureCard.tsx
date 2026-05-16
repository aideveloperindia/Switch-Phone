"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
  className?: string
  onClick?: () => void
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  className = '',
  onClick
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring" as const,
        stiffness: 100
      }}
      onClick={onClick}
      className={`
        relative overflow-hidden
        rounded-2xl p-6 sm:p-8
        bg-white shadow-xl
        transition-all duration-300
        hover:shadow-2xl
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/5 to-signal-red/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 text-electric-indigo">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + 0.2,
              type: "spring" as const,
              stiffness: 200
            }}
          >
            {icon}
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + 0.3,
            type: "spring" as const,
            stiffness: 100
          }}
          className="text-xl font-bold text-rich-black mb-2"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + 0.4
          }}
          className="text-gray-600"
        >
          {description}
        </motion.p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-electric-indigo/10 rounded-2xl" />
    </motion.div>
  )
} 