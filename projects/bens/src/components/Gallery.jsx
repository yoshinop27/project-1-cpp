import React from 'react'

const Gallery = () => {
  const galleryItems = [
    { title: 'Game Action', emoji: '📸' },
    { title: 'Team Photos', emoji: '📸' },
    { title: 'Championship', emoji: '📸' },
    { title: 'Community', emoji: '📸' },
    { title: 'Highlights', emoji: '📸' },
    { title: 'Events', emoji: '📸' },
  ]

  return (
    <section id="gallery" className="py-32 bg-gradient-to-br from-gray-900 via-pink-900/20 to-sky-900/20 relative overflow-hidden">
      {/* Instagram-style Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 h-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="border border-white"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="mb-16 transform -rotate-1 text-center">
          <h2 className="text-7xl md:text-9xl font-black text-white leading-none inline-block" style={{ letterSpacing: '-0.05em', textShadow: '4px 4px 0px rgba(236, 72, 153, 0.5)' }}>
            GALLERY
          </h2>
        </div>

        {/* Instagram-style Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
          {galleryItems.map((item, index) => {
            const rotations = [0, -2, 2, -1, 1, -3]
            const sizes = ['aspect-square', 'aspect-square', 'aspect-square', 'aspect-square', 'aspect-square', 'aspect-square']
            return (
              <div
                key={index}
                className={`${sizes[index]} rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:z-10 hover:border-pink-400`}
                style={{ 
                  transform: `rotate(${rotations[index]}deg)`,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-pink-500 via-pink-400 to-sky-400 flex flex-col items-center justify-center text-white p-6">
                  <span className="text-8xl mb-4 transform hover:scale-125 transition-transform duration-300">{item.emoji}</span>
                  <p className="text-2xl font-black uppercase tracking-wider">{item.title}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Check out more photos and videos on our{' '}
            <a
              href="https://www.instagram.com/oakland_wiffle_league/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Instagram
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  )
}

export default Gallery
