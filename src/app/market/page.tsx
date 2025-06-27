import React from 'react'

export default function Market() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Market Impact & Statistics
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Transforming emergency response across industries and communities worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Lives Saved, Time Reduced, Impact Multiplied
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="text-5xl font-bold text-red-600 mb-4">10,000+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lives Saved</h3>
              <p className="text-gray-600">Emergency interventions that prevented fatalities</p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-4">60%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time Reduction</h3>
              <p className="text-gray-600">Average improvement in emergency response times</p>
            </div>
            
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="text-5xl font-bold text-green-600 mb-4">500+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cities Covered</h3>
                              <p className="text-gray-600">Urban areas with Switch-Phone emergency integration</p>
            </div>
            
            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="text-5xl font-bold text-orange-600 mb-4">99.9%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">System Uptime</h3>
              <p className="text-gray-600">Reliability ensuring help is always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry Transformation
            </h2>
            <p className="text-xl text-gray-600">
              How Switch-Phone is revolutionizing emergency response across sectors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🏥</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare Sector</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-red-600">45%</div>
                    <p className="text-gray-600">Reduction in cardiac arrest fatalities</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">3.2min</div>
                    <p className="text-gray-600">Average ambulance response time</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">2,500+</div>
                    <p className="text-gray-600">Hospitals integrated</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">89%</div>
                    <p className="text-gray-600">Patient satisfaction increase</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">👮</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Law Enforcement</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">78%</div>
                    <p className="text-gray-600">Improvement in officer safety</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1.8min</div>
                    <p className="text-gray-600">Average backup response time</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1,200+</div>
                    <p className="text-gray-600">Police departments using system</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">92%</div>
                    <p className="text-gray-600">Crime response effectiveness</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">⚓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Maritime Safety</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-600">67%</div>
                    <p className="text-gray-600">Reduction in maritime fatalities</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">15min</div>
                    <p className="text-gray-600">Average rescue response time</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">850+</div>
                    <p className="text-gray-600">Vessels equipped with system</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">96%</div>
                    <p className="text-gray-600">Successful water rescues</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🏭</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Industrial Safety</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">82%</div>
                    <p className="text-gray-600">Reduction in workplace accidents</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">4.5min</div>
                    <p className="text-gray-600">Emergency response time</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">300+</div>
                    <p className="text-gray-600">Industrial facilities protected</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">94%</div>
                    <p className="text-gray-600">Compliance improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Global Coverage Areas
            </h2>
            <p className="text-xl text-gray-600">
              Switch-Phone emergency response network spans across continents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">North America</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>United States</span>
                  <span className="font-semibold">245 cities</span>
                </div>
                <div className="flex justify-between">
                  <span>Canada</span>
                  <span className="font-semibold">89 cities</span>
                </div>
                <div className="flex justify-between">
                  <span>Mexico</span>
                  <span className="font-semibold">34 cities</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Europe</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>United Kingdom</span>
                  <span className="font-semibold">67 cities</span>
                </div>
                <div className="flex justify-between">
                  <span>Germany</span>
                  <span className="font-semibold">45 cities</span>
                </div>
                <div className="flex justify-between">
                  <span>France</span>
                  <span className="font-semibold">38 cities</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Asia Pacific</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Japan</span>
                  <span className="font-semibold">56 cities</span>
                </div>
                <div className="flex justify-between">
                  <span>Australia</span>
                  <span className="font-semibold">23 cities</span>
                </div>
                <div className="flex justify-between">
                  <span>Singapore</span>
                  <span className="font-semibold">Full coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Economic Impact
            </h2>
            <p className="text-xl text-gray-300">
              Quantifying the value of faster emergency response
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.3B</div>
              <h3 className="text-lg font-semibold mb-2">Healthcare Savings</h3>
              <p className="text-gray-300 text-sm">Reduced medical costs through faster intervention</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">$890M</div>
              <h3 className="text-lg font-semibold mb-2">Insurance Claims Prevented</h3>
              <p className="text-gray-300 text-sm">Accidents and incidents avoided</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">$1.2B</div>
              <h3 className="text-lg font-semibold mb-2">Productivity Gains</h3>
              <p className="text-gray-300 text-sm">Reduced downtime and faster recovery</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">$450M</div>
              <h3 className="text-lg font-semibold mb-2">Legal Cost Reduction</h3>
              <p className="text-gray-300 text-sm">Liability and litigation savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projections */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Future Growth Projections
            </h2>
            <p className="text-xl text-gray-600">
              Expanding emergency response capabilities worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2024 Goals</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    1,000 cities with full Switch-Phone integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    50% reduction in average emergency response times
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Integration with 5,000+ healthcare facilities
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2025 Vision</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    AI-powered predictive emergency response
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Satellite emergency communication backup
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Global emergency response standardization
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Expansion</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Current Market Penetration</span>
                    <span className="font-bold text-gray-900">23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '23%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">2024 Target</span>
                    <span className="font-bold text-gray-900">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">2025 Projection</span>
                    <span className="font-bold text-gray-900">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 