'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface InnovationCertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const certificates = [
  { year: '2019', src: '/innovations/2019.jpg', title: 'Innovation Certificate 2019' },
  { year: '2020', src: '/innovations/2020.jpg', title: 'Innovation Certificate 2020' },
  { year: '2022', src: '/innovations/2022.jpg', title: 'Innovation Certificate 2022' },
  { year: '2023', src: '/innovations/2023.jpg', title: 'Innovation Certificate 2023' },
];

export default function InnovationCertificatesModal({ isOpen, onClose }: InnovationCertificatesModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
        setIsAnimating(false);
      }, 250);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
      setIsAnimating(false);
    }, 250);
  };

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
      setIsAnimating(false);
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ backdropFilter: 'blur(5px)' }}
    >
      {/* Background Overlay with reduced blur */}
      <div 
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      
      {/* Modal Content - Smaller with better close button */}
      <div className={`relative z-10 w-full max-w-lg mx-2 sm:mx-4 my-6 sm:my-8 bg-white rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 ${
        isOpen ? 'scale-100' : 'scale-95'
      }`}>
        {/* Header with prominent close button */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 sm:p-3 flex justify-between items-center relative">
          <div className="flex-1 pr-12">
            <h2 className="text-sm sm:text-lg font-bold">Innovation Certificates</h2>
            <p className="text-blue-100 mt-1 text-xs">Our journey of innovation</p>
          </div>
          {/* Larger, more accessible close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-red-200 transition-colors p-2 hover:bg-red-500/30 rounded-full border-2 border-white hover:border-red-200 bg-red-500/20"
            title="Close certificates"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Certificate Display Area - Compact size */}
        <div className="relative p-1 sm:p-2 bg-gray-50 min-h-[200px] sm:min-h-[280px] flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="aspect-[4/3] relative">
                <Image
                  src={certificates[currentIndex].src}
                  alt={certificates[currentIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="p-1 sm:p-2 bg-white border-t">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 text-center">
                  {certificates[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-center mt-1 text-xs">
                  Year: {certificates[currentIndex].year}
                </p>
              </div>
            </div>

            {/* Navigation Arrows - Smaller */}
            <button
              onClick={handlePrevious}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer - Compact */}
        <div className="bg-white border-t p-1 sm:p-2 flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="text-xs text-gray-600">
            Certificate {currentIndex + 1} of {certificates.length}
          </div>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-colors text-xs"
            >
              View Website
            </button>
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-3 py-1 sm:px-4 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-xs"
            >
              Next Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 