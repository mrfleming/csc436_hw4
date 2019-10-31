import { Injectable } from '@angular/core';
import { Todo } from './todo-item/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  database: Todo[] = [];

  constructor() {
    const tds = [
      new Todo(1, '436 homework', 'urgent'),
      new Todo(2, '552 homework', 'days'),
      new Todo(3, '481 homework', 'week')
    ];
    for (let i = 0; i < tds.length; i++){
      this.database.push(tds[i]);
    }
  }

  addTodo(td: Todo): void {
    this.database.push(td);
  }

  updateTodo(id: number, newDueDate: string): void {
    this.database[id].dueDate = newDueDate;
  }

  getTodos(): Todo[] {
    return this.database;
  }
  // method for later
  // deleteTodo
}
