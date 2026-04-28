import { MessageSquare, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email me at</p>
                  <a href="mailto:shahoneytampoco@gmail.com" className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 transition-colors">shahoneytampoco@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <a href="#" className="text-gray-900 dark:text-white font-semibold hover:text-emerald-600 transition-colors">linkedin.com/in/shahoneytampoco</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-semibold">Available for Remote / On-site</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" placeholder="How can I help you?" />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/25">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
