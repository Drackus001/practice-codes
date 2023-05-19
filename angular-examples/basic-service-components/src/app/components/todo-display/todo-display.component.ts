import { Component } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.scss']
})
export class TodoDisplayComponent {

  constructor(public _todoArray: TodoService) {

  }

}
