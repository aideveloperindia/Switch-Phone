import React from 'react'

export default function HowItWorks() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              How Switch-Phone Works
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Simple, intuitive service access at your fingertips
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Service Connection Process
            </h2>
            <p className="text-xl text-gray-600">
              From selection to connection in seconds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Select</h3>
              <p className="text-gray-600">
                Choose the service you need from the five available options on your Switch-Phone.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Locate</h3>
              <p className="text-gray-600">
                Automatic location detection finds the nearest service providers in your area.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
              <p className="text-gray-600">
                Instant connection to the selected service with all necessary information shared.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Access</h3>
              <p className="text-gray-600">
                Get the help or information you need quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed How It Works Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Setup & Usage Guide
            </h2>
            <p className="text-xl text-gray-600">
              From unboxing to daily use - everything you need to know
            </p>
          </div>

          <div className="space-y-16">
            {/* Installation */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Installation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  When you purchase a Switch-Phone (via Amazon, our website, or partner stores), you receive a complete package containing the device and mounting stand.
                </p>
                <p className="text-gray-600">
                  Simply mount it on the wall using the provided stand. No technical expertise required — it's completely plug-and-play.
                </p>
              </div>
              <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-6xl">📦</span>
                  <p className="text-lg font-semibold text-gray-700 mt-4">Easy Wall Mounting</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Family Number Setup</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  During purchase, you provide two mobile numbers:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">📞</span>
                    <span><strong>Primary number:</strong> Used for calling when the Family switch is pressed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">💬</span>
                    <span><strong>Primary + Secondary numbers:</strong> WhatsApp messages sent to both when Family switch is pressed</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-6xl">👨‍👩‍👧‍👦</span>
                  <p className="text-lg font-semibold text-gray-700 mt-4">Family Connection</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Location-based Initialization</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  When you click the Initialization button after powering on:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">📡</span>
                    <span>Switch-Phone connects to internet via Wi-Fi/SIM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">🌍</span>
                    <span>Captures your location using GPS or IP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">📥</span>
                    <span>Fetches relevant service numbers from our cloud dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-6xl">🗺️</span>
                  <p className="text-lg font-semibold text-gray-700 mt-4">Smart Location Detection</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Auto-Assigning Service Switches</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Each switch gets automatically mapped to the correct local service provider based on your location:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">🏥</span>
                    <span>Hospital switch → Nearest partnered hospital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💊</span>
                    <span>Pharmacy switch → Nearby pharmacy client</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">🚑</span>
                    <span>Ambulance switch → Fastest response unit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">🛒</span>
                    <span>Grocery switch → Instamart, Zepto, Blinkit (location-based)</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-6xl">🎯</span>
                  <p className="text-lg font-semibold text-gray-700 mt-4">Smart Service Mapping</p>
                </div>
              </div>
            </div>

            {/* Switch Functionality */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Switch Functionality</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  When you press any switch:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">🔄</span>
                    <span>Initiates a direct call to the mapped service number</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">🟢</span>
                    <span>Sends WhatsApp messages to relevant parties</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 font-semibold">Example:</p>
                  <p className="text-blue-700">Family switch → Calls primary number + sends WhatsApp to both family numbers</p>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-6xl">📞</span>
                  <p className="text-lg font-semibold text-gray-700 mt-4">Instant Communication</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Camera Functionality</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The camera activates in specific scenarios:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">👨‍👩‍👧‍👦</span>
                    <span>Family switch pressed → 10-second video recorded and sent to both family numbers via WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">👨‍⚕️</span>
                    <span>Doctor or Ambulance requests video during active call → User can record 10-second video and send via WhatsApp</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-6xl">📷</span>
                  <p className="text-lg font-semibold text-gray-700 mt-4">Smart Video Recording</p>
                </div>
              </div>
            </div>

            {/* Dashboard Communication */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    7
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Dashboard Communication</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our backend dashboard enables remote management:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">📷</span>
                    <span>Remotely trigger camera (only with user consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">📞</span>
                    <span>Update assigned service numbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">🖥️</span>
                    <span>Monitor all connected Switch-Phones</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-6xl">🖥️</span>
                  <p className="text-lg font-semibold text-gray-700 mt-4">Remote Management</p>
                </div>
              </div>
            </div>

            {/* Privacy & Data Collection */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Data Analytics</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-blue-600 mr-2">🔒</span>
                    Privacy & Consent
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Users give consent during onboarding for remote access</li>
                    <li>• Camera activation and number updates require permission</li>
                    <li>• All data (pulse, calls, video) securely stored</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-green-600 mr-2">📊</span>
                    Data Collection & Analysis
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pulse data collected when user touches sensor</li>
                    <li>• AI analysis for early illness warning signs</li>
                    <li>• Monthly health reports generated and stored</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Service-Specific Features
            </h2>
            <p className="text-xl text-gray-600">
              Tailored functionality for each service type
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hospital Finder</h3>
                  <p className="text-gray-600">
                    Real-time hospital availability, waiting times, and specialized departments information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pharmacy Locator</h3>
                  <p className="text-gray-600">
                    Prescription tracking, medication availability, and pharmacy hours information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚑</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Medical</h3>
                  <p className="text-gray-600">
                    Direct ambulance dispatch with medical history sharing and GPS location tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Grocery Services</h3>
                  <p className="text-gray-600">
                    Store locator, inventory checking, and delivery coordination services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👨‍👩‍👧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Family Support</h3>
                  <p className="text-gray-600">
                    Family communication tools, safety features, and support service connections.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location Services</h3>
                  <p className="text-gray-600">
                    Precise GPS tracking and location sharing for all connected services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Switch-Phone Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
                          Join thousands of users who depend on Switch-Phone for quick access to essential services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 