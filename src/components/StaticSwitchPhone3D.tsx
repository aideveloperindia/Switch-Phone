'use client';

import React from 'react';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export default function StaticSwitchPhone3D() {
  // Load Textures
  const microphoneTexture = useLoader(THREE.TextureLoader, '/icons/microphone.png');
  const speakerTexture = useLoader(THREE.TextureLoader, '/icons/speaker.png');
  const cameraTexture = useLoader(THREE.TextureLoader, '/icons/camera.png');
  const pulseTexture = useLoader(THREE.TextureLoader, '/icons/finger scan icon.png');
  const sensorTexture = useLoader(THREE.TextureLoader, '/icons/sensor.png');

  const services = [
    { id: 'hospital', label: 'Hospital', color: '#D70000', position: [-0.75, 0.2, 0.16] as [number, number, number] },
    { id: 'pharmacy', label: 'Pharmacy', color: '#00A651', position: [-0.375, 0.2, 0.16] as [number, number, number] },
    { id: 'ambulance', label: 'Ambulance', color: '#005BBB', position: [0, 0.2, 0.16] as [number, number, number] },
    { id: 'essentials', label: 'Grocery', color: '#FF6F00', position: [0.375, 0.2, 0.16] as [number, number, number] },
    { id: 'family', label: 'Family', color: '#9C27B0', position: [0.75, 0.2, 0.16] as [number, number, number] },
  ];

  return (
    <group scale={[1.8, 1.8, 1.8]}>
      {/* Main Phone Body */}
      <RoundedBox args={[3.25, 2.25, 0.32]} radius={0.16} smoothness={16} position={[0, 0, -0.01]}>
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </RoundedBox>

      {/* Switch Phone Text */}
      <Text position={[0, 0.85, 0.16]} fontSize={0.1} color="#ffffff" anchorX="center" anchorY="middle">
        Switch-Phone
      </Text>

      {/* Service Buttons */}
      {services.map((service) => (
        <group key={service.id}>
          <RoundedBox
            args={[0.275, 0.5775, 0.025]}
            radius={0.05}
            smoothness={8}
            position={service.position}
          >
            <meshStandardMaterial 
              color={service.color}
              metalness={1.8}
              roughness={0.2}
              emissive={service.color}
              emissiveIntensity={1.5}
              envMapIntensity={3}
            />
          </RoundedBox>
          <Text
            position={[service.position[0], service.position[1] - 0.4, service.position[2]]}
            fontSize={0.06}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {service.label}
          </Text>
        </group>
      ))}

      {/* Speaker Ring and Icon */}
      <mesh position={[-0.75, 0.8, 0.15]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[-0.75, 0.8, 0.176]}>
        <planeGeometry args={[0.18, 0.18]} />
        <meshBasicMaterial map={speakerTexture} transparent />
      </mesh>
      <mesh position={[-0.75, 0.87, 0.151]}>
        <ringGeometry args={[0.11, 0.13, 16, 1, 0, Math.PI]} />
        <meshStandardMaterial color="#87CEEB" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Camera Ring and Icon */}
      <mesh position={[0.75, 0.8, 0.15]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[0.75, 0.8, 0.176]}>
        <planeGeometry args={[0.18, 0.18]} />
        <meshBasicMaterial map={cameraTexture} transparent />
      </mesh>
      <mesh position={[0.75, 0.84, 0.151]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.11, 0.13, 16, 1, 0, Math.PI]} />
        <meshStandardMaterial color="#87CEEB" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Microphone Ring and Icon */}
      <mesh position={[-1.4, 0.2, 0.15]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[-1.4, 0.2, 0.176]}>
        <planeGeometry args={[0.18, 0.18]} />
        <meshBasicMaterial map={microphoneTexture} transparent />
      </mesh>
      <mesh position={[-1.4, 0.2, 0.151]} rotation={[0, 0, -Math.PI/2]}>
        <ringGeometry args={[0.11, 0.13, 16, 1, 0, Math.PI]} />
        <meshStandardMaterial color="#87CEEB" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Pulse Sensor Ring and Icon */}
      <mesh position={[1.4, 0.2, 0.15]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 32]} />
        <meshStandardMaterial color="#54c6ff" metalness={0.8} roughness={0.1} />
      </mesh>
      <mesh position={[1.4, 0.2, 0.176]}>
        <planeGeometry args={[0.18, 0.18]} />
        <meshBasicMaterial map={pulseTexture} transparent />
      </mesh>
      <mesh position={[1.4, 0.2, 0.151]} rotation={[0, 0, Math.PI/2]}>
        <ringGeometry args={[0.11, 0.13, 16, 1, 0, Math.PI]} />
        <meshStandardMaterial color="#87CEEB" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Screen */}
      <RoundedBox
        args={[1.5, 0.18, 0.02]}
        radius={0.02}
        smoothness={8}
        position={[0, -0.6, 0.16]}
      >
        <meshStandardMaterial 
          color="#000000"
          metalness={0.5}
          roughness={0.2}
          envMapIntensity={2}
        />
      </RoundedBox>
    </group>
  );
} 