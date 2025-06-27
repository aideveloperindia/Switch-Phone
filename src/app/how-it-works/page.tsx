'use client';

import React from 'react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import dynamic from 'next/dynamic'

// Dynamically import the 3D component to avoid SSR issues
const StaticSwitchPhone3D = dynamic(() => import('@/components/StaticSwitchPhone3D'), { 
  ssr: false,
  loading: () => null
});

// 3D Model Overlay Component - Installation (moved right)
function InstallationModel3DOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-y-24 -translate-x-[19.5rem]"
        style={{ 
          width: '150px', 
          height: '150px',
          background: 'transparent',
          outline: 'none',
          border: 'none',
          zIndex: 50
        }}
        camera={{ position: [0, 0, 8], fov: 30 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={1.5} />
        <pointLight position={[-5, -5, 5]} intensity={1} />
        <pointLight position={[5, -5, -5]} intensity={1} />
        <group scale={0.3} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
          <StaticSwitchPhone3D />
        </group>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

// 3D Model Overlay Component - Other sections (original position)
function Model3DOverlay() {
  return (
    <div className="sticky top-0">
      <Canvas
        className="absolute top-0 left-[27rem]"
        style={{ 
          width: '150px', 
          height: '150px',
          background: 'transparent',
          outline: 'none',
          border: 'none',
          zIndex: 50
        }}
        camera={{ position: [0, 0, 8], fov: 30 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={1.5} />
        <pointLight position={[-5, -5, 5]} intensity={1} />
        <pointLight position={[5, -5, -5]} intensity={1} />
        <group scale={0.5}>
          <StaticSwitchPhone3D />
        </group>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={3}
        />
      </Canvas>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A comprehensive guide to setting up and using your Switch-Phone
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {/* Installation */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Installation</h3>
              </div>
              <p className="text-lg text-gray-600">
                Easy wall mounting with our secure bracket system. Simply attach the mounting plate to your wall and click your Switch-Phone into place. The device comes with all necessary mounting hardware and clear instructions.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative">
                <Image
                  src="/visual representations/1.Installation.gif"
                  alt="Installation Process"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <InstallationModel3DOverlay />
              </div>
            </div>
          </div>

          {/* Family Number Setup */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Family Number Setup</h3>
              </div>
              <p className="text-lg text-gray-600">
                Register your family's primary contact number for direct calls and secondary numbers for WhatsApp messaging. This ensures your emergency messages reach all designated family members instantly.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative overflow-hidden">
                <Image
                  src="/visual representations/2.family number.gif"
                  alt="Family Number Setup"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <div className="relative">
                  <Model3DOverlay />
                </div>
              </div>
            </div>
          </div>

          {/* Location-based Initialization */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Location-based Initialization</h3>
              </div>
              <p className="text-lg text-gray-600">
                Connect to the internet via Wi-Fi or SIM card. The device automatically detects your location using GPS/IP and fetches relevant service numbers from our cloud dashboard.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative overflow-hidden">
                <Image
                  src="/visual representations/3.location detection.gif"
                  alt="Location Detection"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <div className="relative">
                  <Model3DOverlay />
                </div>
              </div>
            </div>
          </div>

          {/* Auto-Assigning Service Switches */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Auto-Assigning Service Switches</h3>
              </div>
              <p className="text-lg text-gray-600">
                Based on your location, the system automatically maps the nearest hospital, pharmacy, ambulance, and grocery services to their respective switches.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative overflow-hidden">
                <Image
                  src="/visual representations/4.auto assign services.gif"
                  alt="Auto Service Assignment"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <div className="relative">
                  <Model3DOverlay />
                </div>
              </div>
            </div>
          </div>

          {/* Switch Functionality */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  5
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Switch Functionality</h3>
              </div>
              <p className="text-lg text-gray-600">
                Each switch initiates both a direct call and sends a WhatsApp message to the assigned service. The system provides voice feedback in your preferred language.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative overflow-hidden">
                <Image
                  src="/visual representations/5.Switch fucntionality.gif"
                  alt="Switch Functionality"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <div className="relative">
                  <Model3DOverlay />
                </div>
              </div>
            </div>
          </div>

          {/* Camera Functionality */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  6
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Camera Functionality</h3>
              </div>
              <p className="text-lg text-gray-600">
                The integrated camera activates automatically during emergency calls, recording a 10-second video that's sent to family members via WhatsApp for better situation assessment.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative overflow-hidden">
                <Image
                  src="/visual representations/6.Camera .gif"
                  alt="Camera Functionality"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <div className="relative">
                  <Model3DOverlay />
                </div>
              </div>
            </div>
          </div>

          {/* Sensor Functionality */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  7
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sensor Functionality</h3>
              </div>
              <p className="text-lg text-gray-600">
                The touch sensor monitors vital signs like pulse rate. It can detect abnormalities and automatically alert family members and healthcare providers.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative overflow-hidden">
                <Image
                  src="/visual representations/7.Sensor.gif"
                  alt="Sensor Functionality"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <div className="relative">
                  <Model3DOverlay />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Communication */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  8
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Dashboard Communication</h3>
              </div>
              <p className="text-lg text-gray-600">
                All interactions are logged in our secure cloud dashboard. Family members can monitor device usage, check service response times, and manage emergency contacts through the dashboard.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[600px] relative overflow-hidden">
                <Image
                  src="/visual representations/8.Dashboard.gif"
                  alt="Dashboard Communication"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
                <div className="relative">
                  <Model3DOverlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 