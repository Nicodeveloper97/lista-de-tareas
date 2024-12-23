import { useState, useEffect } from 'react';
import { Task, Category } from '../types';

export const useTodoManager = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [
      { id: 1, name: 'Personal', color: 'bg-blue-500' },
      { id: 2, name: 'Trabajo', color: 'bg-green-500' },
      { id: 3, name: 'Compras', color: 'bg-yellow-500' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [tasks, categories]);

  const addTask = (title: string, categoryId: number) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      categoryId,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id: number, newTitle: string, newCategoryId: number) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, title: newTitle, categoryId: newCategoryId } : task
    ));
  };

  const addCategory = (name: string, color: string) => {
    const newCategory: Category = {
      id: Date.now(),
      name,
      color,
    };
    setCategories(prevCategories => [...prevCategories, newCategory]);
  };

  return {
    tasks,
    categories,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    addCategory,
  };
};

