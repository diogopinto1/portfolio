import React, { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Predictive Analytics Dashboard',
      description: 'A comprehensive dashboard for real-time business analytics with machine learning predictions and interactive visualizations.',
      image: '/portfolio/emoji3.png',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      category: 'data-science',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/diogopinto1',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '/portfolio/emoji3.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'web-development',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/diogopinto1',
      featured: true
    },
    {
      id: 3,
      title: 'NLP Sentiment Analysis',
      description: 'Natural language processing model for sentiment analysis of social media data with real-time processing capabilities.',
      image: '/portfolio/emoji3.png',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'Flask', 'Docker'],
      category: 'data-science',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/diogopinto1',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration, and project tracking.',
      image: '/portfolio/emoji3.png',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'MongoDB'],
      category: 'web-development',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/diogopinto1',
      featured: false
    },
    {
      id: 5,
      title: 'Computer Vision Model',
      description: 'Deep learning model for object detection and classification with custom dataset training and deployment.',
      image: '/portfolio/emoji3.png',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      category: 'ai-ml',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/diogopinto1',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with modern web technologies and responsive design.',
      image: '/portfolio/emoji3.png',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      category: 'web-development',
      liveUrl: 'https://diogopinto1.github.io/portfolio',
      githubUrl: 'https://github.com/diogopinto1/portfolio',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'ai-ml', name: 'AI & ML' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-tech">
          My Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A collection of projects that showcase my skills in data science, web development, 
          and machine learning. Each project represents a unique challenge and learning opportunity.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              filter === category.id
                ? 'bg-nature-green-500 text-white nature-glow'
                : 'bg-nature-green-500/20 text-nature-green-400 border border-nature-green-500/40 hover:bg-nature-green-500/30 hover:border-nature-green-400'
            }`}
          >
            {category.name}
          </button>
        ))}
      </section>

      {/* Featured Projects */}
      {filter === 'all' && (
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 text-tech">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="nature-card rounded-xl overflow-hidden hover:nature-glow transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-nature-green-500 to-nature-green-600 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 text-tech">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-nature-green-500/20 text-nature-green-400 border border-nature-green-500/40 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-nature-green-400 hover:text-nature-green-300 transition-colors"
                    >
                      <Eye size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section>
        {filter !== 'all' && (
          <h2 className="text-2xl font-bold text-white mb-8 text-tech">
            {categories.find(cat => cat.id === filter)?.name}
          </h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="nature-card rounded-xl overflow-hidden hover:nature-glow transition-all duration-300">
              <div className="h-40 bg-gradient-to-r from-nature-green-500 to-nature-green-600 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 text-tech">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-nature-green-500/20 text-nature-green-400 border border-nature-green-500/40 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-nature-green-400 hover:text-nature-green-300 transition-colors text-sm"
                  >
                    <Eye size={14} className="mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
