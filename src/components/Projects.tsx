import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Core API',
      description: 'A robust backend for an e-commerce platform built with ASP.NET Core, EF Core, and SQL Server. Features JWT authentication and Stripe integration.',
      tags: ['ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management System',
      description: 'A real-time task management application with a React frontend and a C# Web API backend. Uses SignalR for live updates.',
      tags: ['React', 'SignalR', 'Web API', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
      github: '#',
      demo: '#',
    },
    {
      title: 'Library Inventory Tool',
      description: 'A desktop application for managing library books and loans, utilizing WPF and SQLite for local data storage.',
      tags: ['WPF', 'C#', 'SQLite', 'MVVM'],
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000',
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
                    <Github size={18} className="mr-2" /> Code
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
