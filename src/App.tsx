import React, { useState } from 'react';
import { BanknoteIcon as BanknotesIcon, CreditCardIcon, PieChartIcon, ArrowRightLeftIcon, BellIcon, UserCircleIcon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-blue-100'}`}>
      {/* Navigation */}
      <nav className={`bg-white ${darkMode ? 'bg-gray-800 text-white' : ''} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <BanknotesIcon className={`h-10 w-10 ${darkMode ? 'text-white' : 'text-blue-600'}`} />
              <span className={`ml-3 text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>SecureBank</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-200">
                <BellIcon className={`h-7 w-7 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
              </button>
              <button className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-200">
                <UserCircleIcon className={`h-7 w-7 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
              </button>
              <button onClick={toggleDarkMode} className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-200">
                <span className={`h-7 w-7 ${darkMode ? 'text-white' : 'text-gray-600'}`}>🌙</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Account Overview */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Account Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Checking Account */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-5">
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Checking Account</h3>
                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>**** 4589</span>
              </div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>$12,456.78</div>
              <div className="flex justify-between mt-6">
                <button className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-800 transition duration-200`}>
                  View Details
                </button>
                <ArrowRightLeftIcon className="h-6 w-6 text-gray-600" />
              </div>
            </div>

            {/* Credit Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-5">
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Credit Card</h3>
                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>**** 1234</span>
              </div>
              <div className="text-3xl font-bold text-red-600">- $2,145.50</div>
              <div className="flex justify-between mt-6">
                <button className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-800 transition duration-200`}>
                  View Transactions
                </button>
                <ArrowRightLeftIcon className="h-6 w-6 text-gray-600" />
              </div>
            </div>

            {/* Savings Account */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-5">
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Savings Account</h3>
                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>**** 9876</span>
              </div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-green-600'}`}>$45,892.31</div>
              <div className="flex justify-between mt-6">
                <button className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-800 transition duration-200`}>
                  View Growth
                </button>
                <PieChartIcon className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <CreditCardIcon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <button className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                Pay Bills
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <PieChartIcon className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <button className="text-lg font-semibold text-green-600 hover:text-green-800">
                Track Savings
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <ArrowRightLeftIcon className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <button className="text-lg font-semibold text-purple-600 hover:text-purple-800">
                Transfer Funds
              </button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Recent Transactions</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[ 
                {
                  name: 'Amazon.com',
                  date: 'Today',
                  amount: -84.97,
                  type: 'Shopping'
                },
                {
                  name: 'Salary Deposit',
                  date: 'Yesterday',
                  amount: 3500.00,
                  type: 'Income'
                },
                {
                  name: 'Starbucks',
                  date: 'Yesterday',
                  amount: -5.40,
                  type: 'Food & Drink'
                },
                {
                  name: 'Netflix Subscription',
                  date: '2 days ago',
                  amount: -14.99,
                  type: 'Entertainment'
                },
                {
                  name: 'Transfer to Savings',
                  date: '3 days ago',
                  amount: -500.00,
                  type: 'Transfer'
                }
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-4 px-6">
                  <div>
                    <div className="text-gray-800 font-semibold">{transaction.name}</div>
                    <div className="text-sm text-gray-500">{transaction.date} · {transaction.type}</div>
                  </div>
                  <div className={`font-semibold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
