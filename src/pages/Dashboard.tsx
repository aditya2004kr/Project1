import { StatCard } from '../components/StatCard';
import { Chart } from '../components/Chart';
import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';

export function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$54,239"
          change="+12.5%"
          isPositive={true}
          icon={DollarSign}
        />
        <StatCard
          title="Total Users"
          value="2,543"
          change="+8.2%"
          isPositive={true}
          icon={Users}
        />
        <StatCard
          title="Sales"
          value="1,234"
          change="-3.1%"
          isPositive={false}
          icon={ShoppingCart}
        />
        <StatCard
          title="Growth"
          value="+22.3%"
          change="+4.3%"
          isPositive={true}
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Revenue Overview" />
        <Chart title="User Growth" />
      </div>
    </>
  );
}