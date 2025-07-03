'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import ScrollingScreen from './ScrollingScreen';

// Service Button Component
function ServiceButton({ position, color, label, onClick, isActive }: {
  position: [number, number, number];
  color: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      <RoundedBox
        ref={meshRef}
        args={[0.275, 0.5775, 0.025]}
        radius={0.05}
        smoothness={8}
        position={position}
        onClick={onClick}
      >
        <meshStandardMaterial 
          color={color}
          metalness={1.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={isActive ? 2.0 : 1.5}
          envMapIntensity={3}
        />
      </RoundedBox>
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

// Main Switch Phone Component
function SwitchPhoneDevice() {
  const phoneRef = useRef<THREE.Group>(null);
  
  // State for new logic
  const [activeService, setActiveService] = useState<string | null>(null);
  const [teluguSentence, setTeluguSentence] = useState('');
  const [englishSentence, setEnglishSentence] = useState('');

  // State for visuals, re-introduced and connected to new logic
  const [speakingAnimation, setSpeakingAnimation] = useState(false);
  const [emergencyFlash, setEmergencyFlash] = useState(false);
  const [flashIntensity, setFlashIntensity] = useState(0);
  const [pulseSensorClicked, setPulseSensorClicked] = useState(false);

  // Audio State Trackers
  const [currentMainAudio, setCurrentMainAudio] = useState<HTMLAudioElement | null>(null);
  const [currentRingtone, setCurrentRingtone] = useState<HTMLAudioElement | null>(null);
  const [currentResponseAudio, setCurrentResponseAudio] = useState<HTMLAudioElement | null>(null);
  const [cameraAudio, setCameraAudio] = useState<HTMLAudioElement | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [engRingtoneCount, setEngRingtoneCount] = useState(0);
  const [telRingtoneCount, setTelRingtoneCount] = useState(0);

  // Stop All Audio Function
  const stopAllAudio = () => {
    [currentMainAudio, currentRingtone, currentResponseAudio, cameraAudio].forEach(audio => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  // Play Response Audio Function
  const playResponseAudio = (label: string) => {
    const resPath = `/audios/response-${label.toLowerCase()}.mp3`;

    const responseAudio = new Audio(resPath);
    setCurrentResponseAudio(responseAudio);
    responseAudio.play();
  };

  // Play Camera Audio Function
  const playCameraAudio = () => {
    const camPath = "/audios/camera open audio.mp3";
    const camAudio = new Audio(camPath);
    setCameraAudio(camAudio);
    camAudio.play();

    camAudio.onended = () => {
      // Start 10-second video recording
      startVideoRecording();
    };
  };

  // Video Recording Function
  const startVideoRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        
        // Create download link
        const a = document.createElement('a');
        a.href = url;
        a.download = `family-emergency-${Date.now()}.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Clean up
        URL.revokeObjectURL(url);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      
      // Stop recording after 10 seconds
      setTimeout(() => {
        mediaRecorder.stop();
      }, 10000);

    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  // Main Audio Handler Function
  const handleSwitchClick = (label: string) => {
    stopAllAudio();
    setClickCount(prev => prev + 1);

    // 1. Play main Telugu sentence
    const mainPath = `/audios/${label.toLowerCase()} audio.mp3`;
    const mainAudio = new Audio(mainPath);
    setCurrentMainAudio(mainAudio);
    mainAudio.play();

    mainAudio.onended = () => {
      const isEnglish = clickCount % 2 === 1;

      // Increment per-language ringtone counter
      if (isEnglish) {
        setEngRingtoneCount(prev => prev + 1);
      } else {
        setTelRingtoneCount(prev => prev + 1);
      }

      const ringPath = isEnglish
        ? `/audios/switch-phone-english-ringtone.mp3`
        : `/audios/switch-phone-telugu-ringtone.mp3`;

      const ringtone = new Audio(ringPath);
      setCurrentRingtone(ringtone);
      ringtone.play();

      // Duration Logic
      const rCount = isEnglish ? engRingtoneCount + 1 : telRingtoneCount + 1;
      let duration = Infinity;
      if (rCount === 2) duration = 10000;
      else if (rCount >= 3) duration = 5000;

      // Cutoff or full play
      if (duration !== Infinity) {
        setTimeout(() => {
          ringtone.pause();
          ringtone.currentTime = 0;
          // Family goes straight to camera, others play response
          if (label === 'Family') {
            playCameraAudio();
          } else {
            playResponseAudio(label);
          }
        }, duration + 100);
      } else {
        ringtone.onended = () => {
          // Family goes straight to camera, others play response
          if (label === 'Family') {
            playCameraAudio();
          } else {
            playResponseAudio(label);
          }
        };
      }
    };
  };
  
  // Load Textures
  const microphoneTexture = useLoader(THREE.TextureLoader, '/icons/microphone.png');
  const speakerTexture = useLoader(THREE.TextureLoader, '/icons/speaker.png');
  const cameraTexture = useLoader(THREE.TextureLoader, '/icons/camera.png');
  const pulseTexture = useLoader(THREE.TextureLoader, '/icons/finger scan icon.png');
  const sensorTexture = useLoader(THREE.TextureLoader, '/icons/sensor.png');

  // New Pulse Click Handler with visual state
  const handlePulseSensorClick = () => {
    setPulseSensorClicked(true);
    setTimeout(() => setPulseSensorClicked(false), 500); // Reset visual after a moment

    const bpm = [78, 72, 59, 73, 99][Math.floor(Math.random() * 5)];
    const telugu = `మీ పల్స్ రేట్ ${bpm} బీట్‌లు`;
    const english = `Pulse: ${bpm} BPM`;

    setTeluguSentence(telugu);
    setEnglishSentence(english);

    // Stop all audio and speech synthesis
    stopAllAudio();
    window.speechSynthesis.cancel();
    
    // Small delay to ensure cleanup
    setTimeout(() => {
      const speech = new SpeechSynthesisUtterance(telugu);
      speech.lang = 'te-IN';
      speech.rate = 0.9;
      speech.pitch = 1.0;
      speech.volume = 1.0;
      
      // Try to get Telugu voice specifically
      const voices = window.speechSynthesis.getVoices();
      const teluguVoice = voices.find(voice => voice.lang.includes('te') || voice.lang.includes('TE'));
      if (teluguVoice) {
        speech.voice = teluguVoice;
        console.log('Using Telugu voice:', teluguVoice.name);
      } else {
        console.log('No Telugu voice found, using default');
      }
      
      // Ensure only one speech instance
      speech.onstart = () => {
        console.log('Telugu speech started:', telugu);
      };
      speech.onend = () => {
        console.log('Telugu speech ended');
      };
      
      window.speechSynthesis.speak(speech);
    }, 100);
  };
  
  // New Service Click Handler with visual state
  const handleServiceClick = (serviceId: string, label: string) => {
    window.speechSynthesis.cancel();
    
    if (activeService === serviceId) {
      setActiveService(null);
      setTeluguSentence('');
      setEnglishSentence('');
      setSpeakingAnimation(false);
      setEmergencyFlash(false);
      stopAllAudio();
      return;
    }

    setActiveService(serviceId);
    setEmergencyFlash(serviceId === 'ambulance');

    const teluguMap: { [key: string]: string } = {
      Hospital: 'ఆసుపత్రికి కాల్ చేస్తున్నాను...',
      Pharmacy: 'మెడికల్ షాప్‌కి కాల్ చేస్తున్నాను...',
      Ambulance: 'అంబులెన్స్‌కి కాల్ చేస్తున్నాను...',
      Grocery: 'కిరాణా దుకాణానికి కాల్ చేస్తున్నాను...',
      Family: 'కుటుంబానికి కాల్ చేస్తున్నాను...',
    };

    const englishMap: { [key: string]: string } = {
      Hospital: 'Calling Hospital...',
      Pharmacy: 'Calling Pharmacy...',
      Ambulance: 'Calling Ambulance...',
      Grocery: 'Calling Grocery...',
      Family: 'Calling Family...',
    };

    const teluguMessage = (teluguMap as any)[label] || '';
    const englishMessage = (englishMap as any)[label] || '';

    setTeluguSentence(teluguMessage);
    setEnglishSentence(englishMessage);

    // Use the new audio logic instead of speech synthesis
    setSpeakingAnimation(true);
    handleSwitchClick(label);
  };
  
  // Frame logic for emergency flashing
  useFrame((state) => {
    if (emergencyFlash) {
      const intensity = (Math.sin(state.clock.elapsedTime * 8) + 1) * 0.5;
      setFlashIntensity(intensity);
    } else {
      setFlashIntensity(0);
    }
  });

  const services = [
    { id: 'hospital', label: 'Hospital', color: '#D70000', position: [-0.75, 0.2, 0.16] as [number, number, number] },
    { id: 'pharmacy', label: 'Pharmacy', color: '#00A651', position: [-0.375, 0.2, 0.16] as [number, number, number] },
    { id: 'ambulance', label: 'Ambulance', color: '#005BBB', position: [0, 0.2, 0.16] as [number, number, number] },
    { id: 'essentials', label: 'Grocery', color: '#FF6F00', position: [0.375, 0.2, 0.16] as [number, number, number] },
    { id: 'family', label: 'Family', color: '#9C27B0', position: [0.75, 0.2, 0.16] as [number, number, number] },
  ];

  return (
    <group ref={phoneRef} scale={[1.8, 1.8, 1.8]}>
      <RoundedBox args={[3.25, 2.25, 0.32]} radius={0.16} smoothness={16} position={[0, 0, -0.01]}>
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </RoundedBox>

      <Text position={[0, 0.85, 0.16]} fontSize={0.1} color="#ffffff" anchorX="center" anchorY="middle">
        Switch-Phone
      </Text>

      {services.map((service) => (
        <ServiceButton
          key={service.id}
          position={service.position}
          color={service.color}
          label={service.label}
          onClick={() => handleServiceClick(service.id, service.label)}
          isActive={activeService === service.id}
        />
      ))}

      <ScrollingScreen teluguMessage={teluguSentence} englishMessage={englishSentence} />

      {/* Rings and Icons with restored visuals */}
      <mesh position={[-0.75, 0.8, 0.15]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[-0.75, 0.8, 0.176]}>
        <planeGeometry args={[0.18, 0.18]} />
        <meshBasicMaterial map={speakerTexture} transparent />
      </mesh>
      <mesh position={[-0.75, 0.87, 0.151]}>
        <torusGeometry args={[0.12, 0.02, 16, 32, Math.PI]} />
        <meshStandardMaterial 
          color={emergencyFlash ? "#FF0000" : speakingAnimation ? "#00FF00" : "#87CEEB"}
          metalness={0.8} roughness={0.1}
          emissive={emergencyFlash ? "#FF0000" : speakingAnimation ? "#00FF00" : "#000000"}
          emissiveIntensity={emergencyFlash ? flashIntensity * 0.8 : speakingAnimation ? 0.5 : 0}
        />
      </mesh>

      <mesh position={[0.75, 0.8, 0.15]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[0.75, 0.8, 0.176]}>
        <planeGeometry args={[0.18, 0.18]} />
        <meshBasicMaterial map={cameraTexture} transparent />
      </mesh>
      <mesh position={[0.75, 0.84, 0.151]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.12, 0.02, 16, 32, Math.PI]} />
        <meshStandardMaterial 
          color={emergencyFlash ? "#FF0000" : activeService === 'family' ? "#00FF00" : "#87CEEB"}
          metalness={0.8} roughness={0.1}
          emissive={emergencyFlash ? "#FF0000" : activeService === 'family' ? "#00FF00" : "#000000"}
          emissiveIntensity={emergencyFlash ? flashIntensity * 0.8 : activeService === 'family' ? 0.5 : 0}
        />
      </mesh>

      <mesh position={[-1.4, 0.2, 0.15]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[-1.4, 0.2, 0.176]}>
        <planeGeometry args={[0.18, 0.18]} />
        <meshBasicMaterial map={microphoneTexture} transparent />
      </mesh>
      <mesh position={[-1.4, 0.2, 0.151]} rotation={[0, 0, -Math.PI/2]}>
        <torusGeometry args={[0.12, 0.02, 16, 32, Math.PI]} />
        <meshStandardMaterial color={"#87CEEB"} metalness={0.8} roughness={0.1} />
      </mesh>

      <mesh position={[1.4, 0.2, 0.15]} rotation={[Math.PI/2, 0, 0]} onClick={handlePulseSensorClick}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[1.4, 0.2, 0.176]}>
        <planeGeometry args={[0.24, 0.24]} />
        <meshBasicMaterial map={sensorTexture} transparent />
      </mesh>
      <mesh position={[1.4, 0.2, 0.151]} rotation={[0, 0, Math.PI/2]}>
        <torusGeometry args={[0.14, 0.02, 16, 32, Math.PI]} />
        <meshStandardMaterial 
          color={pulseSensorClicked ? "#FF0080" : "#87CEEB"}
          metalness={0.8} roughness={0.1}
          emissive={pulseSensorClicked ? "#FF0080" : "#000000"}
          emissiveIntensity={pulseSensorClicked ? 0.5 : 0}
        />
      </mesh>
    </group>
  );
}

export default function SwitchPhoneModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      shadows
      dpr={[1, 2]}
      style={{ width: '800px', height: '800px' }}
      className="md:!w-full md:!h-full"
      gl={{ antialias: true, alpha: false, toneMappingExposure: 0.8 }}
      scene={{ background: new THREE.Color(0xffffff) }}
    >
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight 
          position={[5, 8, 5]} 
          intensity={3.3}
          color="#ffffff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight 
          position={[-5, 5, 3]} 
          intensity={1.7}
          color="#f0f8ff"
        />
        <directionalLight 
          position={[0, 0, -8]} 
          intensity={1.3}
          color="#ffffff"
        />
        <pointLight 
          position={[8, 0, 2]} 
          intensity={1.1}
          color="#ffffff"
        />
        <pointLight 
          position={[-8, 0, 2]} 
          intensity={1.1}
          color="#ffffff"
        />
        <SwitchPhoneDevice />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
    </Canvas>
  );
}