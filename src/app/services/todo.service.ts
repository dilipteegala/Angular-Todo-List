import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { checkAndUpdateNode } from '@angular/core/src/view/view';
@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, ""),
     
    ];

    this.nextId = 0;
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }
 

  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo)=> todo.id != id);
  }


  
}
