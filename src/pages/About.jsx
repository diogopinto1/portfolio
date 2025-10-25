import React from 'react'
import { Code, Database, Brain, Globe, Award, Users } from 'lucide-react'

const About = () => {
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'R', 'SQL', 'TypeScript'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'] },
    { category: 'Web Development', items: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Jupyter', 'Tableau'] }
  ]

  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Developed machine learning models for predictive analytics and business intelligence solutions.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Startup Inc',
      period: '2021 - 2022',
      description: 'Built scalable web applications using React and Node.js with focus on user experience.'
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Corp',
      period: '2020 - 2021',
      description: 'Analyzed large datasets to provide actionable insights and automated reporting processes.'
    }
  ]

  return (
    <div className="space-y-16">
      {/* About Me Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
          About Me
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I'm a passionate Data Scientist and Full-Stack Developer with over 4 years of experience 
            in transforming complex data into actionable insights and building innovative web solutions. 
            My journey began with a fascination for patterns in data and has evolved into a comprehensive 
            skill set spanning machine learning, web development, and cloud technologies.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            When I'm not coding or analyzing data, you'll find me exploring new technologies, 
            contributing to open-source projects, or sharing knowledge through technical writing and mentoring.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2 font-medium">
                {exp.company}
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
          What Drives Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Innovation
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Always exploring new technologies and methodologies to solve complex problems.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Collaboration
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Believing in the power of teamwork and knowledge sharing to achieve great results.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Excellence
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Committed to delivering high-quality solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
