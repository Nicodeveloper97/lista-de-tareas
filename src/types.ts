export interface Task {
  id: number;
  title: string;
  completed: boolean;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  color: string;
}

