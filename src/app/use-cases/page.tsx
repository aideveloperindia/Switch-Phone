import React from 'react'

export default function UseCases() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              SwitchPhone Use Cases
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover how SwitchPhone connects you to essential services in your daily life
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Hospital Services</h2>
              <p className="text-lg text-gray-600">
                Find the right hospital or medical center for your healthcare needs
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Emergency Care</h3>
                  <p className="text-gray-600 text-sm">
                    Locate nearest hospitals with emergency rooms, check wait times, and get directions instantly.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Specialist Care</h3>
                  <p className="text-gray-600 text-sm">
                    Find hospitals with specific departments like cardiology, orthopedics, or pediatrics.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Appointment Scheduling</h3>
                  <p className="text-gray-600 text-sm">
                    Connect directly with hospital booking systems to schedule appointments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Study: Sarah's Experience</h3>
              <p className="text-gray-700 mb-4">
                "When my daughter fell and injured her arm, I used SwitchPhone to find the nearest 
                pediatric emergency room. It showed me three options with current wait times, and I was 
                able to get her the care she needed within 15 minutes."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600">
                  <strong>Response:</strong> 3 nearby hospitals found<br/>
                  <strong>Wait Time:</strong> 8 minutes average<br/>
                  <strong>Distance:</strong> 2.3 miles to closest facility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacy Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 p-8 rounded-2xl order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Study: John's Medication</h3>
              <p className="text-gray-700 mb-4">
                "I needed to refill my prescription while traveling. SwitchPhone found pharmacies that 
                had my medication in stock and could transfer my prescription. I had my medication 
                within an hour."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600">
                  <strong>Result:</strong> 5 pharmacies with medication in stock<br/>
                  <strong>Transfer Time:</strong> 30 minutes<br/>
                  <strong>Pickup:</strong> Ready for collection
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">💊</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Pharmacy Services</h2>
              <p className="text-lg text-gray-600">
                Locate pharmacies and manage your medication needs efficiently
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Prescription Filling</h3>
                  <p className="text-gray-600 text-sm">
                    Find pharmacies with your medication in stock and check prescription status.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">24/7 Pharmacies</h3>
                  <p className="text-gray-600 text-sm">
                    Locate pharmacies open late or 24/7 for urgent medication needs.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Insurance Coverage</h3>
                  <p className="text-gray-600 text-sm">
                    Check which pharmacies accept your insurance and compare medication costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambulance Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🚑</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Ambulance Services</h2>
              <p className="text-lg text-gray-600">
                Emergency medical transportation when you need it most
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Emergency Response</h3>
                  <p className="text-gray-600 text-sm">
                    Direct connection to ambulance services with GPS location sharing for rapid response.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Medical Transport</h3>
                  <p className="text-gray-600 text-sm">
                    Schedule non-emergency medical transportation for appointments and procedures.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Status Updates</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time updates on ambulance location and estimated arrival time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Study: Emergency Response</h3>
              <p className="text-gray-700 mb-4">
                "When my elderly father had chest pains, I used SwitchPhone to call an ambulance. 
                The system automatically shared his location and medical history, helping paramedics 
                provide immediate appropriate care."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600">
                  <strong>Response Time:</strong> 4 minutes<br/>
                  <strong>Medical History:</strong> Shared automatically<br/>
                  <strong>Outcome:</strong> Successful treatment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grocery Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-orange-50 p-8 rounded-2xl order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Study: Weekly Shopping</h3>
              <p className="text-gray-700 mb-4">
                "I moved to a new city and needed to find grocery stores nearby. SwitchPhone showed me 
                all options within 5 miles, their hours, and even helped me find stores with specific 
                organic products I needed."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600">
                  <strong>Results:</strong> 8 stores found<br/>
                  <strong>Specialty Items:</strong> 3 stores with organic section<br/>
                  <strong>Delivery:</strong> 4 stores offer delivery
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Grocery Services</h2>
              <p className="text-lg text-gray-600">
                Find grocery stores and supermarkets for all your shopping needs
              </p>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Store Locator</h3>
                  <p className="text-gray-600 text-sm">
                    Find nearby grocery stores, supermarkets, and specialty food stores with hours and directions.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Delivery Options</h3>
                  <p className="text-gray-600 text-sm">
                    Check which stores offer delivery or pickup services in your area.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Special Diets</h3>
                  <p className="text-gray-600 text-sm">
                    Find stores with organic, gluten-free, kosher, or other specialty food sections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍👩‍👧</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Family Services</h2>
              <p className="text-lg text-gray-600">
                Connect with family support services and keep your loved ones safe
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Family Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Group messaging and location sharing to keep family members connected and informed.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Child Services</h3>
                  <p className="text-gray-600 text-sm">
                    Find daycare centers, schools, pediatric services, and family-friendly activities.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Elder Care</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with senior services, home care providers, and assisted living facilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Study: Family Coordination</h3>
              <p className="text-gray-700 mb-4">
                "As a working parent, SwitchPhone helps me coordinate with my family. I can share my 
                location when running errands, find family services nearby, and keep everyone 
                connected throughout the day."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600">
                  <strong>Family Members:</strong> 4 connected<br/>
                  <strong>Services Found:</strong> Daycare, after-school programs<br/>
                  <strong>Communication:</strong> Real-time updates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Making Daily Life Easier
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl lg:text-6xl font-bold text-red-400 mb-4">10K+</div>
              <h3 className="text-xl font-semibold mb-2">Service Locations</h3>
              <p className="text-gray-300">Hospitals, pharmacies, and essential services mapped</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Always Available</h3>
              <p className="text-gray-300">Round-the-clock access to essential services</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">98%</div>
              <h3 className="text-xl font-semibold mb-2">User Satisfaction</h3>
              <p className="text-gray-300">Users find what they need quickly and easily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience SwitchPhone?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who rely on SwitchPhone for their daily service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get SwitchPhone
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 