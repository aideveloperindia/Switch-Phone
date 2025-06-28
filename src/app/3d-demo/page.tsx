'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D component to avoid SSR issues
const SwitchPhoneModel = dynamic(() => import('@/components/SwitchPhone3D'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center text-gray-800">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-xl">Loading 3D Model...</p>
        <p className="text-sm text-gray-600 mt-2">Please wait while the Switch-Phone loads</p>
      </div>
    </div>
  )
});

export default function ThreeDemoPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white pt-12">
      {/* 3D Model Container */}
      <div className="relative w-full h-[calc(100vh-3rem)]">
        <SwitchPhoneModel />
      </div>
      
      {/* Camera Feed Overlay - Top Left */}
      <div id="camera-feed" className="absolute top-6 left-6 z-50 bg-black rounded-lg overflow-hidden opacity-0 transition-opacity duration-500" style={{ display: 'none' }}>
        <video id="camera-video" width="240" height="180" autoPlay playsInline muted className="bg-black"></video>
        <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
          🔴 RECORDING
        </div>
        <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
          Family Video for WhatsApp
        </div>
      </div>

      {/* Voice Status Overlay - Top Right */}
      <div id="voice-status" className="absolute top-6 right-6 z-50 bg-blue-500 text-white rounded-lg p-3 opacity-0 transition-opacity duration-500" style={{ display: 'none' }}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Voice Active</span>
        </div>
        <div id="voice-message" className="text-xs mt-1 opacity-80">Connecting...</div>
      </div>

      {/* Ringing Status Overlay - Top Center */}
      <div id="ringing-status" className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-orange-500 text-white rounded-lg p-3 opacity-0 transition-opacity duration-500" style={{ display: 'none' }}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          <span className="text-sm font-medium">📞 Playing Ringtone...</span>
        </div>
        <div className="text-xs mt-1 opacity-80 text-center">Click service button to hang up</div>
      </div>

      {/* BPM Display Overlay - Bottom Right */}
      <div id="bpm-display" className="absolute bottom-6 right-6 z-50 bg-red-500 text-white rounded-lg p-4 opacity-0 transition-opacity duration-500" style={{ display: 'none' }}>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="text-center">
            <div className="text-lg font-bold" id="bpm-value">--</div>
            <div className="text-xs opacity-80">BPM</div>
          </div>
        </div>
        <div className="text-xs mt-2 opacity-80 text-center">Pulse Sensor Active</div>
      </div>
    </div>
  );
} 