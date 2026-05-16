'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import dynamic from 'next/dynamic';

// Dynamically import the 3D component to avoid SSR issues
const StaticSwitchPhone3D = dynamic(() => import('@/components/StaticSwitchPhone3D'), { 
  ssr: false,
  loading: () => null
});

export default function FaviconLogo() {
  return (
    <Canvas
      style={{ 
        width: '32px', 
        height: '32px',
        background: 'transparent',
        outline: 'none',
        border: 'none'
      }}
      camera={{ position: [0, 0, 8], fov: 30 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, -5]} intensity={1.5} />
      <pointLight position={[-5, -5, 5]} intensity={1} />
      <pointLight position={[5, -5, -5]} intensity={1} />
      <group scale={0.2} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
        <StaticSwitchPhone3D />
      </group>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={false}
      />
    </Canvas>
  );
} 