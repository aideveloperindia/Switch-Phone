'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Types for our nodes
type NodeType = {
  id: string
  text: string
  emoji?: string
  subtext?: string
  emotion?: 'neutral' | 'panic' | 'calm' | 'confusion' | 'hope'
  timeEstimate?: string
}

// Flow Node Component
const FlowNode = React.forwardRef<HTMLDivElement, {
  node: NodeType
  isVisible: boolean
  onClick?: () => void
  isClickable?: boolean
  className?: string
  delay?: number
}>((props, ref) => {
  const { node, isVisible, onClick, isClickable = false, className = "", delay = 0 } = props

  const getEmotionStyles = () => {
    switch (node.emotion) {
      case 'panic':
        return 'bg-red-50 border-red-300 text-red-800'
      case 'calm':
        return 'bg-green-50 border-green-300 text-green-800'
      case 'confusion':
        return 'bg-orange-50 border-orange-300 text-orange-800'
      case 'hope':
        return 'bg-emerald-50 border-emerald-300 text-emerald-800'
      default:
        return 'bg-gray-50 border-gray-300 text-gray-800'
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.9,
        y: isVisible ? 0 : 10
      }}
      transition={{ 
        duration: 0.5,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`
        transition-all duration-700 ease-out transform
        ${isClickable ? 'cursor-pointer hover:scale-105' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      <div className={`
        p-6 rounded-xl border-2 shadow-lg text-center
        ${isClickable ? 'hover:shadow-xl transition-shadow' : ''}
        ${getEmotionStyles()}
        max-w-[320px] mx-auto
      `}>
        <div className="text-2xl mb-2">{node.emoji}</div>
        <div className="font-semibold text-lg">{node.text}</div>
        {node.subtext && (
          <div className="text-sm mt-2 opacity-80">{node.subtext}</div>
        )}
        {node.timeEstimate && (
          <div className="text-xs mt-3 font-medium">{node.timeEstimate}</div>
        )}
      </div>
    </motion.div>
  )
})

FlowNode.displayName = 'FlowNode'

// Connecting Arrow Component
const Arrow = ({ isVisible, delay = 0 }: { isVisible: boolean, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ 
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.9
    }}
    transition={{ 
      duration: 0.5,
      delay: delay,
      ease: [0.4, 0, 0.2, 1]
    }}
    className="flex justify-center my-4"
  >
    <div className="text-3xl text-gray-400">↓</div>
  </motion.div>
)

export default function ReasonFlow() {
  // State for tracking flow progress
  const [flowStarted, setFlowStarted] = useState(false)
  const [selectedPath, setSelectedPath] = useState<'traditional' | 'switchphone' | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [subPath, setSubPath] = useState<string | null>(null)
  const [traditionalStep, setTraditionalStep] = useState(0)
  const [traditionalCase, setTraditionalCase] = useState<number | null>(null)
  const [contactsPath, setContactsPath] = useState<'doctor' | 'friend' | null>(null)
  const [googlePath, setGooglePath] = useState<'success' | 'fail' | null>(null)
  const [ambulancePath, setAmbulancePath] = useState<'location' | 'direction' | null>(null)
  const [switchPhoneStep, setSwitchPhoneStep] = useState(0)
  const [switchPhoneCase, setSwitchPhoneCase] = useState<number | null>(null)
  const [sensorPath, setSensorPath] = useState<'detect' | null>(null)
  const [hospitalPath, setHospitalPath] = useState<'success' | 'redirect' | null>(null)

  // Refs for scroll handling
  const nodeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Auto-scroll effect
  useEffect(() => {
    if (currentStep > 0) {
      const currentRef = nodeRefs.current[`step-${currentStep}`]
      if (currentRef) {
        setTimeout(() => {
          const targetRect = currentRef.getBoundingClientRect()
          const scrollPosition = window.scrollY + targetRect.top - 200
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [currentStep])

  const renderTraditionalPath = () => {
    if (selectedPath !== 'traditional') return null;

    return (
      <div className="space-y-8 mt-12">
        {/* Unlock Phone Step */}
        <FlowNode
          ref={(el) => { nodeRefs.current['step-traditional-1'] = el }}
          node={{
            id: 'unlock',
            text: 'Unlock Phone',
            emoji: '📱',
            emotion: 'neutral'
          }}
          isVisible={true}
          isClickable={traditionalStep === 0}
          onClick={() => setTraditionalStep(1)}
        />

        <Arrow isVisible={traditionalStep >= 1} />

        {/* Three Main Options */}
        {traditionalStep >= 1 && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Option A: Open Contacts */}
            <FlowNode
              ref={(el) => { nodeRefs.current['step-traditional-contacts'] = el }}
              node={{
                id: 'contacts',
                text: 'Open Contacts',
                emoji: '📞',
                subtext: 'Search Known Doctor',
                emotion: 'neutral'
              }}
              isVisible={true}
              isClickable={!traditionalCase}
              onClick={() => {
                setTraditionalCase(1)
                setTraditionalStep(2)
              }}
            />

            {/* Option B: Open Google */}
            <FlowNode
              ref={(el) => { nodeRefs.current['step-traditional-google'] = el }}
              node={{
                id: 'google',
                text: 'Open Google',
                emoji: '🌐',
                subtext: 'Search Nearby Hospital',
                emotion: 'neutral'
              }}
              isVisible={true}
              isClickable={!traditionalCase}
              onClick={() => {
                setTraditionalCase(4)
                setTraditionalStep(2)
              }}
            />

            {/* Option C: Dial Ambulance */}
            <FlowNode
              ref={(el) => { nodeRefs.current['step-traditional-ambulance'] = el }}
              node={{
                id: 'ambulance',
                text: 'Dial Ambulance Number',
                emoji: '🚑',
                subtext: 'Emergency Call',
                emotion: 'neutral'
              }}
              isVisible={true}
              isClickable={!traditionalCase}
              onClick={() => {
                setTraditionalCase(6)
                setTraditionalStep(2)
              }}
            />
          </div>
        )}

        {/* Contacts Path - Cases 1-3 */}
        {traditionalCase && traditionalCase <= 3 && (
          <>
            <Arrow isVisible={traditionalStep >= 2} />
            <FlowNode
              ref={(el) => { nodeRefs.current['step-traditional-call'] = el }}
              node={{
                id: 'call-doctor',
                text: 'Call Doctor',
                emoji: '📞',
                emotion: 'neutral'
              }}
              isVisible={traditionalStep >= 2}
              isClickable={traditionalStep === 2}
              onClick={() => {
                setTraditionalStep(3)
                setContactsPath('doctor')
              }}
            />

            <Arrow isVisible={traditionalStep >= 3} />

            {/* Case 1: Successful Doctor */}
            {traditionalCase === 1 && contactsPath === 'doctor' && (
              <>
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-traditional-success'] = el }}
                  node={{
                    id: 'doctor-success',
                    text: 'Doctor asks to come',
                    emoji: '👨‍⚕️',
                    emotion: 'hope',
                    timeEstimate: '⏱️ Total Time: 15-30 minutes'
                  }}
                  isVisible={true}
                />
              </>
            )}

            {/* Case 2: Doctor Refers */}
            {traditionalCase === 2 && contactsPath === 'doctor' && (
              <>
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-traditional-refer'] = el }}
                  node={{
                    id: 'doctor-refer',
                    text: 'Doctor says he will ask an apt doctor',
                    subtext: 'Doctor again opens contacts',
                    emoji: '😰',
                    emotion: 'confusion',
                    timeEstimate: '⏱️ Total Time: 15-30 minutes'
                  }}
                  isVisible={true}
                />
              </>
            )}

            {/* Case 3: Doctor Busy, Try Friend */}
            {traditionalCase === 3 && (
              <>
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-traditional-busy'] = el }}
                  node={{
                    id: 'doctor-busy',
                    text: 'Doctor is busy',
                    emoji: '❌',
                    emotion: 'panic'
                  }}
                  isVisible={true}
                  isClickable={!contactsPath}
                  onClick={() => setContactsPath('friend')}
                />

                {contactsPath === 'friend' && (
                  <>
                    <Arrow isVisible={true} />
                    <FlowNode
                      ref={(el) => { nodeRefs.current['step-traditional-friend'] = el }}
                      node={{
                        id: 'friend-busy',
                        text: 'Friend is also busy',
                        subtext: 'No immediate help available',
                        emoji: '😢',
                        emotion: 'confusion',
                        timeEstimate: '⏱️ Total Time: 15-30 minutes'
                      }}
                      isVisible={true}
                    />
                  </>
                )}
              </>
            )}
          </>
        )}

        {/* Google Path - Cases 4-5 */}
        {traditionalCase && traditionalCase >= 4 && traditionalCase <= 5 && (
          <>
            <Arrow isVisible={traditionalStep >= 2} />
            <FlowNode
              ref={(el) => { nodeRefs.current['step-traditional-search'] = el }}
              node={{
                id: 'search-hospital',
                text: 'Search for Nearby Hospital',
                emoji: '🏥',
                emotion: 'neutral'
              }}
              isVisible={traditionalStep >= 2}
              isClickable={traditionalStep === 2}
              onClick={() => {
                setTraditionalStep(3)
                setGooglePath(traditionalCase === 4 ? 'success' : 'fail')
              }}
            />

            <Arrow isVisible={traditionalStep >= 3} />

            {/* Case 4: Hospital Success */}
            {traditionalCase === 4 && googlePath === 'success' && (
              <FlowNode
                ref={(el) => { nodeRefs.current['step-traditional-hospital-success'] = el }}
                node={{
                  id: 'hospital-success',
                  text: 'Hospital asks to come',
                  emoji: '🏥',
                  emotion: 'hope',
                  timeEstimate: '⏱️ Total Time: 15-30 minutes'
                }}
                isVisible={true}
              />
            )}

            {/* Case 5: Hospital Fails */}
            {traditionalCase === 5 && googlePath === 'fail' && (
              <>
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-traditional-hospital-fail'] = el }}
                  node={{
                    id: 'hospital-fail',
                    text: 'Doctor not available at hospital',
                    subtext: 'Need to try another hospital',
                    emoji: '❌',
                    emotion: 'confusion',
                    timeEstimate: '⏱️ Total Time: 15-30 minutes'
                  }}
                  isVisible={true}
                />
              </>
            )}
          </>
        )}

        {/* Ambulance Path - Cases 6-7 */}
        {traditionalCase && traditionalCase >= 6 && (
          <>
            <Arrow isVisible={traditionalStep >= 2} />
            <FlowNode
              ref={(el) => { nodeRefs.current['step-traditional-ambulance-location'] = el }}
              node={{
                id: 'ambulance-location',
                text: 'Ambulance asks for location',
                emoji: '📍',
                emotion: 'neutral'
              }}
              isVisible={traditionalStep >= 2}
              isClickable={traditionalStep === 2}
              onClick={() => {
                setTraditionalStep(3)
                setAmbulancePath(traditionalCase === 6 ? 'location' : 'direction')
              }}
            />

            <Arrow isVisible={traditionalStep >= 3} />

            {/* Case 6: Location Issues */}
            {traditionalCase === 6 && ambulancePath === 'location' && (
              <>
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-traditional-whatsapp'] = el }}
                  node={{
                    id: 'whatsapp-location',
                    text: 'Send location (inaccurate)',
                    subtext: 'Location sharing problems',
                    emoji: '📱',
                    emotion: 'confusion',
                    timeEstimate: '⏱️ Total Time: 15-30 minutes'
                  }}
                  isVisible={true}
                />
              </>
            )}

            {/* Case 7: Direction Issues */}
            {traditionalCase === 7 && ambulancePath === 'direction' && (
              <>
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-traditional-direction'] = el }}
                  node={{
                    id: 'direction-confusion',
                    text: 'Multiple follow-up calls needed',
                    subtext: 'Confusion in giving directions',
                    emoji: '😰',
                    emotion: 'confusion',
                    timeEstimate: '⏱️ Total Time: 15-30 minutes'
                  }}
                  isVisible={true}
                />
              </>
            )}
          </>
        )}
      </div>
    );
  };

  const renderSwitchPhonePath = () => {
    if (selectedPath !== 'switchphone') return null;

    return (
      <div className="space-y-8 mt-12">
        {/* Three Main Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Option A: Use Sensor */}
          <FlowNode
            ref={(el) => { nodeRefs.current['step-switchphone-sensor'] = el }}
            node={{
              id: 'sensor',
              text: 'Use Sensor',
              emoji: '💡',
              subtext: 'Automatic Detection',
              emotion: 'neutral'
            }}
            isVisible={true}
            isClickable={!switchPhoneCase}
            onClick={() => {
              setSwitchPhoneCase(8)
              setSwitchPhoneStep(1)
              setSensorPath('detect')
            }}
          />

          {/* Option B: Switch ON Ambulance */}
          <FlowNode
            ref={(el) => { nodeRefs.current['step-switchphone-ambulance'] = el }}
            node={{
              id: 'ambulance-switch',
              text: 'Switch ON Ambulance Switch',
              emoji: '🚑',
              subtext: 'Instant Emergency Response',
              emotion: 'neutral'
            }}
            isVisible={true}
            isClickable={!switchPhoneCase}
            onClick={() => {
              setSwitchPhoneCase(9)
              setSwitchPhoneStep(1)
            }}
          />

          {/* Option C: Switch ON Hospital */}
          <FlowNode
            ref={(el) => { nodeRefs.current['step-switchphone-hospital'] = el }}
            node={{
              id: 'hospital-switch',
              text: 'Switch ON Hospital Switch',
              emoji: '🏥',
              subtext: 'Quick Medical Access',
              emotion: 'neutral'
            }}
            isVisible={true}
            isClickable={!switchPhoneCase}
            onClick={() => {
              setSwitchPhoneCase(10)
              setSwitchPhoneStep(1)
              setHospitalPath('success')
            }}
          />
        </div>

        {/* Sensor Path - Case 8 */}
        {switchPhoneCase === 8 && sensorPath === 'detect' && (
          <>
            <Arrow isVisible={true} />
            <FlowNode
              ref={(el) => { nodeRefs.current['step-switchphone-sensor-detect'] = el }}
              node={{
                id: 'sensor-detect',
                text: 'Alarming Parameters Detected',
                emoji: '⚠️',
                emotion: 'neutral'
              }}
              isVisible={true}
            />

            <Arrow isVisible={true} />
            <div className="grid md:grid-cols-3 gap-4">
              <FlowNode
                ref={(el) => { nodeRefs.current['step-switchphone-sensor-doctor'] = el }}
                node={{
                  id: 'sensor-doctor',
                  text: 'IoT Dashboard alerts doctor',
                  emoji: '👨‍⚕️',
                  emotion: 'hope'
                }}
                isVisible={true}
              />
              <FlowNode
                ref={(el) => { nodeRefs.current['step-switchphone-sensor-ambulance'] = el }}
                node={{
                  id: 'sensor-ambulance',
                  text: 'Ambulance notified',
                  emoji: '🚑',
                  emotion: 'hope'
                }}
                isVisible={true}
              />
              <FlowNode
                ref={(el) => { nodeRefs.current['step-switchphone-sensor-family'] = el }}
                node={{
                  id: 'sensor-family',
                  text: 'Family members alerted',
                  emoji: '👨‍👩‍👧‍👦',
                  emotion: 'hope'
                }}
                isVisible={true}
              />
            </div>

            <Arrow isVisible={true} />
            <FlowNode
              ref={(el) => { nodeRefs.current['step-switchphone-sensor-end'] = el }}
              node={{
                id: 'sensor-end',
                text: 'Primary Diagnosis Report Sent',
                subtext: 'Automated Emergency Response Complete',
                emoji: '✅',
                emotion: 'hope',
                timeEstimate: '⏱️ Total Time: 1-2 minutes'
              }}
              isVisible={true}
            />
          </>
        )}

        {/* Ambulance Switch Path - Case 9 */}
        {switchPhoneCase === 9 && (
          <>
            <Arrow isVisible={true} />
            <FlowNode
              ref={(el) => { nodeRefs.current['step-switchphone-ambulance-location'] = el }}
              node={{
                id: 'ambulance-location',
                text: 'Location shared automatically to ambulance',
                subtext: 'GPS coordinates transmitted instantly',
                emoji: '📍',
                emotion: 'hope',
                timeEstimate: '⏱️ Total Time: 1-2 minutes'
              }}
              isVisible={true}
            />
          </>
        )}

        {/* Hospital Switch Path - Cases 10-11 */}
        {switchPhoneCase && switchPhoneCase >= 10 && (
          <>
            <Arrow isVisible={true} />
            {hospitalPath === 'success' ? (
              <FlowNode
                ref={(el) => { nodeRefs.current['step-switchphone-hospital-success'] = el }}
                node={{
                  id: 'hospital-success',
                  text: 'Doctor appointment booked',
                  subtext: 'Instant confirmation received',
                  emoji: '✅',
                  emotion: 'hope',
                  timeEstimate: '⏱️ Total Time: 1-2 minutes'
                }}
                isVisible={true}
              />
            ) : (
              <>
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-switchphone-hospital-busy'] = el }}
                  node={{
                    id: 'hospital-busy',
                    text: 'Doctor/hospital is busy',
                    emoji: '⏳',
                    emotion: 'neutral'
                  }}
                  isVisible={true}
                />

                <Arrow isVisible={true} />
                <FlowNode
                  ref={(el) => { nodeRefs.current['step-switchphone-hospital-redirect'] = el }}
                  node={{
                    id: 'hospital-redirect',
                    text: 'Automatically redirected to another hospital',
                    subtext: 'Smart routing system finds available doctor',
                    emoji: '🔄',
                    emotion: 'hope',
                    timeEstimate: '⏱️ Total Time: 1-2 minutes'
                  }}
                  isVisible={true}
                />
              </>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        {/* Initial Question */}
        <FlowNode
          ref={(el) => { nodeRefs.current['step-0'] = el }}
          node={{
            id: 'initial',
            text: 'What would you do if you faced a sudden health emergency right now?',
            emoji: '🤔',
            emotion: 'neutral'
          }}
          isVisible={true}
          className="mb-12"
        />

        {/* Path Selection Buttons */}
        {!selectedPath && (
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                setSelectedPath('traditional')
                setCurrentStep(1)
              }}
              className={`
                relative overflow-hidden
                bg-white border-2 border-amber-500 text-amber-700
                px-8 py-6 rounded-xl text-xl font-bold
                transition-all duration-300
                hover:bg-amber-50
                min-w-[300px]
                ${flowStarted ? 'opacity-50' : 'animate-pulse'}
              `}
            >
              Smart Phone Way
            </motion.button>

            <div className="text-4xl font-bold text-gray-400">VS</div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => {
                setSelectedPath('switchphone')
                setCurrentStep(1)
              }}
              className={`
                relative overflow-hidden
                bg-white border-2 border-emerald-500 text-emerald-700
                px-8 py-6 rounded-xl text-xl font-bold
                transition-all duration-300
                hover:bg-emerald-50
                min-w-[300px]
                ${!flowStarted ? 'opacity-50' : 'animate-pulse'}
              `}
            >
              Switch-Phone Way
            </motion.button>
          </div>
        )}

        {/* Flow Container with Marauder's Map style background */}
        <div className={`
          relative mt-12 p-8 rounded-2xl
          bg-parchment
          transition-all duration-500
          ${selectedPath ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
          {/* Traditional Path */}
          {renderTraditionalPath()}

          {/* Switch-Phone Path */}
          {renderSwitchPhonePath()}
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx global>{`
        .bg-parchment {
          background-color: #f4e4bc;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  )
} 