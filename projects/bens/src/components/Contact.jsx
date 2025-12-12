import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your message, ${formData.name}! We'll get back to you at ${formData.email} soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-pink-500 via-pink-400 to-sky-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="mb-16 transform rotate-1">
          <h2 className="text-7xl md:text-9xl font-black text-white leading-none" style={{ letterSpacing: '-0.05em', textShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}>
            GET IN
            <br />
            <span className="text-sky-100">TOUCH</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="transform -rotate-1">
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border-4 border-white/30 shadow-2xl">
              <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-wider">Join the League</h3>
              <p className="text-xl font-bold text-white/90 mb-8 leading-relaxed">
                Interested in joining the Oakland Wiffle League? We'd love to have you!
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/oakland_wiffle_league/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-pink-500 transition-all duration-300 hover:scale-105 hover:rotate-1 border-2 border-white/30 hover:border-white transform"
                >
                  <span className="text-4xl">📷</span>
                  <span className="font-black text-xl">@oakland_wiffle_league</span>
                </a>

                <div className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/30 transform rotate-1">
                  <span className="text-4xl">📍</span>
                  <span className="text-white font-black text-xl">Oakland, California</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border-4 border-white/30 shadow-2xl transform rotate-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="YOUR NAME"
                  required
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border-4 border-white/30 rounded-2xl focus:outline-none focus:border-white focus:bg-white focus:text-pink-500 transition-all duration-300 font-black text-white placeholder-white/60 text-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="YOUR EMAIL"
                  required
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border-4 border-white/30 rounded-2xl focus:outline-none focus:border-white focus:bg-white focus:text-pink-500 transition-all duration-300 font-black text-white placeholder-white/60 text-lg"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="YOUR MESSAGE"
                  required
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border-4 border-white/30 rounded-2xl focus:outline-none focus:border-white focus:bg-white focus:text-pink-500 transition-all duration-300 font-black text-white placeholder-white/60 text-lg resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full text-2xl font-black py-6 px-8 bg-white text-pink-500 rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 uppercase tracking-wider"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
