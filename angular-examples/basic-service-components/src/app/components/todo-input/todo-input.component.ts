import { Component } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {

  constructor( public _todoService: TodoService ) {

  }

}
