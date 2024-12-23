import React, { useState } from 'react';
import { PlusIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (categoryId: number | null) => void;
  onAddCategory: (name: string, color: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory, onAddCategory }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('bg-gray-500');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      onAddCategory(newCategoryName.trim(), newCategoryColor);
      setNewCategoryName('');
      setNewCategoryColor('bg-gray-500');
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full lg:w-64 bg-gray-800 text-white">
      <div className="p-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex justify-between items-center lg:hidden text-xl font-semibold"
        >
          Categorías
          <ChevronDownIcon className={`h-5 w-5 transition-transform ${isMobileMenuOpen ? 'transform rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block p-4 lg:h-screen lg:overflow-y-auto`}>
        <ul className="space-y-2 mb-4">
          <li>
            <button
              onClick={() => {
                onSelectCategory(null);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${selectedCategory === null ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              Todas las categorías
            </button>
          </li>
          {categories.map(category => (
            <li key={category.id}>
              <button
                onClick={() => {
                  onSelectCategory(category.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${selectedCategory === category.id ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${category.color}`}></span>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
        {isAdding ? (
          <div className="space-y-2">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Nombre de la categoría"
              className="w-full px-4 py-2 text-gray-800 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={newCategoryColor}
              onChange={(e) => setNewCategoryColor(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bg-red-500">Rojo</option>
              <option value="bg-blue-500">Azul</option>
              <option value="bg-green-500">Verde</option>
              <option value="bg-yellow-500">Amarillo</option>
              <option value="bg-purple-500">Morado</option>
              <option value="bg-pink-500">Rosa</option>
            </select>
            <button
              onClick={handleAddCategory}
              className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
            >
              Agregar categoría
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Nueva categoría
          </button>
        )}
      </div>
    </div>
  );
};
