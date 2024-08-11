import { Component,Input,Output } from '@angular/core';
import { Todo } from '../../Todo';
import { EventEmitter } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule,NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!:Todo;
  @Input() i:number | undefined
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone:EventEmitter<Todo> = new EventEmitter();
  deleteTask(todo:Todo){
    this.todoDelete.emit(todo);
  }
  doneTodo(todo:Todo){
    console.log("done");
    this.todoDone.emit(todo);
  }
}
