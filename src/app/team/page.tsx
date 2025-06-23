import React from 'react'

export default function Team() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Dedicated professionals working to revolutionize emergency response worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Visionary leaders driving innovation in emergency response technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">DR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Rodriguez</h3>
              <p className="text-blue-600 font-semibold mb-4">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Former Emergency Medicine Director with 15+ years experience in trauma care and emergency response systems.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Johnson</h3>
              <p className="text-red-600 font-semibold mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Technology veteran with expertise in IoT, telecommunications, and emergency communication systems.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">AC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Admiral Catherine Chen</h3>
              <p className="text-green-600 font-semibold mb-4">Chief Strategy Officer</p>
              <p className="text-gray-600 text-sm">
                Retired Coast Guard Admiral with extensive experience in maritime rescue operations and emergency coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Development Team
            </h2>
            <p className="text-xl text-gray-600">
              Expert engineers and developers building the future of emergency response
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">DK</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">David Kim</h3>
              <p className="text-purple-600 font-semibold text-sm mb-2">Lead Hardware Engineer</p>
              <p className="text-gray-600 text-xs">Specializes in ruggedized emergency devices and sensor integration</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">EP</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Emily Parker</h3>
              <p className="text-indigo-600 font-semibold text-sm mb-2">Software Architect</p>
              <p className="text-gray-600 text-xs">Expert in real-time communication systems and emergency protocols</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">JL</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">James Liu</h3>
              <p className="text-orange-600 font-semibold text-sm mb-2">AI/ML Engineer</p>
              <p className="text-gray-600 text-xs">Develops predictive algorithms for emergency response optimization</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">MG</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Maria Garcia</h3>
              <p className="text-teal-600 font-semibold text-sm mb-2">Security Engineer</p>
              <p className="text-gray-600 text-xs">Ensures military-grade encryption and secure communications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Experts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Emergency Response Experts
            </h2>
            <p className="text-xl text-gray-600">
              Real-world experience from the front lines of emergency response
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Fire & Rescue Advisory</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Chief Robert Martinez</p>
                  <p className="text-gray-600">25 years Fire Department, Emergency Response Protocols</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Captain Lisa Thompson</p>
                  <p className="text-gray-600">Hazmat Specialist, Urban Search & Rescue</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Medical Advisory</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Dr. Amanda Foster</p>
                  <p className="text-gray-600">Emergency Medicine, Trauma Surgery</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Paramedic John Davis</p>
                  <p className="text-gray-600">20 years EMS, Critical Care Transport</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Law Enforcement Advisory</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Detective Sarah Wilson</p>
                  <p className="text-gray-600">SWAT Team Leader, Crisis Response</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sergeant Mike O'Connor</p>
                  <p className="text-gray-600">Community Policing, Emergency Coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advisors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical Advisors
            </h2>
            <p className="text-xl text-gray-600">
              Industry leaders guiding our technological innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Advisory Board</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">PJ</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Prof. Patricia Johnson</p>
                    <p className="text-gray-600 text-sm">MIT - IoT & Emergency Systems</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">RB</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. Robert Brown</p>
                    <p className="text-gray-600 text-sm">Stanford - AI & Machine Learning</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">AL</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. Anna Lee</p>
                    <p className="text-gray-600 text-sm">Carnegie Mellon - Cybersecurity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Advisory Board</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">TW</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Thomas Wright</p>
                    <p className="text-gray-600 text-sm">Former FEMA Director</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">JM</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Jennifer Miller</p>
                    <p className="text-gray-600 text-sm">Former Red Cross Operations Director</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">CG</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Colonel Chris Garcia</p>
                    <p className="text-gray-600 text-sm">Military Communications Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Support & Operations
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated teams ensuring 24/7 emergency response support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Operations Center</h3>
              <p className="text-gray-600 text-sm">Round-the-clock monitoring and emergency response coordination</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-600 text-sm">Expert technical assistance for device setup and troubleshooting</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Training Team</h3>
              <p className="text-gray-600 text-sm">Comprehensive training programs for users and emergency responders</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Partnership Team</h3>
              <p className="text-gray-600 text-sm">Building relationships with emergency services and healthcare providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us save lives and revolutionize emergency response. We're always looking for passionate individuals 
            who want to make a difference when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 