import { CommonModule, NgClass } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddItemComponent } from "../add-item/add-item.component";
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddItemComponent,FormsModule,NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  
  todos:Todo[]
  localItem:string | null = null
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem("todos");
      console.log(this.localItem);
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      this.todos = [];
    }
  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  getDoneTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
