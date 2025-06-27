import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Dynamically import the 3D component to avoid SSR issues
const StaticSwitchPhone = dynamic(() => import('@/components/StaticSwitchPhone3D'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[600px]">
      <div className="text-center text-gray-800">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-xl">Loading 3D Model...</p>
        <p className="text-sm text-gray-600 mt-2">Please wait while the Switch-Phone loads</p>
      </div>
    </div>
  )
});

export default function Demo() {
  return (
    <>
      <Head>
        <title>Demo - Switch Phone</title>
        <meta name="description" content="Switch Phone Demo Page" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Switch Phone Demo
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 text-center">
            Welcome to the Switch Phone demonstration page. Explore our healthcare emergency device in 3D.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="h-[600px] w-full">
              <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                style={{ background: 'rgb(245, 247, 250)' }}
              >
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <StaticSwitchPhone />
                <OrbitControls 
                  enablePan={false}
                  minDistance={2}
                  maxDistance={6}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 