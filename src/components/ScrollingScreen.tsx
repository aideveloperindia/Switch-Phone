import { RoundedBox, Html } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ScrollingScreen({
  teluguMessage = '',
  englishMessage = ''
}: {
  teluguMessage: string;
  englishMessage: string;
}) {
  const [displayText, setDisplayText] = useState('');
  const [scrollPosition, setScrollPosition] = useState(60);

  useEffect(() => {
    console.log('ScrollingScreen received:', { teluguMessage, englishMessage });
    
    if (teluguMessage || englishMessage) {
      const cleanGap = ' '.repeat(30);
      let combined = '';
      
      if (teluguMessage && englishMessage) {
        combined = `${teluguMessage}${cleanGap}${englishMessage}${cleanGap}`;
      } else if (teluguMessage) {
        combined = `${teluguMessage}${cleanGap}`;
      } else if (englishMessage) {
        combined = `${englishMessage}${cleanGap}`;
      }
      
      console.log('Setting display text:', combined);
      setDisplayText(combined);
      setScrollPosition(60); // Start from right edge (60px)
    } else {
      setDisplayText('');
    }
  }, [teluguMessage, englishMessage]);

  // Digital billboard scrolling
  useFrame(() => {
    if (displayText) {
      setScrollPosition(prev => {
        const speed = 0.3; // Slower speed: 0.3px per frame
        const newPosition = prev - speed;
        // Text should completely exit the left side before resetting
        // Assuming text width is ~200px, it should scroll to -200px to fully exit
        if (newPosition < -200) return 60;
        return newPosition;
      });
    }
  });

  return (
    <group position={[0, -0.6, 0.16]}>
      {/* 3D Screen Frame */}
      <RoundedBox
        args={[1.5, 0.18, 0.02]}
        radius={0.02}
        smoothness={8}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color="#000000"
          metalness={0.8}
          roughness={0.1}
        />
      </RoundedBox>
      
      {/* Fancy 3D Border around screen */}
      <RoundedBox
        args={[1.56, 0.24, 0.015]}
        radius={0.03}
        smoothness={8}
        position={[0, 0, -0.005]}
      >
        <meshStandardMaterial 
          color="#10b2bd"
          metalness={0.9}
          roughness={0.05}
          emissive="#0a5a61"
          emissiveIntensity={0.2}
        />
      </RoundedBox>
      
      {/* Inner decorative border */}
      <RoundedBox
        args={[1.52, 0.20, 0.018]}
        radius={0.025}
        smoothness={8}
        position={[0, 0, -0.002]}
      >
        <meshStandardMaterial 
          color="#087278"
          metalness={0.95}
          roughness={0.02}
          emissive="#064449"
          emissiveIntensity={0.15}
        />
      </RoundedBox>
      
      {/* Corner accent details */}
      {/* Top-left corner */}
      <mesh position={[-0.72, 0.08, 0.005]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff"
          metalness={1.0}
          roughness={0.0}
          emissive="#10b2bd"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Top-right corner */}
      <mesh position={[0.72, 0.08, 0.005]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff"
          metalness={1.0}
          roughness={0.0}
          emissive="#10b2bd"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Bottom-left corner */}
      <mesh position={[-0.72, -0.08, 0.005]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff"
          metalness={1.0}
          roughness={0.0}
          emissive="#10b2bd"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Bottom-right corner */}
      <mesh position={[0.72, -0.08, 0.005]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff"
          metalness={1.0}
          roughness={0.0}
          emissive="#10b2bd"
          emissiveIntensity={0.3}
        />
      </mesh>
      
                    {/* HTML Screen with overflow hidden */}
       <Html
         position={[0, 0, 0.015]}
         transform
         occlude
         distanceFactor={10}
       >
         <div style={{
           width: '60px',
           height: '8px',
           backgroundColor: '#000000',
           borderRadius: '2px',
           overflow: 'hidden',
           position: 'relative'
         }}>
          {displayText && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: `${scrollPosition}px`,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Noto Sans Telugu, Arial, sans-serif',
              fontSize: '3px',
              color: '#ffffff',
              whiteSpace: 'pre',
              transform: 'translateY(-50%)'
            }}>
              {displayText}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

export default ScrollingScreen;