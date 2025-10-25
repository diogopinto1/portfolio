import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Database, Brain, Download, Eye } from 'lucide-react'

const Home = () => {
  const skills = [
    'Machine Learning',
    'Time Series',
    'MLOps',
    'GIS/Remote Sensing',
    'AgriTech',
    'Sustainability'
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl text-tech text-green-400 mb-4 font-medium">
              DIOGO PINTO
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Data Scientist with{' '}
              <span className="text-gradient-green">
                Green Engineering Roots
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              I connect agronomy and machine learning to create sustainable solutions. 
              Specializing in time series analysis, remote sensing, and MLOps for agricultural innovation.
            </p>
            
            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30 hover:bg-green-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
              >
                <Eye className="mr-2" size={20} />
                View Portfolio
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-colors font-medium"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12 text-tech">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-tech-card green-border hover:green-border-glow transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 tech-glow">
              <Database className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-tech">
              Data Science
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Machine learning, statistical analysis, and data visualization using Python, R, and modern tools for agricultural and environmental data.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-tech-card green-border hover:green-border-glow transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 tech-glow">
              <Code className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-tech">
              Web Development
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full-stack development with React, Node.js, and modern frameworks for scalable agricultural tech applications.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-tech-card green-border hover:green-border-glow transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 tech-glow">
              <Brain className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-tech">
              AI & ML
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Deep learning, computer vision, and AI model deployment for precision agriculture and environmental monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl border border-green-500/20">
        <h2 className="text-4xl font-bold mb-6 text-white text-tech">Let's Work Together</h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about your agricultural tech challenges.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
        >
          Get In Touch
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </div>
  )
}

export default Home
