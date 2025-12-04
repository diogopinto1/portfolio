import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:diogoeugeniopinto@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Reset form after opening email client
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-tech">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Let's discuss how we can work together to bring your ideas to life.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-tech">
              Let's Connect
            </h2>
            <p className="text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-nature-green-500/20 rounded-full flex items-center justify-center nature-glow">
                <Mail className="text-nature-green-400" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-tech">Email</h3>
                <a 
                  href="mailto:diogoeugeniopinto@gmail.com"
                  className="text-nature-green-400 hover:text-nature-green-300 transition-colors"
                >
                  diogoeugeniopinto@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-nature-green-500/20 rounded-full flex items-center justify-center nature-glow">
                <Phone className="text-nature-green-400" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-tech">Phone</h3>
                <p className="text-gray-300">
                  (+351) <span className="blur-sm">926774888</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-nature-green-500/20 rounded-full flex items-center justify-center nature-glow">
                <MapPin className="text-nature-green-400" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-tech">Location</h3>
                <p className="text-gray-300">
                  Sintra, Portugal
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h3 className="text-lg font-semibold text-white mb-4 text-tech">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/diogopinto1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
              >
                <Github className="text-nature-green-400" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/diogo-pinto-36a460210/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
              >
                <Linkedin className="text-nature-green-400" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="nature-card rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-tech">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-nature-green-500/40 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-nature-green-500/40 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-nature-green-500/40 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-nature-green-500/40 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 resize-none"
                placeholder="Tell me about your project or question..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-nature-green-500 text-white py-3 px-6 rounded-lg hover:bg-nature-green-600 transition-colors font-medium flex items-center justify-center nature-glow hover:scale-105"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
