import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TaskItem } from './Tarea';
import { Task, Category } from '../types';

interface TaskListProps {
  tasks: Task[];
  categories: Category[];
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
  onEditTask: (id: number, newTitle: string, newCategoryId: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, categories, onDeleteTask, onToggleTask, onEditTask }) => {
  return (
    <ul className="space-y-3">
      <AnimatePresence>
        {tasks.map(task => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <TaskItem
              task={task}
              categories={categories}
              onDelete={onDeleteTask}
              onToggle={onToggleTask}
              onEdit={onEditTask}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

