'use client'
import React, { useState } from 'react'

// Flow node component for interactive mind map
const FlowNode = ({ 
  children, 
  isVisible, 
  onClick, 
  className = "", 
  isClickable = false,
  emotion = "",
  delay = 0 
}: {
  children: React.ReactNode
  isVisible: boolean
  onClick?: () => void
  className?: string
  isClickable?: boolean
  emotion?: string
  delay?: number
}) => {
  return (
    <div 
      className={`
        transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}
        ${isClickable ? 'cursor-pointer hover:scale-105' : ''}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className={`
        p-4 rounded-xl border-2 shadow-lg text-center font-semibold
        ${isClickable ? 'hover:shadow-xl transition-shadow' : ''}
        ${emotion === 'panic' ? 'bg-red-50 border-red-300 text-red-800' : ''}
        ${emotion === 'calm' ? 'bg-green-50 border-green-300 text-green-800' : ''}
        ${emotion === 'neutral' ? 'bg-blue-50 border-blue-300 text-blue-800' : ''}
        ${emotion === 'confusion' ? 'bg-orange-50 border-orange-300 text-orange-800' : ''}
        ${emotion === 'hope' ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : ''}
        ${!emotion ? 'bg-gray-50 border-gray-300 text-gray-800' : ''}
      `}>
        {children}
      </div>
    </div>
  )
}

// Arrow component for connecting nodes
const Arrow = ({ isVisible, delay = 0 }: { isVisible: boolean, delay?: number }) => (
  <div 
    className={`
      flex justify-center my-4 transition-all duration-500
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="text-3xl text-gray-400">↓</div>
  </div>
)

export default function AudiencePage() {
  const [selectedFlow, setSelectedFlow] = useState<'traditional' | 'switchphone' | null>(null)
  const [traditionalSteps, setTraditionalSteps] = useState<number[]>([])
  const [switchPhoneSteps, setSwitchPhoneSteps] = useState<number[]>([])

  const showTraditionalStep = (step: number) => {
    setTraditionalSteps(prev => [...prev, step])
  }

  const showSwitchPhoneStep = (step: number) => {
    setSwitchPhoneSteps(prev => [...prev, step])
  }

  const resetFlows = () => {
    setSelectedFlow(null)
    setTraditionalSteps([])
    setSwitchPhoneSteps([])
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Hook Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Why Switch-Phone?
            </h1>
            
            <div className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
              🤔 What would you do if you faced a 
              <span className="text-red-400"> sudden health emergency </span>
              right now?
            </div>

            {!selectedFlow && (
              <div className="space-y-6 animate-pulse">
                <p className="text-xl text-gray-300 mb-12">
                  Choose your path to discover the life-changing difference
                </p>
                
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                  <button
                    onClick={() => setSelectedFlow('traditional')}
                    className="group bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-2xl text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 min-w-[300px]"
                  >
                    🔴 Show Me What Normally Happens
                    <div className="text-sm font-normal mt-2 opacity-80">
                      Traditional Emergency Response
                    </div>
                  </button>

                  <div className="text-4xl font-bold text-gray-400">VS</div>

                  <button
                    onClick={() => setSelectedFlow('switchphone')}
                    className="group bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-2xl text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 min-w-[300px]"
                  >
                                         🟢 Show Me How Switch-Phone Handles It
                    <div className="text-sm font-normal mt-2 opacity-80">
                      Automated Emergency Response
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Flow Section */}
      {selectedFlow && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <button
                onClick={resetFlows}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                ← Try the Other Path
              </button>
            </div>

            <div className="max-w-4xl mx-auto">
              {selectedFlow === 'traditional' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-center text-red-400 mb-8">
                    🔴 Traditional Emergency Response Journey
                  </h2>

                  {/* Emergency Start Node */}
                  <FlowNode 
                    isVisible={true} 
                    onClick={() => showTraditionalStep(1)}
                    isClickable={traditionalSteps.length === 0}
                    emotion="panic"
                    className="text-2xl"
                  >
                    🚨 EMERGENCY HAPPENS
                    {traditionalSteps.length === 0 && <div className="text-sm mt-2">Click to see what happens next...</div>}
                  </FlowNode>

                  <Arrow isVisible={traditionalSteps.includes(1)} />

                  <FlowNode isVisible={traditionalSteps.includes(1)} onClick={() => showTraditionalStep(2)} isClickable={traditionalSteps.includes(1) && !traditionalSteps.includes(2)} emotion="panic">
                    📱 Try to Unlock Phone
                    {traditionalSteps.includes(1) && !traditionalSteps.includes(2) && <div className="text-sm mt-2">Hands shaking... Click to continue</div>}
                  </FlowNode>

                  <Arrow isVisible={traditionalSteps.includes(2)} />

                  <FlowNode isVisible={traditionalSteps.includes(2)} onClick={() => showTraditionalStep(3)} isClickable={traditionalSteps.includes(2) && !traditionalSteps.includes(3)} emotion="confusion">
                    📞 Open Contacts App
                    {traditionalSteps.includes(2) && !traditionalSteps.includes(3) && <div className="text-sm mt-2">Where is the doctor's number?</div>}
                  </FlowNode>

                  <Arrow isVisible={traditionalSteps.includes(3)} />

                  <FlowNode isVisible={traditionalSteps.includes(3)} onClick={() => showTraditionalStep(4)} isClickable={traditionalSteps.includes(3) && !traditionalSteps.includes(4)} emotion="confusion">
                    🔍 Search for Known Doctor
                    {traditionalSteps.includes(3) && !traditionalSteps.includes(4) && <div className="text-sm mt-2">Scrolling through contacts...</div>}
                  </FlowNode>

                  <Arrow isVisible={traditionalSteps.includes(4)} />

                  <FlowNode isVisible={traditionalSteps.includes(4)} onClick={() => showTraditionalStep(5)} isClickable={traditionalSteps.includes(4) && !traditionalSteps.includes(5)} emotion="panic">
                    ☎️ Call Doctor
                    {traditionalSteps.includes(4) && !traditionalSteps.includes(5) && <div className="text-sm mt-2">Ring... ring... ring...</div>}
                  </FlowNode>

                  <Arrow isVisible={traditionalSteps.includes(5)} />

                  <div className="grid md:grid-cols-3 gap-4">
                    <FlowNode isVisible={traditionalSteps.includes(5)} onClick={() => showTraditionalStep(6)} isClickable={traditionalSteps.includes(5) && !traditionalSteps.includes(6)} emotion="hope">
                      ✅ Doctor Available
                      <div className="text-xs mt-1">Says "I'll come" - Wait & Hope</div>
                    </FlowNode>
                    
                    <FlowNode isVisible={traditionalSteps.includes(5)} onClick={() => showTraditionalStep(7)} isClickable={traditionalSteps.includes(5) && !traditionalSteps.includes(7)} emotion="confusion">
                      🔄 Doctor Refers Someone Else
                      <div className="text-xs mt-1">Back to contacts - More confusion</div>
                    </FlowNode>
                    
                    <FlowNode isVisible={traditionalSteps.includes(5)} onClick={() => showTraditionalStep(8)} isClickable={traditionalSteps.includes(5) && !traditionalSteps.includes(8)} emotion="panic">
                      📵 Doctor Busy/No Answer
                      <div className="text-xs mt-1">Now what?!</div>
                    </FlowNode>
                  </div>

                  {(traditionalSteps.includes(6) || traditionalSteps.includes(7) || traditionalSteps.includes(8)) && (
                    <>
                      <Arrow isVisible={true} delay={500} />
                      
                      <FlowNode isVisible={true} onClick={() => showTraditionalStep(9)} isClickable={!traditionalSteps.includes(9)} emotion="confusion" delay={500}>
                        📱 Call Friends for Help
                        {!traditionalSteps.includes(9) && <div className="text-sm mt-2">Maybe they know what to do?</div>}
                      </FlowNode>

                      <Arrow isVisible={traditionalSteps.includes(9)} delay={700} />

                      <FlowNode isVisible={traditionalSteps.includes(9)} onClick={() => showTraditionalStep(10)} isClickable={traditionalSteps.includes(9) && !traditionalSteps.includes(10)} emotion="panic" delay={700}>
                        🌐 Google "Hospitals Near Me"
                        {traditionalSteps.includes(9) && !traditionalSteps.includes(10) && <div className="text-sm mt-2">Desperately searching...</div>}
                      </FlowNode>

                      <Arrow isVisible={traditionalSteps.includes(10)} delay={900} />

                      <FlowNode isVisible={traditionalSteps.includes(10)} onClick={() => showTraditionalStep(11)} isClickable={traditionalSteps.includes(10) && !traditionalSteps.includes(11)} emotion="confusion" delay={900}>
                        🏥 Call Hospital → "Doctor Not Available"
                        {traditionalSteps.includes(10) && !traditionalSteps.includes(11) && <div className="text-sm mt-2">Try another hospital...</div>}
                      </FlowNode>

                      <Arrow isVisible={traditionalSteps.includes(11)} delay={1100} />

                      <FlowNode isVisible={traditionalSteps.includes(11)} onClick={() => showTraditionalStep(12)} isClickable={traditionalSteps.includes(11) && !traditionalSteps.includes(12)} emotion="panic" delay={1100}>
                        🚑 Finally Dial Ambulance
                        {traditionalSteps.includes(11) && !traditionalSteps.includes(12) && <div className="text-sm mt-2">Should have done this first!</div>}
                      </FlowNode>

                      <Arrow isVisible={traditionalSteps.includes(12)} delay={1300} />

                      <FlowNode isVisible={traditionalSteps.includes(12)} onClick={() => showTraditionalStep(13)} isClickable={traditionalSteps.includes(12) && !traditionalSteps.includes(13)} emotion="confusion" delay={1300}>
                        📍 "Where is your location?"
                        {traditionalSteps.includes(12) && !traditionalSteps.includes(13) && <div className="text-sm mt-2">Trying to explain address...</div>}
                      </FlowNode>

                      <Arrow isVisible={traditionalSteps.includes(13)} delay={1500} />

                      <FlowNode isVisible={traditionalSteps.includes(13)} onClick={() => showTraditionalStep(14)} isClickable={traditionalSteps.includes(13) && !traditionalSteps.includes(14)} emotion="confusion" delay={1500}>
                        💬 Share WhatsApp Location (Often Inaccurate)
                        {traditionalSteps.includes(13) && !traditionalSteps.includes(14) && <div className="text-sm mt-2">Hope they find me...</div>}
                      </FlowNode>

                      <Arrow isVisible={traditionalSteps.includes(14)} delay={1700} />

                      <FlowNode isVisible={traditionalSteps.includes(14)} emotion="panic" delay={1700} className="text-xl border-4">
                        ⏱️ TOTAL TIME: 15-30 MINUTES
                        <div className="text-lg mt-2 font-bold text-red-300">
                          🔴 EMOTION: Panic • Confusion • Delay • Life at Risk
                        </div>
                      </FlowNode>
                    </>
                  )}
                </div>
              )}

              {selectedFlow === 'switchphone' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-center text-green-400 mb-8">
                    🟢 Switch-Phone Emergency Response Journey
                  </h2>

                  {/* Emergency Start Node */}
                  <FlowNode 
                    isVisible={true} 
                    onClick={() => showSwitchPhoneStep(1)}
                    isClickable={switchPhoneSteps.length === 0}
                    emotion="neutral"
                    className="text-2xl"
                  >
                    🚨 EMERGENCY HAPPENS
                    {switchPhoneSteps.length === 0 && <div className="text-sm mt-2">Click to see the Switch-Phone magic...</div>}
                  </FlowNode>

                  <Arrow isVisible={switchPhoneSteps.includes(1)} />

                  <FlowNode isVisible={switchPhoneSteps.includes(1)} onClick={() => showSwitchPhoneStep(2)} isClickable={switchPhoneSteps.includes(1) && !switchPhoneSteps.includes(2)} emotion="calm">
                    🔬 Sensor Automatically Detects Alarming Parameters
                    {switchPhoneSteps.includes(1) && !switchPhoneSteps.includes(2) && <div className="text-sm mt-2">No human intervention needed</div>}
                  </FlowNode>

                  <Arrow isVisible={switchPhoneSteps.includes(2)} />

                  <FlowNode isVisible={switchPhoneSteps.includes(2)} onClick={() => showSwitchPhoneStep(3)} isClickable={switchPhoneSteps.includes(2) && !switchPhoneSteps.includes(3)} emotion="calm">
                    📊 Triggers IoT Dashboard
                    {switchPhoneSteps.includes(2) && !switchPhoneSteps.includes(3) && <div className="text-sm mt-2">Instant data processing</div>}
                  </FlowNode>

                  <Arrow isVisible={switchPhoneSteps.includes(3)} />

                  <div className="grid md:grid-cols-3 gap-4">
                    <FlowNode isVisible={switchPhoneSteps.includes(3)} onClick={() => showSwitchPhoneStep(4)} isClickable={switchPhoneSteps.includes(3) && !switchPhoneSteps.includes(4)} emotion="hope">
                      👨‍⚕️ Notifies Doctor
                      <div className="text-xs mt-1">Instant alert with vitals</div>
                    </FlowNode>
                    
                    <FlowNode isVisible={switchPhoneSteps.includes(3)} onClick={() => showSwitchPhoneStep(5)} isClickable={switchPhoneSteps.includes(3) && !switchPhoneSteps.includes(5)} emotion="hope">
                      🚑 Notifies Ambulance
                      <div className="text-xs mt-1">GPS location auto-shared</div>
                    </FlowNode>
                    
                    <FlowNode isVisible={switchPhoneSteps.includes(3)} onClick={() => showSwitchPhoneStep(6)} isClickable={switchPhoneSteps.includes(3) && !switchPhoneSteps.includes(6)} emotion="hope">
                      👨‍👩‍👧‍👦 Notifies Family
                      <div className="text-xs mt-1">Everyone informed instantly</div>
                    </FlowNode>
                  </div>

                  {(switchPhoneSteps.includes(4) || switchPhoneSteps.includes(5) || switchPhoneSteps.includes(6)) && (
                    <>
                      <Arrow isVisible={true} delay={300} />
                      
                      <FlowNode isVisible={true} onClick={() => showSwitchPhoneStep(7)} isClickable={!switchPhoneSteps.includes(7)} emotion="hope" delay={300}>
                        📋 Sends Primary Diagnosis Report
                        {!switchPhoneSteps.includes(7) && <div className="text-sm mt-2">AI-powered health analysis</div>}
                      </FlowNode>

                      <Arrow isVisible={switchPhoneSteps.includes(7)} delay={500} />

                      <FlowNode isVisible={switchPhoneSteps.includes(7)} onClick={() => showSwitchPhoneStep(8)} isClickable={switchPhoneSteps.includes(7) && !switchPhoneSteps.includes(8)} emotion="calm" delay={500}>
                        🚑 Switch ON Ambulance Switch
                        {switchPhoneSteps.includes(7) && !switchPhoneSteps.includes(8) && <div className="text-sm mt-2">Automated dispatch</div>}
                      </FlowNode>

                      <Arrow isVisible={switchPhoneSteps.includes(8)} delay={700} />

                      <FlowNode isVisible={switchPhoneSteps.includes(8)} onClick={() => showSwitchPhoneStep(9)} isClickable={switchPhoneSteps.includes(8) && !switchPhoneSteps.includes(9)} emotion="calm" delay={700}>
                        📍 Location Shared Automatically
                        <div className="text-sm mt-1">No calls, No WhatsApp, No confusion</div>
                      </FlowNode>

                      <Arrow isVisible={switchPhoneSteps.includes(9)} delay={900} />

                      <FlowNode isVisible={switchPhoneSteps.includes(9)} onClick={() => showSwitchPhoneStep(10)} isClickable={switchPhoneSteps.includes(9) && !switchPhoneSteps.includes(10)} emotion="calm" delay={900}>
                        🏥 Switch ON Hospital Switch
                        {switchPhoneSteps.includes(9) && !switchPhoneSteps.includes(10) && <div className="text-sm mt-2">Smart hospital selection</div>}
                      </FlowNode>

                      <Arrow isVisible={switchPhoneSteps.includes(10)} delay={1100} />

                      <FlowNode isVisible={switchPhoneSteps.includes(10)} onClick={() => showSwitchPhoneStep(11)} isClickable={switchPhoneSteps.includes(10) && !switchPhoneSteps.includes(11)} emotion="hope" delay={1100}>
                        📅 Doctor Appointment Booked Instantly
                        <div className="text-sm mt-1">If unavailable → Auto-redirects to next best hospital</div>
                      </FlowNode>

                      <Arrow isVisible={switchPhoneSteps.includes(11)} delay={1300} />

                      <FlowNode isVisible={switchPhoneSteps.includes(11)} emotion="calm" delay={1300} className="text-xl border-4">
                        ⏱️ TOTAL TIME: 1-2 MINUTES
                        <div className="text-lg mt-2 font-bold text-green-300">
                          🟢 EMOTION: Calm • Automation • Safety • Life Saved
                        </div>
                      </FlowNode>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {selectedFlow && (
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-8">
                The Choice is Clear
              </h2>
              <p className="text-2xl mb-12 text-gray-300">
                In life-threatening situations, every second counts. 
                <br />
                <span className="text-yellow-400 font-bold">Switch-Phone doesn't just save time — it saves lives.</span>
              </p>
              
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl">
                <h3 className="text-3xl font-bold mb-4">Ready to Switch?</h3>
                <p className="text-xl mb-6">
                  Join the revolution in emergency response technology
                </p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-100 transition-colors">
                  Get Switch-Phone Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}