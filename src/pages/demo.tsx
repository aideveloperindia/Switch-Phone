import React from 'react';
import Head from 'next/head';

export default function Demo() {
  return (
    <>
      <Head>
        <title>Demo - Switch Phone</title>
        <meta name="description" content="Switch Phone Demo Page" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Switch Phone Demo
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Welcome to the Switch Phone demonstration page. This is where you can showcase your healthcare emergency device features.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Demo Content
            </h2>
            <p className="text-gray-600">
              Add your demo content here - 3D model, features, or any other demonstration materials.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 