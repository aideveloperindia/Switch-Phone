import React from 'react'
import Image from 'next/image'

export default function Team() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Dedicated professionals revolutionizing emergency response through innovation and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Core Team - First Row */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founder */}
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/team/aditya.jfif"
                  alt="Nandagiri Aditya"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nandagiri Aditya</h3>
              <p className="text-blue-600 font-semibold mb-4">Innovator & Founder</p>
              <div className="text-gray-600 text-sm space-y-2">
                <p>4-Time Innovator awardee</p>
                <p>Innovation cell, IT Ministry</p>
                <p>Government of Telangana</p>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="text-center bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/team/hari.jfif"
                  alt="Mr. Harivendrana Chary"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Harivendrana Chary</h3>
              <p className="text-emerald-600 font-semibold mb-4">Co-Founder & Chief Technocrat</p>
              <div className="text-gray-600 text-sm">
                <p>Technical Leadership</p>
                <p>Innovation Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Directors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Medical Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Expert medical professionals guiding our healthcare innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Outreach Director */}
            <div className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/team/kethanve.jfif"
                  alt="Dr. Ch. Kethanve"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Ch. Kethanve</h3>
              <p className="text-cyan-600 font-semibold mb-4">Director for Outreach and Fundraise</p>
              <div className="text-gray-600 text-sm space-y-2">
                <p>Ph.D in Radiodiagnosis</p>
                <p>Healthcare Partnership Development</p>
                <p>Strategic Outreach</p>
              </div>
            </div>

            {/* Medical Director */}
            <div className="text-center bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="/team/dinesh.jpg"
                  alt="Dr. S. Dinesh"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. S. Dinesh</h3>
              <p className="text-teal-600 font-semibold mb-4">Director</p>
              <div className="text-gray-600 text-sm space-y-2">
                <p>MS Orthopedics</p>
                <p>Medical Innovation</p>
                <p>Emergency Response Protocol Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director - Last Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Director */}
          <div className="text-center bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg">
            <div className="w-32 h-32 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl text-white font-bold">NA</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nandagiri Aruna</h3>
            <p className="text-purple-600 font-semibold mb-4">Director</p>
            <div className="text-gray-600 text-sm">
              <p>Strategic Leadership</p>
              <p>Organizational Development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 