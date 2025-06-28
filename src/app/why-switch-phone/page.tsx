'use client'
import React, { useState, useEffect, useRef } from 'react'

// Flow node component for interactive mind map
const FlowNode = React.forwardRef<HTMLDivElement, { 
  children: React.ReactNode
  isVisible: boolean
  onClick?: () => void
  className?: string
  isClickable?: boolean
  emotion?: string
  delay?: number
  isActive?: boolean
}>(({ 
  children, 
  isVisible, 
  onClick, 
  className = "", 
  isClickable = false,
  emotion = "",
  delay = 0,
  isActive = false
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`
        transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}
        ${isClickable ? 'cursor-pointer hover:scale-105' : ''}
        ${isActive ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className={`
        p-4 rounded-xl border-2 shadow-lg text-center font-semibold max-w-[320px] mx-auto
        ${isClickable ? 'hover:shadow-xl transition-shadow' : ''}
        ${isActive ? 'border-yellow-400 bg-yellow-50 bg-opacity-10' : ''}
        ${emotion === 'panic' ? 'bg-red-50 border-red-300 text-red-800' : ''}
        ${emotion === 'calm' ? 'bg-green-50 border-green-300 text-green-800' : ''}
        ${emotion === 'neutral' ? 'bg-blue-50 border-blue-300 text-blue-800' : ''}
        ${emotion === 'confusion' ? 'bg-orange-50 border-orange-300 text-orange-800' : ''}
        ${emotion === 'hope' ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : ''}
        ${!emotion && !isActive ? 'bg-gray-50 border-gray-300 text-gray-800' : ''}
      `}>
        {children}
      </div>
    </div>
  )
})

FlowNode.displayName = 'FlowNode'

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

// Connecting line component for mind tree structure
const ConnectingLine = ({ isVisible, delay = 0 }: { isVisible: boolean, delay?: number }) => (
  <div 
    className={`
      flex justify-center transition-all duration-500
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-px h-8 bg-gray-400"></div>
  </div>
)

export default function WhySwitchPhone() {
  const [selectedFlow, setSelectedFlow] = useState<'traditional' | 'switchphone' | null>(null)
  
  // Traditional flow state
  const [traditionalActiveBranch, setTraditionalActiveBranch] = useState<'contacts' | 'google' | 'ambulance' | null>(null)
  const [traditionalSubSteps, setTraditionalSubSteps] = useState<{[key: string]: number}>({})
  const [traditionalStarted, setTraditionalStarted] = useState(false)
  
  // Switch-phone flow state
  const [switchPhoneActiveBranch, setSwitchPhoneActiveBranch] = useState<'sensor' | 'ambulance' | 'hospital' | null>(null)
  const [switchPhoneSubSteps, setSwitchPhoneSubSteps] = useState<{[key: string]: number}>({})
  const [switchPhoneStarted, setSwitchPhoneStarted] = useState(false)
  
  const flowContainerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const startTraditionalFlow = () => {
    setTraditionalStarted(true)
  }

  const selectTraditionalBranch = (branch: 'contacts' | 'google' | 'ambulance') => {
    setTraditionalActiveBranch(branch)
    setTraditionalSubSteps({ [branch]: 1 })
  }

  const advanceTraditionalStep = (branch: string) => {
    setTraditionalSubSteps(prev => ({
      ...prev,
      [branch]: (prev[branch] || 0) + 1
    }))
  }

  const startSwitchPhoneFlow = () => {
    setSwitchPhoneStarted(true)
  }

  const selectSwitchPhoneBranch = (branch: 'sensor' | 'ambulance' | 'hospital') => {
    setSwitchPhoneActiveBranch(branch)
    setSwitchPhoneSubSteps({ [branch]: 1 })
  }

  const advanceSwitchPhoneStep = (branch: string) => {
    setSwitchPhoneSubSteps(prev => ({
      ...prev,
      [branch]: (prev[branch] || 0) + 1
    }))
  }

  const resetFlows = () => {
    setSelectedFlow(null)
    setTraditionalActiveBranch(null)
    setTraditionalSubSteps({})
    setTraditionalStarted(false)
    setSwitchPhoneActiveBranch(null)
    setSwitchPhoneSubSteps({})
    setSwitchPhoneStarted(false)
  }

  // Auto-scroll to newly revealed steps
  useEffect(() => {
    if (traditionalActiveBranch && traditionalSubSteps[traditionalActiveBranch]) {
      const step = traditionalSubSteps[traditionalActiveBranch]
      const refKey = `traditional-${traditionalActiveBranch}-${step}`
      if (stepRefs.current[refKey]) {
        setTimeout(() => {
          stepRefs.current[refKey]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }, 400)
      }
    }
  }, [traditionalSubSteps])

  useEffect(() => {
    if (switchPhoneActiveBranch && switchPhoneSubSteps[switchPhoneActiveBranch]) {
      const step = switchPhoneSubSteps[switchPhoneActiveBranch]
      const refKey = `switchphone-${switchPhoneActiveBranch}-${step}`
      if (stepRefs.current[refKey]) {
        setTimeout(() => {
          stepRefs.current[refKey]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }, 400)
      }
    }
  }, [switchPhoneSubSteps])

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Hook Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {/* Title removed as requested */}
            </h1>
            
            <div className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
              🤔 What would you do if you faced a 
              <span className="text-red-400"> sudden health emergency </span>
              right now?
            </div>

            {!selectedFlow && (
              <div className="space-y-6">
                <p className="text-xl text-gray-300 mb-12">
                  Choose your path to discover the life-changing difference
                </p>
                
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                  <button
                    onClick={() => setSelectedFlow('traditional')}
                    className="group relative bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-700 hover:via-red-600 hover:to-red-800 text-white px-8 py-6 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-red-500/40 min-w-[300px] max-w-[320px] overflow-hidden border-2 border-red-400/30 backdrop-blur-sm animate-pulse"
                    style={{
                      transform: 'perspective(1000px) rotateX(10deg)',
                      boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                      animationDuration: '2s',
                      animationDelay: '0s'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <div className="relative z-10">
                      🔴 Old Way
                      <div className="text-sm font-normal mt-2 opacity-80">
                        Traditional Emergency Response
                      </div>
                    </div>
                  </button>

                  <div className="text-4xl font-bold text-gray-400">VS</div>

                  <button
                    onClick={() => setSelectedFlow('switchphone')}
                    className="group relative bg-gradient-to-r from-green-600 via-green-500 to-green-700 hover:from-green-700 hover:via-green-600 hover:to-green-800 text-white px-8 py-6 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-green-500/40 min-w-[300px] max-w-[320px] overflow-hidden border-2 border-green-400/30 backdrop-blur-sm animate-pulse"
                    style={{
                      transform: 'perspective(1000px) rotateX(10deg)',
                      boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                      animationDuration: '2s',
                      animationDelay: '1s'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <div className="relative z-10">
                      🟢 Switch Way
                      <div className="text-sm font-normal mt-2 opacity-80">
                        Automated Emergency Response
                      </div>
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

            <div className="max-w-4xl mx-auto" ref={flowContainerRef}>
              {selectedFlow === 'traditional' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-center text-red-400 mb-8">
                    🔴 Old Way Journey
                  </h2>

                  {/* Emergency Start Node */}
                  <FlowNode 
                    ref={(el) => { stepRefs.current['traditional-start'] = el }}
                    isVisible={true} 
                    onClick={() => startTraditionalFlow()}
                    isClickable={!traditionalStarted}
                    emotion="panic"
                    className="text-2xl"
                  >
                    🚨 EMERGENCY HAPPENS
                    {!traditionalStarted && <div className="text-sm mt-2">Click to see what happens next...</div>}
                  </FlowNode>

                  <Arrow isVisible={traditionalStarted} />

                  {/* Main Choices - Always visible once started */}
                  {traditionalStarted && (
                    <>
                      <div className="flex justify-center items-start gap-8 flex-wrap">
                        <div className="flex flex-col items-center">
                          <FlowNode 
                            ref={(el) => { stepRefs.current['traditional-contacts'] = el }}
                            isVisible={true} 
                            onClick={() => selectTraditionalBranch('contacts')} 
                            isClickable={true} 
                            emotion="confusion"
                            isActive={traditionalActiveBranch === 'contacts'}
                          >
                            📞 Open Contacts
                            <div className="text-sm mt-2">Search for known doctor...</div>
                            {traditionalActiveBranch === 'contacts' && <div className="text-xs mt-1 text-yellow-400">▶ Active Path</div>}
                          </FlowNode>
                          
                          {traditionalActiveBranch === 'contacts' && (
                            <>
                              <ConnectingLine isVisible={true} delay={100} />
                              
                              <div className="space-y-4">
                                {traditionalSubSteps['contacts'] >= 1 && (
                                  <FlowNode 
                                    ref={(el) => { stepRefs.current['traditional-contacts-1'] = el }}
                                    isVisible={true} 
                                    onClick={() => advanceTraditionalStep('contacts')} 
                                    isClickable={traditionalSubSteps['contacts'] === 1} 
                                    emotion="confusion"
                                    delay={300}
                                  >
                                    🔍 Search Known Doctor
                                    {traditionalSubSteps['contacts'] === 1 && <div className="text-sm mt-2">Scrolling through contacts...</div>}
                                  </FlowNode>
                                )}

                                {traditionalSubSteps['contacts'] >= 2 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={400} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['traditional-contacts-2'] = el }}
                                      isVisible={true} 
                                      onClick={() => advanceTraditionalStep('contacts')} 
                                      isClickable={traditionalSubSteps['contacts'] === 2} 
                                      emotion="panic"
                                      delay={500}
                                    >
                                      ☎️ Call Doctor
                                      {traditionalSubSteps['contacts'] === 2 && <div className="text-sm mt-2">Ring... ring... ring...</div>}
                                    </FlowNode>
                                  </>
                                )}

                                {traditionalSubSteps['contacts'] >= 3 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={600} />
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['traditional-contacts-3a'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceTraditionalStep('contacts')} 
                                        isClickable={traditionalSubSteps['contacts'] === 3} 
                                        emotion="hope"
                                        delay={700}
                                      >
                                        💬 Talk to Doctor
                                        <div className="text-xs mt-1">Doctor asks to come</div>
                                        <div className="text-xs mt-1 opacity-70">✅ Relax & Hope</div>
                                      </FlowNode>
                                      
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['traditional-contacts-3b'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceTraditionalStep('contacts')} 
                                        isClickable={traditionalSubSteps['contacts'] === 3} 
                                        emotion="confusion"
                                        delay={700}
                                      >
                                        🔄 Doctor Says Ask Another
                                        <div className="text-xs mt-1">Will find appropriate doctor...</div>
                                      </FlowNode>
                                      
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['traditional-contacts-3c'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceTraditionalStep('contacts')} 
                                        isClickable={traditionalSubSteps['contacts'] === 3} 
                                        emotion="panic"
                                        delay={700}
                                      >
                                        📵 Doctor is Busy
                                        <div className="text-xs mt-1">No answer...</div>
                                      </FlowNode>
                                    </div>
                                  </>
                                )}

                                {traditionalSubSteps['contacts'] >= 4 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={800} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['traditional-contacts-final'] = el }}
                                      isVisible={true} 
                                      emotion="panic" 
                                      delay={900}
                                      className="text-lg border-4 border-red-500"
                                    >
                                      ⏱️ TIME: 15-30 MINUTES<br/>
                                      😰 EMOTION: Tension & Confusion
                                    </FlowNode>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex flex-col items-center">
                          <FlowNode 
                            ref={(el) => { stepRefs.current['traditional-google'] = el }}
                            isVisible={true} 
                            onClick={() => selectTraditionalBranch('google')} 
                            isClickable={true} 
                            emotion="confusion"
                            isActive={traditionalActiveBranch === 'google'}
                          >
                            🌐 Open Google
                            <div className="text-sm mt-2">Search nearby hospital...</div>
                            {traditionalActiveBranch === 'google' && <div className="text-xs mt-1 text-yellow-400">▶ Active Path</div>}
                          </FlowNode>
                          
                          {traditionalActiveBranch === 'google' && (
                            <>
                              <ConnectingLine isVisible={true} delay={100} />
                              
                              <div className="space-y-4">
                                {traditionalSubSteps['google'] >= 1 && (
                                  <FlowNode 
                                    ref={(el) => { stepRefs.current['traditional-google-1'] = el }}
                                    isVisible={true} 
                                    onClick={() => advanceTraditionalStep('google')} 
                                    isClickable={traditionalSubSteps['google'] === 1} 
                                    emotion="confusion"
                                    delay={300}
                                  >
                                    🏥 Search for Nearby Hospital
                                    {traditionalSubSteps['google'] === 1 && <div className="text-sm mt-2">Looking for hospitals...</div>}
                                  </FlowNode>
                                )}

                                {traditionalSubSteps['google'] >= 2 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={400} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['traditional-google-2'] = el }}
                                      isVisible={true} 
                                      onClick={() => advanceTraditionalStep('google')} 
                                      isClickable={traditionalSubSteps['google'] === 2} 
                                      emotion="panic"
                                      delay={500}
                                    >
                                      📞 Call to Hospital
                                      {traditionalSubSteps['google'] === 2 && <div className="text-sm mt-2">Calling hospital...</div>}
                                    </FlowNode>
                                  </>
                                )}

                                {traditionalSubSteps['google'] >= 3 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={600} />
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['traditional-google-3a'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceTraditionalStep('google')} 
                                        isClickable={traditionalSubSteps['google'] === 3} 
                                        emotion="hope"
                                        delay={700}
                                      >
                                        ✅ Hospital Asks to Come
                                        <div className="text-xs mt-1">✅ Relax & Hope</div>
                                      </FlowNode>
                                      
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['traditional-google-3b'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceTraditionalStep('google')} 
                                        isClickable={traditionalSubSteps['google'] === 3} 
                                        emotion="panic"
                                        delay={700}
                                      >
                                        ❌ Doctor Not Available
                                        <div className="text-xs mt-1">Try another hospital...</div>
                                      </FlowNode>
                                    </div>
                                  </>
                                )}

                                {traditionalSubSteps['google'] >= 4 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={800} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['traditional-google-final'] = el }}
                                      isVisible={true} 
                                      emotion="panic" 
                                      delay={900}
                                      className="text-lg border-4 border-red-500"
                                    >
                                      ⏱️ TIME: 15-30 MINUTES<br/>
                                      😰 EMOTION: Tension & Confusion
                                    </FlowNode>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex flex-col items-center">
                          <FlowNode 
                            ref={(el) => { stepRefs.current['traditional-ambulance'] = el }}
                            isVisible={true} 
                            onClick={() => selectTraditionalBranch('ambulance')} 
                            isClickable={true} 
                            emotion="panic"
                            isActive={traditionalActiveBranch === 'ambulance'}
                          >
                            🚑 Dial Ambulance Number
                            <div className="text-sm mt-2">Emergency call...</div>
                            {traditionalActiveBranch === 'ambulance' && <div className="text-xs mt-1 text-yellow-400">▶ Active Path</div>}
                          </FlowNode>
                          
                          {traditionalActiveBranch === 'ambulance' && (
                            <>
                              <ConnectingLine isVisible={true} delay={100} />
                              
                              <div className="space-y-4">
                                {traditionalSubSteps['ambulance'] >= 1 && (
                                  <FlowNode 
                                    ref={(el) => { stepRefs.current['traditional-ambulance-1'] = el }}
                                    isVisible={true} 
                                    onClick={() => advanceTraditionalStep('ambulance')} 
                                    isClickable={traditionalSubSteps['ambulance'] === 1} 
                                    emotion="confusion"
                                    delay={300}
                                  >
                                    📍 Ambulance Asks for Location
                                    {traditionalSubSteps['ambulance'] === 1 && <div className="text-sm mt-2">Where are you?...</div>}
                                  </FlowNode>
                                )}

                                {traditionalSubSteps['ambulance'] >= 2 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={400} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['traditional-ambulance-2'] = el }}
                                      isVisible={true} 
                                      onClick={() => advanceTraditionalStep('ambulance')} 
                                      isClickable={traditionalSubSteps['ambulance'] === 2} 
                                      emotion="confusion"
                                      delay={500}
                                    >
                                      📝 Note Down WhatsApp Number
                                      {traditionalSubSteps['ambulance'] === 2 && <div className="text-sm mt-2">Getting contact details...</div>}
                                    </FlowNode>
                                  </>
                                )}

                                {traditionalSubSteps['ambulance'] >= 3 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={600} />
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['traditional-ambulance-3a'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceTraditionalStep('ambulance')} 
                                        isClickable={traditionalSubSteps['ambulance'] === 3} 
                                        emotion="confusion"
                                        delay={700}
                                      >
                                        📱 Send Location (Inaccurate)
                                        <div className="text-xs mt-1">GPS not precise...</div>
                                      </FlowNode>
                                      
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['traditional-ambulance-3b'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceTraditionalStep('ambulance')} 
                                        isClickable={traditionalSubSteps['ambulance'] === 3} 
                                        emotion="panic"
                                        delay={700}
                                      >
                                        🗺️ Ask for Directions
                                        <div className="text-xs mt-1">Explaining landmark...</div>
                                      </FlowNode>
                                    </div>
                                  </>
                                )}

                                {traditionalSubSteps['ambulance'] >= 4 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={800} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['traditional-ambulance-final'] = el }}
                                      isVisible={true} 
                                      emotion="panic" 
                                      delay={900}
                                      className="text-lg border-4 border-red-500"
                                    >
                                      ⏱️ TIME: 15-30 MINUTES<br/>
                                      😰 EMOTION: Tension & Confusion
                                    </FlowNode>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {selectedFlow === 'switchphone' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-center text-green-400 mb-8">
                    🟢 Switch Way Journey
                  </h2>

                  {/* Emergency Start Node */}
                  <FlowNode 
                    ref={(el) => { stepRefs.current['switchphone-start'] = el }}
                    isVisible={true} 
                    onClick={() => startSwitchPhoneFlow()}
                    isClickable={!switchPhoneStarted}
                    emotion="neutral"
                    className="text-2xl"
                  >
                    🚨 EMERGENCY HAPPENS
                    {!switchPhoneStarted && <div className="text-sm mt-2">Click to see the Switch-Phone magic...</div>}
                  </FlowNode>

                  <Arrow isVisible={switchPhoneStarted} />

                  {/* Main Choices - Always visible once started */}
                  {switchPhoneStarted && (
                    <>
                      <div className="flex justify-center items-start gap-8 flex-wrap">
                        <div className="flex flex-col items-center">
                          <FlowNode 
                            ref={(el) => { stepRefs.current['switchphone-sensor'] = el }}
                            isVisible={true} 
                            onClick={() => selectSwitchPhoneBranch('sensor')} 
                            isClickable={true} 
                            emotion="calm"
                            isActive={switchPhoneActiveBranch === 'sensor'}
                          >
                            🔬 Use Sensor
                            <div className="text-sm mt-2">Automatic detection...</div>
                            {switchPhoneActiveBranch === 'sensor' && <div className="text-xs mt-1 text-yellow-400">▶ Active Path</div>}
                          </FlowNode>
                          
                          {switchPhoneActiveBranch === 'sensor' && (
                            <>
                              <ConnectingLine isVisible={true} delay={100} />
                              
                              <div className="space-y-4">
                                {switchPhoneSubSteps['sensor'] >= 1 && (
                                  <FlowNode 
                                    ref={(el) => { stepRefs.current['switchphone-sensor-1'] = el }}
                                    isVisible={true} 
                                    onClick={() => advanceSwitchPhoneStep('sensor')} 
                                    isClickable={switchPhoneSubSteps['sensor'] === 1} 
                                    emotion="calm"
                                    delay={300}
                                  >
                                    📊 Alarming Parameters Detected
                                    {switchPhoneSubSteps['sensor'] === 1 && <div className="text-sm mt-2">Sensor analyzing vitals...</div>}
                                  </FlowNode>
                                )}

                                {switchPhoneSubSteps['sensor'] >= 2 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={400} />
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['switchphone-sensor-2a'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceSwitchPhoneStep('sensor')} 
                                        isClickable={switchPhoneSubSteps['sensor'] === 2} 
                                        emotion="hope"
                                        delay={500}
                                      >
                                        🚨 IoT Dashboard Alerts Doctor, Ambulance, Family
                                        <div className="text-xs mt-1">✅ Relax & Hope</div>
                                      </FlowNode>

                                      <FlowNode 
                                        ref={(el) => { stepRefs.current['switchphone-sensor-2b'] = el }}
                                        isVisible={true} 
                                        onClick={() => advanceSwitchPhoneStep('sensor')} 
                                        isClickable={switchPhoneSubSteps['sensor'] === 2} 
                                        emotion="hope"
                                        delay={500}
                                      >
                                        📋 Primary Diagnosis Report Sent
                                        <div className="text-xs mt-1">✅ Relax & Hope</div>
                                      </FlowNode>
                                    </div>
                                  </>
                                )}

                                {switchPhoneSubSteps['sensor'] >= 3 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={600} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['switchphone-sensor-final'] = el }}
                                      isVisible={true} 
                                      emotion="calm" 
                                      delay={700}
                                      className="text-lg border-4 border-green-500"
                                    >
                                      ⏱️ TIME: 1-2 MINUTES<br/>
                                      😌 EMOTION: Relax & Hope
                                    </FlowNode>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex flex-col items-center">
                          <FlowNode 
                            ref={(el) => { stepRefs.current['switchphone-ambulance'] = el }}
                            isVisible={true} 
                            onClick={() => selectSwitchPhoneBranch('ambulance')} 
                            isClickable={true} 
                            emotion="calm"
                            isActive={switchPhoneActiveBranch === 'ambulance'}
                          >
                            🚑 Switch ON Ambulance Switch
                            <div className="text-sm mt-2">Instant ambulance...</div>
                            {switchPhoneActiveBranch === 'ambulance' && <div className="text-xs mt-1 text-yellow-400">▶ Active Path</div>}
                          </FlowNode>
                          
                          {switchPhoneActiveBranch === 'ambulance' && (
                            <>
                              <ConnectingLine isVisible={true} delay={100} />
                              
                              <div className="space-y-4">
                                {switchPhoneSubSteps['ambulance'] >= 1 && (
                                  <FlowNode 
                                    ref={(el) => { stepRefs.current['switchphone-ambulance-1'] = el }}
                                    isVisible={true} 
                                    onClick={() => advanceSwitchPhoneStep('ambulance')} 
                                    isClickable={switchPhoneSubSteps['ambulance'] === 1} 
                                    emotion="hope"
                                    delay={300}
                                  >
                                    📍 Location Shared to Ambulance
                                    <div className="text-sm mt-2">✅ Relax & Hope</div>
                                    <div className="text-xs mt-1 opacity-70">Precise GPS coordinates sent</div>
                                  </FlowNode>
                                )}

                                {switchPhoneSubSteps['ambulance'] >= 2 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={400} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['switchphone-ambulance-final'] = el }}
                                      isVisible={true} 
                                      emotion="calm" 
                                      delay={500}
                                      className="text-lg border-4 border-green-500"
                                    >
                                      ⏱️ TIME: 1-2 MINUTES<br/>
                                      😌 EMOTION: Relax & Hope
                                    </FlowNode>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex flex-col items-center">
                          <FlowNode 
                            ref={(el) => { stepRefs.current['switchphone-hospital'] = el }}
                            isVisible={true} 
                            onClick={() => selectSwitchPhoneBranch('hospital')} 
                            isClickable={true} 
                            emotion="calm"
                            isActive={switchPhoneActiveBranch === 'hospital'}
                          >
                            🏥 Switch ON Hospital Switch
                            <div className="text-sm mt-2">Hospital booking...</div>
                            {switchPhoneActiveBranch === 'hospital' && <div className="text-xs mt-1 text-yellow-400">▶ Active Path</div>}
                          </FlowNode>
                          
                          {switchPhoneActiveBranch === 'hospital' && (
                            <>
                              <ConnectingLine isVisible={true} delay={100} />
                              
                              <div className="space-y-4">
                                {switchPhoneSubSteps['hospital'] >= 1 && (
                                  <FlowNode 
                                    ref={(el) => { stepRefs.current['switchphone-hospital-1'] = el }}
                                    isVisible={true} 
                                    onClick={() => advanceSwitchPhoneStep('hospital')} 
                                    isClickable={switchPhoneSubSteps['hospital'] === 1} 
                                    emotion="hope"
                                    delay={300}
                                  >
                                    📅 Doctor Appointment Booked
                                    <div className="text-sm mt-2">✅ Relax & Hope</div>
                                    <div className="text-xs mt-1 opacity-70">Instant scheduling</div>
                                  </FlowNode>
                                )}

                                {switchPhoneSubSteps['hospital'] >= 2 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={400} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['switchphone-hospital-2'] = el }}
                                      isVisible={true} 
                                      onClick={() => advanceSwitchPhoneStep('hospital')} 
                                      isClickable={switchPhoneSubSteps['hospital'] === 2} 
                                      emotion="calm"
                                      delay={500}
                                    >
                                      🔄 Doctor/Hospital is Busy
                                      {switchPhoneSubSteps['hospital'] === 2 && <div className="text-sm mt-2">System checking alternatives...</div>}
                                    </FlowNode>
                                  </>
                                )}

                                {switchPhoneSubSteps['hospital'] >= 3 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={600} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['switchphone-hospital-3'] = el }}
                                      isVisible={true} 
                                      onClick={() => advanceSwitchPhoneStep('hospital')} 
                                      isClickable={switchPhoneSubSteps['hospital'] === 3} 
                                      emotion="hope"
                                      delay={700}
                                    >
                                      🏥 Redirect to Other Hospital
                                      <div className="text-sm mt-2">✅ Relax & Hope</div>
                                      <div className="text-xs mt-1 opacity-70">Smart fallback system</div>
                                    </FlowNode>
                                  </>
                                )}

                                {switchPhoneSubSteps['hospital'] >= 4 && (
                                  <>
                                    <ConnectingLine isVisible={true} delay={800} />
                                    
                                    <FlowNode 
                                      ref={(el) => { stepRefs.current['switchphone-hospital-final'] = el }}
                                      isVisible={true} 
                                      emotion="calm" 
                                      delay={900}
                                      className="text-lg border-4 border-green-500"
                                    >
                                      ⏱️ TIME: 1-2 MINUTES<br/>
                                      😌 EMOTION: Relax & Hope
                                    </FlowNode>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
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
              
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl max-w-2xl mx-auto">
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