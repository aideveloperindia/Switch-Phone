import React from 'react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aditya-nanda/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  }
]

export default function Footer() {
  return (
    <footer className="bg-rich-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-2xl font-space-grotesk font-bold text-white block mb-3">
              Switch-Phone
            </Link>
            <p className="text-gray-300 text-sm mb-4 max-w-md">
              Emergency healthcare in under 60 seconds. Your life-saving connection when every moment counts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Contact</h3>
            <ul role="list" className="space-y-2">
              <li>
                <a href="mailto:team@Switch-Phone.in" className="text-sm text-gray-300 hover:text-white">
                  team@Switch-Phone.in
                </a>
              </li>
              <li>
                <a href="tel:+919505009699" className="text-sm text-gray-300 hover:text-white">
                  +91 95050 09699
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Quick Links</h3>
            <ul role="list" className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin-dashboard" className="text-sm text-gray-300 hover:text-white">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400 xl:text-center">
            &copy; 2022-{new Date().getFullYear()} BeyondX Informatics Analytics Pvt. Ltd. All rights reserved. Developed by Founder's Bootstrapping.
          </p>
        </div>
      </div>
    </footer>
  )
} 