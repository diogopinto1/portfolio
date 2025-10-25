import React from 'react'
import { Code, Database, Brain, Globe, Award, Users, Leaf, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'R', 'SQL', 'TypeScript'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'] },
    { category: 'AgriTech', items: ['Remote Sensing', 'GIS', 'Precision Agriculture', 'IoT', 'Satellite Data'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Jupyter', 'MLflow'] }
  ]

  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'AgriTech Solutions',
      period: '2022 - Present',
      description: 'Developed machine learning models for crop yield prediction and precision agriculture using satellite imagery and IoT sensor data.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'GreenTech Startup',
      period: '2021 - 2022',
      description: 'Built scalable web applications for environmental monitoring and sustainable agriculture management systems.'
    },
    {
      title: 'Data Analyst',
      company: 'Environmental Research Institute',
      period: '2020 - 2021',
      description: 'Analyzed large environmental datasets to provide insights on climate change impacts and sustainable farming practices.'
    }
  ]

  return (
    <div className="space-y-16">
      {/* About Me Section */}
      <section className="py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-tech text-center">
          About Me
        </h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm a passionate Data Scientist with a unique background in agricultural engineering, 
                combining over 4 years of experience in machine learning with deep domain knowledge in 
                sustainable agriculture and environmental science. My journey began with a fascination 
                for how data can solve real-world environmental challenges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding or analyzing agricultural data, you'll find me exploring new 
                remote sensing technologies, contributing to open-source AgriTech projects, or 
                sharing knowledge about sustainable farming practices through technical writing.
              </p>
            </div>
            
            {/* Profile Image - Desktop Only */}
            <div className="hidden lg:block flex-shrink-0 mt-8 lg:mt-0 relative">
              {/* Holographic glow effect */}
              <div className="absolute inset-0 w-80 h-80 rounded-2xl opacity-60"
                style={{
                  background: `
                    radial-gradient(ellipse at center, 
                      rgba(74, 222, 128, 0.3) 0%, 
                      rgba(34, 197, 94, 0.2) 30%, 
                      rgba(16, 185, 129, 0.1) 60%, 
                      transparent 100%
                    )
                  `,
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                  zIndex: 1
                }}
              />
              
              {/* Secondary glow layer */}
              <div className="absolute inset-0 w-80 h-80 rounded-2xl opacity-40"
                style={{
                  background: `
                    radial-gradient(ellipse at center, 
                      rgba(74, 222, 128, 0.4) 0%, 
                      rgba(34, 197, 94, 0.2) 50%, 
                      transparent 80%
                    )
                  `,
                  filter: 'blur(15px)',
                  transform: 'scale(1.05)',
                  zIndex: 2
                }}
              />
              
              {/* Main image with holographic effects */}
              <div className="relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(74, 222, 128, 0.5)) drop-shadow(0 0 40px rgba(34, 197, 94, 0.3))',
                  transform: 'translateY(-5px)',
                }}
              >
                <img
                  src="/portfolio/emoji55.png"
                  alt="Diogo Pinto - Data Scientist"
                  className="w-80 h-80 object-cover rounded-2xl relative"
                  style={{
                    filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                    boxShadow: '0 0 30px rgba(74, 222, 128, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                />
                
                {/* Holographic scan lines */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(74, 222, 128, 0.1) 50%, 
                        transparent 100%
                      )
                    `,
                    animation: 'hologramScan 3s ease-in-out infinite',
                    zIndex: 1
                  }}
                />
                
                {/* Floating particles around the image */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-nature-green-400 rounded-full opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `particleFloat ${2 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                        boxShadow: '0 0 6px rgba(74, 222, 128, 0.8)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12 text-tech">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-tech-card green-border rounded-xl p-6 hover:green-border-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-tech">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12 text-tech">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-tech-card green-border rounded-xl p-6 hover:green-border-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white text-tech">
                  {exp.title}
                </h3>
                <span className="text-green-400 text-sm font-mono">
                  {exp.period}
                </span>
              </div>
              <p className="text-green-300 mb-2 font-medium">
                {exp.company}
              </p>
              <p className="text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12 text-tech">
          What Drives Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-tech-card green-border hover:green-border-glow transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 tech-glow">
              <Code className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-tech">
              Innovation
            </h3>
            <p className="text-gray-300">
              Always exploring new technologies and methodologies to solve complex agricultural and environmental challenges.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-tech-card green-border hover:green-border-glow transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 tech-glow">
              <Leaf className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-tech">
              Sustainability
            </h3>
            <p className="text-gray-300">
              Committed to using technology to create sustainable solutions for agriculture and environmental conservation.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-tech-card green-border hover:green-border-glow transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 tech-glow">
              <Zap className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-tech">
              Excellence
            </h3>
            <p className="text-gray-300">
              Delivering high-quality solutions that make a real impact in the agricultural and environmental sectors.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
