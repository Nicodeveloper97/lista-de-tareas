import React, { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Task, Category } from '../types';

interface EditTaskFormProps {
  task: Task;
  categories: Category[];
  onEdit: (newTitle: string, newCategoryId: number) => void;
  onCancel: () => void;
}

export const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, categories, onEdit, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [categoryId, setCategoryId] = useState(task.categoryId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onEdit(title.trim(), categoryId);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center p-4 bg-white rounded-lg shadow space-y-2 sm:space-y-0 sm:space-x-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full sm:w-auto flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Editar título de la tarea"
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
        className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Editar categoría de la tarea"
      >
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="p-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Guardar cambios"
        >
          <CheckIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Cancelar edición"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

