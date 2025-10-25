import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Database, Brain, Download } from 'lucide-react'

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Diogo Pinto
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Data Scientist & Full-Stack Developer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Passionate about turning data into insights and building innovative solutions. 
            I specialize in machine learning, data analysis, and modern web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="/portfolio/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Data Science
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Machine learning, statistical analysis, and data visualization using Python, R, and modern tools.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Web Development
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Full-stack development with React, Node.js, and modern frameworks for scalable applications.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              AI & ML
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Deep learning, natural language processing, and AI model deployment in production environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-xl mb-8 opacity-90">
          Have a project in mind? I'd love to hear about it.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-colors font-medium"
        >
          Get In Touch
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </div>
  )
}

export default Home
