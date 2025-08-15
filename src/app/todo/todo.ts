import { Component, inject } from '@angular/core';
import { TodosService } from '../services/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Todo List</h2>
    <ul>
      <li *ngFor="let todo of todoService.todos()">
        <input type="checkbox" [checked]="todo.completed" (change)="todoService.toggleTodo(todo.id)">
        {{ todo.title }}
        <button (click)="todoService.deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <input [(ngModel)]="newTodo" placeholder="New todo" />
    <button (click)="addTodo()">Add</button>
  `,
  styles: ``
})
export class Todo {
  todoService = inject(TodosService);
  newTodo = '';

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }
}
