import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AutoPrintingApp',
      description: 'An automated desktop service designed to poll Sales Orders from a web API and print them directly to a network thermal printer using ESC/POS commands.',
      tags: ['.NET 10', 'C#', 'ESC/POS', 'Network Printing'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#',
    },
    {
      title: 'GitHubMentor',
      description: 'A monitoring tool built with FastAPI and React to manage and track multiple local GitHub projects from a centralized dashboard.',
      tags: ['FastAPI', 'Python', 'React', 'Project Management'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98aadebc25a?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#',
    },
    {
      title: 'MockSalesOrderApi',
      description: 'A mock REST API built with ASP.NET Core to simulate Sales Order management and provide testing endpoints for automation tools.',
      tags: ['ASP.NET Core', 'C#', 'Web API', 'Mocking'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">A selection of my recent work in the .NET and Web space.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                    <Globe size={18} className="mr-2" /> Code
                  </a>
                  <a href={project.demo} className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    <ExternalLink size={18} className="mr-2" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
