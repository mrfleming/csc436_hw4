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

  constructor(private service: TodoService) {}

  update(event, td: Todo) {
    const due = event.target.value;
    this.service.updateTodo(td.key, due);
  }
  due(): string {
    return this.todo.dueDate;
  }

  ngOnInit() {

  }

  // deleteTodo() {}



}
