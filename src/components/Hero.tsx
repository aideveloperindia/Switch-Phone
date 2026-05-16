"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden rounded-b-3xl">
      {/* Background Elements with Curved Bottom */}
      <div className="absolute inset-0 z-0 rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/10 to-signal-red/10 rounded-b-3xl" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 rounded-b-3xl"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(102, 16, 242, 0.1) 0%, transparent 50%)',
          }}
        />
        {/* Enhanced Curved Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-white">
          <svg
            className="absolute top-0 w-full h-40"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path
              d="M0,0 C150,100 350,100 600,60 C850,100 1050,100 1200,0 L1200,120 L0,120 Z"
              className="text-white"
            />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-electric-indigo/10 text-electric-indigo rounded-full text-base font-medium mb-8"
          >
            <span className="w-3 h-3 bg-electric-indigo rounded-full mr-3 animate-pulse"></span>
            Revolutionary Emergency Response Technology
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight"
          >
            <span className="text-black">Switch-</span>
            <span className="text-black">Phone</span>
            <br />
            <span className="text-gray-700 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Emergency Response
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Essential services in under 60 seconds.
            <br className="hidden sm:block" />
            Your instant connection to hospitals, pharmacies, grocery stores, and family.
          </motion.p>
          
          {/* Key Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Under 60 Seconds</h3>
              <p className="text-gray-600">Lightning-fast connection to emergency services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-signal-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5 Essential Services</h3>
              <p className="text-gray-600">Hospital, Pharmacy, Ambulance, Grocery, Family</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GPS Location</h3>
              <p className="text-gray-600">Automatic location sharing for faster response</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <Button
              href="/contact"
              size="lg"
              className="px-12 py-4 text-xl"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 0118 0z" />
                </svg>
              }
            >
              Get Switch-Phone Now
            </Button>
            
            <Button
              href="/how-it-works"
              variant="outline"
              size="lg"
              className="px-12 py-4 text-xl"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Additional Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Trusted by healthcare professionals and families across the globe. 
              Experience the future of emergency response technology.
            </p>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>24/7 Active</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Instant Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      

    </div>
  )
} 