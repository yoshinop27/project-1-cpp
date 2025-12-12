import React from 'react'

const Schedule = () => {
  const games = [
    {
      month: 'Dec',
      day: '15',
      title: 'League Championship',
      teams: 'Team A vs Team B',
      location: 'Oakland Park - 2:00 PM',
    },
    {
      month: 'Dec',
      day: '22',
      title: 'Regular Season',
      teams: 'Team C vs Team D',
      location: 'Oakland Park - 1:00 PM',
    },
    {
      month: 'Jan',
      day: '5',
      title: 'New Season Starts',
      teams: 'Opening Day',
      location: 'Oakland Park - 12:00 PM',
    },
  ]

  return (
    <section id="schedule" className="py-32 bg-gradient-to-br from-sky-50 via-pink-50 to-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="mb-16 transform -rotate-1">
          <h2 className="text-7xl md:text-9xl font-black text-gray-900 leading-none" style={{ letterSpacing: '-0.05em' }}>
            UPCOMING
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">GAMES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-pink-200 hover:border-sky-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-2"
              style={{ 
                transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }}
            >
              {/* Date Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-sky-400 text-white rounded-2xl p-4 text-center min-w-[90px] transform -rotate-3">
                  <span className="text-xs font-black uppercase block">{game.month}</span>
                  <span className="text-4xl font-black block leading-none">{game.day}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{game.title}</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-xl font-bold bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                  {game.teams}
                </p>
                <p className="text-gray-600 font-semibold flex items-center gap-2">
                  <span className="text-2xl">📍</span> {game.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Follow us on{' '}
            <a
              href="https://www.instagram.com/oakland_wiffle_league/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Instagram
            </a>{' '}
            for live updates and schedule changes!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Schedule
