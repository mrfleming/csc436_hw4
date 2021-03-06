import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from '../todo-service.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() i: any;

  constructor(private service: TodoService) {}

  updateTodo(event, td) {
    const due = event.target.value;
    this.service.updateTodo(td.key, { dueDate: due});
  }

  deleteTodo(todo) {
    this.service.deleteTodo(todo.key)
      .catch(err => console.log(err));

  }

  due(): string {
    return this.todo.dueDate;
  }

  ngOnInit() {

  }

  // deleteTodo() {}



}
