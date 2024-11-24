import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export function StatCard({ title, value, change, isPositive, icon: Icon }: StatCardProps) {
  return (
    <div className="stat-card group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold mt-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {value}
          </h3>
        </div>
        <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110
          ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon className={`h-6 w-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
      <div className={`h-1 mt-4 rounded-full ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
        <div 
          className={`h-full rounded-full transition-all duration-500 group-hover:w-full
            ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
          style={{ width: isPositive ? '70%' : '30%' }}
        ></div>
      </div>
    </div>
  );
}