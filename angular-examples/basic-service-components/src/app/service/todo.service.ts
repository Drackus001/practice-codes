import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoArray: string[] = [];

  constructor() {  }

  getTodoArray(): string[] {
    return this.todoArray;
  }

  setTodoArray(value: string): void {
    this.todoArray.push(value);
  }
}
