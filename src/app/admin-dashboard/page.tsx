'use client'

import React, { useState, useEffect } from 'react'

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedState, setSelectedState] = useState('All States')
  const [selectedService, setSelectedService] = useState('All Services')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Mock data for demonstration
  const recentOnboarding = [
    { id: 1, location: 'Mumbai, Maharashtra', time: '2 mins ago', status: 'Active' },
    { id: 2, location: 'Delhi, Delhi', time: '5 mins ago', status: 'Initializing' },
    { id: 3, location: 'Bangalore, Karnataka', time: '8 mins ago', status: 'Active' },
    { id: 4, location: 'Chennai, Tamil Nadu', time: '12 mins ago', status: 'Active' },
  ]

  const callActivity = [
    { id: 1, service: 'Hospital', location: 'Mumbai', time: '1 min ago', duration: '5:32' },
    { id: 2, service: 'Family', location: 'Delhi', time: '3 mins ago', duration: '2:15' },
    { id: 3, service: 'Pharmacy', location: 'Pune', time: '7 mins ago', duration: '1:45' },
    { id: 4, service: 'Ambulance', location: 'Hyderabad', time: '10 mins ago', duration: '8:20' },
  ]

  const pulseData = [
    { id: 1, user: 'User #1234', reading: '78 BPM', status: 'Normal', time: '2 mins ago' },
    { id: 2, user: 'User #5678', reading: '95 BPM', status: 'High', time: '5 mins ago' },
    { id: 3, user: 'User #9012', reading: '65 BPM', status: 'Low', time: '8 mins ago' },
    { id: 4, user: 'User #3456', reading: '82 BPM', status: 'Normal', time: '12 mins ago' },
  ]

  const medicalAlerts = [
    { id: 1, user: 'User #5678', condition: 'Hypertension Risk', severity: 'High', prediction: '85%' },
    { id: 2, user: 'User #9012', condition: 'Bradycardia', severity: 'Medium', prediction: '72%' },
    { id: 3, user: 'User #7890', condition: 'Irregular Heartbeat', severity: 'High', prediction: '91%' },
  ]

  const clientDirectory = [
    { id: 1, name: 'Apollo Hospital', type: 'Hospital', city: 'Mumbai', status: 'Active' },
    { id: 2, name: 'MedPlus Pharmacy', type: 'Pharmacy', city: 'Delhi', status: 'Active' },
    { id: 3, name: 'Zomato Ambulance', type: 'Ambulance', city: 'Bangalore', status: 'Active' },
    { id: 4, name: 'BigBasket', type: 'Grocery', city: 'Chennai', status: 'Active' },
  ]

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Last Updated: {currentTime.toLocaleTimeString()}
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Devices</p>
                <p className="text-2xl font-bold text-blue-600">1,247</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Calls</p>
                <p className="text-2xl font-bold text-green-600">3,892</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Health Alerts</p>
                <p className="text-2xl font-bold text-red-600">47</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Partner Clients</p>
                <p className="text-2xl font-bold text-purple-600">156</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Onboarding Panel */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-green-500 mr-2">🟢</span>
                    Live Onboarding
                  </h2>
                  <span className="text-sm text-gray-500">Real-time activations</span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOnboarding.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold">#{item.id}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.location}</p>
                          <p className="text-sm text-gray-500">{item.time}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call Activity Monitor */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-blue-500 mr-2">📞</span>
                    Call Activity Monitor
                  </h2>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  >
                    <option>All Services</option>
                    <option>Hospital</option>
                    <option>Pharmacy</option>
                    <option>Ambulance</option>
                    <option>Grocery</option>
                    <option>Family</option>
                  </select>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {callActivity.map((call) => (
                    <div key={call.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          call.service === 'Hospital' ? 'bg-red-100' :
                          call.service === 'Family' ? 'bg-purple-100' :
                          call.service === 'Pharmacy' ? 'bg-blue-100' :
                          'bg-green-100'
                        }`}>
                          <span className="text-sm font-bold">
                            {call.service === 'Hospital' ? '🏥' :
                             call.service === 'Family' ? '👨‍👩‍👧‍👦' :
                             call.service === 'Pharmacy' ? '💊' :
                             call.service === 'Ambulance' ? '🚑' : '🛒'}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{call.service} - {call.location}</p>
                          <p className="text-sm text-gray-500">{call.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{call.duration}</p>
                        <p className="text-sm text-green-600">Completed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Medical Analysis Engine */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="text-red-500 mr-2">🩺</span>
                  Medical Analysis Engine
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {medicalAlerts.map((alert) => (
                    <div key={alert.id} className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{alert.user}</p>
                          <p className="text-sm text-gray-600">{alert.condition}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-red-600">{alert.prediction} confidence</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            alert.severity === 'High' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {alert.severity} Risk
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Pulse Sensor Records */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="text-pink-500 mr-2">💓</span>
                  Pulse Sensor Records
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {pulseData.map((pulse) => (
                    <div key={pulse.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{pulse.user}</p>
                          <p className="text-sm text-gray-500">{pulse.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{pulse.reading}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            pulse.status === 'Normal' 
                              ? 'bg-green-100 text-green-800' 
                              : pulse.status === 'High'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {pulse.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User Segmentation */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-indigo-500 mr-2">👥</span>
                    User Segmentation
                  </h2>
                  <select 
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  >
                    <option>All States</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                  </select>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Maharashtra</span>
                    <span className="font-bold text-blue-600">342 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Delhi</span>
                    <span className="font-bold text-blue-600">289 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Karnataka</span>
                    <span className="font-bold text-blue-600">234 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tamil Nadu</span>
                    <span className="font-bold text-blue-600">198 users</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Directory */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="text-orange-500 mr-2">🏢</span>
                  Client Directory
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {clientDirectory.map((client) => (
                    <div key={client.id} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{client.name}</p>
                          <p className="text-sm text-gray-500">{client.type} • {client.city}</p>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {client.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Analytics & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Analytics Dashboard */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-green-500 mr-2">📊</span>
                User Benefit Analytics
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">89%</p>
                  <p className="text-sm text-gray-600">Health Improvement</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">67%</p>
                  <p className="text-sm text-gray-600">Faster Response</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">₹2.3L</p>
                  <p className="text-sm text-gray-600">Cost Savings</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">94%</p>
                  <p className="text-sm text-gray-600">User Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Live Map View */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-blue-500 mr-2">🗺️</span>
                Live Map View
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center relative">
                <div className="text-center">
                  <span className="text-6xl">🇮🇳</span>
                  <p className="text-lg font-semibold text-gray-700 mt-2">India Coverage Map</p>
                  <p className="text-sm text-gray-500">1,247 active devices nationwide</p>
                </div>
                {/* Mock location pins */}
                <div className="absolute top-4 left-8 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-12 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-12 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 right-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <div className="mt-4 flex justify-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Active</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>In Call</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Emergency</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span>Offline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Medicines & Purchase Data */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-blue-500 mr-2">💊</span>
                Medicine Analytics
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Prescriptions</span>
                  <span className="font-bold text-blue-600">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Avg. Response Time</span>
                  <span className="font-bold text-green-600">12 mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Missed Alerts</span>
                  <span className="font-bold text-red-600">23</span>
                </div>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-purple-500 mr-2">🎛️</span>
                Device Control
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Update Switch Assignments
                </button>
                <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Modify Pulse Thresholds
                </button>
                <button className="w-full py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  Update Emergency Contacts
                </button>
                <button className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Remote Camera Access
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-yellow-500 mr-2">🔔</span>
                System Notifications
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <p className="text-sm font-medium text-red-800">High pulse detected</p>
                  <p className="text-xs text-red-600">User #5678 - 2 mins ago</p>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                  <p className="text-sm font-medium text-yellow-800">Device offline</p>
                  <p className="text-xs text-yellow-600">Mumbai #1234 - 5 mins ago</p>
                </div>
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <p className="text-sm font-medium text-green-800">New onboarding</p>
                  <p className="text-xs text-green-600">Pune #5678 - 8 mins ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 