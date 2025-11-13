import React, { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'SummerBerry Productivity Model',
      description: 'Harvest forecasting model using Random Forest ML developed during a hackathon with SummerBerry, a Portuguese berry company. Predicts harvest week for productivity optimization.',
      image: '/portfolio/sb.png',
      technologies: ['Python', 'Random Forest', 'Machine Learning', 'React', 'Web Dashboard'],
      category: 'ai-ml',
      liveUrl: 'https://diogopinto1.com/demo/summerberry/',
      githubUrl: 'https://github.com/diogopinto1',
      featured: true
    },
    {
      id: 2,
      title: 'Restaurante Adraga Website',
      description: 'Dynamic restaurant website with online reservation system built with HTML, CSS, and JavaScript. Modern, responsive design with interactive features.',
      image: '/portfolio/adr.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Dynamic Content', 'Responsive Design', 'Cloud Service'],
      category: 'web-development',
      liveUrl: 'https://restaurantedaadraga.com/',
      githubUrl: 'https://github.com/diogopinto1',
      featured: true
    },
    {
      id: 3,
      title: 'Restaurante Neptuno Website',
      description: 'Modern restaurant website for a seafood restaurant in Praia das Maçãs, Sintra. Built with HTML, CSS, and JavaScript. Showcases menu, location, and restaurant history.',
      image: '/portfolio/nep.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Modern UI', 'Cloud Service'],
      category: 'web-development',
      liveUrl: 'https://restauranteneptuno.pt/',
      githubUrl: 'https://github.com/diogopinto1',
      featured: true
    },
    {
      id: 4,
      title: 'Agricultural Land Use Analysis',
      description: 'Analysis and visualization of Portugal\'s agro-environmental data examining crop area ratios, labor force relationships, and regional agricultural development over time.',
      image: '/portfolio/fil.png',
      technologies: ['Python', 'SQL', 'Data Visualization', 'EDA', 'Geospatial Analysis'],
      category: 'data-science',
      liveUrl: 'https://drive.google.com/file/d/1o-PyzwwfFiiMOHsEYdL-Vc0nOqTXlnxb/view',
      githubUrl: 'https://github.com/diogopinto1',
      featured: false
    },
    {
      id: 5,
      title: 'Avocado Price & Trade Analysis',
      description: 'Power BI dashboard analyzing avocado prices, imports and exports between Portugal and Spain. Data collected via web scraping, processed in Power Query, and visualized dynamically.',
      image: '/portfolio/pb.png',
      technologies: ['Power BI', 'Web Scraping', 'Power Query', 'Data Visualization', 'Excel'],
      category: 'data-science',
      liveUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNDA1YWE0OGItMzQyMi00ZDcyLThhMjUtODkwNDE4MWIzOTBiIiwidCI6IjBiZmE4NTAwLWIxZjItNDU2Ni1iYWYxLTZmNTkzNzA4OTNlNyIsImMiOjh9',
      githubUrl: 'https://github.com/diogopinto1',
      featured: false
    },
    {
      id: 6,
      title: 'Irrigation Decision Support Tool',
      description: 'Decision support tool for irrigation needs using weather and soil data from open-meteo.com API. Calculates soil tension (pF) and provides actionable irrigation recommendations.',
      image: '/portfolio/tf.png',
      technologies: ['Python', 'API Integration', 'Weather Data', 'Soil Analysis', 'Decision Support'],
      category: 'data-science',
      liveUrl: 'https://drive.google.com/file/d/1ZpPdTHfuRJ3947CW3TAcMSUubQ3y6b68/view',
      githubUrl: 'https://github.com/diogopinto1',
      featured: false
    },
    {
      id: 7,
      title: 'Lourenço Pimenta FPV Website',
      description: 'Custom photographer website for Lourenço Pimenta, showcasing FPV drone work with immersive galleries, testimonials, and booking funnels.',
      image: '/portfolio/lou.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Cloud Service'],
      category: 'web-development',
      liveUrl: 'https://demo.diogopinto1.com/pimentalourenco/',
      githubUrl: 'https://github.com/diogopinto1',
      featured: false
    },
    {
      id: 8,
      title: "Master's Thesis – Machine Learning Application in Irrigation Systems",
      description: 'CRISP-DM methodology to predict missing values in field sensor time series. End-to-end ML pipeline using XGBoost and AWS-based data processing, improving irrigation monitoring reliability.',
      image: '/portfolio/tese.png',
      technologies: ['Python', 'XGBoost', 'CRISP-DM', 'Time Series', 'AWS', 'ML Pipeline'],
      category: 'ai-ml',
      liveUrl: 'https://www.canva.com/design/DAGV0FuS5pI/qjRDFSiuOrmZ5c62GzA96w/edit',
      githubUrl: 'https://github.com/diogopinto1',
      featured: true
    },
    {
      id: 9,
      title: 'Car Image Classifier (Multi-class) – Hugging Face',
      description: 'Multi-class car image classifier trained with extensive data augmentation (flips, crops, transforms) using fastai/PyTorch. Gradio UI is easily adaptable to other classes and datasets.',
      image: '/portfolio/carro.png',
      technologies: ['Python', 'fastai', 'PyTorch', 'Gradio', 'scikit-image', 'Git LFS'],
      category: 'ai-ml',
      liveUrl: 'https://huggingface.co/spaces/DiogoPinto/fastai_cartypes',
      githubUrl: 'https://huggingface.co/spaces/DiogoPinto/fastai_cartypes/tree/main',
      featured: false
    },
    {
      id: 10,
      title: 'Clepsydra & Path4Med Data Science Pipeline',
      description: 'End-to-end data science pipeline supporting Clepsydra and Path4Med projects, from data collection to end-use delivery. Combines satellite imagery well detection with predictive groundwater depth modeling (ARIMA & LSTM) and culminates in a scientific publication.',
      image: '/portfolio/proj.png',
      technologies: ['Remote Sensing', 'QGIS', 'Python', 'ARIMA', 'LSTM', 'Next.js', 'React'],
      category: 'ai-ml',
      liveUrl: 'https://clepsydraisa.github.io/clepsydra_isa/',
      githubUrl: 'https://github.com/clepsydraisa/clepsydra_isa',
      featured: true
    },
    {
      id: 11,
      title: 'Groundwater EDA & Modeling Dashboard',
      description: 'Interactive exploratory data analysis dashboard centralizing datasets, spatial well identification, correlation analytics, and time-series ML modeling to forecast groundwater depth.',
      image: '/portfolio/eda.png',
      technologies: ['Python', 'EDA Dashboard', 'Geospatial Analysis', 'Time Series ML', 'ARIMA', 'LSTM'],
      category: 'ai-ml',
      liveUrl: 'https://clepsydraisa.github.io/eda/#/',
      githubUrl: 'https://github.com/diogopinto1',
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

      {/* All Projects Grid */}
      <section>
        {filter !== 'all' && (
          <h2 className="text-2xl font-bold text-white mb-8 text-tech">
            {categories.find(cat => cat.id === filter)?.name}
          </h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="nature-card rounded-xl overflow-hidden hover:nature-glow transition-all duration-300 flex flex-col">
              <div 
                className="h-40 bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url(${project.image})`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-2 text-tech">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-nature-green-500/20 text-nature-green-400 border border-nature-green-500/40 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
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
