"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
}

const variants = {
  primary: 'bg-electric-indigo text-white hover:bg-electric-indigo/90',
  secondary: 'bg-signal-red text-white hover:bg-signal-red/90',
  outline: 'border-2 border-electric-indigo text-electric-indigo hover:bg-electric-indigo/10'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  children,
  icon
}: ButtonProps) {
  const buttonClasses = `
    inline-flex items-center justify-center
    rounded-lg font-semibold transition-all duration-200
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  )

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  }

  if (href && !disabled) {
    return (
      <Link href={href}>
        <motion.span {...motionProps} className={buttonClasses}>
          {content}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  )
} 