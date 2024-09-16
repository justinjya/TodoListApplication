import { Component, Input } from '@angular/core';
import { Task } from '@models/task.model';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() task: Task = {id: 1, title: 'Task', description: 'Description'};
}
