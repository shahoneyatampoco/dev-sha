import { motion } from 'framer-motion';
import { Layout, Server, Settings, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Terminal className="text-blue-500" />,
      skills: ['C#', 'SQL', 'TypeScript', 'Python', 'JavaScript'],
    },
    {
      title: 'Systems & Backend',
      icon: <Server className="text-emerald-500" />,
      skills: ['.NET 10 / ASP.NET Core', 'FastAPI', 'ESC/POS Protocol', 'REST API Design'],
    },
    {
      title: 'Frontend & UI',
      icon: <Layout className="text-purple-500" />,
      skills: ['React', 'Tailwind CSS', 'Responsive Design', 'Component Architecture'],
    },
    {
      title: 'Engineering Tools',
      icon: <Settings className="text-orange-500" />,
      skills: ['Git / GitHub', 'TCP/IP Socket Programming', 'Postman', 'Unit Testing'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">My toolbox for building modern enterprise applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
