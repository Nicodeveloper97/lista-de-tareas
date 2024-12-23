import React from 'react';
import { Sidebar } from './Sidebar';
import { Category } from '../types';

interface LayoutProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (categoryId: number | null) => void;
  onAddCategory: (name: string, color: string) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onAddCategory,
  children
}) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      <Sidebar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={onSelectCategory}
        onAddCategory={onAddCategory}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900">Lista de Tareas</h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

