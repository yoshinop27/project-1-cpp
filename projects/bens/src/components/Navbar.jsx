import React, { useState } from 'react'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Teams', href: '#teams' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b-2 border-pink-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
        <div className="logo transform hover:rotate-1 transition-transform duration-300">
          <h1 
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-500 via-pink-400 to-sky-400 bg-clip-text text-transparent drop-shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
            style={{
              animation: 'glow 3s ease-in-out infinite',
              textShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(135, 206, 235, 0.3)',
              letterSpacing: '-0.02em',
              transform: 'skewY(-1deg)',
            }}
          >
            OAKLAND
            <br />
            <span className="text-2xl md:text-4xl ml-8">WIFFLE LEAGUE</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 list-none items-center">
          {navLinks.map((link, index) => (
            <li key={link.name} className="transform hover:-rotate-3 transition-transform duration-300">
              <a
                href={link.href}
                className="text-gray-900 font-black text-lg hover:text-pink-500 transition-all duration-300 relative group px-3 py-2"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                style={{ textShadow: '2px 2px 0px rgba(135, 206, 235, 0.3)' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="py-4 space-y-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block py-4 px-5 text-gray-800 font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
