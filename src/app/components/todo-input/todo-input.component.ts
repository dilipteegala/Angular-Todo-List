import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../classes/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  onEnter(Todo: string) { this.todoText = Todo;}

  public todoText: string;

  constructor(private todoService: TodoService) {
    this.todoText = '';
  }
 

  ngOnInit() {
  }

  private addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
    
  }
 
}

