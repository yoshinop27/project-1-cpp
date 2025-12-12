import React from 'react'

const Hero = () => {
  const scrollToSchedule = () => {
    document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 25%, #87ceeb 50%, #93c5fd 75%, #bfdbfe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content - Asymmetric Layout */}
      <div className="relative z-10 text-white px-5 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Bold Typography */}
          <div className="text-left space-y-6 transform md:-rotate-1">
            <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-4 transform rotate-3">
              <span className="text-sm font-black uppercase tracking-wider">⚾ EST. 2024</span>
            </div>
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6"
              style={{
                textShadow: '4px 4px 0px rgba(0,0,0,0.3), 8px 8px 20px rgba(0,0,0,0.2)',
                letterSpacing: '-0.05em',
                lineHeight: '0.9',
              }}
            >
              OAKLAND
              <br />
              <span className="bg-gradient-to-r from-pink-300 to-sky-300 bg-clip-text text-transparent">
                WIFFLE
              </span>
              <br />
              LEAGUE
            </h1>
            <p className="text-2xl md:text-3xl font-bold transform rotate-1 ml-4">
              Where Competition
              <br />
              <span className="text-pink-200">Meets Community</span>
            </p>
          </div>

          {/* Right Side - Buttons & Badge */}
          <div className="space-y-6 transform md:rotate-1">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border-4 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <button 
                  onClick={scrollToSchedule} 
                  className="w-full text-2xl font-black py-6 px-8 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  VIEW SCHEDULE →
                </button>
                <button 
                  onClick={scrollToContact} 
                  className="w-full text-2xl font-black py-6 px-8 bg-white/20 backdrop-blur-md border-4 border-white text-white rounded-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  JOIN US ✨
                </button>
              </div>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full transform -rotate-3">
                <span className="font-black text-lg">50+ Players</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full transform rotate-3">
                <span className="font-black text-lg">8 Teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-scroll">
        <div className="w-8 h-12 border-2 border-white rounded-full relative">
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
