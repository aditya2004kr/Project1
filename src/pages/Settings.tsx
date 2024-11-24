import { Save } from 'lucide-react';

export function Settings() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="dashboard-card p-6">
          <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="h-16 w-16 rounded-full"
                />
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Change
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="dashboard-card p-6">
          <h2 className="text-xl font-semibold mb-6">Preferences</h2>
          <div className="space-y-4">
            {['Email Notifications', 'SMS Notifications', 'Marketing Communications'].map((pref) => (
              <div key={pref} className="flex items-center justify-between">
                <span className="text-gray-700">{pref}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Save className="h-5 w-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </>
  );
}