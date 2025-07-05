'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import dynamic from 'next/dynamic';

// Dynamically import the 3D component to avoid SSR issues
const StaticSwitchPhone3D = dynamic(() => import('@/components/StaticSwitchPhone3D'), { 
  ssr: false,
  loading: () => (
    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
      <span className="text-white text-xs font-bold">SP</span>
    </div>
  )
});

export default function NavigationLogo() {
  return (
    <Suspense fallback={
      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <span className="text-white text-xs font-bold">SP</span>
      </div>
    }>
      <Canvas
        style={{ 
          width: '40px', 
          height: '40px',
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
        <group scale={0.25}>
          <StaticSwitchPhone3D />
        </group>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={3}
        />
      </Canvas>
    </Suspense>
  );
} 