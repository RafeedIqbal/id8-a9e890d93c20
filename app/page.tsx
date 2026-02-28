'use client';

import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Wallet } from 'lucide-react';
import { transactions, categories } from '@/data/mockData';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AddExpenseModal } from '@/components/AddExpenseModal';

const monthlyData = [
  { name: 'May', income: 4200, expense: 3100 },
  { name: 'Jun', income: 4200, expense: 2800 },
  { name: 'Jul', income: 4500, expense: 3400 },
  { name: 'Aug', income: 4500, expense: 3200 },
  { name: 'Sep', income: 4800, expense: 2900 },
  { name: 'Oct', income: 5300, expense: 3240 },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentMonthTransactions = transactions.filter(t => t.date.startsWith('2023-10'));
  
  const totalIncome = currentMonthTransactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);
    
  const totalExpense = currentMonthTransactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);
    
  const balance = totalIncome - totalExpense;

  const expenseByCategory = categories
    .filter(c => c.type === 'expense')
    .map(c => ({
      name: c.name,
      value: currentMonthTransactions
        .filter(t => t.categoryId === c.id)
        .reduce((sum, t) => sum + t.amount, 0),
      color: c.colorCode,
    }))
    .filter(d => d.value > 0);

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500">Your financial summary for October 2023</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Balance</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
              <Wallet className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{formatCurrency(balance)}</div>
            <div className="flex items-center mt-1 text-sm text-emerald-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+12.5% from last month</span>
            </div>
            <div className="h-12 mt-4">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Income</CardTitle>
            <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <ArrowUpRight className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalIncome)}</div>
            <div className="flex items-center mt-1 text-sm text-emerald-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+4.2% from last month</span>
            </div>
            <div className="h-12 mt-4">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Expenses</CardTitle>
            <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center">
              <ArrowDownRight className="h-4 w-4 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalExpense)}</div>
            <div className="flex items-center mt-1 text-sm text-red-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+8.1% from last month</span>
            </div>
            <div className="h-12 mt-4">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                    <Tooltip 
                      cursor={{ fill: '#f9fafb' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="income" name="Income" fill="#10b981" radius={[4, 4, 0, 0]} barSize={30} />
                    <Bar dataKey="expense" name="Expense" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Expense by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full flex flex-col items-center justify-center">
              {mounted && (
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart>
                    <Pie
                      data={expenseByCategory}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expenseByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
              <div className="w-full mt-4 grid grid-cols-2 gap-2">
                {expenseByCategory.slice(0, 4).map((cat, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: cat.color }} />
                    <span className="text-gray-600 truncate">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx) => {
                  const category = categories.find(c => c.id === tx.categoryId);
                  const isExpense = tx.type === 'expense';
                  return (
                    <tr key={tx.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-4 text-gray-500">{formatDate(tx.date)}</td>
                      <td className="px-4 py-4 font-medium text-gray-900">{tx.description}</td>
                      <td className="px-4 py-4">
                        {category && (
                          <span 
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
                            style={{ backgroundColor: `${category.colorCode}15`, color: category.colorCode }}
                          >
                            {category.name}
                          </span>
                        )}
                      </td>
                      <td className={`px-4 py-4 text-right font-medium ${isExpense ? 'text-gray-900' : 'text-emerald-600'}`}>
                        {isExpense ? '-' : '+'}{formatCurrency(tx.amount)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <AddExpenseModal />
    </div>
  );
}
