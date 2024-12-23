import React, { useState } from 'react';
import { TaskList } from './components/Lista';
import { AddTaskForm } from './components/AgregarTarea';
import { SearchBar } from './components/Buscador';
import { Layout } from './components/Layout';
import { useTodoManager } from './hooks/useTodoManager';
import { Task } from './types';

const App: React.FC = () => {
  const {
    tasks,
    categories,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    addCategory,
  } = useTodoManager();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks
    .filter(task => selectedCategory ? task.categoryId === selectedCategory : true)
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Layout
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
      onAddCategory={addCategory}
    >
      <div className="mb-8">
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <AddTaskForm onAddTask={addTask} categories={categories} />
      <TaskList
        tasks={filteredTasks}
        categories={categories}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onEditTask={editTask}
      />
    </Layout>
  );
};

export default App;

