'use client';

import React, { useState, useEffect } from 'react';
import InnovationCertificatesModal from './InnovationCertificatesModal';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showCertificatesModal, setShowCertificatesModal] = useState(false);

  useEffect(() => {
    // Always show modal on first load - remove localStorage check for testing
    const timer = setTimeout(() => {
      setShowCertificatesModal(true);
    }, 500); // Reduced delay to 500ms
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Make the show certificates function globally available
    (window as any).showInnovationCertificates = () => {
      setShowCertificatesModal(true);
    };
  }, []);

  const handleCloseCertificatesModal = () => {
    setShowCertificatesModal(false);
    // Mark that user has seen the certificates
    localStorage.setItem('hasSeenInnovationCertificates', 'true');
  };

  return (
    <>
      {children}
      
      {/* Floating Certificates Button */}
      <button
        onClick={() => setShowCertificatesModal(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-40"
        title="View Innovation Certificates"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </button>
      
      <InnovationCertificatesModal 
        isOpen={showCertificatesModal}
        onClose={handleCloseCertificatesModal}
      />
    </>
  );
} 