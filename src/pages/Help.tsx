import { Search, Book, MessageCircle, Phone } from 'lucide-react';

const helpCategories = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Detailed guides and API references',
  },
  {
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Connect with other users',
  },
  {
    icon: Phone,
    title: 'Support',
    description: '24/7 customer service',
  },
];

const faqs = [
  {
    question: 'How do I create a new dashboard?',
    answer: 'To create a new dashboard, click the "+" button in the top navigation bar and select "New Dashboard". Follow the setup wizard to customize your dashboard.',
  },
  {
    question: 'Can I share my reports with external users?',
    answer: 'Yes, you can share reports with external users by generating a secure link or adding their email addresses to the sharing settings.',
  },
  {
    question: 'How do I export data to Excel?',
    answer: 'To export data, click the "Export" button in the top right corner of any report and select "Excel" from the dropdown menu.',
  },
];

export function Help() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Help Center
        </h1>
        <p className="text-gray-600 mt-1">Find answers and get support</p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {helpCategories.map((category) => (
          <div key={category.title} className="dashboard-card p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="flex flex-col items-center text <boltAction type="file" filePath="src/pages/Help.tsx">import { Search, Book, MessageCircle, Phone } from 'lucide-react';

const helpCategories = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Detailed guides and API references',
  },
  {
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Connect with other users',
  },
  {
    icon: Phone,
    title: 'Support',
    description: '24/7 customer service',
  },
];

const faqs = [
  {
    question: 'How do I create a new dashboard?',
    answer: 'To create a new dashboard, click the "+" button in the top navigation bar and select "New Dashboard". Follow the setup wizard to customize your dashboard.',
  },
  {
    question: 'Can I share my reports with external users?',
    answer: 'Yes, you can share reports with external users by generating a secure link or adding their email addresses to the sharing settings.',
  },
  {
    question: 'How do I export data to Excel?',
    answer: 'To export data, click the "Export" button in the top right corner of any report and select "Excel" from the dropdown menu.',
  },
];

export function Help() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Help Center
        </h1>
        <p className="text-gray-600 mt-1">Find answers and get support</p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {helpCategories.map((category) => (
          <div key={category.title} className="dashboard-card p-6 hover:scale-105 transition-transform cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-blue-100 mb-4">
                <category.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card p-6">
        <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">Still need help?</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
          <MessageCircle className="h-5 w-5" />
          <span>Contact Support</span>
        </button>
      </div>
    </>
  );
}