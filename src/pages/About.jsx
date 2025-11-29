import React, { useState, useEffect } from 'react'
import { Code, Database, Brain, Globe, Award, Users, Leaf, Zap, Search, Sparkles } from 'lucide-react'

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev)
    }, 20000) // 20 segundos

    return () => clearInterval(interval)
  }, [])

  // Carousel auto-play with infinite loop
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = isMobile ? 5 : 5 // Same logic for both
        const nextIndex = prevIndex + 1
        // When reaching the end of the first set (index 5 = Creativity), 
        // jump to start of second duplicate set (index 5) seamlessly
        if (nextIndex > maxIndex) {
          // Reset to 5 (start of second duplicate set) after transition
          setTimeout(() => {
            setCurrentIndex(5)
          }, 500) // After transition completes
          return 5
        }
        return nextIndex
      })
    }, 4000) // Change card every 4 seconds

    return () => clearInterval(carouselInterval)
  }, [isMobile])

  const values = [
    {
      title: 'Innovation',
      icon: <Code className="text-green-400" size={32} />,
      description: 'Continuously seeking cutting-edge approaches and novel techniques, powered by AI, to address intricate problems in diverse fields.'
    },
    {
      title: 'Sustainability',
      icon: <Leaf className="text-green-400" size={32} />,
      description: 'Dedicated to leveraging data-driven approaches that deliver meaningful and responsible outcomes for businesses and organizations.'
    },
    {
      title: 'Excellence',
      icon: <Zap className="text-green-400" size={32} />,
      description: 'Striving for superior results and measurable value in every project, regardless of the application area.'
    },
    {
      title: 'Curiosity',
      icon: <Search className="text-green-400" size={32} />,
      description: 'Driven by an insatiable desire to explore, learn, and discover new possibilities in technology and data science.'
    },
    {
      title: 'Creativity',
      icon: <Sparkles className="text-green-400" size={32} />,
      description: 'Transforming complex problems into elegant solutions through innovative thinking and creative problem-solving approaches.'
    }
  ]

  // Duplicate cards for infinite loop effect
  const infiniteValues = [...values, ...values, ...values]

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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-tech text-center">
          About Me
        </h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Growing up by the ocean and later serving in the navy, I developed a strong connection with nature, 
                discipline, and problem-solving under pressure. After my time in the navy, I studied <span className="text-white font-semibold">agronomic engineering</span> 
                and <span className="text-white font-semibold">environmental sciences</span>. As I got closer to technology, I became fascinated by how 
                <span className="text-white font-semibold"> process automation</span> and <span className="text-white font-semibold">data-driven systems</span> can transform workflows 
                and turn data into meaningful insights that strongly influence final decisions.
              </p>
              <p className="text-xl text-nature-green-400 font-bold mb-6 leading-relaxed">
                Curiosity → Data → AI → Impact
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, I'm a <span className="text-white font-semibold">Data Scientist</span> who turns that curiosity into impact. 
                I combine my background in <span className="text-white font-semibold">green sciences</span> with expertise in 
                <span className="text-white font-semibold"> machine learning</span>, <span className="text-white font-semibold">time series analysis</span>, 
                and <span className="text-white font-semibold">end-to-end ML pipelines</span>. At <span className="text-white font-semibold">INESC TEC</span>, 
                within a <span className="text-white font-semibold">Horizon Europe</span> project, I build predictive models for groundwater forecasting 
                and water pollution mitigation—transforming complex environmental data into actionable insights for real-world decision making.
              </p>
            </div>
            
            {/* Profile Image - Desktop Only */}
            <div className="hidden lg:block flex-shrink-0 mt-8 lg:mt-8 relative lg:sticky lg:top-24">
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

      {/* Values Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12 text-tech">
          What Drives Me
        </h2>
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 100 / 3)}%)` }}
            >
              {infiniteValues.map((value, index) => (
                <div key={index} className="min-w-full md:min-w-[33.333%] px-2 md:px-4">
                  <div className="text-center p-8 rounded-xl bg-tech-card green-border hover:green-border-glow transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 tech-glow">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 text-tech">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === (currentIndex % 5) ? 'bg-green-400 w-8' : 'bg-green-400/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
