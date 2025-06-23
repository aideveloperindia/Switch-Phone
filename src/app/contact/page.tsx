import React from 'react'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-rich-black mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interested in saving lives with Switch-Phone? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
} 