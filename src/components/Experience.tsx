import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Junior Information Engineer',
      role: 'Full-Cycle Engineering',
      period: 'Jan 2026 - Present',
      description: [
        'Architecting robust information systems with a focus on enterprise-scale automation and data consistency.',
        'Developing high-concurrency mobile modules for ERP ecosystems using Flutter and clean architecture principles.',
        'Optimizing high-availability database systems (PostgreSQL/SQL Server) for mission-critical operations.',
      ],
    },
    {
      company: 'Information Engineering Graduate',
      role: 'Foundational Systems Design',
      period: 'Class of 2025',
      description: [
        'Mastered full-stack engineering with PHP (Laravel), Java (Spring), and .NET 10 during intensive project cycles.',
        'Engineered hardware-integrated desktop services for industrial environments, solving real-world latency and reliability issues.',
        'Implemented end-to-end data security and relational integrity in student-led enterprise simulations.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
