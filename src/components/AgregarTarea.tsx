import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Category } from '../types';

interface AddTaskFormProps {
  onAddTask: (title: string, categoryId: number) => void;
  categories: Category[];
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask, categories }) => {
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && categoryId) {
      onAddTask(title.trim(), categoryId);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-8 space-y-2 sm:space-y-0 sm:space-x-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agregar nueva tarea"
        className="flex-grow px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        aria-label="Título de la nueva tarea"
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
        className="px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        aria-label="Categoría de la nueva tarea"
      >
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
        aria-label="Agregar tarea"
      >
        <PlusIcon className="h-6 w-6" />
        <span className="ml-2 hidden sm:inline">Agregar</span>
      </button>
    </form>
  );
};

