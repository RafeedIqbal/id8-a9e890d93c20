'use client';

import React from 'react';
import { categories, transactions } from '@/data/mockData';
import { formatCurrency } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AddExpenseModal } from '@/components/AddExpenseModal';

export default function CategoriesPage() {
  const currentMonthTransactions = transactions.filter(t => t.date.startsWith('2023-10'));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Categories</h1>
        <p className="text-gray-500">Manage your spending categories and budgets</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const categoryTx = currentMonthTransactions.filter(t => t.categoryId === category.id);
          const totalAmount = categoryTx.reduce((sum, tx) => sum + tx.amount, 0);
          // Mock budget for display purposes
          const budget = category.type === 'expense' ? Math.max(totalAmount + 150, 500) : 0;
          const progress = budget > 0 ? Math.min((totalAmount / budget) * 100, 100) : 0;

          return (
            <Card key={category.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: category.colorCode }}
                    >
                      {category.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-base">{category.name}</CardTitle>
                      <p className="text-xs text-gray-500 capitalize">{category.type}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="text-sm text-gray-500">{category.type === 'expense' ? 'Spent' : 'Earned'}</p>
                    <p className="text-xl font-bold text-gray-900">{formatCurrency(totalAmount)}</p>
                  </div>
                  {category.type === 'expense' && (
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Budget</p>
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(budget)}</p>
                    </div>
                  )}
                </div>
                
                {category.type === 'expense' && (
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${progress}%`, 
                        backgroundColor: category.colorCode,
                        opacity: progress > 90 ? 0.8 : 1
                      }}
                    />
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-4">{categoryTx.length} transactions this month</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <AddExpenseModal />
    </div>
  );
}
