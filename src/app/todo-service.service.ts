import { Injectable } from '@angular/core';
import { Todo } from './todo-item/todo.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  database: Todo[];
  fireDatabase: AngularFireList<Todo>;
  fireDBPath = 'todoList';

  constructor(private fireDB: AngularFireDatabase) {
    this.fireDatabase = fireDB.list(this.fireDBPath);
    const tds = [
      new Todo('436 homework', 'urgent'),
      new Todo('552 homework', 'days'),
      new Todo('481 homework', 'week')
    ];
    for (let i = 0; i < 3; i++) {
      // this.database.push(tds[i]);
      // this.fireDatabase.push(tds[i]);
      // console.log(this.fireDatabase);
    }
  }

  addTodo(td: Todo): void {
    this.fireDatabase.push(td);
  }

  updateTodo(id: string, newDueDate: any): void {
    this.fireDatabase.update(id, newDueDate);
  }

  getTodos(): AngularFireList<Todo> {
    return this.fireDatabase;
  }
  // method for later
  // deleteTodo
}
