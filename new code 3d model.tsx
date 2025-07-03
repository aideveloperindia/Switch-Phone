'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Text, Decal } from '@react-three/drei';
import * as THREE from 'three';

// Service Button Component with Voice Synthesis
function ServiceButton({ position, color, label, onClick, isActive }: {
  position: [number, number, number];
  color: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth hover animation only
      const targetScale = hovered ? 1.05 : 1;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
    }
  });

  return (
    <group>
      {/* 3D Extruded Background with Glowing Edge */}
      <RoundedBox
        ref={meshRef}
        args={[0.45, 0.7, 0.05]}
        radius={0.08}
        smoothness={8}
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={onClick}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial 
          color={color}
          metalness={0.2}
          roughness={0.6}
          emissive={color}
          emissiveIntensity={isActive ? 0.08 : 0}
        />
      </RoundedBox>
      
      {/* Glowing Edge Effect */}
      {(isActive || hovered) && (
        <RoundedBox
          args={[0.47, 0.72, 0.03]}
          radius={0.09}
          smoothness={8}
          position={[position[0], position[1], position[2] - 0.03]}
        >
          <meshStandardMaterial 
            color={color}
            emissive={color}
            emissiveIntensity={0.08}
            transparent
            opacity={0.3}
          />
        </RoundedBox>
      )}
      
      <Text
        position={[position[0], position[1] - 0.4, position[2]]}
        fontSize={0.06}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

// Main Switch Phone Component with Full Interactivity
function SwitchPhoneDevice() {
  const phoneRef = useRef<THREE.Group>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [micActive, setMicActive] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const [pulseReading, setPulseReading] = useState<number | null>(null);
  const [speakingAnimation, setSpeakingAnimation] = useState(false);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  
  // Load MANDATORY icon textures from icons folder ONLY
  const microphoneTexture = useLoader(THREE.TextureLoader, '/icons/Microphone%20icon.png');
  const speakerTexture = useLoader(THREE.TextureLoader, '/icons/Speaker%20icon.png');
  const cameraTexture = useLoader(THREE.TextureLoader, '/icons/camera%20icon.png');
  const pulseTexture = useLoader(THREE.TextureLoader, '/icons/finger%20scan%20icon.png');

  // Voice Synthesis Function with HTML Overlay
  const speakMessage = (service: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`Connecting to ${service}... How may I help you?`);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      setSpeakingAnimation(true);
      
      // Show voice status overlay
      const voiceStatus = document.getElementById('voice-status');
      const voiceMessage = document.getElementById('voice-message');
      if (voiceStatus && voiceMessage) {
        voiceStatus.style.display = 'block';
        voiceStatus.style.opacity = '1';
        voiceMessage.textContent = `Connecting to ${service}...`;
      }
      
      utterance.onend = () => {
        setSpeakingAnimation(false);
        if (voiceStatus) {
          voiceStatus.style.opacity = '0';
          setTimeout(() => voiceStatus.style.display = 'none', 500);
        }
      };
      speechSynthesis.speak(utterance);
    }
  };

  // Webcam Integration with HTML Overlay
  const activateCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      const videoElement = document.getElementById('camera-video') as HTMLVideoElement;
      const cameraFeed = document.getElementById('camera-feed');
      
      if (videoElement && cameraFeed) {
        videoElement.srcObject = stream;
        cameraFeed.style.display = 'block';
        cameraFeed.style.opacity = '1';
      }
      
      setVideoStream(stream);
      setCameraActive(true);
    } catch (error) {
      console.error('Camera access denied:', error);
    }
  };

  const deactivateCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
    }
    
    const cameraFeed = document.getElementById('camera-feed');
    if (cameraFeed) {
      cameraFeed.style.opacity = '0';
      setTimeout(() => cameraFeed.style.display = 'none', 500);
    }
    
    setCameraActive(false);
  };

  // Pulse Sensor Simulation with HTML Overlay
  const activatePulseSensor = () => {
    if (!pulseActive) {
      setPulseActive(true);
      const simulatedPulse = Math.floor(Math.random() * (85 - 60 + 1)) + 60; // 60-85 BPM
      setPulseReading(simulatedPulse);
      
      // Show BPM overlay
      const bpmDisplay = document.getElementById('bpm-display');
      const bpmValue = document.getElementById('bpm-value');
      if (bpmDisplay && bpmValue) {
        bpmDisplay.style.display = 'block';
        bpmDisplay.style.opacity = '1';
        bpmValue.textContent = simulatedPulse.toString();
      }
    } else {
      setPulseActive(false);
      setPulseReading(null);
      
      // Hide BPM overlay
      const bpmDisplay = document.getElementById('bpm-display');
      if (bpmDisplay) {
        bpmDisplay.style.opacity = '0';
        setTimeout(() => bpmDisplay.style.display = 'none', 500);
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [videoStream]);

  // Animation removed to prevent flashing
  // useFrame((state) => {
  //   if (phoneRef.current) {
  //     // Subtle floating animation
  //     phoneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
  //     phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  //   }
  // });

  const services = [
    { id: 'hospital', label: 'Hospital', color: '#ef4444', position: [-0.8, 0.4, 0.16] as [number, number, number] },
    { id: 'pharmacy', label: 'Pharmacy', color: '#22c55e', position: [-0.4, 0.4, 0.16] as [number, number, number] },
    { id: 'ambulance', label: 'Ambulance', color: '#f97316', position: [0, 0.4, 0.16] as [number, number, number] },
    { id: 'essentials', label: 'Essentials', color: '#3b82f6', position: [0.4, 0.4, 0.16] as [number, number, number] },
    { id: 'family', label: 'Family', color: '#8b5cf6', position: [0.8, 0.4, 0.16] as [number, number, number] },
  ];

  const handleServiceClick = (serviceId: string) => {
    if (activeService === serviceId) {
      // Deactivate all systems
      setActiveService(null);
      setMicActive(false);
      setSpeakingAnimation(false);
      speechSynthesis.cancel();
      if (serviceId === 'ambulance' || serviceId === 'family') {
        deactivateCamera();
      }
    } else {
      // Activate new service
      setActiveService(serviceId);
      setMicActive(true);
      speakMessage(serviceId.charAt(0).toUpperCase() + serviceId.slice(1));
      
      // Activate camera for Ambulance or Family
      if (serviceId === 'ambulance' || serviceId === 'family') {
        activateCamera();
      } else {
        deactivateCamera();
      }
    }
  };

  return (
    <group ref={phoneRef}>
      {/* Main Phone Body - Updated to Prompt Dimensions */}
      <RoundedBox
        args={[3.2, 2.2, 0.3]} // Updated to match prompt: 3.2 x 2.2 x 0.3
        radius={0.15}
        smoothness={16}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.6}
          roughness={0.2}
        />
      </RoundedBox>

      {/* 3D Rings for Icons */}
      {/* Speaker Ring */}
      <group position={[-0.75, 0.8, 0.16]}>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} />
          <meshStandardMaterial color="#6610f2" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} rotation={[0, Math.PI / 2, 0]} />
          <meshStandardMaterial color="#6610f2" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Camera Ring */}
      <group position={[0.75, 0.8, 0.16]}>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} />
          <meshStandardMaterial color="#dc3545" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} rotation={[0, Math.PI / 2, 0]} />
          <meshStandardMaterial color="#dc3545" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Microphone Ring */}
      <group position={[-1.4, 0.3, 0.16]}>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} />
          <meshStandardMaterial color="#6610f2" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} rotation={[0, Math.PI / 2, 0]} />
          <meshStandardMaterial color="#6610f2" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Sensor Ring */}
      <group position={[1.4, 0.3, 0.16]}>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} />
          <meshStandardMaterial color="#dc3545" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh>
          <torusGeometry args={[0.12, 0.01, 16, 32]} rotation={[0, Math.PI / 2, 0]} />
          <meshStandardMaterial color="#dc3545" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Hardware Icons */}
      {/* Speaker Icon */}
      <mesh position={[-0.75, 0.8, 0.16]}>
        <planeGeometry args={[0.15, 0.15]} />
        <meshBasicMaterial map={speakerTexture} transparent />
      </mesh>

      {/* Camera Icon */}
      <mesh position={[0.75, 0.8, 0.16]}>
        <planeGeometry args={[0.15, 0.15]} />
        <meshBasicMaterial map={cameraTexture} transparent />
      </mesh>

      {/* Microphone Icon */}
      <mesh position={[-1.4, 0.3, 0.16]}>
        <planeGeometry args={[0.15, 0.15]} />
        <meshBasicMaterial map={microphoneTexture} transparent />
      </mesh>

      {/* Pulse Sensor Icon */}
      <mesh position={[1.4, 0.3, 0.16]}>
        <planeGeometry args={[0.15, 0.15]} />
        <meshBasicMaterial map={pulseTexture} transparent />
      </mesh>

      {/* Phone Frame */}
      <RoundedBox
        args={[3.25, 2.25, 0.32]}
        radius={0.16}
        smoothness={16}
        position={[0, 0, -0.01]}
      >
        <meshStandardMaterial 
          color="#1e293b"
          metalness={0.8}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        args={[2.6, 1.6, 0.02]}
        radius={0.1}
        smoothness={8}
        position={[0, -0.1, 0.14]}
      >
        <meshStandardMaterial 
          color="#000000"
          metalness={0.2}
          roughness={0.6}
          emissive="#001122"
          emissiveIntensity={0.08}
        />
      </RoundedBox>

      {/* Brand Logo */}
      <Text
        position={[0, 0.85, 0.16]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Switch-Phone
      </Text>

      {/* TOP CAMERA LENSES */}
      {/* Left Camera Lens */}
      <group position={[-1.3, 0.9, 0.16]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>
        {/* Glass Lens */}
        <mesh position={[0, 0, 0.025]}>
          <cylinderGeometry args={[0.06, 0.06, 0.01, 16]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            metalness={0}
            roughness={0}
            transmission={0.9}
            thickness={0.01}
          />
        </mesh>
        {/* Ring Light Glow when camera active */}
        {cameraActive && (
          <mesh position={[0, 0, 0.03]}>
            <torusGeometry args={[0.09, 0.01, 8, 16]} />
            <meshStandardMaterial 
              color="#00ff00"
              emissive="#00ff00"
              emissiveIntensity={0.08}
            />
          </mesh>
        )}
      </group>

      {/* Right Camera Lens */}
      <group position={[1.3, 0.9, 0.16]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>
        {/* Glass Lens */}
        <mesh position={[0, 0, 0.025]}>
          <cylinderGeometry args={[0.06, 0.06, 0.01, 16]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            metalness={0}
            roughness={0}
            transmission={0.9}
            thickness={0.01}
          />
        </mesh>
        {/* Ring Light Glow when camera active */}
        {cameraActive && (
          <mesh position={[0, 0, 0.03]}>
            <torusGeometry args={[0.09, 0.01, 8, 16]} />
            <meshStandardMaterial 
              color="#00ff00"
              emissive="#00ff00"
              emissiveIntensity={0.08}
            />
          </mesh>
        )}
      </group>

      {/* Service Buttons */}
      {services.map((service) => (
        <ServiceButton
          key={service.id}
          position={service.position}
          color={service.color}
          label={service.label}
          onClick={() => handleServiceClick(service.id)}
          isActive={activeService === service.id}
        />
      ))}

      {/* INTERACTIVE MICROPHONE (Bottom-Left) - FIXED */}
      <group position={[-0.8, -0.7, 0.16]}>
        <mesh 
          onClick={() => setMicActive(!micActive)}
          onPointerEnter={(e) => e.object.scale.setScalar(1.1)}
          onPointerLeave={(e) => e.object.scale.setScalar(1)}
        >
          <cylinderGeometry args={[0.12, 0.12, 0.04, 16]} />
          <meshStandardMaterial 
            color={micActive ? "#3b82f6" : "#ffffff"}
            metalness={0.2}
            roughness={0.6}
            emissive={micActive ? "#1e40af" : "#000000"}
            emissiveIntensity={micActive ? 0.08 : 0}
          />
          <Decal
            position={[0, 0, 0.025]}
            rotation={[0, 0, 0]}
            scale={[0.2, 0.2, 0.2]}
            map={microphoneTexture}
          />
        </mesh>
        {micActive && (
          <mesh position={[0, 0, 0.05]}>
            <cylinderGeometry args={[0.14, 0.14, 0.01, 16]} />
            <meshStandardMaterial 
              color="#3b82f6"
              emissive="#1e40af"
              emissiveIntensity={0.08}
              transparent
              opacity={0.3}
            />
          </mesh>
        )}
      </group>
      
      {/* SPEAKER BAR (Bottom-Center) - FIXED */}
      <group position={[0, -0.7, 0.16]}>
        <RoundedBox
          args={[1.2, 0.1, 0.02]}
          radius={0.02}
          smoothness={8}
        >
          <meshStandardMaterial 
            color={speakingAnimation ? "#8b5cf6" : "#6366f1"}
            metalness={0.2}
            roughness={0.6}
            emissive={speakingAnimation ? "#7c3aed" : "#000000"}
            emissiveIntensity={speakingAnimation ? 0.08 : 0}
          />
          <Decal
            position={[0, 0, 0.015]}
            rotation={[0, 0, 0]}
            scale={[1.0, 0.08, 1.0]}
            map={speakerTexture}
          />
        </RoundedBox>
        {/* Voice Feedback Animation */}
        {speakingAnimation && (
          <>
            {[...Array(5)].map((_, i) => (
              <mesh key={i} position={[(i - 2) * 0.2, 0, 0.03]}>
                <cylinderGeometry args={[0.02, 0.02, 0.01, 8]} />
                <meshStandardMaterial 
                  color="#8b5cf6"
                  emissive="#7c3aed"
                  emissiveIntensity={0.08}
                />
              </mesh>
            ))}
          </>
        )}
      </group>
      
      {/* CAMERA BUTTON (Bottom-Right) - FIXED */}
      <group position={[0.8, -0.7, 0.16]}>
        <mesh 
          onClick={cameraActive ? deactivateCamera : activateCamera}
          onPointerEnter={(e) => e.object.scale.setScalar(1.1)}
          onPointerLeave={(e) => e.object.scale.setScalar(1)}
        >
          <cylinderGeometry args={[0.12, 0.12, 0.04, 16]} />
          <meshStandardMaterial 
            color={cameraActive ? "#10b981" : "#ffffff"}
            metalness={0.2}
            roughness={0.6}
            emissive={cameraActive ? "#059669" : "#000000"}
            emissiveIntensity={cameraActive ? 0.08 : 0}
          />
          <Decal
            position={[0, 0, 0.025]}
            rotation={[0, 0, 0]}
            scale={[0.2, 0.2, 0.2]}
            map={cameraTexture}
          />
        </mesh>
        {/* Glow Ring when Active */}
        {cameraActive && (
          <mesh position={[0, 0, 0.05]}>
            <torusGeometry args={[0.15, 0.02, 8, 16]} />
            <meshStandardMaterial 
              color="#10b981"
              emissive="#059669"
              emissiveIntensity={0.08}
            />
          </mesh>
        )}
      </group>
      
      {/* PULSE SENSOR (Far Bottom-Right) - FIXED */}
      <group position={[0, -0.4, 0.16]}>
        <mesh 
          onClick={activatePulseSensor}
          onPointerEnter={(e) => e.object.scale.setScalar(1.05)}
          onPointerLeave={(e) => e.object.scale.setScalar(1)}
        >
          <cylinderGeometry args={[0.15, 0.15, 0.03, 16]} />
          <meshStandardMaterial 
            color={pulseActive ? "#f59e0b" : "#ffffff"}
            metalness={0.2}
            roughness={0.6}
            emissive={pulseActive ? "#d97706" : "#000000"}
            emissiveIntensity={pulseActive ? 0.08 : 0}
          />
          <Decal
            position={[0, 0, 0.02]}
            rotation={[0, 0, 0]}
            scale={[0.28, 0.28, 0.28]}
            map={pulseTexture}
          />
        </mesh>
        {/* Pulse Wave Animation - FIXED */}
        {pulseActive && pulseReading && (
          <>
            {[...Array(3)].map((_, i) => (
              <mesh key={i} position={[0, 0.3 + i * 0.1, 0.05]}>
                <cylinderGeometry args={[0.01, 0.01, 0.05, 8]} />
                <meshStandardMaterial 
                  color="#f59e0b"
                  emissive="#d97706"
                  emissiveIntensity={0.08}
                />
              </mesh>
            ))}
          </>
        )}
      </group>

      {/* BACK SIDE COMPONENTS */}
      {/* SOS Button (Back - Center Top) */}
      <group position={[0, 0.6, -0.17]}>
        <mesh 
          onClick={() => {
            setActiveService('sos');
            speakMessage('S O S Emergency Protocol Activated');
          }}
          onPointerEnter={(e) => e.object.scale.setScalar(1.1)}
          onPointerLeave={(e) => e.object.scale.setScalar(1)}
        >
          <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
          <meshStandardMaterial 
            color={activeService === 'sos' ? "#dc2626" : "#ef4444"}
            metalness={0.2}
            roughness={0.6}
            emissive="#dc2626"
            emissiveIntensity={activeService === 'sos' ? 0.08 : 0.03}
          />
        </mesh>
        <Text
          position={[0, 0, 0.03]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          SOS
        </Text>
      </group>

      {/* GPS Beacon (Back - Left Side) - FIXED */}
      <group position={[-1, -0.2, -0.17]}>
        <mesh>
          <boxGeometry args={[0.3, 0.1, 0.03]} />
          <meshStandardMaterial 
            color="#22c55e"
            metalness={0.2}
            roughness={0.6}
            emissive="#16a34a"
            emissiveIntensity={0.08}
          />
        </mesh>
        <Text
          position={[0, 0, 0.02]}
          fontSize={0.04}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          GPS
        </Text>
      </group>

      {/* Antenna (Back - Right Side) - FIXED */}
      <group position={[1, -0.2, -0.17]}>
        <mesh>
          <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
          <meshStandardMaterial 
            color="#6b7280"
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>
        {/* Antenna Tip */}
        <mesh position={[0, 0.08, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial 
            color="#3b82f6"
            emissive="#1e40af"
            emissiveIntensity={0.08}
          />
        </mesh>
        {/* Signal Waves - FIXED */}
        {[...Array(3)].map((_, i) => (
          <mesh key={i} position={[0, 0.08, 0]} rotation={[0, 0, i * Math.PI / 3]}>
            <torusGeometry args={[0.05 + i * 0.02, 0.005, 4, 8]} />
            <meshStandardMaterial 
              color="#3b82f6"
              emissive="#1e40af"
              emissiveIntensity={0.08}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function SwitchPhoneModel() {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        shadows
        dpr={[1, 2]}
        style={{ width: '100%', height: '100vh' }}
        gl={{ antialias: true, alpha: false, toneMappingExposure: 0.8 }}
        scene={{ background: new THREE.Color(0xffffff) }}
      >
        {/* Professional Lighting Setup */}
        <ambientLight intensity={0.3} />
        
        {/* Key Light */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.0}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Fill Light */}
        <directionalLight 
          position={[-3, 2, 3]} 
          intensity={0.4}
          color="#87ceeb"
        />
        
        {/* Rim Light */}
        <pointLight 
          position={[0, 0, -5]} 
          intensity={0.6}
          color="#ffffff"
        />

        <SwitchPhoneDevice />
        
        <OrbitControls 
          enableZoom={true}
          maxDistance={10}
          minDistance={3}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
} 