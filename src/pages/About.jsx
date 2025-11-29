import React, { useState, useEffect } from 'react'
import { Code, Database, Brain, Globe, Award, Users, Leaf, Zap } from 'lucide-react'

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev)
    }, 20000) // 20 segundos

    return () => clearInterval(interval)
  }, [])
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'R', 'SQL', 'TypeScript', 'Java', 'C', 'C++', 'HTML5', 'CSS3'] },
    { category: 'Data Science & ML', items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Neural Networks', 'Random Forest', 'XGBoost', 'ARIMA', 'LSTM', 'LangChain'] },
    { category: 'Visualization & Analytics', items: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI', 'Power Query', 'DAX', 'Jupyter'] },
    { category: 'Fullstack & Web', items: ['React', 'Node.js', 'FastAPI', 'Flask', 'REST APIs', 'Bootstrap'] },
    { category: 'DevOps & Infrastructure', items: ['Git', 'Docker', 'MLOps', 'DevOps', 'CI/CD', 'AWS', 'Azure'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'Microsoft SQL'] },
    { category: 'Automation & Tools', items: ['n8n', 'Power Automate', 'Jupyter'] },
    { category: 'AgriTech & GIS', items: ['Remote Sensing', 'GIS (ArcGIS, QGIS)', 'Precision Agriculture', 'IoT Sensors', 'SIG (NDVI/SAVI)'] }
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
    },
    {
      title: 'Data Scientist - Extracurricular Internship',
      company: 'Águas do Tejo Atlântico - Grupo Águas de Portugal',
      period: '06/2023 – 08/2023',
      description: 'Aquasafe Project: Data analysis and treatment, and IDE development. Information centralization with PostgreSQL, water course monitoring with sensors, and interactive dashboard development with automated temporal aggregation.'
    },
    {
      title: 'Data Scientist - Extracurricular Internship',
      company: 'CONSULAI',
      period: '06/2022 – 08/2022',
      description: 'R&D Department: Consulting/Digitalization in Agricultural, Food, Forestry, Sea and Rural Development sectors. Research and web scraping from official sources, data centralization and modeling, API development, and Power BI dashboard creation for market analysis.'
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
                I'm a <span className="text-white font-semibold">Data Scientist</span> with a unique background in <span className="text-white font-semibold">agricultural engineering</span>, combining 
                experience in <span className="text-white font-semibold">machine learning</span> with deep domain knowledge in sustainable agriculture and 
                environmental science.
              </p>
              <p className="text-xl text-nature-green-400 font-bold mb-8 leading-relaxed">
                Curiosity → Data → AI → Impact
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working at <span className="text-white font-semibold">INESC TEC</span> on the <span className="text-white font-semibold">Horizon Europe</span> project, developing <span className="text-white font-semibold">predictive models</span> 
                 for groundwater level forecasting and water pollution mitigation in the Mediterranean. 
                I specialize in <span className="text-white font-semibold">time series analysis</span>, <span className="text-white font-semibold">IoT sensor data processing</span>, and building <span className="text-white font-semibold">end-to-end 
                ML pipelines</span> with a focus on reproducibility and continuous monitoring.
              </p>
            </div>
            
            {/* Profile Image - Desktop Only */}
            <div className="hidden lg:block flex-shrink-0 mt-8 lg:mt-0 relative">
              <div 
                className="relative w-80 h-80"
                style={{
                  perspective: '1000px'
                }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Continuously seeking cutting-edge approaches and novel techniques, powered by AI, to address intricate problems in diverse fields.
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
              Dedicated to leveraging data-driven approaches that deliver meaningful and responsible outcomes for businesses and organizations.
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
              Striving for superior results and measurable value in every project, regardless of the application area.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
