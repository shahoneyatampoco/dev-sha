import { BarChart3, Clock, Package, ShoppingCart, Users } from 'lucide-react';

const MockDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Orders', value: '1,284', icon: <ShoppingCart className="text-blue-500" />, trend: '+12%' },
    { label: 'Active Users', value: '342', icon: <Users className="text-emerald-500" />, trend: '+5%' },
    { label: 'Inventory', value: '4,521', icon: <Package className="text-orange-500" />, trend: '-2%' },
    { label: 'Revenue', value: '$42,500', icon: <BarChart3 className="text-purple-500" />, trend: '+18%' },
  ];

  const recentTickets = [
    { id: 'SO-1024', customer: 'Acme Corp', status: 'Pending', amount: '$1,200', date: '2026-04-28' },
    { id: 'SO-1025', customer: 'Global Tech', status: 'Shipped', amount: '$850', date: '2026-04-27' },
    { id: 'SO-1026', customer: 'Stark Ind.', status: 'Processing', amount: '$3,400', date: '2026-04-27' },
  ];

  return (
    <section id="dashboard" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">SaaS Analytics Dashboard</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Example of a data-rich administration UI built with React.</p>
          </div>
          <div className="mt-4 md:mt-0 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock size={16} /> Last updated: Just now
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">{stat.icon}</div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h4>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white">Recent Sales Orders</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600 dark:text-blue-400">{ticket.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{ticket.customer}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        ticket.status === 'Shipped' ? 'bg-emerald-100 text-emerald-700' : 
                        ticket.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 font-medium">{ticket.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{ticket.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockDashboard;
