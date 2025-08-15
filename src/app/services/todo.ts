import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { TodoItem } from '../model/todo.type';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
   // Using signals to store todos
  todos = signal<TodoItem[]>([
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a Todo App', completed: false }
  ]);

  addTodo(title: string): void {
    const newTodo: TodoItem = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.update(t => [...t, newTodo]);
  }

  toggleTodo(id: number): void {
    this.todos.update(t => t.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  deleteTodo(id: number): void {
    this.todos.update(t => t.filter(todo => todo.id !== id));
  }
}