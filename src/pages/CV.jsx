import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Download, Mail, Linkedin, Github, Calendar, MapPin, Building, Award, BookOpen, Code, Database, Brain, ChevronDown, ChevronUp, Anchor, ExternalLink, ArrowUp } from 'lucide-react'

const CV = () => {
  const [expandedCards, setExpandedCards] = useState({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [countedStats, setCountedStats] = useState({ articles: 0, experience: 0, projects: 0 })

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    const navSection = document.getElementById('nav-filter')
    if (navSection) {
      // Get the position of the navigation section in the document
      const navPosition = navSection.offsetTop
      // Scroll to the navigation section position minus a small offset to ensure it's at the top
      window.scrollTo({ top: navPosition - 20, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience')
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect()
        // Show button when Experience section has passed the top of viewport
        setShowScrollTop(rect.top < -100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const experiences = [
    {
      title: "Data Scientist - Research Grant",
      company: "Horizon Europe - INESC TEC",
      location: "Lisbon, Portugal",
      period: "01/2025 – Present",
      description: "Horizon-AI Project: Groundwater level forecasting and water pollution mitigation in the Mediterranean.",
      details: [
        "Created data mining pipeline and predictive time series modeling",
        "Structured relational database and integrated climate and hydrological data",
        "Applied statistical methods (Spearman and Pearson, with time lags) to evaluate correlations",
        "Developed Machine Learning models (Random Forest, LSTM, ARIMAX) for water level depth forecasting",
        "Integrated and automated pipeline with focus on reproducibility and continuous data monitoring in final dashboard"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow (Keras)", "PostgreSQL", "Git", "Azure", "Docker", "React"],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Data Scientist - Master's Thesis",
      company: "HIDROSOPH",
      location: "Lisbon, Portugal",
      period: "01/2024 – 11/2024",
      description: "Master's Thesis: Intelligent sensory data gap filling - Application of Machine Learning in Irrigation Systems.",
      details: [
        "Developed a Machine Learning pipeline, CRISP-DM methodology, for correcting inconsistencies in IoT sensor data",
        "Ensured data continuity and quality, ensuring readiness for future use in internal company algorithms",
        "Selected and implemented cloud computing services for model ingestion, processing and serving"
      ],
      technologies: ["IoT Sensors", "GIS (NDVI/SAVI)", "AWS", "s3", "Pandas", "NumPy", "Scikit-learn", "TensorFlow (Keras)", "MySQL", "Git", "Docker", "REST APIs"],
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Data Scientist/Data Engineer - Hackathon Project",
      company: "The Summer Berry",
      location: "Odemira, Portugal",
      period: "10/2023 – 12/2023",
      description: "Hackathon Project: Predictive model (Forecasting) for berry production productivity.",
      details: [
        "Data Science workflow (ML-driven Automation) in a team of 5 people for raspberry productivity forecasting",
        "Field data collection and preparation (standardization, cleaning and extraction of agronomic features)",
        "Local database development with relational schema for harvest, climate and phenology history",
        "Created Machine Learning model for productivity forecasting (Random Forest), with temporal validation and hyperparameter tuning",
        "Implemented interactive dashboard (final application) for prediction monitoring and decision support"
      ],
      technologies: ["MariaDB (SQL)", "DBeaver", "OpenRefine", "Python", "Pandas", "NumPy", "Scikit-learn (RandomForest)", "Plotly", "Matplotlib"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Regulatory Assistant - Extracurricular Internship",
      company: "Syngenta",
      location: "Lisbon, Portugal",
      period: "08/2023 – 09/2023",
      description: "Regulation and Sustainability - Consulting in the Regulatory Department with focus on compliance and sustainable practices.",
      details: [
        "Information management and storage (organization, normalization and version control of technical and legal documentation)",
        "Collaboration on Operation Pollinator project, supporting implementation, monitoring and reporting of biodiversity and sustainability initiatives"
      ],
      technologies: ["SharePoint", "Google Drive", "Office 365", "Excel"],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Data Scientist - Extracurricular Internship",
      company: "Águas do Tejo Atlântico - Grupo Águas de Portugal",
      location: "Lisbon, Portugal",
      period: "06/2023 – 08/2023",
      description: "Aquasafe Project: Data analysis and treatment, and IDE development.",
      details: [
        "Information centralization (PostgreSQL relational database) with operational and historical schema",
        "Water course monitoring based on different sensors (level, velocity, flow, volume) including data validation and quality control",
        "Updated and developed interactive dashboard in Aquasafe, with weekly and monthly aggregations by location",
        "Automated temporal ingestion and aggregation, documentation and versioning"
      ],
      technologies: ["Microsoft SQL", "Sensors/Telemetry", "Python", "Pandas", "Docker", "Excel", "PostgreSQL"],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Data Scientist - Extracurricular Internship",
      company: "CONSULAI",
      location: "Lisbon, Portugal",
      period: "06/2022 – 08/2022",
      description: "R&D Department: Consulting/Digitalization in Agricultural, Food, Forestry, Sea and Rural Development sectors.",
      details: [
        "Research and web scraping from official sources (INE, GPP, EUROSTAT) with quality control and metadata cataloging",
        "Data centralization and modeling in Excel, with Power Query and DAX (Power Pivot) for analytical model creation",
        "Developed an API (INE-oriented script) to automate data extraction and updating",
        "Market analysis of avocado prices in Portugal and Spain and created Power BI dashboard for monitoring and reporting"
      ],
      technologies: ["Python", "BeautifulSoup", "Scrapy", "REST APIs", "Excel", "Power Query", "Power Pivot", "DAX", "Office365", "SharePoint", "Power BI", "Git", "FastAPI", "Flask"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Officer Navy",
      company: "Marinha Portuguesa",
      location: "Vale de Zebro, Portugal",
      period: "04/2017 – 11/2017",
      description: "Contract service as an Officer in the Marine Corps (Fuzileiro class).",
      details: [
        "Military service as contracted Officer",
        "Marine Corps (Fuzileiro) specialization"
      ],
      technologies: [],
      icon: <Anchor className="w-5 h-5" />
    }
  ]

  // Extract year and month from period string (e.g., "01/2025 – Present" or "06/2022 – 08/2022")
  const extractDate = (period) => {
    const match = period.match(/(\d{2})\/(\d{4})/)
    if (match) {
      const month = parseInt(match[1])
      const year = parseInt(match[2])
      return year * 12 + month // Convert to months for easier sorting
    }
    return 0
  }

  // Extract year from period string for display
  const extractYear = (period) => {
    const match = period.match(/(\d{2})\/(\d{4})/)
    if (match) {
      return match[2] // Return the year (YYYY)
    }
    return null
  }

  // Sort experiences by date (oldest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = extractDate(a.period)
    const dateB = extractDate(b.period)
    return dateA - dateB // Ascending order (oldest first)
  })

  const education = [
    {
      degree: "Master's in Data Science in Agriculture, Food, Forest and Environment",
      institution: "ULisboa - Instituto Superior de Agronomia",
      location: "Lisbon, Portugal",
      year: "01/09/2022 – 30/11/2024",
      description: "Final Grade: 18 | EQF Level: Level 7 | Thesis: Intelligent Sensory Data Gap Filling: Application of Machine Learning in Irrigation Systems"
    },
    {
      degree: "Bachelor's in Agronomic Engineering",
      institution: "ULisboa - Instituto Superior de Agronomia",
      location: "Lisbon, Portugal",
      year: "01/09/2018 – 09/06/2022",
      description: "Final Grade: 13 | EQF Level: Level 6"
    }
  ]

  const publications = [
    {
      title: "Development of a Data Pipeline for Groundwater Level Modeling in Irrigation: Application to the Tejo Vulnerable Zone",
      journal: "Path4Med Project - Horizon Europe",
      year: "2025",
      authors: "Diogo Pinto, Manuel Campagnolo, João Rolim, Maria do Rosário Camedra",
      type: "Poster",
      pdf: "/portfolio/poster_DP.pdf"
    },
    {
      title: "Intelligent Sensory Data Gap Filling: Application of Machine Learning in Irrigation Systems",
      journal: "Master's Thesis - ULisboa ISA",
      year: "2024",
      authors: "Diogo Eugénio Pinto",
      type: "Master's Thesis"
    }
  ]

  const certificates = [
    {
      title: "Advanced Learning Algorithms",
      issuer: "Stanford University",
      period: "12/2025",
      description: "Build and train neural networks with TensorFlow for multi-class classification. Apply best practices for machine learning development and build decision trees and tree ensemble methods, including random forests and boosted trees.",
      link: "https://coursera.org/share/2c21e40a6bfee7c12f186beb37dfbec7"
    },
    {
      title: "Professional Ethics and Deontology Course (107th edition)",
      issuer: "Ordem dos Engenheiros - Região Sul",
      period: "11/2025",
      description: "Professional ethics and deontology course for engineers. Completed with Distinction (10 hours total duration).",
      link: "",
      pdf: "/portfolio/Certificado_CED_107_Diogo Pinto.pdf"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University",
      period: "01/11/2025 – 07/11/2025",
      description: "Building machine learning models in Python using NumPy and scikit-learn. Supervised learning models for prediction and binary classification, including linear and logistic regression.",
      link: "https://coursera.org/share/b6f0dc9df1243695a0e06317641eea15"
    },
    {
      title: "Teacher Training - Data Science",
      issuer: "Faculty of Sciences, University of Lisbon",
      period: "12/02/2025 – 14/02/2025",
      description: "Introduction to data science, data analysis and manipulation, machine learning and data mining, and interdisciplinary applications."
    },
    {
      title: "Teacher Training - Control, Intelligent Systems and Robotics",
      issuer: "Instituto Superior Técnico - idMEC",
      period: "12/02/2025 – 14/02/2025",
      description: "Control systems, intelligent systems (Fuzzy Systems, Neural Networks, Learning), and robotics (Kinematics, Dynamics, Machine Intelligence)."
    },
    {
      title: "Joining Data in SQL",
      issuer: "DataCamp",
      period: "22/08/2023",
      description: "Working with multiple tables in SQL, using inner joins, outer joins, cross joins, and set clauses (union, intersect, except)."
    },
    {
      title: "Intermediate SQL",
      issuer: "DataCamp",
      period: "09/08/2023",
      description: "Filtering and comparing data, using aggregation functions, ordering and grouping data, and presenting data cleanly with aliasing."
    },
    {
      title: "Python Programming from Zero to Advanced",
      issuer: "Udemy",
      period: "09/02/2023 – 10/02/2023",
      description: "Python programming from basics to advanced level."
    },
    {
      title: "Complete Computer Science Course",
      issuer: "Harvard CS50",
      period: "01/2023 – 02/2023",
      description: "C, Arrays, Algorithms, Memory, Data Structures, Python, SQL, HTML, CSS, JavaScript, Cybersecurity."
    },
    {
      title: "Geoprocessing Course",
      issuer: "Udemy",
      period: "19/07/2022",
      description: "Geoprocessing and QGIS applied to precision agriculture."
    },
    {
      title: "GIS Course",
      issuer: "Instituto Superior de Agronomia",
      period: "09/2021",
      description: "Unleash QGIS with Python."
    }
  ]

  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "R", "SQL", "TypeScript", "Java", "C", "C++", "HTML5", "CSS3", "Bootstrap", "React"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Power Query", "DAX"] },
    { category: "AgriTech & GIS", items: ["Remote Sensing", "GIS (ArcGIS, QGIS)", "Precision Agriculture", "IoT Sensors", "SIG (NDVI/SAVI)"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Azure", "PostgreSQL", "MySQL", "MariaDB", "Microsoft SQL", "MLOps", "DevOps", "LangChain"] }
  ]

  const stats = [
    { number: 2, label: "Articles", key: "articles" },
    { number: 3, label: "Years Experience", key: "experience", suffix: "+" },
    { number: 12, label: "Professional Projects", key: "projects", suffix: "+" }
  ]

  // Animate counting effect - sequential from left to right
  useEffect(() => {
    const duration = 800 // 0.8 seconds (faster)
    const steps = 40
    const stepDuration = duration / steps
    const delayBetweenStats = 200 // 200ms delay between each stat

    const animateStat = (stat, delay) => {
      setTimeout(() => {
        const targetValue = stat.number
        let currentStep = 0

        const interval = setInterval(() => {
          currentStep++
          const progress = Math.min(currentStep / steps, 1)
          const currentValue = Math.floor(targetValue * progress)

          setCountedStats((prev) => ({
            ...prev,
            [stat.key]: currentValue
          }))

          if (currentStep >= steps) {
            clearInterval(interval)
            setCountedStats((prev) => ({
              ...prev,
              [stat.key]: targetValue
            }))
          }
        }, stepDuration)
      }, delay)
    }

    // Animate each stat sequentially from left to right
    stats.forEach((stat, index) => {
      animateStat(stat, index * (duration + delayBetweenStats))
    })
  }, []) // Run only once on mount

  return (
    <div className="min-h-screen" style={{ background: 'var(--dark-bg)' }}>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-tech">
            Diogo Pinto
          </h1>
          <h2 className="text-2xl md:text-3xl text-nature-green-400 mb-6 text-tech">
            Data Scientist — AI Enthusiast
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Data Scientist with a background in green sciences and engineering, focused on machine learning, 
            time series forecasting, and end-to-end ML pipeline development. I leverage data-driven approaches 
            to solve complex challenges across diverse industries, delivering intelligent solutions that create 
            measurable impact.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-nature-green-400 mb-2 text-tech">
                  {countedStats[stat.key]}{stat.suffix || ''}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio/diogopinto_cv.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-nature-green-500 text-white font-semibold rounded-lg hover:bg-nature-green-600 transition-all duration-300 nature-glow hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-nature-green-500 text-nature-green-400 rounded-lg hover:bg-nature-green-500/10 hover:border-nature-green-400 transition-all duration-300 font-medium"
            >
              Let's Connect
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="mailto:diogoeugeniopinto@gmail.com"
              className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
            >
              <Mail className="w-5 h-5 text-nature-green-400" />
            </a>
            <a
              href="https://github.com/diogopinto1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
            >
              <Github className="w-5 h-5 text-nature-green-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/diogo-pinto-36a460210/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
            >
              <Linkedin className="w-5 h-5 text-nature-green-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Filter */}
      <section id="nav-filter" className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur-sm border-b border-nature-green-500/20 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className="relative text-sm md:text-base text-gray-400 hover:text-nature-green-400 transition-colors duration-300 px-3 py-2 group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-nature-green-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, 'education')}
              className="relative text-sm md:text-base text-gray-400 hover:text-nature-green-400 transition-colors duration-300 px-3 py-2 group"
            >
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-nature-green-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#publications"
              onClick={(e) => handleNavClick(e, 'publications')}
              className="relative text-sm md:text-base text-gray-400 hover:text-nature-green-400 transition-colors duration-300 px-3 py-2 group"
            >
              Publications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-nature-green-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="relative text-sm md:text-base text-gray-400 hover:text-nature-green-400 transition-colors duration-300 px-3 py-2 group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-nature-green-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#certificates"
              onClick={(e) => handleNavClick(e, 'certificates')}
              className="relative text-sm md:text-base text-gray-400 hover:text-nature-green-400 transition-colors duration-300 px-3 py-2 group"
            >
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-nature-green-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-200 mb-4">02</div>
            <h2 className="text-4xl font-bold text-white mb-4 text-tech">Experience</h2>
            <p className="text-lg text-gray-300">
              Data Science with a focus on solutions in machine learning, computer vision related to agricultural fields.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-nature-green-500 to-nature-green-600 pointer-events-none"></div>
            
            {/* Experience Cards */}
            <div className="space-y-12">
              {sortedExperiences.map((exp, index) => {
                const year = extractYear(exp.period)
                return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row md:items-center gap-8 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-nature-green-500 rounded-full border-4 border-gray-800 z-10 nature-glow"></div>
                  
                  {/* Year Display - Absolute positioned on opposite side */}
                  {year && (
                    <div
                      className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 z-0 ${
                        index % 2 === 0 ? 'right-0' : 'left-0'
                      }`}
                      style={{ width: 'calc(50% - 2rem)' }}
                    >
                      <div className={`flex items-center h-full ${
                        index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'
                      }`}>
                        <span className="text-4xl md:text-5xl font-bold text-gray-700/30 text-tech">
                          {year}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Experience Card */}
                  <div
                    className={`w-full md:w-5/12 mx-auto md:mx-0 mt-12 md:mt-0 relative z-10 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div 
                      className="nature-card rounded-xl p-6 hover:nature-glow transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-nature-green-500/10"
                      onClick={() => toggleCard(index)}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 text-tech">{exp.title}</h3>
                          <div className="flex items-center text-nature-green-400 mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="mr-4">{exp.period}</span>
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{exp.description}</p>
                        </div>
                        <div className="ml-4 flex items-center">
                          <div className="w-10 h-10 bg-nature-green-500/20 rounded-full flex items-center justify-center text-nature-green-400 nature-glow mr-3">
                            {exp.icon}
                          </div>
                          <div className="text-nature-green-400">
                            {expandedCards[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {expandedCards[index] && (
                        <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                          {/* Key Achievements */}
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-white mb-3 text-tech">Key Achievements</h4>
                            <ul className="space-y-2">
                              {exp.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start text-gray-300 text-sm">
                                  <span className="w-2 h-2 bg-nature-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies Used */}
                          {exp.technologies && exp.technologies.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 text-tech">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-nature-green-500/20 text-nature-green-400 border border-nature-green-500/40 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-200 mb-4">03</div>
            <h2 className="text-4xl font-bold text-white mb-4 text-tech">Education</h2>
            <p className="text-lg text-gray-300">
              Academic background in Agricultural Engineering and Computer Science.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="nature-card rounded-xl p-6 hover:nature-glow transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2 text-tech">{edu.degree}</h3>
                <div className="flex items-center text-nature-green-400 mb-2">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="font-medium">{edu.institution}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{edu.year}</span>
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{edu.location}</span>
                </div>
                <p className="text-gray-300 mt-3">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-200 mb-4">04</div>
            <h2 className="text-4xl font-bold text-white mb-4 text-tech">Publications</h2>
            <p className="text-lg text-gray-300">
              Research contributions in agricultural technology and environmental science.
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="nature-card rounded-xl p-6 hover:nature-glow transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white text-tech flex-1">{pub.title}</h3>
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 flex items-center justify-center group"
                      title="View PDF"
                    >
                      <ExternalLink className="w-5 h-5 text-nature-green-400 group-hover:scale-110 transition-transform hover:text-nature-green-300" />
                    </a>
                  )}
                </div>
                <div className="flex items-center text-nature-green-400 mb-2">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="font-medium">{pub.journal}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{pub.year}</span>
                  <Award className="w-4 h-4 mr-2" />
                  <span>{pub.type}</span>
                </div>
                <p className="text-gray-300 text-sm">{pub.authors}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-200 mb-4">05</div>
            <h2 className="text-4xl font-bold text-white mb-4 text-tech">Skills & Technologies</h2>
            <p className="text-lg text-gray-300">
              Technical expertise across data science, web development, and agricultural technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="nature-card rounded-xl p-6 hover:nature-glow transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 text-tech">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-nature-green-500/20 text-nature-green-400 border border-nature-green-500/40 rounded-full text-sm font-medium hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-200 mb-4">06</div>
            <h2 className="text-4xl font-bold text-white mb-4 text-tech">Certificates</h2>
            <p className="text-lg text-gray-300">
              Professional certifications and training courses in data science, machine learning, and technology.
            </p>
          </div>

          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <div key={index} className="nature-card rounded-xl p-6 hover:nature-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-nature-green-500/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 text-tech">{cert.title}</h3>
                    <div className="flex items-center text-nature-green-400 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{cert.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                  <div className="ml-4 flex items-center gap-2">
                    {cert.pdf && (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center group"
                        title="View PDF"
                      >
                        <ExternalLink className="w-5 h-5 text-nature-green-400 group-hover:scale-110 transition-transform hover:text-nature-green-300" />
                      </a>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-nature-green-400 hover:text-nature-green-300 transition-colors"
                        title="View Certificate"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 active:bg-nature-green-500/40 transition-all duration-300 nature-glow hover:scale-110 active:scale-95 touch-manipulation"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-nature-green-400" />
        </button>
      )}
    </div>
  )
}

export default CV
