import { motion } from 'framer-motion';
import { FileText, Globe, MessageSquare, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Background blobs for flair */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for mission-critical projects
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
            Engineering systems with <span className="text-blue-500">precision.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            I'm <span className="text-slate-100 font-medium">Shahoney Tampoco</span>, a Junior Information Engineer specializing in bridge-building between complex hardware and modern web ecosystems. 
            Currently architecting automated solutions and scalable ERP companions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
          >
            <Mail size={18} /> Get in Touch
          </a>
          <button
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
          >
            <FileText size={18} /> Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center space-x-6 text-gray-500 dark:text-gray-400"
        >
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Globe size={24} />
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <MessageSquare size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
