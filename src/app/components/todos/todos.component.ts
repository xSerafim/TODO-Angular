import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];

  inputTodo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ];
  }

  toggleDone (id: number): void {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo (id: number): void {
    this.todos = this.todos.filter((_v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
