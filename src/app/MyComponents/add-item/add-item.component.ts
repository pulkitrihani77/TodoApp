import { Component, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter()
  title:string | undefined
  desc:string | undefined

  onSubmit(){
    const todo = {
      sno : 8,
      title: this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}
