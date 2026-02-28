import { Category, Transaction, MonthlySummary } from '../types';

export const categories: Category[] = [
  { id: 'c1', name: 'Housing', type: 'expense', colorCode: '#3b82f6', icon: 'Home' },
  { id: 'c2', name: 'Food & Dining', type: 'expense', colorCode: '#f59e0b', icon: 'Utensils' },
  { id: 'c3', name: 'Transportation', type: 'expense', colorCode: '#6366f1', icon: 'Car' },
  { id: 'c4', name: 'Entertainment', type: 'expense', colorCode: '#ec4899', icon: 'Film' },
  { id: 'c5', name: 'Utilities', type: 'expense', colorCode: '#06b6d4', icon: 'Zap' },
  { id: 'c6', name: 'Healthcare', type: 'expense', colorCode: '#ef4444', icon: 'HeartPulse' },
  { id: 'c7', name: 'Salary', type: 'income', colorCode: '#10b981', icon: 'Briefcase' },
  { id: 'c8', name: 'Freelance', type: 'income', colorCode: '#8b5cf6', icon: 'Laptop' },
];

export const transactions: Transaction[] = [
  { id: 't1', type: 'income', amount: 4500, date: '2023-10-01', description: 'Monthly Salary', categoryId: 'c7', method: 'Direct Deposit' },
  { id: 't2', type: 'expense', amount: 1500, date: '2023-10-02', description: 'October Rent', categoryId: 'c1', method: 'Bank Transfer' },
  { id: 't3', type: 'expense', amount: 85.50, date: '2023-10-04', description: 'Grocery Store', categoryId: 'c2', method: 'Credit Card' },
  { id: 't4', type: 'expense', amount: 40.00, date: '2023-10-05', description: 'Gas Station', categoryId: 'c3', method: 'Debit Card' },
  { id: 't5', type: 'expense', amount: 120.00, date: '2023-10-08', description: 'Electric Bill', categoryId: 'c5', method: 'Autopay' },
  { id: 't6', type: 'expense', amount: 65.00, date: '2023-10-10', description: 'Internet Bill', categoryId: 'c5', method: 'Autopay' },
  { id: 't7', type: 'income', amount: 800, date: '2023-10-12', description: 'Web Design Project', categoryId: 'c8', method: 'PayPal' },
  { id: 't8', type: 'expense', amount: 45.00, date: '2023-10-14', description: 'Movie Tickets', categoryId: 'c4', method: 'Credit Card' },
  { id: 't9', type: 'expense', amount: 210.25, date: '2023-10-15', description: 'Supermarket', categoryId: 'c2', method: 'Credit Card' },
  { id: 't10', type: 'expense', amount: 35.00, date: '2023-10-18', description: 'Pharmacy', categoryId: 'c6', method: 'Debit Card' },
  { id: 't11', type: 'expense', amount: 120.00, date: '2023-10-20', description: 'Dinner out', categoryId: 'c2', method: 'Credit Card' },
  { id: 't12', type: 'expense', amount: 60.00, date: '2023-10-22', description: 'Concert Ticket', categoryId: 'c4', method: 'Credit Card' },
  { id: 't13', type: 'expense', amount: 45.00, date: '2023-10-25', description: 'Uber Rides', categoryId: 'c3', method: 'Debit Card' },
  { id: 't14', type: 'expense', amount: 300.00, date: '2023-10-28', description: 'Car Maintenance', categoryId: 'c3', method: 'Credit Card' },
  { id: 't15', type: 'expense', amount: 95.00, date: '2023-10-30', description: 'Groceries', categoryId: 'c2', method: 'Credit Card' },
  // A few September items for filtering simulation
  { id: 't16', type: 'income', amount: 4500, date: '2023-09-01', description: 'Monthly Salary', categoryId: 'c7', method: 'Direct Deposit' },
  { id: 't17', type: 'expense', amount: 1500, date: '2023-09-02', description: 'September Rent', categoryId: 'c1', method: 'Bank Transfer' },
  { id: 't18', type: 'expense', amount: 320.00, date: '2023-09-15', description: 'Car Insurance', categoryId: 'c3', method: 'Autopay' }
];

export const monthlySummaries: MonthlySummary[] = [
  { monthId: '2023-05', year: 2023, monthName: 'May', totalIncome: 5100, totalExpense: 3200, balance: 1900 },
  { monthId: '2023-06', year: 2023, monthName: 'June', totalIncome: 5300, totalExpense: 3150, balance: 2150 },
  { monthId: '2023-07', year: 2023, monthName: 'July', totalIncome: 5000, totalExpense: 3800, balance: 1200 },
  { monthId: '2023-08', year: 2023, monthName: 'August', totalIncome: 5200, totalExpense: 3400, balance: 1800 },
  { monthId: '2023-09', year: 2023, monthName: 'September', totalIncome: 4500, totalExpense: 2950, balance: 1550 },
  { monthId: '2023-10', year: 2023, monthName: 'October', totalIncome: 5300, totalExpense: 2720.75, balance: 2579.25 }
];