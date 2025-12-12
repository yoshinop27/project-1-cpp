import React from 'react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Teams', href: '#teams' },
  ]

  const handleLinkClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="transform -rotate-1">
            <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent">
              OAKLAND WIFFLE LEAGUE
            </h3>
            <p className="text-white/80 font-bold text-lg leading-relaxed">
              Bringing the community together through wiffle ball. ⚾
            </p>
          </div>

          {/* Quick Links */}
          <div className="transform rotate-1">
            <h4 className="text-2xl font-black mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                    className="text-white/70 hover:text-pink-400 transition-all duration-300 cursor-pointer font-bold text-lg hover:translate-x-2 inline-block"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="transform -rotate-1">
            <h4 className="text-2xl font-black mb-6 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/oakland_wiffle_league/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-pink-400 transition-all duration-300 font-bold text-lg hover:translate-x-2 inline-block"
                >
                  📷 Instagram
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick('#contact')
                  }}
                  className="text-white/70 hover:text-sky-400 transition-all duration-300 cursor-pointer font-bold text-lg hover:translate-x-2 inline-block"
                >
                  ✉️ Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-white/20 pt-8 text-center">
          <p className="text-white/60 font-bold text-lg">
            &copy; 2024 Oakland Wiffle League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
