import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { TodoItemComponent } from '@components/todo-item/todo-item.component';
import { AddTaskModalComponent } from '@components/add-task-modal/add-task-modal.component';
import { TasksService } from '@services/tasks/tasks.service';
import { Task } from '@models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TodoItemComponent, AddTaskModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks: Task[] = this.tasksService.tasks;
  isModalOpen = false;

  constructor(private tasksService: TasksService) {}

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
