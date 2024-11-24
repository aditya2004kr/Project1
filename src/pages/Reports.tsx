import { FileText, Download, Share2 } from 'lucide-react';

const reports = [
  {
    title: 'Q4 2023 Financial Report',
    date: 'March 1, 2024',
    type: 'Financial',
    status: 'Completed',
  },
  {
    title: 'User Engagement Analysis',
    date: 'February 28, 2024',
    type: 'Analytics',
    status: 'In Progress',
  },
  {
    title: 'Sales Performance Review',
    date: 'February 25, 2024',
    type: 'Sales',
    status: 'Completed',
  },
];

export function Reports() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Reports
        </h1>
        <p className="text-gray-600 mt-1">View and manage your reports</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {reports.map((report) => (
          <div key={report.title} className="dashboard-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{report.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">{report.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{report.type}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      report.status === 'Completed' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}