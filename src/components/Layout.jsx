import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react'
import NatureEffects from './NatureEffects'
import FloatingElements from './FloatingElements'
import LightEffects from './LightEffects'
import ScrollAura from './ScrollAura'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/about' },
    { name: 'CV', href: '/about' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--dark-bg)' }}>
      {/* Nature Effects */}
      <LightEffects />
      <FloatingElements />
      <NatureEffects />
      <ScrollAura />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between rounded-xl fixed-header px-6 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden profile-image">
                <img 
                  src="/portfolio/emoji3.png" 
                  alt="Diogo Pinto" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">
                  Diogo Pinto
                </span>
                <span className="text-xs text-tech text-nature-green-400">
                  Data Scientist with a green-science edge
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-nature-green-400 ${
                    location.pathname === item.href
                      ? 'text-nature-green-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/portfolio/resume.pdf"
                download
                className="flex items-center px-4 py-2 bg-tech-surface text-gray-300 hover:text-white transition-colors rounded-lg border border-gray-700 hover:border-nature-green-400"
              >
                <Download size={16} className="mr-2" />
                Download CV
              </a>
              <a
                href="/contact"
                className="flex items-center px-6 py-2 bg-nature-green-500 text-white font-semibold rounded-lg hover:bg-nature-green-600 transition-colors"
              >
                Hire me
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-nature-green-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 rounded-xl glass-header p-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-nature-green-400 ${
                      location.pathname === item.href
                        ? 'text-nature-green-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                  <a
                    href="https://github.com/diogopinto1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-300 hover:text-nature-green-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/diogopinto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-300 hover:text-nature-green-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:diogo.praia10@gmail.com"
                    className="p-2 text-gray-300 hover:text-nature-green-400 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 pt-24 pb-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="text-tech">&copy; 2024 Diogo Pinto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
