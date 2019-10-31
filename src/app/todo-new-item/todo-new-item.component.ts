import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo.model';
import { TodoService } from '../todo-service.service';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.css']
})
export class TodoNewItemComponent implements OnInit {

  id = this.service.getTodos().length + 1;

  constructor(private service: TodoService) { }

  ngOnInit() {
  }

  submit(text: HTMLInputElement, dueDate: HTMLInputElement): void {
    const freshTodo = new Todo(this.id, text.value, dueDate.value);
    console.table(freshTodo);
    this.service.addTodo(freshTodo);
    // increment count
    this.id++;
    // clear text fields
    text.value = '';
    dueDate.value = '';
  }

}
