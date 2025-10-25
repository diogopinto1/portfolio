import React from 'react'
import { Download, Mail, Linkedin, Github, Calendar, MapPin, Building, Award, BookOpen, Code, Database, Brain } from 'lucide-react'

const CV = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "AgriTech Solutions",
      location: "Lisbon, Portugal",
      period: "2022 - Present",
      description: "Developed machine learning models for crop yield prediction and precision agriculture using satellite imagery and IoT sensor data.",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Full-Stack Developer",
      company: "GreenTech Startup",
      location: "Remote",
      period: "2021 - 2022",
      description: "Built scalable web applications for environmental monitoring and sustainable agriculture management systems.",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Data Analyst",
      company: "Environmental Research Institute",
      location: "Porto, Portugal",
      period: "2020 - 2021",
      description: "Analyzed large environmental datasets to provide insights on climate change impacts and sustainable farming practices.",
      icon: <Brain className="w-5 h-5" />
    }
  ]

  const education = [
    {
      degree: "MSc in Agricultural Engineering",
      institution: "University of Lisbon",
      location: "Lisbon, Portugal",
      year: "2019 - 2021",
      description: "Specialization in Precision Agriculture and Remote Sensing"
    },
    {
      degree: "BSc in Environmental Engineering",
      institution: "University of Porto",
      location: "Porto, Portugal",
      year: "2015 - 2019",
      description: "Focus on Sustainable Development and Environmental Science"
    }
  ]

  const publications = [
    {
      title: "Machine Learning Applications in Precision Agriculture",
      journal: "Agricultural Technology Review",
      year: "2023",
      authors: "Pinto, D. et al.",
      type: "Journal Article"
    },
    {
      title: "Remote Sensing for Crop Monitoring",
      journal: "IEEE Geoscience and Remote Sensing",
      year: "2022",
      authors: "Pinto, D. et al.",
      type: "Conference Paper"
    },
    {
      title: "Sustainable Farming with AI",
      journal: "Nature Sustainability",
      year: "2021",
      authors: "Pinto, D. et al.",
      type: "Journal Article"
    }
  ]

  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "R", "SQL", "TypeScript"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"] },
    { category: "AgriTech", items: ["Remote Sensing", "GIS", "Precision Agriculture", "IoT", "Satellite Data"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Jupyter", "MLflow"] }
  ]

  const stats = [
    { number: "8", label: "Publications" },
    { number: "4+", label: "Years Experience" },
    { number: "20+", label: "AI Projects" }
  ]

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
            Developing AI-driven agricultural solutions through machine learning and remote sensing 
            for sustainable farming and environmental conservation.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-nature-green-400 mb-2 text-tech">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-nature-green-500 text-white font-semibold rounded-lg hover:bg-nature-green-600 transition-all duration-300 nature-glow hover:scale-105">
              <Download className="mr-2" size={20} />
              Download CV
            </button>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-nature-green-500 text-nature-green-400 rounded-lg hover:bg-nature-green-500/10 hover:border-nature-green-400 transition-all duration-300 font-medium"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="mailto:diogo.praia10@gmail.com"
              className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
            >
              <Mail className="w-5 h-5 text-nature-green-400" />
            </a>
            <a
              href="https://linkedin.com/in/diogopinto"
              className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
            >
              <Linkedin className="w-5 h-5 text-nature-green-400" />
            </a>
            <a
              href="https://github.com/diogopinto1"
              className="w-12 h-12 bg-nature-green-500/20 border border-nature-green-500/40 rounded-full flex items-center justify-center hover:bg-nature-green-500/30 hover:border-nature-green-400 transition-colors nature-glow"
            >
              <Github className="w-5 h-5 text-nature-green-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-200 mb-4">02</div>
            <h2 className="text-4xl font-bold text-white mb-4 text-tech">Experience</h2>
            <p className="text-lg text-gray-300">
              Data Science with a focus on solutions in machine learning, computer vision related to agricultural fields.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="nature-card rounded-xl p-6 hover:nature-glow transition-all duration-300 relative">
                <div className="flex items-start justify-between">
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
                    <p className="text-gray-300 mt-3">{exp.description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 bg-nature-green-500/20 rounded-full flex items-center justify-center text-nature-green-400 nature-glow">
                      {exp.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-200 mb-4">03</div>
            <h2 className="text-4xl font-bold text-white mb-4 text-tech">Education</h2>
            <p className="text-lg text-gray-300">
              Academic background in Agricultural and Environmental Engineering.
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
      <section className="py-16 px-4">
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
                <h3 className="text-lg font-bold text-white mb-2 text-tech">{pub.title}</h3>
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
      <section className="py-16 px-4">
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
    </div>
  )
}

export default CV
