import React, { useState } from 'react'
import { Code, Database, Brain, Globe, Award, Users, Leaf, Zap } from 'lucide-react'

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleImageClick = () => {
    setIsFlipped(!isFlipped)
  }
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'R', 'SQL', 'TypeScript', 'Java', 'C', 'C++'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'Seaborn', 'Plotly'] },
    { category: 'AgriTech & GIS', items: ['Remote Sensing', 'GIS (ArcGIS, QGIS)', 'Precision Agriculture', 'IoT Sensors', 'SIG (NDVI/SAVI)'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Azure', 'PostgreSQL', 'MySQL', 'Power BI', 'React'] }
  ]

  const experiences = [
    {
      title: 'Data Scientist - Research Grant',
      company: 'Horizon Europe - INESC TEC',
      period: '01/2025 – Present',
      description: 'Horizon-AI Project: Groundwater level forecasting and water pollution mitigation in the Mediterranean. Creating data mining pipelines and predictive time series modeling with ML models (Random Forest, LSTM, ARIMAX).'
    },
    {
      title: 'Data Scientist - Master\'s Thesis',
      company: 'HIDROSOPH',
      period: '12/2023 – 11/2024',
      description: 'Development of a Machine Learning pipeline (CRISP-DM methodology) for correcting inconsistencies in IoT sensor data, ensuring data continuity and quality for internal company algorithms.'
    },
    {
      title: 'Data Scientist/Data Engineer - Hackathon Project',
      company: 'The Summer Berry',
      period: '10/2023 – 12/2023',
      description: 'Predictive model (Forecasting) for berry production productivity. Development of ML model (Random Forest) with temporal validation and interactive dashboard for prediction monitoring.'
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
                I'm a Data Scientist with a unique background in agricultural engineering, combining 
                experience in machine learning with deep domain knowledge in sustainable agriculture and 
                environmental science. My journey follows a simple philosophy: <span className="text-nature-green-400 font-semibold">Curiosity → Data → AI → Impact</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working at INESC TEC on the Horizon Europe project, developing predictive models 
                for groundwater level forecasting and water pollution mitigation in the Mediterranean. 
                I specialize in time series analysis, IoT sensor data processing, and building end-to-end 
                ML pipelines with a focus on reproducibility and continuous monitoring.
              </p>
            </div>
            
            {/* Profile Image - Desktop Only */}
            <div className="hidden lg:block flex-shrink-0 mt-8 lg:mt-0 relative">
              <div 
                className="relative w-80 h-80 cursor-pointer"
                style={{
                  perspective: '1000px'
                }}
                onClick={handleImageClick}
              >
                <div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front side - 4.png */}
                  <div
                    className="absolute w-full h-full"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)'
                    }}
                  >
                    <img
                      src="/portfolio/4.png"
                      alt="Diogo Pinto - Data Scientist"
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(74, 222, 128, 0.2)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.15))',
                        transform: 'translateY(-2px)',
                        borderRadius: '0'
                      }}
                    />
                  </div>
                  
                  {/* Back side - emoji3.png */}
                  <div
                    className="absolute w-full h-full"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <img
                      src="/portfolio/emoji3.png"
                      alt="Diogo Pinto - Data Scientist"
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(74, 222, 128, 0.2)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.15))',
                        transform: 'translateY(-2px)',
                        borderRadius: '0'
                      }}
                    />
                  </div>
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
