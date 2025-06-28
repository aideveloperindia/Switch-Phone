'use client'
import React from 'react'

const UseCases = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Use Cases
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our Switch Phone device is engineered for real-world health needs — especially for elderly individuals, 
            bedridden patients, and residents who live alone. The device offers seamless emergency communication 
            and daily health monitoring through a built-in pulse sensor, ensuring both safety and data-driven wellness insights.
          </p>
        </div>
      </div>

      {/* Primary Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Use Case 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-green-600 text-2xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Elderly or Bedridden Residents in Apartments
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Who is it for?</h3>
                <p className="text-gray-600">
                  Residents aged 60+ or bedridden individuals who live alone or remain unsupervised for long periods.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">How it helps:</h3>
                <p className="text-gray-600">
                  With just a tap on the emergency switch or daily use of the sensor, they can alert family members 
                  or health workers instantly.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Deployment model:</h3>
                <p className="text-gray-600">
                  We collaborate with apartment societies and gated community management teams to offer this directly 
                  to residents who need it the most.
                </p>
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-green-600 text-2xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Pre-installed in New Apartments
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Who is it for?</h3>
                <p className="text-gray-600">
                  Buyers of upcoming or under-construction apartment projects.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">How it helps:</h3>
                <p className="text-gray-600">
                  Builders can pre-install the device to make the property elderly-friendly and health-aware. 
                  This adds smart safety value to the home and appeals to modern buyers.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Deployment model:</h3>
                <p className="text-gray-600">
                  Partner with real estate developers and builders to integrate our device into their health/safety 
                  infrastructure from Day 1.
                </p>
              </div>
            </div>
          </div>

          {/* Use Case 3 - Hospital White Label B2B */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-green-600 text-2xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Hospital-Branded Patient Care Solution
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Who is it for?</h3>
                <p className="text-gray-600">
                  Hospitals looking to extend their care services beyond hospital walls and maintain continuous connection with their existing patients.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">How it helps:</h3>
                <p className="text-gray-600">
                  Hospitals can offer the device under their own brand name, strengthening patient relationships and providing continuous health monitoring for post-discharge care.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Deployment model:</h3>
                <p className="text-gray-600">
                  White-labeled B2B partnership where hospitals can offer the device to their existing patients, branded with their own identity and integrated into their healthcare ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-blue-600">📊</span> Daily Use, Monthly Insights: Where Informatics Meets Analytics
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              We don't stop at hardware. Our innovation lies in encouraging users to use the sensor every day, 
              so we can collect:
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700">Daily health parameters (like BPM)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700">Longitudinal trends</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700">Anomalies and alert patterns</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 text-center">
              Every month, our system generates personalized health reports — a true blend of informatics and analytics, 
              empowering both individuals and caregivers with preventive insights.
            </p>

            <p className="text-center font-semibold text-blue-800 mt-8">
              🧠 This is why "Informatics" and "Analytics" are part of our company's DNA.
            </p>
          </div>
        </div>
      </div>

      {/* Future Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">🚀</span> Other Potential Use Cases
          </h2>
          <p className="text-gray-600 text-center mb-8">
            (Currently not our focus)
          </p>
          <p className="text-gray-600 mb-6">
            We foresee future deployments in:
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="text-gray-700">Social welfare & student hostels (for direct feedback to authorities)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">•</span>
                <span className="text-gray-700">Watchman desks (to verify visitors with residents directly)</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-800 font-semibold text-center mt-8">
            But right now, our singular focus is on revolutionizing health monitoring in Indian homes.
          </p>
        </div>
      </div>
    </div>
  )
} 

export default UseCases 