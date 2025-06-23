import React from 'react'

export default function Audience() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Who Benefits from Switch-Phone
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Emergency response solutions for diverse communities and professionals
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Individual Users */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Individual Users</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Personal safety and peace of mind for everyday situations
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Elderly Adults</h3>
                  <p className="text-gray-600">
                    Independent living with immediate access to medical assistance, fall detection, and family notifications.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Enthusiasts</h3>
                  <p className="text-gray-600">
                    Hikers, campers, and adventurers who need reliable emergency communication in remote areas.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Parents & Families</h3>
                  <p className="text-gray-600">
                    Family safety coordination with child monitoring and emergency response for all family members.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solo Travelers</h3>
                  <p className="text-gray-600">
                    International travelers who need reliable emergency services regardless of location or language barriers.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Users */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Users</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Specialized emergency response for high-risk professions
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Services</h3>
                  <p className="text-gray-600">
                    Police, firefighters, and paramedics who need backup communication and coordination tools.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Providers</h3>
                  <p className="text-gray-600">
                    Medical professionals requiring instant access to emergency services and patient coordination.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Military & Law Enforcement</h3>
                  <p className="text-gray-600">
                    Secure communication channels and rapid response coordination for tactical operations.
                  </p>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Maritime Operations</h3>
                  <p className="text-gray-600">
                    Coast guard, marine rescue, and commercial fishing operations requiring water emergency protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for specific industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hospital emergency protocols</li>
                <li>• Patient monitoring systems</li>
                <li>• Medical staff coordination</li>
                <li>• Ambulance dispatch integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• School safety systems</li>
                <li>• Campus security coordination</li>
                <li>• Student emergency response</li>
                <li>• Staff safety protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Corporate</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Workplace safety compliance</li>
                <li>• Executive protection</li>
                <li>• Business continuity planning</li>
                <li>• Employee safety programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Industrial</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Manufacturing safety</li>
                <li>• Hazardous material handling</li>
                <li>• Worker protection systems</li>
                <li>• Emergency evacuation protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Hospitality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Guest safety services</li>
                <li>• Hotel security systems</li>
                <li>• Event emergency planning</li>
                <li>• Tourism safety coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Maritime</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Marine rescue operations</li>
                <li>• Vessel safety systems</li>
                <li>• Port security coordination</li>
                <li>• Offshore emergency response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Find Your Solution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're an individual seeking personal safety or an organization requiring comprehensive emergency response, 
            Switch-Phone has a solution tailored for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Personal Device
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Enterprise Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 