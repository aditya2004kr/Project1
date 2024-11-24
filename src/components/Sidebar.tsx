import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart3, PieChart, Users, Settings, HelpCircle, Menu } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: PieChart, label: 'Reports', path: '/reports' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help', path: '/help' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white ${isCollapsed ? 'w-20' : 'w-64'} min-h-screen p-4 transition-all duration-300 relative`}>
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-8 bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-700 transition-colors"
      >
        <Menu className="h-4 w-4" />
      </button>

      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} mb-12`}>
        <div className="relative">
          <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-25"></div>
          <BarChart3 className="h-8 w-8 text-blue-500 relative" />
        </div>
        {!isCollapsed && <span className="text-xl font-bold">PowerBI</span>}
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              w-full p-3 rounded-lg transition-all duration-200 flex items-center
              ${isActive ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-gray-800/50'} 
              ${isCollapsed ? 'justify-center' : 'space-x-3'}
            `}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}