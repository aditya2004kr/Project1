import { Chart } from '../components/Chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

export function Analytics() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Analytics
        </h1>
        <p className="text-gray-600 mt-1">Detailed analysis and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Chart title="Conversion Rate" />
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-6">Performance Metrics</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#3B82F6" />
                <Bar dataKey="uv" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="dashboard-card p-6">
        <h3 className="text-lg font-semibold mb-6">Key Performance Indicators</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Bounce Rate', 'Session Duration', 'Pages per Session'].map((metric) => (
            <div key={metric} className="p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600">{metric}</h4>
              <p className="text-2xl font-bold mt-2">45%</p>
              <div className="flex items-center mt-2">
                <span className="text-green-500 text-sm">↑ 12.5%</span>
                <span className="text-gray-500 text-sm ml-2">vs last week</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}