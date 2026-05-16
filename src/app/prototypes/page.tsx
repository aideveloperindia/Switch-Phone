'use client';

import React from 'react';
import Image from 'next/image';

export default function PrototypesPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* First Prototype Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          1st Prototype : August, 2022
        </h2>
        <p className="text-sm text-gray-600 text-center mb-12">(Developed by Bootstrapping)</p>
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-[500px]">
            <Image
              src={`/prototypes/1st%20prototype.png`}
              alt="First Switch Phone Prototype"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* 3D Printed Prototype Section */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          3D Printed Prototype: January, 2025
        </h2>
        <p className="text-sm text-gray-600 text-center mb-12">(Developed by Bootstrapping)</p>
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-[500px]">
            <Image
              src={`/prototypes/3d%20printed%20prototype.png`}
              alt="3D Printed Switch Phone Prototype"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 