import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service.service';
import { Todo } from '../todo-item/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.getTodos();
    console.table(this.todoList);
  }

  getTodos() {
    this.todoList = this.service.getTodos();
  }

}
