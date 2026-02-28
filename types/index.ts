export type TransactionType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  colorCode: string;
  icon: string;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: string; // ISO 8601 date string (YYYY-MM-DD)
  description: string;
  categoryId: string;
  method: string;
}

export interface MonthlySummary {
  monthId: string; // e.g., '2023-10'
  year: number;
  monthName: string;
  totalIncome: number;
  totalExpense: number;
  balance: number;
}