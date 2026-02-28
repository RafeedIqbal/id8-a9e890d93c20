'use client';

import { Plus, Bell, Search, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative w-64 hidden md:block">
          <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search transactions..."
            className="w-full bg-gray-50 pl-9 border-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100 text-sm font-medium text-gray-600">
          <CalendarDays className="h-4 w-4 text-gray-400" />
          <span>October 2023</span>
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Expense
        </Button>
      </div>
    </header>
  );
}