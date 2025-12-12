import React from 'react'

const About = () => {
  const stats = [
    { number: '50+', label: 'Active Players' },
    { number: '8', label: 'Teams' },
    { number: '20+', label: 'Games Per Season' },
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-pink-50 via-white to-sky-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl transform rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl transform -rotate-45"></div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text with rotation */}
          <div className="space-y-8 transform md:-rotate-1">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-sky-400 px-6 py-2 rounded-full transform rotate-3">
              <span className="text-sm font-black text-white uppercase tracking-wider">⚾ ABOUT US</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black leading-none" style={{ letterSpacing: '-0.05em' }}>
              WE PLAY
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                HARD
              </span>
            </h2>
            <div className="space-y-6 transform rotate-1">
              <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                The Oakland Wiffle League is a competitive wiffle ball league bringing together players of all skill levels.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with passion, our league emphasizes sportsmanship, camaraderie, and the pure joy of playing wiffle ball.
              </p>
            </div>
          </div>

          {/* Right Side - Stats Cards with rotation */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-transparent hover:border-pink-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                style={{ 
                  transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              >
                <h3 className="text-7xl font-black bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-xl font-bold text-gray-800 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
