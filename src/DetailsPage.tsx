// src/DetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailsPage() {
  const { accountType } = useParams();  // Get the account type from the URL

  // Dummy account data for demonstration purposes
  const accountData = {
    checking: {
      balance: 12456.78,
      recentTransactions: [
        { name: 'Amazon.com', date: 'Today', amount: -84.97, type: 'Shopping' },
        { name: 'Salary Deposit', date: 'Yesterday', amount: 3500.00, type: 'Income' },
        { name: 'Starbucks', date: 'Yesterday', amount: -5.40, type: 'Food & Drink' },
      ],
    },
    creditCard: {
      balance: -2145.50,
      recentTransactions: [
        { name: 'Netflix', date: 'Today', amount: -14.99, type: 'Entertainment' },
        { name: 'Transfer to Savings', date: 'Yesterday', amount: -500.00, type: 'Transfer' },
        { name: 'Starbucks', date: '2 days ago', amount: -5.40, type: 'Food & Drink' },
      ],
    },
    savings: {
      balance: 45892.31,
      recentTransactions: [
        { name: 'Transfer from Checking', date: 'Yesterday', amount: 500.00, type: 'Transfer' },
        { name: 'Interest Credit', date: '2 days ago', amount: 25.00, type: 'Interest' },
        { name: 'Salary Deposit', date: '3 days ago', amount: 3500.00, type: 'Income' },
      ],
    },
  };

  const account = accountData[accountType];

  if (!account) {
    return <div>Account not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">{accountType.charAt(0).toUpperCase() + accountType.slice(1)} Account Details</h1>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Balance</h2>
        <div className="text-3xl font-bold text-gray-800">${account.balance.toFixed(2)}</div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Recent Transactions</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {account.recentTransactions.map((transaction, index) => (
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

      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default DetailsPage;
