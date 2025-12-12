import React from 'react'

const Teams = () => {
  const teams = [
    { name: 'Team Alpha', description: '2023 Champions' },
    { name: 'Team Beta', description: 'Rising Stars' },
    { name: 'Team Gamma', description: 'Defensive Powerhouse' },
    { name: 'Team Delta', description: 'Underdogs' },
    { name: 'Team Echo', description: 'All-Stars' },
    { name: 'Team Foxtrot', description: 'Rookies' },
    { name: 'Team Golf', description: 'Veterans' },
    { name: 'Team Hotel', description: 'Dark Horses' },
  ]

  return (
    <section id="teams" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="mb-16 text-center transform rotate-1">
          <h2 className="text-7xl md:text-9xl font-black text-gray-900 leading-none inline-block" style={{ letterSpacing: '-0.05em' }}>
            OUR
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">TEAMS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-sky-50 p-8 rounded-3xl text-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-500 hover:to-sky-400 hover:text-white hover:scale-110 hover:rotate-3 shadow-xl border-4 border-transparent hover:border-white group"
              style={{ 
                transform: `rotate(${(index % 4) * 2 - 3}deg)`,
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}
            >
              <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">⚾</div>
              <h3 className="font-black text-lg mb-2 uppercase tracking-wider">{team.name}</h3>
              <p className="text-sm font-bold text-gray-600 group-hover:text-white/90">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams
