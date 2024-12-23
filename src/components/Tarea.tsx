import React, { useState } from 'react';
import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Task, Category } from '../types';
import { EditTaskForm } from './EditarTarea';

interface TaskItemProps {
  task: Task;
  categories: Category[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newTitle: string, newCategoryId: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, categories, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newTitle: string, newCategoryId: number) => {
    onEdit(task.id, newTitle, newCategoryId);
    setIsEditing(false);
  };

  const category = categories.find(c => c.id === task.categoryId);

  if (isEditing) {
    return <EditTaskForm task={task} categories={categories} onEdit={handleEdit} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center mb-2 sm:mb-0">
        <button
          onClick={() => onToggle(task.id)}
          className={`mr-2 transition-colors duration-200 ${task.completed ? 'text-green-500' : 'text-gray-400'}`}
          aria-label={task.completed ? "Marcar como incompleta" : "Marcar como completa"}
        >
          <CheckCircleIcon className="h-6 w-6" />
        </button>
        <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'} break-words transition-all duration-200`}>
          {task.title}
        </span>
      </div>
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
        {category && (
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${category.color} text-white mr-2`}>
            {category.name}
          </span>
        )}
        <div>
          <button 
            onClick={() => setIsEditing(true)} 
            className="text-blue-500 hover:text-blue-600 mr-2 transition-colors duration-200"
            aria-label="Editar tarea"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={() => onDelete(task.id)} 
            className="text-red-500 hover:text-red-600 transition-colors duration-200"
            aria-label="Eliminar tarea"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

