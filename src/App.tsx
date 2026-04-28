import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MockDashboard from './components/MockDashboard';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors selection:bg-blue-100 dark:selection:bg-blue-900/50">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <MockDashboard />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Alex Chen. Built with React, Tailwind CSS, and Passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
