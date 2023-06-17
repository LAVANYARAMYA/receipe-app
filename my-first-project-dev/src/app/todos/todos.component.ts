import { Component } from '@angular/core';

type Todo = { id: number; item: string; done: boolean };

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todo: Todo = { id: -Infinity, item: '', done: false };
  todos: Todo[] = [
    { id: 1, item: 'Milk', done: true },
    { id: 2, item: 'Chocolate', done: true },
    { id: 3, item: 'Icecream', done: false },
  ];

  addTodo() {
    this.todo.id = this.todos.length + 1;
    this.todos.push(this.todo);
  }

  toggleDone(todo: Todo) {
    console.log(todo);
    // this.todos.filter((td) => td.id === todo.id)[0].done = !todo.done;
    (this.todos.find((td) => td.id === todo.id) as Todo).done = !todo.done;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((td) => td.id !== todo.id);
  }
}
