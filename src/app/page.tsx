import React from 'react'
import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Essential Services at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five critical services integrated into one powerful device for your daily needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center p-6 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hospital</h3>
              <p className="text-gray-600">
                Find nearby hospitals and medical centers with integrated GPS location sharing and real-time availability.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pharmacy</h3>
              <p className="text-gray-600">
                Locate pharmacies and medicine stores with prescription tracking and medication availability alerts.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚑</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ambulance</h3>
              <p className="text-gray-600">
                Emergency ambulance services with rapid response coordination and medical emergency support.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grocery</h3>
              <p className="text-gray-600">
                Find grocery stores and supermarkets with real-time inventory and delivery coordination services.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍👩‍👧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family</h3>
              <p className="text-gray-600">
                Family services and support with communication tools and safety coordination features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Making Life Easier When You Need It Most
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl lg:text-6xl font-bold text-red-400 mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Always Available</h3>
              <p className="text-gray-300">Round-the-clock access to all essential services</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">99.9%</div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-300">System uptime ensuring services are always accessible</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">5min</div>
              <h3 className="text-xl font-semibold mb-2">Response Time</h3>
              <p className="text-gray-300">Average response time for service connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who rely on Switch-Phone for their daily service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Switch-Phone
            </Link>
            <Link href="/contact" className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 