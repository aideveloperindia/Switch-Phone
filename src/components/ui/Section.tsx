import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  dark?: boolean
}

export default function Section({
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false,
  dark = false
}: SectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-rich-black text-white' : 'bg-white'} ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className={fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8'}
      >
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <motion.h2
                variants={containerVariants}
                className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-rich-black'}`}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={containerVariants}
                className={`text-xl ${dark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div variants={containerVariants}>
          {children}
        </motion.div>
      </motion.div>
    </section>
  )
} 