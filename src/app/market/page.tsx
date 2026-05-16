'use client'
import React from 'react'

const Market = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Market Analysis
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Emergency Assistive IoT for Elderly & Dependents
          </p>
        </div>
      </div>

      {/* Market Size Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* TAM Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-blue-600 font-bold text-lg mb-2">TAM</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ₹40,000 - 48,000 Cr
            </h3>
            <p className="text-gray-600 text-sm">USD 5-6 Billion</p>
            <div className="mt-4 text-gray-600">
              <p className="mb-2">Combined market segments:</p>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li className="flex flex-col">
                  <span>India Assistive Technology: USD 2.40B (2024)</span>
                  <span className="text-blue-600 text-xs ml-4">
                    Source: <a href="https://www.kenresearch.com" target="_blank" rel="noopener noreferrer">[KenResearch]</a>, 
                    <a href="https://www.imarcgroup.com" target="_blank" rel="noopener noreferrer">[IMARC]</a>
                  </span>
                </li>
                <li className="flex flex-col">
                  <span>IoT Devices Market: USD 2.89B (2024)</span>
                  <span className="text-blue-600 text-xs ml-4">
                    Source: <a href="https://www.grandviewresearch.com" target="_blank" rel="noopener noreferrer">[GrandView]</a>
                  </span>
                </li>
                <li className="flex flex-col">
                  <span>IoT for Public Safety: USD 1.98B (2022)</span>
                  <span className="text-blue-600 text-xs ml-4">
                    Source: <a href="https://www.stratviewresearch.com" target="_blank" rel="noopener noreferrer">[Stratview]</a>, 
                    <a href="https://www.marketsandmarkets.com" target="_blank" rel="noopener noreferrer">[M&M]</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* SAM Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-green-600 font-bold text-lg mb-2">SAM</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ₹5,800 Cr
            </h3>
            <p className="text-gray-600 text-sm">USD 716 Million</p>
            <div className="mt-4 text-gray-600">
              <p className="mb-2">India Disabled & Elderly Assistive Devices Market (2023)</p>
              <p className="text-sm">Projected to reach USD 2.77B by 2030</p>
              <p className="text-blue-600 text-xs mt-2">
                Sources: <a href="https://www.wiseguyreports.com" target="_blank" rel="noopener noreferrer">[WiseGuy]</a>, 
                <a href="https://www.grandviewresearch.com" target="_blank" rel="noopener noreferrer">[GrandView]</a>, 
                <a href="https://www.kenresearch.com" target="_blank" rel="noopener noreferrer">[KenResearch]</a>
              </p>
            </div>
          </div>

          {/* SOM Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-orange-600 font-bold text-lg mb-2">SOM</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ₹50 - 200 Cr
            </h3>
            <p className="text-gray-600 text-sm">USD 6-24 Million</p>
            <div className="mt-4 text-gray-600">
              <p className="mb-2">Go-to-Market Plan:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Pilot: 50,000 units @ ₹10,000 each</li>
                <li>Scale (3-5 years): 200,000 units</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Market Growth Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Market Growth & Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Projections</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-xl mr-3">→</span>
                    <div>
                      <p className="font-semibold">Assistive Technology Market</p>
                      <p className="text-gray-600">USD 2.40B (2024) → USD 3.50B (2033)</p>
                    </div>
                  </div>
                  <span className="text-blue-600 text-xs ml-8 mt-1">
                    Source: <a href="https://www.imarcgroup.com" target="_blank" rel="noopener noreferrer">[IMARC]</a>
                  </span>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-xl mr-3">→</span>
                    <div>
                      <p className="font-semibold">IoT Devices Market</p>
                      <p className="text-gray-600">USD 2.89B (2024) → USD 10.28B (2030)</p>
                    </div>
                  </div>
                  <span className="text-blue-600 text-xs ml-8 mt-1">
                    Sources: <a href="https://www.alliedmarketresearch.com" target="_blank" rel="noopener noreferrer">[Allied]</a>, 
                    <a href="https://www.grandviewresearch.com" target="_blank" rel="noopener noreferrer">[GrandView]</a>
                  </span>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-xl mr-3">→</span>
                    <div>
                      <p className="font-semibold">IoT for Public Safety</p>
                      <p className="text-gray-600">USD 1.98B (2022) → USD 4.56B (2029)</p>
                    </div>
                  </div>
                  <span className="text-blue-600 text-xs ml-8 mt-1">
                    Source: <a href="https://www.stratviewresearch.com" target="_blank" rel="noopener noreferrer">[Stratview]</a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Growth Drivers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-semibold">Elderly Demographics</p>
                    <p className="text-gray-600">Growing elderly population in India requiring assistive care</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-semibold">Rising Safety Concerns</p>
                    <p className="text-gray-600">Increased focus on elderly safety and emergency response</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-semibold">Smart Home Adoption</p>
                    <p className="text-gray-600">Growing acceptance of IoT devices in Indian households</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-semibold">Market Growth Rate</p>
                    <p className="text-gray-600">IoT and assistive tech growing at 20%+ CAGR</p>
                    <p className="text-blue-600 text-xs mt-1">
                      Sources: <a href="https://www.techsciresearch.com" target="_blank" rel="noopener noreferrer">[TechSci]</a>, 
                      <a href="https://www.nextmsc.com" target="_blank" rel="noopener noreferrer">[NextMSC]</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sources Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Market Research Sources</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">India Disabled & Elderly Assistive Device Market</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-600">
                <li><a href="https://www.nextmsc.com" target="_blank" rel="noopener noreferrer">NextMSC</a></li>
                <li><a href="https://www.imarcgroup.com" target="_blank" rel="noopener noreferrer">IMARC Group</a></li>
                <li><a href="https://www.wiseguyreports.com" target="_blank" rel="noopener noreferrer">Wise Guy Reports</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">India Assistive Technology Market</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-600">
                <li><a href="https://www.kenresearch.com" target="_blank" rel="noopener noreferrer">Ken Research</a></li>
                <li><a href="https://www.imarcgroup.com" target="_blank" rel="noopener noreferrer">IMARC Group</a></li>
                <li><a href="https://www.researchandmarkets.com" target="_blank" rel="noopener noreferrer">Research and Markets</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">India IoT Market</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-600">
                <li><a href="https://www.grandviewresearch.com" target="_blank" rel="noopener noreferrer">Grand View Research</a></li>
                <li><a href="https://www.alliedmarketresearch.com" target="_blank" rel="noopener noreferrer">Allied Market Research</a></li>
                <li><a href="https://www.techsciresearch.com" target="_blank" rel="noopener noreferrer">TechSci Research</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">India IoT for Public Safety</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-600">
                <li><a href="https://www.stratviewresearch.com" target="_blank" rel="noopener noreferrer">Stratview Research</a></li>
                <li><a href="https://www.marketresearchfuture.com" target="_blank" rel="noopener noreferrer">Market Research Future</a></li>
                <li><a href="https://www.marketsandmarkets.com" target="_blank" rel="noopener noreferrer">Markets and Markets</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Market 